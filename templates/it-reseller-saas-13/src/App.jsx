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
colors: {
page: '#FFFFFF',
primary: '#0F172A', // Deep Navy/Black for text
secondary: '#475569', // Slate 600 for body
muted: '#94A3B8', // Slate 400
brand: '#0F62FE', // Enterprise Blue (IBM-ish)
'brand-dark': '#0043CE',
'brand-light': '#EFF6FF', // Blue 50
border: '#E2E8F0', // Slate 200
surface: '#F8FAFC', // Slate 50
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['IBM Plex Sans', 'sans-serif'],
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(15, 98, 254, 0.1), 0 8px 16px rgba(0,0,0,0.06)',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

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
      

<nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-border">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-2xl font-heading font-bold tracking-tight text-primary" href="#">Sáša<span className="text-brand">.</span></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
<a className="hover:text-brand transition-colors" href="#problem">Problém</a>
<a className="hover:text-brand transition-colors" href="#reseni">Řešení</a>
<a className="hover:text-brand transition-colors" href="#features">Funkce</a>
<a className="hover:text-brand transition-colors" href="#reference">Reference</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-secondary hover:text-primary transition-colors" href="#">Přihlásit se</a>
<button className="btn-primary px-5 py-2.5 rounded-md text-sm font-semibold">
                    Vyzkoušet zdarma
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-surface to-white border-b border-border">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-blue-100 text-brand text-xs font-semibold mb-8">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                Nová generace správy licencí
            </span>
<h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-primary mb-6 max-w-4xl mx-auto">
                Operační systém pro <br/> <span className="text-brand">moderní IT resellery</span>.
            </h1>
<p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
                Zapomeňte na Excel. Automatizujte obnovy, spravujte zákazníky a sledujte marže v jedné přehledné platformě.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
<button className="btn-primary px-8 py-3.5 rounded-md text-base font-medium min-w-[180px]">
                    Vyzkoušet zdarma
                </button>
<button className="btn-ghost px-8 py-3.5 rounded-md text-base font-medium min-w-[180px]">
                    Domluvit demo
                </button>
</div>
<p className="text-xs text-muted mb-16">14 dní zdarma • Bez zadání karty • Plná podpora</p>

<div className="relative max-w-5xl mx-auto rounded-xl border border-border shadow-2xl bg-white overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

<div className="h-10 border-b border-border bg-surface flex items-center px-4 gap-4">
<div className="flex gap-1.5 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="h-5 bg-white border border-border w-64 rounded-sm"></div>
</div>

<div className="grid grid-cols-5 h-[400px] md:h-[550px] bg-surface">

<div className="col-span-1 border-r border-border bg-white hidden md:block p-4">
<div className="space-y-6">
<div className="space-y-1">
<div className="h-8 w-full bg-brand-light text-brand rounded flex items-center px-3 text-xs font-semibold gap-2">
<span className="iconify" data-icon="lucide:layout-dashboard"></span> Přehled
                                </div>
<div className="h-8 w-full text-secondary hover:bg-surface rounded flex items-center px-3 text-xs font-medium gap-2 transition-colors">
<span className="iconify" data-icon="lucide:users"></span> Klienti
                                </div>
<div className="h-8 w-full text-secondary hover:bg-surface rounded flex items-center px-3 text-xs font-medium gap-2 transition-colors">
<span className="iconify" data-icon="lucide:key"></span> Licence
                                </div>
<div className="h-8 w-full text-secondary hover:bg-surface rounded flex items-center px-3 text-xs font-medium gap-2 transition-colors">
<span className="iconify" data-icon="lucide:file-text"></span> Fakturace
                                </div>
</div>
</div>
</div>

<div className="col-span-5 md:col-span-4 p-8 bg-surface">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="font-heading text-lg font-semibold text-primary">Aktivní předplatná</h3>
<p className="text-xs text-muted mt-1">Seznam všech spravovaných licencí k obnově.</p>
</div>
<button className="bg-white border border-border text-xs font-medium px-3 py-1.5 rounded shadow-sm hover:border-brand transition-colors">
                                Exportovat CSV
                            </button>
</div>

<div className="bg-white border border-border rounded-t-lg p-3 grid grid-cols-12 gap-4 text-xs font-semibold text-secondary uppercase tracking-wider">
<div className="col-span-4">Klient</div>
<div className="col-span-3">Produkt</div>
<div className="col-span-2">Počet</div>
<div className="col-span-3 text-right">Obnova</div>
</div>

<div className="bg-white border-x border-b border-border p-3 grid grid-cols-12 gap-4 text-sm items-center hover:bg-brand-light/30 transition-colors group/row">
<div className="col-span-4 font-medium text-primary flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">A</div>
                                Alfa s.r.o.
                            </div>
<div className="col-span-3 text-secondary">Microsoft 365 Business</div>
<div className="col-span-2 text-secondary">45 ks</div>
<div className="col-span-3 text-right text-orange-600 font-medium bg-orange-50 px-2 py-0.5 rounded w-fit ml-auto">Zítra</div>
</div>
<div className="bg-white border-x border-b border-border p-3 grid grid-cols-12 gap-4 text-sm items-center hover:bg-brand-light/30 transition-colors">
<div className="col-span-4 font-medium text-primary flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">B</div>
                                Beta Industries
                            </div>
<div className="col-span-3 text-secondary">ESET Endpoint</div>
<div className="col-span-2 text-secondary">120 ks</div>
<div className="col-span-3 text-right text-secondary">14. Listopad</div>
</div>
<div className="bg-white border-x border-b border-border p-3 grid grid-cols-12 gap-4 text-sm items-center hover:bg-brand-light/30 transition-colors">
<div className="col-span-4 font-medium text-primary flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">G</div>
                                Gama Logistics
                            </div>
<div className="col-span-3 text-secondary">Adobe Creative Cloud</div>
<div className="col-span-2 text-secondary">5 ks</div>
<div className="col-span-3 text-right text-secondary">02. Prosinec</div>
</div>

<div className="h-32 bg-gradient-to-b from-white to-surface border-x border-b border-border rounded-b-lg"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-border bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Důvěřují nám přední čeští distributoři</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold font-heading text-primary">TECHDATA</span>
<span className="text-lg font-bold font-heading text-primary">ARROW</span>
<span className="text-lg font-bold font-heading text-primary">ALSO</span>
<span className="text-lg font-bold font-heading text-primary">DNS</span>
<span className="text-lg font-bold font-heading text-primary">ZEBRA</span>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4 tracking-tight">
                    Proč manuální správa selhává?
                </h2>
<p className="text-lg text-secondary">
                    Tabulky jsou náchylné k chybám. Pokud vaše marže závisí na přesnosti, potřebujete systém, ne dokument.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-lg border border-border shadow-soft hover:shadow-card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-md bg-red-50 text-red-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:alert-circle" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Chaos v licencích</h3>
<p className="text-sm text-secondary leading-relaxed">
                        Stovky licenčních klíčů v e-mailech a Excelech vedou ke ztrátě přehledu a chybám v evidenci.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-border shadow-soft hover:shadow-card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:timer-off" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Zapomenuté obnovy</h3>
<p className="text-sm text-secondary leading-relaxed">
                        Zmeškané datum obnovy znamená výpadek služby u klienta a poškození vaší reputace.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-border shadow-soft hover:shadow-card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:file-input" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Ruční administrativa</h3>
<p className="text-sm text-secondary leading-relaxed">
                        Trávíte hodiny přepisováním faktur a manuálním přiřazováním licencí místo obchodu.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-border shadow-soft hover:shadow-card-hover transition-all duration-300">
<div className="w-10 h-10 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:trending-down" data-width="20"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Nejasné marže</h3>
<p className="text-sm text-secondary leading-relaxed">
                        Nevíte přesně, kolik vyděláváte na konkrétním klientovi kvůli fluktuaci cen a kurzů.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-border" id="reseni">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4 tracking-tight">Jak Sáša funguje</h2>
<p className="text-lg text-secondary">Od nákupu po fakturaci ve čtyřech krocích.</p>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden lg:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

<div className="bg-white group">
<div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center text-lg font-bold mb-6 mx-auto lg:mx-0 shadow-lg ring-4 ring-white relative z-10">1</div>
<div className="text-center lg:text-left">
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Import dat</h3>
<p className="text-sm text-secondary">Nahrajte svá data z CSV nebo se napojte přímo přes API na distributory.</p>
</div>
</div>

<div className="bg-white group">
<div className="w-12 h-12 rounded-lg bg-white border border-border text-secondary flex items-center justify-center text-lg font-bold mb-6 mx-auto lg:mx-0 shadow-sm ring-4 ring-white relative z-10 group-hover:border-primary group-hover:text-primary transition-colors">2</div>
<div className="text-center lg:text-left">
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Přiřazení klientům</h3>
<p className="text-sm text-secondary">Rozdělte nakoupené licence konkrétním koncovým zákazníkům.</p>
</div>
</div>

<div className="bg-white group">
<div className="w-12 h-12 rounded-lg bg-white border border-border text-secondary flex items-center justify-center text-lg font-bold mb-6 mx-auto lg:mx-0 shadow-sm ring-4 ring-white relative z-10 group-hover:border-primary group-hover:text-primary transition-colors">3</div>
<div className="text-center lg:text-left">
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Automatizace</h3>
<p className="text-sm text-secondary">Sáša pohlídá data expirací a automaticky připraví podklady k fakturaci.</p>
</div>
</div>

<div className="bg-white group">
<div className="w-12 h-12 rounded-lg bg-white border border-border text-secondary flex items-center justify-center text-lg font-bold mb-6 mx-auto lg:mx-0 shadow-sm ring-4 ring-white relative z-10 group-hover:border-primary group-hover:text-primary transition-colors">4</div>
<div className="text-center lg:text-left">
<h3 className="font-heading text-lg font-semibold text-primary mb-2">Přehled a zisk</h3>
<p className="text-sm text-secondary">Sledujte ziskovost jednotlivých kontraktů v reálném čase.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="features">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid gap-8">
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h3 className="font-heading text-xl font-semibold text-primary mb-2">Centrální databáze</h3>
<p className="text-secondary leading-relaxed">Jediný zdroj pravdy pro všechny vaše licence. Už žádné dohledávání verzí v e-mailových schránkách.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
<span className="iconify" data-icon="lucide:bell-ring" data-width="24"></span>
</div>
<div>
<h3 className="font-heading text-xl font-semibold text-primary mb-2">Chytré notifikace</h3>
<p className="text-secondary leading-relaxed">Systém vás včas upozorní na blížící se expiraci. Nastavte si vlastní pravidla pro různé typy produktů.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
<span className="iconify" data-icon="lucide:pie-chart" data-width="24"></span>
</div>
<div>
<h3 className="font-heading text-xl font-semibold text-primary mb-2">Analytika ziskovosti</h3>
<p className="text-secondary leading-relaxed">Okamžitý přehled o tom, kteří klienti a produkty vám generují největší marži.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 bg-white rounded-2xl border border-border p-2 shadow-card lg:rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="bg-surface rounded-xl border border-border overflow-hidden">
<div className="p-4 border-b border-border flex justify-between items-center bg-white">
<span className="text-sm font-semibold text-primary">Detail klienta: Alfa s.r.o.</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Aktivní</span>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between p-4 bg-white border border-border rounded-lg">
<div className="flex items-center gap-3">
<div className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-xs">M</div>
<div>
<div className="text-sm font-semibold text-primary">Microsoft 365</div>
<div className="text-xs text-secondary">Business Standard</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-primary">45 x 12.50 €</div>
<div className="text-xs text-green-600 font-medium">Marže 18%</div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white border border-border rounded-lg">
<div className="flex items-center gap-3">
<div className="bg-red-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-xs">A</div>
<div>
<div className="text-sm font-semibold text-primary">Adobe CC</div>
<div className="text-xs text-secondary">All Apps</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-primary">5 x 54.99 €</div>
<div className="text-xs text-green-600 font-medium">Marže 12%</div>
</div>
</div>
<div className="h-16 bg-gradient-to-t from-surface to-transparent w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-t border-border" id="reference">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="font-heading text-3xl font-semibold text-primary mb-4 tracking-tight">Co říkají naši klienti</h2>
<p className="text-lg text-secondary">Přidejte se k firmám, které mají své licence pod kontrolou.</p>
</div>
<div className="flex gap-2">
<button aria-label="Previous" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface text-secondary transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button aria-label="Next" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface text-secondary transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 hide-scrollbar max-w-[1400px] mx-auto">

<div className="snap-center shrink-0 w-[350px] md:w-[400px] bg-surface p-8 rounded-xl border border-border">
<div className="flex gap-1 text-brand mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-primary font-medium text-lg mb-6 leading-relaxed">
                    "Konečně máme pořádek v datech expirací. Sáša nám ušetřil desítky hodin měsíčně, které jsme dříve trávili ruční kontrolou Excelů."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">JK</div>
<div>
<div className="font-semibold text-primary text-sm">Jan Novák</div>
<div className="text-xs text-secondary">CEO, IT Solutions s.r.o.</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[400px] bg-surface p-8 rounded-xl border border-border">
<div className="flex gap-1 text-brand mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-primary font-medium text-lg mb-6 leading-relaxed">
                    "Díky Sáše jsme odhalili licence, které jsme klientům zapomněli fakturovat. Návratnost investice byla prakticky okamžitá."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">PS</div>
<div>
<div className="font-semibold text-primary text-sm">Petr Svoboda</div>
<div className="text-xs text-secondary">Obchodní ředitel, TechPartner</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[400px] bg-surface p-8 rounded-xl border border-border">
<div className="flex gap-1 text-brand mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-primary font-medium text-lg mb-6 leading-relaxed">
                    "Jednoduché, přehledné a funkční. Přesně to, co MSP firma potřebuje pro správu stovek tenantů Microsoft 365."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">MD</div>
<div>
<div className="font-semibold text-primary text-sm">Martin Dvořák</div>
<div className="text-xs text-secondary">Senior Admin, CloudServices</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[400px] bg-surface p-8 rounded-xl border border-border">
<div className="flex gap-1 text-brand mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-primary font-medium text-lg mb-6 leading-relaxed">
                    "Podpora reaguje bleskově a systém se neustále vylepšuje. Pro nás jako menšího distributora je to klíčový nástroj."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">LK</div>
<div>
<div className="font-semibold text-primary text-sm">Lenka Králová</div>
<div className="text-xs text-secondary">Operations Manager, SoftTeam</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 tracking-tight">Připraveni zefektivnit váš reselling?</h2>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-normal">
                Vyzkoušejte Sášu zdarma na 14 dní. Žádné závazky, žádná kreditní karta předem.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg shadow-brand/20">
                    Vyzkoušet zdarma
                </button>
<button className="bg-transparent border border-slate-700 hover:bg-white/5 text-white px-8 py-4 rounded-md text-lg font-medium transition-all">
                    Kontaktovat obchod
                </button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-border">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-heading font-bold tracking-tight text-primary mb-4 block" href="#">Sáša.</a>
<p className="text-sm text-secondary max-w-xs">
                        Platforma pro moderní správu softwarových licencí a B2B distribuci.
                    </p>
</div>
<div>
<h4 className="font-semibold text-primary mb-4 text-sm">Produkt</h4>
<ul className="space-y-3 text-sm text-secondary">
<li><a className="hover:text-brand transition-colors" href="#">Funkce</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Integrace</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Ceník</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Roadmapa</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-primary mb-4 text-sm">Společnost</h4>
<ul className="space-y-3 text-sm text-secondary">
<li><a className="hover:text-brand transition-colors" href="#">O nás</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Kariéra</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-primary mb-4 text-sm">Právní</h4>
<ul className="space-y-3 text-sm text-secondary">
<li><a className="hover:text-brand transition-colors" href="#">Ochrana soukromí</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Obchodní podmínky</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-muted">© 2024 Sáša Platform s.r.o. Všechna práva vyhrazena.</p>
<div className="flex gap-6">
<a className="text-muted hover:text-primary transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-muted hover:text-primary transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
