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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
cream: {
50: '#FCFAF8',
100: '#F5F2ED',
200: '#EBE5DB',
},
stone: {
850: '#23201E',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const btn = document.getElementById('mobile-menu-btn');
          const menu = document.getElementById('mobile-menu');
          const iconOpen = document.getElementById('menu-icon-open');
          const iconClose = document.getElementById('menu-icon-close');
          const links = document.querySelectorAll('.mobile-link');

          function toggleMenu() {
              const isOpen = menu.classList.contains('opacity-100');
              if (isOpen) {
                  menu.classList.remove('opacity-100', 'pointer-events-auto');
                  menu.classList.add('opacity-0', 'pointer-events-none');
                  iconOpen.classList.remove('opacity-0', 'scale-50', '-rotate-90');
                  iconClose.classList.add('opacity-0', 'scale-50', 'rotate-90');
                  iconClose.classList.remove('opacity-100', 'scale-100', 'rotate-0');
              } else {
                  menu.classList.remove('opacity-0', 'pointer-events-none');
                  menu.classList.add('opacity-100', 'pointer-events-auto');
                  iconOpen.classList.add('opacity-0', 'scale-50', '-rotate-90');
                  iconClose.classList.remove('opacity-0', 'scale-50', 'rotate-90');
                  iconClose.classList.add('opacity-100', 'scale-100', 'rotate-0');
              }
          }

          if(btn) btn.addEventListener('click', toggleMenu);
          links.forEach(link => link.addEventListener('click', toggleMenu));
      });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-stone-200/40 transition-all duration-300">
<div className="md:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="font-serif text-2xl text-stone-850 tracking-tight relative z-[60]" href="#">
          Vendula
        </a>

<button className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center text-stone-850 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-3xl absolute transition-all duration-300" icon="solar:hamburger-menu-linear" id="menu-icon-open" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-3xl absolute transition-all duration-300 opacity-0 rotate-90 scale-50" icon="solar:close-circle-linear" id="menu-icon-close" strokeWidth="1.5"></iconify-icon>
</button>

<nav className="hidden md:flex items-center gap-10">
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#domu">
            Domů
          </a>
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#sluzby">
            Služby
          </a>
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#cenik">
            Ceník
          </a>
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#o-mne">
            O mně
          </a>
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#galerie">
            Galerie
          </a>
<a className="text-sm font-light text-stone-600 hover:text-stone-850 transition-colors" href="#kontakt">
            Kontakt
          </a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-stone-850 bg-transparent border border-stone-300 rounded-full hover:bg-stone-850 hover:text-white hover:border-stone-850 transition-all duration-500" href="#kontakt">
            Rezervovat
          </a>
</div>

<div className="fixed inset-0 bg-cream-50/98 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#domu">
            Domů
          </a>
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#sluzby">
            Služby
          </a>
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#cenik">
            Ceník
          </a>
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#o-mne">
            O mně
          </a>
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#galerie">
            Galerie
          </a>
<a className="mobile-link text-3xl font-serif text-stone-850 tracking-tight hover:text-stone-600 transition-colors" href="#kontakt">
            Kontakt
          </a>
<a className="mobile-link mt-8 px-8 py-4 text-sm font-medium text-white bg-stone-850 rounded-full shadow-xl hover:bg-stone-700 transition-colors" href="#kontakt">
            Rezervovat termín
          </a>
</div>
</div>
</header>

<section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col" id="domu">
<div className="relative flex-1 rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex items-center justify-center reveal-up">

<div className="absolute inset-0 z-0">
<img alt="Detail vlasů" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" style={{filter: 'brightness(0.95)'}}/>
</div>

<div className="z-10 backdrop-blur-[2px] bg-gradient-to-b from-cream-50/80 via-cream-50/40 to-cream-50/80 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-600 mb-6 block reveal-up delay-100">
            Prémiový vlasový styling
          </span>
<h1 className="sm:text-7xl md:text-8xl leading-none reveal-up delay-200 text-6xl text-stone-850 tracking-tight font-serif mb-6">
            Vendula Muczková
          </h1>
<h2 className="font-serif text-2xl sm:text-3xl text-stone-800 tracking-tight mb-6 font-light reveal-up delay-300">
            Kadeřnice s citem pro krásu a detail
          </h2>
<p className="text-base sm:text-lg font-light text-stone-600 mb-10 max-w-xl mx-auto leading-relaxed reveal-up delay-300">
            Profesionální péče o vlasy, moderní střihy, precizní barvení a zcela
            osobní přístup navržený pro každou ženu.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-stone-850 rounded-full hover:bg-stone-700 transition-colors duration-300 shadow-lg shadow-stone-900/10" href="#kontakt">
              Rezervovat termín
            </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-stone-850 bg-white/50 backdrop-blur-md rounded-full hover:bg-white border border-stone-200/50 transition-all duration-300" href="#sluzby">
              Zobrazit služby
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="o-mne">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-cream-200 rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
<img alt="Vendula při práci" className="relative z-10 w-full object-cover rounded-[2rem] aspect-[4/5] shadow-sm" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="flex flex-col justify-center">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-4 block">
              Příběh a vize
            </span>
<h2 className="font-serif text-4xl sm:text-5xl text-stone-850 tracking-tight mb-8">
              Krása spočívá ve zdraví a přirozenosti
            </h2>
<div className="space-y-6 text-base font-light text-stone-600 leading-relaxed">
<p>
                Jako profesionální kadeřnice věřím, že každý člověk má svou
                jedinečnou krásu. Mým cílem je tuto krásu podtrhnout a vytvořit
                účes, který bude nejen perfektně vypadat, ale také se snadno
                udržovat.
              </p>
<p className="">
                Ve svém salonu kladu maximální důraz na kvalitu používaných
                produktů a zdraví vašich vlasů. Neustále se vzdělávám v
                moderních technikách, abych vám mohla nabídnout ty nejlepší
                služby v oblasti střihů, barvení i celkové regenerace.
              </p>
<p>
                Zakládám si na klidné, příjemné atmosféře a osobním přístupu.
                Každá návštěva u mě by měla být chvílí relaxace jen pro vás.
              </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-stone-400" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-stone-850">
                  Moderní techniky
                </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-stone-400" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-stone-850">
                  Šetrné produkty
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-4 block">
            Nabídka péče
          </span>
<h2 className="font-serif text-4xl sm:text-5xl text-stone-850 tracking-tight mb-6">
            Služby na míru
          </h2>
<p className="text-sm font-light text-stone-500">
            Každá služba zahrnuje úvodní konzultaci, doporučení vhodné péče a
            závěrečný styling.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group p-8 rounded-[2rem] bg-cream-50 border border-stone-100/50 hover:bg-stone-50 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-stone-700" icon="solar:scissors-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight mb-3">
              Střih vlasů
            </h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mb-6">
              Precizní techniky pro dokonalý tvar, který respektuje přirozený
              růst vašich vlasů a rysy obličeje.
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-cream-50 border border-stone-100/50 hover:bg-stone-50 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-stone-700" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight mb-3">
              Barvení vlasů
            </h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mb-6">
              Šetrné barvy a zářivé odstíny. Od jemného tónování až po kompletní
              změnu image s důrazem na zdraví vlasu.
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-cream-50 border border-stone-100/50 hover:bg-stone-50 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-stone-700" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight mb-3">
              Balayage &amp; Melír
            </h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mb-6">
              Přirozené prosvětlení s plynulými přechody tónů pro dosažení
              moderního, na slunci zesvětleného vzhledu.
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-cream-50 border border-stone-100/50 hover:bg-stone-50 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-stone-700" icon="solar:droplet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight mb-3">
              Regenerační péče
            </h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mb-6">
              Hloubková výživa a rekonstrukce poškozených vlasů pomocí
              exkluzivních salonních kúr.
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-cream-50 border border-stone-100/50 hover:bg-stone-50 transition-all duration-500 hover:-translate-y-1 lg:col-span-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-stone-700" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight mb-3">
              Společenský styling
            </h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mb-6 max-w-xl">
              Elegantní foukaná, jemné vlny nebo slavnostní výčes pro svatby,
              plesy a jiné speciální události. Váš účes vydrží perfektní po celý
              den i noc.
            </p>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-cream-50 pt-24 pb-24" id="cenik">
<div className="lg:px-12 max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-4 block">
            Investice do krásy
          </span>
<h2 className="font-serif text-4xl sm:text-5xl text-stone-850 tracking-tight mb-6">
            Ceník služeb
          </h2>
<p className="text-sm font-light text-stone-500">
            Ceny úkonů se odvíjí od spotřeby materiálu a hustoty vlasů
            zákazníků.
          </p>
</div>
<div className="space-y-12 sm:space-y-16">

<div className="">
<h3 className="font-serif text-2xl text-stone-850 tracking-tight border-b border-stone-200/60 pb-4 mb-6">
              Střih &amp; Styling
            </h3>
<div className="space-y-4">
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Pánský střih
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  380,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Dámský střih
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  600,- – 900,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Foukaná, styling
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  400,- – 800,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Společenský účes
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 text-right">
                  od 700,-
                  <br/>
<span className="text-xs font-sans font-light text-stone-500">
                    záleží na náročnosti
                  </span>
</span>
</div>
</div>
</div>

<div className="">
<h3 className="font-serif text-2xl text-stone-850 tracking-tight border-b border-stone-200/60 pb-4 mb-6">
              Barvení &amp; Melír
            </h3>
<div className="space-y-4">
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Barvení – odrost
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  800,- – 1 500,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Barvení – celé délky
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  2 000,- – 2 500,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Melír – odrost
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  1 000,- – 1 900,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Melír – celé délky
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  2 000,- – 5 000,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Balayage
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  2 000,- – 2 800,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Airtouch
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  2 100,- – 3 000,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">Přeliv</span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  700,- – 1 600,-
                </span>
</div>
</div>
</div>

<div>
<h3 className="font-serif text-2xl text-stone-850 tracking-tight border-b border-stone-200/60 pb-4 mb-6">
              Péče
            </h3>
<div className="space-y-4">
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Hloubková regenerace
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  1 200,- – 2 000,-
                </span>
</div>
<div className="flex items-baseline justify-between">
<span className="text-base font-medium text-stone-800">
                  Regenerační kúra
                </span>
<div className="flex-1 mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-base font-serif text-stone-850 whitespace-nowrap">
                  250,- – 800,-
                </span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-stone-850 bg-white border border-stone-200/50 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-sm" href="#kontakt">
            Více informací
          </a>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="galerie">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-4 block">
              Portfolio
            </span>
<h2 className="font-serif text-4xl sm:text-5xl text-stone-850 tracking-tight">
              Inspirace &amp; Výsledky
            </h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-850 transition-colors group" href="https://instagram.com" target="_blank">
<span>Sledujte na Instagramu</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
<div className="col-span-2 md:col-span-1 row-span-2 overflow-hidden rounded-[2rem] group relative">
<img alt="Účes 1" className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6cedab6-6ec0-4445-a2d6-ebf475accf33_800w.png"/>
</div>
<div className="overflow-hidden rounded-[2rem] group relative">
<img alt="Účes 2" className="aspect-square group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b901f30e-b61b-40fe-a3ca-3aef09e64243_800w.png"/>
</div>
<div className="overflow-hidden rounded-[2rem] group relative">
<img alt="Účes 3" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0d3a45f-30ae-485f-b88a-b1ae24b9641c_800w.png"/>
</div>
<div className="col-span-2 md:col-span-3 overflow-hidden rounded-[2rem] group relative">
<img alt="Účes 6" className="w-full h-full object-cover aspect-[21/9] md:aspect-[3/1] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79b4462e-d851-439c-a565-253550f320bd_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-cream-100 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl sm:text-4xl text-stone-850 tracking-tight text-center mb-16">
          Slova mých klientek
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-sm">
<iconify-icon className="text-3xl text-cream-200 mb-6 block" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light text-stone-600 mb-8 leading-relaxed">
              "K Vendule chodím už přes rok a nikdy jsem neodešla zklamaná. Vždy
              přesně odhadne, co mým vlasům prospěje, a střih perfektně sedí i
              po týdnech bez velké námahy."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center font-serif text-stone-700 font-medium text-sm">
                K
              </div>
<span className="text-sm font-medium text-stone-850">Klára M.</span>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm">
<iconify-icon className="text-3xl text-cream-200 mb-6 block" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light text-stone-600 mb-8 leading-relaxed">
              "Nejlepší balayage, jakou jsem kdy měla! Přechody jsou
              neuvěřitelně jemné a přirozené. Navíc je v salonu krásný klid a
              pohoda, takže si vždy skvěle odpočinu."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center font-serif text-stone-700 font-medium text-sm">
                T
              </div>
<span className="text-sm font-medium text-stone-850">Tereza S.</span>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm">
<iconify-icon className="text-3xl text-cream-200 mb-6 block" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light text-stone-600 mb-8 leading-relaxed">
              "Zachránila mi vlasy po nepovedeném domácím barvení. Její
              regenerační péče je malý zázrak. Opravdu profesionální a hlavně
              lidský přístup. Vřele doporučuji."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center font-serif text-stone-700 font-medium text-sm">
                P
              </div>
<span className="text-sm font-medium text-stone-850">Petra L.</span>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-white pt-24 pb-24" id="kontakt">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400 mb-4 block">
              Rezervace
            </span>
<h2 className="font-serif text-4xl sm:text-5xl text-stone-850 tracking-tight mb-8">
              Spojme se
            </h2>
<p className="text-base font-light text-stone-500 max-w-md mb-12">
              Máte dotaz ohledně služeb, nebo se rovnou chcete objednat? Napište
              mi zprávu nebo zavolejte. Těším se na vaši návštěvu.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-stone-400" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">
                    Telefon
                  </span>
<a className="hover:text-stone-600 transition-colors text-lg font-medium text-stone-850" href="/tel:+4201734737438">
                    +420 734 737 438
                  </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-stone-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">
                    E-mail
                  </span>
<a className="hover:text-stone-600 transition-colors text-lg font-medium text-stone-850" href="/mailto:kadernicevendy@seznam.cz">
                    kadernicevendy@seznam.cz
                  </a>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="mt-1">
<iconify-icon className="text-2xl text-stone-400" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">
                    Sociální sítě
                  </span>
<a className="hover:text-stone-600 transition-colors text-lg font-medium text-stone-850" href="https://www.instagram.com/vendyvlasy/">
                    @vendyvlasy
                  </a>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="mt-1">
<iconify-icon className="text-2xl text-stone-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">
                    Adresa salonu
                  </span>
<a className="hover:text-stone-600 transition-colors block leading-snug text-lg font-medium text-stone-850" href="https://maps.google.com/?q=Kasárenská+68/4,+746+01+Opava" target="_blank">
                    Kasárenská 68/4 746 01 Opava
                  </a>
<a className="hover:text-stone-600 transition-colors block leading-snug text-lg font-medium text-stone-850" href="https://maps.google.com/?q=Kasárenská+68/4,+746+01+Opava" target="_blank">
                    IČO: 05208963
                  </a>
</div>
</div>
</div>
</div>

<div className="bg-cream-50 p-8 sm:p-12 rounded-[2.5rem]">
<form className="space-y-8">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 pl-1 block" htmlFor="name">
                  Jméno a příjmení
                </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-300 rounded-none px-1 py-3 text-sm text-stone-850 focus:outline-none focus:border-stone-850 transition-colors" id="name" placeholder="Vaše jméno" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 pl-1 block" htmlFor="phone">
                    Telefon
                  </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-300 rounded-none px-1 py-3 text-sm text-stone-850 focus:outline-none focus:border-stone-850 transition-colors" id="phone" placeholder="+420" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 pl-1 block" htmlFor="email">
                    E-mail
                  </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-300 rounded-none px-1 py-3 text-sm text-stone-850 focus:outline-none focus:border-stone-850 transition-colors" id="email" placeholder="vas@email.cz" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 pl-1 block" htmlFor="service">
                  Služba
                </label>
<div className="relative">
<select className="w-full appearance-none bg-transparent border-b border-stone-300 rounded-none px-1 py-3 text-sm text-stone-850 focus:outline-none focus:border-stone-850 transition-colors cursor-pointer" id="service">
<option disabled="" selected="" value="">
                      Vyberte službu, o kterou máte zájem
                    </option>
<option value="cut">Střih vlasů</option>
<option value="color">Barvení</option>
<option value="balayage">Balayage</option>
<option value="care">Regenerační péče</option>
<option value="style">Styling</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 pl-1 block" htmlFor="message">
                  Zpráva nebo požadovaný termín
                </label>
<textarea className="w-full appearance-none bg-transparent border-b border-stone-300 rounded-none px-1 py-3 text-sm text-stone-850 focus:outline-none focus:border-stone-850 transition-colors resize-none" id="message" placeholder="Vaše zpráva..." rows="3"></textarea>
</div>
<button className="w-full bg-stone-850 text-white rounded-full py-4 text-sm font-medium hover:bg-stone-700 transition-colors duration-300 mt-4" type="button">
                Odeslat poptávku
              </button>
</form>
</div>
</div>
<div className="mt-16 sm:mt-24 rounded-[2.5rem] overflow-hidden shadow-sm h-72 sm:h-[28rem] bg-cream-50 relative border border-stone-200/50 z-10">
<div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(35,32,30,0.05)] z-10"></div>
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://maps.google.com/maps?q=Kas%C3%A1rensk%C3%A1%2068%2F4,%20Opava%20746%2001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0', filter: 'grayscale(0.8) sepia(0.1) opacity(0.9)'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-cream-50 border-stone-200/50 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
<h2 className="font-serif text-3xl text-stone-850 tracking-tight mb-8">
          Vendula
        </h2>
<nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#domu">
            Domů
          </a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#sluzby">
            Služby
          </a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#cenik">
            Ceník
          </a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#o-mne">
            O mně
          </a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#galerie">
            Galerie
          </a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-850 transition-colors uppercase tracking-widest" href="#kontakt">
            Kontakt
          </a>
</nav>
<div className="flex items-center gap-6 mb-12 text-stone-400">
<a className="hover:text-stone-850 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="hover:text-stone-850 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<p className="text-xs font-light text-stone-400">
          © 2024 Vendula. Všechna práva vyhrazena. Design pro moderní ženy.
        </p>
</div>
</footer>


    </>
  );
}
