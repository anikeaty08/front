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



{
"@context": "https://schema.org",
"@type": "Restaurant",
"name": "Burger Nation",
"image": "PLACEHOLDER_MAIN_LOGO_URL",
"servesCuisine": "Burger",
"priceRange": "$$",
"department": [
{
"@type": "Restaurant",
"name": "Burger Nation Puerto Plata",
"telephone": "+18093301311",
"address": {
"@type": "PostalAddress",
"addressLocality": "Puerto Plata",
"addressCountry": "DO"
}
},
{
"@type": "Restaurant",
"name": "Burger Nation Sosúa",
"telephone": "+18294585000",
"address": {
"@type": "PostalAddress",
"addressLocality": "Sosúa",
"addressCountry": "DO"
}
}
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- Data ---
      const citiesData = {
          'puerto-plata': {
              name: 'Puerto Plata',
              phone: '18093301311',
              active: true
          },
          'sosua': {
              name: 'Sosúa',
              phone: '18294585000',
              active: true
          },
          'santiago': {
              name: 'Santiago',
              phone: '',
              active: false
          }
      };

      let currentCity = null;

      // --- Initialization ---
      document.addEventListener('DOMContentLoaded', () => {
          // Check routing based on URL hash
          handleRouting();
          window.addEventListener('hashchange', handleRouting);

          // Handle Mobile Menu Toggle
          const menuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          menuBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
          });

          // Close mobile menu on link click
          document.querySelectorAll('.nav-link').forEach(link => {
              link.addEventListener('click', () => {
                  mobileMenu.classList.add('hidden');
              });
          });

          // Check City in LocalStorage
          const savedCity = localStorage.getItem('burgerNationCity');
          if (savedCity && citiesData[savedCity]) {
              applyCityState(savedCity);
          } else {
              openCityModal();
          }

          // "Pedir" redirect logic check
          if(window.location.pathname === '/pedir' || window.location.hash === '#pedir') {
              window.location.hash = '#menu';
          }
      });

      // --- SPA Routing ---
      function handleRouting() {
          let hash = window.location.hash || '#home';
          // map /pedir to /menu visually
          if(hash === '#pedir') hash = '#menu';

          const targetSection = document.querySelector(hash);

          if (targetSection && targetSection.classList.contains('page-section')) {
              // Hide all sections
              document.querySelectorAll('.page-section').forEach(sec => {
                  sec.classList.remove('active');
              });
              // Show target
              targetSection.classList.add('active');
              window.scrollTo(0, 0);
          }
      }

      // --- City Logic ---
      function openCityModal() {
          document.getElementById('city-modal').classList.remove('hidden');
          document.getElementById('city-modal').style.display = 'flex';
          document.body.classList.add('modal-open');
      }

      function closeCityModal() {
          document.getElementById('city-modal').style.display = 'none';
          document.body.classList.remove('modal-open');
      }

      function setCity(cityId) {
          localStorage.setItem('burgerNationCity', cityId);
          applyCityState(cityId);
          closeCityModal();

          // Re-order offers if on offers page
          if(window.location.hash === '#ofertas') {
              filterOffers(cityId);
          }
      }

      function applyCityState(cityId) {
          currentCity = cityId;
          const cityInfo = citiesData[cityId];

          // Update Header Pill
          document.getElementById('header-city-name').innerText = `📍 ${cityInfo.name}`;

          // WhatsApp Links Logic
          const waUrl = cityInfo.active ? `https://wa.me/${cityInfo.phone}` : '#locales';

          // Header Button
          const headerBtn = document.getElementById('header-order-btn');
          headerBtn.href = waUrl;
          headerBtn.innerHTML = cityInfo.active ?
              `<iconify-icon icon="solar:cart-large-minimalistic-linear" stroke-width="1.5"></iconify-icon> PEDIR` :
              `VER LOCALES`;

          // Mobile Sticky Bar
          const mobileSticky = document.getElementById('mobile-sticky-order');
          const mobileOrderBtn = document.getElementById('mobile-order-btn');
          const mobileOrderCity = document.getElementById('mobile-order-city');

          if (cityInfo.active) {
              mobileSticky.classList.remove('translate-y-full');
              mobileOrderBtn.href = waUrl;
              mobileOrderBtn.classList.remove('bg-[#861919]');
              mobileOrderBtn.classList.add('bg-[#d93d26]');
              mobileOrderCity.innerText = cityInfo.name.toUpperCase();
              document.getElementById('floating-wa-btn').style.display = 'flex';
              document.getElementById('floating-wa-btn').href = waUrl;
          } else {
              // Santiago state
              mobileSticky.classList.remove('translate-y-full');
              mobileOrderBtn.href = '#locales';
              mobileOrderBtn.classList.remove('bg-[#d93d26]');
              mobileOrderBtn.classList.add('bg-[#861919]');
              mobileOrderCity.innerText = 'PRONTO';
              document.getElementById('floating-wa-btn').style.display = 'none';
          }

          // Menu Page Banner Logic for Santiago
          const santiagoBanner = document.getElementById('santiago-banner');
          if (cityId === 'santiago') {
              santiagoBanner.classList.remove('hidden');
          } else {
              santiagoBanner.classList.add('hidden');
          }

          // Default filter for Offers based on selected city
          filterOffers(cityId);
      }

      // --- Offers Filtering Logic ---
      function filterOffers(target) {
          // Update button styles
          document.querySelectorAll('.offer-filter').forEach(btn => {
              if(btn.dataset.target === target) {
                  btn.classList.remove('border-[#f8c473]/30', 'bg-transparent', 'text-[#f8c473]');
                  btn.classList.add('border-[#f8c473]', 'bg-[#f8c473]', 'text-[#111111]');
              } else {
                  btn.classList.add('border-[#f8c473]/30', 'bg-transparent', 'text-[#f8c473]');
                  btn.classList.remove('border-[#f8c473]', 'bg-[#f8c473]', 'text-[#111111]');
              }
          });

          // Filter cards
          const cards = document.querySelectorAll('.offer-card');
          cards.forEach(card => {
              if(target === 'all' || card.dataset.city === target) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      }

      // --- Analytics Tracking ---
      function trackOrderClick() {
          if (!currentCity) return;

          // Console log placeholders for actual implementation
          console.log(`[Analytics] Event: whatsapp_click, City: ${currentCity}`);

          // Example GA4 implementation
          if (typeof gtag === 'function') {
              /* gtag('event', 'whatsapp_click', { 'city': currentCity }); */
          }

          // Example Meta Pixel implementation
          if (typeof fbq === 'function') {
              /* fbq('trackCustom', 'WhatsAppClick', { city: currentCity }); */
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
      

<div className="fixed inset-0 z-50 bg-[#111111] flex flex-col items-center justify-center p-6 transition-opacity duration-300" id="city-modal" style={{display: 'none'}}>
<img alt="Burger Nation Background" className="opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dce83553-0dd2-4709-a7ad-d896d521b2c7_1600w.jpg"/>
<div className="text-center max-w-md w-full relative z-10"></div>
<div className="text-center max-w-md w-full">
<img alt="Burger Nation Logo" className="w-full h-auto mb-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4b20eed-0e71-410d-9922-2b17042f7d6f_1600w.png"/>
<h2 className="text-3xl md:text-4xl text-[#f8c473] mb-8 font-rustic tracking-wide">
          ¿Desde dónde nos visitas?
        </h2>
<div className="space-y-4">
<button className="w-full group relative overflow-hidden bg-[#1a1a1a] border border-[#d93d26]/30 hover:border-[#d93d26] rounded-xl p-6 transition-all duration-300" onclick="setCity('puerto-plata')">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-[#d93d26]/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="group-hover:text-white transition-colors text-3xl text-[#f8c473] font-display relative tracking-wide">
              Puerto Plata
            </span>
</button>
<button className="w-full group relative overflow-hidden bg-[#1a1a1a] border border-[#d93d26]/30 hover:border-[#d93d26] rounded-xl p-6 transition-all duration-300" onclick="setCity('sosua')">
<div className="absolute inset-0 bg-[#d93d26]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative font-display text-3xl text-[#f8c473] group-hover:text-white transition-colors tracking-wide">
              Sosúa
            </span>
</button>
<button className="w-full group relative overflow-hidden bg-[#1a1a1a] border border-[#861919]/50 hover:border-[#f87019] rounded-xl p-6 transition-all duration-300" onclick="setCity('santiago')">
<div className="absolute top-0 right-0 bg-[#f87019] text-[#111111] font-display text-xs px-2 py-1 rounded-bl-lg">
              PRONTO
            </div>
<span className="relative font-display text-3xl text-[#f8c473]/70 group-hover:text-[#f8c473] transition-colors tracking-wide">
              Santiago
            </span>
</button>
</div>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#f8c473]/10">
<div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">

<a className="flex-shrink-0 flex items-center nav-link" href="#home">

<img alt="Burger Nation Logo" className="h-[96px] w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9eadb40-07d4-4a8a-a318-1d8a52501917_800w.png"/>
</a>

<nav className="hidden md:flex items-center space-x-8 font-display text-xl tracking-wide">
<a className="nav-link hover:text-[#f87019] transition-colors tracking-wide" href="#menu">
            Menú
          </a>
<a className="nav-link hover:text-[#f87019] transition-colors tracking-wide" href="#ofertas">
            Ofertas
          </a>
<a className="nav-link hover:text-[#f87019] transition-colors tracking-wide" href="#locales">
            Locales
          </a>
<a className="nav-link hover:text-[#f87019] transition-colors tracking-wide" href="#nosotros">
            Nosotros
          </a>
</nav>

<div className="flex items-center space-x-4">

<button className="flex items-center gap-1 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-sm font-medium px-3 py-1.5 rounded-full border border-[#f8c473]/20 transition-colors" onclick="openCityModal()">
<span id="header-city-name">📍 Puerto Plata</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<a className="hidden md:flex bg-[#d93d26] hover:bg-[#861919] text-[#f8c473] font-display text-xl px-6 py-2 rounded-lg transition-colors items-center gap-2 tracking-wide" href="https://wa.me/18093301311" id="header-order-btn" onclick="trackOrderClick()" target="_blank">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
            PEDIR
          </a>

<button className="md:hidden text-2xl text-[#f8c473] p-1" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-[#1a1a1a] border-b border-[#f8c473]/10 px-4 py-4 space-y-4 font-display text-2xl" id="mobile-menu">
<a className="block nav-link tracking-wide" href="#menu">Menú</a>
<a className="block nav-link tracking-wide" href="#ofertas">Ofertas</a>
<a className="block nav-link tracking-wide" href="#locales">Locales</a>
<a className="block nav-link tracking-wide" href="#nosotros">Nosotros</a>
</div>
</header>

<main className="flex-grow pt-[113px]">

<section className="page-section active" id="home">

<div className="relative w-full h-[calc(70vh-300px)] md:h-[calc(85vh-300px)] min-h-[350px] bg-[#1a1a1a] flex items-start justify-center overflow-hidden pt-[calc(20vh-150px)] md:pt-[calc(25vh-150px)]">

<img alt="Woman Enjoying Gourmet Burger" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dce83553-0dd2-4709-a7ad-d896d521b2c7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-4 pl-4 relative">
<h1 className="leading-none md:text-7xl lg:text-7xl text-5xl text-[#d93d26] tracking-wide font-rustic mb-6 drop-shadow-lg scale-75">
              LAS HAMBURGUESAS
              <br/>
<span className="text-[#f8c473] tracking-wide">
                MÁS FRESCAS DE RD
              </span>
</h1>
<a className="nav-link inline-block bg-[#f87019] hover:bg-[#d93d26] text-[#111111] hover:text-[#f8c473] font-display text-2xl px-8 py-3 rounded-lg transition-colors tracking-wide" href="#menu">
              VER MENÚ
            </a>
</div>
</div>

<div className="max-w-4xl mx-auto px-4 pt-16 -mb-8">
<div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#f8c473]/20 relative shadow-2xl">
<div className="absolute top-6 right-6 bg-[#d93d26] text-[#111111] font-display text-xl px-5 py-1.5 rounded-lg z-10 tracking-wide shadow-md">
              OFERTA
            </div>
<img alt="International Burger Day Dominican Republic Promotion" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/080ed0af-166c-442a-b28a-a56bb6502ea8_1600w.jpg"/>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#111111]/80 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26da3284-c868-432d-8d4d-c47cdbea153c_800w.jpg')] bg-cover bg-center bg-blend-overlay rounded-xl p-8 text-center border border-[#f8c473]/10">
<iconify-icon className="text-4xl text-[#d93d26] mb-4" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-2 tracking-wide">
                PUERTO PLATA
              </h3>
<p className="text-sm text-[#f8c473]/70">Abierto todos los días</p>
</div>
<div className="bg-[#111111]/80 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26da3284-c868-432d-8d4d-c47cdbea153c_800w.jpg')] bg-cover bg-center bg-blend-overlay rounded-xl p-8 text-center border border-[#f8c473]/10 relative overflow-hidden">
<div className="absolute top-4 right-4 text-[#09a776]">
<iconify-icon className="text-2xl" icon="solar:scooter-linear"></iconify-icon>
</div>
<iconify-icon className="text-4xl text-[#d93d26] mb-4" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-2 tracking-wide">SOSÚA</h3>
<p className="text-sm text-[#f8c473]/70">
                Delivery Gratis &gt; $1500
              </p>
</div>
<div className="bg-[#111111]/80 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a75d34e9-83a8-4e55-b218-d2a470fde8ab_800w.jpg')] bg-cover bg-center bg-blend-overlay rounded-xl p-8 text-center border border-[#f8c473]/5 relative opacity-80">
<div className="absolute top-0 inset-x-0 bg-[#ffb742] text-[#111111] font-display text-sm py-1">
                PRONTO
              </div>
<iconify-icon className="text-4xl text-[#861919] mb-4 mt-2" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-2 text-[#f8c473]/50 tracking-wide">
                SANTIAGO
              </h3>
<p className="text-sm text-[#f8c473]/40">Cocinando la nueva casa</p>
</div>
</div>
</div>

<div className="bg-[#1a1a1a] py-20 border-y border-[#f8c473]/10">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 w-full bg-[#2a2a2a] rounded-xl border border-[#f8c473]/20 relative overflow-hidden aspect-video">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/1077646576?h=ff929ebbaa&amp;background=1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe>
</div>
<div className="flex-1">
<h2 className="text-5xl text-[#d93d26] mb-6 font-rustic tracking-wide">
                DETRÁS DEL BUN
              </h2>
<p className="text-lg leading-relaxed text-[#f8c473]/80 mb-8">
                No somos una cadena gigante. Somos una familia que se toma su
                comida muy en serio. Carne fresca molida a diario, pan horneado
                en casa y una obsesión por el sabor real.
              </p>
<a className="nav-link text-[#f87019] hover:text-[#d93d26] font-display text-xl flex items-center gap-2 transition-colors tracking-wide" href="#nosotros">
                NUESTRA HISTORIA
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="page-section" id="menu">
<div className="max-w-7xl mx-auto px-4 py-12">

<div className="hidden bg-[#ffb742] text-[#111111] p-4 rounded-xl mb-10 text-center font-medium" id="santiago-banner">
            🚀 Santiago abre pronto — sigue
            <a className="font-bold hover:underline" href="#">
              @burgernationdr.santiago
            </a>
            para la fecha de apertura.
          </div>
<div className="text-center mb-16">
<h1 className="text-6xl text-[#d93d26] font-rustic tracking-wide">
              NUESTRO MENÚ
            </h1>
</div>

<div className="mb-16">
<h2 className="text-4xl text-[#f8c473] border-b border-[#f8c473]/20 pb-4 mb-8 font-rustic tracking-wide">
              BURGERS
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="La Clásica Nation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3cc7eeb-8fe9-4e9b-8830-2900454aedca_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      La Clásica Nation
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $350
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Pan brioche, 6oz carne fresca, queso cheddar americano,
                    lechuga, tomate, salsa secreta BN.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Smash Fresca" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b27b5f3-cb45-447d-ba92-da8d9d50fcaf_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Smash Fresca
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $390
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Doble smash, vegetales frescos, queso derretido, cebolla
                    morada y aderezo especial.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Bacon Supreme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5de565df-fa5b-46ff-a94a-0c0843143d9b_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Bacon Supreme
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $450
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Carne jugosa, extra tocineta ahumada, queso suizo, cebolla
                    crujiente y salsa BBQ.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Doble Bacon Smash" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16a07d9f-60ff-473e-8305-6d23fe477e4a_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Doble Bacon Smash
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $480
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Dos smash patties, doble cheddar, bacon crujiente, cebolla
                    caramelizada, mayo-ketchup.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Spicy Jalapeño" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64f11632-bd25-4b5f-be19-5e9e72b83f55_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Spicy Jalapeño
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $420
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Carne, queso pepper jack, jalapeños frescos, hongos
                    salteados y salsa picante secreta.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Crispy Pollo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0d820c0-b7fb-4c21-a8f7-bdc557c00e95_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Crispy Pollo
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $380
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Pechuga frita extra crujiente, ensalada de col (coleslaw),
                    pepinillos caseros.
                  </p>
</div>
</div>
</div>
</div>

<div className="mb-16">
<h2 className="text-4xl text-[#f8c473] border-b border-[#f8c473]/20 pb-4 mb-8 font-rustic tracking-wide">
              PAPAS &amp; MÁS
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Loaded Fries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae7bb579-c31c-47e2-bb70-e03ff446f968_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Loaded Fries
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $250
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Papas rústicas bañadas en salsa de queso, jalapeños y trozos
                    de bacon crujiente.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Combo Clásico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ff2ab78-f0b9-4852-8634-41a37152a1df_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Combo Clásico
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $550
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Cheeseburger clásica acompañada de nuestras loaded jalapeño
                    fries.
                  </p>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Combo Premium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8719c6a3-133d-44dc-bf65-94b08ef0970e_800w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Combo Premium
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      $650
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Burger doble con queso, porción de papas fritas regulares y
                    refresco frío.
                  </p>
</div>
</div>
</div>
</div>
<div className="mb-16">
<h2 className="text-4xl text-[#f8c473] border-b border-[#f8c473]/20 pb-4 mb-8 font-rustic tracking-wide">
              BEBIDAS
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-[#1a1a1a] rounded-xl overflow-hidden group border border-transparent hover:border-[#d93d26]/50 transition-colors">
<div className="aspect-square bg-[#2a2a2a] flex items-center justify-center border-b border-[#f8c473]/10 overflow-hidden relative">
<img alt="Bebidas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display text-2xl tracking-wide">
                      Sodas &amp; Cervezas
                    </h3>
<span className="font-display text-xl text-[#f87019] tracking-wide">
                      Desde $60
                    </span>
</div>
<p className="text-sm text-[#f8c473]/70">
                    Coca-Cola, Sprite, Agua mineral y cervezas bien frías para
                    acompañar.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="ofertas">
<div className="max-w-7xl mx-auto px-4 py-12">
<div className="text-center mb-10">
<h1 className="text-6xl text-[#d93d26] mb-6 font-rustic tracking-wide">
              OFERTAS
            </h1>

<div className="flex flex-wrap justify-center gap-3">
<button className="offer-filter px-4 py-1 rounded-full text-sm font-medium border transition-colors border-[#f8c473]/30 bg-transparent text-[#f8c473]" data-target="all" onclick="filterOffers('all')">
                Todos
              </button>
<button className="offer-filter px-4 py-1 rounded-full text-sm font-medium border hover:border-[#f8c473] transition-colors border-[#f8c473] bg-[#f8c473] text-[#111111]" data-target="puerto-plata" onclick="filterOffers('puerto-plata')">
                Puerto Plata
              </button>
<button className="offer-filter px-4 py-1 rounded-full text-sm font-medium border border-[#f8c473]/30 hover:border-[#f8c473] transition-colors bg-transparent text-[#f8c473]" data-target="sosua" onclick="filterOffers('sosua')">
                Sosúa
              </button>
<button className="offer-filter px-4 py-1 rounded-full text-sm font-medium border border-[#f8c473]/30 hover:border-[#f8c473] transition-colors bg-transparent text-[#f8c473]" data-target="santiago" onclick="filterOffers('santiago')">
                Santiago
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="offers-grid">

<div className="offer-card bg-[#1a1a1a] rounded-xl overflow-hidden relative" data-city="sosua" style={{display: 'none'}}>
<div className="absolute top-4 left-4 bg-[#111111] border border-[#d93d26] text-[#d93d26] font-display text-xs px-3 py-1 rounded-full z-10">
                📍 SOLO SOSÚA
              </div>
<div className="aspect-[2/1] bg-[#2a2a2a] flex items-center justify-center">
<img alt="Combo Lunch" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8719c6a3-133d-44dc-bf65-94b08ef0970e_800w.webp"/>
</div>
<div className="p-6">
<h3 className="font-display text-3xl mb-2 text-[#ffb742] tracking-wide">
                  Combo Lunch
                </h3>
<p className="text-[#f8c473]/80 mb-4">
                  Clásica Nation + Papas regulares + Refresco por solo $450.
                  Válido de 12pm a 4pm.
                </p>
</div>
</div>

<div className="offer-card bg-[#1a1a1a] rounded-xl overflow-hidden relative" data-city="puerto-plata" style={{display: 'block'}}>
<div className="absolute top-4 left-4 bg-[#111111] border border-[#d93d26] text-[#d93d26] font-display text-xs px-3 py-1 rounded-full z-10">
                📍 PUERTO PLATA
              </div>
<div className="aspect-[2/1] bg-[#2a2a2a] flex items-center justify-center">
<img alt="Martes de Doble Carne" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ff2ab78-f0b9-4852-8634-41a37152a1df_800w.webp"/>
</div>
<div className="p-6">
<h3 className="font-display text-3xl mb-2 text-[#ffb742] tracking-wide">
                  Martes de Doble Carne
                </h3>
<p className="text-[#f8c473]/80 mb-4">
                  Pide cualquier burger y te duplicamos la carne gratis todos
                  los martes.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="locales">
<div className="max-w-7xl mx-auto px-4 py-12">
<h1 className="text-6xl text-[#d93d26] text-center mb-16 font-rustic tracking-wide">
            NUESTROS LOCALES
          </h1>
<div className="space-y-16">

<div className="flex flex-col md:flex-row gap-8 bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#f8c473]/10">
<div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-[#2a2a2a] flex items-center justify-center">
<img alt="Puerto Plata Local" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26da3284-c868-432d-8d4d-c47cdbea153c_800w.jpg"/>
</div>
<div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
<h2 className="text-5xl mb-4 font-rustic tracking-wide">
                  PUERTO PLATA
                </h2>
<div className="space-y-4 text-[#f8c473]/80">
<p className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#d93d26] mt-1" icon="solar:map-point-linear"></iconify-icon>
                    Calle Separación #45, Esq. Beller, Centro Histórico
                  </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#d93d26]" icon="solar:clock-circle-linear"></iconify-icon>
                    Lunes a Domingo: 12:00 PM - 11:00 PM
                  </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#d93d26]" icon="solar:phone-linear"></iconify-icon>
                    809-330-1311
                  </p>
</div>
<a className="mt-6 h-32 bg-[#2a2a2a] hover:bg-[#333333] transition-colors rounded-lg flex flex-col items-center justify-center border border-[#d93d26]/30 group relative overflow-hidden" href="https://maps.app.goo.gl/Uu2it9XCWJM7iAPw7" target="_blank">
<div className="absolute inset-0 bg-[#d93d26]/5 group-hover:bg-[#d93d26]/10 transition-colors"></div>
<iconify-icon className="text-3xl text-[#d93d26] mb-2 group-hover:-translate-y-1 transition-transform" icon="solar:map-point-bold"></iconify-icon>
<span className="font-display text-[#f8c473] text-lg tracking-wide relative z-10">
                    ABRIR EN GOOGLE MAPS
                  </span>
</a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-8 bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#f8c473]/10">
<div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-[#2a2a2a] flex items-center justify-center">
<img alt="Sosúa Local" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26da3284-c868-432d-8d4d-c47cdbea153c_800w.jpg"/>
</div>
<div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
<h2 className="text-5xl mb-4 font-rustic tracking-wide">SOSÚA</h2>
<div className="space-y-4 text-[#f8c473]/80">
<p className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#d93d26] mt-1" icon="solar:map-point-linear"></iconify-icon>
                    Plaza Sosúa Center, Local 4, Carretera Principal
                  </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#d93d26]" icon="solar:clock-circle-linear"></iconify-icon>
                    Martes a Domingo: 1:00 PM - 12:00 AM (Lunes Cerrado)
                  </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#09a776]" icon="solar:scooter-linear"></iconify-icon>
                    Delivery Gratis en pedidos mayores a $1500
                  </p>
</div>
<a className="mt-6 h-32 bg-[#2a2a2a] hover:bg-[#333333] transition-colors rounded-lg flex flex-col items-center justify-center border border-[#d93d26]/30 group relative overflow-hidden" href="https://maps.app.goo.gl/Vq4F8dbbwUrcXXWWA" target="_blank">
<div className="absolute inset-0 bg-[#d93d26]/5 group-hover:bg-[#d93d26]/10 transition-colors"></div>
<iconify-icon className="text-3xl text-[#d93d26] mb-2 group-hover:-translate-y-1 transition-transform" icon="solar:map-point-bold"></iconify-icon>
<span className="font-display text-[#f8c473] text-lg tracking-wide relative z-10">
                    ABRIR EN GOOGLE MAPS
                  </span>
</a>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 bg-[#1a1a1a]/50 rounded-2xl overflow-hidden border border-[#f8c473]/5 relative">
<div className="absolute top-6 -left-10 bg-[#ffb742] text-[#111111] font-display text-xl py-1 px-12 -rotate-45 z-10 shadow-lg tracking-wide">
                PRONTO
              </div>
<div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-[#2a2a2a]/50 flex items-center justify-center opacity-50">
<img alt="Santiago Local" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a75d34e9-83a8-4e55-b218-d2a470fde8ab_800w.jpg"/>
</div>
<div className="w-full md:w-3/5 p-8 flex flex-col justify-center opacity-70">
<h2 className="text-5xl mb-4 text-[#f8c473]/50 font-rustic tracking-wide">
                  SANTIAGO
                </h2>
<p className="text-[#f8c473]/60 mb-4">
                  Estamos preparando los hierros para llevar las mejores burgers
                  a la Ciudad Corazón.
                </p>
<p className="font-display text-xl text-[#f87019] tracking-wide">
                  Apertura estimada: Finales 2024
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="nosotros">
<div className="max-w-7xl mx-auto px-4 py-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-6xl text-[#d93d26] mb-6 font-rustic tracking-wide">
              DETRÁS DEL BUN
            </h1>
<p className="text-lg text-[#f8c473]/80">
              Todo empezó en la cocina de nuestra casa, buscando la hamburguesa
              perfecta. Esa que te ensucia las manos pero te deja una sonrisa.
              Hoy, seguimos haciendo las cosas con el mismo cariño.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#f8c473]/10">
<iconify-icon className="text-5xl text-[#f87019] mb-4" icon="solar:chef-hat-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-3 tracking-wide">
                HECHO EN CASA
              </h3>
<p className="text-sm text-[#f8c473]/70">
                Horneamos nuestro propio pan brioche a diario. Salsas desde
                cero. Nada de potes industriales.
              </p>
</div>
<div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#f8c473]/10">
<iconify-icon className="text-5xl text-[#d93d26] mb-4" icon="solar:fire-square-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-3 tracking-wide">
                CARNE FRESCA
              </h3>
<p className="text-sm text-[#f8c473]/70">
                Nunca congelada. Molida en el local con nuestro blend especial
                de cortes premium.
              </p>
</div>
<div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#f8c473]/10">
<iconify-icon className="text-5xl text-[#ffb742] mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-3 tracking-wide">FAMILIA</h3>
<p className="text-sm text-[#f8c473]/70">
                Un negocio familiar manejado por gente que ama la comida,
                sirviendo a tu familia.
              </p>
</div>
</div>

<div className="w-full aspect-video md:aspect-[21/9] bg-[#2a2a2a] rounded-2xl border-2 border-dashed border-[#f8c473]/20 flex items-center justify-center mb-12">
<span className="font-display text-[#f8c473]/50 text-2xl text-center px-4 tracking-wide">
              PLACEHOLDER_INGREDIENTS_SMASH.JPG
            </span>
</div>
</div>
</section>
</main>

<footer className="bg-[#0a0a0a] border-t border-[#f8c473]/10 pt-16 pb-24 md:pb-8 mt-12">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="text-4xl text-[#d93d26] mb-4 font-rustic tracking-wide">
            BURGER NATION
          </div>
<p className="text-sm text-[#f8c473]/60 mb-6">
            Las hamburguesas más frescas de RD. Hechas con amor, fuego y carne
            real.
          </p>
<div className="flex space-x-4">
<a className="text-[#f8c473]/50 hover:text-[#f87019] transition-colors text-2xl" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-[#f8c473]/50 hover:text-[#f87019] transition-colors text-2xl" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-display text-xl mb-4 text-[#f8c473] tracking-wide">
            PUERTO PLATA
          </h4>
<p className="text-sm text-[#f8c473]/60 mb-2">Calle Separación #45</p>
<p className="text-sm text-[#f8c473]/60 mb-2">12:00 PM - 11:00 PM</p>
<a className="text-sm text-[#09a776] hover:text-white transition-colors" href="https://wa.me/18093301311" target="_blank">
            809-330-1311
          </a>
</div>
<div>
<h4 className="font-display text-xl mb-4 text-[#f8c473] tracking-wide">
            SOSÚA
          </h4>
<p className="text-sm text-[#f8c473]/60 mb-2">Plaza Sosúa Center, L4</p>
<p className="text-sm text-[#f8c473]/60 mb-2">
            Mar-Dom: 1:00 PM - 12:00 AM
          </p>
<a className="text-sm text-[#09a776] hover:text-white transition-colors" href="https://wa.me/18294585000" target="_blank">
            829-458-5000
          </a>
</div>
<div>
<h4 className="font-display text-xl mb-4 text-[#f8c473]/50 tracking-wide">
            SANTIAGO
          </h4>
<p className="text-sm text-[#f8c473]/40 mb-2">Próximamente</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 text-center border-t border-[#f8c473]/5 pt-8 text-xs text-[#f8c473]/40">
        © 2024 Burger Nation RD. Todos los derechos reservados.
      </div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-[#111111]/95 backdrop-blur-md border-t border-[#d93d26]/30 p-3 z-40 transition-transform duration-300 transform" id="mobile-sticky-order">
<a className="w-full block text-center bg-[#d93d26] hover:bg-[#861919] text-[#f8c473] font-display text-2xl py-3 rounded-lg transition-colors shadow-lg tracking-wide" href="https://wa.me/18093301311" id="mobile-order-btn" onclick="trackOrderClick()" target="_blank">
        PEDIR EN
        <span className="tracking-wide" id="mobile-order-city">PUERTO PLATA</span>
</a>
</div>

<a className="fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-[#09a776] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 hidden flex items-center justify-center" href="https://wa.me/18093301311" id="floating-wa-btn" onclick="trackOrderClick()" style={{display: 'flex'}} target="_blank">
<iconify-icon className="text-3xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>



    </>
  );
}
