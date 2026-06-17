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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
dark: '#0a0a0a',
panel: '#121212',
rose: '#e11d48', // Matching the red/pink side of logo
cyan: '#06b6d4', // Matching the blue/cyan side of logo
}
},
animation: {
'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
}
}
}
}



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
      

<a className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-16 h-16 lg:w-14 lg:h-14 bg-gradient-to-tr from-[#FF2E63] to-[#FF5A7A] rounded-full text-white shadow-[0_4px_20px_rgba(255,46,99,0.4)] hover:scale-105 hover:brightness-110 transition-all duration-300 group" href="tel:+420777830495">

<span className="absolute right-full mr-4 px-3 py-1.5 bg-[#111111] text-white text-sm font-medium rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden lg:block border border-white/10">
        Zavolejte nám
      </span>

<span className="absolute top-2 right-2 lg:top-1 lg:right-1 flex h-2 w-2">
<span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
</span>
<i className="w-7 h-7 text-white" data-lucide="phone"></i>
</a>

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-tr from-brand-cyan to-brand-rose p-[2px]">
<div className="flex overflow-hidden bg-black w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5782faa4-ba15-4c92-815d-ec2a76903ccf_320w.jpg?w=800&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center">

<img alt="Dape Detailing Logo" className="hover:scale-110 transition-transform bg-center opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5782faa4-ba15-4c92-815d-ec2a76903ccf_320w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="flex flex-col">
<span className="text-white font-display text-xl tracking-tight uppercase font-medium leading-none">
              Dape
            </span>
<span className="text-neutral-400 text-xs tracking-[0.2em] uppercase font-sans">
              Detailing
            </span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white">
<a className="hover:text-brand-rose transition-colors" href="#home">
            Domů
          </a>
<a className="hover:text-brand-rose transition-colors" href="#sluzby">
            Služby
          </a>
<a className="hover:text-brand-rose transition-colors" href="#o-nas">
            O nás
          </a>
<a className="hover:text-brand-rose transition-colors" href="#realizace">
            Galerie
          </a>
<a className="hover:text-brand-rose transition-colors" href="#cennik">
            Ceník
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-rose to-red-600 hover:from-white hover:to-white hover:text-black transition-all uppercase tracking-wider rounded-sm shadow-lg shadow-brand-rose/20" href="#kontakt">
            Objednat termín
          </a>
<button className="lg:hidden text-white p-1">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="min-h-[100dvh] flex overflow-hidden relative items-center justify-center" id="home">

<div className="absolute inset-0 z-0">

<img alt="Detailing Background" className="opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6deec7da-8d7e-47c1-b194-ffcc310f58c1_3840w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
<div className="bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mx-auto px-6 pt-20 relative">
<div className="max-w-4xl">
<div className="inline-flex border-white/10 border rounded-full mb-8 py-2 px-4 backdrop-blur-md items-center bg-white/5 gap-3">
<span className="flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan opacity-75"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full relative"></span>
</span>
<span className="text-neutral-200 uppercase text-xs font-semibold tracking-widest">
              DAPE DETAILING OSTRAVA
            </span>
</div>
<h1 className="leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-semibold tracking-tight font-display mb-6">
            PERFEKTNÍ VZHLED
            <br/>
<span className="text-gradient-brand">ZAČÍNÁ U DETAILU</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed font-light">
            Profesionální renovace laku, keramická ochrana a kompletní detailing
            v Ostravě. Vracíme vozům showroomový lesk s důrazem na maximální
            kvalitu a individuální přístup.
          </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-rose hover:bg-white hover:text-black transition-all uppercase tracking-wide rounded-sm group shadow-[0_0_20px_rgba(225,29,72,0.3)]" href="#kontakt">
              Objednat termín
              <i className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all uppercase tracking-wide backdrop-blur-sm rounded-sm" href="#realizace">
              Naše realizace
            </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-brand-dark relative border-t border-white/5" id="sluzby">
<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              NAŠE SLUŽBY
            </h2>
<p className="text-neutral-400 max-w-lg text-lg">
              Specializujeme se na renovaci a ochranu laku pomocí špičkové
              autokosmetiky.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-rose/50 transition-all duration-300 rounded-sm hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center rounded mb-6 group-hover:from-brand-rose/20 group-hover:to-brand-rose/5 transition-all border border-white/5">
<i className="text-brand-rose w-7 h-7" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display">
              Renovace a leštění laku
            </h3>
<p className="text-base text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
              Odstranění škrábanců, hologramů a oxidace. Strojní leštění pro
              maximální hloubku a lesk laku.
            </p>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-cyan/50 transition-all duration-300 rounded-sm hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center rounded mb-6 group-hover:from-brand-cyan/20 group-hover:to-brand-cyan/5 transition-all border border-white/5">
<i className="text-brand-cyan w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display">
              Keramická ochrana
            </h3>
<p className="text-base text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
              Dlouhodobá ochrana laku proti UV záření, chemii a nečistotám.
              Extrémní hydrofobní vlastnosti.
            </p>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-rose/50 transition-all duration-300 rounded-sm hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center rounded mb-6 group-hover:from-brand-rose/20 group-hover:to-brand-rose/5 transition-all border border-white/5">
<i className="text-brand-rose w-7 h-7" data-lucide="car"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display">
              Detailing exteriéru
            </h3>
<p className="text-base text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
              Šetrné ruční mytí, chemická i mechanická dekontaminace laku a
              aplikace voskových ochran.
            </p>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-cyan/50 transition-all duration-300 rounded-sm hover:-translate-y-1">
<div className="w-14 h-14 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center rounded mb-6 group-hover:from-brand-cyan/20 group-hover:to-brand-cyan/5 transition-all border border-white/5">
<i className="text-brand-cyan w-7 h-7" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight font-display">
              Čištění interiéru
            </h3>
<p className="text-base text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed">
              Hloubkové parní čištění, tepování sedadel, čištění kůže a
              impregnace všech povrchů.
            </p>
</article>
</div>
</div>
</section>

<section className="border-y bg-[#050505] border-white/5 py-24" id="o-nas">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="relative order-2 lg:order-1 group">
<div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-brand-rose/50 hidden md:block transition-all group-hover:-top-6 group-hover:-left-6"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-brand-cyan/50 hidden md:block transition-all group-hover:-bottom-6 group-hover:-right-6"></div>

<img alt="Detailing Process" className="hover:grayscale-0 transition-all duration-700 w-full object-cover z-10 rounded-sm relative shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d426f22-4ee8-4554-85cb-4f0061ac2a83_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="order-1 lg:order-2">
<h4 className="text-brand-rose uppercase tracking-[0.2em] font-bold mb-3 text-sm flex items-center gap-2">
<span className="w-8 h-[2px] bg-brand-rose"></span>
              Filozofie Studia
            </h4>
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
              KVALITA NAD KVANITOU
            </h2>
<div className="space-y-6 text-neutral-400 text-lg font-light">
<p className="leading-relaxed">
                Jsme
                <strong className="text-white font-normal">Dape Detailing</strong>
                . Naše studio v Ostravě vzniklo z vášně pro dokonalost.
                Nezaměřujeme se na rychlé mytí desítek aut denně, ale na
                precizní péči o každý detail vašeho vozu.
              </p>
<p className="leading-relaxed">
                Každý projekt je pro nás výzvou. Používáme pouze ověřenou
                profesionální autokosmetiku a nejmodernější postupy, abychom
                dosáhli výsledků, které předčí vaše očekávání.
              </p>
</div>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-10 border-t border-white/10 pt-10">
<li className="flex items-center gap-3 text-neutral-300">
<i className="text-brand-rose w-5 h-5" data-lucide="check-circle-2"></i>
                Individuální přístup
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<i className="text-brand-rose w-5 h-5" data-lucide="check-circle-2"></i>
                Profesionální produkty
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<i className="text-brand-rose w-5 h-5" data-lucide="check-circle-2"></i>
                Důraz na maximální výsledek
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<i className="text-brand-rose w-5 h-5" data-lucide="check-circle-2"></i>
                Péče o prémiové vozy
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="realizace">
<div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 items-start md:items-end justify-between mb-12">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
            GALERIE REALIZACÍ
          </h2>
<p className="text-neutral-400">
            Ukázka naší práce na luxusních a sportovních vozech.
          </p>
</div>
<a className="mt-4 md:mt-0 inline-flex items-center text-brand-cyan hover:text-white transition-colors group font-medium" href="#">
          Sledovat nás na Instagramu
          <i className="ml-2 w-5 h-5 group-hover:text-brand-rose transition-colors" data-lucide="instagram"></i>
</a>
</div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-neutral-900">

<div className="group aspect-[4/3] overflow-hidden bg-neutral-900 border-white/5 border-r border-b relative">
<div className="z-30 group-hover:translate-y-0 transition-transform duration-500 pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 translate-y-2">
<p className="text-brand-cyan uppercase text-xs font-bold tracking-widest mb-2">
              keramická ochrana
            </p>
<h3 className="text-2xl font-medium text-white font-display">
              Lexus UX 250
            </h3>
</div><div className="group-hover:opacity-80 transition-opacity bg-center z-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82c01209-64c7-405d-be6d-569d3daf9309_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Renovace" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover z-20 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82c01209-64c7-405d-be6d-569d3daf9309_1600w.jpg?w=800&amp;q=80"/>
</div>

<div className="group aspect-[4/3] overflow-hidden bg-neutral-900 relative border-r border-b border-white/5">
<div className="absolute bottom-0 left-0 z-30 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-brand-cyan uppercase text-xs font-bold tracking-widest mb-2">
              hloubkové čištění interiéru
            </p>
<h3 className="text-2xl font-medium text-white font-display">
              Škody Kodiaq VRS
            </h3>
</div>
<div className="z-20 group-hover:opacity-80 transition-opacity bg-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebacb0d0-c5b3-4463-bb40-90bc7dae8d76_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Keramika" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebacb0d0-c5b3-4463-bb40-90bc7dae8d76_1600w.jpg?w=800&amp;q=80"/>
</div>

<div className="group aspect-[4/3] overflow-hidden bg-neutral-900 z-20 border-white/5 border-b relative">
<div className="group-hover:opacity-80 transition-opacity bg-center z-20 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09493ee5-6a48-4e6f-ac68-c7f9acb45de9_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-30 group-hover:translate-y-0 transition-transform duration-500 pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 translate-y-2">
<p className="text-brand-cyan uppercase text-xs font-bold tracking-widest mb-2">
              korekce laku
            </p>
<h3 className="text-2xl font-medium text-white font-display">
              Škoda Enyaq vRS
            </h3>
</div>
<img alt="Interiér" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover z-20 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09493ee5-6a48-4e6f-ac68-c7f9acb45de9_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-brand-panel" id="cennik">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-display mb-6">
            ORIENTAČNÍ CENÍK
          </h2>
<p className="text-neutral-400 max-w-xl mx-auto">
            Každý vůz naceňujeme individuálně po osobní prohlídce a konzultaci
            stavu laku.
          </p>
</div>
<div className="space-y-4">

<div className="group flex flex-col sm:flex-row justify-between items-center p-6 bg-brand-dark border border-white/5 rounded-sm hover:border-brand-rose/30 transition-all duration-300">
<div className="flex items-center gap-4 mb-2 sm:mb-0">
<div className="p-2 bg-white/5 rounded-full text-brand-rose">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-white font-medium text-lg">
                Základní detailing
              </span>
</div>
<div className="flex flex-col sm:items-end">
<span className="text-brand-rose font-bold text-xl">od 2 500 Kč</span>
<span className="text-xs text-neutral-500">dle velikosti vozu</span>
</div>
</div>

<div className="group flex flex-col sm:flex-row justify-between items-center p-6 bg-brand-dark border border-white/5 rounded-sm hover:border-brand-cyan/30 transition-all duration-300">
<div className="flex items-center gap-4 mb-2 sm:mb-0">
<div className="p-2 bg-white/5 rounded-full text-brand-cyan">
<i className="w-5 h-5" data-lucide="disc"></i>
</div>
<span className="text-white font-medium text-lg">
                Strojní leštění laku
              </span>
</div>
<div className="flex flex-col sm:items-end">
<span className="text-brand-cyan font-bold text-xl">od 6 000 Kč</span>
<span className="text-xs text-neutral-500">
                jednokrokové / vícekrokové
              </span>
</div>
</div>

<div className="group flex flex-col sm:flex-row justify-between items-center p-6 bg-brand-dark border border-white/5 rounded-sm hover:border-brand-rose/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-brand-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-4 mb-2 sm:mb-0 relative z-10">
<div className="p-2 bg-white/5 rounded-full text-brand-rose">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<span className="text-white font-medium text-lg">
                Keramická ochrana
              </span>
</div>
<div className="flex flex-col sm:items-end relative z-10">
<span className="text-brand-rose font-bold text-xl">od 8 000 Kč</span>
<span className="text-xs text-neutral-500">dlouhodobá ochrana</span>
</div>
</div>

<div className="group flex flex-col sm:flex-row justify-between items-center p-6 bg-brand-dark border border-white/5 rounded-sm hover:border-brand-cyan/30 transition-all duration-300">
<div className="flex items-center gap-4 mb-2 sm:mb-0">
<div className="p-2 bg-white/5 rounded-full text-brand-cyan">
<i className="w-5 h-5" data-lucide="armchair"></i>
</div>
<span className="text-white font-medium text-lg">
                Hloubkové čištění interiéru
              </span>
</div>
<div className="flex flex-col sm:items-end">
<span className="text-white font-bold text-xl">
                Individuální cena
              </span>
<span className="text-xs text-neutral-500">tepování / pára</span>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-brand-rose/10 border border-brand-rose/20 rounded-sm text-center">
<p className="text-brand-rose text-sm font-medium">
            Poznámka: Přesná cena je stanovena vždy až po fyzické prohlídce
            vozu.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="kontakt">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-rose/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
              NAPIŠTE NÁM
            </h2>
<p className="text-neutral-400 mb-10 text-lg">
              Máte dotaz nebo si chcete rezervovat termín? Vyplňte formulář nebo
              nám zavolejte.
            </p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Jméno
                  </label>
<input className="w-full bg-neutral-900/50 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none transition-all rounded-sm" placeholder="Vaše jméno" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    Telefon
                  </label>
<input className="w-full bg-neutral-900/50 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none transition-all rounded-sm" placeholder="+420 777 ..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                  Email
                </label>
<input className="w-full bg-neutral-900/50 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none transition-all rounded-sm" placeholder="vas@email.cz" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                  Zpráva
                </label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 p-4 text-white placeholder-neutral-600 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none transition-all rounded-sm" placeholder="O jaké služby máte zájem? (Typ vozu, stav laku...)" rows="4"></textarea>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-brand-rose hover:bg-white text-white hover:text-black font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-sm shadow-lg shadow-brand-rose/20" type="submit">
                Odeslat poptávku
                <i className="w-5 h-5" data-lucide="send"></i>
</button>
</form>
</div>

<div className="flex flex-col justify-between h-full">
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="p-3 bg-white/5 border border-white/5 rounded-sm shrink-0">
<i className="text-brand-rose w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-medium text-white mb-1 text-lg">
                    Adresa studia
                  </h3>
<p className="text-neutral-400 leading-relaxed">
                    Staroveská 84/118
                    <br/>
                    724 00 Ostrava 24 - Proskovice
                  </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-white/5 border border-white/5 rounded-sm shrink-0">
<i className="text-brand-cyan w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h3 className="text-white font-medium mb-1 text-lg">Telefon</h3>
<a className="hover:text-brand-cyan transition-colors cursor-pointer text-neutral-400 text-lg block mb-1" href="tel:+420777830495">
                    +420 777 830 495
                  </a>
<span className="text-xs text-neutral-600 uppercase tracking-wide">
                    Po-Pá: 8:00 - 17:00
                  </span>
</div>
</div>
<div className="flex items-start gap-5">
<div className="p-3 bg-white/5 border border-white/5 rounded-sm shrink-0">
<i className="text-white w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h3 className="font-medium text-white mb-1 text-lg">Email</h3>
<a className="text-neutral-400 hover:text-white transition-colors" href="mailto:dapedetailing@protonmail.com">
                    dapedetailing@protonmail.com
                  </a>
</div>
</div>
</div>

<div className="mt-10 w-full h-80 bg-neutral-900 border border-white/10 relative flex items-center justify-center group overflow-hidden rounded-sm">

<iframe allowfullscreen="" className="w-full h-full border-0 grayscale invert-[.85] contrast-[1.1] opacity-70 group-hover:opacity-100 transition-all duration-500" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.6836696191425!2d18.220556!3d49.761111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e4b1b1b1b1b1%3A0x0!2sStarovesk%C3%A1%2084%2F118%2C%20724%2000%20Ostrava-Proskovice!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz"></iframe>
<a className="absolute bottom-4 right-4 bg-brand-rose hover:bg-white hover:text-black text-white text-xs font-bold uppercase py-2 px-4 rounded-sm shadow-lg transition-colors z-10" href="https://maps.google.com/?q=Staroveská+84/118,Ostrava" rel="noopener noreferrer" target="_blank">
                Otevřít v mapách
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/5 border-t pt-20 pb-10 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex flex-col gap-1 mb-6">
<h3 className="text-2xl font-display font-medium text-white tracking-tight">
                DAPE DETAILING
              </h3>
<span className="text-xs text-brand-rose tracking-[0.3em] uppercase">
                Ostrava
              </span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed">
              Profesionální detailing studio zaměřené na kompletní péči o
              vozidla, renovaci laku a keramickou ochranu.
            </p>
</div>
<div>
<h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
              Služby
            </h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-brand-cyan transition-colors" href="#">
                  Renovace laku
                </a>
</li>
<li>
<a className="hover:text-brand-cyan transition-colors" href="#">
                  Strojní leštění
                </a>
</li>
<li>
<a className="hover:text-brand-cyan transition-colors" href="#">
                  Keramická ochrana
                </a>
</li>
<li>
<a className="hover:text-brand-cyan transition-colors" href="#">
                  Čištění interiéru
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
              Navigace
            </h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-brand-rose transition-colors" href="#home">
                  Domů
                </a>
</li>
<li>
<a className="hover:text-brand-rose transition-colors" href="#o-nas">
                  O nás
                </a>
</li>
<li>
<a className="hover:text-brand-rose transition-colors" href="#realizace">
                  Realizace
                </a>
</li>
<li>
<a className="hover:text-brand-rose transition-colors" href="#cennik">
                  Ceník
                </a>
</li>
</ul>
</div>
<div>
<h5 className="uppercase text-xs font-semibold text-white tracking-wider mb-6">
              Kontakt
            </h5>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-rose" data-lucide="phone"></i>
                +420 777 830 495
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-rose" data-lucide="mail"></i>
                dapedetailing@protonmail.com
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-brand-rose" data-lucide="map-pin"></i>
                Staroveská 84/118, Ostrava
              </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-rose hover:border-brand-rose transition-all rounded-sm" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-cyan hover:border-brand-cyan transition-all rounded-sm" href="#">
<i className="ml-2 w-5 h-5 group-hover:text-brand-rose transition-colors" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2026 Dape Detailing Ostrava. Všechna práva vyhrazena.</p>
<div className="text-neutral-700 text-xs flex gap-4 uppercase tracking-wider font-medium">
<span>Detailing</span>
<span className="text-brand-rose">•</span>
<span>Ostrava</span>
<span className="text-brand-cyan">•</span>
<span>Keramika</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
