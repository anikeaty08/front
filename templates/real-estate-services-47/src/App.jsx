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
      

<nav className="fixed top-0 w-full z-50 bg-[#111e16]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-[#d4f64d] rounded-lg flex items-center justify-center text-[#111e16]">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">BravoService</span>
</div>
<div className="hidden lg:flex gap-8 text-stone-300 text-sm font-medium items-center">
<a className="hover:text-[#d4f64d] transition-colors" href="#start">Start</a>
<a className="hover:text-[#d4f64d] transition-colors" href="#leistungen">BravoService</a>
<a className="hover:text-[#d4f64d] transition-colors" href="#referenzen">Referenzen</a>
<a className="hover:text-[#d4f64d] transition-colors" href="#jobs">Jobs!</a>
<a className="hover:text-[#d4f64d] transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex flex-col items-end">
<a className="flex items-center gap-2 text-[#d4f64d] text-sm font-semibold hover:text-white transition-colors" href="tel:+491787792956">
<i className="w-4 h-4" data-lucide="phone"></i>
                    +49 (0) 178 77 92 956
                </a>
<span className="text-[10px] text-stone-500 uppercase tracking-wider">Mo – Fr: 8 – 16 Uhr</span>
</div>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden" id="start">

<div className="absolute inset-0 z-0">

<img alt="Modern Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>

<div className="absolute inset-0 bg-[#0f1a13]/90 mix-blend-multiply"></div>

<div className="absolute inset-0 bg-gradient-to-r from-[#111e16] via-[#111e16]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111e16] via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4f64d]/10 border border-[#d4f64d]/20 text-[#d4f64d] text-xs font-medium uppercase tracking-wide backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#d4f64d] animate-pulse"></span>
<span>Verfügbar in Berlin &amp; Umgebung</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                        Werte erhalten.<br/>
                        Zukunft <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f64d] to-[#eff59b]">gestalten.</span>
</h1>
<p className="text-lg md:text-xl text-stone-300 font-light max-w-xl leading-relaxed">
                        Ihr Premium-Partner für ganzheitliches Immobilienmanagement. Wir verbinden handwerkliche Präzision mit effizienter Planung für Ihren Erfolg.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="bg-[#d4f64d] text-[#111e16] px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#c3e63b] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,246,77,0.3)]" href="#referenzen">
                            Unsere Referenzen <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-4 rounded-lg text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm" href="#kontakt">
                            Kontakt aufnehmen
                        </a>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-white/10 mt-4">
<div>
<span className="block text-2xl font-bold text-white tracking-tight">15+</span>
<span className="text-xs text-stone-400 uppercase tracking-wide">Jahre Erfahrung</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<span className="block text-2xl font-bold text-white tracking-tight">100%</span>
<span className="text-xs text-stone-400 uppercase tracking-wide">Kundenzufriedenheit</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute -inset-1 bg-gradient-to-br from-[#d4f64d]/30 to-transparent rounded-2xl blur-2xl opacity-40"></div>
<div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight">Angebot anfordern</h3>
<p className="text-stone-400 text-xs mt-1 font-light">Unverbindlich &amp; kostenlos.</p>
</div>
<div className="w-10 h-10 rounded-full bg-[#d4f64d]/10 flex items-center justify-center text-[#d4f64d]">
<i className="w-5 h-5 ml-0.5 mt-0.5" data-lucide="send"></i>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-stone-300 uppercase tracking-wide">Name</label>
<input className="w-full bg-[#111e16]/60 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-stone-600 focus:outline-none focus:border-[#d4f64d]/50 focus:bg-[#111e16]/80 transition-all text-sm" placeholder="Max M." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-stone-300 uppercase tracking-wide">Telefon</label>
<input className="w-full bg-[#111e16]/60 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-stone-600 focus:outline-none focus:border-[#d4f64d]/50 focus:bg-[#111e16]/80 transition-all text-sm" placeholder="+49..." type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-stone-300 uppercase tracking-wide">Ihre Nachricht</label>
<textarea className="w-full bg-[#111e16]/60 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-stone-600 focus:outline-none focus:border-[#d4f64d]/50 focus:bg-[#111e16]/80 transition-all text-sm resize-none" placeholder="Kurze Beschreibung Ihres Anliegens..." rows="3"></textarea>
</div>
<button className="group w-full bg-white text-[#111e16] py-3.5 rounded-lg font-semibold text-sm hover:bg-[#d4f64d] transition-all duration-300 mt-2 flex items-center justify-center gap-2" type="button">
                                Anfrage absenden
                                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<p className="text-[10px] text-center text-stone-500 pt-2">Ihre Daten werden vertraulich behandelt.</p>
</form>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-stone-50" id="leistungen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-[#111e16] font-semibold tracking-wide uppercase text-xs border-b border-[#d4f64d] pb-1">Service im Fokus</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-[#111e16] mt-6 tracking-tight">Professionelle Dienstleistungen im Überblick</h2>
</div>
<p className="text-stone-500 max-w-sm text-sm leading-relaxed">
                    Wir bieten speziell auf Sie zugeschnittene Lösungen für Produkte, Dienstleistungen und Beratung.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-[#eff59b] rounded-xl flex items-center justify-center text-[#111e16] mb-6 group-hover:bg-[#d4f64d] transition-colors">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111e16] mb-3">Qualitätssicherung</h3>
<p className="text-stone-500 font-light leading-relaxed text-sm">
                        Höchste Standards in der Ausführung aller Arbeiten durch geschultes Fachpersonal.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-[#eff59b] rounded-xl flex items-center justify-center text-[#111e16] mb-6 group-hover:bg-[#d4f64d] transition-colors">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111e16] mb-3">Flexibilität</h3>
<p className="text-stone-500 font-light leading-relaxed text-sm">
                        Angepasste Zeitpläne und schnelle Reaktionszeiten für Ihre Immobilienbedürfnisse.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-[#eff59b] rounded-xl flex items-center justify-center text-[#111e16] mb-6 group-hover:bg-[#d4f64d] transition-colors">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-[#111e16] mb-3">Werterhalt</h3>
<p className="text-stone-500 font-light leading-relaxed text-sm">
                        Langfristige Pflegekonzepte zur Sicherung und Steigerung Ihrer Immobilienwerte.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="referenzen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#d4f64d] font-semibold tracking-wide uppercase text-xs bg-[#111e16] px-3 py-1 rounded-full">Referenzen</span>
<h2 className="text-4xl md:text-5xl font-semibold text-[#111e16] tracking-tight mt-6">Erfolgreiche Partnerschaften</h2>
</div>
<div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Schule" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#111e16]">
                            Bildung
                        </div>
</div>
<h3 className="text-2xl font-semibold text-[#111e16] mb-3 group-hover:text-[#6a7d28] transition-colors">Schulen &amp; Kindergärten</h3>
<p className="text-stone-600 font-light leading-relaxed mb-4">
                        Hygienische und sichere Umgebungen für Schüler und Kinder. Wir legen höchsten Wert auf Sauberkeit, um eine optimale Lern- und Spielumgebung zu schaffen.
                    </p>
<span className="inline-flex items-center text-sm font-medium text-[#111e16] border-b border-[#111e16]/20 pb-0.5 group-hover:border-[#d4f64d] transition-colors">Details <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Mehrfamilienhaus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#111e16]">
                            Wohnen
                        </div>
</div>
<h3 className="text-2xl font-semibold text-[#111e16] mb-3 group-hover:text-[#6a7d28] transition-colors">Mehrfamilienhäuser</h3>
<p className="text-stone-600 font-light leading-relaxed mb-4">
                        Vielseitige Palette an Services, die den Wohnkomfort optimieren und die Effizienz der Immobilie auf höchstem Niveau gewährleisten.
                    </p>
<span className="inline-flex items-center text-sm font-medium text-[#111e16] border-b border-[#111e16]/20 pb-0.5 group-hover:border-[#d4f64d] transition-colors">Details <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Gewerbe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#111e16]">
                            Gewerbe
                        </div>
</div>
<h3 className="text-2xl font-semibold text-[#111e16] mb-3 group-hover:text-[#6a7d28] transition-colors">Gewerbeimmobilien Instandhaltung</h3>
<p className="text-stone-600 font-light leading-relaxed mb-4">
                        Erhalt der baulichen Integrität, Sicherheit und ästhetischen Standards, um langfristigen Wert und Funktionalität zu gewährleisten.
                    </p>
<span className="inline-flex items-center text-sm font-medium text-[#111e16] border-b border-[#111e16]/20 pb-0.5 group-hover:border-[#d4f64d] transition-colors">Details <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Außenanlagen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#111e16]">
                            Landschaft
                        </div>
</div>
<h3 className="text-2xl font-semibold text-[#111e16] mb-3 group-hover:text-[#6a7d28] transition-colors">Außenanlagen &amp; Pflege</h3>
<p className="text-stone-600 font-light leading-relaxed mb-4">
                        Ganzheitliche Lösungen für Gestaltung und Pflege. Wir verwandeln Ihre Außenbereiche in Oasen der Ästhetik und Funktionalität.
                    </p>
<span className="inline-flex items-center text-sm font-medium text-[#111e16] border-b border-[#111e16]/20 pb-0.5 group-hover:border-[#d4f64d] transition-colors">Details <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111e16] overflow-hidden relative" id="jobs">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="bg-[#d4f64d] rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111e16]/10 border border-[#111e16]/10 text-[#111e16] text-xs font-bold uppercase tracking-wide">
                            Wir suchen Verstärkung
                        </div>
<h2 className="text-4xl md:text-5xl font-bold text-[#111e16] tracking-tight">Karrierechancen<br/>bei BravoService</h2>
<p className="text-[#111e16]/80 text-lg leading-relaxed max-w-md">
                            Sie sind auf der Suche nach einer spannenden beruflichen Herausforderung? Wir suchen talentierte und motivierte Fachkräften, die unser Team bereichern.
                        </p>
<div className="pt-2">
<button className="bg-[#111e16] text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-[#2d4a35] transition-all shadow-lg hover:shadow-xl">
                                Mehr erfahren <i className="w-4 h-4" data-lucide="briefcase"></i>
</button>
</div>
</div>
<div className="relative hidden md:block">
<div className="grid grid-cols-2 gap-4 opacity-90">
<img alt="Team" className="rounded-2xl rotate-3 translate-y-8 shadow-lg border-4 border-white/20" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=300&amp;h=300&amp;q=80"/>
<img alt="Team" className="rounded-2xl -rotate-3 shadow-lg border-4 border-white/20" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&amp;fit=crop&amp;w=300&amp;h=300&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111e16] pt-24 pb-12 border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20 text-stone-400">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center gap-2 text-white mb-6">
<i className="w-6 h-6 text-[#d4f64d]" data-lucide="building-2" strokeWidth="1.5"></i>
<span className="text-xl font-bold tracking-tight">BRAVO Service GmbH</span>
</div>
<p className="max-w-xs font-light">
                        Ihr Partner für professionelles Immobilienmanagement in Berlin und Umgebung. Sauberkeit, Sicherheit und Werterhalt.
                    </p>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold uppercase tracking-wider text-sm">Kontakt</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-[#d4f64d] mt-0.5" data-lucide="map-pin"></i>
<span>Großbeerenstraße 2-10<br/>12107 Berlin</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#d4f64d]" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+491787792956">+49 (0) 178 77 92 956</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-semibold uppercase tracking-wider text-sm">Rechtliches</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#d4f64d] transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-[#d4f64d] transition-colors" href="#">Datenschutzerklärung</a></li>
<li><a className="hover:text-[#d4f64d] transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-medium">
<p>© 2025 Bravo Service GmbH. Alle Rechte vorbehalten.</p>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#start">
                    Nach oben <i className="w-3 h-3" data-lucide="arrow-up"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
