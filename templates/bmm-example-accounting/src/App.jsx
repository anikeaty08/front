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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
<span className="text-white font-medium tracking-tighter text-sm">KP</span>
</div>
<span className="font-medium tracking-tight text-slate-900 text-lg">Księgowość Pro</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#uslugi">Usługi</a>
<a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#dlaczego-my">Dlaczego my</a>
<a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#cennik">Cennik</a>
<a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#opinie">Opinie</a>
</div>
<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-normal rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors" href="#kontakt">
                        Skontaktuj się
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900 p-2" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-40 overflow-hidden flex items-center min-h-[80vh]">

<div className="absolute inset-0 z-0">
<img alt="Praca biura rachunkowego" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-slate-900/75"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-slate-300 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                Przyjmujemy nowych klientów
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-tight">
                Nowoczesna księgowość <br className="hidden sm:block"/> dla rozwijających się firm.
            </h1>
<p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Skup się na budowaniu swojego biznesu, a my zajmiemy się resztą. Oferujemy kompleksowe wsparcie księgowe i podatkowe z pełnym dostępem online.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-normal rounded-xl text-slate-900 bg-white hover:bg-gray-100 transition-all shadow-sm" href="#kontakt">
                    Darmowa konsultacja
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-normal rounded-xl text-white bg-slate-800/50 hover:bg-slate-800 backdrop-blur-md transition-all shadow-sm" href="#uslugi">
                    Poznaj nasze usługi
                    <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="uslugi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Kompleksowa oferta</h2>
<p className="mt-4 text-base text-slate-500">Zapewniamy pełne spektrum usług finansowo-księgowych dopasowanych do potrzeb Twojej działalności.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-gray-100 mb-4 text-slate-700">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Prowadzenie księgowości</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Pełna księgowość, KPiR, ryczałt. Rzetelne ewidencjonowanie zdarzeń gospodarczych zgodnie z aktualnymi przepisami.
                    </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-gray-100 mb-4 text-slate-700">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Rozliczenia podatkowe</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Deklaracje VAT, PIT, CIT. Bezpieczne i terminowe rozliczenia z Urzędem Skarbowym oraz optymalizacja zobowiązań.
                    </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-gray-100 mb-4 text-slate-700">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Obsługa firm</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Kompleksowa obsługa kadrowo-płacowa, rozliczenia z ZUS, a także wsparcie przy zakładaniu nowej działalności.
                    </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-gray-100 mb-4 text-slate-700">
<i className="w-6 h-6" data-lucide="message-square-check"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Doradztwo podatkowe</h3>
<p className="text-base text-slate-500 leading-relaxed">
                        Profesjonalne konsultacje, interpretacje podatkowe i planowanie struktury firmy w celu minimalizacji ryzyka.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="dlaczego-my">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Dlaczego warto wybrać nasze biuro?</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                        Łączymy wieloletnie doświadczenie z nowoczesnymi technologiami. Naszym celem jest uproszczenie procesów finansowych w Twojej firmie, abyś mógł spokojnie zarządzać swoim biznesem.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-slate-900" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Bezpieczeństwo danych</h4>
<p className="text-base text-slate-500 mt-1">Stosujemy najwyższe standardy szyfrowania i regularne kopie zapasowe, chroniąc Twoje informacje.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-slate-900" data-lucide="laptop"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Dostęp online 24/7</h4>
<p className="text-base text-slate-500 mt-1">Wgląd w dokumenty, faktury i raporty finansowe z każdego miejsca i o każdej porze.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-slate-900" data-lucide="users"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Dedykowany opiekun</h4>
<p className="text-base text-slate-500 mt-1">Zawsze kontaktujesz się z tą samą osobą, która doskonale zna specyfikę Twojej działalności.</p>
</div>
</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[4/3] flex items-center justify-center p-8">
<div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col p-4">
<div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="flex gap-4 h-full">
<div className="w-1/3 bg-slate-50 rounded-lg border border-gray-100 p-3 flex flex-col gap-2">
<div className="w-full h-2 bg-slate-200 rounded-full w-3/4"></div>
<div className="w-full h-2 bg-slate-200 rounded-full w-1/2"></div>
<div className="w-full h-2 bg-slate-200 rounded-full w-5/6"></div>
</div>
<div className="w-2/3 flex flex-col gap-4">
<div className="h-1/2 bg-slate-50 rounded-lg border border-gray-100 p-4 flex items-end justify-between">
<div className="w-8 h-3/4 bg-slate-900 rounded-t-sm"></div>
<div className="w-8 h-1/2 bg-slate-300 rounded-t-sm"></div>
<div className="w-8 h-full bg-slate-900 rounded-t-sm"></div>
<div className="w-8 h-2/3 bg-slate-300 rounded-t-sm"></div>
<div className="w-8 h-5/6 bg-slate-900 rounded-t-sm"></div>
</div>
<div className="h-1/2 bg-slate-50 rounded-lg border border-gray-100 flex items-center justify-center">
<i className="w-12 h-12 text-slate-300" data-lucide="pie-chart"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="opinie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-center mb-16">Zaufali nam</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
<i className="w-8 h-8 text-slate-600 mb-6" data-lucide="quote"></i>
<p className="text-base text-slate-300 mb-6 leading-relaxed">
                        "Przejście do Księgowość Pro było najlepszą decyzją dla mojej firmy. Platforma online jest intuicyjna, a wsparcie dedykowanej księgowej nieocenione. Polecam każdemu przedsiębiorcy."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-medium">AK</div>
<div>
<p className="text-base font-medium text-white">Anna Kowalska</p>
<p className="text-sm text-slate-400">CEO, TechFlow Sp. z o.o.</p>
</div>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
<i className="w-8 h-8 text-slate-600 mb-6" data-lucide="quote"></i>
<p className="text-base text-slate-300 mb-6 leading-relaxed">
                        "Cenię ich za terminowość i proaktywne podejście do zmian w przepisach podatkowych. Zawsze informują mnie z wyprzedzeniem o nowych obowiązkach i możliwościach optymalizacji."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-medium">MN</div>
<div>
<p className="text-base font-medium text-white">Michał Nowak</p>
<p className="text-sm text-slate-400">Właściciel, Studio Nowak</p>
</div>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
<i className="w-8 h-8 text-slate-600 mb-6" data-lucide="quote"></i>
<p className="text-base text-slate-300 mb-6 leading-relaxed">
                        "Pełen profesjonalizm i świetny kontakt. Obsługa kadrowa jest bezbłędna, co pozwala mi skupić się na rekrutacji i rozwoju zespołu zamiast na papierologii."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-medium">PW</div>
<div>
<p className="text-base font-medium text-white">Piotr Wiśniewski</p>
<p className="text-sm text-slate-400">Dyrektor, BuildCorp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-100" id="cennik">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Przejrzysty cennik</h2>
<p className="mt-4 text-base text-slate-500">Proste plany dostosowane do formy działalności. Bez ukrytych kosztów.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900">JDG - Ryczałt</h3>
<p className="text-base text-slate-500 mt-2 h-12">Dla freelancerów i wolnych zawodów.</p>
<div className="mt-6 mb-8">
<span className="text-sm text-slate-500 font-normal">od</span>
<span className="text-4xl font-medium tracking-tight text-slate-900">149</span>
<span className="text-base text-slate-500">zł / mc</span>
</div>
<ul className="space-y-4 text-base text-slate-600 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Ewidencja przychodów
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Rozliczenia ZUS
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Dostęp do aplikacji
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 rounded-xl border border-gray-200 text-center text-base font-normal text-slate-900 hover:bg-gray-50 transition-colors" href="#kontakt">Wybierz plan</a>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col relative shadow-lg transform md:-translate-y-4">
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="bg-white text-slate-900 text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wider">Popularny</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">JDG - KPiR</h3>
<p className="text-base text-slate-400 mt-2 h-12">Dla małych firm handlowych i usługowych.</p>
<div className="mt-6 mb-8">
<span className="text-sm text-slate-400 font-normal">od</span>
<span className="text-4xl font-medium tracking-tight text-white">249</span>
<span className="text-base text-slate-400">zł / mc</span>
</div>
<ul className="space-y-4 text-base text-slate-300 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Księga Przychodów i Rozchodów
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Rozliczenia VAT (JPK_V7)
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Ewidencja środków trwałych
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Dedykowany księgowy
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 rounded-xl border border-transparent bg-white text-center text-base font-normal text-slate-900 hover:bg-gray-100 transition-colors" href="#kontakt">Wybierz plan</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Spółki (Pełna)</h3>
<p className="text-base text-slate-500 mt-2 h-12">Dla spółek z o.o. i fundacji.</p>
<div className="mt-6 mb-8">
<span className="text-sm text-slate-500 font-normal">od</span>
<span className="text-4xl font-medium tracking-tight text-slate-900">799</span>
<span className="text-base text-slate-500">zł / mc</span>
</div>
<ul className="space-y-4 text-base text-slate-600 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Księgi rachunkowe
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Sprawozdania finansowe
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Reprezentacja przed US
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i> Raportowanie zarządcze
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 rounded-xl border border-gray-200 text-center text-base font-normal text-slate-900 hover:bg-gray-50 transition-colors" href="#kontakt">Wybierz plan</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 text-center mb-12">Często zadawane pytania</h2>
<div className="space-y-4">
<details className="group bg-gray-50 rounded-xl border border-gray-100">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-normal text-base">
                        Czy muszę dostarczać dokumenty w formie papierowej?
                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
<i className="absolute inset-0 w-5 h-5 transition-transform duration-200 group-open:rotate-180 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-500 leading-relaxed border-t border-gray-100/50 pt-4">
                        Nie, działamy w 100% cyfrowo. Wszystkie dokumenty możesz wgrywać przez naszą bezpieczną platformę online lub przesyłać na dedykowany adres e-mail. Oryginały przechowujesz u siebie.
                    </div>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-100">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-normal text-base">
                        Jak szybko otrzymam odpowiedź na moje pytania?
                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
<i className="absolute inset-0 w-5 h-5 transition-transform duration-200 group-open:rotate-180 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-500 leading-relaxed border-t border-gray-100/50 pt-4">
                        Nasi dedykowani księgowi odpowiadają na zapytania w ciągu 24 godzin w dni robocze. W sprawach pilnych jesteśmy dostępni również telefonicznie.
                    </div>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-100">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-normal text-base">
                        Czy pomagacie w założeniu nowej firmy?
                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
<i className="absolute inset-0 w-5 h-5 transition-transform duration-200 group-open:rotate-180 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-500 leading-relaxed border-t border-gray-100/50 pt-4">
                        Tak, oferujemy bezpłatną pomoc w procesie rejestracji działalności gospodarczej lub spółki, pod warunkiem podpisania umowy na prowadzenie księgowości.
                    </div>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-100">
<summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-normal text-base">
                        Co w przypadku kontroli z Urzędu Skarbowego?
                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
<i className="absolute inset-0 w-5 h-5 transition-transform duration-200 group-open:rotate-180 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-500 leading-relaxed border-t border-gray-100/50 pt-4">
                        W ramach umowy bierzemy na siebie pełną odpowiedzialność przed urzędami. Przygotowujemy niezbędne dokumenty i reprezentujemy Cię podczas ewentualnych kontroli.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-t border-slate-800" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Rozpocznijmy współpracę</h2>
<p className="text-base text-slate-400 mb-10 leading-relaxed">
                        Zostaw swoje dane, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin, aby omówić potrzeby Twojej firmy i przedstawić dedykowaną ofertę.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-base text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<span>+48 123 456 789</span>
</div>
<div className="flex items-center gap-4 text-base text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span>kontakt@ksiegowoscpro.pl</span>
</div>
<div className="flex items-center gap-4 text-base text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<span>ul. Nowoczesna 12/4, 00-001 Warszawa</span>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 shadow-xl">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-sm font-normal text-slate-700" htmlFor="firstName">Imię</label>
<input className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 outline-none transition-colors" id="firstName" placeholder="Jan" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-normal text-slate-700" htmlFor="lastName">Nazwisko</label>
<input className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 outline-none transition-colors" id="lastName" placeholder="Kowalski" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-normal text-slate-700" htmlFor="email">Adres e-mail</label>
<input className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 outline-none transition-colors" id="email" placeholder="jan@firma.pl" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-normal text-slate-700" htmlFor="companyType">Forma prawna</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 appearance-none outline-none transition-colors cursor-pointer" id="companyType">
<option>Jednoosobowa Działalność Gospodarcza</option>
<option>Spółka z o.o.</option>
<option>Spółka cywilna / jawna</option>
<option>Dopiero planuję założyć</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-normal text-slate-700" htmlFor="message">Wiadomość (opcjonalnie)</label>
<textarea className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-lg focus:ring-slate-900 focus:border-slate-900 block p-2.5 outline-none transition-colors resize-none" id="message" placeholder="Krótki opis Twojej działalności..." rows="3"></textarea>
</div>
<div className="flex items-start">
<div className="relative flex items-center h-5 mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-900 checked:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 transition-all cursor-pointer" id="consent" required="" type="checkbox"/>
<i className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5 top-0.5" data-lucide="check" strokeWidth="3"></i>
</div>
<label className="ml-3 text-sm text-slate-500" htmlFor="consent">
                                Akceptuję <a className="text-slate-900 underline decoration-slate-300 underline-offset-2 hover:text-slate-700 transition-colors" href="#">Politykę Prywatności</a> i wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania.
                            </label>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-normal rounded-xl text-base px-5 py-3 text-center transition-colors" type="submit">
                            Wyślij zapytanie
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-gray-100 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
<span className="text-white font-medium tracking-tighter text-[10px]">KP</span>
</div>
<span className="font-medium tracking-tight text-slate-900 text-base">Księgowość Pro</span>
</div>
<div className="text-sm text-slate-500">
                © 2024 Księgowość Pro. Wszelkie prawa zastrzeżone.
            </div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Regulamin</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Polityka Prywatności</a>
</div>
</div>
</footer>


    </>
  );
}
