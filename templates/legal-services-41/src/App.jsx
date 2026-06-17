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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="scale"></i>
                LEXVIA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#servizi">Servizi</a>
<a className="hover:text-slate-900 transition-colors" href="#come-funziona">Metodo</a>
<a className="hover:text-slate-900 transition-colors" href="#chi-siamo">Lo Studio</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity" href="tel:+39021234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                    02 123 4567
                </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md" href="#contatti">
                    Consulenza Gratuita
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-slate-200/40 rounded-[100%] blur-3xl -z-10 opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponibili 24/7 per emergenze
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                Il giusto risarcimento <br className="hidden md:block"/> per il tuo sinistro.
            </h1>
<p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
                Specialisti in diritto assicurativo e infortunistica stradale. 
                Non paghi nulla finché non otteniamo il risarcimento. Zero anticipi, zero rischi.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2 group" href="#contatti">
                    Analisi Gratuita
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#come-funziona">
                    Come Funziona
                </a>
</div>

<div className="pt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-200/60 mt-16">
<div className="text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">98%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Casi Vinti</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">15M+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Euro Recuperati</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">0€</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Spese Anticipate</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servizi">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Competenza specifica.</h2>
<p className="text-slate-500 font-normal leading-relaxed">
                        Non siamo generalisti. Ci dedichiamo esclusivamente al risarcimento danni da incidenti stradali per garantire il massimo risultato possibile.
                    </p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors flex items-center gap-1" href="#">
                    Vedi tutti i servizi <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-slate-900" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Danni Fisici Gravi</h3>
<p className="text-sm text-slate-500 leading-relaxed">Assistenza completa per macrolesioni, invalidità permanente e temporanea. Collaboriamo con i migliori medici legali.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-slate-900" data-lucide="car-front"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Danni al Veicolo</h3>
<p className="text-sm text-slate-500 leading-relaxed">Rimborso totale delle spese di riparazione, fermo tecnico e svalutazione commerciale del mezzo.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-slate-900" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Sinistri Mortali</h3>
<p className="text-sm text-slate-500 leading-relaxed">Supporto umano e legale ai familiari per l'ottenimento del risarcimento per danno parentale e morale.</p>
</div>

<div className="md:col-span-2 group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-slate-900" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Tutela Pedoni e Ciclisti</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Gli utenti deboli della strada necessitano di una tutela rafforzata. Gestiamo pratiche complesse di investimento con la massima attenzione ai dettagli della dinamica.
                        </p>
</div>
<div className="w-full md:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-colors" href="#contatti">
                            Richiedi info <i className="w-4 h-4 ml-2" data-lucide="chevron-right"></i>
</a>
</div>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors bg-slate-900 text-white flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-slate-300 mb-6" data-lucide="file-text"></i>
<h3 className="text-xl font-semibold mb-2">Hai già una proposta?</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Analizziamo gratuitamente l'offerta dell'assicurazione. Spesso è inferiore a quanto ti spetta.</p>
</div>
<a className="text-sm font-medium text-white hover:text-slate-300 flex items-center gap-2" href="#contatti">
                       Controlla offerta <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200" id="come-funziona">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Dall'incidente al risarcimento.</h2>
<p className="text-slate-500 font-normal">Un processo trasparente in 4 step, senza stress per te.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 text-lg font-semibold text-slate-900">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Contatto</h3>
<p className="text-sm text-slate-500">Compili il form o ci chiami. Ascoltiamo la tua storia senza impegno.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 text-lg font-semibold text-slate-900">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Analisi</h3>
<p className="text-sm text-slate-500">I nostri esperti valutano la dinamica e quantificano il danno reale.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 text-lg font-semibold text-slate-900">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Gestione</h3>
<p className="text-sm text-slate-500">Trattiamo con l'assicurazione. Tu ti concentri solo sulla guarigione.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-md mb-6 text-lg font-semibold">4</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Risultato</h3>
<p className="text-sm text-slate-500">Ricevi il bonifico del risarcimento. Il nostro onorario viene pagato dall'assicurazione.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Perché scegliere LexVia?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit border border-slate-700">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-100">Zero Spese Anticipate</h4>
<p className="text-sm text-slate-400 mt-1">Sosteniamo noi tutte le spese legali e mediche necessarie per istruire la pratica.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit border border-slate-700">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-100">Indipendenza Totale</h4>
<p className="text-sm text-slate-400 mt-1">Non abbiamo convenzioni con assicurazioni. Lavoriamo solo per te, non per le compagnie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit border border-slate-700">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-100">Massima Valutazione</h4>
<p className="text-sm text-slate-400 mt-1">Utilizziamo tabelle aggiornate e giurisprudenza recente per massimizzare il danno biologico.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl backdrop-blur-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold">MT</div>
<div>
<div className="font-medium text-white">Marco T.</div>
<div className="text-xs text-slate-400">Risarcimento ottenuto: €125.000</div>
</div>
<div className="ml-auto flex text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-300 italic text-sm leading-relaxed">
                    "Dopo l'incidente in moto l'assicurazione mi offriva una cifra ridicola. LexVia ha gestito tutto, facendomi ottenere il triplo di quanto proposto inizialmente, senza che io dovessi anticipare un euro."
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contatti">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">

<div className="md:w-5/12 bg-slate-50 p-10 flex flex-col justify-between border-r border-slate-100">
<div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Parliamone.</h3>
<p className="text-sm text-slate-500 mb-8">Compila il modulo per una pre-analisi gratuita del tuo caso. Ti risponderemo entro 2 ore lavorative.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                Via della Giustizia 12, Milano
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="mail"></i>
                                segreteria@lexvia.it
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                Lun - Ven, 09:00 - 19:00
                            </div>
</div>
</div>
<div className="mt-10">
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Social</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>

<div className="md:w-7/12 p-10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 md:col-span-1 space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Nome</label>
<input className="custom-input" placeholder="Mario Rossi" type="text"/>
</div>
<div className="col-span-2 md:col-span-1 space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Telefono</label>
<input className="custom-input" placeholder="+39 333 0000000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email</label>
<input className="custom-input" placeholder="mario@email.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Tipologia Incidente</label>
<div className="relative">
<select className="custom-input appearance-none bg-white">
<option>Incidente Auto/Moto</option>
<option>Pedone/Ciclista</option>
<option>Incidente Mortale</option>
<option>Altro</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Breve Descrizione</label>
<textarea className="custom-input h-24 resize-none" placeholder="Descrivi brevemente l'accaduto..."></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="custom-checkbox mt-1" id="privacy" type="checkbox"/>
<label className="text-xs text-slate-500 leading-snug" htmlFor="privacy">
                                Acconsento al trattamento dei dati personali secondo la <a className="text-slate-900 underline" href="#">Privacy Policy</a>.
                            </label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg mt-4 flex items-center justify-center gap-2" type="button">
                            Richiedi Valutazione
                            <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<i className="w-5 h-5" data-lucide="scale"></i>
                        LEXVIA
                    </a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Studio legale specializzato in risarcimento danni e responsabilità civile.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Servizi</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Incidenti Stradali</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Malasanità</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Infortuni sul Lavoro</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Rivalsa Datore</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Link Utili</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Chi Siamo</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Lavora con noi</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legale</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Note Legali</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 LexVia Studio Legale. Tutti i diritti riservati. P.IVA 12345678901</p>
<div className="flex gap-6">
<span>Designed with precision</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
