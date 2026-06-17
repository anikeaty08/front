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



      (function () {
        const section = document.getElementById('pricing');
        if (!section) return;
        const toggles = section.querySelectorAll('.billing-toggle');
        const labels = section.querySelectorAll('.billing-label');
        const priceStacks = section.querySelectorAll('.price-stack');
        function setBilling(mode) {
          toggles.forEach((btn) => {
            const isActive = btn.dataset.billingToggle === mode;
            if (isActive) {
              btn.classList.add('bg-[#D4AF37]', 'text-black', 'font-semibold', 'shadow-[0_0_0_1px_rgba(255,255,255,0.1)]');
              btn.classList.remove('text-gray-400');
            } else {
              btn.classList.remove('bg-[#D4AF37]', 'text-black', 'font-semibold', 'shadow-[0_0_0_1px_rgba(255,255,255,0.1)]');
              btn.classList.add('text-gray-400');
            }
          });
          const offset = mode === 'monthly' ? '0%' : '-50%';
          priceStacks.forEach((stack) => {
            stack.style.transform = `translateY(${offset})`;
          });
          labels.forEach((el) => {
            el.textContent = mode === 'monthly' ? 'miesięczna' : 'roczna';
          });
        }
        toggles.forEach((btn) => {
          btn.addEventListener('click', () => {
            setBilling(btn.dataset.billingToggle);
          });
        });
        setBilling('monthly');
      })();
    


      const profiles = [
        {
          name: "Tomasz Guzik",
          desc: "Właściciel agencji reklamowej, autor książek o marketingu, wdraża AI i automatyzacje w biznesie. Pomysłodawca AI Restaurant."
        },
        {
          name: "Chris Tabasco",
          desc: "Programista i współtwórca całej platformy i oprogramowania dla restauratorów. Obsługuje klientów z Polski i UK."
        },
        {
          name: "Wiktoria Portka",
          desc: "Zajmuje się pełną obsługą administracyjną i supportu. Odpisuje na Wasze maile, rozwiązuje problemy z dostępami."
        }
      ];

      let currentProfileIndex = 0;
      let isAnimating = false;

      function changeProfile(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const wrapper = document.getElementById('profile-wrapper');

        wrapper.classList.remove('opacity-100', 'translate-y-0');
        wrapper.classList.add('opacity-0', 'translate-y-4');

        setTimeout(() => {
          currentProfileIndex = (currentProfileIndex + direction + profiles.length) % profiles.length;
          document.getElementById('profile-name').innerText = profiles[currentProfileIndex].name;
          document.getElementById('profile-desc').innerText = profiles[currentProfileIndex].desc;

          wrapper.classList.remove('opacity-0', 'translate-y-4');
          wrapper.classList.add('opacity-100', 'translate-y-0');

          setTimeout(() => {
            isAnimating = false;
          }, 500);
        }, 400);
      }
    


      function openModal(e) {
        if (e) e.preventDefault();
        const modal = document.getElementById('register-modal');
        const content = document.getElementById('register-modal-content');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          content.classList.remove('scale-95');
          content.classList.add('scale-100');
        }, 10);
      }

      function closeModal() {
        const modal = document.getElementById('register-modal');
        const content = document.getElementById('register-modal-content');
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
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
      

<nav className="absolute top-0 inset-x-0 z-50">
<div className="max-w-[87.5rem] mx-auto px-6 py-2 sm:px-8 lg:px-12 flex items-center justify-between w-full">

<a className="flex items-center shrink-0" href="#">
<img alt="AI Restaurant Logo" className="h-16 sm:h-20 lg:h-24 w-auto mix-blend-screen" src="https://i.postimg.cc/7ZhVYkDm/Untitled-design-113.png"/>
</a>

<div className="hidden md:flex flex-1 items-center justify-center gap-10 lg:gap-16 mx-4 sm:mx-8">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors tracking-wide" href="#">
            O nas
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors tracking-wide" href="#">
            Funkcje
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors tracking-wide" href="#">
            Cennik
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors tracking-wide" href="#">
            Kontakt
          </a>
</div>

<div className="flex items-center shrink-0">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_2.5rem_-0.625rem_rgba(212,175,55,0.4)] focus:outline-none text-xs sm:text-sm font-medium text-white h-10 sm:h-12 rounded-full px-6 sm:px-8 relative items-center justify-center shrink-0" onclick="openModal(event)" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(212,175,55, 0.4), rgba(212,175,55, 0), rgba(212,175,55, 0.4))', '--border-radius-before': '9999rem'}}>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[0.0625rem]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D4AF37_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[0.0625rem] rounded-full bg-[#0a0a0c]"></div>
</div>
<div className="overflow-hidden bg-[#0a0a0c] rounded-full absolute top-[0.125rem] right-[0.125rem] bottom-[0.125rem] left-[0.125rem]">
<div className="bg-gradient-to-b from-[#D4AF37]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-[0.15] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #FCE89B, #FCE89B 0.0625rem, transparent 0.0625rem, transparent 0.5rem)', backgroundSize: '1.5rem 100%', animation: 'lines-slide 1.5s linear infinite', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(252,232,155, 0.2), rgba(252,232,155, 0))'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#D4AF37]/20 blur-xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#D4AF37]/40"></div>
</div>
<span className="transition-colors group-hover:text-white uppercase font-bold text-[#FCE89B] tracking-wide z-10 relative flex items-center gap-2">
<iconify-icon height="18" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Aktywuj Dostęp</span>
</span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 bg-[#0a0a0c] pointer-events-none overflow-hidden">
<iframe allow="autoplay; fullscreen" className="absolute top-1/2 left-1/2 w-[150vw] md:w-[100vw] aspect-video -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-lighten pointer-events-none" frameborder="0" src="https://fast.wistia.net/embed/iframe/i5n5sywvwg?seo=false&amp;autoPlay=true&amp;muted=true&amp;loop=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;settingsControl=false&amp;smallPlayButton=false&amp;volumeControl=false&amp;fullscreenButton=false&amp;endVideoBehavior=loop"></iframe>
<div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-[#0a0a0c]/30 backdrop-blur-md [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] pointer-events-none"></div>
<div className="absolute inset-x-0 top-0 h-40 bg-[#0a0a0c]/20 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] pointer-events-none z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-48 bg-[#0a0a0c]/30 backdrop-blur-md [mask-image:linear-gradient(to_top,black_50%,transparent_100%)] pointer-events-none z-10"></div>
<div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent pointer-events-none z-10"></div>
</div>

<main className="relative z-10 w-full max-w-[87.5rem] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start text-left">

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter mb-6 w-full max-w-4xl leading-[1.05] bg-gradient-to-r from-[#D4AF37] via-[#FCE89B] to-[#99791D] bg-clip-text text-transparent [text-wrap:balance]">
          Zautomatyzuj marketing swojej restauracji
        </h1>

<p className="text-base sm:text-lg md:text-xl font-light text-gray-400 w-full max-w-2xl leading-relaxed mb-10 [text-wrap:balance]">
          Oszczędź nawet 20 000 PLN rocznie na nieudolne agencje marketingowe i
          fotografów.
        </p>

<div className="relative w-full sm:w-auto mb-6">
<a className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_2.5rem_-0.625rem_rgba(212,175,55,0.4)] focus:outline-none w-full sm:w-auto text-base sm:text-lg font-normal text-white h-[3.375rem] sm:h-[3.75rem] rounded-full px-8 relative items-center justify-center" href="#" onclick="openModal(event)" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(212,175,55, 0.4), rgba(212,175,55, 0), rgba(212,175,55, 0.4))', '--border-radius-before': '9999rem'}}>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[0.0625rem]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D4AF37_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[0.0625rem] rounded-full bg-[#0a0a0c]"></div>
</div>
<div className="overflow-hidden bg-[#0a0a0c] rounded-full absolute top-[0.125rem] right-[0.125rem] bottom-[0.125rem] left-[0.125rem]">
<div className="bg-gradient-to-b from-[#D4AF37]/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-[0.15] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #FCE89B, #FCE89B 0.0625rem, transparent 0.0625rem, transparent 0.5rem)', backgroundSize: '1.5rem 100%', animation: 'lines-slide 1.5s linear infinite', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(252,232,155, 0.2), rgba(252,232,155, 0))'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#D4AF37]/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#D4AF37]/40"></div>
</div>
<span className="transition-colors group-hover:text-white uppercase font-medium text-[#FCE89B] tracking-wide z-10 relative flex items-center gap-2.5">
<iconify-icon height="20" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span>Aktywuj dostęp</span>
</span>
</a>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full max-w-3xl">
<div className="flex flex-col gap-2 shrink-0">
<div className="flex -space-x-3">
<img alt="Kucharz" className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Kelnerka" className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Menadżer" className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Szef kuchni" className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<img alt="Właścicielka" className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] object-cover" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-3 pl-1">
<div className="flex items-center gap-1 text-[#D4AF37]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold text-lg">5/5</span>
</div>
</div>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
            Dołącz do
            <strong className="font-normal text-gray-200">
              pierwszych restauratorów
            </strong>
            , którzy wdrażają technologię i redukują koszty marketingu.
          </p>
</div>
</main>
</header>
<section className="relative py-20 sm:py-32 z-20 bg-[#0a0a0c] overflow-hidden border-t border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[87.5rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-24 lg:gap-32">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-6 bg-gradient-to-r from-[#D4AF37] via-[#FCE89B] to-[#99791D] bg-clip-text text-transparent">
              Rynek gastronomiczny w liczbach
            </h2>
<p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              Poznaj brutalną prawdę o branży oraz ogromny potencjał, który
              czeka na tych, którzy potrafią się wyróżnić i zautomatyzować swoje
              działania.
            </p>
<p className="text-gray-500 text-base font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
</div>
<div className="w-full lg:w-1/2 relative group">
<div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/30 transition-colors duration-700 pointer-events-none"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
<img alt="Statystyki" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" src="https://i.postimg.cc/c1kJkzP3/magnific-stwrz-taka-sama-lub-bardoz-podobna-infografike-pre-18706.png"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">
              Lorem ipsum dolor sit amet
            </h2>
<p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
<p className="text-gray-500 text-base font-light leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
</div>
<div className="w-full lg:w-1/2 relative group">
<div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/30 transition-colors duration-700 pointer-events-none"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
<img alt="Zabka Concept" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" src="https://i.postimg.cc/262nKwfC/magnific-stwrz-grafik-przedstawiajc-ultra-nowoczesny-fajnie-18707.png"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">
              Duis aute irure dolor in
            </h2>
<p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
<p className="text-gray-500 text-base font-light leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
</div>
<div className="w-full lg:w-1/2 relative group">
<div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/30 transition-colors duration-700 pointer-events-none"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
<img alt="Pyszne Concept" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" src="https://i.postimg.cc/cHysNy06/magnific-w-takim-samym-stylu-graficznym-przedstaw-zorganizo-18708.png"/>
</div>
</div>
</div>
</div>
</section>
<section className="relative min-h-screen w-full flex flex-col pt-32 pb-8 overflow-hidden bg-[#0a0a0c]">
<div className="absolute inset-0 z-0 bg-[#0a0a0c] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 w-full h-full pointer-events-none">
<iframe allow="autoplay; fullscreen" className="w-full h-full border-none pointer-events-none" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/ib6nas1r5r?videoFoam=true&amp;autoplay=true&amp;muted=true&amp;endVideoBehavior=loop&amp;playbar=false&amp;playButton=false&amp;controlsVisibleOnLoad=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenControl=false"></iframe>
</div>
<div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0c] to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,white_20%,transparent)]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col flex-grow justify-between">
<div className="flex flex-col items-start mt-12 lg:mt-auto mb-8 gap-6 w-full">
<div className="max-w-2xl">
<p className="uppercase tracking-widest text-sm font-normal text-gray-400 mb-6 flex items-center gap-4">
              Kto za tym stoi?
              <span className="h-[1px] w-12 bg-white/20 block"></span>
</p>
<div className="transition-all duration-500 ease-in-out transform opacity-100 translate-y-0" id="profile-wrapper">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 leading-none bg-gradient-to-r from-[#D4AF37] via-[#FCE89B] to-[#99791D] bg-clip-text text-transparent" id="profile-name">
                Tomasz Guzik
              </h2>
<p className="text-lg text-gray-400 max-w-xl font-light leading-relaxed" id="profile-desc">
                Właściciel agencji reklamowej, autor książek o marketingu,
                wdraża AI i automatyzacje w biznesie. Pomysłodawca AI
                Restaurant.
              </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group flex items-center justify-center" onclick="changeProfile(-1)">
<iconify-icon className="text-2xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white transition-all duration-300 group flex items-center justify-center" onclick="changeProfile(1)">
<iconify-icon className="text-2xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="w-full flex flex-col items-start">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-white mb-6 px-2 lg:px-4">
            Dla kogo to jest
          </h3>
<div className="relative w-full flex items-center group">
<button className="absolute left-2 lg:left-4 z-10 p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-[#0a0a0c]/80 hover:bg-[#0a0a0c] backdrop-blur-md border border-white/10 text-white transition-all duration-300 flex items-center justify-center shadow-lg" onclick="document.getElementById('food-carousel').scrollBy({left: -250, behavior: 'smooth'})">
<iconify-icon className="text-xl lg:text-2xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 lg:gap-4 pb-4 pt-2 no-scrollbar px-2 lg:px-4" id="food-carousel">
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Restauracje" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/SRNcbN0T/magnific-stworz-identyczna-grafike-tylko-w-nowym-ratio-52913.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Restauracje
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Pizzerie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Pizzerie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Hamburgerownie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/mDTH72rx/magnific-stworz-identyczna-grafike-tylko-w-nowym-ratio-52915.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Hamburgerownie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Sushi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Sushi
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Włoskie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/4d4YmL8W/magnific-stworz-identyczna-grafike-w-nowym-formacie-52917.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Włoskie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Domowe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Domowe
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Kebabownie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Kebabownie
                  </h4>
</div>
</div>
<div className="flex-none w-36 md:w-44 lg:w-48 h-[14rem] md:h-[16rem] lg:h-[18rem] relative rounded-2xl lg:rounded-3xl overflow-hidden snap-start group cursor-pointer border border-white/10 bg-white/5">
<img alt="Kawiarnie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/tC64CGX2/magnific-stwrz-identyczna-grafike-tylko-w-nowym-ratio-52920.png"/>
<div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0c] to-transparent transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4">
<h4 className="text-base lg:text-lg font-semibold text-white tracking-tight leading-tight">
                    Kawiarnie
                  </h4>
</div>
</div>
</div>
<button className="absolute right-2 lg:right-4 z-10 p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-[#0a0a0c]/80 hover:bg-[#0a0a0c] backdrop-blur-md border border-white/10 text-white transition-all duration-300 flex items-center justify-center shadow-lg" onclick="document.getElementById('food-carousel').scrollBy({left: 250, behavior: 'smooth'})">
<iconify-icon className="text-xl lg:text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-20 sm:py-32 bg-[#0a0a0c] overflow-hidden border-t border-white/5" id="pricing">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[87.5rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
<div className="text-center mb-12 md:mb-16">
<p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
            #CENNIK
          </p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-tight bg-gradient-to-r from-[#D4AF37] via-[#FCE89B] to-[#99791D] bg-clip-text text-transparent">
            Wybierz odpowiedni plan
          </h2>
<p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Zacznij od prostych rozwiązań i skaluj w miarę rozwoju. Każdy plan
            daje dostęp do narzędzi AI, które zautomatyzują Twój marketing.
          </p>
</div>
<div className="flex justify-center mb-14">
<div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-1 py-1 text-sm shadow-lg backdrop-blur-md">
<button className="billing-toggle rounded-full px-6 py-2 transition-all duration-300" data-billing-toggle="monthly" type="button">
              Miesięcznie
            </button>
<button className="billing-toggle rounded-full px-6 py-2 transition-all duration-300 flex items-center" data-billing-toggle="yearly" type="button">
<span className="mr-2">Rocznie</span>
<span className="inline-flex items-center rounded-full bg-[#D4AF37]/10 px-2 py-0.5 text-[11px] font-semibold text-[#FCE89B] border border-[#D4AF37]/30">
                -30%
              </span>
</button>
</div>
</div>
<div className="grid gap-6 md:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
<div className="rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl px-8 py-10 flex flex-col justify-between backdrop-blur-sm">
<div>
<h3 className="text-xl mb-2 font-medium text-white">Starter</h3>
<p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">
                Dla niezależnych restauratorów, którzy chcą wsparcia AI przy
                każdej kampanii bez funkcji dla zespołu.
              </p>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<div className="relative h-12 overflow-hidden">
<div className="price-stack flex flex-col transition-transform duration-300 ease-out" data-price-stack="starter" style={{transform: 'translateY(0%)'}}>
<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium text-white">
                        99 PLN
                      </span>
<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-medium text-white">
                        69 PLN
                      </span>
</div>
</div>
<span className="text-sm text-gray-500">/msc</span>
</div>
<p className="mt-1 text-xs text-gray-500">
                  Płatność
                  <span className="billing-label">miesięczna</span>
                  .
                </p>
</div>
</div>
<div className="space-y-6">
<button className="w-full rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-6 py-3 text-sm font-medium text-white backdrop-blur-md" onclick="openModal(event)">
                Wybieram Starter
              </button>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>Edytor AI z sugestiami do każdej sekcji.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>Do 8 aktywnych projektów jednocześnie.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>25 000 wygenerowanych słów miesięcznie.</span>
</li>
</ul>
</div>
</div>
<div className="relative rounded-[2rem] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#0a0a0c] border border-[#D4AF37]/40 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] px-8 py-10 flex flex-col justify-between overflow-hidden group">
<div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" style={{backgroundImage: 'radial-gradient(circle at 0 0,rgba(212,175,55,0.4),transparent 55%), radial-gradient(circle at 100% 100%,rgba(212,175,55,0.4),transparent 55%), repeating-linear-gradient(0deg,rgba(212,175,55,0.1),rgba(212,175,55,0.1) 1px,transparent 1px,transparent 3px)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white">Pro</h3>
<span className="rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 px-3 py-1 text-[11px] tracking-[0.1em] uppercase text-[#FCE89B] font-medium backdrop-blur-md">
                  Najpopularniejszy
                </span>
</div>
<p className="text-sm text-gray-300 mb-8 font-light leading-relaxed">
                Stworzony dla zespołów, które często publikują i potrzebują
                wspólnych przestrzeni oraz kontroli.
              </p>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<div className="relative h-12 overflow-hidden">
<div className="price-stack flex flex-col transition-transform duration-300 ease-out" data-price-stack="pro" style={{transform: 'translateY(0%)'}}>
<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-semibold text-[#FCE89B]">
                        199 PLN
                      </span>
<span className="h-12 flex items-center leading-none text-4xl tracking-tight font-semibold text-[#FCE89B]">
                        139 PLN
                      </span>
</div>
</div>
<span className="text-sm text-gray-400">/msc</span>
</div>
<p className="mt-1 text-xs text-gray-500">
                  Płatność
                  <span className="billing-label">miesięczna</span>
                  .
                </p>
</div>
</div>
<div className="relative z-10 space-y-6">
<button className="w-full rounded-full bg-[#D4AF37] hover:bg-[#FCE89B] transition-colors px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)]" onclick="openModal(event)">
                Wybieram Pro
              </button>
<ul className="space-y-3 text-sm text-gray-300 font-light">
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
<span>
                    Nielimitowane projekty i przestrzenie dla zespołu.
                  </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
<span>Do 100 000 wygenerowanych słów miesięcznie.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
<span>
                    Zaawansowane szablony i ustawienia tonu wypowiedzi.
                  </span>
</li>
</ul>
</div>
</div>
<div className="rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl px-8 py-10 flex flex-col justify-between backdrop-blur-sm">
<div>
<h3 className="text-xl mb-2 font-medium text-white">Enterprise</h3>
<p className="text-sm text-gray-400 mb-8 font-light leading-relaxed">
                Dla organizacji potrzebujących dedykowanych rozwiązań, wyższego
                bezpieczeństwa i stałego wsparcia.
              </p>
<div className="mb-6">
<p className="text-3xl font-semibold tracking-tight mb-2 text-white">
                  Kontakt
                </p>
<p className="text-xs text-gray-500 leading-relaxed">
                  Dopasujemy plan do Twoich potrzeb i procesu wdrożeniowego.
                </p>
</div>
</div>
<div className="space-y-6">
<button className="w-full rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-6 py-3 text-sm font-medium text-white backdrop-blur-md" onclick="openModal(event)">
                Skontaktuj się z nami
              </button>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>Nielimitowane przestrzenie, konta użytkowników.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>
                    Pojedyncze logowanie (SSO) i wyższe bezpieczeństwo.
                  </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0"></span>
<span>Dedykowane integracje i dostęp do API.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-20 sm:py-32 bg-[#0a0a0c] overflow-hidden border-t border-white/5 z-20" id="faq">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[87.5rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
<div className="flex flex-col items-start w-full gap-8">
<img alt="Wsparcie" className="w-full h-auto max-h-[450px] object-cover rounded-[2rem] border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-white leading-tight">
                Jeśli potrzebujesz o coś zapytać przed zakupem zadzwoń
                <a className="text-[#D4AF37] hover:text-[#FCE89B] transition-colors font-bold whitespace-nowrap inline-flex items-center gap-2 mt-2" href="tel:+48602727263">
<iconify-icon icon="solar:phone-bold"></iconify-icon>
                  +48602727263
                </a>
</h2>
</div>
</div>
<div className="w-full flex flex-col gap-4">
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all duration-300 shadow-lg">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-white font-medium text-lg">
                Czym dokładnie jest AI Restaurant?
                <iconify-icon className="text-xl text-gray-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4 mt-2">
                AI Restaurant to platforma, która wykorzystuje sztuczną
                inteligencję do automatyzacji Twojego marketingu. Tworzy
                angażujące posty, odpowiada na recenzje i pomaga budować spójny
                wizerunek lokalu.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all duration-300 shadow-lg">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-white font-medium text-lg">
                Czy muszę mieć doświadczenie techniczne?
                <iconify-icon className="text-xl text-gray-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4 mt-2">
                Nie, nasza platforma jest niezwykle intuicyjna. Wystarczy kilka
                kliknięć, by algorytm dopasował treści do stylu Twojej
                restauracji i zaplanował komunikację.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all duration-300 shadow-lg">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-white font-medium text-lg">
                Czy mogę anulować subskrypcję w dowolnym momencie?
                <iconify-icon className="text-xl text-gray-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4 mt-2">
                Tak, w przypadku płatności miesięcznych możesz anulować
                subskrypcję w każdym momencie bez dodatkowych opłat. Płatności
                roczne oferują jednak znaczne zniżki.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all duration-300 shadow-lg">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden text-white font-medium text-lg">
                Jakie wsparcie otrzymam po zakupie?
                <iconify-icon className="text-xl text-gray-400 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 font-light leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4 mt-2">
                Nasz zespół specjalistów jest do Twojej dyspozycji w razie
                pytań. Zależnie od wybranego planu oferujemy wsparcie e-mailowe,
                dedykowaną obsługę i materiały edukacyjne z zakresu marketingu
                AI.
              </div>
</details>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="register-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="relative bg-[#121214] border border-white/10 rounded-[2rem] w-full max-w-[25rem] sm:max-w-md p-6 sm:p-8 mx-4 shadow-2xl transform scale-95 transition-transform duration-300 overflow-y-auto max-h-[90vh]" id="register-modal-content">
<button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" onclick="closeModal()" type="button">
<iconify-icon height="24" icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#FCE89B] to-[#99791D] bg-clip-text text-transparent mb-3 text-center">
          Zarezerwuj miejsce
        </h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
          Wybierz dogodny termin i podaj swoje dane, aby otrzymać bezpłatny
          dostęp.
        </p>
<div className="wj-embed-wrapper" data-webinar-hash="l351mfy7">

</div>
</div>
</div>




    </>
  );
}
