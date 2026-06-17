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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6366F1]/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#38BDF8]/5 blur-[100px] rounded-full"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-[#1F2933]">
<div className="max-w-[1320px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="font-space uppercase tracking-tighter text-lg font-medium text-[#F9FAFB] group-hover:text-[#38BDF8] transition-colors duration-300">Jan Kurdiovský</span>
<span className="text-xs text-[#9CA3AF] tracking-wide font-light">PFP – Finanční plánování</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-[#9CA3AF] hover:text-[#38BDF8] hover:-translate-y-[1px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300" href="#sluzby">Služby</a>
<a className="text-sm font-light text-[#9CA3AF] hover:text-[#38BDF8] hover:-translate-y-[1px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300" href="#spoluprace">Spolupráce</a>
<a className="text-sm font-light text-[#9CA3AF] hover:text-[#38BDF8] hover:-translate-y-[1px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300" href="#o-mne">O mně</a>
<a className="text-sm font-light text-[#9CA3AF] hover:text-[#38BDF8] hover:-translate-y-[1px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300" href="#reference">Reference</a>
<a className="text-sm font-light text-[#9CA3AF] hover:text-[#38BDF8] hover:-translate-y-[1px] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#38BDF8] hover:after:w-full after:transition-all after:duration-300" href="#blog">Blog</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-[1.02] transition-all duration-300" href="#kontakt">
                    Rezervovat schůzku
                </a>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<label className="md:hidden cursor-pointer text-[#F9FAFB] hover:text-[#38BDF8] transition-colors z-[60] relative" htmlFor="mobile-menu-toggle">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</label>

<div className="fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="menu-overlay"></div>
<nav className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<label className="absolute top-6 right-6 cursor-pointer text-[#F9FAFB] hover:text-[#38BDF8]" htmlFor="mobile-menu-toggle">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</label>
<a className="font-space text-3xl tracking-tighter text-[#F9FAFB] hover:text-[#38BDF8]" href="#sluzby">Služby</a>
<a className="font-space text-3xl tracking-tighter text-[#F9FAFB] hover:text-[#38BDF8]" href="#spoluprace">Spolupráce</a>
<a className="font-space text-3xl tracking-tighter text-[#F9FAFB] hover:text-[#38BDF8]" href="#o-mne">O mně</a>
<a className="font-space text-3xl tracking-tighter text-[#F9FAFB] hover:text-[#38BDF8]" href="#blog">Blog</a>
<a className="mt-8 inline-flex px-8 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" href="#kontakt">Rezervovat schůzku</a>
</nav>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
<div className="max-w-[1320px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="animate-fade-up opacity-0 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1F2933] bg-[#030712]/50 text-xs text-[#38BDF8] mb-8 font-light tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                    Nezávislé finanční plánování, které dává smysl i za 10 let
                </div>
<h1 className="font-space text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[1.1] mb-6 font-medium text-[#F9FAFB]">
                    Finanční poradce a investor pro lidi, kteří nechtějí být jen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">klienti banky.</span>
</h1>
<p className="text-[#9CA3AF] text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                    Pomáhám jednotlivcům, rodinám a firmám nastavit finance tak, aby pracovaly pro jejich cíle – ne pro provize někoho jiného. Bez nátlaku, srozumitelně a s dlouhodobým plánem.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<div className="flex flex-col gap-2">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto" href="#kontakt">
                            Domluvit nezávaznou konzultaci
                        </a>
<span className="text-[0.65rem] text-[#9CA3AF] text-center sm:text-left pl-2">První schůzka online nebo osobně v Brně, zdarma.</span>
</div>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium text-[#F9FAFB] border border-[#1F2933] hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5 transition-all duration-300 w-full sm:w-auto h-fit" href="#spoluprace">
                        Jak spolupráce probíhá
                        <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-[#1F2933] border-t pt-8 gap-x-6 gap-y-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#38BDF8] text-xl shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs text-[#9CA3AF] font-light leading-tight">PFP – certifikace komplexního finančního plánování</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#38BDF8] text-xl shrink-0 mt-0.5" icon="solar:eye-linear"></iconify-icon>
<span className="text-xs text-[#9CA3AF] font-light leading-tight">Transparentní odměňování, žádný prodej naslepo</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#38BDF8] text-xl shrink-0 mt-0.5" icon="solar:layers-linear"></iconify-icon>
<span className="text-xs text-[#9CA3AF] font-light leading-tight">Investice, úvěry i firemní finance na jednom místě</span>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center items-center relative h-[600px] opacity-0 animate-fade-up delay-200">
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] opacity-20 blur-xl"></div>
<div className="absolute w-12 h-12 rounded-full border border-[#38BDF8]/30 bg-[#020617] flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)] z-10">
<iconify-icon className="text-[#38BDF8] text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="absolute w-[280px] h-[280px] rounded-full border border-[#1F2933] animate-orbit-slow">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#6366F1] shadow-[0_0_10px_#6366F1]"></div>
</div>

<div className="absolute w-[420px] h-[420px] rounded-full border border-[#1F2933] animate-orbit-medium">
<div className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_15px_#38BDF8]"></div>
<div className="absolute top-1/4 left-0 w-1.5 h-1.5 rounded-full bg-[#F9FAFB]/50"></div>
</div>

<div className="absolute w-[560px] h-[560px] rounded-full border border-[#1F2933] border-dashed opacity-50 animate-orbit-slow" style={{animationDuration: '60s'}}>
<div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[0.65rem] uppercase tracking-widest text-[#9CA3AF]">Scroll</span>
<div className="w-[1px] h-8 bg-gradient-to-b from-[#38BDF8] to-transparent"></div>
</div>
</section>

<section className="border-[#1F2933]/50 border-t pt-24 pb-24 relative">
<div className="max-w-[1320px] mx-auto px-6">
<div className="mb-16">
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Pro koho má moje práce největší smysl</h2>
<div className="w-12 h-[1px] bg-[#38BDF8]"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-[#030712] border border-[#1F2933] p-8 rounded-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.1)]">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#6366F1] mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="font-space text-lg uppercase tracking-tight font-medium mb-3">Mladí lidé a páry</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Nastavení prvních investic, efektivní tvorba rezervy a příprava na vlastní bydlení. Vše srozumitelně od úplného základu.</p>
</div>

<div className="group bg-[#030712] border border-[#1F2933] p-8 rounded-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.1)]">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#38BDF8] mb-6" icon="solar:home-smile-angle-linear"></iconify-icon>
<h3 className="font-space text-lg uppercase tracking-tight font-medium mb-3">Rodiny</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Zajištění a ochrana příjmů, smysluplné pojištění a dlouhodobé cíle včetně přípravy kapitálu pro děti.</p>
</div>

<div className="group bg-[#030712] border border-[#1F2933] p-8 rounded-xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.1)]">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-[#22D3EE] mb-6" icon="solar:case-minimalistic-linear"></iconify-icon>
<h3 className="font-space text-lg uppercase tracking-tight font-medium mb-3">OSVČ a malé firmy</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Optimalizace cashflow, ochrana před riziky podnikání a investování firemních i soukromých přebytků.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030712]" id="sluzby">
<div className="max-w-[1320px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Co přesně pro vás můžu řešit</h2>
<div className="w-12 h-[1px] bg-[#38BDF8] mb-6"></div>
<p className="text-sm text-[#9CA3AF] font-light max-w-xl">Všechny klíčové oblasti vašich financí pod jednou střechou. Analyzuji, navrhuji řešení a pomáhám s realizací.</p>
</div>
<a className="text-xs text-[#38BDF8] hover:text-[#F9FAFB] transition-colors flex items-center gap-1 uppercase tracking-widest border-b border-[#38BDF8]/30 pb-1 w-fit" href="#kontakt">
                    Detailní přehled služeb <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1F2933] border border-[#1F2933] rounded-xl overflow-hidden">

<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#38BDF8]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#38BDF8] text-xl transition-colors" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#38BDF8] transition-colors">Komplexní finanční plán</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Ucelený plán vašich financí – příjmy, výdaje, rezervy, investice i plány do budoucna v jednom srozumitelném dokumentu.</p>
</div>
<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#6366F1] text-xl transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#6366F1] transition-colors">Investice</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Tvorba a úprava portfolia podle cílů a zkušeností. Vysvětlené tak, abyste přesně věděli, co máte a proč.</p>
</div>
<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#22D3EE]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#22D3EE] text-xl transition-colors" icon="solar:home-2-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#22D3EE] transition-colors">Úvěry a financování</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Hypotéky, refinancování, konsolidace. Propojené s dlouhodobým plánem, aby úvěr nepřekážel vašim cílům.</p>
</div>
<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#38BDF8]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#38BDF8] text-xl transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#38BDF8] transition-colors">Pojištění smysluplně</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Nastavení pojistek bez zbytečných výluk a nesmyslných částek. Cílem je nejlépe nastavené krytí, ne nejdražší smlouva.</p>
</div>
<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#6366F1] text-xl transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#6366F1] transition-colors">Firemní finance</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Poradenství pro OSVČ a s.r.o.: oddělení osobních a firemních financí, práce s rezervami a investování přebytků.</p>
</div>
<div className="bg-[#020617] p-10 group hover:bg-[#030712] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-[#1F2933]/50 flex items-center justify-center mb-6 group-hover:bg-[#22D3EE]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#22D3EE] text-xl transition-colors" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-space text-base uppercase tracking-tight font-medium mb-3 group-hover:text-[#22D3EE] transition-colors">Edukace a rozhled</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Vysvětluji trh, produkty a poplatky tak, abyste se ve vlastních financích dokázali orientovat sami.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="spoluprace">

<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#1F2933] to-transparent hidden lg:block"></div>
<div className="max-w-[1320px] mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Jak bude vypadat naše spolupráce</h2>
<div className="w-12 h-[1px] bg-[#38BDF8] mx-auto mb-6"></div>
<p className="text-sm text-[#9CA3AF] font-light max-w-xl mx-auto">Jasný proces, žádné skryté kroky nebo překvapení.</p>
</div>
<div className="max-w-3xl mx-auto">
<div className="relative pl-8 md:pl-0">

<div className="absolute left-0 top-2 bottom-0 w-[1px] bg-[#1F2933] md:hidden"></div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between mb-16 group">
<div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">1. První nezávazná konzultace</h3>
</div>
<div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#020617] border border-[#38BDF8] mt-1.5 md:mt-2 z-10 group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_15px_#38BDF8] transition-all duration-300"></div>
<div className="md:hidden mb-2">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">1. První nezávazná konzultace</h3>
</div>
<div className="w-full md:w-5/12 md:pl-12">
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Online nebo osobně v Brně. Pochopení vaší situace, cílů a zjištění, zda pro vás moje služby mají přidanou hodnotu.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between mb-16 group">
<div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Kontrola aktuálních produktů, poplatků a rizik. Zjistíme, co dává smysl držet a co zbytečně prodražuje vaše plány.</p>
</div>
<div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#020617] border border-[#1F2933] mt-1.5 md:mt-2 z-10 group-hover:bg-[#6366F1] group-hover:border-[#6366F1] group-hover:shadow-[0_0_15px_#6366F1] transition-all duration-300"></div>
<div className="md:hidden mb-2">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">2. Analýza smluv a možností</h3>
</div>
<div className="w-full md:w-5/12 md:pl-12">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB] hidden md:block">2. Analýza smluv a možností</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed md:hidden">Kontrola aktuálních produktů, poplatků a rizik. Zjistíme, co dává smysl držet a co zbytečně prodražuje vaše plány.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between mb-16 group">
<div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">3. Návrh řešení</h3>
</div>
<div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#020617] border border-[#1F2933] mt-1.5 md:mt-2 z-10 group-hover:bg-[#22D3EE] group-hover:border-[#22D3EE] group-hover:shadow-[0_0_15px_#22D3EE] transition-all duration-300"></div>
<div className="md:hidden mb-2">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">3. Návrh řešení</h3>
</div>
<div className="w-full md:w-5/12 md:pl-12">
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Představím vám více variant s vysvětlením pro a proti. Žádný tlak na podpis – finální rozhodnutí je vždy na vás.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between mb-16 group">
<div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Pomoc s administrativou, papírováním, sjednáním smluv a přesným nastavením investičních účtů.</p>
</div>
<div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#020617] border border-[#1F2933] mt-1.5 md:mt-2 z-10 group-hover:bg-[#38BDF8] group-hover:border-[#38BDF8] group-hover:shadow-[0_0_15px_#38BDF8] transition-all duration-300"></div>
<div className="md:hidden mb-2">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">4. Realizace a nastavení</h3>
</div>
<div className="w-full md:w-5/12 md:pl-12">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB] hidden md:block">4. Realizace a nastavení</h3>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed md:hidden">Pomoc s administrativou, papírováním, sjednáním smluv a přesným nastavením investičních účtů.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:justify-between group">
<div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">5. Pravidelný servis</h3>
</div>
<div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#020617] border border-[#1F2933] mt-1.5 md:mt-2 z-10 group-hover:bg-[#22C55E] group-hover:border-[#22C55E] group-hover:shadow-[0_0_15px_#22C55E] transition-all duration-300"></div>
<div className="md:hidden mb-2">
<h3 className="font-space text-lg uppercase tracking-tight font-medium text-[#F9FAFB]">5. Pravidelný servis</h3>
</div>
<div className="w-full md:w-5/12 md:pl-12">
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed">Minimálně 1× ročně kompletní revize plánu, nebo při velkých životních změnách. Jsem k dispozici, když potřebujete poradit.</p>
</div>
</div>
</div>
</div>

<div className="mt-24 max-w-2xl mx-auto border border-[#1F2933] bg-[#030712] rounded-xl p-8 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366F1] to-transparent"></div>
<h4 className="font-space uppercase tracking-tight text-sm font-medium mb-4 text-[#F9FAFB]">Co ode mě nečekat</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-[#9CA3AF] font-light">
<iconify-icon className="text-[#1F2933] text-lg mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Neotáčím se k vám zády po podpisu smlouvy.
                    </li>
<li className="flex items-start gap-3 text-sm text-[#9CA3AF] font-light">
<iconify-icon className="text-[#1F2933] text-lg mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Netlačím na uzavření schůzky nebo produktu za každou cenu.
                    </li>
<li className="flex items-start gap-3 text-sm text-[#9CA3AF] font-light">
<iconify-icon className="text-[#1F2933] text-lg mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Neprodávám produkty, které bych sám nechtěl mít ve vlastním portfoliu.
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#030712] border-y border-[#1F2933]/50" id="reference">
<div className="max-w-[1320px] mx-auto px-6">
<div className="mb-16">
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Co o spolupráci říkají klienti</h2>
<div className="w-12 h-[1px] bg-[#38BDF8]"></div>
</div>
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">

<div className="min-w-[300px] md:min-w-[400px] p-8 border border-[#1F2933] bg-[#020617] rounded-xl snap-start relative group">
<div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-[#1F2933] mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-8">
                        „Dlouho jsem hledal někoho, kdo mi finance nevysvětlí jen přes barevné grafy letáků, ale půjde do hloubky. Pan Kurdiovský mi perfektně seřadil investice a narovnal pojištění. Žádný nátlak, maximální transparentnost.“
                    </p>
<div>
<p className="font-space uppercase tracking-tight text-sm font-medium text-[#F9FAFB]">Martin K.</p>
<p className="text-xs text-[#6366F1] font-light mt-1">Klient – investice a pojištění</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 border border-[#1F2933] bg-[#020617] rounded-xl snap-start relative group">
<div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-[#1F2933] mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-8">
                        „Jako OSVČ jsem potřebovala oddělit osobní a firemní peníze a začít smysluplně investovat. Honza vše vysvětlil naprosto srozumitelně. Oceňuji hlavně lidský přístup a to, že se mi věnuje i po sjednání smluv.“
                    </p>
<div>
<p className="font-space uppercase tracking-tight text-sm font-medium text-[#F9FAFB]">Lucie P.</p>
<p className="text-xs text-[#6366F1] font-light mt-1">OSVČ, Brno</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 border border-[#1F2933] bg-[#020617] rounded-xl snap-start relative group">
<div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<iconify-icon className="text-3xl text-[#1F2933] mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-8">
                        „Spolupracujeme už přes dva roky na komplexním plánu rodiny, včetně hypotéky. Velmi profesionální jednání, skvělý přehled v trhu a schopnost najít řešení na míru bez vnucování zbytečností.“
                    </p>
<div>
<p className="font-space uppercase tracking-tight text-sm font-medium text-[#F9FAFB]">Rodina Novotná</p>
<p className="text-xs text-[#6366F1] font-light mt-1">Komplexní plánování, Hypotéka</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="o-mne">
<div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square md:aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-[2rem] overflow-hidden border border-[#1F2933] bg-[#030712] group">

<div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#030712] to-[#1F2933]/20"></div>
<div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 rounded-t-full bg-gradient-to-t from-[#1F2933] to-transparent opacity-50 blur-xl"></div>

<div className="absolute inset-0 border border-[#38BDF8]/0 rounded-[2rem] group-hover:border-[#38BDF8]/30 transition-colors duration-700"></div>

<div className="absolute bottom-6 left-6 px-4 py-2 bg-[#020617]/80 backdrop-blur-md border border-[#1F2933] rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
<span className="text-xs font-space uppercase tracking-widest text-[#F9FAFB]">Certifikace EFPA</span>
</div>
</div>

<div>
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Kdo je Jan Kurdiovský</h2>
<div className="w-12 h-[1px] bg-[#38BDF8] mb-8"></div>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-6">
                    Jsem finanční poradce a investor z Brna. Věnuji se komplexnímu finančnímu plánování, investicím, úvěrům a firemním financím. 
                </p>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-8">
                    Místo náboru dalších poradců trávím čas prací pro své klienty – a hledám řešení, která dávají smysl hlavně jim. Kromě poradenství se věnuji i vlastní firmě SUORIGO, takže finance řeším nejen z pohledu tabulek, ale i z reálné praxe podnikatele.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 border-b border-[#1F2933] pb-4">
<iconify-icon className="text-[#38BDF8] text-2xl shrink-0" icon="solar:diploma-verified-linear"></iconify-icon>
<span className="text-sm text-[#F9FAFB] font-light">Certifikace PFP – Poradce finančního plánování (EFPA)</span>
</li>
<li className="flex items-center gap-4 border-b border-[#1F2933] pb-4">
<iconify-icon className="text-[#38BDF8] text-2xl shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm text-[#F9FAFB] font-light">Zkušenosti s poradenstvím pro jednotlivce, rodiny i malé firmy</span>
</li>
<li className="flex items-center gap-4 border-b border-[#1F2933] pb-4">
<iconify-icon className="text-[#38BDF8] text-2xl shrink-0" icon="solar:buildings-2-linear"></iconify-icon>
<span className="text-sm text-[#F9FAFB] font-light">Propojení praxe podnikatele (SUORIGO) a poradce</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#030712] border-t border-[#1F2933]/50" id="blog">
<div className="max-w-[1320px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="font-space text-2xl md:text-3xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-4">Články a myšlenky o financích</h2>
<div className="w-12 h-[1px] bg-[#38BDF8]"></div>
</div>
<a className="text-xs text-[#38BDF8] hover:text-[#F9FAFB] transition-colors flex items-center gap-1 uppercase tracking-widest border-b border-[#38BDF8]/30 pb-1 w-fit" href="#">
                    Přejít na blog <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="block bg-[#020617] border border-[#1F2933] rounded-xl p-6 relative overflow-hidden group hover:border-[#1F2933]/80 transition-colors" href="#">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="text-[0.65rem] text-[#6366F1] font-space uppercase tracking-widest mb-3 block">Investice</span>
<h3 className="font-space text-lg font-medium text-[#F9FAFB] mb-3 leading-tight group-hover:text-[#38BDF8] transition-colors">Proč nečasovat trh, ale trávit na něm čas</h3>
<p className="text-sm text-[#9CA3AF] font-light line-clamp-3 mb-6">Snažit se trefit dno nebo vrchol trhu je strategie, která většinou vede k horším výsledkům. Ukážeme si, proč je pravidelnost klíčem k úspěchu.</p>
<div className="flex items-center justify-between text-xs text-[#9CA3AF]">
<span>12. Března 2024</span>
<span className="flex items-center gap-1 group-hover:text-[#38BDF8] transition-colors">Číst dál <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="block bg-[#020617] border border-[#1F2933] rounded-xl p-6 relative overflow-hidden group hover:border-[#1F2933]/80 transition-colors" href="#">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="text-[0.65rem] text-[#6366F1] font-space uppercase tracking-widest mb-3 block">Pojištění</span>
<h3 className="font-space text-lg font-medium text-[#F9FAFB] mb-3 leading-tight group-hover:text-[#38BDF8] transition-colors">Jak si nastavit životní pojištění, aby opravdu fungovalo</h3>
<p className="text-sm text-[#9CA3AF] font-light line-clamp-3 mb-6">Nejdražší pojistka není automaticky ta nejlepší. Zaměřte se na krytí velkých rizik a vynechte ta, která zvládnete z rezervy.</p>
<div className="flex items-center justify-between text-xs text-[#9CA3AF]">
<span>28. Února 2024</span>
<span className="flex items-center gap-1 group-hover:text-[#38BDF8] transition-colors">Číst dál <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="block bg-[#020617] border border-[#1F2933] rounded-xl p-6 relative overflow-hidden group hover:border-[#1F2933]/80 transition-colors" href="#">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F2933] to-transparent group-hover:via-[#38BDF8]/50 transition-colors duration-500"></div>
<span className="text-[0.65rem] text-[#6366F1] font-space uppercase tracking-widest mb-3 block">Hypotéky</span>
<h3 className="font-space text-lg font-medium text-[#F9FAFB] mb-3 leading-tight group-hover:text-[#38BDF8] transition-colors">Refinancování hypotéky: Kdy dává smysl měnit banku?</h3>
<p className="text-sm text-[#9CA3AF] font-light line-clamp-3 mb-6">Sazby se mění. Pojďme se podívat, kdy se vyplatí uvažovat o přesunu hypotéky jinam a na co si dát při procesu pozor.</p>
<div className="flex items-center justify-between text-xs text-[#9CA3AF]">
<span>15. Února 2024</span>
<span className="flex items-center gap-1 group-hover:text-[#38BDF8] transition-colors">Číst dál <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="kontakt">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[1320px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">

<div>
<h2 className="font-space text-3xl md:text-4xl uppercase tracking-tighter font-medium text-[#F9FAFB] mb-6">Pojďme si v klidu projít vaše finance</h2>
<p className="text-sm text-[#9CA3AF] font-light leading-relaxed mb-12 max-w-md">
                    Napište mi pár vět o vaší situaci a o tom, co byste chtěli řešit. Ozvu se zpět s návrhem termínu a formy schůzky.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-[#1F2933] bg-[#030712] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#38BDF8] text-xl transition-colors" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#6366F1] font-space mb-1">Email</p>
<a className="text-lg font-light text-[#F9FAFB] hover:text-[#38BDF8] transition-colors" href="mailto:jan@kurdiovsky.cz">jan@kurdiovsky.cz</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-[#1F2933] bg-[#030712] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#38BDF8] text-xl transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#6366F1] font-space mb-1">Telefon</p>
<a className="text-lg font-light text-[#F9FAFB] hover:text-[#38BDF8] transition-colors" href="tel:+420799794670">+420 799 794 670</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-[#1F2933] bg-[#030712] flex items-center justify-center group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#38BDF8] text-xl transition-colors" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#6366F1] font-space mb-1">Korespondenční adresa</p>
<p className="text-lg font-light text-[#F9FAFB]">Tolstého 35, 616 00 Brno</p>
</div>
</div>
</div>
</div>

<div className="bg-[#030712] border border-[#1F2933] rounded-2xl p-8 md:p-10 shadow-2xl shadow-[#000000]">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-space mb-2" htmlFor="name">Jméno a příjmení</label>
<input className="w-full bg-[#020617] border border-[#1F2933] rounded-lg px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder-[#1F2933]" id="name" placeholder="Jan Novák" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-space mb-2" htmlFor="phone">Telefon</label>
<input className="w-full bg-[#020617] border border-[#1F2933] rounded-lg px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder-[#1F2933]" id="phone" placeholder="+420 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-space mb-2" htmlFor="email">Email</label>
<input className="w-full bg-[#020617] border border-[#1F2933] rounded-lg px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all placeholder-[#1F2933]" id="email" placeholder="jan@email.cz" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-space mb-2" htmlFor="message">Jak vám můžu pomoci?</label>
<textarea className="w-full bg-[#020617] border border-[#1F2933] rounded-lg px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none placeholder-[#1F2933]" id="message" placeholder="Chtěl bych poradit s..." rows="4"></textarea>
</div>

<div>
<label className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-space mb-2">Forma schůzky</label>
<div className="flex bg-[#020617] border border-[#1F2933] rounded-lg p-1">
<div className="flex-1 relative">
<input checked="" className="peer hidden" id="type_online" name="meeting_type" type="radio"/>
<label className="block w-full text-center text-sm py-2 rounded-md cursor-pointer text-[#9CA3AF] peer-checked:text-[#F9FAFB] peer-checked:bg-[#1F2933] transition-all" htmlFor="type_online">Online</label>
</div>
<div className="flex-1 relative">
<input className="peer hidden" id="type_osobne" name="meeting_type" type="radio"/>
<label className="block w-full text-center text-sm py-2 rounded-md cursor-pointer text-[#9CA3AF] peer-checked:text-[#F9FAFB] peer-checked:bg-[#1F2933] transition-all" htmlFor="type_osobne">Osobně v Brně</label>
</div>
</div>
</div>

<div className="flex items-start gap-3 pt-2">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border border-[#1F2933] rounded bg-[#020617] checked:bg-[#38BDF8] checked:border-[#38BDF8] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 focus:ring-offset-1 focus:ring-offset-[#030712]" id="privacy" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-[#9CA3AF] font-light cursor-pointer mt-0.5 select-none" htmlFor="privacy">
                            Souhlasím se zpracováním osobních údajů pro účely sjednání schůzky.
                        </label>
</div>
<button className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.01] transition-all duration-300 mt-4" type="button">
                        Odeslat a domluvit schůzku
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-[#1F2933] bg-[#020617] pt-16 pb-8">
<div className="max-w-[1320px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<span className="font-space uppercase tracking-tighter text-xl font-medium text-[#F9FAFB] block mb-2">Jan Kurdiovský</span>
<p className="text-sm text-[#9CA3AF] font-light max-w-sm mb-6">Nezávislé finanční poradenství a investice pro lidi, kteří chtějí mít své finance pod kontrolou.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#1F2933] flex items-center justify-center text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-minimalistic-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#1F2933] flex items-center justify-center text-[#9CA3AF] hover:text-[#38BDF8] hover:border-[#38BDF8] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-space uppercase tracking-widest text-xs font-medium text-[#F9FAFB] mb-6">Navigace</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#9CA3AF] font-light hover:text-[#38BDF8] transition-colors" href="#sluzby">Služby</a></li>
<li><a className="text-sm text-[#9CA3AF] font-light hover:text-[#38BDF8] transition-colors" href="#spoluprace">Spolupráce</a></li>
<li><a className="text-sm text-[#9CA3AF] font-light hover:text-[#38BDF8] transition-colors" href="#o-mne">O mně</a></li>
</ul>
</div>
<div>
<h4 className="font-space uppercase tracking-widest text-xs font-medium text-[#F9FAFB] mb-6">Kontakt</h4>
<ul className="space-y-3">
<li className="text-sm text-[#9CA3AF] font-light">jan@kurdiovsky.cz</li>
<li className="text-sm text-[#9CA3AF] font-light">799 794 670</li>
<li className="text-sm text-[#9CA3AF] font-light">Tolstého 35, Brno</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#1F2933] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#9CA3AF] font-light">© 2024 Jan Kurdiovský, kurdiovsky.cz</p>
<div className="flex gap-6">
<a className="text-xs text-[#9CA3AF] font-light hover:text-[#F9FAFB] transition-colors" href="#">Zásady zpracování osobních údajů</a>
<a className="text-xs text-[#9CA3AF] font-light hover:text-[#F9FAFB] transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
