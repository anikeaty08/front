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
      

<div className="fixed top-0 inset-x-0 z-50 bg-amber-100 border-b border-amber-200 py-2 px-4 text-center">
<p className="text-xs font-medium text-amber-900 flex items-center justify-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
            ATTENZIONE: Solo 23 kit disponibili — Le scorte si esauriscono oggi
        </p>
</div>

<header className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center space-y-2 mt-4">
<div className="text-sm font-medium tracking-wider text-zinc-500 uppercase flex items-center gap-2">
<span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-[10px] border border-red-100">🇨🇭 SWISS MADE</span>
<span>Qualità Svizzera Certificata | Purezza &gt;99% | Spedizione Gratis</span>
</div>
</header>

<section className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Riaccendi il tuo metabolismo nelle prossime <span className="text-emerald-600">6-8 settimane</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            La stessa biotecnologia usata da Oprah, Kim Kardashian, Elon Musk e tutta l'élite di Hollywood — ora disponibile in Italia.
        </p>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm text-left mx-auto max-w-3xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
<p className="mb-4 text-zinc-800">Hai appena completato il <strong>Test di Resistenza Metabolica</strong>. Hai visto il tuo punteggio. Sai che il tuo metabolismo è bloccato.</p>
<p className="mb-6 font-medium text-zinc-900">Ora hai due opzioni:</p>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-zinc-50 p-5 rounded-xl border border-zinc-100">
<div className="flex items-center gap-2 mb-2 text-zinc-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="font-semibold text-sm uppercase tracking-wide">Opzione 1</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">Chiudi questa pagina e continui a lottare contro il tuo corpo. Altre diete. Altri fallimenti. Altri anni persi.</p>
</div>
<div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
<div className="flex items-center gap-2 mb-2 text-emerald-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold text-sm uppercase tracking-wide">Opzione 2</span>
</div>
<p className="text-sm text-zinc-700 leading-relaxed">Scopri come migliaia di donne stanno finalmente vincendo questa battaglia — senza fame, senza palestra, senza forza di volontà.</p>
</div>
</div>
<p className="mt-6 text-sm text-zinc-400 italic">Continua a leggere. Quello che stai per scoprire potrebbe cambiare tutto.</p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 py-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Se sei qui, lo sai già.</h2>
<div className="space-y-4 text-zinc-600 leading-relaxed">
<p>Sai cosa significa svegliarti ogni mattina e lottare contro il tuo corpo.</p>
<p>Sai cosa significa provare diete, palestre, integratori — e vedere zero risultati.</p>
<p>Sai cosa significa quella voce nella testa che chiede "cosa mangio?" anche quando hai appena finito di mangiare.</p>
<p>Sai cosa significa guardarti allo specchio e non riconoscerti più.</p>
<p>Sai cosa significa rinunciare — a uscite, foto, spiaggia, vestiti che ami — per colpa del tuo peso.</p>
<p className="border-l-2 border-red-200 pl-4 py-1 italic text-zinc-800">E sai cosa significa sentirti dire: "Devi impegnarti di più" — quando sai che ti stai già impegnando al massimo.</p>
<p className="font-medium text-zinc-900 pt-4">Non sei qui per caso. Sei qui perché una parte di te sa che non puoi continuare così.</p>
</div>
</section>

<section className="bg-white border-y border-zinc-200 py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 mb-2 block">Costo Opportunità</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Fermati un secondo. Facciamo due conti.</h2>
<p className="mt-4 text-zinc-500">Cosa farai nei prossimi 12 mesi se decidi di "aspettare"?</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-4">
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
<h3 className="font-medium text-red-700 flex items-center gap-2 text-sm mb-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            OPZIONE A: Il nutrizionista
                        </h3>
<p className="text-xs text-zinc-400 mb-2">Costo: €960-1.800/anno</p>
<p className="text-sm text-zinc-600">Risultato? La stessa dieta ipocalorica. Perdi 3-4 kg, poi li riprendi tutti. Metabolismo rallentato.</p>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
<h3 className="font-medium text-red-700 flex items-center gap-2 text-sm mb-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            OPZIONE B: Il personal trainer
                        </h3>
<p className="text-xs text-zinc-400 mb-2">Costo: €4.320-7.200/anno</p>
<p className="text-sm text-zinc-600">Sudi. Soffri. La bilancia non si muove perché il metabolismo è BLOCCATO. Partita persa.</p>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
<h3 className="font-medium text-red-700 flex items-center gap-2 text-sm mb-2">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            OPZIONE C: L'ennesimo integratore
                        </h3>
<p className="text-xs text-zinc-400 mb-2">Costo: €360-960/anno</p>
<p className="text-sm text-zinc-600">Caffè verde, Spirulina... Non funzionano perché non toccano il vero problema.</p>
</div>
</div>

<div className="bg-emerald-900 text-white p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-emerald-500 blur-[100px] opacity-20 rounded-full"></div>
<h3 className="font-semibold text-emerald-300 flex items-center gap-2 text-lg mb-4">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                        OPZIONE D: Forever Slim
                    </h3>
<div className="text-3xl font-semibold mb-1">€133<span className="text-sm font-normal text-emerald-200">/mese</span></div>
<p className="text-emerald-200 text-xs mb-6">Per 3 mesi = €399 totali</p>
<p className="text-sm leading-relaxed text-zinc-100 mb-6">
                        Agisci DIRETTAMENTE sul metabolismo bloccato. Il buco viene tappato. L'acqua smette di entrare. La barca torna a galleggiare.
                        <br/><br/>
                        €399 per risolvere il problema alla radice. O butti via €5.000+ per continuare a girare in tondo.
                    </p>
<div className="mt-auto pt-6 border-t border-emerald-800">
<p className="text-sm font-medium">La matematica è semplice.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">La verità che il tuo medico NON ti dirà mai</h2>
<p className="text-zinc-600 mb-10 text-lg">Ozempic. Wegovy. Mounjaro. Sono ovunque. Ma sono tecnologie VECCHIE.</p>
<div className="space-y-8">

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-zinc-200 opacity-60 hover:opacity-100 transition-opacity">
<div className="md:w-1/4">
<span className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">1a Generazione</span>
<h3 className="font-semibold text-zinc-900 mt-1">Ozempic, Wegovy</h3>
<p className="text-xs text-zinc-500 mt-1">2017-2021</p>
</div>
<div className="md:w-3/4">
<p className="text-sm mb-3"><span className="font-medium">Semaglutide:</span> Riduce l'appetito agendo su UN SOLO recettore.</p>
<ul className="text-sm space-y-1 text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Rallenta il metabolismo</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Perdi muscolo ("Ozempic Face")</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-zinc-200 opacity-80 hover:opacity-100 transition-opacity">
<div className="md:w-1/4">
<span className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">2a Generazione</span>
<h3 className="font-semibold text-zinc-900 mt-1">Mounjaro</h3>
<p className="text-xs text-zinc-500 mt-1">2022-2023</p>
</div>
<div className="md:w-3/4">
<p className="text-sm mb-3"><span className="font-medium">Tirzepatide:</span> Agisce su DUE recettori.</p>
<ul className="text-sm space-y-1 text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Risultati migliori</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Ancora rallenta il metabolismo</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Richiede ricetta, liste d'attesa</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border-2 border-emerald-500 bg-emerald-50/20 shadow-lg shadow-emerald-100/50">
<div className="md:w-1/4">
<span className="text-xs font-semibold uppercase text-emerald-600 tracking-wider bg-emerald-100 px-2 py-0.5 rounded-md">Il Futuro</span>
<h3 className="font-semibold text-zinc-900 mt-2">Forever Slim</h3>
<p className="text-xs text-zinc-500 mt-1">2023+ (3a Gen)</p>
</div>
<div className="md:w-3/4">
<p className="text-sm mb-3"><span className="font-medium text-emerald-900">Retatrutide (Triplo Agonista):</span> GLP-1 + GIP + Glucagone.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-700">
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Spegne la fame</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Sblocca il grasso</div>
<div className="flex items-center gap-2 col-span-full font-medium text-emerald-800 bg-emerald-100/50 p-1 rounded"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"></path></svg> ACCELERA il metabolismo</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Preserva i muscoli</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Disponibile ORA</div>
</div>
</div>
</div>
</div>

<div className="mt-16 overflow-x-auto scrollbar-hide">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr>
<th className="py-4 px-4 text-xs font-semibold uppercase text-zinc-400 border-b border-zinc-200 w-1/4">Confronto</th>
<th className="py-4 px-4 text-xs font-semibold uppercase text-zinc-400 border-b border-zinc-200 w-1/4">Ozempic</th>
<th className="py-4 px-4 text-xs font-semibold uppercase text-zinc-400 border-b border-zinc-200 w-1/4">Mounjaro</th>
<th className="py-4 px-4 text-xs font-semibold uppercase text-emerald-600 border-b border-emerald-500 bg-emerald-50/30 w-1/4">Forever Slim</th>
</tr>
</thead>
<tbody className="text-sm">
<tr>
<td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">Recettori</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">1</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">2</td>
<td className="py-4 px-4 font-semibold text-emerald-800 bg-emerald-50/30 border-b border-emerald-100">3</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">Perdita Peso</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">15-17%</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">21%</td>
<td className="py-4 px-4 font-semibold text-emerald-800 bg-emerald-50/30 border-b border-emerald-100">24%</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">Metabolismo</td>
<td className="py-4 px-4 text-red-500 border-b border-zinc-100">RALLENTA</td>
<td className="py-4 px-4 text-red-500 border-b border-zinc-100">RALLENTA</td>
<td className="py-4 px-4 font-semibold text-emerald-600 bg-emerald-50/30 border-b border-emerald-100">ACCELERA</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">Disponibilità</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">Attesa</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">Difficile</td>
<td className="py-4 px-4 font-semibold text-emerald-800 bg-emerald-50/30 border-b border-emerald-100">Immediata</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-zinc-700 border-b border-zinc-100">Costo</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">€300+</td>
<td className="py-4 px-4 text-zinc-500 border-b border-zinc-100">€300+</td>
<td className="py-4 px-4 font-semibold text-emerald-800 bg-emerald-50/30 border-b border-emerald-100">€133</td>
</tr>
</tbody>
</table>
</div>
<p className="text-center mt-8 text-zinc-500 text-sm">Forever Slim è come scegliere un iPhone 17 mentre il mondo usa ancora il 10.</p>
</section>

<section className="bg-zinc-900 text-zinc-100 py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-2 block">Meccanismo d'azione</span>
<h2 className="text-3xl font-semibold tracking-tight">I 3 interruttori del metabolismo</h2>
<p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Retatrutide accende TUTTI E TRE gli interruttori contemporaneamente.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 text-emerald-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<h3 className="font-semibold text-lg">1. IL SILENZIATORE (GLP-1)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Il "Food Noise" si spegne. Non lotti contro la fame. Mangi meno naturalmente, senza sforzo.
                    </p>
<p className="text-xs text-zinc-500 italic">"Finalmente silenzio." — Elena R.</p>
</div>

<div className="space-y-4">
<div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 text-emerald-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-3.646-3.528-4.508C5 3.5 3 2.5 3 2.5c0 3.333.333 7 1 11 0 0 1.5 1 4.5 1Z"></path><path d="M15.5 14.5A2.5 2.5 0 0 1 13 12c0-1.38.5-2 1-3 1.072-2.143 2.246-3.646 3.528-4.508C19 3.5 21 2.5 21 2.5c0 3.333-.333 7-1 11 0 0-1.5 1-4.5 1Z"></path><path d="M12 22v-3"></path></svg>
</div>
<h3 className="font-semibold text-lg">2. IL BRUCIA-RISERVE (GIP)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Il corpo smette di proteggere il grasso e lo rilascia. Quel grasso "incollato" se ne va.
                    </p>
<p className="text-xs text-zinc-500 italic">"Grasso di 8 anni, sparito." — Francesca M.</p>
</div>

<div className="space-y-4">
<div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center border border-emerald-700 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"></path></svg>
</div>
<h3 className="font-semibold text-lg text-emerald-300">3. L'ACCELERATORE (Glucagone)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        IL GAME-CHANGER. Riaccende il metabolismo basale. Bruci di più anche guardando Netflix.
                    </p>
<p className="text-xs text-zinc-500 italic">"Mangiavo e perdevo peso." — Laura B.</p>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20">
<h2 className="text-2xl font-semibold text-zinc-900 mb-10 text-center">Cosa aspettarti — Settimana per Settimana</h2>
<div className="space-y-0 relative border-l border-zinc-200 ml-3 md:ml-6">

<div className="relative pl-8 md:pl-12 pb-12">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-1">Settimana 1</h4>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Il Silenzio</h3>
<p className="text-zinc-600 text-sm mb-2">Il "Food Noise" crolla. La fame nervosa sparisce. Possibile leggera nausea (segno che funziona).</p>
<div className="bg-zinc-50 p-3 rounded-lg text-xs text-zinc-500 italic border border-zinc-100 inline-block">"Strano, non ho fame. Ma davvero non ho fame."</div>
</div>

<div className="relative pl-8 md:pl-12 pb-12">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">Settimana 2-3</h4>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Lo Sblocco</h3>
<p className="text-zinc-600 text-sm mb-2">La bilancia si muove (-2/4kg). Ti senti meno gonfia, più leggera.</p>
<div className="bg-zinc-50 p-3 rounded-lg text-xs text-zinc-500 italic border border-zinc-100 inline-block">"I pantaloni sono meno stretti. Non è suggestione."</div>
</div>

<div className="relative pl-8 md:pl-12 pb-12">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">Settimana 4-6</h4>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">La Trasformazione</h3>
<p className="text-zinc-600 text-sm mb-2">I vestiti calzano diversamente. La pancia si sgonfia. Energia stabile.</p>
<div className="bg-zinc-50 p-3 rounded-lg text-xs text-zinc-500 italic border border-zinc-100 inline-block">"La gente inizia a notare. Mi chiedono cosa sto facendo."</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-300 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">Settimana 8-12</h4>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Il Nuovo Standard</h3>
<p className="text-zinc-600 text-sm mb-2">Il metabolismo è ricalibrato. Ti guardi allo specchio e ti riconosci.</p>
<div className="bg-zinc-50 p-3 rounded-lg text-xs text-zinc-500 italic border border-zinc-100 inline-block">"Non torno più indietro. Mai più."</div>
</div>
</div>
<div className="mt-12 bg-amber-50 border border-amber-100 rounded-xl p-5">
<h4 className="font-semibold text-amber-800 text-sm mb-2">Effetti Inaspettati</h4>
<ul className="text-sm text-amber-900/80 space-y-2">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m12 12 4 10 1.7-4.3L22 16Z"></path></svg>
<span><strong>Addio vizi:</strong> Riduce l'interesse per alcol e fumo.</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span><strong>Pulizia interna:</strong> Colesterolo, trigliceridi e pressione migliorano.</span>
</li>
</ul>
</div>
</section>

<section className="bg-white border-y border-zinc-200 py-20">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8 text-center">Non tutti i Retatrutide sono uguali</h2>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-zinc-600 mb-6">Il mercato è un Far West. Prodotti cinesi, sotto-dosati, pieni di metalli pesanti. Forever Slim è diverso:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="bg-red-50 p-1.5 rounded text-red-600 mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11Z"></path><circle cx="12" cy="10" r="3"></circle><line x1="22" x2="16" y1="9" y2="9"></line><path d="M16 6h2a2 2 0 0 1 2 2v6"></path><line x1="16" x2="22" y1="12" y2="12"></line></svg></div>
<div>
<h4 className="font-semibold text-zinc-900">Qualità Svizzera</h4>
<p className="text-sm text-zinc-500">Livello farmaceutico. Non sottoscala asiatico.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="bg-emerald-50 p-1.5 rounded text-emerald-600 mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M12 6A9 9 0 1 1 5.93 16.28"></path></svg></div>
<div>
<h4 className="font-semibold text-zinc-900">Purezza &gt;99%</h4>
<p className="text-sm text-zinc-500">Ogni lotto testato con Certificato di Analisi (COA).</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="bg-emerald-50 p-1.5 rounded text-emerald-600 mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
<div>
<h4 className="font-semibold text-zinc-900">Zero Contaminanti</h4>
<p className="text-sm text-zinc-500">Libero da metalli pesanti, endotossine e solventi.</p>
</div>
</li>
</ul>
</div>
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<h3 className="text-sm font-semibold uppercase text-zinc-400 mb-4 tracking-wider">Confronto Sicurezza</h3>
<div className="space-y-3">
<div className="flex justify-between items-center py-2 border-b border-zinc-200">
<span className="text-sm text-zinc-600">Provenienza</span>
<div className="text-right">
<span className="block text-xs text-red-500 line-through">Cina?</span>
<span className="block text-sm font-medium text-zinc-900">🇨🇭 Svizzera</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-200">
<span className="text-sm text-zinc-600">Test Purezza</span>
<div className="text-right">
<span className="block text-xs text-red-500 line-through">Nessuno</span>
<span className="block text-sm font-medium text-zinc-900">✅ &gt;99% COA</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-200">
<span className="text-sm text-zinc-600">Garanzia</span>
<div className="text-right">
<span className="block text-xs text-red-500 line-through">Zero</span>
<span className="block text-sm font-medium text-zinc-900">30 Giorni</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-16">
<h2 className="text-2xl font-semibold text-center mb-10">Cosa riceverai a casa</h2>
<div className="flex flex-col md:flex-row gap-8 items-center justify-center">
<div className="bg-zinc-100 w-full md:w-1/2 aspect-square rounded-2xl flex items-center justify-center border border-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<svg className="w-32 h-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="z-10 text-center">
<div className="bg-white px-6 py-3 rounded shadow-sm border border-zinc-200 inline-block mb-2 font-mono text-sm">Forever Slim Kit</div>
<p className="text-xs text-zinc-400">Packaging discreto e anonimo</p>
</div>
</div>
<div className="w-full md:w-1/2 space-y-4">
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-600 mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-medium text-zinc-900 block">Forever Slim (10mg)</span>
<span className="text-sm text-zinc-500">Pura liofilizzata sterile sottovuoto.</span>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-600 mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-medium text-zinc-900 block">Acqua Batteriostatica (3ml)</span>
<span className="text-sm text-zinc-500">Per la ricostituzione sicura.</span>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-600 mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-medium text-zinc-900 block">Guida al Protocollo PDF</span>
<span className="text-sm text-zinc-500">Istruzioni passo-passo a prova di errore.</span>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-600 mt-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="font-medium text-zinc-900 block">Spedizione &amp; Supporto</span>
<span className="text-sm text-zinc-500">Consegna in 3-5gg, tracciata. Assistenza WhatsApp.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-y border-zinc-200 py-20">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2 text-center">3.591 donne italiane hanno già scelto Forever Slim</h2>
<div className="text-center mb-12 flex justify-center gap-1">
<svg className="w-5 h-5 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col">
<p className="text-sm font-medium text-zinc-900 mb-3">"14 kg in 10 settimane. Ma la cosa più bella? Il SILENZIO nella testa."</p>
<p className="text-sm text-zinc-600 italic mb-4 flex-grow">"La prima settimana non è successo niente. Poi, dal giorno 8... silenzio. Quella voce che mi chiedeva sempre del cibo non c'era più. La pace mentale vale più di tutto."</p>
<div className="mt-auto pt-4 border-t border-zinc-100 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-900">Patrizia L., 53 anni</span>
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">-14 kg</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col">
<p className="text-sm font-medium text-zinc-900 mb-3">"Il mio medico mi ha chiesto cosa avessi fatto."</p>
<p className="text-sm text-zinc-600 italic mb-4 flex-grow">"Colesterolo da 245 a 189. Peso -12 kg. Il mio medico era scettico, poi ha visto gli esami e non ha potuto dire niente. A 49 anni mi sento meglio di quando ne avevo 35."</p>
<div className="mt-auto pt-4 border-t border-zinc-100 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-900">Laura B., 49 anni</span>
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">-12 kg</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col">
<p className="text-sm font-medium text-zinc-900 mb-3">"Mio marito mi ha chiesto se avevo un amante."</p>
<p className="text-sm text-zinc-600 italic mb-4 flex-grow">"Mi ha chiesto se avevo un amante. Gli ho detto: sì, si chiama Forever Slim. Sono tornata a guardarmi allo specchio. A sentirmi desiderabile."</p>
<div className="mt-auto pt-4 border-t border-zinc-100 flex justify-between items-center">
<span className="text-xs font-semibold text-zinc-900">Monica P., 45 anni</span>
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded">-9 kg</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20" id="pricing">
<h2 className="text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12">Scegli il tuo Protocollo</h2>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-300 transition-colors">
<h3 className="text-lg font-semibold text-zinc-900">Prova</h3>
<p className="text-sm text-zinc-500 mb-6">1 Kit Forever Slim (4-6 settimane)</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-2xl font-bold text-zinc-900">€197</span>
<span className="text-sm text-zinc-400 line-through">€250</span>
</div>
<p className="text-xs text-emerald-600 font-medium mb-6">Risparmio: €53 (21%)</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-600">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> 1x Forever Slim 10mg</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Acqua &amp; Guida PDF</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Spedizione GRATUITA</li>
</ul>
<button className="w-full py-3 px-4 bg-white border border-zinc-200 text-zinc-900 font-medium rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">SCEGLI PROVA →</button>
</div>

<div className="bg-white border border-emerald-500 rounded-2xl p-6 md:p-8 shadow-xl shadow-emerald-100/50 relative ring-1 ring-emerald-500 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Più Scelto</div>
<h3 className="text-lg font-semibold text-zinc-900">Trasformazione</h3>
<p className="text-sm text-zinc-500 mb-6">3 Kit Forever Slim (12-18 settimane)</p>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-4xl font-bold text-zinc-900">€399</span>
<span className="text-base text-zinc-400 line-through">€750</span>
</div>
<p className="text-sm text-zinc-500 mb-2">Solo €133/mese</p>
<p className="text-xs text-emerald-600 font-medium mb-6 bg-emerald-50 inline-block px-2 py-1 rounded">Risparmio: €351 (47%)</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-700">
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> <strong>3x</strong> Forever Slim 10mg</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Acqua &amp; Guida PDF</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Spedizione GRATUITA</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Supporto Prioritario</li>
<li className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg> Accesso Gruppo VIP</li>
</ul>
<button className="w-full py-3 px-4 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-lg">SCEGLI TRASFORMAZIONE →</button>
<p className="text-xs text-center text-zinc-400 mt-3">Reset metabolico completo.</p>
</div>
</div>
<div className="mt-16 bg-zinc-100 rounded-xl p-6 text-sm text-zinc-600">
<h4 className="font-semibold text-zinc-900 mb-2">Cos'è "Uso di Ricerca"?</h4>
<p className="mb-2">Retatrutide è attualmente in fase di trial clinico avanzato. Distribuiamo il composto puro classificato come "Research Compound" (Uso di Ricerca), 100% legale in Italia. Questo ti permette di accedere alla tecnologia anni prima che arrivi in farmacia a prezzi triplicati.</p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 text-center">
<div className="inline-block p-4 bg-emerald-50 rounded-full mb-6 text-emerald-600">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h2 className="text-3xl font-semibold text-zinc-900 mb-6">Garanzia "Metabolismo Riacceso" — 30 Giorni</h2>
<p className="text-zinc-600 text-lg mb-8 leading-relaxed">
            Se entro 30 giorni non senti il Food Noise diminuire, se non vedi la bilancia muoversi... Ti rimborsiamo TUTTO.
            Restituisci il prodotto — anche se aperto — e ti rimborsiamo l'intero importo entro 5 giorni.
            Il rischio è TUTTO su di noi.
        </p>
</section>

<section className="max-w-2xl mx-auto px-6 py-20 border-t border-zinc-200">
<h2 className="text-2xl font-semibold text-zinc-900 mb-8">Le domande che non osi fare</h2>
<div className="space-y-6">
<div>
<h4 className="font-medium text-zinc-900">E se è una truffa?</h4>
<p className="text-sm text-zinc-600 mt-1">Offriamo garanzia 30 giorni, supporto WhatsApp reale e pagamenti tracciati. Se fossimo truffatori, non offriremmo tutto questo.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900">Mi vergogno a usare "scorciatoie"</h4>
<p className="text-sm text-zinc-600 mt-1">Non è una scorciatoia, è uno strumento. Come gli occhiali per la vista. Il tuo metabolismo ha bisogno di aiuto, non c'è vergogna.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900">Chi NON dovrebbe usarlo?</h4>
<p className="text-sm text-zinc-600 mt-1">Non usare se hai insufficienza renale/epatica grave, pancreatite, Diabete Tipo 1, o sei in gravidanza/allattamento.</p>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-300 py-20 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-6">Due versioni di te</h2>
<div className="grid md:grid-cols-2 gap-8 text-left mt-10">
<div className="border-l border-zinc-700 pl-6">
<h3 className="text-zinc-500 font-semibold mb-2">VERSIONE A: Non fai niente</h3>
<p className="text-sm leading-relaxed">Tra un anno, sei allo stesso punto. Stessa bilancia. Stessa frustrazione. Altri soldi persi in diete fallite. Ti chiederai: "Perché non ho provato?"</p>
</div>
<div className="border-l border-emerald-500 pl-6">
<h3 className="text-emerald-400 font-semibold mb-2">VERSIONE B: Agisci oggi</h3>
<p className="text-sm leading-relaxed text-white">Tra 8 settimane ti guardi allo specchio e ti riconosci. Tra un anno, qualcuno ti chiede "Come hai fatto?". Hai smesso di lottare.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6">È il momento di decidere</h2>
<p className="text-zinc-600 mb-8">Ci sono solo 23 kit disponibili. Garanzia 30 giorni inclusa.</p>
<button className="w-full md:w-auto py-4 px-12 bg-zinc-900 text-white text-lg font-medium rounded-xl hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            ORDINA FOREVER SLIM ORA →
        </button>
<p className="mt-4 text-xs text-zinc-400">P.P.P.S. Tra 12 mesi sarai comunque un anno più vecchia. Sarai anche la stessa persona infelice o quella che si riconosce?</p>
</section>
<footer className="text-center py-10 px-6 text-xs text-zinc-400 border-t border-zinc-200 mt-10 mb-20">
<p>Questo sito non fa parte di Facebook o Facebook Inc. Inoltre, questo sito NON è approvato da Facebook in alcun modo.</p>
<p className="mt-2">© 2024 Forever Slim. Tutti i diritti riservati.</p>
</footer>

<div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-zinc-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:hidden">
<div className="flex items-center justify-between gap-4">
<div>
<p className="font-semibold text-zinc-900">Forever Slim</p>
<p className="text-xs text-zinc-500">Garanzia 30gg</p>
</div>
<button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap">ORDINA ORA →</button>
</div>
</div>

<div className="hidden md:flex fixed bottom-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-t border-zinc-200 py-3 px-6 justify-center items-center gap-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<span className="font-semibold text-zinc-900">Forever Slim</span>
<span className="text-zinc-400 text-sm">|</span>
<span className="text-zinc-600 text-sm"><s>€250</s> <span className="text-emerald-600 font-semibold">€197/kit</span></span>
<span className="text-zinc-400 text-sm">|</span>
<span className="text-zinc-600 text-sm text-xs flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Garanzia 30gg</span>
<button className="bg-zinc-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors ml-4">ORDINA ORA →</button>
</div>

    </>
  );
}
