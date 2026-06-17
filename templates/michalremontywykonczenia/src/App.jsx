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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-zinc-900 text-white flex items-center justify-center rounded-md h-8 w-8">
<span className="font-semibold tracking-tighter text-sm">MC</span>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-900 group-hover:text-zinc-600 transition-colors">Wnętrza</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-zinc-900 transition-colors" href="#proces">Jak pracujemy</a>
<a className="hover:text-zinc-900 transition-colors" href="#realizacje">Realizacje</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" href="#kontakt">
                Sprawdź termin
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium mb-8">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                Ostrów Mazowiecka • Ostrołęka • Białystok
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                Wykończenia wnętrz bez stresu i niespodzianek.
            </h1>
<p className="text-base md:text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Kompleksowe remonty od A do Z. 3-osobowa, zgrana ekipa. Bierzemy na siebie planowanie, materiały i czystość. Ty odbierasz gotowe mieszkanie.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="cta-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" href="#kontakt">
                    Zadzwoń i sprawdź dostępny termin
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-all" href="#oferta">
                    Co dokładnie robimy?
                </a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-200/60 flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-400">
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Gwarancja ceny z umowy</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Czystość po każdym dniu pracy</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Własny sprzęt i materiały robocze</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-100/50 border-y border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Znasz te historie o "fachowcach"?</h2>
<p className="text-base text-zinc-500">Większość stresu przy remoncie wynika z braku komunikacji i niedotrzymywania słowa. U nas zasady są inne.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Opóźnienia i wymówki</h3>
<p className="text-sm text-zinc-500 mb-4">"Panie, hurtownia zawiodła, będę za tydzień."</p>
<div className="h-px w-full bg-zinc-100 my-4"></div>
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-600 text-lg mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="font-medium">My trzymamy się harmonogramu. Wchodzimy i pracujemy ciągiem do końca.</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Ukryte koszty</h3>
<p className="text-sm text-zinc-500 mb-4">"Tego nie było w wycenie, to będzie ekstra płatne."</p>
<div className="h-px w-full bg-zinc-100 my-4"></div>
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-600 text-lg mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="font-medium">Wycena jest ostateczna na zakres z umowy. Bez niespodzianek na koniec.</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:trash-bin-trash-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Bałagan na budowie</h3>
<p className="text-sm text-zinc-500 mb-4">Gruz w salonie, pety na balkonie, brudne klatki schodowe.</p>
<div className="h-px w-full bg-zinc-100 my-4"></div>
<div className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-600 text-lg mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="font-medium">Codziennie sprzątamy po sobie. Zabezpieczamy części wspólne budynku.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="oferta">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2 block">Co robimy</span>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-zinc-900 max-w-2xl">Kompleksowe wykończenia. Wchodzimy w stan deweloperski, oddajemy dom do życia.</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-zinc-200/60 shadow-sm flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="h-12 w-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Wykończenia "pod klucz" od A do Z</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Przejmujemy całkowicie plac budowy. Prowadzimy instalacje, kładziemy podłogi, malujemy, montujemy listwy i oświetlenie. Nie musisz szukać 5 różnych ekip do każdego zadania.</p>
<ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Przeróbki hydrauliczne i elektryczne</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Układanie paneli i desek</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Zabudowy G-K</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Malowanie natryskowe i tradycyjne</li>
</ul>
</div>
<div className="w-full md:w-2/5 aspect-square md:aspect-auto md:h-full bg-zinc-100 rounded-2xl border border-zinc-200/50 flex items-center justify-center overflow-hidden relative group">
<iconify-icon className="text-4xl text-zinc-300 group-hover:scale-110 transition-transform duration-500" icon="solar:gallery-wide-linear"></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-zinc-500 text-center border border-zinc-200/50">Miejsce na zdjęcie Twojej realizacji</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
<div className="h-12 w-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Łazienki</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Kompleksowy remont łazienki. Od hydroizolacji, przez precyzyjne układanie płytek (również wielkoformatowych), cięcie pod kątem 45 stopni, aż po biały montaż.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
<div className="h-12 w-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Gładzie i Tynki</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Wyprowadzamy ściany i sufity "na lustro". Stosujemy nowoczesne materiały i agregaty, co skraca czas pracy i gwarantuje idealnie gładką powierzchnię pod malowanie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50" id="proces">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Jak wygląda współpraca krok po kroku</h2>
<p className="text-base text-zinc-400">Zero zgadywania. Prowadzimy Cię za rękę przez cały proces, żebyś miał pełną kontrolę i święty spokój.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative">
<div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-zinc-800"></div>
<div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-medium text-sm mb-6 relative z-10">1</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Dzwonisz lub piszesz</h3>
<p className="text-sm text-zinc-400">Sprawdzamy, czy mamy wolny termin, który Ci odpowiada. Rozmawiamy o Twoich oczekiwaniach.</p>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-zinc-800"></div>
<div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-medium text-sm mb-6 relative z-10">2</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Oględziny i wycena</h3>
<p className="text-sm text-zinc-400">Przyjeżdżamy na miejsce, mierzymy i ustalamy zakres. Dostajesz czytelną wycenę na papierze (lub mailu).</p>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-zinc-800"></div>
<div className="h-12 w-12 rounded-full bg-white text-zinc-900 border border-zinc-200 flex items-center justify-center font-medium text-sm mb-6 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]">3</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Wchodzimy i robimy</h3>
<p className="text-sm text-zinc-400">Podpisujemy prostą umowę i zaczynamy. Jesteśmy w stałym kontakcie, raportujemy postępy.</p>
</div>

<div className="relative">
<div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-medium text-sm mb-6 relative z-10">4</div>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Odbiór i porządek</h3>
<p className="text-sm text-zinc-400">Oddajemy Ci czyste, wykończone wnętrze gotowe do meblowania. Płacisz za efekt końcowy z umowy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200/50">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200/60">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Z kim pracujemy najlepiej</h3>
</div>
<ul className="space-y-4 text-sm text-zinc-600">
<li className="flex gap-3">
<span className="text-zinc-300 mt-0.5">•</span>
<span>Cenisz konkret i chcesz jasnych zasad współpracy.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-300 mt-0.5">•</span>
<span>Zależy Ci na jakości i nie musisz ciągle patrzeć ekipie na ręce.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-300 mt-0.5">•</span>
<span>Rozumiesz, że dobra chemia budowlana i solidne wykonanie kosztują.</span>
</li>
</ul>
</div>
<div className="md:border-l md:border-zinc-200/60 md:pl-12">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Dla kogo to nie jest</h3>
</div>
<ul className="space-y-4 text-sm text-zinc-600">
<li className="flex gap-3">
<span className="text-zinc-300 mt-0.5">•</span>
<span>Szukasz "najtańszego Pana Kazia", u którego jedynym kryterium jest najniższa cena.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-300 mt-0.5">•</span>
<span>Chcesz zrobić remont "po łebkach", byle szybciej na wynajem (nie podpisujemy się pod fuszerką).</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Co mówią o nas klienci</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Pierwsza ekipa, po której nie musiałem sprzątać przez tydzień. Wszystko zrobione zgodnie z planem i w terminie. Michał ogarnia temat jak mało kto w tej branży."</p>
<div className="text-sm font-medium text-zinc-900">Tomasz, Białystok</div>
<div className="text-xs text-zinc-500">Kompleksowe wykończenie mieszkania</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Zleciliśmy łazienkę. Płytki położone idealnie, bardzo dobry kontakt na każdym etapie. Cena z wyceny nie zmieniła się ani o złotówkę na końcu. Polecam."</p>
<div className="text-sm font-medium text-zinc-900">Katarzyna, Ostrów Maz.</div>
<div className="text-xs text-zinc-500">Remont łazienki</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Mieliśmy przykre doświadczenia z poprzednimi majstrami. Pan Michał uratował sytuację, wszedł, poprawił błędy poprzedników i dokończył gładzie perfekcyjnie."</p>
<div className="text-sm font-medium text-zinc-900">Marek, Ostrołęka</div>
<div className="text-xs text-zinc-500">Gładzie i malowanie</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="kontakt">

<div className="absolute inset-0 bg-zinc-900"></div>
<div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-30 z-0"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
                        Kalendarz na ten kwartał się zapełnia
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Sprawdźmy, czy mamy dla Ciebie termin.</h2>
<p className="text-base text-zinc-500 mb-8">Zostaw kontakt. Oddzwonimy w ciągu 24h, porozmawiamy wstępnie o zakresie i powiemy jasno, czy i kiedy możemy podjąć się Twojego zlecenia.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-zinc-700">
<div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400 font-medium">Zadzwoń bezpośrednio</div>
<a className="text-lg font-medium tracking-tight text-zinc-900 hover:text-blue-600 transition-colors" href="tel:+48000000000">+48 000 000 000</a>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-700">
<div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400 font-medium">Napisz e-mail</div>
<a className="text-base font-medium tracking-tight text-zinc-900 hover:text-blue-600 transition-colors" href="mailto:kontakt@mcwnetrza.pl">kontakt@mcwnetrza.pl</a>
</div>
</div>
</div>
</div>

<div className="w-full md:w-[400px] bg-zinc-50 p-6 md:p-8 rounded-2xl border border-zinc-200/60">
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="name">Imię i nazwisko</label>
<input className="w-full px-3 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="phone">Numer telefonu</label>
<input className="w-full px-3 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all" id="phone" placeholder="+48 --- --- ---" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="message">Krótki opis (co jest do zrobienia?)</label>
<textarea className="w-full px-3 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all resize-none" id="message" placeholder="Np. wykończenie mieszkania 50m2, stan deweloperski..." rows="3"></textarea>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 shadow-sm" type="button">
                            Oddzwonimy i powiemy czy mamy termin
                        </button>
<p className="text-[10px] text-zinc-400 text-center mt-3">Przesyłając formularz akceptujesz politykę prywatności.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-zinc-900 text-white flex items-center justify-center rounded-md h-8 w-8">
<span className="font-semibold tracking-tighter text-sm">MC</span>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-900">Michał Ciesielski Usługi Remontowo-Wykończeniowe</span>
</div>
<div className="text-xs text-zinc-500">
                Działamy na terenie: Ostrów Mazowiecka • Ostrołęka • Białystok
            </div>
<div className="text-xs text-zinc-400">
                © 2023 Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
