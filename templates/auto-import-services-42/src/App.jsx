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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.reveal-section');
            sections.forEach(section => {
                observer.observe(section);
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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex flex-col items-center">

<div className="relative w-10 h-8 mb-1">

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 hat-stripes border border-slate-200 rounded-t-sm z-10"></div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-2.5 bg-blue-900 z-20 flex items-center justify-center overflow-hidden">
<div className="flex gap-0.5">
<span className="text-[5px] text-white">★</span>
<span className="text-[5px] text-white">★</span>
<span className="text-[5px] text-white">★</span>
</div>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-blue-900 rounded-full z-30"></div>
</div>
</div>
<div className="flex flex-col">
<div className="bg-blue-900 px-2 py-0.5 rounded-sm">
<span className="font-bold text-lg tracking-tight text-white leading-none">FURY WUJA SAMA</span>
</div>
<div className="flex items-center gap-2 px-0.5 mt-0.5 justify-between w-full">
<div className="h-[1px] bg-slate-300 flex-1"></div>
<span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none">Import aut z USA</span>
<div className="h-[1px] bg-slate-300 flex-1"></div>
</div>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors" href="#dlaczego">Dlaczego My</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors" href="#proces">Jak to działa</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors" href="#cennik">Cennik</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors" href="#realizacje">Realizacje</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="px-5 py-2.5 bg-red-600 text-white font-semibold text-sm rounded shadow-sm hover:bg-red-700 transition-all duration-300 shadow-red-200" href="#kontakt">
                    Darmowa Wycena
                </a>
</div>

<button className="lg:hidden text-slate-700 hover:text-red-600 transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center w-full overflow-hidden bg-slate-900 pt-24">

<div className="absolute inset-0 z-0">

<img alt="American Muscle Car" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
</div>

<div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
<div className="max-w-3xl">
<div className="hero-animate">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        Import USA — Polska
                    </span>
</div>
<h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1] text-white mb-6 hero-animate delay-100">
                    Twoje auto z USA.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Bez ryzyka.</span> Bez ściemy.
                </h1>
<p className="text-slate-300 font-normal text-lg md:text-xl leading-relaxed mb-10 max-w-xl hero-animate delay-200">
                    Znajdziemy, wylicytujemy i sprowadzimy Twoje wymarzone amerykańskie auto prosto do Polski. Pełna historia, jasne zasady.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 hero-animate delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-all flex justify-center items-center gap-2 shadow-lg shadow-red-900/20" href="#kontakt">
                        Zacznij Import <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded hover:bg-white hover:text-slate-900 transition-all flex justify-center items-center" href="#cennik">
                        Zobacz Cennik
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 text-slate-400 text-xs font-medium uppercase tracking-widest hero-animate delay-300">
<span className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon> Copart</span>
<span className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon> IAAI</span>
<span className="flex items-center gap-2"><iconify-icon className="text-red-500" icon="lucide:check"></iconify-icon> Manheim</span>
</div>
</div>
</div>
</header>

<div className="bg-red-600 text-white py-4 overflow-hidden border-y border-red-700 relative z-20 shadow-md">
<div className="flex whitespace-nowrap gap-16 text-xs font-bold uppercase tracking-widest animate-marquee">
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Dodge Challenger</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Ford Mustang</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Chevrolet Camaro</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> RAM 1500</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Chevrolet Corvette</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Ford F-150</span>
<span className="flex items-center gap-3"><iconify-icon icon="lucide:star" width="14"></iconify-icon> Cadillac Escalade</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 bg-white reveal-section" id="dlaczego">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Dlaczego Fury Wuja Sama?</h2>
<p className="text-slate-500 text-lg">Amerykański sen na polskich blachach. My zajmujemy się biurokracją, Ty cieszysz się jazdą V8.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:gavel" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Licytacje na żywo</h3>
<p className="text-sm text-slate-500 leading-relaxed">Mamy dostęp do największych domów aukcyjnych w USA (Copart, IAAI). Licytujemy w Twoim imieniu.</p>
</div>

<div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Pełna transparentność</h3>
<p className="text-sm text-slate-500 leading-relaxed">Żadnych ukrytych opłat. Otrzymujesz pełny kosztorys przed licytacją i dostęp do raportów CARFAX.</p>
</div>

<div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:container" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Transport Door-to-Door</h3>
<p className="text-sm text-slate-500 leading-relaxed">Odbieramy auto z placu w USA i dostarczamy pod Twój dom w Polsce. Pełne ubezpieczenie cargo.</p>
</div>

<div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Legalny import</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pomagamy w odprawie celnej (Bremerhaven/Rotterdam/Gdynia) i przygotowaniu dokumentów do rejestracji.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50 border-y border-slate-200 reveal-section" id="proces">
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
<img alt="Shipping USA" className="w-full h-full object-cover transition-all duration-700" src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20">
<p className="text-white font-bold text-xl">Twoja fura w drodze</p>
<p className="text-slate-300 text-sm">Średni czas dostawy: 6-8 tygodni</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Proces Importu</span>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-10">Tylko 4 kroki do<br/>własnego V8.</h2>
<div className="space-y-10 relative">

<div className="absolute left-[15px] top-2 bottom-4 w-0.5 bg-slate-200"></div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs z-10 group-hover:border-red-600 group-hover:text-red-600 transition-colors">01</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Wybór i Weryfikacja</h4>
<p className="text-sm text-slate-500">Określasz budżet i model. My szukamy perełek, sprawdzamy historię szkód i szacujemy koszty naprawy.</p>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs z-10 group-hover:border-red-600 group-hover:text-red-600 transition-colors">02</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Licytacja i Zakup</h4>
<p className="text-sm text-slate-500">Ustalamy max bid. Licytujemy auto na aukcji w USA. Po wygranej opłacasz fakturę za samochód.</p>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs z-10 group-hover:border-red-600 group-hover:text-red-600 transition-colors">03</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Logistyka i Cło</h4>
<p className="text-sm text-slate-500">Transport lądowy do portu, fracht morski do Europy. Opłacamy cło i VAT w Niemczech lub Holandii (taniej).</p>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 border-2 border-red-600 text-white flex items-center justify-center font-bold text-xs z-10 shadow-md shadow-red-200">04</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Dostawa pod Dom</h4>
<p className="text-sm text-slate-500">Auto trafia na lawetę i jedzie do Ciebie. Możemy też pomóc z naprawą i akcyzą.</p>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors" href="#kontakt">
                        Zacznij szukać auta <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white reveal-section" id="realizacje">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">Ostatnio Sprowadzone</h2>
<p className="text-slate-500 text-sm">Przykładowe realizacje i całkowity koszt pod dom (bez akcyzy).</p>
</div>
<a className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-2" href="#kontakt">
                    Zobacz więcej <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Ford Mustang GT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm">Dostarczony</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Ford Mustang GT 5.0</h3>
<p className="text-sm text-slate-500 mb-4">Rocznik 2019 • Manual • Run &amp; Drive</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-400 uppercase tracking-wide">Cena całkowita</span>
<span className="font-bold text-slate-900 text-lg">78 500 PLN</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="RAM 1500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm">Dostarczony</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Dodge RAM 1500 Laramie</h3>
<p className="text-sm text-slate-500 mb-4">Rocznik 2020 • 5.7 HEMI • 4x4</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-400 uppercase tracking-wide">Cena całkowita</span>
<span className="font-bold text-slate-900 text-lg">115 000 PLN</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Corvette C7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm">Dostarczony</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Chevrolet Corvette C7</h3>
<p className="text-sm text-slate-500 mb-4">Rocznik 2016 • Z06 • Uszkodzony przód</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-400 uppercase tracking-wide">Cena całkowita</span>
<span className="font-bold text-slate-900 text-lg">145 000 PLN</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200 reveal-section" id="cennik">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Przejrzysty Cennik</h2>
<p className="text-slate-500">Stała prowizja za naszą pracę. Koszty transportu i podatki wyliczamy indywidualnie.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-lg transition-all">
<div className="mb-4">
<span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Mini</span>
<div className="text-3xl font-bold text-slate-900 mt-2">1500 zł</div>
</div>
<p className="text-sm text-slate-500 mb-8">Dla tych, którzy sami znaleźli auto i potrzebują tylko formalności.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Udział w licytacji</li>
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Obsługa płatności USA</li>
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Organizacja transportu</li>
</ul>
<a className="w-full py-3 border border-slate-300 text-slate-700 text-sm font-semibold rounded text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors" href="#kontakt">Wybieram</a>
</div>

<div className="bg-blue-900 p-8 rounded-2xl border border-blue-900 relative flex flex-col transform md:-translate-y-4 shadow-xl shadow-blue-900/10">
<div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">NAJCZĘSTSZY WYBÓR</div>
<div className="mb-4">
<span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Standard</span>
<div className="text-3xl font-bold text-white mt-2">3000 zł</div>
</div>
<p className="text-sm text-blue-100/70 mb-8">Pełne wsparcie od szukania do dostawy pod dom.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-red-400 shrink-0" icon="lucide:check"></iconify-icon> <span className="font-bold">Wszystko z pakietu Mini</span></li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-red-400 shrink-0" icon="lucide:check"></iconify-icon> Wyszukiwanie ofert</li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-red-400 shrink-0" icon="lucide:check"></iconify-icon> Weryfikacja historii (Carfax)</li>
<li className="flex gap-3 text-sm text-white"><iconify-icon className="text-red-400 shrink-0" icon="lucide:check"></iconify-icon> Wstępna wycena naprawy</li>
</ul>
<a className="w-full py-3 bg-red-600 text-white text-sm font-semibold rounded text-center hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20" href="#kontakt">Wybieram</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:shadow-lg transition-all">
<div className="mb-4">
<span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Premium</span>
<div className="text-3xl font-bold text-slate-900 mt-2">4000 zł</div>
</div>
<p className="text-sm text-slate-500 mb-8">Odbierasz auto gotowe do rejestracji, my robimy resztę.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> <span className="font-bold">Wszystko z pakietu Standard</span></li>
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Opinia rzeczoznawcy</li>
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Tłumaczenia dokumentów</li>
<li className="flex gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-600 shrink-0" icon="lucide:check"></iconify-icon> Odprawa celna + Akcyza</li>
</ul>
<a className="w-full py-3 border border-slate-300 text-slate-700 text-sm font-semibold rounded text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors" href="#kontakt">Wybieram</a>
</div>
</div>
<p className="text-center text-slate-400 text-xs mt-8">*Transport, cło, akcyza i VAT wyliczane są indywidualnie dla każdego pojazdu.</p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white reveal-section">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-10 text-center">Najczęstsze Pytania</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-lg border border-slate-200 open:bg-white open:ring-1 open:ring-blue-100 open:shadow-md transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-700">
                        Czy import z USA jest bezpieczny?
                        <span className="transform group-open:rotate-180 transition-transform text-slate-400 group-open:text-red-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Tak, jeśli wiesz, co robisz. Weryfikujemy każde auto w systemach Carfax/Autocheck, aby wykluczyć pojazdy po powodzi czy z cofniętym licznikiem. Nie kupujemy "kota w worku".
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200 open:bg-white open:ring-1 open:ring-blue-100 open:shadow-md transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-700">
                        Ile trwa cały proces importu?
                        <span className="transform group-open:rotate-180 transition-transform text-slate-400 group-open:text-red-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Średnio od 6 do 10 tygodni. Transport z USA do portu w Europie trwa ok. 4-6 tygodni, odprawa celna ok. tygodnia, plus transport do Polski.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200 open:bg-white open:ring-1 open:ring-blue-100 open:shadow-md transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-700">
                        Jakie są podatki?
                        <span className="transform group-open:rotate-180 transition-transform text-slate-400 group-open:text-red-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Standardowo: Cło (10% auta osobowe), VAT (19% w Niemczech lub 23% w Polsce), oraz Akcyza w Polsce (3.1% do 2.0L, 18.6% powyżej 2.0L). Auta zabytkowe zwolnione są z cła i akcyzy, a VAT wynosi tylko 8-9%.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200 open:bg-white open:ring-1 open:ring-blue-100 open:shadow-md transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-700">
                        Co jeśli auto przyjedzie bardziej uszkodzone?
                        <span className="transform group-open:rotate-180 transition-transform text-slate-400 group-open:text-red-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                        Każdy transport jest ubezpieczony. Robimy zdjęcia na każdym etapie (plac aukcyjny, port USA, port UE). Jeśli szkoda powstanie w transporcie, wypłacane jest odszkodowanie.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200 reveal-section">
<div className="max-w-[1400px] mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 text-center">Co mówią kierowcy?</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex text-red-500 mb-4 text-xs gap-1">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Mustang 5.0 ogarnięty perfekcyjnie. Bałem się trochę uszkodzeń, ale ekipa Fury Wuja Sama wyliczyła naprawę co do złotówki. Polecam."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">MK</div>
<span className="text-xs font-semibold text-slate-500">Marcin K. • Ford Mustang 2018</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex text-red-500 mb-4 text-xs gap-1">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Profesjonalne podejście. Raport Carfax dostałem od razu. Auto przyszło 2 tygodnie przed terminem. RAM robi robotę!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">PJ</div>
<span className="text-xs font-semibold text-slate-500">Piotr J. • RAM 1500</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex text-red-500 mb-4 text-xs gap-1">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Szukałem klasyka. Znaleźli mi Corvette C3 w świetnym stanie. Pomogli ze zwolnieniem z cła jako zabytek. Pełna kulturka."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">TW</div>
<span className="text-xs font-semibold text-slate-500">Tomek W. • Corvette C3</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-100 border-t border-slate-200 relative overflow-hidden reveal-section" id="kontakt">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
<div>
<span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">Kontakt</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Gotowy na swoje <br/>amerykańskie auto?</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                    Wypełnij formularz. Przygotujemy darmową wycenę i znajdziemy dla Ciebie najlepsze egzemplarze dostępne na aukcjach.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-red-600 border border-slate-100">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase">Zadzwoń teraz</p>
<p className="text-slate-900 font-bold tracking-wide">+48 700 800 900</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center text-red-600 border border-slate-100">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase">Napisz do nas</p>
<p className="text-slate-900 font-bold tracking-wide">biuro@furywujasama.pl</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Imię</label>
<input className="custom-input w-full p-3 rounded text-sm placeholder-slate-400" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Telefon</label>
<input className="custom-input w-full p-3 rounded text-sm placeholder-slate-400" placeholder="+48 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Email</label>
<input className="custom-input w-full p-3 rounded text-sm placeholder-slate-400" placeholder="jan@przyklad.pl" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Budżet (PLN)</label>
<input className="custom-input w-full p-3 rounded text-sm placeholder-slate-400" placeholder="np. 60 000" type="number"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Wymarzone Auto</label>
<input className="custom-input w-full p-3 rounded text-sm placeholder-slate-400" placeholder="np. Mustang GT 2018" type="text"/>
</div>
</div>
<button className="w-full py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-red-700 transition-colors mt-4 shadow-lg shadow-red-100" type="submit">
                        Wyślij Zapytanie
                    </button>
<p className="text-[10px] text-slate-400 text-center mt-3">Klikając wyślij, akceptujesz politykę prywatności.</p>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">

<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-blue-900 flex items-center justify-center text-white rounded">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<span className="font-bold text-xl tracking-tight text-white">FURY WUJA SAMA</span>
</a>
<p className="text-slate-400 text-sm leading-6 max-w-sm mb-8">
                        Specjaliści od sprowadzania amerykańskich marzeń motoryzacyjnych. Bezpiecznie, legalnie i w dobrej cenie.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-red-500 transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Nawigacja</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-red-500 transition-colors" href="#dlaczego">Dlaczego My</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#proces">Jak zamawiać</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#realizacje">Sprowadzone</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#cennik">Koszty</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Legalne</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-red-500 transition-colors" href="#">Polityka Prywatności</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Regulamin</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Dla Firm</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Fury Wuja Sama. Wszelkie prawa zastrzeżone.</p>
<div className="flex items-center gap-2 text-slate-600 text-xs">
                    Designed with <iconify-icon className="text-red-900" icon="lucide:heart" width="12"></iconify-icon> for Petrolheads.
                </div>
</div>
</div>
</footer>



    </>
  );
}
