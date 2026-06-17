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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="index.html">
<div className="w-8 h-8 bg-lime-brand rounded-lg flex items-center justify-center group-hover:scale-95 transition-transform">
<i className="w-5 h-5 text-black fill-current" data-lucide="zap"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">Squadd</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Funzionalità</a>
<a className="text-white transition-colors" href="#">Prezzi</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-zinc-300 hidden sm:block" href="#">Login</a>
<a className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all" href="#">
                    Registrati
                </a>
</div>
</div>
</nav>

<header className="pt-40 pb-20 px-6 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-brand/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Piani semplici per <br/>scalare il tuo business.
            </h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                Inizia gratis, paga mentre cresci. Nessun contratto a lungo termine. <br/>Cambia o cancella il piano in qualsiasi momento.
            </p>

<div className="flex items-center justify-center gap-4 mb-8">
<span className="text-sm font-medium text-zinc-400">Mensile</span>
<label className="relative inline-flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-14 h-8 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-lime-brand after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all border border-zinc-700 peer-checked:bg-zinc-800"></div>
</label>
<span className="text-sm font-medium text-white">Annuale <span className="text-lime-brand text-xs ml-1.5 font-normal tracking-wide bg-lime-brand/10 px-2 py-0.5 rounded-full border border-lime-brand/20">-20%</span></span>
</div>
</div>
</header>

<section className="pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full hover:border-zinc-700 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-sm text-zinc-500 h-10">Perfetto per solopreneur e liberi professionisti che iniziano.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">€49</span>
<span className="text-zinc-500">/mese</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-all border border-white/5 mb-8">
                    Inizia con Starter
                </button>
<div className="space-y-4">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Include:</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> 1.000 Contatti</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> 1 Utente</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Email Marketing Base</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> 1 Funnel / Sito Web</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Calendario Appuntamenti</li>
</ul>
</div>
</div>

<div className="bg-black border border-lime-brand rounded-3xl p-8 flex flex-col h-full relative shadow-[0_0_50px_rgba(204,255,0,0.15)] scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-brand text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Più Popolare
                </div>
<div className="mb-8">
<h3 className="text-lg font-medium text-lime-brand mb-2">Growth</h3>
<p className="text-sm text-zinc-400 h-10">Per aziende in crescita che necessitano di automazione seria.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white tracking-tight">€97</span>
<span className="text-zinc-500">/mese</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-lime-brand text-black text-sm font-semibold hover:bg-[#b3e600] transition-all mb-8 shadow-lg shadow-lime-brand/20">
                    Prova Growth Gratis
                </button>
<div className="space-y-4">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tutto in Starter, più:</p>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> <span className="font-medium text-white">Contatti Illimitati</span></li>
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> 5 Utenti Team</li>
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> Automazioni Avanzate</li>
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> Funnel &amp; Siti Illimitati</li>
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> Area Membri &amp; Corsi</li>
<li className="flex gap-3"><i className="w-4 h-4 text-lime-brand" data-lucide="check"></i> Integrazione WhatsApp API</li>
</ul>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full hover:border-zinc-700 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Agency</h3>
<p className="text-sm text-zinc-500 h-10">Per agenzie che gestiscono account per i propri clienti.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">€297</span>
<span className="text-zinc-500">/mese</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all mb-8">
                    Contatta Vendite
                </button>
<div className="space-y-4">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tutto in Growth, più:</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Sub-account illimitati</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> White Label (Tuo Brand)</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Supporto Prioritario VIP</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> API &amp; Webhooks dedicati</li>
<li className="flex gap-3"><i className="w-4 h-4 text-white" data-lucide="check"></i> Consulente dedicato</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 text-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">Confronto dettagliato funzionalità</h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-200">
<th className="py-6 px-4 text-sm font-medium text-zinc-500 w-1/4">Funzionalità</th>
<th className="py-6 px-4 text-lg font-semibold text-zinc-900 w-1/4">Starter</th>
<th className="py-6 px-4 text-lg font-semibold text-lime-600 w-1/4">Growth</th>
<th className="py-6 px-4 text-lg font-semibold text-zinc-900 w-1/4">Agency</th>
</tr>
</thead>
<tbody className="text-sm text-zinc-600">

<tr className="bg-zinc-50/50">
<td className="py-3 px-4 text-xs font-bold text-zinc-400 uppercase tracking-wider mt-8" colspan="4">Generale</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Contatti CRM</td>
<td className="py-4 px-4">1.000</td>
<td className="py-4 px-4 font-medium text-black">Illimitati</td>
<td className="py-4 px-4">Illimitati</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Utenti Team</td>
<td className="py-4 px-4">1</td>
<td className="py-4 px-4 font-medium text-black">5</td>
<td className="py-4 px-4">Illimitati</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Domini personalizzati</td>
<td className="py-4 px-4">1</td>
<td className="py-4 px-4 font-medium text-black">Illimitati</td>
<td className="py-4 px-4">Illimitati</td>
</tr>

<tr className="bg-zinc-50/50">
<td className="py-3 px-4 text-xs font-bold text-zinc-400 uppercase tracking-wider" colspan="4">Automazione &amp; Marketing</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Email Marketing</td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-lime-600" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">SMS Marketing (bidirezionale)</td>
<td className="py-4 px-4 text-zinc-300"><i className="w-4 h-4" data-lucide="minus"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-lime-600" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Workflow Builder (Automazioni)</td>
<td className="py-4 px-4 text-zinc-500">Base</td>
<td className="py-4 px-4 font-medium text-black">Avanzato</td>
<td className="py-4 px-4">Avanzato</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">AI Content Generator</td>
<td className="py-4 px-4 text-zinc-300"><i className="w-4 h-4" data-lucide="minus"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-lime-600" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
</tr>

<tr className="bg-zinc-50/50">
<td className="py-3 px-4 text-xs font-bold text-zinc-400 uppercase tracking-wider" colspan="4">Vendite &amp; Pipeline</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Pipeline Opportunità</td>
<td className="py-4 px-4">1 Pipeline</td>
<td className="py-4 px-4 font-medium text-black">Illimitate</td>
<td className="py-4 px-4">Illimitate</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Prenotazione Appuntamenti</td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-lime-600" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Integrazione Stripe/Paypal</td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-lime-600" data-lucide="check"></i></td>
<td className="py-4 px-4"><i className="w-4 h-4 text-zinc-900" data-lucide="check"></i></td>
</tr>

<tr className="bg-zinc-50/50">
<td className="py-3 px-4 text-xs font-bold text-zinc-400 uppercase tracking-wider" colspan="4">Supporto</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Tipo di Supporto</td>
<td className="py-4 px-4">Email (24-48h)</td>
<td className="py-4 px-4 font-medium text-lime-700">Live Chat &amp; Zoom</td>
<td className="py-4 px-4">Dedicato VIP 24/7</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
<td className="py-4 px-4 font-medium text-zinc-900">Onboarding</td>
<td className="py-4 px-4 text-zinc-500">Self-service</td>
<td className="py-4 px-4 font-medium text-black">Video Academy</td>
<td className="py-4 px-4">Setup Done-For-You</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 border-t border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Domande Frequenti</h2>
<div className="space-y-8">
<div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Posso cambiare piano in qualsiasi momento?</h4>
<p className="text-zinc-500 leading-relaxed">Assolutamente sì. Puoi fare upgrade o downgrade del tuo piano direttamente dalla dashboard. Le modifiche saranno effettive immediatamente con un calcolo pro-rata.</p>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">C'è un costo di setup iniziale?</h4>
<p className="text-zinc-500 leading-relaxed">No. Non ci sono costi nascosti o di setup per i piani Starter e Growth. Per il piano Agency, se richiedi il servizio "Done For You", verrà preventivato a parte.</p>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Cosa succede se supero il limite di contatti?</h4>
<p className="text-zinc-500 leading-relaxed">Il piano Starter ha un limite di 1.000 contatti. Se superi questa soglia, ti verrà chiesto di passare al piano Growth che offre contatti illimitati.</p>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Offrite rimborsi?</h4>
<p className="text-zinc-500 leading-relaxed">Offriamo una garanzia "Soddisfatti o Rimborsati" di 14 giorni sul primo pagamento. Se Squadd non fa per te, ti rimborsiamo senza fare domande.</p>
</div>
</div>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-lime-brand rounded flex items-center justify-center">
<i className="w-3 h-3 text-black fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Squadd</span>
</div>
<p className="text-zinc-500">L'ecosistema completo per l'automazione del tuo business.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Prodotto</h4>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-lime-brand transition-colors" href="#">Funzionalità</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Integrazioni</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Prezzi</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Risorse</h4>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-lime-brand transition-colors" href="#">Community</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Stato Sistemi</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Azienda</h4>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-lime-brand transition-colors" href="#">Chi Siamo</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Contatti</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-lime-brand transition-colors" href="#">Termini</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
<p>© 2024 Squadd Inc. Tutti i diritti riservati.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</footer>


    </>
  );
}
