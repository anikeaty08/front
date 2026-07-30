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
      
    lucide.createIcons();

    // Navigation (desktop & mobile)
    function showSection(section) {
      document.querySelectorAll('section[id^="section-"]').forEach(s => s.classList.add('hidden'));
      document.getElementById(`section-${section}`).classList.remove('hidden');
    }
    document.getElementById('nav-soci').onclick = () => showSection('soci');
    document.getElementById('nav-magazzino').onclick = () => showSection('magazzino');
    document.getElementById('nav-vendite').onclick = () => showSection('vendite');
    document.getElementById('nav-impostazioni').onclick = () => showSection('impostazioni');
    document.getElementById('mobile-soci').onclick = () => showSection('soci');
    document.getElementById('mobile-magazzino').onclick = () => showSection('magazzino');
    document.getElementById('mobile-vendite').onclick = () => showSection('vendite');
    document.getElementById('mobile-impostazioni').onclick = () => showSection('impostazioni');

    // Chart.js vendite (dummy data)
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      const ctx = document.getElementById('venditeChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
          datasets: [{
            label: 'Vendite (g/pz)',
            data: [8, 11, 7, 9, 14, 12, 10],
            backgroundColor: 'rgb(34,197,94,0.8)',
            borderRadius: 8,
            maxBarThickness:30
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#d1fae5', font: { family: 'Inter', weight: 500 } } },
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#d1fae5', font: { family: 'Inter', weight: 500 } } }
          },
        }
      });
    });

    // Modal per Socio
    function openSocioModal(nome) {
      document.getElementById('modal-socio').classList.remove('hidden');
      // Dummy logic for demo: assign email and name based on nome
      let email = '-';
      if (nome === "Sofia D'Amico") email = "sofia@email.com";
      else if (nome === "Marco Neri") email = "marco@email.com";
      else if (nome === "Chiara Blu") email = "chiara@email.com";
      document.getElementById('modal-socio-nome').textContent = nome;
      document.getElementById('modal-socio-email').textContent = email;
      document.getElementById('modal-socio-title').textContent = 'Dettagli socio';
    }
    function closeSocioModal() {
      document.getElementById('modal-socio').classList.add('hidden');
    }

    // Optional: click outside to close modal
    document.getElementById('modal-socio').addEventListener('click', function(e) {
      if (e.target === this) closeSocioModal();
    });

    // Optional: ESC key closes modal
    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape") closeSocioModal();
    });

    // Highlight active nav (basic demo)
    function highlightNav(section) {
      document.querySelectorAll('aside nav button').forEach(btn => btn.classList.remove('bg-neutral-800', 'outline', 'outline-1', 'outline-green-400'));
      document.querySelectorAll('nav button[id^="mobile-"]').forEach(btn => btn.classList.remove('bg-neutral-800', 'outline', 'outline-1', 'outline-green-400'));
      const desk = document.getElementById(`nav-${section}`);
      const mob = document.getElementById(`mobile-${section}`);
      if (desk) desk.classList.add('bg-neutral-800', 'outline', 'outline-1', 'outline-green-400');
      if (mob) mob.classList.add('bg-neutral-800', 'outline', 'outline-1', 'outline-green-400');
    }
    // Add to section switching
    const sectionIds = ['soci','magazzino','vendite','impostazioni'];
    sectionIds.forEach(section => {
      document.getElementById(`nav-${section}`).addEventListener('click', () => highlightNav(section));
      document.getElementById(`mobile-${section}`).addEventListener('click', () => highlightNav(section));
    });
    // Default nav highlight
    highlightNav('soci');
  
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
      

<aside className="hidden md:flex flex-col w-60 px-6 py-8 border-r min-h-screen gap-10 animate-fade-in-left bg-neutral-900 border-neutral-800" style={{animationDelay: `0.15s`}}>
<div className="flex items-center gap-3 mb-8">
<span className="text-2xl font-semibold tracking-tight text-indigo-400">CSC</span>
<span className="text-xs font-medium tracking-tight text-neutral-400">Gestione</span>
</div>
<nav className="flex flex-col gap-2">
<button className="flex items-center gap-3 py-2 px-3 rounded-lg transition-all hover:outline hover:outline-1 text-sm font-medium tracking-tight focus:bg-neutral-800 active:bg-neutral-800 hover:bg-neutral-800 hover:outline-indigo-400" id="nav-soci">
<svg className="lucide lucide-users w-5 h-5 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
        Soci
      </button>
<button className="flex gap-3 transition-all hover:outline hover:outline-1 hover:bg-neutral-800 hover:outline-indigo-400 outline outline-1 outline-green-400 text-sm font-medium tracking-tight bg-neutral-800 rounded-lg pt-2 pr-3 pb-2 pl-3 items-center" id="nav-magazzino">
<svg className="lucide lucide-boxes w-5 h-5 stroke-[1.5]" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
        Magazzino
      </button>
<button className="flex items-center gap-3 py-2 px-3 rounded-lg transition-all hover:outline hover:outline-1 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:outline-indigo-400" id="nav-vendite">
<svg className="lucide lucide-shopping-cart w-5 h-5 stroke-[1.5]" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
        Vendite
      </button>
<button className="flex items-center gap-3 py-2 px-3 rounded-lg transition-all hover:outline hover:outline-1 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:outline-indigo-400" id="nav-impostazioni">
<svg className="lucide lucide-settings w-5 h-5 stroke-[1.5]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
        Impostazioni
      </button>
</nav>
<div className="mt-auto border-t pt-6 flex flex-col gap-2 border-neutral-800">
<div className="flex items-center gap-2">
<img alt="Admin" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<div className="text-sm font-medium">Mario Rossi</div>
<div className="text-xs text-neutral-400">Admin</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col p-4 md:p-10 gap-8 animate-fade-in-up" style={{animationDelay: `0.25s`}}>

<div className="flex md:hidden items-center justify-between mb-4">
<span className="text-xl font-semibold tracking-tight text-indigo-400">CSC</span>
<button className="rounded-full p-2 transition-colors outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<section className="animate-fade-in-up hidden" id="section-soci" style={{animationDelay: `0.35s`}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Gestione Soci</h2>
<p className="text-sm mb-6 text-neutral-400">Richieste di iscrizione, elenco membri e stato delle tessere.</p>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 border rounded-2xl p-6 shadow-lg mb-8 animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.45s`}}>
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-semibold tracking-tight">Richieste in attesa <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-neutral-800 text-indigo-400">2</span></h3>
<button className="flex items-center gap-1 rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-400 hover:bg-indigo-900/20" id="btn-add-socio" title="Aggiungi socio">
<svg className="lucide lucide-user-plus w-5 h-5 stroke-[1.5]" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span className="font-medium text-sm">Nuovo</span>
</button>
</div>
<div className="divide-y divide-neutral-800">
<div className="flex justify-between items-center py-3">
<div className="flex items-center gap-3">
<img alt="Nuovo socio" className="w-10 h-10 rounded-full object-cover blur-sm animate-blur-in" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=56&h=56&q=80" style={{animationDelay: `0.55s`}} />
<div>
<div className="font-medium tracking-tight">Giulia Bianchi</div>
<div className="text-xs text-neutral-400">giulia.b@email.com</div>
</div>
</div>
<div className="flex gap-2">
<button className="rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-400 hover:bg-indigo-900/20" title="Approva">
<svg className="lucide lucide-check-circle w-5 h-5 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</button>
<button className="rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-blue-400 text-blue-400 hover:bg-blue-900/20" title="Rifiuta">
<svg className="lucide lucide-x-circle w-5 h-5 stroke-[1.5]" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
</button>
</div>
</div>
<div className="flex justify-between items-center py-3">
<div className="flex items-center gap-3">
<img alt="Nuovo socio" className="w-10 h-10 rounded-full object-cover blur-sm animate-blur-in" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{animationDelay: `0.65s`}} />
<div>
<div className="font-medium tracking-tight">Luca Verdi</div>
<div className="text-xs text-neutral-400">luca.v@email.com</div>
</div>
</div>
<div className="flex gap-2">
<button className="rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-400 hover:bg-indigo-900/20" title="Approva">
<svg className="lucide lucide-check-circle w-5 h-5 stroke-[1.5]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</button>
<button className="rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-blue-400 text-blue-400 hover:bg-blue-900/20" title="Rifiuta">
<svg className="lucide lucide-x-circle w-5 h-5 stroke-[1.5]" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.55s`}}>
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-semibold tracking-tight">Membri attivi</h3>
<div className="flex gap-2">
<input className="rounded-lg border px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-neutral-500 transition-all bg-neutral-800 border-neutral-700" placeholder="Cerca membro..." type="text" />
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" id="filter-soci" title="Filtri avanzati">
<svg className="lucide lucide-filter w-5 h-5 stroke-[1.5]" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="border-b text-neutral-400 border-neutral-800">
<th className="py-2 px-1 text-left font-semibold">Nome</th>
<th className="py-2 px-1 text-left font-semibold">Email</th>
<th className="py-2 px-1 text-left font-semibold">Tessera</th>
<th className="py-2 px-1"></th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800">
<tr>
<td className="py-2 px-1 font-medium">Sofia D'Amico</td>
<td className="py-2 px-1 text-neutral-400">sofia@email.com</td>
<td className="py-2 px-1">
<span className="inline-block font-medium text-xs px-2 py-0.5 rounded bg-indigo-900/40 text-indigo-300">Attiva</span>
</td>
<td>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" onClick={(e) => { openSocioModal('Sofia D\'Amico') }} title="Dettagli">
<svg className="lucide lucide-eye w-4 h-4 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</td>
</tr>
<tr>
<td className="py-2 px-1 font-medium">Marco Neri</td>
<td className="py-2 px-1 text-neutral-400">marco@email.com</td>
<td className="py-2 px-1">
<span className="inline-block font-medium text-xs px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300">In scadenza</span>
</td>
<td>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" onClick={(e) => { openSocioModal('Marco Neri') }} title="Dettagli">
<svg className="lucide lucide-eye w-4 h-4 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</td>
</tr>
<tr>
<td className="py-2 px-1 font-medium">Chiara Blu</td>
<td className="py-2 px-1 text-neutral-400">chiara@email.com</td>
<td className="py-2 px-1">
<span className="inline-block font-medium text-xs px-2 py-0.5 rounded bg-blue-900/40 text-blue-300">Scaduta</span>
</td>
<td>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" onClick={(e) => { openSocioModal('Chiara Blu') }} title="Dettagli">
<svg className="lucide lucide-eye w-4 h-4 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
<section className="animate-fade-in-up" id="section-magazzino" style={{animationDelay: `0.35s`}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Magazzino</h2>
<p className="text-sm mb-6 text-neutral-400">Gestisci i prodotti per categoria, aggiorna quantità e visualizza lo storico.</p>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.45s`}}>
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-semibold tracking-tight">Categorie</h3>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Aggiungi categoria">
<svg className="lucide lucide-plus-circle w-5 h-5 stroke-[1.5]" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
<ul className="flex gap-2 flex-wrap">
<li><button className="px-3 py-1.5 rounded-lg font-medium hover:outline hover:outline-1 transition-all bg-indigo-900/40 text-indigo-300 hover:outline-indigo-400">Infiorescenze</button></li>
<li><button className="px-3 py-1.5 rounded-lg font-medium hover:outline hover:outline-1 transition-all bg-neutral-800 text-neutral-200 hover:outline-indigo-400">Edibili</button></li>
<li><button className="px-3 py-1.5 rounded-lg font-medium hover:outline hover:outline-1 transition-all bg-neutral-800 text-neutral-200 hover:outline-indigo-400">Accessori</button></li>
</ul>
</div>
<div className="flex-1 border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.55s`}}>
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-semibold tracking-tight">Prodotti</h3>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" id="btn-add-prodotto" title="Aggiungi prodotto">
<svg className="lucide lucide-plus-square w-5 h-5 stroke-[1.5]" data-lucide="plus-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
<div className="divide-y divide-neutral-800">
<div className="flex justify-between items-center py-3">
<div>
<div className="font-medium tracking-tight">Amnesia Haze</div>
<div className="text-xs text-neutral-400">Infiorescenze</div>
</div>
<div className="flex items-center gap-3">
<span className="font-semibold text-indigo-400">320g</span>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Aggiungi">
<svg className="lucide lucide-plus-circle w-5 h-5 stroke-[1.5]" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Rimuovi">
<svg className="lucide lucide-minus-circle w-5 h-5 stroke-[1.5]" data-lucide="minus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
</button>
</div>
</div>
<div className="flex justify-between items-center py-3">
<div>
<div className="font-medium tracking-tight">Brownie CBD</div>
<div className="text-xs text-neutral-400">Edibili</div>
</div>
<div className="flex items-center gap-3">
<span className="font-semibold text-indigo-400">24pz</span>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Aggiungi">
<svg className="lucide lucide-plus-circle w-5 h-5 stroke-[1.5]" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Rimuovi">
<svg className="lucide lucide-minus-circle w-5 h-5 stroke-[1.5]" data-lucide="minus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
</button>
</div>
</div>
<div className="flex justify-between items-center py-3">
<div>
<div className="font-medium tracking-tight">Cartine Bio</div>
<div className="text-xs text-neutral-400">Accessori</div>
</div>
<div className="flex items-center gap-3">
<span className="font-semibold text-indigo-400">180pz</span>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Aggiungi">
<svg className="lucide lucide-plus-circle w-5 h-5 stroke-[1.5]" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<button className="rounded p-1 outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" title="Rimuovi">
<svg className="lucide lucide-minus-circle w-5 h-5 stroke-[1.5]" data-lucide="minus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="border rounded-2xl p-6 shadow-lg mt-8 animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.65s`}}>
<h3 className="text-lg font-semibold tracking-tight mb-3">Storico Movimenti</h3>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="border-b text-neutral-400 border-neutral-800">
<th className="py-2 px-1 text-left font-semibold">Data</th>
<th className="py-2 px-1 text-left font-semibold">Prodotto</th>
<th className="py-2 px-1 text-left font-semibold">Quantità</th>
<th className="py-2 px-1 text-left font-semibold">Operazione</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800">
<tr>
<td className="py-2 px-1">24/05</td>
<td className="py-2 px-1">Amnesia Haze</td>
<td className="py-2 px-1 text-indigo-400">+100g</td>
<td className="py-2 px-1">Rifornimento</td>
</tr>
<tr>
<td className="py-2 px-1">23/05</td>
<td className="py-2 px-1">Cartine Bio</td>
<td className="py-2 px-1 text-blue-400">-10pz</td>
<td className="py-2 px-1">Uscita</td>
</tr>
<tr>
<td className="py-2 px-1">23/05</td>
<td className="py-2 px-1">Brownie CBD</td>
<td className="py-2 px-1 text-indigo-400">+24pz</td>
<td className="py-2 px-1">Rifornimento</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<section className="hidden animate-fade-in-up" id="section-vendite" style={{animationDelay: `0.35s`}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Vendite</h2>
<p className="text-sm mb-6 text-neutral-400">Registra vendite ai soci, consulta lo storico e analizza le statistiche.</p>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.45s`}}>
<div className="flex justify-between items-center mb-3">
<h3 className="text-lg font-semibold tracking-tight">Nuova vendita</h3>
<button className="flex items-center gap-1 rounded-lg px-2 py-1 transition-all outline-none focus:ring-2 focus:ring-indigo-400 text-indigo-400 hover:bg-indigo-900/20" id="btn-add-vendita" title="Nuova vendita">
<svg className="lucide lucide-plus-circle w-5 h-5 stroke-[1.5]" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
<span className="font-medium text-sm">Aggiungi</span>
</button>
</div>
<form className="flex flex-col gap-3">
<input className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-neutral-500 transition-all bg-neutral-800 border-neutral-700" placeholder="Cerca socio..." type="text" />
<select className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-neutral-800 border-neutral-700 text-neutral-200">
<option>Amnesia Haze - 1g</option>
<option>Brownie CBD - 1pz</option>
<option>Cartine Bio - 1pz</option>
</select>
<div className="flex gap-2">
<input className="w-16 rounded-lg border px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center bg-neutral-800 border-neutral-700" min="1" type="number" value="1" />
<button className="bg-indigo-500 font-semibold px-4 py-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-400 text-neutral-900">Registra</button>
</div>
</form>
</div>
<div className="flex-1 border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.55s`}}>
<h3 className="text-lg font-semibold tracking-tight mb-3">Statistiche vendite</h3>
<div className="w-full h-56 relative">
<div>
<canvas className="w-full h-56" height="0" id="venditeChart" style={{display: `block`, boxSizing: `border-box`, height: `0px`, width: `0px`}} width="0"></canvas>
</div>
</div>
</div>
</div>
<div className="border rounded-2xl p-6 shadow-lg mt-8 animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.65s`}}>
<h3 className="text-lg font-semibold tracking-tight mb-3">Storico vendite</h3>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="border-b text-neutral-400 border-neutral-800">
<th className="py-2 px-1 text-left font-semibold">Data</th>
<th className="py-2 px-1 text-left font-semibold">Socio</th>
<th className="py-2 px-1 text-left font-semibold">Prodotto</th>
<th className="py-2 px-1 text-left font-semibold">Quantità</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800">
<tr>
<td className="py-2 px-1">24/05</td>
<td className="py-2 px-1">Sofia D'Amico</td>
<td className="py-2 px-1">Amnesia Haze</td>
<td className="py-2 px-1">2g</td>
</tr>
<tr>
<td className="py-2 px-1">24/05</td>
<td className="py-2 px-1">Marco Neri</td>
<td className="py-2 px-1">Brownie CBD</td>
<td className="py-2 px-1">1pz</td>
</tr>
<tr>
<td className="py-2 px-1">23/05</td>
<td className="py-2 px-1">Chiara Blu</td>
<td className="py-2 px-1">Cartine Bio</td>
<td className="py-2 px-1">3pz</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden animate-fade-in-up" id="section-impostazioni" style={{animationDelay: `0.35s`}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Impostazioni</h2>
<p className="text-sm mb-6 text-neutral-400">Gestisci le preferenze e la sicurezza dell’account.</p>
<div className="border rounded-2xl p-6 shadow-lg animate-fade-in-up bg-neutral-900/70 border-neutral-800" style={{animationDelay: `0.45s`}}>
<form className="max-w-xl flex flex-col gap-6">
<div>
<label className="block text-sm font-medium mb-1 text-neutral-300">Nome utente</label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-neutral-500 transition-all bg-neutral-800 border-neutral-700" type="text" value="Mario Rossi" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-neutral-300">Email</label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-neutral-500 transition-all bg-neutral-800 border-neutral-700" type="email" value="mario@email.com" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-neutral-300">Tema interfaccia</label>
<select className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-neutral-800 border-neutral-700 text-neutral-200">
<option>Scuro</option>
<option>Chiaro</option>
</select>
</div>
<div className="flex items-center mt-2 gap-2">
<input className="w-5 h-5 rounded-lg border focus:ring-2 focus:ring-indigo-400 accent-indigo-400 border-neutral-700" id="notifiche" type="checkbox" />
<label className="text-sm font-medium text-neutral-300" htmlFor="notifiche">Ricevi notifiche email</label>
</div>
<button className="bg-indigo-500 font-semibold px-5 py-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-indigo-400 mt-4 w-fit hover:bg-indigo-400 text-neutral-900">Salva modifiche</button>
</form>
</div>
</section>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 border-t flex z-30 bg-neutral-900 border-neutral-800">
<button className="flex-1 flex flex-col items-center py-2 transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" id="mobile-soci">
<svg className="lucide lucide-users w-5 h-5 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs mt-1 font-medium tracking-tight">Soci</span>
</button>
<button className="flex-1 flex flex-col items-center py-2 transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800 bg-neutral-800 outline outline-1 outline-green-400" id="mobile-magazzino">
<svg className="lucide lucide-boxes w-5 h-5 stroke-[1.5]" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
<span className="text-xs mt-1 font-medium tracking-tight">Magazzino</span>
</button>
<button className="flex-1 flex flex-col items-center py-2 transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" id="mobile-vendite">
<svg className="lucide lucide-shopping-cart w-5 h-5 stroke-[1.5]" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="text-xs mt-1 font-medium tracking-tight">Vendite</span>
</button>
<button className="flex-1 flex flex-col items-center py-2 transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-neutral-800" id="mobile-impostazioni">
<svg className="lucide lucide-settings w-5 h-5 stroke-[1.5]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs mt-1 font-medium tracking-tight">Impostazioni</span>
</button>
</nav>

<div className="fixed inset-0 flex items-center justify-center z-50 hidden bg-black/60" id="modal-socio">
<div className="border rounded-xl p-8 shadow-2xl w-full max-w-md animate-fade-in-up bg-neutral-900 border-neutral-700" style={{animationDelay: `0.12s`}}>
<div className="flex justify-between items-center mb-4">
<h4 className="text-lg font-semibold tracking-tight" id="modal-socio-title">Dettagli socio</h4>
<button className="transition-colors text-neutral-400 hover:text-indigo-400" onClick={(e) => { closeSocioModal() }}>
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div>
<img alt="Socio" className="mx-auto mb-3 w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=80&h=80&q=80" />
<div className="text-center mb-2">
<div className="font-semibold text-lg" id="modal-socio-nome"></div>
<div className="text-sm text-neutral-400">Email: <span id="modal-socio-email">-</span></div>
</div>
<div className="flex justify-center gap-2 mt-4">
<button className="bg-indigo-500 font-semibold px-4 py-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-400 text-neutral-900">Invia Email</button>
<button className="font-semibold px-4 py-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-indigo-400 bg-neutral-800 hover:bg-neutral-700 text-neutral-200">Modifica</button>
</div>
</div>
</div>
</div>



    </>
  );
}
