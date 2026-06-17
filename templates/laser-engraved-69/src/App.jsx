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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-zinc-900 uppercase" href="#">Visiitkaart<span className="text-zinc-400">.io</span></a>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="https://lasershop.ee/et/">Tooted</a>
<a className="hover:text-zinc-900 transition-colors" href="https://vlink.ee/?change_language=et">Tehnoloogia</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Hinnakiri</a>
</div>
<a className="text-xs font-medium bg-zinc-900 text-white px-4 py-1.5 rounded-md hover:bg-zinc-800 transition-colors" href="https://lasershop.ee/et/">Telli kohe</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl"></div>
<div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-zinc-50 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center space-x-2 bg-zinc-50 border border-zinc-200 rounded-full px-3 py-1 mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-zinc-900"></span>
<span className="text-xs font-medium text-zinc-600">Uus tase graveerimises</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Jäta jälg, mis kestab. <br/>
<span className="text-zinc-400">Igavesti.</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-zinc-500 mb-10 leading-relaxed">
                Tipptasemel lasergraveerimine ja nutikad lahendused.
                Oma klassi parim <a className="link-underline text-zinc-800 font-normal" href="https://lasershop.ee/et/">Visiitkaart</a> ühendab minimalistliku disaini ja 
                tulevikutehnoloogia. Avasta ka meie <a className="link-underline text-zinc-800 font-normal" href="https://vlink.ee/?change_language=et">NFC visiitkaart</a> kollektsioon.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md w-full md:w-auto" href="https://lasershop.ee/et/">
<span>Tutvu valikuga</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all w-full md:w-auto" href="https://vlink.ee/?change_language=et">
<span>Nutikad lahendused</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50/50 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-12 text-center">Materjal kohtub tehnoloogiaga</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 group relative bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900" icon="solar:medal-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Premium Metall</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                                Eksklusiivne <a className="link-underline" href="https://lasershop.ee/et/">Metallist visiitkaart</a> on valmistatud vastupidavast roostevabast terasest või alumiiniumist. Täpne lasergraveering tagab detailsuse, mida paber ei suuda pakkuda.
                            </p>
</div>
<div className="mt-8">

<div className="flex items-center space-x-3 text-xs font-medium text-zinc-400">
<label className="flex items-center space-x-2 cursor-pointer">
<input checked="" className="peer sr-only" name="material" type="radio"/>
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-zinc-100 peer-checked:bg-zinc-900 peer-checked:border-zinc-900"></div>
<span className="peer-checked:text-zinc-900">Must Metall</span>
</label>
<label className="flex items-center space-x-2 cursor-pointer">
<input className="peer sr-only" name="material" type="radio"/>
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-zinc-200 peer-checked:bg-zinc-400 peer-checked:border-zinc-400"></div>
<span className="peer-checked:text-zinc-900">Hõbe</span>
</label>
<label className="flex items-center space-x-2 cursor-pointer">
<input className="peer sr-only" name="material" type="radio"/>
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-[#D4AF37] peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37]"></div>
<span className="peer-checked:text-zinc-900">Kuld</span>
</label>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-zinc-900 rounded-xl p-8 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-white" icon="solar:smartphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2">Nutikas Ühendus</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Kaasaegne <a className="text-white hover:text-zinc-300 underline underline-offset-4 decoration-zinc-600" href="https://vlink.ee/?change_language=et">Nutikas visiitkaart</a> kasutab NFC tehnoloogiat kontaktide jagamiseks ühe viipega.
                        </p>

<div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10">
<span className="text-xs font-medium text-zinc-300">NFC Aktiivne</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-900 transition-all duration-300 left-0 checked:right-0 checked:left-auto" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>
</div>
</div>

<div className="col-span-1 bg-white border border-zinc-200 rounded-xl p-8 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900" icon="solar:printer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Laser Tehnoloogia</h3>
<p className="text-xs text-zinc-500 mb-6">Täpsus mikromeetri tasemel.</p>

<div className="space-y-3">
<div className="flex justify-between text-xs font-medium text-zinc-400">
<span>Sügavus</span>
<span>0.5mm</span>
</div>
<input className="w-full h-1 bg-zinc-100 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="50"/>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-white border border-zinc-200 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-sm transition-shadow">
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Säästlik ja püsiv</h3>
<p className="text-sm text-zinc-500 max-w-sm">
                            Erinevalt paberist ei kulu <a className="link-underline" href="https://lasershop.ee/et/">Visiitkaart</a> ega vaja pidevat uustrükki. Üks kaart, tuhanded kohtumised.
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-xs font-bold text-zinc-400">Fe</div>
<div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-xs font-bold text-zinc-500">Al</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-white flex items-center justify-center text-xs font-bold text-white">Ti</div>
</div>
<div className="text-xs text-zinc-400 font-medium pl-2">
                            Saadaval erinevad sulamid
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">
<a className="link-underline" href="https://vlink.ee/?change_language=et">NFC visiitkaart</a> —<br/>
                        Sinu digitaalne identiteet.
                    </h2>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Unusta paberilipikute trükkimine. Nutikas lahendus võimaldab sul muuta oma kontaktandmeid reaalajas, ilma et peaksid füüsilist kaarti vahetama. See on <a className="link-underline" href="https://lasershop.ee/et/">Metallist visiitkaart</a>, mis mõtleb sinuga kaasa.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Ei mingit rakenduse allalaadimist vastuvõtjale</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Töötab nii iOS kui Android seadmetega</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-600">Reaalajas andmete uuendamine</span>
</li>
</ul>
<div className="pt-4">
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition-colors" href="https://vlink.ee/?change_language=et">
                            Loe lähemalt tehnoloogiast 
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full">

<div className="relative w-full aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full border border-zinc-200 opacity-50"></div>
<div className="absolute -left-10 bottom-10 w-40 h-40 bg-zinc-200 rounded-full opacity-30 blur-2xl"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 aspect-[1.586] bg-gradient-to-br from-zinc-800 to-black rounded-xl shadow-2xl flex flex-col p-6 justify-between text-white border border-zinc-700/50">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded bg-white/10 backdrop-blur-md"></div>
<iconify-icon className="text-white/50" icon="solar:wireless-charge-linear" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<div className="w-2/3 h-2 bg-white/20 rounded"></div>
<div className="w-1/2 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6">Valmis eristuma?</h2>
<p className="text-lg text-zinc-500 font-light mb-10">
                Telli oma ettevõttele <a className="text-zinc-900 underline decoration-zinc-300 underline-offset-4" href="https://lasershop.ee/et/">Metallist visiitkaart</a> või liigu digitaalajastusse <a className="text-zinc-900 underline decoration-zinc-300 underline-offset-4" href="https://vlink.ee/?change_language=et">NFC lahendusega</a>.
            </p>
<div className="flex justify-center gap-4">
<a className="bg-zinc-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200" href="https://lasershop.ee/et/">
                    Telli Laserist
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-semibold tracking-widest text-zinc-900 uppercase mb-4 block" href="#">Visiitkaart.</a>
<p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                        Premium kvaliteediga graveerimisteenused ja nutikad lahendused äriklientidele.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Tooted</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="https://lasershop.ee/et/">Metallist visiitkaart</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="https://vlink.ee/?change_language=et">NFC visiitkaart</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="https://lasershop.ee/et/">Graveerimine</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Ettevõte</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Meist</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privaatsus</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Sotsiaalmeedia</h4>
<div className="flex space-x-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 Lasershop &amp; Vlink. Kõik õigused kaitstud.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-zinc-400">Süsteemid on töös</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
