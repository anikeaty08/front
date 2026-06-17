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
      

<div className="fixed pointer-events-none z-0 top-0 right-0 bottom-0 left-0">
<div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl relative gap-x-12 gap-y-12 items-start z-10">

<div className="overflow-hidden flex flex-col bg-[#16181e]/70 w-full h-[800px] max-w-[380px] border-white/10 border rounded-[3rem] mx-auto relative shadow-2xl backdrop-blur-3xl">

<div className="flex justify-between items-center px-6 pt-6 pb-2 text-white/60 text-xs font-medium z-20 select-none">
<span className="font-inter">09:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between z-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px]">
<img alt="Creator" className="w-full h-full rounded-full object-cover border-2 border-[#1c1e26]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div>
<h2 className="text-white text-sm font-medium tracking-tight">AeroVision</h2>
<p className="text-white/40 text-[10px] uppercase tracking-wider">Studio Créatif</p>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition border border-white/5 text-white/80">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="px-6 mb-6">
<h1 className="text-2xl text-white font-medium tracking-tight mb-4">Portfolio <span className="text-white/40">Récent</span></h1>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="px-5 py-2.5 rounded-full bg-white text-[#16181e] text-xs font-semibold tracking-tight shadow-lg shadow-white/10 whitespace-nowrap">Tout voir</button>
<button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition whitespace-nowrap backdrop-blur-md">
<span className="flex items-center gap-2"><iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon> Photo</span>
</button>
<button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition whitespace-nowrap backdrop-blur-md">
<span className="flex items-center gap-2"><iconify-icon className="text-sm" icon="solar:videocamera-record-linear"></iconify-icon> Vidéo</span>
</button>
<button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition whitespace-nowrap backdrop-blur-md">
<span className="flex items-center gap-2"><iconify-icon className="text-sm" icon="solar:plain-linear"></iconify-icon> Drone</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 space-y-6">

<div className="group relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10">
<img alt="Drone View" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
<iconify-icon className="text-cyan-400 text-xs" icon="solar:plain-linear"></iconify-icon>
<span className="text-white/90 text-[10px] font-medium tracking-wide">MAVIC 3 CINE</span>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-white text-lg font-medium tracking-tight">Immobilier de Luxe</h3>
<div className="flex justify-between items-end mt-1">
<p className="text-white/60 text-xs font-normal">Côte d'Azur, France</p>
<button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-xl flex items-center justify-center text-white transition">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
<img alt="Camera" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
<iconify-icon className="text-purple-400 text-xs" icon="solar:camera-linear"></iconify-icon>
<span className="text-white/90 text-[10px] font-medium tracking-wide">SONY A7SIII</span>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-white text-lg font-medium tracking-tight">Campagne Mode Été</h3>
<div className="flex justify-between items-end mt-1">
<p className="text-white/60 text-xs font-normal">Studio 42, Paris</p>
<button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-xl flex items-center justify-center text-white transition">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#181a22]/90 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-2 shadow-2xl z-30">
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-white/10">
<iconify-icon className="text-xl" icon="solar:gallery-wide-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>

<div className="overflow-hidden flex flex-col bg-[#16181e]/70 w-full h-[800px] max-w-[380px] border-white/10 border rounded-[3rem] mx-auto relative shadow-2xl backdrop-blur-3xl">

<div className="flex justify-between items-center px-6 pt-6 pb-2 text-white/60 text-xs font-medium z-20">
<span className="font-inter">09:42</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="px-6 py-4 z-20">
<button className="flex items-center gap-2 text-white/60 hover:text-white transition mb-6">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
<span className="text-sm">Retour</span>
</button>
<h2 className="text-3xl text-white font-medium tracking-tight">Choisir une<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Prestation</span></h2>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 space-y-4">

<label className="block relative cursor-pointer group">
<input checked="" className="peer sr-only service-radio" name="service" type="radio"/>
<div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 transition-all duration-300 peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 hover:bg-white/10">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 border border-white/5">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full border border-white/20 check-circle flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-xs opacity-0 check-icon transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white text-lg font-medium">Pack Aérien (Drone)</h3>
<p className="text-white/50 text-xs mt-1 leading-relaxed">Prises de vue 4K/5.2K RAW. Idéal pour l'immobilier, inspection et paysages.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-white font-medium">450€ <span className="text-white/40 text-xs font-normal">/ session</span></span>
<span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-500/20">Populaire</span>
</div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input className="peer sr-only service-radio" name="service" type="radio"/>
<div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 transition-all duration-300 peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 hover:bg-white/10">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/5">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full border border-white/20 check-circle flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-xs opacity-0 check-icon transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white text-lg font-medium">Vidéo Sol &amp; Interview</h3>
<p className="text-white/50 text-xs mt-1 leading-relaxed">Tournage multicam, éclairage pro et prise de son. Qualité Cinéma.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-white font-medium">600€ <span className="text-white/40 text-xs font-normal">/ demi-journée</span></span>
</div>
</div>
</label>

<label className="block relative cursor-pointer group">
<input className="peer sr-only service-radio" name="service" type="radio"/>
<div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 transition-all duration-300 peer-checked:bg-blue-500/10 peer-checked:border-blue-500/50 hover:bg-white/10">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-orange-400 border border-white/5">
<iconify-icon className="text-xl" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<div className="w-5 h-5 rounded-full border border-white/20 check-circle flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-xs opacity-0 check-icon transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<h3 className="text-white text-lg font-medium">Pack Complet + Montage</h3>
<p className="text-white/50 text-xs mt-1 leading-relaxed">Drone + Sol + Montage final avec étalonnage et sound design.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-white font-medium">1200€ <span className="text-white/40 text-xs font-normal">/ jour</span></span>
</div>
</div>
</label>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#16181e] to-transparent z-30">
<button className="w-full py-4 rounded-[1.25rem] bg-white text-black font-semibold text-sm tracking-tight hover:bg-gray-200 transition active:scale-[0.98]">
                    Continuer vers le calendrier
                </button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>

<div className="overflow-hidden flex flex-col bg-[#16181e]/70 w-full h-[800px] max-w-[380px] border-white/10 border rounded-[3rem] mx-auto relative shadow-2xl backdrop-blur-3xl">

<div className="flex justify-between items-center px-6 pt-6 pb-2 text-white/60 text-xs font-medium z-20">
<span className="font-inter">09:43</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:signal-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="px-6 py-4 flex items-center justify-between z-20">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<span className="text-white text-sm font-medium">Réservation</span>
<div className="w-10"></div>
</div>
<div className="px-6 mt-2">
<h2 className="text-2xl font-medium text-white tracking-tight">Octobre 2023</h2>
<div className="flex items-center gap-2 mt-1">
<iconify-icon className="text-blue-400 text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<p className="text-white/50 text-sm">Durée estimée : 4h</p>
</div>
</div>

<div className="px-4 mt-8 z-20">
<div className="grid grid-cols-7 text-center mb-4">
<div className="text-[10px] text-white/30 font-semibold uppercase">Lun</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Mar</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Mer</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Jeu</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Ven</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Sam</div>
<div className="text-[10px] text-white/30 font-semibold uppercase">Dim</div>
</div>
<div className="bg-white/5 rounded-[2rem] p-4 border border-white/5 relative overflow-hidden backdrop-blur-xl">
<div className="grid grid-cols-7 gap-y-6 text-center text-sm font-medium text-white/80">
<span className="text-white/10">28</span>
<span className="text-white/10">29</span>
<span className="text-white/10">30</span>
<span>1</span>
<span>2</span>
<span className="text-white/30 line-through decoration-white/30">3</span>
<span>4</span>
<span>5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span>
<span className="text-white/30 line-through decoration-white/30">10</span>
<span>11</span>

<div className="relative z-10 flex justify-center">
<div className="absolute inset-0 m-auto w-9 h-9 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] -z-10"></div>
<span className="relative text-white leading-9">12</span>
</div>
<span>13</span>
<span>14</span>
<span>15</span>
<span>16</span>
<span>17</span>
<span>18</span>
<span>19</span>
<span>20</span>
<span>21</span>
<span>22</span>
<span>23</span>
<span>24</span>
<span>25</span>
</div>
</div>
</div>

<div className="px-6 mt-8 space-y-4">

<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-white text-sm font-medium">Post-Production</p>
<p className="text-white/40 text-[10px]">Retouche colorimétrique incluse</p>
</div>
</div>

<div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
<div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between mt-6 px-2">
<span className="text-white/50 text-sm">Total estimé</span>
<span className="text-white text-xl font-semibold tracking-tight">450,00 €</span>
</div>
</div>

<div className="mt-auto p-6 z-20">
<button className="group w-full py-4 rounded-[1.5rem] bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-base tracking-wide shadow-lg shadow-blue-900/40 relative overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center justify-center gap-2">
                        Confirmer la réservation
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
</div>
</div>

    </>
  );
}
