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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.background=window.scrollY>50?'rgba(8,8,12,.98)':'rgba(8,8,12,.85)';
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
      

<nav className="" style={{background: 'rgba(8, 8, 12, 0.85)'}}>
<div className="ni">
<a className="nl" href="https://iavar.fr">IAVAR<span>.</span><span className="nvt">Immobilier</span></a>
<a className="nbk" href="https://iavar.fr">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M19 12H5M12 19l-7-7 7-7"></path>
</svg>
        Tous les secteurs
      </a>
<a className="bn" href="https://calendly.com/contact-iavar/premiercontact">
        Réserver une démo
        <svg fill="none" height="14" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="14">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
<button aria-label="Menu" className="mmb">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<section className="hero">
<div className="hg"></div>
<div className="hi">
<div className="afu">
<div className="eb"><span className="ebd"></span>IAVAR Immobilier · Agences traditionnelles</div>
<h1 className="hh">
          De la prospection<br/>à la fidélisation.<br/>
<em className="">L'IA pilote chaque étape.</em>
</h1>
<p className="hs">
<span className="np">7 phases.</span> <span className="np">15+ agents IA.</span> Un seul enregistrement vocal
          transformé en <strong>3 dossiers pros</strong>. De la détection de SCI familiales à la fidélisation post-acte
          — un parcours vendeur complet, <strong>hébergé en France, zéro entraînement</strong> de vos données.
        </p>
<div className="hc">
<a className="bp" href="https://calendly.com/contact-iavar/premiercontact">
            Voir la démo complète
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="18">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="bg" href="#journey">
            Explorer le parcours ↓
          </a>
</div>
<div className="tr">
<span className="ti"><span className="tc">✓</span> Conforme RGPD &amp; TRACFIN</span>
<span className="ti"><span className="tc">✓</span> Hébergé France</span>
<span className="ti"><span className="tc">✓</span> Éligible OPCO &amp; CPF</span>
</div>
</div>

<div className="hv afu d3">
<div className="fs">
<div className="fi">
<div className="fii">💬</div>
<div className="fit">
<div className="fil">WhatsApp · Enregistrement R1</div>
<div className="ftt">Visite vendeur — 23 min</div>
</div>
<div className="fiw"><span></span><span></span><span></span><span></span><span></span></div>
</div>
<div className="fa">
<div className="fal"></div>
<span className="falb">IA · Transcription &amp; Analyse</span>
<div className="fal"></div>
</div>
<div className="fo">
<div className="foc">
<div className="focp">PDF</div>
<div className="foci">⚖️</div>
<div className="foct">Fiche TRACFIN</div>
<div className="focs">Conformité</div>
</div>
<div className="foc">
<div className="focp">PDF</div>
<div className="foci">📊</div>
<div className="foct">Dossier commercial</div>
<div className="focs">Présentation</div>
</div>
<div className="foc">
<div className="focp">PDF</div>
<div className="foci">🏠</div>
<div className="foct">Estimation</div>
<div className="focs">Chiffrée</div>
</div>
</div>
<div className="hr">
<div className="hrn">7</div>
<div className="hrt"><strong>7 phases couvertes</strong><br/>De la prospection vendeur à la fidélisation post-acte.
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="journey" id="journey">
<div className="journey-glow"></div>
<div className="si" style={{position: 'relative', zIndex: '1'}}>
<div className="" style={{textAlign: 'center', maxWidth: '720px', margin: '0 auto 72px'}}>
<div className="sl" style={{justifyContent: 'center'}}>Le parcours complet</div>
<h2 className="sh">Chaque rendez-vous compte.<br/><em className="">Chaque étape est couverte.</em></h2>
<p className="ss" style={{margin: '0 auto'}}>De la première détection d'un prospect vendeur jusqu'au 12e mois après la
          signature de l'acte — voici tout ce que l'IA fait pour vous.</p>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--b)', color: '#fff'}}>1</div>
<div className="phase-header">
<div className="phase-title">Prospection vendeur</div>
<span className="phase-tag" style={{color: 'var(--bs)', borderColor: 'rgba(59,130,246,.3)'}}>Avant le R0</span>
</div>
<p className="phase-desc">Identifiez des vendeurs que vos concurrents ne voient pas. L'agent B2B détecte les
          structures patrimoniales familiales (SCI, SARL de famille) et vous fournit des listings ciblés.</p>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon bl">🔍</div>
<div className="pa-body">
<div className="pa-name">Agent recherche B2B — SCI &amp; SARL familiales</div>
<div className="pa-desc">Détection automatique de structures patrimoniales familiales pour ciblage de
                listings. Avantage concurrentiel majeur en prospection sortante.</div>
<div className="pa-outputs"><span className="pa-out auto">listing ciblé</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--ind)', color: '#fff'}}>2</div>
<div className="phase-header">
<div className="phase-title">R0 — Premier contact</div>
<span className="phase-tag" style={{color: '#a5b4fc', borderColor: 'rgba(99,102,241,.3)'}}>En agence ou téléphone</span>
</div>
<p className="phase-desc">Préparez votre R1 avec les bonnes informations. Interrogez votre base de connaissances
          métier directement depuis WhatsApp : DPE, copropriété, urbanisme, titre de propriété.</p>
<div className="phase-agents">
<div className="pa featured">
<div className="pa-icon wa">💬</div>
<div className="pa-body">
<div className="pa-name">Agent WhatsApp IA — Prise d'informations</div>
<div className="pa-desc">Interrogation de la base de connaissances métier pour préparer le R1. Réponses en
                langage naturel depuis WhatsApp — vos questions, les réponses de l'IA, instantanément.</div>
<div className="pa-outputs"><span className="pa-out wab">WhatsApp</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon in">📚</div>
<div className="pa-body">
<div className="pa-name">Agent Juridique — Analyse titre de propriété</div>
<div className="pa-desc">Analyse du titre de propriété du vendeur via la base documentaire RAG. Synthèse des
                informations juridiques clés avant la visite.</div>
<div className="pa-outputs"><span className="pa-out auto">synthèse juridique</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--v)', color: '#fff', width: '28px', height: '28px', left: '10px', top: '2px', boxShadow: '0 0 20px rgba(109,40,217,.5)'}}>
          3</div>
<div className="phase-header">
<div className="phase-title">R1 — Visite du bien + Travail en agence</div>
<span className="phase-tag" style={{color: 'var(--vs)', borderColor: 'var(--bdr-v)', background: 'rgba(109,40,217,.1)'}}>Cœur du workflow</span>
</div>
<p className="phase-desc">Le moment clé. Pendant la visite, vous démontrez l'IA au vendeur avec le home staging
          instantané. De retour en agence, un seul enregistrement vocal génère 3 dossiers professionnels.</p>
<div className="" style={{fontSize: '.7rem', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vs)', marginBottom: '12px', paddingLeft: '4px'}}>
          Pendant la visite</div>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon vl">🎙️</div>
<div className="pa-body">
<div className="pa-name">Agent de transcription</div>
<div className="pa-desc">Enregistrement direct via le module ou import audio. Transcription précise,
                multi-locuteurs, horodatée. Source de vérité pour tous les livrables suivants.</div>
<div className="pa-outputs"><span className="pa-out auto">transcription brute</span></div>
</div>
</div>
<div className="pa featured">
<div className="pa-icon wa">🏠</div>
<div className="pa-body">
<div className="pa-name">Agent WhatsApp — Home staging virtuel</div>
<div className="pa-desc">Démonstration en direct devant le vendeur : photo du bien → home staging IA
                instantané sur WhatsApp. L'effet "wow" qui vous différencie du concurrent.</div>
<div className="pa-outputs"><span className="pa-out wab">WhatsApp</span><span className="pa-out pdf">images HD</span>
</div>
</div>
</div>
</div>
<div className="" style={{fontSize: '.7rem', fontWeight: '700', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vs)', marginBottom: '12px', paddingLeft: '4px'}}>
          De retour en agence — 3 workflows depuis la transcription</div>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon rd">⚖️</div>
<div className="pa-body">
<div className="pa-name">Workflow n°1 — Fiche TRACFIN</div>
<div className="pa-desc">Extraction KYC, indicateurs de risque, origine des fonds. Pré-remplie au format
                réglementaire ACPR. Analysée par l'IA. Vous relisez, vous signez.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF conforme</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon vl">📊</div>
<div className="pa-body">
<div className="pa-name">Workflow n°2 — Dossier de présentation commercial</div>
<div className="pa-desc">Synthèse personnalisée du projet vendeur, stratégie de mise en marché, plan de
                communication. À votre charte graphique. L'outil qui fait signer le mandat au R2.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF brandé</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon am">🏷️</div>
<div className="pa-body">
<div className="pa-name">Workflow n°3 — Mini dossier d'estimation</div>
<div className="pa-desc">Avis de valeur chiffré depuis les éléments de la visite : fourchette de prix,
                argumentaire, comparables locaux. PDF structuré ou format élaboré dans l'app.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF estimation</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon pk">🖼️</div>
<div className="pa-body">
<div className="pa-name">Agent édition d'image</div>
<div className="pa-desc">Retouche photos d'annonces, création d'affiche commerciale, mise en valeur des biens
                pour la diffusion.</div>
<div className="pa-outputs"><span className="pa-out pdf">affiche commerciale</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon in">📚</div>
<div className="pa-body">
<div className="pa-name">Agent RAG — Analyse titre de propriété</div>
<div className="pa-desc">Interrogation de la base documentaire pour extraire les informations clés du titre,
                servitudes, charges, historique.</div>
<div className="pa-outputs"><span className="pa-out auto">synthèse titre</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--g)', color: '#fff'}}>4</div>
<div className="phase-header">
<div className="phase-title">R2 — Signature du mandat</div>
<span className="phase-tag" style={{color: 'var(--gs)', borderColor: 'rgba(16,185,129,.3)'}}>Après livraison des 3 dossiers</span>
</div>
<p className="phase-desc">Le vendeur a reçu vos 3 dossiers professionnels. Vous vous présentez au R2 avec un niveau
          de préparation que personne d'autre n'atteint. Suite à la signature, la fiche TRACFIN définitive est générée
          automatiquement.</p>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon gn">⚖️</div>
<div className="pa-body">
<div className="pa-name">Workflow automatique — TRACFIN post-signature</div>
<div className="pa-desc">Suite à la signature du mandat, génération automatique de la fiche TRACFIN définitive
                si pas encore validée.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF TRACFIN final</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--a)', color: '#fff'}}>5</div>
<div className="phase-header">
<div className="phase-title">Promesse de vente</div>
<span className="phase-tag" style={{color: 'var(--as)', borderColor: 'rgba(245,158,11,.3)'}}>Sécurisation du dossier acquéreur</span>
</div>
<p className="phase-desc">Moment critique : vous devez sécuriser le dossier et donner des arguments solides au
          vendeur. L'IA analyse le profil acquéreur et produit une fiche synthèse de la promesse pour les deux parties.
        </p>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon am">🔎</div>
<div className="pa-body">
<div className="pa-name">Agent analyse profil acquéreur</div>
<div className="pa-desc">Analyse IA du profil de l'acheteur : solidité financière, cohérence du projet,
                arguments de négociation avancée pour le vendeur.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF analyse acquéreur</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon in">📄</div>
<div className="pa-body">
<div className="pa-name">Fiche synthèse projet de promesse</div>
<div className="pa-desc">Document fourni au vendeur ET à l'acheteur : résumé de la promesse, obligations de
                chaque partie, conseils pratiques, calendrier. Produit via RAG sur le projet de promesse.</div>
<div className="pa-outputs">
<span className="pa-out pdf">PDF vendeur</span><span className="pa-out pdf">PDF acquéreur</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--a)', color: '#fff'}}>6</div>
<div className="phase-header">
<div className="phase-title">Compromis signé — Suivi jusqu'à l'acte</div>
<span className="phase-tag" style={{color: 'var(--as)', borderColor: 'rgba(245,158,11,.3)'}}>Pilotage actif du dossier</span>
</div>
<p className="phase-desc">Le compromis est signé. L'IA produit une fiche synthèse complète avec tous les
          intervenants, clauses suspensives, risques identifiés, et injecte automatiquement les dates clés dans votre
          agenda.</p>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon vl">📋</div>
<div className="pa-body">
<div className="pa-name">Fiche synthèse du compromis</div>
<div className="pa-desc">Dates clés, intervenants (notaire, banque, diagnostiqueur) avec coordonnées
                complètes, clauses suspensives détaillées, analyse IA des risques et points de vigilance du dossier.
                Éléments juridiques clés.</div>
<div className="pa-outputs"><span className="pa-out pdf">PDF synthèse compromis</span></div>
</div>
</div>
<div className="pa">
<div className="pa-icon am">📅</div>
<div className="pa-body">
<div className="pa-name">Workflow calendrier automatique</div>
<div className="pa-desc">Implémentation des dates clés dans l'agenda (Gmail, Outlook, SMTP) : délai de
                rétractation, levée de conditions suspensives, rendez-vous notaire, signature acte authentique.</div>
<div className="pa-outputs"><span className="pa-out cal">événements agenda</span></div>
</div>
</div>
</div>
</div>

<div className="phase">
<div className="phase-dot" style={{background: 'var(--pk)', color: '#fff'}}>7</div>
<div className="phase-header">
<div className="phase-title">Post-acte — Fidélisation 12 mois</div>
<span className="phase-tag" style={{color: '#f9a8d4', borderColor: 'rgba(236,72,153,.3)'}}>Workflow automatisé</span>
</div>
<p className="phase-desc">La transaction est terminée mais la relation continue. Un workflow automatisé maintient le
          lien avec l'acquéreur devenu propriétaire — 12 touchpoints annuels pour générer du parrainage et de la
          recommandation.</p>
<div className="phase-agents">
<div className="pa">
<div className="pa-icon pk">💌</div>
<div className="pa-body">
<div className="pa-name">Workflow suivi nouveau propriétaire — 12 actions/an</div>
<div className="pa-desc">Séquence proactive de 12 touchpoints : bienvenue, check-up à 1 mois, conseils
                saisonniers, anniversaire d'achat, invitation événement agence. Objectif : parrainage, recommandation,
                fidélisation.</div>
<div className="pa-outputs">
<span className="pa-out auto">4 courriers</span>
<span className="pa-out wab">4 SMS</span>
<span className="pa-out cal">4 emails</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sec" style={{background: 'var(--ink)', borderTop: '1px solid var(--bdr)'}}>
<div className="si">
<div style={{textAlign: 'center', maxWidth: '720px', margin: '0 auto'}}>
<div className="sl" style={{justifyContent: 'center'}}>Agents transversaux</div>
<h2 className="sh">Disponibles <em>à chaque étape.</em></h2>
<p className="ss" style={{margin: '0 auto'}}>En plus des agents de chaque phase, ces outils sont accessibles en
          permanence depuis l'app ou WhatsApp.</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '14px', marginTop: '56px'}}>
<div className="pa">
<div className="pa-icon wa">💬</div>
<div className="pa-body">
<div className="pa-name">Agent WhatsApp IA principal</div>
<div className="pa-desc">Bras droit 24/7 : estimation directe par texte, pré-compta, interrogation de bases de
              connaissances, transcription vocale. Sans rien installer.</div>
<div className="pa-feats">
<span className="pa-feat">🎙 Transcription</span>
<span className="pa-feat">🏠 Home staging</span>
<span className="pa-feat">💰 Estimation</span>
<span className="pa-feat">📚 Base docs</span>
<span className="pa-feat">📝 Pré-compta</span>
</div>
</div>
</div>
<div className="pa">
<div className="pa-icon in">📚</div>
<div className="pa-body">
<div className="pa-name">Bases de connaissances (RAG)</div>
<div className="pa-desc">Créez des bases spécifiques (DPE, copropriété, urba, mandats types) et interrogez-les
              en langage naturel depuis l'app ou WhatsApp.</div>
</div>
</div>
<div className="pa">
<div className="pa-icon gn">📱</div>
<div className="pa-body">
<div className="pa-name">Agent réseaux sociaux</div>
<div className="pa-desc">Recherche de tendances locales, génération de posts personnalisés, hashtags,
              possibilité de production vidéo via NotebookLM.</div>
</div>
</div>
<div className="pa">
<div className="pa-icon vl">✨</div>
<div className="pa-body">
<div className="pa-name">Créateur d'agents</div>
<div className="pa-desc">Concevez vos propres assistants IA sur mesure en quelques minutes. Jusqu'à 10 agents
              spécialisés sans code.</div>
</div>
</div>
</div>
</div>
</section>

<section className="weekly" style={{borderTop: '1px solid var(--bdr)'}}>
<div className="si">
<div style={{textAlign: 'center', maxWidth: '720px', margin: '0 auto'}}>
<div className="sl" style={{justifyContent: 'center'}}>Agents proactifs · Notifications quotidiennes</div>
<h2 className="sh">Votre <em>coach immo</em> chaque matin.</h2>
<p className="ss" style={{margin: '0 auto'}}>Des agents qui travaillent en arrière-plan et vous envoient une dose
          d'intelligence ciblée chaque jour.</p>
</div>
<div className="wg">
<div className="dc">
<div className="dcn">Lundi</div>
<div className="dci">📈</div>
<div className="dct">Économie</div>
<div className="dcd">Taux, indicateurs, tendances marché immo</div>
</div>
<div className="dc">
<div className="dcn">Mardi</div>
<div className="dci">📱</div>
<div className="dct">Marketing social</div>
<div className="dcd">Idées contenus, tendances LinkedIn &amp; Insta</div>
</div>
<div className="dc">
<div className="dcn">Mercredi</div>
<div className="dci">🎯</div>
<div className="dct">Coaching closing</div>
<div className="dcd">Techniques de signature, gestion d'objections</div>
</div>
<div className="dc">
<div className="dcn">Jeudi</div>
<div className="dci">🔭</div>
<div className="dct">Veille concurrence</div>
<div className="dcd">Nouveaux acteurs, pratiques tarifaires, innovations</div>
</div>
<div className="dc">
<div className="dcn">Vendredi</div>
<div className="dci">✨</div>
<div className="dct">Inspiration</div>
<div className="dcd">Architecture, déco, tendances visuelles</div>
</div>
</div>
</div>
</section>

<section className="secsec">
<div className="si">
<div className="secg">
<div>
<div className="sl">Souveraineté &amp; Confidentialité</div>
<h2 className="sh">Les données de vos vendeurs<br/><em>ne quittent jamais l'Europe.</em></h2>
<p className="ss">Le secret professionnel et la confidentialité des informations patrimoniales sont au cœur de
            votre métier. IAVAR est conçu pour les protéger absolument.</p>
</div>
<div className="sfs">
<div className="sf">
<div className="sfi">🇫🇷</div>
<div className="sfc">
<div className="sft">Hébergement 100% France</div>
<div className="sfd">Serveurs sur le territoire national. Aucun transit hors UE.</div>
</div>
</div>
<div className="sf">
<div className="sfi">🛡️</div>
<div className="sfc">
<div className="sft">Zéro entraînement garanti</div>
<div className="sfd">Vos transcriptions, dossiers vendeurs et estimations ne servent jamais à entraîner un
                modèle. Garanti contractuellement.</div>
</div>
</div>
<div className="sf">
<div className="sfi">👻</div>
<div className="sfc">
<div className="sft">Mode éphémère — 6h max</div>
<div className="sfd">Suppression automatique des conversations sensibles. Vos archives restent uniquement chez
                vous.</div>
</div>
</div>
<div className="sf">
<div className="sfi">⚖️</div>
<div className="sfc">
<div className="sft">Conforme RGPD &amp; AI Act</div>
<div className="sfd">Traitements documentés, base légale claire, droits exerçables. Charte IA disponible pour
                vos vendeurs.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta">
<div className="cg"></div>
<div style={{position: 'relative', zIndex: '1', maxWidth: '720px', margin: '0 auto'}}>
<h2 className="ch">Voyez les 7 phases<br/><em>en direct, sur votre métier.</em></h2>
<p className="cs">30 minutes. On simule un R1 ensemble, l'IA génère vos dossiers en live. On déroule le parcours
        complet de la prospection à la fidélisation. Vous repartez avec des exemples concrets.</p>
<a className="bp" href="https://calendly.com/contact-iavar/premiercontact" style={{fontSize: '1.05rem', padding: '18px 40px', position: 'relative', zIndex: '1'}}>
        Réserver ma démo immobilier
        <svg fill="none" height="20" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" width="20">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
<div className="cm">
<a href="mailto:contact@iavar.fr">📧 contact@iavar.fr</a>
<span style={{color: 'rgba(255,255,255,.15)'}}>|</span>
<span>📍 Basé dans le Var (83)</span>
<span style={{color: 'rgba(255,255,255,.15)'}}>|</span>
<span>🏆 Qualiopi &amp; CPF</span>
</div>
</div>
</section>
<footer>
<div className="fti">
<div>
<div className="ftl">IAVAR<span>.</span></div>
<div className="ftc">© 2026 Tous droits réservés.</div>
</div>
<div className="ftk">
<a href="https://iavar.fr">Tous les secteurs</a>
<a href="#">Mentions légales</a>
<a href="#">RGPD</a>
<a href="#">Charte IA</a>
</div>
</div>
</footer>


    </>
  );
}
