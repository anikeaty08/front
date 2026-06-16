import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-950 flex flex-col md:h-screen md:sticky md:top-0 z-30 shrink-0">
<div className="h-16 flex items-center px-6 border-b border-white/5 justify-between md:justify-start">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-medium tracking-tighter">NX</div>
<span className="text-neutral-100 font-medium tracking-tight text-sm">NEXUS AI</span>
</div>

<button className="md:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
<nav className="hidden md:flex flex-1 flex-col overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-neutral-600">Übersicht</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Finanzen</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Kunden &amp; Churn</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Pipeline</span>
</a>
<div className="px-3 mt-8 mb-2 text-xs font-medium uppercase tracking-wider text-neutral-600">Intelligenz</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 group transition-colors" href="#">
<span className="iconify text-purple-400 group-hover:text-purple-300 transition-colors" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">KI Prognosen</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:alert-octagon" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Alerts &amp; Anomalien</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 hover:text-neutral-100 transition-colors" href="#">
<span className="iconify" data-icon="lucide:bot" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium">Assistent</span>
</a>
</nav>
<div className="hidden md:block p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="text-xs text-neutral-300 font-medium">MK</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-200 truncate">Max Kaufmann</p>
<p className="text-xs text-neutral-500 truncate">CEO &amp; Founder</p>
</div>
<span className="iconify text-neutral-600" data-icon="lucide:chevron-up" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-neutral-950 relative">

<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

<header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-white/5 glass-header sticky top-0 z-20">
<div className="flex items-center gap-4">
<nav className="flex items-center text-sm text-neutral-500">
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Unternehmen</span>
<span className="mx-2 text-neutral-700">/</span>
<span className="text-neutral-200">Übersicht</span>
</nav>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-64 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
<span className="iconify text-neutral-500" data-icon="lucide:search" data-width="14"></span>
<input className="bg-transparent border-none outline-none text-xs text-neutral-200 w-full ml-2 placeholder-neutral-600" placeholder="Frag die KI nach dem Umsatz..." type="text"/>
<div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded text-[10px] text-neutral-500 border border-white/5">⌘K</div>
</div>
<button className="relative p-2 text-neutral-400 hover:text-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-neutral-950"></span>
</button>
</div>
</header>

<div className="p-4 md:p-8 space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-1">Unternehmensübersicht</h1>
<p className="text-sm text-neutral-500">Echtzeit-Datenanalyse und KI-gestützte Prognosen für Q4 2023.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-white/5 border border-white/5 rounded-md overflow-hidden">
<button className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:bg-white/5 hover:text-white transition-colors border-r border-white/5">CSV</button>
<button className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:bg-white/5 hover:text-white transition-colors">PDF</button>
</div>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 border border-indigo-500 rounded-md hover:bg-indigo-500 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] flex items-center gap-2">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                        KI Bericht generieren
                    </button>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 p-4 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
<div className="flex-1 w-full">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:target" data-width="16"></span>
<span className="text-sm font-medium text-white">Monatsziel Umsatz</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">noch €10.500 benötigt</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
<span className="iconify" data-icon="lucide:check-circle" data-width="10"></span> KI: Ziel erreichbar
                            </span>
</div>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full relative" style={{width: '92%'}}>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] border-2 border-neutral-900"></div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-neutral-500">
<span>€0</span>
<span>Aktuell: €124.500 (92%)</span>
<span>Ziel: €135.000</span>
</div>
</div>
<div className="flex gap-4 border-l border-white/5 pl-6">
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Tägl. Run-Rate</p>
<p className="text-sm font-medium text-white">€4.150</p>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">Benötigt / Tag</p>
<p className="text-sm font-medium text-neutral-300">€1.750</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel rounded-xl p-5 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-indigo-400" data-icon="lucide:dollar-sign" data-width="48"></span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Gesamtumsatz</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">€124.500</span>
<span className="text-xs font-medium text-emerald-400 flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded">
                            +12.5%
                            <span className="iconify ml-1" data-icon="lucide:trending-up" data-width="12"></span>
</span>
</div>
<p className="text-xs text-neutral-600 mt-2">vs. €110.200 letzten Monat</p>
</div>

<div className="glass-panel rounded-xl p-5 border border-white/5 relative overflow-hidden group">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Nettogewinn</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">€42.850</span>
<span className="text-xs font-medium text-emerald-400 flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded">
                            +8.2%
                        </span>
</div>
<p className="text-xs text-neutral-600 mt-2">34.4% Marge (KI-optimiert)</p>
</div>

<div className="glass-panel rounded-xl p-5 border border-white/5 relative overflow-hidden group">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Aktive Kunden</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">1,204</span>
<span className="text-xs font-medium text-neutral-400 flex items-center bg-white/5 px-1.5 py-0.5 rounded">
                            +0.4%
                        </span>
</div>
<p className="text-xs text-neutral-600 mt-2">12 Neuanmeldungen heute</p>
</div>

<div className="rounded-xl p-5 border border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-amber-500 uppercase tracking-wider flex items-center gap-1">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="12"></span>
                            KI Warnung
                        </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-sm text-amber-200/90 leading-relaxed">Der Churn im Enterprise-Segment ist um 2% gestiegen.</span>
</div>
<button className="mt-3 text-xs text-amber-500 hover:text-amber-400 font-medium flex items-center gap-1 transition-colors">
                        Analyse anzeigen <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel rounded-xl border border-white/5 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Umsatzentwicklung &amp; Prognose</h3>
<div className="flex gap-2">
<button className="px-2 py-1 text-xs text-white bg-white/10 rounded">12M</button>
<button className="px-2 py-1 text-xs text-neutral-500 hover:text-white transition-colors">30T</button>
<button className="px-2 py-1 text-xs text-neutral-500 hover:text-white transition-colors">7T</button>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 md:gap-4 w-full pt-4 border-b border-white/5 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-t border-dashed border-neutral-600 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-600 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-600 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-600 w-full h-px"></div>
</div>

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] relative group hover:bg-indigo-500/40 transition-all"></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[55%] relative group hover:bg-indigo-500/50 transition-all"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[45%] relative group hover:bg-indigo-500/60 transition-all"></div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[70%] relative group hover:bg-indigo-500/70 transition-all"></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[65%] relative group hover:bg-indigo-500/80 transition-all"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[85%] relative group hover:bg-indigo-500/90 transition-all">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">85k</div>
</div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[95%] relative group shadow-[0_0_20px_rgba(99,102,241,0.3)]"></div>

<div className="w-full relative h-[100%] group opacity-60">
<div className="absolute bottom-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDA0MDQwIi8+CjxwYXRoIGQ9Ik0wIDRMNCAwIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] h-full rounded-t-sm"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-neutral-800 border border-white/10 rounded text-[10px] text-indigo-300 whitespace-nowrap">KI Prognose</div>
</div>
<div className="w-full relative h-[105%] group opacity-50">
<div className="absolute bottom-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDA0MDQwIi8+CjxwYXRoIGQ9Ik0wIDRMNCAwIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] h-full rounded-t-sm"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2 uppercase tracking-wide">
<span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Dez</span><span className="text-indigo-400">Jan</span><span className="text-indigo-400">Feb</span>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="iconify ai-gradient-text" data-icon="lucide:sparkles" data-width="18"></span>
<h3 className="text-sm font-medium text-white">KI Insights &amp; Anomalien</h3>
</div>
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<div className="flex-1 space-y-4 overflow-y-auto max-h-[300px] pr-1">

<div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]">
<span className="iconify text-emerald-400" data-icon="lucide:trending-up" data-width="16"></span>
</div>
<div>
<p className="text-xs text-neutral-200 leading-snug">Umsatzprognose: <span className="text-white font-medium">+15%</span> im nächsten Monat basierend auf saisonalen Trends.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]">
<span className="iconify text-indigo-400" data-icon="lucide:lightbulb" data-width="16"></span>
</div>
<div>
<p className="text-xs text-neutral-200 leading-snug">Marketing-Empfehlung: Budget für <span className="text-white font-medium">Produkt B</span> erhöhen (Conversion Potential hoch).</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 hover:border-rose-500/30 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]">
<span className="iconify text-rose-400" data-icon="lucide:alert-circle" data-width="16"></span>
</div>
<div>
<p className="text-xs text-neutral-200 leading-snug">Warnung: <span className="text-white font-medium">Conversion Rate</span> ist seit gestern um 3.2% gesunken. Prüfung empfohlen.</p>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/30 transition-colors cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]">
<span className="iconify text-amber-400" data-icon="lucide:dollar-sign" data-width="16"></span>
</div>
<div>
<p className="text-xs text-neutral-200 leading-snug">Kosten-Anomalie: Marketingausgaben liegen 12% über dem Durchschnitt.</p>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-white/5">
<div className="relative">
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg py-2 pl-3 pr-8 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-neutral-600" placeholder="Frag nach Engpässen..." type="text"/>
<button className="absolute right-2 top-2 text-neutral-500 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">MRR (Monatlich)</span>
<span className="iconify text-neutral-600" data-icon="lucide:repeat" data-width="14"></span>
</div>
<div className="text-xl font-medium text-white tracking-tight">€84.200</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">+4.1% <span className="text-neutral-600">vs Vormonat</span></div>
</div>
<div className="glass-panel rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">ARR (Jährlich)</span>
<span className="iconify text-neutral-600" data-icon="lucide:calendar" data-width="14"></span>
</div>
<div className="text-xl font-medium text-white tracking-tight">€1.01M</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">+18% <span className="text-neutral-600">YoY</span></div>
</div>
<div className="glass-panel rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Customer Lifetime Value</span>
<span className="iconify text-neutral-600" data-icon="lucide:users" data-width="14"></span>
</div>
<div className="text-xl font-medium text-white tracking-tight">€2.850</div>
<div className="text-[10px] text-neutral-400 mt-1 flex items-center gap-1">Prognose: <span className="text-indigo-400">€3.100</span></div>
</div>
<div className="glass-panel rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Fixkosten / Variabel</span>
<span className="iconify text-neutral-600" data-icon="lucide:pie-chart" data-width="14"></span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 mb-2 overflow-hidden flex">
<div className="bg-indigo-500 h-full w-[40%]"></div>
<div className="bg-neutral-600 h-full w-[60%]"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 40% Fix</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></span> 60% Variabel</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-panel rounded-xl border border-white/5 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Cashflow Entwicklung</h3>
<span className="text-xs text-emerald-400">+ Positiv</span>
</div>
<div className="h-40 flex items-end justify-between gap-2 w-full pt-4 relative">

<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-emerald-500/10 to-transparent clip-path-polygon"></div>

<div className="w-full bg-emerald-500/30 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-rose-500/30 rounded-t-sm h-[20%]"></div> 
<div className="w-full bg-emerald-500/60 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-emerald-500/70 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-emerald-500/90 rounded-t-sm h-[75%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-neutral-800 rounded text-[9px] text-white border border-white/10">Aktuell</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 p-6">
<h3 className="text-sm font-medium text-white mb-6">Top 5 Kostenkategorien</h3>
<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-neutral-300">Personal &amp; Team</span>
<span className="text-neutral-400">€45.200 (42%)</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1.5">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-neutral-300">Server &amp; Infrastruktur</span>
<span className="text-neutral-400">€18.400 (18%)</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '18%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-neutral-300">Marketing Ads</span>
<span className="text-neutral-400">€15.100 (15%)</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1.5">
<div className="bg-pink-500 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-neutral-300">Software Lizenzen</span>
<span className="text-neutral-400">€8.500 (8%)</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl border border-white/5 p-6 lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Sales Pipeline &amp; Funnel</h3>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span>Sales Velocity: <span className="text-white">18 Tage</span></span>
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
<span>Avg Deal: <span className="text-white">€2.4k</span></span>
</div>
</div>
<div className="flex flex-col gap-2 relative">

<div className="w-full h-10 bg-indigo-900/20 mx-auto rounded flex items-center px-4 justify-between border border-indigo-500/10">
<span className="text-xs font-medium text-white">Leads (Total)</span>
<span className="text-xs text-neutral-400">4,200</span>
</div>

<div className="h-2 w-0.5 bg-neutral-800 mx-auto"></div>

<div className="w-[90%] h-10 bg-indigo-900/30 mx-auto rounded flex items-center px-4 justify-between border border-indigo-500/20">
<span className="text-xs font-medium text-white">Qualifizierte Leads</span>
<div className="flex items-center gap-3">
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">28% Conv</span>
<span className="text-xs text-neutral-400">1,176</span>
</div>
</div>

<div className="h-2 w-0.5 bg-neutral-800 mx-auto"></div>

<div className="w-[75%] h-10 bg-indigo-900/40 mx-auto rounded flex items-center px-4 justify-between border border-indigo-500/30">
<span className="text-xs font-medium text-white">Gespräche / Demos</span>
<div className="flex items-center gap-3">
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">45% Conv</span>
<span className="text-xs text-neutral-400">529</span>
</div>
</div>

<div className="h-2 w-0.5 bg-neutral-800 mx-auto"></div>

<div className="w-[50%] h-10 bg-indigo-900/50 mx-auto rounded flex items-center px-4 justify-between border border-indigo-500/40">
<span className="text-xs font-medium text-white">Angebote</span>
<div className="flex items-center gap-3">
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">60% Conv</span>
<span className="text-xs text-neutral-400">317</span>
</div>
</div>

<div className="h-2 w-0.5 bg-neutral-800 mx-auto"></div>

<div className="w-[30%] h-10 bg-emerald-500/20 mx-auto rounded flex items-center px-4 justify-between border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<span className="text-xs font-medium text-white">Abschlüsse</span>
<div className="flex items-center gap-3">
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1 rounded">38% Conv</span>
<span className="text-xs text-white font-bold">120</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 p-6 flex flex-col gap-6">
<div>
<h3 className="text-sm font-medium text-white mb-4">Kundensegmente</h3>
<div className="flex items-center justify-center relative w-32 h-32 mx-auto mb-4">

<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#6366f1 0% 45%, #a855f7 45% 75%, #ec4899 75% 100%)'}}></div>
<div className="absolute inset-2 bg-neutral-900 rounded-full flex items-center justify-center flex-col">
<span className="text-lg font-bold text-white">1.2k</span>
<span className="text-[9px] text-neutral-500">Kunden</span>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Standard</span>
<span className="text-neutral-400">45% (Stabil)</span>
</div>
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Premium</span>
<span className="text-neutral-400">30% (+2%)</span>
</div>
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Enterprise</span>
<span className="text-neutral-400">25% (Churn Risk!)</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xs font-medium text-white">Churn Rate</h3>
<span className="text-xs text-rose-400 font-medium">2.4% <span className="text-neutral-500">(+0.2%)</span></span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-rose-500 h-full w-[2.4%]"></div>
</div>
<div className="flex justify-between items-center mt-3">
<h3 className="text-xs font-medium text-white">Retention</h3>
<span className="text-xs text-emerald-400 font-medium">97.6%</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Operations &amp; Team Performance</h3>
<div className="flex gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:smile" data-width="12"></span> CSAT: <span className="text-white">4.8/5.0</span></span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> Avg Response: <span className="text-white">1h 24m</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/5">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 text-xs font-bold">MK</div>
<div className="flex-1">
<p className="text-xs font-medium text-white">Max K.</p>
<p className="text-[10px] text-neutral-500">42 Tickets gelöst</p>
</div>
<div className="text-xs font-bold text-emerald-400">Top 1</div>
</div>

<div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/5">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 text-xs font-bold">LS</div>
<div className="flex-1">
<p className="text-xs font-medium text-white">Lisa S.</p>
<p className="text-[10px] text-neutral-500">38 Tickets gelöst</p>
</div>
<div className="text-xs font-bold text-neutral-500">#2</div>
</div>

<div className="bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/5">
<div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 text-xs font-bold">TR</div>
<div className="flex-1">
<p className="text-xs font-medium text-white">Tom R.</p>
<p className="text-[10px] text-neutral-500">31 Tickets gelöst</p>
</div>
<div className="text-xs font-bold text-neutral-500">#3</div>
</div>

<div className="bg-indigo-600/10 rounded-lg p-3 flex items-center gap-3 border border-indigo-500/20 justify-between cursor-pointer hover:bg-indigo-600/20 transition-colors">
<div>
<p className="text-xs font-medium text-indigo-200">Offene Aufgaben</p>
<p className="text-lg font-bold text-white">14</p>
</div>
<span className="iconify text-indigo-400" data-icon="lucide:check-square" data-width="20"></span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl border border-white/5 overflow-hidden">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Aktuelle Transaktionen</h3>
<div className="flex gap-2">
<button className="p-1 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:filter" data-width="14"></span></button>
<button className="text-xs text-neutral-500 hover:text-white transition-colors">Alle anzeigen</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[11px] uppercase tracking-wider text-neutral-500 border-b border-white/5">
<th className="px-4 py-3 font-medium">Unternehmen</th>
<th className="px-4 py-3 font-medium">Datum</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Betrag</th>
</tr>
</thead>
<tbody className="text-xs text-neutral-300">
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">L</div>
<span className="text-white font-medium">Lumina GmbH</span>
</td>
<td className="px-4 py-3 text-neutral-500">Heute, 14:30</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        Bezahlt
                                    </span>
</td>
<td className="px-4 py-3 text-right font-medium text-white">+ €2.450,00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">S</div>
<span className="text-white font-medium">Stellar Systems</span>
</td>
<td className="px-4 py-3 text-neutral-500">Gestern, 09:15</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-700/30 text-neutral-400 border border-neutral-700/50">
                                        Ausstehend
                                    </span>
</td>
<td className="px-4 py-3 text-right font-medium text-white">+ €890,00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">V</div>
<span className="text-white font-medium">Vortex AI</span>
</td>
<td className="px-4 py-3 text-neutral-500">23. Okt 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        Bezahlt
                                    </span>
</td>
<td className="px-4 py-3 text-right font-medium text-white">+ €12.500,00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px] font-bold">Q</div>
<span className="text-white font-medium">Quantum Leaps</span>
</td>
<td className="px-4 py-3 text-neutral-500">22. Okt 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        Bezahlt
                                    </span>
</td>
<td className="px-4 py-3 text-right font-medium text-white">+ €4.320,00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-4 py-3 flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-[10px] font-bold">N</div>
<span className="text-white font-medium">Nebula Corp</span>
</td>
<td className="px-4 py-3 text-neutral-500">20. Okt 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-700/30 text-neutral-400 border border-neutral-700/50">
                                        In Prüfung
                                    </span>
</td>
<td className="px-4 py-3 text-right font-medium text-white">+ €1.150,00</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-white/5 text-center">
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center justify-center gap-1 w-full">
                        Mehr laden <span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
</div>
</div>

<footer className="border-t border-white/5 pt-8 pb-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Produkt</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Funktionen</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Integrationen</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Updates</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Ressourcen</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Dokumentation</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">API Referenz</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Unternehmen</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Rechtliches</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[8px] font-bold">N</div>
<span className="text-xs text-neutral-600">© 2023 NEXUS AI Inc.</span>
</div>
<div className="flex gap-4">
<span className="iconify text-neutral-600 hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-neutral-600 hover:text-white cursor-pointer transition-colors" data-icon="lucide:github" data-width="16"></span>
<span className="iconify text-neutral-600 hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="16"></span>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
