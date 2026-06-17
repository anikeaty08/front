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



                    function scrollCarousel(direction) {
                        const container = document.getElementById('testimonials-carousel');
                        const scrollAmount = 320; // Width of card + gap roughly
                        if (container) {
                            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
                        }
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
      
<main className="min-h-screen flex flex-col w-full items-center">

<section className="flex flex-col text-center bg-slate-950 w-full border-slate-800 border-b pt-24 pr-6 pb-20 pl-6 items-center">
<div className="max-w-5xl flex flex-col items-center">
<div className="inline-flex gap-2 uppercase text-xs font-semibold text-lime-400 tracking-wide bg-lime-400/10 border-lime-400/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Nabór otwarty: Protokół V2.0<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span></div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-bold text-white tracking-tight max-w-4xl mb-6">
                    Odzyskaj kontrolę nad ciałem, które przestało Cię słuchać. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500">Pokonaj "Metaboliczny Mur"</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-slate-400 max-w-3xl mb-10" style={{}}>Dedykowany Protokół "Reset Metaboliczny V2.0 dla zapracowanych kobiet z insulinoopornością (IO) i Hashimoto,i nie mają czasu na godziny w kuchni i godziny cardio.</p>

<div className="group relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 ring-1 ring-white/10 cursor-pointer mb-10">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 opacity-90">

<div className="absolute inset-0 flex items-center justify-center opacity-20">
<div className="w-full h-full flex items-center justify-center gap-8">

<div className="w-1 h-32 bg-slate-700 rounded-full"></div>
<div className="w-1 h-48 bg-slate-600 rounded-full"></div>
<div className="w-1 h-64 bg-lime-500 rounded-full shadow-[0_0_15px_rgba(132,204,22,0.5)]"></div> 
<div className="w-1 h-48 bg-slate-600 rounded-full"></div>
<div className="w-1 h-32 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>

<div className="flex z-10 group-hover:bg-black/10 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.4)] group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-slate-900 text-3xl ml-1" icon="lucide:play"></iconify-icon>
</div>
</div>
<div className="z-10 text-white text-left absolute bottom-6 left-6">
<p className="uppercase text-xs font-bold text-lime-400 tracking-widest mb-1" style={{}}>OBEJRZYJ WIDEO</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="group flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-slate-950 text-lg px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-lime-400/20 active:scale-[0.98]" href="#offer">
<span className="">DOŁĄCZ DO PROGRAMU</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-slate-50 w-full border-slate-200 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto">
<div className="flex items-center gap-3 mb-10">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-sm border border-red-200">!</span>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Diagnoza: Czy to brzmi znajomo?</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-slate-100 p-3 rounded-lg group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-500 group-hover:text-red-500 text-2xl" icon="lucide:battery-warning"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 mb-2 text-lg">Permanentne wyczerpanie</h4>
<p className="text-slate-500 leading-relaxed">Budzisz się zmęczona nawet po 8 godzinach snu? Kawa przestała działać, a po południu marzysz tylko o drzemce?</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-slate-100 p-3 rounded-lg group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-500 group-hover:text-red-500 text-2xl" icon="lucide:cloud-fog"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-2 text-lg">Tycie "z powietrza"</h4>
<p className="text-slate-500 leading-relaxed">Masz wrażenie, że waga idzie w górę od samego patrzenia na jedzenie, mimo że jesz bardzo mało i pilnujesz diety?</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-slate-100 p-3 rounded-lg group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-500 group-hover:text-red-500 text-2xl" icon="lucide:activity"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 mb-2 text-lg">Lęk o przyszłość</h4>
<p className="text-slate-500 leading-relaxed">Boisz się, że Twój stan zdrowia prowadzi prosto do cukrzycy typu 2, a ciało staje się dla Ciebie więzieniem?</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors group">
<div className="flex items-start gap-4">
<div className="bg-slate-100 p-3 rounded-lg group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-500 group-hover:text-red-500 text-2xl" icon="lucide:stethoscope"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-2 text-lg">Brak pomocy medycznej</h4>
<p className="text-slate-500 leading-relaxed">Masz dość lekarzy, którzy tylko zwiększają dawki leków lub mówią "mniej jeść", a waga wciąż stoi w miejscu?</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl px-6 py-24">
<div className="text-center mb-16">
<p className="text-lime-600 font-bold tracking-widest uppercase text-sm mb-3">ROZWIĄZANIE</p>
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-4" style={{}}>PROTOKÓŁ: Reset Metaboliczny V2.0</h2>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">Most nad przepaścią między chorobą a zdrowiem. System oparty na nauce, nie na silnej woli.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50">
<div className="w-14 h-14 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center shadow-lg">
<iconify-icon className="text-3xl" icon="lucide:dna"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-bold text-slate-900 mb-2">1. Naprawa Biochemii</h3>
<p className="text-xs font-bold text-lime-600 uppercase mb-3 tracking-wide">Protokół Low-Insulin</p>
<p className="text-slate-500 leading-relaxed text-sm">
                            Naprawiamy wrażliwość insulinową i sygnalizację leptyny u źródła. Zmieniamy sygnały hormonalne, dzięki czemu ciało przestaje magazynować, a zaczyna spalać.
                        </p>
</div>
</div>

<div className="flex flex-col gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50">
<div className="w-14 h-14 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center shadow-lg">
<iconify-icon className="text-3xl" icon="lucide:clock"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-bold text-slate-900 mb-2">2. Logistyka dla Zapracowanych</h3>
<p className="text-xs font-bold text-lime-600 uppercase mb-3 tracking-wide">Bez stania w garach</p>
<p className="text-slate-500 leading-relaxed text-sm">
                            Posiłki, które przygotujesz w 15 minut. System dopasowany do pracy zmianowej i smaczny dla całej rodziny (mąż i dzieci nie zauważą, że są na diecie).
                        </p>
</div>
</div>

<div className="flex flex-col gap-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50">
<div className="w-14 h-14 rounded-xl bg-slate-900 text-lime-400 flex items-center justify-center shadow-lg">
<iconify-icon className="text-3xl" icon="lucide:zap"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 mb-2">3. Aktywacja Metaboliczna</h3>
<p className="text-xs font-bold text-lime-600 uppercase mb-3 tracking-wide">Zamiast morderczego cardio</p>
<p className="text-slate-500 leading-relaxed text-sm">
                            Krótkie, 15-minutowe sesje ruchowe, które uwrażliwiają mięśnie na insulinę. Trening, który daje energię, zamiast ją odbierać. Bez sprzętu.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-950 text-white py-24 px-6 border-y border-slate-800">
<div className="max-w-6xl mx-auto flex flex-col items-center">
<h2 className="md:text-4xl text-3xl font-bold tracking-tight text-center mb-16" style={{}}>Wyniki moich podopiecznych:</h2>

<div className="grid md:grid-cols-3 gap-8 w-full mb-16">

<div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden group hover:border-lime-400/50 transition-all">
<div className="aspect-[4/5] bg-slate-800 relative flex items-center justify-center">
<div className="text-slate-600 font-mono text-xs uppercase tracking-widest border border-slate-700 px-4 py-2 rounded">FOTO PRZED / PO</div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<p className="text-xl font-bold text-white mb-2" style={{}}>Paula</p>
<div className="flex flex-col gap-2 text-sm text-slate-400">
<div className="flex border-slate-800 border-b pb-1 justify-between">
<span className="" style={{}}>Waga</span>
<span className="text-lime-400 font-mono">25 → 8 uIU/ml</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden group hover:border-lime-400/50 transition-all">
<div className="aspect-[4/5] bg-slate-800 relative flex items-center justify-center">
<div className="text-slate-600 font-mono text-xs uppercase tracking-widest border border-slate-700 px-4 py-2 rounded">FOTO PRZED / PO</div>
</div>
<div className="p-6">
<p className="text-xl font-bold text-white mb-2" style={{}}>Magda</p>
<div className="flex flex-col gap-2 text-sm text-slate-400">
<div className="flex justify-between border-b border-slate-800 pb-1">
<span className="">Waga</span>
<span className="text-lime-400 font-mono">118kg → 94kg</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden group hover:border-lime-400/50 transition-all">
<div className="aspect-[4/5] bg-slate-800 relative flex items-center justify-center">
<div className="text-slate-600 font-mono text-xs uppercase tracking-widest border border-slate-700 px-4 py-2 rounded">FOTO PRZED / PO</div>
</div>
<div className="p-6">
<p className="text-xl font-bold text-white mb-2" style={{}}>Basia</p>
<div className="flex flex-col gap-2 text-sm text-slate-400">
<div className="flex justify-between border-b border-slate-800 pb-1">
<span className="" style={{}}>Waga</span>
<span className="text-lime-400 font-mono">Norma na czczo</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative group/carousel">

<div className="flex justify-between items-end mb-6 px-2">
<div>
<h3 className="text-xl font-bold text-white">Co piszą uczestniczki?</h3>
<p className="text-slate-400 text-sm mt-1">Przesuń, aby zobaczyć więcej opinii</p>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors border border-slate-700" onclick="scrollCarousel(-1)">
<iconify-icon className="text-lg" icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-lime-400 hover:bg-lime-500 text-slate-900 flex items-center justify-center transition-colors shadow-lg" onclick="scrollCarousel(1)">
<iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar scroll-smooth" id="testimonials-carousel">

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">

<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+1"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+2"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+3"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+4"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+5"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+6"/>
</div>

<div className="snap-center flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
<img alt="Opinia screenshot" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://placehold.co/400x600/1e293b/a3e635?text=Opinia+7"/>
</div>
</div>
</div>


</div>
</section>

<section className="w-full max-w-4xl pt-24 pr-6 pb-24 pl-6" id="offer">
<div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">

<div className="bg-slate-900 text-white text-center py-4 px-6">
<p className="text-sm font-bold tracking-wider uppercase text-lime-400">Kompleksowa Transformacja 90 Dni</p>
</div>
<div className="p-8 md:p-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 border-b border-slate-100 pb-8">
<div className="">
<h2 className="text-3xl font-bold text-slate-900 mb-2">Co dokładnie kupujesz?</h2>
<p className="text-slate-500">Pełen pakiet opieki i narzędzi</p>
</div>
<div className="text-right">
<div className="text-sm text-slate-400 line-through font-medium">Wartość: 4500 PLN</div>
<div className="text-4xl font-bold text-slate-900 tracking-tight" style={{}}>1999 PLN</div>
</div>
</div>
<div className="space-y-6">

<div className="flex gap-5 items-start">
<div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-lg" icon="lucide:file-check"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-lg">Indywidualny Protokół Żywieniowy</h4>
<p className="text-slate-500 mt-1" style={{}}>Koniec z liczeniem kalorii – jesz tyle, by być sytą. Plan dopasowany do Twoich wyników badań.</p>
</div>
</div>

<div className="flex gap-5 items-start">
<div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-lg" icon="lucide:dumbbell"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-lg">System Aktywacji Metabolicznej</h4>
<p className="text-slate-500 mt-1">Mikrotreningi, które wykonasz w domu. Uwrażliwiamy mięśnie na insulinę bez karnetu na siłownię.</p>
</div>
</div>

<div className="flex gap-5 items-start">
<div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-lg" icon="lucide:message-circle"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 text-lg">Codzienna Opieka 1:1 i Analiza</h4>
<p className="text-slate-500 mt-1">Nie zostawiam Cię samej z PDF-em. Reagujemy na każdy zastój wagi i na bieżąco modyfikujemy strategię.</p>
</div>
</div>

<div className="flex gap-5 items-start p-5 bg-slate-50 rounded-xl border border-slate-200/60 mt-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon className="text-lg" icon="lucide:gift"></iconify-icon>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="font-bold text-slate-900" style={{}}>BONUS: Trener AI: Ketuś(wersja beta)</h4>
<span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded uppercase">Gratis</span>
</div>
<p className="text-sm text-slate-500" style={{}}>Twój asystent, dziennik, i motywator - aplikacja która posiada całą moją wiedzę, odpowie Ci na każde pytanie, i zapisuje codziennie Twój progres, tak żebym mógł go łatwo monitorować(Wartość: 497 PLN)</p>
</div>
</div>
</div>
</div>
<div className="p-8 bg-slate-50 flex flex-col items-center border-t border-slate-200">
<button className="hover:bg-lime-400 shadow-lime-500/20 transition-all active:scale-[0.99] text-xl font-bold text-slate-950 bg-lime-500 w-full rounded-xl mb-4 pt-5 pb-5 shadow-lg" style={{}}>KUPUJĘ DOSTĘP – 1999 PLN</button>
<p className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
                        30-dniowa gwarancja satysfakcji. Płatność bezpieczna przez Naffy.
                    </p>
</div>
</div>
</section>


<section className="w-full bg-slate-50 border-y border-slate-200 py-20 px-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-lime-400 mb-6 shadow-xl">
<iconify-icon className="text-4xl" icon="lucide:shield-check"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-slate-900 mb-6" style={{}}>Gwarancja Wyników</h2>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-lime-400"></div>
<p className="leading-relaxed text-lg font-medium text-slate-600" style={{}}>Jeśli w ciągu 12 tygodni Twoje wyniki insuliny się nie poprawią lub nie zobaczysz wyraźnej redukcji obwodów, <span className="font-bold text-slate-900 bg-lime-100 pr-1 pl-1">pracuję z Tobą ZA DARMO do skutku</span>*.</p>
<div className="mt-6 flex justify-center">
</div>
</div>
</div>
</section>

<section className="w-full max-w-3xl px-6 py-24">
<h2 className="text-3xl font-bold text-center text-slate-900 mb-12 tracking-tight">Pytania i odpowiedzi</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-900 hover:bg-slate-50 transition-colors text-lg">
                        Czy muszę gotować osobno dla męża i dzieci?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                        Nie. To byłby absurd przy Twoim trybie życia. Posiłki są skomponowane tak, by smakowały całej rodzinie. Dla męża i dzieci po prostu dodajemy zdrowe źródło węglowodanów (np. ziemniaki czy kaszę), a baza (mięso/sos/warzywa) zostaje ta sama.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-900 hover:bg-slate-50 transition-colors text-lg">
                        Czy dam radę przy pracy na nocki (system zmianowy)?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                        Tak. System jest stworzony specjalnie pod chaos czasowy. Mam dedykowane strategie żywieniowe dla pielęgniarek i osób pracujących zmianowo, które regulują rytm dobowy i zapobiegają napadom głodu w nocy.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors text-lg font-bold text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        Czy to bezpieczne przy IO i Hashimoto?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" height="18" icon="lucide:chevron-down" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                        Tak, to wręcz niezbędne. Reset Metaboliczny jest ukierunkowany na wyciszenie stanów zapalnych (kluczowe przy Hashimoto) i obniżenie poziomu insuliny (kluczowe przy IO). Nie stosujemy głodówek, które niszczą tarczycę.
                    </div>
</details>
</div>
</section>

<footer className="text-white text-center bg-slate-950 w-full pt-20 pr-6 pb-20 pl-6 border-t border-slate-800">
<div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight">Koniec z wymówkami.</h2>
<p className="text-slate-400 text-lg md:text-xl">Twoje ciało czeka na reset. Decyzja należy do Ciebie.</p>
<div className="flex flex-col w-full gap-4 mt-4">
<a className="hover:bg-lime-400 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xl font-bold text-slate-950 bg-lime-500 w-full rounded-xl pt-5 pb-5 shadow-lg" href="#offer" style={{}}>KUPUJĘ DOSTĘP – 1999 PLN</a>
<a className="text-slate-400 hover:text-white font-medium text-sm transition-colors border-b border-transparent hover:border-white w-fit mx-auto pb-0.5" href="#consult">
                        Lub umów bezpłatną konsultację wstępną
                    </a>
</div>
<p className="text-xs text-slate-600 mt-12 font-mono">© 2026 YOKEN. All rights reserved.</p>
</div>
</footer>
</main>

    </>
  );
}
