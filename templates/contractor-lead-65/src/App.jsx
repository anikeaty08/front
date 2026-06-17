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



        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        document.getElementById('mobile-menu').addEventListener('click', function() {
          this.classList.add('hidden');
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
      

<header className="sticky top-0 z-50 w-full bg-[#FCFBF9]/80 backdrop-blur-md border-b border-slate-200/50">
<nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
<div className="font-semibold text-xl tracking-tighter text-slate-900 flex items-center gap-0.5">
          ZR
          <span className="text-[#FF3333]">.</span>
</div>
<div className="flex gap-6 items-center">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#dlaczego-my">
            Dlaczego my
          </a>
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#jak-to-dziala">
            Jak to działa
          </a>
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#cennik">
            Cennik
          </a>
<a className="hidden md:block text-sm font-medium bg-[#FF3333] hover:bg-[#E62E2E] text-white px-5 py-2.5 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(255,51,51,0.39)] hover:shadow-[0_6px_20px_rgba(255,51,51,0.23)] active:-translate-y-0.5" href="#cennik">
            Zdobądź zlecenia
          </a>
<button className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
<div className="hidden absolute top-full left-0 w-full bg-[#FCFBF9] border-b border-slate-200/50 shadow-lg md:hidden" id="mobile-menu">
<div className="flex flex-col px-6 py-6 gap-6">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 mobile-link" href="#dlaczego-my">
            Dlaczego my
          </a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 mobile-link" href="#jak-to-dziala">
            Jak to działa
          </a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 mobile-link" href="#cennik">
            Cennik
          </a>
<a className="text-base font-medium bg-[#FF3333] hover:bg-[#E62E2E] text-white px-5 py-3 rounded-xl transition-all text-center shadow-[0_4px_14px_0_rgba(255,51,51,0.39)] hover:shadow-[0_6px_20px_rgba(255,51,51,0.23)] mobile-link active:-translate-y-0.5" href="#cennik">
            Zdobądź zlecenia
          </a>
</div>
</div>

</header>

<main className="flex-grow flex items-center justify-center pt-24 pb-24 px-6 md:pt-32 md:pb-32 relative overflow-hidden bg-[#FCFBF9] border-b border-slate-200/50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF3333] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-8 text-xs font-medium text-slate-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3333] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3333]"></span>
</span>
          Ponad 240 nowych zleceń dzisiaj
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1] md:leading-[1.05]">
          Wykonawco, chcesz pełny kalendarz zleceń w
          <span className="text-[#FF3333]">Krakowie?</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Dostarczam gotowe kontakty do właścicieli mieszkań, którzy szukają
          ekipy remontowej TERAZ.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-[#FF3333] hover:bg-[#E62E2E] text-white text-sm font-medium h-12 px-8 flex items-center justify-center rounded-lg transition-all shadow-[0_4px_14px_0_rgba(255,51,51,0.39)] hover:shadow-[0_6px_20px_rgba(255,51,51,0.23)] hover:-translate-y-0.5 uppercase tracking-wide" href="#cennik">
            Sprawdź pakiety
          </a>
<a className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium h-12 px-8 flex items-center justify-center rounded-lg border border-slate-200/80 transition-all duration-200 shadow-sm" href="#jak-to-dziala">
            Zobacz jak to działa
          </a>
</div>
</div>
</main>

<section className="py-24 md:py-32 bg-white" id="dlaczego-my">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Dlaczego nasze zlecenia są Premium?
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FCFBF9] rounded-2xl p-8 border border-slate-200/60 shadow-sm flex flex-col items-start text-left">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF3333] mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:flame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">
              Tylko gorące kontakty (Max 48h)
            </h3>
<p className="leading-relaxed text-sm font-normal text-slate-500">
              Nie sprzedajemy starych, odgrzewanych baz z internetu. Każde
              zlecenie trafia do Ciebie maksymalnie do 48 godzin od momentu, gdy
              klient się z nami skontaktował.
            </p>
</div>

<div className="bg-[#FCFBF9] rounded-2xl p-8 border border-slate-200/60 shadow-sm flex flex-col items-start text-left">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF3333] mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">
              Przefiltrowane zlecenia
            </h3>
<p className="leading-relaxed text-sm font-normal text-slate-500">
              Zero przypadkowych kliknięć. Zanim dostaniesz numer, klient musi
              odpowiedzieć na nasze pytania: jaki ma metraż i na kiedy szuka
              fachowca.
            </p>
</div>

<div className="bg-[#FCFBF9] rounded-2xl p-8 border border-slate-200/60 shadow-sm flex flex-col items-start text-left">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF3333] mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">
              Brak wyścigu szczurów
            </h3>
<p className="leading-relaxed text-sm font-normal text-slate-500">
              Nasze zlecenia nie krążą bez sensu po internecie. Nie wysyłamy
              tego samego numeru do 10 różnych firm. Dzięki temu nie musisz
              walczyć z konkurencją i licytować się na najniższą cenę.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FF3333] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800/80 border border-slate-700 mb-8 shadow-xl">
<iconify-icon className="text-4xl text-[#FF3333]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Zero ryzyka. Gwarancja wymiany kontaktu.
        </h2>
<p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
          Jeśli trafisz na zły numer, nikt nie odbierze przez 3 dni, albo klient
          powie, że to pomyłka –
          <strong className="font-semibold text-white">
            wymieniamy ten kontakt na nowy za darmo
          </strong>
          . Płacisz tylko za realną szansę na zarobek.
        </p>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-y border-slate-200/50" id="jak-to-dziala">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Proces prosty jak budowa cepa
          </h2>
<p className="text-base text-slate-500 font-medium">
            Trzy kroki dzielą Cię od nowego klienta.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
<div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-[1px] border-t-2 border-dashed border-slate-200 z-0"></div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#FF3333] mb-6 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              1. Wybierasz pakiet
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal max-w-[250px]">
              Określasz swoją branżę i obszar działania. Doładowujesz konto
              odpowiednim pakietem.
            </p>
</div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 bg-[#FF3333] border border-[#FF3333] rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_4px_14px_0_rgba(255,51,51,0.2)]">
<iconify-icon className="text-3xl" icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              2. Odbierasz SMS
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal max-w-[250px]">
              Gdy w Twojej okolicy pojawi się zdecydowany klient, natychmiast
              otrzymujesz SMS z numerem telefonu.
            </p>
</div>
<div className="flex flex-col items-center text-center relative z-10">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#FF3333] mb-6 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              3. Jedziesz na wycenę
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal max-w-[250px]">
              Kontaktujesz się z klientem jako pierwszy. Cały zysk ze zlecenia
              trafia do Twojej kieszeni.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 pb-32 md:pb-40 bg-[#FCFBF9]" id="cennik">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Pakiety zleceń bez zobowiązań
          </h2>
<p className="text-base text-slate-500 font-medium">
            Doładuj konto i kupuj zlecenia tylko wtedy, gdy masz wolne terminy.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm flex flex-col h-full">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Test</h3>
<p className="text-xs text-slate-500 font-medium mt-1">
                Jednorazowy pakiet, żeby sprawdzić jakość naszych leadów bez
                ryzyka.
              </p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                300
              </span>
<span className="text-sm text-slate-500 font-medium">PLN</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">
<strong className="font-semibold text-slate-900">2</strong>
                  kontakty do klientów
                  <span className="font-normal text-slate-500"></span>
</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Natychmiastowe powiadomienia SMS</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Żelazna gwarancja wymiany numeru</span>
</li>
</ul>
<button className="hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 bg-white w-full h-12 border-slate-200/80 border rounded-lg cursor-pointer" onclick="window.location.href='https://cart.easy.tools/checkout/20322885/pakiet-2-kontaktow-odnosnie-remontu'" role="button">
              Wybieram Test
            </button>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-[#FF3333] shadow-[0_8px_30px_rgb(255,51,51,0.12)] flex flex-col h-full relative z-10 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF3333] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Najczęściej wybierany
            </div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Start</h3>
<p className="text-xs text-slate-500 font-medium mt-1">
                Dla firm, które chcą mieć stały napływ zleceń.
              </p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                1500
              </span>
<span className="text-sm text-slate-500 font-medium">PLN</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">
<strong className="font-semibold text-slate-900">10</strong>
                  kontaktów do klientów
                  <span className="font-normal text-slate-500"></span>
</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Natychmiastowe powiadomienia SMS</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Żelazna gwarancja wymiany numeru</span>
</li>
</ul>
<button className="hover:bg-[#E62E2E] transition-all hover:shadow-[0_6px_20px_rgba(255,51,51,0.23)] cursor-pointer text-sm font-medium text-white bg-[#FF3333] w-full h-12 rounded-lg shadow-[0_4px_14px_0_rgba(255,51,51,0.39)]" onclick="window.location.href='https://cart.easy.tools/checkout/20322885/pakiet-10-kontaktow-odnosnie-remontu'" role="button">
              Wybieram Start
            </button>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm flex flex-col h-full">
<div className="mb-4">
<h3 className="text-lg font-semibold text-slate-900">Pro</h3>
<p className="text-xs text-slate-500 font-medium mt-1">
                Dla głodnych zleceń. Oszczędzasz 250 zł!
              </p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                3500
              </span>
<span className="text-sm text-slate-500 font-medium">PLN</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">
<strong className="font-semibold text-slate-900">25</strong>
                  kontaktów do klientów
                  <span className="font-normal text-slate-500"></span>
</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Natychmiastowe powiadomienia SMS</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-medium">
<iconify-icon className="text-lg text-[#FF3333] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">Żelazna gwarancja wymiany numeru</span>
</li>
</ul>
<button className="hover:bg-slate-50 transition-colors cursor-pointer text-sm font-medium text-slate-700 bg-white w-full h-12 border-slate-200/80 border rounded-lg" onclick="window.location.href='https://cart.easy.tools/checkout/20322885/pakiet-25-kontaktow-odnosnie-remontu'" role="button">
              Wybieram Pro
            </button>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-slate-200/60 bg-white pt-20 md:pt-24 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="font-semibold text-2xl tracking-tighter text-slate-900 flex items-center gap-0.5 mb-4">
              ZR
              <span className="text-[#FF3333]">.</span>
</div>
<p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
              Dostarczamy gotowe zlecenia remontowe. Zdobądź pełny kalendarz i
              skup się na pracy, nie na szukaniu klientów.
            </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
<a className="hover:text-slate-600 transition-colors" href="#"></a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4">Oferta</h4>
<ul className="flex flex-col gap-3">
<li className="">
<a className="text-sm text-slate-500 hover:text-[#FF3333] transition-colors" href="#dlaczego-my">
                  Dlaczego my
                </a>
</li>
<li className="">
<a className="text-sm text-slate-500 hover:text-[#FF3333] transition-colors" href="#jak-to-dziala">
                  Jak to działa
                </a>
</li>
<li className="">
<a className="text-sm text-slate-500 hover:text-[#FF3333] transition-colors" href="#cennik">
                  Cennik
                </a>
</li>
</ul>
</div>
<div className="">
<ul className="flex flex-col gap-3"></ul>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4">Dane Firmy</h4>
<ul className="flex flex-col gap-3">
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg text-slate-400" icon="solar:user-rounded-linear"></iconify-icon>
<span className="">Nazwa firmy: Adam Krupiński</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg text-slate-400" icon="solar:document-text-linear"></iconify-icon>
<span className="">NIP: 6772539541</span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg text-slate-400" icon="solar:phone-linear"></iconify-icon>
<span className="">+48 517 734 554</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200/60 text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-medium text-slate-400">
            © 2026 ZleceniaRemontowe.com. Wszelkie prawa zastrzeżone.
          </p>
<p className="text-xs font-medium text-slate-400"></p>
</div>
</div>
</footer>

    </>
  );
}
