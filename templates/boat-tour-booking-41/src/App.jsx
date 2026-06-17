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
      

<a className="fixed bottom-24 md:bottom-8 right-4 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-green-900/20 transition-transform hover:scale-105 active:scale-95 group md:w-auto md:h-auto md:py-3 md:px-5 md:rounded-full" href="https://wa.me/390000000000">
<span className="iconify" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="28"></span>
<span className="font-medium text-sm hidden md:inline-block md:ml-2">WhatsApp</span>
</a>

<nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

<a className="flex flex-col leading-none" href="#">
<span className="text-lg font-semibold tracking-tight text-slate-900 uppercase">
                    Arianna<span className="text-blue-600">.</span>Escursioni
                </span>
<span className="text-[10px] text-slate-500 tracking-widest font-medium uppercase">Marina Corta, Lipari</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#tours">I Nostri Tour</a>
<a className="hover:text-blue-600 transition-colors" href="#packages">Pacchetti</a>
<a className="hover:text-blue-600 transition-colors" href="#about">Chi Siamo</a>
</div>

<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-semibold text-white transition-colors bg-slate-900 rounded-lg hover:bg-slate-800 tracking-wide uppercase" href="#contact">
                Prenota Ora
            </a>

<button className="md:hidden text-slate-900 p-2">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>


<header className="relative w-full overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Barche a Marina Corta Lipari" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-16 md:py-32 flex flex-col items-center md:items-start text-center md:text-left">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-medium mb-6">
<span className="iconify text-blue-400" data-icon="lucide:anchor" data-width="14"></span>
                Partenze da Marina Corta dal 2005
            </div>

<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl">
                Escursioni in Barca alle <br className="hidden md:block"/> Isole Eolie da Lipari
            </h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
                Vivi il mare autentico. Tour giornalieri per Stromboli, Panarea, Vulcano, Salina, Alicudi e Filicudi con guide locali esperte.
            </p>
<div className="flex flex-col w-full sm:flex-row gap-3 sm:w-auto">
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-900/30" href="#tours">
                    Scegli la tua escursione
                </a>
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold text-white transition-colors bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20" href="https://wa.me/390000000000">
                    Chatta su WhatsApp
                </a>
</div>
</div>
</header>

<section className="bg-white border-b border-slate-100 py-6">
<div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 text-slate-900 rounded-lg border border-slate-100">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Partenza</p>
<p className="text-sm font-medium text-slate-900">Marina Corta</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 text-slate-900 rounded-lg border border-slate-100">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Affidabilità</p>
<p className="text-sm font-medium text-slate-900">Famiglia locale</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 text-slate-900 rounded-lg border border-slate-100">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Gruppi</p>
<p className="text-sm font-medium text-slate-900">Piccoli &amp; Privati</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-50 text-slate-900 rounded-lg border border-slate-100">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Stagione</p>
<p className="text-sm font-medium text-slate-900">Apr - Ott</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white" id="tours">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="mb-10 md:text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Le Nostre Escursioni Principali</h2>
<p className="text-slate-500 text-sm md:text-base">Prenota il tuo posto a bordo. Posti limitati per garantire il massimo comfort e sicurezza.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<article className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Stromboli sciara del fuoco by night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wide">
                            Best Seller
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 12:00 - 22:00</span>
<span>•</span>
<span>Lun, Mer, Ven</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                            Panarea &amp; Stromboli "By Night"
                        </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Visita Panarea e ammira le eruzioni dello Stromboli dalla barca sotto le stelle.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-medium">Prezzo</span>
<span className="text-lg font-bold text-slate-900">€45</span>
</div>
<button className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                                Dettagli Tour
                            </button>
</div>
</div>
</article>

<article className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Salina Pollara beach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 10:00 - 17:00</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                            Lipari &amp; Salina: Mare &amp; Spiagge
                        </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Cave di Pomice, Baia di Pollara e soste bagno nelle acque più turchesi delle Eolie.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-medium">Prezzo</span>
<span className="text-lg font-bold text-slate-900">€40</span>
</div>
<button className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                                Dettagli Tour
                            </button>
</div>
</div>
</article>

<article className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Vulcano trekking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 09:30 - 16:30</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                            Vulcano Relax &amp; Trekking
                        </h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Perfetto per chi vuole scalare il cratere o rilassarsi nei fanghi termali. Include giro dell'isola.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-medium">Prezzo</span>
<span className="text-lg font-bold text-slate-900">€35</span>
</div>
<button className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                                Dettagli Tour
                            </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 text-white overflow-hidden relative" id="packages">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Pacchetto Settimanale 7 Isole</h2>
<p className="text-slate-400 text-sm max-w-md">Vuoi vedere tutto? Risparmia prenotando il pacchetto completo. Include Lipari, Salina, Panarea, Stromboli, Vulcano, Alicudi e Filicudi.</p>
</div>
<div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex flex-col items-center min-w-[280px]">
<span className="text-xs text-blue-200 font-medium uppercase tracking-widest mb-1">Miglior Prezzo</span>
<div className="text-3xl font-bold mb-4">€180 <span className="text-sm font-normal text-slate-300">/persona</span></div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                    Richiedi disponibilità
                </button>
</div>
</div>
</section>

<div className="w-full h-16 bg-slate-100 border-y border-slate-200 flex items-center justify-center">
<p className="text-xs text-slate-500 font-mono">--- MOCKUP TRANSITION: DEDICATED TOUR PAGE VIEW ---</p>
</div>

<main className="bg-white min-h-screen">

<div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
<nav aria-label="Breadcrumb" className="flex text-[10px] md:text-xs text-slate-500 uppercase tracking-wide font-medium">
<ol className="inline-flex items-center space-x-1 md:space-x-2">
<li className="inline-flex items-center"><a className="hover:text-slate-900" href="#">Home</a></li>
<li><span className="text-slate-300">/</span></li>
<li><a className="hover:text-slate-900" href="#">Escursioni</a></li>
<li><span className="text-slate-300">/</span></li>
<li aria-current="page"><span className="text-slate-900">Panarea e Stromboli</span></li>
</ol>
</nav>
</div>

<div className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
<div className="flex flex-col md:flex-row gap-8 items-start">

<div className="flex-1">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4 mt-2">
                        Panarea &amp; Stromboli "By Night" <br className="hidden md:block"/> con Sciara del Fuoco
                    </h1>
<p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mb-6">
                        L'escursione più suggestiva. Esplora i vicoli chic di Panarea nel pomeriggio e lasciati incantare dalle esplosioni vulcaniche dello Stromboli al tramonto dalla nostra barca.
                    </p>

<div className="flex flex-wrap gap-3 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:clock" data-width="14"></span> 10 Ore
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
<span className="iconify text-blue-600" data-icon="lucide:calendar" data-width="14"></span> Lun, Mer, Ven
                        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-green-50 border border-green-100 text-xs font-medium text-green-700">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Conferma immediata
                        </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

<div className="lg:col-span-2 space-y-12">

<div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden h-64 md:h-80">
<img alt="Stromboli night" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="grid grid-rows-2 gap-2 h-full">
<img alt="Panarea village" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Boat view" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<section>
<h2 className="text-xl font-semibold text-slate-900 mb-6">Programma del Tour</h2>
<div className="relative border-l border-slate-200 ml-3 space-y-8 pb-2">
<div className="relative pl-8">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
<h3 className="text-sm font-semibold text-slate-900">12:00 - Partenza da Marina Corta</h3>
<p className="text-sm text-slate-500 mt-1">Imbarco 15 minuti prima. Navigazione costiera verso Panarea con vista su Calajunco.</p>
</div>
<div className="relative pl-8">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<h3 className="text-sm font-semibold text-slate-900">Sosta a Panarea (2 ore)</h3>
<p className="text-sm text-slate-500 mt-1">Tempo libero a terra. Consigliamo la visita al villaggio preistorico o un aperitivo al Raya.</p>
</div>
<div className="relative pl-8">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<h3 className="text-sm font-semibold text-slate-900">Tramonto a Stromboli</h3>
<p className="text-sm text-slate-500 mt-1">Arrivo a Stromboli. Sosta a terra per cenare o visitare il borgo di San Vincenzo.</p>
</div>
<div className="relative pl-8">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-white"></span>
<h3 className="text-sm font-semibold text-slate-900">Sciara del Fuoco</h3>
<p className="text-sm text-slate-500 mt-1">Navigazione sotto la Sciara del Fuoco per ammirare le esplosioni vulcaniche dal mare.</p>
</div>
<div className="relative pl-8">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-900 ring-4 ring-white"></span>
<h3 className="text-sm font-semibold text-slate-900">22:00 - Rientro a Lipari</h3>
</div>
</div>
</section>

<section className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h2 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Cosa è incluso</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span> Trasporto in barca A/R</li>
<li className="flex items-center gap-2"><span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span> Soste a terra (Panarea e Stromboli)</li>
<li className="flex items-center gap-2"><span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span> Equipaggio locale esperto</li>
<li className="flex items-center gap-2"><span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span> Assicurazione</li>
<li className="flex items-center gap-2 opacity-50"><span className="iconify text-red-400" data-icon="lucide:x" data-width="16"></span> Cibo e bevande</li>
<li className="flex items-center gap-2 opacity-50"><span className="iconify text-red-400" data-icon="lucide:x" data-width="16"></span> Tassa di sbarco (€5)</li>
</ul>
</section>
</div>

<div className="hidden lg:block">
<div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
<div className="flex items-end gap-2 mb-6">
<span className="text-3xl font-bold text-slate-900">€45</span>
<span className="text-sm text-slate-500 mb-1">per persona</span>
</div>
<form className="space-y-4">

<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Data</label>
<select className="w-full text-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 py-2.5">
<option>Seleziona una data...</option>
<option>Domani, 15 Luglio</option>
<option>Lun, 17 Luglio</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Ospiti</label>
<select className="w-full text-sm rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 py-2.5">
<option>2 Adulti</option>
<option>1 Adulto</option>
<option>Family (2+2)</option>
</select>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg shadow-md transition-all active:scale-[0.98]" type="button">
                                Prenota Ora
                            </button>
<p className="text-center text-[10px] text-slate-400">Nessun pagamento anticipato richiesto.</p>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
<div className="relative flex justify-center text-xs"><span className="px-2 bg-white text-slate-400">oppure</span></div>
</div>
<a className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128c7e] font-medium py-2.5 rounded-lg border border-[#25D366]/20 transition-colors" href="https://wa.me/390000000000">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                                Scrivici su WhatsApp
                            </a>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-12 pb-32 md:pb-12 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
<div className="md:col-span-2">
<span className="text-lg font-bold text-white tracking-tighter uppercase block mb-4">Arianna<span className="text-blue-500">.</span>Escursioni</span>
<p className="max-w-xs leading-relaxed">Il modo migliore per scoprire le Isole Eolie. Servizio professionale, sicurezza e passione dal 2005.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Contatti</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Marina Corta, Lipari</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:phone" data-width="14"></span> +39 000 000 0000</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:mail" data-width="14"></span> info@ariannaescursioni.it</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Link</h4>
<ul className="space-y-2">
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Cookie Policy</a></li>
<li><a className="hover:text-white" href="#">Termini e Condizioni</a></li>
</ul>
</div>
</div>
</footer>

<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 flex items-center gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] safe-area-pb">
<div className="flex flex-col">
<span className="text-[10px] text-slate-500 uppercase font-bold tracking-wide">Totale</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-bold text-slate-900">€45</span>
<span className="text-xs text-slate-400 font-medium">/pax</span>
</div>
</div>
<button className="flex-1 bg-slate-900 text-white font-semibold h-11 rounded-lg text-sm shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-transform">
            Prenota Ora
        </button>
</div>

    </>
  );
}
