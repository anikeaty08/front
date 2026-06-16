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



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 w-full z-50 border-b border-white/10">
<div className="container mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 rounded-lg bg-[#1E2A5E] flex items-center justify-center border border-white/20">
<span className="font-semibold text-lg">R</span>
</div>
<span className="font-semibold tracking-tight text-xl">Révol’H</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm">
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">Accueil <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-white flex items-center gap-1" href="#">À propos <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">Expertises <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-white hover:text-white/80 hidden md:block">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="hidden md:inline-flex items-center gap-2 bg-[#FDE68A] text-slate-900 px-5 py-2.5 rounded text-sm font-medium hover:bg-[#FCD34D] transition-colors" href="#">
                    CONTACT <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative bg-[#1E2A5E] pt-40 pb-28 overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="43.4" id="hexagons" patterntransform="scale(2)" patternunits="userSpaceOnUse" width="50">
<path d="M25 0L50 14.4v28.8L25 57.7 0 43.4V14.4z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#hexagons)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
                    À propos de Révol’H
                </h1>
<div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-8">
<a className="hover:text-white transition-colors" href="#">Accueil</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-[#FDE68A]">À propos</span>
</div>
<p className="text-lg text-white/80 max-w-2xl">
                    Consultante RH &amp; DRH à temps partagé pour TPE/PME
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="container mx-auto px-6">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
<div className="max-w-2xl">
<div className="flex items-center gap-2 text-[#1E2A5E] font-medium text-sm mb-4">
<i className="w-4 h-4" data-lucide="award" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Nos valeurs</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                        Nos valeurs et notre approche
                    </h2>
</div>
<a className="inline-flex items-center gap-2 bg-[#FDE68A] text-slate-900 px-6 py-3 rounded text-sm font-medium hover:bg-[#FCD34D] transition-colors shrink-0" href="#">
                    NOUS CONTACTER <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-10">

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-[#1E2A5E] text-white flex items-center justify-center font-semibold text-xl shrink-0 shadow-lg shadow-[#1E2A5E]/20 transition-transform group-hover:scale-105">
                            01
                        </div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-[#1E2A5E] transition-colors">Une approche sur mesure</h3>
<p className="text-base text-slate-600 leading-relaxed">
                                Chaque entreprise est unique – pas de solution standard. Je co-construis avec vous votre stratégie RH, adaptée à votre culture et vos enjeux.
                            </p>
</div>
</div>
<div className="w-full h-px bg-slate-100 ml-20 hidden md:block"></div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-[#1E2A5E] text-white flex items-center justify-center font-semibold text-xl shrink-0 shadow-lg shadow-[#1E2A5E]/20 transition-transform group-hover:scale-105">
                            02
                        </div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-[#1E2A5E] transition-colors">Un partenaire de confiance</h3>
<p className="text-base text-slate-600 leading-relaxed">
                                15+ ans d’expérience dans l’industrie métallurgique. Un interlocuteur unique, pragmatique, sans jargon, et proche du terrain.
                            </p>
</div>
</div>
<div className="w-full h-px bg-slate-100 ml-20 hidden md:block"></div>

<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-full bg-[#1E2A5E] text-white flex items-center justify-center font-semibold text-xl shrink-0 shadow-lg shadow-[#1E2A5E]/20 transition-transform group-hover:scale-105">
                            03
                        </div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-[#1E2A5E] transition-colors">Des résultats concrets</h3>
<p className="text-base text-slate-600 leading-relaxed">
                                Structuration RH, sécurisation juridique, fidélisation des talents – mesurés par des indicateurs clairs et un suivi dans la durée.
                            </p>
</div>
</div>
</div>

<div className="relative h-full min-h-[500px]">
<img alt="Consulting meeting" className="absolute inset-0 w-full h-full object-cover rounded-3xl" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 text-white">
<p className="text-lg md:text-xl font-medium italic leading-relaxed">
                            "L'humain au cœur de la stratégie d'entreprise pour allier performance et bien-être au travail."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E2A5E] text-white overflow-hidden relative">
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-none">
<img alt="Expertise RH" className="rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white rounded-full flex items-center justify-center text-[#1E2A5E] shadow-xl border-4 border-[#1E2A5E]">
<svg className="w-full h-full spin-slow" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="textPath"></path>
<text className="text-[11px] font-semibold tracking-widest uppercase">
<textpath href="#textPath" startoffset="0%">• Explore More • Explore More</textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-8 h-8" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 text-[#FDE68A] font-medium text-sm mb-4">
<i className="w-4 h-4" data-lucide="check-square" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Pourquoi nous choisir</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
                        Nos expertises
                    </h2>

<div className="flex flex-col gap-10 mb-12">
<div className="relative pl-12">
<div className="absolute left-0 top-1 text-[#FDE68A]">
<i className="w-7 h-7" data-lucide="check-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">
                                DRH à temps partagé
                            </h3>
<p className="text-base text-white/70 leading-relaxed border-b border-white/10 pb-10">
                                Opérationnel et stratégique, un accompagnement sur mesure pour structurer et piloter vos ressources humaines au quotidien.
                            </p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 text-[#FDE68A]">
<i className="w-7 h-7" data-lucide="check-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">
                                Diagnostic PCRH Constructys
                            </h3>
<p className="text-base text-white/70 leading-relaxed">
                                Analyse approfondie de vos pratiques et élaboration d'un plan d'action subventionné pour optimiser votre gestion RH.
                            </p>
</div>
</div>

<div className="bg-[#FDE68A] text-slate-900 rounded-3xl p-8 md:p-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shrink-0 border border-slate-900/10">
<i className="w-6 h-6 text-slate-900" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg tracking-tight mb-1">Lean RH &amp; RSE</h4>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shrink-0 border border-slate-900/10">
<i className="w-6 h-6 text-slate-900" data-lucide="folder-open" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg tracking-tight mb-1">Gestion administrative</h4>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shrink-0 border border-slate-900/10">
<i className="w-6 h-6 text-slate-900" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg tracking-tight mb-1">Recrutement</h4>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shrink-0 border border-slate-900/10">
<i className="w-6 h-6 text-slate-900" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg tracking-tight mb-1">Développement des compétences</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 text-[#1E2A5E] font-medium text-sm mb-4">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i>
<span className="uppercase tracking-wider">Membres de l'équipe</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                    L’équipe Révol’H
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-100 rounded-3xl overflow-hidden flex flex-col group">
<div className="h-80 md:h-96 relative overflow-hidden">
<img alt="Aurélia CIVET" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 flex flex-col items-center flex-grow text-center">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Aurélia CIVET</h3>
<p className="text-sm font-medium text-slate-500 mb-6">Consultante RH &amp; DRH à temps partagé</p>
<div className="mt-auto flex gap-3">
<a className="w-10 h-10 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-[#1E2A5E] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-3xl overflow-hidden flex flex-col group">
<div className="h-80 md:h-96 relative overflow-hidden">
<img alt="Olivier CIVET" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 flex flex-col items-center flex-grow text-center">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Olivier CIVET</h3>
<p className="text-sm font-medium text-slate-500 mb-6">Expert Lean Management</p>
<div className="mt-auto flex gap-3">
<a className="w-10 h-10 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-[#1E2A5E] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-3xl overflow-hidden flex flex-col group">
<div className="h-80 md:h-96 relative overflow-hidden">
<img alt="Sarah HUIN" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8 flex flex-col items-center flex-grow text-center">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Sarah HUIN</h3>
<p className="text-sm font-medium text-slate-500 mb-6">Experte RSE</p>
<div className="mt-auto flex gap-3">
<a className="w-10 h-10 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-[#1E2A5E] hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-2 mt-12">
<div className="w-2.5 h-2.5 rounded-full bg-[#1E2A5E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden mt-auto">

<div className="absolute inset-0 bg-gradient-to-br from-[#1E2A5E]/20 to-transparent pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-8 h-8 rounded-lg bg-[#1E2A5E] flex items-center justify-center">
<span className="font-semibold text-lg">R</span>
</div>
<span className="font-semibold tracking-tight text-xl">Révol’H</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8">
                        Au cœur de notre philosophie réside la conviction qu'un environnement de travail épanouissant s'enracine dans le respect, l'engagement et la croissance continue.
                    </p>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#FDE68A] transition-colors" placeholder="Adresse email" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded bg-[#1E2A5E] flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#FDE68A]"></span> Liens rapides
                    </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> À propos</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> Nos expertises</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> L'équipe</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#FDE68A]"></span> Nos Services
                    </h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> DRH Temps Partagé</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> Diagnostic PCRH</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> Recrutement</a></li>
<li><a className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors" href="#"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> Lean RH</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#FDE68A]"></span> Contact
                    </h4>
<div className="flex flex-col gap-6">
<div>
<span className="block text-xs text-[#FDE68A] uppercase tracking-wider mb-1">Téléphone</span>
<p className="text-base font-medium">+33 (0)6 00 00 00 00</p>
</div>
<div>
<span className="block text-xs text-[#FDE68A] uppercase tracking-wider mb-1">Email</span>
<p className="text-sm text-white/80">contact@revolh.fr</p>
</div>
<div>
<span className="block text-xs text-[#FDE68A] uppercase tracking-wider mb-1">Localisation</span>
<p className="text-sm text-white/80">France</p>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-white/60 text-center md:text-left">
                    © 2026 Révol’H – Consultante RH &amp; DRH à temps partagé
                </p>
<div className="flex items-center gap-6">
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">Mentions légales</a>
</div>
</div>
</div>

<button className="absolute bottom-10 right-6 w-10 h-10 rounded-full bg-[#1E2A5E] border border-white/10 flex items-center justify-center text-white hover:bg-opacity-80 transition-colors z-20">
<i className="w-5 h-5" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</footer>


    </>
  );
}
