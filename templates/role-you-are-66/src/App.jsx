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
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="font-bold tracking-tight text-lg group-hover:opacity-80 transition-opacity">COMPUTER LAND</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#servizi">Servizi</a>
<a className="hover:text-slate-900 transition-colors" href="#perche-noi">Perché Noi</a>
<a className="hover:text-slate-900 transition-colors" href="#contatti">Contatti</a>
<a className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors flex items-center gap-2" href="tel:+390331281343">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="14"></span>
                    0331 281343
                </a>
</div>

<button className="md:hidden text-slate-600">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-[100%] blur-3xl opacity-60"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAzLDIxMywyMjgsMC40KSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="flex items-center text-yellow-500">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</span>
<span className="text-slate-500">4.1 su 5 da clienti locali</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                La tecnologia su cui <br className="hidden md:block"/>puoi contare.
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Vendita e assistenza informatica a Cassano Magnago. Consulenza onesta, riparazioni rapide e soluzioni su misura per famiglie e piccole imprese.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2" href="#contatti">
                    Richiedi Assistenza
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#servizi">
                    I Nostri Servizi
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-200" id="servizi">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Soluzioni complete per il tuo computer</h2>
<p className="text-slate-500">Competenza tecnica con un tocco umano.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Vendita Hardware</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Non vendiamo semplici scatole, ma strumenti adatti alle tue esigenze. Offriamo una selezione curata di Desktop PC, Notebook, Stampanti e Monitor. Ti guidiamo nell'acquisto per assicurarti il miglior rapporto qualità-prezzo, evitando spese inutili per funzionalità che non userai.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:wrench" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Assistenza Tecnica</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Il computer è lento o ha preso un virus? Prima di fartene comprare uno nuovo, verifichiamo se può essere riparato o potenziato. Eseguiamo rimozione virus, recupero dati e ottimizzazioni software. La nostra filosofia è riparare quando possibile, per risparmiare e ridurre gli sprechi.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Consulenza e Assemblaggio</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Realizziamo PC assemblati su misura per casa o ufficio, progettati specificamente per il tuo flusso di lavoro. Che tu sia un professionista che necessita di affidabilità o una famiglia che cerca un computer per lo studio, ti offriamo una consulenza chiara e senza gergo tecnico incomprensibile.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="perche-noi">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Perché i clienti di Cassano Magnago si fidano di noi</h2>
<p className="text-slate-500 mb-8">
                        In un mondo di call center e assistenza anonima, noi ci mettiamo la faccia. Ecco cosa dicono le recensioni su di noi.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-blue-600" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Onestà Prima di Tutto</h4>
<p className="text-sm text-slate-500 mt-1">
                                    Consigliamo la riparazione solo se ne vale la pena. Se costa meno comprare nuovo, te lo diciamo subito. Nessuna sorpresa sul prezzo.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-blue-600" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Competenza e Velocità</h4>
<p className="text-sm text-slate-500 mt-1">
                                    Risolviamo piccoli e grandi problemi in tempi rapidi. Sappiamo quanto è importante riavere il tuo dispositivo funzionante al più presto.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-blue-600" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Disponibilità e Cortesia</h4>
<p className="text-sm text-slate-500 mt-1">
                                    Siamo sempre disponibili a spiegare il problema in modo semplice. Il nostro negozio è al piano strada, accessibile a tutti.
                                </p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-50"></div>
<div className="text-center p-8">
<span className="iconify text-slate-300 mx-auto mb-4" data-icon="lucide:thumbs-up" data-strokeWidth="1" data-width="64"></span>
<p className="text-slate-400 font-medium">Il tuo tecnico di fiducia</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16" id="contatti">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-6">
<div>
<h3 className="text-white text-xl font-bold tracking-tight mb-2">COMPUTER LAND snc</h3>
<p className="text-sm text-slate-400">Il punto di riferimento per l'informatica a Cassano Magnago.</p>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<span className="iconify mt-1 text-blue-400" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="18"></span>
<div>
<p className="text-white font-medium">Vieni a trovarci</p>
<p className="text-sm text-slate-400">Via IV Novembre, 66<br/>21012 Cassano Magnago (VA)</p>
<span className="inline-block mt-2 text-xs bg-slate-800 text-blue-300 px-2 py-1 rounded border border-slate-700">Piano strada (Accessibile)</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-blue-400" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="18"></span>
<div>
<p className="text-white font-medium">Chiama ora</p>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="tel:+390331281343">+39 0331 281343</a>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="lg:col-span-6">
<h3 className="text-white font-medium mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="18"></span>
                        Orari di Apertura
                    </h3>
<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
<ul className="space-y-3 text-sm">
<li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
<span className="font-medium text-slate-200">Lunedì</span>
<span className="text-right">
<span className="block text-slate-500 text-xs">Mattina Chiuso</span>
<span>15:00 – 19:30</span>
</span>
</li>
<li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
<span className="font-medium text-slate-200">Martedì - Venerdì</span>
<span className="text-right">
<span className="block">09:00 – 12:30</span>
<span className="block">15:00 – 19:30</span>
</span>
</li>
<li className="flex justify-between items-center border-b border-slate-700/50 pb-2">
<span className="font-medium text-slate-200">Sabato</span>
<span className="text-right">
<span>09:00 – 12:30</span>
<span className="block text-slate-500 text-xs">Pomeriggio Chiuso</span>
</span>
</li>
<li className="flex justify-between items-center pt-1">
<span className="font-medium text-slate-400">Domenica</span>
<span className="text-slate-400">Chiuso</span>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                © 2023 Computer Land snc. Tutti i diritti riservati. P.IVA disponibile in negozio.
            </div>
</div>
</footer>

    </>
  );
}
