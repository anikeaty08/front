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
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<svg className="text-[#1E2A5E]" fill="none" height="32" stroke="#1E2A5E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"></path>
<path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-2.96 3.08 2.5 2.5 0 0 1-4.91.05L12 20V4.5Z"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-[#1E2A5E]">Révol'H</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-stone-600">
<a className="text-[#1E2A5E] transition-colors" href="#">Accueil</a>
<a className="hover:text-[#1E2A5E] transition-colors" href="#">À propos</a>
<a className="hover:text-[#1E2A5E] transition-colors" href="#">Solutions RH</a>
<a className="hover:text-[#1E2A5E] transition-colors" href="#">Méthode</a>
</div>
<button className="p-2 group">
<svg className="group-hover:stroke-[#1E2A5E] transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</nav>

<div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-40">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase [writing-mode:vertical-rl] rotate-180 mb-4">Social</span>
<div className="w-px h-12 bg-stone-300"></div>
<a className="text-stone-400 hover:text-[#1E2A5E] transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>

<section className="max-w-7xl mx-auto px-6 pt-12 pb-32 grid lg:grid-cols-12 gap-16 items-center relative">

<div className="lg:col-span-6 relative z-20">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f4eb] text-[#7D9B76] text-sm font-medium mb-8 border border-[#7D9B76]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                PCRH Constructys – accompagnement financé
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-[#1E2A5E] mb-6">
<span className="relative inline-block">
                    DRH
                    
<svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] text-[#7D9B76]/40 pointer-events-none" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 100 50">
<path d="M50,2 C75,2 98,12 98,25 C98,38 75,48 50,48 C25,48 2,38 2,25 C2,12 25,2 50,2 Z"></path>
</svg>
</span>
                à temps partagé<br/>
<span className="text-[#1a1a1a]">Vos RH autrement</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed mb-16">
                Structurer, sécuriser, développer vos ressources humaines. TPE/PME, BTP, Industrie, Associations.
            </p>
<div className="flex flex-col items-start gap-4">
<span className="text-xs font-medium text-stone-400 tracking-wider uppercase">Scroll Down</span>
<svg className="text-stone-400 animate-bounce" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>

<div className="lg:col-span-6 relative mt-12 lg:mt-0">

<div className="absolute -top-12 left-10 w-48 h-64 bg-[#f4f1eb] rounded-3xl -z-10"></div>
<div className="absolute -bottom-16 right-0 w-64 h-64 bg-[#7D9B76]/20 rounded-full -z-10"></div>

<div className="absolute bottom-8 left-[-15%] text-[8rem] font-semibold tracking-tight text-transparent [-webkit-text-stroke:1px_#1E2A5E] opacity-10 -z-10 select-none pointer-events-none">
                Révol'H
            </div>

<div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1E2A5E]/10 z-10">
<img alt="Consultante RH" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=1000"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
<div className="grid lg:grid-cols-2 gap-20">

<div className="flex flex-col">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1E2A5E] mb-6">À propos d’Aurélia CIVET</h2>
<p className="text-lg text-stone-600 leading-relaxed mb-8">
                    Consultante RH &amp; DRH généraliste à temps partagé. 15+ ans d’expérience dans l’industrie métallurgique. J’accompagne les dirigeants de TPE/PME avec pragmatisme, sans jargon, pour des RH qui servent vraiment le business.
                </p>
<a className="inline-flex items-center gap-2 text-base font-medium text-[#1E2A5E] hover:text-[#7D9B76] transition-colors group w-fit" href="#">
                    En savoir plus
                    <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-col lg:pt-16 relative">

<div className="hidden lg:block absolute -left-12 top-24 w-px h-32 bg-stone-300"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1E2A5E] mb-6">Notre vision</h2>
<p className="text-lg text-stone-600 leading-relaxed mb-8">
                    Des RH autrement : co-construites, opérationnelles et stratégiques. Chaque entreprise est unique – notre approche n’est jamais “one size fits all”. Nous croyons en l’humain comme levier de performance durable.
                </p>
<a className="inline-flex items-center gap-2 text-base font-medium text-[#1E2A5E] hover:text-[#7D9B76] transition-colors group w-fit" href="#">
                    Découvrir notre méthode
                    <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E2A5E] mb-16">Nos solutions RH</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#1E2A5E]/20 transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[320px]">
<div className="w-12 h-12 rounded-full bg-[#f4f1eb] text-[#1E2A5E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">DRH à temps partagé</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8 flex-grow">
                    2 à 4 jours/mois – opérationnel (paie, admin, contrat) + stratégique (conformité, organisation, GEPP).
                </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-stone-400 group-hover:text-[#7D9B76] transition-colors">
                    Explorer <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#1E2A5E]/20 transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[320px]">
<div className="w-12 h-12 rounded-full bg-[#f0f4eb] text-[#7D9B76] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Diagnostic PCRH</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8 flex-grow">
                    2 jours d’audit + plan d’action co-construit. Financement OPCO – idéal pour TPE/PME du BTP.
                </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-stone-400 group-hover:text-[#7D9B76] transition-colors">
                    Explorer <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#1E2A5E]/20 transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[320px]">
<div className="w-12 h-12 rounded-full bg-[#f4f1eb] text-[#1E2A5E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Lean RH &amp; RSE</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8 flex-grow">
                    Simplification des process, poly-compétences, rituels de pilotage, QVCT, accompagnement au changement.
                </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-stone-400 group-hover:text-[#7D9B76] transition-colors">
                    Explorer <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#1E2A5E]/20 transition-all duration-500 overflow-hidden flex flex-col h-full min-h-[320px]">
<div className="w-12 h-12 rounded-full bg-[#f0f4eb] text-[#7D9B76] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Bilan compétences</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8 flex-grow">
                    Accompagnement sur mesure pour faire le point sur vos acquis, vos aptitudes et vos motivations.
                </p>
<div className="mt-auto flex items-center gap-2 text-sm font-medium text-stone-400 group-hover:text-[#7D9B76] transition-colors">
                    Explorer <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 bg-white rounded-[3rem] shadow-sm border border-stone-100 my-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square rounded-[2rem] bg-[#f0f4eb] flex items-center justify-center p-12 overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#7D9B76]/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E2A5E]/5 rounded-full blur-3xl"></div>
<svg className="relative z-10 opacity-80" fill="none" height="120" stroke="#1E2A5E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>

<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E2A5E] mb-12">Notre méthode<br/>en 4 étapes</h2>
<div className="flex flex-col gap-4">

<div className="group flex flex-col p-6 bg-[#1E2A5E] text-white rounded-2xl cursor-pointer shadow-lg shadow-[#1E2A5E]/20">
<div className="flex justify-between items-center w-full">
<span className="text-lg font-medium">Étape 1 – Diagnostic terrain</span>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<p className="mt-4 text-base text-stone-300 leading-relaxed">
                            Entretiens individuels, analyse des écarts, méthode QOQCCP pour comprendre la réalité de votre organisation.
                        </p>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#7D9B76] hover:text-white transition-colors" href="#">
                            En savoir plus <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group flex justify-between items-center p-6 bg-[#fcfbf9] border border-stone-200 rounded-2xl hover:border-[#1E2A5E]/30 transition-colors cursor-pointer">
<span className="text-lg font-medium text-[#1E2A5E]">Étape 2 – Co‑construction du plan</span>
<svg className="text-stone-400 group-hover:text-[#1E2A5E] transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="group flex justify-between items-center p-6 bg-[#fcfbf9] border border-stone-200 rounded-2xl hover:border-[#1E2A5E]/30 transition-colors cursor-pointer">
<span className="text-lg font-medium text-[#1E2A5E]">Étape 3 – Déploiement Lean RH</span>
<svg className="text-stone-400 group-hover:text-[#1E2A5E] transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="group flex justify-between items-center p-6 bg-[#fcfbf9] border border-stone-200 rounded-2xl hover:border-[#1E2A5E]/30 transition-colors cursor-pointer">
<span className="text-lg font-medium text-[#1E2A5E]">Étape 4 – Autonomie &amp; transfert</span>
<svg className="text-stone-400 group-hover:text-[#1E2A5E] transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-stone-200">
<h2 className="text-2xl font-medium text-stone-500 mb-12">Ce que pensent nos clients</h2>
<div className="relative">

<svg className="absolute -top-8 -left-6 opacity-30" fill="none" height="64" stroke="#7D9B76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<p className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-tight text-[#1E2A5E] mb-12 relative z-10 max-w-5xl">
                "Avec Aurélia, nous avons structuré nos RH en 3 mois. Le diagnostic PCRH nous a ouvert les financements Constructys. Aujourd’hui, on gagne en sérénité et nos équipes sont mieux accompagnées."
            </p>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="border-b border-stone-300 pb-1 w-fit">
<span className="text-sm font-semibold tracking-wider uppercase text-[#1a1a1a]">Dirigeant – TPE BTP</span>
</div>

<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#1E2A5E] hover:text-[#1E2A5E] transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-[#1E2A5E] flex items-center justify-center text-white hover:bg-[#151f47] transition-colors shadow-lg shadow-[#1E2A5E]/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E2A5E] mb-16">Ressources &amp; Téléchargements</h2>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-[#f0f4eb] rounded-3xl p-10 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
<span className="text-xs font-semibold tracking-wider uppercase text-[#7D9B76] mb-4">Profil</span>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Mon CV</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8">Découvrez mon parcours, mes expertises et mes expériences dans l'industrie.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#7D9B76] hover:text-[#1E2A5E] transition-colors" href="#">
                    📄 Télécharger le CV <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-[#f4f1eb] rounded-3xl p-10 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
<span className="text-xs font-semibold tracking-wider uppercase text-[#d97757] mb-4">Exemple</span>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Livrable PCRH Constructys</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8">Exemple d’accompagnement anonymisé – diagnostic approfondi et plan d’action.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#d97757] hover:text-[#1E2A5E] transition-colors" href="#">
                    Télécharger le livrable <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white border border-stone-200 rounded-3xl p-10 flex flex-col items-start hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<span className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-4">Contact</span>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E] mb-4">Prenez RDV</h3>
<p className="text-lg text-stone-600 leading-relaxed mb-8">15 min offertes en visio pour échanger sur vos problématiques et vos besoins RH actuels.</p>
<a className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#1E2A5E] hover:text-[#7D9B76] transition-colors" href="#">
                    Calendly <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
<div className="grid lg:grid-cols-2 gap-16">

<div className="border border-stone-200 rounded-3xl p-8 bg-white flex flex-col gap-6">
<div className="flex items-center gap-3 mb-2">
<svg fill="none" height="24" stroke="#0077b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<h3 className="text-2xl font-medium tracking-tight text-[#1E2A5E]">Suivez-moi</h3>
</div>
<a className="text-sm font-medium text-[#0077b5] hover:underline block truncate" href="#">
                    linkedin.com/in/aurelia-civet-revol-h
                </a>
<p className="text-lg text-stone-600 leading-relaxed">
                    “Ensemble, transformons vos RH en levier de performance. Je suis là pour vous aider à réussir en alliant pragmatisme et stratégie.”
                </p>

<div className="w-full h-32 bg-stone-100 rounded-xl mt-4 overflow-hidden">
<img alt="Bureau" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=400"/>
</div>
</div>

<div className="flex flex-col justify-center lg:pl-12">
<h3 className="text-4xl font-semibold tracking-tight text-[#1E2A5E] mb-12">Contactez-nous</h3>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-lg text-stone-600 hover:text-[#1E2A5E] transition-colors group" href="tel:+33600000000">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#f0f4eb] group-hover:text-[#7D9B76] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
                        +33 6 XX XX XX XX
                    </a>
<a className="flex items-center gap-4 text-lg text-stone-600 hover:text-[#1E2A5E] transition-colors group" href="mailto:aurelia@revol-h.fr">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#f0f4eb] group-hover:text-[#7D9B76] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
                        aurelia@revol-h.fr
                    </a>
<div className="flex items-center gap-4 text-lg text-stone-600 mt-2">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
                        Consultante mobile – Île-de-France &amp; national
                    </div>
</div>
</div>
</div>
<div className="mt-24 text-center">
<p className="text-sm text-stone-400">© 2024 Révol'H par Aurélia CIVET. Tous droits réservés.</p>
</div>
</footer>

    </>
  );
}
