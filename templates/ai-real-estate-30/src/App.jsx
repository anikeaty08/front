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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-height="24" data-icon="lucide:hexagon" data-width="24"></span>
<span className="text-white font-semibold tracking-tighter text-lg">IMOBAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Proprietăți</a>
<a className="hover:text-white transition-colors" href="#">Hartă 3D</a>
<a className="hover:text-white transition-colors" href="#">Consultanță AI</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all text-xs font-medium text-white">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Agent Disponibil
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
<span>Powered by Neural Vision 2.0</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                Explorează imobiliare<br/> cu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Inteligencia Asistată</span>.
            </h1>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
                Navighează prin proprietăți folosind comenzi vocale. Un asistent AI analizează detaliile tehnice, în timp ce un agent uman este gata să intervină oricând video.
            </p>
</div>

<div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/20 group">

<img alt="Luxury Interior" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

<div className="absolute top-1/3 left-1/4 flex flex-col items-start animate-pulse">
<div className="border border-white/40 w-24 h-24 rounded-lg"></div>
<div className="mt-2 glass-panel px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Finisaje Premium
                </div>
</div>

<div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">

<div className="flex justify-between items-start">
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:cpu" data-width="18"></span>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider">Analiză în timp real</span>
<span className="text-xs text-white font-medium">Lumină naturală: 92%</span>
</div>
</div>

<div className="glass-panel p-1 rounded-xl flex items-center gap-3 w-32 md:w-48 overflow-hidden shadow-lg border-indigo-500/30 border">
<img alt="Agent" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
<span className="w-1 h-1 bg-emerald-400 rounded-full"></span> LIVE
                            </span>
<span className="text-xs text-white font-medium truncate">Sarah M.</span>
</div>
<div className="ml-auto pr-2">
<span className="iconify text-white" data-icon="lucide:mic" data-width="14"></span>
</div>
</div>
</div>

<div className="mx-auto w-full max-w-lg glass-panel rounded-full px-2 py-2 flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition shadow-[0_0_15px_rgba(79,70,229,0.5)]">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</button>
<div className="flex-1 flex items-center gap-1 h-8">

<div className="w-1 bg-indigo-400 rounded-full h-3 voice-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-indigo-400 rounded-full h-5 voice-wave" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-indigo-400 rounded-full h-8 voice-wave" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 bg-indigo-400 rounded-full h-4 voice-wave" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 bg-indigo-400 rounded-full h-6 voice-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-zinc-600 rounded-full h-1"></div>
<div className="w-1 bg-zinc-600 rounded-full h-1"></div>
<span className="ml-3 text-sm text-zinc-300 italic">"Arată-mi proprietăți în zona Pipera cu piscină..."</span>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 mb-12">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between border-b border-white/5 pb-8">
<div className="w-full md:w-auto flex gap-4">

<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-2 rounded-lg border border-white/10 text-zinc-400 text-sm hover:bg-white/5 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                        Cumpără
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-4 py-2 rounded-lg border border-white/10 text-zinc-400 text-sm hover:bg-white/5 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                        Închiriază
                    </div>
</label>
</div>
<div className="w-full md:w-64">
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<span>Buget</span>
<span>€150k - €1.2M</span>
</div>
<input max="100" min="0" type="range" value="40"/>
</div>

<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">Doar cu Tur Virtual 3D</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer border border-zinc-700" htmlFor="toggle"></label>
</input></div>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium text-white tracking-tight">Proprietăți Recomandate de AI</h2>
<button className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                Vezi toate <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 flex gap-2">
<span className="glass-panel px-2 py-1 rounded text-[10px] font-medium text-white flex items-center gap-1">
<span className="iconify" data-icon="lucide:video" data-width="12"></span> Live Tour
                        </span>
<span className="bg-indigo-600/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white">98% Match</span>
</div>
<img alt="House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-black p-2 rounded-full shadow-lg hover:scale-105 transition">
<span className="iconify" data-icon="lucide:play" data-width="16"></span>
</button>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">Skyline Penthouse</h3>
<span className="text-lg font-normal text-white">€850,000</span>
</div>
<p className="text-sm text-zinc-500 mb-4 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Floreasca, București
                    </p>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Suprafață</span>
<span className="text-sm text-zinc-300">180 m²</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Camere</span>
<span className="text-sm text-zinc-300">4 Camere</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Scor AI</span>
<span className="text-sm text-emerald-400">9.8/10</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 flex gap-2">
<span className="glass-panel px-2 py-1 rounded text-[10px] font-medium text-white flex items-center gap-1">
<span className="iconify" data-icon="lucide:bot" data-width="12"></span> AI Ready
                        </span>
</div>
<img alt="House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">Modern Villa Oasis</h3>
<span className="text-lg font-normal text-white">€1,200,000</span>
</div>
<p className="text-sm text-zinc-500 mb-4 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Corbeanca, Ilfov
                    </p>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Suprafață</span>
<span className="text-sm text-zinc-300">320 m²</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Teren</span>
<span className="text-sm text-zinc-300">1000 m²</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Scor AI</span>
<span className="text-sm text-emerald-400">9.5/10</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
<div className="aspect-[4/3] relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 flex gap-2">
<span className="glass-panel px-2 py-1 rounded text-[10px] font-medium text-white flex items-center gap-1">
<span className="iconify" data-icon="lucide:glasses" data-width="12"></span> VR Compatibil
                        </span>
</div>
<img alt="House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">Urban Loft</h3>
<span className="text-lg font-normal text-white">€320,000</span>
</div>
<p className="text-sm text-zinc-500 mb-4 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Centrul Vechi
                    </p>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Suprafață</span>
<span className="text-sm text-zinc-300">95 m²</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Etaj</span>
<span className="text-sm text-zinc-300">4/5</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] text-zinc-500 uppercase">Scor AI</span>
<span className="text-sm text-emerald-400">8.9/10</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">

<div className="glass-panel p-4 rounded-2xl rounded-tr-none max-w-xs border-indigo-500/20 shadow-2xl mb-2 animate-bounce" style={{animationDuration: '3s'}}>
<p className="text-xs text-zinc-200">
                Am găsit 3 apartamente noi care se potrivesc cu preferința ta pentru "vedere panoramică". Vrei să le vezi?
            </p>
<div className="mt-2 flex gap-2">
<button className="text-[10px] bg-white text-black px-2 py-1 rounded font-medium hover:bg-zinc-200">Da, arată-mi</button>
<button className="text-[10px] text-zinc-400 hover:text-white px-2 py-1">Nu acum</button>
</div>
</div>

<button className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition border border-white/20 relative group">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
<span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full"></span>
</button>
</div>
<footer className="border-t border-white/5 bg-zinc-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-600" data-icon="lucide:hexagon" data-width="20"></span>
<span className="text-zinc-500 text-sm font-medium">IMOBAI © 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-600">
<a className="hover:text-zinc-300 transition" href="#">Confidențialitate</a>
<a className="hover:text-zinc-300 transition" href="#">Termeni</a>
<a className="hover:text-zinc-300 transition" href="#">Contact Agent</a>
</div>
</div>
</footer>

    </>
  );
}
