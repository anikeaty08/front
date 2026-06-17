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
sans: ['"Inter"', 'sans-serif'],
display: ['"Plus Jakarta Sans"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
obsidian: '#0A0A0A',
charcoal: '#171717',
subtle: '#737373',
border: '#E5E5E5',
canvas: '#FAFAFA',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Simple Intersection Observer for Fade-in effects
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-4');
                    }
                });
            }, observerOptions);

            // Add animation classes to elements
            document.querySelectorAll('section h2, section h3, .group').forEach(el => {
                el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
                observer.observe(el);
            });
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
      

<div className="fixed inset-0 z-0 hero-grid pointer-events-none h-[100vh]"></div>

<nav className="fixed top-0 w-full z-50 glass-nav px-6 md:px-12 py-4 flex justify-between items-center">
<div className="flex gap-2 group cursor-pointer transition-all duration-700 gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center rounded-sm">
<span className="font-display font-bold text-lg tracking-tighter">W</span>
</div>
<span className="text-obsidian uppercase group-hover:opacity-70 transition-opacity text-sm font-semibold tracking-tight font-display">
                WITHINLAB
            </span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-subtle hover:text-obsidian transition-colors" href="#metodo">Metodo</a>
<a className="text-sm font-medium text-subtle hover:text-obsidian transition-colors" href="#academy">Academy</a>
<a className="text-sm font-medium text-subtle hover:text-obsidian transition-colors" href="#founding">Chi Siamo</a>
</div>
<button className="bg-white border border-border text-obsidian px-5 py-2 rounded-md text-xs font-semibold shadow-sm hover:border-obsidian hover:shadow-md transition-all duration-300 active:scale-95">
            Parla con noi
        </button>
</nav>

<section className="md:px-12 lg:px-24 flex flex-col min-h-[90vh] text-center z-10 pt-32 pr-6 pb-24 pl-6 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full blur-3xl opacity-40 -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[11px] font-mono text-subtle uppercase tracking-wider">No Hype. Pure Execution.</span>
</div>
<h1 className="md:text-7xl lg:text-8xl text-obsidian leading-[1.1] text-5xl font-semibold tracking-tighter font-display max-w-5xl mr-auto mb-8 ml-auto">
            Lavorare con l’AI. <br/>
<span className="text-subtle/80">Dall’interno delle organizzazioni.</span>
</h1>
<p className="font-sans text-lg text-subtle max-w-2xl mx-auto leading-relaxed mb-10">
            WITHINLAB è uno studio-laboratorio che aiuta team e aziende a costruire cultura, metodo e prodotti AI reali. Niente soluzioni preconfezionate.
        </p>
<div className="flex flex-col items-center gap-4">
<button className="group relative bg-obsidian text-white px-8 py-4 rounded-lg text-sm font-semibold shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 duration-700">
<span className="">Parla con noi</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<span className="text-[11px] text-subtle/60 font-medium">
                Una conversazione esplorativa. Nessuna demo. Nessun pitch.
            </span>
</div>

<div className="mt-20 w-full max-w-4xl h-64 border border-border bg-white/40 backdrop-blur-sm rounded-xl relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-px opacity-10">
<div className="bg-black/10"></div> 
</div>
<div className="flex items-center gap-12 opacity-80">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-subtle" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase text-subtle">Team</span>
</div>
<div className="w-24 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent relative">
<div className="absolute top-1/2 left-0 w-1 h-1 bg-obsidian rounded-full -translate-y-1/2 animate-ping"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-xl border border-obsidian/20 bg-white flex items-center justify-center shadow-lg shadow-black/5 relative z-10">
<iconify-icon className="text-obsidian" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase text-obsidian font-semibold">WITHINLAB</span>
</div>
<div className="w-24 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-subtle" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase text-subtle">Product</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-border">
<div className="max-w-6xl mx-auto">
<div className="mb-16 max-w-3xl">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4 transition-all duration-700 opacity-0 translate-y-4">
                    Il problema non è l’intelligenza artificiale. 
                    <span className="text-subtle">È come la stai introducendo.</span>
</h2>
<p className="text-subtle text-lg">
                    L'adozione superficiale crea debito tecnico e culturale.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 border border-border rounded-xl bg-canvas hover:bg-white card-hover transition-all duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 mb-6 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-obsidian mb-2 transition-all duration-700 opacity-0 translate-y-4">Tool senza metodo</h3>
<p className="text-sm text-subtle leading-relaxed">
                        Introdurre strumenti isolati crea confusione nei processi esistenti e resistenza nel team.
                    </p>
</div>

<div className="group p-8 border border-border rounded-xl bg-canvas hover:bg-white card-hover transition-all duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 mb-6 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-obsidian mb-2 transition-all duration-700 opacity-0 translate-y-4">Formazione teorica</h3>
<p className="text-sm text-subtle leading-relaxed">
                        I corsi frontali senza applicazione pratica vengono dimenticati in meno di due settimane.
                    </p>
</div>

<div className="group p-8 border border-border rounded-xl bg-canvas hover:bg-white card-hover transition-all duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 mb-6 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-obsidian mb-2 transition-all duration-700 opacity-0 translate-y-4">Prototipi isolati</h3>
<p className="text-sm text-subtle leading-relaxed">
                        Senza governance, i POC restano esercizi di stile che non scalano mai in produzione.
                    </p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-border flex justify-between items-center flex-wrap gap-4">
<p className="font-medium text-obsidian text-sm">
                    WITHINLAB nasce per riportare direzione, responsabilità e concretezza.
                </p>
<div className="h-px bg-black/10 flex-1 ml-4 hidden md:block"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 bg-canvas relative overflow-hidden" id="metodo">
<div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-black/5 rounded text-[10px] font-mono font-medium mb-6">IL METODO</div>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-8 transition-all duration-700 opacity-0 translate-y-4">
                    Learning e building <br/>
                    non sono separati.
                </h2>
<div className="space-y-8 relative">
<div className="absolute left-[11px] top-2 bottom-2 w-px bg-border"></div>
<div className="flex gap-6 items-start relative">
<div className="w-6 h-6 rounded-full bg-white border border-obsidian z-10 flex items-center justify-center shrink-0 mt-1">
<div className="w-1.5 h-1.5 bg-obsidian rounded-full"></div>
</div>
<div>
<h4 className="font-semibold text-obsidian mb-1">Si impara lavorando</h4>
<p className="text-sm text-subtle">La formazione avviene su casi reali, non su slide.</p>
</div>
</div>
<div className="flex gap-6 items-start relative">
<div className="w-6 h-6 rounded-full bg-white border border-border z-10 flex items-center justify-center shrink-0 mt-1">
<div className="w-1.5 h-1.5 bg-subtle/30 rounded-full"></div>
</div>
<div>
<h4 className="font-semibold text-obsidian mb-1">La formazione genera prototipi</h4>
<p className="text-sm text-subtle">Ogni sessione produce output tangibili.</p>
</div>
</div>
<div className="flex gap-6 items-start relative">
<div className="w-6 h-6 rounded-full bg-white border border-border z-10 flex items-center justify-center shrink-0 mt-1">
<div className="w-1.5 h-1.5 bg-subtle/30 rounded-full"></div>
</div>
<div>
<h4 className="font-semibold text-obsidian mb-1">Gli strumenti diventano metodo</h4>
<p className="text-sm text-subtle">Workflow documentati e policy pronte all'uso.</p>
</div>
</div>
</div>
<div className="mt-12 flex flex-wrap gap-3">
<span className="px-3 py-1.5 bg-white border border-border rounded text-xs text-subtle">Workflow documentati</span>
<span className="px-3 py-1.5 bg-white border border-border rounded text-xs text-subtle">Prototipi funzionanti</span>
<span className="px-3 py-1.5 bg-white border border-border rounded text-xs text-subtle">Policy e linee guida</span>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center">
<svg className="w-full h-full max-w-md animate-spin-slow" fill="none" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#E5E5E5', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#171717', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#E5E5E5', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<circle cx="200" cy="200" r="140" stroke="#F0F0F0" strokeWidth="1"></circle>
<circle className="loop-path" cx="200" cy="200" r="140" stroke="url(#grad1)" strokeLinecap="round" strokeWidth="1.5"></circle>

<g transform="translate(200, 60)">
<circle fill="white" r="20" stroke="#E5E5E5"></circle>
<text fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="0" y="4">LEARN</text>
</g>
<g transform="translate(340, 200)">
<circle fill="white" r="20" stroke="#E5E5E5"></circle>
<text fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="0" y="4">BUILD</text>
</g>
<g transform="translate(200, 340)">
<circle fill="white" r="20" stroke="#E5E5E5"></circle>
<text fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="0" y="4">TEST</text>
</g>
<g transform="translate(60, 200)">
<circle fill="white" r="20" stroke="#E5E5E5"></circle>
<text fontFamily="sans-serif" fontSize="8" font-weight="600" text-anchor="middle" x="0" y="4">SCALE</text>
</g>

<circle cx="200" cy="200" fill="#0A0A0A" r="40"></circle>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="700" text-anchor="middle" x="200" y="204">LAB</text>
</svg>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border bg-white" id="academy">
<div className="max-w-7xl mx-auto">
<h2 className="font-display text-3xl font-semibold mb-12 transition-all duration-700 opacity-0 translate-y-4">L'Ecosistema</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative p-8 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 transition-all duration-300 overflow-hidden duration-700 opacity-0 translate-y-4">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:diploma-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-obsidian" icon="solar:cap-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-semibold mb-3 transition-all duration-700 opacity-0 translate-y-4">Academy</h3>
<p className="text-subtle text-sm max-w-md leading-relaxed mb-6">
                                Formazione avanzata per chi deve decidere e governare l’AI. 
                                Master, percorsi strutturati e laboratori su piattaforme reali.
                            </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs font-medium text-subtle">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
                                    Master e percorsi strutturati
                                </li>
<li className="flex items-center gap-2 text-xs font-medium text-subtle">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
                                    Deliverable utilizzabili
                                </li>
</ul>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-obsidian hover:underline" href="#">
                            Scopri l’Academy <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-4 group relative p-8 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 transition-all duration-300 duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-obsidian" icon="solar:black-hole-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold mb-3 transition-all duration-700 opacity-0 translate-y-4">Workshop</h3>
<p className="text-subtle text-sm leading-relaxed mb-4">
                        Allineamento e costruzione condivisa su problemi reali. Facilitazione strutturata per team.
                    </p>
</div>

<div className="md:col-span-4 group relative p-8 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 transition-all duration-300 duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-obsidian" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold mb-3 transition-all duration-700 opacity-0 translate-y-4">Prototipazione</h3>
<p className="text-subtle text-sm leading-relaxed">
                        AI come materiale di progetto. Workflow operativi, Agenti AI e sistemi utilizzabili subito.
                    </p>
</div>

<div className="md:col-span-4 group relative p-8 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 transition-all duration-300 duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-obsidian" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold mb-3 transition-all duration-700 opacity-0 translate-y-4">Prodotti &amp; Use Case</h3>
<p className="text-subtle text-sm leading-relaxed">
                        Soluzioni create dall’interno. Casi d’uso reali, personalizzati e sostenibili nel tempo.
                    </p>
</div>

<div className="md:col-span-4 group relative p-8 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 transition-all duration-300 duration-700 opacity-0 translate-y-4">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-obsidian" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-display font-semibold mb-3 transition-all duration-700 opacity-0 translate-y-4">Governance</h3>
<p className="text-subtle text-sm leading-relaxed">
                        Responsabilità e fiducia. Creazione di Policy e Linee guida per decisioni consapevoli.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 bg-obsidian text-white border-y border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start md:items-center justify-between">
<div className="max-w-md">
<h2 className="font-display text-3xl font-semibold mb-4 tracking-tight transition-all duration-700 opacity-0 translate-y-4">Esperienza reale.<span className="text-white/50">Non teoria.</span></h2>
<div className="space-y-4">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-bold font-mono text-white">5.000+</span>
<span className="text-sm text-white/60">Professionisti formati</span>
</div>
<p className="text-sm text-white/60 leading-relaxed">
                        Progetti con corporate, PA e università. Supervisione scientifica di Master in AI e certificazioni internazionali.
                    </p>
</div>
</div>

<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-display font-bold text-xl"><iconify-icon icon="solar:buildings-2-bold"></iconify-icon> Corporate</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><iconify-icon icon="solar:city-bold"></iconify-icon> PA</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><iconify-icon icon="solar:book-bold"></iconify-icon> UniTo</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><iconify-icon icon="solar:medal-star-bold"></iconify-icon> Master</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 bg-white" id="founding">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-display text-3xl font-semibold mb-4 transition-all duration-700 opacity-0 translate-y-4">Visione e Costruzione</h2>
<p className="text-subtle">WITHINLAB nasce dall’incontro di due anime complementari.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

<div className="flex flex-col items-center md:items-start gap-6 group transition-all duration-700 opacity-0 translate-y-4">
<div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Claudio Gionti" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-display font-semibold transition-all duration-700 opacity-0 translate-y-4">Claudio Gionti</h3>
<p className="text-xs font-mono uppercase tracking-wider opacity-80">Co-Founder</p>
</div>
</div>
<div className="text-center md:text-left">
<p className="text-obsidian font-medium mb-2">Strategia &amp; Governance</p>
<p className="text-sm text-subtle leading-relaxed">
                            Strategia, governance, etica e cultura manageriale dell’AI. Guida le aziende attraverso la complessità decisionale.
                        </p>
</div>
</div>

<div className="flex flex-col items-center md:items-start gap-6 group transition-all duration-700 opacity-0 translate-y-4">
<div className="w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Paolo Gavazza" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-display font-semibold transition-all duration-700 opacity-0 translate-y-4">Paolo Gavazza</h3>
<p className="text-xs font-mono uppercase tracking-wider opacity-80">Co-Founder</p>
</div>
</div>
<div className="text-center md:text-left">
<p className="text-obsidian font-medium mb-2">Design &amp; Execution</p>
<p className="text-sm text-subtle leading-relaxed">
                            Design, prototipazione, agenti AI ed execution end-to-end. Trasforma i concetti in strumenti funzionanti.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-canvas border-t border-border relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-obsidian/20 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-display text-4xl md:text-6xl font-semibold text-obsidian tracking-tighter mb-8 leading-tight transition-all duration-700 opacity-0 translate-y-4">
                Se stai valutando l’AI, 
                questo è il momento giusto per fermarti.
            </h2>
<div className="flex flex-col items-center gap-6 mt-12">
<button className="bg-obsidian text-white px-10 py-4 rounded-lg text-base font-semibold shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Parla con noi
                </button>
<div className="flex items-center gap-2 text-xs text-subtle">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                    Nessuna soluzione preconfezionata. Costruiamo insieme il percorso.
                </div>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-12 border-t border-border bg-white text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-obsidian text-white flex items-center justify-center rounded-sm text-xs font-bold">W</div>
<span className="font-bold tracking-tight text-obsidian">WITHINLAB</span>
</div>
<div className="flex gap-8 text-subtle">
<a className="hover:text-obsidian transition-colors" href="#">LinkedIn</a>
<a className="hover:text-obsidian transition-colors" href="#">Privacy</a>
<a className="hover:text-obsidian transition-colors" href="#">Contatti</a>
</div>
<div className="text-subtle/60 text-xs">
                © 2024 WithinLab. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
