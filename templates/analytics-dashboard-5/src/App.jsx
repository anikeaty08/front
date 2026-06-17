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
      

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col justify-between flex-shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-200">
<span className="text-xl font-semibold tracking-tight text-zinc-900">Zlatá Koruna</span>
<span className="ml-2 text-[10px] font-medium text-orange-600 uppercase tracking-widest bg-orange-50 px-1.5 py-0.5 rounded">Portál</span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium bg-zinc-50 text-zinc-900 rounded-xl" href="#">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
                    Přehled výkonu
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
                    Produkty
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                    Publikace &amp; PR
                    <span className="ml-auto bg-orange-100 text-orange-700 py-0.5 px-2 rounded-full text-xs font-medium">Novinka</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                    Analytika
                </a>
</nav>

<div className="px-4 mt-2">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors group" href="#">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                    Podpora viditelnosti
                    <iconify-icon className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="p-4 border-t border-zinc-200">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 rounded-xl transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">
                    ČS
                </div>
<div className="flex-1 truncate">
<p className="font-medium text-zinc-900 truncate">Česká Spořitelna</p>
<p className="text-xs text-zinc-500 truncate">Firemní účet</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:settings-linear" width="18"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md border-b border-zinc-200 z-10 sticky top-0">
<div>
<h1 className="text-lg font-medium tracking-tight text-zinc-900">Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

<div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
<div className="pl-2">
<div className="flex items-center gap-3 mb-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-600">
<span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
</span>
                                Uzávěrka hodnocení za 14 dní
                            </span>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mt-2">
                            Vaše aktuální pozice v hodnocení: <span className="text-orange-500 font-semibold">#4</span>
</h2>
<p className="text-base text-zinc-500 mt-2 max-w-xl">
                            Do TOP 3 zbývá malý rozdíl v zapojení veřejnosti. Zvyšte svou aktivitu a zajistěte si prestižní umístění.
                        </p>
</div>
<div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
<button className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors">
                            Aktivovat publikum
                        </button>
<button className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
                            Zvýšit viditelnost produktu
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500">Zobrazení profilu</span>
</div>
<div>
<span className="text-3xl font-medium tracking-tight text-zinc-900">12 405</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500">Aktivní produkty</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-900">4</span>
<span className="text-sm text-zinc-400 font-medium">/ 10</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100">
<iconify-icon className="text-orange-600" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Zapojení veřejnosti</span>
</div>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-900">842</span>
<span className="text-sm text-zinc-500">interakcí</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
<iconify-icon className="text-emerald-600" icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500">Trend zapojení</span>
</div>
<div>
<span className="text-3xl font-medium tracking-tight text-emerald-600">+56</span>
<span className="text-sm text-zinc-500 ml-1">dnes</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

<div className="lg:col-span-8 space-y-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Spravované produkty</h3>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-200 bg-zinc-50/50">
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Název produktu</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Kategorie</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Zobrazení</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<p className="text-sm font-medium text-zinc-900">Chytrý firemní účet</p>
<div className="flex gap-2 mt-2">
<button className="text-[11px] font-medium text-orange-600 hover:text-orange-700 bg-orange-50 px-2 py-1 rounded border border-orange-100 transition-colors">
                                                        Publikovat aktualitu
                                                    </button>
</div>
</td>
<td className="px-6 py-4 align-top">
<span className="text-sm text-zinc-600">Firemní bankovnictví</span>
</td>
<td className="px-6 py-4 align-top">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                    Schváleno
                                                </span>
</td>
<td className="px-6 py-4 align-top text-right">
<span className="text-sm font-medium text-zinc-900">3 240</span>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<p className="text-sm font-medium text-zinc-900">Zelená hypotéka Plus</p>
<div className="flex gap-2 mt-2">
<button className="text-[11px] font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-100 px-2 py-1 rounded border border-zinc-200 transition-colors">
                                                        Zlepšit prezentaci
                                                    </button>
</div>
</td>
<td className="px-6 py-4 align-top">
<span className="text-sm text-zinc-600">Hypotéky</span>
</td>
<td className="px-6 py-4 align-top">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                    Schváleno
                                                </span>
</td>
<td className="px-6 py-4 align-top text-right">
<span className="text-sm font-medium text-zinc-900">1 890</span>
</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-6 py-4">
<p className="text-sm font-medium text-zinc-900">ESG Firemní úvěr</p>
</td>
<td className="px-6 py-4 align-top">
<span className="text-sm text-zinc-600">Úvěry</span>
</td>
<td className="px-6 py-4 align-top">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                                    Ve schvalování
                                                </span>
</td>
<td className="px-6 py-4 align-top text-right">
<span className="text-sm font-medium text-zinc-400">—</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-zinc-100/50 border border-zinc-200 rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:lightbulb-linear" width="22"></iconify-icon>
</div>
<div className="space-y-3 pt-1">
<h4 className="text-sm font-medium text-zinc-900">Jak fungují nejúspěšnější produkty?</h4>
<ul className="space-y-2 text-sm text-zinc-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Firmy v TOP 3 aktivně komunikují a pracují se svou komunitou.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Pravidelné publikování zvyšuje zapojení veřejnosti až o 40 %.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Kvalitní a transparentní prezentace produktu má přímý dopad na jeho úspěch.</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 relative overflow-hidden">
<div className="flex items-center gap-2 mb-5">
<iconify-icon className="text-zinc-400" icon="solar:radar-linear" width="20"></iconify-icon>
<h3 className="text-base font-medium text-zinc-900 tracking-tight">Aktivita v kategorii</h3>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed"><span className="font-medium text-zinc-900">3 konkurenti</span> dnes publikovali aktualizace.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed">Průměrné zapojení TOP 3 vzrostlo o <span className="font-medium text-zinc-900">12 % tento týden</span>.</p>
</div>
<div className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-relaxed">Firmy, které komunikují aktivně, mají výrazně vyšší dosah a konverze.</p>
</div>
</div>
<button className="w-full text-center text-sm font-medium text-zinc-900 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl py-2.5 transition-colors">
                                Publikovat aktualitu
                            </button>
</div>

<div className="bg-white border border-orange-200 rounded-2xl shadow-sm p-6 relative">

<div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent rounded-2xl pointer-events-none"></div>
<div className="relative">
<h3 className="text-base font-medium text-zinc-900 mb-1 tracking-tight">Zvýšení viditelnosti</h3>
<p className="text-sm text-zinc-500 mb-5">Podpora komunikace směrem k veřejnosti a mediální distribuce.</p>
<div className="space-y-3">

<label className="block p-4 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-orange-50/30 transition-all bg-white group">
<div className="flex gap-3">
<div className="pt-0.5 shrink-0">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-orange-400 flex items-center justify-center bg-white"></div>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Zvýraznění produktu</p>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">Zvyšte šanci, že si váš produkt veřejnost všimne. Lepší pozice a viditelné označení.</p>
</div>
</div>
</label>

<label className="block p-4 border-2 border-orange-500 rounded-xl cursor-pointer bg-orange-50/20 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-bl-lg">Doporučeno</div>
<div className="flex gap-3">
<div className="pt-0.5 shrink-0">
<div className="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
</div>
<div className="pr-6">
<p className="text-sm font-medium text-zinc-900">Komunikační balíček</p>
<p className="text-xs text-zinc-600 mt-1 leading-relaxed">Aktivujte svou klientskou bázi a rozšiřte dosah. Zahrnuje sociální sítě a newsletter.</p>
</div>
</div>
</label>

<label className="block p-4 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-300 hover:bg-orange-50/30 transition-all bg-white group">
<div className="flex gap-3">
<div className="pt-0.5 shrink-0">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-orange-400 flex items-center justify-center bg-white"></div>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">PR &amp; Mediální balíček</p>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">Získejte maximální mediální zásah a posilte reputaci. Obsahuje PR článek a distribuci.</p>
</div>
</div>
</label>
</div>
<button className="w-full mt-5 bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
                                    Zobrazit možnosti podpory
                                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
