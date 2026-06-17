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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm font-medium tracking-tight uppercase border border-zinc-200 px-3 py-1 rounded bg-zinc-50 text-zinc-900" href="#home">
                    PRÓCHNICA+
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#home">Home</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#uczestnicy">Uczestnicy</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#metodologia">Metodologia</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#etapy">Harmonogram</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#wyniki">Wyniki</a>
</div>
</div>
<a className="hidden md:inline-flex items-center justify-center h-8 px-4 text-xs font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-all shadow-sm" href="#contact">
                Zadaj pytanie
            </a>

<button className="md:hidden text-zinc-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto" id="home">

<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-100 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-500">Projekt badawczo-rozwojowy</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Wspólnie wracamy do korzeni.
            </h1>
<p className="text-lg text-zinc-500 leading-relaxed font-light">
                Program Próchnica+ to innowacyjny most między nauką a praktyką. Analizujemy wpływ produktów CarboHort na żyzność gleby, kondycję roślin i jakość plonu. To nie koszt, to inwestycja w przyszłość rolnictwa.
            </p>
</div>

<div className="w-full aspect-video bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center relative overflow-hidden group mb-24">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent"></div>
<button className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 border border-zinc-100">
<iconify-icon className="text-zinc-900 ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="absolute bottom-6 left-6 text-sm font-medium text-zinc-900 bg-white/80 px-3 py-1 rounded backdrop-blur border border-white/20">
                Film otwarcia
            </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-start">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-4">Założenia i cele programu</h2>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Nasz nadrzędny cel: Odbudowa i systematyczne zwiększanie zawartości materii organicznej (MO) w glebie! Wykazujemy skuteczność Carbohumic w 6 gospodarstwach z różnymi uprawami.
                </p>
<button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors">
                    Zobacz szczegółowe cele
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-400 mb-3" icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-sm font-medium mb-1">Lepsza gospodarka wodna</h3>
<p className="text-xs text-zinc-500">Wzrost pojemności wodnej, mniejsze straty przy upałach.</p>
</div>
<div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-400 mb-3" icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-sm font-medium mb-1">Ograniczenie erozji</h3>
<p className="text-xs text-zinc-500">Mniejsze zaskorupianie i spływ powierzchniowy.</p>
</div>
<div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-400 mb-3" icon="lucide:sprout" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-sm font-medium mb-1">Witalność roślin</h3>
<p className="text-xs text-zinc-500">Lepszy rozwój korzeni i odporność na stres.</p>
</div>
<div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-400 mb-3" icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-sm font-medium mb-1">Wzrost wartości ziemi</h3>
<p className="text-xs text-zinc-500">Trwała poprawa stanowiska i wyższa klasa gleby.</p>
</div>
</div>
</div>

<div className="mb-32">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight">Uczestnicy programu</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">

<div className="min-w-[280px] p-6 rounded-lg border border-zinc-200 bg-white snap-center">
<div className="w-10 h-10 bg-zinc-100 rounded-full mb-4 flex items-center justify-center text-xs font-medium">MP</div>
<h3 className="text-sm font-medium mb-1">Michał Piątek</h3>
<p className="text-xs text-zinc-500 mb-3">Aroniowa Demo Farma</p>
<div className="flex gap-2 mb-1">
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Aronia</span>
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Łódzkie</span>
</div>
</div>

<div className="min-w-[280px] p-6 rounded-lg border border-zinc-200 bg-white snap-center">
<div className="w-10 h-10 bg-zinc-100 rounded-full mb-4 flex items-center justify-center text-xs font-medium">JM</div>
<h3 className="text-sm font-medium mb-1">Jacek Maliszewski</h3>
<p className="text-xs text-zinc-500 mb-3">Gospodarstwo Sadownicze</p>
<div className="flex gap-2 mb-1">
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Jabłoń</span>
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Mazowieckie</span>
</div>
</div>

<div className="min-w-[280px] p-6 rounded-lg border border-zinc-200 bg-white snap-center">
<div className="w-10 h-10 bg-zinc-100 rounded-full mb-4 flex items-center justify-center text-xs font-medium">ŁK</div>
<h3 className="text-sm font-medium mb-1">Łukasz Kopeć</h3>
<p className="text-xs text-zinc-500 mb-3">Gospodarstwo Sadownicze</p>
<div className="flex gap-2 mb-1">
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Malina</span>
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Lubelskie</span>
</div>
</div>

<div className="min-w-[280px] p-6 rounded-lg border border-zinc-200 bg-white snap-center">
<div className="w-10 h-10 bg-zinc-100 rounded-full mb-4 flex items-center justify-center text-xs font-medium">DP</div>
<h3 className="text-sm font-medium mb-1">Daniel Piasecki</h3>
<p className="text-xs text-zinc-500 mb-3">Gospodarstwo Sadownicze</p>
<div className="flex gap-2 mb-1">
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Grusza</span>
<span className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600">Mazowieckie</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 border-t border-zinc-100 pt-16">
<div className="flex gap-5">
<div className="w-16 h-16 bg-zinc-200 rounded-full flex-shrink-0 grayscale"></div>
<div>
<h3 className="text-base font-medium mb-1">Dr inż. Jerzy Próchnicki</h3>
<p className="text-xs text-zinc-500 leading-relaxed max-w-sm mb-3">
                        Doktor nauk rolniczych z 45-letnim stażem. Ekspert Rolnictwa 4.0, regeneracji gleby i "Europejskiego Zielonego Ładu". Współzałożyciel Polskiego Stowarzyszenia Zrównoważonego Rolnictwa i Żywności.
                    </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-16 h-16 bg-zinc-200 rounded-full flex-shrink-0 grayscale"></div>
<div>
<h3 className="text-base font-medium mb-1">Dr inż. Radosław Łaźny</h3>
<p className="text-xs text-zinc-500 leading-relaxed max-w-sm mb-3">
                        Ekspert w produkcji warzywnej i jagodowej. Właściciel firmy Plon Expert. Specjalizuje się w rekultywacji gleb i mikrobiomie glebowym.
                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
<div className="text-center p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-3xl font-medium tracking-tight mb-1">168</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Próbek gleby rocznie</div>
</div>
<div className="text-center p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-3xl font-medium tracking-tight mb-1">6</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Różnych upraw</div>
</div>
<div className="text-center p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-3xl font-medium tracking-tight mb-1">+3</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Lata badań</div>
</div>
<div className="text-center p-6 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="text-3xl font-medium tracking-tight mb-1">2</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide">Dawki Carbohumic</div>
</div>
</div>

<div className="bg-zinc-900 text-white rounded-2xl p-8 md:p-12">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3">
<h2 className="text-2xl font-medium tracking-tight mb-4">Rzetelność ponad wszystko</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Praca z organiką to nie tabliczka mnożenia. Publikujemy wszystkie wyniki – pozytywne, neutralne i negatywne. Tylko rzetelne doświadczenia prowadzą do zmian.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-3">
<iconify-icon className="text-zinc-300" icon="lucide:eye"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2">Transparentność</h3>
<p className="text-xs text-zinc-500">Publikujemy wszystkie wyniki. Tylko pełny obraz pozwala wyciągnąć wnioski.</p>
</div>
<div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-3">
<iconify-icon className="text-zinc-300" icon="lucide:calendar"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2">Częstotliwość</h3>
<p className="text-xs text-zinc-500">Pełne raporty raz w roku po zbiorach, bieżące aktualizacje w zakładce Wyniki.</p>
</div>
<div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-3">
<iconify-icon className="text-zinc-300" icon="lucide:award"></iconify-icon>
</div>
<h3 className="text-sm font-medium mb-2">Profesjonalizm</h3>
<p className="text-xs text-zinc-500">Analiza i nadzór przez doświadczonych ekspertów z dziedziny gleboznawstwa.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-zinc-200" id="uczestnicy">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xl font-medium tracking-tight mb-2 text-zinc-400">02</h2>
<h2 className="text-3xl font-medium tracking-tight mb-12">Szczegółowe dane gospodarstw</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Aroniowa Demo Farma</h3>
<p className="text-xs text-zinc-500">Michał Piątek</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Aronia</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Cielądz, Łódzkie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">Mozaikowata, piaszczysta</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">1.5 ha, 9 rzędów</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Gospodarstwo ogrodniczo-pszczelarski. Uprawa aronii na 6,5 ha w technologii zero pozostałości. Pasieka wędrowna współgrająca z uprawą.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Gosp. Sadownicze</h3>
<p className="text-xs text-zinc-500">Jacek Maliszewski</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Jabłoń</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Grójec, Mazowieckie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">Klasa VIa, piaszczysta</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">1 ha, 9 rzędów</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Wielopokoleniowe gospodarstwo. Sad po sadzie od 50 lat. Skupienie na jakości plonu przed ilością. Problemy z retencją wody i fosforem.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Gosp. Sadownicze</h3>
<p className="text-xs text-zinc-500">Łukasz Kopeć</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Malina</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Chodel, Lubelskie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">IV-V klasa, przepuszczalna</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">80 arów, 9 rzędów</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Tradycja 60-letnia. Oprócz malin, sady wiśniowe i czereśniowe. Gleba uboga w materię organiczną, słabo trzymająca wodę.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Gosp. Sadownicze</h3>
<p className="text-xs text-zinc-500">Daniel Piasecki</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Grusza</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Warka, Mazowieckie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">III klasa, zmęczona</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">1 ha, 14 rzędów</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Gospodarstwo od lat 30 XX w. Ziemia dobrej klasy ale zmęczona monokulturą. Miejscami gliniasta, zbita.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Gosp. Rolne</h3>
<p className="text-xs text-zinc-500">Damian Caban</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Truskawka</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Czerwińsk n/W, Mazowieckie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">IV-V klasa, słaba retencja</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">1 ha, rzędy 250m</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Gospodarstwo rodzinne od 20 lat. Główny problem: bardzo przepuszczalna gleba wymagająca częstego nawadniania.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold">Gosp. Rolne</h3>
<p className="text-xs text-zinc-500">Tomasz Radomski</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 rounded text-zinc-600">Papryka</span>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Lokalizacja</span>
<span className="text-right">Przytyk, Mazowieckie</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Gleba</span>
<span className="text-right">IV klasa, lekka</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs border-b border-zinc-100 pb-2">
<span className="text-zinc-400">Obszar</span>
<span className="text-right">20 arów, Tunel</span>
</div>
<div className="mt-4">
<p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-4">
                                Intensywna produkcja warzywnicza. Uprawa bezorkowa od 8 lat. Specyficzny układ w tunelach foliowych.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="metodologia">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-xl font-medium tracking-tight mb-2 text-zinc-400">03</h2>
<h2 className="text-3xl font-medium tracking-tight mb-8">Metodologia badań</h2>
<p className="text-base text-zinc-600 mb-12">
                Program Próchnica+ opiera się na transparentnej i powtarzalnej metodologii. W każdym gospodarstwie wyodrębniliśmy trzy obszary badawcze w układzie naprzemiennym (Test - Kontrola - Test).
            </p>

<div className="mb-16 border border-zinc-200 rounded-xl p-6 bg-zinc-50">
<h3 className="text-sm font-semibold mb-6">Schemat obszarów doświadczalnych</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-600" icon="lucide:flask-conical"></iconify-icon>
<h4 className="text-sm font-medium text-emerald-900">Obszar Testowy</h4>
</div>
<ul className="text-xs text-emerald-800 space-y-1">
<li>• Carbohumic 200 l/ha (3 rzędy)</li>
<li>• Carbohumic 500 l/ha (3 rzędy)</li>
<li>• Min. 2 aplikacje w sezonie</li>
</ul>
</div>
<div className="bg-white border border-zinc-200 p-4 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="lucide:ban"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Obszar Kontrolny</h4>
</div>
<ul className="text-xs text-zinc-500 space-y-1">
<li>• Standardowa technologia</li>
<li>• Bez produktów CarboHort</li>
<li>• 3 rzędy dla porównania</li>
</ul>
</div>
<div className="bg-zinc-100 border border-zinc-200 p-4 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500" icon="lucide:map-pin"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Obszar Referencyjny</h4>
</div>
<ul className="text-xs text-zinc-500 space-y-1">
<li>• Punkt odniesienia</li>
<li>• Gleba bez uprawy/nawożenia</li>
<li>• Bazowa analiza zmian</li>
</ul>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-lg font-medium mb-4">Zakres badań</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Zawartość materii organicznej (MO) i pH gleby</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Zasobność w Ca, Mg, K, P</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Struktura i zwięzłość gleby (penetrometr)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Wigor, dynamika wzrostu i system korzeniowy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">Plon całkowity, handlowy i jakość</span>
</li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-4">Harmonogram aplikacji</h3>
<div className="relative pl-6 border-l border-zinc-200 space-y-8">
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-200 border-2 border-white"></span>
<h4 className="text-sm font-semibold">Wiosna (po kwitnieniu)</h4>
<p className="text-xs text-zinc-500 mt-1">Pierwsza dawka 200 i 500 l/ha.</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-200 border-2 border-white"></span>
<h4 className="text-sm font-semibold">Jesień (po zbiorach)</h4>
<p className="text-xs text-zinc-500 mt-1">Druga dawka 200 i 500 l/ha.</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-900 border-2 border-white"></span>
<h4 className="text-sm font-semibold">Pobór próbek</h4>
<p className="text-xs text-zinc-500 mt-1">Raz w roku (październik–listopad).</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-zinc-200" id="etapy">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-xl font-medium tracking-tight mb-2 text-zinc-400">04</h2>
<h2 className="text-3xl font-medium tracking-tight mb-8">Harmonogram prac</h2>

<div className="flex flex-wrap gap-2 mb-12">
<button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-full shadow-sm">Wszyscy</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Aronia</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Jabłoń</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Malina</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Grusza</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Truskawka</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium rounded-full transition-colors">Papryka</button>
</div>

<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white group-[.is-active]:bg-zinc-900 group-[.is-active]:text-white text-zinc-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs font-medium">
                        2025
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-lg border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold text-sm">Start Programu</h3>
<span className="text-[10px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded">Jesień 2025</span>
</div>
<ul className="text-xs text-zinc-500 space-y-2">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Pobór próbek gleby (stan wyjściowy)</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Pierwsza aplikacja Carbohumic</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Wyniki badań gleby (Grudzień)</li>
</ul>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white text-zinc-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs font-medium">
                        2026
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-lg border border-zinc-200 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold text-sm">Pełny Cykl Badawczy</h3>
<span className="text-[10px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded">Wiosna - Jesień</span>
</div>
<ul className="text-xs text-zinc-500 space-y-2">
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Druga aplikacja (Wiosna)</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Ocena kondycji roślin i plonowania</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5 text-zinc-300" icon="lucide:arrow-right"></iconify-icon> Pobór próbek i raport roczny</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="wyniki">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-xl font-medium tracking-tight mb-2 text-zinc-400">05</h2>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight">Raporty i Wyniki</h2>
<p className="text-zinc-500 mt-2 text-sm">Przegląd wyników aktualizowany po każdym sezonie.</p>
</div>

<div className="flex gap-2 mt-6 md:mt-0">
<div className="relative">
<select className="appearance-none bg-zinc-50 border border-zinc-200 text-zinc-700 py-2 pl-3 pr-8 rounded text-xs font-medium focus:outline-none focus:ring-1 focus:ring-zinc-300 cursor-pointer">
<option>Wszystkie uprawy</option>
<option>Jabłoń</option>
<option>Grusza</option>
</select>
<iconify-icon className="absolute right-2 top-2.5 text-zinc-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
<div className="relative">
<select className="appearance-none bg-zinc-50 border border-zinc-200 text-zinc-700 py-2 pl-3 pr-8 rounded text-xs font-medium focus:outline-none focus:ring-1 focus:ring-zinc-300 cursor-pointer">
<option>Rok 2026</option>
<option>Rok 2027</option>
</select>
<iconify-icon className="absolute right-2 top-2.5 text-zinc-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="p-6 rounded-xl border border-zinc-200 bg-white">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium">Materia organiczna (MO)</h3>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+12% wzrost</span>
</div>
<div className="h-48 flex items-end gap-4 justify-between px-2">

<div className="w-full flex flex-col gap-1 items-center group">
<div className="w-full flex gap-1 h-32 items-end justify-center">
<div className="w-3 bg-zinc-200 h-[40%] rounded-t-sm"></div>
<div className="w-3 bg-zinc-900 h-[45%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400">Aronia</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group">
<div className="w-full flex gap-1 h-32 items-end justify-center">
<div className="w-3 bg-zinc-200 h-[30%] rounded-t-sm"></div>
<div className="w-3 bg-zinc-900 h-[50%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400">Jabłoń</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group">
<div className="w-full flex gap-1 h-32 items-end justify-center">
<div className="w-3 bg-zinc-200 h-[35%] rounded-t-sm"></div>
<div className="w-3 bg-zinc-900 h-[60%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400">Grusza</span>
</div>
<div className="w-full flex flex-col gap-1 items-center group">
<div className="w-full flex gap-1 h-32 items-end justify-center">
<div className="w-3 bg-zinc-200 h-[25%] rounded-t-sm"></div>
<div className="w-3 bg-zinc-900 h-[40%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400">Malina</span>
</div>
</div>
<div className="flex items-center justify-center gap-4 mt-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-zinc-200"></span>
<span className="text-[10px] text-zinc-500">Kontrola</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
<span className="text-[10px] text-zinc-500">Test (500l)</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium mb-4 px-1">Dostępne Raporty PDF</h3>
<a className="block p-4 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300 transition-all group" href="#">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded bg-white border border-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors">Raport Roczny 2026</h4>
<p className="text-xs text-zinc-500 mt-0.5">Daniel Piasecki (Grusza) - Pełna analiza</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="lucide:download" width="18"></iconify-icon>
</div>
</a>
<a className="block p-4 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300 transition-all group" href="#">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-10 h-10 rounded bg-white border border-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors">Raport Roczny 2026</h4>
<p className="text-xs text-zinc-500 mt-0.5">Jacek Maliszewski (Jabłoń) - Pełna analiza</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="lucide:download" width="18"></iconify-icon>
</div>
</a>
<div className="p-4 rounded-lg border border-dashed border-zinc-200 bg-transparent flex items-center justify-center text-xs text-zinc-400">
                        Kolejne raporty dostępne w Listopadzie 2027
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-white py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Masz pytania dotyczące programu?</h3>
<p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-sm">
                    Skontaktuj się z koordynatorami projektu lub zostaw wiadomość, a wrócimy do Ciebie z odpowiedzią.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
<span>kontakt@prochnicaplus.pl</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
<span>+48 123 456 789</span>
</div>
</div>
</div>
<form className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-800">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400">Imię</label>
<input className="bg-zinc-900 border border-zinc-700 rounded h-10 px-3 text-sm text-white focus:outline-none focus:border-zinc-500" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-zinc-400">Email</label>
<input className="bg-zinc-900 border border-zinc-700 rounded h-10 px-3 text-sm text-white focus:outline-none focus:border-zinc-500" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5 mb-6">
<label className="text-xs text-zinc-400">Wiadomość</label>
<textarea className="bg-zinc-900 border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-zinc-500" rows="4"></textarea>
</div>

<div className="flex items-start gap-3 mb-6">
<div className="relative flex items-center">
<input className="peer h-4 w-4 opacity-0 absolute cursor-pointer" id="consent" type="checkbox"/>
<div className="w-4 h-4 bg-zinc-900 border border-zinc-600 rounded peer-checked:bg-white peer-checked:border-white transition-colors flex items-center justify-center">
<iconify-icon className="text-zinc-900 opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
</div>
<label className="text-xs text-zinc-500 leading-snug cursor-pointer" htmlFor="consent">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie.
                    </label>
</div>
<button className="w-full bg-white text-zinc-900 h-10 rounded font-medium text-sm hover:bg-zinc-100 transition-colors" type="submit">
                    Wyślij wiadomość
                </button>
</form>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
<span>© 2025 Program Próchnica+</span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>

    </>
  );
}
