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



        document.addEventListener('DOMContentLoaded', () => {
            const sliderCustomers = document.getElementById('sliderCustomers');
            const sliderRate = document.getElementById('sliderRate');
            
            const valCustomers = document.getElementById('valCustomers');
            const valRate = document.getElementById('valRate');
            
            const outTokens = document.getElementById('outTokens');
            const outCash = document.getElementById('outCash');
            const outRoi = document.getElementById('outRoi');

            const tokenRewardPerCustomer = 25;
            const initialInvestment = 10000;

            function calculate() {
                const customers = parseInt(sliderCustomers.value);
                const rate = parseFloat(sliderRate.value);

                valCustomers.textContent = customers;
                valRate.textContent = rate.toFixed(2) + ' €';

                const monthlyTokens = customers * tokenRewardPerCustomer;
                const monthlyCash = monthlyTokens * rate;
                
                outTokens.textContent = monthlyTokens.toLocaleString('de-DE') + ' RT';
                outCash.textContent = monthlyCash.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

                if (monthlyCash > 0) {
                    const monthsToRoi = initialInvestment / monthlyCash;
                    outRoi.textContent = `Abbezahlt in ${monthsToRoi.toFixed(1)} Monaten`;
                } else {
                    outRoi.textContent = '-';
                }
            }

            sliderCustomers.addEventListener('input', calculate);
            sliderRate.addEventListener('input', calculate);
            
            // Init
            calculate();
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
      

<nav className="sticky top-0 z-50 bg-[#A1702B]/90 backdrop-blur-md border-b border-black/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-2xl text-black" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-xl tracking-tighter text-black uppercase">rene.</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-black/80 hover:text-black transition-colors" href="#framework">Framework</a>
<a className="text-sm font-medium text-black/80 hover:text-black transition-colors" href="#economy">Ökosystem</a>
<a className="text-sm font-medium text-black/80 hover:text-black transition-colors" href="#investors">Modul-Paten</a>
<a className="text-sm font-medium text-black/80 hover:text-black transition-colors" href="#dashboard">Live-Cockpit</a>
</div>
<div>
<button className="bg-black text-[#A1702B] px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm">
                        Console Login
                    </button>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black mb-8">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
            System Status: Healthy · Token Kurs: 1.12 €
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black max-w-4xl leading-tight mb-6">
            Das Betriebssystem für faire Software.
        </h1>
<p className="text-lg md:text-xl text-black/80 max-w-2xl font-medium mb-10">
            Ein knotenbasiertes Framework, das durch eine selbstregulierende Token-Ökonomie angetrieben wird. Baue Applikationen, investiere in Module und verdiene an einem Ökosystem, das Transparenz über Profit stellt.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-black text-[#A1702B] px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-md" href="#framework">
                Framework entdecken
            </a>
<a className="bg-white/20 text-black border border-black/20 px-6 py-3 rounded-md text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm" href="#investors">
                Investor werden
            </a>
</div>
</main>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="framework">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-4">Der Rene Tree</h2>
<p className="text-black/80 font-medium max-w-3xl">
                Alles beginnt mit dem Knoten <code>/</code>. Definiere tiefe Objekte, vergebe Rechte und erstelle verschiedene Sichten (Views) auf deine Daten. Von der einfachen Visitenkarte bis zum komplexen ERP.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card rounded-xl p-6">
<div className="w-10 h-10 rounded-lg bg-[#A1702B]/20 flex items-center justify-center mb-4 text-[#A1702B]">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Knoten &amp; Objekte</h3>
<p className="text-sm text-gray-600">Lege Knotenpunkte an (z.B. "products"). Jedes Objekt im Baum kann einzeln lizenziert und verwaltet werden.</p>
</div>
<div className="glass-card rounded-xl p-6">
<div className="w-10 h-10 rounded-lg bg-[#A1702B]/20 flex items-center justify-center mb-4 text-[#A1702B]">
<iconify-icon className="text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Flexible Views</h3>
<p className="text-sm text-gray-600">Definiere Ansichten für deine Daten: Tree-Views für Admins, Marketing-Views für das Web, Specs für Techniker.</p>
</div>
<div className="glass-card rounded-xl p-6">
<div className="w-10 h-10 rounded-lg bg-[#A1702B]/20 flex items-center justify-center mb-4 text-[#A1702B]">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Modulares Wachstum</h3>
<p className="text-sm text-gray-600">Fehlt eine Funktion? Erstelle einen Task. Er wandert in die Queue und wird als neues Modul für alle verfügbar gemacht.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="economy">
<div className="glass-card rounded-2xl p-8 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-4">Die Fairness-Kurve</h2>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Alle Preise in rene sind in <strong>RT (Rene-Token)</strong> angegeben. Der Kurs ist variabel und reagiert auf die Auslastung des Systems. Wenn die Entwicklungs-Queue voll ist, steigt der Token-Preis, um Ressourcen zuzukaufen. Arbeiten wir effizient und die Queue sinkt, fällt der Preis. So garantieren wir faire Kosten für Nutzer und eine gesunde Infrastruktur.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-green-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">Automatisches Quotieren von Tasks in Token.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-green-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">Preise sinken bei hoher Systemeffizienz.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-green-600 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700">Keine Profitmaximierung, sondern Systemerhaltung.</span>
</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold tracking-tight">Rene-System-Barometer</h3>
<span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live
                        </span>
</div>
<div className="relative py-8">

<div className="flex items-center justify-between gap-4">

<div className="flex-1">
<div className="flex justify-between text-xs text-gray-500 mb-2">
<span>Wenig Tasks</span>
<span>Queue Voll</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden flex justify-end">
<div className="h-full bg-orange-400 w-[70%] rounded-full"></div>
</div>
</div>

<div className="flex flex-col items-center justify-center min-w-[80px]">
<span className="text-2xl font-semibold tracking-tight text-black">1.12€</span>
<span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">1 RT</span>
</div>

<div className="flex-1">
<div className="flex justify-between text-xs text-gray-500 mb-2">
<span>Überlastet</span>
<span>Viel Power</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[40%] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="mt-4 p-3 bg-orange-50 rounded-md border border-orange-100 text-xs text-orange-800">
<strong>Aktueller Status:</strong> Der Kurs steigt leicht, da die Nachfrage nach neuen Modulen unsere aktuelle Kapazität übersteigt. Investments helfen jetzt, Entwickler einzustellen und den Kurs zu stabilisieren.
                    </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="investors">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-4">Werde Modul-Pate</h2>
<p className="text-black/80 font-medium max-w-2xl mx-auto text-sm">
                Finanziere die Entwicklung fehlender Module. Sobald dein Modul profitabel ist, verdienst du an jedem neuen Nutzer im Rene-Netzwerk mit. Ein sich selbst tragendes Ökosystem.
            </p>
</div>

<div className="glass-card rounded-xl p-6 mb-12">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold tracking-tight text-black">Modul-Wunschliste &amp; Funding</h3>
<a className="text-xs font-medium text-[#A1702B] hover:text-black" href="#">Alle ansehen →</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-gray-200 text-gray-500 font-medium">
<th className="pb-3 font-medium">Modul-Konzept</th>
<th className="pb-3 font-medium">Benötigte Token</th>
<th className="pb-3 font-medium">Interessenten</th>
<th className="pb-3 font-medium text-right">Aktion</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-gray-800">
<tr>
<td className="py-4">
<div className="font-medium text-black">Gewichtsverwaltung Pro</div>
<div className="text-xs text-gray-500">Tracking, Charts, Diät-Pläne</div>
</td>
<td className="py-4">4.500 RT</td>
<td className="py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-gray-200 rounded-full"><div className="w-3/4 h-full bg-[#A1702B] rounded-full"></div></div>
<span className="text-xs text-gray-500">24 Firmen</span>
</div>
</td>
<td className="py-4 text-right flex gap-2 justify-end">
<button className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium hover:bg-gray-50">Interesse zeigen</button>
<button className="px-3 py-1.5 bg-black text-[#A1702B] rounded text-xs font-medium hover:bg-gray-800">Finanzieren</button>
</td>
</tr>
<tr>
<td className="py-4">
<div className="font-medium text-black">DATEV Export</div>
<div className="text-xs text-gray-500">Automatischer Buchhaltungs-Sync</div>
</td>
<td className="py-4">12.000 RT</td>
<td className="py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-gray-200 rounded-full"><div className="w-1/4 h-full bg-[#A1702B] rounded-full"></div></div>
<span className="text-xs text-gray-500">8 Firmen</span>
</div>
</td>
<td className="py-4 text-right flex gap-2 justify-end">
<button className="px-3 py-1.5 border border-gray-300 rounded text-xs font-medium hover:bg-gray-50">Interesse zeigen</button>
<button className="px-3 py-1.5 bg-black text-[#A1702B] rounded text-xs font-medium hover:bg-gray-800">Finanzieren</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="glass-card rounded-2xl p-8 border-l-4 border-l-[#A1702B]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Modul-Investment Szenario</h3>
<p className="text-sm text-gray-600 mb-6">
                        Beispiel: Du finanzierst das <strong>"Rene-Shop Pro"</strong> Modul mit 10.000 Token. Die Lizenzgebühr für Nutzer beträgt 50 Token/Monat. 50% (25 Token) fließen als Belohnung an dich zurück.
                    </p>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<label className="font-medium text-gray-700">Kunden, die das Modul nutzen</label>
<span className="font-semibold text-black" id="valCustomers">100</span>
</div>
<input id="sliderCustomers" max="500" min="10" step="10" type="range" value="100"/>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<label className="font-medium text-gray-700">Aktueller Token-Kurs (€)</label>
<span className="font-semibold text-black" id="valRate">1.20 €</span>
</div>
<input id="sliderRate" max="2.5" min="0.5" step="0.05" type="range" value="1.20"/>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-center">
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-gray-200 pb-3">
<span className="text-sm text-gray-500">Monatliche Einnahmen (Token)</span>
<span className="font-semibold text-black" id="outTokens">2.500 RT</span>
</div>
<div className="flex justify-between items-center border-b border-gray-200 pb-3">
<span className="text-sm text-gray-500">Monatlicher Cashflow (Euro)</span>
<span className="font-semibold text-green-600" id="outCash">3.000,00 €</span>
</div>
<div className="flex justify-between items-center pt-2">
<span className="text-sm font-medium text-gray-700">Return on Investment (ROI)</span>
<span className="text-sm font-medium bg-[#A1702B]/10 text-[#A1702B] px-2 py-1 rounded" id="outRoi">Abbezahlt in 3.3 Monaten</span>
</div>
</div>
<p className="text-[10px] text-gray-400 mt-6 text-center">
                        Die Auszahlung erfolgt zum Tageskurs und ist abhängig von der aktuellen System-Liquidität.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="dashboard">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-2">Investor Live-Cockpit</h2>
<p className="text-sm text-black/80 font-medium">Transparenz in Echtzeit: Überwache die Performance deiner finanzierten Module.</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

<div className="w-full lg:w-1/3 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
<div className="mb-8">
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Dein Wallet</h3>
<div className="text-3xl font-semibold tracking-tight text-black mb-1">1.250 <span className="text-lg text-gray-400">RT</span></div>
<div className="text-sm text-gray-500 mb-4">≈ 1.437,50 € (Kurs: 1.15 €)</div>
<div className="flex items-center gap-2 mb-6 p-2 bg-green-50 border border-green-100 rounded text-xs text-green-700">
<span className="w-2 h-2 rounded-full bg-green-500"></span> System-Liquidität: Hoch
                    </div>
<button className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                        Auszahlung beantragen
                    </button>
</div>
<div className="flex-grow">
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Vertrags-DNA</h3>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="text-xs font-medium text-[#A1702B] mb-1">Pauschal-Vorschuss</div>
<div className="text-sm text-black font-medium mb-2">Modul: Rene-Shop Pro</div>
<p className="text-xs text-gray-500 leading-relaxed">Du hast die Entwicklung mit 10.000 Token einmalig vorfinanziert. Du erhältst 50% der monatlichen Lizenzgebühren dieses Moduls.</p>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 p-6 md:p-8 bg-white">

<div className="mb-10">
<h3 className="text-base font-semibold tracking-tight text-black mb-6">Die "Nulllinie" (Cashflow Historie)</h3>
<div className="h-48 relative chart-grid border-b border-l border-gray-200 flex items-end px-4 gap-2 sm:gap-4 pb-0 pt-8">

<div className="absolute w-full border-t border-dashed border-gray-400 bottom-16 left-0 flex items-center">
<span className="absolute -left-12 text-[10px] text-gray-400 font-medium">0 RT</span>
</div>

<div className="flex flex-col items-center flex-1 group">
<div className="h-16 w-full max-w-[40px] bg-red-400 rounded-t-sm relative top-16 group-hover:bg-red-500 transition-colors"></div>
<span className="text-[10px] text-gray-400 mt-2 absolute -bottom-6">Jan</span>
</div>

<div className="flex flex-col items-center flex-1 group">
<div className="h-12 w-full max-w-[40px] bg-red-400 rounded-t-sm relative top-16 group-hover:bg-red-500 transition-colors"></div>
<span className="text-[10px] text-gray-400 mt-2 absolute -bottom-6">Feb</span>
</div>

<div className="flex flex-col items-center flex-1 group relative bottom-16">
<div className="h-8 w-full max-w-[40px] bg-green-400 rounded-t-sm group-hover:bg-green-500 transition-colors"></div>
<span className="text-[10px] text-gray-400 mt-2 absolute -bottom-6">Mär</span>
</div>

<div className="flex flex-col items-center flex-1 group relative bottom-16">
<div className="h-16 w-full max-w-[40px] bg-green-400 rounded-t-sm group-hover:bg-green-500 transition-colors"></div>
<span className="text-[10px] text-gray-400 mt-2 absolute -bottom-6">Apr</span>
</div>

<div className="flex flex-col items-center flex-1 group relative bottom-16">
<div className="h-24 w-full max-w-[40px] bg-green-400 rounded-t-sm group-hover:bg-green-500 transition-colors"></div>
<span className="text-[10px] text-gray-400 mt-2 absolute -bottom-6">Mai</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-semibold tracking-tight text-black mb-4">Transparenz-Liste (Mieter)</h3>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50">
<tr className="text-gray-500 font-medium">
<th className="px-4 py-3 font-medium">Kunde / Domain</th>
<th className="px-4 py-3 font-medium">Seit</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Anteil (Token)</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-gray-700">
<tr>
<td className="px-4 py-3 font-medium">bio-hofladen.at</td>
<td className="px-4 py-3 text-gray-500 text-xs">Jan 2024</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded uppercase tracking-wide">Aktiv</span></td>
<td className="px-4 py-3 text-right">25 RT</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium">sport-verein.com</td>
<td className="px-4 py-3 text-gray-500 text-xs">Mär 2024</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded uppercase tracking-wide">Aktiv</span></td>
<td className="px-4 py-3 text-right">25 RT</td>
</tr>
<tr>
<td className="px-4 py-3 font-medium">diät-coach-mueller.de</td>
<td className="px-4 py-3 text-gray-500 text-xs">Jun 2024</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded uppercase tracking-wide">Neu</span></td>
<td className="px-4 py-3 text-right">25 RT</td>
</tr>
<tr className="bg-gray-50 font-medium text-black">
<td className="px-4 py-3 text-right text-xs" colspan="3">Dein monatlicher Verdienst:</td>
<td className="px-4 py-3 text-right text-[#A1702B]">75 RT</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-4">Investoren Abos</h2>
<p className="text-sm text-black/80 font-medium max-w-2xl mx-auto">Unterstütze die Infrastruktur monatlich und profitiere von speziellen Konditionen gegenüber dem Spot-Preis.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight mb-2">Der Supporter</h3>
<p className="text-xs text-gray-500 mb-6">Für Privatpersonen, die an faire Software glauben.</p>
<div className="text-3xl font-semibold mb-6">ab 50€ <span className="text-sm font-normal text-gray-500">/mtl.</span></div>
<ul className="space-y-3 mb-8 flex-grow text-sm text-gray-700">
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Token im Wert des Abos</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> + 10% Bonus-Token</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Nennung auf der Bilanz-Website</li>
</ul>
<button className="w-full py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Unterstützen</button>
</div>

<div className="bg-black text-white rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#A1702B] text-black text-[10px] font-semibold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Beliebt</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Der Visionär</h3>
<p className="text-xs text-gray-400 mb-6">Für KMUs und Entwickler mit eigenen Ideen.</p>
<div className="text-3xl font-semibold mb-6">ab 250€ <span className="text-sm font-normal text-gray-400">/mtl.</span></div>
<ul className="space-y-3 mb-8 flex-grow text-sm text-gray-300">
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Alles aus Supporter</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Stimmrechte für die Roadmap</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Gratis Doku für eigene Mini-Module</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Garantierter Token-Kurs-Deckel</li>
</ul>
<button className="w-full py-2 bg-[#A1702B] text-black rounded-md text-sm font-medium hover:bg-[#8e6225] transition-colors">Visionär werden</button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight mb-2">Der Partner</h3>
<p className="text-xs text-gray-500 mb-6">Für Firmen, die ihr Geschäft auf rene aufbauen.</p>
<div className="text-3xl font-semibold mb-6">Custom</div>
<ul className="space-y-3 mb-8 flex-grow text-sm text-gray-700">
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Eigene Modul-Entwicklung</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Beteiligung an Einnahmen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Priority Support (Fast-Lane)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Open Books (Betriebskennzahlen)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A1702B]" icon="solar:check-read-linear"></iconify-icon> Co-Funded Badge für deine Website</li>
</ul>
<button className="w-full py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Kontakt aufnehmen</button>
</div>
</div>
</section>

<footer className="border-t border-black/10 mt-12 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-black" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter text-black uppercase">rene.</span>
</div>
<div className="text-xs text-black/70 font-medium">
                © 2024 rene.space — Supporting fair software ecosystems.
            </div>
<div className="flex gap-4 text-xs font-medium text-black/70">
<a className="hover:text-black" href="#">Bilanz ansehen</a>
<a className="hover:text-black" href="#">Dokumentation</a>
<a className="hover:text-black" href="#">Impressum</a>
</div>
</div>
</footer>



    </>
  );
}
