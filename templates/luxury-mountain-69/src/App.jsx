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
      

<div className="bg-[#0A261D] text-slate-300 py-2 border-b border-white/10 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i>
            Villard-Reculas, Alpe d'Huez, France
          </span>
<span className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail" strokeWidth="1.5"></i>
            contact@yetidevillard.fr
          </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-amber-500 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="hover:text-amber-500 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<nav className="absolute top-10 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<i className="w-8 h-8 text-amber-500" data-lucide="mountain-snow" strokeWidth="1.5"></i>
<span className="text-xl tracking-tight font-semibold">
            Le Yéti de Villard
          </span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
<a className="hover:text-amber-500 transition-colors" href="#caracteristiques">
            Caractéristiques
          </a>
<a className="hover:text-amber-500 transition-colors" href="#activites">
            Activités
          </a>
<a className="hover:text-amber-500 transition-colors" href="#tarifs">
            Tarifs
          </a>
<a className="hover:text-amber-500 transition-colors" href="#contact">
            Contact
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex bg-amber-500 text-[#0A261D] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors" href="#contact">
            Contactez-nous
          </a>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<div className="relative min-h-[90vh] flex items-center justify-center clip-bottom">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A261D]/80 via-[#0A261D]/60 to-[#0A261D]/90"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
<div className="flex justify-center gap-2 text-amber-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4 block">
          Location Chalet Villard-Reculas
        </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-white leading-tight mb-6">
          Un lieu d'exception à
          <br/>
          Villard-Reculas
        </h1>
<p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Sur le domaine de l'Alpe d'Huez, découvrez Le Yéti de Villard : un
          chalet d'exception de 170m² pour 14 personnes, directement accessible
          depuis les pistes.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-amber-500 text-[#0A261D] px-8 py-3.5 rounded-full text-base font-semibold hover:bg-amber-400 transition-colors w-full sm:w-auto" href="#contact">
            Contactez-nous
          </a>
<a className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto" href="#caracteristiques">
            Découvrir le chalet
          </a>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="caracteristiques">
<div className="text-center mb-16">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
          Présentation rapide
        </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
          Caractéristiques principales
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all text-center">
<div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0A261D] mx-auto">
<i className="w-8 h-8" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
            Chalet
          </h3>
<p className="text-base text-slate-600 leading-relaxed">
            170 m² avec une vue panoramique sur le domaine.
          </p>
</div>
<div className="bg-[#0A261D] rounded-3xl p-8 shadow-xl text-white text-center">
<div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-500 mx-auto">
<i className="w-8 h-8" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-3">
            Capacité
          </h3>
<p className="text-base text-slate-300 leading-relaxed">
            14 personnes, avec 6 chambres et leurs salles de bain.
          </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all text-center">
<div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0A261D] mx-auto">
<i className="w-8 h-8" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
            Extérieur
          </h3>
<p className="text-base text-slate-600 leading-relaxed">
            Une terrasse orientée sud-ouest avec bain nordique à 38°C.
          </p>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4 block">
            Notre chalet
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-6">
            Un chalet d'exception
          </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
            Le Yéti de Villard est un chalet de 170 m², construit en 2021, situé
            à Villard-Reculas, sur le domaine de l'Alpe d'Huez. Il vous faut
            environ 10 minutes en télésiège ou seulement 12 minutes en voiture
            pour rejoindre la station de l'Alpe d'Huez.
          </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
            Le chalet est accessible directement depuis les pistes et surplombe
            la station. Les remontées mécaniques se trouvent à 150 mètres, tout
            comme le départ de l'école de ski ESF. Orienté plein sud et ouest,
            il profite d'un ensoleillement optimal tout au long de la journée.
          </p>
<a className="inline-block bg-amber-500/20 text-amber-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-500/30 transition-colors mb-12" href="#equipements">
            Voir les caractéristiques
          </a>
<div className="flex flex-wrap gap-12 border-t border-slate-200 pt-8">
<div>
<h4 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
                170m²
              </h4>
<p className="text-sm text-slate-500 font-medium">
                Surface habitable
              </p>
</div>
<div>
<h4 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
                14
              </h4>
<p className="text-sm text-slate-500 font-medium">Personnes</p>
</div>
<div>
<h4 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
                250km
              </h4>
<p className="text-sm text-slate-500 font-medium">De pistes</p>
</div>
</div>
</div>
<div className="grid gap-8">
<div className="flex gap-6 items-start">
<div className="bg-slate-100 p-4 rounded-2xl text-[#0A261D] shrink-0">
<i className="w-8 h-8" data-lucide="mountain-snow" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-2">
                Vue panoramique
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Vues imprenables sur les massifs montagneux. Orientation sud et
                ouest pour un ensoleillement maximal.
              </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-slate-100 p-4 rounded-2xl text-[#0A261D] shrink-0">
<i className="w-8 h-8" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-2">
                Sur les pistes
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Remontées mécaniques à 150 mètres et ESF à proximité. Ski room
                privatif avec chauffe-chaussures.
              </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-slate-100 p-4 rounded-2xl text-[#0A261D] shrink-0">
<i className="w-8 h-8" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-2">
                Le plus ensoleillé
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Le domaine de l'Alpe d'Huez est l'un des plus ensoleillés de
                France.
              </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-slate-100 p-4 rounded-2xl text-[#0A261D] shrink-0">
<i className="w-8 h-8" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-2">
                Commerces à pied
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Boucherie, fromagerie, supérette à deux pas pour profiter
                pleinement de votre séjour.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
          Galerie
        </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
          Découvrez le chalet en images
        </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden h-full">
<img alt="Modern Alpine Wooden Chalet in the Snow" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c08904ba-4495-446b-afc2-dd2ec890a7c3_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Alpine Chalet Terrace at Sunset" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a93c6c1-2d23-477d-98b9-105de80cc9f8_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Alpine Infinity Pool with Snowy Mountain View" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6982710a-8edd-4e3a-809a-bc271c90bea1_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Cozy Alpine Cabin Living Room with Fireplace" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2b4ee89-fa85-4c5e-82e0-4f151a2c4d2c_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Cozy Modern Alpine Cabin Living Room" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca5be89e-5465-49e5-b24e-5facdb7e7095_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Rustic Wooden Chalet Dining Room with Snowy View" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e27f9c84-db95-4d42-8e92-6e361b3573cd_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Modern Rustic Dining Room with Set Table" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebb27bcc-e671-4fc6-998b-b1da8af371eb_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden">
<img alt="Cozy Attic Bedroom in a Wooden Alpine Chalet" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/020630b8-e2d5-46ed-ad4b-7c6ef8ef442d_800w.jpg"/>
</div>
</div>
<p className="text-center text-sm text-slate-500 mt-8 font-medium">
<a className="text-amber-600 hover:underline" href="https://photos.app.goo.gl/kj4KWyuXgrpMvijq9" target="_blank">
          Voir l'album photo complet →
        </a>
</p>
</section>

<section className="bg-[#0A261D] py-24 px-6 rounded-t-[3rem] rounded-b-[3rem] my-10 relative overflow-hidden" id="equipements">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Équipements
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white">
            Tout ce qu'il vous faut pour un séjour parfait
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#12362A] rounded-3xl p-8 border border-white/5">
<div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-4">
              Informations essentielles
            </h3>
<ul className="text-sm text-slate-300 space-y-3 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Bain nordique
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Internet
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Linge de maison fourni
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Serviettes fournies
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Chauffage &amp; sèche-cheveux
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Bureau &amp; parking
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Détecteurs &amp; trousse de secours
              </li>
</ul>
</div>
<div className="bg-[#12362A] rounded-3xl p-8 border border-white/5">
<div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
<i className="w-8 h-8" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-4">
              Cuisine équipée
            </h3>
<ul className="text-sm text-slate-300 space-y-3 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Four &amp; micro-ondes
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Réfrigérateur
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Lave-vaisselle
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Plaques de cuisson
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Grille-pain &amp; bouilloire
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Machine à glaçons
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Vaisselle pour enfants
              </li>
</ul>
</div>
<div className="bg-[#12362A] rounded-3xl p-8 border border-white/5">
<div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
<i className="w-8 h-8" data-lucide="tv" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-semibold text-white mb-4">
              Activités &amp; loisirs
            </h3>
<ul className="text-sm text-slate-300 space-y-3 font-medium">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Télévision &amp; box câble/satellite
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Jeux d'échecs &amp; livres
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Randonnées
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                250 km de pistes
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Patinage sur glace &amp; VTT
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Ski / snowboard
              </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                Parapente &amp; raquettes
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-0 rounded-[2.5rem] overflow-hidden bg-[#0A261D]">
<div className="lg:w-1/2 h-80 lg:h-auto relative">
<img alt="Bain nordique" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1431719d-2f9b-4652-bc3f-2dcad128b08c_1600w.jpg"/>
</div>
<div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-4 block">
            Bien-être
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-6">
            Bain Nordique privatif
          </h2>
<p className="text-base text-slate-300 mb-6 leading-relaxed">
            Le chalet dispose d'un bain nordique privatif. Situé au bout de la
            terrasse, il vous permet de vous détendre après une longue journée
            de ski ou de randonnée, tout en profitant des paysages somptueux
            qu'offre la station.
          </p>
<p className="text-base text-slate-300 mb-10 leading-relaxed">
            Vous pourrez profiter du panorama de jour comme de nuit, dans une
            eau filtrée chauffée à environ 38°C. Le bain nordique est ouvert
            toute l'année, pour vos vacances en famille ou entre amis.
          </p>
<div className="flex gap-12 border-t border-white/10 pt-8">
<div>
<div className="text-4xl tracking-tight font-semibold text-white mb-1">
                38
                <span className="text-amber-500">°C</span>
</div>
<div className="text-sm font-medium text-slate-400">Eau filtrée</div>
</div>
<div>
<div className="text-4xl tracking-tight font-semibold text-white mb-1">
                365
                <span className="text-amber-500">j</span>
</div>
<div className="text-sm font-medium text-slate-400">
                Ouvert toute l'année
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 px-6" id="activites">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Activités
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
            Découvrez les activités
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                Ski &amp; Snowboard
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                250 km de pistes pour tous les niveaux : 25 vertes, 34 bleues,
                21 rouges et 5 noires. ESF à 150m.
              </p>
</div>
</div>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="footprints" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                Randonnées
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Sentier de la Cascade, de l'Oratoire, des Lacs, des Chamois...
                Pour tous les niveaux.
              </p>
</div>
</div>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="plane" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                Parapente
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Sports aériens : parapente, deltaplane et vol à voile au-dessus
                des paysages alpins.
              </p>
</div>
</div>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img alt="VTT en montagne sur les virages de l'Alpe d'Huez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="bike" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                VTT &amp; Tour de France
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Les 21 virages mythiques de l'Alpe d'Huez et les sentiers VTT en
                été.
              </p>
</div>
</div>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="music" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                La Folie Douce &amp; Tomorrowland
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Profitez des événements et lieux de vie nocturne de l'Alpe
                d'Huez.
              </p>
</div>
</div>
<div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
<div className="h-60 overflow-hidden relative">
<img alt="Patinoire en montagne" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551698618-83532516cef8?w=600&amp;q=80"/>
<div className="absolute -bottom-6 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-[#0A261D] shadow-lg border border-slate-100 z-10">
<i className="w-7 h-7" data-lucide="dog" strokeWidth="1.5"></i>
</div>
</div>
<div className="p-8 pt-10">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">
                Activités famille
              </h3>
<p className="text-base text-slate-600 leading-relaxed">
                Chien de traineau, ski joering, acrobranche, patinoire, escape
                game et bien d'autres.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="tarifs">
<div className="text-center mb-16">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
          Tarifs
        </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
          Nos tarifs de location
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Basse saison
          </span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
            3 200€
            <span className="text-base font-medium text-slate-500">/ semaine</span>
</h3>
<p className="text-sm text-slate-500 mb-6 font-medium">
            458€ / jour - 4 nuits minimum
          </p>
<ul className="text-sm text-slate-600 space-y-3 font-medium border-t border-slate-100 pt-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              22 avril au 31 juin
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              1er septembre au 1er décembre
            </li>
</ul>
</div>
<div className="bg-[#0A261D] rounded-3xl p-8 shadow-xl text-white relative">
<span className="absolute top-6 right-6 bg-amber-500 text-[#0A261D] text-xs font-semibold px-3 py-1 rounded-full">
            Populaire
          </span>
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Moyenne saison
          </span>
<h3 className="text-2xl tracking-tight font-semibold text-white mb-2">
            4 200€
            <span className="text-base font-medium text-slate-400">/ semaine</span>
</h3>
<p className="text-sm text-slate-400 mb-6 font-medium">
            600€ / jour - 4 nuits minimum
          </p>
<ul className="text-sm text-slate-300 space-y-3 font-medium border-t border-white/10 pt-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              1er juillet au 31 août
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              Saison estivale
            </li>
</ul>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Haute saison
          </span>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
            7 300€
            <span className="text-base font-medium text-slate-500">/ semaine</span>
</h3>
<p className="text-sm text-slate-500 mb-6 font-medium">
            1 042€ / jour - 7 nuits minimum
          </p>
<ul className="text-sm text-slate-600 space-y-3 font-medium border-t border-slate-100 pt-6">
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              2 décembre au 21 avril
            </li>
<li className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              Saison de ski
            </li>
</ul>
</div>
</div>
<div className="grid md:grid-cols-4 gap-6 mt-12">
<div className="bg-slate-50 rounded-2xl p-6 text-center">
<i className="w-6 h-6 text-amber-500 mx-auto mb-3" data-lucide="clock" strokeWidth="1.5"></i>
<h4 className="font-semibold text-slate-900 mb-1">Arrivée 16h</h4>
<p className="text-sm text-slate-500">Départ 10h</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 text-center">
<i className="w-6 h-6 text-amber-500 mx-auto mb-3" data-lucide="sparkles" strokeWidth="1.5"></i>
<h4 className="font-semibold text-slate-900 mb-1">Ménage 600€</h4>
<p className="text-sm text-slate-500">Sortie obligatoire</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 text-center">
<i className="w-6 h-6 text-amber-500 mx-auto mb-3" data-lucide="coffee" strokeWidth="1.5"></i>
<h4 className="font-semibold text-slate-900 mb-1">Petit-déjeuner</h4>
<p className="text-sm text-slate-500">16€/adulte - 12€/enfant</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 text-center">
<i className="w-6 h-6 text-amber-500 mx-auto mb-3" data-lucide="credit-card" strokeWidth="1.5"></i>
<h4 className="font-semibold text-slate-900 mb-1">Acompte 50%</h4>
<p className="text-sm text-slate-500">Solde à 30 jours</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-100 relative overflow-hidden rounded-[3rem] mx-6 mb-10">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4 block">
            Avis Clients
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
            Ce qu'ils en disent
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-3xl p-8 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-600 italic leading-relaxed mb-6">
              "Nous avons passé un séjour magnifique dans ce chalet de montagne
              ! La vue est magnifique et le chalet très confortable. La cheminée
              est très agréable et le bain nordique absolument génial pour
              regarder les étoiles en pleine nuit ! Nous recommandons vivement."
            </p>
<h4 className="text-lg tracking-tight font-semibold text-slate-900">
              Alexis Guillemin
            </h4>
</div>
<div className="bg-white rounded-3xl p-8 shadow-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-600 italic leading-relaxed mb-6">
              "Séjour inoubliable à Villard-Reculas, le chalet est sur les
              pistes et on est sur le domaine de l'Alpe d'Huez en 10 minutes !
              Les enfants étaient au cours de ski à l'ESF en 5 minutes, et nous
              avons profité du bain nordique toute la semaine."
            </p>
<h4 className="text-lg tracking-tight font-semibold text-slate-900">
              Sophie Sakakini Poisson
            </h4>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="contact">
<div className="bg-[#0A261D] rounded-[2.5rem] p-8 md:p-12">
<div className="text-center mb-10">
<span className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Contact
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-4">
            Contactez-nous
          </h2>
<p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter si vous avez besoin d'informations
            supplémentaires sur la location du chalet ou sur les différentes
            activités à faire autour de Villard-Reculas et de l'Alpe d'Huez.
          </p>
</div>
<form className="max-w-3xl mx-auto grid gap-4">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wider">
                Nom*
              </label>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-amber-500 font-medium placeholder:text-white/40" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wider">
                Email*
              </label>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-amber-500 font-medium placeholder:text-white/40" placeholder="Votre adresse email" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wider">
                Date d'arrivée souhaitée*
              </label>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-amber-500 font-medium [color-scheme:dark]" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wider">
                Date de départ*
              </label>
<input className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-amber-500 font-medium [color-scheme:dark]" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wider">
              Message*
            </label>
<textarea className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:border-amber-500 font-medium placeholder:text-white/40" placeholder="Votre message" rows="5"></textarea>
</div>
<div className="text-center mt-4">
<button className="bg-amber-500 text-[#0A261D] px-10 py-3.5 rounded-full text-base font-semibold hover:bg-amber-400 transition-colors" type="submit">
              Envoyer
            </button>
</div>
</form>
</div>
</section>

<footer className="bg-[#0A261D] text-slate-300 pt-20 pb-12 rounded-t-[3rem]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/10 pb-12">
<div>
<div className="flex items-center gap-2 text-white mb-6">
<i className="w-8 h-8 text-amber-500" data-lucide="mountain-snow" strokeWidth="1.5"></i>
<span className="text-xl tracking-tight font-semibold">
              Le Yéti de Villard
            </span>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
            Société de location de chalet à Villard-Reculas, sur le domaine de
            l'Alpe d'Huez. Un lieu d'exception pour vos vacances en famille ou
            entre amis.
          </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-[#0A261D] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-[#0A261D] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg tracking-tight font-semibold text-white mb-6">
            Menu
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-400">
<li>
<a className="hover:text-amber-500 transition-colors" href="#caracteristiques">
                Caractéristiques
              </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#activites">
                Activités
              </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#tarifs">
                Tarifs
              </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#contact">
                Contact
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-lg tracking-tight font-semibold text-white mb-6">
            Nous contacter
          </h4>
<ul className="space-y-4 text-sm font-medium text-slate-400">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>
                Villard-Reculas
                <br/>
                Domaine de l'Alpe d'Huez, France
              </span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span>contact@yetidevillard.fr</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
<p>© 2024 Le Yéti de Villard. Tous droits réservés.</p>
<div className="flex items-center gap-6">
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
