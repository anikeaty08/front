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
      

<div className="fixed inset-0 z-[-1] grid-bg pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center text-black font-bold text-xs tracking-tighter">
                    MM
                </div>
<span className="text-sm font-semibold tracking-tight text-white">MEME MACHINE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Algorithme</a>
<a className="hover:text-white transition-colors" href="#thanks">Remerciements</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="https://meme-generator-seven-eta.vercel.app/" target="_blank">
                Ouvrir l'App
            </a>
</div>
</nav>

<main className="pt-32 pb-20 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                v4.2.0 - Mise à jour 2026
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
                Transforme ton Cringe Corporate en<br/>
<span className="word-art word-art-rainbow text-7xl md:text-9xl block mt-2">CLOUT</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                La première IA au monde conçue pour "brutaliser" tes posts LinkedIn et en faire des mèmes viraux.
                Arrête de poster "honoré d'annoncer". Commence à poster de <span className="text-pink-400 font-medium">l'or en barre d'internet</span>.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="cta-button shadow-2xl no-underline" href="https://meme-generator-seven-eta.vercel.app/" target="_blank">
                    GÉNÉRER DES MÈMES
                </a>
</div>
</div>

<div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-30 rotate-12 pointer-events-none">
<div className="word-art word-art-outline text-8xl font-black">MDR</div>
</div>
<div className="absolute top-1/3 right-10 hidden lg:block opacity-30 -rotate-12 pointer-events-none">
<div className="word-art word-art-glitch text-6xl font-black" data-text="STONKS">STONKS</div>
</div>
</main>

<div className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-4xl mx-8 font-black text-transparent stroke-text opacity-20 word-art-outline">VIRAL</span>
<span className="text-4xl mx-8 font-black text-zinc-800">ENGAGEMENT</span>
<span className="text-4xl mx-8 font-black text-transparent stroke-text opacity-20 word-art-outline">CROISSANCE</span>
<span className="text-4xl mx-8 font-black text-zinc-800">MÈMES</span>
<span className="text-4xl mx-8 font-black text-transparent stroke-text opacity-20 word-art-outline">CHAOS</span>
<span className="text-4xl mx-8 font-black text-zinc-800">ROI</span>
<span className="text-4xl mx-8 font-black text-transparent stroke-text opacity-20 word-art-outline">MDR</span>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<iconify-icon className="text-pink-500 text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Moteur de Roast IA</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Entraîné sur 4To de commentaires Reddit. Il détecte le jargon corporate et le neutralise instantanément.</p>
</div>
<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<iconify-icon className="text-yellow-400 text-2xl" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Flexibilité de Format</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Génère des mèmes "deep-fried", la police Impact classique, ou des posts minimalistes modernes.</p>
</div>
<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Optimisation Virale</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Planifie automatiquement ton mème pile au moment où ton boss est en réunion importante.</p>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5 bg-[#050505]" id="thanks">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-blue-400 text-2xl animate-bounce" icon="solar:microphone-2-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-12">
                WALL OF FAME <span className="text-zinc-600 font-light">NEOSPACE</span>
</h2>
<div className="glass-panel p-1 rounded-3xl inline-block max-w-2xl w-full">
<div className="bg-[#030303] rounded-[22px] p-8 md:p-12 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-6">Invité d'Honneur</p>
<h3 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
<span className="word-art word-art-rainbow block transform hover:scale-105 transition-transform duration-300 cursor-default">TEO</span>
<span className="word-art word-art-rainbow block transform hover:scale-105 transition-transform duration-300 delay-75 cursor-default">BOUANCHEAU</span>
</h3>
<p className="text-lg text-zinc-300 italic mb-8 font-light">
                        "Pour sa participation légendaire au podcast Neospace."
                    </p>
<div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500 border-t border-white/5 pt-6">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>FEATURING</span>
</div>
<span className="text-white">THÉO MARÉCHAL</span>
<span className="text-zinc-700">•</span>
<span className="text-white">RÉNALD VIE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 text-center px-6 border-t border-white/5 bg-gradient-to-b from-[#030303] to-zinc-900/50">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
                Prêt à devenir un <br/>
<span className="word-art word-art-fire">VISIONNAIRE?</span>
</h2>
<button className="cta-button" onclick="window.open('https://meme-generator-seven-eta.vercel.app/', '_blank')">
                LANCER L'APP
            </button>
<p className="mt-6 text-xs text-zinc-500">Pas de carte bancaire requise. Juste ta dignité.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold">MM</div>
<span className="text-xs text-zinc-500">© 2026 MEME MACHINE 3000</span>
</div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn (Ironique)</a>
</div>
</div>
</footer>

    </>
  );
}
