import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center">

<a className="text-xl font-medium tracking-tighter text-slate-900" href="#">
            VECTEUR
            <span className="text-[#ee7f01]">.</span>
</a>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#expertise">
            Expertises
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#valeurs">
            Valeurs
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#approche">
            Méthodologie
          </a>
<a className="text-sm font-medium text-white bg-[#ee7f01] hover:bg-[#f3a54d] px-4 py-2 rounded transition-colors" href="#contact">
            Nous contacter
          </a>
</div>

<div className="md:hidden flex items-center">
<iconify-icon className="text-2xl text-[#ee7f01]" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</nav>

<section className="md:pt-32 md:pb-40 overflow-hidden pt-20 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex text-xs font-medium text-[#ee7f01] bg-[#fbe4c9]/20 border-[#fbe4c9]/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-[#ee7f01]"></span>
              Cabinet de conseil indépendant
            </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight mb-6">L'ensemble pour une action publique performante !</h1>
<p className="leading-relaxed text-lg text-slate-600 max-w-lg mb-10">Le cabinet Stratégie et Gestion Publiques apporte depuis 2004 son expertise pluridisciplinaire l’accompagnement et la sécurisation du pilotage de l’action publique auprès des collectivités locales et des services de l’État</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[#ee7f01] text-white text-sm font-medium rounded hover:bg-[#f3a54d] transition-colors" href="#contact">
                Découvrir notre approche
                <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-[#ee7f01] text-sm font-medium border border-[#ee7f01] rounded hover:bg-[#fbe4c9]/20 transition-colors" href="#expertise">
                Nos domaines d'intervention
              </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-[#fbe4c9]/20 border border-[#fbe4c9]/50 rounded-lg flex items-center justify-center p-8">

<div className="opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative w-full h-full flex flex-col gap-4 z-10 p-4 justify-center">
<div className="w-full h-24 bg-white border border-slate-200 shadow-sm rounded flex items-center p-6 gap-6 transform translate-x-4">
<div className="w-12 h-12 bg-[#fbe4c9]/30 rounded border border-[#fbe4c9] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-xl text-[#f3a54d]" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-3 w-full">
<div className="h-2 w-3/4 bg-[#fbe4c9] rounded"></div>
<div className="h-2 w-1/2 bg-[#fbe4c9]/50 rounded"></div>
</div>
</div>
<div className="w-5/6 h-24 bg-[#ee7f01] border border-[#f3a54d] shadow-md rounded flex items-center p-6 gap-6 -translate-x-4">
<div className="w-12 h-12 bg-[#f3a54d] rounded border border-[#fbe4c9] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-xl text-white" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-3 w-full">
<div className="h-2 w-2/3 bg-[#fbe4c9] rounded"></div>
<div className="h-2 w-1/3 bg-[#fbe4c9]/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 border-y text-white bg-[#ee7f01] border-[#f3a54d] pt-16 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#f3a54d] text-center">
<div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
              20
              <span className="text-[#fbe4c9]">+</span>
</span>
<span className="text-xs font-medium text-[#fbe4c9] uppercase tracking-widest">
              Années d'expérience
            </span>
</div>
<div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
              450
              <span className="text-[#fbe4c9]">+</span>
</span>
<span className="text-xs font-medium text-[#fbe4c9] uppercase tracking-widest">
              Missions réalisées
            </span>
</div>
<div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
              12k
              <span className="text-[#fbe4c9]">+</span>
</span>
<span className="text-xs font-medium text-[#fbe4c9] uppercase tracking-widest">
              Agents publics formés
            </span>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24" id="expertise">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 gap-x-12 gap-y-16">
<div className="max-w-3xl mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight mb-6">Nos secteurs d'activités</h2>
<p className="text-lg text-slate-600 leading-relaxed">
            Une compréhension fine des rouages de l'administration publique,
            alliée à des méthodologies éprouvées pour garantir l'impact et la
            pérennité de chaque projet.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">

<div className="group">
<div className="w-12 h-12 flex items-center justify-center bg-[#fbe4c9]/30 border border-[#fbe4c9] rounded-lg mb-6 group-hover:border-[#f3a54d] transition-colors">
<iconify-icon className="text-2xl text-[#ee7f01]" height="24" icon="solar:routing-2-linear" style={{strokeWidth: '1.5', color: 'rgb(238, 127, 1)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Analyse financières</h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Diagnostic organisationnel, conception de schémas directeurs et
              accompagnement à la refonte des processus internes pour une
              administration plus performante.
            </p>
</div><div className="group">
<div className="w-12 h-12 flex items-center justify-center bg-[#fbe4c9]/30 border border-[#fbe4c9] rounded-lg mb-6 group-hover:border-[#f3a54d] transition-colors">
<iconify-icon className="text-2xl text-[#ee7f01]" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Évaluation des politiques publiques</h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Diagnostic organisationnel, conception de schémas directeurs et
              accompagnement à la refonte des processus internes pour une
              administration plus performante.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center bg-[#fbe4c9]/30 border border-[#fbe4c9] rounded-lg mb-6 group-hover:border-[#f3a54d] transition-colors">
<iconify-icon className="text-2xl text-[#ee7f01]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Mission de conseil</h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Analyse d'impact, audits de performance et construction
              d'indicateurs de pilotage objectifs pour éclairer la décision
              publique et optimiser les ressources.
            </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center bg-[#fbe4c9]/30 border border-[#fbe4c9] rounded-lg mb-6 group-hover:border-[#f3a54d] transition-colors">
<iconify-icon className="text-2xl text-[#ee7f01]" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Audit organisationnel</h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Conception de parcours de formation sur-mesure pour accompagner la
              montée en compétences des agents et l'acculturation aux nouveaux
              enjeux (numérique, transition écologique).
            </p>
</div><div className="group">
<div className="w-12 h-12 flex items-center justify-center bg-[#fbe4c9]/30 border border-[#fbe4c9] rounded-lg mb-6 group-hover:border-[#f3a54d] transition-colors">
<iconify-icon className="text-2xl text-[#ee7f01]" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-4">Évaluation des politiques publiques</h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Conception de parcours de formation sur-mesure pour accompagner la
              montée en compétences des agents et l'acculturation aux nouveaux
              enjeux (numérique, transition écologique).
            </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#fbe4c9]/20 border-[#fbe4c9]/50 pt-24 pb-24" id="valeurs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Ce qui fonde notre légitimité
            </h2>
<p className="text-base text-slate-600 mb-8 leading-relaxed max-w-lg">
              Loin des approches standardisées, nous cultivons un positionnement
              unique basé sur la rigueur analytique et une connaissance intime
              des cultures administratives.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="flex flex-col gap-3">
<iconify-icon className="text-xl text-[#ee7f01]" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-slate-900">
                Sur-mesure radical
              </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Chaque mission est conçue spécifiquement pour le contexte et les
                contraintes de votre institution.
              </p>
</div>

<div className="flex flex-col gap-3">
<iconify-icon className="text-xl text-[#ee7f01]" icon="solar:scale-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-slate-900">
                Indépendance absolue
              </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Aucun conflit d'intérêt. Notre seul boussole est l'intérêt
                général et le succès de vos projets.
              </p>
</div>

<div className="flex flex-col gap-3">
<iconify-icon className="text-xl text-[#ee7f01]" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-slate-900">
                Expertise sectorielle
              </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Des consultants issus du secteur public ou bénéficiant d'une
                longue expérience de l'administration.
              </p>
</div>

<div className="flex flex-col gap-3">
<iconify-icon className="text-xl text-[#ee7f01]" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-slate-900">
                Proximité &amp; Terrain
              </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Une présence à vos côtés dans l'opérationnel, au-delà des
                simples recommandations théoriques.
              </p>
</div>
</div>
</div>
</div>
</section><section className="bg-white border-slate-200 border-t pt-24 pb-24" id="approche">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">
        Notre démarche d'intervention
      </h2>
<p className="text-slate-600 max-w-2xl mx-auto">
        Une méthodologie structurée pour garantir l'appropriation par vos
        équipes et un impact durable.
      </p>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 bg-slate-100"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
<div className="p-6 border rounded-lg transition-colors bg-white border-slate-200 hover:border-[#f3a54d]/50">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-md bg-[#ee7f01] text-white">
            01
          </div>
<h3 className="text-lg font-medium mb-2 text-slate-900">Immersion</h3>
<p className="text-sm text-slate-500">
            Compréhension fine de votre écosystème, interviews des parties
            prenantes et cadrage.
          </p>
</div>
<div className="p-6 border rounded-lg transition-colors bg-white border-slate-200 hover:border-[#f3a54d]/50">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-[#ee7f01] text-[#ee7f01]">
            02
          </div>
<h3 className="text-lg font-medium mb-2 text-slate-900">
            Co-construction
          </h3>
<p className="text-sm text-slate-500">
            Ateliers de travail conjoints, modélisation de scénarios et
            élaboration de feuilles de route.
          </p>
</div>
<div className="p-6 border rounded-lg transition-colors bg-white border-slate-200 hover:border-[#f3a54d]/50">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-[#ee7f01] text-[#ee7f01]">
            03
          </div>
<h3 className="text-lg font-medium mb-2 text-slate-900">
            Déploiement
          </h3>
<p className="text-sm text-slate-500">
            Mise en œuvre opérationnelle, appui au management de projet et
            suivi des KPIs.
          </p>
</div>
<div className="p-6 border rounded-lg transition-colors bg-white border-slate-200 hover:border-[#f3a54d]/50">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-[#ee7f01] text-[#ee7f01]">
            04
          </div>
<h3 className="text-lg font-medium mb-2 text-slate-900">
            Transmission
          </h3>
<p className="text-sm text-slate-500">
            Formation de vos agents, documentation et transfert de
            compétences pour assurer votre autonomie.
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#fbe4c9]/20 py-24" id="approche">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
            Notre démarche d'intervention
          </h2>
<p className="text-base text-slate-600">
            Une méthodologie structurée pour garantir l'appropriation par vos
            équipes.
          </p>
</div>
<div className="relative border-l border-[#fbe4c9] ml-4 md:ml-8 space-y-12 pb-4">

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#f3a54d] text-[#ee7f01] text-xs font-medium">
              1
            </span>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">
              Immersion &amp; Cadrage
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Compréhension fine de votre écosystème, interviews des parties
              prenantes et définition partagée des objectifs et livrables
              attendus.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#f3a54d] text-[#ee7f01] text-xs font-medium">
              2
            </span>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">
              Co-construction stratégique
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Ateliers de travail conjoints, modélisation de scénarios et
              élaboration de feuilles de route pragmatiques et budgétées.
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-[#f3a54d] text-[#ee7f01] text-xs font-medium">
              3
            </span>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">
              Déploiement &amp; Pilotage
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Mise en œuvre opérationnelle, appui au management de projet et
              suivi des indicateurs de performance (KPIs).
            </p>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#ee7f01] border border-[#ee7f01] text-white text-xs font-medium">
              4
            </span>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">
              Transmission des savoirs
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Formation de vos agents, documentation des processus et transfert
              de compétences pour assurer votre autonomie pérenne.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="uppercase text-xs font-medium text-[#f3a54d] tracking-widest mb-10">
          Ils nous accordent leur confiance
        </p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale">

<span className="text-xl font-medium tracking-tighter text-slate-800">
            MINISTÈRE
          </span>
<span className="text-xl font-medium tracking-tight text-slate-800 uppercase">
            Région
          </span>
<span className="text-xl font-medium tracking-tighter text-slate-800">
            AGENCE NATIONALE
          </span>
<span className="text-xl font-medium tracking-tight text-slate-800 uppercase">
            Département
          </span>
<span className="text-xl font-medium tracking-tighter text-slate-800">
            CHU
          </span>
</div>
</div>
</section>

<section className="py-24 bg-[#fbe4c9]/20 border-t border-[#fbe4c9]/50" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
          Échangeons sur vos enjeux
        </h2>
<p className="text-base text-slate-600 mb-10 leading-relaxed">
          Nos directeurs de mission se tiennent à votre disposition pour une
          première prise de contact confidentielle afin de qualifier vos
          besoins.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 bg-[#ee7f01] text-white text-sm font-medium rounded hover:bg-[#f3a54d] transition-colors" href="#">
            Contactez-nous
          </a>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#ee7f01] text-sm font-medium border border-[#ee7f01] rounded hover:bg-[#fbe4c9]/20 transition-colors" href="#">
            Demander une plaquette
          </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<span className="text-lg font-medium tracking-tighter text-slate-900">
            VECTEUR
            <span className="text-[#ee7f01]">.</span>
</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">
            Mentions légales
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">
            Politique de confidentialité
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">
            Recrutement
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">
            LinkedIn
          </a>
</div>
<div className="text-xs text-slate-400">
          © 2023 Cabinet Vecteur. Tous droits réservés.
        </div>
</div>
</footer>

    </>
  );
}
