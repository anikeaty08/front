import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple interactions for demo purposes
        const nodes = document.querySelectorAll('.workflow-node');
        
        nodes.forEach(node => {
            node.addEventListener('click', (e) => {
                // Remove selected from all
                nodes.forEach(n => n.classList.remove('selected'));
                // Add to clicked
                node.classList.add('selected');
                e.stopPropagation();
            });
            
            // Basic drag simulation (visual only)
            node.addEventListener('mousedown', function(e) {
                this.style.cursor = 'grabbing';
            });
            
            node.addEventListener('mouseup', function(e) {
                this.style.cursor = 'grab';
            });
        });

        // Click on canvas deselects
        document.getElementById('canvas-content').addEventListener('click', (e) => {
            if(e.target.id === 'canvas-content') {
                nodes.forEach(n => n.classList.remove('selected'));
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-72 flex flex-col bg-[#05080e] border-r border-white/5 z-20 shrink-0">

<div className="p-5 border-b border-white/5">
<h1 className="text-white font-medium tracking-tight text-base flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
                Komponenty
            </h1>
<p className="text-[11px] text-slate-500 mt-1">Przeciągnij elementy na obszar roboczy</p>
</div>

<div className="px-4 py-3 border-b border-white/5 bg-[#03060a]/50">
<div className="relative group">
<iconify-icon className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-[#0F1218] transition-all" placeholder="Szukaj bloków..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Triggery
                </h3>
<div className="space-y-2">
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:user-plus-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Nowy Lead</span>
<span className="text-[10px] text-slate-600">Gdy pojawi się lead</span>
</div>
</div>
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Nowy Email</span>
<span className="text-[10px] text-slate-600">Przychodząca wiadomość</span>
</div>
</div>
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Harmonogram</span>
<span className="text-[10px] text-slate-600">Cykliczne zdarzenie</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon> Akcje
                </h3>
<div className="space-y-2">
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Wyślij Email</span>
<span className="text-[10px] text-slate-600">Automatyczna wysyłka</span>
</div>
</div>
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Utwórz Zadanie</span>
<span className="text-[10px] text-slate-600">Dodaj do listy</span>
</div>
</div>
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Powiadomienie</span>
<span className="text-[10px] text-slate-600">Push lub Slack</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
<iconify-icon icon="solar:branching-paths-down-linear"></iconify-icon> Logika
                </h3>
<div className="space-y-2">
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Warunek (If/Else)</span>
<span className="text-[10px] text-slate-600">Rozwidlenie ścieżki</span>
</div>
</div>
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:hourglass-line-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">Opóźnienie</span>
<span className="text-[10px] text-slate-600">Czekaj X czasu</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon> Integracje
                </h3>
<div className="space-y-2">
<div className="draggable-item group flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-grab active:cursor-grabbing transition-all">
<div className="icon-container w-8 h-8 rounded bg-[#0F1218] border border-white/5 flex items-center justify-center text-slate-400 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200 group-hover:text-white">CRM Update</span>
<span className="text-[10px] text-slate-600">Salesforce / HubSpot</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-[#03060a]">

<header className="h-16 border-b border-white/5 bg-[#03060a]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="h-6 w-px bg-white/10"></div>
<div>
<h2 className="text-sm font-semibold text-white tracking-tight">Lead Follow-up Automation</h2>
<div className="flex items-center gap-2 mt-0.5">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-emerald-500 font-medium">Aktywny</span>
<span className="text-[10px] text-slate-600">•</span>
<span className="text-[10px] text-slate-500">Ostatnia edycja: 2 min temu</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-linear"></iconify-icon> Testuj
                </button>
<button className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all flex items-center gap-2">
<iconify-icon icon="solar:export-linear"></iconify-icon> Eksportuj
                </button>
<button className="px-4 py-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white text-xs font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:scale-105 transition-all flex items-center gap-2">
<iconify-icon icon="solar:disk-linear"></iconify-icon> Zapisz
                </button>
</div>
</header>

<div className="flex-1 relative overflow-hidden bg-[#03060a]">

<div className="absolute inset-0 canvas-grid opacity-40"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="#475569" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>

<path d="M 432 170 C 500 170, 500 170, 568 170" fill="none" marker-end="url(#arrowhead)" stroke="#475569" strokeWidth="2"></path>

<path d="M 850 170 C 900 170, 500 370, 568 370" fill="none" marker-end="url(#arrowhead)" stroke="#475569" stroke-dasharray="5,5" strokeWidth="2"></path>

<path d="M 850 170 C 900 170, 850 370, 918 370" fill="none" marker-end="url(#arrowhead)" stroke="#475569" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 p-10 transform scale-100 origin-top-left" id="canvas-content">

<div className="workflow-node selected absolute w-72 bg-[#0A0D14] rounded-xl border border-white/10 z-10" style={{top: '100px', left: '150px'}}>

<div className="connection-dot absolute -right-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>
<div className="p-3 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Nowy Lead</div>
<div className="text-[10px] text-indigo-400 font-medium uppercase tracking-wider">Trigger</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="p-3 space-y-3">
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Źródło</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Wszystkie źródła</option>
<option>Strona WWW</option>
<option>LinkedIn</option>
</select>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Wartość minimalna</label>
<input className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 focus:border-indigo-500/50 outline-none" type="text" value="10 000 PLN"/>
</div>
</div>
</div>

<div className="workflow-node absolute w-72 bg-[#0A0D14] rounded-xl border border-white/10 z-10" style={{top: '100px', left: '568px'}}>

<div className="connection-dot absolute -left-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>

<div className="connection-dot absolute -right-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>
<div className="p-3 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Sprawdź wartość</div>
<div className="text-[10px] text-amber-400 font-medium uppercase tracking-wider">Warunek</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="p-3 space-y-3">
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Jeśli lead &gt; 10k</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>&gt; 10,000 PLN</option>
<option>&gt; 50,000 PLN</option>
<option>&gt; 100,000 PLN</option>
</select>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="workflow-node absolute w-72 bg-[#0A0D14] rounded-xl border border-white/10 z-10" style={{top: '300px', left: '568px'}}>

<div className="connection-dot absolute -left-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>

<div className="connection-dot absolute -right-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>
<div className="p-3 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Wyślij Email</div>
<div className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Akcja</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="p-3 space-y-3">
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Szablon</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Welcome Email - High Value</option>
<option>Welcome Email - Standard</option>
</select>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="workflow-node absolute w-72 bg-[#0A0D14] rounded-xl border border-white/10 z-10" style={{top: '300px', left: '918px'}}>

<div className="connection-dot absolute -left-2 top-1/2 -mt-2 w-4 h-4 bg-[#0A0D14] border-2 border-slate-500 rounded-full cursor-crosshair z-20"></div>
<div className="p-3 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Dodaj do CRM</div>
<div className="text-[10px] text-pink-400 font-medium uppercase tracking-wider">Integracja</div>
</div>
<button className="text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="p-3 space-y-3">
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Pipeline</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Sales Pipeline - Q2</option>
<option>Enterprise Deals</option>
</select>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] text-slate-500 mb-1.5 uppercase font-medium">Właściciel</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-1.5 px-2.5 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Auto-assign</option>
<option>Jan Kowalski</option>
<option>Anna Nowak</option>
</select>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex gap-3 items-end">

<div className="glass-panel w-48 h-36 rounded-lg p-3 hidden md:block">
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Mini Mapa</div>
<div className="w-full h-24 bg-[#0F1218] rounded border border-white/5 relative overflow-hidden">
<div className="absolute top-2 left-2 w-8 h-6 bg-slate-700/50 rounded-sm"></div>
<div className="absolute top-2 left-12 w-8 h-6 bg-slate-700/50 rounded-sm"></div>
<div className="absolute top-10 left-12 w-8 h-6 bg-slate-700/50 rounded-sm"></div>
<div className="absolute top-10 left-24 w-8 h-6 bg-slate-700/50 rounded-sm"></div>

<div className="absolute top-0 left-0 w-full h-full border-2 border-indigo-500/30 rounded-sm"></div>
</div>
</div>

<div className="glass-panel p-1 rounded-lg flex items-center shadow-lg">
<button className="w-8 h-8 rounded hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<span className="w-12 text-center text-xs font-medium text-slate-300">100%</span>
<button className="w-8 h-8 rounded hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="w-8 h-8 rounded hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<aside className="w-80 flex flex-col bg-[#05080e] border-l border-white/5 z-20 shrink-0">

<div className="p-5 border-b border-white/5">
<div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">Wybrany Element</div>
<h2 className="text-white font-medium text-base">Nowy Lead</h2>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="p-5 space-y-8">

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Podstawowe</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="text-xs font-medium text-slate-300">Nazwa nodu</label>
</div>
<input className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-2 px-3 text-xs text-white focus:border-indigo-500/50 outline-none transition-colors" type="text" value="Nowy Lead"/>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="text-xs font-medium text-slate-300">Opis</label>
<span className="text-[10px] text-slate-600">Opcjonalne</span>
</div>
<textarea className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-2 px-3 text-xs text-slate-300 focus:border-indigo-500/50 outline-none resize-none transition-colors placeholder:text-slate-600" placeholder="Dodaj notatkę..." rows="3"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Konfiguracja</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Źródło leadów</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-2 px-3 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Wszystkie źródła</option>
<option>Formularz strony WWW</option>
<option>LinkedIn Lead Gen</option>
<option>Email inbound</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Branża</label>
<div className="relative">
<select className="w-full bg-[#0F1218] border border-white/10 rounded-lg py-2 px-3 text-xs text-slate-200 appearance-none focus:border-indigo-500/50 outline-none">
<option>Wszystkie branże</option>
<option>IT &amp; Software</option>
<option>E-commerce</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Ustawienia</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1218]/50 border border-white/5">
<span className="text-xs text-slate-300">Deduplikacja</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1e293b] appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#1e293b] cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1218]/50 border border-white/5">
<span className="text-xs text-slate-300">Wzbogacanie danych</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1e293b] appearance-none cursor-pointer transition-all duration-300" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#1e293b] cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-[#0F1218]/50 border border-white/5">
<span className="text-xs text-slate-300">Logowanie</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1e293b] appearance-none cursor-pointer transition-all duration-300" id="toggle3" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#1e293b] cursor-pointer transition-colors duration-300" htmlFor="toggle3"></label>
</div>
</div>
</div>
</div>

<div className="p-4 bg-gradient-to-br from-indigo-500/10 to-blue-600/5 rounded-xl border border-indigo-500/20">
<h3 className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-3">Statystyki Live</h3>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#03060a]/50 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">Uruchomień</div>
<div className="text-lg font-semibold text-white">24</div>
</div>
<div className="bg-[#03060a]/50 p-2 rounded border border-white/5">
<div className="text-[10px] text-slate-500">Błędy</div>
<div className="text-lg font-semibold text-rose-400">1</div>
</div>
<div className="bg-[#03060a]/50 p-2 rounded border border-white/5 col-span-2 flex items-center justify-between">
<div>
<div className="text-[10px] text-slate-500">Śr. czas wykonania</div>
<div className="text-lg font-semibold text-emerald-400">1.2s</div>
</div>
<iconify-icon className="text-emerald-500/50 text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
