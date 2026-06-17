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



tailwind.config = {
darkMode: "class",
theme: {
extend: {
fontFamily: {
sans: ["Inter", "sans-serif"],
headings: ["Inter", "sans-serif"],
},
colors: {
background: "#0a0a0a",
foreground: "#ffffff",
primary: {
DEFAULT: "#ea580c", // Adjusted orange to match image better
foreground: "#ffffff",
},
secondary: {
DEFAULT: "#171717",
foreground: "#ffffff",
},
border: "#262626",
muted: {
foreground: "#a3a3a3",
},
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen">

<header className="w-full flex items-center justify-between py-6 px-8 max-w-7xl mx-auto border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-semibold text-lg">
            S
          </div>
<span className="font-headings font-semibold tracking-tight text-xl">
            Synapplink
          </span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-muted-foreground hover:text-white transition-colors" href="#">
            Fonctionnalités
          </a>
<a className="text-muted-foreground hover:text-white transition-colors" href="#">
            À propos
          </a>
<a className="text-muted-foreground hover:text-white transition-colors" href="#">
            FAQ
          </a>
<a className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded transition-all text-white" href="#">
            Contact
          </a>
</nav>
</header>
<main className="flex-1">

<section className="max-w-7xl mx-auto px-8 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-16 relative">
<div className="flex-1 space-y-8 z-10">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              Plateforme de mise en relation &amp; IA
            </p>
<h1 className="text-5xl lg:text-6xl font-headings font-semibold tracking-tight leading-[1.1]">
              TROUVEZ LE CONSULTANT IDÉAL
              <br/>
              AVEC L'IA
            </h1>
<p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
              Connectez votre entreprise aux meilleurs experts grâce à notre
              matching intelligent et gérez vos talents en toute simplicité.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-medium">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
<iconify-icon className="text-primary" icon="lucide:check" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>+ 10 000 Matchs réussis</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
<iconify-icon className="text-primary" icon="lucide:check" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>Gestion RH intégrée</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm font-medium pb-2">
<div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
<iconify-icon className="text-primary" icon="lucide:check" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>Matching IA précis à 95%</span>
</div>
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2 shadow-lg shadow-primary/20">
              TROUVER UN CONSULTANT
              <iconify-icon icon="lucide:arrow-up-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex items-center gap-4 pt-6">
<div className="flex -space-x-3">
<img alt="Cliente" className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="Cliente" className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="Cliente" className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
</div>
<div>
<p className="font-semibold text-primary text-sm tracking-tight">
                  + 1000 Entreprises
                </p>
<p className="text-muted-foreground text-xs">
                  connectées aux talents
                </p>
</div>
</div>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] lg:aspect-[4/5] shadow-2xl bg-secondary">
<div className="bg-gradient-to-t from-background via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<video autoplay="" className="w-full h-full object-cover grayscale opacity-70" loop="" muted="" playsinline="">
<source src="https://cdn.midjourney.com/video/be7fe4b5-4e61-43ff-a032-c3437af87362/0.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-primary mix-blend-color opacity-50 z-[5] pointer-events-none"></div>

<div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 z-20 shadow-2xl animate-pulse">
<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
<iconify-icon icon="lucide:sparkles" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-muted-foreground">Nouveau Match IA</p>
<p className="font-semibold text-sm tracking-tight text-white">
                    Profil recommandé : 98%
                  </p>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="py-32 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
<div className="flex-1 w-full">
<div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10"></div>
<img alt="Corredor escuro" className="w-full h-full object-cover grayscale opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex-1 space-y-8">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              Le défi
            </p>
<h2 className="text-4xl lg:text-5xl font-headings font-semibold tracking-tight leading-[1.1]">
              Trouver le bon expert, rapidement,
              <span className="text-primary italic font-normal">
                est souvent un parcours du combattant.
              </span>
</h2>
<div className="space-y-6 text-muted-foreground text-base leading-relaxed">
<p>
                Chez Synapplink, nous transformons la recherche de talents en
                une expérience fluide grâce à l'intelligence artificielle.
              </p>
<p>
                Fini les CV perdus et les recrutements ratés. Notre algorithme
                analyse vos besoins pour vous proposer les profils les plus
                pertinents et maximiser vos chances de réussite.
              </p>
</div>
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2 w-fit">
              DÉCOUVRIR LA PLATEFORME
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>

<section className="py-32 px-8 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
<div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 mb-20">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              Fonctionnalités
            </p>
<h2 className="text-3xl lg:text-4xl font-headings font-semibold tracking-tight">
              Comment
              <br/>
<span className="italic font-normal">Synapplink</span>
              fonctionne :
            </h2>
<p className="text-muted-foreground text-base max-w-2xl">
              Une plateforme complète pour les clients et les consultants,
              boostée par l'IA.
            </p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
<div className="w-14 h-14 bg-zinc-900 border border-white/10 group-hover:border-primary/50 text-primary rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black">
<iconify-icon icon="lucide:sparkles" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-4">
                Matching Intelligent (IA)
              </h3>
<p className="text-sm text-muted-foreground leading-relaxed">
                Notre IA calcule le pourcentage de correspondance entre vos
                besoins et les compétences des consultants. Des suggestions
                automatiques vous font gagner un temps précieux.
              </p>
</div>

<div className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
<div className="w-14 h-14 bg-zinc-900 border border-white/10 group-hover:border-primary/50 text-primary rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black">
<iconify-icon icon="lucide:briefcase" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-4">
                Gestion RH Simplifiée
              </h3>
<p className="text-sm text-muted-foreground leading-relaxed">
                Gérez vos missions, suivez vos consultants, mettez en favoris
                les meilleurs profils et accédez à des reportings détaillés pour
                une collaboration fluide.
              </p>
</div>

<div className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
<div className="w-14 h-14 bg-zinc-900 border border-white/10 group-hover:border-primary/50 text-primary rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black">
<iconify-icon icon="lucide:star" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-4">
                Évaluation &amp; Avis
              </h3>
<p className="text-sm text-muted-foreground leading-relaxed">
                Consultez les notes sur 5 étoiles et les avis vérifiés laissés
                par les clients pour faire le meilleur choix en toute confiance.
              </p>
</div>

<div className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
<div className="w-14 h-14 bg-zinc-900 border border-white/10 group-hover:border-primary/50 text-primary rounded-xl flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black">
<iconify-icon icon="lucide:user-check" style={{fontSize: '24px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-lg tracking-tight mb-4">
                Pour les Consultants
              </h3>
<p className="text-sm text-muted-foreground leading-relaxed">
                Créez votre fiche de poste, passez nos tests d'expertise
                (quizz), gérez facilement vos missions et désactivez votre
                profil selon vos disponibilités.
              </p>
</div>
</div>
<div className="mt-20 flex flex-col items-center">
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2">
              CRÉER UN COMPTE GRATUITEMENT
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-muted-foreground text-sm mt-6 italic">
              "L'IA au service de votre recrutement et de votre gestion de
              projet."
            </p>
</div>
</section>

<section className="py-32 px-8 max-w-5xl mx-auto">
<div className="text-center space-y-6 mb-20">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              Comparaison
            </p>
<h2 className="text-3xl lg:text-4xl font-headings font-semibold tracking-tight">
              Pourquoi
              <span className="italic font-normal">choisir Synapplink</span>
              plutôt qu'un
              <br/>
              cabinet traditionnel
            </h2>
<p className="text-muted-foreground text-base">
              Découvrez la différence d'une approche boostée par l'Intelligence
              Artificielle.
            </p>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 shadow-2xl">

<div className="grid grid-cols-2 text-center text-xs font-medium tracking-[0.1em] border-b border-white/10">
<div className="bg-zinc-900/50 p-6 uppercase text-muted-foreground flex items-center justify-center">
                Cabinets de Recrutement
              </div>
<div className="bg-primary p-6 uppercase text-white flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                Synapplink (IA)
              </div>
</div>

<div className="divide-y divide-white/5">
<div className="grid grid-cols-2 text-sm">
<div className="p-6 md:p-8 text-muted-foreground flex items-center justify-center text-center">
                  Processus longs et manuels de sélection de profils.
                </div>
<div className="p-6 md:p-8 text-white flex items-center justify-center text-center bg-white/[0.02]">
                  Matching instantané et automatisé calculant la correspondance
                  avec l'IA.
                </div>
</div>
<div className="grid grid-cols-2 text-sm">
<div className="p-6 md:p-8 text-muted-foreground flex items-center justify-center text-center">
                  Frais de placement exorbitants et opacité des processus.
                </div>
<div className="p-6 md:p-8 text-white flex items-center justify-center text-center bg-white/[0.02]">
                  Modèle transparent avec outils de gestion RH complets inclus.
                </div>
</div>
<div className="grid grid-cols-2 text-sm">
<div className="p-6 md:p-8 text-muted-foreground flex items-center justify-center text-center">
                  Profils génériques sans réelle vérification de niveau.
                </div>
<div className="p-6 md:p-8 text-white flex items-center justify-center text-center bg-white/[0.02]">
                  Consultants vérifiés par tests (quizz) et évalués par la
                  communauté.
                </div>
</div>
<div className="grid grid-cols-2 text-sm">
<div className="p-6 md:p-8 text-muted-foreground flex items-center justify-center text-center">
                  Suivi inexistant une fois le consultant placé en entreprise.
                </div>
<div className="p-6 md:p-8 text-white flex items-center justify-center text-center bg-white/[0.02]">
                  Outils intégrés de gestion de mission, suivi et relais
                  d'activité.
                </div>
</div>
<div className="grid grid-cols-2 text-sm">
<div className="p-6 md:p-8 text-muted-foreground flex items-center justify-center text-center">
                  Recherche fastidieuse pour vos futurs besoins.
                </div>
<div className="p-6 md:p-8 text-white flex items-center justify-center text-center bg-white/[0.02]">
                  Suggestions automatiques de l'IA et système de profils
                  favoris.
                </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 max-w-5xl mx-auto flex flex-col items-center">
<h2 className="text-3xl lg:text-4xl font-headings font-semibold text-center tracking-tight mb-16">
            Le choix pour vos futurs projets,
            <br/>
<span className="italic font-normal text-primary">
              est désormais simple :
            </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="rounded-2xl overflow-hidden border border-white/10 relative aspect-[4/3] md:aspect-video flex items-end p-6 lg:p-10 group">
<div className="absolute inset-0 z-0">
<img alt="Sucesso" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="w-12 h-12 bg-primary rounded-xl font-bold text-2xl flex items-center justify-center text-white shadow-lg">
                  1
                </div>
<p className="font-medium text-lg text-white leading-snug">
                  Trouver le consultant parfait en quelques clics grâce à l'IA
                  de Synapplink et gérer vos missions facilement.
                </p>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-white/5 relative aspect-[4/3] md:aspect-video flex items-end p-6 lg:p-10 grayscale opacity-80">
<div className="absolute inset-0 z-0">
<img alt="Frustração" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded-xl font-bold text-2xl flex items-center justify-center text-zinc-400 border border-white/10">
                  2
                </div>
<p className="font-medium text-lg text-muted-foreground leading-snug">
                  Perdre du temps et de l'argent avec des méthodes de
                  recrutement et de gestion dépassées.
                </p>
</div>
</div>
</div>
<div className="mt-16">
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2">
              COMMENCER LE MATCHING
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-8 py-32 flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 w-full max-w-md relative">
<div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-3xl opacity-20"></div>
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 bg-zinc-900">
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
<img alt="Allan - Gestor" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="flex-1 space-y-8">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              La plateforme
            </p>
<h2 className="text-3xl lg:text-4xl font-headings font-semibold tracking-tight uppercase">
              QU'EST-CE QUE SYNAPPLINK ?
            </h2>
<div className="space-y-4 text-muted-foreground text-base leading-relaxed">
<p>
                Synapplink est la nouvelle référence pour connecter talents et
                entreprises.
              </p>
<p className="text-white font-medium">
                Une solution propulsée par l'Intelligence Artificielle.
              </p>
<p>
                Notre application web met en relation des clients et des
                consultants spécialisés dans de multiples domaines.
              </p>
<p>
                Fini les recrutements au hasard : notre système de matching
                analyse les fiches de poste, calcule un pourcentage de
                correspondance et vous propose des suggestions automatiques pour
                un recrutement sur-mesure.
              </p>
<p>
                Pour les clients, c'est l'assurance d'une recherche filtrable,
                d'une gestion RH intégrée, du suivi des missions et d'un système
                de notation fiable.
              </p>
<p>
                Pour les consultants, c'est une vitrine pour mettre en avant
                leur expertise, passer des tests qualifiants et accepter des
                missions adaptées à leurs compétences.
              </p>
<p>
                Que vous cherchiez à relayer des activités ou à trouver votre
                prochaine mission, Synapplink rend la collaboration simple,
                intelligente et efficace.
              </p>
</div>
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2 mt-4 w-fit">
              REJOINDRE LA COMMUNAUTÉ
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>

<section className="py-32 px-8 border-y border-white/5 bg-zinc-950 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 mb-20">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              Témoignages
            </p>
<h2 className="text-3xl lg:text-4xl font-headings font-semibold tracking-tight">
              Les entreprises qui
              <span className="italic font-normal">accélèrent</span>
<br/>
              leurs projets avec Synapplink
            </h2>
<p className="text-muted-foreground text-base">
              Des collaborations réussies grâce au matching IA
            </p>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar px-4 max-w-[1400px] mx-auto">

<div className="min-w-[320px] sm:min-w-[400px] bg-black border border-white/10 p-8 rounded-2xl snap-center flex-shrink-0 flex flex-col justify-between">
<div>
<div className="flex text-primary mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-white/90 leading-relaxed mb-8">
                  "En 2 jours, l'IA nous a trouvé le développeur freelance
                  parfait (Match 98%). Le système de gestion de mission intégré
                  est un vrai plus."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover bg-zinc-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<p className="font-semibold text-sm text-white tracking-tight">
                    Marie Dubois
                  </p>
<p className="text-xs text-muted-foreground">Tech Lead</p>
</div>
</div>
</div>

<div className="min-w-[320px] sm:min-w-[400px] bg-black border border-white/10 p-8 rounded-2xl snap-center flex-shrink-0 flex flex-col justify-between">
<div>
<div className="flex text-primary mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-white/90 leading-relaxed mb-8">
                  "En tant que consultante, les suggestions automatiques m'ont
                  permis de trouver des clients qui correspondent exactement à
                  mes compétences."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover bg-zinc-800" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<p className="font-semibold text-sm text-white tracking-tight">
                    Sophie Martin
                  </p>
<p className="text-xs text-muted-foreground">Consultante RH</p>
</div>
</div>
</div>

<div className="min-w-[320px] sm:min-w-[400px] bg-black border border-white/10 p-8 rounded-2xl snap-center flex-shrink-0 flex flex-col justify-between">
<div>
<div className="flex text-primary mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" style={{fontSize: '14px', strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-white/90 leading-relaxed mb-8">
                  "Le système de notation et de test d'entrée nous rassure sur
                  la qualité. Mettre des consultants en favoris facilite nos
                  recrutements récurrents."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover bg-zinc-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<p className="font-semibold text-sm text-white tracking-tight">
                    Thomas Leroy
                  </p>
<p className="text-xs text-muted-foreground">
                    Directeur Marketing
                  </p>
</div>
</div>
</div>

<div className="min-w-[40px] flex-shrink-0"></div>
</div>
<div className="mt-8 flex justify-center">
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold text-base flex items-center gap-2">
              TROUVER MON CONSULTANT
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>

<section className="py-32 px-8 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="flex-1 space-y-8 sticky top-10">
<p className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
              FAQ
            </p>
<h2 className="text-3xl lg:text-4xl font-headings font-semibold tracking-tight">
              Questions fréquentes sur le fonctionnement de Synapplink
            </h2>
<p className="text-muted-foreground text-base">
              Tout ce que vous devez savoir sur le recrutement par IA.
            </p>
<button className="bg-primary hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded font-semibold flex items-center gap-2 mt-8 w-fit">
              DÉCOUVRIR SYNAPPLINK
              <iconify-icon icon="lucide:arrow-right" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex-[1.2] w-full space-y-4">

<div className="group flex items-center justify-between p-6 border border-white/10 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<span className="font-medium text-base text-white">
                Comment fonctionne le matching IA ?
              </span>
<div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white shrink-0 shadow-md">
<iconify-icon icon="lucide:chevron-down" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group flex items-center justify-between p-6 border border-white/10 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<span className="font-medium text-base text-white">
                Les compétences des consultants sont-elles vérifiées ?
              </span>
<div className="w-10 h-10 bg-zinc-800 group-hover:bg-primary transition-colors rounded flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:chevron-down" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group flex items-center justify-between p-6 border border-white/10 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<span className="font-medium text-base text-white">
                Comment se déroule la gestion RH d'une mission ?
              </span>
<div className="w-10 h-10 bg-zinc-800 group-hover:bg-primary transition-colors rounded flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:chevron-down" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group flex items-center justify-between p-6 border border-white/10 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<span className="font-medium text-base text-white">
                En tant que consultant, puis-je désactiver mon profil
                temporairement ?
              </span>
<div className="w-10 h-10 bg-zinc-800 group-hover:bg-primary transition-colors rounded flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:chevron-down" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group flex items-center justify-between p-6 border border-white/10 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<span className="font-medium text-base text-white">
                Quels sont les domaines d'expertise couverts par l'application ?
              </span>
<div className="w-10 h-10 bg-zinc-800 group-hover:bg-primary transition-colors rounded flex items-center justify-center text-white shrink-0">
<iconify-icon icon="lucide:chevron-down" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 pt-20 pb-10 px-8 bg-black mt-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-semibold text-lg">
                S
              </div>
<div className="leading-none">
<span className="font-headings font-semibold tracking-tight text-xl block">
                  Synapplink
                </span>
<span className="text-xs font-normal text-muted-foreground block mt-1">
                  Plateforme
                </span>
</div>
</div>
<p className="text-sm text-muted-foreground leading-relaxed pr-4">
              La plateforme intelligente qui connecte entreprises et consultants
              d'exception grâce à l'IA et une gestion RH simplifiée.
            </p>
<div className="flex gap-4 text-muted-foreground">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" style={{fontSize: '20px', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-white tracking-tight mb-6">
              Liens Rapides
            </h4>
<ul className="space-y-4 text-sm text-muted-foreground">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Accueil
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Fonctionnalités
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Témoignages
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Questions Fréquentes
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white tracking-tight mb-6">
              Fonctionnalités
            </h4>
<ul className="space-y-4 text-sm text-muted-foreground">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Matching IA
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Gestion RH
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Système d'évaluation
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Tests &amp; Quizz Consultants
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Suggestions automatiques
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Suivi de mission
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white tracking-tight mb-6">
              Contato
            </h4>
<ul className="space-y-4 text-sm text-muted-foreground">
<li className="flex items-center gap-3">
<iconify-icon icon="lucide:mail" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="#">
                  contact@synapplink.com
                </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="lucide:phone" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white transition-colors" href="#">
                  +33 1 23 45 67 89
                </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="lucide:map-pin" style={{fontSize: '16px', strokeWidth: '1.5'}}></iconify-icon>
<span>Paris, France</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
<p>© 2024 Synapplink. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Política de Privacidade
            </a>
<a className="hover:text-white transition-colors" href="#">
              Termos de Uso
            </a>
</div>
</div>
</footer>
</div>

    </>
  );
}
