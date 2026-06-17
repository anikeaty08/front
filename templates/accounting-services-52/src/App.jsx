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
      

<header className="sticky top-0 z-50 w-full border-b shadow-sm border-blue-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded bg-cyan-800 text-white">
<iconify-icon className="text-xl" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-cyan-900">VDCS.</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors text-blue-600 hover:text-cyan-800" href="#expertises">Expertises</a>
<a className="text-sm transition-colors text-blue-600 hover:text-cyan-800" href="#aanpak">Aanpak &amp; Team</a>
<a className="text-sm transition-colors text-blue-600 hover:text-cyan-800" href="#digitaal">Digitaal Kantoor</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm transition-colors text-blue-700 hover:text-cyan-800" href="#">Klantenzone</a>
<a className="inline-flex h-10 items-center justify-center rounded px-5 py-2 text-sm shadow-sm transition-colors bg-cyan-800 text-white hover:bg-cyan-900" href="#contact">
                        Contacteer ons
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="py-16 sm:py-24 bg-white" id="expertises">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl mb-16 sm:mb-24">
<span className="text-sm font-semibold tracking-wider uppercase text-cyan-800 mb-3 block">Onze Expertises</span>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-tight text-blue-900">
                        Multidisciplinair advies voor elke groeifase van uw onderneming.
                    </h1>
<p className="text-lg leading-relaxed text-blue-600">
                        We overstijgen de traditionele boekhouding. Als uw strategische partner bundelen we financiële, fiscale en juridische expertise om uw B2B-organisatie proactief te sturen.
                    </p>
</div>

<div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">

<div className="group flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-200 bg-stone-50 text-cyan-800 transition-colors group-hover:bg-cyan-800 group-hover:text-white group-hover:border-cyan-800">
<iconify-icon className="text-3xl" icon="solar:documents-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-900 mb-3">Accountancy &amp; Audit</h3>
<p className="text-base leading-relaxed text-blue-600 mb-4">
                                Van nauwgezette verwerking van uw administratie tot complexe geconsolideerde jaarrekeningen. Wij zorgen voor een fundament van betrouwbare data, real-time beschikbaar via ons digitaal platform.
                            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Digitale boekhouding &amp; optimalisatie
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Tussentijdse rapportering &amp; KPI's
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Jaarafsluiting &amp; wettelijke verplichtingen
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold transition-colors text-cyan-800 hover:text-cyan-900" href="#">
                                Lees meer over Accountancy <iconify-icon className="ml-1 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-200 bg-stone-50 text-cyan-800 transition-colors group-hover:bg-cyan-800 group-hover:text-white group-hover:border-cyan-800">
<iconify-icon className="text-3xl" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-900 mb-3">Tax &amp; Legal</h3>
<p className="text-base leading-relaxed text-blue-600 mb-4">
                                Fiscale wetgeving is complex en verandert continu. Onze fiscalisten en juristen optimaliseren uw belastingdruk en begeleiden u bij vennootschapsrechtelijke stappen en herstructureringen.
                            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Fiscale optimalisatie vennootschap
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Begeleiding bij fiscale controles
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Vennootschapsrecht &amp; contracten
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold transition-colors text-cyan-800 hover:text-cyan-900" href="#">
                                Ontdek Tax &amp; Legal <iconify-icon className="ml-1 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-200 bg-stone-50 text-cyan-800 transition-colors group-hover:bg-cyan-800 group-hover:text-white group-hover:border-cyan-800">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-900 mb-3">CFO Services &amp; Advies</h3>
<p className="text-base leading-relaxed text-blue-600 mb-4">
                                Wij treden op als uw externe klankbord of part-time CFO. Van strategische businessplannen en waarderingen tot de begeleiding van overnametrajecten (M&amp;A) en successieplanning.
                            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Financieel &amp; strategisch advies
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Fusies &amp; Overnames (M&amp;A)
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Bedrijfswaarderingen &amp; financiering
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold transition-colors text-cyan-800 hover:text-cyan-900" href="#">
                                Bekijk CFO Services <iconify-icon className="ml-1 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 items-start">
<div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-200 bg-stone-50 text-cyan-800 transition-colors group-hover:bg-cyan-800 group-hover:text-white group-hover:border-cyan-800">
<iconify-icon className="text-3xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-900 mb-3">HR &amp; Sociaal Recht</h3>
<p className="text-base leading-relaxed text-blue-600 mb-4">
                                Uw medewerkers zijn uw belangrijkste kapitaal. We adviseren rond loonoptimalisatie, sociaal recht, en werken naadloos samen met uw sociaal secretariaat voor een feilloze payroll.
                            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Loonpakket optimalisatie
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Sociaal-juridisch advies
                                </li>
<li className="flex items-center text-sm text-blue-800">
<iconify-icon className="mr-2 text-cyan-700" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Begeleiding bij aanwervingen
                                </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold transition-colors text-cyan-800 hover:text-cyan-900" href="#">
                                Meer over HR &amp; Sociaal <iconify-icon className="ml-1 text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-cyan-900 text-white border-y border-cyan-950" id="aanpak">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
<div>
<span className="text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-3 block">Onze Filosofie</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 leading-tight">
                            Uw vaste vertrouwenspersoon, geruggensteund door een netwerk van specialisten.
                        </h2>
<div className="space-y-6 text-cyan-100 text-base leading-relaxed">
<p>
                                Bij VDCS geloven we niet in een eenheidsbenadering. Elke onderneming heeft zijn eigen dynamiek en uitdagingen. Daarom starten we altijd met luisteren. We willen uw businessmodel, uw markt en uw ambities doorgronden.
                            </p>
<p>
                                We combineren de nabijheid en persoonlijke betrokkenheid van een lokaal kantoor met de gespecialiseerde kennis van een grote spelers. Uw dossierbeheerder is uw unieke aanspreekpunt, die proactief meedenkt en intern de juiste experts inschakelt wanneer de situatie daarom vraagt.
                            </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-cyan-800 pt-10">
<div>
<span className="block text-4xl font-semibold tracking-tight text-white mb-2">25+</span>
<span className="text-sm text-cyan-300">Gedreven experts in ons team</span>
</div>
<div>
<span className="block text-4xl font-semibold tracking-tight text-white mb-2">100%</span>
<span className="text-sm text-cyan-300">Digitale on-boarding mogelijk</span>
</div>
</div>
</div>
<div className="relative">

<div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden bg-cyan-800 shadow-2xl relative">
<img alt="VDCS Team in overleg" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
<div className="absolute -top-6 -right-6 w-24 h-24 border border-cyan-700 rounded-lg -z-10"></div>
</div>
</div>

<div className="bg-cyan-950 rounded-2xl p-8 sm:p-12 border border-cyan-800">
<div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cyan-800">
<div className="pt-8 md:pt-0 md:px-6 first:pt-0">
<iconify-icon className="text-3xl text-cyan-400 mb-4" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2">Onafhankelijk Advies</h4>
<p className="text-sm text-cyan-200 leading-relaxed">Objectieve begeleiding, altijd in het beste belang van uw onderneming en stakeholders.</p>
</div>
<div className="pt-8 md:pt-0 md:px-6">
<iconify-icon className="text-3xl text-cyan-400 mb-4" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2">Proactieve Aanpak</h4>
<p className="text-sm text-cyan-200 leading-relaxed">We wachten niet op het einde van het boekjaar. We sturen bij waar nodig, real-time.</p>
</div>
<div className="pt-8 md:pt-0 md:px-6">
<iconify-icon className="text-3xl text-cyan-400 mb-4" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2">Persoonlijke Fit</h4>
<p className="text-sm text-cyan-200 leading-relaxed">Een vast aanspreekpunt dat uw sector en specifieke bedrijfscontext écht begrijpt.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-stone-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-blue-900">
                        Laten we kennismaken.
                    </h2>
<p className="text-lg text-blue-600">
                        Klaar om uw financiële processen te optimaliseren? Neem contact op voor een vrijblijvend gesprek over de toekomst van uw onderneming.
                    </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">

<div className="lg:col-span-5 bg-blue-900 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight mb-8">Onze Kantoor</h3>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded bg-blue-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-cyan-100 mb-1">Bezoekadres</span>
<span className="text-base leading-relaxed">Bedrijfsstraat 123<br/>9000 Gent, België</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded bg-blue-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-cyan-100 mb-1">Telefoon</span>
<a className="text-base transition-colors hover:text-cyan-400" href="tel:+3200000000">+32 9 000 00 00</a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded bg-blue-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-cyan-100 mb-1">E-mail</span>
<a className="text-base transition-colors hover:text-cyan-400" href="mailto:hallo@vdcs.be">hallo@vdcs.be</a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded bg-blue-800/50 text-cyan-400">
<iconify-icon className="text-xl" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<span className="block text-sm font-semibold text-cyan-100 mb-1">Bedrijfsgegevens</span>
<span className="text-base">BE 0123.456.789</span>
</div>
</li>
</ul>
</div>

<div className="w-full h-48 bg-blue-800 rounded-lg border border-blue-700 flex flex-col items-center justify-center text-blue-400 relative z-10 overflow-hidden group">

<img alt="Map placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity transition-transform group-hover:scale-105 duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex flex-col items-center">
<iconify-icon className="text-3xl mb-2 text-white" icon="solar:map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs uppercase tracking-wider font-semibold text-white">Route plannen</span>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 sm:p-12">
<form action="#" className="space-y-6" method="POST">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="first-name">Voornaam</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="first-name" name="first-name" placeholder="Jan" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="last-name">Achternaam</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="last-name" name="last-name" placeholder="Peeters" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="company">Bedrijfsnaam</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="company" name="company" placeholder="Uw Bedrijf NV" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="vat">BTW nummer (optioneel)</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="vat" name="vat" placeholder="BE 0000.000.000" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="email">E-mailadres</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="email" name="email" placeholder="jan@bedrijf.be" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="phone">Telefoonnummer</label>
<input className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800" id="phone" name="phone" placeholder="+32 400 00 00 00" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="interest">Waarmee kunnen we u helpen?</label>
<select className="custom-select w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800 cursor-pointer" id="interest" name="interest">
<option disabled="" selected="" value="">Selecteer een onderwerp...</option>
<option value="accountancy">Accountancy &amp; Boekhouding</option>
<option value="tax">Fiscaal &amp; Juridisch Advies</option>
<option value="cfo">Strategisch CFO Advies</option>
<option value="overname">Begeleiding bij Overname (M&amp;A)</option>
<option value="other">Andere vraag</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="message">Uw bericht</label>
<textarea className="w-full rounded border border-blue-200 bg-stone-50 p-3 text-sm text-slate-800 transition-colors focus:border-cyan-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-cyan-800 resize-none" id="message" name="message" placeholder="Vertel ons kort over uw situatie of specifieke vraag..." rows="4"></textarea>
</div>

<div className="flex items-start">
<label className="custom-checkbox relative flex cursor-pointer items-start gap-3">
<input className="peer sr-only" type="checkbox"/>
<div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-blue-300 bg-white transition-colors">
<iconify-icon className="text-sm text-white opacity-0 transition-opacity" icon="solar:check-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm text-blue-600 leading-relaxed">
                                        Ik ga ermee akkoord dat VDCS mijn gegevens verwerkt in overeenstemming met het <a className="text-cyan-800 underline hover:text-cyan-900" href="#">privacybeleid</a> om mijn aanvraag te behandelen.
                                    </span>
</label>
</div>
<div className="pt-2">
<button className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded px-8 text-sm font-semibold shadow-sm transition-colors bg-cyan-800 text-white hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2" type="submit">
                                    Verstuur aanvraag
                                    <iconify-icon className="ml-2 text-lg" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="pt-16 pb-8 bg-blue-950 text-blue-400">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16 mb-12">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="flex h-10 w-10 items-center justify-center rounded bg-cyan-800">
<iconify-icon className="text-xl" icon="solar:calculator-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight">VDCS.</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-blue-400">
                        Ervaren boekhouding &amp; multidisciplinair advies, gedreven door persoonlijke nabijheid en heldere communicatie voor de B2B markt.
                    </p>
</div>
<div>
<h3 className="text-base font-semibold mb-6 text-white">Expertises</h3>
<ul className="space-y-4">
<li><a className="text-sm transition-colors hover:text-white" href="#">Accountancy &amp; Audit</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">Tax &amp; Legal</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">CFO Services</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">HR &amp; Sociaal Recht</a></li>
</ul>
</div>
<div>
<h3 className="text-base font-semibold mb-6 text-white">Kantoor</h3>
<ul className="space-y-4">
<li><a className="text-sm transition-colors hover:text-white" href="#">Onze aanpak</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">Het team</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">Digitaal platform</a></li>
<li><a className="text-sm transition-colors hover:text-white" href="#">Vacatures</a></li>
</ul>
</div>
<div>
<h3 className="text-base font-semibold mb-6 text-white">Contact</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-lg text-cyan-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Bedrijfsstraat 123<br/>9000 Gent, België</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-cyan-500" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="text-sm transition-colors hover:text-white" href="tel:+3200000000">+32 9 000 00 00</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-cyan-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="text-sm transition-colors hover:text-white" href="mailto:hallo@vdcs.be">hallo@vdcs.be</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-blue-900">
<p className="text-sm">© 2024 VDCS. Alle rechten voorbehouden.</p>
<div className="flex gap-6">
<a className="text-sm transition-colors hover:text-white" href="#">Privacybeleid</a>
<a className="text-sm transition-colors hover:text-white" href="#">Disclaimer</a>
<a className="text-sm transition-colors hover:text-white" href="#">Algemene voorwaarden</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
