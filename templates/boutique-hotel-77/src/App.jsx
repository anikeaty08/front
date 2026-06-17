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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleMobileMenu() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');
        if (overlay.classList.contains('translate-x-full')) {
          overlay.classList.remove('translate-x-full');
          overlay.classList.add('translate-x-0');
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        } else {
          overlay.classList.add('translate-x-full');
          overlay.classList.remove('translate-x-0');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
          document.body.style.overflow = '';
        }
      }

      function toggleMobileSubmenu(id, btn) {
        const submenu = document.getElementById(id);
        const isHidden = submenu.classList.contains('mobile-submenu-hidden');
        if (isHidden) {
          submenu.classList.remove('mobile-submenu-hidden');
          submenu.classList.add('mobile-submenu-open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          submenu.classList.add('mobile-submenu-hidden');
          submenu.classList.remove('mobile-submenu-open');
          btn.setAttribute('aria-expanded', 'false');
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
      

<nav className="fixed transition-all duration-300 z-[100] font-['Geist'] bg-zinc-900/80 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-12 items-center">
<button className="md:hidden uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
            Jetzt buchen
          </button>
<a className="hidden md:block hover:opacity-80 transition-opacity" href="/">
<img alt="Oma Ida Logo" className="filter opacity-90 mix-blend-screen w-auto h-16 object-cover invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76f1cea4-6358-4b8b-90f4-e2afc989943e_320w.png"/>
</a>

<div className="hidden md:flex gap-8 uppercase text-xs text-zinc-400 tracking-widest items-center">
<div className="relative group">
<a className="hover:text-white transition-colors duration-300 flex items-center gap-1 pt-6 pb-6" href="/">
                Zimmer
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[220px] flex flex-col gap-0.5">
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/zimmer">
                    Alle Zimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/doppelzimmer">
                    Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/komfort-doppelzimmer">
                    Komfort Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/superior-doppelzimmer">
                    Superior Doppelzimmer
                  </a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors duration-300" href="/fruehstueck">
              Frühstück
            </a>
<a className="hover:text-white transition-colors duration-300" href="/angebote">
              Angebote
            </a>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex gap-1 uppercase text-xs tracking-widest pt-6 pb-6 gap-x-1 gap-y-1 items-center">
                Erleben
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[140px] flex flex-col gap-0.5">
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/harz">
                    Harz
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/relax">
                    Relax
                  </a>
</div>
</div>
</div>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex gap-1 uppercase text-xs tracking-widest pt-6 pb-6 gap-x-1 gap-y-1 items-center">
                Informationen
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[160px] flex flex-col gap-0.5">
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/anfahrt-lage">
                    Anfahrt &amp; Lage
                  </a>
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg px-4 py-2" href="/faq">
                    FAQ
                  </a>
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/anfragen">
                    Kontakt
                  </a>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
            Jetzt buchen
          </button>

<button className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors relative z-[110]" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<svg className="transition-transform duration-300" height="24" id="menu-icon-open" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18M3 6h18M3 18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="hidden absolute top-2 left-2 transition-transform duration-300" height="24" id="menu-icon-close" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="md:hidden fixed h-[calc(100vh-6rem)] transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-y-auto backdrop-blur-3xl w-full border-white/5 border-t top-24 left-0 shadow-2xl z-[200] translate-x-full bg-zinc-900" id="mobile-menu-overlay">
<div className="flex flex-col p-6 space-y-2">
<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/start">
              Start
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-zimmer', this)">
              Zimmer
              <svg className="text-zinc-500 transition-transform duration-300 group-aria-expanded:rotate-180" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-zimmer">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/zimmer">
                  Alle Zimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/doppelzimmer">
                  Doppelzimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/komfort-doppelzimmer">
                  Komfort Doppelzimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/superior-doppelzimmer">
                  Superior Doppelzimmer
                </a>
</div>
</div>
</div>
<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/fruehstueck">
              Frühstück
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/angebote">
              Angebote
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-erleben', this)">
              Erleben
              <svg className="text-zinc-500 transition-transform duration-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-erleben">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/harz">
                  Natur &amp; Umgebung
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/relax">
                  Relax
                </a>
</div>
</div>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-infos', this)">
              Informationen
              <svg className="text-zinc-500 transition-transform duration-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-infos">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/anfahrt-lage">
                  Anfahrt &amp; Lage
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/faq">
                  FAQ
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/anfragen">
                  Kontakt
                </a>
</div>
</div>
</div>

<div className="pt-8 pb-8">
<button className="w-full uppercase bg-white text-black font-medium tracking-widest text-xs py-4 rounded-full hover:bg-zinc-200 transition-colors" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
              Jetzt buchen
            </button>
</div>
</div>
</div>
</nav>

<header className="relative w-full overflow-hidden bg-zinc-900 pt-48 pb-24">

<div className="z-0 bg-zinc-900 absolute top-0 right-0 bottom-0 left-0">
<div className="bg-gradient-to-b from-zinc-800/50 to-zinc-900 w-full h-[500px] absolute top-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="flex flex-col items-center animate-[fadeIn_0.8s_ease-out]">
<span className="uppercase text-xs text-zinc-500 tracking-[0.3em] mb-6">
            Wohnen &amp; Wohlfühlen
          </span>
<h1 className="md:text-7xl leading-[0.9] text-glow text-5xl text-white tracking-tighter mb-8 font-medium">
            Unsere
            <span className="serif italic text-white/90">Zimmer</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-zinc-400 max-w-xl mx-auto">
            Jedes unserer Zimmer wurde mit Liebe zum Detail gestaltet.
            Natürliche Materialien, warme Farben und modernes Design schaffen
            eine Atmosphäre der Ruhe.
          </p>
</div>
</div>
</header>

<div className="sticky top-24 z-40 bg-zinc-900/90 backdrop-blur border-b border-t border-white/5 py-4 mb-20">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4">
<div className="flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-500">
<span className="text-white">3 Kategorien</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">Check-in ab 15:00</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="">Check-out bis 10:00</span>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="info" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle>
<line stroke="currentColor" strokeWidth="2" x1="12" x2="12" y1="16" y2="12"></line>
<line stroke="currentColor" strokeWidth="2" x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
<span className="">Frühstück optional buchbar</span>
</div>
</div>
</div>

<section className="bg-zinc-900 pb-32">
<div className="max-w-7xl mx-auto px-6 space-y-32">

<div className="scroll-mt-40" id="standard">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative group">

<div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 relative bg-zinc-800">
<img alt="Doppelzimmer" className="group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24d92cda-0bfa-49af-bdbd-1af8ae707ac4_1600w.jpg"/>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
<span className="text-[10px] uppercase tracking-widest text-white">
                    Standard
                  </span>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="mb-4 text-zinc-500 text-xs tracking-widest uppercase flex items-center gap-3">
<span>01</span>
<div className="w-8 h-[1px] bg-zinc-700"></div>
<span className="">Der Klassiker</span>
</div>
<h2 className="text-4xl font-medium text-white mb-6">Doppelzimmer</h2>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Unser gemütlicher Einstieg in die Welt von Oma Ida. Perfekt für
                Paare oder Alleinreisende, die Wert auf eine stilvolle
                Übernachtung legen, aber den Fokus auf Aktivitäten im Freien
                haben.
              </p>

<div className="grid grid-cols-2 gap-y-4 mb-10 border-t border-b border-white/5 py-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Größe
                    </span>
<span className="text-sm text-zinc-200">16-22 m²</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="bed" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M2 17h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M6 8v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Bett
                    </span>
<span className="text-sm text-zinc-200">Boxspringbett</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="droplets" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
<path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Bad
                    </span>
<span className="text-sm text-zinc-200">Regendusche</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="tv" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="15" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" width="20" x="2" y="7"></rect>
<polyline fill="none" points="17 2 12 7 7 2" stroke="currentColor" strokeWidth="1.5"></polyline>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Tech
                    </span>
<span className="text-sm text-zinc-200">
                      Smart TV &amp; Wifi
                    </span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 uppercase hover:bg-zinc-200 transition-colors text-xs font-semibold text-black tracking-widest bg-white rounded-full pt-4 pb-4" onclick="window.location.href='/doppelzimmer'" role="button">
                  Jetzt Buchen
                </button>
</div>
</div>
</div>
</div>

<div className="scroll-mt-40" id="komfort">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1 flex flex-col justify-center">
<div className="mb-4 text-zinc-500 text-xs tracking-widest uppercase flex items-center gap-3">
<span>02</span>
<div className="w-8 h-[1px] bg-zinc-700"></div>
<span>Mehr Raum</span>
</div>
<h2 className="text-4xl font-medium text-white mb-6">
                Komfort Doppelzimmer
              </h2>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Für alle, die etwas mehr Platz schätzen. Unsere Komfort-Zimmer
                bieten großzügige Grundrisse und hochwertige Ausstattungsdetails
                für einen längeren Aufenthalt im Harz.
              </p>

<div className="grid grid-cols-2 gap-y-4 mb-10 border-t border-b border-white/5 py-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Größe
                    </span>
<span className="text-sm text-zinc-200">20-27 m²</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="sun" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 2v2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 20v2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m4.93 4.93l1.41 1.41" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m17.66 17.66l1.41 1.41" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M2 12h2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M20 12h2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m6.34 17.66l-1.41 1.41" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m19.07 4.93l-1.41 1.41" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Licht
                    </span>
<span className="text-sm text-zinc-200">Helle Atmosphäre</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="sofa" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Komfort
                    </span>
<span className="text-sm text-zinc-200">Sitzgelegenheit</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="wifi" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Internet
                    </span>
<span className="text-sm text-zinc-200">Highspeed Wifi</span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 uppercase hover:bg-zinc-200 transition-colors text-xs font-semibold text-black tracking-widest bg-white rounded-full pt-4 pb-4" onclick="window.location.href='/komfort-doppelzimmer'" role="button">
                  Jetzt Buchen
                </button>
</div>
</div>
<div className="order-1 lg:order-2 relative group">

<div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 relative bg-zinc-800">
<img alt="Komfort Doppelzimmer" className="group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66cda4d5-be81-4082-b2f9-406efaeb1c26_1600w.jpg"/>

<div className="absolute top-4 right-4 bg-white text-black px-3 py-1.5 rounded-full shadow-lg">
<span className="text-[10px] uppercase tracking-widest font-bold">
                    Empfehlung
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-mt-40" id="superior">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative group">

<div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 relative bg-zinc-800">
<img alt="Superior Doppelzimmer" className="group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c3e86bc-de8b-4c79-a38f-bb26895c103a_1600w.jpg"/>

<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-white px-3 py-1.5 rounded-full border border-white/10">
<span className="text-[10px] uppercase tracking-widest">
                    Exklusiv
                  </span>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="mb-4 text-zinc-500 text-xs tracking-widest uppercase flex items-center gap-3">
<span>03</span>
<div className="w-8 h-[1px] bg-zinc-700"></div>
<span className="">Das gewisse Extra</span>
</div>
<h2 className="text-4xl font-medium text-white mb-6">
                Superior Doppelzimmer
              </h2>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Unsere großzügigste Kategorie. Mit einer eigenen gemütlichen
                Sitzecke ist dieses Zimmer der perfekte Rückzugsort für
                anspruchsvolle Genießer. Hier trifft Raum auf Atmosphäre.
              </p>

<div className="grid grid-cols-2 gap-y-4 mb-10 border-t border-b border-white/5 py-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="maximize" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Größe
                    </span>
<span className="text-sm text-zinc-200">30-35 m²</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="armchair" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
<path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Extra
                    </span>
<span className="text-sm text-zinc-200">Lounge-Ecke</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="coffee" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8h1a4 4 0 1 1 0 8h-1" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="6" x2="6" y1="1" y2="4"></line>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="10" x2="10" y1="1" y2="4"></line>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="14" x2="14" y1="1" y2="4"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Genuss
                    </span>
<span className="text-sm text-zinc-200">
                      Kaffee/Tee Station
                    </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
<svg data-icon-set="lucide" data-lucide="wine" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M8 22h8" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M7 10h10" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 15v7" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 uppercase tracking-wide">
                      Vibe
                    </span>
<span className="text-sm text-zinc-200">
                      Vino-Lounge Zugang
                    </span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 uppercase hover:bg-zinc-200 transition-colors text-xs font-semibold text-black tracking-widest bg-white rounded-full pt-4 pb-4" onclick="window.location.href='/superior-doppelzimmer'" role="button">
                  Jetzt Buchen
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-800/30 border-white/5 border-t pt-24 pb-24" id="amenities">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="block text-zinc-500 text-xs uppercase tracking-widest mb-6">
          Alles für Ihren Aufenthalt
        </span>
<h3 className="text-3xl text-white font-medium mb-12">
          Ihre Ausstattungsmerkmale
        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="coffee" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8h1a4 4 0 1 1 0 8h-1" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="6" x2="6" y1="1" y2="4"></line>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="10" x2="10" y1="1" y2="4"></line>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="14" x2="14" y1="1" y2="4"></line>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Frühstücksbuffet
              </span>
<span className="block text-xs text-zinc-400 truncate">
                Optional zubuchbar
              </span>
</div>
</div>

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="car" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<circle cx="7" cy="17" fill="none" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<circle cx="17" cy="17" fill="none" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Parkplätze
              </span>
<span className="block text-xs text-zinc-400 truncate">
                Optional zubuchbar
              </span>
</div>
</div>

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="bike" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.5" cy="17.5" fill="none" r="3.5" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="5.5" cy="17.5" fill="none" r="3.5" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="15" cy="5" fill="currentColor" r="1" stroke="none"></circle>
<path d="M12 17.5V14l-3-3 4-3 2 3h2" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Fahrrad &amp; Ski
              </span>
<span className="block text-xs text-zinc-400 truncate">
                Keller direkt im Haus
              </span>
</div>
</div>

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="accessibility" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="4" fill="none" r="1" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="m18 19 1-7-6 1" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m5 8 3-3 5.5 3-2.36 4.68" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M8 17h9" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M10 9v8" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Barrierefreiheit
              </span>
<span className="block text-xs text-zinc-400 truncate">
                4 geeignete Zimmer
              </span>
</div>
</div>

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="wifi" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M2 8.82a15 15 0 0 1 20 0" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M5 12.859a10 10 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path d="m8.5 16.429a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Highspeed WLAN
              </span>
<span className="block text-xs text-zinc-400 truncate">
                Kostenfrei verfügbar
              </span>
</div>
</div>

<div className="h-full p-6 border border-white/5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 transition-colors flex items-center gap-5 group">
<div className="shrink-0 w-10 h-10 rounded-full bg-zinc-700/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<svg data-icon-set="lucide" data-lucide="map" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon fill="none" points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" stroke="currentColor" strokeWidth="1.5"></polygon>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="9" x2="9" y1="3" y2="18"></line>
<line fill="none" stroke="currentColor" strokeWidth="1.5" x1="15" x2="15" y1="6" y2="21"></line>
</svg>
</div>
<div className="flex-1 min-w-0">
<span className="block text-sm font-medium text-white mb-1 truncate">
                Kurkarte
              </span>
<span className="block text-xs text-zinc-400 truncate">
                Für Ihren Braunlage Trip
              </span>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Bekannt aus" className="overflow-hidden bg-zinc-900 border-zinc-900/5 border-t pt-20 pb-16 relative" id="Untermarken Überschrift">
<div className="z-20 text-center max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 relative translate-x-1 -translate-y-8">
<span className="text-sm text-zinc-500 uppercase tracking-widest">
          Nicht fündig geworden?
        </span>
<h3 className="mt-2 text-xl md:text-2xl text-white font-medium tracking-tight">
          Entdecken Sie die weiteren Marken der StrandBerg Familie!
        </h3>
</div>
<div className="z-10 pointer-events-none bg-gradient-to-r from-zinc-950 to-transparent w-24 absolute top-0 bottom-0 left-0"></div>
<div className="z-10 pointer-events-none bg-gradient-to-l from-zinc-950 to-transparent w-24 absolute top-0 right-0 bottom-0"></div>
<div className="hidden md:flex overflow-hidden group">
<div className="flex shrink-0 animate-[infinite-scroll_10s_linear_infinite] md:animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full md:px-12 md:space-x-24 h-24 pr-4 pl-4 space-x-8 items-center justify-around">

<img alt="Geo Magazin" className="hover:opacity-100 transition-opacity duration-300 bg-center -translate-y-2 cursor-pointer shrink-0 md:translate-x-16 opacity-100 w-auto h-50 object-cover invert brightness-0 translate-x-4" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>

<img alt="Cosmopolitan" className="hover:opacity-100 transition-opacity duration-300 bg-center cursor-pointer shrink-0 opacity-100 w-auto h-48 object-cover invert brightness-0 translate-y-2" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>

<img alt="Stern" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-24 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>

<img alt="Gala" className="hover:opacity-100 transition-opacity duration-300 bg-center opacity-100 w-auto h-16 object-cover invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>

<img alt="Architectural Digest" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-8 object-contain invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>

<div className="flex shrink-0 animate-[infinite-scroll_10s_linear_infinite] md:animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full h-24 pr-12 pl-12 space-x-24 items-center justify-around">

<img alt="Geo Magazin" className="hover:opacity-100 transition-opacity duration-300 bg-center -translate-y-2 cursor-pointer shrink-0 md:translate-x-16 opacity-100 w-auto h-50 object-cover invert brightness-0 translate-x-4" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>

<img alt="Cosmopolitan" className="hover:opacity-100 transition-opacity duration-300 bg-center cursor-pointer shrink-0 opacity-100 w-auto h-48 object-cover invert brightness-0 translate-y-2" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>

<img alt="Stern" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-24 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>

<img alt="Gala" className="hover:opacity-100 transition-opacity duration-300 bg-center opacity-100 w-auto h-16 object-cover invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>

<img alt="Architectural Digest" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-8 object-contain invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
</div>
<div className="md:hidden relative w-full overflow-hidden mt-8 group">
<div className="absolute z-10 left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none"></div>
<div className="absolute z-10 right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>
<div className="flex animate-[infinite-scroll_25s_linear_infinite] w-max group-active:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
<div className="flex gap-8 pr-4 pl-4 gap-x-8 gap-y-8 items-center">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="opacity-70 w-auto h-14 object-contain invert brightness-0 scale-125 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-8 object-contain invert brightness-0" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="opacity-70 w-auto h-6 object-contain invert brightness-0 scale-75 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
<div className="flex gap-8 items-center px-4">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="h-14 w-auto object-contain invert brightness-0 opacity-70 scale-125 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="h-8 w-auto object-contain invert brightness-0 opacity-70 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="h-6 w-auto object-contain invert brightness-0 opacity-70 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
</div>
</div>
</section>
<footer className="text-sm font-light text-zinc-500 bg-zinc-900 border-white/5 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="col-span-1 sm:col-span-2 lg:col-span-1">
<h3 className="serif text-2xl text-white tracking-tighter mb-6">
              Hotel Oma Ida
            </h3>
<p className="leading-relaxed mb-6">
              Herzog Wilhelm Straße 10 38700 Braunlage, Deutschland
            </p>
<div className="flex flex-col gap-2 mb-8">
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/tel:+49055209997979">
                +49 (0) 5520 999 79 79
              </a>
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/mailto:mail@strand-berg.de">
                mail@strand-berg.de
              </a>
</div>

<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.instagram.com/strandberg_fewo/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.facebook.com/strandbergferienwohnungen" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-facebook" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all w-8 h-8 border-zinc-800 border rounded-full" href="https://www.tiktok.com/@strandberg_fewo" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.linkedin.com/company/strandbergfewo" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Zimmer
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/zimmer">
                  Alle Zimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/doppelzimmer">
                  Doppelzimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/komfort-doppelzimmer">
                  Komfort Doppelzimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/superior-doppelzimmer">
                  Superior Doppelzimmer
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Entdecken
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/angebote">
                  Angebote
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/harz">
                  Harz
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/relax">
                  Relax
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Informationen
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className=""></li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfragen">
                  Kontakt
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfahrt-lage">
                  Anfahrt &amp; Lage
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/faq">
                  FAQ
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Rechtliches
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/datenschutz">
                  Datenschutzerklärung
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/impressum">
                  Impressum
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/barrierefreiheit">
                  Barrierefreiheitserklärung
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p className="">© 2026 StrandBerg GmbH. Alle Rechte vorbehalten.</p>
</div>
</div>
</footer>


    </>
  );
}
