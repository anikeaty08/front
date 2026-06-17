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



        lucide.createIcons();
    
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<i className="text-orange-600 w-6 h-6 group-hover:rotate-90 transition-transform duration-500" data-lucide="hexagon"></i>
<span className="font-tech text-lg tracking-[0.2em] font-semibold text-white uppercase">Kraftwerk</span>
</div>

<div className="hidden md:flex items-center gap-8 font-tech text-xs tracking-widest text-slate-400 uppercase">
<a className="hover:text-orange-500 transition-colors duration-300" href="#">Expertise</a>
<a className="hover:text-orange-500 transition-colors duration-300" href="#">Sektoren</a>
<a className="hover:text-orange-500 transition-colors duration-300" href="#">Netzwerk</a>
<button className="btn-magnetic border border-white/20 px-6 py-2 text-white hover:border-orange-600 hover:text-orange-500 transition-colors duration-300 clip-diagonal">
                    Partner Werden
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Industrial Welding Sparks" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite] filter contrast-125 saturate-0" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_90%)]"></div>
</div>

<div className="absolute inset-0 tech-grid z-0 opacity-20"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
<div className="flex flex-col items-start max-w-4xl">

<div className="flex items-center gap-3 mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
</div>
<span className="font-tech text-xs tracking-[0.2em] text-orange-500 uppercase">System Status: Recruiting Active</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter uppercase leading-[0.9] mb-8 animate-fade-up text-glow" style={{animationDelay: '0.2s'}}>
                    Industrial <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">Precision</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-fade-up border-l border-orange-600/50 pl-6" style={{animationDelay: '0.3s'}}>
                    Wir verbinden Schwerindustrie mit digitaler Intelligenz. Rekrutierung auf mikroskopischem Niveau für makroskopischen Erfolg.
                </p>

<div className="flex flex-col md:flex-row gap-6 animate-fade-up" style={{animationDelay: '0.4s'}}>
<button className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-tech uppercase tracking-widest text-sm transition-all duration-300 clip-diagonal overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                            Talente Finden <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="group px-8 py-4 border border-white/20 text-white font-tech uppercase tracking-widest text-sm hover:bg-white/5 transition-all duration-300 clip-diagonal">
                        Über Uns
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm z-20 hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-slate-500 font-tech tracking-widest uppercase">
<div className="flex gap-8">
<span className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="activity"></i> Market Demand: High</span>
<span className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="crosshair"></i> Precision: 99.8%</span>
</div>
<div>SCROLL TO INITIALIZE</div>
</div>
</div>
</header>

<section className="py-24 border-b border-white/5 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 border border-white/5 hover:border-orange-600/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-6 h-6 text-orange-500" data-lucide="cpu"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">4.5<span className="text-orange-600">k</span></h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Engineers Placed</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-orange-600"></div>
</div>
</div>

<div className="group relative p-8 border border-white/5 hover:border-orange-600/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-6 h-6 text-orange-500" data-lucide="globe"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">12</h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Global Locations</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-2/3 bg-orange-600"></div>
</div>
</div>

<div className="group relative p-8 border border-white/5 hover:border-orange-600/30 bg-[#0A0C10] transition-colors duration-500">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-6 h-6 text-orange-500" data-lucide="timer"></i>
</div>
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">48<span className="text-sm align-top text-slate-500">h</span></h3>
<p className="font-tech text-xs tracking-widest text-slate-400 uppercase">Avg. Response Time</p>
<div className="w-full h-[1px] bg-slate-800 mt-6 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-full bg-orange-600"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="font-tech text-xs text-orange-500 tracking-[0.3em] uppercase mb-4 block">Core Capabilities</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight uppercase">Operational <br/> Excellence</h2>
</div>
<div className="hidden md:block w-32 h-[1px] bg-slate-700 mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">01</span>
</div>
<div className="relative z-10">
<i className="text-orange-500 w-8 h-8 mb-4" data-lucide="microscope"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">High-Tech Engineering</h3>
<p className="text-sm text-slate-400 max-w-sm">Präzise Vermittlung für R&amp;D, Robotik und Automatisierungstechnik.</p>
</div>
</div>

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">02</span>
</div>
<div className="relative z-10">
<i className="text-orange-500 w-8 h-8 mb-4" data-lucide="hard-hat"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Executive Construction</h3>
<p className="text-sm text-slate-400 max-w-sm">Führungskräfte für Großprojekte, Infrastruktur und Bauwesen.</p>
</div>
</div>

<div className="group relative h-80 bg-slate-900/50 border border-white/5 p-8 flex flex-col justify-end overflow-hidden hover:bg-slate-800/50 transition-colors duration-500 md:col-span-2">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 mix-blend-luminosity transition-opacity duration-700 scale-100 group-hover:scale-105 transform"></div>
<div className="absolute top-0 left-0 p-4">
<span className="font-tech text-xs text-white/40 border border-white/10 px-2 py-1">03</span>
</div>
<div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between w-full">
<div>
<i className="text-orange-500 w-8 h-8 mb-4" data-lucide="layers"></i>
<h3 className="text-xl font-semibold text-white tracking-tight uppercase mb-2">Supply Chain Strategy</h3>
<p className="text-sm text-slate-400 max-w-md">Optimierung durch Top-Talente in Logistik und Prozessmanagement.</p>
</div>
<div className="mt-6 md:mt-0">
<a className="inline-flex items-center gap-2 text-xs font-tech text-white uppercase tracking-widest hover:text-orange-500 transition-colors" href="#">
                                Mehr erfahren <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Abstract Concrete Architecture" className="w-full h-full object-cover filter grayscale contrast-125 opacity-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-orange-600 mx-auto mb-8 opacity-50" data-lucide="quote"></i>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-tight mb-8">
                "QUALITÄT IST KEIN ZUFALL. <br />
                SIE IST IMMER DAS ERGEBNIS <br/>
                INTELLIGENTER ANSTRENGUNG."
            </br></h2>
<div className="flex items-center justify-center gap-4">
<div className="h-[1px] w-12 bg-orange-600"></div>
<span className="font-tech text-xs tracking-[0.2em] text-slate-400 uppercase">John Ruskin / Industrial Philosophy</span>
<div className="h-[1px] w-12 bg-orange-600"></div>
</div>
</div>
</section>

<footer className="relative bg-[#05060A] border-t border-white/10 pt-20 pb-10">

<div className="absolute top-0 left-10 w-[1px] h-full bg-white/5 hidden md:block"></div>
<div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 hidden md:block"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div>
<div className="flex items-center gap-2 mb-6">
<i className="text-orange-600 w-5 h-5" data-lucide="hexagon"></i>
<span className="font-tech text-md tracking-[0.2em] font-semibold text-white uppercase">Kraftwerk</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Defining the standard for industrial recruitment. Built on precision, trust, and technical expertise.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Navigation</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-orange-500 transition-colors" href="#">Startseite</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Für Unternehmen</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Für Kandidaten</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Insights</a></li>
</ul>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-orange-500 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">AGB</a></li>
</ul>
</div>

<div>
<h4 className="font-tech text-xs text-white uppercase tracking-widest mb-6">Stay Connected</h4>
<form className="flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-[#0F1218] border border-white/10 p-3 pl-4 text-xs text-white focus:outline-none focus:border-orange-600 transition-colors placeholder-slate-600 font-tech tracking-wider uppercase" placeholder="E-MAIL ADRESSE" type="email"/>
</div>
<button className="w-full bg-white text-black hover:bg-orange-600 hover:text-white transition-colors p-3 text-xs font-bold uppercase tracking-widest clip-diagonal">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-widest font-tech">
                    © 2023 Kraftwerk Recruitment. All Systems Operational.
                </p>
<div className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-green-500"></div>
<span className="text-[10px] text-slate-600 uppercase tracking-widest font-tech">Server: Frankfurt-1</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
