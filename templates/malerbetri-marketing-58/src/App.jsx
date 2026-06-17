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



        // Simple script for header behavior on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    
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
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 flex items-center gap-2" href="#">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        MALERMARKETING
                    </a>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#services">Leistungen</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#results">Ergebnisse</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#about">Über uns</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-neutral-200 text-sm font-medium rounded-full text-neutral-900 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 shadow-sm" href="#contact">
                        Kontakt
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20" href="#audit">
                        Erstgespräch buchen
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-24 sm:pt-32 pb-16 overflow-hidden">

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">Spezialisiert auf das Malerhandwerk</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 max-w-4xl leading-[1.1]">
                Planbares Wachstum für <br className="hidden md:block"/>
<span className="text-neutral-400">Ihren Malerbetrieb.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-10 font-light leading-relaxed">
                Wir helfen Malern und Lackierern dabei, hochwertige Aufträge zu gewinnen und qualifizierte Fachkräfte einzustellen. Digital, automatisiert und messbar.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
<button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20 hover:-translate-y-0.5">
                    Kostenlose Analyse anfordern
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-full text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-all hover:-translate-y-0.5">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Video ansehen
                </button>
</div>

<div className="relative w-full max-w-5xl rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-200/50 overflow-hidden p-2 sm:p-4">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-50"></div>
<img alt="Malerarbeiten Interior" className="w-full h-[300px] md:h-[500px] object-cover rounded-xl grayscale-[10%] contrast-[0.95]" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md border border-neutral-100 p-4 rounded-xl shadow-lg flex items-center gap-4 z-20 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-medium">Neue Bewerbung</p>
<p className="text-sm font-semibold text-neutral-900">Max Mustermann</p>
</div>
</div>
<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md border border-neutral-100 p-4 rounded-xl shadow-lg flex items-center gap-4 z-20 max-w-xs">
<div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-medium">Anfragen diesen Monat</p>
<p className="text-sm font-semibold text-neutral-900">+ 18 Privatkunden</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-neutral-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm text-neutral-400 mb-8 font-medium">Vertraut von führenden Malerbetrieben in Deutschland</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tight text-neutral-800">Farbe&amp;Raum</span>
<span className="text-xl font-serif text-neutral-800">MalerWERK</span>
<span className="text-xl font-bold tracking-widest text-neutral-800">SCHMIDT</span>
<span className="text-xl font-medium italic text-neutral-800">ProAnstrich</span>
<span className="text-xl font-bold text-neutral-800">BAUMANN</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Maßgeschneiderte Lösungen.</h2>
<p className="text-neutral-500 font-light">Wir verstehen die Herausforderungen im Handwerk. Unsere Strategien sind speziell darauf ausgelegt, Ihre Probleme zu lösen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 rounded-3xl bg-white border border-neutral-200 p-8 md:p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-2">Mitarbeitergewinnung</h3>
<p className="text-neutral-500 font-light max-w-sm">Schluss mit Fachkräftemangel. Wir positionieren Sie als Top-Arbeitgeber in Ihrer Region und generieren qualifizierte Bewerbungen von Fachkräften, die wirklich arbeiten wollen.</p>
</div>
<div className="mt-8 flex gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-50 text-xs font-medium text-neutral-600 border border-neutral-100">Social Recruiting</span>
<span className="inline-flex items-center px-3 py-1 rounded-md bg-neutral-50 text-xs font-medium text-neutral-600 border border-neutral-100">Employer Branding</span>
</div>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none"></div>
<img alt="Team" className="absolute -right-12 -bottom-12 w-64 h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500 opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>

<div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-10 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2">Auftragsgewinnung</h3>
<p className="text-neutral-400 font-light text-sm">Hochwertige Privat- und Gewerbekunden auf Knopfdruck. Filtern Sie Preisanfragen aus.</p>
</div>
<div className="mt-4 border-t border-neutral-800 pt-4">
<div className="flex items-center justify-between text-sm text-neutral-300">
<span>ROI Durchschnitt</span>
<span className="text-emerald-400 font-medium">+450%</span>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 blur-[80px] opacity-20"></div>
</div>

<div className="rounded-3xl bg-white border border-neutral-200 p-8 md:p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-2">Webdesign &amp; SEO</h3>
<p className="text-neutral-500 font-light text-sm mb-6">Ihre digitale Visitenkarte. Modern, schnell und für Google optimiert, damit Sie in Ihrer Stadt gefunden werden.</p>
<div className="w-full h-32 bg-neutral-50 rounded-lg border border-neutral-100 overflow-hidden relative">
<div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-red-400"></div>
<div className="absolute top-3 left-6 w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="absolute top-3 left-9 w-2 h-2 rounded-full bg-green-400"></div>
<div className="mt-8 ml-4 w-3/4 h-2 bg-neutral-200 rounded"></div>
<div className="mt-2 ml-4 w-1/2 h-2 bg-neutral-200 rounded"></div>
<div className="absolute right-4 bottom-4 w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-white border border-neutral-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300">
<div className="flex-1">
<div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-neutral-900 mb-2">Prozessautomatisierung</h3>
<p className="text-neutral-500 font-light">Sparen Sie Zeit im Büro. Von der Anfrage bis zum Angebot digitalisieren wir Ihre Prozesse, damit Sie sich auf das Handwerk konzentrieren können.</p>
</div>
<div className="flex-1 w-full relative">

<div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 space-y-3">
<div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center"><iconify-icon icon="solar:letter-linear"></iconify-icon></div>
<span className="text-sm font-medium text-neutral-700">Auto-Antwort E-Mail</span>
</div>
<div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-neutral-100 opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center"><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
<span className="text-sm font-medium text-neutral-700">Terminerinnerung</span>
</div>
<div className="w-10 h-6 bg-neutral-200 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50">
<img alt="Qualitätsarbeit" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border border-neutral-100 shadow-xl max-w-xs hidden md:block">
<p className="text-sm font-medium text-neutral-900 mb-2">"Seit der Zusammenarbeit sind wir auf 3 Monate im Voraus ausgebucht."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-200"></div>
<span className="text-xs text-neutral-500">Thomas M., Malermeister</span>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 mb-6">
<span className="text-xs font-medium uppercase tracking-wide">Die Strategie</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6">
                            Weniger Kaltakquise,<br/>mehr Qualität.
                        </h2>
<p className="text-lg text-neutral-500 font-light mb-8">
                            Traditionelle Werbung (Zeitung, Radio) funktioniert nicht mehr wie früher. Ihre Kunden suchen online. Wir sorgen dafür, dass Sie genau dort präsent sind, wo die Kaufentscheidung fällt.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-600">Regionale Sichtbarkeit in Ihrer Stadt</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-600">Vorqualifizierung der Anfragen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-600">Messbare Ergebnisse statt Bauchgefühl</span>
</li>
</ul>
<a className="text-neutral-900 font-medium border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors inline-flex items-center gap-1" href="#contact">
                            Mehr erfahren <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12" id="contact">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="bg-neutral-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-neutral-900/20 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-40"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-30"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Bereit für den nächsten Schritt?</h2>
<p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto font-light">
                            Lassen Sie uns gemeinsam prüfen, ob wir Ihnen helfen können. Das Erstgespräch ist zu 100% kostenlos und unverbindlich.
                        </p>
<form className="max-w-md mx-auto space-y-4 text-left bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300 ml-1">Ihr Name</label>
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-light text-sm" placeholder="Max Mustermann" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300 ml-1">Telefonnummer</label>
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-light text-sm" placeholder="+49 123 456789" type="tel"/>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300 ml-1">Interesse an</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="interest" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-lg border border-white/10 bg-white/5 text-neutral-400 peer-checked:bg-white peer-checked:text-neutral-900 transition-all">Neukunden</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="text-xs text-center py-2.5 rounded-lg border border-white/10 bg-white/5 text-neutral-400 peer-checked:bg-white peer-checked:text-neutral-900 transition-all">Mitarbeiter</div>
</label>
</div>
</div>
<button className="w-full mt-4 bg-white text-neutral-900 font-medium py-3.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-white/10 flex items-center justify-center gap-2" type="submit">
                                Kostenlos anfragen
                                <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-neutral-500 mt-2">Ihre Daten werden vertraulich behandelt.</p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="solar:paint-roller-linear" width="18"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-neutral-900">MALERMARKETING</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Impressum</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Datenschutz</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">AGB</a>
</div>
<div className="text-xs text-neutral-400">
                © 2024 MalerMarketing.net
            </div>
</div>
</footer>


    </>
  );
}
