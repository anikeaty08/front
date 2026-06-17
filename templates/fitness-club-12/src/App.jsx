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



        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('bg-[#051626]/95', 'backdrop-blur-md', 'border-b', 'border-white/5');
                header.classList.remove('absolute');
                header.classList.add('fixed');
            } else {
                header.classList.remove('bg-[#051626]/95', 'backdrop-blur-md', 'border-b', 'border-white/5', 'fixed');
                header.classList.add('absolute');
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
      

<header className="absolute top-0 inset-x-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-24">
<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col items-center" href="#">
<iconify-icon className="text-3xl text-[#94213E] mb-1" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="font-oswald font-medium tracking-tight text-xl uppercase text-white leading-none">Strefa Zdrowia</span>
</a>
</div>
<nav className="hidden lg:flex space-x-8 items-center">
<a className="text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors uppercase" href="#">Cennik</a>
<a className="text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors uppercase" href="#">Oferta Premium</a>
<a className="text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors uppercase" href="#">Trening EMS</a>
<a className="text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors uppercase" href="#">Body Space</a>
<a className="text-base font-medium tracking-wide text-[#94213E] transition-colors uppercase" href="#">Sztuki Walki</a>
<a className="text-base font-medium tracking-wide text-white hover:text-gray-300 transition-colors uppercase" href="#">Grafik Zajęć</a>
</nav>
<div className="hidden lg:flex items-center">
<a className="bg-[#94213E] text-white text-base font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#7a1b33] transition-all duration-300" href="#zapisy">
                        Dołącz teraz
                    </a>
</div>
<div className="lg:hidden flex items-center">
<button className="text-white hover:text-gray-300 focus:outline-none">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-48 pb-32 bg-[#051626] overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1555597673-61cd1e1e08ce?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="bg-gradient-to-t from-[#051626] via-[#051626]/80 to-transparent absolute inset-0"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
<div className="border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm bg-white/5">
<span className="text-sm font-medium tracking-widest text-white uppercase">Sporty Walki</span>
</div>
<h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tight text-white drop-shadow-lg mb-6">
                Boks &amp; K1
            </h1>
<p className="text-xl md:text-2xl text-gray-300 font-normal max-w-3xl leading-relaxed">
                Łączymy rozwój fizyczny z nauką skutecznych technik walki. <br className="hidden md:block"/>
                Treningi dla każdego – popraw kondycję, sylwetkę i pewność siebie.
            </p>
</div>
</section>

<section className="py-24 bg-white text-center px-4">
<div className="max-w-4xl mx-auto space-y-6">
<h2 className="font-oswald text-4xl md:text-5xl font-medium text-gray-900 tracking-tight uppercase">
                Sztuki Walki w Strefie Zdrowia
            </h2>
<p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Zapraszamy na profesjonalne zajęcia sztuk walki. Nasza oferta skierowana jest do osób w każdym wieku i na każdym poziomie zaawansowania – zarówno dla początkujących, jak i doświadczonych zawodników.
            </p>
<p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                Treningi to doskonały sposób na poprawę kondycji fizycznej, redukcję stresu oraz budowanie dyscypliny w przyjaznej i motywującej atmosferze.
            </p>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
<div className="w-full lg:w-1/2 flex flex-col gap-8">
<div className="w-14 h-14 bg-[#94213E] rounded-full flex items-center justify-center shadow-lg shadow-[#94213E]/20">
<iconify-icon className="text-2xl text-white" icon="solar:fire-linear"></iconify-icon>
</div>
<h2 className="font-oswald text-4xl md:text-5xl font-medium text-gray-900 tracking-tight uppercase">
                        K1 – Siła, Technika i Wytrzymałość
                    </h2>
<p className="text-lg text-gray-600 leading-relaxed">
                        Treningi K1 to dynamiczne zajęcia łączące uderzenia rękami i nogami z intensywnym przygotowaniem kondycyjnym. To idealna propozycja dla osób, które chcą rozwijać sprawność fizyczną i nauczyć się sztuk walki.
                    </p>
<div className="space-y-4">
<h3 className="font-oswald text-2xl font-medium text-gray-900 tracking-tight uppercase mt-4">Dla kogo są zajęcia?</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#94213E]" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Dzieci (7–12 lat)</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#94213E]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Młodzież i dorośli</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#94213E]" icon="solar:user-heart-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Kobiety</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#94213E]" icon="solar:bolt-linear"></iconify-icon>
<span className="text-gray-700 font-medium">Każdy poziom zaawansowania</span>
</div>
</div>
</div>
<div className="space-y-4 mt-4">
<h3 className="font-oswald text-2xl font-medium text-gray-900 tracking-tight uppercase">Co oferują treningi?</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#94213E] flex-shrink-0 mt-2.5"></span>
<span className="text-lg text-gray-600">Naukę technik uderzeń i kombinacji</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#94213E] flex-shrink-0 mt-2.5"></span>
<span className="text-lg text-gray-600">Rozwój siły, szybkości i wytrzymałości</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#94213E] flex-shrink-0 mt-2.5"></span>
<span className="text-lg text-gray-600">Poprawę koordynacji i refleksu</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#94213E] flex-shrink-0 mt-2.5"></span>
<span className="text-lg text-gray-600">Sparingi i elementy przygotowania sportowego</span>
</li>
</ul>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col gap-6">
<div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-[#94213E]" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="font-oswald text-2xl font-medium text-gray-900 tracking-tight uppercase">Harmonogram K1</h3>
</div>
<ul className="space-y-5 text-lg">
<li className="flex justify-between items-center border-b border-gray-50 pb-4">
<span className="text-gray-600">Grupa początkująca</span>
<span className="font-medium text-gray-900 text-right">Pon &amp; Śr — 19:00</span>
</li>
<li className="flex justify-between items-center border-b border-gray-50 pb-4">
<span className="text-gray-600">Grupa zaawansowana</span>
<span className="font-medium text-gray-900 text-right">Wt &amp; Czw — 19:00</span>
</li>
<li className="flex justify-between items-center border-b border-gray-50 pb-4">
<span className="text-gray-600">Grupa kobiet</span>
<span className="font-medium text-gray-900 text-right">Środa — 18:00</span>
</li>
<li className="flex justify-between items-center">
<span className="text-gray-600">Grupa dzieci (7–12 lat)</span>
<span className="font-medium text-gray-900 text-right">Wt &amp; Czw — 17:00</span>
</li>
</ul>
</div>
<div className="bg-[#141b24] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
<div className="absolute -right-10 -top-10 opacity-5">
<iconify-icon className="text-9xl" icon="solar:shield-user-linear"></iconify-icon>
</div>
<h3 className="font-oswald text-xl text-gray-400 tracking-widest uppercase mb-2 relative z-10">Twój Trener</h3>
<h4 className="font-oswald text-3xl font-medium text-white tracking-tight uppercase mb-4 relative z-10">Kamil Rościński</h4>
<p className="text-gray-300 leading-relaxed relative z-10">
                            Wielokrotny mistrz i doświadczony szkoleniowiec, który z pasją rozwija umiejętności podopiecznych. Przez 10 lat był członkiem kadry narodowej, zdobywając cenne doświadczenie na arenie krajowej i międzynarodowej.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#141b24] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
<div className="w-full lg:w-1/2 flex flex-col gap-8">
<div className="w-14 h-14 bg-[#94213E] rounded-full flex items-center justify-center shadow-lg shadow-[#94213E]/20">
<iconify-icon className="text-2xl text-white" icon="solar:target-linear"></iconify-icon>
</div>
<h2 className="font-oswald text-4xl md:text-5xl font-medium text-white tracking-tight uppercase">
                        Boks – Klasyka Sportów Walki
                    </h2>
<p className="text-lg text-gray-300 leading-relaxed">
                        Boks to jedna z najbardziej cenionych dyscyplin sportowych, rozwijająca siłę, szybkość i wytrzymałość. Treningi są dostosowane do każdego poziomu zaawansowania i stanowią doskonałą formę aktywności fizycznej.
                    </p>
<div className="space-y-4 mt-4">
<h3 className="font-oswald text-2xl font-medium text-white tracking-tight uppercase">Co obejmują zajęcia?</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-300">Naukę techniki bokserskiej od podstaw</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-300">Intensywny trening na workach i tarczach</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-300">Ćwiczenia poprawiające kondycję i refleks</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-300">Elementy pracy nóg i koordynacji ruchowej</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-gray-300">Trening siłowy i wytrzymałościowy (stacyjny)</span>
</li>
</ul>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col gap-6">
<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-[#94213E]" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="font-oswald text-2xl font-medium text-white tracking-tight uppercase">Harmonogram Boksu</h3>
</div>
<ul className="space-y-5 text-lg">
<li className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-gray-300">Grupa otwarta (wszystkie poziomy)</span>
<span className="font-medium text-white text-right">Pon &amp; Śr — 20:30</span>
</li>
</ul>
</div>
<div className="bg-white/5 border border-[#94213E]/30 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden backdrop-blur-sm">
<div className="absolute -right-6 -top-6 opacity-10">
<iconify-icon className="text-9xl" icon="solar:star-ring-linear"></iconify-icon>
</div>
<h3 className="font-oswald text-xl text-gray-400 tracking-widest uppercase mb-2 relative z-10">Twój Trener</h3>
<h4 className="font-oswald text-3xl font-medium text-white tracking-tight uppercase mb-4 relative z-10">Jakub „Harry” Hrapek</h4>
<p className="text-gray-300 leading-relaxed relative z-10">
                            Doświadczony trener, który skutecznie wspiera rozwój zarówno początkujących, jak i zaawansowanych zawodników. Skupia się na detalach technicznych i mądrym budowaniu formy.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-50 rounded-[2rem] p-10 hover:bg-gray-100/80 transition-colors border border-gray-100">
<div className="w-12 h-12 bg-[#94213E]/10 rounded-full flex items-center justify-center mb-6 text-[#94213E]">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<h3 className="font-oswald text-3xl font-medium text-gray-900 tracking-tight uppercase mb-4">Treningi Indywidualne</h3>
<p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Oferujemy również treningi personalne 1:1 z naszymi trenerami. To idealna opcja dla osób, które chcą osiągnąć maksymalne efekty w najkrótszym czasie, pracując nad konkretnymi elementami techniki pod okiem specjalisty.
                    </p>
<div className="flex items-center gap-3 text-[#94213E] font-medium mt-auto pt-4 border-t border-gray-200">
<iconify-icon className="text-xl" icon="solar:info-circle-linear"></iconify-icon>
<span>Szczegóły dostępne w recepcji klubu.</span>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-10 hover:bg-gray-100/80 transition-colors border border-gray-100">
<div className="w-12 h-12 bg-[#94213E]/10 rounded-full flex items-center justify-center mb-6 text-[#94213E]">
<iconify-icon className="text-2xl" icon="solar:backpack-linear"></iconify-icon>
</div>
<h3 className="font-oswald text-3xl font-medium text-gray-900 tracking-tight uppercase mb-6">Wyposażenie i Organizacja</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-lg text-gray-600">Treningi odbywają się przy ul. Krakowskiej 136.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:dumbbell-linear"></iconify-icon>
<span className="text-lg text-gray-600">Zapewniamy profesjonalny sprzęt treningowy na sali.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:shield-warning-linear"></iconify-icon>
<span className="text-lg text-gray-600">Zalecamy posiadanie własnych rękawic i ochraniaczy (higiena i komfort).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#94213E] flex-shrink-0 mt-0.5" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-lg text-gray-600">Kameralne grupy ćwiczeniowe (maksymalnie do 25 osób).</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-block bg-[#94213E] px-5 py-2 rounded-full text-xs font-medium tracking-widest text-white uppercase mb-6 shadow-sm">
                    Inwestycja w siebie
                </div>
<h2 className="font-oswald text-4xl md:text-5xl font-medium text-gray-900 tracking-tight uppercase">
                    Cennik Zajęć
                </h2>
<p className="text-xl text-gray-500 mt-4">Karnety obowiązują na zajęcia z Boksu oraz K1.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<h3 className="font-oswald text-xl text-gray-500 tracking-widest uppercase mb-4">Pojedyncze</h3>
<div className="flex items-end justify-center gap-1 mb-2">
<span className="text-5xl font-medium text-gray-900 tracking-tight">30</span>
<span className="text-xl text-gray-500 mb-1">zł</span>
</div>
<p className="text-sm text-gray-400 mt-2">1 wejście na zajęcia</p>
</div>

<div className="bg-[#141b24] rounded-[2rem] p-8 border border-[#1d2733] shadow-lg flex flex-col items-center text-center transform md:-translate-y-4">
<div className="absolute top-0 inset-x-0 h-1 bg-[#94213E] rounded-t-[2rem]"></div>
<h3 className="font-oswald text-xl text-gray-400 tracking-widest uppercase mb-4 mt-2">Pakiet Mniejszy</h3>
<div className="flex items-end justify-center gap-1 mb-2">
<span className="text-6xl font-medium text-white tracking-tight">100</span>
<span className="text-xl text-gray-400 mb-2">zł</span>
</div>
<p className="text-base font-medium text-[#94213E] mt-2">4 wejścia</p>
<p className="text-sm text-gray-400 mt-1">Karnet ważny 1 miesiąc</p>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<h3 className="font-oswald text-xl text-gray-500 tracking-widest uppercase mb-4">Pakiet Pełny</h3>
<div className="flex items-end justify-center gap-1 mb-2">
<span className="text-5xl font-medium text-gray-900 tracking-tight">130</span>
<span className="text-xl text-gray-500 mb-1">zł</span>
</div>
<p className="text-base font-medium text-[#94213E] mt-2">8 wejść</p>
<p className="text-sm text-gray-400 mt-1">Karnet ważny 1 miesiąc</p>
</div>
</div>
<div className="mt-12 bg-white rounded-3xl p-6 border border-[#94213E]/20 text-center max-w-2xl mx-auto shadow-sm flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#94213E]/10 flex items-center justify-center flex-shrink-0 text-[#94213E]">
<iconify-icon className="text-xl" icon="solar:confetti-linear"></iconify-icon>
</div>
<p className="text-lg text-gray-700 font-medium">
<strong className="text-gray-900">Pierwszy trening jest darmowy</strong> dla osób, które nigdy wcześniej nie korzystały z usług naszego klubu!
                </p>
</div>
</div>
</section>

<section className="pb-24 bg-gray-50" id="zapisy">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#141b24] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between border border-[#1d2733] shadow-2xl">
<div className="w-full md:w-3/5 space-y-6">
<div className="inline-block bg-[#94213E] px-4 py-1.5 rounded-full text-xs font-medium tracking-widest text-white uppercase">
                        Rozpocznij przygodę
                    </div>
<h2 className="font-oswald text-4xl md:text-5xl font-medium text-white tracking-tight uppercase">
                        Dołącz do nas już dziś!
                    </h2>
<p className="text-xl text-gray-400 leading-relaxed max-w-md">
                        Niezależnie od poziomu zaawansowania – znajdziesz u nas miejsce dla siebie. Trenuj pod okiem profesjonalistów.
                    </p>
<ul className="space-y-3 pt-2 text-gray-300 text-lg">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#94213E] text-xl" icon="solar:smartphone-linear"></iconify-icon> Zapisz się przez aplikację mobilną
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#94213E] text-xl" icon="solar:phone-linear"></iconify-icon> Zadzwoń do nas
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#94213E] text-xl" icon="solar:map-point-linear"></iconify-icon> Odwiedź naszą recepcję
                        </li>
</ul>
<p className="text-sm text-gray-500 pt-4 border-t border-white/10">
                        W przypadku osób niepełnoletnich wymagana jest zgoda rodzica lub opiekuna.
                    </p>
</div>
<div className="w-full md:w-2/5 flex flex-col gap-6">
<a className="w-full inline-flex justify-center items-center gap-3 bg-white text-[#141b24] px-8 py-5 rounded-full font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-lg" href="tel:+48795925155">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
                        +48 795 925 155
                    </a>
<div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
<div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
<div className="w-12 h-12 rounded-full bg-[#94213E]/20 flex items-center justify-center flex-shrink-0 text-[#94213E]">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-1">Lokalizacja</h3>
<p className="text-lg text-white font-medium">Strefa Zdrowia Sanok</p>
</div>
</div>
<p className="text-lg text-gray-300">ul. Krakowska 136<br/>38-500 Sanok</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#051626] text-white pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex flex-col items-start mb-8">
<iconify-icon className="text-[40px] text-[#94213E] mb-2" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="font-oswald font-medium tracking-tight text-2xl uppercase text-white leading-none">Strefa Zdrowia</span>
</div>
<h4 className="font-oswald text-xl tracking-wide uppercase mb-6 text-gray-200">Zaobserwuj nas</h4>
<div className="flex space-x-3">
<a className="text-gray-400 hover:text-white transition-colors w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-[#94213E] hover:border-transparent" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-[#94213E] hover:border-transparent" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-oswald text-xl tracking-wide uppercase mb-6 text-gray-200">Oferta</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Cennik</a></li>
<li><a className="hover:text-white transition-colors" href="#">Oferta Premium</a></li>
<li><a className="hover:text-white transition-colors" href="#">Grafik zajęć</a></li>
</ul>
</div>

<div>
<h4 className="font-oswald text-xl tracking-wide uppercase mb-6 text-gray-200">Szybkie linki</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Trening EMS</a></li>
<li><a className="hover:text-white transition-colors text-[#94213E]" href="#">Sztuki Walki</a></li>
<li><a className="hover:text-white transition-colors" href="#">Galeria obiektu</a></li>
</ul>
</div>

<div>
<h4 className="font-oswald text-xl tracking-wide uppercase mb-6 text-gray-200">Masz pytania?</h4>
<ul className="space-y-5 text-base text-gray-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-500 flex-shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>ul. Krakowska 136<br/>Sanok, Polska</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-gray-500 flex-shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+48795925155">+48 795 925 155</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-gray-500 flex-shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:kontakt@strefazdrowia.pl">kontakt@strefazdrowia.pl</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">Strefa Zdrowia 2024. Wszelkie prawa zastrzeżone.</p>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Polityka prywatności</a>
</div>
</div>
</footer>


    </>
  );
}
