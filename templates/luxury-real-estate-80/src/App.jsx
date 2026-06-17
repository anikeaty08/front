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
      

<nav className="fixed top-0 inset-x-0 z-50 p-6 flex justify-center pointer-events-none">
<div className="glass-panel px-8 py-3 rounded-full flex items-center justify-between w-full max-w-5xl pointer-events-auto shadow-sm transition-transform hover:scale-[1.01] duration-500">
<a className="text-sm font-medium tracking-tighter text-slate-900 uppercase" href="#">
                Prime Estates
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-600 tracking-wide">
<a className="hover:text-slate-900 transition-colors" href="#properties">Objekte</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Kompetenz</a>
<a className="hover:text-slate-900 transition-colors" href="#about">Über uns</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Ablauf</a>
</div>
<a className="bg-slate-900 text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-slate-800 transition-colors" href="#contact">
                Kontakt
            </a>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover animate-ken-burns" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-slate-900/40"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
<div className="glass-dark px-10 py-12 rounded-3xl max-w-3xl border border-white/10 shadow-2xl">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6 leading-tight">
                    Exklusives Wohnen <br/>
<span className="font-normal italic font-serif opacity-90">neu definiert.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-lg mx-auto leading-relaxed">
                    Entdecken Sie kuratierte Immobilien an den begehrtesten Standorten. Architektur, Design und Luxus in Perfektion.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-slate-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group">
<span>Exposé ansehen</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="glass-card text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all">
                        Suchauftrag starten
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-32 px-6 bg-slate-50 relative" id="properties">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-4">Ausgewählte Objekte</h2>
<p className="text-slate-500 font-light max-w-md">Handverlesene Immobilien, die höchsten Ansprüchen an Ästhetik und Lage gerecht werden.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-slate-800 hover:text-slate-500 transition-colors mt-4 md:mt-0" href="#">
                    Alle Angebote ansehen <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1">
<iconify-icon icon="solar:star-linear"></iconify-icon> Neu
                    </div>
<div className="absolute bottom-4 left-4 right-4 glass-panel p-5 rounded-xl transition-all duration-300 group-hover:-translate-y-2">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Penthouse Elbchaussee</h3>
<p className="text-xs text-slate-500">Hamburg, Deutschland</p>
</div>
<span className="text-sm font-semibold text-slate-900">€ 4.5M</span>
</div>
<div className="flex gap-4 border-t border-slate-200/50 pt-3 mt-2">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 4
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 240m²
                            </div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Villa Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 right-4 glass-panel p-5 rounded-xl transition-all duration-300 group-hover:-translate-y-2">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Villa Seeblick</h3>
<p className="text-xs text-slate-500">Starnberg, Bayern</p>
</div>
<span className="text-sm font-semibold text-slate-900">€ 8.2M</span>
</div>
<div className="flex gap-4 border-t border-slate-200/50 pt-3 mt-2">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 6
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 5
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 520m²
                            </div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Modern Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 right-4 glass-panel p-5 rounded-xl transition-all duration-300 group-hover:-translate-y-2">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Loft Berlin Mitte</h3>
<p className="text-xs text-slate-500">Berlin, Deutschland</p>
</div>
<span className="text-sm font-semibold text-slate-900">€ 2.9M</span>
</div>
<div className="flex gap-4 border-t border-slate-200/50 pt-3 mt-2">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 180m²
                            </div>
</div>
</div>
</div>
</div>
<div className="md:hidden mt-8 text-center">
<a className="inline-flex items-center gap-2 text-sm text-slate-800 font-medium" href="#">
                    Alle Angebote ansehen <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2 block">Warum Prime Estates?</span>
<h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">Exzellenz in jedem Detail</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-800" icon="solar:city-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Marktkenntnis</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Tiefes Verständnis für lokale Märkte und globale Trends im Luxussegment.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-800" icon="solar:graph-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Präzise Bewertung</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Datenbasierte Analysen für den realistischen und besten Marktwert.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-800" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Absolute Diskretion</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Schutz Ihrer Privatsphäre steht bei jeder Transaktion an erster Stelle.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-slate-800" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Persönlicher Service</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Individuelle Betreuung von der ersten Besichtigung bis zur Schlüsselübergabe.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-[2rem] p-4 md:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 md:gap-16 items-center">
<div className="w-full md:w-5/12 aspect-[3/4] md:aspect-[4/5] relative rounded-2xl overflow-hidden shrink-0">
<img alt="Real Estate Agent" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-7/12 py-4 md:pr-8">
<h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-6">Ihr Partner für<br/>außergewöhnliche Werte.</h2>
<p className="text-base text-slate-600 font-light mb-6 leading-relaxed">
                        Seit über 15 Jahren verbinde ich Menschen mit Räumen, die inspirieren. Bei Prime Estates verstehen wir, dass eine Immobilie mehr ist als nur Wände und Boden – sie ist Ausdruck Ihrer Persönlichkeit und Lebensweise.
                    </p>
<p className="text-base text-slate-600 font-light mb-8 leading-relaxed">
                        Mein Team und ich setzen auf Transparenz, moderne Technologie und ein internationales Netzwerk, um für Sie das Unmögliche möglich zu machen.
                    </p>
<div className="flex items-center gap-4">
<img alt="Signature" className="h-8 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="border-l border-slate-200 pl-4">
<p className="text-sm font-medium text-slate-900">Maximilian von Sternberg</p>
<p className="text-xs text-slate-400">Gründer &amp; CEO</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative" id="process">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-800 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Ihr Weg zur Traumimmobilie</h2>
<p className="text-slate-400 font-light">Ein strukturierter Prozess für maximale Sicherheit und Komfort.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-slate-800"></div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-black/20">
<iconify-icon className="text-white" icon="solar:chat-round-line-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal mb-3">1. Beratung</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                        Wir analysieren Ihre Wünsche und Anforderungen detailliert, um eine maßgeschneiderte Auswahl zu erstellen.
                    </p>
</div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center">
<div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-black/20">
<iconify-icon className="text-white" icon="solar:eye-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal mb-3">2. Besichtigung</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                        Erleben Sie die Immobilie vor Ort. Wir begleiten Sie und klären alle offenen Fragen zur Architektur und Umgebung.
                    </p>
</div>

<div className="relative flex flex-col items-start md:items-center text-left md:text-center">
<div className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-white/10">
<iconify-icon icon="solar:key-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-normal mb-3">3. Kaufabschluss</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                        Von der Verhandlung bis zum Notartermin – wir sorgen für eine rechtssichere und reibungslose Abwicklung.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-lg font-medium tracking-tighter text-slate-900 uppercase mb-6 block" href="#">
                        Prime Estates
                    </a>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                        Die erste Adresse für Luxusimmobilien. Wir definieren Standards neu und schaffen bleibende Werte für Generationen.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div>
<h4 className="text-sm font-medium text-slate-900 mb-6">Unternehmen</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Über uns</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Karriere</a></li>
<li><a className="text-sm text-slate-500 font-light hover:text-slate-900 transition-colors" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-6">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-500 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                Königsallee 1, Düsseldorf
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-500 font-light">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                                +49 211 123456
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-500 font-light">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                                hello@prime-estates.de
                            </li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">© 2023 Prime Estates GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Impressum</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Datenschutz</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
