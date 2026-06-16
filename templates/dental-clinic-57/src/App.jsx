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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-[#0B132B]/95 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
<a className="hover:text-slate-300 transition-colors" href="#">
            NOTRE VISION
          </a>
<a className="hover:text-slate-300 transition-colors" href="#">
            LE CABINET
          </a>
<a className="hover:text-slate-300 transition-colors" href="#">
            PARODONTOLOGIE
          </a>
</div>
<a className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2" href="#">

<i className="w-8 h-8" data-lucide="tooth" strokeWidth="1.5"></i>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
<a className="hover:text-slate-300 transition-colors" href="#">
            IMPLANTOLOGIE
          </a>
<a className="hover:text-slate-300 transition-colors" href="#">
            NOS VIDÉOS
          </a>
<div className="flex items-center gap-6">
<a className="px-5 py-2.5 border border-white/20 hover:bg-white hover:text-[#0B132B] transition-all rounded-full flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
              PLANIFIER VOTRE CONSULTATION
            </a>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
<span>06.69.13.73.58</span>
</div>
</div>
</div>
<button className="lg:hidden ml-auto">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">

<div className="absolute inset-0 z-0">
<img alt="Paris Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-[#0B132B]/60 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
          La parodontologie est la fondation d'un sourire sain, durable et
          esthétique.
        </h1>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B132B] rounded-full hover:bg-slate-100 transition-all font-medium text-lg" href="#">
          PLANIFIER VOTRE CONSULTATION
          <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
<img alt="Dr. Adrien Fellous" className="w-full h-full object-cover" src="https://placehold.co/800x1000/f1f5f9/0f172a?text=Ins%C3%A9rer+votre+photo+ici"/>
</div>
<div className="flex flex-col justify-center">
<div className="mb-8">
<i className="w-12 h-12 text-[#0B132B]/20 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium mb-6">
              Je consacre ma pratique à la parodontologie esthétique et à
              l'implantologie esthétique, deux disciplines qui visent à
              restaurer à la fois la santé des tissus et l'harmonie du sourire.
            </p>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
              Mon approche repose sur des traitements précis, modernes et
              adaptés à chaque patient, avec une attention particulière portée à
              l'équilibre entre fonction, stabilité des tissus et résultat
              esthétique naturel. Chaque situation est étudiée avec rigueur afin
              de proposer des solutions durables, dans un cadre de confiance et
              de transparence.
            </p>
</div>
<div className="border-t border-slate-200 pt-8 flex items-end justify-between">
<div>
<div className="flex gap-2 mb-4">
<span className="w-6 h-4 bg-blue-600 rounded-sm"></span>
<span className="w-6 h-4 bg-yellow-400 rounded-sm"></span>
<span className="w-6 h-4 bg-red-600 rounded-sm"></span>
</div>
<ul className="text-base text-slate-500 space-y-1">
<li>Docteur en Chirurgie dentaire</li>
<li>Diplômé de l'Université Alfonso X El Sabio Madrid</li>
<li>
                  Master en Chirurgie Implantaire, Prothèse et Péri-implantite
                </li>
<li>Enseignant / Formateur BLANC ROSE DENTAL TRAINING</li>
</ul>
</div>
<div className="text-right">
<h2 className="text-3xl font-semibold tracking-tight text-[#0B132B]">
                Dr. Adrien Fellous
              </h2>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#0B132B] text-white">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="h-[500px] lg:h-auto relative">
<img alt="Cabinet" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-[#0B132B]/40 mix-blend-multiply"></div>
<div className="absolute bottom-12 left-12 right-12 text-center lg:text-left">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              CABINET DENTAIRE À PARIS 16 ÈME
            </h2>
</div>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center">
<h3 className="text-3xl font-semibold tracking-tight mb-8">
            NOTRE VISION
          </h3>
<div className="space-y-6 text-lg text-slate-300 leading-relaxed">
<p>
              Nous avons la conviction que la dentisterie moderne ne se limite
              pas à traiter une pathologie, mais vise à restaurer un équilibre
              durable entre santé, fonction et esthétique.
            </p>
<p>
              Chaque traitement est envisagé dans une approche globale, fondée
              sur la précision clinique, la compréhension des tissus et
              l'harmonie du sourire.
            </p>
<p>
              Notre expertise en parodontologie et en implantologie constitue le
              socle de traitements fiables, naturels et durables notamment dans
              les situations complexes.
            </p>
<p>
              Au-delà de la technique, nous accordons une place essentielle à la
              relation humaine : écoute, confiance et transparence accompagnent
              chaque patient à chaque étape de son traitement.
            </p>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] flex items-end justify-center pb-24 text-white">
<div className="absolute inset-0 z-0">
<img alt="Technologie dentaire" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          UNE DENTISTERIE GUIDÉE PAR LA
          <span className="text-blue-400">PRÉCISION</span>
          ET
          <span className="text-blue-400">L'INNOVATION</span>
          .
        </h2>
</div>
</section>

<section className="bg-slate-50 py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B132B]">
            NOTRE SAVOIR FAIRE
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-xl shadow-[#0B132B]/5 border border-slate-200">

<div className="relative h-96 md:h-auto">
<img alt="Parodontologie" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="bg-[#0B132B] text-white p-12 md:p-20 flex flex-col justify-center items-start">
<h3 className="text-3xl font-semibold tracking-tight mb-6">
              PARODONTOLOGIE
            </h3>
<p className="text-lg text-slate-300 leading-relaxed mb-8">
              La santé de vos gencives est le fondement invisible d'un sourire
              d'exception. Nos protocoles parodontaux avancés traitent ce que la
              plupart des cabinets ne savent pas encore diagnostiquer — avec une
              précision chirurgicale et une attention portée à chaque millimètre
              de tissu. Parce qu'un résultat hors norme commence toujours en
              dessous de la surface.
            </p>
<a className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-[#0B132B] transition-colors text-base font-medium" href="#">
              EN SAVOIR PLUS
            </a>
</div>

<div className="bg-[#0B132B] text-white p-12 md:p-20 flex flex-col justify-center items-start order-4 md:order-3">
<h3 className="text-3xl font-semibold tracking-tight mb-6">
              IMPLANTOLOGIE
            </h3>
<p className="text-lg text-slate-300 leading-relaxed mb-8">
              Retrouver une dent, c'est retrouver une confiance. Nous réalisons
              des réhabilitations implantaires complexes avec une expertise
              pointue et des résultats d'exception — Chaque implant posé est
              pensé pour durer, pour s'intégrer, pour disparaître dans votre
              sourire.
            </p>
<a className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-[#0B132B] transition-colors text-base font-medium" href="#">
              EN SAVOIR PLUS
            </a>
</div>
<div className="relative h-96 md:h-auto order-3 md:order-4">
<img alt="Implantologie" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="relative h-96 md:h-auto order-5">
<img alt="Acide Hyaluronique" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="bg-[#0B132B] text-white p-12 md:p-20 flex flex-col justify-center items-start order-6">
<h3 className="text-3xl font-semibold tracking-tight mb-6">
              ACIDE HYALURONIQUE
            </h3>
<p className="text-lg text-slate-300 leading-relaxed mb-8">
              Un sourire harmonieux ne s'arrête pas aux dents. Dans certaines
              situations cliniques, et dans le cadre strict de notre exercice,
              nous pouvons compléter une réhabilitation par des injections
              d'acide hyaluronique, pour révéler le résultat dans sa globalité,
              avec la même exigence esthétique qui guide chaque traitement.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B132B]">
<div className="max-w-7xl mx-auto px-6 space-y-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="relative aspect-[16/7] rounded-2xl overflow-hidden group cursor-ew-resize bg-slate-900 border border-white/10">
<div className="absolute inset-0 grid grid-cols-2">
<img alt="Avant" className="w-full h-full object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Après" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white -translate-x-1/2 flex items-center justify-center">
<div className="w-10 h-10 bg-white text-[#0B132B] rounded-full flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative aspect-[16/7] rounded-2xl overflow-hidden group cursor-ew-resize bg-slate-900 border border-white/10">
<div className="absolute inset-0 grid grid-cols-2">
<img alt="Avant" className="w-full h-full object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Après" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white -translate-x-1/2 flex items-center justify-center">
<div className="w-10 h-10 bg-white text-[#0B132B] rounded-full flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative aspect-[16/7] rounded-2xl overflow-hidden group cursor-ew-resize bg-slate-900 border border-white/10">
<div className="absolute inset-0 grid grid-cols-2">
<img alt="Avant" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<img alt="Après" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white -translate-x-1/2 flex items-center justify-center">
<div className="w-10 h-10 bg-white text-[#0B132B] rounded-full flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative aspect-[16/7] rounded-2xl overflow-hidden group cursor-ew-resize bg-slate-900 border border-white/10">
<div className="absolute inset-0 grid grid-cols-2">
<img alt="Avant" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<img alt="Après" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white -translate-x-1/2 flex items-center justify-center">
<div className="w-10 h-10 bg-white text-[#0B132B] rounded-full flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="chevrons-left-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B132B] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="text-center lg:text-left flex-shrink-0">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
<span className="text-2xl font-semibold text-blue-600">G</span>
</div>
<div className="text-white text-5xl font-semibold tracking-tight mb-2">
            5,0
          </div>
<div className="flex items-center justify-center lg:justify-start gap-1 text-yellow-400 mb-2">
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-5 h-5" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<div className="text-slate-400 text-base">(48 avis)</div>
</div>
<div className="flex-1 relative w-full">
<button className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:text-slate-300" onclick="this.nextElementSibling.scrollBy({left: -350, behavior: 'smooth'})">
<i className="w-10 h-10" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">

<div className="snap-center shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 shadow-xl">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-slate-600 text-base leading-relaxed">
                "Un praticien à l'écoute et très professionnel. Le Dr Fellous a
                pris le temps de m'expliquer chaque étape de mon traitement
                parodontal. Les résultats sont au-delà de mes espérances. Un
                grand merci à toute l'équipe."
              </p>
</div>

<div className="snap-center shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 shadow-xl">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-slate-600 text-base leading-relaxed">
                "Excellente prise en charge. Le cabinet est magnifique et
                l'hygiène est irréprochable. J'ai fait poser deux implants et
                tout s'est déroulé parfaitement, sans aucune douleur."
              </p>
</div>

<div className="snap-center shrink-0 w-80 md:w-96 bg-white rounded-2xl p-8 shadow-xl">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="0"></i>
</div>
<p className="text-slate-600 text-base leading-relaxed">
                "Superbe travail, résultat très naturel. Je recommande vivement
                le Docteur Fellous pour son expertise et son approche humaine."
              </p>
</div>
</div>
<button className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:text-slate-300" onclick="this.previousElementSibling.scrollBy({left: 350, behavior: 'smooth'})">
<i className="w-10 h-10" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="relative h-[600px] flex items-end justify-center pb-20">
<div className="absolute inset-0 z-0">
<img alt="L'équipe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-[#0B132B]/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 to-transparent"></div>
</div>
<div className="relative z-10">
<a className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white hover:text-[#0B132B] transition-all font-medium text-lg" href="#">
          DÉCOUVRIR NOTRE ÉQUIPE
        </a>
</div>
</section>

<section className="bg-slate-50 py-32">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Formation" className="w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<img alt="Formation" className="w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<img alt="Formation" className="w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<img alt="Formation" className="w-full h-64 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-auto md:max-w-2xl bg-[#0B132B] text-white p-10 md:p-16 rounded-3xl shadow-2xl border border-white/10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            TRANSMETTRE SON SAVOIR
          </h2>
<p className="text-lg text-slate-300 leading-relaxed">
            Parce que l'excellence se transmet autant qu'elle se pratique, le
            Dr. Adrien Fellous a cofondé en 2024
            <span className="text-blue-400">Blanc Rose Dental Training</span>
            avec le Dr. Ruben Abou. Ensemble, ils ont fait de cet organisme un
            lieu de référence en formation à l'esthétique dentaire, où plusieurs
            centaines de chirurgiens-dentistes ont déjà été formés à des
            protocoles d'exception.
          </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-[#0B132B]">
<div className="h-96 lg:h-auto relative">
<img alt="Intérieur cabinet" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-12 md:p-24 text-white flex flex-col justify-center items-start">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
          SOUHAITEZ-VOUS RENCONTRER NOTRE ÉQUIPE SOIGNANTE ?
        </h2>
<div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-12">
<p>
            Chaque parcours de soin commence par un moment d'écoute. Lors de
            cette première consultation, nous prenons le temps de comprendre
            votre histoire médicale, vos préoccupations et vos attentes — sans
            précipitation.
          </p>
<p>
            Un bilan clinique approfondi nous permet ensuite d'établir un
            diagnostic précis, point de départ de toute prise en charge
            d'excellence. Nous construisons avec vous un plan de traitement sur
            mesure, pensé dans votre intérêt, et vous remettons un devis
            détaillé et transparent avant toute décision.
          </p>
</div>
<a className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-[#0B132B] transition-colors font-medium text-lg" href="#">
          PRENDRE CONTACT AVEC NOTRE SECRÉTARIAT
        </a>
</div>
</section>

<footer className="bg-[#0B132B] text-slate-400 border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-4 text-white mb-6">
<i className="w-10 h-10" data-lucide="tooth" strokeWidth="1.5"></i>
<div>
<div className="text-xs tracking-widest text-slate-400">DR.</div>
<div className="text-2xl font-semibold tracking-tight">
                Adrien Fellous
              </div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
            Cabinet dentaire dédié à la parodontologie et à l'implantologie
            esthétique, alliant santé, fonction et harmonie du sourire à Paris
            16.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0B132B] transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0B132B] transition-all" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0B132B] transition-all" href="#">
<i className="w-4 h-4" data-lucide="video" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h3 className="text-white font-semibold mb-6">Liens Rapides</h3>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                Notre Vision
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Le Cabinet
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                L'Équipe
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Vidéos</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Consultation
              </a>
</li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-6">Nos Expertises</h3>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                Parodontologie
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Implantologie
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Esthétique du sourire
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Acide hyaluronique
              </a>
</li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-6">Contact &amp; Accès</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>
                17 chaussée de la muette
                <br/>
                75016, Paris
              </span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span>06.69.13.73.58</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span>Contact@adrienfellous.com</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="clock" strokeWidth="1.5"></i>
<span>Lun - Ven : 9h00 - 19h00</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-base gap-4">
<p>© 2025 Dr. Adrien Fellous – Tous droits réservés</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Mentions légales
          </a>
<a className="hover:text-white transition-colors" href="#">
            Politique de confidentialité
          </a>
</div>
</div>
</footer>


    </>
  );
}
