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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">
                LUZ<span className="text-slate-400">.</span>
</a>
<div className="hidden space-x-8 text-sm font-medium text-slate-500 md:flex">
<a className="transition-colors hover:text-slate-900" href="#o-nas">O nas</a>
<a className="transition-colors hover:text-slate-900" href="#oferta">Oferta</a>
<a className="transition-colors hover:text-slate-900" href="#cennik">Cennik</a>
<a className="transition-colors hover:text-slate-900" href="#faq">FAQ</a>
<a className="transition-colors hover:text-slate-900" href="#kontakt">Kontakt</a>
</div>
<a className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105 hover:bg-slate-800 md:inline-block" href="#zapisz-sie">
                Zapisz się
            </a>

<button className="text-slate-900 md:hidden">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-24 md:pt-32">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-10 blur-[100px]"></div>
<div className="mx-auto max-w-5xl px-6 text-center">
<div className="mb-6 flex justify-center space-x-4 text-sm font-medium text-slate-500">
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:phone" data-width="16"></span> 602 742 045</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:mail" data-width="16"></span> biuro.oskluz@gmail.com</span>
</div>
<h1 className="mb-6 text-5xl font-semibold tracking-tighter text-slate-900 md:text-7xl">
                BEZSTRESOWA<br/>SZKOŁA JAZDY
            </h1>
<p className="mx-auto mb-10 max-w-2xl text-lg font-normal text-slate-500 md:text-xl">
                Zrób kurs prawa jazdy w 14 dni w Częstochowie. Profesjonalizm, spokój i skuteczność w jednym miejscu.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 sm:w-auto" href="#kontakt">
                    Zapisz się już teraz <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 sm:w-auto" href="#cennik">
                    Pobierz cennik
                </a>
<a className="flex w-full items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600 sm:w-auto" href="#kontakt">
                    Umów jazdę doszkalającą
                </a>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-20" id="o-nas">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div>
<span className="mb-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500">O nas</span>
<h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Szkoła Jazdy LUZ Częstochowa</h2>
<p className="text-base leading-relaxed text-slate-500">
                        Wiele osób, zanim zapisze się na kurs jazdy, ma różne obawy — dotyczą skuteczności nauczania, atmosfery lub dopasowania harmonogramu. W naszej szkole jazdy LUZ Częstochowa udowadniamy, że wszystkie te obawy nie mają podstaw! Twoje wymarzone prawo jazdy nigdy nie było tak blisko!
                    </p>
</div>
<div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-96">

<img alt="Nauka Jazdy" className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20" id="oferta">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Dlaczego warto u nas?</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:smile" data-width="20"></span>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Dobra atmosfera</h3>
<p className="text-sm text-slate-500">Nasi instruktorzy pracują w dobrej i otwartej atmosferze, redukując stres.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Indywidualne podejście</h3>
<p className="text-sm text-slate-500">Każdy kursant jest inny. Dopasowujemy tempo nauki do Twoich potrzeb.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Trasy egzaminacyjne</h3>
<p className="text-sm text-slate-500">Jazdy po trasach z dużym prawdopodobieństwem egzaminacyjnym.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:message-circle" data-width="20"></span>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Życzliwa rozmowa</h3>
<p className="text-sm text-slate-500">Jasne wskazówki i pełne wsparcie merytoryczne podczas każdej jazdy.</p>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="mb-2 text-sm font-semibold text-slate-900">Pełne wsparcie</h3>
<p className="text-sm text-slate-500">Jesteśmy z Tobą od momentu zapisania aż do zdanego egzaminu.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Jak uczymy?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-indigo-600"><span className="iconify" data-icon="lucide:book-open" data-width="20"></span></div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Zajęcia teoretyczne</h4>
<p className="text-sm text-slate-500 mt-1">Stacjonarnie lub online – wybierz formę dogodną dla siebie.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-indigo-600"><span className="iconify" data-icon="lucide:car" data-width="20"></span></div>
<div>
<h4 className="font-medium text-slate-900 text-sm">30 godzin jazdy praktycznej</h4>
<ul className="mt-2 space-y-1 text-sm text-slate-500 list-disc list-inside marker:text-slate-300">
<li>Jazda po całym mieście i trasach egzaminacyjnych</li>
<li>Wszystkie manewry w rzeczywistym ruchu drogowym</li>
<li>Auta: Suzuki Swift i Toyota Yaris (jak na egzaminie)</li>
<li>Wjazd na plac manewrowy WORD</li>
</ul>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-indigo-600"><span className="iconify" data-icon="lucide:check-circle" data-width="20"></span></div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Egzamin wewnętrzny</h4>
<p className="text-sm text-slate-500 mt-1">Zdajesz do skutku bez żadnych dodatkowych kosztów.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0 text-indigo-600"><span className="iconify" data-icon="lucide:clock" data-width="20"></span></div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Elastyczne godziny</h4>
<p className="text-sm text-slate-500 mt-1">Dopasowujemy jazdy od 7:00 do 22:00, również w soboty i niedziele.</p>
</div>
</li>
</ul>
</div>
<div className="flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-200 p-8">

<div className="grid grid-cols-2 gap-4 w-full max-w-md">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
<span className="text-2xl font-bold text-slate-900">30h</span>
<span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Teorii</span>
</div>
<div className="bg-indigo-600 p-4 rounded-lg shadow-sm border border-indigo-500 flex flex-col items-center text-center">
<span className="text-2xl font-bold text-white">30h</span>
<span className="text-xs text-indigo-100 uppercase tracking-wide mt-1">Praktyki</span>
</div>
<div className="col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
<span className="text-2xl font-bold text-slate-900">14 dni</span>
<span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Kurs Ekspresowy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="cennik">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Cennik kursów</h2>
<p className="mt-4 text-slate-500">Przejrzyste zasady, brak ukrytych kosztów.</p>
</div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<h3 className="text-lg font-medium text-slate-900">Kategoria B</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">2900</span>
<span className="ml-1 text-slate-500">zł</span>
</div>
<p className="text-sm text-slate-500 mb-6">Podstawowy kurs przygotowujący do egzaminu.</p>
<ul className="mb-8 space-y-3 text-sm text-slate-600 flex-1">
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 30h teorii</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 30h jazd</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> Materiały szkoleniowe</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> Egzamin wewnętrzny</li>
</ul>
<a className="block w-full rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-800" href="#kontakt">Wybierz</a>
</div>

<div className="relative flex flex-col rounded-2xl border border-indigo-200 bg-white p-8 shadow-md">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Polecany</div>
<h3 className="text-lg font-medium text-slate-900">Pakiet rozszerzony B</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">3600</span>
<span className="ml-1 text-slate-500">zł</span>
</div>
<p className="text-sm text-slate-500 mb-6">Dla osób chcących poczuć się pewniej za kółkiem.</p>
<ul className="mb-8 space-y-3 text-sm text-slate-600 flex-1">
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 30h teorii</li>
<li className="flex gap-2 font-medium text-slate-900"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 40h jazd (+10h)</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> Większa pewność siebie</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> Egzamin wewnętrzny</li>
</ul>
<a className="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700" href="#kontakt">Wybierz</a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<h3 className="text-lg font-medium text-slate-900">B – Automat</h3>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">3200</span>
<span className="ml-1 text-slate-500">zł</span>
</div>
<p className="text-sm text-slate-500 mb-6">Komfortowa nauka na automatycznej skrzyni biegów.</p>
<ul className="mb-8 space-y-3 text-sm text-slate-600 flex-1">
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 30h teorii</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> 30h jazd</li>
<li className="flex gap-2"><span className="text-indigo-600 iconify" data-icon="lucide:check"></span> Honda Jazz (Automat)</li>
</ul>
<a className="block w-full rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-slate-800" href="#kontakt">Wybierz</a>
</div>
</div>

<div className="grid gap-8 lg:grid-cols-2">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<h3 className="mb-4 text-base font-medium text-slate-900">Motocykle</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
<span className="text-slate-600">Kurs A</span>
<span className="font-semibold text-slate-900">2400 zł</span>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
<span className="text-slate-600">Kurs A2</span>
<span className="font-semibold text-slate-900">2400 zł</span>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
<span className="text-slate-600">Kurs A1</span>
<span className="font-semibold text-slate-900">2200 zł</span>
</div>
<div className="flex items-center justify-between pb-2 text-sm">
<span className="text-slate-600">Kurs AM</span>
<span className="font-semibold text-slate-900">800 zł</span>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<h3 className="mb-4 text-base font-medium text-slate-900">Opcje specjalne</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
<span className="text-slate-600">B Ekspresowy (Manual) <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded ml-2">14 dni</span></span>
<span className="font-semibold text-slate-900">4300 zł</span>
</div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
<span className="text-slate-600">B Ekspresowy (Automat) <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded ml-2">14 dni</span></span>
<span className="font-semibold text-slate-900">4800 zł</span>
</div>
<div className="flex flex-col border-b border-slate-100 pb-2 text-sm">
<div className="flex justify-between items-center mb-1">
<span className="text-slate-600">Jazdy doszkalające kat. B</span>
<span className="font-semibold text-slate-900">100-110 zł/h</span>
</div>
<span className="text-xs text-slate-400">Suzuki Swift / Toyota Yaris / Honda Jazz. Trening tras (dom-praca), parkowanie.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">Galeria z kursów</h2>
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
<div className="group relative overflow-hidden rounded-lg bg-slate-100 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto">
<img alt="Auto szkoleniowe" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
<p className="text-xs font-medium text-white">Nasze auta: Toyota Yaris</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
<img alt="Jazda po mieście" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="group relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
<img alt="Plac manewrowy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
<img alt="Wykłady" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="group relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
<img alt="Egzamin" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-slate-900">Co mówią nasi kursanci</h2>
<div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Bardzo polecam! Piotr bardzo sympatyczny instruktor, jazdy bez stresu."</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Karina</div>
</div>

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Polecam szkołę nauki jazdy LUZ. Świetne podejście do kursanta."</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Adrian</div>
</div>

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Jestem bardzo zadowolona. Polecam!"</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Sylwia</div>
</div>

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Polecam serdecznie szkołę jazdy LUZ. Profesjonalizm w każdym calu."</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Paulina</div>
</div>

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Nazwa adekwatna do samopoczucia. Pełen luz podczas jazdy."</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Acia</div>
</div>

<div className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-2 flex text-indigo-500">
<span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span><span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-slate-600">"Rewelacyjna szkoła! Instruktorzy z powołania."</p>
<div className="mt-4 text-xs font-semibold text-slate-900">— Ewelina</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">Najczęstsze pytania</h2>
<div className="space-y-4">
<details className="group border-b border-slate-200 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-900">
                        Co muszę zrobić, by zapisać się na kurs?
                        <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500">
                        Trzeba wyrobić PKK (Profil Kandydata na Kierowcę), mieć zdjęcie 35×45 mm i zaświadczenie od lekarza; następnie odebrać PKK w wydziale komunikacji. Z tym numerem zapraszamy do nas!
                    </p>
</details>
<details className="group border-b border-slate-200 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-900">
                        Czy mogę rozpocząć kurs przed 18 rokiem życia?
                        <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="mt-3 text-sm leading-relaxed text-slate-500">
                        Tak — od 17 lat i 9 miesięcy z pisemną zgodą rodzica/opiekuna. Druk zgody możesz dostać w naszym biurze OSK LUZ.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
<span className="iconify" data-icon="lucide:gift" data-width="24"></span>
</div>
<h2 className="mb-4 text-3xl font-semibold tracking-tight">Prawo jazdy jako prezent</h2>
<p className="mx-auto mb-8 max-w-xl text-slate-400">
                Kup Bon upominkowy na kurs prawa jazdy lub jazdy doszkalające. Voucher ważny 3 miesiące od zakupu. Idealny pomysł na 18-stkę!
            </p>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm max-w-lg mx-auto">
<p className="text-xs text-slate-400 mb-2 uppercase tracking-widest">Voucher</p>
<p className="text-xl font-medium">Szkoła Jazdy LUZ</p>
<div className="my-4 border-t border-white/10"></div>
<p className="text-sm text-slate-400">Odbiór w biurze po opłaceniu kursu. Nie podlega wymianie na gotówkę.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900">Skontaktuj się z nami</h2>
<p className="mb-8 text-slate-500">Chcesz zapisać się na kurs lub masz pytania? Zadzwoń lub napisz.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Adres</h4>
<p className="text-sm text-slate-500">al. Wolności 1, Częstochowa<br/>(na KWADRATACH)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Telefon</h4>
<p className="text-sm text-slate-500">602 742 045 | 512 637 377</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-900">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">E-mail</h4>
<p className="text-sm text-slate-500">biuro.oskluz@gmail.com</p>
</div>
</div>
<div className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-100">
<h4 className="mb-2 font-medium text-slate-900 text-sm">Dane do przelewu</h4>
<p className="text-sm text-slate-500">Szkoła Nauki Jazdy LUZ</p>
<p className="font-mono text-sm text-slate-600 mt-1">02 1940 1076 3240 3501 0000 0000</p>
</div>
</div>
</div>

<div className="h-full min-h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 relative">
<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-[0.9]" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.567803158097!2d19.120785315904835!3d50.81056556854199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b5c401311093%3A0x6b09328246581970!2sAleja%20Wolno%C5%9Bci%201%2C%2042-217%20Cz%C4%99stochowa!5e0!3m2!1spl!2spl!4v1625667000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tight text-slate-900">LUZ<span className="text-slate-400">.</span></span>
<p className="mt-2 text-xs text-slate-400">© 2023 Szkoła Jazdy LUZ Częstochowa. Wszelkie prawa zastrzeżone.</p>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Facebook</a>
<a className="hover:text-slate-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-slate-900 transition-colors" href="#">Polityka prywatności</a>
</div>
</div>
</footer>

    </>
  );
}
