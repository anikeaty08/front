import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
  }, []);

  return (
    <>
      

<aside className="fixed z-30 left-0 top-0 h-full w-60 bg-white border-r border-gray-200 shadow-md flex flex-col transition-transform duration-500 ease-out transform translate-x-0">
<div className="flex items-center h-16 px-6 border-b border-gray-100">
<span className="text-2xl tracking-tight text-primary font-manrope font-medium" style={{}}>SC</span>
<span className="ml-3 font-semibold text-lg tracking-tight text-primary font-sans" style={{}}>ClubDash</span>
</div>
<nav className="flex-1 py-4 px-2 space-y-4">
<ul className="space-y-1">
<li>
<a className="flex items-center px-4 py-2 rounded-lg bg-gray-100 font-semibold transition duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent font-sans" href="#" style={{}}>
<svg className="lucide lucide-layout-dashboard w-5 h-5 mr-3" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
            Panoramica ordini
          </a>
</li>
<li className="">
<a className="flex items-center hover:bg-gray-100 transition duration-200 font-medium rounded-lg pt-2 pr-4 pb-2 pl-4" href="#" style={{}}>
<svg className="lucide lucide-boxes w-5 h-5 mr-3" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
            Gestione prodotti
          </a>
</li>
<li className="">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-3 w-5 h-5 mr-3" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
            Statistiche vendite
          </a>
</li>
<li className="">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-users w-5 h-5 mr-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Richieste soci
          </a>
</li>
<li className="">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 font-medium transition duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-user w-5 h-5 mr-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Profilo utente
          </a>
</li>
</ul>
<div className="border-t border-gray-100 mt-6 pt-4">
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 font-medium transition duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-settings w-5 h-5 mr-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Impostazioni
        </a>
<a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-500 font-medium transition duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-help-circle w-5 h-5 mr-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
          Supporto
        </a>
</div>
</nav>
<div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100">
<img alt="user" className="w-9 h-9 rounded-full shadow" src="https://i.pravatar.cc/36?img=1"/>
<div>
<div className="font-semibold text-xs font-sans" style={{}}>Mario Rossi</div>
<div className="text-gray-400 text-xs font-sans" style={{}}>Admin</div>
</div>
</div>
</aside>

<div className="flex-1 ml-60 flex flex-col min-h-screen">

<header className="h-16 px-6 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm sticky top-0 z-20">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 rounded hover:bg-gray-100 focus:outline-none">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<h1 className="text-2xl tracking-tight font-manrope font-medium" style={{}}>Dashboard Club</h1>
</div>
<div className="flex items-center gap-6">
<button className="p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-accent transition">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-accent transition">
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<img alt="" className="w-8 h-8 rounded-full border-2 border-primary/10" src="https://i.pravatar.cc/32?img=3"/>
</div>
</header>

<main className="flex-1 p-4 md:p-8 space-y-8 bg-gradient-to-br from-white to-gray-50">

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.1s'}}>
<span className="bg-accent/10 text-accent p-3 rounded-full">
<svg className="lucide lucide-package w-6 h-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</span>
<div className="">
<div className="text-2xl tracking-tight font-manrope font-medium" style={{}}>128</div>
<div className="text-xs text-gray-500 font-sans" style={{}}>Ordini totali</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.2s'}}>
<span className="bg-green-100 text-green-600 p-3 rounded-full">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div>
<div className="text-2xl tracking-tight font-manrope font-medium" style={{}}>14</div>
<div className="text-xs text-gray-500 font-sans" style={{}}>Ordini in lavorazione</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.3s'}}>
<span className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
<svg className="lucide lucide-star w-6 h-6" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<div>
<div className="text-2xl tracking-tight font-manrope font-medium" style={{}}>OG Kush</div>
<div className="text-xs text-gray-500 font-sans" style={{}}>Prodotto più richiesto</div>
</div>
</div>
<div className="bg-white rounded-xl shadow transition duration-500 ease-in-out border border-gray-100 p-6 flex items-center gap-4 animate-fade-in-left" style={{animationDelay: '.4s'}}>
<span className="bg-blue-100 text-blue-600 p-3 rounded-full">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</span>
<div className="">
<div className="text-2xl tracking-tight font-manrope font-medium" style={{}}>€2,300</div>
<div className="text-xs text-gray-500 font-sans" style={{}}>Volume vendite</div>
</div>
</div>
<div className="transition duration-500 ease-in-out flex gap-4 animate-fade-in-left bg-white border-gray-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow items-center" style={{animationDelay: '.5s'}}>
<span className="bg-cyan-100 text-cyan-600 p-3 rounded-full">
<svg className="lucide lucide-droplet w-6 h-6" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</span>
<div className="">
<div className="text-2xl tracking-tight font-manrope font-medium" style={{}}>67</div>
<div className="text-xs text-gray-500 font-sans" style={{}}>Bottiglie d’acqua</div>
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
