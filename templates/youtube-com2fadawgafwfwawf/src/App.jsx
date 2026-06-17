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
      

<div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20" style={{background: 'radial-gradient(circle at 50% -20%, #4f46e5 0%, transparent 70%)'}}></div>

<header className="relative z-10 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-indigo-500" icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
                M O T O R
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#palvelut">Palvelut</a>
<a className="hover:text-white transition-colors" href="#erikoisosaaminen">Erikoisosaaminen</a>
<a className="hover:text-white transition-colors" href="#yhteystiedot">Yhteystiedot</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-colors" href="#varaa">
                    Varaa huolto
                </a>
<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow">
<section className="relative pt-24 pb-32 md:pt-36 md:pb-40 px-6 max-w-5xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span>Uuden sukupolven autohuolto</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white text-balance mb-6 leading-tight">
                Tarkkuutta. Luotettavuutta. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Vauhtia.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
                Tuo autosi meille, niin pidämme huolen lopusta. Edistyksellinen diagnostiikka, kokeneet mekaanikot ja läpinäkyvä hinnoittelu takaavat mielenrauhan jokaisella kilometrillä.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#">
                    Varaa aika nyt
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-slate-900 border border-white/10 text-white rounded-full hover:bg-slate-800 transition-colors" href="#palvelut">
                    Tutustu palveluihin
                </a>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5 relative" id="erikoisosaaminen">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-950 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-8xl text-indigo-500" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Huipputason diagnostiikka</h2>
<p className="text-sm leading-relaxed mb-8 max-w-md">Käytämme alan johtavia ohjelmistoja ja laitteistoja monimutkaisimpienkin sähkö- ja moottorivikojen paikantamiseen nopeasti ja tarkasti.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                    Merkkikohtaiset testerit
                                </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                    Reaaliaikainen data-analyysi
                                </li>
<li className="flex items-center gap-3 text-sm">
<div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                    Sähkö- ja hybridiautojen erikoisosaaminen
                                </li>
</ul>
</div>
</div>

<div className="bg-slate-950 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-white/10 transition-colors">
<iconify-icon className="text-4xl text-slate-500 mb-4" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight text-white mb-2">24h</h3>
<p className="text-sm">Keskimääräinen huoltoaika suurimmalle osalle toimenpiteistä.</p>
</div>

<div className="bg-slate-950 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-white/10 transition-colors">
<iconify-icon className="text-4xl text-slate-500 mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-4xl font-medium tracking-tight text-white mb-2">100%</h3>
<p className="text-sm">Tyytyväisyystakuu. Alkuperäiset tai vastaavanlaatuiset varaosat.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-indigo-950/50 to-slate-950 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/10 transition-colors">
<div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2">Säännöllinen huolto pidentää ikää</h2>
<p className="text-sm max-w-sm">Varaa määräaikaishuolto ajoissa. Se on edullisin tapa pitää auto turvallisena ja luotettavana.</p>
</div>
<a className="shrink-0 px-5 py-2.5 text-sm font-medium bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm" href="#">
                            Katso huoltohinnasto
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="palvelut">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Kattavat huoltopalvelut</h2>
<p className="text-sm max-w-xl mx-auto">Kaikki mitä autosi tarvitsee saman katon alta, asiantuntemuksella ja huolellisuudella.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/80 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl text-indigo-400" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Määräaikaishuollot</h3>
<p className="text-xs leading-relaxed">Valmistajan ohjeiden mukaiset huollot, jotka säilyttävät autosi takuun ja arvon.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/80 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl text-indigo-400" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Mekaaniset korjaukset</h3>
<p className="text-xs leading-relaxed">Moottorin, vaihteiston ja alustan ammattitaitoiset korjaukset ja osien vaihdot.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/80 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl text-indigo-400" icon="solar:wheel-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Rengaspalvelut</h3>
<p className="text-xs leading-relaxed">Renkaiden vaihdot, tasapainotukset, ohjauskulmien säädöt ja rengashotelli.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/80 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl text-indigo-400" icon="solar:accumulator-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Sähkötyöt &amp; Akut</h3>
<p className="text-xs leading-relaxed">Akun vaihdot, sähkövikojen korjaukset sekä hybridijärjestelmien tarkistukset.</p>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 border-white/5 border-t pt-16 pb-8" id="yhteystiedot">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-indigo-500" icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
                        M O T O R
                    </a>
<p className="text-xs text-slate-500 max-w-xs mb-6">
                        Laadukasta ja luotettavaa autohuoltoa modernilla otteella. Pidämme pyörät pyörimässä.
                    </p>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-4">Yhteystiedot</h4>
<ul className="text-xs space-y-3">
<li className="flex gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-slate-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Tekniikantie 12, 02150 Espoo
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            040 123 4567
                        </li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-slate-500" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            huolto@motor.fi
                        </li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-4">Aukioloajat</h4>
<ul className="space-y-3 text-xs">
<li className="flex justify-between items-center border-b border-white/5 pb-2">
<span>Ma - Pe</span>
<span className="text-slate-300">08.00-16.00</span>
</li>
<li className="flex justify-between items-center border-b border-white/5 pb-2">
<span>La</span>
<span className="text-slate-300">Sopimuksen mukaan</span>
</li>
<li className="flex justify-between items-center">
<span>Su</span>
<span className="text-slate-500">Suljettu</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Jätä yhteydenottopyyntö</h4>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors uppercase" placeholder="Rekisterinumero" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Puhelinnumero" type="tel"/>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-3 py-2 text-xs font-medium transition-colors flex items-center justify-center gap-2" type="button">
                            Lähetä
                            <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
<p className="">© 2024 Motor Autokorjaamo. Kaikki oikeudet pidätetään.</p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="hover:text-slate-400 transition-colors" href="#">Tietosuojaseloste</a>
<a className="hover:text-slate-400 transition-colors" href="#">Käyttöehdot</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
