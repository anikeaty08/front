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



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 glass-nav border-b border-zinc-200/50 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="font-medium text-base tracking-tight text-zinc-900">Nadir Imedjoubene Conseils</span>
</div>
<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#programme">Le Programme</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#pour-qui">Pour Qui ?</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#temoignages">Témoignages</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center">
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow" href="#appel">
                        Réserver un Appel
                    </a>
</div>
<div className="md:hidden flex items-center">
<button className="text-zinc-900 p-1" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-zinc-200 absolute w-full left-0 shadow-lg" id="mobile-menu">
<div className="px-6 py-4 flex flex-col space-y-4">
<a className="text-base font-medium text-zinc-800" href="#programme">Le Programme</a>
<a className="text-base font-medium text-zinc-800" href="#pour-qui">Pour Qui ?</a>
<a className="text-base font-medium text-zinc-800" href="#temoignages">Témoignages</a>
<a className="text-base font-medium text-zinc-800" href="#faq">FAQ</a>
<a className="bg-zinc-900 text-white text-center text-sm font-medium px-4 py-3 rounded-xl mt-2" href="#appel">Réserver un Appel</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/50 mb-8 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-zinc-500 text-sm" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-700">Formation Hybride : Digital + Coaching Live</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6 max-w-4xl mx-auto">
                Manager avec Confiance, <br className="hidden sm:block"/>
<span className="gradient-text">Sans Perdre Qui Vous Êtes</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-600 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                Un programme pour les managers et dirigeants qui veulent transformer leur posture managériale — sans formation classique de 2 jours, sans perdre du temps.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-900 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-800 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2" href="#appel">
                    Réserver un Appel Découverte
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-50 transition-all duration-300 flex items-center justify-center" href="#programme">
                    Découvrir le Programme
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/60">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Vous Vous Reconnaissez ?</h2>
<p className="text-lg text-zinc-600 leading-relaxed">
                    Quand je rencontre un manager pour la première fois, je vois toujours la même chose : un mélange d'envie de bien faire… et d'épuisement silencieux.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Vous arrivez avant tout le monde, repartez après</h3>
<p className="text-base text-zinc-600 leading-relaxed">Vous êtes constamment débordé, mais c'est vous qui vous mettez inconsciemment sous l'eau. Vous ne savez plus dire non.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:mask-happly-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Votre équipe ne vous dit rien en face</h3>
<p className="text-base text-zinc-600 leading-relaxed">Vous naviguez à l'aveugle. Aucun retour, aucun feedback. Vous doutez de votre légitimité mais vous ne savez pas pourquoi.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Vous croyez que tout dépend de vous</h3>
<p className="text-base text-zinc-600 leading-relaxed">Vous portez tout sur vos épaules. Si vous n'êtes pas là, vous pensez que ça va se casser la gueule. Vous ne déléguez jamais vraiment.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Vous jouez un rôle qui ne vous ressemble pas</h3>
<p className="text-base text-zinc-600 leading-relaxed">Vous pensez qu'un bon manager doit être extraverti, parfait, toujours contrôler. Vous performez en surface, mais vous vivez mal votre rôle.</p>
</div>
</div>
<div className="mt-12 p-6 rounded-2xl bg-zinc-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:info-circle-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-300 leading-relaxed font-medium">
<span className="text-white">Ce n'est pas de votre faute.</span> On vous a promu parce que vous étiez excellent dans votre métier — pas parce qu'on vous a formé à manager. Vous avez manqué une transition essentielle : celle d'exécutant à stratégiste.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 sticky top-24">Ce Que Tout le Monde Croit (Et Qui Est Faux)</h2>
<p className="text-base text-zinc-600 leading-relaxed mb-8">
                        Vos blocages ne sont pas techniques. Ils naissent de croyances fausses sur ce que devrait être un bon manager. Voici les 4 mythes que je déconstruis dans chaque accompagnement.
                    </p>
</div>
<div className="lg:w-2/3 space-y-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-start gap-4">
<span className="text-sm font-semibold text-zinc-400 mt-1">01</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">"Pour être un bon manager, il faut être extraverti"</h3>
<p className="text-sm text-zinc-500 mb-3 uppercase tracking-wider font-medium">Faux</p>
<p className="text-base text-zinc-600 leading-relaxed">Le leadership se ressent, il ne se voit pas forcément. Vous vous forcez à être quelqu'un d'autre, vous performez en surface, mais vous vivez mal votre rôle. <span className="font-medium text-zinc-900">La vérité : on manage comme on est.</span></p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-start gap-4">
<span className="text-sm font-semibold text-zinc-400 mt-1">02</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">"Je dois être parfait pour être respecté"</h3>
<p className="text-sm text-zinc-500 mb-3 uppercase tracking-wider font-medium">Faux</p>
<p className="text-base text-zinc-600 leading-relaxed">Cette injonction vous pousse au perfectionnisme, vous empêche de déléguer, vous noie sous la charge mentale. <span className="font-medium text-zinc-900">La vérité : on a appris à marcher en tombant 2000 fois. L'erreur est humaine et nécessaire.</span></p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-start gap-4">
<span className="text-sm font-semibold text-zinc-400 mt-1">03</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">"Tout est de ma responsabilité"</h3>
<p className="text-sm text-zinc-500 mb-3 uppercase tracking-wider font-medium">Faux</p>
<p className="text-base text-zinc-600 leading-relaxed">Vous avez oublié que dans la relation, il y a l'autre. La relation managériale est une co-construction. Vous sur-portez, vous vous épuisez, vous micro-managez. <span className="font-medium text-zinc-900">La vérité : vous n'êtes pas seul responsable de tout.</span></p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-start gap-4">
<span className="text-sm font-semibold text-zinc-400 mt-1">04</span>
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">"Si je ne suis pas là, ça va se casser la gueule"</h3>
<p className="text-sm text-zinc-500 mb-3 uppercase tracking-wider font-medium">Faux</p>
<p className="text-base text-zinc-600 leading-relaxed">Vous vous sentez indispensable et irremplaçable. Résultat : vous restez bloqué dans l'opérationnel, vous ne prenez jamais de hauteur stratégique. <span className="font-medium text-zinc-900">La vérité : déléguer, c'est grandir votre équipe ET vous libérer.</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Ce Que Vous Allez Vivre</h2>
<p className="text-lg text-zinc-600 leading-relaxed">
                Ce programme ne vous apprend pas à manager. Il vous reconnecte à votre puissance personnelle pour que vous mangiez avec authenticité, confiance et légitimité.
            </p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez cesser de vous traîner le poids de la perfection — et vous donner enfin le droit à l'erreur.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez arrêter de tout porter seul — et comprendre que la relation managériale est une co-construction.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez manager avec votre propre personnalité — sans masque, sans forcer, en étant vous-même.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez reprendre le contrôle de votre temps et de votre énergie — sans culpabilité permanente.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez avoir une équipe qui prend des initiatives — parce que vous aurez appris à déléguer vraiment.</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-zinc-900" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-base text-zinc-700 leading-relaxed">Vous allez vous sentir légitime, enfin — et vous regarder dans le miroir en vous disant : je suis à ma place.</p>
</div>
</div>
<div className="mt-16 text-center">
<blockquote className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 italic max-w-3xl mx-auto">
                    "Je les connecte à leur puissance personnelle. Et là, c'est l'effet que ça me fait : waouh, c'est trop bon."
                </blockquote>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/60" id="programme">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Un Programme Hybride en 4 Modules</h2>
<p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
                    Conçu pour les managers qui n'ont pas le temps de bloquer 2 jours en salle — mais qui ont la motivation de progresser vraiment. En asynchrone, vous progressez à votre rythme. En live, vous êtes accompagné directement par Céline.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full group">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Module 1</span>
<iconify-icon className="text-zinc-300 text-2xl group-hover:text-zinc-900 transition-colors" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">La Posture Managériale</h3>
<p className="text-base text-zinc-600 mb-6 flex-grow">Déconstruisez les 4 mythes qui vous bloquent. Comprenez ce que manager signifie vraiment : passer d'expert à stratégiste. Posez les bases d'un management aligné avec qui vous êtes.</p>
<ul className="space-y-3 text-sm text-zinc-700">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Identification et déconstruction des croyances</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Storytelling et études de cas réels</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Transition d'exécutant à stratégique</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full group">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Module 2</span>
<iconify-icon className="text-zinc-300 text-2xl group-hover:text-zinc-900 transition-colors" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Structurer et Animer son Équipe</h3>
<p className="text-base text-zinc-600 mb-6 flex-grow">Apprenez à construire des relations managériales solides. La confiance comme a priori positif. Le feedback, les réunions efficaces, la posture managériale vs collègue.</p>
<ul className="space-y-3 text-sm text-zinc-700">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> La relation comme co-construction</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Donner et recevoir du feedback</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Structurer et animer des réunions</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full group">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Module 3</span>
<iconify-icon className="text-zinc-300 text-2xl group-hover:text-zinc-900 transition-colors" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Outils de Pilotage Managérial</h3>
<p className="text-base text-zinc-600 mb-6 flex-grow">Des outils concrets pour reprendre le contrôle et sortir la tête du guidon. Sens/Processus/Contenu, Cycle de l'Autonomie, Matrice d'Eisenhower appliquée.</p>
<ul className="space-y-3 text-sm text-zinc-700">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Autodiagnostic individuel et équipe</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Priorisation : urgent vs important</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Bibliothèque d'outils téléchargeables</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full group">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Module 4</span>
<iconify-icon className="text-zinc-300 text-2xl group-hover:text-zinc-900 transition-colors" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">L'Écosystème du Manager</h3>
<p className="text-base text-zinc-600 mb-6 flex-grow">Comprenez votre environnement professionnel. Les différents types de managers, la relation avec les RH, les parties prenantes, l'installation de votre légitimité.</p>
<ul className="space-y-3 text-sm text-zinc-700">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Naviguer dans la complexité</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Gérer les relations vers le haut et le bas</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon> Installer votre légitimité</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex bg-zinc-900 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-800 transition-all duration-300 items-center justify-center gap-2" href="#appel">
                    Réserver un Appel Découverte
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-12">Ce Que Vous Obtenez</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Accès à la plateforme de formation</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Navigation libre et dynamique à travers les 4 modules. Vidéos de Céline, ton naturel, pas de script robotique.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Études de cas réels</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Tirées de 10 ans de coaching (anonymisées). Vous vous reconnaîtrez dans ces histoires.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Outils téléchargeables</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Fiches pratiques, checklists, modèles à appliquer dès le lendemain dans votre quotidien managérial.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:pen-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Exercices de mise en pratique</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Questions ouvertes, mises en situation, exercices terrain. Chaque module se termine par un plus petit pas possible.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Sessions de coaching live</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Accompagnement personnalisé en visio avec Céline. Travail direct sur votre situation, vos équipes, vos blocages réels.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-700 text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Bibliothèque d'outils</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Ressources bonus à consulter selon vos besoins spécifiques. Accès possible à une ressource 'femmes managers'.</p>
</div>
</div>
<div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-center">
<p className="text-sm font-medium text-zinc-700">
<span className="text-zinc-900 font-semibold">~7 heures d'accompagnement total :</span> 3-4h de contenu digital dense + 3h de coaching live personnalisé. La profondeur du coaching + l'efficacité du digital.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white selection:bg-zinc-700 selection:text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">Ce Programme Ne Ressemble à Rien de Ce Que Vous Avez Déjà Vu</h2>
<p className="text-lg text-zinc-400 leading-relaxed">Ce n'est pas une formation de 2 jours où vous repartez la tête farcie d'outils que vous n'appliquerez jamais. Ce n'est pas non plus du coaching qui dure des mois et coûte une fortune.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Un Format Hybride Unique</h3>
<p className="text-base text-zinc-400 leading-relaxed">La flexibilité du digital + la profondeur du coaching humain. Vous progressez à votre rythme (tôt le matin, tard le soir, le weekend) et vous êtes accompagné en live sur votre réalité managériale.</p>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Je Pars Toujours de la Personne, Pas des Outils</h3>
<p className="text-base text-zinc-400 leading-relaxed">Avant de vous donner un modèle, je vous aide à comprendre pourquoi vous managez comme vous le faites. Parce que les blocages managériaux sont des problèmes de posture, pas de méthode.</p>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Conçu Selon les Sciences de l'Apprentissage</h3>
<p className="text-base text-zinc-400 leading-relaxed">Capsules émotionnelles pour engager, textes pour ancrer, exercices pour pratiquer. Chaque module se termine par un seul 'plus petit pas possible' : une action à mettre en place dès demain.</p>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Je Vends une Transformation Identitaire</h3>
<p className="text-base text-zinc-400 leading-relaxed">Les autres formations apprennent à faire. Mon programme change la façon d'être. De 'je joue un rôle' à 'je manage en étant moi-même'. De 'je porte tout' à 'je co-construis'.</p>
</div>
</div>
<div className="mt-16 pt-12 border-t border-zinc-800 flex flex-col md:flex-row gap-6 items-center">
<div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-zinc-700">

<img alt="Céline" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">J'ai Vécu Ce Que J'Enseigne</h4>
<p className="text-sm text-zinc-400 leading-relaxed">15 métiers différents, 18 déménagements en 20 ans, responsable de magasin avec 80+ personnes. Je ne suis pas une théoricienne. Je comprends de l'intérieur ce que c'est d'être perdu, de douter de sa légitimité, de se construire sans filet.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pour-qui">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Ce Programme Est Fait Pour Vous Si...</h2>
<div className="space-y-6">
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Vous êtes Primo-Manager
                            </h3>
<p className="text-sm text-zinc-600 pl-6">Promu parce que vous étiez excellent dans votre métier (pas parce qu'on vous a formé). Vous gérez 2 à 30 personnes et êtes pris en sandwich entre hiérarchie et équipe.</p>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-zinc-900 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Vous êtes Dirigeant de PME ou Profession Libérale
                            </h3>
<p className="text-sm text-zinc-600 pl-6">Avocat, assureur, entrepreneur BTP... Vous avez créé ou repris une boîte et vous vous êtes retrouvé à devoir manager sans y avoir été préparé.</p>
</div>
</div>
<ul className="mt-8 space-y-4 text-sm text-zinc-700">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                            Vous voulez reprendre confiance dans votre rôle sans avoir à changer de personnalité
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                            Vous voulez gérer votre équipe sereinement sans tout porter sur vos épaules
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                            Vous voulez gagner du temps en apprenant à déléguer vraiment
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                            Vous voulez comprendre ce qui coince dans vos relations professionnelles
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-0.5 text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
                            Vous voulez vous former à votre rythme — sans bloquer 2 jours en salle
                        </li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-400 mb-8">Ce Programme N'Est PAS Fait Pour Vous Si...</h2>
<ul className="space-y-6 text-base text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-300 mt-1 text-xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Vous cherchez une solution miracle sans vous remettre en question
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-300 mt-1 text-xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Vous voulez juste des outils sans travailler sur votre posture
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-300 mt-1 text-xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Vous n'avez pas la motivation de mettre en pratique ce que vous apprenez
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-300 mt-1 text-xl flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Vous pensez que le problème vient uniquement de votre équipe, jamais de vous
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/60" id="temoignages">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Ce Que Disent Mes Clients</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative">
<iconify-icon className="text-zinc-100 text-6xl absolute top-6 left-6 -z-0" icon="solar:quote-left-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-lg text-zinc-700 leading-relaxed mb-8 italic">
                            “Céline m'a aidé à identifier des éléments de ma personnalité, des freins omniprésents mais invisibles. Je ne subis plus ces éléments de personnalité, j'ai gagné en connaissance de moi.”
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-medium text-zinc-500 border border-zinc-200">J</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Joris</h4>
<p className="text-xs text-zinc-500">Ingénieur aux Arts et Métiers</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative">
<iconify-icon className="text-zinc-100 text-6xl absolute top-6 left-6 -z-0" icon="solar:quote-left-linear"></iconify-icon>
<div className="relative z-10">
<p className="text-lg text-zinc-700 leading-relaxed mb-8 italic">
                            “Céline m'a donné confiance sans jamais me dire quoi faire. Sa manière de reformuler, son écoute, son expérience de manager m'a immédiatement aidée. Aujourd'hui, je suis plus dans l'observation et l'intuition.”
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center font-medium text-zinc-500 border border-zinc-200">B</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Béatrice</h4>
<p className="text-xs text-zinc-500">Manager</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
<div className="w-full md:w-2/5 aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200">
<img alt="Céline Pasquet-Vit" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-3/5">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Qui Suis-Je ?</h2>
<p className="text-sm text-zinc-500 uppercase tracking-wider font-medium mb-8">Céline Pasquet-Vit, Coach Professionnelle et Formatrice</p>
<div className="space-y-4 text-base text-zinc-600 leading-relaxed">
<p>Je suis Céline Pasquet-Vit, Coach Professionnelle et Formatrice depuis 10 ans.</p>
<p>J'accompagne les dirigeants, managers et primo-managers qui veulent transformer leur manière de manager — sans perdre ce qui fait leur identité.</p>
<p>Mon parcours, c'est des centaines d'heures passées aux côtés de responsables d'équipes dans des PME, des cabinets d'avocats, des entreprises du BTP, des grandes organisations... Des gens qui savent faire leur métier, mais qui se retrouvent seuls face à la complexité humaine du management.</p>
<p>Ce que j'ai compris au fil du temps, c'est que les vrais blocages ne sont pas techniques. Ils sont relationnels. Et souvent, ils naissent de croyances fausses sur ce que devrait être un bon manager.</p>
<p>Mon approche est différente des formations classiques : je pars toujours de la personne, pas des outils. Parce qu'on manage comme on est — et qu'avant de changer ses pratiques, il faut comprendre ses réflexes.</p>
<p>Aujourd'hui, j'ai conçu un programme hybride pour que cette transformation soit accessible à ceux qui n'ont pas le temps de venir en salle deux jours d'affilée — mais qui ont la motivation de progresser vraiment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/60" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        Je n'ai pas le temps.
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Le programme a été conçu pour vous. 20 minutes suffisent pour avancer. Vous progressez quand vous voulez, où vous voulez — le matin avant les premiers mails, le soir, le weekend. Aucune journée à bloquer.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        Le digital, c'est impersonnel.
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Le contenu en ligne vous prépare. Les sessions live avec Céline vous ancrent dans votre réalité. C'est plus personnalisé qu'une salle de formation de 15 personnes.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        J'ai peur de payer et de ne jamais finir.
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        C'est pour ça qu'il y a un appel préalable. Céline ne vend pas à tout le monde. Elle vérifie d'abord que c'est le bon moment pour vous, que vous avez un vrai objectif et la motivation pour aller au bout. Si ce n'est pas le cas, elle vous le dira.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        J'ai déjà fait des formations, ça n'a rien changé.
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Parce que les formations classiques donnent trop d'information, trop vite, sans suivi. Ce programme fait l'inverse : moins de contenu, plus d'ancrage. Une seule action à mettre en place après chaque module.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        Comment se déroulent les sessions live ?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Les sessions live se font en visio avec Céline. C'est un accompagnement personnalisé sur votre situation réelle : votre équipe, votre contexte, vos blocages spécifiques. Ce n'est pas de la théorie, c'est du coaching sur mesure.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        Combien de temps ai-je accès à la plateforme ?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Les détails d'accès sont précisés lors de l'appel découverte. L'objectif est que vous puissiez avancer à votre rythme tout en restant engagé dans votre transformation.
                    </div>
</details>
<details className="group bg-white border border-zinc-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-zinc-900 text-lg tracking-tight">
                        Y a-t-il des prérequis ?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed">
                        Aucun prérequis technique ou académique. Ce programme s'adresse aux managers et dirigeants qui ont la motivation de progresser et qui sont prêts à se remettre en question. Un entretien préalable permet de valider que c'est le bon moment pour vous.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-white text-center border-t border-zinc-200/60 relative overflow-hidden" id="appel">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Prêt à Manager Avec Confiance et Authenticité ?</h2>
<p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Réservez un appel découverte avec Céline. Ensemble, vous verrez si c'est le bon moment pour vous, quel est votre objectif et comment ce programme peut vous aider à l'atteindre.
            </p>
<a className="inline-flex bg-zinc-900 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl items-center justify-center gap-2" href="#">
                Réserver Mon Appel Découverte
            </a>
<p className="text-xs text-zinc-500 mt-6 max-w-md mx-auto">
                Céline ne vend pas à tout le monde. Elle vérifie d'abord que vous êtes au bon moment, avec la bonne motivation. Si ce n'est pas le cas, elle vous le dira honnêtement.
            </p>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="font-medium text-sm text-zinc-900">Céline Pasquet-Vit - Coach Professionnelle</span>
</div>
<div className="text-xs text-zinc-500 flex flex-wrap justify-center gap-4 md:gap-8">
<span>© 2025 Céline Pasquet-Vit</span>
<a className="hover:text-zinc-900 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-zinc-900 transition-colors" href="#">CGV</a>
</div>
</div>
</footer>


    </>
  );
}
