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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center group-hover:bg-emerald-800 transition-colors">
<span className="font-semibold text-lg">F</span>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase group-hover:text-emerald-900 transition-colors">
                    Farma pod Janovou horou
                </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors" href="#kone">Naši koně</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors" href="#cenik">Ceník</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-emerald-900 px-4 text-sm font-medium text-white shadow transition-all hover:bg-emerald-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" href="#rezervace">
                    Rezervace
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                Nové termíny táborů 2026
            </div>
<h1 className="mx-auto max-w-4xl font-semibold tracking-tighter text-slate-900 text-5xl sm:text-6xl lg:text-7xl mb-6">
                Příroda, koně a <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">zážitky na celý život</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-10 leading-relaxed">
                Rodinná farma ve Vizovicích. Nabízíme jezdeckou školu, ustájení koní a nezapomenutelné letní tábory pro děti. Objevte krásu Zlínského kraje ze sedla.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg bg-emerald-900 px-8 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-800 hover:-translate-y-0.5" href="#tabory">
<iconify-icon className="mr-2 text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                    Přihlásit na tábor
                </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300" href="#sluzby">
                    Prohlédnout služby
                </a>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900">15+</p>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Let tradice</p>
</div>
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900">30</p>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Spokojených koní</p>
</div>
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900">500+</p>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Absolventů kroužků</p>
</div>
<div className="space-y-2">
<p className="text-3xl font-semibold tracking-tight text-slate-900">100%</p>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">Láska k přírodě</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Co nabízíme</h2>
<p className="text-slate-500 max-w-xl">Komplexní péče o jezdce i koně. Od prvních krůčků v sedle až po profesionální ustájení.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 md:col-span-2">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="120" icon="solar:stars-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Jezdecké kroužky</h3>
<p className="text-slate-500 mb-6 max-w-md">Pravidelná výuka pro děti i dospělé. Učíme nejen jezdit, ale i rozumět koním, pečovat o ně a chápat jejich potřeby. Úterý, středa nebo čtvrtek.</p>
<a className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800" href="#krouzky">
                            Více o kroužcích <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50 p-8 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 border-l-4 border-l-emerald-600">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Letní tábory</h3>
<p className="text-slate-500 mb-6">Příměstské i pobytové turnusy plné her, ježdění a pobytu v přírodě.</p>
<a className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800" href="#tabory">
                            Termíny a přihláška <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Ustájení koní</h3>
<p className="text-slate-500 mb-6">Boxové i pastevní ustájení s individuálním přístupem ke každému koni.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900" href="#cenik">
                            Ceník ustájení <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 md:col-span-2">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:confetti-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Akce na farmě</h3>
<p className="text-slate-500 max-w-md">Exkurze pro školy, firemní dny nebo narozeninové oslavy v netradičním prostředí.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#kontakt">
                                Poptat akci
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-slate-900">
                        O farmě pod Janovou horou
                    </h2>
<div className="space-y-4 text-slate-600 leading-relaxed">
<p>
                            Nacházíme se v malebném prostředí Vizovických vrchů. Naše farma vznikla z lásky ke zvířatům a touhy vytvořit místo, kde se lidé mohou zastavit a načerpat energii z přírody.
                        </p>
<p>
                            Specializujeme se na práci s mládeží, výcvik koní přirozenou cestou a pořádání volnočasových aktivit. Klademe důraz na bezpečnost, rodinnou atmosféru a individuální přístup.
                        </p>
</div>
<ul className="space-y-3 mt-6">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Kvalifikovaní instruktoři s licencí
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Velká písková jízdárna se skokovým materiálem
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-emerald-600 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Krásné terény pro vyjížďky v okolí Vizovic
                        </li>
</ul>
</div>

<div className="relative h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">

<div className="text-center">
<iconify-icon className="opacity-50" height="64" icon="solar:gallery-wide-linear" width="64"></iconify-icon>
<p className="mt-4 text-sm font-medium">Fografie areálu a koní</p>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-6 border border-slate-200/50 shadow-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Kde nás najdete?</p>
<p className="text-xs text-slate-500">Vizovice, Zlínský kraj</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-slate-50 scroll-mt-16" id="tabory">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium mb-4">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                    Otevřeny přihlášky na rok 2026
                </div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Rezervace letního tábora</h2>
<p className="text-slate-500">Vyplňte formulář pro nezávaznou rezervaci místa. Záloha 1500 Kč je splatná po potvrzení přihlášky.</p>
</div>
<div className="bg-white rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="border-b border-slate-100 px-8 py-6 bg-slate-50/50">
<h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:document-add-linear"></iconify-icon>
                        Přihláškový formulář
                    </h3>
</div>
<form className="p-8 space-y-8">

<div className="space-y-6">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Kontaktní osoba (Rodič)</h4>
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="parent_name">Jméno a příjmení <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="parent_name" name="jmeno_prijmeni" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Telefon <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="phone" name="telefon" placeholder="+420 777 000 000" required="" type="tel"/>
</div>
<div className="sm:col-span-2 space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">E-mail <span className="text-red-500">*</span></label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="email" name="email" placeholder="jan.novak@email.cz" required="" type="email"/>
<p className="text-xs text-slate-500">Na tento e-mail vám zašleme potvrzení a pokyny k platbě.</p>
</div>
</div>
</div>

<div className="space-y-6">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Údaje o dítěti a termín</h4>
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="child_name">Jméno dítěte</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="child_name" name="jmeno_ditete" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="child_age">Věk</label>
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="child_age" max="18" min="4" name="vek_ditete" type="number"/>
</div>
<div className="sm:col-span-2 space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="term">Termín tábora <span className="text-red-500">*</span></label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow bg-white" id="term" name="termin_tabora" required="">
<option disabled="" selected="" value="">Vyberte termín</option>
<option value="primestsky_1">Příměstský tábor 1. turnus (Červenec)</option>
<option value="primestsky_2">Příměstský tábor 2. turnus (Srpen)</option>
<option value="pobytovy_1">Pobytový tábor 1. turnus</option>
<option value="pobytovy_2">Pobytový tábor 2. turnus</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="sm:col-span-2 space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="note">Poznámka (Zdravotní omezení, dieta, atd.)</label>
<textarea className="block w-full rounded-lg border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow" id="note" name="poznamka" rows="3"></textarea>
</div>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-slate-100">

<div className="relative flex items-start">
<div className="flex h-6 items-center">
<input className="custom-check peer h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" id="consent_gdpr" name="consent_gdpr" required="" type="checkbox"/>
<div className="absolute w-4 h-4 bg-white border border-slate-300 rounded peer-checked:bg-emerald-600 peer-checked:border-emerald-600 flex items-center justify-center pointer-events-none mt-1">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<div className="ml-3 text-sm leading-6">
<label className="font-medium text-slate-900" htmlFor="consent_gdpr">
                                    Souhlas se zpracováním osobních údajů <span className="text-red-500">*</span>
</label>
<p className="text-slate-500 text-xs">Potvrzuji seznámení se <a className="text-emerald-600 hover:underline" href="#">Zásadami ochrany osobních údajů</a>.</p>
</div>
</div>

<div className="relative flex items-start">
<div className="flex h-6 items-center">
<input className="custom-check peer h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600" id="consent_marketing" name="consent_marketing" type="checkbox"/>
<div className="absolute w-4 h-4 bg-white border border-slate-300 rounded peer-checked:bg-emerald-600 peer-checked:border-emerald-600 flex items-center justify-center pointer-events-none mt-1">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<div className="ml-3 text-sm leading-6">
<label className="font-medium text-slate-900" htmlFor="consent_marketing">Chci dostávat novinky o akcích na farmě</label>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full flex justify-center rounded-lg bg-emerald-900 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all hover:scale-[1.01]" type="submit">
                            Odeslat závaznou přihlášku
                        </button>
<p className="mt-4 text-center text-xs text-slate-400">
                            Odesláním formuláře souhlasíte s podmínkami a provozním řádem tábora.
                        </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">
<div className="rounded-xl bg-slate-50 p-8 border border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:file-download-linear"></iconify-icon>
                        Dokumenty ke stažení
                    </h3>
<ul className="space-y-3">
<li>
<a className="flex items-center justify-between text-sm text-slate-600 hover:text-emerald-700 group p-2 hover:bg-white rounded-lg transition-colors" href="#">
<span>Potvrzení o bezinfekčnosti (PDF)</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:download-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex items-center justify-between text-sm text-slate-600 hover:text-emerald-700 group p-2 hover:bg-white rounded-lg transition-colors" href="#">
<span>Lékařský posudek (PDF)</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:download-linear"></iconify-icon>
</a>
</li>
<li>
<a className="flex items-center justify-between text-sm text-slate-600 hover:text-emerald-700 group p-2 hover:bg-white rounded-lg transition-colors" href="#">
<span>Provozní řád stáje (PDF)</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" icon="solar:download-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
<div className="rounded-xl bg-emerald-900 p-8 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon height="100" icon="solar:chat-round-line-linear" width="100"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-4 relative z-10">Máte dotaz?</h3>
<p className="text-emerald-100 mb-6 text-sm leading-relaxed relative z-10">
                        Nevíte si rady s výběrem kroužku nebo máte specifické požadavky na ustájení? Napište nám.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-white underline underline-offset-4 hover:text-emerald-200 relative z-10" href="mailto:farmapodjanovouhorou@seznam.cz">
                        farmapodjanovouhorou@seznam.cz
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-900 flex items-center justify-center text-white text-xs font-bold">F</div>
<span className="text-xs font-bold tracking-tighter text-slate-900 uppercase">Farma pod Janovou horou</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Místo, kde se setkává láska k přírodě s profesionální péčí o zvířata. Vizovice.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Rychlé odkazy</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-emerald-700 transition-colors" href="#krouzky">Kroužky</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-700 transition-colors" href="#tabory">Tábory</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-700 transition-colors" href="#cenik">Ceník</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-700 transition-colors" href="#kone">Naši koně</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Kontakt</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-500">Vizovice<br/>Zlínský kraj</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-emerald-700" href="mailto:farmapodjanovouhorou@seznam.cz">farmapodjanovouhorou@seznam.cz</a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Sledujte nás</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-600 hover:text-emerald-600 transition-all" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-600 hover:text-emerald-600 transition-all" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2026 Farma pod Janovou horou. Všechna práva vyhrazena.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Ochrana osobních údajů (GDPR)</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
