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
      

<nav className="sticky top-0 z-50 bg-[#fbf4e6]/80 backdrop-blur-md border-b border-[#ebdaba]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="font-medium tracking-tight text-xl text-[#521f1e] flex items-center gap-2 uppercase" href="#">
<i className="text-[#b07c29] w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i>
                        ŘOPOMED
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-normal text-[#6b4740] hover:text-[#521f1e] transition-colors" href="#">E-shop</a>
<a className="text-base font-normal text-[#6b4740] hover:text-[#521f1e] transition-colors" href="#pribeh">Náš příběh</a>
<a className="text-base font-normal text-[#6b4740] hover:text-[#521f1e] transition-colors" href="#">Kontakt</a>
</div>

<div className="flex items-center space-x-4">
<button className="relative p-2 text-[#6b4740] hover:text-[#521f1e] transition-colors flex items-center gap-2 group">
<i className="w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-base font-normal hidden md:block">0 Kč</span>
<span className="absolute top-1 right-1 lg:right-10 flex h-4 w-4 items-center justify-center rounded-full bg-[#b07c29] text-[0.6rem] font-medium text-white ring-2 ring-[#fbf4e6]">0</span>
</button>
<button className="md:hidden p-2 text-[#6b4740]">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-40 overflow-hidden border-b border-[#ebdaba] bg-[#fdf8ee]">

<div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#521f1e 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d99c36]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d99c36]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4eadd] border border-[#ebdaba] text-[#6b4740] text-sm font-normal mb-12">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
                Nová snůška z jižní Moravy
            </div>

<div className="flex items-center justify-center gap-4 text-[#521f1e] font-medium text-xl md:text-2xl mb-8 tracking-tight">
<div className="h-[1.5px] bg-[#521f1e]/30 w-16 md:w-32"></div>
                Včelařství Peřan
                <div className="h-[1.5px] bg-[#521f1e]/30 w-16 md:w-32"></div>
</div>
<h1 className="text-6xl sm:text-8xl md:text-9xl font-semibold text-[#521f1e] tracking-tight leading-none mb-10 uppercase">
                ŘOPOMED
            </h1>
<div className="flex items-center justify-center gap-4 text-[#521f1e] font-medium text-lg md:text-xl mb-12 tracking-tight">
<div className="h-[1.5px] bg-[#521f1e]/30 w-12 md:w-24"></div>
                z ŘOP 3107 VEČ 756
                <div className="h-[1.5px] bg-[#521f1e]/30 w-12 md:w-24"></div>
</div>
<p className="text-xl text-[#6b4740] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Naše včely sbírají nektar v okolí prvorepublikových řopíků. Čistá příroda, žádná zbytečná chemie, jen poctivá práce a láska k řemeslu.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#521f1e] text-[#fbf4e6] text-base font-normal hover:bg-[#3a1514] transition-colors shadow-sm flex items-center justify-center gap-2" href="#eshop">
                    Prohlédnout medy
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/50 backdrop-blur border border-[#ebdaba] text-[#521f1e] text-base font-normal hover:bg-white/80 transition-colors flex items-center justify-center" href="#pribeh">
                    Přečíst si náš příběh
                </a>
</div>
</div>
</section>

<section className="py-20 bg-[#f4eadd] border-b border-[#ebdaba]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left divide-y md:divide-y-0 md:divide-x divide-[#ebdaba]">
<div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center sm:items-start first:pt-0 first:pl-0 last:pr-0">
<div className="h-12 w-12 rounded-full bg-[#fbf4e6] text-[#b07c29] flex items-center justify-center mb-5 border border-[#ebdaba]">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#521f1e] mb-3 tracking-tight">100% Přírodní</h3>
<p className="text-base text-[#6b4740] font-light leading-relaxed">Nijak neupravovaný, nefiltrovaný přes jemná síta. Zachovává si všechny cenné látky z přírody.</p>
</div>
<div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center sm:items-start">
<div className="h-12 w-12 rounded-full bg-[#fbf4e6] text-[#b07c29] flex items-center justify-center mb-5 border border-[#ebdaba]">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#521f1e] mb-3 tracking-tight">Bez chemie</h3>
<p className="text-base text-[#6b4740] font-light leading-relaxed">Minimalizujeme ošetřování včelstev. Klademe důraz na jejich přirozenou imunitu a sílu.</p>
</div>
<div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center sm:items-start">
<div className="h-12 w-12 rounded-full bg-[#fbf4e6] text-[#b07c29] flex items-center justify-center mb-5 border border-[#ebdaba]">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#521f1e] mb-3 tracking-tight">Jižní Morava</h3>
<p className="text-base text-[#6b4740] font-light leading-relaxed">Unikátní terroir u vinic a historických bunkrů dává našemu medu nezaměnitelnou chuť.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fbf4e6]" id="eshop">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#521f1e] mb-3">Naše nabídka</h2>
<p className="text-base text-[#6b4740] font-light">Aktuální sezónní medy od Včelařství Peřan přímo z úlu.</p>
</div>
<a className="hidden sm:flex items-center gap-1.5 text-base font-normal text-[#b07c29] hover:text-[#8c601e] transition-colors" href="#">
                    Zobrazit vše
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group flex flex-col">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#fdf8ee] to-[#f4eadd] overflow-hidden mb-5 border border-[#ebdaba]/80 p-6 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#ebdaba]/40">
<div className="w-3/5 h-3/5 bg-gradient-to-br from-[#d99c36]/90 to-[#b07c29]/90 rounded-t-xl rounded-b-md shadow-inner relative flex flex-col items-center justify-center backdrop-blur-sm">
<div className="absolute top-0 w-full h-4 bg-[#f4d190]/40 rounded-t-xl"></div>
<div className="w-full h-1/3 bg-[#fbf4e6]/95 absolute top-1/4 flex flex-col items-center justify-center shadow-sm py-1 border-y border-[#ebdaba]">
<span className="text-[0.55rem] font-semibold text-[#521f1e] uppercase tracking-widest leading-none mb-1">ŘOPOMED</span>
<span className="text-[0.45rem] text-[#6b4740] uppercase tracking-widest">Květový</span>
</div>
</div>
<div className="absolute top-4 right-4">
<button className="h-10 w-10 rounded-full bg-white/80 text-[#6b4740] hover:text-[#521f1e] hover:shadow-md flex items-center justify-center transition-all backdrop-blur">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg font-normal text-[#521f1e] tracking-tight"><a href="#">Květový med z vinohradu</a></h3>
<p className="text-base text-[#6b4740] font-light mt-1.5">Světlý, jemný, rychle krystalizující.</p>
</div>
<span className="text-sm text-[#521f1e] bg-[#f4eadd] px-2.5 py-1 rounded-md font-normal">950g</span>
</div>
<div className="mt-5 flex items-center justify-between">
<span className="text-xl font-medium text-[#521f1e]">220 Kč</span>
<button className="px-5 py-2.5 rounded-full bg-[#521f1e] text-[#fbf4e6] text-sm font-normal hover:bg-[#3a1514] transition-colors flex items-center gap-2">
                            Do košíku
                        </button>
</div>
</div>

<div className="group flex flex-col">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#fdf8ee] to-[#e8dcc8] overflow-hidden mb-5 border border-[#ebdaba]/80 p-6 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#ebdaba]/40">
<div className="w-3/5 h-3/5 bg-gradient-to-br from-[#4a2c11]/90 to-[#2c1808]/90 rounded-t-xl rounded-b-md shadow-inner relative flex flex-col items-center justify-center backdrop-blur-sm">
<div className="absolute top-0 w-full h-4 bg-[#7a4e28]/40 rounded-t-xl"></div>
<div className="w-full h-1/3 bg-[#fbf4e6]/95 absolute top-1/4 flex flex-col items-center justify-center shadow-sm py-1 border-y border-[#ebdaba]">
<span className="text-[0.55rem] font-semibold text-[#521f1e] uppercase tracking-widest leading-none mb-1">ŘOPOMED</span>
<span className="text-[0.45rem] text-[#6b4740] uppercase tracking-widest">Medovicový</span>
</div>
</div>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg font-normal text-[#521f1e] tracking-tight"><a href="#">Lesní medovicový</a></h3>
<p className="text-base text-[#6b4740] font-light mt-1.5">Tmavý, kořenitý, z okolních remízků.</p>
</div>
<span className="text-sm text-[#521f1e] bg-[#f4eadd] px-2.5 py-1 rounded-md font-normal">950g</span>
</div>
<div className="mt-5 flex items-center justify-between">
<span className="text-xl font-medium text-[#521f1e]">260 Kč</span>
<button className="px-5 py-2.5 rounded-full bg-[#521f1e] text-[#fbf4e6] text-sm font-normal hover:bg-[#3a1514] transition-colors flex items-center gap-2">
                            Do košíku
                        </button>
</div>
</div>

<div className="group flex flex-col">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-[#fdf8ee] overflow-hidden mb-5 border border-[#ebdaba]/40 p-6 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#ebdaba]/40">
<div className="w-3/5 h-3/5 bg-gradient-to-br from-[#f4eadd]/90 to-[#ebdaba]/90 rounded-t-xl rounded-b-md shadow-inner relative flex flex-col items-center justify-center backdrop-blur-sm border border-white/40">
<div className="absolute top-0 w-full h-4 bg-white/50 rounded-t-xl"></div>
<div className="w-full h-1/3 bg-[#fbf4e6]/95 absolute top-1/4 flex flex-col items-center justify-center shadow-sm py-1 border-y border-[#ebdaba]">
<span className="text-[0.55rem] font-semibold text-[#9ca3af] uppercase tracking-widest leading-none mb-1">ŘOPOMED</span>
<span className="text-[0.45rem] text-[#9ca3af] uppercase tracking-widest">Pastovaný</span>
</div>
</div>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-md text-[0.7rem] font-normal text-[#521f1e] uppercase tracking-widest border border-[#ebdaba] shadow-sm backdrop-blur">
                            Vyprodáno
                        </div>
</div>
<div className="flex justify-between items-start gap-4 opacity-60">
<div>
<h3 className="text-lg font-normal text-[#6b4740] tracking-tight">Jemný pastovaný med</h3>
<p className="text-base text-[#6b4740] font-light mt-1.5">Neteče, výborný na pečivo.</p>
</div>
<span className="text-sm text-[#6b4740] bg-[#f4eadd]/50 px-2.5 py-1 rounded-md font-normal">950g</span>
</div>
<div className="mt-5 flex items-center justify-between opacity-60">
<span className="text-xl font-medium text-[#6b4740]">230 Kč</span>
<button className="px-5 py-2.5 rounded-full bg-[#ebdaba] text-[#6b4740] text-sm font-normal cursor-not-allowed" disabled="">
                            Nedostupné
                        </button>
</div>
</div>
</div>
<div className="mt-14 sm:hidden flex justify-center">
<a className="px-8 py-3.5 rounded-full border border-[#ebdaba] text-[#521f1e] text-base font-normal hover:bg-[#f4eadd] transition-colors" href="#">
                    Zobrazit celou nabídku
                </a>
</div>
</div>
</section>

<section className="py-28 bg-[#3a1514] text-[#fbf4e6] overflow-hidden relative" id="pribeh">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-8 text-[#fbf4e6]">Beton a včely.</h2>
<div className="space-y-6 text-[#e0cbb4] font-light leading-relaxed text-lg">
<p>
                            Naše stanoviště se nachází na jižní Moravě, přímo u lehkého opevnění ŘOP 3107 VEČ 756 z roku 1938, kterým se lidově říká řopíky. Tyto betonové monumenty dnes tiše střeží okolní vinice a remízky.
                        </p>
<p>
                            Rozhodli jsme se toto unikátní místo využít. Úly jsme umístili v jejich bezprostřední blízkosti. Včely zde mají klid a obrovskou rozmanitost snůšky – od jarních ovocných stromů, přes byliny na mezích, až po svazenku na okolních polích.
                        </p>
<p className="text-[#fbf4e6] font-normal">
                            Klademe důraz na to, aby med byl přesně takový, jaký ho včely vytvořily. Nezahříváme ho na vysoké teploty, nepřidáváme žádné příměsi. Záleží nám na udržitelnosti a přirozeném chovu.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-[#521f1e]">
<div>
<span className="block text-4xl font-medium text-[#fbf4e6] mb-2">3</span>
<span className="text-base text-[#e0cbb4]">Stanoviště u řopíků</span>
</div>
<div>
<span className="block text-4xl font-medium text-[#fbf4e6] mb-2">0%</span>
<span className="text-base text-[#e0cbb4]">Průmyslové chemie</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-3xl bg-[#2d1110] overflow-hidden relative border border-[#521f1e]">
<div className="absolute bottom-0 w-full h-1/3 bg-[#2d1110]/80 backdrop-blur border-t border-[#521f1e] flex items-center justify-center p-8">
<div className="flex items-center gap-5 text-[#e0cbb4]">
<i className="w-8 h-8" data-lucide="camera" strokeWidth="1.5"></i>
<span className="text-base font-light">Fotografie našich úlů u řopíku na Pálavě</span>
</div>
</div>
<div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#d99c36]/20 blur-3xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#b07c29]/10 blur-3xl"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #e0cbb4 0, #e0cbb4 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px'}}></div>
</div>
<div className="absolute -bottom-8 -left-8 bg-[#fbf4e6] text-[#521f1e] p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-[#ebdaba]">
<div className="h-12 w-12 rounded-full bg-[#f4eadd] flex items-center justify-center text-[#b07c29]">
<i className="w-6 h-6" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-[#6b4740] font-normal uppercase tracking-widest mb-0.5">Certifikováno</p>
<p className="text-base font-medium">Český med</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#fbf4e6] border-t border-[#ebdaba] pt-20 pb-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-medium tracking-tight text-xl text-[#521f1e] flex items-center gap-2 mb-6 uppercase" href="#">
<i className="text-[#b07c29] w-6 h-6" data-lucide="hexagon" strokeWidth="1.5"></i>
                        ŘOPOMED
                    </a>
<p className="text-base text-[#6b4740] font-light max-w-sm mb-8 leading-relaxed">
                        Poctivý včelí med od Včelařství Peřan. Z okolí historického opevnění ŘOP 3107 VEČ 756 přímo k vám.
                    </p>
<div className="flex flex-col gap-2 text-base text-[#6b4740] font-light">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#b07c29]" data-lucide="map-pin" strokeWidth="1.5"></i> Země původu: Česká republika</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-[#b07c29]" data-lucide="badge-check" strokeWidth="1.5"></i> Registrační číslo včelaře: 221025</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-[#521f1e] mb-6 tracking-tight">Obchod</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#6b4740] font-light hover:text-[#521f1e] transition-colors" href="#">Všechny medy</a></li>
<li><a className="text-base text-[#6b4740] font-light hover:text-[#521f1e] transition-colors" href="#">Doprava a platba</a></li>
<li><a className="text-base text-[#6b4740] font-light hover:text-[#521f1e] transition-colors" href="#">Obchodní podmínky</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-[#521f1e] mb-6 tracking-tight">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-[#6b4740] font-light">
<i className="w-5 h-5 text-[#b07c29]" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-[#521f1e] transition-colors" href="mailto:vcely@peran.cz">vcely@peran.cz</a>
</li>
<li className="flex items-center gap-3 text-base text-[#6b4740] font-light">
<i className="w-5 h-5 text-[#b07c29]" data-lucide="phone" strokeWidth="1.5"></i>
<span>+420 123 456 789</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#ebdaba] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-[#6b4740] font-light">
                    © 2024 Včelařství Peřan. Všechna práva vyhrazena.
                </p>
<div className="flex items-center gap-6 text-[#6b4740]">
<a className="hover:text-[#521f1e] transition-colors" href="#"><i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i></a>
<a className="hover:text-[#521f1e] transition-colors" href="mailto:vcely@peran.cz"><i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
