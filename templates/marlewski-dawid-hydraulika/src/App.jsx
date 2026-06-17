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



      // Initialize Lucide icons
      lucide.createIcons();

      // Intersection Observer for scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scrolled');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      }, observerOptions);

      const scrollElements = document.querySelectorAll('.js-scroll');
      scrollElements.forEach((el) => observer.observe(el));
    
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">
            Marlewski Dawid
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#uslugi">
            Usługi
          </a>
<a className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#o-nas">
            O nas
          </a>
<a className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#realizacje">
            Realizacje
          </a>
<a className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#kontakt">
            Kontakt
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-all text-sm hover:scale-105 active:scale-95" href="tel:665684113">
<i className="w-4 h-4" data-lucide="phone"></i>
          665 684 113
        </a>
</div>
</nav>

<header className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Plumber Background" className="w-full h-full object-cover opacity-20 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="js-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Dostępny w Bydgoszczy i okolicach
          </div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Profesjonalne Usługi Hydrauliczne &amp; Gazowe
          </h1>
<p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            Kompleksowe instalacje sanitarne, grzewcze i gazowe. Zaufaj
            doświadczeniu firmy Marlewski Dawid. Szybka diagnoza, trwałe naprawy
            i uczciwe wyceny.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 text-base hover:-translate-y-1" href="#kontakt">
              Zamów wycenę
            </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all text-base hover:-translate-y-1" href="tel:665684113">
<i className="w-5 h-5 mr-2" data-lucide="phone-call"></i>
              Zadzwoń teraz
            </a>
</div>
</div>
<div className="relative hidden md:block js-scroll delay-200">
<img alt="Hydraulik przy pracy" className="rounded-2xl shadow-2xl shadow-slate-200 border border-slate-200 relative z-10 hover:scale-[1.01] transition-transform duration-500" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 animate-[bounce_3s_infinite]">
<div className="bg-green-100 p-3 rounded-full text-green-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                Gwarancja
              </p>
<p className="text-lg font-semibold text-slate-900">Jakość Usług</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 bg-white border-y border-slate-100 scroll-mt-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="js-scroll bg-slate-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between group cursor-default hover:shadow-2xl transition-all duration-300">
<div className="mb-4 bg-white/10 w-fit p-3 rounded-lg group-hover:bg-white/20 transition-colors">
<i className="w-8 h-8 text-blue-400" data-lucide="calendar-clock"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Doświadczenie</h3>
<p className="text-slate-300 text-base leading-relaxed">
                Wieloletnia praktyka w branży hydraulicznej w Bydgoszczy.
              </p>
</div>
</div>

<div className="js-scroll delay-100 bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div className="mb-4 bg-blue-50 w-fit p-3 rounded-lg text-blue-600">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
                Certyfikaty
              </h3>
<p className="text-slate-500 text-base leading-relaxed">
                Pełne uprawnienia gazowe i hydrauliczne.
              </p>
</div>
</div>
<div className="js-scroll delay-200 bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div className="mb-4 bg-blue-50 w-fit p-3 rounded-lg text-blue-600">
<i className="w-8 h-8" data-lucide="badge-check"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
                Ubezpieczenie
              </h3>
<p className="text-slate-500 text-base leading-relaxed">
                Pełne ubezpieczenie OC działalności.
              </p>
</div>
</div>
<div className="js-scroll delay-300 bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
<div className="mb-4 bg-blue-50 w-fit p-3 rounded-lg text-blue-600">
<i className="w-8 h-8" data-lucide="thumbs-up"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">
                100+ Klientów
              </h3>
<p className="text-slate-500 text-base leading-relaxed">
                Zadowoleni klienci prywatni i firmy.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<div className="text-center mb-16 js-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
          Nie pozwól, by awaria zniszczyła Twój dom
        </h2>
<p className="text-xl text-slate-600 leading-relaxed">
          Zbyt wielu "fachowców" zostawia po sobie bałagan i nietrwałe naprawy.
          Jakość instalacji hydraulicznej to bezpieczeństwo Twoje i Twojej
          rodziny.
        </p>
</div>
<div className="space-y-6">
<div className="js-scroll delay-100 flex items-start gap-4 p-6 rounded-xl hover:bg-red-50/50 transition-colors border border-transparent hover:border-red-100 group">
<div className="mt-1 text-red-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">
              Ukryte wycieki wody
            </h3>
<p className="text-base text-slate-600">
              Niewykryte nieszczelności mogą prowadzić do zagrzybienia ścian i
              kosztownych remontów po kilku miesiącach.
            </p>
</div>
</div>
<div className="js-scroll delay-200 flex items-start gap-4 p-6 rounded-xl hover:bg-red-50/50 transition-colors border border-transparent hover:border-red-100 group">
<div className="mt-1 text-red-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="x-circle"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">
              Błędy w instalacjach C.O.
            </h3>
<p className="text-base text-slate-600">
              Źle dobrana instalacja grzewcza to wyższe rachunki za gaz i
              niedogrzane pomieszczenia.
            </p>
</div>
</div>
<div className="js-scroll delay-300 flex items-start gap-4 p-6 rounded-xl hover:bg-red-50/50 transition-colors border border-transparent hover:border-red-100 group">
<div className="mt-1 text-red-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="ban"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">
              Odmowa gwarancji producenta
            </h3>
<p className="text-base text-slate-600">
              Montaż urządzeń przez osobę bez uprawnień często skutkuje utratą
              gwarancji na drogie piece i pompy.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="js-scroll max-w-7xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative group">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center">
<div className="p-12 md:p-16 relative z-10">
<div className="bg-blue-600/20 text-blue-300 w-fit p-2 rounded-lg mb-6">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Gwarancja solidnego wykonania i spokoju
            </h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Oferuję klientom spokój ducha dzięki kompleksowej obsłudze. Od
              projektu, przez zakup materiałów, aż po czysty montaż i próbę
              szczelności.
            </p>
<a className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition-all hover:gap-3" href="#realizacje">
              Zobacz nasze realizacje
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="h-full min-h-[400px] relative overflow-hidden">
<img alt="Plumber checking boiler" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:hidden"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden"></div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent hidden lg:block"></div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="uslugi">
<div className="text-center mb-16 js-scroll">
<p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-3">
          Oferta
        </p>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
          Dwa Filary Naszej Działalności
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="js-scroll border border-slate-200 bg-white p-10 rounded-2xl flex flex-col items-start hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="bg-blue-50 text-blue-600 p-4 rounded-xl mb-6">
<i className="w-8 h-8" data-lucide="hammer"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">
            Instalacje i Remonty
          </h3>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center text-slate-600 text-lg">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Instalacje wodno-kanalizacyjne
            </li>
<li className="flex items-center text-slate-600 text-lg">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Ogrzewanie podłogowe i grzejnikowe
            </li>
<li className="flex items-center text-slate-600 text-lg">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Biały montaż (wanny, prysznice)
            </li>
<li className="flex items-center text-slate-600 text-lg">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
              Modernizacja kotłowni
            </li>
</ul>
<a className="mt-auto flex items-center text-blue-600 font-medium hover:text-blue-700 group" href="#kontakt">
            Zapytaj o instalację
            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="js-scroll delay-100 bg-slate-900 text-white p-10 rounded-2xl flex flex-col items-start shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
<div className="bg-white/10 text-white p-4 rounded-xl mb-6">
<i className="w-8 h-8" data-lucide="siren"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4">
            Pogotowie Hydrauliczne
          </h3>
<p className="text-slate-300 text-lg mb-6">
            Szybka reakcja w przypadku awarii. Działamy na terenie Bydgoszczy i
            okolic.
          </p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center text-slate-300 text-lg">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
              Udrażnianie rur i kanalizacji
            </li>
<li className="flex items-center text-slate-300 text-lg">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
              Lokalizacja i usuwanie wycieków
            </li>
<li className="flex items-center text-slate-300 text-lg">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
              Naprawa cieknących kranów i spłuczek
            </li>
</ul>
<a className="mt-auto flex items-center text-white font-medium hover:text-blue-200 group" href="tel:665684113">
            Zgłoś awarię
            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 js-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Jak wygląda współpraca?
          </h2>
<p className="text-slate-500 mt-4 text-lg">
            Prosty proces od telefonu do gotowej instalacji.
          </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="text-center bg-white js-scroll">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 border-4 border-white shadow-sm hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="phone"></i>
</div>
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                01 Kontakt
              </span>
<h3 className="text-lg font-medium text-slate-900 mb-3">
                Wstępna rozmowa
              </h3>
<p className="text-base text-slate-600">
                Opisz problem telefonicznie. Wstępnie oszacujemy zakres prac i
                termin wizyty.
              </p>
</div>

<div className="text-center bg-white js-scroll delay-100">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 border-4 border-white shadow-sm hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="clipboard-list"></i>
</div>
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                02 Diagnoza
              </span>
<h3 className="text-lg font-medium text-slate-900 mb-3">
                Wycena na miejscu
              </h3>
<p className="text-base text-slate-600">
                Przyjeżdżamy na miejsce, sprawdzamy usterkę i podajemy dokładny
                kosztorys.
              </p>
</div>

<div className="text-center bg-white js-scroll delay-200">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 border-4 border-white shadow-sm hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="wrench"></i>
</div>
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                03 Realizacja
              </span>
<h3 className="text-lg font-medium text-slate-900 mb-3">
                Naprawa / Montaż
              </h3>
<p className="text-base text-slate-600">
                Pracujemy czysto i sprawnie, używając profesjonalnych narzędzi i
                materiałów.
              </p>
</div>

<div className="text-center bg-white js-scroll delay-300">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 border-4 border-white shadow-sm hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="check-circle-2"></i>
</div>
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                04 Odbiór
              </span>
<h3 className="text-lg font-medium text-slate-900 mb-3">
                Próba i Gwarancja
              </h3>
<p className="text-base text-slate-600">
                Sprawdzamy szczelność, sprzątamy po sobie i wystawiamy gwarancję
                na usługę.
              </p>
</div>
</div>
<div className="text-center mt-16 js-scroll">
<a className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1" href="#kontakt">
              Umów wizytę
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="relative js-scroll">
<img alt="Finished kitchen sink" className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-[bounce_4s_infinite_1s]">
<i className="text-blue-600 w-6 h-6" data-lucide="clock"></i>
<div>
<p className="text-xs text-slate-500">Czas reakcji</p>
<p className="font-bold text-slate-900">Poniżej 24h</p>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8 js-scroll">
              Dlaczego klienci wybierają Marlewskiego?
            </h2>
<div className="space-y-8">
<div className="js-scroll delay-100">
<div className="flex items-center gap-2 text-red-500 font-medium mb-2">
<i className="w-4 h-4" data-lucide="triangle-alert"></i>
                  Problem
                </div>
<p className="text-slate-600 leading-relaxed text-lg">
                  Trudno znaleźć hydraulika, który jest punktualny, odbiera
                  telefony i zostawia po sobie porządek. Wiele firm liczy ukryte
                  koszty.
                </p>
</div>
<div className="js-scroll delay-200">
<div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
<i className="w-4 h-4" data-lucide="lightbulb"></i>
                  Nasze Rozwiązanie
                </div>
<p className="text-slate-600 leading-relaxed text-lg">
                  Stawiam na kulturę osobistą i profesjonalizm. Posiadam
                  nowoczesny sprzęt (kamery inspekcyjne, zamrażarki do rur), co
                  pozwala naprawiać usterki szybciej i czyściej.
                </p>
</div>
<div className="bg-slate-900 text-white p-6 rounded-xl mt-6 js-scroll delay-300 shadow-xl">
<p className="text-sm font-medium opacity-80 mb-2">Rezultat</p>
<p className="text-lg leading-relaxed">
                  "Pan Dawid przyjechał w godzinę od zgłoszenia. Awaria usunięta
                  sprawnie, a łazienka czystsza niż przed wizytą. Polecam!"
                </p>
<div className="mt-4 flex items-center gap-2 text-sm opacity-60">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
                  Klient z Bydgoszczy
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div className="js-scroll">
<div className="flex items-center gap-2 text-white mb-6">
<i className="w-5 h-5" data-lucide="wrench"></i>
<span className="text-lg font-semibold tracking-tight">
                Marlewski Dawid
              </span>
</div>
<p className="text-slate-400 mb-6 leading-relaxed">
              Profesjonalne usługi hydrauliczne w Bydgoszczy. Gwarancja jakości,
              terminowość i uczciwe ceny.
            </p>
</div>
<div className="js-scroll delay-100">
<h4 className="text-white font-medium mb-6">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 mt-0.5" data-lucide="map-pin"></i>
<span>
                  Bydgoszcz i okolice
                  <br/>
                  Dojazd do klienta
                </span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:665684113">
                  665 684 113
                </a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:kontakt@hydraulikbydgoszcz.pl">
                  kontakt@hydraulikbydgoszcz.pl
                </a>
</li>
</ul>
</div>
<div className="js-scroll delay-200">
<h4 className="text-white font-medium mb-6">Szybkie linki</h4>
<ul className="space-y-2">
<li>
<a className="hover:text-white transition-colors" href="#uslugi">
                  Instalacje Wodne
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#uslugi">
                  Ogrzewanie
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#uslugi">
                  Udrażnianie rur
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#kontakt">
                  Pogotowie hydrauliczne 24/7
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
<p>
            © 2024 Marlewski Dawid Hydraulik Bydgoszcz. Wszelkie prawa
            zastrzeżone.
          </p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Polityka Prywatności
            </a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
