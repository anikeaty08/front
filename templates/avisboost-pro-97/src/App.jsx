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



      // Lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<header className="sticky top-0 z-50 backdrop-blur-lg bg-[#0D0D0D]/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#1E1E1E] border border-white/10 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif', letterSpacing: '-0.02em'}}>AB</span>
</div>
<div className="flex flex-col -space-y-0.5">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>AvisBoost Pro</span>
<span className="text-[11px] text-white/50" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Ingénierie de réputation digitale</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#fondations">Fondations</a>
<a className="text-white/70 hover:text-white transition-colors" href="#realisations">Chantiers</a>
<a className="text-white/70 hover:text-white transition-colors" href="#processus">Process</a>
<a className="text-white/70 hover:text-white transition-colors" href="#tableau">Tableau de bord</a>
<a className="text-white/70 hover:text-white transition-colors" href="#tarifs">Plans</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#1E1E1E] px-4 py-2 text-sm font-medium text-[#D4AF37] hover:bg-[#1E1E1E]/80 hover:border-[#D4AF37]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40 transition" href="#audit">
<i className="h-4 w-4" data-lucide="scan-line"></i> Audit gratuit
            </a>
<button aria-label="Menu" className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="Commerce local français - rendu architectural" className="h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/70 to-[#0D0D0D]"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-6 space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"></span>
<span className="text-xs text-white/70" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Optimisation algorithmique des avis</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>
              L'ARCHITECTURE DE VOTRE RÉPUTATION GOOGLE
            </h1>
<p className="text-base sm:text-lg text-white/75 max-w-xl" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>
              AvisBoost Pro construit votre présence en ligne sur des fondations d’IA et d’automatisation intelligente. Chaque avis devient une pierre maîtrisée de votre édifice digital.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.45)] border border-white/10 bg-[#2A4365] hover:bg-[#2A4365]/90 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40 transition" href="#audit">
<i className="h-4 w-4" data-lucide="gauge"></i>
                AUDIT GRATUIT
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#D4AF37]/10 px-2 py-0.5 text-[11px] text-[#D4AF37] border border-[#D4AF37]/30">Badge or</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" href="#tarifs">
<i className="h-4 w-4" data-lucide="blueprint"></i>
                VOIR LES PLANS
              </a>
</div>
<div className="flex flex-wrap items-center gap-4 pt-4">
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#1E1E1E]/70 px-3 py-2">
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="star"></i>
<span className="text-sm" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.8/5 note moyenne</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#1E1E1E]/70 px-3 py-2">
<i className="h-4 w-4 text-white/70" data-lucide="timer"></i>
<span className="text-sm" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Réponse en 2min</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#1E1E1E]/70 px-3 py-2">
<i className="h-4 w-4 text-[#2A4365]" data-lucide="trending-up"></i>
<span className="text-sm" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>+42% de visibilité</span>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
<div className="absolute inset-0 pointer-events-none rounded-xl" style={{background: 'radial-gradient(1200px 600px at 80% 0%, rgba(42,67,101,0.12), rgba(13,13,13,0))'}}></div>
<div className="flex items-center justify-between">
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Flux: Avis → Réponse → Conversion</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"></div>
<div className="h-2 w-2 rounded-full bg-amber-400/70"></div>
<div className="h-2 w-2 rounded-full bg-sky-400/70"></div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="group relative rounded-lg border border-white/10 bg-[#1E1E1E]/60 p-4 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-white/15 bg-white/5 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="message-square"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Avis entrants</div>
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>SMS · WhatsApp · QR</div>
</div>
</div>
<div className="mt-3 h-20 rounded border border-white/10 bg-white/[0.03] overflow-hidden">
<div className="h-full w-1/2 bg-[#2A4365]/40"></div>
</div>
</div>

<div className="hidden sm:flex items-center justify-center">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] text-white/60 px-2 bg-[#0D0D0D]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>algos</div>
</div>
</div>

<div className="group relative rounded-lg border border-white/10 bg-[#1E1E1E]/60 p-4 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-white/15 bg-white/5 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="bot"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Réponse IA</div>
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>ton · contexte · métier</div>
</div>
</div>
<div className="mt-3 h-20 rounded border border-white/10 bg-white/[0.03] overflow-hidden">
<div className="h-full w-3/4 bg-emerald-500/30"></div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="hidden sm:block"></div>
<div className="hidden sm:flex items-center justify-center">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] text-white/60 px-2 bg-[#0D0D0D]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>SLA 2min</div>
</div>
</div>
<div className="group relative rounded-lg border border-white/10 bg-[#1E1E1E]/60 p-4 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-white/15 bg-white/5 flex items-center justify-center">
<i className="h-4 w-4 text-[#D4AF37]" data-lucide="badge-check"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Conversion</div>
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>+42% visibilité</div>
</div>
</div>
<div className="mt-3 h-20 rounded border border-white/10 bg-white/[0.03] overflow-hidden">
<div className="h-full w-[88%] bg-[#D4AF37]/30"></div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
                  Échelles métriques · Tolerance ±0.5%
                </div>
<div className="flex items-center gap-2">
<span className="text-xs text-white/60">RGPD</span>
<i className="h-4 w-4 text-white/60" data-lucide="shield"></i>
<span className="text-xs text-white/60">Chiffrement</span>
<i className="h-4 w-4 text-white/60" data-lucide="lock"></i>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-wrap items-center gap-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Nuancier matériaux</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md border border-white/10" style={{background: '#0D0D0D'}} title="Noir technique"></div>
<div className="h-6 w-6 rounded-md border border-white/10" style={{background: '#1E1E1E'}} title="Béton poli"></div>
<div className="h-6 w-6 rounded-md border border-white/10" style={{background: '#2A4365'}} title="Acier bleu"></div>
<div className="h-6 w-6 rounded-md border border-white/10" style={{background: '#D4AF37'}} title="Signalétique or"></div>
<div className="h-6 w-6 rounded-md border border-white/10 bg-white/5" title="Verre teinté"></div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="fondations">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(900px 400px at 10% -10%, rgba(42,67,101,0.12), transparent)'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Fondations — Les piliers techniques</h2>
<p className="mt-2 text-white/70 max-w-2xl" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Structure en poteaux-poutres. Données encastrées. Contrôle métrologique continu.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
<i className="h-4 w-4" data-lucide="ruler"></i> Grille 16 colonnes
          </div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
<i className="h-5 w-5 text-[#2A4365]" data-lucide="activity"></i>
</div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>ANALYSE SISMIQUE DU SENTIMENT</div>
</div>
<p className="mt-3 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Notre IA analyse l’émotion, le contexte et l’urgence de chaque avis.</p>
<div className="mt-4 h-14 rounded border border-white/10 bg-white/[0.03]">
<div className="h-full w-[68%] bg-emerald-500/25"></div>
</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
<i className="h-5 w-5 text-[#2A4365]" data-lucide="send"></i>
</div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>GÉNÉRATION AUTOMATIQUE D'AVIS</div>
</div>
<p className="mt-3 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Système multi-canaux (SMS, WhatsApp, QR) post-prestation.</p>
<div className="mt-4 h-14 rounded border border-white/10 bg-white/[0.03]">
<div className="h-full w-[52%] bg-sky-400/25"></div>
</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
<i className="h-5 w-5 text-[#2A4365]" data-lucide="message-square-dashed"></i>
</div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>RÉPONSE CONTEXTUELLE INTELLIGENTE</div>
</div>
<p className="mt-3 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Algorithme de personnalisation selon le métier et le ton.</p>
<div className="mt-4 h-14 rounded border border-white/10 bg-white/[0.03]">
<div className="h-full w-[78%] bg-amber-400/25"></div>
</div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6 hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
<i className="h-5 w-5 text-[#2A4365]" data-lucide="radar"></i>
</div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>SUPERVISION EN TEMPS RÉEL</div>
</div>
<p className="mt-3 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Dashboard de contrôle avec alertes proactives.</p>
<div className="mt-4 h-14 rounded border border-white/10 bg-white/[0.03]">
<div className="h-full w-[91%] bg-fuchsia-400/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="realisations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Galerie de chantiers — Réalisations clients</h2>
<p className="mt-2 text-white/70 max-w-2xl" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Grille modulaire type plans d’exécution. Rapports techniques, courbes structurales, spécifications vérifiables.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 overflow-hidden hover:border-white/20 transition">
<div className="p-5 border-b border-white/10">
<div className="text-xs text-white/60 mb-2" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>CHANTIER #247</div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Restaurant gastronomique · Lyon</h3>
<div className="mt-3 h-24 rounded border border-white/10 bg-white/[0.03] flex items-end gap-1 p-2">
<div className="w-1/12 h-[35%] bg-red-400/30"></div>
<div className="w-1/12 h-[48%] bg-amber-400/30"></div>
<div className="w-1/12 h-[62%] bg-emerald-400/30"></div>
<div className="w-1/12 h-[70%] bg-emerald-400/30"></div>
<div className="w-1/12 h-[78%] bg-emerald-400/30"></div>
<div className="w-1/12 h-[85%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[88%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[90%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[92%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[94%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[96%] bg-[#D4AF37]/40"></div>
<div className="w-1/12 h-[97%] bg-[#D4AF37]/40"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-xs">
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Note initiale</div>
<div className="font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.1/5</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Note actuelle</div>
<div className="font-medium text-[#D4AF37]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.8/5</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Avis/mois</div>
<div className="font-medium text-emerald-400" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>+28</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>“L’IA a parfaitement géré les retours sur le service en salle pendant les pics d’activité.”</blockquote>
</div>
<div className="p-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] rounded-full border border-emerald-400/30 text-emerald-300/90 px-2 py-0.5">Optimisation terminée</span>
<span className="inline-flex items-center gap-1 text-[11px] rounded-full border border-[#D4AF37]/30 text-[#D4AF37] px-2 py-0.5">Client satisfait</span>
<span className="ml-auto inline-flex items-center gap-1 text-[11px] rounded-full border border-sky-400/30 text-sky-300/90 px-2 py-0.5">Performance maintenue</span>
</div>
</article>

<article className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 overflow-hidden hover:border-white/20 transition">
<div className="p-5 border-b border-white/10">
<div className="text-xs text-white/60 mb-2" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>CHANTIER #392</div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Boulangerie artisanale · Bordeaux</h3>
<div className="mt-3 h-24 rounded border border-white/10 bg-white/[0.03] relative">
<div className="absolute inset-0 flex items-center">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
<div className="absolute left-0 bottom-0 h-[85%] w-10/12 bg-[#2A4365]/30"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-xs">
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Note initiale</div>
<div className="font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>3.9/5</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Note actuelle</div>
<div className="font-medium text-[#D4AF37]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.6/5</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Délai de réponse</div>
<div className="font-medium text-emerald-400" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>1m58</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>“Flux QR en boutique + SMS post-achat = volume d’avis constant et naturel.”</blockquote>
</div>
<div className="p-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] rounded-full border border-emerald-400/30 text-emerald-300/90 px-2 py-0.5">Optimisation terminée</span>
<span className="ml-auto inline-flex items-center gap-1 text-[11px] rounded-full border border-white/15 text-white/70 px-2 py-0.5">Audit vérifié</span>
</div>
</article>

<article className="group relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 overflow-hidden hover:border-white/20 transition">
<div className="p-5 border-b border-white/10">
<div className="text-xs text-white/60 mb-2" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>CHANTIER #511</div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Centre auto multi-sites · Lille</h3>
<div className="mt-3 h-24 rounded border border-white/10 bg-white/[0.03]">
<div className="h-full w-[92%] bg-emerald-500/25"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-xs">
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Sites</div>
<div className="font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>12</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Avis/mois</div>
<div className="font-medium text-emerald-400" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>+142</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-2">
<div className="text-white/60">Note moyenne</div>
<div className="font-medium text-[#D4AF37]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.7/5</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>“Surveillance proactive du sentiment client, avec escalades automatiques pendant les pics.”</blockquote>
</div>
<div className="p-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] rounded-full border border-sky-400/30 text-sky-300/90 px-2 py-0.5">Performance maintenue</span>
<span className="ml-auto inline-flex items-center gap-1 text-[11px] rounded-full border border-[#D4AF37]/30 text-[#D4AF37] px-2 py-0.5">Enterprise</span>
</div>
</article>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="processus">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Processus de construction — Méthodologie</h2>
<p className="mt-2 text-white/70 max-w-2xl" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Plan de montage technique avec nomenclature. Points de contrôle intégrés.</p>
</div>
</div>
<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

<div className="relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-sm font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>1</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>DIAGNOSTIC DE SITUATION</div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Analyse complète de votre présence Google actuelle.</p>
</div>
</div>
<div className="mt-4 h-1 w-full bg-white/10">
<div className="h-1 bg-[#D4AF37] w-1/5"></div>
</div>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-sm font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>2</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>PLAN D’INTERVENTION</div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Stratégie de génération d’avis et réponse personnalisée.</p>
</div>
</div>
<div className="mt-4 h-1 w-full bg-white/10">
<div className="h-1 bg-[#D4AF37] w-2/5"></div>
</div>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-sm font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>3</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>MISE EN ŒUVRE</div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Intégration transparente avec Google Business Profile.</p>
</div>
</div>
<div className="mt-4 h-1 w-full bg-white/10">
<div className="h-1 bg-[#D4AF37] w-3/5"></div>
</div>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-sm font-medium" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>CONTRÔLE QUALITÉ CONTINU</div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Ajustements automatiques et reporting de performance.</p>
</div>
</div>
<div className="mt-4 h-1 w-full bg-white/10">
<div className="h-1 bg-[#D4AF37] w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="tableau">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Poste de commande — Maquette du tableau de bord</h2>
<p className="mt-2 text-white/70 max-w-2xl" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Vue éclatée type plan technique. Explorez les mécanismes internes au survol.</p>
</div>
</div>
<div className="grid lg:grid-cols-5 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-5 group hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Console IA · Analyse sentiment</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"></span>
<span className="text-[11px] text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Actif</span>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="h-4 w-4" data-lucide="user"></i>
<span style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Pauline — ★★★★☆</span>
<span className="ml-auto text-emerald-400">Positif</span>
</div>
<p className="mt-2 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Service impeccable, merci à l’équipe pour la rapidité.</p>
<div className="mt-2 rounded border border-white/10 bg-[#0D0D0D]/60 p-2 text-xs text-white/70">
                  Réponse IA: Merci Pauline, nous transmettons à l’équipe. À très vite !
                </div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="h-4 w-4" data-lucide="user"></i>
<span style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Marc — ★★★☆☆</span>
<span className="ml-auto text-amber-300">Neutre</span>
</div>
<p className="mt-2 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Attente un peu longue mais accueil chaleureux.</p>
<div className="mt-2 rounded border border-white/10 bg-[#0D0D0D]/60 p-2 text-xs text-white/70">
                  Réponse IA: Merci Marc pour votre retour, nous renforçons l’équipe aux heures de pointe.
                </div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="flex-1 h-9 rounded-md border border-white/10 bg-[#0D0D0D]/50 px-3 flex items-center text-sm text-white/70">
<i className="h-4 w-4 mr-2 text-white/60" data-lucide="sparkles"></i>
                Générer une réponse...
              </div>
<button className="h-9 px-3 rounded-md border border-white/10 bg-[#2A4365] hover:bg-[#2A4365]/90 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40 transition">Envoyer</button>
</div>
<div className="mt-4">
<label className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Intensité du ton</label>
<input className="w-full appearance-none h-1 bg-white/10 rounded outline-none accent-[#D4AF37]" max="100" min="0" type="range" value="55"/>
<div className="mt-1 text-[11px] text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Paramètre: ton empathique</div>
</div>
</div>

<div className="lg:col-span-3 rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-5 group hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Évolution des notes</div>
<div className="flex items-center gap-2 text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
                12 mois
                <i className="h-4 w-4" data-lucide="calendar"></i>
</div>
</div>
<div className="mt-3 relative h-56 rounded border border-white/10 bg-[#0D0D0D]/40 overflow-hidden">
<div className="absolute inset-0">
<div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:100%_24px]"></div>
<div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_100%]"></div>
</div>
<div className="absolute inset-x-0 bottom-0 h-40">
<div className="h-full w-full bg-[#2A4365]/30"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2A4365]/40 to-transparent"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Note moyenne</div>
<div className="text-sm font-medium text-[#D4AF37]" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>4.7/5</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>CTR fiche</div>
<div className="text-sm font-medium text-emerald-400" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>+19%</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Temps de réponse</div>
<div className="text-sm font-medium text-sky-300" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>2m</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-5 group hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Carte de chaleur — Avis par région</div>
<i className="h-4 w-4 text-white/60" data-lucide="map"></i>
</div>
<div className="mt-4 grid grid-cols-8 gap-1">



<div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/10"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/25"></div>
<div className="h-6 rounded bg-[#2A4365]/10"></div><div className="h-6 rounded bg-[#2A4365]/15"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/25"></div><div className="h-6 rounded bg-[#2A4365]/35"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/10"></div>
<div className="h-6 rounded bg-[#2A4365]/10"></div><div className="h-6 rounded bg-[#2A4365]/25"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/45"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/35"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/15"></div>
<div className="h-6 rounded bg-[#2A4365]/15"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/45"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/15"></div>
<div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/40"></div><div className="h-6 rounded bg-[#2A4365]/45"></div><div className="h-6 rounded bg-[#2A4365]/35"></div><div className="h-6 rounded bg-[#2A4365]/25"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/10"></div>
<div className="h-6 rounded bg-[#2A4365]/10"></div><div className="h-6 rounded bg-[#2A4365]/15"></div><div className="h-6 rounded bg-[#2A4365]/25"></div><div className="h-6 rounded bg-[#2A4365]/30"></div><div className="h-6 rounded bg-[#2A4365]/25"></div><div className="h-6 rounded bg-[#2A4365]/20"></div><div className="h-6 rounded bg-[#2A4365]/15"></div><div className="h-6 rounded bg-[#2A4365]/10"></div>
</div>
<div className="mt-4 flex items-center justify-between text-[11px] text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
<span>Faible</span>
<div className="h-1 w-40 bg-gradient-to-r from-[#2A4365]/10 via-[#2A4365]/40 to-[#2A4365]/60 rounded"></div>
<span>Élevé</span>
</div>
</div>

<div className="lg:col-span-3 rounded-xl border border-white/10 bg-[#1E1E1E]/60 p-5 group hover:bg-[#1E1E1E]/80 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Performances en temps réel</div>
<i className="h-4 w-4 text-white/60" data-lucide="cpu"></i>
</div>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Charge IA</div>
<div className="mt-1 h-2 w-full rounded bg-white/10 overflow-hidden">
<div className="h-full w-[62%] bg-emerald-400/70"></div>
</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>File d’attente</div>
<div className="mt-1 h-2 w-full rounded bg-white/10 overflow-hidden">
<div className="h-full w-[18%] bg-amber-300/80"></div>
</div>
</div>
<div className="rounded border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Taux d’escalade</div>
<div className="mt-1 h-2 w-full rounded bg-white/10 overflow-hidden">
<div className="h-full w-[6%] bg-rose-400/80"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>LED</div>
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<div className="h-2 w-2 rounded-full bg-amber-300"></div>
<div className="h-2 w-2 rounded-full bg-rose-400"></div>
<div className="ml-auto text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>SLA 99.9%</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="tarifs">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(800px 400px at 90% -10%, rgba(212,175,55,0.12), transparent)'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Gamme de solutions — Devis techniques</h2>
<p className="mt-2 text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Des plans dimensionnés pour artisans, PME et réseaux multi-sites. Spécifications précises, sans surcoût caché.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-white/10 bg-[#1E1E1E]/60 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>STRUCTURE ESSENTIELLE</h3>
<i className="h-5 w-5 text-white/60" data-lucide="cube"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>59€<span className="text-base text-white/60 font-normal">/mois</span></div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Pour artisans et commerces individuels</p>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> 50 avis/mois max</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Réponses IA basique</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Support standard</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" href="#audit">Démarrer</a>
</div>

<div className="relative rounded-2xl border-2 border-[#D4AF37]/40 bg-[#1E1E1E]/70 p-6 flex flex-col shadow-[0_20px_60px_rgba(212,175,55,0.08)]">
<div className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-0.5 text-[11px]">Plan recommandé</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>ARCHITECTURE PROFESSIONNELLE</h3>
<i className="h-5 w-5 text-[#D4AF37]" data-lucide="building-2"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-[#D4AF37]" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>99€<span className="text-base text-white/70 font-normal">/mois</span></div>
<p className="mt-1 text-sm text-white/80" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Pour restaurants et PME</p>
<ul className="mt-4 space-y-2 text-sm text-white/90">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#D4AF37]" data-lucide="check"></i> 200 avis/mois</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#D4AF37]" data-lucide="check"></i> Réponses IA avancée</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#D4AF37]" data-lucide="check"></i> Support prioritaire</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#D4AF37]" data-lucide="check"></i> Rapports techniques mensuels</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-[#D4AF37]/40 bg-[#2A4365] hover:bg-[#2A4365]/90 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40 transition" href="#audit">Choisir ce plan</a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-[#1E1E1E]/60 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>INGÉNIERIE ENTERPRISE</h3>
<i className="h-5 w-5 text-white/60" data-lucide="factory"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>149€<span className="text-base text-white/60 font-normal">/mois</span></div>
<p className="mt-1 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Pour multi-sites et franchises</p>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Avis illimités</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> IA personnalisée</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Account manager</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Intégrations SSO &amp; SLA 99.9%</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" href="#audit">Parler à un expert</a>
</div>
</div>
<div className="mt-6 text-center text-xs text-white/60" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Sans engagement. Annulation en un clic. Facturation mensuelle.</div>
</div>
</section>

<section className="relative border-t border-white/10" id="audit">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-white/10 bg-[#1E1E1E]/70 p-6 sm:p-10 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(1000px 500px at 0% 0%, rgba(42,67,101,0.2), rgba(13,13,13,0))'}}></div>
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Votre réputation mérite une architecture solide, pas des fondations fragiles.</h3>
<p className="mt-2 text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Nous bâtissons votre réputation Google sur des algorithmes éprouvés, ne laissant rien au hasard.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<div className="flex-1 h-11 rounded-md border border-white/10 bg-[#0D0D0D]/60 px-3 flex items-center text-sm text-white/70">
<i className="h-4 w-4 mr-2 text-white/60" data-lucide="mail"></i>
<input className="w-full bg-transparent outline-none placeholder:text-white/40 text-white/90" placeholder="Votre e-mail professionnel" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}} type="email"/>
</div>
<button className="h-11 px-5 rounded-md border border-[#D4AF37]/40 bg-[#2A4365] hover:bg-[#2A4365]/90 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/30 transition">
                  Lancer l’audit gratuit
                </button>
</div>
<div className="mt-3 flex items-center gap-3 text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
<i className="h-4 w-4" data-lucide="shield-check"></i> Conformité RGPD · Données chiffrées en transit et au repos
              </div>
</div>
<div className="lg:col-span-1">
<div className="rounded-xl border border-white/10 bg-[#0D0D0D]/50 p-5">
<div className="text-sm font-medium tracking-tight mb-3" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Barre de progression — Audit</div>
<div className="space-y-3">
<div>
<div className="flex items-center justify-between text-xs text-white/60"><span>Collecte</span><span>100%</span></div>
<div className="mt-1 h-1.5 w-full rounded bg-white/10 overflow-hidden"><div className="h-full w-full bg-emerald-400/80"></div></div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60"><span>Analyse</span><span>72%</span></div>
<div className="mt-1 h-1.5 w-full rounded bg-white/10 overflow-hidden"><div className="h-full w-[72%] bg-sky-400/80"></div></div>
</div>
<div>
<div className="flex items-center justify-between text-xs text-white/60"><span>Rapport</span><span>48%</span></div>
<div className="mt-1 h-1.5 w-full rounded bg-white/10 overflow-hidden"><div className="h-full w-[48%] bg-[#D4AF37]/80"></div></div>
</div>
</div>
<div className="mt-4 text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>Génération organique de preuves sociales</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#1E1E1E] border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif', letterSpacing: '-0.02em'}}>AB</span>
</div>
<div className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>AvisBoost Pro</div>
</div>
<p className="mt-3 text-sm text-white/70" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>Laissez l’IA gérer les conversations, concentrez-vous sur votre métier.</p>
<div className="mt-4 flex items-center gap-3 text-xs text-white/60" style={{fontFamily: '\'SF Mono\', \'ui-monospace\', \'Menlo\', \'Consolas\', monospace'}}>
<i className="h-4 w-4" data-lucide="shield"></i> RGPD
              <i className="h-4 w-4" data-lucide="lock"></i> AES-256
              <i className="h-4 w-4" data-lucide="file-badge-2"></i> ISO/IEC
            </div>
</div>
<div>
<div className="text-sm font-medium mb-3 tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Produit</div>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#fondations">Fondations</a></li>
<li><a className="hover:text-white transition" href="#realisations">Réalisations</a></li>
<li><a className="hover:text-white transition" href="#processus">Process</a></li>
<li><a className="hover:text-white transition" href="#tableau">Tableau de bord</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3 tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Plans</div>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#tarifs">Essentielle</a></li>
<li><a className="hover:text-white transition" href="#tarifs">Professionnelle</a></li>
<li><a className="hover:text-white transition" href="#tarifs">Enterprise</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3 tracking-tight" style={{fontFamily: '\'Bureau Grot\', \'Neue Haas Grotesk\', \'Inter\', system-ui, sans-serif'}}>Clients</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">RG</div>
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">BA</div>
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">CA</div>
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">SM</div>
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">HL</div>
<div className="h-10 rounded border border-white/10 bg-white/[0.03] flex items-center justify-center text-xs font-semibold tracking-tight">VF</div>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-xs text-white/50" style={{fontFamily: '\'Inter\', system-ui, sans-serif'}}>© 2025 AvisBoost Pro. Tous droits réservés.</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Mentions légales</a>
<a className="hover:text-white transition" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition" href="#">Sécurité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
