import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] flex-shrink-0 flex flex-col p-6 gap-8 overflow-y-auto h-full">

<div className="flex items-center gap-3">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/25-35/European/1"/>
<div>
<div className="text-sm text-gray-500">Bon retour,</div>
<div className="text-base font-medium">Alex!</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 flex items-center justify-between border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">
            LS
          </div>
<div>
<div className="text-xs text-gray-500">Entreprise</div>
<div className="text-base font-medium">Load Swift NYC</div>
</div>
</div>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</div>

<nav className="flex flex-col gap-2">
<a className="flex items-center gap-4 px-5 py-3.5 bg-[#fa3c4c] text-white rounded-2xl font-medium text-base shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
          Tableau de bord
        </a>
<a className="flex items-center gap-4 px-5 py-3.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-2xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="truck"></i>
          Expéditions
        </a>
<a className="flex items-center gap-4 px-5 py-3.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-2xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
          Clients
        </a>
<div className="flex items-center justify-between px-5 py-3.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-2xl font-medium text-base cursor-pointer transition-colors">
<div className="flex items-center gap-4">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
            Analyse
          </div>
<div className="flex items-center gap-1 text-xs text-[#fa3c4c] bg-[#fa3c4c]/10 px-2.5 py-1 rounded-full">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
            20%
          </div>
</div>
<a className="flex items-center gap-4 px-5 py-3.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-2xl font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="clock"></i>
          Historique
        </a>
<div className="flex items-center justify-between px-5 py-3.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-2xl font-medium text-base cursor-pointer transition-colors">
<div className="flex items-center gap-4">
<i className="w-5 h-5" data-lucide="bell"></i>
            Notifications
          </div>
<div className="w-6 h-6 rounded-full bg-[#fa3c4c] text-white text-xs flex items-center justify-center font-medium">
            2
          </div>
</div>
</nav>

<div className="bg-[#fa3c4c] text-white rounded-3xl p-6 relative overflow-hidden mt-4 shadow-md">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xl font-medium tracking-tight mb-1">
              Trajets récents
            </div>
</div>
<div className="text-sm text-white/80 mt-1">28 Oct</div>
</div>
<div className="flex gap-2 mb-8">
<div className="bg-white text-[#fa3c4c] text-sm font-medium px-4 py-2 rounded-full cursor-pointer">
            Durée
          </div>
<div className="text-sm text-white/80 py-2 px-2 cursor-pointer hover:text-white transition-colors">
            Vitesse
          </div>
<div className="text-sm text-white/80 py-2 px-2 cursor-pointer hover:text-white transition-colors">
            Arrêts
          </div>
</div>
<div className="mt-4 relative z-10">
<div className="text-4xl font-medium tracking-tight mb-1">
            1246
            <span className="text-lg font-normal text-white/90">KM</span>
</div>
<div className="text-sm text-white/80">Durée totale du trajet</div>
</div>

<svg className="absolute bottom-0 right-0 w-3/4 h-24 pointer-events-none opacity-20" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 Q40,0 100,20 L100,50 Z" fill="white"></path>
</svg>
</div>

<div className="flex items-center justify-between px-2 text-gray-400">
<i className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" data-lucide="calendar"></i>
<i className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" data-lucide="inbox"></i>
<i className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" data-lucide="book"></i>
<i className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" data-lucide="box"></i>
<i className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" data-lucide="layout-grid"></i>
</div>

<div className="border-2 border-gray-300 border-dashed rounded-3xl p-6 text-center flex flex-col items-center justify-center gap-4 bg-transparent hover:bg-gray-200/30 cursor-pointer transition-colors mt-2">
<div className="w-10 h-10 rounded-full bg-[#fa3c4c] text-white flex items-center justify-center shadow-sm">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<div className="text-base font-medium text-gray-700">Nouvelle demande</div>
</div>
</aside>

<main className="flex-1 flex flex-col pt-8 pr-8 pb-8 pl-2 overflow-y-auto h-full">

<header className="flex items-center justify-between mb-8 pl-4">
<div className="flex items-center gap-6">
<h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Suivi d'expédition
          </h1>
<div className="bg-white border border-gray-200 rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium cursor-pointer shadow-sm hover:bg-gray-50 transition-colors">
            Choisir un camion
            <i className="w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex items-center gap-4">
<div className="bg-white border border-gray-200 rounded-full px-5 py-3 flex items-center gap-3 w-72 shadow-sm focus-within:ring-2 focus-within:ring-[#fa3c4c]/20 transition-shadow">
<input className="bg-transparent border-none outline-none text-base w-full text-gray-700 placeholder:text-gray-400" placeholder="Rechercher" type="text"/>
<i className="w-5 h-5 text-gray-400" data-lucide="search"></i>
</div>
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="settings"></i>
</div>
</div>
</header>

<div className="flex flex-col gap-6 pl-4 pb-10">

<section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative h-[340px] overflow-hidden flex flex-col justify-between">

<div className="flex gap-3 z-20 relative">
<div className="bg-[#fa3c4c] text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm cursor-pointer">
              Suivi
            </div>
<div className="bg-white text-gray-600 border border-gray-200 text-sm font-medium px-5 py-2 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
              Embouteillages
            </div>
<div className="bg-white text-gray-600 border border-gray-200 text-sm font-medium px-5 py-2 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
              POI
            </div>
</div>

<div className="relative z-20 w-80 bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/40 mt-auto">
<div className="text-sm text-gray-500 mb-1">
              Distance jusqu'à l'arrivée
            </div>
<div className="text-3xl font-medium tracking-tight text-[#fa3c4c] mb-6">
              120
              <span className="text-lg font-normal text-gray-500">KM</span>
<span className="text-gray-300 font-light mx-1">/</span>
              1
              <span className="text-lg font-normal text-gray-500">h</span>
              50
              <span className="text-lg font-normal text-gray-500">min</span>
</div>
<div className="text-sm text-gray-500 mb-3">Trafic et optimisation</div>
<div className="flex items-center gap-4 mb-6">
<div className="text-2xl font-medium tracking-tight text-gray-800 w-12">
                85%
              </div>
<div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-[#fa3c4c] rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="flex gap-3">
<button className="bg-[#fa3c4c] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#e03544] transition-colors shadow-sm">
                Optimiser
              </button>
<button className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
                Tout voir
              </button>
</div>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white/60 w-72 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Alertes et notifications
              </div>
<div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 bg-white text-gray-400">
<i className="w-3 h-3" data-lucide="rotate-cw"></i>
</div>
</div>
<div className="flex justify-between items-baseline mb-1">
<div className="text-base font-medium text-gray-900">
                Alerte de géorepérage
              </div>
<div className="text-xs text-gray-400">13:48</div>
</div>
<div className="text-sm text-gray-500 leading-relaxed">
              Le camion a franchi la zone à l'entrepôt A. Notification d'arrivée
              envoyée au personnel.
            </div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-80" preserveaspectratio="none" viewbox="0 0 1000 340">

<path d="M100,50 Q200,100 150,200 T300,250 T500,150 T650,200 T800,100 T950,150" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="8"></path>
<path d="M50,200 Q200,250 350,150 T550,250 T750,150 T900,250" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="6"></path>
<path d="M400,0 Q450,100 400,200 T500,340" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="4"></path>
<path d="M700,0 L700,340" fill="none" stroke="#e5e7eb" stroke-dasharray="10 10" strokeWidth="4"></path>

<path d="M200,380 Q250,280 350,200 T600,100 T800,220 T1100,200" fill="none" stroke="#fa3c4c" strokeWidth="5"></path>


<circle cx="370" cy="180" fill="#fa3c4c" r="14" stroke="white" strokeWidth="3"></circle>
<text fill="white" fontFamily="Inter" fontSize="12" font-weight="600" text-anchor="middle" x="370" y="185">
              1
            </text>

<circle cx="585" cy="115" fill="#fa3c4c" r="14" stroke="white" strokeWidth="3"></circle>
<text fill="white" fontFamily="Inter" fontSize="12" font-weight="600" text-anchor="middle" x="585" y="120">
              2
            </text>

<circle cx="810" cy="217" fill="#fa3c4c" r="14" stroke="white" strokeWidth="3"></circle>
<text fill="white" fontFamily="Inter" fontSize="12" font-weight="600" text-anchor="middle" x="810" y="222">
              3
            </text>
</svg>
</section>

<div className="grid grid-cols-12 gap-6">

<div className="col-span-8 bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col justify-between">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">
                Détails de l'expédition
              </h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 border-b border-gray-300 pb-0.5 transition-colors" href="#">
                Voir plus
              </a>
</div>
<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
<div className="flex items-center gap-4">
<img alt="Driver" className="w-12 h-12 rounded-full object-cover" src="https://storage.googleapis.com/banani-avatars/avatar/male/35-50/European/2"/>
<div>
<div className="text-base font-medium text-gray-900">
                    Michael Johnson
                  </div>
<div className="text-sm text-gray-400 mt-0.5">
                    1241AA4121BB2351AB - Ukraine
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-400">Note</span>
<div className="bg-[#fa3c4c] text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                  4.8
                </div>
<i className="w-6 h-6 text-gray-400 ml-2 cursor-pointer hover:text-gray-700" data-lucide="more-horizontal"></i>
</div>
</div>
<div className="grid grid-cols-3 gap-8">
<div className="flex flex-col">
<div className="text-sm font-medium text-gray-800 mb-1">
                  Colis Novaposhta
                </div>
<div className="text-sm text-[#fa3c4c] mb-6">Ont été payés</div>
<div className="mt-auto">
<div className="text-3xl font-medium tracking-tight text-[#fa3c4c]">
                    $ 520,45
                  </div>
</div>
</div>
<div className="flex flex-col">
<div className="text-sm font-medium text-gray-800 mb-3">
                  Chargement des colis
                </div>
<div className="flex justify-between text-sm text-gray-400 mb-2 font-medium">
<span>Kyiv</span>
<span>Rivne</span>
</div>
<div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
<div className="h-full bg-[#fa3c4c] rounded-full" style={{width: '35%'}}></div>
</div>
<div className="mt-auto">
<div className="text-sm text-gray-400 mb-1">Date d'arrivée</div>
<div className="text-xl text-[#fa3c4c] font-medium tracking-tight">
                    28.10.23
                  </div>
</div>
</div>
<div className="flex flex-col gap-6">
<div>
<div className="text-sm text-gray-400 mb-2">Statut</div>
<div className="inline-block bg-[#fa3c4c] text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
                    Livré
                  </div>
</div>
<div className="mt-auto">
<div className="text-sm text-gray-400 mb-2">Type de colis</div>
<div className="inline-block bg-[#fa3c4c]/10 text-[#fa3c4c] text-sm font-medium px-4 py-1.5 rounded-full">
                    Produits ménagers
                  </div>
</div>
</div>
</div>
</div>

<div className="col-span-4 bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col">
<div className="flex justify-between items-center mb-10">
<h2 className="text-xl font-medium tracking-tight text-gray-900">
                Capacité actuelle du camion
              </h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 border-b border-gray-300 pb-0.5 transition-colors" href="#">
                Voir plus
              </a>
</div>
<div className="flex-1 flex flex-col justify-center mb-8">
<div className="flex items-end justify-center">

<div className="w-12 h-20 bg-gray-100 rounded-l-2xl border border-gray-200 relative shadow-sm z-10">
<div className="absolute top-3 right-1.5 w-5 h-8 bg-white rounded border border-gray-200"></div>
<div className="absolute bottom-2 right-4 w-3 h-3 bg-gray-300 rounded-full"></div>
</div>

<div className="w-[200px] h-28 bg-gray-50 rounded-r-2xl border border-gray-200 relative overflow-hidden flex items-center justify-center shadow-inner">

<div className="absolute left-0 top-0 h-full w-[86%] bg-[#fa3c4c]/10"></div>

<div className="absolute left-0 top-0 h-full w-[86%]" style={{background: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(250, 60, 76, 0.4) 4px, rgba(250, 60, 76, 0.4) 8px)'}}></div>

<div className="relative z-10 text-3xl font-semibold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(250,60,76,0.8)] mix-blend-difference">
                    86%
                  </div>
</div>
</div>
</div>
<div className="mt-auto">
<div className="flex justify-between items-center mb-3">
<div className="text-base font-medium text-gray-900">
                  AL - 223965406
                </div>
<div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
<div className="w-3 h-3 rounded-full border-[3px] border-[#fa3c4c] shadow-sm"></div>
                  En route
                </div>
</div>
<div className="flex justify-between items-center pt-3 border-t border-gray-100">
<div className="text-sm text-gray-400">Charge max</div>
<div className="text-sm font-medium text-gray-900">8 453 KG</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative flex flex-col h-[220px]">
<div className="flex justify-between items-start mb-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">
                Tendances d'expédition
              </h2>
<div className="w-8 h-8 rounded-full bg-[#fa3c4c]/10 text-[#fa3c4c] flex items-center justify-center cursor-pointer hover:bg-[#fa3c4c]/20 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</div>
</div>
<div className="flex-1 flex items-end justify-between px-2 pt-8 pb-4 relative">

<div className="absolute left-[38%] bottom-6 w-px bg-[#fa3c4c] border border-dashed border-[#fa3c4c]" style={{height: 'calc(100% - 30px)', zIndex: '0'}}></div>
<div className="absolute left-[38%] top-0 -translate-x-1/2 bg-white text-[#fa3c4c] text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100 shadow-sm z-10 whitespace-nowrap">
                5 expéditions
              </div>
<div className="absolute left-[38%] top-[30px] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#fa3c4c] shadow-sm z-10 border-2 border-white"></div>

<div className="w-1.5 rounded-full bg-gray-200 h-[30%] z-10"></div>
<div className="w-1.5 rounded-full bg-gray-200 h-[45%] z-10"></div>
<div className="w-1.5 rounded-full bg-gray-200 h-[70%] z-10"></div>
<div className="w-1.5 rounded-full bg-[#fa3c4c] h-[85%] z-10"></div>
<div className="w-1.5 rounded-full bg-gray-200 h-[50%] z-10"></div>
<div className="w-1.5 rounded-full bg-gray-200 h-[35%] z-10"></div>
<div className="w-1.5 rounded-full bg-gray-200 h-[60%] z-10"></div>
</div>
<div className="flex justify-between text-xs text-gray-400 font-medium px-1">
<span>28.10</span>
<span>29.10</span>
<span>30.10</span>
<span className="text-gray-900">31.10</span>
<span>01.11</span>
<span>02.11</span>
<span>03.11</span>
</div>
</div>

<div className="bg-[#fa3c4c] rounded-3xl p-6 shadow-md text-white relative overflow-hidden flex flex-col h-[220px]">
<div className="flex justify-between items-start mb-2 relative z-10">
<h2 className="text-xl font-medium tracking-tight">
                Efficacité de l'itinéraire
              </h2>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors backdrop-blur-sm">
<i className="w-4 h-4 text-white" data-lucide="download"></i>
</div>
</div>
<div className="relative z-10 mt-2">
<div className="text-5xl font-medium tracking-tight mb-2">
                96
                <span className="text-2xl font-normal text-white/90 ml-1">%</span>
</div>
<div className="text-sm text-white/80 pr-10 leading-relaxed">
                Envoyer le meilleur itinéraire par e-mail au conducteur
              </div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col items-end z-10">
<svg className="w-40 h-20 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M 0,45 Q 15,40 25,30 T 45,35 T 60,15 T 75,5 T 90,25 T 100,20" fill="none" stroke="rgba(255,255,255,0.4)" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>
<path d="M 0,50 Q 20,40 30,25 T 50,45 T 70,5 T 90,25 T 100,10" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="70" cy="5" fill="white" r="4" stroke="#fa3c4c" strokeWidth="2"></circle>
</svg>
<span className="text-xs font-medium mt-2 text-white/90">
                La meilleure route
              </span>
</div>

<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-[220px]">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-medium tracking-tight text-gray-900">
                Messagerie
              </h2>
<div className="w-8 h-8 rounded-full bg-[#fa3c4c] text-white flex items-center justify-center cursor-pointer hover:bg-[#e03544] transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</div>
</div>
<div className="flex-1 flex flex-col gap-4 justify-end mb-4 overflow-hidden">

<div className="flex items-end gap-3">
<img alt="Driver" className="w-8 h-8 rounded-full object-cover shadow-sm" src="https://storage.googleapis.com/banani-avatars/avatar/male/35-50/European/3"/>
<div className="bg-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-none text-sm text-gray-800 w-fit">
                  Salut !
                </div>
</div>

<div className="flex items-end gap-3 justify-end">
<div className="bg-[#fa3c4c] text-white px-4 py-2.5 rounded-2xl rounded-br-none text-sm w-fit shadow-sm">
                  Salut ! Quelle est ta question ?
                </div>
<img alt="Me" className="w-8 h-8 rounded-full object-cover shadow-sm" src="https://storage.googleapis.com/banani-avatars/avatar/male/25-35/European/1"/>
</div>
</div>

<div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3 border border-gray-200 mt-auto focus-within:ring-2 focus-within:ring-[#fa3c4c]/20 transition-shadow">
<i className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" data-lucide="paperclip"></i>
<input className="bg-transparent border-none outline-none text-sm flex-1 min-w-0 placeholder:text-gray-400 text-gray-700" placeholder="Message" type="text"/>
<i className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" data-lucide="smile"></i>
<div className="w-6 h-6 flex items-center justify-center ml-1 cursor-pointer">
<i className="w-5 h-5 text-gray-400 hover:text-gray-700 transition-colors" data-lucide="send"></i>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
