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



        document.addEventListener("DOMContentLoaded", function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFBF7] h-16 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center transition-all">
<div className="md:px-12 flex w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-medium text-[#6b8f71] tracking-[4px] font-['Playfair_Display']" href="#">ICC</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227] transition-colors relative group" href="#linstitut">
                    L'Institut
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227] transition-colors relative group" href="#nos-outils">
                    Nos outils
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-[#C9A227] transition-colors group text-sm font-normal text-[#2D3436] relative" href="/#se-former">
                    Se former
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227] transition-colors relative group" href="#praticiens">
                    Praticiens
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227] transition-colors relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A227] transition-all group-hover:w-full"></span>
</a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(201,106,74,0.35)] hover:bg-[#B85C3C] text-sm font-medium text-[#FDFBF7] bg-[#6b8f71] rounded-[10px] pt-2.5 pr-6 pb-2.5 pl-6" href="/#se-former" target="_blank">Se former</a>
</div>
<button className="md:hidden text-[#2D3436] hover:text-[#C9A227] transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="2"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-[#FDFBF7] border-t border-[#F7F2EC] flex flex-col items-center py-6 space-y-6 md:hidden shadow-xl" id="mobile-menu">
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227]" href="#linstitut">L'Institut</a>
<div className="w-12 h-[1px] bg-[#F7F2EC]"></div>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227]" href="#nos-outils">Nos outils</a>
<div className="w-12 h-[1px] bg-[#F7F2EC]"></div>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227]" href="#se-former">Se former</a>
<div className="w-12 h-[1px] bg-[#F7F2EC]"></div>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227]" href="#praticiens">Praticiens</a>
<div className="w-12 h-[1px] bg-[#F7F2EC]"></div>
<a className="text-sm font-normal text-[#2D3436] hover:text-[#C9A227]" href="#contact">Contact</a>
<a className="bg-[#C96A4A] text-[#FDFBF7] font-medium text-sm rounded-[10px] px-6 py-2.5 mt-4 shadow-[0_6px_20px_rgba(201,106,74,0.35)]" href="https://protocole-call.fr" target="_blank">Réserver une séance</a>
</div>
</nav>

<header className="min-h-screen flex bg-center overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d3d8bba-6bbe-420b-90d0-8f95d9070068_1600w.webp)] bg-cover relative items-center justify-center">
<div className="bg-[#1A1A1A]/70 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col reveal active text-center w-full max-w-4xl mt-16 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="text-lg font-medium text-[#C9A227] tracking-[6px] font-['Playfair_Display']">ICC</div>
<div className="w-[60px] h-[1px] bg-[#C9A227] mt-4 mb-8"></div>
<h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-semibold text-[#FDFBF7] tracking-tight font-['Playfair_Display'] max-w-3xl">Il y a des moments dans une vie où l'on sait qu'il faut choisir. Vraiment choisir.</h1>
<div className="w-[60px] h-[1px] bg-[#C9A227] mt-8 mb-6"></div>
<div className="font-normal text-[#C9A227] text-sm uppercase tracking-[4px] text-center">
                INSTITUT CHOIX &amp; CONSCIENCE
            </div>
<p className="text-base md:text-lg font-normal text-[#FDFBF7]/80 mt-2">
                L'art de choisir en conscience.
            </p>
<a className="inline-flex items-center justify-center hover:bg-[#B85C3C] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(201,106,74,0.35)] group md:px-9 md:py-4 text-base font-medium text-[#FDFBF7] bg-[#6b8f71] rounded-[10px] mt-12 px-7 py-3.5" href="#linstitut">
                Découvrir l'Institut <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</header>

<section className="py-16 md:py-24 bg-[#FDFBF7]" id="linstitut">
<div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center reveal active">
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-10"></div>
<p className="font-['Playfair_Display'] font-normal italic text-[#1A1A1A] text-lg md:text-xl leading-[1.8]">
                "Nous vivons dans un monde qui décide à notre place.<br/>
                Surinformé. Précipité. Saturé d'injonctions."
            </p>
<div className="h-8"></div>
<p className="text-base md:text-lg leading-[1.8] font-normal text-[#2D3436]">L'Institut Choix &amp; Conscience est né d'une conviction profonde :<br/> chaque humain porte en lui la capacité de choisir juste,<br/> de transformer ce qui le freine,<br/> et de devenir une source de paix, de beauté et de vérité pour lui-même et pour les autres. <br/><br/> Pas de recette. Pas de promesse miraculeuse.<br/> Des outils précis. Une posture exigeante.<br/> Un accompagnement humain et rigoureux.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mt-10"></div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F7F2EC]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 reveal active max-w-6xl mr-auto ml-auto px-6 items-start">

<div className="flex flex-col items-start">
<div className="overflow-hidden w-[400px] h-[400px] rounded-2xl mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
<img alt="Lumière chaleureuse" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b179eac5-dd14-48b8-b435-883b07e42c0b_800w.png"/>
</div>
<h2 className="font-['Playfair_Display'] font-medium italic text-[#1A1A1A] text-2xl md:text-3xl leading-[1.4] tracking-tight">
                    Né d'une expérience.<br/>
                    Formalisé par la rigueur.<br/>
                    Transmis par des humains.
                </h2>
<div className="w-[60px] h-[1px] bg-[#C9A227] my-6"></div>
<p className="font-normal text-[#2D3436]/55 text-sm italic leading-[1.6]">
                    Protocole CALL® — né en 2015, formalisé en 2019<br/>
                    Publié dans 'Business Bénédiction' — 2023<br/>
                    Praticiens certifiés en France, Belgique, Canada, Maroc
                </p>
</div>

<div className="md:pt-4">
<p className="font-normal text-[#2D3436] text-base md:text-lg leading-[1.8]">
                    En 2015, face à une situation personnelle extrême —<br/>
                    le dos au mur, à quelques mois des huissiers —<br/>
                    Jean-Luc De Wachter pose un choix d'une profondeur<br/>
                    qu'il n'avait jamais connue.<br/>
                    Un choix si ancré, si non-négociable,<br/>
                    qu'il entraîne une cascade de conséquences heureuses.
                    <br/><br/>
                    Il passe les années suivantes à comprendre<br/>
                    ce qui s'est passé en lui.<br/>
                    À identifier les 7 phénomènes internes<br/>
                    à l'œuvre dans tout choix puissant.<br/>
                    À formaliser les 21 étapes qui permettent<br/>
                    à n'importe qui d'y accéder.
                    <br/><br/>
                    En 2019, le Protocole CALL® est formalisé.<br/>
                    En 2023, il apparaît dans 'Business Bénédiction'.
                    <br/><br/>
                    Aujourd'hui, l'Institut Choix &amp; Conscience<br/>
                    forme des praticiens et animateurs certifiés<br/>
                    en France, en Belgique, au Canada et au Maroc.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FDFBF7]" id="nos-outils">
<div className="reveal max-w-7xl mr-auto ml-auto px-6 active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    NOS OUTILS
                </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-3xl md:text-4xl leading-[1.3] tracking-tight mt-4 mb-4">
                    Créer plus de cohérence<br className="hidden md:block"/>
                    pour une vie plus harmonieuse.
                </h2>
<p className="font-normal text-[#2D3436]/55 text-base md:text-lg max-w-[800px] mx-auto">
                    Trois outils distincts. Une même direction :<br/>
                    vous ramener à vous-même.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] rounded-t-[14px]"></div>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-4">
                        Protocole CALL®
                    </h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436] mb-6">Faire des choix profonds et puissants pour équilibrer sa vie et être plus heureux.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-6"></div>
<p className="leading-[1.6] text-sm font-normal text-[#2D3436]/55">21 étapes. 7 phénomènes internes. Un processus qui ne cherche pas à vous faire aller mieux mais à vous accompagner à ne plus négocier l'essentiel.</p>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6B8F71] rounded-t-[14px]"></div>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-4">
                        Introspection Dynamique®
                    </h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436] mb-6">Transformer ses doutes, ses peurs, ses anxiétés en force et en confiance.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-6"></div>
<p className="leading-[1.6] text-sm font-normal text-[#2D3436]/55">Un protocole en 5 phases pour descendre sous la surface de ce qui freine et en remonter transformé.</p>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C9A227] rounded-t-[14px]"></div>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-4">
                        Pratique de l'Intime
                    </h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436] mb-6">Découvrir de plus hauts degrés de maîtrise de soi et devenir une source de paix, de joie et d'amour.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-6"></div>
<p className="leading-[1.6] text-sm font-normal italic text-[#2D3436]/55">Cette pratique se transmet en présence. Elle n'est pas encore publique.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F7F2EC]">
<div className="reveal max-w-6xl mr-auto ml-auto px-6 active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    L'ÉQUIPE FONDATRICE
                </div>
<h2 className="md:text-4xl leading-[1.3] text-3xl font-medium text-[#1A1A1A] tracking-tight font-['Playfair_Display'] mt-4">Des humains au service des humains</h2>
</div>
<div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">

<div className="flex flex-col items-center text-center w-full max-w-[480px]">
<div className="border-[3px] flex overflow-hidden bg-center bg-[#FDFBF7] w-[220px] h-[220px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6df3d010-7f54-4989-98b3-7a2e172d16a0_800w.png)] bg-cover rounded-full mb-6 shadow-[0_8px_24px_rgba(201,162,39,0.15)] items-center justify-center">
</div>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-2xl tracking-tight mb-1">
                        Jean-Luc De Wachter
                    </h3>
<div className="uppercase text-xs font-normal text-[#C9A227] tracking-[2px] mb-5">FONDATEUR · AUTEUR · PENSEUR</div>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-5"></div>
<p className="leading-[1.8] text-base font-normal text-[#2D3436] mb-6">Inventeur du Protocole CALL® et de l'Introspection Dynamique®. Il accompagne depuis 2015 des individus et des organisations à retrouver leur autorité intérieure, leur capacité à ne plus négocier l'essentiel.</p>
<div className="relative bg-[#FFFFFF] border-l-[3px] border-[#C9A227] rounded-r-lg p-5 text-left w-full shadow-sm">
<span className="absolute top-2 left-2 font-['Playfair_Display'] text-[#C9A227]/30 text-5xl leading-none">"</span>
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-base leading-[1.6] relative z-10 pl-4">
                            On ne choisit vraiment<br/>que ce qu'on ne négocie plus.
                        </p>
</div>
</div>

<div className="flex flex-col items-center text-center w-full max-w-[480px]">
<div className="border-[3px] flex overflow-hidden bg-center bg-[#FDFBF7] w-[220px] h-[220px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d77306-a897-4fb9-912d-d082313eb7f6_800w.png)] bg-cover rounded-full mb-6 shadow-[0_8px_24px_rgba(201,162,39,0.15)] items-center justify-center">
</div>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-2xl tracking-tight mb-1">
                        Sophie Delrot
                    </h3>
<div className="uppercase text-xs font-normal text-[#C9A227] tracking-[2px] mb-5">
                        DIRECTRICE · PRATICIENNE CALL® · FORMATRICE
                    </div>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-5"></div>
<p className="leading-[1.8] text-base font-normal text-[#2D3436] mb-6">Ancienne contrôleuse aérienne pendant 24 ans. La précision, la présence et la responsabilité, elle les a vécues dans les tours de contrôle avant de les mettre au service du choix conscient. Elle forme aujourd'hui les animateurs et praticiens de l'ICC avec rigueur et chaleur humaine.</p>
<div className="relative bg-[#FFFFFF] border-l-[3px] border-[#C9A227] rounded-r-lg p-5 text-left w-full shadow-sm">
<span className="absolute top-2 left-2 font-['Playfair_Display'] text-[#C9A227]/30 text-5xl leading-none">"</span>
<p className="leading-[1.6] text-base italic text-[#1A1A1A] font-['Playfair_Display'] z-10 pl-4 relative">La précision que j'ai apprise dans les tours de contrôle, je la mets aujourd'hui au service du choix conscient.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#1A1A1A]" id="se-former">
<div className="max-w-7xl mx-auto px-6 reveal active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="font-normal text-[#6B8F71] text-xs uppercase tracking-[3px]">
                    SE FORMER
                </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#FDFBF7] text-3xl md:text-4xl leading-[1.3] tracking-tight mt-4 mb-4">
                    Choisissez votre voie.
                </h2>
<p className="font-normal text-[#FDFBF7]/55 text-base md:text-lg max-w-[800px] mx-auto">
                    Des formations certifiantes pour accompagner<br/>
                    l'humain à choisir en conscience.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative bg-[#FDFBF7] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1 flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6B8F71] rounded-t-[14px]"></div>
<div className="text-xs font-medium text-[#FDFBF7] bg-[#6b8f71] rounded-[6px] px-2.5 py-1 absolute top-6 right-6">
                        CALL®
                    </div>
<iconify-icon className="text-5xl text-[#6B8F71] mb-6" height="48" icon="solar:users-group-two-rounded-linear" strokeWidth="2" style={{color: 'rgb(107, 143, 113)'}} width="221"></iconify-icon>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-4">Animateur de Cercle du Choix©</h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436] mb-6">Guider des groupes vers le choix conscient. En entreprise, en association, en cercle privé.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-6"></div>
<p className="font-normal text-[#2D3436]/55 text-sm leading-[1.6] mb-10 flex-grow">
                        2 jours en ligne + 1 week-end présentiel<br/>
                        Certification incluse
                    </p>
<a className="inline-flex items-center justify-center hover:bg-[#5a795f] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(107,143,113,0.35)] group text-base font-medium text-[#FDFBF7] bg-[#6b8f71] w-full rounded-[10px] mt-auto pt-3.5 pr-7 pb-3.5 pl-7" href="http://institut-choix-et-conscience.org/animateur-cercle-du-choix">
                        Découvrir la formation <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>

<div className="relative bg-[#FDFBF7] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1 flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A] rounded-t-[14px]"></div>
<div className="absolute top-6 right-6 bg-[#C96A4A] text-[#FDFBF7] font-medium text-xs rounded-[6px] px-2.5 py-1">
                        CALL®
                    </div>
<iconify-icon className="text-[#C96A4A] text-5xl mb-6" icon="solar:user-circle-linear" strokeWidth="2"></iconify-icon>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-xl md:text-2xl tracking-tight mb-4">Praticien du Protocole CALL®</h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436] mb-6">Accompagner en profondeur des trajectoires de vie. Transformer des passages décisifs.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-6"></div>
<p className="font-normal text-[#2D3436]/55 text-sm leading-[1.6] mb-10 flex-grow">
                        6 jours en ligne + 1 week-end présentiel<br/>
                        Certification incluse
                    </p>
<a className="inline-flex items-center justify-center hover:bg-[#B85C3C] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(201,106,74,0.35)] group text-base font-medium text-[#FDFBF7] bg-[#C96A4A] w-full rounded-[10px] mt-auto pt-3.5 pr-7 pb-3.5 pl-7" href="http://institut-choix-et-conscience.org/praticien-call">
                        Découvrir la formation <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>

<div className="relative bg-[#F7F2EC] border border-[#6B8F71]/35 rounded-[14px] p-7 md:p-9 flex flex-col h-full">
<div className="absolute top-6 right-6 bg-[#6B8F71]/12 text-[#6B8F71] font-medium text-xs rounded-[6px] px-2.5 py-1">
                        Bientôt
                    </div>
<iconify-icon className="text-[#6B8F71]/50 text-5xl mb-6" icon="solar:restart-circle-linear" strokeWidth="2"></iconify-icon>
<h3 className="font-['Playfair_Display'] font-medium text-[#1A1A1A]/45 text-xl md:text-2xl tracking-tight mb-4">
                        Introspection Dynamique®
                    </h3>
<p className="leading-[1.6] text-base font-normal text-[#2D3436]/45 mb-6">Se former à la transformation des doutes, peurs et anxiétés en force et confiance.</p>
<div className="w-[60px] h-[1px] bg-[#C9A227]/40 mb-6"></div>
<p className="font-normal text-[#2D3436]/45 text-sm leading-[1.6] mb-10 flex-grow">
                        Formation en cours de déploiement
                    </p>
<div className="mt-auto inline-flex items-center justify-center bg-[#F7F2EC] border border-[#6B8F71]/35 text-[#2D3436]/45 font-normal text-base rounded-[10px] px-7 py-3.5 w-full cursor-default">
                        Bientôt disponible
                    </div>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-[#F7F2EC] pt-16 pb-16" id="praticiens">
<div className="max-w-7xl mx-auto px-6 reveal active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    PRATICIENS CERTIFIÉS
                </div>
<h2 className="md:text-4xl leading-[1.3] text-3xl font-medium text-[#1A1A1A] tracking-tight font-['Playfair_Display'] mt-4 mb-4">15+ praticiens confirmés à ce jour.</h2>
<p className="font-normal text-[#2D3436]/55 text-base md:text-lg max-w-[800px] mx-auto">
                    Des professionnels certifiés par l'ICC,<br/>
                    disponibles pour vous accompagner individuellement.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-6">

<div className="bg-[#FFFFFF] rounded-[14px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] border-transparent hover:border-[#C9A227] transition-all duration-300">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f27f8e2f-1b34-40c4-ab48-4cae5684994a_320w.png)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Stéphanie</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Bonnaventure</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Concarneau · 29</div><div className="text-sm font-normal text-[#2D3436] mb-1">stephicc29@gmail.com</div>
</div>
<div className="bg-[#FFFFFF] rounded-[14px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center text-center w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] border-transparent hover:border-[#C9A227] transition-all duration-300">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d036680-63cd-439c-b033-85fa8600d71b_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Sylvaine</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Merckel</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Aytré · 17</div><div className="text-sm font-normal text-[#2D3436] mb-1">contact@sylvaine-merckel.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b44d56b3-842c-4a37-a693-dfc155655db6_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Maïthé</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Denis</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Saint-Eugène · 02</div><div className="text-sm font-normal text-[#2D3436] mb-1">hetreenharmonie@gmail.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a911a4c-5c5c-4890-8956-5a17f63753ad_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Sylvie</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Levert</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Chambéry · 73</div><div className="text-sm font-normal text-[#2D3436] mb-1">sylevert73@gmail.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d77306-a897-4fb9-912d-d082313eb7f6_320w.png)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Sophie</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Delrot</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Mouriès · 13</div><div className="text-sm font-normal text-[#2D3436] mb-1">contact@sophiedelrot.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4d20662-e11b-41d9-9402-0f46b5e3acd3_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Satya</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Delahaye</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Québec · Canada</div><div className="text-sm font-normal text-[#2D3436] mb-1">osatcoach@gmail.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dafe45d3-cc99-4950-80c5-df7e6c97e86c_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Nathalie</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Belleville</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Limoges · 87</div><div className="text-sm font-normal text-[#2D3436] mb-1">nathalie@nbelleville-360-conseildeveloppement.fr</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8e8d470-0c39-4b4a-a1ff-95612384d729_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-[18px] mb-1">Corinne</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">De Barbentane</div>
<div className="font-normal text-[#C9A227] text-xs mb-5 tracking-[1px]">Gornac · 33</div><div className="text-sm font-normal text-[#2D3436] mb-1">corinnedebarbentane@gmail.com</div>
</div>
<div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71ef53bb-69b0-4b11-9ac8-51efa290f207_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="text-[18px] font-medium text-[#1A1A1A] font-['Playfair_Display'] mb-1">Yasmina</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Jaï</div>
<div className="text-xs font-normal text-[#C9A227] tracking-[1px] mb-5">Casablanca · Maroc</div><div className="text-sm font-normal text-[#2D3436] mb-1">yasminajai@yahoo.fr</div>
</div>
<div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe943532-0d5d-4c62-a553-57aa5e3fa44b_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="text-[18px] font-medium text-[#1A1A1A] font-['Playfair_Display'] mb-1">Sophie</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Tetas</div>
<div className="text-xs font-normal text-[#C9A227] tracking-[1px] mb-5">Beaufort en Vallée • 49</div><div className="text-sm font-normal text-[#2D3436] mb-1">ladivineortie@gmail.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe52328-f02b-47c9-81d5-c454b25730ab_320w.png)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="text-[18px] font-medium text-[#1A1A1A] font-['Playfair_Display'] mb-1">Laurence</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Canicas</div>
<div className="text-xs font-normal text-[#C9A227] tracking-[1px] mb-5">Navarrenx • 64</div><div className="text-sm font-normal text-[#2D3436] mb-1">laurencecanicas33@gmail.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed8e88e1-cba3-4ecb-a410-a2e731042167_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="text-[18px] font-medium text-[#1A1A1A] font-['Playfair_Display'] mb-1">Laurence</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">Baudet</div>
<div className="text-xs font-normal text-[#C9A227] tracking-[1px] mb-5">Gland 1196 (SUISSE)</div><div className="text-sm font-normal text-[#2D3436] mb-1">info@la-voie-de-la-transformation.com</div>
</div><div className="flex flex-col md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[1.5px] hover:border-[#C9A227] transition-all duration-300 text-center bg-[#FFFFFF] w-full border-transparent rounded-[14px] pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] items-center">
<div className="flex bg-[#FDFBF7] w-[90px] h-[90px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c6adee1-180f-489e-934c-f867a5b16e12_320w.jpg)] bg-cover bg-center border-[#C9A227] border-2 rounded-full mb-5 shadow-sm items-center justify-center">
</div>
<div className="text-[18px] font-medium text-[#1A1A1A] font-['Playfair_Display'] mb-1">Arlène</div>
<div className="text-sm font-normal text-[#2D3436] mb-1">César</div>
<div className="text-xs font-normal text-[#C9A227] tracking-[1px] mb-5">Neuilly-Plaisance 93 / Guadeloupe</div><div className="text-sm font-normal text-[#2D3436] mb-1">cesararlene@gmail.com</div>
</div>
</div>
<div className="text-center mt-12 mb-8">
<p className="text-sm font-normal italic text-[#6b8f71]">En France, en Guadeloupe, au Maroc, au Canada.<br/> Et partout en ligne.</p>
</div>
<div className="flex justify-center mt-8">
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-6 reveal active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    NOTRE POSTURE
                </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-2xl md:text-4xl leading-[1.3] tracking-tight mt-4">
                    Nous ne promettons pas<br className="hidden md:block"/>
                    que ça va aller mieux.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative bg-[#F7F2EC] rounded-[14px] p-9 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[4px] bg-[#C96A4A] rounded-t-[14px]"></div>
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-lg leading-[1.8]">
                        Nous ne cherchons pas<br/>
                        à vous faire aller mieux.<br/>
                        Nous vous accompagnons à ne plus<br/>
                        négocier l'essentiel.
                    </p>
</div>

<div className="relative bg-[#F7F2EC] rounded-[14px] p-9 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[4px] bg-[#6B8F71] rounded-t-[14px]"></div>
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-lg leading-[1.8]">
                        Nous ne créons pas de dépendance.<br/>
                        Nous révélons ce qui est<br/>
                        déjà là — en vous.
                    </p>
</div>

<div className="relative bg-[#F7F2EC] rounded-[14px] p-9 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[4px] bg-[#C9A227] rounded-t-[14px]"></div>
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-lg leading-[1.8]">
                        Nous ne vendons pas du bien-être.<br/>
                        Nous accompagnons le choix —<br/>
                        profond, ancré, non-négociable.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F7F2EC]">
<div className="max-w-7xl mx-auto px-6 reveal active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    REGARDS DE PROFESSIONNELS
                </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-2xl md:text-4xl leading-[1.3] tracking-tight mt-4 mb-4">
                    Ce que les experts en disent.
                </h2>
<p className="font-normal text-[#2D3436]/55 text-base md:text-lg max-w-[800px] mx-auto">
                    Hypnothérapeutes, psychothérapeutes, coachs —<br/>
                    ils ont évalué la méthode avec leur regard professionnel.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1">
<span className="absolute top-4 left-6 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-4">
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-base md:text-lg leading-[1.8] mb-6">
                            J'ai été très surpris de découvrir l'intelligence<br/>
                            et la simplicité du Protocole CALL®.<br/>
                            Il permet de comprendre le cheminement mental<br/>
                            utile à une prise de décision —<br/>
                            et d'impulser un changement cohérent,<br/>
                            respectueux, efficient.<br/>
                            Un outil indispensable entre les mains<br/>
                            des coachs, des thérapeutes, des entrepreneurs.
                        </p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-4"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Daniel Berger</div>
<div className="font-normal text-[#2D3436]/55 text-sm">Hypnothérapeute</div>
</div>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1">
<span className="absolute top-4 left-6 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-4">
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-base md:text-lg leading-[1.8] mb-6">
                            L'intelligence et la simplicité du Protocole CALL®<br/>
                            m'ont surprise. Il permet de comprendre<br/>
                            le cheminement mental utile à une prise<br/>
                            de décision radicale — et d'impulser<br/>
                            un changement cohérent, respectueux, efficient.<br/>
                            Un outil très puissant entre les mains<br/>
                            des coachs et des psychothérapeutes.
                        </p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-4"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Clairanne Leroudier</div>
<div className="font-normal text-[#2D3436]/55 text-sm">Praticienne en Psychothérapie ·<br/>Formatrice et coach, dirigeants &amp; entrepreneurs</div>
</div>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1">
<span className="absolute top-4 left-6 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-4">
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-base md:text-lg leading-[1.8] mb-6">
                            Le Protocole CALL® a entraîné des changements<br/>
                            impactants dans tous les domaines de ma vie —<br/>
                            par son processus qui aligne le mental, le corps,<br/>
                            l'être, l'esprit et l'âme.<br/>
                            D'abord utilisé en auto-coaching,<br/>
                            j'ai rapidement eu envie de le transmettre<br/>
                            à mes clients. J'ai suivi la formation.
                        </p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-4"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Maïthé Denis</div>
<div className="font-normal text-[#2D3436]/55 text-sm">Thérapeute holistique ·<br/>Accompagnante des hypersensibles</div>
</div>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1">
<span className="absolute top-4 left-6 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-4">
<p className="font-['Playfair_Display'] italic text-[#1A1A1A] text-base md:text-lg leading-[1.8] mb-6">
                            Le travail via le Protocole CALL® est très puissant :<br/>
                            il représente une ressource essentielle<br/>
                            sur LE sujet majeur des humains —<br/>
                            le passage à l'action.<br/>
                            Justesse et efficacité.
                        </p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-4"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Nicolas Raimbault, PhD</div>
<div className="font-normal text-[#2D3436]/55 text-sm">Coach de performance en entreprise</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=2500&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-[#FDFBF7]/90"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 reveal active">
<div className="text-center mb-16 flex flex-col items-center">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px]">
                    ILS L'ONT VÉCU
                </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-3xl md:text-4xl leading-[1.3] tracking-tight mt-4">
                    Ce que le choix conscient<br className="hidden md:block"/>
                    a changé dans leur vie.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1">
<span className="absolute top-6 left-8 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-6">
<p className="md:text-lg leading-[1.8] text-base italic text-[#1A1A1A] font-['Playfair_Display'] mb-8">“Quand j’ai une vraie décision à prendre, je passe par le Protocole CALL.

C’est pas juste un moment pour réfléchir. Ça va beaucoup plus loin. Ça vient chercher ce qui est vraiment là, au fond, là où je ne peux plus me mentir.

Très vite, je sens si mon choix est solide… ou si je suis en train de me raconter une histoire pour me rassurer.

C’est parfois inconfortable, parce que ça bouscule. Mais en même temps, ça fait du bien. Ça remet de la clarté, ça réaligne.

Et surtout, ça m’évite de tourner en rond pendant des jours.

À la fin, soit mon choix devient une évidence, vraiment non négociable. Soit il s’ajuste… mais dans tous les cas, je repars avec quelque chose de clair, conscient, et beaucoup plus juste pour moi.”
</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-5"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Claire</div>
<div className="font-normal text-[#2D3436]/55 text-sm italic">Accompagnée par un praticien certifié ICC</div>
</div>
</div>

<div className="relative bg-[#FFFFFF] rounded-[14px] p-7 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1 flex flex-col justify-center">
<span className="absolute top-6 left-8 font-['Playfair_Display'] text-[#C9A227]/30 text-6xl leading-none">"</span>
<div className="relative z-10 pt-6">
<p className="md:text-lg leading-[1.8] text-base italic text-[#1A1A1A] font-['Playfair_Display'] mb-8">“ Choisir...un cauchemar pour moi.
Choisir entre papa et maman à 12 ans...Je ne peux plus entendre ce mot. 
De grandes frustrations naissent car les autres choisissent à ma place.

Quelques décennies plus tard, une phrase forte arrive à mes oreilles : 
«tout ce qui est  choisi n’est pas subi» entendue lors d’une présentation du protocole CALL.
Et subir, ça, je n’en veux plus. 

«Demandez et vous recevrez». La chance me sourit.
Je m’en suis fait un ami, simple et puissant. Pourquoi? 
Parce que choisir avec le protocole CALL, c’est bye bye la victime. 
J’entre en amour avec moi et donc avec les autres. 
Je prends la responsabilité de ma vie. 
Je pose mon choix dans un cadre sécure, sous l’oreille attentive et respectueuse du praticien ou de la praticienne. 
De plus, ce choix est scellé par devant l’Énergie Divine. Je passe ainsi du sacrifice à la bénédiction. 
Une demi-heure pour donner la bonne direction à ma vie, je prends et je transmets.”
</p>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-5 mt-auto"></div>
<div className="font-medium text-[#1A1A1A] text-base mb-0.5">Laurence</div>
<div className="font-normal text-[#2D3436]/55 text-sm italic">Accompagnée par un praticien certifié ICC</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-center relative">
<div className="bg-[#F7F2EC]/90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center text-center reveal active">
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-10"></div>
<div className="font-normal text-[#1A1A1A]/55 text-xs uppercase tracking-[3px] mb-6">
                AU-DELÀ DU CHOIX ET DE LA TRANSFORMATION
            </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-3xl md:text-4xl leading-[1.3] tracking-tight mb-8">
                La Pratique de l'Intime.
            </h2>
<p className="font-['Playfair_Display'] font-normal italic text-[#2D3436] text-lg leading-[1.8] mb-6">
                Une invitation à découvrir en soi<br/>
                de plus hauts degrés de maîtrise —<br/>
                et à devenir, pour soi-même et pour les autres,<br/>
                une source de paix, de joie et d'amour.
            </p>
<p className="font-normal text-[#2D3436]/55 text-base leading-[1.8] mb-10">
                Cette pratique se transmet en présence.<br/>
                Elle n'est pas encore publique.
            </p>
<div className="w-[60px] h-[1px] bg-[#C9A227]"></div>
</div>
</section>

<section className="py-16 md:py-24 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3a6823d-65ef-40fe-a931-27b552671c73_1600w.webp)] bg-cover relative" id="contact">
<div className="bg-[#F7F2EC]/85 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-[800px] mx-auto px-6 flex flex-col items-center text-center reveal">
<div className="uppercase text-xs font-normal text-[#6b8f71] tracking-[3px] mb-4">
                PREMIÈRE ÉTAPE
            </div>
<h2 className="font-['Playfair_Display'] font-medium text-[#1A1A1A] text-3xl md:text-4xl leading-[1.3] tracking-tight mb-6">
                Vous sentez que quelque chose<br className="hidden md:block"/>
                doit changer ?
            </h2>
<p className="font-normal text-[#2D3436]/80 text-base md:text-lg leading-[1.8] mb-12">
                Commencez par une séance avec un praticien certifié.<br/>
                Ou découvrez nos formations pour devenir<br/>
                vous-même un passeur de choix.
            </p>
<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mb-16">
<a className="inline-flex items-center justify-center hover:bg-[#B85C3C] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(201,106,74,0.35)] group md:w-auto text-base font-medium text-[#FDFBF7] bg-[#C96A4A] w-full rounded-[10px] pt-4 pr-9 pb-4 pl-9" href="/#praticiens" target="_blank">
                    Réserver une séance <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
<a className="inline-flex items-center justify-center border-[1.5px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A227]/[0.08] group md:w-auto text-base font-medium text-[#6b8f71] bg-transparent w-full border-[#6b8f71] rounded-[10px] pt-4 pr-9 pb-4 pl-9" href="#se-former">
                    Découvrir les formations <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="w-[60px] h-[1px] bg-[#C9A227] mb-8 mx-auto"></div>
<p className="font-normal text-[#2D3436]/55 text-sm">
                Une question ? contact@choix-conscience.fr
            </p>
</div>
</section>

<footer className="py-16 bg-[#1A1A1A]">
<div className="w-full h-[1px] bg-[#FDFBF7]/[0.08] mb-14"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

<div className="">
<div className="text-xl font-semibold text-[#6b8f71] tracking-tight font-['Playfair_Display'] mb-4">ICC</div>
<p className="font-light text-[#FDFBF7]/45 text-sm leading-[1.8] mb-5">
                    Institut Choix &amp; Conscience<br/>
                    Protocole CALL® · Introspection Dynamique®<br/>
                    Pratique de l'Intime
                </p>
<p className="font-light text-[#FDFBF7]/25 text-[11px] italic">
                    Protocole CALL® et Introspection Dynamique®<br/>
                    sont des marques déposées de Jean-Luc De Wachter.
                </p>
</div>

<div className="">
<div className="font-normal text-[#C9A227]/60 text-xs uppercase tracking-[2px] mb-5">
                    NAVIGATION
                </div>
<div className="flex flex-col space-y-3">
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="#linstitut">L'Institut</a>
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="#nos-outils">Nos outils</a>
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="#se-former">Se former</a>
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="#praticiens">Praticiens certifiés</a>
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="#contact">Contact</a>
</div>
</div>

<div className="">
<div className="font-normal text-[#C9A227]/60 text-xs uppercase tracking-[2px] mb-5">
                    LIENS
                </div>
<div className="flex flex-col space-y-3">
<a className="font-normal text-[#FDFBF7]/55 text-sm hover:text-[#C9A227] transition-colors leading-[1.6]" href="https://association-incandescence.org" target="_blank">association-incandescence.org</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 mb-8">
<div className="w-full h-[1px] bg-[#FDFBF7]/[0.08]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="font-light text-[#FDFBF7]/25 text-[11px]">
                © 2026 Institut Choix &amp; Conscience ·<br className="md:hidden"/>
                Protocole CALL® et Introspection Dynamique®<br className="md:hidden"/>
                sont des marques déposées de Jean-Luc De Wachter.
            </p>
</div>
</footer>



    </>
  );
}
