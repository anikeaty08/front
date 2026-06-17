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



        // Init Icons
        lucide.createIcons();

        function switchTab(tabId, btnElement) {
            // 1. Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(v => {
                v.classList.add('hidden');
            });

            // 2. Show target view
            const target = document.getElementById('view-' + tabId);
            if(target) {
                target.classList.remove('hidden');
                // Re-trigger animation
                target.classList.remove('fade-enter');
                void target.offsetWidth; // trigger reflow
                target.classList.add('fade-enter');
            }

            // 3. Update Sidebar Active State
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('active', 'bg-blue-600/10', 'border-blue-500/20', 'text-white', 'shadow-lg');
                item.classList.add('text-slate-400');
                // Reset icon color
                const icon = item.querySelector('i');
                if(icon) icon.classList.remove('text-blue-400');
            });

            // Add active style to clicked button
            btnElement.classList.remove('text-slate-400');
            btnElement.classList.add('active');
            
            // Update Header Title
            const titles = {
                'dashboard': 'Panoramica Negozio',
                'appointments': 'Calendario Appuntamenti',
                'receptionist': 'Controllo Receptionist AI',
                'clients': 'Database Clienti',
                'finances': 'Gestione Finanziaria'
            };
            const subs = {
                'dashboard': 'Benvenuto nel pannello di controllo.',
                'appointments': 'Gestisci orari e disponibilità barbieri.',
                'receptionist': 'Monitoraggio chiamate in tempo reale.',
                'clients': 'Visualizza storico e preferenze.',
                'finances': 'Fatturato, spese e flussi di cassa.'
            }
            document.getElementById('page-title').innerText = titles[tabId];
            document.getElementById('page-subtitle').innerText = subs[tabId];
        }

        // Fake Data Updates
        setInterval(() => {
            // Randomly pulse the AI status
            const dots = document.querySelectorAll('.animate-pulse');
            // Logic simulated
        }, 3000);

    
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
      

<aside className="w-64 h-full flex flex-col border-r border-white/5 bg-[#050608] z-20 flex-shrink-0">
<div className="h-16 flex items-center px-6 border-b border-white/5 gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
<i className="text-white w-4 h-4" data-lucide="scissors"></i>
</div>
<span className="font-semibold text-white tracking-tight text-lg">Fade<span className="text-blue-500">AI</span></span>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-1">
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2 mt-2">Principale</p>
<button className="nav-item active w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="switchTab('dashboard', this)">
<i className="w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="layout-grid"></i>
<span className="font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="switchTab('appointments', this)">
<i className="w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="calendar"></i>
<span className="font-medium">Calendario</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="switchTab('receptionist', this)">
<i className="w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="phone-incoming"></i>
<span className="font-medium">Receptionist AI</span>
<span className="ml-auto text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">Live</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="switchTab('clients', this)">
<i className="w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="users"></i>
<span className="font-medium">Clienti CRM</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" onclick="switchTab('finances', this)">
<i className="w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="banknote"></i>
<span className="font-medium">Finanze &amp; Fatture</span>
</button>
</div>
<div className="p-4 border-t border-white/5">
<div className="glass-panel p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
<img className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=manager"/>
<div className="overflow-hidden">
<p className="text-xs font-medium text-white truncate">Admin Manager</p>
<p className="text-[10px] text-slate-500 truncate">BarberShop Milano</p>
</div>
<i className="w-4 h-4 text-slate-500 ml-auto" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#030406] relative">

<header className="glass-header h-16 flex items-center justify-between px-8 z-10 flex-shrink-0">
<div>
<h1 className="text-lg font-medium text-white tracking-tight" id="page-title">Panoramica Negozio</h1>
<p className="text-xs text-slate-500" id="page-subtitle">Benvenuto nel pannello di controllo.</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-slate-300">Sistema AI Operativo</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
<i className="w-5 h-5 text-slate-400" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#030406]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto relative scroll-smooth p-8" id="content-container">

<div className="view-section space-y-6 fade-enter" id="view-dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="glass-panel p-5 rounded-xl border-l-4 border-blue-500">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-400 uppercase">Fatturato Oggi</span>
<i className="w-4 h-4 text-green-400" data-lucide="trending-up"></i>
</div>
<h3 className="text-2xl font-semibold text-white">€840,00</h3>
<p className="text-xs text-slate-500 mt-1"><span className="text-green-400">+12%</span> rispetto a ieri</p>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-purple-500">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-400 uppercase">Appuntamenti</span>
<i className="w-4 h-4 text-purple-400" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-semibold text-white">18 / 22</h3>
<p className="text-xs text-slate-500 mt-1">4 slot ancora liberi</p>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-indigo-500">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-400 uppercase">Chiamate AI</span>
<i className="w-4 h-4 text-indigo-400" data-lucide="bot"></i>
</div>
<h3 className="text-2xl font-semibold text-white">42</h3>
<p className="text-xs text-slate-500 mt-1">36 prenotazioni automatiche</p>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-orange-500">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-slate-400 uppercase">Da Confermare</span>
<i className="w-4 h-4 text-orange-400" data-lucide="alert-circle"></i>
</div>
<h3 className="text-2xl font-semibold text-white">3</h3>
<p className="text-xs text-slate-500 mt-1">Richiedono azione manuale</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">

<div className="lg:col-span-2 glass-panel p-6 rounded-xl flex flex-col">
<h3 className="text-white font-medium mb-6">Andamento Settimanale</h3>
<div className="flex-1 flex items-end justify-between gap-2 px-4 relative">

<div className="w-full bg-blue-500/10 rounded-t h-[40%] hover:bg-blue-500/20 transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Lun: €450</div>
</div>
<div className="w-full bg-blue-500/20 rounded-t h-[60%] hover:bg-blue-500/30 transition-all relative group cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Mar: €620</div>
</div>
<div className="w-full bg-blue-500/10 rounded-t h-[50%] hover:bg-blue-500/20 transition-all relative group cursor-pointer"></div>
<div className="w-full bg-blue-500/30 rounded-t h-[75%] hover:bg-blue-500/40 transition-all relative group cursor-pointer"></div>
<div className="w-full bg-blue-500/60 rounded-t h-[90%] hover:bg-blue-500/70 transition-all relative group cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-bold">Ven: €1.1k</div>
</div>
<div className="w-full bg-blue-500/40 rounded-t h-[85%] hover:bg-blue-500/50 transition-all relative group cursor-pointer"></div>
<div className="w-full bg-blue-500/10 rounded-t h-[30%] hover:bg-blue-500/20 transition-all relative group cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-4 px-4">
<span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col">
<h3 className="text-white font-medium mb-4">Prossimi Clienti</h3>
<div className="flex-1 overflow-y-auto space-y-3 pr-2">

<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col items-center justify-center w-10 h-10 rounded bg-[#0b0c10] border border-white/10">
<span className="text-[10px] font-bold text-slate-400">14:30</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Marco Rossi</p>
<p className="text-xs text-slate-500 truncate">Sfumatura + Barba</p>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col items-center justify-center w-10 h-10 rounded bg-[#0b0c10] border border-white/10">
<span className="text-[10px] font-bold text-slate-400">15:15</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Luca Bianchi</p>
<p className="text-xs text-slate-500 truncate">Taglio Bimbo</p>
</div>
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col items-center justify-center w-10 h-10 rounded bg-[#0b0c10] border border-white/10">
<span className="text-[10px] font-bold text-slate-400">16:00</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Andrea Esposito</p>
<p className="text-xs text-slate-500 truncate">Rasatura Completa</p>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6 fade-enter" id="view-receptionist">
<div className="flex gap-6">

<div className="w-1/3 glass-panel p-6 rounded-xl border border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
<div className="flex justify-between items-center mb-6">
<span className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                AI In Ascolto
                            </span>
<button className="text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded text-white border border-white/10">Impostazioni</button>
</div>
<div className="h-32 flex items-center justify-center gap-1 mb-6">

<div className="w-1 h-4 bg-blue-500 rounded animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-8 bg-blue-400 rounded animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 h-12 bg-blue-300 rounded animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 h-6 bg-blue-400 rounded animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 h-3 bg-blue-500 rounded animate-[pulse_0.9s_ease-in-out_infinite]"></div>
</div>
<div className="space-y-3">
<div className="bg-[#0b0c10] p-3 rounded-lg border border-white/5">
<p className="text-[10px] text-slate-500 mb-1">Ultima Trascrizione (14:02)</p>
<p className="text-sm italic text-slate-300">"...Sì, vorrei prenotare per giovedì pomeriggio se possibile..."</p>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-red-500/10 text-red-400 text-xs font-medium hover:bg-red-500/20 border border-red-500/20">Interrompi</button>
<button className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 shadow-lg shadow-blue-500/20">Ascolta Live</button>
</div>
</div>
</div>

<div className="w-2/3 glass-panel rounded-xl overflow-hidden flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<h3 className="text-white font-medium">Registro Chiamate (Oggi)</h3>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] rounded bg-green-500/10 text-green-400 border border-green-500/20">24 Recuperate</span>
<span className="px-2 py-1 text-[10px] rounded bg-red-500/10 text-red-400 border border-red-500/20">2 Perse</span>
</div>
</div>
<div className="overflow-y-auto flex-1">
<table className="w-full text-left border-collapse">
<thead className="bg-white/5 text-xs text-slate-400 font-medium sticky top-0 backdrop-blur-md">
<tr>
<th className="p-4 font-medium">Orario</th>
<th className="p-4 font-medium">Cliente</th>
<th className="p-4 font-medium">Durata</th>
<th className="p-4 font-medium">Esito</th>
<th className="p-4 font-medium">Azione</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">

<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4 text-slate-400">14:02</td>
<td className="p-4 text-white font-medium">Giuseppe Verdi</td>
<td className="p-4 text-slate-500">1m 24s</td>
<td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Prenotato</span></td>
<td className="p-4"><button className="text-slate-500 hover:text-white"><i className="w-4 h-4" data-lucide="play-circle"></i></button></td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4 text-slate-400">13:45</td>
<td className="p-4 text-white font-medium">Numero Sconosciuto</td>
<td className="p-4 text-slate-500">0m 45s</td>
<td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Info Orari</span></td>
<td className="p-4"><button className="text-slate-500 hover:text-white"><i className="w-4 h-4" data-lucide="play-circle"></i></button></td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4 text-slate-400">12:10</td>
<td className="p-4 text-white font-medium">Mario Rossi</td>
<td className="p-4 text-slate-500">2m 10s</td>
<td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Richiamare</span></td>
<td className="p-4"><button className="text-slate-500 hover:text-white"><i className="w-4 h-4" data-lucide="phone-outgoing"></i></button></td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="p-4 text-slate-400">11:05</td>
<td className="p-4 text-white font-medium">Luigi Bianchi</td>
<td className="p-4 text-slate-500">1m 05s</td>
<td className="p-4"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Modifica Appt.</span></td>
<td className="p-4"><button className="text-slate-500 hover:text-white"><i className="w-4 h-4" data-lucide="play-circle"></i></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex flex-col h-full fade-enter" id="view-appointments">

<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-4">
<h2 className="text-xl font-medium text-white">Settembre 2023</h2>
<div className="flex bg-white/5 rounded-lg border border-white/10 p-0.5">
<button className="p-1 hover:bg-white/10 rounded"><i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i></button>
<button className="px-3 text-xs font-medium text-white">Oggi</button>
<button className="p-1 hover:bg-white/10 rounded"><i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="flex gap-2">
<select className="bg-[#0b0c10] border border-white/10 text-xs text-white rounded px-3 py-1.5 outline-none focus:border-blue-500">
<option>Tutti i Barbieri</option>
<option>Marco</option>
<option>Luca</option>
</select>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-4 py-1.5 rounded-lg flex items-center gap-2">
<i className="w-3 h-3" data-lucide="plus"></i> Nuovo
                        </button>
</div>
</div>

<div className="glass-panel flex-1 rounded-xl overflow-hidden flex flex-col border border-white/10 relative">

<div className="grid grid-cols-[60px_repeat(6,1fr)] bg-white/5 border-b border-white/10 text-xs text-slate-400 font-medium">
<div className="p-3 border-r border-white/5 text-center">GMT+1</div>
<div className="p-3 border-r border-white/5 text-center"><span className="block text-white">Lun</span>25</div>
<div className="p-3 border-r border-white/5 text-center bg-blue-500/5"><span className="block text-blue-400 font-bold">Mar</span>26</div>
<div className="p-3 border-r border-white/5 text-center"><span className="block text-white">Mer</span>27</div>
<div className="p-3 border-r border-white/5 text-center"><span className="block text-white">Gio</span>28</div>
<div className="p-3 border-r border-white/5 text-center"><span className="block text-white">Ven</span>29</div>
<div className="p-3 text-center"><span className="block text-white">Sab</span>30</div>
</div>

<div className="overflow-y-auto flex-1 relative bg-[#0b0c10]">
<div className="calendar-grid relative">

<div className="contents">

<div className="h-[60px] border-b border-white/5 border-r border-white/5 text-[10px] text-slate-500 p-1 text-right pr-2">09:00</div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5 bg-blue-900/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5"></div>

<div className="h-[60px] border-b border-white/5 border-r border-white/5 text-[10px] text-slate-500 p-1 text-right pr-2">10:00</div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5 bg-blue-900/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5"></div>

<div className="h-[60px] border-b border-white/5 border-r border-white/5 text-[10px] text-slate-500 p-1 text-right pr-2">11:00</div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5 bg-blue-900/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5"></div>

<div className="h-[60px] border-b border-white/5 border-r border-white/5 text-[10px] text-slate-500 p-1 text-right pr-2">12:00</div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5 bg-blue-900/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5"></div>

<div className="h-[60px] border-b border-white/5 border-r border-white/5 text-[10px] text-slate-500 p-1 text-right pr-2">13:00</div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5 bg-blue-900/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5 border-r border-white/5"></div>
<div className="h-[60px] border-b border-white/5"></div>
</div>


<div className="cal-event bg-blue-600/20 border-blue-500 text-blue-100" style={{gridColumn: '2', gridRow: '1', top: '5px', height: '50px'}}>
<div className="font-bold text-[10px]">Alessandro M.</div>
<div className="text-[9px] opacity-80">Taglio + Barba</div>
</div>

<div className="cal-event bg-green-600/20 border-green-500 text-green-100" style={{gridColumn: '3', gridRow: '2', top: '30px', height: '60px'}}>
<div className="font-bold text-[10px]">Mario Rossi</div>
<div className="text-[9px] opacity-80">Sfumatura (AI)</div>
</div>

<div className="cal-event bg-purple-600/20 border-purple-500 text-purple-100" style={{gridColumn: '3', gridRow: '4', top: '0px', height: '45px'}}>
<div className="font-bold text-[10px]">Luca B.</div>
<div className="text-[9px] opacity-80">Taglio Bimbo</div>
</div>

<div className="cal-event bg-slate-700/50 border-slate-500 text-slate-300" style={{gridColumn: '5', gridRow: '3', top: '10px', height: '40px'}}>
<div className="font-bold text-[10px]">Pausa Pranzo</div>
<div className="text-[9px] opacity-80">Staff</div>
</div>

<div className="cal-event bg-orange-600/20 border-orange-500 text-orange-100" style={{gridColumn: '6', gridRow: '2', top: '0px', height: '90px'}}>
<div className="font-bold text-[10px]">Matrimonio (Gruppo)</div>
<div className="text-[9px] opacity-80">Servizio completo x3</div>
</div>

<div className="absolute w-full border-t-2 border-red-500 z-20 pointer-events-none flex items-center" style={{top: '105px'}}>
<div className="w-2 h-2 bg-red-500 rounded-full -ml-1"></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6 fade-enter" id="view-clients">
<div className="flex justify-between items-center">
<div className="relative w-64">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-full bg-[#0b0c10] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:border-blue-500 outline-none" placeholder="Cerca cliente..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 text-xs bg-white/5 hover:bg-white/10 rounded border border-white/10 text-white">Esporta CSV</button>
<button className="px-3 py-2 text-xs bg-blue-600 hover:bg-blue-500 rounded text-white font-medium">Aggiungi Cliente</button>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left">
<thead className="bg-white/5 text-xs text-slate-400 font-medium">
<tr>
<th className="p-4">Nome Cliente</th>
<th className="p-4">Stato</th>
<th className="p-4">Ultima Visita</th>
<th className="p-4">Spesa Totale</th>
<th className="p-4">Note AI</th>
<th className="p-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">

<tr className="hover:bg-white/5 group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">JD</div>
<div>
<div className="font-medium text-white">John Doe</div>
<div className="text-[10px] text-slate-500">+39 333 1234567</div>
</div>
</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] border border-yellow-500/20">VIP Gold</span></td>
<td className="p-4 text-slate-400">2 giorni fa</td>
<td className="p-4 text-white font-medium">€1,240.00</td>
<td className="p-4 text-xs text-slate-500 max-w-xs truncate">Preferisce gel opaco, non parlare di calcio.</td>
<td className="p-4 text-right"><i className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-white/5 group">
<td className="p-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="font-medium text-white">Marco Rossi</div>
<div className="text-[10px] text-slate-500">+39 345 9876543</div>
</div>
</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-400 text-[10px] border border-slate-500/20">Nuovo</span></td>
<td className="p-4 text-slate-400">Oggi</td>
<td className="p-4 text-white font-medium">€25.00</td>
<td className="p-4 text-xs text-slate-500 max-w-xs truncate">Prenotato via AI Receptionist.</td>
<td className="p-4 text-right"><i className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" data-lucide="more-horizontal"></i></td>
</tr>

<tr className="hover:bg-white/5 group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs border border-purple-500/30">LS</div>
<div>
<div className="font-medium text-white">Luca Spada</div>
<div className="text-[10px] text-slate-500">+39 333 0000000</div>
</div>
</div>
</td>
<td className="p-4"><span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20">Regolare</span></td>
<td className="p-4 text-slate-400">1 settimana fa</td>
<td className="p-4 text-white font-medium">€450.00</td>
<td className="p-4 text-xs text-slate-500 max-w-xs truncate">Solito taglio ogni 3 settimane.</td>
<td className="p-4 text-right"><i className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" data-lucide="more-horizontal"></i></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden space-y-6 fade-enter" id="view-finances">
<div className="grid grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10"><i className="w-12 h-12 text-blue-500" data-lucide="wallet"></i></div>
<p className="text-slate-400 text-xs font-medium uppercase">Netto Mensile</p>
<h2 className="text-3xl font-bold text-white mt-1">€12.450,00</h2>
<div className="mt-4 h-1 w-full bg-blue-900/30 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[70%]"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl">
<p className="text-slate-400 text-xs font-medium uppercase">Transazioni Stripe</p>
<h2 className="text-3xl font-bold text-white mt-1">€8.240,00</h2>
<p className="text-xs text-green-400 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> +15% vs contanti</p>
</div>
<div className="glass-panel p-6 rounded-xl">
<p className="text-slate-400 text-xs font-medium uppercase">Spese Operative</p>
<h2 className="text-3xl font-bold text-white mt-1 text-red-100">€2.100,00</h2>
<p className="text-xs text-slate-500 mt-1">Affitto, Prodotti, Utility</p>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h3 className="font-medium text-white">Transazioni Recenti</h3>
<button className="text-xs text-blue-400 hover:text-blue-300">Scarica Report PDF</button>
</div>
<table className="w-full text-left">
<thead className="bg-white/5 text-xs text-slate-400 font-medium">
<tr>
<th className="p-4">ID Fattura</th>
<th className="p-4">Data</th>
<th className="p-4">Descrizione</th>
<th className="p-4">Metodo</th>
<th className="p-4">Importo</th>
<th className="p-4">Stato</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">
<tr className="hover:bg-white/5">
<td className="p-4 text-slate-500 font-mono text-xs">#INV-2023-001</td>
<td className="p-4 text-slate-400">26 Set 2023</td>
<td className="p-4 text-white">Servizio Taglio + Barba</td>
<td className="p-4"><div className="flex items-center gap-2"><i className="w-3 h-3 text-purple-400" data-lucide="credit-card"></i> Stripe</div></td>
<td className="p-4 text-white font-medium">€35.00</td>
<td className="p-4"><span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] border border-green-500/20">Pagato</span></td>
</tr>
<tr className="hover:bg-white/5">
<td className="p-4 text-slate-500 font-mono text-xs">#INV-2023-002</td>
<td className="p-4 text-slate-400">26 Set 2023</td>
<td className="p-4 text-white">Prodotti (Cera x2)</td>
<td className="p-4"><div className="flex items-center gap-2"><i className="w-3 h-3 text-yellow-400" data-lucide="coins"></i> Contanti</div></td>
<td className="p-4 text-white font-medium">€40.00</td>
<td className="p-4"><span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] border border-green-500/20">Incassato</span></td>
</tr>
<tr className="hover:bg-white/5">
<td className="p-4 text-slate-500 font-mono text-xs">#EXP-2023-089</td>
<td className="p-4 text-slate-400">25 Set 2023</td>
<td className="p-4 text-white">Fornitura Lame</td>
<td className="p-4"><div className="flex items-center gap-2"><i className="w-3 h-3 text-slate-400" data-lucide="credit-card"></i> Visa **4242</div></td>
<td className="p-4 text-red-300 font-medium">-€120.00</td>
<td className="p-4"><span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 text-[10px] border border-slate-500/20">Uscita</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
