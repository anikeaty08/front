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
      

<nav className="fixed top-0 left-0 w-full p-[6vw] lg:p-[3vw] flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<a className="text-base lg:text-lg font-normal tracking-tighter uppercase pointer-events-auto transition-opacity hover:opacity-70" href="#">
        Exo Ape
      </a>
<div className="hidden lg:flex space-x-[2.5vw] text-sm pointer-events-auto">
<a className="relative group" href="#">
          Réalisations
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group" href="#">
          Studio
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group" href="#">
          Actualités
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group" href="#">
          Contact
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
</div>
<button className="lg:hidden flex items-center gap-3 text-sm pointer-events-auto">
        Menu
        <iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<section className="relative min-h-[100svh] flex flex-col justify-end pb-[10vh] lg:pb-[15vh] px-[6vw] lg:px-[8vw] z-10">
<div className="absolute inset-0 z-[-1]">
<img alt="Venice Grand Canal" className="w-full h-full object-cover opacity-70" src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:quality(90)"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[6vw] lg:gap-[2vw]">
<div className="lg:col-span-12 lg:mb-[6vw]">
<p className="text-base lg:text-lg lg:max-w-xl text-zinc-200">
            Studio de design numérique en partenariat avec des marques et des
            entreprises qui créent des expériences exceptionnelles où les gens
            vivent, travaillent et se détendent.
          </p>
</div>
<div className="lg:col-span-12 my-[8vw] lg:my-0">
<h1 className="text-[16vw] lg:text-[14vw] leading-[0.85] tracking-tighter flex flex-col">
<span className="block">Digital</span>
<span className="block ml-[10vw]">Design</span>
<span className="block">Expérience</span>
</h1>
</div>
<div className="lg:col-span-5 text-base lg:text-lg text-zinc-300 mt-[6vw] lg:mt-0">
<p className="max-w-md">
            Nous aidons les entreprises axées sur l'expérience à prospérer en
            faisant ressentir à leur public les subtilités raffinées de leur
            marque et de leurs produits dans l'espace numérique. Les voyages
            inoubliables commencent par un clic.
          </p>
<a className="inline-flex items-center gap-4 mt-12 text-sm uppercase tracking-widest group" href="#">
<span className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="relative">
              Le Studio
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-zinc-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</span>
</a>
</div>
<div className="hidden lg:flex lg:col-span-3 lg:col-start-10 flex-col gap-12 mt-[6vw] lg:mt-0 text-sm">
<ul className="space-y-2">
<li>
<a className="hover:text-zinc-400 transition-colors" href="#">
                Réalisations
              </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#">
                Studio
              </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#">
                Actualités
              </a>
</li>
<li>
<a className="hover:text-zinc-400 transition-colors" href="#">
                Contact
              </a>
</li>
</ul>
<ul className="space-y-2 text-zinc-400">
<li>
<a className="hover:text-white transition-colors" href="mailto:hello@exoape.com">
                hello@exoape.com
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="tel:+31772086200">
                +31 772 086 200
              </a>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#f8f8f8] text-zinc-950 pt-[15vh] pb-[20vh] px-[6vw] lg:px-[8vw] z-20 relative lg:rounded-t-[3rem] -mt-[2rem]">
<div className="flex flex-col lg:flex-row lg:items-end mb-[15vh] lg:mb-[25vh]">
<div className="flex-1">
<div className="flex items-center gap-3 mb-[6vw] lg:mb-[3vw] text-xs lg:text-sm uppercase tracking-widest text-zinc-500">
<iconify-icon className="text-lg" icon="solar:map-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
            Projets en vedette
          </div>
<h2 className="text-[16vw] lg:text-[12vw] leading-none tracking-tighter">
            Réalisations
          </h2>
</div>
<div className="lg:w-1/4 text-base lg:text-lg mt-[8vw] lg:mt-0 text-zinc-600">
<p>
            Aperçu des projets que nous avons passionnément construits avec des
            clients et amis avant-gardistes au fil des ans.
          </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[6vw] lg:gap-[2.5vw]">
<a className="block group lg:col-span-6 lg:col-start-2 mb-[12vw] lg:mb-0" href="#">
<div className="relative overflow-hidden aspect-[4/5] bg-zinc-200">
<img alt="Ottografie" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"/>
</div>
<div className="mt-[4vw] lg:mt-[1.5vw] text-sm lg:text-base flex flex-col lg:flex-row lg:gap-4 text-zinc-500">
<span className="font-normal text-zinc-950">Ottografie</span>
<span className="hidden lg:inline">—</span>
<span>Parcours Photographique Fluide</span>
</div>
</a>
<a className="block group lg:col-span-4 lg:col-start-9 lg:mt-[35vh] mb-[12vw] lg:mb-0" href="#">
<div className="relative overflow-hidden aspect-[3/4] bg-zinc-200">
<img alt="Amaterasu" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"/>
</div>
<div className="mt-[4vw] lg:mt-[1.5vw] text-sm lg:text-base flex flex-col lg:flex-row lg:gap-4 text-zinc-500">
<span className="font-normal text-zinc-950">Amaterasu</span>
<span className="hidden lg:inline">—</span>
<span>Innovation en Santé de Pointe</span>
</div>
</a>
<a className="block group lg:col-span-5 lg:col-start-6 lg:mt-[15vh] mb-[12vw] lg:mb-0" href="#">
<div className="relative overflow-hidden aspect-[4/5] bg-zinc-200">
<img alt="Columbia Pictures" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"/>
</div>
<div className="mt-[4vw] lg:mt-[1.5vw] text-sm lg:text-base flex flex-col lg:flex-row lg:gap-4 text-zinc-500">
<span className="font-normal text-zinc-950">Columbia Pictures</span>
<span className="hidden lg:inline">—</span>
<span>Célébration d'un Siècle de Cinéma</span>
</div>
</a>
<a className="block group lg:col-span-3 lg:col-start-2 lg:-mt-[15vh]" href="#">
<div className="relative overflow-hidden aspect-square bg-zinc-200">
<img alt="Cambium" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"/>
</div>
<div className="mt-[4vw] lg:mt-[1.5vw] text-sm lg:text-base flex flex-col lg:flex-row lg:gap-4 text-zinc-500">
<span className="font-normal text-zinc-950">Cambium</span>
<span className="hidden lg:inline">—</span>
<span>Pionnier des Solutions Durables</span>
</div>
</a>
</div>
<div className="mt-[15vh] lg:mt-[20vh] flex justify-center lg:justify-end lg:pr-[8vw]">
<a className="inline-flex items-center gap-4 text-sm uppercase tracking-widest group" href="#">
<span className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="relative">
            Parcourir tous les projets
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-zinc-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</span>
</a>
</div>
</section>

<section className="relative h-[100svh] bg-zinc-900 text-zinc-100 flex items-center justify-center overflow-hidden cursor-pointer group">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-700 group-hover:opacity-70" loop="" muted="" playsinline="">
<source src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a" type="video/mp4"/>
</video>
<div className="relative z-10 text-center mix-blend-difference flex flex-col items-center pointer-events-none">
<div className="flex items-center gap-3 mb-[4vw] lg:mb-[2vw] text-xs lg:text-sm uppercase tracking-widest text-zinc-300">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
          Travail en mouvement
        </div>
<h2 className="text-[20vw] lg:text-[14vw] leading-[0.8] tracking-tighter flex flex-col">
<span>Voir</span>
<span>la Vidéo</span>
</h2>
<p className="mt-[6vw] lg:mt-[4vw] text-sm lg:text-base text-zinc-400 max-w-xs mx-auto">
          Notre travail s'apprécie mieux en mouvement. N'oubliez pas de mettre
          vos écouteurs.
        </p>
</div>
</section>

<section className="bg-zinc-950 text-zinc-50 pt-[15vh] pb-[20vh] px-[6vw] lg:px-[8vw] relative overflow-hidden">
<div className="relative min-h-[80vh] lg:min-h-[100vh] flex flex-col justify-center items-center text-center z-10 w-full max-w-4xl mx-auto">
<div className="flex items-center gap-3 mb-[8vw] lg:mb-[4vw] text-xs lg:text-sm uppercase tracking-widest text-zinc-500">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
          Dans les médias
        </div>
<h2 className="text-[18vw] lg:text-[12vw] leading-[0.9] tracking-tighter mb-[8vw] lg:mb-[4vw] flex flex-col">
<span>Faire Passer</span>
<span>le Mot</span>
</h2>
<p className="text-base lg:text-lg text-zinc-400 max-w-md mx-auto mb-[12vw] lg:mb-[6vw]">
          Découvrez-en plus sur notre travail sur ces plateformes de référence
          en design et technologie.
        </p>
<a className="inline-flex items-center gap-4 text-sm uppercase tracking-widest group" href="#">
<span className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="relative">
            Toutes les actualités
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-zinc-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</span>
</a>
</div>

<div className="hidden lg:block absolute inset-0 pointer-events-none">
<img alt="Article" className="absolute w-[18vw] top-[10%] left-[10%] opacity-40 mix-blend-luminosity rounded-sm" src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/440x752/filters:quality(90)"/>
<img alt="Article" className="absolute w-[22vw] bottom-[15%] right-[8%] opacity-40 mix-blend-luminosity rounded-sm" src="https://a.storyblok.com/f/133769/1440x966/8fe83b498c/home-news-7.jpg/m/700x470/filters:quality(90)"/>
<img alt="Article" className="absolute w-[12vw] top-[30%] right-[20%] opacity-30 mix-blend-luminosity rounded-sm" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/440x625/filters:quality(90)"/>
</div>
</section>

<footer className="bg-[#070707] text-[#e0ccbb] pt-[15vh] pb-[8vh] px-[6vw] lg:px-[8vw] relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[6vw] lg:gap-[2vw] relative z-10">
<div className="lg:col-span-6 mb-[10vw] lg:mb-0 flex flex-col justify-between">
<div>
<h2 className="text-[18vw] lg:text-[12vw] leading-[0.85] tracking-tighter flex flex-col mb-[6vw] lg:mb-[2vw]">
<span>Notre</span>
<span>Histoire</span>
</h2>
<p className="text-base lg:text-lg opacity-80 max-w-sm">
              L'histoire derrière Exo Ape en est une d'exploration, de
              créativité et de curiosité.
            </p>
</div>
</div>
<div className="lg:col-span-12 w-full h-[1px] bg-[#e0ccbb]/20 my-[8vw] lg:my-[4vw]"></div>
<div className="lg:col-span-3 text-sm lg:text-base opacity-80">
<p>Willem II Singel 8</p>
<p>6041 HS, Roermond</p>
<p>Pays-Bas</p>
</div>
<div className="lg:col-span-3 text-sm lg:text-base">
<a className="relative group inline-block" href="mailto:hello@exoape.com">
            hello@exoape.com
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
</div>
<div className="lg:col-span-2 flex flex-col gap-2 text-sm lg:text-base">
<a className="relative group w-fit" href="#">
            Réalisations
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Studio
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Actualités
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Contact
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
</div>
<div className="lg:col-span-2 flex flex-col gap-2 text-sm lg:text-base">
<a className="relative group w-fit" href="#">
            Behance
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Dribbble
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Linkedin
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
<a className="relative group w-fit" href="#">
            Instagram
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</a>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end mt-[10vw] lg:mt-0">
<a className="inline-flex items-center gap-4 text-sm uppercase tracking-widest group" href="#">
<span className="w-10 h-10 rounded-full border border-[#e0ccbb]/30 flex items-center justify-center group-hover:bg-[#e0ccbb] group-hover:text-[#070707] transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="relative">
              Notre Histoire
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#e0ccbb]/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
</span>
</a>
</div>
</div>
</footer>

    </>
  );
}
