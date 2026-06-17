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
},
colors: {
navy: {
800: '#1A2B3C', // Deep Navy Brand Color
900: '#111d29',
},
gold: {
400: '#FFC107', // Safety Yellow / Gold Accent
500: '#F59E0B',
}
}
}
}
}

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
      

<nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-navy-800 uppercase" href="/">
                ELGO <span className="text-gold-500">Technics</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#diensten">Diensten</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#energie">Energie</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#over-ons">Over ons</a>
<a className="inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-navy-800 text-white hover:bg-navy-900 transition-colors h-10 px-5 shadow-sm" href="#contact">
                    Contacteer ons
                </a>
</div>

<button className="md:hidden text-navy-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col justify-center order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold uppercase tracking-wide text-navy-800 mb-6 w-fit">
<span className="w-2 h-2 rounded-full bg-gold-400"></span>
                        Uw Vakman in Regio 9790
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-800 leading-[1.1] mb-6">
                        Elektricien in Wortegem-Petegem – <span className="text-slate-500">Klaar voor de energietransitie</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        In een tijdperk van stijgende energieprijzen en de uitrol van de <strong>digitale meter</strong>, volstaat een standaard installatie niet meer. Als gespecialiseerd elektricien in Wortegem-Petegem begeleiden wij u naar een toekomstbestendige woning. Of het nu gaat om een complexe renovatie of het voorbereiden van uw zekeringkast op een warmtepomp: wij zorgen ervoor dat uw technieken naadloos samenwerken en voldoen aan alle wettelijke verplichtingen, inclusief de officiële <strong>AREI-keuring</strong>.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-navy-800 font-medium">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-400/20 text-gold-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</span>
                            Expertise in 3-fase aansluitingen
                        </li>
<li className="flex items-center gap-3 text-navy-800 font-medium">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-400/20 text-gold-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</span>
                            Conformiteit met AREI Boek 1
                        </li>
<li className="flex items-center gap-3 text-navy-800 font-medium">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-400/20 text-gold-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</span>
                            Specialist capaciteitstarief
                        </li>
</ul>
</div>

<div className="w-full bg-slate-50 rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 order-1 lg:order-2">
<h3 className="text-xl font-semibold tracking-tight text-navy-800 mb-2">Vraag uw technische analyse aan</h3>
<p className="text-sm text-slate-500 mb-6">Ontvang een gedetailleerde offerte op maat van uw project.</p>
<form action="#" className="space-y-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Naam</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-800 transition-all text-slate-900 placeholder:text-slate-400" id="name" placeholder="Uw volledige naam" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Telefoon</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-800 transition-all text-slate-900 placeholder:text-slate-400" id="phone" placeholder="04..." type="tel"/>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="zip">Postcode</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-800 transition-all text-slate-900 placeholder:text-slate-400" id="zip" type="text" value="9790"/>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-medium text-slate-700" htmlFor="type">Type Werken</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-800/10 focus:border-navy-800 transition-all text-slate-900 cursor-pointer" id="type">
<option disabled="" selected="" value="">Maak een technische keuze</option>
<option value="renovatie">Volledige Renovatie / Uitbreiding</option>
<option value="laadpaal">Laadpaal &amp; Load Balancing</option>
<option value="zekeringkast">Verzaring naar 3-fase / Nieuwe Kast</option>
<option value="batterij">Thuisbatterij &amp; EMS</option>
<option value="storing">Dringende interventie</option>
</select>
</div>
</div>
<button className="w-full inline-flex items-center justify-center rounded-lg text-base font-bold bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors h-12 px-8 shadow-sm mt-2" type="submit">
                            Offerte Aanvragen
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-3">
<div className="flex text-gold-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Expertise gegarandeerd</span>
</div>
<div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
<span className="text-lg font-bold tracking-tight text-navy-800">niko</span>
<span className="text-lg font-bold tracking-tight text-navy-800">hager</span>
<span className="text-lg font-bold tracking-tight text-navy-800">smappee</span>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="diensten">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-navy-800 mb-4">Technische diensten op maat</h2>
<p className="text-slate-500">
                    Wij bieden geen standaardpakketten, maar technische oplossingen die specifiek berekend zijn op uw verbruiksprofiel en woonsituatie in regio Wortegem-Petegem.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-navy-800/20 hover:shadow-lg hover:shadow-navy-900/5 transition-all bg-white flex flex-col">
<div className="w-12 h-12 rounded-lg bg-slate-50 text-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-800 mb-3">Elektrische Renovatie</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Bij oudere woningen is de bekabeling vaak verduurd of onveilig. Wij vervangen uw volledige installatie, inclusief alle noodzakelijke slijp- en kapwerken voor het onzichtbaar wegwerken van leidingen. Dit is cruciaal om een conform keuringsattest te bekomen bij verkoop of verhuur, en om de veiligheid van uw gezin te garanderen volgens de normen van het AREI.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors" href="#contact">
                        Renovatie bespreken <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-navy-800/20 hover:shadow-lg hover:shadow-navy-900/5 transition-all bg-white flex flex-col">
<div className="w-12 h-12 rounded-lg bg-slate-50 text-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-800 mb-3">Zekeringkast &amp; 3-Fase</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Moderne apparatuur zoals inductiekookplaten en warmtepompen vereisen vaak een verzwaring naar een <strong>3-fase aansluiting</strong> (400V). Wij vernieuwen uw verdeelkast volledig, voorzien de juiste differentieelschakelaars (Type A/B) en installeren overspanningsbeveiliging. Wij zorgen tevens voor het verplichte <strong>eendraadsschema</strong> en situatieschema voor de keurder.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors" href="#contact">
                        Kast vernieuwen <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-navy-800/20 hover:shadow-lg hover:shadow-navy-900/5 transition-all bg-white flex flex-col">
<div className="w-12 h-12 rounded-lg bg-slate-50 text-navy-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:lamp-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-800 mb-3">Domotica &amp; Energiebeheer</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Domotica (zoals Niko Home Control of Loxone) is vandaag geen luxe meer, maar een essentieel instrument voor energiebesparing. Door verlichting en verwarming slim te automatiseren, vermijdt u sluipverbruik. Wij programmeren uw woning zodat energie-intensieve toestellen pas inschakelen wanneer er voldoende zonne-energie beschikbaar is.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors" href="#contact">
                        Smart home advies <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-sky-50 border-y border-sky-100" id="energie">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-sky-600 font-medium text-sm tracking-wider uppercase">Duurzaam Wonen in 9790</span>
<h2 className="text-3xl font-semibold tracking-tight text-navy-800 mt-2">Energiebeheer van de toekomst</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">

<div className="bg-white p-6 rounded-xl border border-sky-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:electric-refueling-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-navy-800 mb-2">Laadpalen &amp; Load Balancing</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                    Een laadpaal installeren vereist een grondige analyse van uw huidige vermogen. Wij integreren <strong>Dynamic Load Balancing</strong>, een technologie die het laadvermogen van uw wagen real-time aanpast aan het verbruik in huis. Zo vermijdt u dat de hoofdzekering springt tijdens het koken en laadt u maximaal op zonne-energie.
                                </p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-sky-100 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:battery-charge-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-navy-800 mb-2">Thuisbatterij &amp; EMS</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                    Om de impact van het <strong>capaciteitstarief</strong> te minimaliseren, is <strong>zelfconsumptie</strong> cruciaal. Met een thuisbatterij gekoppeld aan een slim energiebeheersysteem (EMS) verhogen we uw onafhankelijkheid van het net van 30% naar wel 70%. Dit garandeert een optimaal rendement van uw zonnepanelen.
                                </p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[300px] rounded-2xl bg-white border border-sky-100 p-8 flex flex-col justify-center items-center text-center overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon icon="solar:bolt-circle-bold" width="200"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-navy-800 mb-4 z-10">Klaar voor de energietransitie?</h3>
<p className="text-slate-500 max-w-md mx-auto mb-8 z-10">
                        Laat ons berekenen hoe u uw piekverbruik kunt afvlakken en besparen op uw energiefactuur.
                     </p>
<a className="inline-flex items-center justify-center rounded-lg text-sm font-semibold bg-navy-800 text-white hover:bg-navy-900 transition-colors h-10 px-6 z-10" href="#contact">
                        Adviesgesprek aanvragen
                     </a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="over-ons">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-slate-100 h-[400px] border border-slate-200 flex items-center justify-center">
<div className="text-slate-400 flex flex-col items-center">
<iconify-icon className="mb-4" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="text-sm font-medium">Realisatie in Wortegem</span>
</div>
<div className="absolute bottom-6 left-6 bg-white py-3 px-5 rounded-lg shadow-sm border border-slate-100">
<p className="text-sm font-semibold text-navy-800">Gecertificeerd Installateur</p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-navy-800 mb-6">Betrouwbaarheid in de Vlaamse Ardennen</h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        ELGO Technics staat bekend als de technische referentie in de regio. Wij onderscheiden ons door een strikte naleving van de veiligheidsnormen en een vakkundige afwerking. Of het nu gaat om het proper achterlaten van de werf of het verstrekken van de correcte attesten voor uw verzekering: bij ons geniet u van volledige gemoedsrust en transparantie.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<span className="text-gold-500">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</span>
<span className="font-semibold text-navy-800">Conforme installaties</span>
<span className="text-sm text-slate-500">Garantie op AREI-goedkeuring.</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-gold-500">
<iconify-icon icon="solar:hand-shake-linear" width="32"></iconify-icon>
</span>
<span className="font-semibold text-navy-800">Persoonlijke opvolging</span>
<span className="text-sm text-slate-500">Direct contact met de zaakvoerder.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h3 className="text-xl font-semibold text-navy-800 mb-4">Lokale verankering in 9790</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Wij kennen de specifieke bouwkundige kenmerken van woningen in de deelgemeenten <strong>Wortegem, Petegem-aan-de-Schelde, Elsegem en Moregem</strong>. Als lokale partner kunnen wij snel schakelen bij dringende interventies en rekenen wij geen voorrijkosten binnen de entiteit Wortegem-Petegem.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-navy-800 font-medium">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear"></iconify-icon> Wortegem
                        </li>
<li className="flex items-center gap-2 text-sm text-navy-800 font-medium">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear"></iconify-icon> Petegem-aan-de-Schelde
                        </li>
<li className="flex items-center gap-2 text-sm text-navy-800 font-medium">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear"></iconify-icon> Elsegem
                        </li>
<li className="flex items-center gap-2 text-sm text-navy-800 font-medium">
<iconify-icon className="text-gold-500" icon="solar:map-point-linear"></iconify-icon> Moregem
                        </li>
</ul>
</div>
<div className="lg:col-span-2 h-64 bg-slate-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
<div className="text-center">
<iconify-icon className="mb-2 mx-auto" icon="solar:map-linear" width="48"></iconify-icon>
<span className="font-medium">Kaart regio Wortegem-Petegem (9790)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-navy-800 mb-12 text-center">Vragen aan de expert</h2>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-white open:ring-1 open:ring-navy-800/10">
<summary className="flex cursor-pointer items-center justify-between p-5 text-navy-800 font-medium hover:bg-slate-50 transition-colors">
                        Is een nieuwe AREI-keuring altijd verplicht?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        Ja, bij elke belangrijke wijziging, verzwaring van de aansluiting of uitbreiding van uw installatie (zoals zonnepanelen of een laadpaal) is een herkeuring door een erkend organisme verplicht. Wij leveren bij oplevering steeds het eendraadsschema en het situatieschema af, zodat uw installatie gegarandeerd wordt goedgekeurd conform AREI Boek 1.
                    </div>
</details>

<details className="group border border-slate-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-white open:ring-1 open:ring-navy-800/10">
<summary className="flex cursor-pointer items-center justify-between p-5 text-navy-800 font-medium hover:bg-slate-50 transition-colors">
                        Kies ik best voor een 11kW of 22kW laadpaal?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        Dit hangt af van uw netaansluiting en de omvormer in uw wagen. Een 22kW laadpaal vereist een zeer zware 3-fase aansluiting (3x400V+N, 32A), wat in residentiële woningen vaak niet aanwezig is. Voor de meeste gebruikers in Wortegem-Petegem volstaat een 11kW laadpaal ruimschoots om de wagen 's nachts volledig op te laden.
                    </div>
</details>

<details className="group border border-slate-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-white open:ring-1 open:ring-navy-800/10">
<summary className="flex cursor-pointer items-center justify-between p-5 text-navy-800 font-medium hover:bg-slate-50 transition-colors">
                        Voeren jullie ook kleine herstellingen uit?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        Absoluut. Wij geloven in langdurige relaties met onze klanten. Of het nu gaat om een defecte differentieelschakelaar, een stopcontact dat niet werkt of een probleem met de videofonie: wij komen graag langs voor interventies om uw veiligheid en comfort te herstellen.
                    </div>
</details>

<details className="group border border-slate-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-white open:ring-1 open:ring-navy-800/10">
<summary className="flex cursor-pointer items-center justify-between p-5 text-navy-800 font-medium hover:bg-slate-50 transition-colors">
                        Wat is de impact van het capaciteitstarief op mijn factuur?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        Het capaciteitstarief berekent een deel van uw netkosten op basis van uw hoogste kwartierpiek per maand. Door slimme sturing (EMS) te installeren, zorgen wij ervoor dat grootverbruikers (warmtepomp, laadpaal) niet gelijktijdig pieken, waardoor u uw netkosten aanzienlijk verlaagt zonder aan comfort in te boeten.
                    </div>
</details>

<details className="group border border-slate-200 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden bg-white open:ring-1 open:ring-navy-800/10">
<summary className="flex cursor-pointer items-center justify-between p-5 text-navy-800 font-medium hover:bg-slate-50 transition-colors">
                        Wat is de levensduur van een nieuwe installatie?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-slate-500 leading-relaxed text-sm sm:text-base">
                        Wanneer wij een installatie plaatsen met A-merk componenten (zoals Hager of Schneider), mag u rekenen op een technische levensduur van 30 tot 40 jaar. Wij raden wel aan om de differentieelschakelaars maandelijks te testen en elke 25 jaar een preventieve controle te laten uitvoeren om de absolute veiligheid te blijven garanderen.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-navy-800 text-white" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Uw project in Wortegem-Petegem bespreken?</h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Neem contact op voor een vrijblijvend plaatsbezoek en een technische analyse van uw elektrische installatie.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-lg text-base font-semibold bg-white text-navy-900 hover:bg-slate-100 transition-all h-14 px-8 w-full sm:w-auto" href="tel:+32000000000">
<iconify-icon className="mr-2" icon="solar:phone-linear" width="20"></iconify-icon>
                    04XX / XX XX XX
                </a>
<a className="inline-flex items-center justify-center rounded-lg text-base font-semibold bg-gold-400 text-navy-900 hover:bg-gold-500 transition-all h-14 px-8 w-full sm:w-auto shadow-lg shadow-gold-500/20" href="#hero">
                    Offerte aanvragen
                </a>
</div>
</div>
</section>

<footer className="py-12 bg-navy-900 border-t border-navy-800 text-slate-400 text-sm">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-bold tracking-tighter text-white uppercase mb-4 block" href="/">
                    ELGO <span className="text-gold-500">Technics</span>
</a>
<p className="max-w-xs mb-4">
                    Uw professionele elektricien in de Vlaamse Ardennen (9790). Kwaliteit, veiligheid en service staan centraal.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Diensten</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Totaalrenovatie</a></li>
<li><a className="hover:text-white transition-colors" href="#">3-Fase Aansluiting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Laadpalen</a></li>
<li><a className="hover:text-white transition-colors" href="#">Domotica &amp; EMS</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2">
<li>Wortegem-Petegem (9790)</li>
<li>info@elgotechnics.be</li>
<li>BE 0XXX.XXX.XXX</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2024 ELGO Technics. Alle rechten voorbehouden.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacybeleid</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</footer>

    </>
  );
}
