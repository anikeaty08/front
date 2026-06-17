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



        lucide.createIcons();
    
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
<div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs font-medium">
<div className="flex items-center gap-4 mb-2 sm:mb-0">
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="mail" strokeWidth="1.5"></i>
                    b2geodeta@gmail.com
                </span>
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="phone" strokeWidth="1.5"></i>
                    888 691 988
                </span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="container flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<i className="w-8 h-8 text-blue-600" data-lucide="compass" strokeWidth="1.5"></i>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight leading-none">GEODETIC</span>
<span className="text-xs font-medium text-slate-500 tracking-wider">SERVICES</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="text-blue-600" href="#">Start</a>
<a className="hover:text-slate-900 transition-colors" href="#o-nas">O nas</a>
<a className="hover:text-slate-900 transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-slate-900 transition-colors" href="#opinie">Opinie</a>
<a className="hover:text-slate-900 transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="flex min-h-[600px] pt-32 pb-40 relative items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Geodeta przy pracy" className="w-full h-full object-cover" src="https://i.postimg.cc/mZQC3DRW/2.jpg"/>
<div className="bg-slate-500/70 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="container z-10 flex flex-col text-center mr-auto ml-auto pr-6 pl-6 relative items-center">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-white tracking-tight max-w-4xl ml-2 -translate-x-16 -skew-x-5">
                PRECYZYJNA GEODEZJA DLA TWOJEJ INWESTYCJI W RZESZOWIE
            </h1>
<p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
                Profesjonalne usługi geodezyjne dla klientów indywidualnych i biznesowych. Doświadczenie i nowoczesny
                sprzęt gwarantują najwyższą jakość.
            </p>
<button className="hover:bg-cyan-400 transition-colors inline-flex gap-2 font-medium text-slate-900 bg-cyan-500 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center">
                ZAMÓW BEZPŁATNĄ WYCENĘ
            </button>
</div>
</section>

<div className="container mx-auto px-6 relative z-20 -mt-8">
</div>

<section className="pt-24 pb-24" id="o-nas">
<div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="">
<img alt="Zespół geodetów" className="aspect-[4/3] w-full object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-blue-600 font-medium tracking-wide text-sm uppercase mb-3">O nas</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Doświadczenie i precyzja na każdym etapie
                </h2>
<p className="text-slate-600 text-base leading-relaxed mb-8">
                    Jesteśmy zespołem licencjonowanych geodetów z Rzeszowa. Od lat wspieramy inwestorów prywatnych,
                    biura projektowe oraz firmy budowlane, dostarczając rzetelną dokumentację i precyzyjne pomiary
                    niezbędne do pomyślnej realizacji każdego projektu budowlanego.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-slate-700 text-base font-medium">Wieloletnie doświadczenie na rynku lokalnym</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-slate-700 text-base font-medium">Nowoczesny park maszynowy (GPS, Tachimetry Robotic)</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-slate-700 text-base font-medium">Terminowość i transparentna wycena usług</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 pt-24 pb-24" id="oferta">
<div className="container mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Nasza Oferta</h2>
<p className="text-slate-600 text-base">Świadczymy kompleksowe usługi geodezyjne na terenie Rzeszowa i
                    całego województwa podkarpackiego.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-blue-900 rounded-2xl p-8 flex flex-col items-center text-center text-white hover:-translate-y-1 transition-transform duration-300 shadow-md">
<div className="w-16 h-16 rounded-full bg-blue-800/50 flex items-center justify-center mb-6 border border-white/10">
<i className="w-8 h-8 text-cyan-400" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Pomiary Terenowe</h3>
<p className="text-blue-100 text-sm leading-relaxed">Aktualizacje map, pomiary sytuacyjno-wysokościowe
                        oraz inwentaryzacje architektoniczne.</p>
</div>

<div className="bg-blue-900 rounded-2xl p-8 flex flex-col items-center text-center text-white hover:-translate-y-1 transition-transform duration-300 shadow-md">
<div className="w-16 h-16 rounded-full bg-blue-800/50 flex items-center justify-center mb-6 border border-white/10">
<i className="w-8 h-8 text-cyan-400" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Mapy do celów projektowych</h3>
<p className="text-blue-100 text-sm leading-relaxed">Sporządzanie map do celów projektowych, niezbędnych
                        do uzyskania pozwolenia na budowę.</p>
</div>

<div className="bg-blue-900 rounded-2xl p-8 flex flex-col items-center text-center text-white hover:-translate-y-1 transition-transform duration-300 shadow-md">
<div className="w-16 h-16 rounded-full bg-blue-800/50 flex items-center justify-center mb-6 border border-white/10">
<i className="w-8 h-8 text-cyan-400" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Tyczenia Budynków</h3>
<p className="text-blue-100 text-sm leading-relaxed">Geodezyjne wytyczanie obiektów budowlanych w
                        terenie zgodnie z projektem zatwierdzonym.</p>
</div>

<div className="bg-blue-900 rounded-2xl p-8 flex flex-col items-center text-center text-white hover:-translate-y-1 transition-transform duration-300 shadow-md">
<div className="w-16 h-16 rounded-full bg-blue-800/50 flex items-center justify-center mb-6 border border-white/10">
<i className="w-8 h-8 text-cyan-400" data-lucide="building" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Inwentaryzacje</h3>
<p className="text-blue-100 text-sm leading-relaxed">Geodezyjne inwentaryzacje powykonawcze budynków
                        oraz sieci uzbrojenia terenu.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="opinie">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Opinie Klientów</h2>
<p className="text-slate-600 text-base">Zobacz, co mówią o nas osoby, które nam zaufały.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="">
<div className="font-medium text-slate-900 text-sm">Jan Kowalski</div>
<div className="flex gap-0.5 text-yellow-400 mt-1">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Pełen profesjonalizm i szybka realizacja mapy do
                        celów projektowych. Bardzo dobry kontakt z geodetą. Polecam w 100%.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="">
<div className="font-medium text-slate-900 text-sm">Anna Nowak</div>
<div className="flex gap-0.5 text-yellow-400 mt-1">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Zlecałam tyczenie budynku jednorodzinnego. Panowie
                        zjawili się punktualnie, wykonali pracę sprawnie i dokładnie.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="">
<div className="font-medium text-slate-900 text-sm">Piotr Wiśniewski</div>
<div className="flex gap-0.5 text-yellow-400 mt-1">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Współpracujemy na stałe przy inwentaryzacjach
                        sieci. Zawsze rzetelnie przygotowana dokumentacja. Solidna firma.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="">
<div className="font-medium text-slate-900 text-sm">Maria Wójcik</div>
<div className="flex gap-0.5 text-yellow-400 mt-1">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Podział działki przeprowadzony bezproblemowo,
                        wszystkie formalności załatwione w urzędzie. Gorąco polecam ich usługi.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 pt-24 pb-24" id="realizacje">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Nasze Realizacje</h2>
<p className="text-slate-600 text-base">Przykłady prac geodezyjnych wykonanych na terenie Rzeszowa i okolic.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Realizacja 1" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Realizacja 2" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Realizacja 3" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Realizacja 4" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Realizacja 5" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Realizacja 6" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Realizacja 7" className="aspect-video hover:opacity-90 transition-opacity w-full object-cover rounded-xl shadow-sm" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Realizacja 8" className="w-full aspect-video object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="kontakt">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Kontakt</h2>
<p className="text-slate-600 text-base">Znajdź nas na mapie lub skontaktuj się bezpośrednio.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="bg-slate-100 rounded-2xl aspect-[4/3] w-full relative overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40">
</div>
<div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-sm border border-slate-100">
<i className="w-8 h-8 text-cyan-500 mb-2" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="font-medium text-slate-900">B2 Rafał Brzostek</span>
<span className="text-sm text-slate-500 mt-1">al. Gen. W. Sikorskiego 121, Rzeszów</span>
</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-8">Dane Firmy</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Nazwa firmy</h4>
<p className="text-slate-600 text-base font-semibold">B2 Rafał Brzostek</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-1">Adres biura</h4>
<p className="text-slate-600 text-base">al. Gen. W. Sikorskiego 121,<br/>35-304 Rzeszów</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Telefon</h4>
<p className="text-slate-600 text-base">888 691 988</p>
<p className="text-sm text-slate-500 mt-0.5">Pon - Pt: 8:00 - 16:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Email</h4>
<p className="text-slate-600 text-base">b2geodeta@gmail.com</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
<div className="container mx-auto px-6 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 B2 Rafał Brzostek Rzeszów. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>


    </>
  );
}
