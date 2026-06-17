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



      document.addEventListener('DOMContentLoaded', () => {

          // --- Simple View Router ---
          function handleRoute() {
              const hash = window.location.hash || '#home';
              const viewId = hash.substring(1) + '-view';
              const views = document.querySelectorAll('.view-section');
              let viewFound = false;

              views.forEach(view => {
                  if (view.id === viewId) {
                      view.style.display = 'block';
                      view.classList.remove('hidden');
                      viewFound = true;
                  } else {
                      view.style.display = 'none';
                      view.classList.add('hidden');
                  }
              });

              if (!viewFound) {
                  const homeView = document.getElementById('home-view');
                  if(homeView) {
                      homeView.style.display = 'block';
                      homeView.classList.remove('hidden');
                  }
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          window.addEventListener('hashchange', handleRoute);
          handleRoute(); // Initialize routing on load

          // --- Mega Menu Tabs Logic ---
          const tabs = document.querySelectorAll('.mega-menu-tab');
          const contents = document.querySelectorAll('.mega-menu-content');

          tabs.forEach(tab => {
              tab.addEventListener('mouseenter', () => {
                  tabs.forEach(t => {
                      t.classList.remove('bg-white', 'text-gray-900', 'border-[#16A34A]');
                      t.classList.add('text-gray-600', 'border-transparent');
                  });

                  contents.forEach(c => {
                      c.classList.add('hidden');
                      c.classList.remove('grid');
                  });

                  tab.classList.remove('text-gray-600', 'border-transparent');
                  tab.classList.add('bg-white', 'text-gray-900', 'border-[#16A34A]');

                  const targetId = tab.getAttribute('data-target');
                  const targetContent = document.getElementById(targetId);
                  if (targetContent) {
                      targetContent.classList.remove('hidden');
                      targetContent.classList.add('grid');
                  }
              });
          });
      });

      // --- Video Modal Logic ---
      window.openVideoModal = function() {
          const modal = document.getElementById('video-modal');
          const content = document.getElementById('video-modal-content');
          const iframe = document.getElementById('youtube-video');

          iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

          modal.classList.remove('hidden');
          void modal.offsetWidth; // Trigger reflow

          content.classList.remove('scale-95', 'opacity-0');
          content.classList.add('scale-100', 'opacity-100');
          document.body.style.overflow = 'hidden';
      };

      window.closeVideoModal = function() {
          const modal = document.getElementById('video-modal');
          const content = document.getElementById('video-modal-content');
          const iframe = document.getElementById('youtube-video');

          content.classList.remove('scale-100', 'opacity-100');
          content.classList.add('scale-95', 'opacity-0');

          setTimeout(() => {
              modal.classList.add('hidden');
              iframe.src = "";
              document.body.style.overflow = '';
          }, 300);
      };

      // --- Initialize Lucide Icons ---
      if (typeof lucide !== 'undefined') {
          lucide.createIcons();
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
      

<nav className="fixed z-40 bg-white w-full border-gray-100 border-b-2 top-0 flex flex-col shadow-sm">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 block bg-gray-50/50 w-full">
<div className="flex justify-between items-center py-2 text-[13px] font-medium text-gray-600 font-inter">
<div className="flex justify-between items-center py-2 text-[11px] sm:text-[13px] font-medium text-gray-600 font-inter">
<div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 items-center">
<span>+48 123 456 789</span>
<span className="hidden md:inline">
                ul. Górnicza 1 42-100 Kłobuck, woj. śląskie
              </span>
<a className="text-[#16A34A] hover:underline" href="mailto:drewbet@drewbet.pl">
                drewbet@drewbet.pl
              </a>
</div>
<div className="flex space-x-3 sm:space-x-4 text-gray-500">
<a className="hover:text-[#16A34A] transition-colors" href="#">
<iconify-icon height="16" icon="ic:baseline-facebook" width="16"></iconify-icon>
</a>
<a className="hover:text-[#16A34A] transition-colors" href="#">
<iconify-icon height="16" icon="mdi:instagram" width="16"></iconify-icon>
</a>
<a className="hover:text-[#16A34A] transition-colors hidden sm:block" href="#">
<iconify-icon height="16" icon="ic:baseline-tiktok" width="16"></iconify-icon>
</a>
<a className="hover:text-[#16A34A] transition-colors" href="#">
<iconify-icon height="16" icon="mdi:youtube" width="16"></iconify-icon>
</a>
<a className="hover:text-[#16A34A] transition-colors hidden sm:block" href="#">
<iconify-icon height="16" icon="mdi:pinterest" width="16"></iconify-icon>
</a>
<a className="hover:text-[#16A34A] transition-colors hidden sm:block" href="#">
<iconify-icon height="16" icon="mdi:google" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 w-full relative">
<a className="flex items-center cursor-pointer group bg-[#2D9F48] text-white px-5 sm:px-6 py-2.5 sm:py-3 h-14 sm:h-16 relative overflow-hidden" href="#home" style={{minWidth: 'max-content'}}>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-white" style={{clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'}}></div>
<div className="flex flex-col justify-center text-left">
<span className="text-[22px] sm:text-[28px] font-bold tracking-tight font-inter italic uppercase leading-none mb-1">
              DREWBET
              <sup className="text-[10px] sm:text-[12px] font-normal not-italic relative -top-2 sm:-top-3">
                ®
              </sup>
</span>
<span className="text-[7px] sm:text-[9px] font-inter uppercase tracking-wider leading-none whitespace-nowrap italic">
              naturalne otoczenie jakości
            </span>
</div>
</a>

<div className="flex items-center space-x-4 sm:space-x-6 ml-auto">
<button className="text-gray-900 hover:text-[#16A34A] transition-colors flex items-center gap-1.5 text-[15px] font-inter font-medium" id="open-search">
<iconify-icon height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="hidden sm:inline">Szukaj</span>
</button>
<button className="text-gray-900 hover:text-[#16A34A] lg:hidden transition-colors flex items-center" id="mobile-menu-btn" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="w-full border-t border-gray-100 bg-white hidden lg:block relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-[52px] gap-5 xl:gap-8 text-[13px] xl:text-[14px] font-semibold font-inter tracking-wide uppercase w-full overflow-x-auto hide-scrollbar">

<div className="h-full flex items-center group/dropdown order-1 shrink-0">
<a className="text-gray-900 flex items-center gap-1.5 hover:text-[#16A34A] transition-colors h-full" href="#produkty">
              Produkty
              <iconify-icon className="group-hover/dropdown:rotate-180 transition-transform" height="18" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<div className="group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform origin-top group-hover/dropdown:translate-y-0 z-50 cursor-default bg-white opacity-0 w-full max-w-full border-gray-100 border-t absolute top-full left-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] translate-y-2">
<div className="flex h-[500px] max-w-full mr-auto ml-auto normal-case tracking-normal">
<div className="shrink-0 flex flex-col gap-2 sm:pl-6 lg:pl-8 bg-[#FAFAFA] w-[280px] border-gray-100 border-r-2 pt-8 pr-6 pb-8 pl-6 relative gap-x-2 gap-y-2">
<div className="absolute inset-y-0 right-full w-screen bg-[#FAFAFA]"></div>
<button className="mega-menu-tab relative z-10 w-full text-left font-clash text-[15px] font-semibold px-5 py-4 border-l-4 uppercase tracking-wide block transition-colors cursor-pointer bg-white text-gray-900 border-[#16A34A]" data-target="menu-kategorie">
                    Wg kategorii
                  </button>
<button className="mega-menu-tab relative z-10 w-full text-left font-clash text-[15px] font-semibold px-5 py-4 hover:text-gray-900 uppercase tracking-wide border-l-4 border-transparent block transition-colors cursor-pointer text-gray-600" data-target="menu-zastosowanie">
                    Wg zastosowania
                  </button>
<button className="mega-menu-tab relative z-10 w-full text-left font-clash text-[15px] font-semibold px-5 py-4 hover:text-gray-900 uppercase tracking-wide border-l-4 border-transparent block transition-colors cursor-pointer text-gray-600" data-target="menu-wszystkie">
                    Wszystkie produkty
                  </button>
</div>
<div className="flex-1 lg:px-12 overflow-y-auto custom-scrollbar bg-white pt-10 pr-8 pb-10 pl-8 relative">
<div className="mega-menu-content grid grid-cols-3 gap-x-8 gap-y-12" id="menu-kategorie">
<div className="space-y-10">
<div className="">
<h4 className="font-clash text-[17px] font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                          Kostki Brukowe
                        </h4>
<div className="space-y-2.5">
<a className="font-inter text-[15px] text-gray-500 hover:text-[#16A34A] transition-colors block" href="#produkt">
                            Dekoracyjne (Kostka Avanti)
                          </a>
<a className="font-inter text-[15px] text-gray-500 hover:text-[#16A34A] transition-colors block" href="#produkty">
                            Szlachetne
                          </a>
<a className="font-inter text-[15px] text-gray-500 hover:text-[#16A34A] transition-colors block" href="#produkty">
                            Przemysłowe
                          </a>
</div>
</div>
</div>
<div className="col-span-2 relative h-48 bg-gray-100 overflow-hidden group">
<img alt="Promocja" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
<div className="">
<span className="font-clash text-[#16A34A] text-[13px] font-semibold uppercase tracking-widest block mb-1">
                            Katalog 2026
                          </span>
<h4 className="font-clash text-white text-[22px] tracking-tight font-semibold uppercase">
                            Odkryj nowości wg kategorii
                          </h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-full flex items-center group/onas relative order-7 shrink-0">
<a className="text-gray-900 flex items-center gap-1.5 hover:text-[#16A34A] transition-colors h-full" href="#dzialalnosc">
              O NAS
              <iconify-icon className="group-hover/onas:rotate-180 transition-transform" height="18" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="absolute top-full left-0 opacity-0 invisible group-hover/onas:opacity-100 group-hover/onas:visible transition-all duration-200 transform translate-y-2 group-hover/onas:translate-y-0 z-50 bg-white shadow-xl border border-gray-100 w-[260px] py-2 tracking-normal">
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#dzialalnosc">
                Działalność
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#jakosc">
                Jakość pod kontrolą
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Warunki sprzedaży
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#porady">
                Porady techniczne
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Instrukcje
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Klauzule RODO
              </a>
</div>
</div>

<div className="h-full flex items-center group/oferta relative order-6 shrink-0">
<a className="text-gray-900 flex items-center gap-1.5 hover:text-[#16A34A] transition-colors h-full" href="#">
              OFERTA
              <iconify-icon className="group-hover/oferta:rotate-180 transition-transform" height="18" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="absolute top-full left-0 opacity-0 invisible group-hover/oferta:opacity-100 group-hover/oferta:visible transition-all duration-200 transform translate-y-2 group-hover/oferta:translate-y-0 z-50 bg-white shadow-xl border border-gray-100 w-[240px] py-2 tracking-normal">
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#produkt">
                Katalog produktów
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Nowości 2026
              </a>
</div>
</div>

<div className="h-full flex items-center group/uslugi relative order-2 shrink-0">
<a className="text-gray-900 flex items-center gap-1.5 hover:text-[#16A34A] transition-colors h-full" href="#">
              USŁUGI
              <iconify-icon className="group-hover/uslugi:rotate-180 transition-transform" height="18" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="absolute top-full left-0 opacity-0 invisible group-hover/uslugi:opacity-100 group-hover/uslugi:visible transition-all duration-200 transform translate-y-2 group-hover/uslugi:translate-y-0 z-50 bg-white shadow-xl border border-gray-100 w-[240px] py-2 tracking-normal">
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Transport
              </a>
<a className="block px-6 py-3 text-[15px] text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-inter normal-case border-b border-gray-50 last:border-0" href="#">
                Projektowanie
              </a>
</div>
</div>

<a className="text-gray-900 hover:text-[#16A34A] transition-colors h-full flex items-center order-3 shrink-0" href="https://punktybruk.drewbet.pl/" target="_blank">
            GDZIE KUPIĆ?
          </a>

<a className="text-[#16A34A] border-2 border-[#16A34A] px-4 py-1.5 hover:bg-[#16A34A] hover:text-white transition-colors h-auto flex items-center font-bold tracking-widest text-[13px] xl:text-[14px] order-9 ml-auto shrink-0" href="#outlet">
            OUTLET
          </a>

<a className="text-gray-900 hover:text-[#16A34A] transition-colors h-full flex items-center order-4 shrink-0" href="#inspiracje">
            REALIZACJE
          </a>

<a className="text-gray-900 hover:text-[#16A34A] transition-colors h-full flex items-center order-8 shrink-0" href="#kontakt">
            KONTAKT
          </a>
<a className="text-gray-900 hover:text-[#16A34A] transition-colors h-full flex items-center order-5 shrink-0" href="#dopobrania">
            DO POBRANIA
          </a>
</div>
</div>
<div className="hidden lg:hidden fixed inset-0 z-[100] bg-white overflow-y-auto w-full h-full" id="mobile-menu">
<div className="min-h-full flex flex-col">
<div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-100">
<span className="font-clash text-2xl font-bold tracking-tight uppercase text-gray-900">
              Menu
            </span>
<button className="text-gray-900 hover:text-[#16A34A] transition-colors p-2 flex items-center justify-center" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon height="32" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
<div className="flex flex-col py-8 px-4 sm:px-6 space-y-6 font-clash text-[22px] sm:text-2xl font-medium flex-1">

<div className="flex flex-col">
<div className="flex justify-between items-center w-full text-gray-900 cursor-pointer group" onclick="document.getElementById('mobile-produkty-sub').classList.toggle('hidden'); document.getElementById('mobile-produkty-icon').classList.toggle('rotate-180')">
<span className="uppercase tracking-wide group-hover:text-[#16A34A] transition-colors">
                  Produkty
                </span>
<iconify-icon className="transition-transform duration-300 text-gray-500 group-hover:text-[#16A34A]" height="24" icon="solar:alt-arrow-down-linear" id="mobile-produkty-icon" width="24"></iconify-icon>
</div>
<div className="hidden" id="mobile-produkty-sub">
<div className="space-y-5 text-lg sm:text-xl text-gray-500 border-l-2 border-gray-100 pl-5 ml-2 mt-5">
<a className="hover:text-[#16A34A] uppercase tracking-wide block" href="#kategorie" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
                    Wg kategorii
                  </a>
<a className="hover:text-[#16A34A] uppercase tracking-wide block" href="#zastosowanie" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
                    Wg zastosowania
                  </a>
<a className="hover:text-[#16A34A] uppercase tracking-wide block" href="#wszystkie" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
                    Wszystkie produkty
                  </a>
</div>
</div>
</div>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#dzialalnosc" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              O nas
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#oferta" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Oferta
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#uslugi" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Usługi
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="https://punktybruk.drewbet.pl/" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Gdzie kupić?
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#inspiracje" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Realizacje
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#dopobrania" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Do pobrania
            </a>
<a className="text-gray-900 hover:text-[#16A34A] uppercase tracking-wide block" href="#kontakt" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
              Kontakt
            </a>
<div className="pt-6 mt-2">
<a className="text-[#16A34A] font-bold tracking-widest border-2 border-[#16A34A] px-4 py-4 text-center w-full uppercase block hover:bg-[#16A34A] hover:text-white transition-colors" href="#outlet" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
                OUTLET
              </a>
</div>
</div>
</div>
</div>
</nav>

<main className="" id="main-content">

<div className="view-section block" id="home-view" style={{display: 'block'}}>

<header className="relative w-full h-[90vh] min-h-[650px] bg-[#0A0A0A] overflow-hidden group">
<div className="flex w-full h-full transition-transform duration-700 ease-in-out" id="hero-slider-track">

<div className="w-full h-full flex-shrink-0 relative flex items-center pt-40">
<div className="absolute inset-0 w-full h-full">
<img alt="Nowoczesna kostka brukowa" className="opacity-50 mix-blend-normal w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43b0a00f-1353-47cd-865e-cd3cb0ac8e9d_3840w.jpg"/>
<div className="bg-gradient-to-r from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 z-10 w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-3xl">
<span className="font-clash inline-flex items-center gap-2 px-4 py-1.5 bg-[#16A34A] text-white text-[15px] font-semibold tracking-wide uppercase mb-8">
                    Różnorodne kolorystyki
                  </span>
<h1 className="font-clash text-6xl sm:text-7xl md:text-[88px] font-semibold tracking-tight text-white leading-[1.05] mb-12 uppercase">
<span className="block text-4xl sm:text-5xl md:text-6xl text-[#16A34A] mb-2 tracking-widest font-bold">
                      DREWBET
                    </span>
                    Producent
                    <br/>
                    kostki brukowej
                  </h1>
<div className="flex flex-wrap gap-4">
<a className="font-clash bg-[#16A34A] text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center gap-3 uppercase tracking-wide" href="#produkty">
                      Sprawdź ofertę
                      <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 bg-white border-b-2 border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5">
<span className="text-[#16A34A] font-clash uppercase tracking-widest text-[15px] font-semibold mb-6 block">
                  Poznaj nas
                </span>
<h2 className="font-clash text-4xl md:text-[52px] font-semibold tracking-tight text-gray-900 mb-8 uppercase leading-[1.05]">
                  Producent kostki
                  <br/>
                  brukowej i płyt
                  <br/>
                  tarasowych
                </h2>
<p className="font-inter text-[19px] text-gray-500 leading-relaxed mb-10">
                  Od 18 lat firma DREWBET® na nowoczesnych liniach
                  technologicznych tworzy, przy pomocy wykwalifikowanej kadry
                  pracowników i projektantów, wyjątkowe rozwiązania na
                  pograniczu sztuki budowlanej i użytkowego designu.
                </p>
<a className="font-clash uppercase tracking-wide inline-flex items-center gap-3 text-[19px] font-semibold text-gray-900 group border-b-2 border-gray-900 pb-2 hover:text-[#16A34A] hover:border-[#16A34A] transition-colors" href="#dzialalnosc">
                  Więcej o nas
                  <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
<div className="bg-[#FAFAFA] p-8 sm:p-10 border-2 border-transparent hover:border-gray-900 transition-colors group cursor-default">
<iconify-icon className="text-[#16A34A] mb-6 group-hover:scale-110 transition-transform" height="36" icon="solar:widget-5-linear" strokeWidth="1.5" width="36"></iconify-icon>
<h3 className="font-clash text-2xl font-semibold tracking-tight text-gray-900 mb-4 uppercase">
                    Kostka brukowa
                  </h3>
<p className="font-inter text-[17px] text-gray-500 leading-relaxed">
                    Nowoczesne kostki: płukane, śrutowane, szlachetne melanże,
                    vintage — także kostki przemysłowe.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-b-2 border-gray-100 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white border border-gray-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-sm">
<div className="flex-1 relative z-10 w-full">
<span className="text-[#16A34A] font-clash uppercase tracking-widest text-[15px] font-medium mb-6 block">
                  Jubileusz Firmy
                </span>
<h2 className="font-clash text-4xl md:text-[52px] font-medium tracking-tight text-gray-900 mb-8 uppercase leading-[1.05]">
                  25 lat
                  <br/>
<span className="text-[#16A34A]">doświadczenia</span>
</h2>
<p className="font-inter text-[21px] text-gray-500 leading-relaxed mb-10">
                  Od ćwierćwiecza z pasją i zaangażowaniem tworzymy najwyższej
                  jakości kostkę brukową i galanterię betonową. Poznaj historię
                  firmy DREWBET i zobacz, jak zmienialiśmy otoczenie wokół nas,
                  stawiając na innowacje, trwałość i unikalny design.
                </p>
<div className="flex flex-wrap items-center gap-6">
<button className="font-clash bg-[#16A34A] text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-3 uppercase tracking-wide group" onclick="openVideoModal()">
<i className="w-6 h-6 fill-current" data-lucide="play" strokeWidth="1.5"></i>
                    Obejrzyj film
                  </button>
<div className="flex flex-col border-l-2 border-gray-100 pl-6 py-1">
<span className="font-clash text-2xl font-medium tracking-tight text-gray-900 uppercase">
                      25 Lat
                    </span>
<span className="font-inter text-[15px] text-gray-500 uppercase tracking-widest">
                      Tradycji i Jakości
                    </span>
</div>
</div>
</div>
<div className="flex-1 w-full relative z-10 cursor-pointer group" onclick="openVideoModal()">
<div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
<img alt="25 lat firmy Drewbet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-24 h-24 bg-white/90 backdrop-blur-md text-[#16A34A] flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-[#16A34A] group-hover:text-white transition-all duration-300 shadow-xl">
<i className="w-10 h-10 fill-current ml-2" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute bottom-6 left-6 z-20 flex flex-col">
<span className="font-clash text-6xl md:text-7xl text-white font-medium drop-shadow-lg leading-none uppercase tracking-tight">
                      25
                      <span className="text-3xl md:text-4xl ml-2">Lat</span>
</span>
<span className="font-inter text-[17px] md:text-lg text-white uppercase tracking-widest drop-shadow-lg mt-2">
                      Firmy Drewbet
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="dzialalnosc-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center mb-8">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900 font-medium">Działalność</span>
</nav>
<h1 className="font-clash text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 uppercase leading-[1.05]">
              Zakres działalności
            </h1>
<p className="mt-4 text-gray-500 font-inter text-[21px] font-medium tracking-wide">
              DREWBET Kostka Brukowa.
            </p>
</div>
</div>
</div>

<div className="view-section hidden" id="jakosc-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center mb-8">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900 font-medium">Jakość</span>
</nav>
<h1 className="font-clash text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 uppercase leading-[1.05]">
              Jakość pod stałą kontrolą
            </h1>
<p className="mt-4 text-gray-500 font-inter text-[21px] font-medium tracking-wide">
              DREWBET Kostka Brukowa.
            </p>
</div>
</div>
</div>

<div className="view-section hidden" id="porady-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center mb-8">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900 font-medium">Porady techniczne</span>
</nav>
<h1 className="font-clash text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 uppercase leading-[1.05]">
              Drewbet kostka brukowa.
              <span className="text-[#16A34A]">Porady techniczne.</span>
</h1>
<p className="mt-6 text-gray-500 font-inter text-[21px] font-medium tracking-wide">
              Jak poprawnie zbudować nawierzchnię z kostki brukowej.
            </p>
</div>
</div>
<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
<article className="flex flex-col gap-6">
<h2 className="font-clash text-2xl md:text-[32px] font-semibold tracking-tight text-gray-900 uppercase leading-snug">
                01. NAWIERZCHNIA W REJONIE PRZYSTANKU AUTOBUSOWEGO DROGI O RUCHU
                KATEGORII KR3 (71-335 OSI OBLICZENIOWYCH 100KN/PAS.DOBĘ)
              </h2>
<div className="w-full bg-[#f9fafb] border border-gray-200 p-2 sm:p-4 rounded-sm flex items-center justify-center overflow-hidden">
<img alt="Schemat techniczny nawierzchni KR3" className="w-full h-auto object-contain" src="https://placehold.co/1200x400/f9fafb/9ca3af?text=Schemat+Przekroju+01+-+KR3"/>
</div>
</article>
<article className="flex flex-col gap-6">
<h2 className="font-clash text-2xl md:text-[32px] font-semibold tracking-tight text-gray-900 uppercase leading-snug">
                02. NAWIERZCHNIA W REJONIE PRZYSTANKU AUTOBUSOWEGO DROGI O RUCHU
                KATEGORII KR4 (335-1000 OSI OBLICZENIOWYCH 100KN/PAS.DOBĘ)
              </h2>
<div className="w-full bg-[#f9fafb] border border-gray-200 p-2 sm:p-4 rounded-sm flex items-center justify-center overflow-hidden">
<img alt="Schemat techniczny nawierzchni KR4" className="w-full h-auto object-contain" src="https://placehold.co/1200x400/f9fafb/9ca3af?text=Schemat+Przekroju+02+-+KR4"/>
</div>
</article>
</div>
</section>
</div>

<div className="view-section hidden" id="produkt-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900 font-medium">Kostka Avanti</span>
</nav>
</div>
</div>
</div>

<div className="view-section hidden" id="blog-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-20 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#16A34A 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center mb-8">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-gray-900 font-medium">Blog &amp; Porady</span>
</nav>
<h1 className="font-clash text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 uppercase leading-[1.05]">
              Porady
              <span className="text-[#927F5C] font-semibold">Kostka Brukowa</span>
</h1>
</div>
</div>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
<a className="group relative block" href="#blog-post">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
<img alt="Projekt nawierzchni" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative -mt-20 mr-8 bg-white p-6 sm:p-8 shadow-sm border border-gray-100 group-hover:border-[#16A34A]/30 transition-colors z-10 flex flex-col justify-end">
<time className="text-[15px] font-inter text-gray-400 mb-3 block">
                    27 lutego 2026 r.
                  </time>
<h3 className="font-clash text-2xl font-medium tracking-tight text-gray-900 leading-[1.2] group-hover:text-[#16A34A] transition-colors">
                    Projekt nawierzchni krok po kroku – od pomysłu do realizacji
                  </h3>
</div>
</a>
<a className="group relative block" href="#blog-post">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
<img alt="Kostka zimą" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative -mt-20 mr-8 bg-white p-6 sm:p-8 shadow-sm border border-gray-100 group-hover:border-[#16A34A]/30 transition-colors z-10 flex flex-col justify-end">
<time className="text-[15px] font-inter text-gray-400 mb-3 block">
                    9 lutego 2026 r.
                  </time>
<h3 className="font-clash text-2xl font-medium tracking-tight text-gray-900 leading-[1.2] group-hover:text-[#16A34A] transition-colors">
                    Jak dbać o kostkę podczas śniegów i mrozów?
                  </h3>
</div>
</a>
<a className="group relative block" href="#blog-post">
<div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
<img alt="Mycie kostki" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative -mt-20 mr-8 bg-white p-6 sm:p-8 shadow-sm border border-gray-100 group-hover:border-[#16A34A]/30 transition-colors z-10 flex flex-col justify-end">
<time className="text-[15px] font-inter text-gray-400 mb-3 block">
                    05 stycznia 2026 r.
                  </time>
<h3 className="font-clash text-2xl font-medium tracking-tight text-gray-900 leading-[1.2] group-hover:text-[#16A34A] transition-colors">
                    Czym myć kostkę brukową? Woda pod ciśnieniem vs. szczotka
                  </h3>
</div>
</a>
</div>
</div>
</section>
</div>

<div className="view-section hidden" id="blog-post-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<nav className="flex flex-wrap justify-center text-[15px] font-inter text-gray-500 gap-2 items-center mb-10">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-[#16A34A] transition-colors" href="#blog">
                Blog
              </a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-[300px]">
                Projekt nawierzchni krok po...
              </span>
</nav>
<time className="text-[15px] font-inter text-[#16A34A] mb-6 block font-medium uppercase tracking-widest">
              27 Lutego 2026 r.
            </time>
<h1 className="font-clash text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 uppercase leading-[1.1] mb-8">
              Projekt nawierzchni krok po kroku – od pomysłu do realizacji
            </h1>
</div>
</div>
<article className="py-16 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
<div className="aspect-[21/9] w-full overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
<img alt="Układanie kostki brukowej" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 font-inter text-[19px] text-gray-600 space-y-8 leading-relaxed">
<p className="text-[21px] md:text-[24px] text-gray-900 font-medium leading-relaxed mb-12">
              Dobrze zaprojektowana nawierzchnia z kostki brukowej to nie tylko
              estetyka, ale przede wszystkim trwałość i funkcjonalność na lata.
              Niezależnie od tego, czy planujesz podjazd, taras czy ścieżkę
              ogrodową, warto przejść przez cały proces świadomie – od
              pierwszego pomysłu aż po finalne ułożenie kostki.
            </p>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Krok 1: Określenie potrzeb i funkcji nawierzchni
            </h2>
<p>
              Na początku warto odpowiedzieć sobie na kilka kluczowych pytań:
              czy nawierzchnia będzie służyć wyłącznie do ruchu pieszego, czy
              również samochodowego? Jakie obciążenia musi wytrzymać? Czy ma
              pełnić funkcję reprezentacyjną, czy przede wszystkim użytkową?
            </p>
<p>
              Inne wymagania będzie miał podjazd dla dwóch samochodów, a inne
              przydomowy taras lub ścieżka w ogrodzie.
            </p>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Krok 2: Analiza terenu i odwodnienia
            </h2>
<p>
              Kolejnym etapem jest ocena warunków gruntowych oraz zaplanowanie
              odpowiednich spadków. Prawidłowe odwodnienie to jeden z
              najważniejszych elementów trwałej nawierzchni. Woda nie powinna
              zalegać na powierzchni ani spływać w kierunku budynku.
            </p>
<p>
              Na tym etapie warto uwzględnić odwodnienia liniowe, drenaż lub
              naturalne odprowadzenie wody do ogrodu.
            </p>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Krok 3: Wybór materiału i kolorystyki
            </h2>
<p>
              Dobór kostki powinien być dopasowany do stylu domu, elewacji oraz
              otoczenia. Należy zwrócić uwagę na:
            </p>
<ul className="space-y-4 my-8 p-8 sm:p-10 bg-[#FAFAFA] border-l-4 border-[#16A34A] text-gray-900">
<li className="flex gap-4 items-start">
<i className="w-6 h-6 text-[#16A34A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  grubość kostki (dopasowaną do planowanego obciążenia)
                </span>
</li>
<li className="flex gap-4 items-start">
<i className="w-6 h-6 text-[#16A34A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">format i kształt elementów</span>
</li>
<li className="flex gap-4 items-start">
<i className="w-6 h-6 text-[#16A34A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  kolorystykę i strukturę powierzchni
                </span>
</li>
<li className="flex gap-4 items-start">
<i className="w-6 h-6 text-[#16A34A] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  odporność na warunki atmosferyczne
                </span>
</li>
</ul>
<p>
              Warto również przemyśleć zastosowanie obrzeży, palisad czy
              elementów dekoracyjnych, które uporządkują przestrzeń.
            </p>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Krok 4: Przygotowanie podbudowy
            </h2>
<p>
              Nawet najpiękniejsza kostka nie spełni swojej roli bez solidnej
              podbudowy. To właśnie konstrukcja warstwowa odpowiada za
              stabilność i odporność na zapadanie się nawierzchni.
            </p>
<p>
              Zakres prac obejmuje korytowanie terenu, wykonanie warstwy nośnej
              z kruszywa oraz odpowiednie zagęszczenie podłoża.
            </p>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Krok 5: Układanie kostki i wykończenie
            </h2>
<p>
              Po przygotowaniu podłoża można przystąpić do właściwego układania
              kostki według wybranego wzoru. Kluczowe znaczenie ma zachowanie
              równych linii, odpowiednich odstępów oraz precyzyjne docinanie
              elementów przy krawędziach.
            </p>
<p>
              Na zakończenie nawierzchnia jest fugowana i – w razie potrzeby –
              impregnowana.
            </p>
<div className="my-16 border-t border-b border-gray-100 py-12">
<h3 className="font-clash text-[21px] md:text-2xl font-medium tracking-tight text-gray-900 uppercase mb-8">
                Najczęstsze błędy, których warto uniknąć
              </h3>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-3 text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></div>
                  brak odpowiednich spadków
                </li>
<li className="flex items-center gap-3 text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></div>
                  zbyt cienka podbudowa
                </li>
<li className="flex items-center gap-3 text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></div>
                  niedostateczne zagęszczenie gruntu
                </li>
<li className="flex items-center gap-3 text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></div>
                  nieprawidłowe odwodnienie
                </li>
<li className="flex items-center gap-3 text-gray-600">
<div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></div>
                  przypadkowy dobór materiałów
                </li>
</ul>
</div>
<h2 className="font-clash text-2xl md:text-[32px] font-medium tracking-tight text-gray-900 uppercase mt-16 mb-6">
              Od projektu do realizacji – dlaczego warto działać kompleksowo?
            </h2>
<p>
              Spójny projekt uwzględniający funkcję, estetykę i parametry
              techniczne pozwala uniknąć kosztownych poprawek w przyszłości.
              Dobrze zaplanowana nawierzchnia zwiększa komfort użytkowania
              posesji oraz podnosi jej wartość.
            </p>
<p className="mt-12 text-[21px] text-gray-900 font-medium leading-relaxed bg-[#FAFAFA] p-8 sm:p-10 border border-gray-100">
<span className="text-[#16A34A] uppercase tracking-widest text-[15px] block mb-4">
                Podsumowanie
              </span>
              Staranne zaplanowanie każdego etapu – od pomysłu po wykonanie – to
              gwarancja trwałej i estetycznej nawierzchni, która będzie służyć
              przez wiele lat.
            </p>
</div>
</article>
</div>
<div className="view-section hidden" id="dopobrania-view" style={{display: 'none'}}>

<div className="bg-[#FAFAFA] border-b border-gray-200 pt-48 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex flex-wrap text-[15px] font-inter text-gray-500 gap-2 items-center mb-8">
<a className="hover:text-[#16A34A] transition-colors" href="#home">
                Strona Główna
              </a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-gray-900 font-medium">Do pobrania</span>
</nav>
<h1 className="font-clash text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
              Drewbet kostka brukowa.
              <span className="text-[#B5996D]">Pobierz pliki.</span>
</h1>
</div>
</div>
<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

<div className="w-full bg-gradient-to-r from-[#7a0000] to-[#b30000] text-white p-6 sm:p-8 rounded-sm shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#520000]">
<div className="absolute inset-0 bg-black/10"></div>
<div className="flex items-center gap-4 z-10">
<span className="font-clash text-6xl sm:text-7xl font-bold tracking-tighter drop-shadow-md">
                  25
                </span>
<div className="flex flex-col">
<span className="text-sm sm:text-lg font-bold tracking-widest uppercase leading-none mb-1">
                    Lat
                  </span>
<span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase leading-none">
                    Doświadczenia
                  </span>
</div>
</div>
<div className="text-center sm:text-right z-10 flex flex-col items-center sm:items-end">
<h3 className="font-clash text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#eab308] mb-1 drop-shadow-md">
                  Promocja -25%
                </h3>
<p className="font-inter text-xs sm:text-[15px] uppercase tracking-widest font-medium">
                  katalogi: TARASY, NEWS, HOME
                </p>
</div>
</div>

<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                CENNIK 2026
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex items-start gap-6 h-[160px]" href="#">
<div className="w-[84px] h-[112px] bg-gray-200 shrink-0 overflow-hidden shadow-sm border border-gray-200">
<img alt="Cennik 2026" className="w-full h-full object-cover" src="https://placehold.co/168x224/e2e8f0/64748b?text=2026"/>
</div>
<div className="flex flex-col justify-center h-full">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1.5 group-hover:text-[#16A34A] transition-colors">
                      Cennik produktów 2026
                    </h3>
<p className="font-inter text-[13px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa, Galanteria Betonowa
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 221 MB]
                    </span>
</div>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                  CENNIK 2025
                </h2>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex items-start gap-6 h-[160px]" href="#">
<div className="w-[84px] h-[112px] bg-gray-200 shrink-0 overflow-hidden shadow-sm border border-gray-200">
<img alt="Cennik 2025" className="w-full h-full object-cover" src="https://placehold.co/168x224/e2e8f0/64748b?text=2025"/>
</div>
<div className="flex flex-col justify-center h-full">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1.5 group-hover:text-[#16A34A] transition-colors">
                      Cennik produktów 2025
                    </h3>
<p className="font-inter text-[13px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa, Galanteria Betonowa
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 216 MB]
                    </span>
</div>
</a>
</div>
<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                  ZMIANA CENNIKA
                </h2>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors overflow-hidden relative h-[160px] flex items-center justify-center p-6" href="#">
<div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="text-center relative z-10 flex flex-col items-center">
<div className="bg-white px-5 py-3 shadow-md inline-flex flex-col items-center border-l-4 border-blue-600">
<span className="font-clash text-lg font-bold text-gray-900 uppercase leading-tight italic">
                        Zmiana cennika
                      </span>
<span className="font-clash text-[15px] font-bold text-gray-900 uppercase leading-tight italic">
                        na produkty firmy Drewbet od
                        <span className="text-red-600">01.03.2026</span>
</span>
</div>
</div>
</a>
</div>
</div>

<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                KOŃCÓWKI SERII
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex items-start gap-6 h-[160px]" href="#">
<div className="w-[84px] h-[112px] bg-white shrink-0 overflow-hidden shadow-sm border border-gray-200 flex items-center justify-center p-1">
<div className="w-full h-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
<span className="absolute -rotate-45 text-red-600 font-black text-lg opacity-50 uppercase tracking-widest">
                        SALE
                      </span>
</div>
</div>
<div className="flex flex-col justify-center h-full">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1.5 group-hover:text-[#16A34A] transition-colors">
                      Cennik końcówki serii
                    </h3>
<p className="font-inter text-[13px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa, Galanteria Betonowa w super cenach.
                      Promocje do 70%
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 227 KB]
                    </span>
</div>
</a>
</div>
</div>

<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                KATALOGI
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex flex-col relative h-[280px]" href="#">
<div className="text-red-600 font-clash font-semibold text-sm mb-4">
                    Promocja -25%
                  </div>
<div className="w-[72px] h-[96px] bg-gray-200 overflow-hidden shadow-sm mb-6 border border-gray-200">
<img alt="Katalog Tarasy" className="w-full h-full object-cover" src="https://placehold.co/144x192/e2e8f0/64748b?text=Tarasy"/>
</div>
<div className="flex flex-col mt-auto">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1 group-hover:text-[#16A34A] transition-colors">
                      Katalog produktów
                    </h3>
<p className="font-inter text-[12px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa Tarasy 2024
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 16 MB]
                    </span>
</div>
</a>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex flex-col relative h-[280px]" href="#">
<div className="text-red-600 font-clash font-semibold text-sm mb-4">
                    Promocja -25%
                  </div>
<div className="w-[72px] h-[96px] bg-gray-200 overflow-hidden shadow-sm mb-6 border border-gray-200">
<img alt="Katalog Nowości" className="w-full h-full object-cover" src="https://placehold.co/144x192/e2e8f0/64748b?text=News"/>
</div>
<div className="flex flex-col mt-auto">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1 group-hover:text-[#16A34A] transition-colors">
                      Katalog nowości
                    </h3>
<p className="font-inter text-[12px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa Nowości 2024
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 28 MB]
                    </span>
</div>
</a>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 flex flex-col relative h-[280px]" href="#">
<div className="text-red-600 font-clash font-semibold text-sm mb-4">
                    Promocja -25%
                  </div>
<div className="w-[72px] h-[96px] bg-gray-200 overflow-hidden shadow-sm mb-6 border border-gray-200">
<img alt="Katalog Produkty" className="w-full h-full object-cover" src="https://placehold.co/144x192/e2e8f0/64748b?text=Home"/>
</div>
<div className="flex flex-col mt-auto">
<h3 className="font-clash text-[15px] font-semibold text-gray-900 uppercase tracking-wide mb-1 group-hover:text-[#16A34A] transition-colors">
                      Katalog produktów
                    </h3>
<p className="font-inter text-[12px] text-gray-500 mb-2 leading-relaxed">
                      Kostka Brukowa, Galanteria Betonowa 2020/2021
                    </p>
<span className="font-inter text-[11px] text-gray-400">
                      [rozmiar: 208 MB]
                    </span>
</div>
</a>
</div>
</div>

<div>
<h2 className="font-clash text-2xl font-medium text-[#B5996D] uppercase tracking-widest mb-6">
                INNE PLIKI
              </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 sm:p-8 flex flex-col items-center text-center h-[200px]" href="#">
<div className="w-10 h-10 mb-6 text-red-600 opacity-90 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H13V8H7V10ZM19 5H5C3.89543 5 3 5.89543 3 7V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V7C21 5.89543 20.1046 5 19 5ZM19 21H5V7H19V21Z"></path>
</svg>
</div>
<h3 className="font-clash text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-2 group-hover:text-[#16A34A] transition-colors leading-tight">
                    Instrukcja montażu
                  </h3>
<span className="font-inter text-[11px] text-gray-400 mt-auto">
                    [rozmiar: 0,2 MB]
                  </span>
</a>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 sm:p-8 flex flex-col items-center text-center h-[200px]" href="#">
<div className="w-10 h-10 mb-6 text-red-600 opacity-90 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H13V8H7V10ZM19 5H5C3.89543 5 3 5.89543 3 7V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V7C21 5.89543 20.1046 5 19 5ZM19 21H5V7H19V21Z"></path>
</svg>
</div>
<h3 className="font-clash text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-2 group-hover:text-[#16A34A] transition-colors leading-tight">
                    Warunki sprzedaży
                  </h3>
<span className="font-inter text-[11px] text-gray-400 mt-auto">
                    [rozmiar: 0,2 MB]
                  </span>
</a>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 sm:p-8 flex flex-col items-center text-center h-[200px]" href="#">
<div className="w-10 h-10 mb-6 text-red-600 opacity-90 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H13V8H7V10ZM19 5H5C3.89543 5 3 5.89543 3 7V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V7C21 5.89543 20.1046 5 19 5ZM19 21H5V7H19V21Z"></path>
</svg>
</div>
<h3 className="font-clash text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-2 group-hover:text-[#16A34A] transition-colors leading-tight">
                    Warunki gwarancyjne
                  </h3>
<span className="font-inter text-[11px] text-gray-400 mt-auto">
                    [rozmiar: 0,2 MB]
                  </span>
</a>
<a className="group block bg-[#FAFAFA] border border-gray-100 hover:border-[#B5996D] transition-colors p-6 sm:p-8 flex flex-col items-center text-center h-[200px]" href="#">
<div className="w-10 h-10 mb-6 text-red-600 opacity-90 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H13V8H7V10ZM19 5H5C3.89543 5 3 5.89543 3 7V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V7C21 5.89543 20.1046 5 19 5ZM19 21H5V7H19V21Z"></path>
</svg>
</div>
<h3 className="font-clash text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-2 group-hover:text-[#16A34A] transition-colors leading-tight">
                    Ogólne informacje o produkcie
                  </h3>
<span className="font-inter text-[11px] text-gray-400 mt-auto">
                    [rozmiar: 0,2 MB]
                  </span>
</a>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#FAFAFA] pt-20 pb-24 font-inter text-gray-700 border-t-2 border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
<div className="lg:col-span-3 flex flex-col pr-4">
<div className="flex items-center gap-3 cursor-default group mb-8">
<div className="w-12 h-12 bg-gray-900 group-hover:bg-[#16A34A] transition-colors flex items-center justify-center shrink-0">
<iconify-icon className="text-white" height="28" icon="solar:layers-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div className="flex flex-col justify-center mt-0.5">
<span className="text-3xl font-semibold tracking-tight font-clash uppercase text-gray-900 leading-none mb-1">
                  DREWBET
                </span>
<span className="text-[13px] font-inter uppercase tracking-widest text-gray-500 leading-none whitespace-nowrap">
                  Bruk
                </span>
</div>
</div>
<p className="text-[15px] text-gray-600 mb-8 leading-relaxed">
              Producent kostki brukowej oraz płyt tarasowych i galanterii
              betonowej.
            </p>
</div>

<div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div>
<h4 className="text-[15px] font-semibold text-[#16A34A] uppercase tracking-widest mb-6 pb-4 border-b border-gray-200">
                Firma
              </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-[15px] text-gray-600 hover:text-[#16A34A] transition-colors" href="#dzialalnosc">
                    Działalność
                  </a>
</li>
<li>
<a className="text-[15px] text-gray-600 hover:text-[#16A34A] transition-colors" href="#jakosc">
                    Jakość
                  </a>
</li>
<li>
<a className="text-[15px] text-gray-600 hover:text-[#16A34A] transition-colors" href="#porady">
                    Porady techniczne
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[15px] font-semibold text-[#16A34A] uppercase tracking-widest mb-6 pb-4 border-b border-gray-200">
                Oferta
              </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-[15px] text-gray-600 hover:text-[#16A34A] transition-colors" href="#produkt">
                    Kostka Avanti
                  </a>
</li>
<li>
<a className="text-[15px] text-gray-600 hover:text-[#16A34A] transition-colors" href="#blog">
                    Blog &amp; Porady
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[15px] font-semibold text-[#16A34A] uppercase tracking-widest mb-6 pb-4 border-b border-gray-200">
                Dla Partnera
              </h4>
<ul className="flex flex-col gap-4">
<li>
<a className="text-[15px] font-medium text-gray-900 hover:text-[#16A34A] transition-colors underline underline-offset-4 decoration-[#16A34A]" href="#styleguide">
                    Style Guide
                  </a>
</li>
</ul>
</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="video-modal">
<div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm transition-opacity duration-300" onclick="closeVideoModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
<div className="w-full max-w-5xl bg-black relative shadow-2xl pointer-events-auto transform transition-all duration-300 scale-95 opacity-0" id="video-modal-content">
<button className="absolute -top-12 right-0 text-white hover:text-[#16A34A] transition-colors p-2 flex items-center gap-2 font-inter text-[15px] tracking-wide" onclick="closeVideoModal()">
            Zamknij
            <i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="aspect-video w-full bg-black">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="youtube-video" src=""></iframe>
</div>
</div>
</div>
</div>



    </>
  );
}
