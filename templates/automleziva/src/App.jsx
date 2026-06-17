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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group cursor-pointer" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-medium text-lg tracking-tighter rounded-md">
            A
          </div>
<span className="font-medium tracking-tight text-lg group-hover:text-zinc-600 transition-colors">
            automleziva.eu
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#onas">
            O nás
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#sluzby">
            Naše služby
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#spolupracujeme">
            Spolupracujeme
          </a>
</div>
<div className="flex items-center gap-4">
<a className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-zinc-900/10" href="#telefon">
            Kontakt
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white w-fit shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              ZAVEDENÝ AUTOSERVIS
            </span>
</div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-medium text-zinc-900 tracking-tight">
            Profesionální péče <br/>
<span className="font-serif italic text-zinc-400 font-normal">
              v Praze 5
            </span>
</h1>
<p className="text-lg text-zinc-600 max-w-xl leading-relaxed font-light">
            Spolehlivý a zavedený autoservis. Nabízíme kompletní péči o Váš automobil, mechanický servis, lakování i dovoz vozidel. Pečujeme o Vaše vozy již od roku 2002.
          </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-900/10" href="#telefon">
              Kontaktujte nás
              <iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 px-8 py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2" href="#sluzby">
              Naše služby
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-6 pt-8 text-xs font-mono text-zinc-400 border-t border-zinc-100 mt-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-600 text-base" icon="solar:verified-check-linear"></iconify-icon>
<span>OD ROKU 2002</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-600 text-base" icon="solar:shield-check-linear"></iconify-icon>
<span>ZÁRUKA KVALITY</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px]">
<div className="absolute inset-0 bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200">
<img alt="Autoservis Mleziva Workshop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90" src="https://automleziva.eu/wp-content/uploads/2024/02/2021-10-24.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-2xl">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Otevírací doba</span>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-medium text-zinc-900">Pondělí - Pátek</h3>
<p className="text-xs text-zinc-500 mt-1">8:00 - 16:00 hod</p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-400">Mimo otevírací dobu <br/>dle telefonické dohody</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white border-t border-zinc-200 py-24" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-3">Naše služby</h2>
<p className="text-zinc-500 text-sm max-w-md">
                    Komplexní servis pro váš vůz na jednom místě. Od mechanických oprav po vyřízení administrativy.
                </p>
</div>
<div className="hidden md:block w-32 h-[1px] bg-zinc-200"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:wheel-angle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Mechanický servis</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Kompletní pneuservis a mechanické opravy pro všechny typy vozů.
                </p>
<div className="w-full h-[1px] bg-zinc-200 group-hover:bg-zinc-300 transition-colors"></div>
</div>

<div className="group p-6 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Lakování &amp; STK</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Profesionální lakování vozidel a kompletní zajištění technické kontroly.
                </p>
<div className="w-full h-[1px] bg-zinc-200 group-hover:bg-zinc-300 transition-colors"></div>
</div>

<div className="group p-6 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Pojistné události</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Vyřízení veškerých formalit a oprav spojených s pojistnými událostmi.
                </p>
<div className="w-full h-[1px] bg-zinc-200 group-hover:bg-zinc-300 transition-colors"></div>
</div>

<div className="group p-6 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Dovoz vozidel</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Dovoz automobilů ze zahraničí včetně vyřízení přihlášení a dokumentace.
                </p>
<div className="w-full h-[1px] bg-zinc-200 group-hover:bg-zinc-300 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-zinc-200 overflow-hidden" id="spolupracujeme">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-mono text-zinc-400 uppercase tracking-widest mb-10">Spolupracujeme a servisujeme</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
<img alt="BMW" className="h-10 w-auto object-contain" src="https://automleziva.eu/wp-content/uploads/2024/02/BMW.svg_.png"/>
<img alt="Mercedes" className="h-10 w-auto object-contain" src="https://automleziva.eu/wp-content/uploads/2024/02/Mercedes-Logo.svg_.png"/>
<img alt="Audi" className="h-10 w-auto object-contain mix-blend-multiply" src="https://automleziva.eu/wp-content/uploads/2024/02/34478abcd4d0798b4199cc1d62bcf47b-mm2000x2000.jpg"/>
<img alt="VW" className="h-10 w-auto object-contain" src="https://automleziva.eu/wp-content/uploads/2024/10/vw.png"/>
<img alt="BM Bike" className="h-12 w-auto object-contain rounded-full" src="https://automleziva.eu/wp-content/uploads/2024/10/299784354_447825007398202_6057253107429476526_n.jpg"/>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-100 py-24 relative overflow-hidden" id="telefon">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
                        Kontaktujte nás
                    </h2>
<div className="space-y-8">

<div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Jiří Mleziva</h3>
<a className="block text-zinc-400 hover:text-white mt-1 transition-colors font-mono text-sm" href="tel:+420602428491">+420 602 428 491</a>
<a className="block text-zinc-400 hover:text-white mt-0.5 transition-colors text-sm" href="mailto:mlezivatomba@seznam.cz">mlezivatomba@seznam.cz</a>
</div>
</div>

<div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Matěj Vomáčka</h3>
<a className="block text-zinc-400 hover:text-white mt-1 transition-colors font-mono text-sm" href="tel:+420774959503">+420 774 959 503</a>
<a className="block text-zinc-400 hover:text-white mt-0.5 transition-colors text-sm" href="mailto:vomackamatej@gmail.com">vomackamatej@gmail.com</a>
</div>
</div>

<div className="flex items-start gap-4 pt-4 px-2">
<iconify-icon className="text-zinc-500 text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-zinc-300 font-medium">Nádražní 54/772</p>
<p className="text-zinc-500 text-sm">Praha 5 - 150 00</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Mapa" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity bg-white" src="https://automleziva.eu/wp-content/uploads/2024/10/mapka2.png"/>
<a className="absolute bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 text-xs font-medium rounded-lg flex items-center gap-2 border border-white/20 hover:bg-black transition-colors" href="https://mapy.cz/s/pukekozule" target="_blank">
                        Otevřít mapu
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center font-bold text-xs rounded">
                A
              </div>
<span className="font-bold tracking-tight text-sm">
                AUTOMLEZIVA.EU
              </span>
</div>
<p className="text-sm text-zinc-500 mb-6 max-w-xs leading-relaxed">
              Profesionální autoservis s více než 20letou tradicí. Servisujeme automobily všech značek s důrazem na kvalitu a spolehlivost.
            </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-zinc-900">Rychlé odkazy</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#onas">O nás</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#sluzby">Naše služby</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#spolupracujeme">Partneři</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#telefon">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-zinc-900">Fakturační údaje</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-mono text-xs">
<li>IČO: 67271936</li>
<li>Autoservis Jiří Mleziva</li>
<li>Praha 5 - Smíchov</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400 font-mono">
            © 2026 automleziva.eu. Všechna práva vyhrazena.
          </p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">Ochrana soukromí</a>
<a className="hover:text-zinc-900 transition-colors flex items-center gap-1" href="https://www.firmy.cz/detail/199250-autoservis-jiri-mleziva-praha-smichov.html" target="_blank">
                Firmy.cz
                <iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
