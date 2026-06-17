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
      

<div className="bg-slate-900 text-slate-300 py-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm font-medium">
<a className="flex items-center gap-2 hover:text-white transition-colors py-1 sm:py-0" href="tel:+48123456789">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                +48 123 456 789
            </a>
<a className="flex items-center gap-2 hover:text-white transition-colors py-1 sm:py-0" href="mailto:biuro@geoprecyzja.pl">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                biuro@geoprecyzja.pl
            </a>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white text-lg">G</span>
                    GEO
                </a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#start">Start</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#o-nas">O nas</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#oferta">Oferta</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#opinie">Opinie</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative flex flex-col justify-center min-h-[85vh] py-24 lg:py-40 overflow-hidden" id="start">

<div className="absolute inset-0 -z-20">
<img alt="Obsługa geodezyjna budowy" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-slate-900/75"></div>
</div>
<div className="sm:px-6 lg:px-8 z-10 text-center max-w-7xl mx-auto px-4 relative w-full">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight max-w-4xl mx-auto mb-6">
                    Precyzja, która buduje <span className="text-blue-400">zaufanie.</span>
</h1>
<p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                    Profesjonalny geodeta dla Twojej inwestycji. Oferujemy szybkie terminy, gwarancję dokładności i kompleksowe usługi geodezyjne na każdym etapie budowy. Niezawodne pomiary działek i dokumentacja.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors" href="#kontakt">
                        Zamów pomiar
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-slate-500 text-sm font-medium rounded-lg text-white bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-sm transition-colors" href="#oferta">
                        Sprawdź ofertę
                    </a>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Doświadczenie i nowoczesne technologie</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                            Jesteśmy zespołem uprawnionych inżynierów, dla których geodezja to nie tylko zawód, ale pasja do precyzji. Posiadamy wieloletnie doświadczenie w obsłudze inwestycji budowlanych, od domów jednorodzinnych po duże obiekty komercyjne.
                        </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
                            Wykorzystujemy najnowocześniejszy sprzęt pomiarowy (tachimetry zrobotyzowane, odbiorniki GNSS, drony), co pozwala nam realizować usługi geodezyjne i pomiary działek z najwyższą dokładnością i w najkrótszym możliwym czasie. Naszym priorytetem jest spokój inwestora i bezproblemowy przebieg procesu budowlanego.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Pełne uprawnienia zawodowe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Najwyższa dokładność pomiarów</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Krótkie terminy realizacji</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="Geodeta na placu budowy" className="rounded-2xl shadow-xl border border-slate-200/50 object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden sm:block">
<div className="text-3xl font-semibold tracking-tight text-blue-600 mb-1">15+</div>
<div className="text-sm font-medium text-slate-500">Lat na rynku</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="oferta">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nasza Oferta</h2>
<p className="text-base text-slate-500">Zapewniamy kompleksową obsługę geodezyjną dla klientów indywidualnych i firmowych. Poznaj nasze główne usługi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Mapy do celów projektowych</h3>
<p className="text-sm text-slate-500 leading-relaxed">Niezbędny dokument do uzyskania pozwolenia na budowę. Gwarantujemy rzetelne opracowanie wektorowe i analogowe.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Tyczenia budynków</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precyzyjne wyznaczenie osi konstrukcyjnych i głównych punktów obiektu w terenie, zgodnie z zatwierdzonym projektem.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Inwentaryzacje powykonawcze</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pomiary zrealizowanych obiektów i sieci uzbrojenia terenu, niezbędne do oddania budynku do użytkowania.</p>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:scissors-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Podziały nieruchomości</h3>
<p className="text-sm text-slate-500 leading-relaxed">Prawne i techniczne wydzielenie nowych działek ewidencyjnych. Kompleksowo prowadzimy całe postępowanie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="opinie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Opinie Klientów</h2>
<p className="text-base text-slate-500">Dowody naszego profesjonalizmu pochodzą od tych, którym pomogliśmy zrealizować ich cele.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 italic">"Pełen profesjonalizm. Mapa do celów projektowych została wykonana błyskawicznie. Kontakt z biurem świetny, wszystko jasno wytłumaczone. Zdecydowanie polecam każdemu, kto buduje dom."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Jan Kowalski</div>
<div className="text-xs text-slate-500">Inwestor prywatny</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 italic">"Współpracujemy na stałe przy obsłudze inwestycji deweloperskich. Terminowość i precyzja pomiarów na najwyższym poziomie. Tyczenia budynków zawsze bez zarzutu."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Anna Nowak</div>
<div className="text-xs text-slate-500">Kierownik Budowy, BuildPro</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 italic">"Bardzo trudny podział nieruchomości załatwiony sprawnie i bez stresu. Panowie wiedzą co robią, doskonale znają przepisy. Usługi geodezyjne świadczone na 5 gwiazdek."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Piotr Wiśniewski</div>
<div className="text-xs text-slate-500">Właściciel gruntu</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 italic">"Inwentaryzacja powykonawcza po budowie domu zrobiona szybko, dokumenty do nadzoru budowlanego przygotowane bezbłędnie. Uczciwe ceny. Dziękuję za pomoc!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Maria Lewandowska</div>
<div className="text-xs text-slate-500">Klient indywidualny</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="realizacje">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nasze Realizacje</h2>
<p className="text-base text-slate-500">Od małych domów po wieloetapowe osiedla - realizujemy zadania w każdych warunkach terenowych.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="relative group overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
<img alt="Obsługa budowy" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-white font-medium text-lg">Obsługa osiedla mieszkaniowego</h3>
<p className="text-slate-300 text-sm">Tyczenia i inwentaryzacje</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
<img alt="Pomiary dronem" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-white font-medium text-lg">Pomiary terenowe z użyciem drona</h3>
<p className="text-slate-300 text-sm">Mapy wektorowe dużej skali</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
<img alt="Praca inżyniera" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-white font-medium text-lg">Wykonywanie projektów</h3>
<p className="text-slate-300 text-sm">Podziały nieruchomości i wznowienia granic</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-t pt-24 pb-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Skontaktuj się z nami</h2>
<p className="text-base text-slate-500 mb-8">Napisz lub zadzwoń. Wycenimy Twoje zlecenie za darmo i odpowiemy na wszelkie pytania.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Imię i nazwisko</label>
<input className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Telefon</label>
<input className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" id="phone" placeholder="+48 000 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Adres e-mail</label>
<input className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Treść wiadomości (opcjonalnie)</label>
<textarea className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" id="message" placeholder="Opisz w skrócie, czego dotyczy zapytanie..." rows="4"></textarea>
</div>
<div className="flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 accent-blue-600" id="privacy" type="checkbox"/>
</div>
<div className="ml-3 text-sm">
<label className="font-medium text-slate-600" htmlFor="privacy">Akceptuję <a className="text-blue-600 hover:underline" href="#">politykę prywatności</a> i zgadzam się na przetwarzanie danych.</label>
</div>
</div>
<button className="sm:w-auto inline-flex hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors text-sm font-medium text-white bg-blue-600 w-full border-transparent border rounded-lg pt-3 pr-6 pb-3 pl-6 items-center justify-center" type="submit">
                                Wyślij zapytanie
                            </button>
</form>
</div>

<div className="">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Dane Firmy</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-xl flex-shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<p className="text-sm font-medium text-slate-900">GEO-PRECYZJA Sp. z o.o.</p>
<p className="text-sm text-slate-500">ul. Geodezyjna 12/4<br/>00-001 Warszawa</p>
</div>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-400 text-xl flex-shrink-0" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-slate-600">NIP: 123-456-78-90</span>
</li>
<li className="flex items-center gap-3 pt-4 border-t border-slate-200">
<iconify-icon className="text-slate-400 text-xl flex-shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="tel:+48123456789">+48 123 456 789</a>
</li>
</ul>
</div>

<div className="w-full h-48 bg-slate-200 rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-200">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-30 grayscale"></div>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-4xl text-blue-600 mb-2" icon="solar:map-point-bold" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">Zobacz na mapie</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 border-t border-slate-800 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 text-center sm:text-left">
                © 2023 GEO-PRECYZJA. Wszelkie prawa zastrzeżone.
            </p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Polityka Cookies</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Polityka Prywatności</a>
</div>
</div>
</footer>

    </>
  );
}
