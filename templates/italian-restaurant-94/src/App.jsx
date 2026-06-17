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



function navigateTo(screenId) {
// Hide all screens
const screens = document.querySelectorAll('.app-screen');
screens.forEach(screen => {
screen.classList.add('hidden');
screen.classList.remove('fade-in');
});
// Show target screen
const target = document.getElementById(screenId);
if (target) {
target.classList.remove('hidden');
target.classList.add('fade-in');
}
}

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
      

<div className="fixed pointer-events-none z-0 inset-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[120px] opacity-50"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50"></div>
</div>

<div className="relative w-full max-w-[390px] h-[844px] bg-[#1c1e26] border-4 border-[#2a2d36] rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col">

<div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>

<div className="flex justify-between items-center px-7 pt-5 pb-2 text-white/80 text-[13px] font-medium z-50 select-none relative">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>



<div className="app-screen flex-1 flex flex-col relative z-10 fade-in" id="screen-menu">

<div className="px-6 py-6 flex items-center justify-between">
<button className="flex items-center gap-3 text-left group focus:outline-none rounded-2xl transition-all">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 p-[1px]">
<div className="w-full h-full rounded-full bg-[#1c1e26] flex items-center justify-center">
<span className="font-bold text-lg text-teal-400">IF</span>
</div>
</div>
<div>
<h2 className="text-white text-base font-semibold tracking-tight">Italian Food</h2>
<p className="text-white/50 text-xs mt-0.5 font-medium">Administration</p>
</div>
</button>
<button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 active:bg-white/20 transition-all text-white/60">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="px-4 space-y-1.5 mt-2">
<h3 className="px-3 py-2 text-white/40 text-[11px] uppercase tracking-wider font-semibold select-none">Principal</h3>

<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-white/5" onclick="navigateTo('screen-reservations')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/10 to-teal-500/5 flex items-center justify-center text-teal-400 group-hover:text-teal-300 transition-all">
<iconify-icon className="text-xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<span className="text-white/90 text-[15px] font-medium group-hover:text-white transition-colors">Réservations</span>
</div>
<span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-teal-900/40">95</span>
</button>

<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-transform">
<iconify-icon className="text-xl" icon="solar:card-transfer-linear"></iconify-icon>
</div>
<span className="text-white/80 text-[15px] font-medium group-hover:text-white transition-colors">Empreintes</span>
</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-xl" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<span className="text-white/80 text-[15px] font-medium group-hover:text-white transition-colors">Services</span>
</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6"></div>

<div className="px-4 space-y-1.5">
<h3 className="px-3 py-2 text-white/40 text-[11px] uppercase tracking-wider font-semibold select-none">Administration</h3>

<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<span className="text-white/80 text-[15px] font-medium group-hover:text-white transition-colors">Paramètres</span>
</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>

<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon className="text-xl" icon="solar:shop-closed-linear"></iconify-icon>
</div>
<span className="text-white/80 text-[15px] font-medium group-hover:text-white transition-colors">Fermeture</span>
</div>
<iconify-icon className="text-white/30 text-lg group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-auto px-4 pb-8">
<button className="w-full text-left group flex items-center justify-between p-3.5 rounded-2xl hover:bg-red-500/10 active:scale-[0.98] transition-all cursor-pointer border border-transparent hover:border-red-500/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-all">
<iconify-icon className="text-xl" icon="solar:logout-2-linear"></iconify-icon>
</div>
<span className="text-red-400 text-[15px] font-medium group-hover:text-red-300 transition-colors">Déconnexion</span>
</div>
</button>
</div>
</div>



<div className="hidden app-screen flex-1 flex flex-col relative z-10" id="screen-reservations">

<div className="px-6 pb-4 pt-2 flex items-center justify-between">
<button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors py-2 -ml-2 px-2 rounded-xl active:bg-white/5" onclick="navigateTo('screen-menu')">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-medium">Menu</span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 p-[1px]">
<div className="w-full h-full rounded-full bg-[#1c1e26] flex items-center justify-center">
<span className="font-bold text-xs text-teal-400">IF</span>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-[32px] font-bold text-white tracking-tight leading-[1.1] mb-2">Gestion des<br/>Réservations</h2>
<div className="flex items-center justify-between mt-4">
<p className="text-white/50 text-sm font-medium">95 au total</p>
<button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-teal-600/20 active:scale-95 transition-all" onclick="navigateTo('screen-calendar')">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                        Nouvelle
                     </button>
</div>
</div>

<div className="px-6 flex gap-3 mb-6">
<button className="flex-1 relative overflow-hidden bg-teal-500/10 border border-teal-500/20 text-teal-300 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-teal-900/10 active:scale-[0.98] transition-all">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                    À venir
                    <span className="bg-teal-400 text-teal-950 text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-0.5">0</span>
</button>
<button className="flex-1 bg-white/5 border border-white/5 text-white/50 hover:text-white hover:bg-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all active:scale-[0.98]">
<iconify-icon className="text-lg" icon="solar:archive-linear"></iconify-icon>
                    Archivé
                </button>
</div>

<div className="px-6 mb-8">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex items-center bg-[#15171e] border border-white/10 rounded-2xl focus-within:border-white/20 transition-colors">
<iconify-icon className="absolute left-4 text-white/40 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent py-4 pl-11 pr-4 text-sm text-white placeholder-white/30 focus:outline-none rounded-2xl font-medium" placeholder="Rechercher par client..." type="text"/>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center text-white/30 pb-32">
<div className="w-20 h-20 rounded-full bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex items-center justify-center mb-4 shadow-xl cursor-pointer hover:bg-white/10 transition-all group" onclick="navigateTo('screen-calendar')">
<iconify-icon className="text-3xl opacity-50 group-hover:opacity-80 transition-opacity" icon="solar:calendar-search-linear"></iconify-icon>
</div>
<p className="text-sm font-medium">Aucune réservation à venir</p>
<button className="mt-4 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors" onclick="navigateTo('screen-calendar')">Créer une réservation</button>
</div>
</div>



<div className="hidden app-screen flex-1 flex flex-col relative z-20 bg-[#1c1e26]" id="screen-calendar">

<div className="px-6 py-4 pt-2 flex items-center justify-between">
<button className="flex items-center gap-2 text-white hover:text-white/80 transition -ml-2 px-2 py-2 active:scale-95" onclick="navigateTo('screen-reservations')">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-base font-normal">Retour</span>
</button>
<button className="text-white/60 text-sm font-medium hover:text-white transition px-2 py-2" onclick="navigateTo('screen-reservations')">Annuler</button>
</div>

<div className="px-6 mt-2 mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Nouvelle réservation</h2>
<p className="text-white/50 text-sm mt-1">Sélectionner une date</p>
</div>

<div className="px-4">

<div className="bg-gradient-to-b from-white/5 to-white/[0.02] rounded-[2rem] p-5 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-[50px] -z-10"></div>
<div className="flex items-center justify-between mb-6 px-2">
<button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/60">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-white text-base font-semibold">Novembre 2024</h3>
<button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/60">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-7 text-center mb-4">
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Dim</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Lun</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Mar</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Mer</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Jeu</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Ven</div>
<div className="text-[10px] text-white/30 font-bold uppercase tracking-wide">Sam</div>
</div>

<div className="grid grid-cols-7 gap-y-6 text-center text-sm font-medium text-white/90">
<span className="text-white/20">30</span>
<span className="text-white/20">31</span>
<span className="hover:text-teal-400 cursor-pointer transition">1</span>
<span className="hover:text-teal-400 cursor-pointer transition">2</span>
<span className="hover:text-teal-400 cursor-pointer transition">3</span>
<span className="hover:text-teal-400 cursor-pointer transition">4</span>
<span className="hover:text-teal-400 cursor-pointer transition">5</span>
<span className="hover:text-teal-400 cursor-pointer transition">6</span>
<span className="hover:text-teal-400 cursor-pointer transition">7</span>
<span className="hover:text-teal-400 cursor-pointer transition">8</span>
<span className="hover:text-teal-400 cursor-pointer transition">9</span>
<span className="hover:text-teal-400 cursor-pointer transition">10</span>
<span className="hover:text-teal-400 cursor-pointer transition">11</span>

<div className="relative z-10 flex items-center justify-center cursor-pointer">
<div className="absolute w-8 h-8 bg-teal-600 rounded-full -z-10 shadow-lg shadow-teal-500/30"></div>
<span className="relative text-white font-bold">12</span>
</div>
<span className="hover:text-teal-400 cursor-pointer transition">13</span>
<span className="hover:text-teal-400 cursor-pointer transition">14</span>
<span className="hover:text-teal-400 cursor-pointer transition">15</span>
<span className="hover:text-teal-400 cursor-pointer transition">16</span>
<span className="hover:text-teal-400 cursor-pointer transition">17</span>
<span className="hover:text-teal-400 cursor-pointer transition">18</span>
<span className="hover:text-teal-400 cursor-pointer transition">19</span>
<span className="hover:text-teal-400 cursor-pointer transition">20</span>
<span className="hover:text-teal-400 cursor-pointer transition">21</span>
<span className="hover:text-teal-400 cursor-pointer transition">22</span>
<span className="hover:text-teal-400 cursor-pointer transition">23</span>
<span className="hover:text-teal-400 cursor-pointer transition">24</span>
<span className="hover:text-teal-400 cursor-pointer transition">25</span>
<span className="hover:text-teal-400 cursor-pointer transition">26</span>
<span className="hover:text-teal-400 cursor-pointer transition">27</span>
<span className="hover:text-teal-400 cursor-pointer transition">28</span>
<span className="hover:text-teal-400 cursor-pointer transition">29</span>
<span className="hover:text-teal-400 cursor-pointer transition">30</span>
<span className="text-white/20">1</span>
<span className="text-white/20">2</span>
<span className="text-white/20">3</span>
</div>
</div>
</div>

<div className="mt-auto pb-8">
<div className="mx-4 p-1.5 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl flex items-center justify-between pl-6 pr-2 py-2">
<div>
<p className="text-white font-semibold text-sm">Service Midi</p>
<div className="flex items-center gap-1.5 text-white/50 text-[11px] mt-0.5 font-medium">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>12:00 - 14:00</span>
</div>
</div>
<button className="bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-6 py-3.5 rounded-[1.5rem] shadow-lg shadow-teal-600/30 transition-all active:scale-95" onclick="navigateTo('screen-reservations')">
                        Valider
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full pointer-events-none z-50"></div>
</div>

    </>
  );
}
