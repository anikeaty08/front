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
        const icon = btn.querySelector('svg');
        if (submenu.classList.contains('mobile-submenu-hidden')) {
          submenu.classList.remove('mobile-submenu-hidden');
          submenu.classList.add('mobile-submenu-visible');
          icon.classList.add('rotate-180');
        } else {
          submenu.classList.remove('mobile-submenu-visible');
          submenu.classList.add('mobile-submenu-hidden');
          icon.classList.remove('rotate-180');
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

<header className="overflow-hidden flex bg-zinc-900 w-full h-[95vh] relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Vino Lounge Atmosphere" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af505753-4e51-449e-80d8-63038ffeae6b_3840w.jpg"/>
<div className="bg-gradient-to-b from-zinc-900/60 via-zinc-900/20 to-zinc-900 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up pb-20">
<div className="inline-flex bg-white/5 border-white/10 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
<span className="text-[10px] uppercase text-zinc-200 tracking-[0.2em]">
            Relaxation Mode On
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-8 leading-tight text-glow">
          Zeit für
          <span className="serif font-normal italic text-white/80">die Seele.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-xl mx-auto">
          Entdecken Sie eine Welt zwischen erlesenen Weinen und purer
          Wellness-Entspannung im Herzen des Harzes.
        </p>
</div>

<div className="-translate-x-1/2 flex flex-col animate-fade-in-up opacity-60 z-20 absolute bottom-8 items-center" style={{animationDelay: '0.5s'}}>
<span className="text-[10px] uppercase text-zinc-500 tracking-widest">
          Scrollen
        </span>
<div className="bg-gradient-to-b from-white to-transparent w-[1px] h-24"></div>
</div>
</header>

<section className="bg-zinc-900 border-white/5 border-b pt-32 pb-32 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg className="mx-auto mb-8 text-zinc-700" fill="none" height="32" stroke="currentColor" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeWidth="1.5"></path>
</svg>
<h2 className="text-3xl md:text-4xl leading-snug text-zinc-200 font-light tracking-wide">
          "Wir haben einen Ort geschaffen, an dem
          <span className="text-white font-medium serif italic">Genuss</span>
          und
          <span className="text-white font-medium serif italic">Ruhe</span>
          nahtlos ineinanderfließen. Von der Lounge direkt in den Spa."
        </h2>
</div>
</section>

<main className="bg-zinc-900 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden md:block z-0"></div>

<section className="z-10 min-h-screen flex flex-col md:flex-row overflow-hidden group bg-zinc-900 border-white/5 border-b relative items-center">

<div className="md:w-1/2 md:p-24 flex flex-col order-2 md:order-1 md:h-screen md:sticky md:top-0 bg-zinc-900 w-full pt-16 pr-6 pb-16 pl-6 justify-center">
<div className="md:max-w-none md:mx-0 w-full max-w-xs mr-auto ml-auto relative">
<div className="inline-flex gap-2 text-amber-500/80 mb-6 items-center">
<iconify-icon icon="lucide:wine" width="18"></iconify-icon>
<span className="uppercase text-xs font-medium tracking-[0.25em]">
                Genusswelt
              </span>
</div>
<h3 className="md:text-6xl text-4xl font-medium text-white tracking-tight mb-8">
              Die Vino Lounge
            </h3>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-md mb-10">
              Das Herzstück von Oma Ida. Eine stilvolle Lounge, die von 8 bis 22
              Uhr für Sie geöffnet ist. Kein Personal, keine Wartezeiten – nur
              Sie, gute Gespräche und exzellenter Wein.
            </p>

<ul className="space-y-4">
<li className="flex font-light text-zinc-300 tracking-wide items-center">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                8 - 22 Uhr Self-Service
              </li>
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Exklusive Weine
              </li>
<li className="flex font-light text-zinc-300 tracking-wide items-center">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Kamin Ambiente*
              </li>
</ul>
<p className="text-[10px] text-zinc-500 mt-6 leading-relaxed font-light">
              * Der Kamin ist nur während der Anwesenheit von Personal auf
              Wunsch in Betrieb, dies wurde nach Auflegen von echtem Holz auf
              das Gasfeuer so eingeführt. Daher ab Nachmittag kein Betrieb
              möglich.
            </p>
</div>
</div>

<div className="md:w-1/2 md:h-screen order-1 md:order-2 overflow-hidden w-full h-[50vh] border-white/5 border-l relative">
<img alt="Vino Lounge" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 saturate-[1.25] brightness-[1.05] contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af505753-4e51-449e-80d8-63038ffeae6b_3840w.jpg"/>
<div className="group-hover:bg-black/60 transition-colors duration-700 bg-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</section>

<section className="z-10 min-h-screen flex flex-col md:flex-row overflow-hidden group bg-zinc-900 border-white/5 border-b relative items-center">

<div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden border-r border-white/5">
<img alt="Wein Automat" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 saturate-[1.25] brightness-[1.05] contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ea3acd-21c7-4a41-b820-01f3cbec7573_800w.jpg"/>
<div className="absolute inset-0 bg-transparent group-hover:bg-black/60 transition-colors duration-700"></div>
<div className="hidden md:block transition-opacity duration-500 group-hover:opacity-60 bg-black/40 opacity-100 max-w-xs border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute bottom-12 left-12 backdrop-blur-md">
<p className="serif text-xs italic text-white">
              "Karte scannen. Wein wählen. Genießen."
            </p>
</div>
</div>

<div className="w-full md:w-1/2 py-16 px-6 md:p-24 flex flex-col justify-center md:h-screen md:sticky md:top-0 bg-zinc-900">
<div className="md:max-w-none md:mx-0 w-full max-w-xs mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 mb-6 text-blue-400/80">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-[0.25em] font-medium">
                Technologie
              </span>
</div>
<h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
              High-End Dispenser
            </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
              Moderne Technik trifft auf traditionellen Genuss. Unser
              Weindispenser garantiert, dass jedes Glas perfekt temperiert und
              frisch ist. Nutzen Sie einfach die beim Checkin erhaltene
              Automatenkarte.
            </p>

<ul className="space-y-4">
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Cashless Payment
              </li>
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Perfekt Gekühlt
              </li>
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Simple Bedienung
              </li>
</ul>
</div>
</div>
</section>

<section className="z-10 min-h-screen flex flex-col md:flex-row overflow-hidden group bg-zinc-900 border-white/5 border-b relative items-center">

<div className="w-full md:w-1/2 py-16 px-6 md:p-24 flex flex-col justify-center order-2 md:order-1 md:h-screen md:sticky md:top-0 bg-zinc-900">
<div className="md:max-w-none md:mx-0 w-full max-w-xs mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 mb-6 text-emerald-400/80">
<iconify-icon icon="lucide:waves" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-[0.25em] font-medium">
                Entspannung
              </span>
</div>
<h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
              Spa &amp; Wellness
            </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
              Als Gast bei Oma Ida genießen Sie exklusiven Zugang zum
              Wellnessbereich unseres Partnerhotels Viktoria Bachhaus. Nur
              wenige Schritte entfernt.
            </p>

<ul className="space-y-4">
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Finnische Sauna
              </li>
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Dampfbad
              </li>
<li className="flex items-center text-zinc-300 font-light tracking-wide">
<span className="w-4 h-px bg-zinc-600 mr-4"></span>
                Ruheraum
              </li>
</ul>
<p className="text-[10px] text-zinc-500 mt-6 leading-relaxed font-light">
              * Nutzung des Wellnessbereich des Designhotel Viktoria nach
              Verfügbarkeit für maximal 4 Zimmer pro Tag reservierbar.
              Mindestalter 16 Jahre, wenden Sie sich bitte an die Rezeption
              während ihres Aufenthalts.
            </p>
</div>
</div>

<div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2 relative overflow-hidden border-l border-white/5">
<img alt="Spa Wellness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 saturate-[1.3] brightness-[1.05] contrast-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db46ce09-9692-4c89-b15d-2b14b1e1119d_3840w.jpg"/>
<div className="group-hover:bg-black/60 transition-colors duration-700 bg-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</section>

</main>

<section className="py-40 bg-zinc-900 relative overflow-hidden border-t border-white/5">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-4xl text-zinc-800 mb-8 mx-auto" icon="lucide:quote"></iconify-icon>
<p className="md:text-5xl leading-tight text-2xl italic text-zinc-300 font-serif mb-10">
          "Ein Glas Rotwein in der Hand, die Wärme des Kamins auf der Haut – so
          fühlt sich Ankommen bei Oma Ida an."
        </p>
<div className="flex items-center justify-center gap-4">
<span className="h-px w-12 bg-zinc-800"></span>
<span className="text-xs uppercase tracking-widest text-zinc-500">
            Das Oma Ida Gefühl
          </span>
<span className="h-px w-12 bg-zinc-800"></span>
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
<div className="md:hidden relative w-full flex overflow-hidden mt-8 group">
<div className="absolute z-10 left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none"></div>
<div className="absolute z-10 right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>
<div className="flex shrink-0 animate-[infinite-scroll_25s_linear_infinite] min-w-full group-active:[animation-play-state:paused] group-hover:[animation-play-state:paused] gap-8 pr-4 pl-4 items-center justify-around">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150 shrink-0" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="opacity-70 w-auto h-14 object-contain invert brightness-0 scale-125 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-8 object-contain invert brightness-0 shrink-0" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="opacity-70 w-auto h-6 object-contain invert brightness-0 scale-75 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
<div className="flex shrink-0 animate-[infinite-scroll_25s_linear_infinite] min-w-full group-active:[animation-play-state:paused] group-hover:[animation-play-state:paused] gap-8 px-4 items-center justify-around">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150 shrink-0" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="opacity-70 w-auto h-14 object-contain invert brightness-0 scale-125 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-8 object-contain invert brightness-0 shrink-0" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="opacity-70 w-auto h-6 object-contain invert brightness-0 scale-75 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
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
