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
      

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-green opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3">Szkolenie 1</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Generowanie automatycznych dochodów</h2>
<p className="mt-3 text-base text-gray-400">Zamień „uwagę" na „pieniądze" bez sprzedawania czasu</p>
</div>
<div className="card-border-green bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="filter" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Autorski lejek Tomasza Guzika</h3>
<p className="text-sm text-gray-400 leading-relaxed">Który pracuje z boku Twojej marki. Stawiasz system raz i zajmujesz się optymalizacją i doglądaniem, a nie codzienną harówką.</p>
</div>
</div>
</div>
<div className="card-border-green bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Gotowe szablony komunikacji</h3>
<p className="text-sm text-gray-400 leading-relaxed">Gotowe szablony całej komunikacji email, SMS, WhatsApp do przerobienia i wykorzystania kopiuj-wklej.</p>
</div>
</div>
</div>
<div className="card-border-green bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">System sprawdzony w dziesiątkach nisz</h3>
<p className="text-sm text-gray-400 leading-relaxed">System który działa w dziesiątkach nisz, który rozwijam od 8 lat.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-green opacity-60"></div>
</div>
<img alt="Kurs 1" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-green transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/gcBf5882/14.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-blue opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">Szkolenie 2</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Automatyczne tworzenie konwertujących reklam</h2>
<p className="mt-3 text-base text-gray-400">Zamień słabe zdjęcie zrobione mikrofalówką w profesjonalną sesję zdjęciową</p>
</div>
<div className="card-border-blue bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">AI dopasowane do Twojej marki</h3>
<p className="text-sm text-gray-400 leading-relaxed">Poznasz system pracy, który pozwala nauczyć AI Twoich kolorów marki, Twojego logo a następnie generować dziesiątki, a nawet setki dopasowanych kreacji graficznych i filmowych do promocji Twojej marki w reklamach i social media.</p>
</div>
</div>
</div>
<div className="card-border-blue bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Reklamy bez studia i dni zdjęciowych</h3>
<p className="text-sm text-gray-400 leading-relaxed">Nauczysz się tworzyć reklamy bez wynajmowania studia i dni zdjęciowych na poziomie, który jest nie do odróżnienia.</p>
</div>
</div>
</div>
<div className="card-border-blue bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="key" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Dostęp do wszystkich modeli AI</h3>
<p className="text-sm text-gray-400 leading-relaxed">Poznasz tajemnicę jak uzyskać dostęp do wszystkich modeli graficznych, wideo, tekstowych w symbolicznej subskrypcji rzędu 100–150 zł miesięcznie.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-blue opacity-60"></div>
</div>
<img alt="Kurs 2" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-blue transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/8zgnQHC9/13.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-red opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-400 mb-3">Szkolenie 3</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Algorytm pozyskiwania ruchu do biznesu</h2>
<p className="mt-3 text-base text-gray-400">Skaluj swoją ofertę i docieraj do setek osób każdego dnia</p>
</div>
<div className="card-border-red bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-red-400" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Systemy reklamowe w dobie AI</h3>
<p className="text-sm text-gray-400 leading-relaxed">Poznasz wszystkie najważniejsze systemy reklamowe i konfiguracje reklam w dobie AI.</p>
</div>
</div>
</div>
<div className="card-border-red bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-red-400" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Powtarzalny ruch na ofertę</h3>
<p className="text-sm text-gray-400 leading-relaxed">Pokażę Ci jak pozyskiwać ruch na Twoją ofertę w sposób powtarzalny bez wygłupiania się na TikToku i tańczenia do trendów.</p>
</div>
</div>
</div>
<div className="card-border-red bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-red-400" data-lucide="shuffle" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Organik vs. reklama</h3>
<p className="text-sm text-gray-400 leading-relaxed">Zdradzę Ci co działa w contencie organicznym „darmowym", a do czego lepiej użyć reklamę.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-red opacity-60"></div>
</div>
<img alt="Kurs 3" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-red transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/cHzXD7jb/12.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-purple opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">Szkolenie 4</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Poukładana droga jak zeskalować biznes</h2>
<p className="mt-3 text-base text-gray-400">Od kilku zamówień do kilkuset zamówień miesięcznie</p>
</div>
<div className="card-border-purple bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Prawidłowości skalowania</h3>
<p className="text-sm text-gray-400 leading-relaxed">Dowiesz się dlaczego jedni sprzedają za 10 000 PLN miesięcznie, a inni co miesiąc generują kilkaset tysięcy sprzedaży. Są pewne prawidłowości, które dostrzegłem!</p>
</div>
</div>
</div>
<div className="card-border-purple bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Od 30 zł do 2000 zł dziennie na reklamę</h3>
<p className="text-sm text-gray-400 leading-relaxed">Przeprowadzę Cię przez proces jak w sposób komfortowy i bezstresowy przejść z mikro wydatków reklamowych typu 30 zł dziennie, do wydawania np. 2000 zł dziennie na reklamę. (zwrot z reklam tego samego dnia)</p>
</div>
</div>
</div>
<div className="card-border-purple bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-purple-400" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Taktyki największych na świecie</h3>
<p className="text-sm text-gray-400 leading-relaxed">Poznasz mechanizmy i kluczowe taktyki, które stosują najwięksi na świecie typu Coca Cola, McDonald's, a które możesz zaimplementować do swojego biznesu mimo mniejszej skali.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-purple opacity-60"></div>
</div>
<img alt="Kurs 4" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-purple transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/ydDwYNCM/11.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-orange opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">Szkolenie 5</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Optymalizacja Konwersji</h2>
<p className="mt-3 text-base text-gray-400">To tutaj uciekają Ci pieniądze</p>
</div>
<div className="card-border-orange bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-orange-400" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Najważniejsze metryki biznesu</h3>
<p className="text-sm text-gray-400 leading-relaxed">Poznasz wszystkie najważniejsze metryki, które należy mierzyć w biznesie internetowym. Dowiesz się jak wykorzystać znajomość CAC, LTV, CR do skalowania wyników.</p>
</div>
</div>
</div>
<div className="card-border-orange bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-orange-400" data-lucide="file-spreadsheet" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Gotowe arkusze „scorecard"</h3>
<p className="text-sm text-gray-400 leading-relaxed">Otrzymasz gotowe arkusze „scorecard" do mierzenia i analizowania wyników kampanii.</p>
</div>
</div>
</div>
<div className="card-border-orange bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-orange-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Magia małych optymalizacji</h3>
<p className="text-sm text-gray-400 leading-relaxed">Optymalizując stronę zapisu x2 i obniżając koszty leada x2 Twój biznes rośnie x4. Pokażę Ci jak magia małych optymalizacji może niesamowicie podnieść rentowność biznesu.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-orange opacity-60"></div>
</div>
<img alt="Kurs 5" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-orange transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/vHFpbM2B/10.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-cyan opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">Szkolenie 6</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Projektowanie stron w AI</h2>
<p className="mt-3 text-base text-gray-400">Naucz się tworzyć efektowne strony wpisując proste polecenia</p>
</div>
<div className="card-border-cyan bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-400" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Strona jak za 15 000 PLN w 24h</h3>
<p className="text-sm text-gray-400 leading-relaxed">Zestaw narzędzi i technik pracy, pozwala stworzyć widowiskową stronę jak za 15 000 PLN w ciągu 24h.</p>
</div>
</div>
</div>
<div className="card-border-cyan bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-400" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Strony za pomocą komend głosowych</h3>
<p className="text-sm text-gray-400 leading-relaxed">Dowiesz się jak projektować strony za pomocą komend głosowych. „Chcę taką i taką stronę, a AI w kilka chwil dostarcza Ci efekt".</p>
</div>
</div>
</div>
<div className="card-border-cyan bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-400" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Narysuj stronę w Paincie</h3>
<p className="text-sm text-gray-400 leading-relaxed">Pokażę Ci jak narysować stronę www w Paincie, a następnie wrzucić dowolną stronę która nam się podoba, a sztuczna inteligencja zaprojektuje dokładnie to co chcemy. Strony w AI zawierają zarówno grafiki, filmy, jak i animacje i wyglądają lepiej niż 90% rynku.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-cyan opacity-60"></div>
</div>
<img alt="Kurs 6" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-cyan transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/59vRPT4r/9.png"/>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-8">
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
</div>

<section className="relative overflow-hidden py-20 md:py-28">
<div className="absolute inset-0 bg-radial-yellow opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 space-y-5">
<div className="mb-8">
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-3">Szkolenie 7</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">CASE STUDY</h2>
<p className="mt-3 text-base text-gray-400">Historyczna kampania w zasięgu ręki. Jak przeskoczyłem ze sprzedażą o kilkaset %</p>
</div>
<div className="card-border-yellow bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">207 000 PLN przychodu w 30 dni</h3>
<p className="text-sm text-gray-400 leading-relaxed">Pierwszy raz publicznie dzielę się z klientami Case Study z kampanii, która wygenerowała 207 000 PLN przychodu w ciągu 30 dni inwestując 46 000 w reklamę.</p>
</div>
</div>
</div>
<div className="card-border-yellow bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Zarządzanie kampanią przy dużych budżetach</h3>
<p className="text-sm text-gray-400 leading-relaxed">Dowiesz się jak zarządzać kampanią przy dużych budżetach. Jakie niuanse wpłynęły, że ten wynik został osiągnięty.</p>
</div>
</div>
</div>
<div className="card-border-yellow bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-white mb-1">Autorskie taktyki od kuchni</h3>
<p className="text-sm text-gray-400 leading-relaxed">Moje autorskie taktyki, które jako pierwszy wprowadzałem do Polski, a dzisiaj są kopiowane. Dokupując Case Study zaglądniesz od kuchni co robię, aby generować 6-cyfrową sprzedaż z 1 kampanii.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-80 h-80 rounded-full glow-yellow opacity-60"></div>
</div>
<img alt="Kurs 7" className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto product-glow-yellow transform hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/5tTsgqDr/8.png"/>
</div>
</div>
</div>
</section>


    </>
  );
}
