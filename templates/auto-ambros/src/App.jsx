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
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col leading-none group" href="#">
<span className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">AUTO AMBROS</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Autoservis Brno</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#klimatizace">Klimatizace</a>
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#diagnostika">Diagnostika</a>
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#geometrie">Geometrie</a>
<a className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors" href="#dily">Náhradní díly</a>
<a className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-zinc-200" href="#kontakt">
                    Kontaktovat
                </a>
</nav>

<button className="lg:hidden p-2 text-zinc-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 shadow-xl p-6 flex flex-col gap-4 lg:hidden" id="mobile-menu">
<a className="text-base font-medium text-zinc-800" href="#klimatizace">Klimatizace</a>
<a className="text-base font-medium text-zinc-800" href="#diagnostika">Diagnostika</a>
<a className="text-base font-medium text-zinc-800" href="#geometrie">Geometrie</a>
<a className="text-base font-medium text-zinc-800" href="#dily">Náhradní díly</a>
<a className="text-base font-medium text-blue-600" href="#kontakt">Kontakt</a>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Autoservis Workshop" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-50/95 via-zinc-50/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-enter">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    Otevřeno • Autoservis Brno
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                    Váš vůz v <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">nejlepších rukou.</span>
</h1>
<p className="text-lg text-zinc-600 max-w-lg leading-relaxed font-light">
                    Kompletní péče o vaše vozidlo. Autoservis, Pneuservis, Diagnostika a Geometrie s důrazem na kvalitu a spolehlivost.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold text-sm hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200/50 flex items-center gap-2" href="tel:+420777217652">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        Zavolat +420 777 217 652
                    </a>
<a className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-semibold text-sm hover:bg-zinc-50 transition-all flex items-center gap-2" href="#sluzby">
                        Naše služby
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Naše specializace</h2>
<div className="w-20 h-1 bg-blue-600 rounded-full"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 group" id="klimatizace">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:snowflake-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-zinc-900 mb-4">Autoklimatizace &amp; Servis</h3>
<p className="text-zinc-500 mb-6">Kompletní servis klimatizace ve vašem voze za příznivé ceny v centru Brna.</p>
<div className="grid md:grid-cols-2 gap-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Plnění chladiva R134a, vakuování, olej, UV látka</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Detekce úniku chladiva a opravy netěsností</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-700">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Čištění ozónem a výměna pylových filtrů</span>
</li>
</ul>
<div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100">
<h4 className="font-semibold text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:wrench-linear"></iconify-icon>
                                Systém LOKRING
                            </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                                Provádíme opravy trubek a hadic unikátním namačkávacím systémem. Rychlé a levné řešení, možnost opravit pouze poškozenou část. Ideální pro méně běžné vozy.
                            </p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 group" id="diagnostika">
<div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-4">Elektronická Diagnostika</h3>
<ul className="space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                            Čtení a mazání chybových kódů
                        </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                            Motory (Benzin i Diesel)
                        </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                            Řídící jednotky (ABS, Airbag, Klima)
                        </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                            Nastavení servisních intervalů
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 group" id="geometrie">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wheel-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-4">3D Geometrie BOSCH</h3>
<p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                        Přesné změření a seřízení geometrie náprav vašeho vozidla pomocí špičkové technologie BOSCH.
                    </p>
<div className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        Zvýšení životnosti pneu
                    </div>
</div>

<div className="lg:col-span-2 bg-zinc-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group" id="dily">

<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold">Prodej náhradních dílů</h3>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
<div>
<h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Oleje &amp; Kapaliny</h4>
<ul className="text-sm space-y-1 font-medium">
<li>Liqui Moly</li>
<li>Castrol</li>
<li>Aditiva Liqui Moly</li>
</ul>
</div>
<div>
<h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Brzdové systémy</h4>
<ul className="text-sm space-y-1 font-medium">
<li>Bosch, ATE</li>
<li>Jurid, Lukas</li>
<li>Bendix, Ferodo</li>
</ul>
</div>
<div>
<h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Filtry &amp; Řemeny</h4>
<ul className="text-sm space-y-1 font-medium">
<li>Mann-Filter, Fram</li>
<li>Gates, Contitech</li>
<li>Champion, SKF</li>
</ul>
</div>
<div>
<h4 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Podvozek</h4>
<ul className="text-sm space-y-1 font-medium">
<li>Ložiska SKF, TIM</li>
<li>Spojky LUK, Sachs</li>
<li>Ramena Moog</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-10">
<div>
<h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">Kontaktujte nás</h2>
<p className="text-zinc-500">Jsme tu pro vás v Brně - Husovicích.</p>
</div>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-zinc-900">AUTO AMBROS s.r.o.</h4>
<p className="text-zinc-600 text-sm mt-1">Valchařská 36<br/>Brno 61400</p>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 mt-2 hover:underline" href="https://www.google.cz/maps/place/Autoservis+Ambros/@49.2142621,16.637898,17z" target="_blank">
                                    Otevřít v mapách <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div>
<p className="text-xs text-zinc-400 uppercase font-semibold">Ambros Bronislav</p>
<a className="text-zinc-900 font-medium hover:text-blue-600 transition-colors" href="tel:+420777217652">+420 777 217 652</a>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase font-semibold">Ambros Karel</p>
<a className="text-zinc-900 font-medium hover:text-blue-600 transition-colors" href="tel:+420774217652">+420 774 217 652</a>
</div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Email</h4>
<a className="text-zinc-600 text-sm mt-1 hover:text-blue-600 transition-colors" href="mailto:auto@autoambros.cz">auto@autoambros.cz</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 h-[400px] lg:h-auto bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 relative group">
<a className="block w-full h-full" href="https://www.google.cz/maps/place/Autoservis+Ambros/@49.2142621,16.637898,17z" target="_blank">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.338573616646!2d16.637898315686566!3d49.21426207932386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294850f948415%3A0x86f70f6da8092443!2sAutoservis%20Ambros!5e0!3m2!1scs!2scz!4v1629845123456!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%"></iframe>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors pointer-events-none"></div>
<div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg text-xs font-semibold text-zinc-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:map-point-bold"></iconify-icon>
                            Navigovat
                        </div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
<div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Autoservis AUTO AMBROS</h3>
<p className="text-sm text-zinc-500 max-w-xs">
                        Spolehlivý partner pro vaše vozidlo v Brně.
                        Kvalita, rychlost a férové jednání.
                    </p>
</div>
<div className="text-right">
<p className="text-[10px] text-zinc-400 leading-relaxed max-w-xs md:ml-auto text-left md:text-right">
                        Podle zákona o evidenci tržeb je prodávající povinen vystavit kupujícímu účtenku. 
                        Zároveň je povinen zaevidovat přijatou tržbu u správce daně online; 
                        v případě technického výpadku pak nejpozději do 48 hodin.
                    </p>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 gap-4">
<p>© 2024 AUTO AMBROS s.r.o. Všechna práva vyhrazena.</p>
<div className="flex gap-4">
<span className="hover:text-zinc-600 cursor-pointer transition-colors">Ochrana soukromí</span>
<span className="hover:text-zinc-600 cursor-pointer transition-colors">Cookies</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
