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
      

<header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="p-1.5 bg-red-600 rounded text-white group-hover:bg-red-700 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900 uppercase">PODNOŚNIKI<span className="font-light text-gray-400">POZNAŃ</span></span>
</a>
<nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide text-gray-500">
<a className="hover:text-red-600 transition-colors" href="#oferta">Usługi</a>
<a className="hover:text-red-600 transition-colors" href="#zalety">Dlaczego my</a>
<a className="hover:text-red-600 transition-colors" href="#kontakt">Kontakt</a>
<a className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2 shadow-sm shadow-red-200" href="tel:607030951">
<i className="w-4 h-4" data-lucide="phone"></i>
                    607 030 951
                </a>
</nav>

<a className="md:hidden text-red-600 p-2 bg-red-50 rounded-full" href="tel:607030951">
<i className="w-5 h-5" data-lucide="phone"></i>
</a>
</div>
</header>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium uppercase tracking-widest border border-red-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Krótkie terminy realizacji
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                    Usługi podnośnikiem koszowym do <span className="text-red-600">20 metrów</span>
</h1>
<p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg">
                    Wykonujemy wszelkie prace na wysokościach bez potrzeby użycia rusztowania. Szybko, bezpiecznie i precyzyjnie na terenie Poznania i okolic.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-gray-900 text-white hover:bg-black px-8 py-3.5 rounded-xl font-medium flex justify-center items-center gap-2 transition-all shadow-lg shadow-gray-200" href="tel:607030951">
                        Zadzwoń teraz
                        <i className="w-4 h-4" data-lucide="phone-call"></i>
</a>
<a className="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-8 py-3.5 rounded-xl font-medium flex justify-center items-center gap-2 transition-all" href="#oferta">
                        Sprawdź usługi
                        <i className="w-4 h-4" data-lucide="arrow-down"></i>
</a>
</div>
</div>
<div className="relative mt-8 lg:mt-0">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gray-100 border border-gray-100">
<img alt="Podnośnik koszowy Poznań" className="cursor-pointer w-full h-full object-cover" onclick="window.location.href='https://lh3.googleusercontent.com/p/AF1QipOUMArLLsKbwkeg4siXiA3wxbLX2BeQNmhEZdQC=w400-h300-k-no'" role="button" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
<p className="text-white font-medium text-lg">Żeglarska 62/lok. 1, Poznań</p>
</div>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 bg-red-50 rounded-full blur-2xl -z-10"></div>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-gray-50/50" id="zalety">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
<div className="px-4 py-4 md:py-0 text-center md:text-left">
<i className="w-8 h-8 text-red-600 mb-3 mx-auto md:mx-0" data-lucide="ruler"></i>
<h3 className="text-xl font-semibold text-gray-900">Zasięg 20 metrów</h3>
<p className="text-sm text-gray-500 mt-2">Optymalna wysokość robocza do większości prac przy budynkach i drzewach.</p>
</div>
<div className="px-4 py-4 md:py-0 text-center md:text-left">
<i className="w-8 h-8 text-red-600 mb-3 mx-auto md:mx-0" data-lucide="x-circle"></i>
<h3 className="text-xl font-semibold text-gray-900">Bez rusztowania</h3>
<p className="text-sm text-gray-500 mt-2">Oszczędność czasu i pieniędzy. Szybkie rozstawienie sprzętu i natychmiastowa praca.</p>
</div>
<div className="px-4 py-4 md:py-0 text-center md:text-left">
<i className="w-8 h-8 text-red-600 mb-3 mx-auto md:mx-0" data-lucide="clock"></i>
<h3 className="text-xl font-semibold text-gray-900">Krótkie terminy</h3>
<p className="text-sm text-gray-500 mt-2">Elastyczność i szybka realizacja zleceń na terenie Poznania.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<span className="text-red-600 font-medium tracking-widest uppercase text-xs">Oferta</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mt-3 mb-6">Zakres usług wysokościowych</h2>
<p className="text-lg text-gray-500">
                    Specjalizujemy się w pracach trudno dostępnych. Nasz podnośnik koszowy to idealne rozwiązanie tam, gdzie drabina jest za krótka, a rusztowanie nieopłacalne.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="trees"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Pielęgnacja zieleni</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Przycinanie gałęzi, wycinka drzew (również sekcyjna), usuwanie posuszu i korekta koron drzew.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="paint-bucket"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Prace elewacyjne</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Malowanie elewacji, uzupełnianie tynków, mycie ścian budynków, konserwacja elementów drewnianych.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Prace dachowe</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Mycie i czyszczenie dachów, czyszczenie rynien, drobne naprawy dekarskie, uszczelnianie, montaż zabezpieczeń.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Instalacje i Montaże</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Montaż reklam, banerów, oświetlenia, kamer monitoringu, anten oraz elementów dekoracyjnych.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Mycie przeszkleń</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Mycie okien na wysokościach, witryn sklepowych oraz fasad szklanych z wykorzystaniem wody demineralizowanej.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col justify-center items-center text-center">
<h3 className="text-xl font-medium text-gray-900 mb-2">Inne prace?</h3>
<p className="text-gray-500 text-sm mb-6">Zadzwoń i zapytaj o możliwość realizacji Twojego zlecenia.</p>
<a className="text-red-600 font-medium hover:underline flex items-center gap-1" href="tel:607030951">
                        Kontakt telefoniczny <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Potrzebujesz podnośnika "na wczoraj"?</h2>
<p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Posiadamy krótkie terminy realizacji. Zadzwoń i zarezerwuj podnośnik do 20m wysokości roboczej.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-3" href="tel:607030951">
<i className="w-5 h-5" data-lucide="phone"></i>
                    607 030 951
                </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="kontakt">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
<div className="p-8 md:p-12">
<div className="text-center mb-10">
<span className="text-red-600 font-medium tracking-widest uppercase text-xs block mb-2">Kontakt</span>
<h2 className="text-3xl font-medium text-gray-900">Dane firmy</h2>
</div>
<div className="space-y-8">

<div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
<div className="bg-white p-3 rounded-xl shadow-sm text-red-600 shrink-0">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefon</p>
<a className="text-2xl md:text-3xl font-semibold text-gray-900 hover:text-red-600 transition-colors" href="tel:607030951">607 030 951</a>
<p className="text-sm text-gray-500 mt-1">Dostępny w godzinach pracy</p>
</div>
</div>

<div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
<div className="bg-white p-3 rounded-xl shadow-sm text-red-600 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Adres</p>
<p className="text-xl font-medium text-gray-900">ul. Żeglarska 62/lok. 1</p>
<p className="text-lg text-gray-600">61-347 Poznań</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 h-64 w-full relative group cursor-pointer overflow-hidden border-t border-gray-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.666616238389!2d16.948259276964724!3d52.37626374685331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b7a1f5f8b9b%3A0x123456789abcdef!2zxbxlZ2xhcnNrYSA2MiwgNjEtMzQ3IFBvem5hxYQ!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
<a className="absolute bottom-4 right-4 bg-white text-xs font-medium px-3 py-1.5 rounded shadow-sm text-gray-700 hover:text-red-600 pointer-events-none group-hover:pointer-events-auto" href="https://goo.gl/maps/PLACEHOLDER" target="_blank">Pokaż na mapie</a>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 mb-6 opacity-80">
<i className="w-5 h-5 text-gray-400" data-lucide="arrow-up-circle"></i>
<span className="text-base font-semibold tracking-tight text-gray-900 uppercase">PODNOŚNIKI POZNAŃ</span>
</div>
<p className="text-sm text-gray-400">
                Profesjonalne usługi podnośnikiem koszowym do 20m.<br/>
                ul. Żeg</p></div></footer>
    </>
  );
}
