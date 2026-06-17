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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-stone-900">F2</span>
<div className="h-4 w-px bg-stone-300 mx-2 hidden sm:block"></div>
<span className="text-sm font-medium tracking-tight text-stone-500 hidden sm:block">FROMBORSKA 2</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition hidden md:block" href="#offer">Oferta</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition hidden md:block" href="#location">Lokalizacja</a>
<a className="bg-stone-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-stone-800 transition rounded" href="#contact">
                    Biuro Sprzedaży
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-5 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/50 border border-stone-200 mb-8">
<span className="w-2 h-2 rounded-full bg-stone-500"></span>
<span className="text-xs font-medium tracking-tight text-stone-700 uppercase">Inwestycja Premium</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-stone-900 mb-6">
                    Fromborska 2
                </h1>
<p className="text-2xl font-medium tracking-tight text-stone-600 mb-6">
                    Nowy wymiar prestiżu w Elblągu
                </p>
<p className="text-lg leading-relaxed text-stone-500 mb-10 max-w-lg">
                    Fromborska 2 to inwestycja deweloperska klasy premium, która wyznacza nowy standard budownictwa mieszkaniowego w Elblągu. To projekt dopracowany architektonicznie, funkcjonalnie i estetycznie – zaprojektowany dla osób, które oczekują więcej: więcej jakości, więcej komfortu, więcej prestiżu.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-sm font-medium hover:bg-stone-800 transition rounded w-full sm:w-auto" href="#contact">
                        Zapytaj o dostępność
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-900 px-8 py-4 text-sm font-medium hover:bg-stone-50 transition rounded w-full sm:w-auto" href="#overview">
                        Poznaj projekt
                    </a>
</div>
</div>
<div className="lg:col-span-7 h-[500px] lg:h-[700px] w-full relative rounded-lg overflow-hidden bg-stone-200">
<img alt="Fromborska 2 Architektura" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200/50 px-6 lg:px-8" id="overview">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-stone-900 mb-8 leading-tight">
                To nie jest kolejny budynek mieszkalny.<br/>
<span className="text-stone-400">To świadomie zaprojektowana przestrzeń do życia.</span>
</h2>
<div className="h-px w-24 bg-stone-300 mx-auto mb-12"></div>
<p className="text-sm font-medium tracking-tight text-stone-500 uppercase mb-8">Ta inwestycja została zaprojektowana dla osób, które:</p>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mb-4" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Cenią jakość i estetykę</p>
</div>
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mb-4" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Oczekują funkcjonalnych rozwiązań</p>
</div>
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mb-4" icon="solar:safe-square-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Chcą bezpiecznie lokować kapitał</p>
</div>
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<iconify-icon className="text-2xl text-stone-400 mb-4" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Szukają miejsca, które buduje prestiż</p>
</div>
</div>
<p className="text-lg font-medium tracking-tight text-stone-900 mt-16">
                Fromborska 2 to projekt, który podnosi poprzeczkę.<br/>
                To adres, który będzie wyznaczał standard dla kolejnych realizacji w Elblągu.
            </p>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="offer">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-900 mb-4">BUDYNEK 1</h2>
<p className="text-xl tracking-tight text-stone-500 max-w-2xl">Funkcjonalność, która pracuje na Twoją wygodę. W pierwszym etapie powstaje 55 mieszkań, zaprojektowanych w przemyślanych i poszukiwanych metrażach.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

<div className="bg-white border border-stone-200 p-8 rounded flex flex-col hover:border-stone-300 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="text-3xl font-semibold tracking-tighter text-stone-900">39-40 <span className="text-lg text-stone-400">m²</span></span>
<span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded">40 mieszkań</span>
</div>
<div className="mt-auto">
<p className="text-sm text-stone-500 leading-relaxed">Idealne jako pierwsze mieszkanie lub inwestycja kapitałowa.</p>
</div>
</div>

<div className="bg-white border border-stone-200 p-8 rounded flex flex-col hover:border-stone-300 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="text-3xl font-semibold tracking-tighter text-stone-900">44,23 <span className="text-lg text-stone-400">m²</span></span>
<span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded">5 mieszkań</span>
</div>
<div className="mt-auto">
<p className="text-sm text-stone-500 leading-relaxed">Optymalny układ przestrzenny dla par i singli.</p>
</div>
</div>

<div className="bg-white border border-stone-200 p-8 rounded flex flex-col hover:border-stone-300 transition-colors">
<div className="flex justify-between items-start mb-12">
<span className="text-3xl font-semibold tracking-tighter text-stone-900">64,83 <span className="text-lg text-stone-400">m²</span></span>
<span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded">5 mieszkań</span>
</div>
<div className="mt-auto">
<p className="text-sm text-stone-500 leading-relaxed">Przestronne wnętrza zaprojektowane z myślą o rodzinie.</p>
</div>
</div>

<div className="bg-stone-900 border border-stone-800 p-8 rounded flex flex-col text-white">
<div className="flex justify-between items-start mb-12">
<span className="text-3xl font-semibold tracking-tighter">85,79 <span className="text-lg text-stone-400">m²</span></span>
<span className="text-xs font-medium px-2 py-1 bg-stone-800 text-stone-200 rounded">5 apartamentów</span>
</div>
<div className="mt-auto">
<div className="text-xs font-medium tracking-wide text-stone-400 uppercase mb-1">Segment Premium</div>
<p className="text-sm text-stone-300 leading-relaxed">Dla najbardziej wymagających klientów.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start bg-stone-100 rounded-lg p-8 md:p-12">
<div>
<iconify-icon className="text-3xl text-stone-400 mb-4" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-stone-900 mb-2">Maksymalna funkcjonalność</h3>
<p className="text-sm text-stone-600 leading-relaxed">Układy zostały zaprojektowane w sposób maksymalizujący funkcjonalność – bez straty metrów na niepraktyczne ciągi komunikacyjne.</p>
</div>
<div>
<iconify-icon className="text-3xl text-stone-400 mb-4" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-stone-900 mb-2">Przestrzeń relaksu</h3>
<p className="text-sm text-stone-600 leading-relaxed">Każde mieszkanie posiada przestronny balkon, który stanowi naturalne przedłużenie części dziennej i prywatną strefę relaksu.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200/50 px-6 lg:px-8">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-3xl font-semibold tracking-tighter text-stone-900 mb-6">Własność, która daje realną wartość</h2>
<p className="text-base text-stone-500 mb-10 leading-relaxed">
                    Fromborska 2 wyróżnia się przejrzystą i bezpieczną strukturą prawną. To oznacza realny, wyodrębniony składnik majątku – bez udziałów i bez niejasnych zapisów.
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-100 p-2 rounded text-stone-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:garage-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">36 zamykanych podwójnych garaży</h4>
<p className="text-sm text-stone-500 mt-1">Każdy z oddzielną księgą wieczystą (23% VAT).</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-100 p-2 rounded text-stone-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">24 komórki lokatorskie</h4>
<p className="text-sm text-stone-500 mt-1">Zlokalizowane w garażach, również z odrębną KW.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-100 p-2 rounded text-stone-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:signpost-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Liczne zewnętrzne miejsca parkingowe</h4>
<p className="text-sm text-stone-500 mt-1">Pełna własność, osobna księga wieczysta.</p>
</div>
</li>
</ul>
</div>

<div>
<h2 className="text-3xl font-semibold tracking-tighter text-stone-900 mb-6">Części wspólne na poziomie,<br/>którego dotąd w Elblągu nie było</h2>
<p className="text-base text-stone-500 mb-10 leading-relaxed">
                    Fromborska 2 to inwestycja, w której równie duży nacisk położono na jakość przestrzeni wspólnych. To miejsce, w którym jakość widoczna jest od pierwszego kroku.
                </p>
<div className="space-y-8">
<div className="border-l-2 border-stone-200 pl-6">
<h4 className="text-base font-medium text-stone-900 mb-2">Reprezentacyjna klatka schodowa</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                            Zaprojektowana w standardzie apartamentowców z największych miast. Wysokiej klasy materiały wykończeniowe, dopracowane detale, nowoczesne oświetlenie i elegancka estetyka.
                        </p>
</div>
<div className="border-l-2 border-stone-200 pl-6">
<h4 className="text-base font-medium text-stone-900 mb-2">Ogrodzony plac zabaw przed budynkiem</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                            Bezpieczna przestrzeń dla dzieci.
                        </p>
</div>
<div className="border-l-2 border-stone-200 pl-6">
<h4 className="text-base font-medium text-stone-900 mb-2">Starannie zaprojektowana zieleń</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                            Architektura terenu zapewniająca estetykę i komfort codziennego życia.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="location">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 h-[400px] lg:h-[600px] w-full relative rounded-lg overflow-hidden bg-stone-200 order-2 lg:order-1">
<img alt="Lokalizacja Elbląg" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="lg:col-span-5 order-1 lg:order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100 text-stone-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-900 mb-6">
                    Lokalizacja, która pracuje na Twoją wygodę
                </h2>
<p className="text-lg text-stone-500 leading-relaxed mb-8">
                    Ulica Fromborska to jedna z najbardziej rozpoznawalnych i rozwijających się części miasta.
                </p>
<p className="text-base text-stone-600 leading-relaxed">
                    Doskonała komunikacja, dostęp do infrastruktury miejskiej, usług, sklepów i terenów rekreacyjnych sprawia, że Fromborska 2 to projekt zarówno do zamieszkania, jak i jako bezpieczna inwestycja kapitałowa.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Biuro Sprzedaży Inwestycji</h2>
<p className="text-lg text-stone-400">
                    Sprzedaż inwestycji prowadzona jest przez American Home, działające jako autoryzowany pełnomocnik notarialny Dewelopera w całym procesie – od prezentacji po akt notarialny.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 border-t border-stone-800 pt-16">

<div>
<h3 className="text-xl font-medium tracking-tight mb-4">Odpowiedzialność osobista</h3>
<p className="text-sm text-stone-400 mb-6 leading-relaxed">
                        Za kompleksową sprzedaż całej inwestycji odpowiadają konkretne osoby. Bez pośrednich struktur, bez przypadkowości, z pełną odpowiedzialnością zawodową.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-stone-300" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Łukasz Szulc</div>
<div className="text-xs text-stone-500">Dyrektor ds. rozwoju i sprzedaży</div>
</div>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-stone-300" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Patrycja Malecka</div>
<div className="text-xs text-stone-500">Specjalista ds. nieruchomości</div>
</div>
</li>
</ul>
</div>

<div>
<h3 className="text-xl font-medium tracking-tight mb-4">Finansowanie w jednym miejscu</h3>
<p className="text-sm text-stone-400 mb-6 leading-relaxed">
                        Proces finalizacji kredytu hipotecznego prowadzi nasz doradca, który realnie rozumie specyfikę inwestycji deweloperskich.
                    </p>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-stone-300" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Barbara Grzyb</div>
<div className="text-xs text-stone-500">Specjalista ds. kredytu hipotecznego</div>
</div>
</div>
<ul className="space-y-2">
<li className="text-sm text-stone-400 flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span> Rzetelna ocena zdolności</li>
<li className="text-sm text-stone-400 flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span> Analiza ofert banków</li>
<li className="text-sm text-stone-400 flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span> Koordynacja transz budowy</li>
</ul>
</div>

<div className="bg-stone-800/50 p-8 rounded-lg border border-stone-800">
<h3 className="text-xl font-medium tracking-tight mb-4">Jedno biuro. Pełna obsługa.</h3>
<p className="text-sm text-stone-400 mb-6 leading-relaxed">
                        Bez rozproszenia kompetencji. Bez konieczności koordynowania wielu podmiotów. Standard obsługi adekwatny do klasy inwestycji premium.
                    </p>
<div className="space-y-4 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-stone-700">
<div className="flex items-start gap-4 relative">
<div className="w-6 h-6 rounded-full bg-stone-900 border-2 border-stone-700 flex items-center justify-center shrink-0 mt-0.5 z-10 text-xs font-medium">1</div>
<div className="text-sm text-stone-300">Rezerwacja mieszkania</div>
</div>
<div className="flex items-start gap-4 relative">
<div className="w-6 h-6 rounded-full bg-stone-900 border-2 border-stone-700 flex items-center justify-center shrink-0 mt-0.5 z-10 text-xs font-medium">2</div>
<div className="text-sm text-stone-300">Podpisanie umowy</div>
</div>
<div className="flex items-start gap-4 relative">
<div className="w-6 h-6 rounded-full bg-stone-900 border-2 border-stone-700 flex items-center justify-center shrink-0 mt-0.5 z-10 text-xs font-medium">3</div>
<div className="text-sm text-stone-300">Proces kredytowy</div>
</div>
<div className="flex items-start gap-4 relative">
<div className="w-6 h-6 rounded-full bg-stone-900 border-2 border-stone-700 flex items-center justify-center shrink-0 mt-0.5 z-10 text-xs font-medium">4</div>
<div className="text-sm text-stone-300">Wsparcie do aktu notarialnego</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 lg:px-8" id="contact">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-stone-900 mb-6">
                        Tu zaczyna się bezpieczna i świadoma decyzja.
                    </h2>
<p className="text-lg text-stone-500 mb-12">
                        Proces sprzedaży prowadzony jest w sposób uporządkowany, transparentny i w pełni profesjonalny. Zapraszamy do Biura Sprzedaży.
                    </p>
<div className="space-y-8">
<div>
<div className="text-xs font-medium tracking-wide text-stone-400 uppercase mb-2">Biuro Sprzedaży</div>
<div className="text-lg font-medium text-stone-900">American Home</div>
<div className="text-stone-600">ul. Studzienna 15A<br/>Elbląg</div>
</div>
<div>
<div className="text-xs font-medium tracking-wide text-stone-400 uppercase mb-2">Kontakt telefoniczny</div>
<div className="text-xl font-medium text-stone-900">501 635 879</div>
<div className="text-xl font-medium text-stone-900 mt-1">55 221 08 88</div>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 lg:p-10 rounded-xl border border-stone-200">
<h3 className="text-xl font-medium text-stone-900 mb-6">Zapytaj o ofertę</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide" htmlFor="name">Imię i nazwisko</label>
<input className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-900 focus:border-stone-400 transition-colors" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide" htmlFor="phone">Telefon</label>
<input className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-900 focus:border-stone-400 transition-colors" id="phone" placeholder="+48 000 000 000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide" htmlFor="email">E-mail</label>
<input className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm text-stone-900 focus:border-stone-400 transition-colors" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div className="pt-4">
<button className="w-full bg-stone-900 text-white rounded-md px-6 py-4 text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2" type="button">
                                Wyślij zapytanie
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-xs text-stone-400 text-center mt-4">
                            Wysyłając formularz, kontaktujesz się bezpośrednio z autoryzowanym biurem sprzedaży American Home.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 py-8 text-center px-6">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-lg font-semibold tracking-tighter text-stone-900">F2</span>
<div className="h-3 w-px bg-stone-300 mx-1"></div>
<span className="text-xs font-medium tracking-tight text-stone-500">FROMBORSKA 2</span>
</div>
<p className="text-xs text-stone-400">
            © 2023 Fromborska 2. Inwestycja Premium w Elblągu.<br/>
            Sprzedaż wyłączna: American Home.
        </p>
</footer>

    </>
  );
}
