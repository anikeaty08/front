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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('mousemove', e => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<div className="fixed inset-0 z-[-1]" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'}}></div>
<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>

<div className="w-full border-b border-white/5 bg-[#080808] z-50 relative hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-9 flex justify-between items-center text-xs text-gray-500 font-medium">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-gray-300 transition-colors cursor-default">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '14px'}}></iconify-icon>
                    Poznań, ul. Słupska 10 (Krzyżowniki)
                </span>
<span className="w-px h-3 bg-white/10"></span>
<span className="flex items-center gap-1.5 hover:text-gray-300 transition-colors cursor-default">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '14px'}}></iconify-icon>
                    Pn-Pt: 8:00 - 16:00
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-orange-400 transition-colors" href="mailto:sklep@metalmax.pl">sklep@metalmax.pl</a>
</div>
</div>
</div>

<div className="fixed top-4 md:top-12 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
<nav className="glass-nav rounded-full px-1.5 py-1.5 flex items-center justify-between w-full max-w-4xl pointer-events-auto shadow-2xl">

<a className="flex items-center gap-2 pl-4 pr-6 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-900/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="" icon="solar:bolt-bold" style={{fontSize: '20px'}}></iconify-icon>
</div>
<span className="text-base font-bold text-white tracking-tight">F.H.U. Kokociński</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
<a className="px-4 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#oferta">Oferta</a>
<a className="hover:text-white hover:bg-white/5 transition-all text-xs font-medium text-gray-400 rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#dlaczego-my">O nas</a>
<a className="px-4 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#opinie">Opinie</a>
<a className="px-4 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#faq">FAQ</a>
</div>

<a className="ml-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold tracking-wide hover:bg-gray-200 transition-all flex items-center gap-2" href="tel:618420385">
<span>61 842 03 85</span>
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '16px'}}></iconify-icon>
</a>
</nav>
</div>

<main className="sm:pt-48 sm:pb-24 overflow-hidden pt-32 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="spotlight-card rounded-3xl p-[1px]" style={{'--mouse-x': '1333.5px', '--mouse-y': '102px'}}>
<div className="spotlight-inner bg-[#0C0C0C] rounded-3xl relative overflow-hidden">

<div className="grid lg:grid-cols-2 min-h-[500px]">

<div className="sm:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                                Dostępne od ręki
                            </div>
<h1 className="sm:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-6">Sklep metalowy <br/> <span className="text-gray-500">F.H.U.</span> <span className="bg-clip-text text-glow text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Kokociścy</span></h1>
<p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-md mb-8">
                                Największy wybór śrub, wkrętów i narzędzi w zachodnim Poznaniu. Zaopatrujemy firmy budowlane i klientów indywidualnych przy ul. Słupskiej 10.
                            </p>
<div className="flex flex-wrap gap-4">
<a className="hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium text-white bg-[#1A1A1A] border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="https://maps.app.goo.gl/rs1Nr35XX4mk7m3j6" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" style={{fontSize: '18px'}}></iconify-icon>
                                    Jak dojechać?
                                </a>
<a className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-gray-300 text-sm font-medium hover:text-white transition-all" href="#kontakt">
                                    Zapytaj o produkt
                                </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-6 text-xs text-gray-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:verified-check-bold"></iconify-icon>
<span>Sklep stacjonarny</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:box-bold"></iconify-icon>
<span>Hurt &amp; Detal</span>
</div>
</div>
</div>

<div className="relative h-64 lg:h-auto overflow-hidden">
<div className="z-10 lg:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] to-transparent z-10 lg:h-32 bottom-0"></div>
<img alt="Magazyn śrub Metal-Max" className="hover:grayscale-0 transition-all duration-700 opacity-60 w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a3b687a-5ebe-4b3d-aa78-c07a0d87dfe2_1600w.png"/>
</div>
</div>

<div className="border-t border-white/5 bg-[#080808] py-4 relative z-20">
<div className="ticker-wrap w-full opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="ticker-content">
<span className="mx-8 text-lg font-bold tracking-widest text-white">FISCHER</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">WKRĘT-MET</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">RAWLPLUG</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">STANLEY</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">MAKITA</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">KOELNER</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">BOSCH</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">SPAX</span>

<span className="mx-8 text-lg font-bold tracking-widest text-white">FISCHER</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">WKRĘT-MET</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">RAWLPLUG</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">STANLEY</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">MAKITA</span>
<span className="mx-8 text-lg font-bold tracking-widest text-white">KOELNER</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 max-w-7xl mx-auto px-6" id="oferta">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Asortyment</h2>
<p className="text-gray-400 text-sm">Wszystko, czego potrzebujesz do solidnego montażu.</p>
</div>
<a className="text-xs font-bold uppercase tracking-wider text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1" href="#kontakt">
                Zobacz pełną ofertę <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="spotlight-card rounded-2xl p-[1px] group" style={{'--mouse-x': '1333.5px', '--mouse-y': '-787px'}}>
<div className="spotlight-inner bg-[#111] p-6 rounded-2xl h-full flex flex-col hover:bg-[#161616] transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:screw-large-minimalistic-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Śruby i Wkręty</h3>
<p className="text-gray-500 text-xs leading-relaxed mb-4">Metryczne, calowe, drobnozwojne. Klasy 8.8, 10.9, 12.9. Nierdzewne A2 i kwasoodporne A4.</p>
<ul className="mt-auto space-y-1 text-[10px] text-gray-400 uppercase tracking-wide">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>Din 933 / 931</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>Wkręty do drewna</li>
</ul>
</div>
</div>

<div className="spotlight-card rounded-2xl p-[1px] group" style={{'--mouse-x': '1021.5px', '--mouse-y': '-787px'}}>
<div className="spotlight-inner bg-[#111] p-6 rounded-2xl h-full flex flex-col hover:bg-[#161616] transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sledgehammer-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Technika Zamocowań</h3>
<p className="text-gray-500 text-xs leading-relaxed mb-4">Kotwy mechaniczne i chemiczne, kołki rozporowe, dyble. Rozwiązania dla betonu i GK.</p>
<ul className="mt-auto space-y-1 text-[10px] text-gray-400 uppercase tracking-wide">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Kotwy chemiczne</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div>Pręty gwintowane</li>
</ul>
</div>
</div>

<div className="spotlight-card rounded-2xl p-[1px] group" style={{'--mouse-x': '709.5px', '--mouse-y': '-787px'}}>
<div className="spotlight-inner bg-[#111] p-6 rounded-2xl h-full flex flex-col hover:bg-[#161616] transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wrench-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Narzędzia i BHP</h3>
<p className="text-gray-500 text-xs leading-relaxed mb-4">Wiertła do metalu i betonu, tarcze, klucze, bity. Rękawice robocze, okulary ochronne.</p>
<ul className="mt-auto space-y-1 text-[10px] text-gray-400 uppercase tracking-wide">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Wiertła Cobalt</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Tarcze diamentowe</li>
</ul>
</div>
</div>

<div className="spotlight-card rounded-2xl p-[1px] group" style={{'--mouse-x': '397.5px', '--mouse-y': '-787px'}}>
<div className="spotlight-inner bg-[#111] p-6 rounded-2xl h-full flex flex-col hover:bg-[#161616] transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:link-circle-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Liny i Łańcuchy</h3>
<p className="text-gray-500 text-xs leading-relaxed mb-4">Osprzęt żeglarski i budowlany. Szekle, kausze, śruby rzymskie, karabińczyki.</p>
<ul className="mt-auto space-y-1 text-[10px] text-gray-400 uppercase tracking-wide">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Liny stalowe</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Zawiesia</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6" id="dlaczego-my">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-1 spotlight-card rounded-3xl p-[1px]" style={{'--mouse-x': '1333.5px', '--mouse-y': '-1131.5px'}}>
<div className="spotlight-inner bg-[#0E0E0E] p-8 rounded-3xl h-full flex flex-col justify-between">
<div className="">
<h3 className="text-xl font-semibold text-white mb-6">Dlaczego Metal-Max?</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0">
<span className="font-bold text-white text-xs">01</span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Sprzedaż na sztuki</h4>
<p className="text-gray-500 text-xs mt-1">Nie musisz kupować całego pudełka. Ważymy i liczymy tyle, ile potrzebujesz.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0">
<span className="font-bold text-white text-xs">02</span>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Doradztwo techniczne</h4>
<p className="text-gray-500 text-xs mt-1">Nasz zespół to praktycy. Pomożemy dobrać kotwę do podłoża i śrubę do obciążenia.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0">
<span className="font-bold text-white text-xs">03</span>
</div>
<div>
<h4 className="text-white text-sm font-medium">Lokalizacja</h4>
<p className="text-gray-500 text-xs mt-1">Wygodny dojazd na Krzyżowniki/Smochowice. Parking dla klientów przed sklepem.</p>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center justify-between text-xs text-gray-400">
<span>Godziny otwarcia:</span>
<span className="font-medium text-white" style={{}}>7:00 - 17:00</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 spotlight-card rounded-3xl p-[1px] relative group overflow-hidden min-h-[300px]" style={{'--mouse-x': '917.5px', '--mouse-y': '-1131.5px'}}>
<div className="spotlight-inner bg-[#0E0E0E] rounded-3xl h-full w-full absolute inset-0">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm">
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:shop-bold"></iconify-icon>
                                Jesteśmy na miejscu
                            </h4>
<p className="text-gray-400 text-xs mb-3">Posiadamy tysiące pozycji magazynowych dostępnych od ręki w naszym sklepie stacjonarnym.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/10 text-[10px] text-gray-300 border border-white/5">Śruby</span>
<span className="px-2 py-1 rounded bg-white/10 text-[10px] text-gray-300 border border-white/5">Narzędzia</span>
<span className="px-2 py-1 rounded bg-white/10 text-[10px] text-gray-300 border border-white/5">Chemia</span>
</div>
</div>
</div>
</div>
</div>
</div>
<textarea className="" style={{fontSize: '60px', fontWeight: '400', fontFamily: 'Geist, sans-serif', color: 'rgb(255, 255, 255)', lineHeight: '60px', textAlign: 'start', textTransform: 'none', letterSpacing: '-3px', position: 'absolute', left: '128.5px', top: '292px', width: '559px', height: '120px', boxSizing: 'border-box', padding: '0px', margin: '0px', border: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea></section>

<section className="py-12 border-y border-white/5 bg-[#080808]" id="opinie">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-white tracking-tight">Co mówią klienci?</h2>
<div className="flex justify-center items-center gap-2 mt-2 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-white text-sm font-medium ml-2">4.8 / 5.0</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#111] p-6 rounded-xl border border-white/5">
<p className="text-gray-400 text-xs italic mb-4">"Bardzo dobrze zaopatrzony sklep. Potrzebowałem nietypowych śrub drobnozwojnych do maszyny rolniczej - wszystko dostałem od ręki. Obsługa zna się na rzeczy."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-500 text-xs font-bold">MK</div>
<div>
<div className="text-white text-xs font-bold">Marek Kowalski</div>
<div className="text-gray-600 text-[10px]">Klient indywidualny</div>
</div>
</div>
</div>

<div className="bg-[#111] p-6 rounded-xl border border-white/5">
<p className="text-gray-400 text-xs italic mb-4">"Współpracujemy z Metal-Max od lat. Zawsze terminowe dostawy na budowę, dobre ceny i możliwość negocjacji przy większych ilościach. Polecam."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-500 text-xs font-bold">AB</div>
<div className="">
<div className="text-white text-xs font-bold">Adam Budowlany</div>
<div className="text-gray-600 text-[10px]">Firma Remontowa</div>
</div>
</div>
</div>

<div className="bg-[#111] p-6 rounded-xl border border-white/5">
<p className="text-gray-400 text-xs italic mb-4">"Super, że można kupić na sztuki, a nie całe paczki jak w marketach. Panowie zawsze doradzą jaki kołek dobrać do ściany. Duży parking."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-500 text-xs font-bold">PJ</div>
<div>
<div className="text-white text-xs font-bold">Piotr J.</div>
<div className="text-gray-600 text-[10px]">Mieszkaniec okolicy</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 gap-x-16 gap-y-16" id="kontakt">

<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Skontaktuj się z nami</h2>
<p className="text-gray-400 text-sm mb-8">Masz pytania techniczne? Szukasz konkretnego wymiaru? Zadzwoń lub napisz.</p>
<div className="space-y-6">
<a className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group" href="https://maps.google.com/?q=ul.+Słupska+10,+60-458+Poznań" target="_blank">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:map-point-bold-duotone" style={{fontSize: '20px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Adres</h4>
<p className="text-gray-400 text-sm mt-1">ul. Słupska 1060-458 Poznań (Krzyżowniki)</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group" href="tel:618420385">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-green-500 transition-colors">
<iconify-icon icon="solar:phone-calling-bold-duotone" style={{fontSize: '20px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Telefon</h4>
<p className="text-sm text-gray-400 mt-1">61 639 47 01</p>
<p className="text-gray-500 text-xs mt-0.5">Odbieramy w godzinach pracy</p>
</div>
</a>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:clock-circle-bold-duotone" style={{fontSize: '20px'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Godziny otwarcia</h4>
<div className="grid grid-cols-2 text-sm text-gray-400 mt-1 gap-x-8 gap-y-x-8">
<span className="">Poniedziałek - Piątek</span>
<span className="text-white text-right">7:00 - 17:00</span>
<span className="">
</span>
<span className="text-gray-600 text-right">Sobota 8:00 - 14:00, Niedziela nieczynne</span>
</div>
</div>
</div>
</div>
</div>

<div className="" id="faq">
<h3 className="text-xl font-semibold text-white mb-6">Częste pytania</h3>
<div className="space-y-4">
<details className="group bg-[#111] rounded-xl border border-white/5 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-gray-200">
                        Czy można płacić kartą?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed">
                        Tak, w naszym sklepie stacjonarnym obsługujemy płatności kartą, BLIKiem oraz gotówką. Dla stałych klientów firmowych oferujemy faktury przelewowe.
                    </div>
</details>
<details className="group bg-[#111] rounded-xl border border-white/5 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-gray-200">
                        Czy realizujecie zamówienia specjalne?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed">
                        Tak, jeśli nie mamy czegoś na stanie (np. śruby w nietypowej klasie, calowe, tytanowe), możemy je sprowadzić od naszych dostawców. Czas realizacji to zazwyczaj 24-48h.
                    </div>
</details>
<details className="group bg-[#111] rounded-xl border border-white/5 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-gray-200">
                        Czy sprzedajecie towar na wagę?
                        <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed">
                        Większość asortymentu drobnego (podkładki, nakrętki, wkręty ciesielskie) sprzedajemy na wagę lub na sztuki. Nie zmuszamy do zakupu pełnych opakowań zbiorczych.
                    </div>
</details>

<div className="mt-8 h-48 w-full rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.2662662153545!2d16.8524!3d52.4418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444c123456789%3A0x123456789abcdef!2sul.+S%C5%82upska+10%2C+Pozna%C5%84!5e0!3m2!1spl!2spl!4v1600000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 py-12 bg-[#050505] text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:bolt-bold"></iconify-icon>
</div>
<span className="text-sm font-bold text-white tracking-tight" style={{}}>F.H.U. Kokociński</span>
</div>
<div className="text-xs text-gray-600">
                © 2024 Metal-Max S.C. Poznań. Wszystkie prawa zastrzeżone.
            </div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:facebook" style={{fontSize: '18px'}}></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:instagram" style={{fontSize: '18px'}}></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
