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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-[#3451b7] flex items-center gap-2" href="/">
<iconify-icon className="text-2xl" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
                FRIULDENT
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="text-[#3451b7] font-medium" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#chi-siamo">Chi siamo</a>
<a className="hover:text-slate-900 transition-colors" href="#prima-visita">Prima visita</a>
<a className="hover:text-slate-900 transition-colors" href="#trattamenti">Trattamenti</a>
<a className="hover:text-slate-900 transition-colors" href="#urgenze">Urgenze</a>
<a className="hover:text-slate-900 transition-colors" href="#">Blog</a>
<a className="hover:text-slate-900 transition-colors" href="#">Lavora con noi</a>
<a className="hover:text-slate-900 transition-colors" href="#dove-siamo">Dove siamo</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5" href="#FORM">
                Prenota visita
            </a>
<button className="lg:hidden text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3451b7]/5 border border-[#3451b7]/10 text-[#3451b7] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3451b7] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3451b7]"></span>
</span>
                        Studio Odontoiatrico
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                        Dentista a Codroipo (Udine) — Studio Odontoiatrico Friuldent
                    </h1>
<h2 className="text-base md:text-lg font-normal text-slate-500 leading-relaxed mb-10">
                        Desideri tornare a sorridere, mangiare con serenità e vuoi una soluzione definitiva per i tuoi denti? Scopri Friuldent, la struttura odontoiatrica di riferimento per la chirurgia orale e grandi riabilitazioni implantari nel Medio Friuli (Codroipo - Zona Udine).
                    </h2>
<a className="inline-flex items-center justify-center bg-[#3451b7] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 gap-2 group" href="#FORM">
                        Prenota una prima visita
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] bg-slate-100 overflow-hidden border border-slate-200/50 shadow-sm flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 opacity-50"></div>
<iconify-icon className="text-6xl text-slate-300 relative z-10" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
<span className="absolute bottom-6 left-6 text-xs font-medium text-slate-400 z-10 uppercase tracking-widest">Immagine Team Friuldent</span>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#3451b7] pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-white/20 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-normal text-white/90 leading-relaxed tracking-tight mb-4">
                Benvenuto in Friuldent, lo studio odontoiatrico di Codroipo che da oltre dieci anni accompagna pazienti del Medio Friuli e della provincia di Udine in percorsi di cura completi, trasparenti e costruiti attorno alle loro esigenze reali.
            </p>
<p className="text-base font-normal text-white/70 mb-6">
                Non siamo una catena e non promettiamo semplicemente denti fissi in poche ore senza prima averti conosciuto.
            </p>
<details className="group text-left mx-auto max-w-2xl mt-8 transition-all">
<summary className="cursor-pointer text-white text-sm font-semibold hover:text-white/80 transition-colors flex items-center justify-center gap-2 select-none py-2">
<span className="group-open:hidden">Leggi di più sull'approccio</span>
<span className="hidden group-open:block">Riduci testo</span>
<iconify-icon className="text-lg group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="pb-6 pt-4 space-y-4 text-white/80 text-sm font-normal">
<p>
                        Quello che offriamo è qualcosa di più solido: un metodo clinico e organizzativo strutturato — il <strong className="font-semibold text-white">Metodo PID™</strong> (Prevedibile, Indolore, Duraturo) — sviluppato per guidare ogni trattamento complesso con precisione grazie all’odontoiatria digitale, riducendo imprevisti, dolore e tempi di recupero rispetto alla chirurgia tradizionale.
                    </p>
<p>
                        Se stai cercando un dentista a Codroipo o un centro specializzato vicino a Udine per impianti dentali, chirurgia orale o grandi riabilitazioni, noi saremo al tuo fianco per supportarti in questo percorso con etica, passione e facendoti sentire a casa.
                    </p>
<div className="pt-4 text-center">
<a className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:underline underline-offset-4" href="#FORM">
                            Prenota la tua prima visita <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</details>
</div>
</section>

<section className="py-24" id="chi-siamo">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 flex flex-col justify-start">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Chi Siamo - Dentista a Codroipo e Udine</h2>
<h3 className="text-lg font-medium text-[#3451b7] mb-6 tracking-tight">La storia di Friuldent inizia da una scelta difficile.</h3>
<div className="w-full aspect-[4/3] rounded-[2rem] bg-slate-100 overflow-hidden border border-slate-200/50 shadow-sm flex items-center justify-center relative mt-4">
<iconify-icon className="text-4xl text-slate-300 relative z-10" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
<span className="absolute bottom-4 left-4 text-[10px] font-medium text-slate-400 z-10 uppercase tracking-widest">Immagine Studio</span>
</div>
</div>
<div className="md:col-span-7 space-y-5 text-base font-normal text-slate-500">
<p>Riccardo Franco non è solo il fondatore di Friuldent ma la storia che vogliamo raccontarti inizia da lui. È un uomo che ha scelto di non arrendersi quando tutto sembrava perduto.</p>
<p>Nel 2019, Friuldent si trovò davanti a una crisi finanziaria importante. La scelta più semplice sarebbe stata lasciar fallire tutto, tuttavia Riccardo, insieme ai suoi nuovi soci, ha scelto di comportarsi diversamente: si è rimboccato le maniche e ha iniziato a costruire qualcosa di nuovo dalle fondamenta.</p>
<p>Poi è arrivato il Covid. Un altro colpo durissimo. Ma anche quella volta, il management di Friuldent ha scelto di usare quel tempo per formarsi, ristrutturare lo studio e costruire il gruppo che oggi rende Friuldent uno dei centri di riferimento per la chirurgia orale e le grandi riabilitazioni nel Medio Friuli.</p>
<p>Quella storia — fatta di cadute, sacrifici e rinascite — è la ragione per cui oggi lo studio dentistico a Codroipo (Udine) Friuldent lavora con protocolli rigorosi, comunicazione trasparente e un'attenzione genuina per ogni singolo paziente.</p>
<div className="pt-6">
<a className="inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 gap-2 group" href="/chi-siamo">
                        Scopri la storia completa
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-[2.5rem] mx-4 md:mx-8 mb-24 overflow-hidden relative">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#3451b7] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#3451b7] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Il nostro approccio: grande struttura, attenzione familiare, zero barriere architettoniche.</h2>
<h3 className="text-lg md:text-xl font-normal text-slate-300 mb-10 tracking-tight">Sappiamo che entrare in una struttura grande come la nostra a volte può intimidire… Ma il nostro Team ti farà sentire come se fossi a casa tua.</h3>
<p className="text-sm md:text-base font-normal text-slate-400 mb-8 max-w-3xl mx-auto">
                Molti dei nostri pazienti arrivano da noi dopo anni di paura del dentista alle spalle per via di brutte esperienze pregresse. Alcuni pazienti hanno rimandato per troppo tempo la propria salute orale e oggi si vergognano della situazione in cui si trovano. Alcuni hanno avuto esperienze negative con altri studi o con soluzioni low-cost che non hanno funzionato, lasciandoli in condizioni peggiori di prima.
            </p>
<details className="group mt-8 max-w-3xl mx-auto text-center">
<summary className="cursor-pointer inline-flex items-center justify-center gap-2 text-white text-sm font-semibold hover:text-white/80 transition-colors mx-auto select-none w-full">
<span className="group-open:hidden">Scopri di più sul nostro approccio</span>
<span className="hidden group-open:block">Riduci testo</span>
<iconify-icon className="text-lg group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="mt-8 p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md space-y-8 text-left">
<div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight flex items-center gap-3">
<iconify-icon className="text-[#3451b7]" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
                            In Friuldent non giudichiamo. Mai.
                        </h3>
<p className="text-sm text-slate-400 mb-4">Ci concentriamo nell’aiutare i nostri pazienti ad affrontare in modo sereno e amorevole le cure.</p>
<p className="text-sm text-slate-400 mb-4">Dal momento in cui varchi la porta — dopo aver parcheggiato la tua auto nel nostro parcheggio privato, ti troverai in un ambiente pensato per metterti a tuo agio — ogni membro del nostro team sa che la persona che ha davanti ha una storia, delle paure e il diritto di essere trattata con rispetto e dignità.</p>
<p className="text-sm text-slate-400">La nostra filosofia è semplice: prima capiamo chi sei e cosa vuoi. Poi costruiamo insieme il percorso di cura più adatto a te. Con tempi certi, costi trasparenti e zero sorprese lungo la strada.</p>
</div>
<div className="h-px w-full bg-white/10"></div>
<div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight flex items-center gap-3">
<iconify-icon className="text-[#3451b7]" icon="solar:wheelchair-linear" strokeWidth="1.5"></iconify-icon>
                            Hai esigenze speciali?
                        </h3>
<p className="text-sm text-slate-400 mb-4">Siamo pronti ad accogliere pazienti con disabilità e special needs grazie al progetto Open Smile.</p>
<p className="text-sm text-slate-400">La nostra struttura è stata creata e concepita per poter supportare e curare pazienti con esigenze speciali e disabilità in serenità e sicurezza. Inoltre siamo una tra le prime strutture odontoiatriche in Italia ad aver creato delle convenzioni con delle sale operatorie attraverso il progetto “Open Smile”, così da poter aiutare le persone più fragili che necessitano di un intervento chirurgico importante, in totale sicurezza.</p>
</div>
</div>
</details>
<div className="mt-12">
<a className="inline-flex items-center justify-center bg-[#3451b7] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 gap-2 group" href="#FORM">
                    Prenota la tua prima visita
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    7 motivi per scegliere Friuldent come studio dentistico di riferimento tra Codroipo e Udine
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:hospital-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">1. Sala chirurgica dedicata esclusivamente all'implantologia</h3>
<p className="text-sm text-slate-500">Non una poltrona in più, bensì un reparto chirurgico completo, attrezzato e gestito da un'équipe specializzata che ti segue dalla preparazione pre-operatoria fino ai controlli post-chirurgici, seguendo protocolli strutturati in ogni fase.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">2. Chirurgia computer guidata per massima precisione</h3>
<p className="text-sm text-slate-500">Ogni intervento implantare viene pianificato digitalmente nei minimi dettagli prima ancora di operare. Riduciamo l'invasività, accorciamo i tempi chirurgici e aumentiamo la predicibilità del risultato.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:smile-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">3. Non resti mai senza denti durante il trattamento</h3>
<p className="text-sm text-slate-500">Grazie ai nostri protocolli clinici, quando possibile, non dovrai presentarti al lavoro o in pubblico senza denti. Il percorso è progettato per mantenere la tua qualità di vita in ogni fase.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">4. Diagnostica completa direttamente in struttura</h3>
<p className="text-sm text-slate-500">Radiografie digitali, scanner intraorale e documentazione fotografica: tutta la diagnostica è già qui, senza spostarti in altri centri. Diagnosi più precisa, meno tempo perso.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">5. Centro di formazione chirurgica riconosciuto</h3>
<p className="text-sm text-slate-500">Friuldent ospita e forma chirurghi italiani e internazionali. Professionisti altamente qualificati lavorano regolarmente nella nostra struttura, portando competenze avanzate a beneficio dei pazienti.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
<div className="w-12 h-12 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#3451b7]" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-3">6. Costi trasparenti e finanziamenti a tasso zero</h3>
<p className="text-sm text-slate-500">Al termine della visita ricevi preventivo e piano cure dettagliato. Nessuna sorpresa. Mettiamo a disposizione finanziamenti, fino a 5.000€ anche a tasso zero, per rendere le cure accessibili.</p>
</div>
</div>

<div className="mt-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] md:w-2/3 mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
<div className="w-16 h-16 shrink-0 rounded-2xl bg-[#3451b7]/10 flex items-center justify-center">
<iconify-icon className="text-3xl text-[#3451b7]" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">7. Parcheggio privato gratuito e struttura pienamente accessibile</h3>
<p className="text-sm text-slate-500 mb-4">Ampio parcheggio privato gratuito, nessuna barriera architettonica, accesso facilitato per pazienti con qualsiasi esigenza di mobilità. Perché prendersi cura di te inizia ancora prima di sedersi sulla poltrona.</p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-[#3451b7] hover:underline underline-offset-4" href="/contatti">
                        Richiedi la tua prima visita <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Cosa dicono di noi i pazienti di Friuldent</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto mb-12">Le parole più importanti non sono le nostre. Sono quelle di chi ha scelto Friuldent, ha vissuto un percorso di cura con noi e ha deciso di condividere la propria esperienza.</p>
<div className="w-full max-w-4xl mx-auto h-64 bg-slate-50 border border-slate-200 border-dashed rounded-3xl flex items-center justify-center text-slate-400 font-medium text-sm">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-4xl text-amber-400" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                    [PLACEHOLDER WIDGET RECENSIONI GOOGLE]
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100" id="trattamenti">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">I trattamenti odontoiatrici di Friuldent a Codroipo e Udine</h2>
<p className="text-base text-slate-500">Ogni percorso di cura in Friuldent parte da un punto preciso: capire qual è il tuo problema reale e costruire la soluzione più adatta a te. Ecco da dove iniziamo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Hai perso uno o più denti e vuoi una soluzione definitiva che funzioni davvero?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Scopri l’implantologia e Chirurgia Orale con il metodo PID™ Friuldent: impianti con chirurgia computer guidata, carico immediato quando possibile e sala chirurgica dedicata. Protocolli predicibili per denti fissi definitivi.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/implantologia-codroipo">
                            Scopri l'implantologia
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Hai una protesi mobile che non tiene o fa male?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Possiamo aiutarti con le Protesi ed Estetica Dentale: corone, faccette, arcate complete su denti o impianti. Impronta digitale per massima precisione e coordinamento con laboratorio dedicato.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/protesi-dentale">
                            Scopri le protesi
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Hai un dente che fa male e hai paura di perderlo?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Salviamo i tuoi denti grazie all’Endodonzia: devitalizzazioni, ritrattamenti e ricostruzioni per eliminare dolore e infezioni alla radice, con anestesia efficace e protocolli a minimo disagio.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/endodonzia">
                            Scopri l'endodonzia
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Gengive che sanguinano o denti che si muovono?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Scopri la Parodontologia: trattamenti non chirurgici per bloccare la malattia parodontale, proteggere la salute delle gengive e salvaguardare gli impianti nel tempo.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/parodontologia">
                            Scopri la parodontologia
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Denti storti e vorresti un sorriso più armonioso?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Migliora estetica e funzionalità con l’Ortodonzia: apparecchi fissi, mobili e allineatori trasparenti. Piani di cura suddivisi in fasi con durata definita, per sapere sempre a che punto sei.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/ortodonzia">
                            Scopri l'ortodonzia
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Hai una carie o bisogno di un'otturazione?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Scopri la Conservativa: cure gestite da personale specializzato con materiali biocompatibili di ultima generazione. Soluzioni rapide per preservare i tuoi denti naturali a lungo.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/conservativa">
                            Scopri la conservativa
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 line-clamp-2">Tuo figlio ha paura del dentista?</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">Scopri la Pedodonzia: odontoiatri specializzati nei bambini, in un ambiente sereno. Un sabato al mese dedicato alle famiglie, per venire incontro a chi lavora.</p>
<a className="w-full inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 mt-auto" href="/pedodonzia">
                            Scopri la pedodonzia
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-[2rem] flex flex-col h-full hover:border-[#3451b7]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all group lg:col-span-2 overflow-hidden">
<div className="w-full h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-4xl text-slate-300" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Non ricordi quando hai fatto l'ultima igiene dentale?</h3>
<p className="text-sm text-slate-500 mb-8 max-w-xl">Scopri l’Igiene e Prevenzione: igiene professionale con metodo GBT (Guided Biofilm Therapy), il protocollo più avanzato per la rimozione del biofilm. Richiami programmati ogni 6 mesi per proteggere nel tempo il lavoro fatto.</p>
<div className="mt-auto flex justify-start">
<a className="inline-flex items-center justify-center bg-[#3451b7] text-white text-sm font-medium py-3 px-8 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5" href="/igiene-dentale">
                                Scopri l'igiene professionale
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="prima-visita">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 sticky top-32 self-start">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Come funziona la prima visita da Friuldent</h2>
<h3 className="text-lg font-medium text-[#3451b7] mb-6 tracking-tight">Non una visita veloce. Un'ora dedicata interamente a te.</h3>
<p className="text-base text-slate-500 mb-4">In Friuldent la prima visita non è un controllo superficiale di pochi minuti. È un percorso strutturato di 45 minuti — con un protocollo preciso — pensato per capire davvero la tua situazione, ascoltare le tue preoccupazioni e darti risposte concrete, in mano, nero su bianco.</p>
<p className="text-sm font-medium text-slate-700 mb-8">Ecco i 5 Passi della nostra prima visita:</p>
<a className="inline-flex items-center justify-center bg-[#3451b7] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5 gap-2 w-full md:w-auto" href="/contatti">
                    Prenota la tua prima visita
                </a>
</div>
<div className="lg:col-span-7 relative">
<div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200"></div>
<div className="space-y-12">
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-10">
<span className="text-sm font-semibold text-[#3451b7]">1</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 mt-1.5">Accoglienza e ascolto in privato</h4>
<p className="text-sm text-slate-500 leading-relaxed">Prima ancora di sederti sulla poltrona, una nostra collaboratrice ti accoglie in un ufficio dedicato, solo per voi due. Qui compiliamo insieme la tua cartella clinica: raccogliamo le informazioni mediche, ma anche la tua storia. Che lavoro fai, come ci hai trovato, quali sono i tuoi obiettivi, cosa ti preoccupa, cosa hai già provato in passato. Questo colloquio avviene sempre in privato perché la tua riservatezza e la tua dignità vengono prima di tutto.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-10">
<span className="text-sm font-semibold text-[#3451b7]">2</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 mt-1.5">Esame clinico completo con l'odontoiatra</h4>
<p className="text-sm text-slate-500 leading-relaxed">L'odontoiatra esegue un esame obiettivo approfondito: tessuti molli, denti presenti e mancanti, sondaggi parodontali, valutazione dell'occlusione. Un'analisi completa della tua situazione attuale, senza tralasciare nulla.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-10">
<span className="text-sm font-semibold text-[#3451b7]">3</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 mt-1.5">Diagnostica completa direttamente in struttura</h4>
<p className="text-sm text-slate-500 leading-relaxed">Senza spostarti da noi: radiografie endorali, ortopantomografia (OPT), foto cliniche complete del sorriso e del viso, proiezioni intraorali con gli specchi. Tutta la strumentazione diagnostica necessaria è già qui, con tecnologie digitali di precisione.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-10">
<span className="text-sm font-semibold text-[#3451b7]">4</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 mt-1.5">Il tuo documento clinico personalizzato, da portare a casa</h4>
<p className="text-sm text-slate-500 leading-relaxed">Al termine della visita ricevi una cartellina con tutta la documentazione: l'esame obiettivo scritto e firmato dall'odontoiatra, la stampa delle radiografie e delle foto, il piano di cura con le priorità organizzate in ordine cronologico e — dove possibile già in prima visita — il preventivo dettagliato. Un documento che è tuo, da consultare con calma a casa tua e da condividere con chi vuoi.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-10">
<span className="text-sm font-semibold text-[#3451b7]">5</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 mt-1.5">Piano di pagamento trasparente, senza sorprese</h4>
<p className="text-sm text-slate-500 leading-relaxed">Se il piano di cura lo prevede, ti illustriamo le opzioni di finanziamento disponibili: possiamo finanziare qualunque importo e fino a 5.000€ a tasso zero, con rate adattate alle tue possibilità reali. Costi chiari dall'inizio, nessuna sorpresa lungo il percorso.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-rose-50/50 border-rose-100/50 border-t pt-20 pb-20" id="urgenze">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-[2rem] border border-rose-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Urgenze odontoiatriche a Codroipo e Udine</h2>
<h3 className="text-base font-medium text-rose-600 mb-6">Hai mal di denti improvviso, un dente rotto o una protesi che ti fa male?</h3>
<p className="text-sm text-slate-500 mb-8">Se hai dolore acuto, un ascesso, un dente scheggiato o qualsiasi altra urgenza odontoiatrica, contattaci il prima possibile durante i nostri orari di apertura. Faremo il possibile per assisterti nel più breve tempo disponibile.</p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100" href="tel:0432901112">
<iconify-icon className="text-xl text-slate-700" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Chiamaci</div>
<div className="text-base font-semibold text-slate-900">0432 901112</div>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors border border-green-100" href="https://wa.me/393770915064">
<iconify-icon className="text-xl text-green-700" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xs font-medium text-green-600/80 uppercase tracking-wider mb-0.5">WhatsApp</div>
<div className="text-base font-semibold text-green-800">377 091 5064</div>
</div>
</a>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Orari di apertura</h4>
<div className="space-y-2 text-sm text-slate-500">
<p className="flex justify-between border-b border-slate-100 pb-2"><span>Lunedì — Venerdì</span> <span className="font-medium text-slate-700">08:30 – 19:30</span></p>
<p className="flex justify-between border-b border-slate-100 pb-2"><span>Sabato</span> <span className="font-medium text-slate-700">08:30 – 13:00</span></p>
<p className="flex justify-between pb-1"><span>Domenica</span> <span className="font-medium text-rose-500">Chiuso</span></p>
</div>
</div>
</div>
<div className="md:w-1/2 w-full h-[400px] md:h-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center relative">
<iconify-icon className="text-6xl text-slate-300 relative z-10" icon="solar:gallery-wide-linear" strokeWidth="1"></iconify-icon>
<span className="absolute bottom-6 left-6 text-xs font-medium text-slate-400 z-10 uppercase tracking-widest">Immagine Studio/Urgenze</span>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-t pt-24 pb-24" id="FORM">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Prenota la tua visita da Friuldent</h2>
<h3 className="text-base font-normal text-slate-500 mb-8">Scegli come contattarci. Rispondiamo rapidamente. Puoi prenotare la tua prima visita o richiedere informazioni nel modo che preferisci:</h3>
<div className="flex flex-wrap gap-4 mb-10">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-100" href="tel:0432901112">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 0432 901112
                    </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-100" href="https://wa.me/393770915064">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon> 377 091 5064
                    </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-100" href="mailto:info@friuldent.it">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> info@friuldent.it
                    </a>
</div>
<form className="space-y-5 bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100">
<div className="text-sm font-medium text-slate-900 mb-4 uppercase tracking-wider">Modulo online</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Nome e Cognome</label>
<input className="custom-input w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" placeholder="Mario Rossi" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Telefono</label>
<input className="custom-input w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" placeholder="333 123 4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Email</label>
<input className="custom-input w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400" placeholder="mario@esempio.it" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Come possiamo aiutarti?</label>
<textarea className="custom-input w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 resize-none" placeholder="Scrivi qui il tuo messaggio o la tua esigenza..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-slate-300 text-[#3451b7] focus:ring-[#3451b7] cursor-pointer custom-input" id="privacy" type="checkbox"/>
</div>
<label className="text-xs text-slate-500 cursor-pointer" htmlFor="privacy">
                            Ho letto e accetto l'informativa sulla privacy per il trattamento dei dati personali.
                        </label>
</div>
<button className="w-full bg-[#3451b7] text-white text-base font-medium py-4 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_14px_0_rgba(52,81,183,0.39)] hover:shadow-[0_6px_20px_rgba(52,81,183,0.23)] hover:-translate-y-0.5" type="button">
                        Invia richiesta
                    </button>
</form>
</div>

<div className="flex flex-col h-full" id="dove-siamo">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Dove siamo — Studio Dentistico Friuldent Codroipo</h2>
<p className="text-sm text-slate-500 mb-6">Ci trovi in Viale Venezia, 121/C — 33033 Codroipo (UD), facilmente raggiungibile sia da Codroipo che dall'intera provincia di Udine, con ampio parcheggio privato gratuito direttamente adiacente alla struttura.</p>
<div className="w-full h-64 md:h-80 bg-slate-100 rounded-3xl border border-slate-200 mb-8 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-4xl text-slate-300" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute bottom-4 text-xs font-medium text-slate-400 uppercase tracking-widest">[MAPPA GOOGLE MAPS]</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Come raggiungerci</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">Lo studio si trova lungo Viale Venezia, a Codroipo. La struttura è completamente priva di barriere architettoniche e accessibile a pazienti con qualsiasi esigenza di mobilità. Il parcheggio privato gratuito è direttamente in loco: niente stress da parcheggio, niente corse.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Orari e Recapiti</h4>
<div className="space-y-1.5 text-xs text-slate-500 mb-4">
<p>Lunedì — Venerdì: 08:30 – 19:30</p>
<p>Sabato: 08:30 – 13:00</p>
<p>Domenica: <span className="text-rose-500">Chiuso</span></p>
</div>
<div className="space-y-1.5 text-xs text-slate-500">
<p>Tel: <a className="font-medium text-slate-700 hover:text-[#3451b7]" href="tel:0432901112">0432 901112</a></p>
<p>WA: <a className="font-medium text-slate-700 hover:text-[#3451b7]" href="https://wa.me/393770915064">377 091 5064</a></p>
<p>Email: <a className="font-medium text-slate-700 hover:text-[#3451b7]" href="mailto:info@friuldent.it">info@friuldent.it</a></p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 bg-slate-50 border-t border-slate-100 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-lg font-medium tracking-tighter text-[#3451b7]">FRIULDENT</span>
<p className="text-xs text-slate-400">© 2024 Friuldent. Tutti i diritti riservati. Dir. San. Dott. Riccardo Franco.</p>
<div className="flex gap-4 text-xs font-medium text-slate-400">
<a className="hover:text-slate-700 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-700 transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</footer>

    </>
  );
}
