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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg">MOTION.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#showcase">Exemples</a>
<a className="hover:text-white transition-colors" href="#pricing">Tarifs</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Connexion</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Essayer</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] hero-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nouveau : Exportation 4K disponible
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Le Motion Design,<br/>
<span className="text-neutral-500">sans After Effects.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Transformez vos captures d'écran et maquettes en vidéos promotionnelles fluides pour votre SaaS ou Agence. L'IA s'occupe de l'animation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                    Générer une vidéo
                    <iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:magic-stick-linear" width="20"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Voir la démo
                </button>
</div>

<div className="relative max-w-5xl mx-auto mt-12 rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-indigo-500/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-neutral-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-neutral-500 font-mono">projet_demo_v1.motion</div>
<div className="flex gap-4 text-neutral-400">
<iconify-icon icon="solar:undo-left-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex h-[400px]">

<div className="w-64 border-r border-white/5 p-4 flex flex-col gap-4">
<div className="space-y-2">
<div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Calques</div>
<div className="flex items-center gap-2 p-2 rounded bg-white/5 text-sm text-white border border-white/5">
<iconify-icon className="text-indigo-400" icon="solar:gallery-linear"></iconify-icon>
                                UI_Dashboard.png
                            </div>
<div className="flex items-center gap-2 p-2 rounded hover:bg-white/5 text-sm text-neutral-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:text-field-linear"></iconify-icon>
                                Titre Principal
                            </div>
<div className="flex items-center gap-2 p-2 rounded hover:bg-white/5 text-sm text-neutral-400 transition-colors cursor-pointer">
<iconify-icon icon="solar:cursor-linear"></iconify-icon>
                                Curseur Souris
                            </div>
</div>

<div className="mt-auto space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-xs text-neutral-400">
<span>Vitesse</span>
<span>1.5x</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Motion Blur</span>

<div className="w-8 h-4 bg-indigo-500 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:20px_20px] relative flex items-center justify-center p-8 overflow-hidden">

<div className="relative w-3/4 aspect-video bg-neutral-900 border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden group">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-16 h-2 bg-white/10 rounded-full"></div>
<div className="ml-auto w-4 h-4 rounded-full bg-white/10"></div>
</div>

<div className="flex-1 p-4 grid grid-cols-3 gap-4">
<div className="col-span-1 bg-white/5 rounded h-full animate-pulse"></div>
<div className="col-span-2 space-y-3">
<div className="w-full h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded"></div>
<div className="w-full h-8 bg-white/5 rounded"></div>
<div className="w-2/3 h-8 bg-white/5 rounded"></div>
</div>
</div>

<div className="absolute bottom-10 right-10 text-white drop-shadow-lg">
<iconify-icon className="transform -translate-x-1/2 -translate-y-1/2" icon="solar:cursor-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="h-12 border-t border-white/5 bg-neutral-900 flex items-center px-4 gap-1 relative">
<div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-red-500 z-10">
<div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 text-[10px] bg-red-500 text-white px-1 rounded-sm">0:02</div>
</div>
<div className="flex-1 h-6 bg-neutral-800 rounded relative overflow-hidden">
<div className="absolute left-0 w-1/4 h-full bg-indigo-500/30 border-l border-indigo-500/50"></div>
<div className="absolute left-1/4 w-1/3 h-full bg-purple-500/30 border-l border-purple-500/50"></div>
<div className="absolute left-[60%] w-1/5 h-full bg-emerald-500/30 border-l border-emerald-500/50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">UTILISÉ PAR LES ÉQUIPES DESIGN CHEZ</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter text-white">ACME<span className="font-light text-neutral-400">CORP</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS<span className="font-light text-neutral-400">LABS</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEX<span className="font-light text-neutral-400">AI</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBIT<span className="font-light text-neutral-400">AL</span></span>
<span className="text-xl font-semibold tracking-tighter text-white">PRISM</span>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Tout ce dont vous avez besoin <br/>pour animer.</h2>
<p className="text-neutral-400 text-lg max-w-xl">Une suite d'outils puissante pour créer des vidéos marketing qui convertissent, sans la complexité des logiciels traditionnels.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Keyframes Automatiques</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                            Ne perdez plus de temps à placer des points clés manuellement. Notre IA analyse la structure de votre interface et propose les mouvements les plus logiques (scroll, clic, hover).
                        </p>
</div>

<div className="mt-8 h-48 bg-neutral-900 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-indigo-500/10 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-indigo-500 animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Respect de la Charte</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Importez vos couleurs, polices et logos. Motion applique automatiquement votre branding.
                    </p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-[#6366f1]"></div>
<span className="text-xs text-neutral-300 font-mono">#6366F1</span>
</div>
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-[#ec4899]"></div>
<span className="text-xs text-neutral-300 font-mono">#EC4899</span>
</div>
<div className="flex items-center gap-3 p-2 rounded bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-[#10b981]"></div>
<span className="text-xs text-neutral-300 font-mono">#10B981</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Formats Adaptatifs</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Exportez en 16:9 pour YouTube, 9:16 pour TikTok ou 1:1 pour LinkedIn en un clic.
                    </p>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Bibliothèque de Presets</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                                Accédez à plus de 500 animations pré-conçues pour les transitions, les textes et les apparitions d'interface.
                            </p>
</div>
<div className="flex-1 w-full grid grid-cols-2 gap-3">
<div className="h-16 bg-neutral-900 border border-white/5 rounded flex items-center justify-center text-xs text-neutral-500 hover:border-indigo-500/50 hover:text-white transition-colors cursor-pointer">
                                Fade In Up
                            </div>
<div className="h-16 bg-neutral-900 border border-white/5 rounded flex items-center justify-center text-xs text-neutral-500 hover:border-indigo-500/50 hover:text-white transition-colors cursor-pointer">
                                Elastic Pop
                            </div>
<div className="h-16 bg-neutral-900 border border-white/5 rounded flex items-center justify-center text-xs text-neutral-500 hover:border-indigo-500/50 hover:text-white transition-colors cursor-pointer">
                                Smooth Reveal
                            </div>
<div className="h-16 bg-neutral-900 border border-white/5 rounded flex items-center justify-center text-xs text-neutral-500 hover:border-indigo-500/50 hover:text-white transition-colors cursor-pointer">
                                Cursor Click
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Tarification simple</h2>
<p className="text-neutral-400 text-lg">Commencez gratuitement, passez à l'échelle quand vous êtes prêt.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="border border-white/10 rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Débutant</h3>
<div className="text-3xl font-semibold tracking-tight mb-6">0€ <span className="text-sm font-normal text-neutral-500">/mois</span></div>
<p className="text-sm text-neutral-400 mb-8">Pour tester l'outil et générer vos premiers clips.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            3 exports / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Qualité 720p
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Filigrane Motion.
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Commencer</button>
</div>

<div className="border border-indigo-500/30 bg-indigo-500/5 rounded-2xl p-8 flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Populaire</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-semibold tracking-tight mb-6">29€ <span className="text-sm font-normal text-neutral-500">/mois</span></div>
<p className="text-sm text-neutral-400 mb-8">Pour les freelances et créateurs de contenu.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Exports illimités
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Qualité 4K 60fps
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Sans filigrane
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            Kits de marque
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium">S'abonner</button>
</div>

<div className="border border-white/10 rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Agence</h3>
<div className="text-3xl font-semibold tracking-tight mb-6">99€ <span className="text-sm font-normal text-neutral-500">/mois</span></div>
<p className="text-sm text-neutral-400 mb-8">Pour les équipes qui gèrent plusieurs clients.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Tout du plan Pro
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Collaborateurs illimités
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            API Access
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Support Prioritaire
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Contacter l'équipe</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight">MOTION.</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 Motion Inc. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
