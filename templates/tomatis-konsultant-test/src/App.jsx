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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tight text-teal-800 flex items-center gap-2" href="#">
<iconify-icon className="text-2xl" icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
              AURA
            </a>
</div>
<nav className="hidden md:block">
<ul className="flex space-x-8 items-center">
<li>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#about">
                  O mnie
                </a>
</li>
<li>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#method">
                  Metoda
                </a>
</li>
<li>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#services">
                  Usługi
                </a>
</li>
<li>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#process">
                  Proces
                </a>
</li>
</ul>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" href="#contact">
              Umów Konsultację
            </a>
</div>

<div className="md:hidden">
<button className="text-slate-500 hover:text-slate-700 p-2" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-white pt-16 sm:pt-24 lg:pt-32 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 text-center lg:text-left z-10 relative">
<div className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20 mb-6">
              Certyfikowany Konsultant Metody Tomatisa® Poziom 4
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Odkryj pełen potencjał poprzez siłę słuchania.
            </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pomagam dzieciom i dorosłym w poprawie komunikacji, koncentracji i
              regulacji emocjonalnej, wykorzystując zaawansowaną terapię
              słuchową Metody Tomatisa.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" href="#contact">
                Umów konsultację
              </a>
<a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all" href="#method">
                Dowiedz się, jak to działa
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-6 mt-16 lg:mt-0 relative hidden sm:block">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-sky-50 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
<img alt="Calm therapeutic environment" className="rounded-[2rem] object-cover shadow-xl h-[400px] lg:h-[600px] w-full border border-white/50" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2120&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
<div className="relative mb-12 lg:mb-0">
<div className="aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Consultant portrait" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=988&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hidden sm:block">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-2xl">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-500">
                    Najwyższy Certyfikat
                  </p>
<p className="text-base font-semibold text-slate-900 tracking-tight">
                    Ekspert Poziom 4
                  </p>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center h-full">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
              Eksperckie wsparcie w Twojej drodze do lepszego słuchania.
            </h2>
<div className="prose prose-slate prose-lg text-slate-600 mb-8 space-y-4">
<p>
                Jako Certyfikowany Konsultant Tomatisa 4 Poziomu — najwyższego
                dostępnego poziomu szkolenia — specjalizuję się w tworzeniu
                wysoce zindywidualizowanych programów stymulacji
                neurosensorycznej. Moje podejście opiera się na empatii, nauce i
                głębokim zrozumieniu neuroplastyczności.
              </p>
<p>
                Niezależnie od tego, czy jesteś rodzicem szukającym terapii
                rozwoju mowy dla swojego dziecka, czy dorosłym, który chce
                pokonać stres i poprawić koncentrację, zapewniam bezpieczne,
                spokojne środowisko, które pomoże przetrenować zdolności
                słuchowe mózgu.
              </p>
</div>
<div className="mt-8 border-t border-slate-200 pt-8">
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-widest mb-6">
                Dlaczego warto zaufać mojej praktyce?
              </h3>
<ul className="space-y-4">
<li className="flex items-start">
<iconify-icon className="text-teal-600 text-xl mt-0.5 mr-3 flex-shrink-0" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-base font-medium text-slate-900">
                      Certyfikat Najwyższego Poziomu
                    </p>
<p className="text-sm text-slate-500 mt-1">
                      Certyfikat 4 Poziomu, umożliwiający korzystanie z
                      najbardziej zaawansowanych narzędzi diagnostycznych i
                      terapeutycznych.
                    </p>
</div>
</li>
<li className="flex items-start">
<iconify-icon className="text-teal-600 text-xl mt-0.5 mr-3 flex-shrink-0" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-base font-medium text-slate-900">
                      Spersonalizowana Opieka
                    </p>
<p className="text-sm text-slate-500 mt-1">
                      Każdy program jest ściśle dostosowany do profilu
                      słuchowego pacjenta i jego konkretnych celów.
                    </p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="method">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
            Zrozumieć Metodę Tomatisa®
          </h2>
<p className="text-lg text-slate-600">
            Nie chodzi tylko o słyszenie; chodzi o słuchanie. Metoda Tomatisa to
            naturalne podejście do stymulacji neurosensorycznej. Używając
            specjalnie przetworzonej muzyki, trenuje mózg, by skuteczniej
            analizował komunikaty sensoryczne.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="bg-stone-50 rounded-2xl p-8 border border-slate-100">
<div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 text-2xl mb-6">
<iconify-icon icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">
              Neuroplastyczność
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Metoda wykorzystuje zdolność mózgu do reorganizacji. Elektroniczny
              system bramkowania tworzy kontrast sensoryczny, który zaskakuje
              mózg, utrzymując jego uwagę i stymulując szlaki nerwowe.
            </p>
</div>
<div className="bg-stone-50 rounded-2xl p-8 border border-slate-100">
<div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 text-2xl mb-6">
<iconify-icon icon="solar:stroller-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">
              Dla Dzieci
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Wysoce skuteczna jako terapia dla dzieci z problemami z
              koncentracją, opóźnieniem mowy, trudnościami w nauce i regulacji
              emocjonalnej. Zapewnia fundamentalny bodziec na ich drodze
              rozwoju.
            </p>
</div>
<div className="bg-stone-50 rounded-2xl p-8 border border-slate-100">
<div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 text-2xl mb-6">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">
              Dla Dorosłych
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Korzystna dla dorosłych doświadczających przewlekłego stresu,
              wypalenia, problemów z koncentracją lub poszukujących rozwoju
              osobistego i poprawy umiejętności komunikacyjnych w życiu
              zawodowym i prywatnym.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="absolute left-0 top-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0d9488', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">
              Zauważalne rezultaty, które możesz dostrzec i usłyszeć.
            </h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Terapia słuchowa działa na fundamentalnym poziomie, wywołując
              efekt domina w funkcjach poznawczych, emocjonalnych i
              motorycznych. Klienci zazwyczaj obserwują głębokie zmiany w
              trakcie i po zakończeniu programów.
            </p>
<a className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors" href="#contact">
              Rozpocznij swoją transformację
              <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
<iconify-icon className="text-teal-400 text-2xl mb-4" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">
                Poprawa Koncentracji
              </h4>
<p className="text-sm text-slate-400">
                Zwiększona zdolność do skupienia się na zadaniach i filtrowania
                rozpraszającego hałasu w tle.
              </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
<iconify-icon className="text-teal-400 text-2xl mb-4" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">Rozwój Mowy</h4>
<p className="text-sm text-slate-400">
                Wyraźniejsza artykulacja, lepsze przypominanie słownictwa i
                zwiększona chęć do komunikacji.
              </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
<iconify-icon className="text-teal-400 text-2xl mb-4" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">
                Regulacja Emocjonalna
              </h4>
<p className="text-sm text-slate-400">
                Zmniejszony niepokój, lepsze radzenie sobie ze stresem i
                stabilniejszy nastrój.
              </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
<iconify-icon className="text-teal-400 text-2xl mb-4" icon="solar:running-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-white mb-2">
                Umiejętności Motoryczne
              </h4>
<p className="text-sm text-slate-400">
                Lepsza koordynacja, równowaga i świadomość przestrzenna związane
                ze stymulacją przedsionkową.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
            Terapia i Usługi
          </h2>
<p className="text-lg text-slate-600">
            Indywidualne programy terapii słuchowej dostosowane do Twoich
            potrzeb, dostępne zarówno w gabinecie, jak i zdalnie.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="mb-6">
<div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 text-xl">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Wstępna Konsultacja i Ocena
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Kompleksowa ocena obejmująca szczegółowy wywiad oraz
                specjalistyczny test uwagi słuchowej, w celu nakreślenia Twojego
                unikalnego profilu słuchowego.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-slate-900">
                Tylko w gabinecie
              </span>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
              Program Główny
            </div>
<div className="mb-6">
<div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 text-xl">
<iconify-icon icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Spersonalizowany Trening Słuchowy
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Zwykle składa się z 13-14 dni sesji słuchowych (1,5 - 2 godziny
                dziennie), z wykorzystaniem dostosowanych programów za pomocą
                urządzenia TalksUp®.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-slate-900">
                Zdalnie lub w gabinecie
              </span>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="mb-6">
<div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 text-xl">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
                Ewaluacja i Faza Aktywna
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Oceny kontrolne między etapami słuchowymi oraz włączenie
                aktywnej pracy z głosem (przy użyciu mikrofonu) w miarę
                postępów.
              </p>
</div>
<div className="mt-auto pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-slate-900">
                Zintegrowane z programem
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">
          Twoja droga do postępu
        </h2>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white md:bg-transparent text-center group">
<div className="w-12 h-12 mx-auto bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-teal-600 font-medium text-lg mb-6 shadow-[0_0_0_8px_white] transition-colors group-hover:bg-teal-600 group-hover:text-white">
                1
              </div>
<h4 className="text-base font-medium text-slate-900 mb-2">
                Konsultacja Wstępna
              </h4>
<p className="text-sm text-slate-500 px-4">
                Omawiamy wyzwania, cele oraz zbieramy szczegółowy wywiad
                dotyczący rozwoju lub historii osobistej.
              </p>
</div>

<div className="bg-white md:bg-transparent text-center group">
<div className="w-12 h-12 mx-auto bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-teal-600 font-medium text-lg mb-6 shadow-[0_0_0_8px_white] transition-colors group-hover:bg-teal-600 group-hover:text-white">
                2
              </div>
<h4 className="text-base font-medium text-slate-900 mb-2">
                Test Uwagi Słuchowej
              </h4>
<p className="text-sm text-slate-500 px-4">
                Specjalistyczny test oceniający sposób, w jaki Ty lub Twoje
                dziecko przetwarzacie informacje słuchowe.
              </p>
</div>

<div className="bg-white md:bg-transparent text-center group">
<div className="w-12 h-12 mx-auto bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-teal-600 font-medium text-lg mb-6 shadow-[0_0_0_8px_white] transition-colors group-hover:bg-teal-600 group-hover:text-white">
                3
              </div>
<h4 className="text-base font-medium text-slate-900 mb-2">
                Program Terapii
              </h4>
<p className="text-sm text-slate-500 px-4">
                Pierwszy etap codziennych sesji słuchowych dostosowany do
                wyników wstępnej diagnozy.
              </p>
</div>

<div className="bg-white md:bg-transparent text-center group">
<div className="w-12 h-12 mx-auto bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-teal-600 font-medium text-lg mb-6 shadow-[0_0_0_8px_white] transition-colors group-hover:bg-teal-600 group-hover:text-white">
                4
              </div>
<h4 className="text-base font-medium text-slate-900 mb-2">
                Ewaluacja i Kontynuacja
              </h4>
<p className="text-sm text-slate-500 px-4">
                Diagnoza po etapie w celu zmierzenia postępów i zaplanowania
                kolejnej fazy terapii.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-slate-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">
          Historie zmian
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">
              "Już po dwóch intensywnych etapach, terapia rozwoju mowy mojego
              6-letniego syna zrobiła ogromny krok naprzód. Jest spokojniejszy,
              buduje pełne zdania, a jego nauczycielki w przedszkolu zauważyły
              znaczną poprawę koncentracji."
            </p>
<div className="text-sm font-medium text-slate-900">Sarah M.</div>
<div className="text-xs text-slate-500">Rodzic 6-latka</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">
              "Szukałem pomocy z powodu przewlekłego wypalenia zawodowego i mgły
              mózgowej. Metoda Tomatisa była wyjątkowo relaksująca, a
              jednocześnie stymulująca. Czuję, jakby mój mózg został
              'zresetowany'. Moja koncentracja w pracy wróciła do stanu sprzed
              dziesięciu lat."
            </p>
<div className="text-sm font-medium text-slate-900">David R.</div>
<div className="text-xs text-slate-500">Klient Dorosły (42)</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6">
              "Opcja zdalna uratowała grafik naszej rodziny. Wypożyczony do domu
              sprzęt był łatwy w obsłudze, a ciągłe wsparcie naszego konsultanta
              na poziomie 4 sprawiło, że cały proces był bezproblemowy i wysoce
              skuteczny dla naszej córki."
            </p>
<div className="text-sm font-medium text-slate-900">Elena K.</div>
<div className="text-xs text-slate-500">Rodzic</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">
          Często Zadawane Pytania
        </h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h3 className="text-base">Czy Metoda Tomatisa jest bezpieczna?</h3>
<span className="relative h-5 w-5 shrink-0 text-teal-600">
<iconify-icon className="absolute inset-0 text-xl opacity-100 transition-opacity group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 transition-opacity group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
              Tak, jest całkowicie bezpieczna, nieinwazyjna i naturalna. Pełni
              raczej funkcję programu edukacyjnego dla mózgu niż leczenia
              medycznego. Od dziesięcioleci jest bezpiecznie stosowana przez
              miliony ludzi na całym świecie.
            </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h3 className="text-base">Jak długo trwa terapia?</h3>
<span className="relative h-5 w-5 shrink-0 text-teal-600">
<iconify-icon className="absolute inset-0 text-xl opacity-100 transition-opacity group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 transition-opacity group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
              Typowy program składa się z 2 do 4 "etapów" lub intensywnych
              sesji. Każdy etap trwa zwykle 13-14 dni, przy 1,5 do 2 godzinach
              słuchania dziennie. Pomiędzy etapami następują kilkutygodniowe
              przerwy na integrację zmian w mózgu.
            </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h3 className="text-base">Kiedy można spodziewać się rezultatów?</h3>
<span className="relative h-5 w-5 shrink-0 text-teal-600">
<iconify-icon className="absolute inset-0 text-xl opacity-100 transition-opacity group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 transition-opacity group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
              Wyniki różnią się w zależności od osoby. Niektórzy zauważają
              zmiany już w pierwszych dniach (np. lepszy sen lub spokojniejsze
              zachowanie), podczas gdy inni widzą głębsze zmiany rozwojowe kilka
              tygodni po zakończeniu etapu.
            </div>
</details>
<details className="group border border-slate-200 rounded-xl bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<h3 className="text-base">Co oznacza Konsultant Poziomu 4?</h3>
<span className="relative h-5 w-5 shrink-0 text-teal-600">
<iconify-icon className="absolute inset-0 text-xl opacity-100 transition-opacity group-open:opacity-0" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 transition-opacity group-open:opacity-100" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
              Poziom 4 to najwyższy poziom certyfikacji w Metodzie Tomatisa®.
              Oznacza to, że praktyk jest w pełni przeszkolony do
              przeprowadzania testów uwagi słuchowej, tworzenia wysoce
              spersonalizowanych programów od podstaw oraz wykorzystywania fazy
              aktywnej (pracy z mikrofonem) w terapii.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden">
<div className="grid lg:grid-cols-5 border border-slate-100 rounded-[2.5rem]">

<div className="lg:col-span-2 bg-teal-800 text-white p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden">

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-700 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
                  Skontaktuj się z nami.
                </h2>
<p className="text-teal-100 text-sm leading-relaxed mb-12">
                  Gotowy, by zrobić pierwszy krok? Skontaktuj się z nami, aby
                  umówić się na pierwszą konsultację lub zadać pytania dotyczące
                  terapii.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700/50 text-teal-300">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700/50 text-teal-300">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">
                      contact@auratomatis.com
                    </span>
</div>
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700/50 text-teal-300">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">
                      123 Wellness Ave, Suite 400
                      <br/>
                      Spokojne Miasto, ST 12345
                    </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 sm:p-14">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-8">
                Wyślij wiadomość
              </h3>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="first-name">
                      Imię
                    </label>
<input className="block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-colors" id="first-name" name="first-name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="last-name">
                      Nazwisko
                    </label>
<input className="block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-colors" id="last-name" name="last-name" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">
                    Adres e-mail
                  </label>
<input className="block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-colors" id="email" name="email" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="inquiry-type">
                    Jestem zainteresowany terapią dla...
                  </label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-colors" id="inquiry-type" name="inquiry-type">
<option>Dziecka</option>
<option>Siebie (Osoba dorosła)</option>
<option>Inne / Zapytanie profesjonalne</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">
                    Wiadomość
                  </label>
<textarea className="block w-full rounded-lg border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 bg-slate-50 focus:bg-white transition-colors" id="message" name="message" rows="4"></textarea>
</div>
<div className="pt-2 flex items-center justify-between">

<div className="flex items-center">
<input className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600 accent-teal-600" id="privacy" name="privacy" type="checkbox"/>
<label className="ml-2 block text-xs text-slate-500" htmlFor="privacy">
                      Akceptuję politykę prywatności.
                    </label>
</div>
<button className="rounded-full bg-teal-700 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors" type="submit">
                    Umów konsultację
                  </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-teal-800">
<iconify-icon className="text-xl" icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">AURA</span>
</div>
<p className="text-xs text-slate-500">
          © 2023 Aura Konsultacje Tomatis. Tomatis® jest zarejestrowanym
          znakiem towarowym.
        </p>
</div>
</footer>

    </>
  );
}
