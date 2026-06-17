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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 9"></path>
<path d="M12 9c1.2 0 2.4.6 3 1.7A3.6 3.6 0 0 1 12 15"></path>
<path d="M12 15c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 21"></path>
</svg>
</div>
<div>
<span className="block text-stone-900 font-semibold tracking-tight text-lg leading-none">Eva Vacová</span>
<span className="block text-[10px] text-stone-500 font-medium uppercase tracking-wide mt-0.5">Fyzioterapie Praha</span>
</div>
</a>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#o-mne">O mně</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#sluzby">Nabízím</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#cenik">Ceník</a>
<a className="text-sm font-medium text-stone-500 hover:text-teal-700 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium py-2.5 px-5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md" href="#kontakt">
<span>Objednat se</span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-500 hover:text-teal-700">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white" id="home">

<div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 rounded-l-[100px] -z-0 opacity-60 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-medium border border-teal-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                        Nestátní zdravotnické zařízení
                    </div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.15]">
                        Pohyb bez bolesti <br/>
                        je <span className="text-teal-700">radost.</span>
</h1>
<p className="text-lg text-stone-500 mb-8 max-w-lg font-light leading-relaxed">
                        Individuální fyzioterapie v Praze na Andělu. Specializuji se na gynekologickou problematiku, bolesti zad a pooperační rehabilitaci.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-800 transition-all shadow-soft hover:translate-y-px" href="#kontakt">
                            Kontaktovat
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-stone-700 border border-stone-200 px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-all" href="#sluzby">
                            Moje služby
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-stone-100 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:graduation-cap" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">Mgr. titul z UK &amp; UPOL</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:map-pin" width="18"></iconify-icon>
<span className="text-xs text-stone-500 font-medium">Praha 5 - Ženské domovy</span>
</div>
</div>
</div>
<div className="relative fade-in-up delay-200">

<div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden bg-stone-100 relative shadow-soft">
<img alt="Mgr. Eva Vacová Fyzioterapie" className="absolute inset-0 w-full h-full object-cover" src="https://www.fyzio-vacova.cz/assets/images/image06.jpg?v=9ddf08dc"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-stone-100/50">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0">
<iconify-icon icon="lucide:activity" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Praxe od roku 1998</p>
<p className="text-xs text-stone-500 mt-1 leading-relaxed">Zkušenosti z FN Motol, CPM Pavla Koláře a ÚPMD Podolí.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="o-mne">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

<div className="md:col-span-5 lg:col-span-5">
<div className="relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-soft">
<img alt="Eva Vacová" className="w-full h-full object-cover" src="https://www.fyzio-vacova.cz/assets/images/image01.jpg?v=9ddf08dc"/>
</div>
</div>
</div>

<div className="md:col-span-7 lg:col-span-7">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">O mně</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Mgr. Eva Vacová</h2>
<div className="prose prose-stone prose-lg text-stone-500 font-light leading-relaxed">
<p className="text-stone-800 font-normal">
                            Fyzioterapii se věnuji od roku 1998. Vystudovala jsem 2. lékařskou fakultu UK v Praze a následně magisterský obor na LF UP v Olomouci.
                        </p>
<p className="text-sm">
                            Vzdělání si neustále prohlubuji na odborných kurzech. Ve své terapii se věnuji dospělým, kojencům a dětem. Zaměřuji se na funkční ženskou neplodnost, bolesti v těhotenství a po porodu, ale velkou část mé klientely tvoří i lidé s bolestmi zad a sportovci.
                        </p>
</div>
<div className="mt-8 space-y-6">
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:briefcase"></iconify-icon> Praxe
                            </h4>
<ul className="text-xs text-stone-500 space-y-2 font-medium">
<li>2021 – dosud: <strong className="text-stone-700">Ústav pro péči o matku a dítě</strong>, Praha - Podolí</li>
<li>2013 – 2014: <strong className="text-stone-700">Centrum pohybové medicíny prof. Pavla Koláře</strong></li>
<li>2006 – 2018: <strong className="text-stone-700">FN Motol</strong> (Klinika rehabilitace, přednosta prof. Pavel Kolář)</li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-3 flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:award"></iconify-icon> Vybrané kurzy
                            </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-stone-600">DNS dle Koláře</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-stone-600">Vojtova metoda</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-stone-600">Metoda L. Mojžíšové</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-stone-600">Viscerální manipulace</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-stone-600">Pánevní dno</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Specializace</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Nabízím</h2>
<p className="text-stone-500 font-light">
                    Komplexní diagnostika a terapie funkčních poruch pohybového aparátu.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Fyzioterapie a rehabilitace</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Pro dospělé i děti. Řešení akutních i chronických bolestí zad a kloubů, stavy po úrazech a operacích.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Bolesti páteře
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Neurologická onemocnění
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Děti od novorozenců
                        </li>
</ul>
</div>

<div className="relative p-8 bg-stone-800 rounded-3xl text-white shadow-xl overflow-hidden md:-mt-4 md:mb-4 flex flex-col justify-center">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-teal-300">
<iconify-icon icon="lucide:baby" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wider border border-teal-500/20">Hlavní zaměření</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Gynekologická fyzioterapie</h3>
<p className="text-sm text-stone-300 leading-relaxed mb-6">
                            Specializovaná péče v oblasti ženského zdraví, těhotenství a po porodu.
                        </p>
<div className="space-y-3 border-t border-white/10 pt-6">
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Funkční sterilita (Metoda L. Mojžíšové)
                            </div>
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Bolesti kostrče a pánve
                            </div>
<div className="flex items-center gap-3 text-xs text-stone-200">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon> Inkontinence a pánevní dno
                            </div>
</div>
</div>
</div>

<div className="group p-8 bg-stone-50 rounded-3xl transition-colors duration-300 hover:bg-teal-50/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-stone-700 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Ostatní služby</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Doplňkové terapie pro podporu vašeho zdraví a relaxaci.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Sportovní a relaxační masáže
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Kinesiotaping
                        </li>
<li className="flex items-center gap-3 text-xs text-stone-600">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Cvičení v těhotenství
                        </li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-4">Spolupracuji</p>
<a className="inline-block grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" href="https://www.studiozdravehoobouvani.cz" target="_blank">
<img alt="Studio zdravého obouvání" className="h-12 w-auto object-contain mix-blend-multiply" src="https://www.fyzio-vacova.cz/assets/images/image02.jpg?v=9ddf08dc"/>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200" id="cenik">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Ceník služeb</h2>
<p className="text-stone-500 text-sm">
                    Platný od 1. 1. 2025. Ordinace nemá smlouvy se zdravotními pojišťovnami. <br/>
<span className="font-medium text-stone-700">Platba pouze v hotovosti.</span>
</p>
</div>
<div className="bg-white rounded-2xl shadow-soft overflow-hidden divide-y divide-stone-100">

<div className="p-6 sm:p-8">
<h3 className="text-lg font-medium text-stone-900 mb-4">Dospělí</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Vstupní konzultace (55 min)</span>
<span className="font-semibold text-stone-900">1 400 Kč</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Terapie (55 min)</span>
<span className="font-semibold text-stone-900">1 400 Kč</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Zkrácená terapie (30 min)</span>
<span className="font-semibold text-stone-900">700 Kč</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Online konzultace (45 min)</span>
<span className="font-semibold text-stone-900">700 Kč</span>
</div>
</div>
</div>

<div className="p-6 sm:p-8 bg-stone-50/50">
<h3 className="text-lg font-medium text-stone-900 mb-4">Děti</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Děti do 6 let (55 min)</span>
<span className="font-semibold text-stone-900">1 200 Kč</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600">Děti 7 - 18 let (55 min)</span>
<span className="font-semibold text-stone-900">1 400 Kč</span>
</div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-stone-400 text-center max-w-2xl mx-auto">
<p className="mb-2">Storno poplatek při zrušení méně než 1 pracovní den předem: <strong>700 Kč</strong>.</p>
<p>Možnost zakoupení dárkových poukazů (platnost 1 rok).</p>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white relative overflow-hidden" id="kontakt">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Kontakt</h2>
<p className="text-teal-100/80 mb-12 font-light text-lg">
                        Objednávky přijímám telefonicky každý všední den od 8:00 do 20:00. Mimo tuto dobu prosím využijte SMS nebo e-mail.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Adresa ordinace</p>
<p className="text-base text-teal-100/70 leading-relaxed">
                                    Ženské domovy<br/>Ostrovského 3, Praha 5<br/>3. patro, dveře 3.109
                                </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:phone" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">Telefon</p>
<a className="text-xl text-white hover:text-teal-300 transition-colors" href="tel:+420733528700">+420 733 528 700</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-300 flex-shrink-0 backdrop-blur-sm border border-white/5">
<iconify-icon icon="lucide:mail" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white mb-1">E-Mail</p>
<a className="text-base text-teal-100/70 hover:text-white transition-colors" href="mailto:fyzio.vacova@gmail.com">fyzio.vacova@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-3xl p-8 shadow-2xl shadow-teal-900/50 text-stone-800">
<h3 className="text-lg font-semibold text-stone-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="lucide:clock"></iconify-icon> Ordinační hodiny
                        </h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between border-b border-stone-100 pb-2">
<span className="font-medium text-stone-500">Pondělí</span>
<span>07:00 - 12:00</span>
</div>
<div className="flex justify-between border-b border-stone-100 pb-2">
<span className="font-medium text-stone-500">Úterý</span>
<span>07:00 - 21:00</span>
</div>
<div className="flex justify-between border-b border-stone-100 pb-2">
<span className="font-medium text-stone-500">Středa</span>
<span className="text-stone-400">Dle domluvy</span>
</div>
<div className="flex justify-between border-b border-stone-100 pb-2">
<span className="font-medium text-stone-500">Čtvrtek</span>
<span>14:00 - 21:00</span>
</div>
<div className="flex justify-between">
<span className="font-medium text-stone-500">Pátek</span>
<span className="text-stone-400">Dle domluvy</span>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden h-64 bg-stone-200 shadow-lg border-4 border-white/10">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.93244512175!2d14.401775125513694!3d50.068826786547696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b945723b9cded:0x77de4a7b9733d11e!2zxb1lbnNrw6kgZG9tb3Z5!5e0!3m2!1scs!2scz!4v1591254253076!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-4 opacity-80">
<div className="w-6 h-6 bg-stone-300 text-white rounded flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 9"></path><path d="M12 9c1.2 0 2.4.6 3 1.7A3.6 3.6 0 0 1 12 15"></path><path d="M12 15c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 12 21"></path></svg>
</div>
<span className="text-stone-900 font-bold">Eva Vacová</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                        Nestátní zdravotnické zařízení poskytující odbornou fyzioterapeutickou péči v Praze.
                    </p>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Rychlá navigace</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-teal-600 transition-colors" href="#home">Úvod</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#o-mne">O mně</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#sluzby">Služby</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#cenik">Ceník</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-900 text-sm font-semibold mb-4">Kontakt</h4>
<p className="text-xs text-stone-500 mb-2">Ženské domovy, Ostrovského 3, Praha 5</p>
<p className="text-xs text-stone-500 mb-4">fyzio.vacova@gmail.com</p>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400">
<p>© 2025 Eva Vacová - Fyzioterapie. Všechna práva vyhrazena.</p>
<div className="flex gap-6 mt-2 md:mt-0">
<span className="text-stone-300">Design refreshed</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
