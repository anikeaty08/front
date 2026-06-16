import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-72 bg-[#2a3365] flex flex-col justify-between flex-shrink-0 transition-all duration-300">
<div>

<div className="h-20 flex items-center px-8 border-b border-white/10">
<div className="flex items-center gap-2">

<div className="bg-orange-500 text-white font-bold p-1 rounded text-xs">KW</div>
<span className="text-white text-xl font-semibold tracking-tight">KüchenWelt</span>
</div>
</div>

<nav className="mt-8 px-4 space-y-2">
<a className="flex items-center gap-4 px-4 py-3 bg-[#f36f21] text-white rounded-xl shadow-lg shadow-orange-900/20 group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="font-medium text-base">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
<span className="font-medium text-base">Klanten</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
<span className="font-medium text-base">Leads</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="file-text"></i>
<span className="font-medium text-base">Offertes</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="clipboard-list"></i>
<span className="font-medium text-base">Opdrachten</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="pie-chart"></i>
<span className="font-medium text-base">Rapportages</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="briefcase"></i>
<span className="font-medium text-base">Verkopers</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
<span className="font-medium text-base">Instellingen</span>
</a>
</nav>
</div>
<div className="p-4">
<button className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="log-out"></i>
<span className="font-medium text-base">Uitloggen</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg lg:hidden">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>

<div className="hidden md:flex gap-1 bg-slate-100 p-1 rounded-lg">
<button className="p-2 bg-white shadow-sm rounded-md text-slate-700"><i className="w-4 h-4 stroke-[1.5]" data-lucide="menu"></i></button>
<button className="p-2 text-slate-500 hover:text-slate-700"><i className="w-4 h-4 stroke-[1.5]" data-lucide="check-square"></i></button>
<button className="p-2 text-slate-500 hover:text-slate-700"><i className="w-4 h-4 stroke-[1.5]" data-lucide="layout-grid"></i></button>
<button className="p-2 text-slate-500 hover:text-slate-700"><i className="w-4 h-4 stroke-[1.5]" data-lucide="monitor"></i></button>
</div>
</div>
</div>
<div className="flex-1 max-w-xl px-8">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="search"></i>
<input className="w-full bg-slate-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 placeholder-slate-400 outline-none" placeholder="Zoek op bv. relatie, offerte, opdracht, etc..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="plus"></i>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="globe"></i>
</button>
</div>
<div className="flex items-center gap-3 pl-6 border-l border-slate-200">
<div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">R</div>
<div className="hidden md:block">
<p className="text-sm font-semibold text-slate-900">Ronald de Vormer</p>
</div>
<i className="w-4 h-4 text-slate-400 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 bg-slate-50">
<div className="max-w-[1600px] mx-auto space-y-8">

<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-blue-200 transition-colors">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="file-text"></i>
</div>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Offertes</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">42</h3>
<p className="text-sm font-medium text-blue-600 mt-1">€420.000</p>
</div>
<div className="absolute -right-6 -bottom-6 text-blue-50 opacity-50 group-hover:scale-110 transition-transform">
<i className="w-32 h-32 stroke-[1]" data-lucide="file-text"></i>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-amber-200 transition-colors">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clock"></i>
</div>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Quotes Open</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">18</h3>
<p className="text-sm font-medium text-amber-600 mt-1">In afwachting</p>
</div>
<div className="absolute -right-6 -bottom-6 text-amber-50 opacity-50 group-hover:scale-110 transition-transform">
<i className="w-32 h-32 stroke-[1]" data-lucide="hourglass"></i>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:border-rose-200 transition-colors">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="alert-circle"></i>
</div>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Quotes Expired</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">5</h3>
<p className="text-sm font-medium text-rose-600 mt-1">Actie vereist</p>
</div>
<div className="absolute -right-6 -bottom-6 text-rose-50 opacity-50 group-hover:scale-110 transition-transform">
<i className="w-32 h-32 stroke-[1]" data-lucide="x-circle"></i>
</div>
</div>

<div className="bg-emerald-50/50 p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-200 transition-colors">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-circle-2"></i>
</div>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Orders</p>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">21</h3>
<p className="text-sm font-medium text-emerald-600 mt-1">€210.000</p>
</div>
<div className="absolute -right-6 -bottom-6 text-emerald-100 opacity-60 group-hover:scale-110 transition-transform">
<i className="w-32 h-32 stroke-[1]" data-lucide="check"></i>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
<div>
<h2 className="text-lg font-semibold text-slate-900">Jaaroverzicht 2023</h2>
<p className="text-sm text-slate-500 mt-1">Vergelijking Offertes, Sales en Annuleringen</p>
</div>
<div className="flex items-center gap-4 flex-wrap">
<div className="flex items-center gap-2 text-sm">
<span className="w-3 h-3 rounded-full bg-blue-500"></span> Offertes
                            </div>
<div className="flex items-center gap-2 text-sm">
<span className="w-3 h-3 rounded-full bg-emerald-500"></span> Sales
                            </div>
<div className="flex items-center gap-2 text-sm">
<span className="w-3 h-3 rounded-full bg-rose-500"></span> Cancellations
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-400">
<span className="w-3 h-3 rounded-full bg-slate-200"></span> Teamleden (Indiv.)
                            </div>
<select className="bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg p-2 outline-none focus:border-indigo-500">
<option>Dit jaar</option>
<option>Vorig jaar</option>
</select>
</div>
</div>

<div className="relative h-64 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-300 pointer-events-none">
<div className="border-b border-slate-100 w-full h-0 flex items-center"><span>€100k</span></div>
<div className="border-b border-slate-100 w-full h-0 flex items-center"><span>€75k</span></div>
<div className="border-b border-slate-100 w-full h-0 flex items-center"><span>€50k</span></div>
<div className="border-b border-slate-100 w-full h-0 flex items-center"><span>€25k</span></div>
<div className="border-b border-slate-100 w-full h-0 flex items-center"><span>€0</span></div>
</div>
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 250">

<path d="M0,220 C100,210 200,180 300,190 C400,200 500,160 600,170 C700,180 800,150 900,160 L1000,150" fill="none" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M0,200 C150,190 250,210 350,180 C450,150 550,170 650,140 C750,160 850,130 950,140 L1000,130" fill="none" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>

<path className="drop-shadow-sm" d="M0,150 C100,100 200,140 300,80 C400,60 500,90 600,50 C700,40 800,70 900,30 L1000,20" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>


<path className="drop-shadow-sm" d="M0,180 C100,160 200,170 300,120 C400,130 500,100 600,90 C700,80 800,100 900,60 L1000,50" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>

<path d="M0,240 C100,245 200,230 300,235 C400,220 500,230 600,210 C700,220 800,215 900,200 L1000,210" fill="none" stroke="#f43f5e" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="600" cy="50" fill="#3b82f6" r="4" stroke="white" strokeWidth="2"></circle>
<circle cx="600" cy="90" fill="#10b981" r="4" stroke="white" strokeWidth="2"></circle>
<circle cx="600" cy="210" fill="#f43f5e" r="4" stroke="white" strokeWidth="2"></circle>
</svg>

<div className="absolute bottom-[-24px] w-full flex justify-between text-xs text-slate-400">
<span>Jan</span><span>Feb</span><span>Mrt</span><span>Apr</span><span>Mei</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Dec</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200">
<div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<h2 className="text-lg font-semibold text-slate-900">Resultaten van het verkoopteam</h2>
<div className="flex gap-2 text-sm">
<button className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-medium flex items-center gap-2">
                                    Deze week <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden sm:flex border border-slate-200 rounded-lg overflow-hidden">
<div className="px-3 py-1.5 bg-slate-50 border-r border-slate-200 text-slate-400">DD/MM/JJJJ <i className="w-3 h-3 inline ml-1" data-lucide="calendar"></i></div>
<div className="px-3 py-1.5 bg-slate-50 text-slate-400">DD/MM/JJJJ <i className="w-3 h-3 inline ml-1" data-lucide="calendar"></i></div>
</div>
<button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-medium flex items-center gap-2 border border-indigo-100">
<i className="w-4 h-4" data-lucide="file-spreadsheet"></i> Excel
                                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold border-b border-slate-100">
<th className="px-6 py-4">#</th>
<th className="px-6 py-4">Teamlid</th>
<th className="px-6 py-4">Bestellingen</th>
<th className="px-6 py-4">Bruto Verkoop</th>
<th className="px-6 py-4">Winst</th>

<th className="px-6 py-4">Provision</th>
<th className="px-6 py-4 text-right">Marge</th>
</tr>
</thead>
<tbody className="text-base text-slate-600">

<tr className="hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-6 py-4">
<span className="w-6 h-6 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">1</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full" src="https://ui-avatars.com/api/?name=Ronald+Vormer&amp;background=0D8ABC&amp;color=fff"/>
<div className="flex flex-col">
<span className="font-semibold text-slate-900">Ronald de Vormer</span>
<div className="flex items-center gap-1 text-xs text-amber-600 font-medium">
<i className="w-3 h-3 fill-current" data-lucide="crown"></i> Leader
                                                    </div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">14</td>
<td className="px-6 py-4 font-medium text-slate-900">€140.000</td>
<td className="px-6 py-4 text-slate-500">€ 61.600</td>
<td className="px-6 py-4 font-medium text-indigo-600">€ 7.000</td>
<td className="px-6 py-4 text-right">
<span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">44%</span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-6 py-4">
<span className="w-6 h-6 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full text-xs font-bold">2</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full" src="https://ui-avatars.com/api/?name=Piet+Kok&amp;background=333&amp;color=fff"/>
<div className="flex flex-col">
<span className="font-semibold text-slate-900">Piet Kok</span>
<div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
<i className="w-3 h-3" data-lucide="award"></i> Senior
                                                    </div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">11</td>
<td className="px-6 py-4 font-medium text-slate-900">€110.000</td>
<td className="px-6 py-4 text-slate-500">€ 42.900</td>
<td className="px-6 py-4 font-medium text-indigo-600">€ 5.500</td>
<td className="px-6 py-4 text-right">
<span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">39%</span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors border-b border-slate-50">
<td className="px-6 py-4">
<span className="w-6 h-6 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full text-xs font-bold">3</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full" src="https://ui-avatars.com/api/?name=Manuel+Vries&amp;background=6366f1&amp;color=fff"/>
<div className="flex flex-col">
<span className="font-semibold text-slate-900">Manuel de Vries</span>
<div className="flex items-center gap-1 text-xs text-purple-600 font-medium">
<i className="w-3 h-3" data-lucide="briefcase"></i> Freelancer
                                                    </div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">9</td>
<td className="px-6 py-4 font-medium text-slate-900">€90.000</td>
<td className="px-6 py-4 text-slate-500">€ 31.500</td>
<td className="px-6 py-4 font-medium text-indigo-600">€ 4.500</td>
<td className="px-6 py-4 text-right">
<span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">35%</span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<span className="text-xs font-bold text-slate-400 pl-2">4</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full" src="https://ui-avatars.com/api/?name=Alexander+Visser&amp;background=10b981&amp;color=fff"/>
<div className="flex flex-col">
<span className="font-semibold text-slate-900">Alexander Visser</span>
<div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
<i className="w-3 h-3" data-lucide="user"></i> Salesperson
                                                    </div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium">6</td>
<td className="px-6 py-4 font-medium text-slate-900">€60.000</td>
<td className="px-6 py-4 text-slate-500">€ 21.000</td>
<td className="px-6 py-4 font-medium text-indigo-600">€ 3.000</td>
<td className="px-6 py-4 text-right">
<span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">35%</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="xl:col-span-1 space-y-6">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold text-slate-900">Team targets</h2>
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium flex items-center gap-2">
                                Deze week <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>

<div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-100">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Begroting</span>
<div className="w-10 h-10 rounded-full bg-[#2a3365] flex items-center justify-center text-white">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="file-text"></i>
</div>
</div>
<div className="flex items-end gap-3">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">€10K</h3>
<span className="text-sm font-medium text-rose-500 mb-1.5 flex items-center">
<i className="w-4 h-4 mr-0.5" data-lucide="arrow-down-right"></i> -5%
                                </span>
</div>
<p className="text-xs text-slate-400 mt-2">T.o.v. vorige week</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-medium text-slate-500">Behaald</span>
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="wallet"></i>
</div>
</div>
<div className="flex items-end gap-3">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">€20K</h3>
<span className="text-sm font-medium text-emerald-500 mb-1.5 flex items-center">
<i className="w-4 h-4 mr-0.5" data-lucide="arrow-up-right"></i> +50%
                                </span>
</div>
<p className="text-xs text-slate-400 mt-2">Gebaseerd op de begroting</p>

<div className="w-full bg-slate-100 rounded-full h-2 mt-4 overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-semibold text-slate-900">Installatie analyse</h2>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500">Alleen geaccepteerde offertes</span>
<button className="w-11 h-6 bg-slate-200 rounded-full relative transition-colors duration-200 focus:outline-none">
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transition-transform duration-200"></span>
</button>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-8">
<div className="relative w-40 h-40">
<svg className="w-full h-full transform -rotate-90">
<circle cx="80" cy="80" fill="none" r="70" stroke="#f1f5f9" strokeWidth="12"></circle>
<circle cx="80" cy="80" fill="none" r="70" stroke="#f36f21" stroke-dasharray="440" stroke-dashoffset="154" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-slate-900">65%</span>
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide mt-1">Met installatie</span>
</div>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-[#f36f21]"></span>
<span className="text-base text-slate-600">Offertes met installatie (84)</span>
</div>
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-rose-100"></span>
<span className="text-base text-slate-600">Offertes zonder installatie (46)</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-lg font-semibold text-slate-900">Offertes</h2>
<div className="flex gap-2 text-xs">
<button className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-600">Deze week</button>
<button className="px-2 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded flex items-center gap-1"><i className="w-3 h-3" data-lucide="file-spreadsheet"></i> Export</button>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div>
<p className="text-xs font-semibold text-slate-500 uppercase">Offertes</p>
<h4 className="text-2xl font-bold text-slate-900 mt-1">42</h4>
<p className="text-xs text-slate-400 mt-1">€420.000</p>
</div>
<div className="border-l border-slate-100 pl-4">
<p className="text-xs font-semibold text-slate-500 uppercase">Geaccepteerd</p>
<h4 className="text-2xl font-bold text-slate-900 mt-1">21</h4>
<p className="text-xs text-slate-400 mt-1">€210.000</p>
</div>
<div className="border-l border-slate-100 pl-4">
<p className="text-xs font-semibold text-slate-500 uppercase">Gem. Conversie</p>
<h4 className="text-2xl font-bold text-emerald-600 mt-1">50.0%</h4>
<p className="text-xs text-emerald-500 mt-1">Target: 40%</p>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex justify-between text-sm mb-2">
<span className="font-semibold text-slate-700">Waarvan geïnstalleerd</span>
<span className="text-slate-500">Offerte installaties 31%</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
<div className="bg-[#2a3365] h-3 rounded-full opacity-30" style={{width: '31%'}}></div>
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
