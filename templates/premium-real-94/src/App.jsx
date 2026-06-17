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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-900">
                    Fromborska 2
                </div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800" href="#kontakt">
                    Biuro Sprzedaży Inwestycji Fromborska 2
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative w-full overflow-hidden bg-[#FAFAFA] pt-20 pb-24 md:pt-32 md:pb-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-2xl">
<span className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 mb-6">
                        Fromborska 2
                    </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-zinc-900 leading-[1.1]">
                        Nowy wymiar prestiżu w Elbląg
                    </h1>
<div className="mt-8 space-y-6 text-base md:text-lg text-zinc-500 leading-relaxed font-light">
<p>
                            Fromborska 2 to inwestycja deweloperska klasy premium, która wyznacza nowy standard budownictwa mieszkaniowego w Elblągu. To projekt dopracowany architektonicznie, funkcjonalnie i estetycznie – zaprojektowany dla osób, które oczekują więcej: więcej jakości, więcej komfortu, więcej prestiżu.
                        </p>
<div className="border-l border-zinc-300 pl-6 mt-8 space-y-2">
<p className="text-zinc-900 font-medium text-lg">
                                To nie jest kolejny budynek mieszkalny.
                            </p>
<p className="text-zinc-900 font-medium text-lg">
                                To świadomie zaprojektowana przestrzeń do życia.
                            </p>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800" href="#kontakt">
                            Zapraszamy do Biura Sprzedaży
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative w-full aspect-[4/5] rounded-2xl bg-zinc-100 overflow-hidden border border-zinc-200 shadow-sm">
<img alt="Architektura" className="h-full w-full object-cover grayscale-[20%] opacity-90 transition-transform duration-1000 hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-zinc-900">
                        BUDYNEK 1 – funkcjonalność, która pracuje na Twoją wygodę
                    </h2>
<p className="mt-6 text-base text-zinc-500 leading-relaxed font-light">
                        W pierwszym etapie powstaje 55 mieszkań, zaprojektowanych w przemyślanych i poszukiwanych metrażach:
                    </p>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-zinc-200 p-6 bg-[#FAFAFA] flex flex-col justify-between hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:home-angle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-900 font-medium">40 mieszkań o powierzchni 39–40 m²</p>
<p className="text-xs text-zinc-500 mt-2">idealne jako pierwsze mieszkanie lub inwestycja kapitałowa</p>
</div>
<div className="rounded-xl border border-zinc-200 p-6 bg-[#FAFAFA] flex flex-col justify-between hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:home-angle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-900 font-medium">5 mieszkań – 44,23 m²</p>
</div>
<div className="rounded-xl border border-zinc-200 p-6 bg-[#FAFAFA] flex flex-col justify-between hover:border-zinc-300 transition-colors">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:home-angle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-900 font-medium">5 mieszkań – 64,83 m²</p>
</div>
<div className="rounded-xl border border-zinc-200 p-6 bg-zinc-900 flex flex-col justify-between">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:star-linear" width="24"></iconify-icon>
<p className="text-sm text-white font-medium">5 apartamentów – 85,79 m²</p>
<p className="text-xs text-zinc-400 mt-2">(segment premium dla najbardziej wymagających)</p>
</div>
</div>
<div className="mt-10 space-y-4 text-sm text-zinc-500 leading-relaxed font-light">
<p>Każde mieszkanie posiada przestronny balkon, który stanowi naturalne przedłużenie części dziennej i prywatną strefę relaksu.</p>
<p>Układy zostały zaprojektowane w sposób maksymalizujący funkcjonalność – bez straty metrów na niepraktyczne ciągi komunikacyjne.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-zinc-900">
                Własność, która daje realną wartość
            </h2>
<p className="mt-6 text-base text-zinc-500 font-light">
                Fromborska 2 wyróżnia się przejrzystą i bezpieczną strukturą prawną.
            </p>
<p className="mt-2 text-sm text-zinc-400 font-medium uppercase tracking-widest">
                W inwestycji przewidziano:
            </p>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:garage-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                        36 zamykanych podwójnych garaży – każdy z oddzielną księgą wieczystą (23% VAT)
                    </p>
</div>
<div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                        24 komórki lokatorskie – zlokalizowane w garażach, również z odrębną KW
                    </p>
</div>
<div className="p-8 bg-white border border-zinc-200 rounded-2xl text-center">
<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:signpost-2-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Liczne zewnętrzne miejsca parkingowe – pełna własność, osobna księga wieczysta
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<p className="inline-block px-4 py-2 bg-zinc-100 rounded-full text-sm font-medium text-zinc-900">
                    To oznacza realny, wyodrębniony składnik majątku – bez udziałów i bez niejasnych zapisów.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl bg-zinc-100 overflow-hidden border border-zinc-200">
<img alt="Części wspólne" className="h-full w-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-zinc-900">
                        Części wspólne na poziomie, którego dotąd w Elblągu nie było
                    </h2>
<p className="mt-6 text-base text-zinc-500 font-light leading-relaxed">
                        Fromborska 2 to inwestycja, w której równie duży nacisk położono na jakość przestrzeni wspólnych.
                    </p>
<div className="mt-8 space-y-6">
<div className="flex gap-4">
<iconify-icon className="text-zinc-400 shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-600 leading-relaxed">
<span className="text-zinc-900 font-medium block mb-1">Reprezentacyjna klatka schodowa</span>
                                zaprojektowana w standardzie apartamentowców z największych miast. Wysokiej klasy materiały wykończeniowe, dopracowane detale, nowoczesne oświetlenie i elegancka estetyka.
                            </p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-400 shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-600 leading-relaxed">
<span className="text-zinc-900 font-medium block mb-1">Ogrodzony plac zabaw przed budynkiem</span>
                                bezpieczna przestrzeń dla dzieci.
                            </p>
</div>
<div className="flex gap-4">
<iconify-icon className="text-zinc-400 shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-sm text-zinc-600 leading-relaxed">
<span className="text-zinc-900 font-medium block mb-1">Starannie zaprojektowana zieleń i architektura terenu</span>
                                estetyka i komfort codziennego życia.
                            </p>
</div>
</div>
<div className="mt-10 border-t border-zinc-100 pt-8">
<p className="text-lg font-medium text-zinc-900">
                            To miejsce, w którym jakość widoczna jest od pierwszego kroku.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div>
<iconify-icon className="text-zinc-900 mb-6" icon="solar:map-point-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tighter text-zinc-900">
                        Lokalizacja, która pracuje na Twoją wygodę
                    </h2>
<p className="mt-6 text-sm text-zinc-500 font-light leading-relaxed">
                        Ulica Fromborska to jedna z najbardziej rozpoznawalnych i rozwijających się części miasta. Doskonała komunikacja, dostęp do infrastruktury miejskiej, usług, sklepów i terenów rekreacyjnych sprawia, że Fromborska 2 to projekt zarówno do zamieszkania, jak i jako bezpieczna inwestycja kapitałowa.
                    </p>
</div>

<div>
<iconify-icon className="text-zinc-900 mb-6" icon="solar:crown-minimalistic-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tighter text-zinc-900">
                        Fromborska 2 – nowy punkt odniesienia na rynku nieruchomości
                    </h2>
<p className="mt-6 text-sm text-zinc-500 font-light mb-4">
                        Ta inwestycja została zaprojektowana dla osób, które:
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div> cenią jakość i estetykę,
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div> oczekują funkcjonalnych rozwiązań,
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div> chcą bezpiecznie lokować kapitał,
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div> szukają miejsca, które buduje prestiż.
                        </li>
</ul>
<div className="bg-white p-5 rounded-xl border border-zinc-200">
<p className="text-sm font-medium text-zinc-900 mb-1">Fromborska 2 to projekt, który podnosi poprzeczkę.</p>
<p className="text-xs text-zinc-500">To adres, który będzie wyznaczał standard dla kolejnych realizacji w Elblągu</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-white">
                    Biuro Sprzedaży Inwestycji Fromborska 2
                </h2>
<p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
                    Autoryzowany pełnomocnik notarialny sprzedaży
                </p>
<div className="mt-8 space-y-4 text-sm text-zinc-400 font-light leading-relaxed">
<p>
                        Sprzedaż inwestycji Fromborska 2 w Elbląg prowadzona jest przez American Home, z siedzibą w Elblągu przy ul. Studziennej 15A.
                    </p>
<p>
                        Biuro działa jako pełnomocnik notarialny Dewelopera, posiadając formalne umocowanie do reprezentowania Inwestora w całym procesie sprzedaży – od prezentacji lokalu, poprzez zawarcie umowy rezerwacyjnej i deweloperskiej, aż po finalizację aktu notarialnego przenoszącego własność.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
<h3 className="text-xl font-medium tracking-tight text-white mb-6">
                        Odpowiedzialność osobista i pełne zaangażowanie
                    </h3>
<p className="text-sm text-zinc-400 mb-6">
                        Za kompleksową sprzedaż całej inwestycji odpowiadają:
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700">
<iconify-icon className="text-zinc-500" icon="solar:user-circle-linear" width="32"></iconify-icon>
<div>
<p className="text-sm font-medium text-white">Łukasz Szulc</p>
<p className="text-xs text-zinc-400">dyrektor ds. rozwoju i sprzedaży</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700">
<iconify-icon className="text-zinc-500" icon="solar:user-circle-linear" width="32"></iconify-icon>
<div>
<p className="text-sm font-medium text-white">Patrycja Malecka</p>
<p className="text-xs text-zinc-400">specjalista ds. nieruchomości</p>
</div>
</div>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                        To osoby w pełni odpowiedzialne za proces komercjalizacji projektu – od pierwszego kontaktu z Klientem po finalne podpisanie aktu notarialnego. Bez pośrednich struktur. Bez przypadkowości. Z pełną odpowiedzialnością zawodową.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm flex flex-col justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-6">
                            Finansowanie? Wszystko w jednym miejscu.
                        </h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                            W ramach Biura Sprzedaży zapewniamy również kompleksowe wsparcie kredytowe. Proces finalizacji kredytu hipotecznego prowadzi nasz doradca ds. nieruchomości:
                        </p>
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700 mb-6">
<iconify-icon className="text-zinc-500" icon="solar:user-circle-linear" width="32"></iconify-icon>
<div>
<p className="text-sm font-medium text-white">Barbara Grzyb</p>
<p className="text-xs text-zinc-400">specjalista ds. kredytu hipotecznego</p>
</div>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                            To specjalista, który realnie rozumie specyfikę inwestycji deweloperskich w kontekście finansowania hipotecznego – od harmonogramów transz, przez zapisy umów deweloperskich, aż po wymagania banków wobec nowych inwestycji.
                        </p>
</div>
</div>
</div>
<div className="mt-8 p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm grid grid-cols-1 md:grid-cols-12 items-center gap-8">
<div className="md:col-span-3">
<p className="text-sm font-medium text-white">Dzięki temu:</p>
</div>
<div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:alt-arrow-right-linear"></iconify-icon><br/>
                        otrzymują Państwo rzetelną ocenę zdolności kredytowej,
                    </div>
<div className="text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:alt-arrow-right-linear"></iconify-icon><br/>
                        analizę ofert wielu banków,
                    </div>
<div className="text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:alt-arrow-right-linear"></iconify-icon><br/>
                        wsparcie w kompletowaniu dokumentów,
                    </div>
<div className="text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:alt-arrow-right-linear"></iconify-icon><br/>
                        koordynację procesu uruchamiania transz zgodnie z etapami budowy.
                    </div>
</div>
<div className="md:col-span-12 border-t border-zinc-700 pt-6 mt-2">
<p className="text-sm text-zinc-300 font-medium">To przewaga, którą posiada niewiele biur sprzedaży.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl font-medium tracking-tighter text-zinc-900">
                Jedno biuro. Pełna obsługa.
            </h2>
<p className="mt-4 text-sm text-zinc-500 uppercase tracking-widest font-medium">
                W American Home w jednym miejscu:
            </p>
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-[#FAFAFA] text-zinc-900 mb-4">
                        1
                    </div>
<p className="text-sm font-medium text-zinc-900">dokonasz rezerwacji mieszkania,</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-[#FAFAFA] text-zinc-900 mb-4">
                        2
                    </div>
<p className="text-sm font-medium text-zinc-900">podpiszesz umowę,</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-[#FAFAFA] text-zinc-900 mb-4">
                        3
                    </div>
<p className="text-sm font-medium text-zinc-900">przeprowadzisz proces kredytowy,</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-[#FAFAFA] text-zinc-900 mb-4">
                        4
                    </div>
<p className="text-sm font-medium text-zinc-900">uzyskasz wsparcie formalno-prawne aż do aktu notarialnego.</p>
</div>
</div>
<div className="mt-16 text-center max-w-2xl mx-auto">
<p className="text-base text-zinc-500 mb-2">
                    Bez rozproszenia kompetencji. Bez konieczności koordynowania wielu podmiotów.
                </p>
<p className="text-lg font-medium text-zinc-900 mt-8 mb-2">
                    Standard obsługi adekwatny do klasy inwestycji
                </p>
<p className="text-sm text-zinc-500 font-light">
                    Fromborska 2 to projekt premium – dlatego proces sprzedaży prowadzony jest w sposób uporządkowany, transparentny i w pełni profesjonalny.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="kontakt">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-10 lg:p-16 bg-zinc-900 text-white flex flex-col justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tighter mb-8">
                                Zapraszamy do Biura Sprzedaży:
                            </h2>
<div className="space-y-6">
<div>
<p className="text-lg font-medium">American Home</p>
<div className="flex items-center gap-3 mt-2 text-zinc-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<p className="text-sm">ul. Studzienna 15A, Elbląg</p>
</div>
</div>
<div className="pt-6 border-t border-zinc-800">
<div className="flex items-center gap-3 text-white">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<p className="text-base font-medium">Telefon: 501 635 879, 55 221 0888</p>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-zinc-800">
<p className="text-sm text-zinc-400">
                                Tu zaczyna się bezpieczna i świadoma decyzja o zakupie nieruchomości.
                            </p>
</div>
</div>

<div className="p-10 lg:p-16 flex flex-col justify-center">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-3.5 border border-zinc-200 rounded-xl bg-[#FAFAFA] focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all text-sm text-zinc-900" type="text"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-3.5 border border-zinc-200 rounded-xl bg-[#FAFAFA] focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all text-sm text-zinc-900" type="tel"/>
</div>
<div className="relative">
<div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-zinc-400">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<textarea className="block w-full pl-12 pr-4 py-3.5 border border-zinc-200 rounded-xl bg-[#FAFAFA] focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all text-sm text-zinc-900 resize-none" rows="4"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-zinc-900 px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 mt-2" type="submit">
                                Zapraszamy do Biura Sprzedaży
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
