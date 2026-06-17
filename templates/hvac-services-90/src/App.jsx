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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
colors: {
primary: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7', // Brand Blue
700: '#0369a1',
900: '#0c4a6e',
},
accent: {
500: '#f97316', // Warm Orange
600: '#ea580c',
}
}
}
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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-[70px]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
</div>
<span className="font-display font-bold text-xl tracking-tight text-slate-900">KlimaSystem<span className="text-primary-600">Pro</span></span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#uslugi">Usługi</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#dlaczego-my">O nas</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-primary-600 transition-colors" href="tel:+48123456789">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>123 456 789</span>
</a>
<a className="hidden sm:inline-flex bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20" href="#wycena">
                    Bezpłatna wycena
                </a>

<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</header>
<main className="pt-[70px]">

<section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-6 border border-orange-200">
                            15 lat doświadczenia w Warszawie
                        </span>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                            Profesjonalny Montaż Klimatyzacji i Pomp Ciepła
                        </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Kompleksowe usługi HVAC z gwarancją satysfakcji. Bezpłatna wycena w 24h. Ciesz się komfortem termicznym przez cały rok.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<svg className="text-green-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Autoryzowany instalator
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<svg className="text-green-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Gwarancja do 7 lat
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<svg className="text-green-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Certyfikowani technicy
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<svg className="text-green-500 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                500+ realizacji
                            </div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5" href="tel:+48123456789">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Zadzwoń teraz
                            </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-lg text-base font-semibold text-primary-700 bg-white border border-primary-100 hover:bg-primary-50 transition-colors" href="#wycena">
                                Otrzymaj wycenę
                            </a>
</div>
<p className="mt-4 text-xs text-slate-500 pl-1">Odpowiadamy średnio w 15 minut</p>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-orange-50 rounded-3xl blur-2xl opacity-60"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
<img alt="Instalacja klimatyzacji" className="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-lg p-4 flex items-center gap-3 border border-slate-100 max-w-[200px]">
<div className="bg-primary-50 p-2 rounded-full text-primary-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M21 8.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path></svg>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Najbliższy termin</p>
<p className="text-sm font-bold text-slate-800">2-3 dni robocze</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-blue-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Klimatyzacja</h3>
<p className="text-sm text-slate-500">Montaż systemów split i multisplit do domu i biura.</p>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-orange-50 text-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="M6.6 18.4A2 2 0 0 0 10 21h4a2 2 0 0 0 3.4-2.6l-3-5.1a2 2 0 0 1-1.2-1.3"></path></svg>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Pompy Ciepła</h3>
<p className="text-sm text-slate-500">Ekologiczne ogrzewanie. Sprzedaż i profesjonalny montaż.</p>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Serwis i Przeglądy</h3>
<p className="text-sm text-slate-500">Czyszczenie, odgrzybianie i okresowe przeglądy gwarancyjne.</p>
</div>

<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="font-display font-semibold text-lg mb-2">Pogotowie 24/7</h3>
<p className="text-sm text-slate-500">Szybka reakcja w przypadku awarii dla stałych klientów.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="uslugi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Nasze Usługi</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Oferujemy kompleksowe rozwiązania w zakresie chłodnictwa i ogrzewania dla domów jednorodzinnych, mieszkań oraz biur.</p>
</div>
<div className="space-y-12">

<div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
<div className="w-full md:w-1/2">
<img alt="Klimatyzacja domowa" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full md:w-1/2">
<h3 className="font-display text-2xl font-semibold mb-4 text-slate-900">Montaż Klimatyzacji</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                                Zapewnij sobie komfort termiczny w upalne dni. Oferujemy montaż nowoczesnych, energooszczędnych urządzeń typu Split i Multi-Split. Dobieramy moc chłodniczą idealnie do kubatury pomieszczenia.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Profesjonalny dobór urządzenia do powierzchni
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Czysty montaż z wykorzystaniem bruzdownic i odkurzaczy
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Pełna konfiguracja WiFi i instruktaż obsługi
                                </li>
</ul>
<a className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group" href="#">
                                Sprawdź ofertę klimatyzacji
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
<div className="w-full md:w-1/2 md:order-last">
<img alt="Pompa ciepła" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full md:w-1/2">
<h3 className="font-display text-2xl font-semibold mb-4 text-slate-900">Pompy Ciepła</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                                Ekologiczne i oszczędne ogrzewanie Twojego domu. Specjalizujemy się w instalacji pomp ciepła powietrze-woda, które zapewniają niskie rachunki i bezobsługowe działanie.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Wsparcie w uzyskaniu dofinansowania (Moje Ciepło)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Oszczędność kosztów ogrzewania do 60%
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<svg className="w-5 h-5 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Modernizacja istniejących kotłowni
                                </li>
</ul>
<a className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group" href="#">
                                Sprawdź ofertę pomp ciepła
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-primary-50" id="dlaczego-my">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">Dlaczego Warto Nam Zaufać?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl text-center border border-white shadow-sm">
<div className="text-5xl font-bold text-primary-600 mb-4">15+</div>
<div className="text-lg font-semibold text-slate-900 mb-2">Lat doświadczenia</div>
<p className="text-sm text-slate-500">Działamy na warszawskim rynku nieprzerwanie od 2010 roku.</p>
</div>

<div className="bg-white p-8 rounded-2xl text-center border border-white shadow-sm">
<div className="text-5xl font-bold text-primary-600 mb-4">500+</div>
<div className="text-lg font-semibold text-slate-900 mb-2">Zadowolonych klientów</div>
<p className="text-sm text-slate-500">Potwierdzone licznymi pozytywnymi opiniami w Google.</p>
</div>

<div className="bg-white p-8 rounded-2xl text-center border border-white shadow-sm">
<div className="text-5xl font-bold text-primary-600 mb-4">4.9</div>
<div className="text-lg font-semibold text-slate-900 mb-2">Średnia ocen</div>
<p className="text-sm text-slate-500">Jakość naszych usług broni się sama. Sprawdź opinie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="realizacje">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="font-display text-3xl font-semibold text-slate-900 tracking-tight">Nasze Realizacje</h2>
<p className="text-slate-500 mt-2">Zobacz jakość naszej pracy na zdjęciach.</p>
</div>
<a className="text-primary-600 font-semibold text-sm hover:underline" href="#">Zobacz więcej realizacji →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
<div className="group relative overflow-hidden rounded-2xl md:col-span-2">
<img alt="Realizacja 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-lg">Salon w domu jednorodzinnym</p>
<p className="text-slate-300 text-sm">Warszawa, Wilanów</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl">
<img alt="Realizacja 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-lg">Biuro Open Space</p>
<p className="text-slate-300 text-sm">Warszawa, Centrum</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl">
<img alt="Realizacja 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-lg">Instalacja jednostki zewnętrznej</p>
<p className="text-slate-300 text-sm">Piaseczno</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl md:col-span-2">
<img alt="Realizacja 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<p className="text-white font-semibold text-lg">Pompa ciepła Daikin</p>
<p className="text-slate-300 text-sm">Konstancin-Jeziorna</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Autoryzowani Partnerzy</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-bold font-display text-slate-800">DAIKIN</span>
<span className="text-2xl font-bold font-display text-slate-800">MITSUBISHI</span>
<span className="text-2xl font-bold font-display text-slate-800">LG</span>
<span className="text-2xl font-bold font-display text-slate-800">GREE</span>
<span className="text-2xl font-bold font-display text-slate-800">PANASONIC</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl font-semibold text-slate-900">Jak Wygląda Współpraca?</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="bg-white pt-4 md:pt-0">
<div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm relative z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full font-bold">1</span>
</div>
<h3 className="font-semibold text-lg mb-2 text-center md:text-left">Kontakt</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Krótka rozmowa telefoniczna, by poznać Twoje potrzeby.</p>
</div>

<div className="bg-white pt-4 md:pt-0">
<div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm relative z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full font-bold">2</span>
</div>
<h3 className="font-semibold text-lg mb-2 text-center md:text-left">Wizyta Techniczna</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Darmowy dojazd, pomiary i dokładna wycena na miejscu.</p>
</div>

<div className="bg-white pt-4 md:pt-0">
<div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm relative z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full font-bold">3</span>
</div>
<h3 className="font-semibold text-lg mb-2 text-center md:text-left">Montaż</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Czysta instalacja w 1 dzień. Zabezpieczamy meble i podłogi.</p>
</div>

<div className="bg-white pt-4 md:pt-0">
<div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm relative z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs flex items-center justify-center rounded-full font-bold">4</span>
</div>
<h3 className="font-semibold text-lg mb-2 text-center md:text-left">Odbiór</h3>
<p className="text-sm text-slate-500 text-center md:text-left">Uruchomienie, szkolenie z obsługi pilota i gwarancja.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-primary-600" id="wycena">
<div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/3 text-white">
<h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Gotowy na komfort przez cały rok?</h2>
<p className="text-primary-100 text-lg mb-8 leading-relaxed">
                            Wypełnij formularz, aby otrzymać niezobowiązującą wycenę. Skontaktujemy się z Tobą w ciągu 24 godzin.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="font-medium">Bezpłatny dojazd</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="font-medium">Indywidualna oferta</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="font-medium">Brak ukrytych kosztów</span>
</div>
</div>
</div>

<div className="lg:w-2/3 w-full">
<form className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Imię i nazwisko</label>
<input className="w-full rounded-lg border-slate-300 border p-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Numer telefonu *</label>
<input className="w-full rounded-lg border-slate-300 border p-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" id="phone" placeholder="123 456 789" required="" type="tel"/>
</div>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email (opcjonalnie)</label>
<input className="w-full rounded-lg border-slate-300 border p-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Czego potrzebujesz?</label>
<textarea className="w-full rounded-lg border-slate-300 border p-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" id="message" placeholder="Np. klimatyzacja do salonu 30m2..." rows="3"></textarea>
</div>
<div className="mb-6 flex items-start gap-3">
<input className="mt-1 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500" id="rodo" required="" type="checkbox"/>
<label className="text-xs text-slate-500 leading-tight" htmlFor="rodo">Wyrażam zgodę na przetwarzanie danych osobowych w celu przygotowania oferty. <a className="underline" href="#">Polityka prywatności</a>.</label>
</div>
<button className="w-full bg-accent-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-accent-700 transition-colors shadow-lg shadow-orange-500/25" type="submit">
                                Wyślij zapytanie
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl font-semibold text-slate-900">Co Mówią Nasi Klienci</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Profesjonalna obsługa od początku do końca. Klimatyzacja zainstalowana terminowo, panowie po sobie posprzątali. Wszystko działa bez zarzutu."</p>
<div>
<p className="font-bold text-slate-900 text-sm">Marek Wójcik</p>
<p className="text-xs text-slate-500">Warszawa, Mokotów</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Długo szukaliśmy firmy do pompy ciepła. KlimaSystem Pro zaproponował najlepsze rozwiązanie w stosunku do ceny. Rachunki spadły o połowę!"</p>
<div>
<p className="font-bold text-slate-900 text-sm">Anna Lewandowska</p>
<p className="text-xs text-slate-500">Piaseczno</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Szybki serwis klimatyzacji w biurze. Panowie przyjechali tego samego dnia po zgłoszeniu awarii w upał. Polecam!"</p>
<div>
<p className="font-bold text-slate-900 text-sm">Krzysztof Zając</p>
<p className="text-xs text-slate-500">Warszawa, Wola</p>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 text-sm font-medium transition-colors" href="#">
<svg className="text-blue-500" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26z"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>
                        Zobacz wszystkie opinie na Google
                    </a>
</div>
</div>
</section>

<section className="py-12 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="font-semibold text-xl mb-4 text-slate-900">Obszar Działania</h2>
<p className="text-slate-500 max-w-3xl mx-auto mb-2">Warszawa (wszystkie dzielnice), Piaseczno, Pruszków, Otwock, Legionowo, Wołomin, Mińsk Mazowiecki, Grodzisk Mazowiecki, Konstancin-Jeziorna, Łomianki.</p>
<p className="text-xs text-slate-400">Działamy w promieniu 50km od centrum Warszawy.</p>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>
</div>
<span className="font-display font-bold text-lg text-white">KlimaSystem Pro</span>
</div>
<p className="text-sm text-slate-400 mb-6 max-w-xs">Twój zaufany partner w dziedzinie klimatyzacji i pomp ciepła. Profesjonalizm i terminowość to nasza wizytówka.</p>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Nawigacja</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-primary-400 transition-colors" href="#uslugi">Usługi</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#dlaczego-my">O nas</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#realizacje">Realizacje</a></li>
<li><a className="hover:text-primary-400 transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>

<div id="kontakt">
<h4 className="text-white font-semibold mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<a className="hover:text-white transition-colors text-lg font-medium" href="tel:+48123456789">+48 123 456 789</a>
</li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<a className="hover:text-white transition-colors" href="mailto:kontakt@klimasystem.pro">kontakt@klimasystem.pro</a>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-primary-500 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>ul. Przykładowa 10<br/>00-001 Warszawa</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2025 KlimaSystem Pro. Wszystkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Polityka prywatności</a>
<a className="hover:text-white" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors md:bottom-8 md:right-8 group flex items-center gap-2" href="https://wa.me/48123456789">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-semibold whitespace-nowrap">Napisz na WhatsApp</span>
</a>

    </>
  );
}
