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



        // Initialize Lucide Icons
        lucide.createIcons({ strokeWidth: 1.5 });

        // Simple Router function
        function navigateTo(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
            } else {
                // Fallback to home if ID not found
                document.getElementById('home').classList.add('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Close mobile menu if it's open
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const body = document.body;
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menu.classList.add('hidden');
                body.style.overflow = '';
            }
        }

        // Toggle Search Overlay
        function toggleSearch() {
            const overlay = document.getElementById('search-overlay');
            const input = overlay.querySelector('input');
            
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
                setTimeout(() => input.focus(), 50); // Focus input after render
            } else {
                overlay.classList.add('hidden');
            }
        }

        // Close search on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('search-overlay').classList.contains('hidden')) {
                toggleSearch();
            }
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
      

<header className="fixed z-50 bg-white/80 w-full border-gray-100 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group focus:outline-none" href="#" onclick="navigateTo('home'); return false;">
<div className="flex bg-center text-lg font-medium text-white tracking-tight w-32 h-10 rounded-xl shadow-sm items-center overflow-hidden">
<img alt="Logo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#" onclick="navigateTo('home'); return false;">Home</a>
<a className="text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#" onclick="navigateTo('nieuws'); return false;">Nieuws</a>
<a className="text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#" onclick="navigateTo('evenementen'); return false;">Evenementen</a>

<div className="relative group">
<button className="flex items-center gap-1.5 text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors py-8">
                        Feestvereniging <i className="w-4 h-4 text-gray-400 group-hover:text-emerald-700 transition-colors" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-lg rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-hub'); return false;">Overzicht Feestvereniging</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-agenda'); return false;">Agenda / Evenementen</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-nieuws'); return false;">Nieuws</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-bestuur'); return false;">Huidig bestuur</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-koningen'); return false;">(Oud-)Koningen &amp; Koninginnen</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('fv-contact'); return false;">Contact Feestvereniging</a>
</div>
</div>

<div className="relative group">
<button className="flex items-center gap-1.5 text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors py-8">
                        Contactgroep <i className="w-4 h-4 text-gray-400 group-hover:text-emerald-700 transition-colors" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-lg rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-hub'); return false;">Overzicht Contactgroep</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-nieuws'); return false;">Nieuws</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-over'); return false;">Over de stichting</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-werkgebied'); return false;">Werkgebied</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-bestuur'); return false;">Huidig bestuur</a>
<a className="block px-5 py-2.5 text-base text-gray-600 hover:bg-gray-50 hover:text-emerald-700 font-medium" href="#" onclick="navigateTo('cg-contact'); return false;">Contact Contactgroep</a>
<div className="border-t border-gray-100 my-1"></div>
<a className="block px-5 py-2.5 text-base text-emerald-700 hover:bg-emerald-50 font-medium flex items-center justify-between" href="#" onclick="navigateTo('cg-bericht'); return false;">Bericht sturen <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
<a className="text-base font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#" onclick="navigateTo('over'); return false;">Over Holterhoek</a>
</nav>
<div className="hidden lg:flex items-center gap-4">
<button aria-label="Zoeken" className="p-2.5 text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors" onclick="toggleSearch()">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium text-base hover:bg-gray-800 transition-colors shadow-sm" href="#" onclick="navigateTo('contact'); return false;">
                    Contact
                </a>
</div>

<button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-sm py-6 px-6 lg:px-8" id="search-overlay">
<div className="max-w-3xl mx-auto flex items-center gap-4">
<i className="w-6 h-6 text-gray-400" data-lucide="search"></i>
<input className="w-full bg-transparent border-none focus:ring-0 text-xl font-medium placeholder-gray-400" placeholder="Zoek in Nieuws en Evenementen..." type="text"/>
<button className="p-2 text-gray-400 hover:text-gray-900 rounded-full" onclick="toggleSearch()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
</div>
</header>

<div className="hidden fixed inset-0 bg-white z-40 overflow-y-auto pt-24 pb-12 px-6" id="mobile-menu">
<nav className="flex flex-col gap-6">
<a className="text-2xl font-medium tracking-tight text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<a className="text-2xl font-medium tracking-tight text-gray-900" href="#" onclick="navigateTo('nieuws'); return false;">Nieuws</a>
<a className="text-2xl font-medium tracking-tight text-gray-900" href="#" onclick="navigateTo('evenementen'); return false;">Evenementen</a>
<div className="border-t border-gray-100 pt-6">
<div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Feestvereniging</div>
<div className="flex flex-col gap-4 pl-4 border-l-2 border-emerald-100">
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-hub'); return false;">Overzicht</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-agenda'); return false;">Agenda</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-nieuws'); return false;">Nieuws</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-bestuur'); return false;">Bestuur</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-koningen'); return false;">(Oud-)Koningen</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('fv-contact'); return false;">Contact</a>
</div>
</div>
<div className="border-t border-gray-100 pt-6">
<div className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Contactgroep</div>
<div className="flex flex-col gap-4 pl-4 border-l-2 border-emerald-100">
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-hub'); return false;">Overzicht</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-nieuws'); return false;">Nieuws</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-over'); return false;">Over stichting</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-werkgebied'); return false;">Werkgebied</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-bestuur'); return false;">Bestuur</a>
<a className="text-lg font-medium text-gray-600" href="#" onclick="navigateTo('cg-contact'); return false;">Contact</a>
<a className="text-lg font-medium text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl inline-block w-max" href="#" onclick="navigateTo('cg-bericht'); return false;">Bericht sturen</a>
</div>
</div>
<div className="border-t border-gray-100 pt-6">
<a className="text-2xl font-medium tracking-tight text-gray-900 block mb-6" href="#" onclick="navigateTo('over'); return false;">Over Holterhoek</a>
<a className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium text-lg w-full text-center inline-block" href="#" onclick="navigateTo('contact'); return false;">Contact opnemen</a>
</div>
</nav>
</div>

<main className="flex-grow pt-20">



<section className="page-section active" id="home">

<div className="relative w-full overflow-hidden bg-gray-900 py-20 lg:py-32 border-b border-gray-200">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center bg-gray-950 opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea4a400a-ca82-42d4-a7d8-64625d5e4945_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/20 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
                        Nieuwe website
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-tight drop-shadow-sm">
                        Welkom op holterhoek.eu!
                    </h1>
<p className="sm:text-xl leading-relaxed text-lg font-normal text-zinc-50 max-w-2xl mb-12 drop-shadow-sm">
                        De nieuwe website van de Holterhoek. Bekijk op deze website de informatie van de Feestvereniging en de Contactgroep.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2" onclick="navigateTo('evenementen')">
                            Bekijk aankomende evenementen <i className="w-5 h-5" data-lucide="calendar"></i>
</button>
<button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium text-base hover:bg-white/20 transition-all shadow-sm flex items-center justify-center gap-2" onclick="navigateTo('nieuws')">
                            Lees het laatste nieuws
                        </button>
</div>
</div>
</div>

<div className="bg-gray-50 opacity-60 border-gray-100 border-b mt-[-1px] pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-emerald-200 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('evenementen'); return false;">
<div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="party-popper"></i>
</div>
<span className="text-base font-medium text-gray-900">Carnaval</span>
</a>
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('evenementen'); return false;">
<div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="trophy"></i>
</div>
<span className="text-base font-medium text-gray-900">Volleybal</span>
</a>
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-amber-200 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('evenementen'); return false;">
<div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<span className="text-base font-medium text-gray-900">Vogelschieten</span>
</a>
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('evenementen'); return false;">
<div className="w-12 h-12 bg-indigo-50 text-indigo-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bike"></i>
</div>
<span className="text-base font-medium text-gray-900">Fietssterrit</span>
</a>
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-rose-200 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('evenementen'); return false;">
<div className="w-12 h-12 bg-rose-50 text-rose-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="tent"></i>
</div>
<span className="text-base font-medium text-gray-900">Kermis</span>
</a>
<a className="group p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-center flex flex-col items-center gap-4 shadow-sm" href="#" onclick="navigateTo('contact'); return false;">
<div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<span className="text-base font-medium text-gray-900">Contact</span>
</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-8">

<div className="flex flex-col gap-12">
<div className="grid sm:grid-cols-2 gap-6">

<div className="bg-emerald-700 rounded-3xl p-8 text-white relative overflow-hidden group">
<div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
<i className="w-8 h-8 text-emerald-200 mb-6 relative z-10" data-lucide="users"></i>
<h3 className="text-2xl font-medium tracking-tight mb-3 relative z-10">Feestvereniging</h3>
<p className="text-emerald-100 text-lg mb-8 relative z-10">Activiteiten en evenementen voor jong en oud.</p>
<button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all relative z-10" onclick="navigateTo('fv-hub')">Ontdek meer <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>

<div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
<div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
<i className="w-8 h-8 text-gray-400 mb-6 relative z-10" data-lucide="building-2"></i>
<h3 className="text-2xl font-medium tracking-tight mb-3 relative z-10">Contactgroep</h3>
<p className="text-gray-400 text-lg mb-8 relative z-10">Belangenbehartiging en leefbaarheid Holterhoek.</p>
<button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all relative z-10" onclick="navigateTo('cg-hub')">Ontdek meer <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Laatste nieuws</h2>
<button className="text-emerald-700 font-medium hover:text-emerald-800 text-base flex items-center gap-1.5" onclick="navigateTo('nieuws')">Alles bekijken <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
<div className="flex flex-col gap-4">

<a className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6" href="#" onclick="navigateTo('nieuws-detail'); return false;">
<div className="flex-grow">
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">Feestvereniging</span>
<span className="text-sm text-gray-500">17 Feb 2026</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">Fietssterrit 31 Mei 2026</h3>
<p className="text-gray-600 text-lg line-clamp-2">Om alvast te noteren in de agenda, de jaarlijkse fietssterrit komt er weer aan!</p>
</div>
</a>

<a className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6" href="#" onclick="navigateTo('nieuws-detail'); return false;">
<div className="flex-grow">
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium">Contactgroep</span>
<span className="text-sm text-gray-500">07 Jun 2024</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">Informatieavond 'Wonen in Zwolle &amp; Holterhoek'</h3>
<p className="text-gray-600 text-lg line-clamp-2">Belangrijke bijeenkomst over woningbouw en leefbaarheid in onze omgeving.</p>
</div>
</a>

<a className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6" href="#" onclick="navigateTo('nieuws-detail'); return false;">
<div className="flex-grow">
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">Feestvereniging</span>
<span className="text-sm text-gray-500">02 Jan 2026</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">Carnaval Holtkleuvers 2026</h3>
<p className="text-gray-600 text-lg line-clamp-2">Het programma voor de carnaval is bekend. Bereid je voor op een fantastisch weekend.</p>
</div>
</a>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Agenda</h2>
<button aria-label="Naar agenda" className="text-emerald-700 p-2 hover:bg-emerald-50 rounded-full transition-colors" onclick="navigateTo('evenementen')">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex flex-col gap-6">

<div className="flex gap-6 group cursor-pointer" onclick="navigateTo('evenementen')">
<div className="flex-shrink-0 w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
<span className="text-sm font-medium uppercase tracking-wider">Mei</span>
<span className="text-2xl font-semibold tracking-tight leading-none mt-1">31</span>
</div>
<div className="flex flex-col justify-center border-b border-gray-100 pb-6 w-full group-last:border-0 group-last:pb-0">
<span className="text-sm text-gray-500 mb-1">Feestvereniging • 13:00 - 17:00</span>
<h4 className="text-xl font-medium tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">Fietssterrit 2026</h4>
<span className="text-base text-emerald-700 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">+ info</span>
</div>
</div>

<div className="flex gap-6 group cursor-pointer" onclick="navigateTo('evenementen')">
<div className="flex-shrink-0 w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
<span className="text-sm font-medium uppercase tracking-wider">Aug</span>
<span className="text-2xl font-semibold tracking-tight leading-none mt-1">01</span>
</div>
<div className="flex flex-col justify-center border-b border-gray-100 pb-6 w-full group-last:border-0 group-last:pb-0">
<span className="text-sm text-gray-500 mb-1">Feestvereniging • Vanaf 08:30</span>
<h4 className="text-xl font-medium tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors">Kermis Holterhoek 2026</h4>
<span className="text-base text-gray-500 mt-1 flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="map-pin"></i> Grenszicht, Vredenseweg 2</span>
<span className="text-base text-emerald-700 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">+ info</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-100">
<button className="w-full bg-gray-50 text-gray-700 border border-gray-200 px-6 py-4 rounded-2xl font-medium text-lg hover:bg-gray-100 transition-colors flex items-center justify-between group" onclick="navigateTo('contact')">
                            Iets organiseren? Neem contact op
                            <i className="w-5 h-5 text-gray-400 group-hover:text-gray-700" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>



<section className="page-section" id="nieuws">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Nieuws</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Nieuws</h1>

<div className="flex flex-col sm:flex-row gap-4 mb-12">
<div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-white text-gray-900 font-medium shadow-sm text-base transition-all">Alles</button>
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 font-medium text-base transition-all">Feestvereniging</button>
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 font-medium text-base transition-all">Contactgroep</button>
</div>
<div className="relative flex-grow">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow" placeholder="Zoeken in nieuws..." type="text"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-12">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col cursor-pointer" onclick="navigateTo('nieuws-detail')">
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Feestvereniging</span>
<span className="text-sm text-gray-500">17 Feb 2026</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Fietssterrit 31 Mei 2026</h2>
<p className="text-gray-600 text-lg mb-6 flex-grow">Om alvast te noteren in de agenda. Meer informatie volgt spoedig.</p>
<span className="text-emerald-700 font-medium text-base flex items-center gap-1">Lees meer <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col cursor-pointer" onclick="navigateTo('nieuws-detail')">
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Feestvereniging</span>
<span className="text-sm text-gray-500">02 Jan 2026</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Carnaval Holtkleuvers 2026</h2>
<p className="text-gray-600 text-lg mb-6 flex-grow">Terugblik op een gezellige avond en vooruitblik naar het nieuwe jaar.</p>
<span className="text-emerald-700 font-medium text-base flex items-center gap-1">Lees meer <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col cursor-pointer" onclick="navigateTo('nieuws-detail')">
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium">Contactgroep</span>
<span className="text-sm text-gray-500">07 Jun 2024</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Informatieavond 'Wonen in Zwolle &amp; Holterhoek'</h2>
<p className="text-gray-600 text-lg mb-6 flex-grow">Verslag van de avond met de gemeente over bestemmingsplannen.</p>
<span className="text-emerald-700 font-medium text-base flex items-center gap-1">Lees meer <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col cursor-pointer" onclick="navigateTo('nieuws-detail')">
<div className="flex items-center justify-between mb-4">
<span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">Feestvereniging</span>
<span className="text-sm text-gray-500">28 Dec 2025</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Jaarvergadering Volksfeestvereniging Holterhoek 2026</h2>
<p className="text-gray-600 text-lg mb-6 flex-grow">Uitnodiging en agenda voor de jaarlijkse ledenvergadering.</p>
<span className="text-emerald-700 font-medium text-base flex items-center gap-1">Lees meer <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>

<div className="flex items-center justify-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" disabled="">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-700 text-white font-medium text-base">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 font-medium text-base hover:bg-gray-50 transition-colors">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 font-medium text-base hover:bg-gray-50 transition-colors">3</button>
<span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 font-medium text-base hover:bg-gray-50 transition-colors">6</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>



<section className="page-section" id="nieuws-detail">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('nieuws'); return false;">Nieuws</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium truncate">Nieuwsbrief #4 Contactgroep</span>
</nav>
<div className="flex items-center gap-4 mb-6">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-sm font-medium">Contactgroep</span>
<span className="text-base text-gray-500">24 December 2021</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">Nieuwsbrief #4 Contactgroep Holterhoek december 2021</h1>
<div className="prose prose-lg prose-gray max-w-none mb-12 text-gray-600 leading-relaxed">
<p>Beste bewoners,</p>
<p>Hierbij de vierde nieuwsbrief van de Contactgroep Holterhoek. Er is weer veel gebeurd in de afgelopen periode en we praten jullie graag bij over de laatste ontwikkelingen rondom de KPN mast en andere leefbaarheidsprojecten.</p>
<p>Zoals besproken tijdens de laatste overleggen, zijn er enkele schetsen gemaakt. U kunt deze onderaan dit bericht bekijken.</p>
<p>Met vriendelijke groet,<br/>Bestuur Stichting Contactgroep Holterhoek 😊</p>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
<h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-gray-400" data-lucide="paperclip"></i> Bijlagen
                    </h3>
<div className="flex flex-col gap-3">
<a className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#">
<span className="text-base font-medium text-gray-700 group-hover:text-emerald-700">Bijlage 1: KPN Antenne schets</span>
<span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 group-hover:bg-emerald-50 group-hover:text-emerald-700"><i className="w-4 h-4" data-lucide="download"></i> Download</span>
</a>
<a className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#">
<span className="text-base font-medium text-gray-700 group-hover:text-emerald-700">Bijlage 2: Brochure alles over antennes</span>
<span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 group-hover:bg-emerald-50 group-hover:text-emerald-700"><i className="w-4 h-4" data-lucide="download"></i> Download</span>
</a>
<a className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#">
<span className="text-base font-medium text-gray-700 group-hover:text-emerald-700">Lees volledige nieuwsbrief</span>
<span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 group-hover:bg-emerald-50 group-hover:text-emerald-700"><i className="w-4 h-4" data-lucide="external-link"></i> Bekijk nieuwsbrief</span>
</a>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex items-center justify-between">
<button className="text-gray-600 font-medium text-base hover:text-gray-900 flex items-center gap-2" onclick="navigateTo('nieuws')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Terug naar overzicht
                    </button>
</div>
</div>
</section>



<section className="page-section" id="evenementen">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Evenementen</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Agenda &amp; Evenementen</h1>

<div className="flex flex-col md:flex-row justify-between gap-6 mb-12 border-b border-gray-200 pb-6">
<div className="flex gap-8">
<button className="text-lg font-medium text-emerald-700 border-b-2 border-emerald-700 pb-6 -mb-[26px]">Aankomend</button>
<button className="text-lg font-medium text-gray-500 hover:text-gray-900 pb-6 -mb-[26px]">Afgelopen</button>
</div>
<div className="flex gap-3">
<select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none pr-10 relative">
<option>Alle organisatoren</option>
<option>Feestvereniging</option>
<option>Contactgroep</option>
</select>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center hover:shadow-md transition-shadow">
<div className="flex-shrink-0 w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center text-emerald-800">
<span className="text-base font-medium uppercase tracking-wider">Mei</span>
<span className="text-3xl font-semibold tracking-tight leading-none mt-1">31</span>
</div>
<div className="flex-grow">
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">Feestvereniging</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Fietssterrit 2026</h2>
<div className="flex flex-wrap gap-4 text-gray-600 text-base">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="clock"></i> Zondag, 13:00 - 17:01</span>
</div>
</div>
<div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
<button className="w-full sm:w-auto bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
                                + Info
                            </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center hover:shadow-md transition-shadow">
<div className="flex-shrink-0 w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center justify-center text-emerald-800">
<span className="text-base font-medium uppercase tracking-wider">Aug</span>
<span className="text-3xl font-semibold tracking-tight leading-none mt-1">01</span>
</div>
<div className="flex-grow">
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">Feestvereniging</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Kermis Holterhoek 2026</h2>
<p className="text-gray-600 text-lg mb-3 line-clamp-2">De gezellige jaarlijkse kermis in de Holterhoek. Dit jaar op zaterdag 1 en zondag 2 Augustus 2026. Programma volgt.</p>
<div className="flex flex-wrap gap-4 text-gray-500 text-base">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="clock"></i> Zat 08:30 - 23:59</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="map-pin"></i> Grenszicht, Vredenseweg 2, Eibergen</span>
</div>
</div>
<div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
<button className="w-full sm:w-auto bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
                                + Info
                            </button>
</div>
</div>
</div>
</div>
</section>




<section className="page-section" id="fv-hub">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Feestvereniging</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Volksfeestvereniging Holterhoek</h1>
<p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">De Volksfeestvereniging Holterhoek organiseert jaarlijks activiteiten en evenementen voor de Holterhoek.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('fv-agenda'); return false;">
<i className="w-6 h-6 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" data-lucide="calendar"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Agenda</h3>
<p className="text-gray-500 text-base">Bekijk aankomende evenementen.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('fv-nieuws'); return false;">
<i className="w-6 h-6 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" data-lucide="newspaper"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Nieuws</h3>
<p className="text-gray-500 text-base">Laatste updates van het bestuur.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('fv-bestuur'); return false;">
<i className="w-6 h-6 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" data-lucide="users"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Huidig bestuur</h3>
<p className="text-gray-500 text-base">Wie zit er in het bestuur?</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('fv-koningen'); return false;">
<i className="w-6 h-6 text-amber-500 mb-4 group-hover:scale-110 transition-transform" data-lucide="crown"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Koningen &amp; Koninginnen</h3>
<p className="text-gray-500 text-base">Historisch overzicht (oud-)koningen.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group sm:col-span-2 lg:col-span-1" href="#" onclick="navigateTo('fv-contact'); return false;">
<i className="w-6 h-6 text-emerald-700 mb-4 group-hover:scale-110 transition-transform" data-lucide="mail"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Contact</h3>
<p className="text-gray-500 text-base">Stuur de feestvereniging een bericht.</p>
</a>
</div>
</div>
</section>

<section className="page-section" id="fv-bestuur">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('fv-hub'); return false;">Feestvereniging</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Huidig bestuur</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Huidig bestuur</h1>
<div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
<ul className="divide-y divide-gray-100">
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Roy Hogemans</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Voorzitter</span>
</li>
<li className="px-8 py-5 flex flex-wrap items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Marilke Reith</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-right">Secretariaat + Penningmeester</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Gerie Overkamp</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Jeroen Koning</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Marieke Grootholt</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Anita Maarschalkerweerd</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Rudi Geverinck</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Vivian Heutinck</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Maikel Roerdink</span>
</li>
</ul>
</div>
</div>
</section>

<section className="page-section" id="fv-koningen">
<div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('fv-hub'); return false;">Feestvereniging</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">(Oud-)Koningen &amp; Koninginnen</span>
</nav>
<div className="flex items-center justify-between mb-8">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">Erelijst</h1>
</div>
<div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex items-start gap-3 mb-8 border border-blue-100">
<i className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" data-lucide="info"></i>
<p className="text-base font-medium">Staat er een foutje in de lijst? Laat het ons weten via het <a className="underline hover:text-blue-900" href="#" onclick="navigateTo('fv-contact'); return false;">contactformulier</a>.</p>
</div>
<div className="relative mb-6">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Zoek op naam of jaar..." type="text"/>
</div>
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Naam</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Aantal keer</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Jaar/Jaren</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-lg">
<tr className="hover:bg-gray-50">
<td className="py-4 px-6 font-medium text-gray-900">Gait te Focht</td>
<td className="py-4 px-6 text-gray-600">1x</td>
<td className="py-4 px-6 text-gray-600">1926</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 px-6 font-medium text-gray-900">Hendrik Nijrolder</td>
<td className="py-4 px-6 text-gray-600">6x</td>
<td className="py-4 px-6 text-gray-600">1950-1954-1965-1967-1982-1984</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 px-6 font-medium text-gray-900">Dinant Roerdink</td>
<td className="py-4 px-6 text-gray-600">2x</td>
<td className="py-4 px-6 text-gray-600">1999-1980</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-4 px-6 font-medium text-gray-900">Bennie Penterman</td>
<td className="py-4 px-6 text-gray-600">3x</td>
<td className="py-4 px-6 text-gray-600">2000-1966-1992</td>
</tr>
<tr className="hover:bg-gray-50 bg-amber-50/30">
<td className="py-4 px-6 font-medium text-gray-900 flex items-center gap-2">Gerben Roerdink <i className="w-4 h-4 text-amber-500" data-lucide="crown"></i></td>
<td className="py-4 px-6 text-gray-600">-</td>
<td className="py-4 px-6 text-gray-900 font-medium">2025 (huidig)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="page-section" id="fv-contact">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('fv-hub'); return false;">Feestvereniging</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Contact</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Contactgegevens Feestvereniging</h1>
<p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Voor vragen groot of klein moet u bij ons zijn en dat kan op email adres <a className="text-emerald-700 hover:underline" href="mailto:feestvereniging@holterhoek.eu">feestvereniging@holterhoek.eu</a> of maak gebruik van onderstaand formulier.
                </p>
<div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm">
<form className="flex flex-col gap-6" onsubmit="event.preventDefault(); alert('Bedankt! We nemen zo snel mogelijk contact met u op.'); this.reset();">
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Naam <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">E-mail <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Telefoon <span className="text-gray-400 font-normal">(optioneel)</span></label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Voorkeur contact</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="fv_pref" type="radio" value="email"/>
<div className="px-5 py-2.5 rounded-xl border border-gray-200 text-base text-gray-600 peer-checked:border-emerald-600 peer-checked:text-emerald-800 peer-checked:bg-emerald-50 transition-colors font-medium">E-mail</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="fv_pref" type="radio" value="telefoon"/>
<div className="px-5 py-2.5 rounded-xl border border-gray-200 text-base text-gray-600 peer-checked:border-emerald-600 peer-checked:text-emerald-800 peer-checked:bg-emerald-50 transition-colors font-medium">Telefoon</div>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Uw bericht <span className="text-red-500">*</span></label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white resize-y" required="" rows="5"></textarea>
</div>
<div className="pt-4">
<button className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium text-lg hover:bg-emerald-800 transition-colors w-full sm:w-auto shadow-sm" type="submit">
                                Versturen
                            </button>
</div>
</form>
</div>
</div>
</section>




<section className="page-section" id="cg-hub">
<div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Contactgroep</span>
</nav>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
<div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Stichting Contactgroep Holterhoek</h1>
<p className="text-xl text-gray-600 max-w-2xl leading-relaxed">Stichting Contactgroep Holterhoek behartigt de algemene belangen van bewoners van de buurtschap Holterhoek en werkt samen met de gemeente Berkelland aan leefbaarheid en woonklimaat.</p>
</div>
<button className="flex-shrink-0 bg-emerald-700 text-white px-6 py-3.5 rounded-full font-medium text-base hover:bg-emerald-800 transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap" onclick="navigateTo('cg-bericht')">
<i className="w-5 h-5" data-lucide="message-square"></i> Bericht voor Contactgroep
                    </button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('cg-nieuws'); return false;">
<i className="w-6 h-6 text-gray-900 mb-4 group-hover:scale-110 transition-transform" data-lucide="newspaper"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Nieuws</h3>
<p className="text-gray-500 text-base">Laatste updates en nieuwsbrieven.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('cg-over'); return false;">
<i className="w-6 h-6 text-gray-900 mb-4 group-hover:scale-110 transition-transform" data-lucide="info"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Over de stichting</h3>
<p className="text-gray-500 text-base">Doel, visie en achtergrond.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('cg-werkgebied'); return false;">
<i className="w-6 h-6 text-gray-900 mb-4 group-hover:scale-110 transition-transform" data-lucide="map"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Werkgebied</h3>
<p className="text-gray-500 text-base">Kaart van de buurtschap.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group" href="#" onclick="navigateTo('cg-bestuur'); return false;">
<i className="w-6 h-6 text-gray-900 mb-4 group-hover:scale-110 transition-transform" data-lucide="users"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Bestuur</h3>
<p className="text-gray-500 text-base">Huidige samenstelling.</p>
</a>
<a className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 hover:shadow-sm transition-all group sm:col-span-2 lg:col-span-1" href="#" onclick="navigateTo('cg-contact'); return false;">
<i className="w-6 h-6 text-gray-900 mb-4 group-hover:scale-110 transition-transform" data-lucide="mail"></i>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-1">Contact</h3>
<p className="text-gray-500 text-base">Algemene vragen.</p>
</a>
</div>
</div>
</section>

<section className="page-section" id="cg-over">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('cg-hub'); return false;">Contactgroep</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Over de stichting</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Over Contactgroep</h1>
<div className="prose prose-lg prose-emerald max-w-none text-gray-600">
<h2 className="text-2xl font-medium text-gray-900 mt-10 mb-4">Over ons</h2>
<p>Stichting Contactgroep Holterhoek is 11 oktober 2011 opgericht en ingeschreven bij de Kamer van Koophandel onder registratienummer 53753364.</p>
<h2 className="text-2xl font-medium text-gray-900 mt-10 mb-4">Doel</h2>
<p>De stichting heeft ten doel het behartigen van de algemene belangen van de bewoners van de buurtschap Holterhoek in de meest ruime zin van het woord, met name gericht op de leefbaarheid en het woonklimaat, en het verrichten van al wat hiermee verband houdt of daartoe bevorderlijk kan zijn.</p>

<div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden bg-white">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-xl text-gray-900 list-none">
                                Convenant met gemeente Berkelland &amp; Achtergrond
                                <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 border-t border-gray-100 text-lg text-gray-600">
<h3 className="text-xl font-medium text-gray-900 mb-3 mt-2">Convenant met gemeente Berkelland</h3>
<p className="mb-6">We hebben structureel overleg met de gemeente en functioneren als klankbord en doorgeefluik voor bewoners.</p>
<h3 className="text-xl font-medium text-gray-900 mb-3">Achtergrond &amp; Visie</h3>
<p className="mb-4">De oprichting kwam voort uit de wens om als buurtschap een sterkere, formele stem te hebben richting overheden. Ons 'noaberschap' is hierbij de kernwaarde. Samen zorgen we voor een vitale omgeving.</p>
<h3 className="text-xl font-medium text-gray-900 mb-3">Activiteiten &amp; Website</h3>
<p className="mb-4">Naast belangenbehartiging initiëren we projecten zoals de jaarlijkse bermschoonmaak. Deze website dient als centraal informatiepunt voor zowel de Contactgroep als de Feestvereniging.</p>
<p className="italic mt-6 text-gray-500">Wordt vervolgd...</p>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="page-section" id="cg-bestuur">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('cg-hub'); return false;">Contactgroep</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Huidig bestuur</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Huidig bestuur Contactgroep</h1>
<div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm mb-8">
<ul className="divide-y divide-gray-100">
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Gilbert Heutinck</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Voorzitter</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-400 italic">Vacant</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Secretaris</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Rik Braam</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Penningmeester</span>
</li>
<li className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
<span className="text-lg font-medium text-gray-900">Erika Stokkers</span>
<span className="text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Algemeen lid</span>
</li>
</ul>
</div>
<div className="bg-gray-100 rounded-2xl p-6 text-center">
<span className="text-gray-600 text-lg">Contact via: </span>
<a className="text-emerald-700 font-medium text-lg hover:underline" href="mailto:contactgroep@holterhoek.eu">contactgroep@holterhoek.eu</a>
</div>
</div>
</section>

<section className="page-section" id="cg-bericht">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
<nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
<a className="hover:text-gray-900" href="#" onclick="navigateTo('home'); return false;">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<a className="hover:text-gray-900" href="#" onclick="navigateTo('cg-hub'); return false;">Contactgroep</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium">Bericht sturen</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Bericht voor Contactgroep</h1>
<div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10 flex gap-4 items-start">
<div className="bg-emerald-100 text-emerald-700 p-2 rounded-full flex-shrink-0 mt-1">
<i className="w-6 h-6" data-lucide="message-square-plus"></i>
</div>
<p className="text-lg text-emerald-900 font-medium">Wilt u iets delen met de Contactgroep? Stuur ons een bericht. We lezen alles en komen zo snel mogelijk bij u terug.</p>
</div>
<div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-sm">
<form className="flex flex-col gap-6" onsubmit="event.preventDefault(); alert('Bedankt voor uw bericht!'); this.reset();">
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Onderwerp <span className="text-gray-400 font-normal">(optioneel)</span></label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white appearance-none cursor-pointer">
<option disabled="" selected="" value="">Kies een onderwerp...</option>
<option value="leefbaarheid">Leefbaarheid</option>
<option value="verkeer">Verkeer</option>
<option value="wonen">Wonen</option>
<option value="idee">Idee/Initiatief</option>
<option value="overig">Overig</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Naam <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">E-mail <span className="text-red-500">*</span></label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-base font-medium text-gray-900">Uw bericht <span className="text-red-500">*</span></label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all text-base bg-gray-50 focus:bg-white resize-y" placeholder="Typ hier uw opmerking, idee of vraag..." required="" rows="6"></textarea>
</div>
<div className="pt-4">
<button className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium text-lg hover:bg-emerald-800 transition-colors w-full sm:w-auto shadow-sm flex items-center justify-center gap-2" type="submit">
                                Versturen <i className="w-5 h-5" data-lucide="send"></i>
</button>
</div>
</form>
</div>
</div>
</section>




<section className="page-section" id="over">
<div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-8">Over Holterhoek</h1>
<p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                    Holterhoek is een prachtige buurtschap bij Eibergen in de gemeente Berkelland.
                </p>
<p className="text-lg text-gray-600 mb-12 leading-relaxed">
                    Deze website is in het leven geroepen als centraal informatiepunt voor onze gemeenschap. Het doel is om belangrijke informatie, nieuws en aankomende evenementen van zowel de Volksfeestvereniging als de Contactgroep eenvoudig te kunnen delen met inwoners en geïnteresseerden.
                </p>
<div className="flex flex-wrap justify-center gap-4">
<button className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-6 py-3 rounded-full font-medium text-base hover:bg-emerald-100 transition-colors" onclick="navigateTo('fv-hub')">Naar Feestvereniging</button>
<button className="bg-gray-100 text-gray-700 border border-gray-200 px-6 py-3 rounded-full font-medium text-base hover:bg-gray-200 transition-colors" onclick="navigateTo('cg-hub')">Naar Contactgroep</button>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
<div className="text-center mb-16">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Contact opnemen</h1>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">Kies met wie u contact wilt opnemen. We staan u graag te woord.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-3xl text-center flex flex-col items-center">
<div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8" data-lucide="party-popper"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">Feestvereniging</h2>
<p className="text-gray-500 text-lg mb-8">Voor vragen over evenementen, kermis, carnaval en activiteiten.</p>
<a className="text-emerald-700 font-medium text-lg hover:underline mb-6 block" href="mailto:feestvereniging@holterhoek.eu">feestvereniging@holterhoek.eu</a>
<button className="w-full bg-white text-gray-900 border-2 border-gray-200 px-6 py-3.5 rounded-full font-medium text-base hover:border-gray-900 transition-colors mt-auto" onclick="navigateTo('fv-contact')">
                            Naar contactformulier
                        </button>
</div>
<div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-3xl text-center flex flex-col items-center">
<div className="w-16 h-16 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8" data-lucide="building-2"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">Contactgroep</h2>
<p className="text-gray-500 text-lg mb-8">Voor vragen over leefbaarheid, belangen, overleg gemeente of initiatieven.</p>
<a className="text-emerald-700 font-medium text-lg hover:underline mb-6 block" href="mailto:contactgroep@holterhoek.eu">contactgroep@holterhoek.eu</a>
<button className="w-full bg-gray-900 text-white px-6 py-3.5 rounded-full font-medium text-base hover:bg-gray-800 transition-colors mt-auto" onclick="navigateTo('cg-bericht')">
                            Bericht sturen
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 mt-auto">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 border-b border-gray-100 pb-12">
<div className="lg:col-span-2">
<div className="text-xl font-semibold tracking-tight text-gray-900 mb-6">HOLTERHOEK</div>
<p className="text-gray-500 text-base max-w-sm mb-6">
                        Holterhoek – Eibergen (Berkelland). Het portaal voor de Volksfeestvereniging en Stichting Contactgroep.
                    </p>
<div className="flex items-center gap-4">
<a aria-label="Facebook" className="text-gray-400 hover:text-[#1877F2] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a aria-label="YouTube" className="text-gray-400 hover:text-[#FF0000] transition-colors" href="#">
<i className="w-6 h-6" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-gray-900 font-medium text-lg mb-6 tracking-tight">Feestvereniging</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('fv-agenda'); return false;">Agenda</a></li>
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('fv-nieuws'); return false;">Nieuws</a></li>
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('fv-bestuur'); return false;">Bestuur</a></li>
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('fv-contact'); return false;">Contact opnemen</a></li>
</ul>
</div>
<div>
<h4 className="text-gray-900 font-medium text-lg mb-6 tracking-tight">Contactgroep</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('cg-over'); return false;">Over de stichting</a></li>
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('cg-nieuws'); return false;">Nieuwsbrieven</a></li>
<li><a className="text-gray-500 hover:text-emerald-700 transition-colors text-base" href="#" onclick="navigateTo('cg-werkgebied'); return false;">Werkgebied</a></li>
<li><a className="text-emerald-700 font-medium hover:text-emerald-800 transition-colors text-base flex items-center gap-1" href="#" onclick="navigateTo('cg-bericht'); return false;">Bericht sturen <i className="w-4 h-4" data-lucide="arrow-right"></i></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-gray-400 text-sm">
                    © 2026 Holterhoek. Alle rechten voorbehouden.
                </div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#" onclick="navigateTo('home'); return false;">Home</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#" onclick="navigateTo('nieuws'); return false;">Nieuws</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#" onclick="navigateTo('evenementen'); return false;">Evenementen</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#" onclick="navigateTo('contact'); return false;">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
