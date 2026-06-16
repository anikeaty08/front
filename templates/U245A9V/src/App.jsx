import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons({ strokeWidth: 1.5 });

// Chart.js - conversione ai dati Club
new Chart(document.getElementById('salesBarChart').getContext('2d'), {
  type: 'line',
  data: {
    labels: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug'],
    datasets: [{
      label: 'Vendite',
      data: [80,100,170,140,90,110,60],
      backgroundColor: 'rgba(99,102,241,0.12)',
      borderColor: '#6366F1',
      borderWidth: 3,
      tension: 0.45,
      pointBackgroundColor: '#6366F1',
      pointRadius: 6,
      pointHoverRadius: 7,
      fill: true
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: {
      x: { grid: { display: false }, ticks: { color: '#64748B', font:{size:13} } },
      y: { grid: { color: '#CBD5E1' }, ticks: { color: '#64748B', font:{size:13} }, beginAtZero: true }
    }
  }
});

// Dummy richieste soci
const requests = [
  {nome: 'Luca Bianchi', prodotto: 'Marijuana', quantita: 3, data: '2024-05-29', stato: 'in_attesa'},
  {nome: 'Sara Verdi', prodotto: 'Hashish', quantita: 2, data: '2024-06-01', stato: 'in_evasione'},
  {nome: 'Riccardo Neri', prodotto: 'Edibili', quantita: 4, data: '2024-06-02', stato: 'completata'},
  {nome: 'Valeria Blu', prodotto: 'Estratti', quantita: 1, data: '2024-06-02', stato: 'in_attesa'},
  {nome: 'Giorgia Rosa', prodotto: 'Acqua', quantita: 6, data: '2024-06-02', stato: 'in_evasione'},
];
const statusLabels = {
  in_attesa: { text: 'In attesa', color:'bg-amber-50 text-amber-700' },
  in_evasione: { text: 'In evasione', color:'bg-blue-50 text-blue-700' },
  completata: { text: 'Completata', color:'bg-emerald-50 text-emerald-700' }
};

function renderRequests() {
  const filter = document.getElementById('statusFilter').value;
  const search = document.getElementById('searchInput').value.toLowerCase();
  const tbody = document.getElementById('requestsTable');
  tbody.innerHTML = '';
  requests.filter(r => (!filter || r.stato === filter) && (!search || r.nome.toLowerCase().includes(search))).forEach((r, i) => {
    tbody.innerHTML += `
      <tr>
        <td class="px-6 py-4">${r.nome}</td>
        <td class="px-6 py-4">${r.prodotto}</td>
        <td class="px-6 py-4 text-center">${r.quantita}</td>
        <td class="px-6 py-4 text-center">${r.data}</td>
        <td class="px-6 py-4 text-center">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusLabels[r.stato].color}">
            ${statusLabels[r.stato].text}
          </span>
        </td>
        <td class="px-6 py-4 text-right">
          ${r.stato !== 'completata' ? `
            <button onclick="updateStatus(${i})" class="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-indigo-400 hover:bg-indigo-50 transition">
              <i data-lucide="check" class="h-4 w-4 mr-1"></i>Completa
            </button>
          ` : ''}
        </td>
      </tr>
    `;
  });
  lucide.createIcons({ strokeWidth: 1.5 });
}
function updateStatus(idx) {
  requests[idx].stato = 'completata';
  renderRequests();
}
document.getElementById('statusFilter').addEventListener('change', renderRequests);
document.getElementById('searchInput').addEventListener('input', renderRequests);
renderRequests();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-full flex">

<aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-slate-200">
<div className="flex items-center px-6 h-16 border-b border-slate-200">
<div className="flex items-center space-x-2">
<div className="h-8 w-8 bg-black rounded flex items-center justify-center text-white text-xs font-semibold">SC</div>
<span className="text-lg font-semibold tracking-tight">ClubDash</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4">
<ul className="space-y-1">
<li className="">
<a className="flex items-center px-6 py-2 rounded-md bg-slate-100 text-slate-900 font-medium" href="#">
<svg className="lucide lucide-layout-dashboard h-4 w-4 mr-3" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
            Panoramica vendita
          </a>
</li>
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-boxes h-4 w-4 mr-3" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>Gestione prodotti</a></li>
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-bar-chart-3 h-4 w-4 mr-3" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>Statistiche vendite</a></li>
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-users h-4 w-4 mr-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Richieste soci</a></li>
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-user h-4 w-4 mr-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profilo utente</a></li>
</ul>
<div className="mt-8">
<p className="px-6 text-xs uppercase tracking-wide text-slate-500 mb-2">Help</p>
<ul className="space-y-1">
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-settings h-4 w-4 mr-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>Impostazioni</a></li>
<li className=""><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><svg className="lucide lucide-help-circle h-4 w-4 mr-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>Supporto</a></li>
</ul>
</div>
<div className="mx-4 mt-8 p-4 bg-slate-50 rounded-lg relative">
<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<h4 className="text-sm font-medium mb-1">Invita un amico!</h4>
<p className="text-xs text-slate-500 leading-snug mb-3">E ottieni ricompense esclusive</p>
<div className="flex justify-center">
<img alt="" className="rounded-md" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=facearea&amp;w=80&amp;h=80"/>
</div>
</div>
</nav>
</aside>

<div className="flex flex-col flex-1">

<header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8">
<div className="flex-1 flex items-center space-x-4">
<button className="lg:hidden text-slate-500 hover:text-slate-900">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="hidden sm:flex items-center space-x-1 text-sm text-slate-500">
<span>Club</span>
<span className="text-slate-300">/</span>
<span className="font-medium text-slate-900">Dashboard</span>
</div>
</div>
<div className="flex space-x-4 items-center">
<button className="flex items-center space-x-1 text-slate-500 hover:text-slate-900">
</button>
<button className="text-slate-500 hover:text-slate-900 relative">
<svg className="lucide lucide-bell h-5 w-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto lg:p-8 pt-4 pr-4 pb-4 pl-4 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center">
<svg className="lucide lucide-package h-5 w-5 text-indigo-600" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div>
<p className="text-lg font-semibold">128</p>
<p className="text-xs text-slate-500">Ordini totali</p>
</div>
</div>
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
<svg className="lucide lucide-clock h-5 w-5 text-emerald-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-lg font-semibold">14</p>
<p className="text-xs text-slate-500">Ordini in lavorazione</p>
</div>
</div>
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center">
<svg className="lucide lucide-star h-5 w-5 text-amber-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="">
<p className="text-lg font-semibold">OG Kush</p>
<p className="text-xs text-slate-500">Prodotto più richiesto</p>
</div>
</div>

<div className="col-span-full bg-white rounded-xl p-6">
<div className="relative h-56">
<div className="flex flex-col h-full justify-center">
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-white rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="space-y-0">
<div className="flex items-center space-x-2 mb-2">
<div className="h-6 w-6 rounded bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 text-emerald-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="uppercase text-xs font-medium text-slate-500">Volume Vendite</span>
</div>
<p className="text-3xl font-bold">€2,300</p>
<p className="text-xs text-slate-500 mt-3 mb-6 pt-3 pb-3">Volume degli ultimi 30 giorni</p>
</div>
<button className="mt-6 inline-flex items-center justify-center w-full h-10 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 focus:outline-none">
            Visualizza dettagli
            <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="bg-white rounded-xl">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200 text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr className="">
<th className="font-medium text-left pt-3 pr-6 pb-3 pl-6">Prodotto</th>
<th className="px-6 py-3 text-center font-medium">Quantità</th>
<th className="px-6 py-3 text-center font-medium">Data</th>
<th className="px-6 py-3 text-center font-medium">Stato</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="requestsTable">
<tr className="">
<td className="pt-4 pr-6 pb-4 pl-6">Luca Bianchi</td>
<td className="px-6 py-4">Marijuana</td>
<td className="px-6 py-4 text-center">3</td>
<td className="px-6 py-4 text-center">2024-05-29</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
            In attesa
          </span>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-indigo-400 hover:bg-indigo-50 transition" onclick="updateStatus(0)">
<svg className="lucide lucide-check h-4 w-4 mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Completa
            </button>
</td>
</tr>
<tr className="">
<td className="pt-4 pr-6 pb-4 pl-6">Sara Verdi</td>
<td className="px-6 py-4">Hashish</td>
<td className="px-6 py-4 text-center">2</td>
<td className="px-6 py-4 text-center">2024-06-01</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
            In evasione
          </span>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-indigo-400 hover:bg-indigo-50 transition" onclick="updateStatus(1)">
<svg className="lucide lucide-check h-4 w-4 mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Completa
            </button>
</td>
</tr>
<tr className="">
<td className="px-6 py-4">Riccardo Neri</td>
<td className="px-6 py-4">Edibili</td>
<td className="px-6 py-4 text-center">4</td>
<td className="px-6 py-4 text-center">2024-06-02</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
            Completata
          </span>
</td>
<td className="px-6 py-4 text-right">
</td>
</tr>
<tr className="">
<td className="px-6 py-4">Valeria Blu</td>
<td className="px-6 py-4">Estratti</td>
<td className="px-6 py-4 text-center">1</td>
<td className="px-6 py-4 text-center">2024-06-02</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
            In attesa
          </span>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-indigo-400 hover:bg-indigo-50 transition" onclick="updateStatus(3)">
<svg className="lucide lucide-check h-4 w-4 mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Completa
            </button>
</td>
</tr>
<tr className="">
<td className="px-6 py-4">Giorgia Rosa</td>
<td className="px-6 py-4">Acqua</td>
<td className="px-6 py-4 text-center">6</td>
<td className="px-6 py-4 text-center">2024-06-02</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
            In evasione
          </span>
</td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-indigo-400 hover:bg-indigo-50 transition" onclick="updateStatus(4)">
<svg className="lucide lucide-check h-4 w-4 mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Completa
            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>




    </>
  );
}
