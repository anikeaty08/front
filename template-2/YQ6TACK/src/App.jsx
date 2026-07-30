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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
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
<li>
<a className="flex items-center px-6 py-2 rounded-md bg-slate-100 text-slate-900 font-medium" href="#">
<i className="h-4 w-4 mr-3" data-lucide="layout-dashboard"></i>
            Panoramica vendita
          </a>
</li>
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="boxes"></i>Gestione prodotti</a></li>
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="bar-chart-3"></i>Statistiche vendite</a></li>
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="users"></i>Richieste soci</a></li>
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="user"></i>Profilo utente</a></li>
</ul>
<div className="mt-8">
<p className="px-6 text-xs uppercase tracking-wide text-slate-500 mb-2">Help</p>
<ul className="space-y-1">
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="settings"></i>Impostazioni</a></li>
<li><a className="flex items-center px-6 py-2 text-slate-600 hover:bg-slate-50 rounded-md" href="#"><i className="h-4 w-4 mr-3" data-lucide="help-circle"></i>Supporto</a></li>
</ul>
</div>
<div className="mx-4 mt-8 p-4 bg-slate-50 rounded-lg relative">
<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
<h4 className="text-sm font-medium mb-1">Invita un amico!</h4>
<p className="text-xs text-slate-500 leading-snug mb-3">E ottieni ricompense esclusive</p>
<div className="flex justify-center">
<img alt="" className="rounded-md" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=80&h=80" />
</div>
</div>
</nav>
</aside>

<div className="flex flex-col flex-1">

<header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8">
<div className="flex-1 flex items-center space-x-4">
<button className="lg:hidden text-slate-500 hover:text-slate-900">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center space-x-1 text-sm text-slate-500">
<span>Club</span>
<span className="text-slate-300">/</span>
<span className="font-medium text-slate-900">Dashboard</span>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="flex items-center space-x-1 text-slate-500 hover:text-slate-900">
<img alt="" className="h-5 w-5 rounded-full" src="https://hatscripts.github.io/circle-flags/flags/it.svg" />
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<button className="text-slate-500 hover:text-slate-900 relative">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
</button>
<button className="flex items-center space-x-2">
<img alt="" className="h-8 w-8 rounded-full" src="https://i.pravatar.cc/32?img=3" />
<span className="hidden md:inline text-sm font-medium">Mario Rossi</span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="package"></i>
</div>
<div>
<p className="text-lg font-semibold">128</p>
<p className="text-xs text-slate-500">Ordini totali</p>
</div>
</div>
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="h-5 w-5 text-emerald-600" data-lucide="clock"></i>
</div>
<div>
<p className="text-lg font-semibold">14</p>
<p className="text-xs text-slate-500">Ordini in lavorazione</p>
</div>
</div>
<div className="bg-white rounded-xl p-4 flex items-center space-x-4">
<div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center">
<i className="h-5 w-5 text-amber-600" data-lucide="star"></i>
</div>
<div>
<p className="text-lg font-semibold">OG Kush</p>
<p className="text-xs text-slate-500">Prodotto più richiesto</p>
</div>
</div>

<div className="col-span-full bg-white rounded-xl p-6">
<div className="relative h-56">
<canvas id="salesBarChart"></canvas>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center space-x-2 mb-2">
<div className="h-6 w-6 rounded bg-emerald-100 flex items-center justify-center">
<i className="h-4 w-4 text-emerald-600" data-lucide="bar-chart-3"></i>
</div>
<span className="text-xs font-medium uppercase text-slate-500">Volume Vendite</span>
</div>
<p className="text-3xl font-bold">€2,300</p>
<p className="text-xs text-slate-500 mb-6">Volume degli ultimi 30 giorni</p>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-500">
<span>Marijuana: 56%</span><span>Hashish: 22%</span>
</div>
<div className="h-1 w-full bg-slate-200 rounded-full">
<div className="h-full bg-indigo-500 rounded-l-full" style={{width: `56%`}}></div>
</div>
<div className="h-1 w-full bg-slate-200 rounded-full">
<div className="h-full bg-amber-500 rounded-l-full" style={{width: `22%`}}></div>
</div>
</div>
</div>
<button className="mt-6 inline-flex items-center justify-center w-full h-10 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 focus:outline-none">
            Visualizza dettagli
            <i className="h-4 w-4 ml-2" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl">
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
<h3 className="text-base font-semibold">Richieste Soci</h3>
<div className="flex items-center space-x-4">
<div className="relative">
<input className="h-9 pl-9 pr-3 rounded-md border border-slate-200 text-sm placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" id="searchInput" placeholder="Cerca socio…" type="text" />
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
</div>
<select className="h-9 px-3 rounded-md border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" id="statusFilter">
<option value="">Tutte</option>
<option value="in_attesa">In attesa</option>
<option value="in_evasione">In evasione</option>
<option value="completata">Completata</option>
</select>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200 text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr>
<th className="px-6 py-3 text-left font-medium">Nome socio</th>
<th className="px-6 py-3 text-left font-medium">Prodotto</th>
<th className="px-6 py-3 text-center font-medium">Quantità</th>
<th className="px-6 py-3 text-center font-medium">Data</th>
<th className="px-6 py-3 text-center font-medium">Stato</th>
<th className="px-6 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="requestsTable">

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
