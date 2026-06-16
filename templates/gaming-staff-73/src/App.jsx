import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openForm(role) {
            const container = document.getElementById('application-container');
            const select = document.getElementById('role-select');
            const badge = document.getElementById('selected-role-badge');
            
            container.classList.remove('hidden');
            select.value = role;
            badge.innerText = role;
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function openRules() {
            document.getElementById('rules-modal').classList.remove('hidden');
            document.body.classList.add('modal-open');
        }

        function closeRules() {
            document.getElementById('rules-modal').classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div bis_size='{"x":0,"y":0,"w":1434,"h":1024,"abs_x":675,"abs_y":124}' className="fixed inset-0 z-0 pointer-events-none">
<div bis_size='{"x":217,"y":0,"w":1000,"h":400,"abs_x":892,"abs_y":124}' className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/0 to-transparent opacity-50"></div>
</div>

<header bis_size='{"x":0,"y":0,"w":1434,"h":81,"abs_x":675,"abs_y":124}' className="relative z-10 w-full border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0">
<div bis_size='{"x":205,"y":0,"w":1024,"h":80,"abs_x":880,"abs_y":124}' className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
<div bis_size='{"x":229,"y":24,"w":150,"h":32,"abs_x":904,"abs_y":148}' className="flex items-center">

<div bis_size='{"x":229,"y":24,"w":150,"h":32,"abs_x":904,"abs_y":148}' className="flex items-center gap-2 font-semibold text-white tracking-tight text-xl">
<span bis_size='{"x":229,"y":24,"w":32,"h":32,"abs_x":904,"abs_y":148}' className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-500 flex items-center justify-center text-black text-xs font-bold">RQ</span>
                    RealistiQ RP
                </div>
</div>
<nav bis_size='{"x":870,"y":21,"w":334,"h":38,"abs_x":1545,"abs_y":145}' className="hidden md:flex gap-8 items-center">
<button bis_size='{"x":870,"y":30,"w":86,"h":20,"abs_x":1545,"abs_y":154}' className="hover:text-white transition-colors text-sm text-zinc-400" onclick="openRules()">Regels (APV)</button>
<a bis_size='{"x":989,"y":30,"w":74,"h":20,"abs_x":1664,"abs_y":154}' className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="https://discord.gg/KYb9jQ9fx8" target="_blank">
<iconify-icon bis_size='{"x":989,"y":32,"w":16,"h":16,"abs_x":1664,"abs_y":156}' icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                    Discord
                </a>
<button bis_size='{"x":1096,"y":21,"w":108,"h":38,"abs_x":1771,"abs_y":145}' className="text-sm text-white font-medium bg-white/10 px-4 py-2 rounded-full border border-white/5 hover:bg-white/15 transition-all" onclick="document.getElementById('role-grid').scrollIntoView({behavior: 'smooth'})">Solliciteren</button>
</nav>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="md:hidden text-white flex items-center">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main bis_size='{"x":0,"y":81,"w":1434,"h":1204,"abs_x":675,"abs_y":205}' className="flex-grow z-10 pt-20 pr-6 pb-20 pl-6 relative">
<div bis_size='{"x":333,"y":161,"w":768,"h":209,"abs_x":1008,"abs_y":285}' className="max-w-3xl mx-auto text-center mb-24">
<h1 bis_size='{"x":333,"y":161,"w":768,"h":120,"abs_x":1008,"abs_y":285}' className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Word onderdeel van <br bis_size='{"x":992,"y":155,"w":0,"h":72,"abs_x":1667,"abs_y":279}'/>
<span bis_size='{"x":553,"y":215,"w":327,"h":72,"abs_x":1228,"abs_y":339}' className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">RealistiQ RP</span>
</h1>
<p bis_size='{"x":429,"y":305,"w":576,"h":65,"abs_x":1104,"abs_y":429}' className="text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto">
                Kies hieronder een functie om de sollicitatieprocedure te starten.
            </p>
</div>

<div bis_size='{"x":205,"y":466,"w":1024,"h":643,"abs_x":880,"abs_y":590}' className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24" id="role-grid">

<div bis_size='{"x":205,"y":466,"w":500,"h":309,"abs_x":880,"abs_y":590}' className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden flex flex-col">
<div bis_size='{"x":206,"y":467,"w":498,"h":307,"abs_x":881,"abs_y":591}' className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":238,"y":499,"w":434,"h":243,"abs_x":913,"abs_y":623}' className="relative z-10 flex flex-col h-full">
<div bis_size='{"x":238,"y":499,"w":48,"h":48,"abs_x":913,"abs_y":623}' className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/10">
<iconify-icon bis_size='{"x":250,"y":511,"w":24,"h":24,"abs_x":925,"abs_y":635}' height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 bis_size='{"x":238,"y":571,"w":434,"h":32,"abs_x":913,"abs_y":695}' className="text-2xl font-medium text-white mb-3 tracking-tight">Politie</h3>
<p bis_size='{"x":238,"y":615,"w":434,"h":45,"abs_x":913,"abs_y":739}' className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">Handhaaf de wet en zorg voor veiligheid. Vereist discipline en communicatie.</p>
<button bis_size='{"x":238,"y":692,"w":434,"h":50,"abs_x":913,"abs_y":816}' className="w-full py-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 transition-all font-medium flex items-center justify-center gap-2 group-hover:border-blue-500/40" onclick="openForm('Politie Agent')">
                        Solliciteer nu
                        <iconify-icon bis_size='{"x":499,"y":708,"w":18,"h":18,"abs_x":1174,"abs_y":832}' height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":729,"y":466,"w":500,"h":309,"abs_x":1404,"abs_y":590}' className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-red-500/30 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden flex flex-col">
<div bis_size='{"x":730,"y":467,"w":498,"h":307,"abs_x":1405,"abs_y":591}' className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":762,"y":499,"w":434,"h":243,"abs_x":1437,"abs_y":623}' className="relative z-10 flex flex-col h-full">
<div bis_size='{"x":762,"y":499,"w":48,"h":48,"abs_x":1437,"abs_y":623}' className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-400 border border-red-500/10">
<iconify-icon bis_size='{"x":774,"y":511,"w":24,"h":24,"abs_x":1449,"abs_y":635}' height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 bis_size='{"x":762,"y":571,"w":434,"h":32,"abs_x":1437,"abs_y":695}' className="text-2xl font-medium text-white mb-3 tracking-tight">Ambulance</h3>
<p bis_size='{"x":762,"y":615,"w":434,"h":45,"abs_x":1437,"abs_y":739}' className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">Red levens in kritieke situaties. Medische kennis is een pré, geen vereiste.</p>
<button bis_size='{"x":762,"y":692,"w":434,"h":50,"abs_x":1437,"abs_y":816}' className="w-full py-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/20 transition-all font-medium flex items-center justify-center gap-2 group-hover:border-red-500/40" onclick="openForm('Ambulance Broeder')">
                        Solliciteer nu
                        <iconify-icon bis_size='{"x":1023,"y":708,"w":18,"h":18,"abs_x":1698,"abs_y":832}' height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":205,"y":799,"w":500,"h":309,"abs_x":880,"abs_y":923}' className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-[#FFCD00]/30 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden flex flex-col">
<div bis_size='{"x":206,"y":800,"w":498,"h":307,"abs_x":881,"abs_y":924}' className="absolute inset-0 bg-gradient-to-br from-[#FFCD00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":238,"y":832,"w":434,"h":243,"abs_x":913,"abs_y":956}' className="relative z-10 flex flex-col h-full">

<div bis_size='{"x":238,"y":832,"w":48,"h":48,"abs_x":913,"abs_y":956}' className="w-12 h-12 rounded-xl bg-[#FFCD00] flex items-center justify-center mb-6 text-black border border-[#FFCD00]/10 shadow-[0_0_15px_rgba(255,205,0,0.2)]">
<span bis_size='{"x":246,"y":849,"w":31,"h":15,"abs_x":921,"abs_y":973}' className="font-bold text-[10px] tracking-tight">ANWB</span>
</div>
<h3 bis_size='{"x":238,"y":904,"w":434,"h":32,"abs_x":913,"abs_y":1028}' className="text-2xl font-medium text-white mb-3 tracking-tight">ANWB Wegenwacht</h3>
<p bis_size='{"x":238,"y":948,"w":434,"h":45,"abs_x":913,"abs_y":1072}' className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">Houd de stad mobiel. Reparaties en sleepdiensten voor gestrande burgers.</p>
<button bis_size='{"x":238,"y":1026,"w":434,"h":50,"abs_x":913,"abs_y":1150}' className="w-full py-3 rounded-lg bg-[#FFCD00]/10 hover:bg-[#FFCD00]/20 text-[#FFCD00] hover:text-[#ffe066] border border-[#FFCD00]/20 transition-all font-medium flex items-center justify-center gap-2 group-hover:border-[#FFCD00]/40" onclick="openForm('ANWB Monteur')">
                        Solliciteer nu
                        <iconify-icon bis_size='{"x":499,"y":1042,"w":18,"h":18,"abs_x":1174,"abs_y":1166}' height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":729,"y":799,"w":500,"h":309,"abs_x":1404,"abs_y":923}' className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden flex flex-col">
<div bis_size='{"x":730,"y":800,"w":498,"h":307,"abs_x":1405,"abs_y":924}' className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":762,"y":832,"w":434,"h":243,"abs_x":1437,"abs_y":956}' className="relative z-10 flex flex-col h-full">
<div bis_size='{"x":762,"y":832,"w":48,"h":48,"abs_x":1437,"abs_y":956}' className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/10">
<iconify-icon bis_size='{"x":774,"y":844,"w":24,"h":24,"abs_x":1449,"abs_y":968}' height="24" icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 bis_size='{"x":762,"y":904,"w":434,"h":32,"abs_x":1437,"abs_y":1028}' className="text-2xl font-medium text-white mb-3 tracking-tight">Staff Team</h3>
<p bis_size='{"x":762,"y":948,"w":434,"h":45,"abs_x":1437,"abs_y":1072}' className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">Bouw mee aan de community. Ticket support, moderatie en development.</p>
<button bis_size='{"x":762,"y":1026,"w":434,"h":50,"abs_x":1437,"abs_y":1150}' className="w-full py-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-purple-300 border border-purple-500/20 transition-all font-medium flex items-center justify-center gap-2 group-hover:border-purple-500/40" onclick="openForm('Staff - Moderator')">
                        Solliciteer nu
                        <iconify-icon bis_size='{"x":1023,"y":1042,"w":18,"h":18,"abs_x":1698,"abs_y":1166}' height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="hidden" id="application-container">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="max-w-3xl mx-auto relative fade-in">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="mb-10 text-center">
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-medium mb-4 border border-white/10 tracking-wide uppercase" id="selected-role-badge">Functie</span>
<h2 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-3xl font-medium text-white tracking-tight mb-3">Sollicitatie Formulier</h2>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-sm text-zinc-500">Vul dit formulier zo uitgebreid mogelijk in.</p>
</div>
<form bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-6 bg-zinc-900/20 p-8 rounded-3xl border border-white/5">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Discord Naam</label>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute left-3 top-3 text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:hashtag-linear" width="20"></iconify-icon>
</div>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="username" type="text"/>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">IRL Leeftijd</label>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute left-3 top-3 text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="18" type="number"/>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Karakter Naam (IC)</label>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute left-3 top-3 text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:user-linear" width="20"></iconify-icon>
</div>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="Voornaam Achternaam" type="text"/>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Geselecteerde Functie</label>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute left-3 top-3 text-zinc-500">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:case-minimalistic-linear" width="20"></iconify-icon>
</div>
<select bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-2.5 pl-10 pr-10 text-sm text-white appearance-none focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all cursor-pointer" id="role-select">
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' value="Politie Agent">Politie Agent</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' value="Ambulance Broeder">Ambulance Broeder</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' value="ANWB Monteur">ANWB Monteur</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' value="Staff - Moderator">Staff - Moderator</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' value="Staff - Developer">Staff - Developer</option>
</select>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute right-3 top-3 text-zinc-500 pointer-events-none">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Motivatie</label>
<textarea bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all resize-none" placeholder="Waarom wil je specifiek bij deze afdeling? Wat voeg jij toe?" rows="4"></textarea>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Ervaring in FiveM</label>
<textarea bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all resize-none" placeholder="Op welke servers heb je gespeeld? Welke functies heb je gehad?" rows="3"></textarea>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Pluspunten</label>
<textarea bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all resize-none" placeholder="Wat zijn je sterke kanten?" rows="3"></textarea>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Minpunten</label>
<textarea bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all resize-none" placeholder="Waar kan je nog aan werken?" rows="3"></textarea>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-2">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block">Beschikbaarheid</label>
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all" placeholder="Hoeveel uur per week ben je beschikbaar?" type="text"/>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="pt-4 border-t border-white/5">
<label bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="flex items-start gap-3 cursor-pointer group">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative flex items-center pt-1">
<input bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="peer appearance-none w-5 h-5 border border-zinc-700 rounded bg-zinc-900 checked:bg-white checked:border-white transition-all focus:outline-none" type="checkbox"/>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="absolute inset-0 flex items-center justify-center pt-1 opacity-0 peer-checked:opacity-100 pointer-events-none text-black">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors select-none leading-relaxed">
                                Ik verklaar dat ik minimaal 16 jaar oud ben (of volwassen gedrag vertoon), een werkende microfoon heb en de server regels heb gelezen. Ik begrijp dat liegen leidt tot afwijzing.
                            </div>
</label>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 text-sm tracking-wide" type="button">
                        Verstuur Sollicitatie
                        <iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="fixed inset-0 z-50 hidden" id="rules-modal" role="dialog">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeRules()"></div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="relative transform overflow-hidden rounded-2xl bg-[#09090b] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-white/10 flex flex-col max-h-[90vh]">

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="bg-[#09090b] px-6 py-4 border-b border-white/5 flex items-center justify-between sticky top-0 z-10">
<h3 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-lg font-semibold leading-6 text-white" id="modal-title">Algemene Plaatselijke Verordening Realistiq</h3>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-zinc-400 hover:text-white transition-colors" onclick="closeRules()" type="button">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="px-6 py-6 overflow-y-auto text-sm text-zinc-400 leading-relaxed space-y-8">
<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-white font-medium mb-3 text-base">Algemene Bepalingen</h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-4">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Bij wijzigingen in de wetgeving na het tijdstip waarop het feit is begaan, worden de voor de verdachte meest gunstige bepalingen toegepast. Het is voor een staff-lid niet toegestaan om mee te beslissen over een zaak die betrekking heeft op zichzelf, vrienden en/of familie. Indien er tegen staff gelogen wordt en dit met hard bewijs wordt aangetoond, kan de straf verzwaard worden.</p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="mb-2">De straffen zijn onderverdeeld in de volgende categorieën:</p>
<ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="list-disc pl-5 space-y-1 text-zinc-500">
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 1: Taakstraf 75 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 2: Taakstraf 100 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 3: Taakstraf 125 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 4: Ban van 1 dag + 150 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 5: Ban van 2 dagen + 175 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 6: Ban van 3 dagen + 200 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 7: Ban van 1 week + 300 taken</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Categorie 8: Permanente ban (kan preventief opgelegd worden)</li>
</ul>
</div>
</div>
</section>
<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-white font-medium mb-3 text-base border-b border-white/5 pb-2">Overtredingen - Verstoring Openbare Orde (RP)</h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="grid grid-cols-1 gap-6">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Roleplay van zeer slechte kwaliteit of gedrag dat RP verstoort is verboden. "Counteren" tijdens politieachtervolging is niet toegestaan tenzij politie ingrijpt in bestaand conflict. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 1/2</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Opzettelijk roleplay manipuleren voor oneerlijke wendingen. Bv: Voertuig in garage zetten tijdens achtervolging, agent ontvoeren voor dossiers, dwang bij fouilleren overheidsdiensten. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 3</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Karakter "breken" of OOC termen gebruiken is verboden. Misbruik van /looc voor toxic opmerkingen is niet toegestaan. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 1</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Safezone mag niet gebruikt worden om te ontkomen aan illegale activiteiten. Geen criminaliteit in safezones. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 2</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Na overlijden vergeet het karakter de laatste RP en mag 15 min niet terugkeren naar de locatie (rode cirkel). <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 3</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Random Deathmatch: onnodig doden/mishandelen zonder RP intentie. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 2</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen waarde hechten aan eigen leven. Bv: wegrijden &lt; 30km/u in levensgevaar. Meewerken is verplicht bij wapen binnen armlengte of in kapot armored voertuig. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 3</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Informatie van buiten FiveM gebruiken in-game is verboden. Streamen/zitten in discord calls tijdens RP is verboden tenzij muted/deafened. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 1/3</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Software van derden is verboden. Stretched resolutie (niet 16:9/16:10) is verboden. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 8</span></p>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Moedwillig game verlaten tijdens RP is verboden. Terugkeren binnen 5 min vereist. <span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-red-400 text-xs ml-1">Sanctie: Cat 7</span></p>
</div>
</div>
</section>
<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-white font-medium mb-3 text-base border-b border-white/5 pb-2">Criminele Activiteiten &amp; Overheid</h4>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="space-y-4">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'> Toegestaan bij criminele activiteiten, niet op bankgeld/loodsen/safezones. Camping op drugslocaties verboden. Overvallen verboden 30 min voor restart.</p>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'> Ambtenaren mogen geen illegale activiteiten doen of in beslag genomen goederen verhandelen. Valse meldingen zijn verboden.</p>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'> Maximaal 15 leden + 3 hangarounds. Samenwerking vereist toestemming hogerop. Communicatie verplicht via porto (geen Discord).</p>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'> Schieten vanaf vasteland verboden. Geen samenwerking tussen officiële groepen. Campen van niet-actieve drugslocaties verboden.</p>
</div>
</section>
<section bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="bg-zinc-900 p-4 rounded-lg border border-white/5">
<h4 bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="text-white font-medium mb-2 text-sm">Slotbepaling (Samenvatting)</h4>
<ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs list-disc pl-4 text-zinc-500">
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen FailRP, VDM, RDM</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen Cheats of Exploits</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen Metagaming of Cop-baiting</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen Combat Logging</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Respectvol taalgebruik (geen ziektes)</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Realistisch rijgedrag</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Verplicht werkende microfoon &amp; NL taal</li>
<li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}'>Geen criminaliteit met overheidsjobs</li>
</ul>
</section>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="bg-[#09090b] px-6 py-4 border-t border-white/5 flex justify-end">
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":675,"abs_y":124}' className="w-full inline-flex justify-center rounded-lg border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-zinc-200 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" onclick="closeRules()" type="button">
                        Ik heb het begrepen
                    </button>
</div>
</div>
</div>
</div>
<footer bis_size='{"x":0,"y":1365,"w":1434,"h":113,"abs_x":675,"abs_y":1489}' className="border-t border-white/5 py-12 bg-black mt-20">
<div bis_size='{"x":205,"y":1414,"w":1024,"h":16,"abs_x":880,"abs_y":1538}' className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div bis_size='{"x":229,"y":1414,"w":116,"h":16,"abs_x":904,"abs_y":1538}' className="flex items-center gap-3">
<span bis_size='{"x":229,"y":1414,"w":116,"h":16,"abs_x":904,"abs_y":1538}' className="text-xs text-zinc-600 font-medium">© 2024 RealistiQ RP</span>
</div>
<div bis_size='{"x":992,"y":1414,"w":212,"h":16,"abs_x":1667,"abs_y":1538}' className="flex gap-6">
<a bis_size='{"x":992,"y":1414,"w":43,"h":16,"abs_x":1667,"abs_y":1538}' className="text-xs text-zinc-600 hover:text-white transition-colors" href="https://discord.gg/KYb9jQ9fx8" target="_blank">Discord</a>
<a bis_size='{"x":1059,"y":1414,"w":76,"h":16,"abs_x":1734,"abs_y":1538}' className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Server Status</a>
<a bis_size='{"x":1160,"y":1414,"w":44,"h":16,"abs_x":1835,"abs_y":1538}' className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
