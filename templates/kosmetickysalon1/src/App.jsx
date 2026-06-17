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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializace ikon
        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:10vw_100%]"></div>

<div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-900/20 rounded-full blur-[100px]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0a0a0c]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 text-white" href="#">
<i className="w-6 h-6 text-teal-400" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xl font-medium tracking-tight">ÉCLAT STUDIO</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 tracking-wide uppercase">
<a className="hover:text-white transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-white transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</nav>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white text-sm" href="#kontakt">
                Rezervovat
            </a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]" id="o-nas">
<div className="flex flex-col gap-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs tracking-widest uppercase w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    Moderní kosmetika
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    PÉČE ZA <br/>
                    HRANICEMI <br/>
                    BĚŽNÉHO
                </h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                    Jsme inovativní kosmetické studio v srdci města. Propojujeme moderní technologie s pečlivou ruční prací pro dosažení nejlepších výsledků pro vaši pleť. Bez zbytečných slibů, pouze viditelné výsledky a relaxace.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-300 to-teal-500 text-black font-medium text-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_30px_rgba(45,212,191,0.2)]" href="#kontakt">
                        Objednat termín
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors" href="#cenik">
                        Zobrazit ceník
                    </a>
</div>
</div>
<div className="relative w-full aspect-square lg:aspect-auto lg:h-[700px]">

<div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[2.5rem] p-2 backdrop-blur-sm overflow-hidden flex flex-col">
<div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
<div className="flex gap-3">
<i className="w-5 h-5 text-teal-400" data-lucide="scan-face" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-500" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-xs text-teal-400 font-medium tracking-widest">DIAGNOSTIKA AKTIVNÍ</span>
</div>
<div className="relative flex-1 rounded-[2rem] overflow-hidden m-2 bg-zinc-900">
<img alt="Péče o pleť" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                            Hydratace optimální
                        </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5" id="sluzby">
<div className="mb-16">
<h2 className="text-sm text-teal-400 tracking-widest uppercase mb-4">Naše zaměření</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Služby na míru</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
<img alt="Hloubkové čištění" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Přístrojová péče o pleť</h4>
<p className="text-lg text-zinc-400">Kombinujeme hloubkové čištění s ultrazvukovou špachtlí a hydroabrazí pro dokonale čistou a projasněnou pleť.</p>
</div>

<div className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
<img alt="Úprava obočí" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b56d6a8d-9fc6-4fec-9399-89a93ab63e54_800w.jpg"/>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Architektura obočí</h4>
<p className="text-lg text-zinc-400">Provádíme precizní mapování, barvení henou a populární laminaci pro přirozeně plný vzhled vašeho obočí.</p>
</div>

<div className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
<div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
<img alt="Permanentní make-up" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51bd3fc7-1291-4e60-b1aa-f24d56d7d37a_800w.jpg"/>
</div>
<h4 className="text-2xl font-medium tracking-tight text-white mb-3">Permanentní make-up</h4>
<p className="text-lg text-zinc-400">Jemné a přirozené techniky PMU pro zvýraznění rtů (akvarelové rty) a pudrové stínování obočí s dlouhodobým efektem.</p>
</div>
</div>
</section>

<section className="max-w-4xl border-white/5 border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="cenik">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ceník procedur</h2>
<p className="text-lg text-zinc-400">Transparentní ceny za prémiovou péči. Pro konkrétní diagnostiku doporučujeme osobní konzultaci.</p>
</div>
<div className="md:p-12 bg-emerald-400/10 border-white/10 border rounded-[2rem] px-8 py-8">
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Kompletní ošetření pleti (90 min)</div>
<div className="text-xl font-medium text-white tracking-tight">1 800 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Hydratační kúra kyselinou hyaluronovou</div>
<div className="text-xl font-medium text-white tracking-tight">1 500 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Mikrojehličkování (Microneedling)</div>
<div className="text-xl font-medium text-white tracking-tight">2 200 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Chemický peeling AHA/BHA kyselinami</div>
<div className="text-xl font-medium text-white tracking-tight">1 400 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Laminace obočí vč. barvení a úpravy</div>
<div className="text-xl font-medium text-white tracking-tight">950 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">Lash lifting &amp; botox řas</div>
<div className="text-xl font-medium text-white tracking-tight">1 100 Kč</div>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="text-lg text-zinc-200">PMU - Pudrové obočí (vč. korekce)</div>
<div className="text-xl font-medium text-white tracking-tight">4 500 Kč</div>
</div>
<div className="flex justify-between items-end pb-2">
<div className="text-lg text-zinc-200">PMU - Akvarelové rty</div>
<div className="text-xl font-medium text-white tracking-tight">4 800 Kč</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 overflow-hidden" id="galerie">
<div className="flex max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 items-end justify-between">
<div>
<h2 className="text-sm text-teal-400 tracking-widest uppercase mb-4">Výsledky</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Naše práce</h3>
</div>
<div className="hidden md:flex gap-2 text-zinc-500">
<i className="w-6 h-6" data-lucide="arrow-left" strokeWidth="1.5"></i>
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 md:px-0 md:max-w-7xl md:mx-auto pb-8">
<div className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative group">
<img alt="Výsledek obočí" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/582c29c1-9059-4f95-b6fc-0ba7d79c89ae_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-lg text-white font-medium">Laminace obočí</p>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative group">
<img alt="Výsledek pleť" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8d47e2e-79f3-4153-b122-115f9859ef2b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-lg text-white font-medium">Hloubkové čištění</p>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative group">
<img alt="Výsledek rty" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f307b0d2-44e0-477e-a88a-75077e97a7ca_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-lg text-white font-medium">Akvarelové rty (PMU)</p>
</div>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-1rem)] aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative group md:hidden lg:block">
<img alt="Výsledek řasy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-lg text-white font-medium">Lash Lifting</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5" id="kontakt">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">Zastavte se <br/>za námi</h2>
<div className="space-y-8 mt-12">
<a className="flex items-start gap-4 group" href="tel:+420777123456">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
<i className="w-5 h-5 text-zinc-400 group-hover:text-teal-400" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-zinc-500 mb-1">Telefon</div>
<div className="text-xl text-white font-medium">+420 777 123 456</div>
</div>
</a>
<a className="flex items-start gap-4 group" href="mailto:info@eclatstudio.cz">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
<i className="w-5 h-5 text-zinc-400 group-hover:text-teal-400" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-zinc-500 mb-1">E-mail</div>
<div className="text-xl text-white font-medium">info@eclatstudio.cz</div>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-zinc-500 mb-1">Adresa</div>
<div className="text-xl text-white font-medium">Pařížská 12, Praha 1</div>
<div className="text-lg text-zinc-400 mt-1">110 00, Česká republika</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-zinc-500 mb-1">Otevírací doba</div>
<div className="text-lg text-zinc-300 flex justify-between gap-8">
<span>Po - Pá</span>
<span className="text-white">09:00 - 19:00</span>
</div>
<div className="text-lg text-zinc-300 flex justify-between gap-8 mt-2">
<span>Sobota</span>
<span className="text-white">Dle objednání</span>
</div>
<div className="text-lg text-zinc-300 flex justify-between gap-8 mt-2">
<span>Neděle</span>
<span className="text-zinc-500">Zavřeno</span>
</div>
</div>
</div>
</div>
</div>

<div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 relative group">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.089885836267!2d14.417865915718134!3d50.08781147942735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e9f7831d31%3A0x6b45a0e5b7fbabf8!2zUGHFmcOtxb5za8OhLCBQcmFoYQ!5e0!3m2!1scs!2scz!4v1690000000000!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(80%)'}} width="100%">
</iframe>

<div className="absolute inset-0 bg-teal-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 text-center">
<div className="flex items-center justify-center gap-2 text-white mb-6">
<i className="w-5 h-5 text-teal-400" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight">ÉCLAT STUDIO</span>
</div>
<p className="text-lg text-zinc-500">© 2024 Éclat Studio. Všechna práva vyhrazena.</p>
</footer>


    </>
  );
}
