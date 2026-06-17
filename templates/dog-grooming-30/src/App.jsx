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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="bg-teal-600 text-white p-1.5 rounded-lg">
<iconify-icon icon="lucide:paw-print" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-stone-900 font-geist">BauBello</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors font-geist" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors font-geist" href="#servizi">Servizi</a>
<a className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors font-geist" href="#prezzi">Prezzi</a>
<a className="text-sm font-medium text-stone-600 hover:text-teal-600 transition-colors font-geist" href="#chi-siamo">Chi Siamo</a>
<a className="bg-stone-900 text-white hover:bg-stone-800 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md font-geist" href="#contatti">
                        Prenota Ora
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-600 hover:text-stone-900 focus:outline-none p-2">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-stone-50 to-stone-50"></div>

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-center md:text-left space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium font-geist">
<iconify-icon icon="lucide:star" strokeWidth="1.5" width="14"></iconify-icon>
                    Nuovi trattamenti spa disponibili
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.1] font-playfair font-medium">
                    Cura, amore e <span className="text-teal-600 font-playfair font-medium">benessere</span> per il tuo cane.
                </h1>
<p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-geist">
                    Non solo toelettatura, ma un'esperienza rilassante. Utilizziamo prodotti naturali e tecniche gentili per far splendere il tuo amico a quattro zampe.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-teal-200 hover:-translate-y-0.5 font-geist" href="#contatti">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                        Prenota Appuntamento
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 px-6 py-3 rounded-lg font-medium transition-all shadow-sm font-geist" href="#servizi">
                        Scopri i Servizi
                    </a>
</div>
<div className="pt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-stone-500">
<div className="flex items-center gap-1">
<iconify-icon className="text-teal-600" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="font-geist">Prodotti Bio</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-teal-600" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="font-geist">Ambiente Sanificato</span>
</div>
</div>
</div>
<div className="flex-1 relative w-full max-w-md md:max-w-none">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-stone-200 border border-stone-100 relative z-10">

<img alt="Cane felice dopo toelettatura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-100 rounded-full blur-xl -z-10"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full blur-xl -z-10"></div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100" id="servizi">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight text-stone-900 mb-4 font-playfair font-medium">I Nostri Servizi</h2>
<p className="text-stone-600 font-geist">Offriamo trattamenti completi personalizzati in base alla razza, al tipo di pelo e alle esigenze specifiche del tuo cane.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 font-geist">Bagno &amp; Asciugatura</h3>
<p className="text-sm text-stone-500 leading-relaxed font-geist">
                        Shampoo specifici per ogni tipo di manto, massaggio rilassante e asciugatura delicata a mano senza stress.
                    </p>
</div>

<div className="group p-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:scissors" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 font-geist">Tosatura &amp; Styling</h3>
<p className="text-sm text-stone-500 leading-relaxed font-geist">
                        Taglio a forbice commerciale o da esposizione, tosatura igienica e stripping per razze a pelo duro.
                    </p>
</div>

<div className="group p-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 font-geist">Igiene Completa</h3>
<p className="text-sm text-stone-500 leading-relaxed font-geist">
                        Taglio unghie, pulizia profonda delle orecchie, spremitura ghiandole perianali e igiene dentale base.
                    </p>
</div>

<div className="group p-6 bg-stone-50 rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:heart-pulse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 font-geist">Trattamenti SPA</h3>
<p className="text-sm text-stone-500 leading-relaxed font-geist">
                        Maschere nutrienti all'ozono, bagni terapeutici per pelli sensibili, cuccioli e cani anziani.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="prezzi">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight text-stone-900 mb-4 font-playfair font-medium">Listino Prezzi Trasparente</h2>
<p className="text-stone-600 font-geist">Prezzi indicativi basati sulla taglia. Il costo finale può variare in base alle condizioni del pelo (nodi, feltri).</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6 border-b border-stone-100 bg-stone-50/50">
<h3 className="text-xl font-medium text-stone-900 font-geist">Taglia Piccola</h3>
<p className="text-sm text-stone-500 mt-1 font-geist">Fino a 10kg (es. Barboncino Toy, Maltese)</p>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Bagno &amp; Asciugatura</span>
<span className="font-semibold text-stone-900 font-geist">da €25</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Toelettatura Completa</span>
<span className="font-semibold text-stone-900 font-geist">da €40</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Stripping</span>
<span className="font-semibold text-stone-900 font-geist">da €50</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Taglio Unghie</span>
<span className="font-semibold text-stone-900 font-geist">€5</span>
</div>
</div>
<div className="p-6 pt-0">
<a className="block w-full text-center py-2 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium transition-colors font-geist" href="#contatti">Richiedi preventivo</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg border border-teal-100 ring-1 ring-teal-500/20 overflow-hidden relative">
<div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg font-geist">POPOLARE</div>
<div className="p-6 border-b border-stone-100 bg-teal-50/30">
<h3 className="text-xl font-medium text-stone-900 font-geist">Taglia Media</h3>
<p className="text-sm text-stone-500 mt-1 font-geist">10kg - 25kg (es. Cocker, Beagle)</p>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Bagno &amp; Asciugatura</span>
<span className="font-semibold text-stone-900 font-geist">da €35</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Toelettatura Completa</span>
<span className="font-semibold text-stone-900 font-geist">da €55</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Stripping</span>
<span className="font-semibold text-stone-900 font-geist">da €65</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Trattamento Ozonoterapia</span>
<span className="font-semibold text-stone-900 font-geist">+€15</span>
</div>
</div>
<div className="p-6 pt-0">
<a className="block w-full text-center py-2 px-4 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium transition-colors font-geist" href="#contatti">Richiedi preventivo</a>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6 border-b border-stone-100 bg-stone-50/50">
<h3 className="text-xl font-medium text-stone-900 font-geist">Taglia Grande</h3>
<p className="text-sm text-stone-500 mt-1 font-geist">Oltre 25kg (es. Golden, Pastore T.)</p>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Bagno &amp; Asciugatura</span>
<span className="font-semibold text-stone-900 font-geist">da €50</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Toelettatura Completa</span>
<span className="font-semibold text-stone-900 font-geist">da €75</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Stripping</span>
<span className="font-semibold text-stone-900 font-geist">da €90</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-geist">Slanatura intensiva</span>
<span className="font-semibold text-stone-900 font-geist">a orario</span>
</div>
</div>
<div className="p-6 pt-0">
<a className="block w-full text-center py-2 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium transition-colors font-geist" href="#contatti">Richiedi preventivo</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100" id="chi-siamo">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl tracking-tight text-stone-900 font-playfair font-medium">La Nostra Missione</h2>
<p className="text-stone-600 leading-relaxed font-geist">
                        Nati dalla passione per gli animali, BauBello è molto più di una toelettatura. È un luogo sicuro dove ogni cane viene trattato con pazienza, rispetto e amore.
                    </p>
<p className="text-stone-600 leading-relaxed font-geist">
                        Crediamo che una buona toelettatura parta dalla fiducia. Per questo dedichiamo tempo a conoscere il carattere del tuo cane prima di iniziare, riducendo l'ansia e trasformando il trattamento in un momento piacevole.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
<iconify-icon className="text-orange-600 mb-2" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-medium text-stone-900 text-sm font-geist">Personale Certificato</h4>
<p className="text-xs text-stone-500 mt-1 font-geist">Toelettatori diplomati ed esperti.</p>
</div>
<div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
<iconify-icon className="text-blue-600 mb-2" icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-medium text-stone-900 text-sm font-geist">Ambiente Familiare</h4>
<p className="text-xs text-stone-500 mt-1 font-geist">Nessuna gabbia, solo relax.</p>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-2 gap-4">
<img alt="Toelettatura cane" className="rounded-2xl shadow-lg mt-8 object-cover h-64 w-full" src="https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Lavaggio cane" className="rounded-2xl shadow-lg mb-8 object-cover h-64 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight text-center text-stone-900 mb-12 font-playfair font-medium">Cosa Dicono i Padroni</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-600 mb-4 font-geist">"Marco è fantastico! Il mio Golden Retriever ha sempre paura dell'acqua, ma qui è uscito felice e profumato. Servizio impeccabile."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500 font-geist">LC</div>
<span className="text-sm font-medium text-stone-900 font-geist">Laura C.</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-600 mb-4 font-geist">"Ho portato il mio Schnauzer per lo stripping. Lavoro eseguito a regola d'arte. Prezzi onesti per la qualità offerta."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500 font-geist">GR</div>
<span className="text-sm font-medium text-stone-900 font-geist">Giovanni R.</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star-half" width="16"></iconify-icon>
</div>
<p className="text-sm text-stone-600 mb-4 font-geist">"Ambiente pulitissimo e personale gentilissimo. Hanno usato prodotti delicati per la dermatite della mia cagnolina."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500 font-geist">EB</div>
<span className="text-sm font-medium text-stone-900 font-geist">Elena B.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100" id="contatti">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-8">
<div>
<h2 className="text-3xl tracking-tight text-stone-900 mb-4 font-playfair font-medium">Vieni a trovarci</h2>
<p className="text-stone-600 font-geist">Siamo aperti dal lunedì al sabato. Prenota il tuo appuntamento telefonicamente o compilando il modulo.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-teal-50 p-3 rounded-lg text-teal-600">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 font-geist">Indirizzo</h4>
<p className="text-sm text-stone-600 font-geist">Via dei Cuccioli 12, 00100 Roma (RM)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-teal-50 p-3 rounded-lg text-teal-600">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 font-geist">Contatti</h4>
<p className="text-sm text-stone-600 font-geist">+39 012 345 6789</p>
<p className="text-sm text-stone-600 font-geist">info@baubello.it</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-teal-50 p-3 rounded-lg text-teal-600">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900 font-geist">Orari</h4>
<p className="text-sm text-stone-600 font-geist">Lun - Ven: 09:00 - 18:30</p>
<p className="text-sm text-stone-600 font-geist">Sabato: 09:00 - 13:00</p>
<p className="text-sm text-stone-400 font-geist">Domenica Chiuso</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 text-sm">
<div className="text-center">
<iconify-icon className="mb-2 opacity-50" icon="lucide:map" width="32"></iconify-icon>
<p className="font-geist">Mappa Google Maps Integrata</p>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
<h3 className="text-xl font-medium text-stone-900 mb-6 font-geist">Richiedi Appuntamento</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist" htmlFor="nome">Nome</label>
<input className="w-full px-4 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm" id="nome" placeholder="Il tuo nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist" htmlFor="telefono">Telefono</label>
<input className="w-full px-4 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm" id="telefono" placeholder="Il tuo numero" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist" htmlFor="cane">Nome e Razza del Cane</label>
<input className="w-full px-4 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm" id="cane" placeholder="Es. Bobby, Barboncino" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist" htmlFor="servizio">Servizio Richiesto</label>
<select className="w-full px-4 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm text-stone-600" id="servizio">
<option className="font-geist">Bagno Completo</option>
<option className="font-geist">Taglio e Toelettatura</option>
<option className="font-geist">Stripping</option>
<option className="font-geist">Taglio Unghie</option>
<option className="font-geist">Altro / Consulenza</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide font-geist" htmlFor="messaggio">Note Aggiuntive</label>
<textarea className="w-full px-4 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm" id="messaggio" placeholder="Il cane ha nodi? Esigenze particolari?" rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-3 rounded-lg hover:bg-stone-800 transition-all shadow-md mt-2 font-geist" type="button">
                            Invia Richiesta
                        </button>
<p className="text-xs text-center text-stone-400 pt-2 font-geist">Ti ricontatteremo entro 24h per confermare.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon icon="lucide:paw-print" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight font-geist">BauBello</span>
</div>
<p className="text-sm leading-relaxed max-w-xs text-stone-500 font-geist">
                    Il punto di riferimento per il benessere e la bellezza del tuo cane. Professionalità, igiene e amore per gli animali.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm font-geist">Link Rapidi</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-teal-400 transition-colors font-geist" href="#home">Home</a></li>
<li><a className="hover:text-teal-400 transition-colors font-geist" href="#servizi">Servizi</a></li>
<li><a className="hover:text-teal-400 transition-colors font-geist" href="#prezzi">Listino</a></li>
<li><a className="hover:text-teal-400 transition-colors font-geist" href="#contatti">Prenota</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm font-geist">Seguici</h4>
<div className="flex space-x-4">
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 text-xs text-stone-600 text-center flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-geist">© 2023 BauBello Toelettatura. Tutti i diritti riservati.</p>
<p className="font-geist">P.IVA 01234567890 | Privacy Policy | Cookie Policy</p>
</div>
</footer>

<a aria-label="Contattaci su WhatsApp" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group" href="https://wa.me/390123456789">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="lucide:message-circle" strokeWidth="2" width="28"></iconify-icon>
</a>

    </>
  );
}
