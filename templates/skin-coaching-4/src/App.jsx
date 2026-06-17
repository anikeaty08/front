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
      

<nav className="absolute top-0 w-full px-6 py-6 z-10 flex justify-center md:justify-start max-w-6xl mx-auto left-0 right-0">
<a className="font-sans text-xs font-semibold tracking-tighter uppercase text-stone-900" href="#">BLANCA SPOŁOWICZ</a>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 space-y-8 text-center md:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    Konsultacje Online
                </div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-stone-900">
                    Odzyskaj spokój i pełną kontrolę nad swoją skórą. <span className="italic text-stone-600 font-medium">Raz na zawsze.</span>
</h1>
<p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Zapomnij o metodzie prób i błędów. Skorzystaj z unikalnej metody Skin Coachingu, która łączy wiedzę akademicką z psychologicznym wsparciem w zmianie nawyków.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors text-sm" href="#offer">
                        Zamów Skin Coaching
                    </a>
</div>
</div>
<div className="flex-1 w-full relative z-10">

<div className="relative w-full aspect-[4/5] sm:aspect-video md:aspect-square lg:aspect-[4/3] bg-stone-200 rounded-3xl overflow-hidden shadow-sm border border-stone-200/50 flex items-center justify-center group cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-tr from-[#E6E4DD] to-[#F5F4F0]"></div>
<div className="relative z-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-stone-900 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
<span className="text-xs font-medium px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-stone-800 shadow-sm">
                            Intro Wideo
                        </span>
<span className="text-xs font-medium px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white shadow-sm">
                            0:30
                        </span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-stone-100/50 border-y border-stone-200/50">
<div className="max-w-3xl mx-auto text-center space-y-12">
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
                Masz dość testowania kolejnych produktów, które nie działają?
            </h2>
<div className="grid gap-4 text-left">

<div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm md:text-base text-stone-700 leading-relaxed font-medium">Chaos informacyjny i sprzeczne rady w internecie, przez które nie wiesz, co jest naprawdę dobre dla Twojej cery.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm md:text-base text-stone-700 leading-relaxed font-medium">Poczucie wstydu i frustracji stanem cery, które odbiera Ci pewność siebie w relacjach osobistych i zawodowych.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm md:text-base text-stone-700 leading-relaxed font-medium">Wydawanie pieniędzy na przypadkowe kosmetyki, które w najlepszym razie nie dają efektów, a w najgorszym – pogarszają sprawę.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 order-2 md:order-1 relative">
<div className="aspect-[4/5] bg-stone-200 rounded-3xl overflow-hidden shadow-sm relative">
<div className="absolute inset-0 bg-gradient-to-b from-[#EAE8E2] to-[#D5D3CC]"></div>
<div className="absolute inset-0 flex items-center justify-center text-stone-400/50">
<iconify-icon className="text-6xl" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F3F1EC] rounded-full -z-10"></div>
</div>
<div className="flex-1 order-1 md:order-2 space-y-6">
<span className="font-sans text-xs font-semibold tracking-wider uppercase text-stone-500">Unikalna Metoda</span>
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
                    Wiedza akademicka <br/><span className="italic text-stone-600 font-medium">spotyka coaching.</span>
</h2>
<div className="w-12 h-px bg-stone-300"></div>
<p className="font-sans text-base text-stone-600 leading-relaxed">
                    Jako wykładowca i ekspert z 10-letnim stażem, nie daję Ci tylko listy produktów. Uczę Cię rozumieć Twoją skórę. 
                </p>
<p className="font-sans text-base text-stone-600 leading-relaxed">
                    To głęboki proces zmiany nawyków, który daje wymierne efekty na lata, a nie tylko chwilową poprawę. Łączymy twardą wiedzę kosmetologiczną z empatycznym wsparciem psychologicznym.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-stone-50 rounded-t-[2.5rem] md:rounded-t-[4rem]" id="offer">
<div className="max-w-4xl mx-auto text-center space-y-16">
<div className="space-y-4">
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                    Program Skin Coaching Online
                </h2>
<p className="font-sans text-stone-400 text-base max-w-lg mx-auto">
                    Kompleksowy, 3-miesięczny proces transformacji Twojej skóry i nawyków pielęgnacyjnych.
                </p>
</div>

<div className="bg-stone-800 rounded-3xl p-8 md:p-12 text-left border border-stone-700/50 shadow-sm max-w-2xl mx-auto">
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-stone-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-stone-200">3 indywidualne sesje coachingowe (online).</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-stone-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-stone-200">Spersonalizowany plan pielęgnacji i suplementacji.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-stone-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-stone-200">Edukacja w zakresie nawyków i prawdziwych potrzeb Twojej skóry.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-xl text-stone-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-stone-200">Pełne wsparcie merytoryczne i emocjonalne w trakcie procesu.</span>
</li>
</ul>
<div className="pt-8 border-t border-stone-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-1">Jasna inwestycja</p>
<p className="text-xl md:text-2xl font-serif font-semibold tracking-tight">[Wpisz Cenę] zł <span className="text-sm font-sans text-stone-400 font-normal">za pełny proces</span></p>
</div>
<a className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-colors text-sm" href="#">
                        Zamów Skin Coaching
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
<div className="w-20 h-20 rounded-full bg-stone-200 overflow-hidden border border-stone-100 shadow-sm relative flex items-center justify-center">
<div className="absolute inset-0 bg-[#E6E4DD]"></div>
<span className="relative z-10 font-serif text-xl text-stone-500">BS</span>
</div>
<div className="space-y-4 max-w-2xl">
<p className="font-serif text-xl md:text-2xl font-medium tracking-tight text-stone-900 leading-relaxed">
                    "Blanca Społowicz - pionierka Skin Coachingu w Polsce, autorka książek, wykładowca akademicki."
                </p>
<p className="font-sans text-sm md:text-base text-stone-600 leading-relaxed">
                    Ponad 10 lat doświadczenia w wyprowadzaniu najtrudniejszych przypadków skórnych. Moim celem jest edukacja i przywrócenie Twojej skórze naturalnej równowagi.
                </p>
</div>
<div className="flex items-center justify-center gap-8 pt-6 opacity-60 grayscale">

<div className="flex items-center gap-2 text-stone-800">
<iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Ekspert</span>
</div>
<div className="flex items-center gap-2 text-stone-800">
<iconify-icon className="text-2xl" icon="solar:book-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Autorka</span>
</div>
<div className="flex items-center gap-2 text-stone-800">
<iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Pionierka</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-200/50">
<div className="max-w-3xl mx-auto space-y-12">
<div className="text-center space-y-4">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-stone-900">Najczęstsze pytania</h2>
<p className="text-sm text-stone-500">Rozwiej swoje wątpliwości przed rozpoczęciem procesu.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-900 text-sm md:text-base">
<span>Dlaczego proces Skin Coachingu trwa aż 3 miesiące?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 px-6 pb-6 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Skóra potrzebuje czasu na przebudowę i adaptację do nowych, zdrowych nawyków. Naturalny cykl odnowy komórkowej naskórka to około 28 dni. Trzy pełne cykle to optymalny czas, by zdiagnozować problemy, wdrożyć spersonalizowany plan i zauważyć trwałą, stabilną różnicę w kondycji cery.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-900 text-sm md:text-base">
<span>Czym różni się konsultacja online od wizyty w klinice?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 px-6 pb-6 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Wizyty w klinice zazwyczaj skupiają się na doraźnych zabiegach gabinetowych. W Skin Coachingu online pracujemy przede wszystkim nad Twoją codzienną, domową rutyną, zrozumieniem składników i nawykami. To codzienna pielęgnacja stanowi 80% sukcesu w drodze do zdrowej skóry, a format online pozwala na ciągłe wsparcie w Twoim naturalnym środowisku.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-100/50 text-center">
<div className="max-w-3xl mx-auto space-y-8">
<h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 leading-tight">
                Zrób pierwszy krok do <br/><span className="italic text-stone-600">zdrowej skóry.</span>
</h2>
<p className="font-sans text-base text-stone-600 max-w-lg mx-auto pb-4">
                Przestań zgadywać. Otrzymaj precyzyjny plan i wsparcie eksperta.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors text-base shadow-sm" href="#offer">
                Zamów Skin Coaching
            </a>
</div>
</section>

<footer className="py-12 px-6 border-t border-stone-200/60 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<span className="font-sans text-xs font-semibold tracking-tighter uppercase text-stone-400">BLANCA SPOŁOWICZ</span>
<div className="flex gap-6 text-xs text-stone-500 font-medium">
<a className="hover:text-stone-900 transition-colors" href="#">Regulamin</a>
<a className="hover:text-stone-900 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-stone-900 transition-colors" href="#">Kontakt</a>
</div>
</div>
</footer>

    </>
  );
}
