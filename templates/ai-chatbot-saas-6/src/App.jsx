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
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue/Teal mix inspired by logo
600: '#0284c7',
900: '#0c4a6e',
}
}
}
}
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Sayhai Logo" className="h-10 w-auto" src="https://i.postimg.cc/q7R4p8h7/Zrzut-ekranu-2024-05-18-o-11-29-23.png"/>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#rozwiazanie">Rozwiązanie</a>
<a className="hover:text-slate-900 transition-colors" href="#zastosowanie">Zastosowanie</a>
<a className="hover:text-slate-900 transition-colors" href="#cennik">Cennik</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200" href="#kontakt">
                Umów konsultację
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Nowa generacja obsługi klienta
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Chatbot AI, który zna Twoją ofertę i jest dostępny <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400">24/7</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Tworzymy chatboty AI szkolone na Twoich danych. Doradzają klientom, umawiają spotkania i odpowiadają na pytania o ofertę.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-brand-600 rounded-full hover:bg-brand-700 shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-0.5" href="#demo">
                    Zobacz demo
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all" href="#how">
                    Jak to działa?
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Twoi klienci mają pytania.<br/>Ty nie zawsze masz czas.
                </h2>
<p className="text-lg text-slate-500">
                    Tradycyjna obsługa klienta staje się wąskim gardłem Twojego wzrostu.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Powtarzalne pytania</h3>
<p className="text-lg text-slate-500">
                        Twoi handlowcy tracą godziny odpowiadając w kółko na te same pytania o cennik czy specyfikację, zamiast domykać sprzedaż.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Stracone szanse</h3>
<p className="text-lg text-slate-500">
                        Klienci oczekują odpowiedzi natychmiast. Jeśli jej nie dostaną, przechodzą do konkurencji. Odpadają, bo nikt ich nie obsłużył.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-500">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Rosnące koszty</h3>
<p className="text-lg text-slate-500">
                        Skalowanie działu obsługi to ogromne koszty rekrutacji, szkoleń i sprzętu. Trudno utrzymać jakość przy rosnącej skali.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="rozwiazanie">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-6">
                    Rozwiązanie
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Chatbot AI wyszkolony na Twojej wiedzy
                </h2>
<p className="text-xl text-slate-500 mb-8 leading-relaxed">
                    Tworzymy chatboty, które uczą się Twojej oferty, dokumentów i cenników. Odpowiadają jak Twój najlepszy handlowiec — tylko szybciej, bez błędów i 24/7.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="mt-1 bg-brand-100 rounded-full p-1 text-brand-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-slate-700">Zna Twoje produkty i usługi na wylot</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-brand-100 rounded-full p-1 text-brand-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-slate-700">Odpowiada ściśle zgodnie z Twoimi danymi (zero halucynacji)</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-brand-100 rounded-full p-1 text-brand-600">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-slate-700">Kwalifikuje i przekazuje ciepłe leady do zespołu</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative bg-slate-900 rounded-2xl p-6 md:p-10 shadow-2xl border border-slate-800">
<div className="absolute top-0 right-0 p-4 opacity-20">
<i className="w-32 h-32 text-white" data-lucide="bot" strokeWidth="1"></i>
</div>
<div className="space-y-6 relative z-10">

<div className="flex justify-end">
<div className="bg-brand-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-lg shadow-md">
                                Cześć, czy macie w ofercie pakiety dla małych firm?
                            </div>
</div>

<div className="flex justify-start">
<div className="bg-slate-800 text-slate-200 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[90%] text-lg border border-slate-700 shadow-sm">
<p className="mb-2">Tak! Dla małych firm polecamy pakiet <strong>Starter</strong>.</p>
<p className="text-sm text-slate-400 border-l-2 border-brand-500 pl-3 my-2">
                                    Obejmuje wdrożenie chatbota na stronę i aktualizację wiedzy raz w miesiącu. Koszt to XXX zł.
                                </p>
<p>Chcesz, żebym pomógł Ci go skonfigurować?</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="zastosowanie">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
                Co dokładnie potrafi nasz AI?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all bg-white">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Doradza zakup</h3>
<ul className="space-y-2 text-slate-500 text-lg">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Pomaga dobrać produkt</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Odpowiada na pytania o ceny</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Porównuje warianty oferty</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all bg-white">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Umawia spotkania</h3>
<ul className="space-y-2 text-slate-500 text-lg">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>Zbiera dane kontaktowe</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>Synchronizuje z kalendarzem</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>Wysyła potwierdzenia</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all bg-white">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="book" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Baza wiedzy (Internal)</h3>
<ul className="space-y-2 text-slate-500 text-lg">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>FAQ dla pracowników</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>Procedury i onboarding</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>Szybki dostęp do dokumentów</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3">
<div className="text-6xl font-semibold text-brand-400 mb-2">24/7</div>
<div className="text-lg text-slate-400">Dostępność biura sprzedaży</div>
<div className="w-full h-px bg-slate-700 my-6"></div>
<div className="text-6xl font-semibold text-brand-400 mb-2">+40%</div>
<div className="text-lg text-slate-400">Więcej umówionych spotkań</div>
</div>
<div className="md:w-2/3">
<div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-brand-300 mb-6 uppercase tracking-wider">Case Study: Deweloper Mieszkaniowy</div>
<h3 className="text-3xl font-medium mb-6 leading-tight">
                        "Nasz chatbot nie tylko odpowiada na pytania o metraż i ceny mieszkań o 2 w nocy. On realnie umawia spotkania w biurze sprzedaży, kiedy nasi handlowcy śpią."
                    </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-medium text-white">Dyrektor Sprzedaży</div>
<div className="text-slate-400 text-sm">Czołowa firma deweloperska w Polsce</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="how">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Wdrożenie jest proste</h2>
<p className="text-lg text-slate-500">Trzy kroki dzielą Cię od automatyzacji obsługi.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6">
<span className="text-3xl font-semibold text-slate-900">1</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Przekazujesz materiały</h3>
<p className="text-lg text-slate-500">
                        Wysyłasz nam PDFy, link do strony WWW, Excela z cennikiem lub bazę wiedzy CRM.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6">
<span className="text-3xl font-semibold text-brand-600">2</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Trenujemy chatbota</h3>
<p className="text-lg text-slate-500">
                        Nasze AI analizuje Twoje dane i uczy się specyfiki Twojego biznesu.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6">
<span className="text-3xl font-semibold text-slate-900">3</span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Publikacja</h3>
<p className="text-lg text-slate-500">
                        Wklejamy jedną linijkę kodu na Twoją stronę lub integrujemy go z Twoim systemem.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
                Dla kogo chatbot jest idealnym rozwiązaniem?
            </h2>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">Firmy B2B</span>
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">Deweloperzy</span>
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">E-commerce</span>
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">Firmy usługowe</span>
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">SaaS i IT</span>
<span className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-lg font-medium text-slate-700">Bazy wiedzy</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="cennik">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    AI kosztuje mniej niż etat
                </h2>
<p className="text-xl text-slate-500 mb-6">
                    Koszt jest stały i przewidywalny. Bez urlopów, zwolnień i L4.
                    <br/>
<span className="text-slate-900 font-medium">💡 W praktyce chatbot zastępuje 0,5–2 etaty obsługi lub sprzedaży.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
<div className="text-3xl font-bold text-slate-900 mb-4">od XXX zł <span className="text-lg font-normal text-slate-500">/mc</span></div>
<p className="text-slate-500 mb-6 text-sm">Dla firm, które chcą zacząć od podstaw.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Chatbot oparty o Twoje materiały
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Odpowiedzi na FAQ i ofertę
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Wdrożenie na stronie WWW
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-brand-500 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Miesięczna aktualizacja wiedzy
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-100 text-slate-900 font-medium text-center rounded-lg hover:bg-slate-200 transition-colors" href="#kontakt">Wybieram na start</a>
</div>

<div className="bg-white rounded-2xl border-2 border-brand-500 p-8 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                        Najczęściej wybierany
                    </div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Business</h3>
<div className="text-3xl font-bold text-slate-900 mb-4">od XXX zł <span className="text-lg font-normal text-slate-500">/mc</span></div>
<p className="text-slate-500 mb-6 text-sm">Realne odciążenie sprzedaży i obsługi.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-900 font-medium">
<div className="bg-brand-100 p-0.5 rounded-full"><i className="w-4 h-4 text-brand-600 shrink-0" data-lucide="check" strokeWidth="2"></i></div>
                            Doradztwo zakupowe
                        </li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<div className="bg-brand-100 p-0.5 rounded-full"><i className="w-4 h-4 text-brand-600 shrink-0" data-lucide="check" strokeWidth="2"></i></div>
                            Zbieranie leadów
                        </li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<div className="bg-brand-100 p-0.5 rounded-full"><i className="w-4 h-4 text-brand-600 shrink-0" data-lucide="check" strokeWidth="2"></i></div>
                            Umawianie spotkań
                        </li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<div className="bg-brand-100 p-0.5 rounded-full"><i className="w-4 h-4 text-brand-600 shrink-0" data-lucide="check" strokeWidth="2"></i></div>
                            Integracje (Formularz, CRM)
                        </li>
<li className="flex items-start gap-3 text-slate-900 font-medium">
<div className="bg-brand-100 p-0.5 rounded-full"><i className="w-4 h-4 text-brand-600 shrink-0" data-lucide="check" strokeWidth="2"></i></div>
                            Priorytetowe wsparcie
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-brand-600 text-white font-medium text-center rounded-lg hover:bg-brand-700 shadow-lg shadow-brand-500/25 transition-colors" href="#kontakt">Wybieram Business</a>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-slate-900 mb-4">Wycena</div>
<p className="text-slate-500 mb-6 text-sm">Dla dużych organizacji.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Duże bazy wiedzy
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Wiele chatbotów
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Zaawansowane integracje
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            Dedykowane modele i bezpieczeństwo
                        </li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="check" strokeWidth="2"></i>
                            SLA i opieka techniczna
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-slate-300 text-slate-900 font-medium text-center rounded-lg hover:bg-slate-50 transition-colors" href="#kontakt">Skontaktuj się</a>
</div>
</div>
<div className="mt-12 text-center text-slate-500 max-w-2xl mx-auto">
<p className="mb-2">Ceny zależą od zakresu wiedzy, liczby użytkowników i integracji.</p>
<p className="font-medium text-brand-600">💰 Koszt chatbota to często 10–20% kosztu jednego pracownika, a działa 24/7.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
                Chcesz zobaczyć, jak chatbot działa w Twojej firmie?
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200" href="#">
<i className="w-5 h-5 mr-2" data-lucide="calendar-days" strokeWidth="1.5"></i>
                    Umów bezpłatną konsultację
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<img alt="Sayhai Logo" className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://i.postimg.cc/q7R4p8h7/Zrzut-ekranu-2024-05-18-o-11-29-23.png"/>
</div>
<div className="text-slate-500 text-sm">
                © 2024 Sayhai. Wszelkie prawa zastrzeżone.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
