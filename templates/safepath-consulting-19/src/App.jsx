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
colors: {
brand: {
navy: '#0B2C4D', // Derived from logo text
green: '#2E7D32', // Derived from logo shield/checkmark
light: '#F1F8F5'  // Light green tint for backgrounds
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">

<span className="iconify text-brand-navy absolute" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="32"></span>
<span className="iconify text-brand-green absolute mb-1" data-icon="lucide:check" data-strokeWidth="3" data-width="14"></span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-brand-navy">SafePath</span>
<span className="text-[0.65rem] font-medium tracking-widest text-brand-green uppercase">Consulting</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-brand-navy transition-colors" href="#ydelser">Ydelser</a>
<a className="text-slate-500 hover:text-brand-navy transition-colors" href="#pakker">Pakker</a>
<a className="text-slate-500 hover:text-brand-navy transition-colors" href="#om">Om SafePath</a>
<a className="bg-brand-navy text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-brand-navy/20" href="#kontakt">Kontakt os</a>
</div>

<label className="md:hidden p-2 text-slate-600 cursor-pointer hover:text-brand-navy" htmlFor="mobile-menu-toggle">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</label>
<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>

<div className="hidden peer-checked:flex flex-col absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 gap-4 shadow-xl z-40">
<a className="text-brand-navy font-medium" href="#ydelser">Ydelser</a>
<a className="text-brand-navy font-medium" href="#pakker">Pakker</a>
<a className="text-brand-navy font-medium" href="#om">Om SafePath</a>
<a className="text-brand-green font-medium" href="#kontakt">Kontakt os</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-brand-light/30"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.4'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-brand-green text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
                Specialiseret rådgivning til det offentlige
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-navy mb-6 max-w-4xl mx-auto leading-[1.1]">
                Gør beredskab forståeligt, operationelt og <span className="text-brand-green">realistisk.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Vi hjælper myndigheder og institutioner fra reaktiv håndtering til proaktivt beredskab. Få praksisnær rådgivning med fokus på implementering.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy text-white rounded-lg font-medium hover:bg-[#08223d] transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20" href="#kontakt">
                    Start dialogen
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all hover:border-slate-300" href="#ydelser">
                    Se vores ydelser
                </a>
</div>
</div>
</header>

<section className="py-20 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="group">
<div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-brand-navy mb-3 tracking-tight">Praksisnær Rådgivning</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Vi leverer ikke hyldevarer. Vores løsninger er tilpasset jeres hverdag og operationelle virkelighed, så planerne faktisk virker.
                    </p>
</div>
<div className="group">
<div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:file-check-2" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-brand-navy mb-3 tracking-tight">Implementeringsfokus</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        En plan i skuffen redder ingen liv. Vi fokuserer på forankring, træning og kultur, så sikkerhed bliver en naturlig del af organisationen.
                    </p>
</div>
<div className="group">
<div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:users-2" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-brand-navy mb-3 tracking-tight">Menneskelig Forståelse</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Med baggrund i både beredskab og pædagogik forstår vi spændingsfeltet mellem sikkerhedskrav og den daglige drift.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="ydelser">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-brand-navy tracking-tight mb-4">Kerneydelser</h2>
<p className="text-slate-500 max-w-2xl">
                    Vi rådgiver og støtter med praktiske og bæredygtige løsninger inden for beredskab, sikkerhed og risikostyring.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:border-brand-green/30">
<div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-green/10 transition-colors">
<span className="iconify text-brand-navy" data-icon="lucide:siren" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Beredskabsplanlægning</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Udarbejdelse af beredskabsplaner</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Kriseledelse og indsatsplaner</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Hændelses- og beredskabsanalyser</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:border-brand-green/30">
<div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-green/10 transition-colors">
<span className="iconify text-brand-navy" data-icon="lucide:radar" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Risikoanalyse</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Identifikation af risici</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Sårbarheds- og trusselsvurderinger</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Sikkerhed i offentlige rum</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:border-brand-green/30">
<div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-green/10 transition-colors">
<span className="iconify text-brand-navy" data-icon="lucide:cctv" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">CCTV &amp; Sikkerhed</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Strategisk rådgivning om CCTV</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>SOP'er og Governance</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Etisk og ansvarlig anvendelse</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:border-brand-green/30">
<div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-green/10 transition-colors">
<span className="iconify text-brand-navy" data-icon="lucide:graduation-cap" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Træning &amp; Øvelser</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Kompetenceudvikling af ledelse</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Scenariebaseret træning</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Styrkelse af operativt beredskab</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group hover:border-brand-green/30">
<div className="mb-6 p-3 bg-brand-light w-fit rounded-lg group-hover:bg-brand-green/10 transition-colors">
<span className="iconify text-brand-navy" data-icon="lucide:scroll-text" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">Governance &amp; Drift</h3>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Politikker, roller og ansvar</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Samarbejdsmodeller</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>Evaluering og forbedring</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pakker">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-brand-navy tracking-tight mb-4">Vælg den rette løsning</h2>
<p className="text-slate-500">Strukturerede pakker der passer til jeres behov.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-brand-navy/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-brand-navy">Basis</h3>
<p className="text-sm text-slate-500 mt-2">For overblik og status.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Overblik over nuværende beredskab
                        </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Kort risiko- og sårbarhedsvurdering
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-slate-50 text-brand-navy text-sm font-medium rounded-lg text-center border border-slate-200 hover:bg-slate-100 transition-colors" href="#kontakt">Vælg Basis</a>
</div>

<div className="border border-brand-green/30 bg-brand-light/50 rounded-2xl p-6 flex flex-col relative shadow-lg shadow-brand-green/5">
<div className="absolute top-0 right-0 -mt-3 -mr-3 bg-brand-green text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Anbefalet</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-brand-navy">Standard</h3>
<p className="text-sm text-slate-600 mt-2">Det fundamentale setup.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-slate-700 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Opdatering af beredskabsplan
                        </li>
<li className="text-sm text-slate-700 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Fastlæggelse af roller &amp; procedurer
                        </li>
<li className="text-sm text-slate-700 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Implementeringsstøtte
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-brand-navy text-white text-sm font-medium rounded-lg text-center hover:bg-[#08223d] transition-colors shadow-md shadow-brand-navy/10" href="#kontakt">Vælg Standard</a>
</div>

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-brand-navy/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-brand-navy">Udvidet</h3>
<p className="text-sm text-slate-500 mt-2">Den komplette sikkerhedspakke.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Dybdegående risikoanalyse
                        </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Kriseberedskab &amp; øvelse
                        </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Evt. CCTV-rådgivning
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-slate-50 text-brand-navy text-sm font-medium rounded-lg text-center border border-slate-200 hover:bg-slate-100 transition-colors" href="#kontakt">Vælg Udvidet</a>
</div>

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-brand-navy/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-brand-navy">Skræddersyet</h3>
<p className="text-sm text-slate-500 mt-2">Til specifikke udfordringer.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Fuldt tilpasset løsning
                        </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Længerevarende forløb
                        </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="iconify text-brand-green shrink-0" data-icon="lucide:check" data-width="16"></span>
                            Specifik projektledelse
                        </li>
</ul>
<a className="block w-full py-2.5 px-4 bg-slate-50 text-brand-navy text-sm font-medium rounded-lg text-center border border-slate-200 hover:bg-slate-100 transition-colors" href="#kontakt">Kontakt os</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-navy text-slate-300 overflow-hidden relative" id="om">

<div className="absolute top-0 right-0 w-1/3 h-full bg-[#08223d] skew-x-12 transform translate-x-20 hidden lg:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d3b66] border border-[#1b4b7a] text-brand-green text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:user-check" data-width="14"></span>
                        Mød konsulenten
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">Faglighed møder menneskelig forståelse</h2>
<div className="space-y-6 text-lg leading-relaxed text-slate-300">
<p>
                            SafePath Consulting er grundlagt med en vision om at skabe tryggere organisationer gennem beredskab, der faktisk virker i praksis.
                        </p>
<p>
                            Med en baggrund som både Beredskabsplanlægger og Socialpædagog, kombinerer jeg analytisk risikostyring med en dyb forståelse for de mennesker, der skal eksekvere planerne. Jeg har erfaring fra både offentlige og private organisationer og forstår kompleksiteten i myndighedsarbejde.
                        </p>
<p>
                            Min tilgang er, at sikkerhed ikke må blive en bremseklods, men skal være en integreret del af hverdagen.
                        </p>
</div>
<div className="mt-10 grid sm:grid-cols-2 gap-6">
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:graduation-cap" data-width="16"></span> Uddannelse</h4>
<ul className="text-sm space-y-2 text-slate-400">
<li>Prof. Bach. i Beredskab &amp; Risikostyring</li>
<li>Prof. Bach. i Socialpædagogik</li>
<li>Kandidatstudier i forhandling (SDU)</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2"><span className="iconify text-brand-green" data-icon="lucide:briefcase" data-width="16"></span> Erfaring</h4>
<ul className="text-sm space-y-2 text-slate-400">
<li>Beredskabsplanlægning (Offentlig/Privat)</li>
<li>Projektledelse &amp; Sikkerhedsstrategi</li>
<li>Krisehåndtering &amp; Rapportering</li>
</ul>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full flex flex-col items-center lg:items-end">

<div className="relative bg-white p-2 rounded-2xl shadow-2xl max-w-md w-full rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="relative aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden mb-4">

<img alt="Beredskabskonsulent" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-brand-navy rounded-full flex items-center justify-center text-white text-sm font-bold">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
</div>
<div>
<p className="text-brand-navy font-semibold text-sm">SafePath Consulting</p>
<p className="text-slate-500 text-xs">Operationel Risikostyring</p>
</div>
</div>
</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-center text-xs text-slate-400 font-mono">
<span>BEREDSKAB</span>
<span>SIKKERHED</span>
<span>TRYGHED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-brand-navy tracking-tight mb-4">Skal vi sikre jeres organisation?</h2>
<p className="text-slate-500">Udfyld formularen, så kontakter vi dig hurtigst muligt for en uforpligtende samtale om jeres behov.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Navn</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all placeholder:text-slate-400 text-sm bg-slate-50/30" placeholder="Dit navn" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all placeholder:text-slate-400 text-sm bg-slate-50/30" placeholder="din@email.dk" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Organisation / Institution</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all placeholder:text-slate-400 text-sm bg-slate-50/30" placeholder="Hvor arbejder du?" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Hvordan kan vi hjælpe?</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
<input className="text-brand-navy" name="service" type="radio"/>
<span className="text-sm text-slate-600">Beredskabsplan</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
<input className="text-brand-navy" name="service" type="radio"/>
<span className="text-sm text-slate-600">Risikoanalyse</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
<input className="text-brand-navy" name="service" type="radio"/>
<span className="text-sm text-slate-600">Sikkerhed/CCTV</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
<input className="text-brand-navy" name="service" type="radio"/>
<span className="text-sm text-slate-600">Andet</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Besked</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all placeholder:text-slate-400 text-sm bg-slate-50/30" placeholder="Beskriv kort jeres udfordringer..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-brand-navy text-white font-medium rounded-lg hover:bg-[#08223d] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20" type="button">
                    Send forespørgsel
                    <span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>
</section>

<footer className="bg-brand-navy border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16 text-sm">
<div className="col-span-1 md:col-span-2">
<a className="text-white font-semibold tracking-tight text-lg flex items-center gap-2 mb-4" href="#">
<span className="iconify text-brand-green" data-icon="lucide:shield-check" data-width="20"></span>
                        SafePath Consulting
                    </a>
<p className="text-slate-300 max-w-sm leading-relaxed mb-6">
                        Professionel rådgivning inden for beredskab, sikkerhed og risikostyring til danske myndigheder og institutioner. Vi skaber tryghed gennem handling.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-brand-green" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-brand-green" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Ydelser</h4>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-brand-green transition-colors" href="#">Beredskabsplanlægning</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Risikostyring</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">CCTV &amp; Sikkerhed</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Træning &amp; Øvelser</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-slate-400">
<li className="flex items-center gap-3">
<span className="iconify text-brand-green" data-icon="lucide:mail" data-width="16"></span>
                            kontakt@safepath.dk
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-green" data-icon="lucide:phone" data-width="16"></span>
                            +45 12 34 56 78
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-green" data-icon="lucide:map-pin" data-width="16"></span>
                            København, Danmark
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2023 SafePath Consulting. Alle rettigheder forbeholdes.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300 transition-colors" href="#">Privatlivspolitik</a>
<a className="hover:text-slate-300 transition-colors" href="#">Vilkår</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
