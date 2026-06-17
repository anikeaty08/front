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



            if(window.lucide) { window.lucide.createIcons(); }
          


            if(window.lucide) window.lucide.createIcons();
          


            if(window.lucide) window.lucide.createIcons();
          


            if(window.lucide) window.lucide.createIcons();
          


            if(window.lucide) window.lucide.createIcons();
          


          if(window.lucide) { window.lucide.createIcons(); }
        


      lucide.createIcons();
      function switchTab(tabId) {
          const tabs = ['login', 'home', 'programs', 'coach', 'profile', 'nutrition', 'community', 'player', 'gyms', 'subscription', 'payment-mm', 'payment-card', 'manage-sub'];
          tabs.forEach(tab => {
              const el = document.getElementById('tab-' + tab);
              if(el) {
                  el.classList.add('hidden');
                  el.classList.remove('block');
              }
              const nav = document.getElementById('nav-' + tab);
              if(nav) {
                  nav.classList.remove('text-white');
                  nav.classList.add('text-[#6B7280]');
              }
          });
          const activeTab = document.getElementById('tab-' + tabId);
          if(activeTab) {
              activeTab.classList.remove('hidden');
              activeTab.classList.add('block');
          }
          const activeNav = document.getElementById('nav-' + tabId);
          if(activeNav) {
              activeNav.classList.remove('text-[#6B7280]');
              activeNav.classList.add('text-white');
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
      

<div className="w-full max-w-[390px] h-[844px] max-h-[90vh] bg-black rounded-[40px] overflow-hidden relative shadow-2xl border-[6px] border-neutral-900 flex flex-col">

<div className="h-12 flex justify-between items-center px-6 pt-2 z-50 text-white">
<span className="text-base font-medium">09:41</span>
<div className="flex gap-2 items-center">
<i className="w-4 h-4" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="battery-full" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-24 relative" id="main-content">
<div className="block px-5 pb-6 flex flex-col justify-center min-h-[600px] mt-12" id="tab-login">
<div className="text-center mb-10">
<h1 className="text-5xl font-bold text-white tracking-tight mb-2">
              Atlas
            </h1>
<p className="text-[#6B7280] text-lg">Carry your potential</p>
</div>
<div className="space-y-4 w-full">
<button className="w-full bg-white text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors" onclick="switchTab('subscription')">
<i className="w-5 h-5" data-lucide="mail"></i>
              Continuer avec Email
            </button>
<button className="w-full bg-neutral-900 border border-neutral-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors" onclick="switchTab('subscription')">
<i className="w-5 h-5" data-lucide="smartphone"></i>
              Continuer avec Téléphone
            </button>
<button className="w-full bg-neutral-900 border border-neutral-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors" onclick="switchTab('subscription')">
<svg className="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
</svg>
              Continuer avec Google
            </button>
</div>
</div>

<div className="px-5 pb-6 hidden" id="tab-home">

<div className="flex justify-between items-center mt-2 mb-6">
<div>
<p className="text-[#6B7280] text-base mb-1">Bonjour, Amadou</p>
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight">
                Prêt à bouger ?
              </h1>
</div>
<div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-900">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-black"></div>
</div>
</div>

<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-5 mb-8 relative overflow-hidden border border-neutral-800">
<div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4">
<i className="w-24 h-24 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<div className="inline-block bg-white/10 text-white px-3 py-1 rounded-xl text-xs font-medium mb-2 uppercase tracking-wide">
                Recommandé
              </div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">
                Passez à Atlas Plus
              </h2>
<p className="text-[#FAFAFA]/80 text-base mb-4 max-w-[80%]">
                Obtenez 2 appels par semaine avec un coach dédié.
              </p>
<button className="bg-white text-black px-5 py-3 rounded-xl text-base font-semibold w-full flex justify-between items-center" onclick="switchTab('subscription')">
<span>10 000 FCFA / mois</span>
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight">
              Séance du jour
            </h2>
<button className="text-neutral-400 text-base font-medium">
              Voir tout
            </button>
</div>
<div className="relative w-full h-[320px] rounded-[24px] overflow-hidden mb-8 group">
<img alt="Workout" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end h-full">
<div className="flex gap-2 mb-3">
<span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock" strokeWidth="1.5"></i>
                  45 Min
                </span>
<span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3 text-white" data-lucide="flame" strokeWidth="1.5"></i>
                  420 Kcal
                </span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-1">
                Force &amp; Condition
              </h3>
<p className="text-[#FAFAFA]/70 text-base mb-4">
                Niveau Intermédiaire
              </p>
<button className="bg-white text-black py-4 rounded-xl text-lg font-semibold w-full flex justify-center items-center gap-2">
<i className="w-6 h-6" data-lucide="play-circle" strokeWidth="1.5"></i>
                Commencer
              </button>
</div>
</div>

<h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Conseil de la semaine
          </h2>
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 mb-8 relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-10">
<i className="w-32 h-32 text-white" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="target" strokeWidth="2"></i>
                  Défi Hebdo
                </span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Zéro sucre &amp; 30 min de marche
              </h3>
<p className="text-[#FAFAFA]/80 text-sm leading-relaxed">
                Cette semaine, essayez d'éviter les sucres ajoutés et
                privilégiez 30 minutes de marche quotidienne. Un combo idéal
                pour rebooster votre métabolisme !
              </p>
</div>
</div>
<h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Vos Progrès
          </h2>
<div className="grid grid-cols-2 gap-4 mb-8">

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<div className="bg-white/10 p-2 rounded-xl">
<i className="w-6 h-6 text-white" data-lucide="flame" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">
                  12
                </p>
<p className="text-[#6B7280] text-base">Jours de suite</p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 flex flex-col justify-between h-32 relative overflow-hidden">
<div className="flex justify-between items-start z-10">
<div className="bg-white/10 p-2 rounded-xl">
<i className="w-6 h-6 text-white" data-lucide="activity" strokeWidth="1.5"></i>
</div>
</div>
<div className="z-10">
<p className="text-2xl font-semibold text-white tracking-tight">
                  3
                  <span className="text-base text-[#6B7280]">/4</span>
</p>
<p className="text-[#6B7280] text-base">Séances hebdo</p>
</div>
</div>
</div>
<h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Évolution &amp; Badges
          </h2>
<div className="flex flex-col gap-4 mb-8">
<button className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 flex items-center justify-between w-full hover:bg-neutral-800 transition-colors">
<div className="flex items-center gap-4">
<div className="bg-white/10 p-3 rounded-xl">
<i className="w-6 h-6 text-white" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div className="text-left">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Photo d'évolution
                  </h3>
<p className="text-[#6B7280] text-sm">
                    Ajouter une nouvelle photo
                  </p>
</div>
</div>
<i className="w-5 h-5 text-[#6B7280]" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-white tracking-tight">
                  Vos Badges
                </h3>
<span className="text-sm font-medium text-[#6B7280]">
                  3 débloqués
                </span>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
<div className="flex flex-col items-center gap-2 min-w-[72px]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 p-1">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-yellow-500" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-xs text-white font-medium">10 Jours</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[72px]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 p-1">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-zinc-300" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-xs text-white font-medium text-center">
                    1er Workout
                  </span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[72px]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
</div>
<span className="text-xs text-white font-medium text-center">
                    Hydratation
                  </span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[72px] opacity-40">
<div className="w-16 h-16 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center">
<i className="w-6 h-6 text-neutral-500" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-[#6B7280] font-medium text-center">
                    30 Jours
                  </span>
</div>
</div>
</div>
</div>

</div>

<div className="hidden px-5 pb-6" id="tab-coach">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-6">
            Mon Accompagnement
          </h1>

<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-6">
<div className="flex items-center gap-4 mb-5">
<div className="w-16 h-16 rounded-full overflow-hidden">
<img alt="Coach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<h3 className="text-xl font-semibold text-white">Aminata Fall</h3>
<p className="text-[#6B7280] text-base">Coach Atlas Plus</p>
</div>
<div className="ml-auto bg-white/10 text-white px-2 py-1 rounded-lg flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xs font-semibold">4.9</span>
</div>
</div>
<div className="bg-black rounded-2xl p-4 flex items-center gap-4 mb-4">
<div className="bg-white/10 p-3 rounded-xl text-white">
<i className="w-6 h-6" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-[#6B7280] text-base">Prochain appel</p>
<p className="text-white font-medium text-lg">
                  Mardi 14 Nov, 18h00
                </p>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-white/5 text-white py-3 rounded-xl text-base font-medium flex justify-center items-center gap-2">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                Message
              </button>
<button className="bg-white text-black py-3 rounded-xl text-base font-medium flex justify-center items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                Reporter
              </button>
</div>
</div>
<h2 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Séance à la carte
          </h2>
<p className="text-[#6B7280] text-base mb-6">
            Besoin d'un programme sur mesure ou d'un check technique ? Réservez
            1 heure avec un expert.
          </p>

<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] overflow-hidden mb-4">
<div className="flex h-32">
<img alt="Coach" className="w-1/3 object-cover" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="p-4 w-2/3 flex flex-col justify-center">
<h3 className="text-lg font-semibold text-white mb-1">
                  Moussa Diop
                </h3>
<p className="text-neutral-400 text-sm mb-2">Spécialiste Force</p>
<div className="flex gap-1 flex-wrap">
<span className="bg-white/5 text-[#FAFAFA]/70 text-xs px-2 py-1 rounded-md">
                    Wolof
                  </span>
<span className="bg-white/5 text-[#FAFAFA]/70 text-xs px-2 py-1 rounded-md">
                    Français
                  </span>
</div>
</div>
</div>
<div className="p-5 border-t border-neutral-800">
<div className="flex items-center justify-between mb-4">
<h4 className="text-white font-medium">Novembre 2023</h4>
<div className="flex gap-2">
<button className="p-1.5 bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="p-1.5 bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center mb-2">
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Lun
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Mar
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Mer
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Jeu
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Ven
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Sam
                </span>
<span className="text-[10px] text-neutral-500 uppercase font-semibold">
                  Dim
                </span>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
<div className="py-1.5 text-neutral-600">30</div>
<div className="py-1.5 text-neutral-600">31</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  1
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  2
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  3
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  4
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  5
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  6
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  7
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  8
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  9
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  10
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  11
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  12
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-black bg-white rounded-lg font-bold shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  13
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  14
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  15
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  16
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  17
                </div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg relative opacity-40 cursor-not-allowed">
                  18
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-0.5 left-1/2 transform -translate-x-1/2"></div>
</div>
<div className="py-1.5 text-white bg-neutral-800/50 rounded-lg hover:bg-neutral-700 cursor-pointer">
                  19
                </div>
</div>
<div className="flex items-center justify-between mb-4 text-[10px]">
<div className="flex items-center gap-1.5 text-white">
<div className="w-2 h-2 bg-white rounded-full"></div>
                  Sélectionné
                </div>
<div className="flex items-center gap-1.5 text-neutral-400">
<div className="w-2 h-2 bg-neutral-800/50 rounded-full"></div>
                  Libre
                </div>
<div className="flex items-center gap-1.5 text-neutral-400">
<div className="w-2 h-2 bg-neutral-800/50 flex items-center justify-center rounded-full">
<div className="w-1 h-1 bg-red-500 rounded-full"></div>
</div>
                  Occupé
                </div>
</div>
<button className="bg-white text-[#1A1A1A] py-3 px-4 rounded-xl text-sm font-semibold w-full text-center flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
<i className="w-4 h-4" data-lucide="calendar-check" strokeWidth="2"></i>
                Réserver le 13 Nov • 10 000 FCFA
              </button>
</div>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-programs">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-4">
            Programmes
          </h1>
<div className="flex gap-2 overflow-x-auto mb-6 -mx-5 px-5">
<button className="whitespace-nowrap bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold">
              All
            </button>
<button className="whitespace-nowrap bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-neutral-800">
              Cardio
            </button>
<button className="whitespace-nowrap bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-neutral-800">
              Strength
            </button>
<button className="whitespace-nowrap bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-neutral-800">
              A la maison
            </button>
<button className="whitespace-nowrap bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-neutral-800">
              Musculation
            </button>
</div>
<div className="mb-6">
<h2 className="text-xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
              Recommandé pour vous
            </h2>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] overflow-hidden relative h-48 group cursor-pointer" onclick="switchTab('player')">
<img alt="Program" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1">
<i className="w-3 h-3" data-lucide="zap" strokeWidth="1.5"></i>
                Intermédiaire
              </div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">
                  Full Body Blast
                </h3>
<div className="flex items-center gap-3 text-[#FAFAFA]/70 text-sm">
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
                    45 min
                  </span>
<span className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="flame" strokeWidth="1.5"></i>
                    400 kcal
                  </span>
</div>
</div>
</div>
</div>
<h2 className="text-xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
            Tous les programmes
          </h2>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-[20px] overflow-hidden relative h-40 group cursor-pointer" onclick="switchTab('player')">
<img alt="Program" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-white">
                Avancé
              </div>
<div className="absolute bottom-0 left-0 p-3 w-full">
<h3 className="text-sm font-semibold text-white tracking-tight">
                  Hypertrophie
                </h3>
<p className="text-[#FAFAFA]/70 text-xs mt-1">60 min</p>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[20px] overflow-hidden relative h-40 group cursor-pointer" onclick="switchTab('player')">
<img alt="Program" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-white">
                Débutant
              </div>
<div className="absolute bottom-0 left-0 p-3 w-full">
<h3 className="text-sm font-semibold text-white tracking-tight">
                  Perte de Poids
                </h3>
<p className="text-[#FAFAFA]/70 text-xs mt-1">30 min</p>
</div>
</div>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-profile">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-6">
            Profil
          </h1>
<div className="flex items-center gap-4 mb-8">
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neutral-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">
                Amadou Diallo
              </h2>
<p className="text-[#6B7280] text-base mb-2">Membre depuis 2023</p>
<button className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Éditer profil
              </button>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between items-end mb-4">
<h3 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
                Vos Progrès
              </h3>
<div className="bg-neutral-900 rounded-lg p-1 flex gap-1">
<button className="bg-white/10 text-white px-3 py-1 rounded-md text-xs font-medium">
                  Sem
                </button>
<button className="text-[#6B7280] px-3 py-1 rounded-md text-xs font-medium">
                  Mois
                </button>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-4">
<p className="text-[#6B7280] text-sm mb-1">Temps d'entraînement</p>
<p className="text-2xl font-semibold text-white tracking-tight mb-4">
                4h 20m
              </p>
<div className="flex items-end gap-2 h-24 mb-2">
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[30%] relative group"></div>
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[50%] relative group"></div>
<div className="flex-1 bg-white hover:bg-white/80 transition-colors rounded-t-sm h-[90%] relative group"></div>
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[40%] relative group"></div>
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[70%] relative group"></div>
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[20%] relative group"></div>
<div className="flex-1 bg-white/10 hover:bg-white/30 transition-colors rounded-t-sm h-[60%] relative group"></div>
</div>
<div className="flex justify-between text-[10px] text-[#6B7280]">
<span>L</span>
<span>M</span>
<span>M</span>
<span>J</span>
<span>V</span>
<span>S</span>
<span>D</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-center gap-3">
<div className="bg-white/5 p-2 rounded-xl">
<i className="w-5 h-5 text-yellow-500" data-lucide="medal" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Records</h4>
<p className="text-[#6B7280] text-xs">5 atteints</p>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-center gap-3">
<div className="bg-white/5 p-2 rounded-xl">
<i className="w-5 h-5 text-blue-400" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white text-sm font-semibold">Mensurations</h4>
<p className="text-[#6B7280] text-xs">À jour</p>
</div>
</div>
</div>
</div>
<div className="mb-8">
<h3 className="text-xl font-semibold text-[#FAFAFA] tracking-tight mb-4">
              Objectifs Actuels
            </h3>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5">
<div className="mb-5">
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">Perte de poids</span>
<span className="text-[#6B7280]">4 kg / 10 kg</span>
</div>
<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full w-[40%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">
                    Séances par semaine
                  </span>
<span className="text-white font-bold">
                    3
                    <span className="text-[#6B7280] font-normal">/ 4</span>
</span>
</div>
<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full w-[75%]"></div>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-6">
<div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4 cursor-pointer">
<div className="bg-white/5 p-2 rounded-xl">
<i className="w-5 h-5 text-[#FAFAFA]" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<span className="text-white font-medium text-lg">Paramètres</span>
<i className="w-5 h-5 text-[#6B7280] ml-auto" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4 cursor-pointer">
<div className="bg-white/5 p-2 rounded-xl">
<i className="w-5 h-5 text-[#FAFAFA]" data-lucide="bell" strokeWidth="1.5"></i>
</div>
<span className="text-white font-medium text-lg">Notifications</span>
<i className="w-5 h-5 text-[#6B7280] ml-auto" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-4 cursor-pointer" onclick="switchTab('subscription')">
<div className="bg-white/10 p-2 rounded-xl">
<i className="w-5 h-5 text-white" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<span className="text-white font-medium text-lg">
                Abonnement Plus
              </span>
<i className="w-5 h-5 text-neutral-500 ml-auto" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
<button className="w-full bg-neutral-900 border border-neutral-800 text-[#EF4444] py-4 rounded-xl text-lg font-medium flex justify-center items-center gap-2 mt-4 hover:bg-neutral-800 transition-colors">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
            Déconnexion
          </button>
</div>
<div className="hidden px-5 pb-6" id="tab-player">
<div className="flex justify-between items-center mt-2 mb-6">
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800" onclick="switchTab('programs')">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<h1 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Séance en cours
            </h1>
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800">
<i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] overflow-hidden relative h-64 mb-6">
<img className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 transition-colors">
<i className="w-8 h-8 fill-current" data-lucide="pause" strokeWidth="1.5"></i>
</button>
</div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium text-white flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Direct
            </div>
<div className="absolute top-4 left-4 bg-green-500/20 border border-green-500/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-semibold text-green-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="2"></i>
              Exécution parfaite
            </div>
</div>
<div className="text-center mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Pompes Spiderman
            </h2>
<div className="text-5xl font-bold text-white tracking-tighter mb-4 tabular-nums">
              00:45
            </div>
<div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-[60%]"></div>
</div>
</div>
<h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">À suivre</h3>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-center gap-4">
<img className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1598266663412-7bbabde9c991?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-white font-medium">Gainage dynamique</h4>
<p className="text-[#FAFAFA]/70 text-sm">60 secondes</p>
</div>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-nutrition">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-6">
            Nutrition
          </h1>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5">
<div className="flex justify-between items-start mb-2">
<div className="bg-white/10 p-2 rounded-xl text-white">
<i className="w-6 h-6 text-blue-400" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl font-semibold text-white tracking-tight">
                1.5
                <span className="text-base text-[#6B7280]">/2L</span>
</p>
<p className="text-[#6B7280] text-sm">Eau du jour</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5">
<div className="flex justify-between items-start mb-2">
<div className="bg-white/10 p-2 rounded-xl text-white">
<i className="w-6 h-6 text-orange-400" data-lucide="flame" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl font-semibold text-white tracking-tight">
                1850
                <span className="text-base text-[#6B7280]">kcal</span>
</p>
<p className="text-[#6B7280] text-sm">Consommées</p>
</div>
</div>
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Repas du jour
            </h2>
<button className="text-neutral-400 text-sm font-medium flex items-center gap-1">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
              Liste
            </button>
</div>
<div className="flex flex-col gap-3">
<div className="bg-neutral-900 border border-neutral-800 rounded-[20px] p-3 flex gap-4">
<img className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1 py-1">
<h3 className="text-white text-sm font-medium mb-1">
                  Thieboudienne Lite
                </h3>
<p className="text-[#6B7280] text-xs mb-2">Petit-déjeuner</p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    450 kcal
                  </span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    10 min
                  </span>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[20px] p-3 flex gap-4">
<img className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1 py-1">
<h3 className="text-white text-sm font-medium mb-1">
                  Fonio &amp; Poulet Yassa
                </h3>
<p className="text-[#6B7280] text-xs mb-2">Déjeuner</p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    520 kcal
                  </span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    15 min
                  </span>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[20px] p-3 flex gap-4">
<img className="w-16 h-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1 py-1">
<h3 className="text-white text-sm font-medium mb-1">
                  Poisson Grillé &amp; Attiéké
                </h3>
<p className="text-[#6B7280] text-xs mb-2">Dîner</p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    600 kcal
                  </span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white">
                    25 min
                  </span>
</div>
</div>
</div>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-community">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-6">
            Communauté
          </h1>
<div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[24px] p-5 mb-8 relative overflow-hidden border border-blue-800">
<div className="absolute top-0 right-0 opacity-30 transform translate-x-2 -translate-y-2">
<i className="w-24 h-24 text-white" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<div className="inline-block bg-white/20 text-white px-2 py-1 rounded-lg text-[10px] font-bold mb-2 uppercase tracking-wider">
                Challenge Actif
              </div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-1">
                30 Jours Cardio
              </h2>
<p className="text-white/80 text-sm mb-4">Rejoignez 1,240 membres</p>
<button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold w-full">
                Rejoindre
              </button>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
                Victoires du jour
              </h2>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5">
<img className="w-28 h-28 rounded-2xl object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img className="w-28 h-28 rounded-2xl object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img className="w-28 h-28 rounded-2xl object-cover border border-neutral-800" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
</div>
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Fil d'actualité
            </h2>
<button className="text-neutral-400 text-sm font-medium">
              Classement
            </button>
</div>
<div className="flex flex-col gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-4">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h3 className="text-white text-sm font-medium">Sophie M.</h3>
<p className="text-[#6B7280] text-xs">Il y a 2h</p>
</div>
</div>
<p className="text-[#FAFAFA] text-sm mb-3">
                Vient de terminer
                <span className="text-blue-400 font-medium">Full Body Blast</span>
                🔥
              </p>
<div className="flex items-center gap-4 text-[#6B7280]">
<button className="flex items-center gap-1 text-xs hover:text-white">
<i className="w-4 h-4" data-lucide="heart"></i>
                  12
                </button>
<button className="flex items-center gap-1 text-xs hover:text-white">
<i className="w-4 h-4" data-lucide="message-square"></i>
                  3
                </button>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-4">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h3 className="text-white text-sm font-medium">Marc T.</h3>
<p className="text-[#6B7280] text-xs">Il y a 5h</p>
</div>
</div>
<p className="text-[#FAFAFA] text-sm mb-3">
                Nouveau record personnel sur le gainage ! 2m30s 💪
              </p>
<div className="flex items-center gap-4 text-[#6B7280]">
<button className="flex items-center gap-1 text-xs hover:text-white">
<i className="w-4 h-4" data-lucide="heart"></i>
                  24
                </button>
</div>
</div>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-gyms">
<h1 className="text-3xl font-semibold text-[#FAFAFA] tracking-tight mt-2 mb-2">
            Salles Partenaires
          </h1>
<p className="text-[#6B7280] text-base mb-6">
            Profitez de -20% sur votre accès dans nos salles partenaires avec
            votre abonnement Atlas.
          </p>
<div className="flex flex-col gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] overflow-hidden">
<div className="relative h-40">
<img alt="Olympia Fitness" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                  -20%
                </div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-1">
                  Olympia Fitness
                </h3>
<p className="text-neutral-400 text-sm mb-4 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                  Dakar, Plateau
                </p>
<button className="bg-white text-black py-3 rounded-xl text-sm font-semibold w-full hover:bg-neutral-200 transition-colors">
                  Générer le code promo
                </button>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] overflow-hidden">
<div className="relative h-40">
<img alt="Iron Club" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                  -20%
                </div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-1">Iron Club</h3>
<p className="text-neutral-400 text-sm mb-4 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                  Almadies
                </p>
<button className="bg-white text-black py-3 rounded-xl text-sm font-semibold w-full hover:bg-neutral-200 transition-colors">
                  Générer le code promo
                </button>
</div>
</div>
</div>

</div>
<div className="hidden px-5 pb-6" id="tab-subscription">
<div className="flex justify-between items-center mt-2 mb-6">
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800" onclick="switchTab('profile')">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<h1 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Abonnement
            </h1>
<div className="w-9"></div>
</div>
<div className="flex justify-center mb-6">
<div className="bg-neutral-900 p-1 rounded-xl inline-flex">
<button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Mensuel
              </button>
<button className="text-[#6B7280] px-4 py-2 rounded-lg text-sm font-medium hover:text-white transition-colors">
                Trimestriel (-20%)
              </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold text-white mb-2">
                  Atlas Essentiel
                </h3>
<p className="text-xl font-bold text-white tracking-tight mb-4">
                  5 000
                  <span className="text-xs font-normal text-neutral-400 block">
                    FCFA/mois
                  </span>
</p>
<ul className="text-xs text-[#FAFAFA]/70 space-y-2 mb-6">
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
                    Programmes
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-green-400" data-lucide="check"></i>
                    Stats basiques
                  </li>
</ul>
</div>
<button className="bg-white/10 text-white py-3 rounded-xl text-sm font-semibold w-full hover:bg-white/20 transition-colors">
                Sélectionner
              </button>
</div>
<div className="bg-gradient-to-b from-blue-900 to-neutral-900 border border-blue-500 rounded-[24px] p-5 flex flex-col justify-between relative shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                Le plus populaire
              </div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">
                  Atlas Plus
                  <span className="inline-block bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded ml-2 align-middle -translate-y-0.5">
                    7J ESSAI
                  </span>
</h3>
<p className="text-xl font-bold text-white tracking-tight mb-4">
                  10 000
                  <span className="text-xs font-normal text-neutral-400 block">
                    FCFA/mois
                  </span>
</p>
<ul className="text-xs text-[#FAFAFA]/80 space-y-2 mb-6">
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-blue-400" data-lucide="check"></i>
                    2 appels de 5 min/sem
                  </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-blue-400" data-lucide="check"></i>
                    Avec coach dédié
                  </li>
</ul>
</div>
<button className="bg-blue-500 text-white py-3 rounded-xl text-sm font-semibold w-full hover:bg-blue-600 transition-colors shadow-lg">
                7j d'essai
              </button>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-6">
<h3 className="text-lg font-semibold text-white mb-4">Paiement</h3>
<button className="w-full bg-[#00A1FF] text-white py-3.5 rounded-xl font-semibold mb-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" onclick="switchTab('payment-mm')">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<span className="text-[#00A1FF] font-bold text-[10px]">W</span>
</div>
              Payer avec Wave
            </button>
<button className="w-full bg-[#FF6600] text-white py-3.5 rounded-xl font-semibold mb-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" onclick="switchTab('payment-mm')">
<div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
<span className="text-[#FF6600] font-bold text-[10px]">OM</span>
</div>
              Payer avec Orange Money
            </button>
<button className="w-full bg-white/5 border border-white/10 text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors" onclick="switchTab('payment-card')">
<i className="w-5 h-5" data-lucide="credit-card"></i>
              Carte Visa / Mastercard
            </button>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 text-center">
<p className="text-sm text-white font-medium mb-1">
              Besoin d'un coach ponctuellement ?
            </p>
<button className="bg-white text-black py-2.5 px-4 rounded-xl text-sm font-semibold w-full mt-3">
              Réservez une séance (10 000 FCFA/h)
            </button>
</div>
</div>
<div className="hidden px-5 pb-6" id="tab-payment-mm">
<div className="flex justify-between items-center mt-2 mb-6">
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800 transition-colors" onclick="switchTab('subscription')">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<h1 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Paiement Mobile
            </h1>
<div className="w-9"></div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-6">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-black" data-lucide="smartphone"></i>
</div>
<div>
<h2 className="text-white font-medium">Atlas Plus - Mensuel</h2>
<p className="text-neutral-400 text-sm">10 000 FCFA</p>
</div>
</div>
<h3 className="text-sm font-semibold text-neutral-400 mb-2">
              Numéro de téléphone
            </h3>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 rounded-xl mb-6 focus:outline-none focus:border-blue-500" placeholder="+221 77 000 00 00" type="tel"/>
<h3 className="text-sm font-semibold text-neutral-400 mb-2">
              Code PIN / OTP
            </h3>
<div className="flex gap-3 mb-8 justify-center">
<input className="w-12 h-14 bg-black border border-neutral-800 text-white text-center text-xl rounded-xl focus:outline-none focus:border-blue-500" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-black border border-neutral-800 text-white text-center text-xl rounded-xl focus:outline-none focus:border-blue-500" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-black border border-neutral-800 text-white text-center text-xl rounded-xl focus:outline-none focus:border-blue-500" maxlength="1" type="text"/>
<input className="w-12 h-14 bg-black border border-neutral-800 text-white text-center text-xl rounded-xl focus:outline-none focus:border-blue-500" maxlength="1" type="text"/>
</div>
<button className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2" onclick="switchTab('manage-sub')">
<i className="w-5 h-5" data-lucide="check-circle"></i>
              Valider le paiement
            </button>
</div>

</div>
<div className="hidden px-5 pb-6" id="tab-payment-card">
<div className="flex justify-between items-center mt-2 mb-6">
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800 transition-colors" onclick="switchTab('subscription')">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<h1 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Carte Bancaire
            </h1>
<div className="w-9"></div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-6">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="credit-card"></i>
</div>
<div>
<h2 className="text-white font-medium">Atlas Plus - Mensuel</h2>
<p className="text-neutral-400 text-sm">10 000 FCFA</p>
</div>
</div>
<h3 className="text-sm font-semibold text-neutral-400 mb-2">
              Numéro de carte
            </h3>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 rounded-xl mb-4 focus:outline-none focus:border-blue-500" placeholder="0000 0000 0000 0000" type="text"/>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<h3 className="text-sm font-semibold text-neutral-400 mb-2">
                  Expiration
                </h3>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500" placeholder="MM/AA" type="text"/>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-400 mb-2">CVC</h3>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500" placeholder="123" type="text"/>
</div>
</div>
<div className="bg-black/40 border border-blue-500/20 rounded-xl p-4 mb-8 flex items-center gap-3">
<i className="w-6 h-6 text-blue-400" data-lucide="shield-check"></i>
<div className="text-sm">
<p className="text-white font-medium">Sécurité 3D Secure</p>
<p className="text-neutral-400 text-xs mt-0.5">
                  Vérification bancaire requise
                </p>
</div>
</div>
<button className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2" onclick="switchTab('manage-sub')">
<i className="w-4 h-4" data-lucide="lock"></i>
              Payer 10 000 FCFA
            </button>
</div>

</div>
<div className="hidden px-5 pb-6 relative min-h-[600px]" id="tab-manage-sub">
<div className="flex justify-between items-center mt-2 mb-6">
<button className="bg-neutral-900 p-2 rounded-xl text-white hover:bg-neutral-800 transition-colors" onclick="switchTab('profile')">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<h1 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
              Mon Abonnement
            </h1>
<div className="w-9"></div>
</div>
<div className="flex flex-col items-center justify-center mb-8 mt-6">
<div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
<i className="w-10 h-10 text-green-400" data-lucide="check" strokeWidth="3"></i>
</div>
<h2 className="text-2xl font-bold text-white tracking-tight">
              Atlas Plus Actif
            </h2>
<p className="text-neutral-400 text-sm mt-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Prochain prélèvement : 14 Déc
            </p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-[24px] p-5 mb-4">
<div className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-800">
<div className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-xl">
<i className="w-5 h-5 text-blue-400" data-lucide="refresh-cw"></i>
</div>
<div>
<p className="text-white font-medium">Renouvellement auto</p>
<p className="text-neutral-500 text-xs">Prélever chaque mois</p>
</div>
</div>
<div className="w-12 h-6 bg-blue-500 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
</div>
</div>
<div className="flex justify-between items-center pt-1 cursor-pointer hover:opacity-80 transition-opacity">
<div className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-xl">
<i className="w-5 h-5 text-white" data-lucide="receipt"></i>
</div>
<div>
<p className="text-white font-medium">Historique des reçus</p>
<p className="text-neutral-500 text-xs">
                    Télécharger vos factures
                  </p>
</div>
</div>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-right"></i>
</div>
</div>
<button className="w-full bg-red-500/10 border border-red-500/20 text-red-500 py-4 rounded-xl font-semibold hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2 mt-8">
<i className="w-5 h-5" data-lucide="x-circle"></i>
            Résilier l'abonnement
          </button>

</div>


<div className="h-8"></div>
</div>
<button className="absolute bottom-24 right-5 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-transform z-50">
<i className="w-6 h-6 ml-1" data-lucide="play" fill="currentColor" strokeWidth="1.5"></i>
</button>

<div className="absolute bottom-0 left-0 w-full px-5 pb-8 pt-4 bg-black/80 backdrop-blur-xl border-t border-white/5 z-40">
<div className="flex justify-between items-center w-full max-w-sm mx-auto px-2">
<button className="flex flex-col items-center gap-1 transition-colors text-[#6B7280]" id="nav-home" onclick="switchTab('home')">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-white transition-colors" id="nav-programs" onclick="switchTab('programs')">
<i className="w-6 h-6" data-lucide="layout-grid" strokeWidth="1.5"></i>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-white transition-colors" id="nav-coach" onclick="switchTab('coach')">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-white transition-colors" id="nav-gyms" onclick="switchTab('gyms')">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</button>
<button className="flex flex-col items-center gap-1 text-[#6B7280] hover:text-white transition-colors" id="nav-profile" onclick="switchTab('profile')">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50"></div>
</div>


    </>
  );
}
