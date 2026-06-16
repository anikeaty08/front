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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
DEFAULT: '#1E2A5E',
dark: '#151d42'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 py-6 px-8">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-900" href="#">
<i className="text-navy" data-lucide="layers" strokeWidth="1.5"></i>
                Révol’H
            </a>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-900">
<a className="hover:text-navy transition-colors" href="#services">Services</a>
<a className="hover:text-navy transition-colors" href="#pourquoi">Pourquoi nous</a>
<a className="hover:text-navy transition-colors" href="#ressources">Ressources</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-navy/5 text-navy px-6 py-2.5 rounded-full font-medium hover:bg-navy/10 transition-colors" href="#contact">
                Contact <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<section className="relative pt-40 pb-24 px-8 overflow-hidden bg-[#F9FAFB]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

<div className="lg:w-[55%] flex flex-col items-start">
<div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-navy px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
<span className="text-green-600">✅</span> PCRH Constructys – accompagnement financé
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                    DRH à temps partagé <br/>
<span className="text-slate-500 font-medium text-4xl lg:text-5xl mt-2 block">Vos RH autrement</span>
</h1>
<p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-12 max-w-xl">
                    Structurer, sécuriser, développer vos ressources humaines. TPE/PME, BTP, Industrie, Associations.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full">
<a className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-navy-dark transition-colors shadow-lg shadow-navy/20" href="#contact">
                        Prendre RDV 15 min offert <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
<div className="flex items-center gap-3 text-slate-900 font-medium">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-navy">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<span className="text-lg">+33 6 XX XX XX XX</span>
</div>
</div>
<div className="hidden lg:flex absolute left-[-4rem] top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium tracking-widest text-slate-400 uppercase items-center gap-4">
<span className="w-12 h-px bg-slate-300"></span> Scroll to explore
                </div>
</div>

<div className="lg:w-[45%] relative w-full aspect-[4/5] lg:aspect-auto lg:h-[650px]">
<div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
<img alt="Consultante RH" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="absolute top-12 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center gap-2 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex gap-1 text-green-500">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Expertise Secteur</span>
</div>

<div className="absolute bottom-24 -left-12 bg-[#FFD700] text-slate-900 p-8 rounded-full shadow-2xl shadow-[#FFD700]/20 flex flex-col items-center justify-center w-36 h-36">
<i className="w-8 h-8 mb-1" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-3xl font-semibold tracking-tight">15+</span>
<span className="text-sm font-medium">Ans d'exp.</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 text-navy text-sm font-medium uppercase tracking-wider mb-4">
<i className="w-4 h-4" data-lucide="git-merge" strokeWidth="1.5"></i> Nos Services
                </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Solutions Ressources Humaines</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Transformer les environnements de travail grâce à des solutions RH innovantes et adaptées à vos enjeux.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
<div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/3]">
<img alt="DRH" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-6 w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
</div>
<div className="px-2">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">DRH à temps partagé</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">2 à 4 jours/mois – opérationnel (paie, admin, contrat) + stratégique (conformité, organisation, GEPP).</p>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
<div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/3]">
<img alt="Audit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-6 w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
<i className="w-6 h-6" data-lucide="clipboard-check" strokeWidth="1.5"></i>
</div>
</div>
<div className="px-2">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Diagnostic PCRH Constructys</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">2 jours d’audit + plan d’action co-construit. Financement OPCO – idéal pour TPE/PME du BTP.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
<div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/3]">
<img alt="Lean RH" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-6 w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
</div>
<div className="px-2">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Lean RH &amp; RSE</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6">Simplification des process, poly-compétences, rituels de pilotage, QVCT, accompagnement au changement.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-[#F9FAFB] border-t border-slate-100" id="pourquoi">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 text-navy text-sm font-medium uppercase tracking-wider mb-6">
<i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i> À propos
                </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-16">Pourquoi choisir Révol’H ?</h2>
<div className="space-y-12">

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold shadow-md">01</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Une approche sur mesure</h3>
<p className="text-lg text-slate-600 leading-relaxed">Chaque entreprise est unique – pas de solution standard. Je co-construis avec vous votre stratégie RH.</p>
</div>
</div>

<div className="flex gap-6 items-start relative">
<div className="absolute left-8 top-16 bottom-[-3rem] w-px bg-slate-200 -z-10 hidden sm:block"></div>
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold shadow-md">02</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Un partenaire de confiance</h3>
<p className="text-lg text-slate-600 leading-relaxed">15+ ans d’expérience dans l’industrie. Un interlocuteur unique, pragmatique et sans jargon.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold shadow-md">03</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Des résultats concrets</h3>
<p className="text-lg text-slate-600 leading-relaxed">Structuration RH, sécurisation juridique, fidélisation des talents – mesurés par des indicateurs clairs.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 relative w-full">
<div className="rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Réunion" className="w-full object-cover h-[600px]" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent pt-32 pb-10 px-10">
<p className="text-white text-xl font-medium italic">"To win in the marketplace, you must first win in the workplace."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 bg-white text-center">
<div className="max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 text-navy text-sm font-medium uppercase tracking-wider mb-12">
<i className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></i> Ce que pensent nos clients
            </div>
<i className="w-16 h-16 text-slate-100 mx-auto mb-8" data-lucide="quote" strokeWidth="1.5"></i>
<blockquote className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 leading-[1.4] mb-12">
                "Avec Aurélia, nous avons structuré nos RH en 3 mois. Le diagnostic PCRH nous a ouvert les financements Constructys. Aujourd'hui, on gagne en sérénité et nos équipes sont mieux accompagnées."
            </blockquote>
<div className="flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 mb-2">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="text-lg font-semibold text-slate-900">Dirigeant</div>
<div className="text-base text-slate-500">TPE BTP (anonymisé)</div>
</div>
</div>
</section>

<section className="w-full flex flex-col md:flex-row h-auto md:h-[600px]" id="ressources">

<div className="w-full md:w-1/2 relative group overflow-hidden bg-slate-900 h-[500px] md:h-full">
<img alt="CV" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-end">
<div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium border border-white/20 rounded-full px-4 py-1.5 w-fit mb-6">
                    Expertise
                </div>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">Mon CV</h3>
<p className="text-lg text-slate-300 max-w-md mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Découvrez mon parcours et mes 15+ ans d’expertise RH dans l’industrie.
                </p>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-slate-300 transition-colors" href="#">
                    Télécharger le CV (PDF) <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="absolute top-8 right-12 text-9xl font-semibold text-white/5 pointer-events-none select-none">01</div>
</div>

<div className="w-full md:w-1/2 relative group overflow-hidden bg-[#1a2340] h-[500px] md:h-full">
<img alt="Livrable" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a2340] via-[#1a2340]/60 to-transparent"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-end">
<div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium border border-white/20 rounded-full px-4 py-1.5 w-fit mb-6">
                    Cas Pratique
                </div>
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">Livrable PCRH Constructys</h3>
<p className="text-lg text-slate-300 max-w-md mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Exemple d’accompagnement anonymisé – diagnostic approfondi et plan d’action.
                </p>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-slate-300 transition-colors" href="#">
                    Télécharger le livrable (PDF) <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="absolute top-8 right-12 text-9xl font-semibold text-white/5 pointer-events-none select-none">02</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-32 pb-12 px-8" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-20 mb-12 gap-12">
<div className="max-w-xl">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-white">Contactez-nous</h2>
<p className="text-xl text-slate-400 mb-8 leading-relaxed">Pour échanger sur vos besoins RH ou prendre un rendez-vous.</p>
<div className="space-y-4">
<a className="flex items-center gap-4 text-xl font-medium text-slate-200 hover:text-white transition-colors" href="mailto:aurelia@revol-h.fr">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
                            aurelia@revol-h.fr
                        </a>
<div className="flex items-center gap-4 text-xl font-medium text-slate-200">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
                            +33 6 XX XX XX XX
                        </div>
</div>
</div>
<button className="bg-white text-navy px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-3">
                    Envoyer un message <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-500 text-base">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="layers" strokeWidth="1.5"></i>
<p>© 2025 Révol’H – Consultante RH &amp; DRH à temps partagé.</p>
</div>
<div className="flex gap-4">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
