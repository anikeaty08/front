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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
<div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">

<a className="flex items-center gap-2 group relative overflow-hidden" href="#">
<div className="w-10 h-10 bg-[#22C55E] rounded-lg flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-green-500/30">
<span className="font-heading font-black italic text-xl tracking-tighter">ISY</span>
</div>
<span className="font-heading font-bold text-lg tracking-tight text-[#1F2937] hidden sm:block">FAHRSCHULE <span className="text-[#22C55E]">ISY</span></span>
</a>

<div className="hidden lg:flex items-center gap-1 bg-[#1F2937]/5 rounded-full p-1">
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold bg-white shadow-sm text-[#1F2937] transition-all" href="#">START</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#1F2937] hover:bg-white/50 transition-all" href="#klassen">FÜHRERSCHEINE</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#1F2937] hover:bg-white/50 transition-all" href="#preise">PREISE</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#1F2937] hover:bg-white/50 transition-all" href="#uberuns">ÜBER UNS</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-green-50 transition-colors group" href="tel:+49123456789">
<span className="iconify text-gray-400 group-hover:text-[#22C55E] transition-colors" data-icon="lucide:phone" data-width="18"></span>
<span className="text-xs font-bold uppercase tracking-wide text-gray-600">Kontakt</span>
</a>
<a className="bg-[#22C55E] text-white px-6 py-2.5 rounded-full font-heading font-bold text-xs tracking-wider hover:bg-[#1F2937] hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20" href="#termin">
                    PROBESTUNDE
                </a>
</div>
</div>
</nav>
<main className="pt-24 md:pt-32">

<section className="relative max-w-[95%] mx-auto rounded-[2.5rem] bg-[#F0FDF4] overflow-hidden min-h-[85vh] flex items-center">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22C55E]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/60 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7 flex flex-col justify-center text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#22C55E]/20 self-center md:self-start mb-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Jetzt anmelden &amp; losfahren</span>
</div>
<h1 className="font-heading font-black text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tighter text-[#1F2937]">
                        DEIN <br/>
<span className="relative inline-block text-[#22C55E]">
                            FÜHRERSCHEIN.
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#1F2937]" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span> <br/>
                        EINFACH. ISY.
                    </h1>
<p className="font-hand text-2xl md:text-3xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed -rotate-1">
                        "Moderne Ausbildung, entspannte Lehrer und <span className="bg-[#22C55E]/20 px-1 font-bold">flexible Zeiten</span>. Deine Freiheit beginnt hier."
                    </p>
<div className="flex flex-col md:flex-row gap-4 pt-6 items-center md:items-start">
<a className="group relative px-8 py-4 bg-[#1F2937] text-white rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95" href="#termin">
<span className="relative z-10 font-heading font-bold text-sm tracking-widest flex items-center gap-2">
                                PROBESTUNDE BUCHEN 
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:calendar-check"></span>
</span>
<div className="absolute inset-0 bg-[#22C55E] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</a>
<a className="flex items-center gap-2 px-6 py-4 rounded-full border border-gray-200 hover:border-[#22C55E] hover:text-[#22C55E] transition-colors font-heading font-bold text-xs tracking-widest uppercase" href="#preise">
                            Preise ansehen
                        </a>
</div>

<div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-gray-500 text-xs font-bold uppercase tracking-wide">
<span className="flex items-center gap-1"><span className="iconify text-[#22C55E]" data-icon="lucide:check-circle"></span> Geduldige Lehrer</span>
<span className="flex items-center gap-1"><span className="iconify text-[#22C55E]" data-icon="lucide:check-circle"></span> Moderne Autos</span>
</div>
</div>

<div className="md:col-span-5 relative h-[500px] flex items-center justify-center">

<div className="absolute w-[450px] h-[450px] border border-[#22C55E]/20 rounded-full animate-[spin_30s_linear_infinite] opacity-60">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[4.5px] font-bold uppercase tracking-[2px] fill-[#1F2937]">
<textpath href="#circlePath" startoffset="0%">• Fahrschule ISY • Mainz-Kastel • Führerschein • Einfach Sicher</textpath>
</text>
</svg>
</div>

<img alt="Fahrschulauto" className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-transform duration-700 ease-out object-cover h-[350px]" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=1770&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-10 right-0 md:-right-5 bg-white p-4 rounded-xl shadow-xl z-20 rotate-6 hover:rotate-0 transition-transform duration-300 border-l-4 border-[#22C55E]">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-[#22C55E]">
<span className="iconify" data-icon="lucide:trophy" data-width="24"></span>
</div>
<div>
<p className="text-[10px] text-gray-400 font-bold uppercase">Erfolgsquote</p>
<p className="text-lg font-heading font-black">Top!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-10 border-b border-gray-100 overflow-hidden bg-white">
<div className="flex items-center gap-16 whitespace-nowrap animate-marquee">

<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">KLASSE B</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-green-300 opacity-40">B197 AUTOMATIK</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">MOTORRAD</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">INTENSIVKURSE</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">AUFFRISCHUNG</span>

<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">KLASSE B</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-green-300 opacity-40">B197 AUTOMATIK</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">MOTORRAD</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">INTENSIVKURSE</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] to-gray-400 opacity-20">AUFFRISCHUNG</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24" id="klassen">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-heading font-black text-5xl md:text-6xl text-[#1F2937] tracking-tighter mb-4">
                        DEIN WEG ZUR<br/>FREIHEIT.
                    </h2>
<p className="font-hand text-2xl text-gray-500">Wähle deine Ausbildungsklasse.</p>
</div>
<a className="group flex items-center gap-2 border-b border-[#1F2937] pb-1 hover:text-[#22C55E] hover:border-[#22C55E] transition-colors" href="#termin">
<span className="text-sm font-bold uppercase tracking-widest">Alle Klassen ansehen</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#F5F5F5] rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 cursor-pointer">
<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-green-500/30">
<span className="iconify" data-icon="lucide:car-front" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-3xl mb-4 tracking-tight">PKW Führerschein (B / B197)</h3>
<p className="text-gray-600 leading-relaxed text-lg">Der Klassiker. Ob Schaltwagen oder die moderne B197 Automatik-Ausbildung. Wir machen dich fit für den Straßenverkehr.</p>
<span className="inline-block mt-6 text-[#22C55E] font-bold text-sm uppercase tracking-wider group-hover:underline">Mehr erfahren</span>
</div>
<img alt="Driving" className="absolute -bottom-20 -right-10 h-80 object-contain rotate-12 opacity-40 group-hover:opacity-90 group-hover:rotate-6 group-hover:-translate-y-4 transition-all duration-700 grayscale group-hover:grayscale-0 rounded-xl" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:row-span-2 bg-[#1F2937] text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 text-white border border-white/20">
<span className="iconify" data-icon="lucide:bike" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-3xl mb-4 tracking-tight">Motorrad (A / A2 / A1)</h3>
<p className="text-gray-400 leading-relaxed">Spüre den Wind. Von der 125er bis zur offenen Klasse A. Sicherheitstraining inklusive.</p>
</div>
<div className="mt-8 border-t border-white/10 pt-8">
<div className="flex items-center gap-4">
<div className="text-center">
<span className="block text-2xl font-bold text-[#22C55E]">A</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Offen</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="text-center">
<span className="block text-2xl font-bold text-[#22C55E]">A2</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Beschränkt</span>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2rem] p-10 hover:border-[#22C55E] transition-colors duration-300 group">
<div className="w-12 h-12 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-6 text-[#1F2937] group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-2xl mb-3 tracking-tight">Intensivkurse</h3>
<p className="text-gray-600 text-sm leading-relaxed">Keine Zeit zu verlieren? Mach deinen Führerschein in den Ferien oder im Express-Modus.</p>
</div>

<div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2rem] p-10 hover:border-[#22C55E] transition-colors duration-300 group">
<div className="w-12 h-12 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-6 text-[#1F2937] group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:refresh-ccw" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-2xl mb-3 tracking-tight">Auffrischung</h3>
<p className="text-gray-600 text-sm leading-relaxed">Lange nicht gefahren? Wir geben dir die Sicherheit zurück. Stressfrei und ohne Prüfung.</p>
</div>
</div>
</section>

<section className="w-full py-12 bg-gray-50" id="uberuns">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#22C55E] font-bold tracking-widest uppercase text-xs">Der Ablauf</span>
<h2 className="font-heading font-black text-4xl md:text-5xl text-[#1F2937] mt-2">SO LÄUFT'S BEI ISY.</h2>
</div>
<div className="relative w-full rounded-[3rem] overflow-hidden bg-[#EAEAEA] aspect-[16/9] md:aspect-[21/9] group cursor-pointer shadow-2xl">

<img alt="Fahrschule Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#1F2937]/60 group-hover:bg-[#1F2937]/70 transition-colors duration-500"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-20 w-full px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl text-center text-white">

<div className="group/step">
<div className="w-16 h-16 rounded-full border-2 border-[#22C55E] text-[#22C55E] flex items-center justify-center text-xl font-black mx-auto mb-4 bg-white/10 backdrop-blur">1</div>
<h3 className="font-bold text-lg">Anmeldung</h3>
<p className="text-sm text-gray-300 mt-2 opacity-0 group-hover/step:opacity-100 transition-opacity">Beratung &amp; Antrag</p>
</div>

<div className="group/step">
<div className="w-16 h-16 rounded-full border-2 border-white text-white flex items-center justify-center text-xl font-black mx-auto mb-4 bg-white/10 backdrop-blur">2</div>
<h3 className="font-bold text-lg">Theorie</h3>
<p className="text-sm text-gray-300 mt-2 opacity-0 group-hover/step:opacity-100 transition-opacity">Spannender Unterricht</p>
</div>

<div className="group/step">
<div className="w-16 h-16 rounded-full border-2 border-white text-white flex items-center justify-center text-xl font-black mx-auto mb-4 bg-white/10 backdrop-blur">3</div>
<h3 className="font-bold text-lg">Praxis</h3>
<p className="text-sm text-gray-300 mt-2 opacity-0 group-hover/step:opacity-100 transition-opacity">Fahren lernen</p>
</div>

<div className="group/step">
<div className="w-16 h-16 rounded-full border-2 border-[#22C55E] bg-[#22C55E] text-white flex items-center justify-center text-xl font-black mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.5)]">4</div>
<h3 className="font-bold text-lg">Prüfung</h3>
<p className="text-sm text-gray-300 mt-2 opacity-0 group-hover/step:opacity-100 transition-opacity">Führerschein!</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1F2937] text-white py-16 mt-12 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-80 hover:opacity-100 transition-opacity duration-500">
<div className="flex flex-col items-center gap-4 group">
<span className="iconify text-[#22C55E] group-hover:scale-110 transition-transform" data-icon="lucide:smile" data-width="48"></span>
<span className="text-xs font-bold tracking-widest uppercase">Freundliche Lehrer</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<span className="iconify text-[#22C55E] group-hover:scale-110 transition-transform" data-icon="lucide:banknote" data-width="48"></span>
<span className="text-xs font-bold tracking-widest uppercase">Transparente Preise</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<span className="iconify text-[#22C55E] group-hover:scale-110 transition-transform" data-icon="lucide:calendar-clock" data-width="48"></span>
<span className="text-xs font-bold tracking-widest uppercase">Flexible Planung</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<span className="iconify text-[#22C55E] group-hover:scale-110 transition-transform" data-icon="lucide:map-pin" data-width="48"></span>
<span className="text-xs font-bold tracking-widest uppercase">Zentral in Mainz-Kastel</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="preise">
<div className="text-center mb-12">
<h2 className="font-heading font-black text-4xl text-[#1F2937]">FAIRE PREISE. KEINE VERSTECKE.</h2>
<p className="text-gray-500 mt-4">Wähle das Paket, das zu dir passt. (Orientierungspreise)</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
<h3 className="font-bold text-xl mb-2">Basis</h3>
<p className="text-sm text-gray-500 mb-6">Perfekt für den Start</p>
<div className="text-3xl font-black mb-6">Individuell</div>
<ul className="space-y-3 text-sm text-gray-600 mb-8">
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Grundbetrag</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Theorieunterricht</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Lern-App inklusive</li>
</ul>
<a className="block w-full py-3 text-center border border-[#1F2937] rounded-xl font-bold hover:bg-[#1F2937] hover:text-white transition-colors" href="#termin">Anfragen</a>
</div>

<div className="bg-[#1F2937] text-white p-8 rounded-3xl shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#22C55E] text-xs font-bold px-3 py-1 rounded-bl-xl">BELIEBT</div>
<h3 className="font-bold text-xl mb-2">Komfort Paket</h3>
<p className="text-sm text-gray-400 mb-6">Rundum sorglos</p>
<div className="text-3xl font-black mb-6 text-[#22C55E]">Top Preis/Leistung</div>
<ul className="space-y-3 text-sm text-gray-300 mb-8">
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Alles aus Basis</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Lehrmaterial Premium</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Vorstellung zur Prüfung</li>
</ul>
<a className="block w-full py-3 text-center bg-[#22C55E] rounded-xl font-bold hover:bg-white hover:text-[#1F2937] transition-colors" href="#termin">Jetzt sichern</a>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
<h3 className="font-bold text-xl mb-2">Intensiv</h3>
<p className="text-sm text-gray-500 mb-6">Schnell zum Ziel</p>
<div className="text-3xl font-black mb-6">Auf Anfrage</div>
<ul className="space-y-3 text-sm text-gray-600 mb-8">
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Täglicher Theorieunterricht</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> Vorrangige Fahrstunden</li>
<li className="flex gap-2"><span className="iconify text-[#22C55E]" data-icon="lucide:check"></span> 2 Wochen möglich</li>
</ul>
<a className="block w-full py-3 text-center border border-[#1F2937] rounded-xl font-bold hover:bg-[#1F2937] hover:text-white transition-colors" href="#termin">Beratung</a>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 rounded-t-[3rem] -mt-8 relative z-10 border-t border-gray-100 shadow-[0_-20px_60px_rgba(0,0,0,0.05)]" id="termin">
<div className="max-w-5xl mx-auto px-6 text-center">

<div className="mb-12">
<h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-4 text-[#1F2937]">
                        BEREIT FÜR DEN START?
                    </h2>
<p className="text-xl text-gray-500 font-hand rotate-1">Buche jetzt deine <span className="text-[#22C55E] font-bold">kostenlose</span> Probestunde.</p>
</div>

<div className="bg-[#F0FDF4] p-6 md:p-10 rounded-[2.5rem] max-w-2xl mx-auto shadow-inner mb-20">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="bg-white rounded-xl px-6 py-4 outline-none border border-transparent focus:border-[#22C55E] w-full shadow-sm text-gray-800" placeholder="Dein Name" type="text"/>
<input className="bg-white rounded-xl px-6 py-4 outline-none border border-transparent focus:border-[#22C55E] w-full shadow-sm text-gray-800" placeholder="Telefonnummer" type="tel"/>
</div>
<select className="bg-white rounded-xl px-6 py-4 outline-none border border-transparent focus:border-[#22C55E] w-full shadow-sm text-gray-500 cursor-pointer">
<option>Welcher Führerschein? (Bitte wählen)</option>
<option>Klasse B (Auto)</option>
<option>Klasse A (Motorrad)</option>
<option>Intensivkurs</option>
</select>
<button className="w-full bg-[#1F2937] text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-widest hover:bg-[#22C55E] hover:text-white hover:shadow-lg transition-all duration-300" type="submit">
                            KOSTENLOSE ANFRAGE SENDEN
                        </button>
</form>
<p className="mt-4 text-[10px] text-gray-400">Deine Daten sind bei uns sicher. Wir melden uns umgehend.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-gray-100 pt-12">
<div className="md:col-span-1">

<div className="flex items-center gap-2 mb-4 opacity-80">
<div className="w-8 h-8 bg-[#22C55E] rounded flex items-center justify-center text-white text-xs font-black">ISY</div>
<span className="font-bold tracking-tight">FAHRSCHULE ISY</span>
</div>
<p className="text-xs text-gray-400 leading-relaxed">© 2025 Fahrschule ISY.<br/>Deine Fahrschule in Mainz-Kastel.</p>
</div>
<div className="space-y-4">
<h4 className="font-heading font-bold text-xs tracking-widest text-[#1F2937]">STANDORT</h4>
<p className="font-sans text-sm text-gray-500 hover:text-[#1F2937] transition-colors cursor-pointer">
                            Hauptstraße 123<br/>55252 Mainz-Kastel<br/>Deutschland
                        </p>
</div>
<div className="space-y-4">
<h4 className="font-heading font-bold text-xs tracking-widest text-[#1F2937]">KONTAKT</h4>
<a className="font-sans text-sm text-gray-500 hover:text-[#22C55E] transition-colors block" href="mailto:info@fahrschule-isy.de">info@fahrschule-isy.de</a>
<p className="font-sans text-sm text-gray-500">0123 / 456 789</p>
</div>
<div className="flex items-start justify-start md:justify-end gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#22C55E] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#22C55E] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:message-circle" data-width="18"></span></a>
</div>
</div>
<div className="mt-8 flex justify-center gap-4 text-[10px] text-gray-400 uppercase tracking-wider">
<a className="hover:text-[#1F2937]" href="#">Impressum</a>
<a className="hover:text-[#1F2937]" href="#">Datenschutz</a>
<a className="hover:text-[#1F2937]" href="#">AGB</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
