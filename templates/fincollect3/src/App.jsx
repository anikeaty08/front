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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-gray-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:chart-square-linear"></iconify-icon>
</div>
          FINCOLLECT
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Úvod</a>

<div className="relative group py-8">
<button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              Služby
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex flex-col gap-1">
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Mimosoudní vymáhání
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Soudní vymáhání
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Odkup pohledávek
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Mezinárodní vymáhání
                </a>
</div>
</div>
</div>

<div className="relative group py-8">
<button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              O nás
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex flex-col gap-1">
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Proč my
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Kodex
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  FAQ
                </a>
<a className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors" href="#">
                  Slovník pojmů
                </a>
</div>
</div>
</div>
<a className="hover:text-gray-900 transition-colors" href="#">Kontakt</a>
<a className="hover:text-gray-900 transition-colors" href="#">Blog</a>
</nav>

<div className="hidden md:block">
<a className="text-sm font-medium px-4 py-2 rounded-full border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:user-linear"></iconify-icon>
            Aplikace
          </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-100">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/50 via-white to-white"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBMMCA0MEw0MCA0MEw0MCAwWiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-60 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">

<div className="lg:col-span-6 space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Nová generace správy pohledávek
          </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.05]">
            Rovnováha na
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              datech
            </span>
            a
            <span className="text-red-600">lidech.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-light">
            Pomáháme firmám chránit jejich cash-flow a lidem nacházet cestu z
            dluhů. Moderně, transparentně a efektivně.
          </p>
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
<a className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2" href="#dluznici">
              Chci vyřešit svůj závazek
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-gray-900 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm" href="#firmy">
              Hledám řešení pro firmu
            </a>
</div>
</div>

<div className="lg:col-span-6 relative h-[500px] hidden lg:block">

<div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
<div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

<div className="absolute top-10 right-4 w-80 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 z-20 hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon className="text-sm" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-900 tracking-wide">
                  Vývoj inkasa
                </span>
</div>
<span className="text-[10px] font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                +12.4%
              </span>
</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-1">
              2.4m Kč
            </div>
<div className="text-xs text-gray-500 mb-6 font-light">
              Vybráno tento měsíc
            </div>

<div className="relative h-24 w-full flex items-end gap-1.5">
<div className="w-full bg-gray-100 rounded-t-sm h-[30%] hover:bg-gray-200 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[45%] hover:bg-gray-200 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[35%] hover:bg-gray-200 transition-colors"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%] hover:bg-gray-200 transition-colors"></div>
<div className="w-full bg-red-200 rounded-t-sm h-[55%] hover:bg-red-300 transition-colors"></div>
<div className="w-full bg-red-400 rounded-t-sm h-[75%] hover:bg-red-500 transition-colors"></div>
<div className="w-full bg-red-600 rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
</div>
</div>

<div className="absolute top-48 left-0 w-64 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 z-30 hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-start gap-3">
<div className="relative w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-red-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="87, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="text-xs font-semibold text-gray-900">87</span>
</div>
<div>
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                  Skóre predikce
                </div>
<div className="text-sm font-semibold text-gray-900">
                  Vysoká úspěšnost
                </div>
<div className="text-[10px] text-gray-500 mt-1 leading-snug">
                  Algoritmus doporučuje
                  <br/>
                  SMS + Email kanál
                </div>
</div>
</div>
</div>

<div className="absolute bottom-16 right-16 bg-gray-900 p-4 rounded-2xl shadow-2xl z-40 hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-600 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-red-600 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm font-medium text-white">Nové dohody</div>
<div className="text-xs text-gray-400 font-light">
                  +24 dnes z portfolia
                </div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full -z-10" pointer-events="none">
<path d="M 120 220 Q 200 150 280 180 T 380 100" fill="none" stroke="#e5e7eb" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M 150 350 Q 250 350 320 280" fill="none" stroke="#e5e7eb" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="120" cy="220" fill="#d1d5db" r="4"></circle>
<circle cx="380" cy="100" fill="#ef4444" r="4"></circle>
<circle cx="150" cy="350" fill="#d1d5db" r="4"></circle>
<circle cx="320" cy="280" fill="#ef4444" r="4"></circle>
</svg>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-y border-gray-100" id="dluznici">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBMMCA0MEw0MCA0MEw0MCAwWiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIwLjUiIGZpbGw9InJnYmEoMjM5LCA2OCwgNjgsIDAuMSkiLz4KPC9zdmc+')] opacity-60 -z-10" style={{maskImage: 'radial-gradient(circle at top right, black, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
<div className="max-w-2xl">
<div className="mb-6">
<span className="text-sm font-semibold tracking-widest uppercase text-red-600 block mb-2">
                Pro dlužníky
              </span>
<div className="w-10 h-0.5 bg-red-600"></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Dostaňte své finance
              <br/>
              zpět pod kontrolu.
              <br/>
<span className="text-red-600">Společně a bez stresu.</span>
</h2>
<p className="text-gray-600 text-lg font-light">
              Vyberte situaci, která nejlépe odpovídá vaší situaci.
            </p>
</div>
<div className="flex items-start gap-4 max-w-sm lg:ml-auto">
<div className="w-14 h-14 rounded-full bg-red-50/80 flex items-center justify-center shrink-0 border border-red-100">
<iconify-icon className="text-red-600 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="font-medium text-gray-900 mb-1.5 text-lg">
                Jsme tu, abychom vám pomohli
              </h3>
<p className="text-sm text-gray-500 leading-relaxed font-light">
                Každý případ řešíme lidsky, diskrétně a s ohledem na vaše
                možnosti.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">

<div className="group bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 border-b-2 border-b-red-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-6 relative overflow-hidden">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50/80 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-600 text-3xl sm:text-4xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="flex-1 sm:pr-6 sm:border-r border-gray-100">
<h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chci svůj závazek uhradit
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Mám prostředky a chci celou záležitost okamžitě a jednoduše
                uzavřít online.
              </p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-red-600 group-hover:bg-red-50 transition-colors self-start sm:self-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-6 relative overflow-hidden">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50/80 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-600 text-3xl sm:text-4xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="flex-1 sm:pr-6 sm:border-r border-gray-100">
<h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nemohu zaplatit najednou
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Potřebuji si domluvit splátkový kalendář, který bude reálný pro
                můj rozpočet.
              </p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-red-600 group-hover:bg-red-50 transition-colors self-start sm:self-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-6 relative overflow-hidden">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50/80 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-600 text-3xl sm:text-4xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 sm:pr-6 sm:border-r border-gray-100">
<h3 className="text-xl font-semibold text-gray-900 mb-2">
                Už jsem zaplatil, ale přišla výzva
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Platbu jsem již odeslal. Chci doložit potvrzení o úhradě a
                aktualizovat stav.
              </p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-red-600 group-hover:bg-red-50 transition-colors self-start sm:self-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-6 relative overflow-hidden">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50/80 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-600 text-3xl sm:text-4xl" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="flex-1 sm:pr-6 sm:border-r border-gray-100">
<h3 className="text-xl font-semibold text-gray-900 mb-2">
                Myslím, že žádný závazek nemám
              </h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                Nerozumím původu dluhu a chci vznést námitku nebo získat
                detailní informace.
              </p>
</div>
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-red-600 group-hover:bg-red-50 transition-colors self-start sm:self-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#fdfbfb] rounded-[2rem] p-6 md:p-8 flex flex-col xl:flex-row items-center justify-between gap-8 border border-red-50">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full xl:w-auto">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-gray-900 mb-0.5">
                  100% diskrétnost
                </div>
<div className="text-sm text-gray-500 font-light">
                  Vaše údaje jsou v bezpečí.
                </div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-gray-900 mb-0.5">
                  Individuální přístup
                </div>
<div className="text-sm text-gray-500 font-light">
                  Každý případ řešíme individuálně.
                </div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-gray-900 mb-0.5">
                  Férové řešení
                </div>
<div className="text-sm text-gray-500 font-light">
                  Hledáme řešení, které dává smysl.
                </div>
</div>
</div>
</div>
<div className="flex flex-col items-center xl:items-end gap-3 shrink-0 w-full xl:w-auto mt-4 xl:mt-0">
<a className="w-full xl:w-auto px-8 py-4 rounded-full bg-red-600 text-white text-base font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 flex items-center justify-center gap-2" href="#">
              Chci řešit svůj případ
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-1.5 text-sm text-gray-500 font-light">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
              Zabere to jen pár minut
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">

<div className="absolute inset-0 pointer-events-none flex justify-center max-w-7xl mx-auto w-full opacity-10">
<div className="w-1/3 border-r border-gray-300 h-full"></div>
<div className="w-1/3 border-r border-gray-300 h-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col gap-4">
<div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-900 shadow-sm bg-white">
<iconify-icon className="text-lg" icon="solar:stop-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">
              Zastavíme nárůst závazku
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
              Okamžitým řešením situace zamezíte dalšímu narůstání úroků z
              prodlení a zbytečným poplatkům za další vymáhání.
            </p>
</div>
<div className="flex flex-col gap-4">
<div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-900 shadow-sm bg-white">
<iconify-icon className="text-lg" icon="solar:user-hands-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">
              Individuální přístup
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
              Nejsme roboti. Každý případ posuzujeme lidsky. Hledáme cestu,
              která vyhovuje oběma stranám a vede k úspěšnému umoření.
            </p>
</div>
<div className="flex flex-col gap-4">
<div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-900 shadow-sm bg-white">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">
              Absolutní diskrétnost
            </h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
              Vaše data chráníme pomocí nejmodernějších technologií. Celý proces
              je přísně důvěrný a v souladu se všemi zákony.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white border-y border-gray-800" id="firmy">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 sticky top-32">
<span className="text-xs font-medium tracking-widest uppercase text-red-500 mb-3 block">
            B2B Služby
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">
            Efektivní inkaso, které posiluje vaši firmu.
          </h2>
<p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
            Převezmeme zátěž nesplacených pohledávek. Uvolněte si ruce pro svůj
            byznys, my se postaráme o cash-flow s maximálním ohledem na vaše
            dobré jméno.
          </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors" href="#">
            Chci analýzu portfolia
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="sm:col-span-2 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden group flex flex-col sm:flex-row gap-6 items-start">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors duration-500"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors duration-500"></div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 shadow-inner z-10 relative">
<iconify-icon className="text-4xl" icon="solar:safe-square-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<span className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-wider rounded mb-3">
                Priorita
              </span>
<h3 className="text-2xl font-medium mb-3 text-white tracking-tight">
                Odblokujeme váš vázaný kapitál
              </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-5">
                Peníze, které vám dluží, kriticky chybí pro váš růst. Rychlou a
                systematickou akcí vracíme likviditu zpět do vaší firmy. Náš
                přístup zajistí okamžitou pozornost dlužníka.
              </p>
<div className="inline-flex items-center gap-2 text-red-400 text-sm font-medium group-hover:text-red-300 transition-colors">
                Získat analýzu zdarma
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-gray-800/40 border border-gray-700/50 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/80 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="text-blue-400 mb-4 relative z-10 bg-blue-500/10 w-12 h-12 flex items-center justify-center rounded-xl border border-blue-500/20">
<iconify-icon className="text-2xl" icon="solar:graph-down-bold-duotone"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 relative z-10">
              Snížení nákladů
            </h3>
<p className="text-sm text-gray-400 font-light relative z-10">
              Interní vymáhání je drahé a zdlouhavé. Outsourcingem ušetříte čas,
              peníze i nervy vašich zaměstnanců.
            </p>
</div>

<div className="bg-gray-800/40 border border-gray-700/50 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/80 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="text-emerald-400 mb-4 relative z-10 bg-emerald-500/10 w-12 h-12 flex items-center justify-center rounded-xl border border-emerald-500/20">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-gray-100 relative z-10">
              Uvolnění kapacit
            </h3>
<p className="text-sm text-gray-400 font-light relative z-10">
              Nechte svůj obchodní a účetní tým dělat to, co umí nejlépe.
              Konfliktní komunikaci převezmeme my.
            </p>
</div>

<div className="sm:col-span-2 bg-gray-800/40 border border-gray-700/50 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/80 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden group flex flex-col sm:flex-row gap-5 items-center sm:items-start">
<div className="absolute -bottom-10 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<div className="text-amber-400 shrink-0 relative z-10 bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-xl border border-amber-500/20">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-base font-medium mb-1 text-gray-100 text-center sm:text-left">
                Proaktivní přístup zamezí ztrátám
              </h3>
<p className="text-sm text-gray-400 font-light text-center sm:text-left">
                Nečekáme, až se dlužník ozve. Aktivně a systematicky pracujeme s
                portfoliem pomocí datové analýzy a behaviorálních modelů, což
                rapidně zvyšuje šanci na úspěch.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Komplexní ekosystém správy
          </h2>
<p className="text-sm text-gray-500 font-light max-w-xl mx-auto">
            Vše pod jednou střechou. Od první upomínky až po soudní řešení,
            řízeno proprietárním softwarem.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Omnichannel komunikace
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              SMS, e-maily, telefonáty i dopisy načasované na základě
              behaviorální analýzy dlužníka.
            </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Automatizace procesů
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              Párování plateb, generování smluv a splátkových kalendářů probíhá
              v reálném čase.
            </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:chart-pie-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Klientský portál API
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              Přehled 24/7. Transparentní reporty a možnost plné integrace do
              vašeho ERP systému.
            </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:buildings-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Advokátní síť
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              Spolupracujeme s prověřenými advokátními kancelářemi pro rychlý
              přechod do soudní fáze.
            </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Skoring a obohacování dat
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              Před zahájením procesu analyzujeme bonitu a hledáme
              nejefektivnější strategii vymáhání.
            </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 text-gray-700">
<iconify-icon icon="solar:global-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Mezinárodní dosah
            </h4>
<p className="text-xs text-gray-500 leading-relaxed font-light">
              Prostřednictvím partnerů jsme schopni efektivně řešit pohledávky
              napříč Evropou.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
<div className="text-center px-4">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-1">
              87 %
            </div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Úspěšnost mimosoudní
            </div>
</div>
<div className="text-center px-4">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-1">
              2.4 mld
            </div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Spravovaný objem (Kč)
            </div>
</div>
<div className="text-center px-4">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-1">
              45k+
            </div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Vyřešených případů
            </div>
</div>
<div className="text-center px-4">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-1">
              12 let
            </div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Zkušeností na trhu
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
          Jak probíhá B2B spolupráce
        </h2>
<div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-10">

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border-[3px] border-gray-300 rounded-full -left-[6px] top-1.5"></div>
<div className="text-xs font-semibold text-gray-400 mb-1">KROK 1</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Analýza a předání portfolia
            </h3>
<p className="text-sm text-gray-500 font-light">
              Zhodnotíme stáří a strukturu vašich pohledávek. Nastavíme datové
              napojení přes API nebo bezpečný import. Zdarma provedeme první
              skóring vymahatelnosti.
            </p>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border-[3px] border-red-500 rounded-full -left-[6px] top-1.5 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"></div>
<div className="text-xs font-semibold text-red-500 mb-1">KROK 2</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Mimosoudní inkaso
            </h3>
<p className="text-sm text-gray-500 font-light">
              Spouštíme omnichannel komunikaci. Cílem je rychlá úhrada nebo
              sjednání reálného splátkového kalendáře. Eticky, s ohledem na vaši
              reputaci.
            </p>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border-[3px] border-gray-300 rounded-full -left-[6px] top-1.5"></div>
<div className="text-xs font-semibold text-gray-400 mb-1">KROK 3</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Právní kroky (volitelné)
            </h3>
<p className="text-sm text-gray-500 font-light">
              Pokud mimosoudní fáze selže a případ dává ekonomický smysl,
              předáváme složku spolupracujícím advokátům k podání návrhu na
              elektronický platební rozkaz.
            </p>
</div>

<div className="relative pl-8">
<div className="absolute w-3 h-3 bg-white border-[3px] border-gray-300 rounded-full -left-[6px] top-1.5"></div>
<div className="text-xs font-semibold text-gray-400 mb-1">KROK 4</div>
<h3 className="text-base font-medium text-gray-900 mb-2">
              Reporting a remitence
            </h3>
<p className="text-sm text-gray-500 font-light">
              V klientském portálu vidíte každý krok. Vybrané prostředky
              zasíláme v pravidelných dohodnutých intervalech přímo na váš účet.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Kariéra
            </h2>
<a className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1" href="#">
              Všechny pozice
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-3">
<a className="block bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors shadow-sm" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-gray-900">
                  Specialista vymáhání pohledávek
                </h3>
<span className="text-[10px] font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Plný úvazek
                </span>
</div>
<p className="text-xs text-gray-500">Praha / Hybrid</p>
</a>
<a className="block bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors shadow-sm" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-medium text-gray-900">
                  Data Analyst / Skoring
                </h3>
<span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  Remote
                </span>
</div>
<p className="text-xs text-gray-500">Brno / Remote</p>
</a>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Z blogu
            </h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1" href="#">
              Přejít na blog
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-6">
<a className="group block" href="#">
<div className="text-xs text-gray-400 mb-1">12. Října 2023</div>
<h3 className="text-base font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                Jak se připravit na legislativní změny v inkasu pro rok 2024?
              </h3>
<p className="text-sm text-gray-500 font-light line-clamp-2">
                Přinášíme shrnutí klíčových změn, které ovlivní věřitele i
                dlužníky v následujícím roce...
              </p>
</a>
<div className="w-full h-px bg-gray-200"></div>
<a className="group block" href="#">
<div className="text-xs text-gray-400 mb-1">5. Září 2023</div>
<h3 className="text-base font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                Behaviorální ekonomie v praxi: Proč dlužníci neplatí včas
              </h3>
<p className="text-sm text-gray-500 font-light line-clamp-2">
                Analýza psychologických faktorů, které hrají roli při odkládání
                platebních povinností...
              </p>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
          Jsme připraveni najít řešení.
        </h2>
<p className="text-base text-gray-500 mb-10 font-light">
          Kontaktujte nás pro nezávaznou konzultaci vašeho firemního portfolia,
          nebo pokud potřebujete poradit s vlastním závazkem.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" href="#">
            Napište nám zprávu
          </a>
<a className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
            +420 800 123 456
          </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:chart-square-linear"></iconify-icon>
</div>
              FINCOLLECT
            </a>
<p className="text-xs text-gray-500 font-light leading-relaxed">
              Moderní a etická správa pohledávek pro 21. století. Chráníme
              hodnoty, spojujeme lidi.
            </p>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Služby
            </h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Pro dlužníky
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  B2B Inkaso
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Odkup portfolií
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Mezinárodní služby
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Společnost
            </h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  O nás
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Kariéra
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Etický kodex
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Kontakt
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Právní
            </h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Ochrana osobních údajů
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Obchodní podmínky
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Zásady cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">
            © 2023 Fincollect s.r.o. Všechna práva vyhrazena.
          </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
