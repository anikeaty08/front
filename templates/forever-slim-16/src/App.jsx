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
colors: {
teal: { 50: '#f0fdfa', 100: '#ccfbf1', 600: '#0d9488', 700: '#0f766e', 900: '#134e4a' },
amber: { 50: '#fffbeb', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
slate: { 900: '#0f172a', 700: '#334155', 500: '#64748b', 100: '#f1f5f9' },
red: { 100: '#fee2e2', 600: '#dc2626', 700: '#b91c1c' },
green: { 100: '#dcfce7', 600: '#16a34a' }
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Source Sans Pro"', 'sans-serif'],
}
}
}
}



        // Countdown Timer Logic
        function startTimer(duration, display) {
            var timer = duration, hours, minutes, seconds;
            setInterval(function () {
                hours = parseInt(timer / 3600, 10);
                minutes = parseInt((timer % 3600) / 60, 10);
                seconds = parseInt(timer % 60, 10);

                hours = hours < 10 ? "0" + hours : hours;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = hours + ":" + minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        // Toast Notifications Logic
        const toasts = [
            { title: "Francesca da Milano", desc: "Ha ordinato il Kit Trasformazione" },
            { title: "Elena da Torino", desc: "Ha completato il quiz: 81/100" },
            { title: "14 ordini", desc: "nelle ultime 3 ore" },
            { title: "Anna da Bari", desc: "Ha appena riacquistato" }
        ];

        function showToast() {
            const toastEl = document.getElementById('toast');
            const randomToast = toasts[Math.floor(Math.random() * toasts.length)];
            document.getElementById('toast-title').innerText = randomToast.title;
            document.getElementById('toast-desc').innerText = randomToast.desc;
            
            toastEl.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toastEl.classList.add('translate-y-20', 'opacity-0');
            }, 4000);
        }

        // Exit Intent Logic (Simple Scroll Up for Mobile / Mouseout for Desktop)
        let lastScrollTop = 0;
        let popupShown = false;
        
        window.addEventListener('scroll', function() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st < lastScrollTop && st > 500 && !popupShown && Math.abs(st - lastScrollTop) > 20) {
                 // Fast scroll up
                 // document.getElementById('exit-popup').style.display = 'flex';
                 // popupShown = true; // Disabled for UX in this demo, uncomment to enable
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);

        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 0 && !popupShown) {
                document.getElementById('exit-popup').classList.remove('hidden');
                document.getElementById('exit-popup').classList.add('flex');
                popupShown = true;
            }
        });

        // Initialize
        window.onload = function () {
            var threeHours = 60 * 60 * 2 + 47 * 60 + 33;
            var display = document.querySelector('#top-timer');
            startTimer(threeHours, display);
            
            // Start toast loop
            setTimeout(() => {
                showToast();
                setInterval(showToast, 25000);
            }, 5000);
        };
    
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
      

<div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-700 to-red-600 text-white text-xs py-3 text-center shadow-md animate-pulse-slow">
<span className="font-semibold">⚠️ Solo 23 kit disponibili</span> — Offerta scade tra <span className="font-mono font-bold tracking-widest" id="top-timer">02:47:33</span>
</div>

<header className="bg-gradient-to-r from-teal-700 to-teal-600 pt-16 pb-3 text-center text-white/90 text-xs tracking-wide border-b border-teal-800">
<div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:flag" data-width="12"></span> Qualità Svizzera</span>
<span className="hidden sm:inline">|</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:microscope" data-width="12"></span> Purezza &gt;99%</span>
<span className="hidden sm:inline">|</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:truck" data-width="12"></span> Spedizione Gratis</span>
</div>
</header>

<section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-10 pb-16 px-5 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">

<div className="glass-panel rounded-2xl p-6 mb-8 shadow-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
<h3 className="text-sm font-semibold tracking-wider text-teal-200 uppercase flex items-center gap-2">
<span className="iconify" data-icon="lucide:bar-chart-2"></span> Il tuo risultato
                    </h3>
<span className="text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded border border-red-500/30 font-semibold">CRITICO</span>
</div>
<p className="text-sm text-gray-300 mb-2">Resistenza Metabolica:</p>
<div className="flex items-end justify-between mb-2">
<div className="w-full bg-slate-700/50 h-3 rounded-full mr-4 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-teal-200 rounded-full" style={{width: '78%'}}></div>
</div>
<span className="text-2xl font-serif font-semibold text-white leading-none">78<span className="text-sm text-gray-400 font-sans">/100</span></span>
</div>
<p className="text-red-400 font-semibold text-sm mb-3 flex items-center gap-2">
<span className="iconify" data-icon="lucide:alert-circle" data-width="16"></span> LIVELLO: ALTO
                </p>
<p className="text-xs text-gray-400 leading-relaxed">
                    La media italiana è 45/100. Il tuo punteggio è <span className="text-white font-medium">73% più alto</span>. Il tuo metabolismo è attualmente in stallo.
                </p>
</div>

<h1 className="font-serif text-3xl md:text-5xl leading-tight mb-4 tracking-tight">
                Riaccendi il tuo metabolismo nelle prossime 6-8 settimane
            </h1>
<p className="font-sans text-lg md:text-xl text-gray-300 italic mb-10 leading-relaxed font-light">
                "La stessa biotecnologia che sta rivoluzionando il mondo della salute — ora disponibile in Italia."
            </p>

<div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
<p className="text-base text-gray-200 mb-4">Hai visto il tuo punteggio. Ora hai due scelte:</p>
<div className="space-y-4">
<div className="bg-red-900/10 border-l-4 border-red-600 p-4 rounded-r-lg">
<p className="text-sm text-gray-300">
<span className="text-white font-semibold">Opzione 1:</span> Chiudi questa pagina e continui a lottare contro il tuo corpo. Altre diete. Altri fallimenti.
                        </p>
</div>
<div className="bg-teal-900/10 border-l-4 border-green-500 p-4 rounded-r-lg">
<p className="text-sm text-gray-300">
<span className="text-white font-semibold">Opzione 2:</span> Scopri come migliaia di donne stanno finalmente vincendo questa battaglia — senza fame.
                        </p>
</div>
</div>
<p className="mt-4 text-center text-sm font-semibold text-teal-200 animate-pulse">
                    Continua a leggere. Quello che stai per scoprire potrebbe cambiare tutto.
                </p>
</div>
</div>
</section>

<section className="py-12 px-5 max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-6 font-semibold tracking-tight">Perché il tuo punteggio è così alto?</h2>
<p className="text-slate-600 mb-8 leading-relaxed">Basandoci sulle tue risposte al quiz, ecco cosa sta succedendo nel tuo corpo:</p>
<div className="space-y-6">

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</div>
<div>
<h3 className="font-semibold text-lg text-slate-800 mb-1">Mangi poco ma non dimagrisci</h3>
<p className="text-slate-600 text-sm leading-relaxed">Il tuo metabolismo è in "modalità difesa". Protegge ogni grammo di grasso come riserva di emergenza.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<span className="iconify" data-icon="lucide:battery-warning" data-width="20"></span>
</div>
<div>
<h3 className="font-semibold text-lg text-slate-800 mb-1">Ti senti stanca e spossata</h3>
<p className="text-slate-600 text-sm leading-relaxed">Il tuo corpo sta risparmiando energia. Il metabolismo basale è rallentato drasticamente.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<div>
<h3 className="font-semibold text-lg text-slate-800 mb-1">Grasso ostinato su pancia e fianchi</h3>
<p className="text-slate-600 text-sm leading-relaxed">Resistenza insulinica. Il tuo corpo trasforma i carboidrati in grasso invece di bruciarli.</p>
</div>
</div>
</div>
<div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-5">
<p className="text-teal-900 text-sm font-medium leading-relaxed">
                Questi 3 fattori combinati significano una cosa sola: Il tuo metabolismo sta lavorando <span className="underline decoration-red-400 decoration-2 underline-offset-2">CONTRO</span> di te. Ma può essere riacceso.
            </p>
</div>
</section>

<section className="py-12 px-5 bg-white">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-6 font-semibold">Se sei qui, lo sai già.</h2>
<div className="space-y-4 text-slate-700 leading-relaxed mb-10">
<p><span className="text-teal-700 font-semibold">Sai cosa significa</span> svegliarti ogni mattina e lottare contro il tuo corpo.</p>
<p><span className="text-teal-700 font-semibold">Sai cosa significa</span> provare diete, palestre, integratori — e vedere zero risultati.</p>
<p><span className="text-teal-700 font-semibold">Sai cosa significa</span> rinunciare — a uscite, foto, spiaggia — per colpa del tuo peso.</p>
</div>

<div className="bg-slate-50 border-l-4 border-red-600 p-6 rounded-r-xl shadow-sm mb-10">
<h3 className="font-serif text-xl text-slate-900 mb-4 font-semibold">Il vero prezzo che stai pagando</h3>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Non parliamo solo di soldi. Parliamo di quella cena a cui hai detto 'no'. Parliamo di quella foto di gruppo da cui ti sei tagliata fuori. Parliamo di quella mattina in cui hai pianto davanti allo specchio.
                </p>
<p className="font-semibold text-slate-800">Quanto vale tornare a sentirti TU?</p>
</div>

<label className="custom-checkbox flex items-center gap-4 p-4 border border-slate-200 rounded-lg cursor-pointer select-none transition-colors hover:bg-slate-50">
<input className="hidden" onchange="this.parentElement.classList.toggle('bg-green-50'); this.parentElement.classList.toggle('border-green-200');" type="checkbox"/>
<div className="w-6 h-6 rounded border-2 border-slate-300 flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-slate-700 font-medium text-sm">Sì, mi riconosco in almeno 2 di queste situazioni</span>
</label>
</div>
</section>

<section className="py-16 px-5 bg-slate-900 text-white text-center">
<div className="max-w-xl mx-auto">
<h2 className="font-serif text-2xl md:text-3xl mb-6">Chi ti ha mentito per anni</h2>
<p className="text-gray-400 mb-2 text-sm uppercase tracking-widest">Fatturato Industria Diete</p>
<div className="text-5xl md:text-6xl font-serif text-amber-500 mb-6 font-bold tracking-tight">72 MILIARDI</div>
<p className="text-gray-300 leading-relaxed mb-8">
                Guadagnano dal tuo fallimento. Se le diete funzionassero, fallirebbero loro. <br/>
                Ti hanno detto che è questione di "forza di volontà". <strong className="text-white">È una bugia.</strong>
</p>
<div className="inline-block border border-amber-500/50 bg-amber-500/10 px-6 py-2 rounded-full text-amber-400 text-sm font-semibold">
                Forever Slim rompe questo ciclo.
            </div>
</div>
</section>

<section className="py-12 px-5 bg-slate-50">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-8 text-center font-semibold">Fermati. Facciamo due conti.</h2>
<div className="space-y-4 mb-8">

<div className="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm opacity-75">
<h3 className="font-semibold text-slate-800 flex justify-between">
<span>❌ Nutrizionista</span>
<span className="text-red-600">€1.200/anno</span>
</h3>
<p className="text-xs text-slate-500 mt-2">La stessa dieta di sempre. Perdi 3kg, ne riprendi 5.</p>
</div>

<div className="bg-white p-5 rounded-xl border-l-4 border-red-500 shadow-sm opacity-75">
<h3 className="font-semibold text-slate-800 flex justify-between">
<span>❌ Personal Trainer</span>
<span className="text-red-600">€5.000/anno</span>
</h3>
<p className="text-xs text-slate-500 mt-2">Ti ammazzi in palestra, ma il metabolismo è bloccato.</p>
</div>
</div>

<div className="bg-slate-900 rounded-xl p-6 text-center text-white mb-8 shadow-xl">
<p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Costo totale fallimenti</p>
<p className="text-4xl text-amber-500 font-serif font-bold mb-2">€6.200+</p>
<p className="text-sm text-gray-300">All'anno. Per non risolvere nulla.</p>
</div>

<div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">SOLUZIONE DEFINITIVA</div>
<h3 className="font-semibold text-slate-900 flex justify-between items-center mb-2">
<span className="flex items-center gap-2"><span className="iconify text-green-600" data-icon="lucide:check-circle"></span> Forever Slim</span>
<span className="text-green-700 font-bold text-lg">€399 totali</span>
</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    Agisci sul metabolismo bloccato. Il buco viene tappato alla radice.
                </p>
</div>
</div>
</section>

<div className="py-12 px-6 text-center bg-white">
<h3 className="text-xl font-bold text-slate-900 mb-2">Hai già deciso?</h3>
<p className="text-slate-500 text-sm mb-6">Se i numeri ti hanno convinta, non serve leggere altro.</p>
<a className="inline-flex items-center justify-center w-full max-w-sm bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-amber-500/30 transition-all transform active:scale-95" href="#pricing">
            VEDI I PREZZI <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
<p className="text-xs text-slate-400 mt-4">↓ Oppure continua a leggere</p>
</div>

<section className="py-16 px-5 bg-slate-900 text-white">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-2xl md:text-3xl mb-4 font-semibold">La verità che nessuno dice</h2>
<p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Ozempic e Wegovy? Tecnologia vecchia del 2017. È come comprare un iPhone 5 nel 2024.
            </p>
<div className="space-y-6">

<div className="border border-white/10 bg-white/5 rounded-xl p-5 opacity-60">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">1ª GENERAZIONE (2017)</span>
<span className="bg-red-900/50 text-red-300 text-[10px] px-2 py-0.5 rounded border border-red-800">OBSOLETA</span>
</div>
<h3 className="font-serif text-lg mb-1">Semaglutide (Ozempic)</h3>
<p className="text-xs text-gray-400">1 Recettore. Rallenta il metabolismo. Effetto "Faccia scavata".</p>
</div>

<div className="border-2 border-teal-500 bg-teal-900/20 rounded-xl p-6 relative shadow-2xl shadow-teal-900/50">
<div className="absolute -top-3 left-6 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                        STANDARD ATTUALE
                    </div>
<div className="flex justify-between items-start mb-3 mt-1">
<span className="text-xs font-mono text-teal-300">3ª GENERAZIONE (2024)</span>
</div>
<h3 className="font-serif text-2xl mb-2 text-white">Retatrutide (Forever Slim)</h3>
<ul className="space-y-2 text-sm text-gray-200 mt-4">
<li className="flex gap-2"><span className="iconify text-teal-400" data-icon="lucide:check"></span> <strong>3 Recettori</strong> (GLP-1, GIP, Glucagone)</li>
<li className="flex gap-2"><span className="iconify text-teal-400" data-icon="lucide:check"></span> Spegne la fame</li>
<li className="flex gap-2"><span className="iconify text-teal-400" data-icon="lucide:check"></span> <strong>ACCELERA</strong> il metabolismo</li>
<li className="flex gap-2"><span className="iconify text-teal-400" data-icon="lucide:check"></span> Preserva i muscoli</li>
</ul>
</div>
</div>

<div className="mt-8 overflow-x-auto no-scrollbar pb-4">
<table className="w-full text-sm text-left text-gray-400 min-w-[320px]">
<thead className="text-xs text-gray-200 uppercase bg-white/5">
<tr>
<th className="px-4 py-3 rounded-l-lg">Feature</th>
<th className="px-4 py-3">Ozempic</th>
<th className="px-4 py-3 text-teal-400 bg-teal-900/30 rounded-r-lg border-b-2 border-teal-500">Forever Slim</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/5">
<td className="px-4 py-3 font-medium text-white">Recettori</td>
<td className="px-4 py-3">1</td>
<td className="px-4 py-3 text-white bg-teal-900/10 font-bold">3</td>
</tr>
<tr className="border-b border-white/5">
<td className="px-4 py-3 font-medium text-white">Metabolismo</td>
<td className="px-4 py-3 text-red-400">Rallenta</td>
<td className="px-4 py-3 text-teal-400 bg-teal-900/10 font-bold">Accelera</td>
</tr>
<tr className="border-b border-white/5">
<td className="px-4 py-3 font-medium text-white">Ricetta</td>
<td className="px-4 py-3">Sì</td>
<td className="px-4 py-3 text-white bg-teal-900/10 font-bold">No</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-12 px-5 bg-white max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-2 font-semibold text-center">I 3 Interruttori</h2>
<p className="text-center text-slate-500 text-sm mb-10">Forever Slim li accende tutti insieme.</p>
<div className="space-y-8">

<div className="bg-white rounded-xl shadow-lg border-l-4 border-teal-500 p-6">
<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 mb-4">
<span className="iconify" data-icon="lucide:volume-x" data-width="20"></span>
</div>
<h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Interruttore 1: GLP-1</h3>
<h4 className="text-xl font-serif text-slate-900 mb-2">Il Silenziatore</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Spegne il "Food Noise" — quella voce ossessiva che ti chiede sempre cosa mangiare. Finalmente silenzio.
                </p>
<div className="bg-slate-50 p-3 rounded text-xs text-slate-500 italic border border-slate-100">
                    "È come se qualcuno avesse abbassato il volume. Non ci penso più."
                </div>
</div>

<div className="bg-white rounded-xl shadow-lg border-l-4 border-amber-500 p-6">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Interruttore 3: Glucagone</h3>
<h4 className="text-xl font-serif text-slate-900 mb-2">L'Acceleratore</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
<span className="font-bold">IL GAME CHANGER.</span> Mentre gli altri farmaci rallentano il metabolismo, questo lo accelera. Bruci calorie anche dormendo.
                </p>
</div>
</div>
</section>

<section className="py-12 px-5 bg-slate-50">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-8 font-semibold">Cosa aspettarti</h2>
<div className="relative border-l-2 border-teal-200 ml-4 space-y-10 pl-8 pb-4">

<div className="relative">
<span className="absolute -left-[41px] top-1 w-6 h-6 bg-teal-600 rounded-full border-4 border-slate-50"></span>
<h3 className="font-bold text-slate-900 text-lg">Settimana 1: Il Silenzio</h3>
<p className="text-slate-600 text-sm mt-2">
                        Il Food Noise crolla. Passi davanti al frigorifero e non ti viene voglia di aprirlo.
                    </p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 w-6 h-6 bg-teal-400 rounded-full border-4 border-slate-50"></span>
<h3 className="font-bold text-slate-900 text-lg">Settimana 3: Lo Sblocco</h3>
<p className="text-slate-600 text-sm mt-2">
                        I primi 2-4 kg se ne vanno. I pantaloni sono meno stretti. Non è suggestione.
                    </p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-1 w-6 h-6 bg-teal-200 rounded-full border-4 border-slate-50"></span>
<h3 className="font-bold text-slate-900 text-lg">Settimana 8: La Trasformazione</h3>
<p className="text-slate-600 text-sm mt-2">
                        Ti guardi allo specchio e ti riconosci. La gente inizia a chiedere cosa hai fatto.
                    </p>
</div>
</div>

<label className="custom-checkbox flex items-center gap-4 p-4 mt-8 bg-white border border-slate-200 rounded-lg cursor-pointer shadow-sm">
<input className="hidden" onchange="this.parentElement.classList.toggle('bg-teal-50');" type="checkbox"/>
<div className="w-6 h-6 rounded border-2 border-slate-300 flex items-center justify-center bg-white transition-colors">
<svg className="hidden w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-slate-700 font-medium text-sm">Sì, voglio sentire questo silenzio</span>
</label>
</div>
</section>

<section className="py-12 px-5 bg-white">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-2 font-semibold">Storie di chi ce l'ha fatta</h2>
<p className="text-slate-500 text-sm mb-8">Punteggi alti come il tuo.</p>

<div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl mb-6">
<div className="flex text-amber-500 mb-3 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">"Il mio medico non ci credeva"</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                    "Colesterolo crollato. Glicemia perfetta. 12kg persi in 8 settimane. Era scettico, poi ha visto gli esami e non ha potuto dire niente."
                </p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="text-xs text-slate-500">
<span className="font-bold text-slate-900">Laura B.</span>, 49 anni
                    </div>
<div className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold">
                        -12 KG in 8 Settimane
                    </div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl">
<div className="flex text-amber-500 mb-3 gap-1">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">"Ho pianto per i jeans"</h3>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                    "Li guardavo ogni giorno. Dopo 6 settimane li ho provati. Sono entrati. Mia figlia mi ha chiesto cosa fosse successo. Le ho detto: 'Mamma sta tornando'."
                </p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="text-xs text-slate-500">
<span className="font-bold text-slate-900">Giovanna S.</span>, 55 anni
                    </div>
<div className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold">
                        -11 KG in 8 Settimane
                    </div>
</div>
</div>
</div>
</section>

<section className="py-10 px-5 bg-amber-50 border-y-2 border-amber-200">
<div className="max-w-2xl mx-auto text-center">
<div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-4 border-2 border-amber-200">
<span className="iconify" data-icon="lucide:shield-check" data-width="32"></span>
</div>
<h2 className="font-serif text-2xl text-slate-900 font-bold mb-4">Prima di vedere il prezzo...</h2>
<p className="text-slate-700 text-base leading-relaxed mb-4">
                Se non funziona, <strong className="text-slate-900">non paghi.</strong><br/>
                Hai 30 giorni. Se non senti il Food Noise sparire, ti rimborsiamo tutto. Anche se la fiala è vuota.
            </p>
<p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Il rischio è zero.</p>
</div>
</section>

<section className="py-12 px-5 bg-white">
<div className="max-w-2xl mx-auto space-y-8">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
<h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:package"></span> Cosa ricevi a casa
                </h3>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex gap-3"><span className="iconify text-teal-600" data-icon="lucide:check"></span> Forever Slim (Retatrutide 10mg)</li>
<li className="flex gap-3"><span className="iconify text-teal-600" data-icon="lucide:check"></span> Acqua Batteriostatica</li>
<li className="flex gap-3"><span className="iconify text-teal-600" data-icon="lucide:check"></span> Guida al Protocollo passo-passo</li>
<li className="flex gap-3 text-slate-500 mt-2 pt-2 border-t border-slate-200"><span className="iconify" data-icon="lucide:eye-off"></span> Pacco 100% anonimo</li>
</ul>
</div>
</div>
</section>

<section className="py-16 px-5 bg-gradient-to-b from-white to-slate-50" id="pricing">
<div className="max-w-4xl mx-auto">
<h2 className="font-serif text-3xl text-slate-900 text-center mb-2 font-semibold">Scegli il tuo Protocollo</h2>
<div className="text-center mb-10">
<span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">🔥 Solo 23 kit rimasti</span>
</div>
<div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 md:items-end">

<div className="border border-slate-200 bg-white rounded-2xl p-6 relative">
<h3 className="text-slate-500 font-bold tracking-wide text-sm uppercase mb-2">Prova</h3>
<p className="text-sm text-slate-400 mb-4">1 Kit • 4-6 settimane</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-3xl font-serif font-bold text-slate-900">€197</span>
<span className="text-sm text-slate-400 line-through">€250</span>
</div>
<ul className="space-y-3 text-sm text-slate-600 mb-6">
<li className="flex gap-2"><span className="iconify text-teal-500" data-icon="lucide:check"></span> Spedizione Gratuita</li>
<li className="flex gap-2"><span className="iconify text-teal-500" data-icon="lucide:check"></span> Guida Base</li>
</ul>
<a className="block w-full py-3 border-2 border-teal-600 text-teal-700 font-bold rounded-xl text-center hover:bg-teal-50 transition-colors" href="#">SCEGLI PROVA</a>
</div>

<div className="border-2 border-teal-500 bg-teal-50/50 rounded-2xl p-6 relative shadow-2xl transform scale-105 z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md w-max">
                        ⭐ PIÙ SCELTO
                    </div>
<h3 className="text-teal-700 font-bold tracking-wide text-sm uppercase mb-2">Trasformazione</h3>
<p className="text-sm text-slate-500 mb-4">3 Kit • 12-18 settimane</p>
<div className="flex flex-col mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-serif font-bold text-slate-900">€399</span>
<span className="text-sm text-slate-400 line-through">€750</span>
</div>
<span className="text-amber-600 font-bold text-sm mt-1">Solo €133/mese</span>
<span className="text-xs text-green-600 bg-green-100 w-max px-2 py-0.5 rounded mt-2">Risparmi €351 (47%)</span>
</div>
<ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium">
<li className="flex gap-2"><span className="iconify text-teal-600" data-icon="lucide:check"></span> Tutto del piano base</li>
<li className="flex gap-2"><span className="iconify text-teal-600" data-icon="lucide:check"></span> <strong>Supporto Prioritario</strong></li>
<li className="flex gap-2"><span className="iconify text-teal-600" data-icon="lucide:check"></span> Accesso Gruppo VIP</li>
</ul>
<button className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-amber-500/40 transition-all active:scale-95">
                        SCEGLI TRASFORMAZIONE →
                    </button>
<p className="text-[10px] text-center text-slate-400 mt-3">Garanzia 30 giorni soddisfatta o rimborsata</p>
</div>

<div className="border border-slate-200 bg-white rounded-2xl p-6 relative opacity-80 hover:opacity-100 transition-opacity">
<h3 className="text-slate-500 font-bold tracking-wide text-sm uppercase mb-2">Totale</h3>
<p className="text-sm text-slate-400 mb-4">6 Kit • 6-9 mesi</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-3xl font-serif font-bold text-slate-900">€699</span>
<span className="text-sm text-slate-400 line-through">€1500</span>
</div>
<ul className="space-y-3 text-sm text-slate-600 mb-6">
<li className="flex gap-2"><span className="iconify text-teal-500" data-icon="lucide:check"></span> Max Risparmio (53%)</li>
<li className="flex gap-2"><span className="iconify text-teal-500" data-icon="lucide:check"></span> Consulenza dedicata</li>
</ul>
<a className="block w-full py-3 border-2 border-teal-600 text-teal-700 font-bold rounded-xl text-center hover:bg-teal-50 transition-colors" href="#">SCEGLI TOTALE</a>
</div>
</div>
<p className="text-center text-xs text-slate-500 mt-8 max-w-md mx-auto">
                💡 L'87% delle clienti con il tuo punteggio sceglie "Trasformazione" per risultati completi e stabili.
            </p>
</div>
</section>

<section className="py-12 px-5 bg-white">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-2xl text-slate-900 mb-8 font-semibold">Domande Frequenti</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-lg p-4 open:bg-white open:ring-1 open:ring-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-800">
<span>È legale in Italia?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-600 text-sm mt-3 group-open:animate-fadeIn">
                        Assolutamente sì. Il Retatrutide è un peptide di ricerca legale al 100% per l'acquisto e il possesso in Italia e Europa. Non richiede ricetta medica.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg p-4 open:bg-white open:ring-1 open:ring-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-800">
<span>E se smetto riprendo peso?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-600 text-sm mt-3 group-open:animate-fadeIn">
                        No. A differenza delle diete yo-yo, Forever Slim "rieduca" il tuo metabolismo. Una volta raggiunto l'obiettivo, il corpo tende a mantenere il nuovo peso di riferimento.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg p-4 open:bg-white open:ring-1 open:ring-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-800">
<span>Come si assume?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-600 text-sm mt-3 group-open:animate-fadeIn">
                        Una volta a settimana. È semplicissimo. Riceverai una guida video passo-passo. Ci vogliono 2 minuti.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-16 px-5 bg-slate-900 text-white text-center">
<div className="max-w-xl mx-auto border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
<p className="font-serif italic text-lg md:text-xl text-gray-300 leading-loose">
                "Immagina una mattina tra 8 settimane. Ti svegli leggera. Vai allo specchio. Ti piace quello che vedi. Quella voce che chiedeva 'cosa mangio?' non c'è più. È silenzio. <br/> <span className="text-white font-semibold">Quella puoi essere tu.</span>"
            </p>
</div>
</section>

<section className="py-12 px-5 bg-white mb-20 md:mb-0">
<div className="max-w-2xl mx-auto text-center">
<h2 className="font-serif text-3xl text-slate-900 font-bold mb-4">Smetti di lottare.</h2>
<p className="text-slate-600 mb-8">
                Hai la garanzia. Hai lo sconto. Hai visto le prove. <br/>
                L'unica cosa che puoi perdere sono i kg di troppo.
            </p>
<a className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xl py-5 px-6 rounded-xl shadow-xl shadow-amber-500/30 transition-transform active:scale-95" href="#pricing">
                ORDINA FOREVER SLIM ORA
            </a>
<div className="flex justify-center gap-4 mt-6 text-xs text-slate-400 grayscale opacity-70">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:shield"></span> Garanzia 30gg</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:lock"></span> Pagamento Sicuro</span>
</div>
</div>
</section>

<footer className="bg-slate-50 py-8 text-center text-xs text-slate-400 border-t border-slate-200">
<p className="mb-2">© 2025 Forever Slim. Tutti i diritti riservati.</p>
<p>Disclaimer: I risultati possono variare. Questo prodotto non intende diagnosticare, trattare o curare malattie.</p>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 md:hidden flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-medium">Forever Slim</span>
<div className="flex items-baseline gap-1">
<span className="font-bold text-slate-900">€133</span>
<span className="text-[10px] text-slate-400">/mese</span>
</div>
</div>
<a className="flex-1 bg-amber-500 text-white font-bold text-center py-3 rounded-lg shadow-md active:bg-amber-600" href="#pricing">
            ORDINA ORA
        </a>
</div>

<div className="fixed bottom-24 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-80 bg-white border-l-4 border-green-500 shadow-xl rounded-r-lg p-4 transform translate-y-20 opacity-0 transition-all duration-500 z-50 flex items-start gap-3 pointer-events-none" id="toast">
<div className="bg-green-100 rounded-full p-1 mt-1">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<p className="text-xs font-bold text-slate-800" id="toast-title">Maria da Roma</p>
<p className="text-xs text-slate-500" id="toast-desc">Ha appena ordinato il Kit Trasformazione</p>
<p className="text-[10px] text-slate-400 mt-1">2 minuti fa</p>
</div>
</div>

<div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[60] hidden items-center justify-center p-4" id="exit-popup">
<div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="document.getElementById('exit-popup').style.display='none'">
<span className="iconify" data-icon="lucide:x"></span>
</button>
<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
<span className="iconify" data-icon="lucide:hand" data-width="24"></span>
</div>
<h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Aspetta — Te ne vai?</h3>
<p className="text-sm text-slate-600 mb-6">Capisco i dubbi. Ma il tuo punteggio di 78/100 è preoccupante. Non lasciare che un'altra settimana passi senza agire.</p>
<a className="block w-full bg-amber-500 text-white font-bold py-3 rounded-xl mb-3 shadow-lg" href="#pricing" onclick="document.getElementById('exit-popup').style.display='none'">
                VEDI L'OFFERTA SPECIALE
            </a>
<button className="text-xs text-slate-400 underline" onclick="document.getElementById('exit-popup').style.display='none'">
                No grazie, preferisco continuare a lottare
            </button>
</div>
</div>


    </>
  );
}
