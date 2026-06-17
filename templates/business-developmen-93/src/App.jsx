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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/454b6402-0f47-434b-94aa-336e1916f9af_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="transition-transform group-hover:scale-105 w-10 h-10 relative"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/454b6402-0f47-434b-94aa-336e1916f9af_3840w.png"/>
</div>
<span className="text-xl font-semibold tracking-tight text-[#193d6f]">Grovia</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#529cdb] transition-colors" href="#aanpak">Aanpak</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#529cdb] transition-colors" href="#diensten">Diensten</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#529cdb] transition-colors" href="#resultaten">Resultaten</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-[#193d6f] border border-transparent rounded-full hover:bg-[#122b4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#193d6f] shadow-sm hover:shadow-md" href="#contact">
                        Plan groeigesprek
                    </a>
</div>

<button className="md:hidden p-2 text-slate-500 hover:text-[#193d6f]">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eef6fc_100%)]"></div>
<div className="absolute inset-y-0 right-0 -z-10 w-1/3 bg-gradient-to-l from-[#529cdb]/5 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#529cdb]/10 border border-[#529cdb]/20 text-[#193d6f] text-xs font-medium mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-[#529cdb]"></span>
                Nu beschikbaar voor nieuwe projecten
            </div>
<h1 className="sm:text-6xl lg:text-7xl text-5xl font-semibold text-[#193d6f] tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
                Zet ambitie om in <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#529cdb] to-[#193d6f]">meetbare groei</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-10 leading-relaxed">
                Grovia helpt KMO's en scale-ups met strategische sales, partnerships en business development. Geen theorie, maar een concreet plan en executie.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-200 bg-[#529cdb] border border-transparent rounded-full hover:bg-[#438bc8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#529cdb] shadow-lg shadow-[#529cdb]/20 hover:shadow-[#529cdb]/30" href="#contact">
                    Plan je gratis groeigesprek
                    <iconify-icon className="ml-2" height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#193d6f] transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200" href="#aanpak">
                    Ontdek hoe we werken
                </a>
</div>
<div className="mt-16 pt-8 border-t border-slate-100">
<p className="text-sm text-slate-400 mb-6">Vertrouwd door ambitieuze groeibedrijven</p>
<div className="flex justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-[#193d6f]"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-[#193d6f]"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> STRATA</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tighter text-[#193d6f]"><iconify-icon icon="lucide:command" width="24"></iconify-icon> CORE</div>
<div className="hidden sm:flex items-center gap-2 font-semibold text-xl tracking-tighter text-[#193d6f]"><iconify-icon icon="lucide:zap" width="24"></iconify-icon> VOLT</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#193d6f] sm:text-4xl mb-6">
                        Loopt jouw groei vast door gebrek aan focus?
                    </h2>
<p className="text-lg text-slate-500 mb-8">
                        Veel ondernemers in de scale-up fase lopen tegen hetzelfde plafond aan. Je hebt een goed product, maar de sales zijn onvoorspelbaar en partnerships komen niet van de grond.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
<iconify-icon className="text-red-600" height="14" icon="lucide:x" width="14"></iconify-icon>
</div>
<span className="text-slate-600">Geen gestructureerd salesproces, resultaten zijn toeval.</span>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
<iconify-icon className="text-red-600" height="14" icon="lucide:x" width="14"></iconify-icon>
</div>
<span className="text-slate-600">Te weinig tijd voor strategische partnerships.</span>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
<iconify-icon className="text-red-600" height="14" icon="lucide:x" width="14"></iconify-icon>
</div>
<span className="text-slate-600">Moeite om van 'founder-led sales' naar een schaalbaar model te gaan.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-[#529cdb]/20 to-slate-100 rounded-2xl opacity-50 blur-lg"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-[#529cdb]/10 rounded-lg text-[#529cdb]">
<iconify-icon height="28" icon="lucide:check-circle" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#193d6f]">De Grovia Belofte</h3>
</div>
<p className="text-slate-600 mb-6">
                            Wij brengen de structuur en slagkracht die nodig is voor de volgende fase. Geen vage adviezen, maar hands-on business development.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#529cdb]" icon="lucide:check" width="18"></iconify-icon>
                                Voorspelbare revenue streams
                            </div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#529cdb]" icon="lucide:check" width="18"></iconify-icon>
                                Hoogwaardige partnerships
                            </div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#529cdb]" icon="lucide:check" width="18"></iconify-icon>
                                Duidelijke roadmap voor schaalvergroting
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="diensten">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#193d6f] sm:text-4xl mb-4">
                    Expertise waar je op kan bouwen
                </h2>
<p className="text-slate-500">
                    Wij focussen op drie kernpijlers die essentieel zijn voor duurzame bedrijfsgroei.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#529cdb]/30 hover:shadow-lg hover:shadow-[#529cdb]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-[#529cdb]/10 text-[#529cdb] flex items-center justify-center mb-6 group-hover:bg-[#529cdb] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-3">Sales Development</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Optimalisatie van je sales funnel en het actief benaderen van nieuwe prospects. We zetten een systeem op dat leads converteert naar klanten.
                    </p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Outbound strategie</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Deal closing</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> CRM optimalisatie</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#529cdb]/30 hover:shadow-lg hover:shadow-[#529cdb]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-[#529cdb]/10 text-[#529cdb] flex items-center justify-center mb-6 group-hover:bg-[#529cdb] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="lucide:handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-3">Partnership Development</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Identificeren en sluiten van strategische allianties die je marktpositie versterken en nieuwe kanalen openen.
                    </p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Partner sourcing</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Contractonderhandeling</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Channel management</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#529cdb]/30 hover:shadow-lg hover:shadow-[#529cdb]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-[#529cdb]/10 text-[#529cdb] flex items-center justify-center mb-6 group-hover:bg-[#529cdb] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-3">Growth Strategy</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Een heldere blik op de toekomst. We analyseren je huidige model en bepalen de meest efficiënte route naar schaalvergroting.
                    </p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Go-to-market plan</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> Pricing strategie</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#529cdb] rounded-full"></div> KPI framework</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-100 bg-[#529cdb]/5" id="aanpak">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#193d6f] sm:text-4xl mb-6">
                        Van analyse naar actie in drie stappen
                    </h2>
<p className="text-lg text-slate-500 mb-8">
                        Geen eindeloze vergaderingen, maar een pragmatische aanpak gericht op snelheid en kwaliteit.
                    </p>
<a className="inline-flex items-center text-sm font-semibold text-[#529cdb] hover:text-[#193d6f] transition-colors" href="#contact">
                        Start met stap 1
                        <iconify-icon className="ml-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="relative">

<div className="relative pl-10 pb-10 border-l border-slate-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#529cdb]/10 text-[#529cdb] font-semibold text-sm">1</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-2">Gratis Groeigesprek</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            We maken kennis en duiken direct in jouw uitdagingen. In 30 minuten bepalen we of er een match is en waar de grootste kansen liggen.
                        </p>
</div>

<div className="relative pl-10 pb-10 border-l border-slate-200 last:border-0 last:pb-0">
<div className="absolute left-[-17px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-slate-100 text-slate-600 font-semibold text-sm">2</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-2">Concreet Actieplan</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Ik werk een strategie uit met heldere doelstellingen, tijdlijnen en deliverables. Jij weet precies waar je aan toe bent.
                        </p>
</div>

<div className="relative pl-10">
<div className="absolute left-[-17px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-slate-100 text-slate-600 font-semibold text-sm">3</div>
<h3 className="text-lg font-semibold text-[#193d6f] mb-2">Uitvoering &amp; Schalen</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            We gaan aan de slag. Ik word onderdeel van je team, voer de strategie uit en optimaliseer continu op basis van data.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="resultaten">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center text-[#193d6f] sm:text-4xl mb-16">
                Ondernemers over de samenwerking
            </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 bg-slate-50 rounded-2xl">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-lg mb-6 leading-relaxed">
                        "Grovia bracht precies de focus die we misten. Binnen drie maanden hadden we twee nieuwe key-partnerships gesloten en stond onze outbound sales als een huis. De ROI was binnen een kwartaal al zichtbaar."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 text-xs font-bold">JD</div>
<div>
<div className="font-semibold text-[#193d6f]">Jeroen De Vries</div>
<div className="text-xs text-slate-500">Founder, TechScale Solutions</div>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-lg mb-6 leading-relaxed">
                        "Geen wollig taalgebruik, maar direct resultaat. De professionaliteit en het strategisch inzicht van Grovia hebben ons geholpen om een nieuwe marktsegment succesvol te betreden."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 text-xs font-bold">EM</div>
<div>
<div className="font-semibold text-[#193d6f]">Elise Meijer</div>
<div className="text-xs text-slate-500">CEO, Creative Agency X</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#193d6f] text-white relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#529cdb 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl mb-6">
                Klaar om te groeien?
            </h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Laten we kijken of we een match zijn. Boek een vrijblijvend kennismakingsgesprek van 30 minuten. Geen verplichtingen, alleen waarde.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#193d6f] transition-all duration-200 bg-white border border-transparent rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" href="#">
                    Plan je gratis gesprek
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-transparent border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 focus:outline-none" href="mailto:info@grovia.nl">
                    Stuur een e-mail
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4 group" href="#">
<div className="w-8 h-8 relative transition-transform group-hover:scale-105">
<svg fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M0 60 L95 10 L100 50 L50 70 Z" fill="#529cdb"></path>
<path d="M0 90 L40 70 L60 70 L65 85 L90 75 L95 60 L95 100 L15 100 Z" fill="#193d6f"></path>
<path d="M15 90 C35 70 55 50 75 30 L65 30 L85 15 L90 40 L80 40 C60 60 40 80 20 100 L15 90 Z" fill="black"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-[#193d6f]">Grovia</span>
</a>
<p className="text-sm text-slate-500 max-w-sm mb-6">
                        Professionele business development voor bedrijven die klaar zijn voor de volgende stap. Wij brengen focus, structuur en groei.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#529cdb] transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#529cdb] transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#193d6f] mb-4 text-sm">Navigatie</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#529cdb] transition-colors" href="#aanpak">Onze Aanpak</a></li>
<li><a className="hover:text-[#529cdb] transition-colors" href="#diensten">Diensten</a></li>
<li><a className="hover:text-[#529cdb] transition-colors" href="#resultaten">Resultaten</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#193d6f] mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>info@grovia.nl</li>
<li>+31 (0)6 1234 5678</li>
<li>Amsterdam, Nederland</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Grovia. Alle rechten voorbehouden.</p>
<div className="flex gap-6">
<a className="hover:text-[#193d6f]" href="#">Privacybeleid</a>
<a className="hover:text-[#193d6f]" href="#">Algemene voorwaarden</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
