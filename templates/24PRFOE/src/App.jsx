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
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
primary: { DEFAULT: "#1e293b", light: "#334155", dark: "#0f172a" },
accent: { DEFAULT: "#8B5CF6", light: "#C7D2FE", dark: "#6D28D9" }
}
}
}
}



    lucide.createIcons({ strokeWidth: 1.5 });

    // Dummy data richieste soci
    const requests = [
      {nome: 'Luca Bianchi', prodotto: 'Marijuana', quantita: 3, data: '2024-05-29', stato: 'in_attesa'},
      {nome: 'Sara Verdi', prodotto: 'Hashish', quantita: 2, data: '2024-06-01', stato: 'in_evasione'},
      {nome: 'Riccardo Neri', prodotto: 'Edibili', quantita: 4, data: '2024-06-02', stato: 'completata'},
      {nome: 'Valeria Blu', prodotto: 'Estratti', quantita: 1, data: '2024-06-02', stato: 'in_attesa'},
      {nome: 'Giorgia Rosa', prodotto: 'Acqua', quantita: 6, data: '2024-06-02', stato: 'in_evasione'},
    ];
    const statusLabels = {
      in_attesa: { text: 'In attesa', color:'bg-yellow-100 text-yellow-700' },
      in_evasione: { text: 'In evasione', color:'bg-blue-100 text-blue-700' },
      completata: { text: 'Completata', color:'bg-green-100 text-green-700' }
    };

    function renderRequests() {
      const filter = document.getElementById('statusFilter').value;
      const search = document.getElementById('searchInput').value.toLowerCase();
      const tbody = document.getElementById('requestsTable');
      tbody.innerHTML = '';
      requests.filter(r => (!filter || r.stato === filter) && (!search || r.nome.toLowerCase().includes(search))).forEach((r, i) => {
        tbody.innerHTML += `
          <tr class="hover:bg-gray-50 transition">
            <td class="px-3 py-2">${r.nome}</td>
            <td class="px-3 py-2">${r.prodotto}</td>
            <td class="px-3 py-2 text-center">${r.quantita}</td>
            <td class="px-3 py-2 text-center">${r.data}</td>
            <td class="px-3 py-2 text-center">
              <span class="inline-block px-2 py-1 rounded-full text-xs font-medium ${statusLabels[r.stato].color}">
                ${statusLabels[r.stato].text}
              </span>
            </td>
            <td class="px-3 py-2 text-right">
              ${r.stato !== 'completata' ? `
                <button onclick="updateStatus(${i})" class="inline-flex items-center px-2 py-1 text-xs rounded hover:outline hover:outline-accent hover:bg-accent/10 transition">
                  <i data-lucide="check" class="w-4 h-4 mr-1"></i>Completa
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

    // Chart.js Vendite per categoria
    new Chart(document.getElementById('salesBarChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Marijuana', 'Hashish', 'Estratti', 'Edibili', 'Acqua'],
        datasets: [{
          label: 'Vendite (€)',
          data: [1300, 500, 200, 180, 120],
          backgroundColor: ['#8B5CF6','#38BDF8','#F59E42','#22D3EE','#6366F1'],
          borderRadius: 8,
          borderWidth: 0
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        responsive: true,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#64748B', font: { size: 13 } } },
          y: { grid: { color: '#F1F5F9' }, ticks: { color: '#64748B', font: { size: 13 }, stepSize: 200 }, beginAtZero: true }
        }
      }
    });

    // Chart.js Richieste soci per prodotto
    new Chart(document.getElementById('requestsPieChart').getContext('2d'), {
      type: 'pie',
      data: {
        labels: ['Marijuana', 'Hashish', 'Estratti', 'Edibili', 'Acqua'],
        datasets: [{
          data: [3,2,1,4,6],
          backgroundColor: ['#8B5CF6','#38BDF8','#F59E42','#22D3EE','#6366F1'],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          legend: { display: true, position: 'bottom', labels: { color: '#334155', font: { size: 14 } } }
        }
      }
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
      

<aside className="fixed z-30 left-0 top-0 h-full w-60 bg-white border-r border-gray-200 shadow-md flex flex-col transition-transform duration-500 ease-out transform translate-x-0">
<div className="flex items-center h-16 px-6 border-b border-gray-100">
<span className="text-2xl font-bold tracking-tight text-primary">SC</span>
<span className="ml-3 font-semibold text-lg tracking-tight text-primary">ClubDash</span>
</div>
<nav className="flex-1 py-4 px-2 space-y-4">
<ul className="space-y-1">
<li>
<a className="flex items-center px-4 py-2 rounded-lg bg-gray-100 font-semibold transition duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent" href="#">
<i className="w-5 h-5 mr-3" data-lucide="layout-dashboard"></i>
            Panoramica ordini
          </a>
</li>
<li>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="boxes"></i>
            Gestione prodotti
          </a>
</li>
<li>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="bar-chart-3"></i>
            Statistiche vendite
          </a>
</li>
<li>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="users"></i>
            Richieste soci
          </a>
</li>
<li>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="user"></i>
            Profilo utente
          </a>
</li>
</ul>
<div className="border-t border-gray-100 mt-6 pt-4">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="settings"></i>
          Impostazioni
        </a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 font-medium transition duration-200" href="#">
<i className="w-5 h-5 mr-3" data-lucide="help-circle"></i>
          Supporto
        </a>
</div>
</nav>
<div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100">
<img alt="user" className="w-9 h-9 rounded-full shadow" src="https://i.pravatar.cc/36?img=1"/>
<div>
<div className="font-semibold text-xs">Mario Rossi</div>
<div className="text-gray-400 text-xs">Admin</div>
</div>
</div>
</aside>

<div className="flex-1 ml-60 flex flex-col min-h-screen">

<header className="h-16 px-6 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm sticky top-0 z-20">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 rounded hover:bg-gray-100 focus:outline-none">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<h1 className="text-2xl font-semibold tracking-tight">Dashboard Club</h1>
</div>
<div className="flex items-center gap-6">
<button className="p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-accent transition">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-accent transition">
<i className="w-5 h-5" data-lucide="moon"></i>
</button>
<img alt="" className="w-8 h-8 rounded-full border-2 border-primary/10" src="https://i.pravatar.cc/32?img=3"/>
</div>
</header>

<main className="flex-1 p-4 md:p-8 space-y-8 bg-gradient-to-br from-white to-gray-50">

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.1s'}}>
<span className="bg-accent/10 text-accent p-3 rounded-full">
<i className="w-6 h-6" data-lucide="package"></i>
</span>
<div>
<div className="text-2xl font-semibold tracking-tight">128</div>
<div className="text-xs text-gray-500">Ordini totali</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.2s'}}>
<span className="bg-green-100 text-green-600 p-3 rounded-full">
<i className="w-6 h-6" data-lucide="clock"></i>
</span>
<div>
<div className="text-2xl font-semibold tracking-tight">14</div>
<div className="text-xs text-gray-500">Ordini in lavorazione</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.3s'}}>
<span className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
<i className="w-6 h-6" data-lucide="star"></i>
</span>
<div>
<div className="text-2xl font-semibold tracking-tight">OG Kush</div>
<div className="text-xs text-gray-500">Prodotto più richiesto</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.4s'}}>
<span className="bg-blue-100 text-blue-600 p-3 rounded-full">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</span>
<div>
<div className="text-2xl font-semibold tracking-tight">€2,300</div>
<div className="text-xs text-gray-500">Volume vendite</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.5s'}}>
<span className="bg-cyan-100 text-cyan-600 p-3 rounded-full">
<i className="w-6 h-6" data-lucide="droplet"></i>
</span>
<div>
<div className="text-2xl font-semibold tracking-tight">67</div>
<div className="text-xs text-gray-500">Bottiglie d’acqua</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl shadow border border-gray-100 p-6 animate-fade-in-up" style={{animationDelay: '.6s'}}>
<h2 className="text-lg font-semibold tracking-tight mb-4">Vendite per Categoria</h2>
<div className="mb-2 text-xs text-gray-400">Ultimi 30 giorni</div>
<div>
<canvas height="260" id="salesBarChart" width="400"></canvas>
</div>
</div>

<div className="bg-white rounded-xl shadow border border-gray-100 p-6 animate-fade-in-up" style={{animationDelay: '.7s'}}>
<h2 className="text-lg font-semibold tracking-tight mb-4">Richieste per Prodotto</h2>
<div>
<canvas height="260" id="requestsPieChart" width="400"></canvas>
</div>
</div>

<div className="bg-white rounded-xl shadow border border-gray-100 p-0 flex flex-col animate-fade-in-up" style={{animationDelay: '.8s'}}>
<div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
<h2 className="text-lg font-semibold tracking-tight">Richieste Soci</h2>
<div className="flex gap-2">
<select className="border-gray-200 rounded-lg px-2 py-1 text-sm focus:ring-accent focus:border-accent" id="statusFilter">
<option value="">Tutti</option>
<option value="in_attesa">In attesa</option>
<option value="in_evasione">In evasione</option>
<option value="completata">Completata</option>
</select>
<input className="border-gray-200 rounded-lg px-2 py-1 text-sm focus:ring-accent focus:border-accent" id="searchInput" placeholder="Cerca socio..." type="text"/>
</div>
</div>
<div className="overflow-auto max-h-[300px] transition-all">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr>
<th className="px-3 py-2 text-left font-semibold">Nome socio</th>
<th className="px-3 py-2 text-left font-semibold">Prodotto</th>
<th className="px-3 py-2 text-center font-semibold">Quantità</th>
<th className="px-3 py-2 text-center font-semibold">Data</th>
<th className="px-3 py-2 text-center font-semibold">Stato</th>
<th className="px-3 py-2"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="requestsTable">

</tbody>
</table>
</div>
</div>
</section>
</main>
</div>

<style>
    @keyframes fade-in-left { from { opacity:0; transform:translateX(-30px) scale(.97) blur(4px);} to { opacity:1; transform:none; filter:none;} }
    @keyframes fade-in-up { from { opacity:0; transform:translateY(30px) scale(.97) blur(4px);} to { opacity:1; transform:none; filter:none;} }
    .animate-fade-in-left { animation:fade-in-left .7s cubic-bezier(.4,0,.2,1) both; }
    .animate-fade-in-up { animation:fade-in-up .7s cubic-bezier(.4,0,.2,1) both; }
  </style>


    </>
  );
}
