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
      

<div className="bg-slate-900 text-slate-300 py-2.5 text-xs font-medium border-b border-slate-800">
<div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-sm" icon="solar:phone-linear"></iconify-icon>
                    +32 9 123 45 67
                </span>
<span className="hidden sm:flex items-center gap-2">
<iconify-icon className="text-orange-500 text-sm" icon="solar:letter-linear"></iconify-icon>
                    info@elgotechnics.be
                </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-sm" icon="solar:verified-check-linear"></iconify-icon>
                Erkend RESCERT Installateur
            </div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
<div className="max-w-[1100px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex flex-col">
<a className="text-xl tracking-tight font-bold text-slate-900 uppercase leading-none" href="#">
                    Elgo<span className="text-orange-600">Technics</span>
</a>
<span className="text-[10px] uppercase tracking-widest text-slate-500 mt-0.5">Elektriciteitswerken &amp; Solar</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
<a className="hover:text-orange-600 transition-colors" href="#aanpak">Onze Aanpak</a>
<a className="hover:text-orange-600 transition-colors" href="#techniek">Techniek</a>
<a className="hover:text-orange-600 transition-colors" href="#realisaties">Projecten</a>
<a className="hover:text-orange-600 transition-colors" href="#faq">Vragen</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors" href="#contact">
                Gratis Offerte
            </a>
</div>
</nav>

<header className="bg-white border-b border-slate-200 pt-12 pb-16 md:pt-20 md:pb-24">
<div className="max-w-[1100px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 rounded bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 w-fit border border-slate-200">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Beschikbaar voor projecten in 2024
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Uw installateur voor <span className="text-orange-600">zonnepanelen</span> en thuisbatterijen.
                    </h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                        Verlaag uw energiefactuur met een installatie op maat. Wij zorgen voor een veilige plaatsing, keuring en aanmelding bij Fluvius.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
<div className="bg-white p-1.5 rounded text-orange-600 shadow-sm border border-slate-100">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">10 Jaar Garantie</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
<div className="bg-white p-1.5 rounded text-orange-600 shadow-sm border border-slate-100">
<iconify-icon className="text-xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">RESCERT Gecertificeerd</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
<div className="bg-white p-1.5 rounded text-orange-600 shadow-sm border border-slate-100">
<iconify-icon className="text-xl" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Persoonlijke Service</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
<div className="bg-white p-1.5 rounded text-orange-600 shadow-sm border border-slate-100">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Binnen 4-8 weken geplaatst</span>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-lg shadow-xl border border-slate-200 p-6 sm:p-8 relative">
<div className="absolute top-0 left-0 w-full h-1.5 bg-orange-600 rounded-t-lg"></div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Vraag uw offerte aan</h3>
<p className="text-sm text-slate-500 mb-6">Gratis en vrijblijvende berekening van uw dak.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Naam</label>
<input className="custom-input w-full rounded border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Uw volledige naam" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Gemeente</label>
<input className="custom-input w-full rounded border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Postcode of gemeente" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Telefoonnummer</label>
<input className="custom-input w-full rounded border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="04..." type="tel"/>
</div>
<button className="w-full rounded bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors mt-2">
                                Verstuur Aanvraag
                            </button>
</form>
<p className="text-[10px] text-center text-slate-400 mt-4">Wij respecteren uw privacy. Geen spam.</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-[1100px] mx-auto px-6">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Waarom kiezen voor Elgo Technics?</h2>
<p className="text-slate-600 font-medium">In een complexe energiemarkt zorgen wij voor duidelijke oplossingen. Geen gladde verkooppraatjes, maar technische expertise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-5 border border-slate-200">
<iconify-icon className="text-2xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Slimme Zonnepanelen</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Installaties berekend op het nieuwe capaciteitstarief. Wij plaatsen enkel Tier-1 merken.</p>
<div className="h-1 w-12 bg-orange-500 rounded"></div>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-5 border border-slate-200">
<iconify-icon className="text-2xl" icon="solar:battery-charge-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Thuisbatterijen</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Opslag van overtollige energie om 's avonds te gebruiken. Essentieel voor rendement.</p>
<div className="h-1 w-12 bg-orange-500 rounded"></div>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-5 border border-slate-200">
<iconify-icon className="text-2xl" icon="solar:ev-charge-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Laadpalen</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Slimme laadstations die communiceren met uw zonnepanelen voor maximaal voordeel.</p>
<div className="h-1 w-12 bg-orange-500 rounded"></div>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
<div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center text-slate-900 mb-5 border border-slate-200">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900 mb-2">Onderhoud &amp; Service</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Ook na de installatie blijven wij beschikbaar voor monitoring en onderhoud.</p>
<div className="h-1 w-12 bg-orange-500 rounded"></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900 text-white" id="techniek">
<div className="max-w-[1100px] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
                        Technische Expertise
                    </div>
<h2 className="text-3xl font-bold tracking-tight mb-6">Beheers uw piekverbruik</h2>
<p className="text-slate-300 text-lg leading-relaxed mb-8">
                        De tijd van zomaar panelen leggen is voorbij. Wij installeren systemen die actief sturen op basis van productie en verbruik om het capaciteitstarief te beperken.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 mt-0.5 text-orange-500">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">Hybride Omvormers</h4>
<p className="text-sm text-slate-400 mt-1">Direct klaar voor batterij-aansluiting.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 mt-0.5 text-orange-500">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">EMS (Energy Management)</h4>
<p className="text-sm text-slate-400 mt-1">Slimme sturing van boiler, laadpaal en warmtepomp.</p>
</div>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full">

<div className="w-full bg-white rounded-lg p-1">
<div className="bg-slate-100 rounded border border-slate-200 aspect-[4/3] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<iconify-icon className="text-6xl text-slate-400 mb-4" icon="solar:graph-new-linear"></iconify-icon>
<p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Technische Schema's</p>
<p className="text-xs text-slate-500 mt-2">AREI Conform Eendraadschema</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="aanpak">
<div className="max-w-[1100px] mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 border-l-4 border-orange-600 pl-4">Hoe wij werken</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-orange-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-bold text-sm">1</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="font-bold text-slate-900">Plaatsbezoek &amp; Analyse</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:home-add-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600">Wij komen langs om uw dak, meterkast en verbruik te bekijken. Geen offerte op afstand, maar maatwerk.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-orange-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-bold text-sm">2</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="font-bold text-slate-900">Offerte &amp; Plan</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600">U ontvangt een gedetailleerde offerte met rendementsberekening en legplan.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-orange-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-bold text-sm">3</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="font-bold text-slate-900">Installatie</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:screw-driver-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600">Plaatsing binnen 1 dag door ons eigen team van ervaren elektriciens en dakwerkers.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-orange-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="font-bold text-sm">4</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="font-bold text-slate-900">Keuring &amp; Opstart</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600">Wij regelen de AREI-keuring en de aanmelding bij Fluvius. U hoeft niets te doen.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-200" id="realisaties">
<div className="max-w-[1100px] mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-bold tracking-tight text-slate-900">Recente Projecten</h2>
<p className="text-slate-600 mt-2">Een greep uit onze realisaties in Vlaanderen.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-orange-700" href="#">
                    Bekijk alle projecten <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-slate-200 relative flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400" icon="solar:solar-power-linear"></iconify-icon>
<span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Oudenaarde</span>
</div>
<div className="p-4">
<h3 className="font-bold text-slate-900 text-sm">Schuin dak - Zwarte Panelen</h3>
<p className="text-xs text-slate-500 mt-1">14 Panelen • 440 Wp • Huawei Omvormer</p>
</div>
</div>

<div className="group bg-white rounded border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-slate-200 relative flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400" icon="solar:home-2-linear"></iconify-icon>
<span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Kortrijk</span>
</div>
<div className="p-4">
<h3 className="font-bold text-slate-900 text-sm">Plat dak installatie</h3>
<p className="text-xs text-slate-500 mt-1">East-West opstelling • Thuisbatterij 10kWh</p>
</div>
</div>

<div className="group bg-white rounded border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
<div className="aspect-video bg-slate-200 relative flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400" icon="solar:bolt-linear"></iconify-icon>
<span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Gent</span>
</div>
<div className="p-4">
<h3 className="font-bold text-slate-900 text-sm">Renovatieproject</h3>
<p className="text-xs text-slate-500 mt-1">8 Panelen • Vervanging meterkast</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white overflow-hidden">
<div className="max-w-[1100px] mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 bg-slate-100 rounded border border-slate-200 p-8 flex flex-col items-center">

<div className="w-[200px] aspect-[1/2] border-4 border-slate-800 rounded-[2rem] bg-white shadow-xl overflow-hidden relative">
<div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center"><div className="w-16 h-3 bg-slate-700 rounded-b-lg"></div></div>
<div className="p-4 mt-8 flex flex-col gap-2">
<div className="h-20 bg-green-50 rounded border border-green-100 flex items-center justify-center text-green-700 font-bold text-xs">Productie</div>
<div className="h-20 bg-orange-50 rounded border border-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs">Verbruik</div>
<div className="h-32 bg-slate-50 rounded border border-slate-100 flex items-end justify-center pb-2">
<iconify-icon className="text-4xl text-blue-500" icon="solar:graph-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-4 text-center">Voorbeeld interface monitoringsapp</p>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Volg uw rendement in real-time</h2>
<p className="text-lg text-slate-600 mb-6 font-medium">
                        Na installatie koppelen wij uw systeem aan een handige app op uw smartphone.
                    </p>
<div className="grid grid-cols-1 gap-4">
<div className="flex gap-4 p-4 rounded bg-slate-50 border border-slate-100">
<iconify-icon className="text-orange-600 text-2xl shrink-0" icon="solar:smartphone-linear"></iconify-icon>
<div>
<h4 className="font-bold text-slate-900 text-sm">Inzicht</h4>
<p className="text-sm text-slate-500">Zie exact wat u opwekt en wat u verbruikt.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded bg-slate-50 border border-slate-100">
<iconify-icon className="text-orange-600 text-2xl shrink-0" icon="solar:bell-linear"></iconify-icon>
<div>
<h4 className="font-bold text-slate-900 text-sm">Meldingen</h4>
<p className="text-sm text-slate-500">Krijg een seintje bij storingen of ongewoon verbruik.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 text-center">Veelgestelde vragen</h2>
<div className="space-y-4">
<details className="group bg-white rounded border border-slate-200 open:ring-1 open:ring-orange-200 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 p-5">
                        Is mijn woning ouder dan 10 jaar? (6% BTW)
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-600 text-sm">
                        Indien uw woning ouder is dan 10 jaar, geniet u van het verlaagde BTW-tarief van 6% op zowel materiaal als werkuren. Voor nieuwbouw geldt 21%.
                    </div>
</details>
<details className="group bg-white rounded border border-slate-200 open:ring-1 open:ring-orange-200 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 p-5">
                        Werken jullie met eigen personeel?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-600 text-sm">
                        Ja. Wij werken niet met onderaannemers. De zaakvoerder komt zelf langs voor de offerte en leidt de werf tijdens de installatie. Zo heeft u altijd één aanspreekpunt.
                    </div>
</details>
<details className="group bg-white rounded border border-slate-200 open:ring-1 open:ring-orange-200 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-slate-900 p-5">
                        Welke merken gebruiken jullie?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-slate-600 text-sm">
                        Wij kiezen bewust voor A-merken zoals Huawei, SMA en SolarEdge voor omvormers, en Tier-1 panelen (zoals Longi, Jinko of Trina) met lange fabrieksgaranties.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
<div className="max-w-[1100px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-b border-slate-800 pb-12">
<div>
<h2 className="text-3xl font-bold mb-6">Start uw besparing vandaag.</h2>
<p className="text-slate-400 mb-8 max-w-md">
                        Contacteer ons voor een gratis plaatsbezoek. Wij meten alles op en bezorgen u een eerlijke offerte zonder verrassingen achteraf.
                    </p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-4 text-lg font-medium hover:text-orange-500 transition-colors" href="tel:+3200000000">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
                            +32 9 123 45 67
                        </a>
<a className="flex items-center gap-4 text-lg font-medium hover:text-orange-500 transition-colors" href="mailto:info@elgo.be">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
                            info@elgotechnics.be
                        </a>
<div className="flex items-center gap-4 text-lg font-medium text-slate-400">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
                            Regio Oost- &amp; West-Vlaanderen
                        </div>
</div>
</div>
<div className="bg-slate-800 rounded p-8 border border-slate-700">
<h3 className="font-bold text-white mb-4">Bedrijfsgegevens</h3>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex justify-between border-b border-slate-700 pb-2">
<span>BTW Nummer:</span>
<span className="text-white font-mono">BE 0123.456.789</span>
</li>
<li className="flex justify-between border-b border-slate-700 pb-2">
<span>Rescert Nummer:</span>
<span className="text-white font-mono">SV-01234</span>
</li>
<li className="flex justify-between border-b border-slate-700 pb-2">
<span>Erkenning:</span>
<span className="text-white">Klasse 1 Elektriciteit</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Elgo Technics. Algemene elektriciteitswerken &amp; Zonne-energie.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacybeleid</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
