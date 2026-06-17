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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 h-[70px] flex items-center justify-between bg-[var(--bg-0)]/80 backdrop-blur-md border-b border-white/5">
<div className="flex items-center gap-2 font-head font-light text-lg tracking-tight text-white">
    BASALARI ACADEMY
  </div>
</nav>

<section className="relative pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden" id="hero">

<div className="absolute w-[600px] h-[600px] rounded-full bg-[var(--accent)]/10 blur-[120px] top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"></div>
<div className="relative z-10 max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 text-[var(--accent-light)] font-medium text-xs tracking-widest uppercase mb-6">
      Basalari Academy
    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 max-w-4xl mx-auto">
      Fare azienda in Italia è possibile. L'ho fatto io, <span className="text-gradient font-light">e puoi farlo anche tu.</span>
</h1>
<p className="text-[var(--muted)] text-base md:text-lg max-w-3xl mx-auto mb-12">
      Con Mollica o Senza. AyoTacos. Dan Ink. Olimpo Gelateria.<br className="hidden md:block"/> Aziende partite dal nulla e portate al successo, e oggi ti mostro come l'abbiamo fatto e come puoi farlo anche tu.
    </p>

<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl border border-[var(--border-m)] bg-[var(--bg-1)] overflow-hidden shadow-[var(--glow-md)] flex items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-10">
<svg className="w-full h-full text-white" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="currentColor" points="20,10 80,50 20,90"></polygon>
</svg>
</div>
<img alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="relative w-20 h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl ml-1" data-icon="lucide:play"></span>
</div>

<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white/80 text-sm" data-icon="lucide:play"></span>
<div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-[var(--accent)]"></div></div>
<span className="text-white/80 text-xs font-body">01:02</span>
<span className="iconify text-white/80 text-sm" data-icon="lucide:volume-2"></span>
<span className="iconify text-white/80 text-sm" data-icon="lucide:settings"></span>
<span className="iconify text-white/80 text-sm" data-icon="lucide:maximize"></span>
</div>
</div>
<div className="mt-12 flex flex-col items-center gap-3">
<button className="btn-primary px-8 py-4 rounded-full text-sm md:text-base flex items-center gap-2">
        Accedi Gratis alle prime lezioni
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
<span className="text-xs text-[var(--muted)]">Ricevi l'accesso immediato</span>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-[var(--border-s)] bg-[var(--bg-1)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-4 block">L'unica strada perseguibile per cambiare la tua vita</span>
<h2 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">Solo chi fa impresa con successo in decine di settori diversi può aiutarti davvero a realizzare i tuoi sogni.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Clubbing" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Nightlife &amp; Entertainment</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Qi Clubbing</h3>
<p className="text-sm text-[var(--muted)]">Disco restaurant a Brescia con show dal vivo, cena-spettacolo e un'atmosfera che mescola ristorazione e clubbing in un unico format vincente.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Bar" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Nightlife &amp; Bar</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Kacao</h3>
<p className="text-sm text-[var(--muted)]">Club e cocktail bar a Capriolo, in Franciacorta. Serate a tema, drink ricercati e un concept che ha ridefinito la nightlife fuori città.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Restaurant" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Ristorazione</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Villa Desiderio</h3>
<p className="text-sm text-[var(--muted)]">Ristorante a Capriano del Colle con valutazione 4.9 su quasi 800 recensioni. Cucina italiana raffinata in un contesto elegante e curato.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Food" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Street Food</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Con Mollica o Senza</h3>
<p className="text-sm text-[var(--muted)]">Il panino diventato fenomeno virale su TikTok. Code chilometriche, aperture a Milano e Roma, e un brand che ha rivoluzionato lo street food italiano.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Tacos" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Fast Food</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Ayo Tacos</h3>
<p className="text-sm text-[var(--muted)]">Concept di street food messicano con tacos autentici. Luci al neon, sapori intensi e un brand costruito per diventare iconico nelle città italiane.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Shop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">E-commerce &amp; Fashion</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Khaby Shop</h3>
<p className="text-sm text-[var(--muted)]">L'e-commerce ufficiale di Khaby Lame, il creator più seguito al mondo. Merchandising, streetwear e un brand da centinaia di milioni di valore.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Gym" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Fitness &amp; Wellness</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">MegaFitness</h3>
<p className="text-sm text-[var(--muted)]">Piattaforma fitness con programmi di allenamento, community dedicata e un approccio al benessere accessibile a tutti i livelli.</p>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
<img alt="Ice Cream" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-wider uppercase text-[var(--accent-light)] bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">Food &amp; Beverage</span>
</div>
<div className="p-6">
<h3 className="text-lg mb-2 tracking-tight">Olimpo Gelateria</h3>
<p className="text-sm text-[var(--muted)]">Gelateria artigianale a Milano in Corso di Porta Ticinese. Design da galleria d'arte, ingredienti premium e un'esperienza che ha reso il gelato luxury.</p>
</div>
</div>
</div>

<div className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent pointer-events-none"></div>
<h3 className="text-2xl md:text-3xl tracking-tight mb-4">Sarai tu il prossimo?</h3>
<p className="text-[var(--muted)] text-sm md:text-base max-w-2xl mx-auto mb-8">
        Oltre a finanziare personalmente i progetti su cui crederò di più, uno dei primi 1.000 iscritti alla Basalari Academy riceverà <strong className="text-white font-normal">100.000€ in regalo</strong> per finanziare la propria attività.
      </p>
<button className="btn-primary px-8 py-3 rounded-full text-sm flex items-center gap-2 mx-auto">
        Accedi gratis alle prime ore dell'Academy
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="py-24 relative bg-[var(--bg-0)]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl tracking-tight max-w-4xl mx-auto">
        Non ti mancano le possibilità. <span className="text-gradient">Ti manca una guida.</span>
</h2>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-20">
<div className="w-full md:w-1/2">
<p className="text-[var(--muted)] text-base mb-6">
          Studi, lavori, ti impegni, fai quello che si deve fare. Eppure la sensazione è che nonostante la tua vita stia andando avanti, non stai riuscendo a fare il grande passo.
        </p>
<p className="text-[var(--muted)] text-base">
          Magari hai già una tua attività avviata e ti sembra di essere fermo, o magari la vuoi avviare e non sai come. In giro però ti basta aprire Instagram o YouTube per trovare centinaia di formatori che sembrano sapere esattamente cosa fare, e che sanno darti la soluzione a tutti i tuoi problemi.
        </p>
</div>
<div className="w-full md:w-1/2">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative">
<img alt="Working late" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-dark)]/20 to-transparent"></div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 mb-20">
<div className="w-full md:w-1/2">
<p className="text-[var(--muted)] text-base mb-6">
          Ma pochi di loro hanno avuto davvero successo con un'azienda. Soprattutto, pochi di loro hanno aziende reali in Italia, in un ambiente dove lo stato combatte contro di te, dove la burocrazia è infinita e dove le tasse sono al limite della follia.
        </p>
<p className="text-[var(--muted)] text-base">
          La verità è che fare impresa è mille volte più difficile di svolgere qualunque altra professione. E, nonostante questo, mentre per ogni lavoro è richiesto un lungo percorso di studi, la partita IVA la può aprire chiunque. Ma se non prendi le informazioni giuste da chi ha già fatto impresa con successo in modo ripetibile, stai praticamente costruendo una carriera imprenditoriale senza mappa, senza percorso e senza una guida step by step.
        </p>
</div>
<div className="w-full md:w-1/2">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 relative bg-gray-900">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, var(--accent) 0, var(--accent) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, var(--accent) 0, var(--accent) 1px, transparent 1px, transparent 20px)'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-0)] to-transparent"></div>
</div>
</div>
</div>
<div className="text-center max-w-3xl mx-auto mt-12">
<p className="text-lg text-white mb-8">E per questo ti senti bloccato. Ma il gioco si può vincere. E voglio spiegarti come.</p>
<button className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 mx-auto">
        Accedi Gratis alle prime lezioni
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="py-24 relative bg-[var(--bg-1)] border-t border-b border-[var(--border-s)] overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-4 block">Il percorso</span>
<h2 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">
        Un percorso pensato per accompagnarti <span className="text-gradient">step by step</span> verso il successo.
      </h2>
</div>
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 flex justify-center">
<div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[var(--glow-sm)]">

<div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 relative">
<img alt="Meeting" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 bg-[var(--accent-dark)]/20 mix-blend-overlay"></div>
</div>


<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.6)]">1</div>
<div className="absolute top-[14%] right-[14%] translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">2</div>
<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">3</div>
<div className="absolute bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">4</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">5</div>
<div className="absolute bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">6</div>
<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">7</div>
<div className="absolute top-[14%] left-[14%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">8</div>
<div className="absolute top-[5%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--bg-2)] border border-white/20 text-[var(--muted)] flex items-center justify-center text-xs">9</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] mb-2 block">Step 1 di 9</span>
<h3 className="text-2xl md:text-3xl tracking-tight mb-4">Fondamenta imprenditoriali</h3>
<p className="text-[var(--muted)] text-base mb-8">
          Mentalità, disciplina, gestione del rischio e resilienza: tutto ciò che nessuno ti insegna prima di aprire un business ma che determina il 90% del successo.
        </p>

<div className="flex gap-2 mb-12">
<div className="w-6 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
<button className="btn-primary px-8 py-3 rounded-full text-sm flex items-center gap-2">
          Accedi Gratis alle prime lezioni
          <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[var(--bg-0)]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-4 block">Cosa ottieni</span>
<h2 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">Cosa ricevi all'interno della Basalari Academy?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-[var(--border-m)] transition-colors duration-300">
<div className="h-56 relative overflow-hidden bg-gray-900 border-b border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] to-transparent z-10"></div>
<span className="iconify text-6xl text-[var(--accent)]/50 relative z-0 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:monitor-play"></span>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl mb-3 tracking-tight">Video-Percorso Completo</h3>
<p className="text-sm text-[var(--muted)]">Non lezioni a caso ma un percorso ordinato e strutturato su business, marketing, vendita e mindset imprenditoriale. Ogni modulo è pratico, concreto e applicabile subito.</p>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-[var(--border-m)] transition-colors duration-300">
<div className="h-56 relative overflow-hidden bg-gray-900 border-b border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] to-transparent z-10"></div>
<span className="iconify text-6xl text-[var(--accent)]/50 relative z-0 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:users"></span>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl mb-3 tracking-tight">Consulenza Privata</h3>
<p className="text-sm text-[var(--muted)]">Consulenze private con Steven e con i nostri Manager, a cui potrai fare domande dirette e ricevere risposte personalizzate sulla tua situazione.</p>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-[var(--border-m)] transition-colors duration-300">
<div className="h-56 relative overflow-hidden bg-gray-900 border-b border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] to-transparent z-10"></div>
<span className="iconify text-6xl text-[var(--accent)]/50 relative z-0 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:video"></span>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl mb-3 tracking-tight">Live Q&amp;A</h3>
<p className="text-sm text-[var(--muted)]">Call live periodiche in cui parleremo di temi imprenditoriali importanti, condivideremo nuove lezioni apprese facendo azienda, e molto altro ancora.</p>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-[var(--border-m)] transition-colors duration-300">
<div className="h-56 relative overflow-hidden bg-gray-900 border-b border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-1)] to-transparent z-10"></div>
<span className="iconify text-6xl text-[var(--accent)]/50 relative z-0 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:network"></span>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl mb-3 tracking-tight">Entrepreneurs Hub</h3>
<p className="text-sm text-[var(--muted)]">Ti insegneremo a creare un business plan appetibile per banche e investitori, e potrai anche presentarci la tua idea o il tuo progetto imprenditoriale per farlo valutare direttamente da noi.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 mx-auto">
        Accedi Gratis alle prime lezioni
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="py-24 relative bg-[var(--bg-1)] border-t border-[var(--border-s)]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-4 block">Per chi è</span>
<h2 className="text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto">Non è per tutti. Ed è questo il punto.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-3xl p-8 md:p-10 border-[var(--border-m)] shadow-[0_0_30px_rgba(59,130,246,0.05)]">
<h3 className="text-lg font-medium text-white mb-8 flex items-center gap-3">
<span className="iconify text-[var(--accent)]" data-icon="lucide:plus-circle"></span>
          Basalari Academy è per te se...
        </h3>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<span className="iconify text-[var(--accent)] mt-1 flex-shrink-0" data-icon="lucide:check"></span>
<span className="text-sm text-[var(--text)]">Vuoi costruire o far crescere un business reale</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--accent)] mt-1 flex-shrink-0" data-icon="lucide:check"></span>
<span className="text-sm text-[var(--text)]">Sei stanco di corsi teorici senza risultato</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--accent)] mt-1 flex-shrink-0" data-icon="lucide:check"></span>
<span className="text-sm text-[var(--text)]">Cerchi un metodo strutturato e una community seria</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--accent)] mt-1 flex-shrink-0" data-icon="lucide:check"></span>
<span className="text-sm text-[var(--text)]">Sei disposto a investire tempo e impegno</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--accent)] mt-1 flex-shrink-0" data-icon="lucide:check"></span>
<span className="text-sm text-[var(--text)]">Vuoi avere strumenti pratici da usare subito</span>
</li>
</ul>
</div>

<div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 bg-white/5 opacity-80">
<h3 className="text-lg font-medium text-white mb-8 flex items-center gap-3">
<span className="iconify text-[var(--muted)]" data-icon="lucide:x-circle"></span>
          Non è per te se...
        </h3>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<span className="iconify text-[var(--muted)] mt-1 flex-shrink-0" data-icon="lucide:x"></span>
<span className="text-sm text-[var(--muted)]">Cerchi la scorciatoia per fare soldi facili</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--muted)] mt-1 flex-shrink-0" data-icon="lucide:x"></span>
<span className="text-sm text-[var(--muted)]">Non sei disposto a metterti in gioco</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--muted)] mt-1 flex-shrink-0" data-icon="lucide:x"></span>
<span className="text-sm text-[var(--muted)]">Pensi che basti un corso per avere successo</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--muted)] mt-1 flex-shrink-0" data-icon="lucide:x"></span>
<span className="text-sm text-[var(--muted)]">Non vuoi far parte di una community</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[var(--muted)] mt-1 flex-shrink-0" data-icon="lucide:x"></span>
<span className="text-sm text-[var(--muted)]">Preferisci le promesse vuote ai risultati concreti</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<button className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 mx-auto">
        Accedi Gratis alle prime lezioni
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="py-24 relative bg-[var(--bg-0)]">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[var(--accent)] text-xs font-medium tracking-widest uppercase mb-4 block">FAQ</span>
<h2 className="text-3xl md:text-4xl tracking-tight">Domande frequenti</h2>
</div>
<div className="space-y-3">

<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">Che cosa include Basalari Academy?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">È adatto a chi parte da zero?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">Quanto tempo serve per vedere risultati?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">Posso accedere ai materiali quando voglio?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">C'è una garanzia di rimborso?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
<div className="glass-card rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
<span className="text-sm text-white">In che cosa è diverso dagli altri corsi?</span>
<span className="iconify text-[var(--muted)]" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div className="mt-12 text-center">
<button className="btn-primary px-8 py-4 rounded-full text-sm flex items-center gap-2 mx-auto">
        Accedi Gratis alle prime lezioni
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<section className="py-32 relative bg-[var(--bg-1)] border-t border-[var(--border-s)] overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--accent)]/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="glass-card rounded-[2rem] p-10 md:p-16 border-[var(--border-m)]">
<h2 className="text-3xl md:text-5xl tracking-tight mb-6">
        Il prossimo capitolo della tua storia imprenditoriale inizia qui.
      </h2>
<p className="text-[var(--muted)] text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Entra in Basalari Academy e inizia a costruire il business che hai sempre immaginato.
      </p>
<button className="btn-primary px-10 py-4 rounded-full text-base flex items-center gap-2 mx-auto">
        Entra nell'Academy
        <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</section>

<footer className="bg-[var(--bg-0)] py-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-head font-light text-sm tracking-tight text-white">
      BASALARI ACADEMY
    </div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-[var(--muted)]">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Termini di Servizio</a>
<a className="hover:text-white transition-colors" href="#">Contatti</a>
</div>
<div className="text-xs text-white/30">
      © 2024 Basalari Academy
    </div>
</div>
</footer>

    </>
  );
}
