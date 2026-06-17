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



      const categoryData = {
          'prof': {
              image: 'https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&q=80&w=1200',
              text: 'Recherchez des professionnels de santé par spécialité ou par nom, et accédez rapidement aux informations essentielles pour faire le bon choix.'
          },
          'struct': {
              image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
              text: 'Trouvez facilement des structures médicales (cliniques, hôpitaux, centres de santé) proches de vous ou adaptées à vos besoins.'
          },
          'pharm': {
              image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1200',
              text: 'Localisez les pharmacies à proximité et identifiez les pharmacies de garde en temps réel.'
          }
      };

      const activeClasses = ['bg-[#5A3FA0]/15', 'text-[#5A3FA0]'];
      const inactiveClasses = ['bg-transparent', 'text-[#6E6B7E]'];
      const hoverClassesToRemoveOnActive = ['hover:bg-[#5A3FA0]/15', 'hover:text-[#5A3FA0]'];

      function switchCategory(categoryId) {
          ['prof', 'struct', 'pharm'].forEach(id => {
              const tab = document.getElementById(`tab-${id}`);
              if (id === categoryId) {
                  tab.classList.remove(...inactiveClasses, ...hoverClassesToRemoveOnActive);
                  tab.classList.add(...activeClasses);
              } else {
                  tab.classList.remove(...activeClasses);
                  tab.classList.add(...inactiveClasses, ...hoverClassesToRemoveOnActive);
              }
          });

          const imgElement = document.getElementById('hero-image');
          const textElement = document.getElementById('hero-card-text');

          imgElement.style.opacity = '0.5';
          textElement.style.opacity = '0';

          setTimeout(() => {
              imgElement.src = categoryData[categoryId].image;
              textElement.textContent = categoryData[categoryId].text;
              imgElement.style.opacity = '1';
              textElement.style.opacity = '1';
          }, 150);
      }

      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          const icon = document.getElementById('mobile-menu-icon');

          icon.style.transform = 'rotate(90deg) scale(0.8)';
          icon.style.opacity = '0';

          setTimeout(() => {
              if (menu.classList.contains('hidden')) {
                  menu.classList.remove('hidden');
                  icon.setAttribute('icon', 'solar:close-circle-linear');
              } else {
                  menu.classList.add('hidden');
                  icon.setAttribute('icon', 'solar:hamburger-menu-linear');
              }
              icon.style.transform = 'rotate(0deg) scale(1)';
              icon.style.opacity = '1';
          }, 200);
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-20 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex gap-x-3 items-center shrink-0">
<img alt="Passeport Médical Logo" className="bg-center w-50 h-9 object-contain shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23a59334-4121-4a4c-9007-216b1b25b392_1600w.png" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>

<div className="hidden lg:flex space-x-8">
<a className="hover:text-[#1F1B2D] transition-colors text-sm font-medium text-[#6E6B7E] font-jakarta" href="/professionnels">
              Professionnels
            </a>
<a className="hover:text-[#1F1B2D] transition-colors text-sm font-medium text-[#6E6B7E] font-jakarta" href="#">
              Structures
            </a>
<a className="hover:text-[#1F1B2D] transition-colors text-sm font-medium text-[#6E6B7E] font-jakarta" href="#">
              Pharmacies
            </a>
</div>

<div className="hidden lg:flex space-x-6 items-center">
<button className="flex items-center gap-1.5 text-base text-gray-600 hover:text-gray-900 transition-colors group">
<span className="text-base">🇸🇳</span>
<iconify-icon className="group-hover:text-gray-600 transition-colors text-sm text-gray-400" height="14" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(75, 85, 99)'}} width="14"></iconify-icon>
</button>
<div className="w-px h-5 bg-gray-200"></div>
<a className="hover:opacity-75 transition-colors text-sm font-medium text-[#1E1B2E] font-jakarta" href="/dashboard">
              Connexion
            </a>
<a className="transition-all hover:shadow text-sm font-medium text-white font-jakarta bg-[#5A3FA0] hover:bg-[#4A2F85] rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">
              Inscription
            </a>
</div>

<div className="lg:hidden flex items-center">
<button className="hover:text-gray-900 flex transition-transform active:scale-95 text-gray-600 pt-2 pr-2 pb-2 pl-2 items-center justify-center" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl transition-all duration-200 ease-in-out" height="24" icon="solar:hamburger-menu-outline" id="mobile-menu-icon" style={{fontSize: '1.5rem', lineHeight: '1', color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-4 flex flex-col space-y-4" id="mobile-menu">
<a className="hover:text-[#5A3FA0] transition-colors text-base font-medium text-[#1E1B2E]" href="/professionnels">
          Professionnels
        </a>
<a className="hover:text-[#5A3FA0] transition-colors text-base font-medium text-[#1E1B2E]" href="#">
          Structures
        </a>
<a className="hover:text-[#5A3FA0] transition-colors text-base font-medium text-[#1E1B2E]" href="#">
          Pharmacies
        </a>
<div className="w-full h-px bg-gray-100 my-2"></div>
<div className="flex items-center gap-2 text-base text-gray-600 py-1">
<span className="text-base">🇸🇳</span>
<span>Sénégal</span>
</div>
<a className="hover:text-[#5A3FA0] transition-colors text-base font-medium text-[#1E1B2E]" href="/dashboard">
          Connexion
        </a>
<a className="text-center hover:bg-[#4A2F85] transition-all hover:shadow text-base font-medium text-white bg-[#5A3FA0] rounded-full py-2.5 px-4 shadow-sm w-full" href="#">
          Inscription
        </a>
</div>
</nav>

<section className="lg:pt-24 lg:pb-32 overflow-hidden bg-[#FAFAFD] pt-12 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F8F7FD] blur-[100px] rounded-full pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<h1 className="leading-normal lg:text-[2.5rem] xl:text-5xl md:text-4xl text-3xl font-semibold text-[#1F1B2D] tracking-tight font-jakarta mb-5">
              Votre
              <span className="text-[#5A3FA0] inline-block relative">
                historique médical
              </span>
              toujours à vos côtés.
            </h1>
<p className="leading-relaxed text-small lg:text-small xl:text-small text-base font-medium text-[#334155] font-jakarta mb-14">
              Accédez à vos données médicales, gérez votre parcours de soins et
              restez connecté à votre réseau de santé.
            </p>

<div className="flex flex-col sm:flex-row bg-white z-20 border-gray-100 border rounded-[2rem] mb-5 pt-2 pr-2 pb-2 pl-2 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-x-2 gap-y-2 items-center">
<div className="flex-1 flex sm:py-0 text-[#64748B] w-full pt-2 pr-4 pb-2 pl-4 items-center">
<iconify-icon className="shrink-0 text-lg text-gray-400" height="18" icon="solar:magnifer-linear" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
<input className="border-none outline-none placeholder-gray-400 text-sm text-[#94A3B8] font-jakarta bg-transparent w-full pr-3 pl-3" placeholder="Médecin, structure, pharmacie..." type="text"/>
</div>
<div className="hidden sm:block w-px h-6 bg-gray-200"></div>
<div className="sm:hidden w-full h-px bg-gray-100 my-1"></div>
<div className="flex-1 flex sm:py-0 w-full pt-2 pr-4 pb-2 pl-4 items-center">
<iconify-icon className="shrink-0 text-lg text-gray-400" height="18" icon="solar:map-point-linear" style={{color: 'rgb(148, 163, 184)'}} width="18"></iconify-icon>
<input className="border-none outline-none placeholder-gray-400 text-sm text-[#94A3B8] font-jakarta bg-transparent w-full pr-3 pl-3" placeholder="Ville ou région" type="text"/>
</div>
<button className="flex transition-all shadow-[#EF9F27]/20 shrink-0 group sm:w-auto lg:pr-3 lg:pl-3 text-white bg-[#5A3FA0] hover:bg-[#4A2F85] w-full rounded-full pt-3 pr-5 pb-3 pl-5 shadow-md gap-x-2 gap-y-2 items-center justify-center">
<span className="lg:hidden text-sm font-medium font-jakarta">
                  Rechercher
                </span>
<iconify-icon className="hidden lg:inline-block group-hover:translate-x-0.5 transition-transform text-lg" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</button>
</div>

<div className="flex overflow-x-auto [&amp;::-webkit-scrollbar]:hidden text-[#7B6AEE] gap-x-2 gap-y-2 items-center" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<button className="whitespace-nowrap transition-all hover:bg-[#5A3FA0]/15 hover:text-[#5A3FA0] border-none text-sm font-medium text-[#6E6B7E] font-jakarta bg-transparent rounded-full pt-2 pr-4 pb-2 pl-4" id="tab-prof" onclick="switchCategory('prof'); ['prof','struct','pharm'].forEach(id =&gt; document.getElementById('tab-'+id).className = id === 'prof' ? 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-[#5A3FA0]/15 text-[#5A3FA0] border-none' : 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-transparent text-[#6E6B7E] hover:bg-[#5A3FA0]/15 hover:text-[#5A3FA0] border-none')">
                Professionnels
              </button>
<button className="whitespace-nowrap transition-all border-none text-sm font-medium text-[#5A3FA0] font-jakarta bg-[#5A3FA0]/15 rounded-full pt-2 pr-4 pb-2 pl-4" id="tab-struct" onclick="switchCategory('struct'); ['prof','struct','pharm'].forEach(id =&gt; document.getElementById('tab-'+id).className = id === 'struct' ? 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-[#5A3FA0]/15 text-[#5A3FA0] border-none' : 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-transparent text-[#6E6B7E] hover:bg-[#5A3FA0]/15 hover:text-[#5A3FA0] border-none')">
                Structures
              </button>
<button className="whitespace-nowrap transition-all hover:bg-[#5A3FA0]/15 hover:text-[#5A3FA0] border-none text-sm font-medium text-[#6E6B7E] font-jakarta bg-transparent rounded-full pt-2 pr-4 pb-2 pl-4" id="tab-pharm" onclick="switchCategory('pharm'); ['prof','struct','pharm'].forEach(id =&gt; document.getElementById('tab-'+id).className = id === 'pharm' ? 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-[#5A3FA0]/15 text-[#5A3FA0] border-none' : 'whitespace-nowrap transition-all text-sm font-medium font-jakarta rounded-full pt-2 pr-4 pb-2 pl-4 bg-transparent text-[#6E6B7E] hover:bg-[#5A3FA0]/15 hover:text-[#5A3FA0] border-none')">
                Pharmacies
              </button>
</div>
</div>

<div className="lg:h-[500px] overflow-hidden shadow-[#0C447C]/10 group w-full h-[360px] border-[#ECE9FF] border rounded-[2.5rem] relative shadow-md">
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10 pointer-events-none"></div>
<img alt="Professionnel de santé" className="object-center transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover border-[#ECE9FF] border absolute top-0 right-0 bottom-0 left-0" id="hero-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8a6701e-53c5-4811-bb0c-07fa494e969d_1600w.jpg"/>

<div className="sm:bottom-8 sm:left-8 sm:right-8 sm:p-5 z-20 bg-white/90 border-white/50 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md">
<div className="flex items-center gap-3.5">
<div className="shrink-0 flex text-[#5A3FA0] bg-[#5A3FA0]/10 w-10 h-10 rounded-full items-center justify-center">
<iconify-icon className="text-xl" height="20" icon="solar:magnifer-linear" style={{color: 'rgb(90, 63, 160)'}} width="20"></iconify-icon>
</div>
<p className="leading-snug line-clamp-2 transition-opacity duration-200 text-sm font-medium text-gray-800 font-jakarta" id="hero-card-text">
                  Trouvez facilement des structures médicales (cliniques,
                  hôpitaux, centres de santé) proches de vous ou adaptées à vos
                  besoins.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-[#1F1B2D] tracking-tight font-jakarta mb-5">
          Un écosystème de santé complet
        </h2>
<p className="text-base text-[#334155] font-jakarta font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          Connectez-vous instantanément avec tous les acteurs de votre santé
          pour un suivi fluide et sécurisé.
        </p>
<div className="relative max-w-[75%] sm:max-w-4xl mx-auto flex justify-center">
<img alt="Isometric Medical Ecosystem Network" className="w-full h-auto object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca02441c-0ab4-4762-9226-65f64cd084a7_1600w.png"/>
</div>
</div>
</section>




<section className="py-24 bg-[#FAFAFD]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-[#1F1B2D] tracking-tight font-jakarta mb-5">
            Tout votre parcours de santé en un seul endroit
          </h2>
<p className="leading-relaxed text-base font-medium text-[#334155] font-jakarta max-w-2xl mx-auto">
            Accédez à vos informations essentielles et restez connecté à votre
            écosystème de soins.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon className="" height="24" icon="solar:history-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Historique médical
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Consultez votre historique de santé à tout moment.
            </p>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon className="" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Documents médicaux
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Retrouvez vos ordonnances, analyses et comptes rendus.
            </p>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon className="" height="24" icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Rendez-vous
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Gérez vos consultations et votre suivi médical.
            </p>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:share-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Partage sécurisé
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Partagez vos informations avec les professionnels autorisés.
            </p>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon className="" height="24" icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Notifications
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Recevez des rappels et mises à jour importantes.
            </p>
</div>
<div className="group bg-white rounded-2xl p-8 shadow-sm border border-[#F1F5F9] flex flex-col hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#1F1B2D]/5 text-[#1F1B2D] group-hover:bg-[#5946C9] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-[1.1rem] font-medium text-[#1F1B2D] group-hover:text-[#5946C9] font-jakarta mb-3">
              Accès multi-supports
            </h3>
<p className="text-[0.95rem] text-[#64748B] group-hover:text-[#1F1B2D] font-jakarta leading-relaxed">
              Disponible sur mobile et web.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-[#1F1B2D] tracking-tight font-jakarta mb-5">
            Vos données de santé en toute confiance
          </h2>
<p className="leading-relaxed text-base font-medium text-[#334155] font-jakarta max-w-2xl mx-auto">
            La confidentialité et la sécurité de vos données sont au cœur du
            Passeport Médical.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex justify-center lg:justify-end">
<img alt="3D Medical Security Shield" className="w-500 h-500 drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c567df6-1177-48b9-839f-56293a1439c0_1600w.png"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="w-12 h-12 rounded-xl bg-[#5A3FA0]/10 text-[#5A3FA0] flex items-center justify-center mb-5">
<iconify-icon className="" height="24" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1F1B2D] font-jakarta mb-2">
                Accès sécurisé
              </h3>
<p className="text-[0.95rem] text-[#64748B] font-jakarta leading-relaxed">
                Identification forte pour protéger votre compte.
              </p>
</div>
<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="w-12 h-12 rounded-xl bg-[#5A3FA0]/10 text-[#5A3FA0] flex items-center justify-center mb-5">
<iconify-icon height="24" icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1F1B2D] font-jakarta mb-2">
                Contrôle utilisateur
              </h3>
<p className="text-[0.95rem] text-[#64748B] font-jakarta leading-relaxed">
                Vous décidez qui peut consulter votre historique.
              </p>
</div>
<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="w-12 h-12 rounded-xl bg-[#5A3FA0]/10 text-[#5A3FA0] flex items-center justify-center mb-5">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1F1B2D] font-jakarta mb-2">
                Protection des données
              </h3>
<p className="text-[0.95rem] text-[#64748B] font-jakarta leading-relaxed">
                Chiffrement de bout en bout de vos informations.
              </p>
</div>
<div className="flex flex-col items-center text-center sm:items-start sm:text-left">
<div className="w-12 h-12 rounded-xl bg-[#5A3FA0]/10 text-[#5A3FA0] flex items-center justify-center mb-5">
<iconify-icon height="24" icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#1F1B2D] font-jakarta mb-2">
                Traçabilité des accès
              </h3>
<p className="text-[0.95rem] text-[#64748B] font-jakarta leading-relaxed">
                Historique complet de chaque consultation effectuée.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-gradient-to-b from-[#FAFAFD] to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#F8F9FE] rounded-[2rem] overflow-hidden border border-[#F1F5F9]">
<div className="flex flex-col lg:flex-row items-stretch">
<div className="p-10 sm:p-12 lg:p-16 lg:pr-0 lg:w-1/2 flex flex-col justify-center">
<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#1F1B2D] tracking-tight font-jakarta mb-6 leading-[1.15]">
                Votre santé vous
                <br className="hidden lg:block"/>
                accompagne partout
              </h2>
<p className="text-base text-[#334155] font-jakarta mb-10 leading-relaxed max-w-md">
                Téléchargez le Passeport Médical et accédez à vos informations
                de santé à tout moment, depuis votre mobile.
              </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-3 hover:bg-[#2D2741] transition-colors text-white bg-[#211A3D] rounded-xl px-5 py-3" href="#">
<iconify-icon className="text-[1.75rem]" icon="bxl:play-store"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-[0.6rem] uppercase tracking-wide font-medium text-white/80 leading-none mb-1">
                      Disponible sur
                    </span>
<span className="text-[0.95rem] font-semibold font-jakarta leading-none">
                      Play Store
                    </span>
</div>
</a>
<a className="flex items-center gap-3 hover:bg-[#2D2741] transition-colors text-white bg-[#211A3D] rounded-xl px-5 py-3" href="#">
<iconify-icon className="text-[1.75rem]" icon="bxl:apple"></iconify-icon>
<div className="flex flex-col items-start">
<span className="text-[0.6rem] uppercase tracking-wide font-medium text-white/80 leading-none mb-1">
                      Télécharger sur l'
                    </span>
<span className="text-[0.95rem] font-semibold font-jakarta leading-none">
                      App Store
                    </span>
</div>
</a>
</div>
</div>
<div className="w-full lg:w-1/2 min-h-[400px] relative">
<img alt="Application Mobile Passeport Médical" className="absolute inset-0 w-full h-full object-cover lg:object-right-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fbf5e9a-92f5-40a3-af63-281a177ef11b_1600w.png"/>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-[#211A3D] pt-24 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl border-orange-800 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 gap-x-12 gap-y-12">
<div className="md:col-span-4 lg:col-span-5">
<div className="flex gap-3 mb-6 gap-x-3 gap-y-3 items-center">
<img alt="Passeport Médical Logo" className="bg-center w-55 h-12 object-cover pt-0.5 pr-0.5 pb-0.5 pl-0.5 blur-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8781cc2e-c3e4-4f26-ad04-32cf4e5c8259_1600w.png"/>
</div>
<p className="leading-relaxed text-sm text-white/80 font-jakarta max-w-sm mb-6">
              Votre compagnon de santé numérique. Simplifiez le suivi de votre
              parcours médical et celui de vos proches.
            </p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="hover:bg-white/20 transition-colors flex items-center justify-center text-white bg-white/10 w-9 h-9 rounded-full" href="#">
<svg className="" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.339 18.337v-8.422H5.667v8.422zM7.003 8.76a1.548 1.548 0 1 0 0-3.095 1.548 1.548 0 0 0 0 3.095zm11.335 9.577v-4.616c0-2.398-1.296-3.514-3.024-3.514-1.394 0-2.018.766-2.366 1.305v-1.12H10.28c.034.752 0 8.422 0 8.422h2.668v-4.704c0-.24.017-.48.088-.652.193-.48.633-.977 1.371-.977.967 0 1.354.737 1.354 1.817v4.516z"></path>
</svg>
</a>
<a aria-label="Instagram" className="hover:bg-white/20 transition-colors flex items-center justify-center text-white bg-white/10 w-9 h-9 rounded-full" href="#">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white" href="#">
<svg className="" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z"></path>
</svg>
</a>
</div>
</div>
<div className="hidden lg:block lg:col-span-1"></div>
<div className="md:col-span-4 lg:col-span-3">
<h4 className="text-base font-semibold text-white tracking-tight font-jakarta mb-5">
              Annuaire
            </h4>
<ul className="text-sm space-y-3">
<li className="">
<a className="hover:text-white transition-colors text-white/80" href="#">
                  Professionnels de santé
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-white/80" href="#">
                  Structures médicales
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors text-white/80" href="#">
                  Pharmacies de garde
                </a>
</li>
</ul>
</div>
<div className="md:col-span-4 lg:col-span-3">
<h4 className="text-base font-semibold text-white tracking-tight font-jakarta mb-5">
              Contact
            </h4>
<ul className="text-sm font-jakarta space-y-3">
<li className="">
<a className="hover:text-white transition-colors text-white/80" href="#">
                  Support technique
                </a>
</li>
<li className="flex gap-2.5 text-blue-200 items-center">
<svg className="w-[18px] h-[18px] text-[#ffffff]/80" data-icon-replaced="true" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path className="" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path>
<path className="" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8" strokeLinecap="round"></path>
</g>
</svg>
<a className="hover:text-white transition-colors text-white/80" href="mailto:contact@passeportmedical.sn">
                  contact@passeportmedical.sn
                </a>
</li>
<li className="flex gap-2.5 text-white/80 gap-x-2.5 gap-y-2.5 items-center">
<svg className="text-[#ffffff]/80 w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="phone-linear" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z" fill="currentColor"></path>
</svg>
<span className="text-white/80">+221 33 XXX XX XX</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-sm text-white/80 font-jakarta">
            © 2026 Passeport Médical. Tous droits réservés.
          </p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors text-sm text-white/80 font-jakarta" href="#">
              Confidentialité
            </a>
<a className="hover:text-white transition-colors text-sm text-white/80 font-jakarta" href="#">
              CGU
            </a>
</div>
</div>
</div>
</footer>

<textarea className="-edit" style={{fontSize: '14px', fontWeight: '500', fontFamily: '"Google Sans Flex", sans-serif', color: 'rgb(100, 116, 139)', lineHeight: '22.75px', textAlign: 'right', textTransform: 'none', letterSpacing: 'normal', position: 'absolute', left: '537px', top: '1408px', width: '334px', height: '68.25px', boxSizing: 'border-box', padding: '0px', margin: '0px', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', outline: 'none', background: 'transparent', resize: 'none', overflow: 'auto', zIndex: '2147483647'}}></textarea>

    </>
  );
}
