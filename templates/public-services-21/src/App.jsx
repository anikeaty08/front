import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Lato', 'sans-serif'],
},
colors: {
zus: {
green: '#007834',
darkGreen: '#11783B',
blue: '#00416E',
light: '#F8F9FA',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="skip-link" href="#main-content">Przejdź do treści</a>

<div className="bg-slate-50 border-b border-slate-200 py-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">

<nav aria-label="Wybór grupy odbiorców" className="flex flex-wrap justify-center gap-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mr-2 self-center">
            Dla kogo:
          </span>
<a className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-zus-green hover:text-white hover:border-zus-green transition-colors" href="#">
            Ubezpieczony
          </a>
<a className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-zus-green hover:text-white hover:border-zus-green transition-colors" href="#">
            Emeryt i rencista
          </a>
<a className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-zus-green hover:text-white hover:border-zus-green transition-colors" href="#">
            Przedsiębiorca
          </a>
<a className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-zus-green hover:text-white hover:border-zus-green transition-colors" href="#">
            Księgowa
          </a>
</nav>

<div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
<a className="hover:text-zus-green flex items-center gap-1" href="#">
            Kontakt
          </a>
<a className="hover:text-zus-green flex items-center gap-1" href="#">
            Oddziały
          </a>
<a className="hover:text-zus-green flex items-center gap-1" href="#">
            e-Wizyta
          </a>
<div aria-hidden="true" className="h-4 w-px bg-slate-300"></div>
<button aria-label="Zmień język" className="hover:text-zus-green flex items-center gap-1">
            PL
          </button>
<button aria-label="Zwiększ rozmiar tekstu" className="hover:text-zus-green flex items-center gap-1 font-bold text-sm">
            A A+
          </button>
</div>
</div>
</div>

<header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex flex-col lg:flex-row items-center justify-between gap-4">

<a className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 ring-zus-green rounded-lg p-1" href="/">
<div className="flex flex-col">
<span className="text-3xl font-black tracking-tighter text-zus-green leading-none">
                ZUS
              </span>
</div>
<div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block"></div>
<span className="text-sm font-bold text-slate-700 leading-tight hidden sm:block group-hover:text-zus-green transition-colors">
              Zakład
              <br/>
              Ubezpieczeń
              <br/>
              Społecznych
            </span>
</a>

<div className="w-full max-w-xl relative group">
<label className="sr-only" htmlFor="search-input">
              Szukaj sprawy, świadczenia lub formularza
            </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:bg-white focus:border-zus-green focus:ring-1 focus:ring-zus-green sm:text-sm transition-shadow shadow-sm" id="search-input" placeholder="Szukaj sprawy, np. L4, 800+, emerytura" type="text"/>
</div>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 border border-slate-300 text-sm font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zus-green transition-colors shadow-sm" href="#">
              Złóż wniosek online
            </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-zus-green hover:bg-zus-darkGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zus-green shadow-sm transition-all transform active:scale-95" href="#">
<iconify-icon className="mr-2" icon="solar:login-2-linear" width="20"></iconify-icon>
              Zaloguj do PUE ZUS
            </a>
</div>
</div>

<nav aria-label="Główna nawigacja" className="hidden lg:flex items-center gap-8 mt-4 pt-2 border-t border-slate-100">
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            Sprawy i świadczenia
          </a>
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            Składki i płatnicy
          </a>
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            Formularze i druki
          </a>
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            Aktualności
          </a>
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            Poradniki
          </a>
<a className="text-sm font-semibold text-slate-700 hover:text-zus-green py-2 border-b-2 border-transparent hover:border-zus-green transition-all" href="#">
            O ZUS
          </a>
</nav>
</div>
</header>
<main className="flex-grow" id="main-content">

<section className="relative isolate overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">

<img alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40 sm:opacity-100" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&amp;fit=crop&amp;q=80&amp;w=2069&amp;ixlib=rb-4.0.3"/>

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/20 sm:to-transparent"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-transparent to-transparent sm:hidden"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-12 max-w-2xl">
<h1 className="text-4xl lg:text-6xl font-black text-zus-blue tracking-tight leading-tight mb-6">
              Załatw sprawy w ZUS
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zus-green to-zus-darkGreen">
                szybko i bezpiecznie
              </span>
</h1>
<p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-lg bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/60">
              Wybierz temat poniżej lub opisz, czego szukasz w wyszukiwarce.
              Poprowadzimy Cię krok po kroku przez formalności.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-6 md:p-8 hover:border-zus-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
<div>
<div className="w-12 h-12 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-zus-green mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h2 className="text-xl font-bold text-slate-800 mb-2">
                  Sprawdź składki i konto
                </h2>
<p className="text-slate-600 mb-4 text-sm font-medium">
                  Zweryfikuj stan konta ubezpieczonego oraz wysokość
                  odprowadzonych składek.
                </p>
</div>
<a className="inline-flex items-center text-zus-green font-bold text-sm hover:underline decoration-2 underline-offset-4" href="#">
                Przejdź do salda
                <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-6 md:p-8 hover:border-zus-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
<div>
<div className="w-12 h-12 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-zus-blue mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-date-linear" width="28"></iconify-icon>
</div>
<h2 className="text-xl font-bold text-slate-800 mb-2">
                  Emerytura: kiedy i jak?
                </h2>
<p className="text-slate-600 mb-4 text-sm font-medium">
                  Oblicz prognozowaną emeryturę, sprawdź wiek emerytalny i złóż
                  wniosek.
                </p>
</div>
<a className="inline-flex items-center text-zus-blue font-bold text-sm hover:underline decoration-2 underline-offset-4" href="#">
                Sprawdź warunki
                <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-6 md:p-8 hover:border-zus-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
<div>
<div className="w-12 h-12 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stethoscope-linear" width="28"></iconify-icon>
</div>
<h2 className="text-xl font-bold text-slate-800 mb-2">
                  Zasiłek chorobowy i L4
                </h2>
<p className="text-slate-600 mb-4 text-sm font-medium">
                  Zobacz swoje zwolnienia lekarskie (e-ZLA) i dowiedz się jak
                  uzyskać zasiłek.
                </p>
</div>
<a className="inline-flex items-center text-indigo-600 font-bold text-sm hover:underline decoration-2 underline-offset-4" href="#">
                Dowiedz się więcej
                <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-10 inline-flex flex-wrap gap-6 items-center text-sm font-bold text-slate-700 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-zus-green" icon="solar:shield-check-linear" width="20"></iconify-icon>
              Bezpieczne logowanie
            </div>
<div className="h-4 w-px bg-slate-400 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zus-green" icon="solar:chat-round-check-linear" width="20"></iconify-icon>
              Prosty język
            </div>
<div className="h-4 w-px bg-slate-400 hidden sm:block"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zus-green" icon="solar:accessibility-linear" width="20"></iconify-icon>
              Dostępność cyfrowa
            </div>
</div>
</div>
</section>

<section className="py-16 bg-zus-light border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-zus-green" icon="solar:widget-2-linear"></iconify-icon>
            Najczęstsze sprawy
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group focus:ring-2 focus:ring-zus-green" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Emerytura
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Wniosek, warunki, terminy wypłat
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Renta
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:wheelchair-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Rodzinna, z tytułu niezdolności
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Zasiłek chorobowy
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Jak dostać i kiedy przysługuje
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Zasiłek macierzyński
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:baby-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Dla rodziców i opiekunów
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Składki ZUS
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Terminy płatności i kwoty
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Zaświadczenia
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">Pobierz o niezaleganiu</p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  800+ (mZUS)
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">
                Złóż wniosek w aplikacji
              </p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>

<a className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-zus-green transition group" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-800 text-lg group-hover:text-zus-green transition-colors">
                  Zasiłek pogrzebowy
                </h3>
<iconify-icon className="text-slate-400 group-hover:text-zus-green" icon="solar:heart-broken-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-3">Kto może otrzymać zwrot</p>
<span className="text-xs font-bold text-zus-green uppercase tracking-wide">
                Zobacz
              </span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900 mb-3">
              Załatw online krok po kroku
            </h2>
<p className="text-slate-500">
              Większość spraw urzędowych załatwisz bez wychodzenia z domu.
            </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border-2 border-zus-green rounded-full flex items-center justify-center text-2xl font-bold text-zus-green mb-4 shadow-sm">
                  1
                </div>
<h3 className="font-bold text-lg text-slate-800 mb-2">
                  Wybierz sprawę
                </h3>
<p className="text-slate-500 text-sm max-w-xs">
                  Znajdź interesujący Cię wniosek w katalogu usług lub przez
                  wyszukiwarkę.
                </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border-2 border-zus-green rounded-full flex items-center justify-center text-2xl font-bold text-zus-green mb-4 shadow-sm">
                  2
                </div>
<h3 className="font-bold text-lg text-slate-800 mb-2">
                  Uzupełnij dane
                </h3>
<p className="text-slate-500 text-sm max-w-xs">
                  System automatycznie pobierze Twoje dane. Wypełnij tylko
                  brakujące pola.
                </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border-2 border-zus-green rounded-full flex items-center justify-center text-2xl font-bold text-zus-green mb-4 shadow-sm">
                  3
                </div>
<h3 className="font-bold text-lg text-slate-800 mb-2">
                  Wyślij i śledź status
                </h3>
<p className="text-slate-500 text-sm max-w-xs">
                  Podpisz profilem zaufanym. Otrzymasz potwierdzenie UPO.
                </p>
</div>
</div>
</div>
<div className="mt-12 text-center bg-slate-50 rounded-xl p-6 border border-slate-100 max-w-3xl mx-auto">
<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-6">
<div className="flex items-center text-slate-600 text-sm">
<iconify-icon className="mr-2 text-zus-green" icon="solar:diskette-linear"></iconify-icon>
                Możesz zapisać wniosek jako roboczy i wrócić później.
              </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3 bg-zus-green text-white font-bold rounded-lg shadow-md hover:bg-zus-darkGreen transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-zus-green" href="#">
                Zaloguj do PUE ZUS
              </a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 border border-slate-300 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#">
                Zobacz wszystkie e-usługi
              </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zus-light border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2">
<div className="flex justify-between items-end mb-6">
<h2 className="text-2xl font-bold text-slate-900">Aktualności</h2>
<a className="text-sm font-bold text-zus-blue hover:underline" href="#">
                  Wszystkie aktualności
                </a>
</div>
<div className="space-y-6">

<article className="flex flex-col sm:flex-row gap-4 group cursor-pointer">
<div className="sm:w-32 sm:h-24 bg-slate-200 rounded-lg flex-shrink-0"></div>

<div>
<div className="text-xs font-semibold text-slate-500 mb-1">
                      12 października 2023
                    </div>
<h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-zus-green transition-colors">
                      Zmiany w wysokości składek dla przedsiębiorców od 2024
                      roku
                    </h3>
<p className="text-slate-600 text-sm line-clamp-2">
                      Informujemy o nowych stawkach oraz terminach płatności,
                      które wejdą w życie od 1 stycznia. Sprawdź, czy dotyczy to
                      Twojej działalności.
                    </p>
</div>
</article>
<hr className="border-slate-200"/>

<article className="flex flex-col sm:flex-row gap-4 group cursor-pointer">
<div className="sm:w-32 sm:h-24 bg-slate-200 rounded-lg flex-shrink-0"></div>
<div>
<div className="text-xs font-semibold text-slate-500 mb-1">
                      10 października 2023
                    </div>
<h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-zus-green transition-colors">
                      Bezpłatne szkolenia z obsługi programu Płatnik
                    </h3>
<p className="text-slate-600 text-sm line-clamp-2">
                      Zapraszamy księgowych i płatników składek na cykl
                      webinarów dotyczących najnowszej wersji oprogramowania.
                    </p>
</div>
</article>
<hr className="border-slate-200"/>

<article className="flex flex-col sm:flex-row gap-4 group cursor-pointer">
<div className="sm:w-32 sm:h-24 bg-slate-200 rounded-lg flex-shrink-0"></div>
<div>
<div className="text-xs font-semibold text-slate-500 mb-1">
                      05 października 2023
                    </div>
<h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-zus-green transition-colors">
                      Waloryzacja świadczeń emerytalno-rentowych
                    </h3>
<p className="text-slate-600 text-sm line-clamp-2">
                      Prezes ZUS ogłasza wskaźnik waloryzacji na nadchodzący
                      kwartał. Zobacz tabelę waloryzacji.
                    </p>
</div>
</article>
</div>
</div>

<div className="lg:col-span-1">
<h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-red-600" icon="solar:bell-bing-linear"></iconify-icon>
                Ważne komunikaty
              </h2>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="border-l-4 border-yellow-400 p-4 bg-yellow-50 mb-1">
<div className="flex gap-3">
<iconify-icon className="text-yellow-600 flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-bold text-slate-800">
                        Zmiana terminów rozliczeń
                      </h3>
<p className="text-xs text-slate-600 mt-1">
                        Termin składania deklaracji DRA za październik został
                        przesunięty na 20. dzień miesiąca.
                      </p>
<a className="text-xs font-bold text-slate-800 underline mt-2 block hover:text-zus-green" href="#">
                        Sprawdź szczegóły
                      </a>
</div>
</div>
</div>
<div className="border-l-4 border-red-500 p-4 bg-red-50">
<div className="flex gap-3">
<iconify-icon className="text-red-600 flex-shrink-0 mt-0.5" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-bold text-slate-800">
                        Uwaga na fałszywe SMSy
                      </h3>
<p className="text-xs text-slate-600 mt-1">
                        Ostrzegamy przed wiadomościami podszywającymi się pod
                        ZUS w sprawie niedopłaty składek. Nie klikaj w linki!
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Potrzebujesz pomocy?
          </h2>
<p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            Jeśli nie wiesz, od czego zacząć — wybierz temat kontaktu, a
            pomożemy Ci załatwić sprawę.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition text-center group">
<div className="w-14 h-14 bg-zus-light rounded-full flex items-center justify-center mx-auto mb-4 text-zus-green group-hover:bg-zus-green group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">Infolinia</h3>
<p className="text-2xl font-bold text-zus-green mb-1">22 560 16 00</p>
<p className="text-xs text-slate-500">Pn-Pt w godz. 7:00 – 18:00</p>
</div>

<a className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition text-center group" href="#">
<div className="w-14 h-14 bg-zus-light rounded-full flex items-center justify-center mx-auto mb-4 text-zus-green group-hover:bg-zus-green group-hover:text-white transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">e-Wizyta</h3>
<p className="text-sm text-slate-600 mb-2">
                Rozmowa wideo z pracownikiem
              </p>
<span className="text-xs font-bold text-zus-green uppercase border-b border-zus-green pb-0.5">
                Umów spotkanie
              </span>
</a>

<a className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition text-center group" href="#">
<div className="w-14 h-14 bg-zus-light rounded-full flex items-center justify-center mx-auto mb-4 text-zus-green group-hover:bg-zus-green group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">
                Wirtualny doradca
              </h3>
<p className="text-sm text-slate-600 mb-2">
                Zadaj pytanie na czacie 24/7
              </p>
<span className="text-xs font-bold text-zus-green uppercase border-b border-zus-green pb-0.5">
                Rozpocznij czat
              </span>
</a>

<a className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg transition text-center group" href="#">
<div className="w-14 h-14 bg-zus-light rounded-full flex items-center justify-center mx-auto mb-4 text-zus-green group-hover:bg-zus-green group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">
                Znajdź placówkę
              </h3>
<p className="text-sm text-slate-600 mb-2">
                Wyszukaj oddział i godziny
              </p>
<span className="text-xs font-bold text-zus-green uppercase border-b border-zus-green pb-0.5">
                Szukaj na mapie
              </span>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-zus-blue text-white py-12 border-t border-blue-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

<div>
<h3 className="font-bold text-lg mb-4 border-b border-blue-800 pb-2 inline-block">
              Sprawy i świadczenia
            </h3>
<ul className="space-y-2 text-sm text-blue-100">
<li>
<a className="hover:text-white hover:underline" href="#">
                  Emerytury
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">Renty</a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">Zasiłki</a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Świadczenia dla rodzin
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Orzecznictwo lekarskie
                </a>
</li>
</ul>
</div>

<div>
<h3 className="font-bold text-lg mb-4 border-b border-blue-800 pb-2 inline-block">
              Płatnicy
            </h3>
<ul className="space-y-2 text-sm text-blue-100">
<li>
<a className="hover:text-white hover:underline" href="#">
                  Zgłoszenie do ubezpieczeń
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Rozliczenia i składki
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Program Płatnik
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  ePłatnik
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Ulgi i umorzenia
                </a>
</li>
</ul>
</div>

<div>
<h3 className="font-bold text-lg mb-4 border-b border-blue-800 pb-2 inline-block">
              O ZUS
            </h3>
<ul className="space-y-2 text-sm text-blue-100">
<li>
<a className="hover:text-white hover:underline" href="#">O nas</a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">Kariera</a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Zamówienia publiczne
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Statystyki
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Projekty UE
                </a>
</li>
</ul>
</div>

<div>
<h3 className="font-bold text-lg mb-4 border-b border-blue-800 pb-2 inline-block">
              BIP i prawne
            </h3>
<ul className="space-y-2 text-sm text-blue-100">
<li>
<a className="hover:text-white hover:underline" href="#">
                  Biuletyn Informacji Publicznej
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">Prawo</a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Petycje i wnioski
                </a>
</li>
<li>
<a className="hover:text-white hover:underline" href="#">
                  Ochrona danych osobowych (RODO)
                </a>
</li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1 flex flex-col justify-start">
<span className="text-4xl font-black tracking-tighter text-white opacity-20 mb-4">
              ZUS
            </span>
<p className="text-xs text-blue-200 leading-relaxed">
              Zakład Ubezpieczeń Społecznych.
              <br/>
              Dbamy o bezpieczeństwo socjalne milionów Polaków.
            </p>
</div>
</div>
<hr className="border-blue-800 mb-6"/>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
<div className="flex flex-wrap gap-6">
<a className="hover:text-white" href="#">Polityka prywatności</a>
<a className="hover:text-white" href="#">Deklaracja dostępności</a>
<a className="hover:text-white" href="#">Mapa serwisu</a>
</div>
<p>© 2023 Zakład Ubezpieczeń Społecznych</p>
</div>
</div>
</footer>

    </>
  );
}
