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



// Simple Single Page Router
function navigateTo(pageId) {
// Hide all pages
document.querySelectorAll('.page-view').forEach(el => {
el.classList.add('hidden');
});
// Show requested page
const target = document.getElementById(pageId);
if(target) {
target.classList.remove('hidden');
window.scrollTo(0,0);
}
}
// Simuleer login
function handleLogin(e) {
e.preventDefault();
const btn = e.target.querySelector('button');
const originalText = btn.innerHTML;
btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin" width="18"></iconify-icon>';
setTimeout(() => {
navigateTo('page-dashboard');
btn.innerHTML = originalText;
}, 800);
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
      

<div className="page-view" id="page-home">

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('page-home')">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-zinc-900">modemanagement</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#features">Functies</a>
<a className="hover:text-zinc-900 transition-colors" href="#benefits">Voordelen</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden sm:block" onclick="navigateTo('page-login')">
                            Inloggen
                        </button>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                            Plan kennismaking
                        </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0 grid-bg opacity-40 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="uppercase text-xs font-medium text-zinc-600 tracking-wide">Nu beschikbaar voor najaar 2025</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Grip op je mode inkoop <br className="hidden md:block"/> met één krachtig dashboard.
                </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Vergeet complexe software. Wij helpen MKB ondernemers hun marges te beschermen en voorraad te optimaliseren met een bewezen strategie.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="sm:w-auto shadow-zinc-500/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 font-medium text-white bg-zinc-900 w-full rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-lg" href="#contact">
                        Maak belafspraak
                        <iconify-icon icon="lucide:phone-call" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-700 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2" onclick="navigateTo('page-login')">
<iconify-icon icon="lucide:monitor-play" strokeWidth="1.5" width="16"></iconify-icon>
                        Bekijk demo
                    </button>
</div>
</div>

<div className="relative mt-20 max-w-6xl mx-auto px-4">
<div className="relative rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow" onclick="navigateTo('page-dashboard')">

<div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<div className="text-xs text-zinc-400 font-medium">Klik om dashboard te openen</div>
</div>

<div className="overflow-x-auto pt-6 pr-6 pb-6 pl-6 pointer-events-none">
<div className="min-w-[800px]">
<div className="grid grid-cols-12 gap-4 mb-4">
<div className="col-span-3 h-24 bg-zinc-50 rounded-lg border border-zinc-100 p-4 flex flex-col justify-between">
<span className="text-xs text-zinc-500 font-medium">Totaal Budget</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">€ 142.500</span>
</div>
<div className="col-span-3 h-24 bg-zinc-50 rounded-lg border border-zinc-100 p-4 flex flex-col justify-between">
<span className="text-xs text-zinc-500 font-medium">Gerealiseerd</span>
<span className="text-2xl font-semibold tracking-tight text-emerald-600">€ 88.200</span>
</div>
<div className="col-span-3 flex flex-col bg-zinc-50 h-24 border-zinc-100 border rounded-lg pt-4 pr-4 pb-4 pl-4 justify-between">
<span className="text-xs text-zinc-500 font-medium">Openstaand (OTB)</span>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">€ 54.300</span>
</div>
<div className="col-span-3 h-24 bg-zinc-50 rounded-lg border border-zinc-100 p-4 flex flex-col justify-between">
<span className="text-xs text-zinc-500 font-medium">Marge Doelstelling</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">2.8</span>
<span className="text-xs text-emerald-600 mb-1 flex items-center">+0.2 <iconify-icon icon="lucide:trending-up" width="12"></iconify-icon></span>
</div>
</div>
</div>

<div className="border border-zinc-200 rounded-lg overflow-hidden text-sm">
<div className="bg-zinc-50 border-b border-zinc-200 p-3 grid grid-cols-6 font-medium text-zinc-500">
<div className="col-span-2">Merk / Leverancier</div>
<div>Seizoen</div>
<div>Budget</div>
<div>Ingekocht</div>
<div>Ruimte</div>
</div>
<div className="p-3 grid grid-cols-6 items-center border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="col-span-2 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">S</div>
<span className="font-medium text-zinc-800">Studio Anneloes</span>
</div>
<div className="text-zinc-600">SS24</div>
<div className="font-mono text-zinc-600">€ 25.000</div>
<div className="font-mono text-zinc-600">€ 22.100</div>
<div className="font-mono text-emerald-600 font-medium">€ 2.900</div>
</div>
<div className="p-3 grid grid-cols-6 items-center border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="col-span-2 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">F</div>
<span className="font-medium text-zinc-800">Fabienne Chapot</span>
</div>
<div className="text-zinc-600">SS24</div>
<div className="font-mono text-zinc-600">€ 18.500</div>
<div className="font-mono text-zinc-600">€ 18.500</div>
<div className="font-mono text-zinc-400">€ 0</div>
</div>
<div className="p-3 grid grid-cols-6 items-center hover:bg-zinc-50 transition-colors">
<div className="col-span-2 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">P</div>
<span className="font-medium text-zinc-800">PME Legend</span>
</div>
<div className="text-zinc-600">SS24</div>
<div className="font-mono text-zinc-600">€ 32.000</div>
<div className="font-mono text-zinc-600">€ 15.200</div>
<div className="font-mono text-emerald-600 font-medium">€ 16.800</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -z-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-zinc-200 to-indigo-100 opacity-50 blur-[80px]"></div>
</div>
</section>

<section className="py-12 border-y border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm font-medium text-zinc-400 mb-8">WIJ HELPEN MODE ONDERNEMERS OM TE GROEIEN</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-zinc-800"><iconify-icon className="text-zinc-900" icon="lucide:hexagon"></iconify-icon> MODESTORE</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-zinc-800"><iconify-icon className="text-zinc-900" icon="lucide:triangle"></iconify-icon> BOUTIQUE</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-zinc-800"><iconify-icon className="text-zinc-900" icon="lucide:circle-dashed"></iconify-icon> FASHION.INC</div>
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-zinc-800"><iconify-icon className="text-zinc-900" icon="lucide:square-stack"></iconify-icon> RETAILGROEP</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="features">
<div className="max-w-7xl mx-auto px-4">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Alles wat je nodig hebt voor professioneel inkoopbeheer.</h2>
<p className="text-zinc-500 leading-relaxed">Het inkoopplan is ontworpen om direct inzetbaar te zijn.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:pie-chart" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Budgettering &amp; OTB</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Bepaal vooraf exacte budgetten per merk en productgroep. Zie direct je Open-To-Buy ruimte.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Marge Optimalisatie</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Bereken automatisch de benodigde calculatie om je marge doelstellingen te behalen.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layers" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Merk Analyse</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Vergelijk prestaties per leverancier. Weet welk merk rendeert en welk merk afscheid van genomen moet worden.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:calendar-clock" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Levering Planning</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Spreid je inkoop over het seizoen voor een constante stroom aan nieuwe collecties en betere cashflow.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-spreadsheet" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Excel &amp; Google Sheets</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Werkt naadloos in Microsoft Excel en is eenvoudig te importeren in Google Sheets. Geen abonnementen.</p>
</div>

<div className="group p-8 bg-zinc-900 rounded-2xl border border-zinc-900 shadow-sm hover:shadow-md transition-shadow text-white">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Persoonlijke Begeleiding</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Kom je er niet uit? Wij bieden ondersteuning bij de implementatie van het sheet in jouw bedrijf.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="benefits">
<div className="max-w-7xl mx-auto px-4">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Waarom kiezen voor gestructureerd inkoopbeheer?</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-red-500" icon="lucide:x-circle" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900">Zonder Inkoopplan</h4>
<p className="text-sm text-zinc-500 mt-1">Impulsieve inkoopbeslissingen, te hoge voorraden aan het eind van het seizoen en onduidelijke marges.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-zinc-900">Met Modemanagement</h4>
<p className="text-sm text-zinc-500 mt-1">Data-gedreven beslissingen, strakke budgetbewaking en een gezonde cashflow door geplande uitleveringen.</p>
</div>
</div>
</div>
<div className="mt-10 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<p className="italic text-zinc-600 text-sm">"Sinds we samenwerken is onze eindvoorraad met 15% gedaald terwijl de omzet steeg. Het geeft eindelijk rust."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center font-bold text-xs text-white">JL</div>
<span className="text-xs font-semibold text-zinc-900">Julia L. - Eigenaar Boutique Nova</span>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl shadow-xl p-8">
<div className="space-y-4">

<div className="flex items-end justify-between h-48 px-2 gap-2">
<div className="w-full bg-zinc-100 rounded-t-md h-[40%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
</div>
<div className="w-full bg-zinc-100 rounded-t-md h-[55%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
</div>
<div className="w-full bg-zinc-200 rounded-t-md h-[70%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Q3</div>
</div>
<div className="w-full bg-zinc-900 rounded-t-md h-[90%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded opacity-100 transition-opacity">Q4</div>
</div>
</div>
<div className="flex justify-between text-xs text-zinc-400 font-medium pt-2 border-t border-zinc-100">
<span>Marge ontwikkeling</span>
<span className="text-emerald-600">+24% Groei</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="contact">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] rounded-full bg-zinc-800/30 blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Samen kijken naar jouw inkoopproces?</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-12">Iedere winkel is uniek. Plan een vrijblijvend gesprek in om te zien wat Modemanagement voor jou kan betekenen.</p>
<div className="max-w-md mx-auto bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 shadow-2xl">
<div className="flex justify-between items-start mb-6">
<div className="text-left">
<h3 className="text-xl font-medium text-white">Strategiegesprek</h3>
<p className="text-sm text-zinc-400 mt-1">Telefonisch of via video call</p>
</div>
<div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
</div>
<hr className="border-zinc-700 mb-6"/>
<ul className="space-y-4 mb-8 text-left">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check"></iconify-icon>
                            Analyse van jouw huidige inkoopmethode
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check"></iconify-icon>
                            Demo van het dashboard
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 flex-shrink-0" icon="lucide:check"></iconify-icon>
                            Direct advies over budgettering
                        </li>
</ul>
<a className="block w-full py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-colors shadow-lg flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:calendar" width="18"></iconify-icon>
                        Plan belafspraak in
                    </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Modemanagement. Alle rechten voorbehouden.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>
</div>

<div className="page-view hidden min-h-screen flex items-center justify-center relative bg-zinc-50" id="page-login">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="absolute top-6 left-6 cursor-pointer z-20" onclick="navigateTo('page-home')">
<div className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
<span className="text-sm font-medium">Terug naar home</span>
</div>
</div>
<div className="w-full max-w-[400px] p-4 relative z-10">
<div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8">
<div className="flex items-center gap-2 justify-center mb-8">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-3" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-zinc-900">modemanagement</span>
</div>
<h2 className="text-xl font-semibold text-center mb-1 text-zinc-900">Welkom terug</h2>
<p className="text-sm text-zinc-500 text-center mb-6">Log in om je budgetten te beheren</p>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Email adres</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 bg-zinc-50 transition-all" required="" type="email" value="demo@mode.nl"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Wachtwoord</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 bg-zinc-50 transition-all" required="" type="password" value="password123"/>
</div>
<button className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm font-medium transition-colors flex justify-center items-center" type="submit">
                        Inloggen
                    </button>
</form>
<div className="mt-6 pt-6 border-t border-zinc-100 text-center">
<p className="text-xs text-zinc-500">Nog geen account? <a className="text-zinc-900 font-medium hover:underline" href="#" onclick="navigateTo('page-home')">Plan een demo</a></p>
</div>
</div>
</div>
</div>

<div className="page-view hidden h-screen flex overflow-hidden bg-white" id="page-dashboard">

<aside className="w-64 border-r border-zinc-200 bg-white flex flex-col hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigateTo('page-home')">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-3" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">modemanagement</span>
</div>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-1">
<div className="text-xs font-medium text-zinc-400 px-2 mb-2 uppercase tracking-wider">Overzicht</div>
<a className="sidebar-link active flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-900" href="#">
<iconify-icon icon="lucide:layout-dashboard" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50" href="#">
<iconify-icon icon="lucide:pie-chart" width="18"></iconify-icon>
                    Budgetten
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50" href="#">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
                    Orders
                </a>
<div className="text-xs font-medium text-zinc-400 px-2 mt-8 mb-2 uppercase tracking-wider">Instellingen</div>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50" href="#">
<iconify-icon icon="lucide:tags" width="18"></iconify-icon>
                    Merken
                </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
                    Leveranciers
                </a>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-xs">BN</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">Boutique Nova</p>
<p className="text-xs text-zinc-500 truncate">Pro Plan</p>
</div>
<button className="text-zinc-400 hover:text-zinc-900" onclick="navigateTo('page-home')">
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-zinc-50/50">

<div className="h-16 border-b border-zinc-200 bg-white flex items-center justify-between px-4 md:hidden">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:bar-chart-3" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">modemanagement</span>
</div>
<button onclick="navigateTo('page-home')">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>

<div className="p-4 md:p-8 overflow-y-auto h-full">
<header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Dashboard</h1>
<p className="text-sm text-zinc-500">Overzicht inkoopseizoen SS24</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 flex items-center gap-2">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
                            Februari 2024
                        </button>
<button className="px-3 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 flex items-center gap-2 shadow-sm">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                            Nieuwe order
                        </button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs font-medium mb-1">Totaal Budget</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">€ 142.500</div>
<div className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +12% vs vorig jaar
                        </div>
</div>
<div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs font-medium mb-1">Reeds besteed</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">€ 88.200</div>
<div className="text-xs text-zinc-400 mt-2">62% van totaal</div>
</div>
<div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs font-medium mb-1">Open-to-Buy (OTB)</div>
<div className="text-2xl font-semibold text-emerald-600 tracking-tight">€ 54.300</div>
<div className="text-xs text-zinc-400 mt-2">Beschikbaar budget</div>
</div>
<div className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs font-medium mb-1">Gemiddelde Marge</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">2.82</div>
<div className="text-xs text-emerald-600 mt-2 font-medium">Boven doelstelling (2.7)</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-zinc-200 flex justify-between items-center">
<h3 className="font-medium text-zinc-900">Merken Prestaties</h3>
<button className="text-zinc-400 hover:text-zinc-900">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 text-zinc-500 font-medium border-b border-zinc-200">
<tr>
<th className="px-4 py-3">Merk</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3 text-right">Budget</th>
<th className="px-4 py-3 text-right">Ingekocht</th>
<th className="px-4 py-3 text-right">Ruimte</th>
<th className="px-4 py-3 text-right">Marge</th>
<th className="px-4 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50 group">
<td className="px-4 py-3 font-medium text-zinc-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">S</div>
                                        Studio Anneloes
                                    </td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700">Compleet</span></td>
<td className="px-4 py-3 text-right text-zinc-600 font-mono">€ 25.000</td>
<td className="px-4 py-3 text-right text-zinc-900 font-mono">€ 22.100</td>
<td className="px-4 py-3 text-right text-emerald-600 font-mono font-medium">€ 2.900</td>
<td className="px-4 py-3 text-right text-zinc-600">2.9</td>
<td className="px-4 py-3 text-right"><iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="lucide:chevron-right"></iconify-icon></td>
</tr>
<tr className="hover:bg-zinc-50 group">
<td className="px-4 py-3 font-medium text-zinc-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">F</div>
                                        Fabienne Chapot
                                    </td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-700">Afgesloten</span></td>
<td className="px-4 py-3 text-right text-zinc-600 font-mono">€ 18.500</td>
<td className="px-4 py-3 text-right text-zinc-900 font-mono">€ 18.500</td>
<td className="px-4 py-3 text-right text-zinc-400 font-mono">€ 0</td>
<td className="px-4 py-3 text-right text-zinc-600">2.7</td>
<td className="px-4 py-3 text-right"><iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="lucide:chevron-right"></iconify-icon></td>
</tr>
<tr className="hover:bg-zinc-50 group">
<td className="px-4 py-3 font-medium text-zinc-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">P</div>
                                        PME Legend
                                    </td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">Open</span></td>
<td className="px-4 py-3 text-right text-zinc-600 font-mono">€ 32.000</td>
<td className="px-4 py-3 text-right text-zinc-900 font-mono">€ 15.200</td>
<td className="px-4 py-3 text-right text-emerald-600 font-mono font-medium">€ 16.800</td>
<td className="px-4 py-3 text-right text-zinc-600">2.8</td>
<td className="px-4 py-3 text-right"><iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="lucide:chevron-right"></iconify-icon></td>
</tr>
<tr className="hover:bg-zinc-50 group">
<td className="px-4 py-3 font-medium text-zinc-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">M</div>
                                        Mos Mosh
                                    </td>
<td className="px-4 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700">Open</span></td>
<td className="px-4 py-3 text-right text-zinc-600 font-mono">€ 24.000</td>
<td className="px-4 py-3 text-right text-zinc-900 font-mono">€ 12.000</td>
<td className="px-4 py-3 text-right text-emerald-600 font-mono font-medium">€ 12.000</td>
<td className="px-4 py-3 text-right text-zinc-600">2.9</td>
<td className="px-4 py-3 text-right"><iconify-icon className="text-zinc-300 group-hover:text-zinc-900" icon="lucide:chevron-right"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
