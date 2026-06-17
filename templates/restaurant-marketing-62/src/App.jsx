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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Rethink Sans', 'sans-serif'],
},
animation: {
'blob': 'blob 7s infinite',
'shimmer': 'shimmer 2s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'wheel-spin': 'wheel 8s cubic-bezier(0.2, 0, 0.1, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
},
wheel: {
'0%': { transform: 'rotate(0deg)' },
'80%': { transform: 'rotate(1080deg)' },
'100%': { transform: 'rotate(1080deg)' }
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-display font-bold text-2xl tracking-tight text-white hover:text-white/80 transition-colors" href="#">
                rool'z
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-white transition-colors" href="#ia">Studio IA</a>
<a className="hover:text-white transition-colors" href="#menu">Menu Digital</a>
<a className="hover:text-white transition-colors" href="#tarifs">Tarifs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Connexion</a>
<button className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#505050_50%,#E2E8F0_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-4 py-1 text-xs font-medium text-white backdrop-blur-3xl transition-colors hover:bg-neutral-900">
                        Commencer
                    </span>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-6 z-10 overflow-hidden">
<div className="max-w-5xl mx-auto text-center space-y-8">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">V2.0 : Génération d'images IA &amp; Menu Digital</span>
</div>
<h1 className="reveal font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[0.95] space-y-2">
<div style={{transitionDelay: '100ms'}}>Fidélisez, Engagez,</div>
<div className="text-gradient-primary" style={{transitionDelay: '200ms'}}>Encaissez.</div>
</h1>
<p className="reveal text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light" style={{transitionDelay: '300ms'}}>
                La plateforme tout-en-un pour la restauration : Gamification, CRM, Menus Digitaux et création de contenu par IA. Gérez votre établissement de A à Z.
            </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" style={{transitionDelay: '400ms'}}>
<button className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span>Créer mon compte</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
<span>Voir la démo</span>
</button>
</div>
</div>
</main>

<section className="py-24 px-6 relative z-10 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center max-w-2xl mx-auto reveal">
<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Module Gamification</h2>
<p className="text-neutral-400">Transformez l'attente en jeu. Vos clients scannent, tournent la roue et gagnent des récompenses paramétrables.</p>
</div>
<div className="reveal grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="space-y-8 lg:order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 text-purple-400 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
<span className="iconify" data-icon="lucide:trophy" data-width="24"></span>
</div>
<h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        Roulette <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Promotionnelle.</span>
</h3>
<p className="text-neutral-400 text-lg leading-relaxed font-light">
                        Configurez vos campagnes en quelques clics. Définissez les lots, les probabilités et la durée.
                    </p>
<ul className="space-y-4 text-neutral-300">
<li className="flex items-start gap-3">
<div className="mt-1 bg-purple-500/10 p-1 rounded-full"><span className="iconify text-purple-400" data-icon="lucide:percent"></span></div>
<div>
<span className="block text-white font-medium">Récompenses Flexibles</span>
<span className="text-sm text-neutral-500">Réductions, produits offerts, menu gratuit ou simple "Perdu".</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-purple-500/10 p-1 rounded-full"><span className="iconify text-purple-400" data-icon="lucide:settings-2"></span></div>
<div>
<span className="block text-white font-medium">Contrôle Total</span>
<span className="text-sm text-neutral-500">Limitez les participations par jour et la validité des codes gagnants.</span>
</div>
</li>
</ul>
</div>

<div className="relative flex items-center justify-center lg:order-1 h-[600px]">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/5 to-transparent blur-[120px] pointer-events-none"></div>
<div className="relative w-[300px] h-[600px] bg-neutral-950 rounded-[45px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden z-10 transform rotate-[-3deg] hover:rotate-0 transition-all duration-700 ring-1 ring-white/10">

<div className="absolute top-0 w-[120px] h-[25px] bg-neutral-900 rounded-b-[18px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
<div className="w-12 h-1.5 rounded-full bg-neutral-800/50"></div>
</div>

<div className="w-full h-full bg-[#0a0a0a] flex flex-col relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950"></div>

<div className="mt-12 text-center z-20 px-6">
<div className="w-10 h-10 mx-auto bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-purple-500/20">
<span className="iconify text-white" data-icon="lucide:gift" data-width="20"></span>
</div>
<h3 className="font-display font-bold text-white text-xl">Rool'z Reward</h3>
<p className="text-xs text-neutral-400 mt-1">Tournez la roue pour tenter de gagner un <span className="text-white font-medium">Burger Gratuit</span> !</p>
</div>

<div className="flex-1 flex items-center justify-center relative -mt-4">

<div className="absolute top-[35px] z-30 drop-shadow-xl filter">
<svg fill="#ffffff" height="32" viewbox="0 0 24 24" width="32">
<path d="M12 21L12 3M12 21L5 14M12 21L19 14" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 2L16 6H8L12 2Z" fill="#ffffff"></path>
</svg>
</div>

<div className="w-[260px] h-[260px] rounded-full border-[8px] border-neutral-900 relative shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] overflow-hidden animate-wheel-spin">

<div className="absolute inset-0" style="background: conic-gradient(
                                        #9333ea 0deg 90deg, 
                                        #db2777 90deg 180deg, 
                                        #2563eb 180deg 270deg, 
                                        #059669 270deg 360deg
                                    );"></div>

<div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow-lg z-20 flex items-center justify-center">
<div className="w-12 h-12 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
<span className="font-bold text-neutral-900 text-[10px] tracking-widest">SPIN</span>
</div>
</div>

<div className="absolute inset-0 w-full h-full">
<div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-neutral-900/20 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-0.5 bg-neutral-900/20 -translate-y-1/2"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl z-40 animate-[blob_3s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
<span className="iconify" data-icon="lucide:check" data-width="20"></span>
</div>
<div>
<div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-0.5">Gagné !</div>
<div className="text-sm font-semibold text-white">1x Dessert Offert</div>
</div>
</div>
</div>

<div className="mt-auto mb-8 mx-6 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 w-[85%] self-center">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] text-neutral-500">CODE PROMO</span>
<span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">WIN-92X</span>
</div>
<button className="w-full py-3 bg-white text-black font-bold rounded-xl text-xs hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">
                                    Ajouter au Wallet
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white/[0.02] border-t border-white/5" id="ia">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 text-blue-400 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
<span className="iconify" data-icon="lucide:wand-2" data-width="24"></span>
</div>
<h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        Studio Créatif <br/><span className="text-gradient-blue">Intelligence Artificielle.</span>
</h3>
<p className="text-neutral-400 text-lg leading-relaxed font-light">
                        Plus besoin de photographe. Générez des visuels ultra-réalistes pour vos plats, affiches et réseaux sociaux en décrivant simplement votre idée.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-lg">
<span className="iconify text-blue-400 mb-2" data-icon="lucide:image" data-width="24"></span>
<div className="text-sm font-bold text-white">Haute Définition</div>
<div className="text-xs text-neutral-500">Export HD pour impression</div>
</div>
<div className="glass-panel p-4 rounded-lg">
<span className="iconify text-blue-400 mb-2" data-icon="lucide:palette" data-width="24"></span>
<div className="text-sm font-bold text-white">Styles Variés</div>
<div className="text-xs text-neutral-500">Réaliste, Minimaliste, Pub...</div>
</div>
</div>
</div>

<div className="reveal relative">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
<div className="glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col h-[500px]">

<div className="border-b border-white/10 p-4 flex items-center justify-between bg-black/40">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-neutral-500 font-mono">Rool'z AI Gen v2.0</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6">

<div className="flex-1 bg-neutral-900/50 rounded-lg border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=2499&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/10 flex items-center gap-2">
<span className="iconify animate-spin-slow" data-icon="lucide:loader-2"></span> Génération terminée
                                </div>
</div>

<div className="space-y-4">
<div>
<label className="text-xs text-neutral-400 ml-1 mb-1 block">Prompt</label>
<div className="relative">
<input className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50" readonly="" type="text" value="Burger gourmet, fromage fondant, style sombre publicitaire 4k"/>
<span className="absolute right-3 top-3 text-neutral-600 iconify" data-icon="lucide:sparkles"></span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                                        Générer (1 crédit)
                                    </button>
<button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:download"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5" id="menu">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal relative flex justify-center lg:order-1">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[600px] bg-green-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative w-[300px] h-[600px] bg-neutral-950 rounded-[45px] border-[8px] border-neutral-800 shadow-2xl overflow-hidden z-10 ring-1 ring-white/10">

<div className="absolute top-0 w-[120px] h-[25px] bg-neutral-900 rounded-b-[18px] left-1/2 -translate-x-1/2 z-30"></div>

<div className="w-full h-full bg-[#111] overflow-y-auto no-scrollbar relative">

<div className="h-40 w-full relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>

<div className="absolute top-10 left-4 right-4 flex justify-between items-center text-white z-20">
<div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
</div>
<div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</div>
</div>
</div>
<div className="px-4 -mt-6 relative z-10 pb-24">

<div className="flex justify-between items-end mb-4">
<div>
<h1 className="text-2xl font-display font-bold text-white">Le Gourmet</h1>
<div className="flex items-center gap-1 text-xs text-neutral-400 mt-1">
<span className="iconify text-yellow-500" data-icon="lucide:star" data-width="12"></span>
<span className="text-white font-medium">4.8</span>
<span>• Burgers &amp; Grill • $$</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</div>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm">Populaire</button>
<button className="bg-neutral-800 text-neutral-300 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-white/5">Burgers</button>
<button className="bg-neutral-800 text-neutral-300 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-white/5">Sides</button>
<button className="bg-neutral-800 text-neutral-300 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-white/5">Boissons</button>
</div>

<div className="space-y-4">

<div className="group relative bg-neutral-900/50 p-3 rounded-2xl border border-white/5 flex gap-3 overflow-hidden active:scale-[0.98] transition-transform">
<div className="w-20 h-20 bg-neutral-800 rounded-xl flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=2499&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-bold">Smash Double</h4>
</div>
<p className="text-neutral-500 text-[10px] mt-1 leading-tight line-clamp-2">Double boeuf smashé, cheddar maturé, oignons caramélisés.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-white text-sm font-bold">14.50€</span>
<button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 p-3 rounded-2xl border border-white/5 flex gap-3 overflow-hidden active:scale-[0.98] transition-transform">
<div className="absolute top-3 left-3 bg-orange-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md z-10">HOT</div>
<div className="w-20 h-20 bg-neutral-800 rounded-xl flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&amp;w=3542&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-bold">Spicy Chicken</h4>
</div>
<p className="text-neutral-500 text-[10px] mt-1 leading-tight line-clamp-2">Poulet frit, sauce sriracha mayo, pickles, salade.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-white text-sm font-bold">12.00€</span>
<button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/50 p-3 rounded-2xl border border-white/5 flex gap-3 opacity-60">
<div className="w-20 h-20 bg-neutral-800 rounded-xl flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=2665&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale"></div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-bold">Veggie Supreme</h4>
<span className="text-[9px] text-red-400 bg-red-950/30 border border-red-500/20 px-1.5 py-0.5 rounded">Épuisé</span>
</div>
<p className="text-neutral-500 text-[10px] mt-1 leading-tight line-clamp-2">Galette quinoa, avocat, sauce yaourt aux herbes.</p>
</div>
<div className="flex justify-between items-end mt-2">
<span className="text-neutral-400 text-sm font-bold line-through">13.50€</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-4 right-4 z-40">
<div className="bg-white text-black p-3 rounded-xl flex justify-between items-center shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] cursor-pointer hover:bg-neutral-100 transition-colors">
<div className="flex items-center gap-3">
<div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
<div className="flex flex-col">
<span className="text-xs font-bold">Voir la commande</span>
<span className="text-[9px] text-neutral-500">Smash Double, Spicy Chicken</span>
</div>
</div>
<span className="font-bold text-sm">26.50€</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8 lg:order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/20 text-green-400 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]">
<span className="iconify" data-icon="lucide:qr-code" data-width="24"></span>
</div>
<h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        QR Codes &amp; <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Menus Digitaux.</span>
</h3>
<p className="text-neutral-400 text-lg leading-relaxed font-light">
                        Créez des QR codes dynamiques personnalisés à vos couleurs. Redirigez vers un menu digital moderne, modifiable en temps réel sans réimpression.
                    </p>
<ul className="space-y-3 text-neutral-300">
<li className="flex items-center gap-3">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span>
                            QR Codes SVG/PNG avec logo intégré
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span>
                            Gestion des stocks et ruptures (86)
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span>
                            Intégration directe du jeu concours
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-white/[0.02] border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Une Plateforme Complète</h2>
<p className="text-neutral-400">Tout ce dont vous avez besoin pour gérer votre marketing, sécurisé et évolutif.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] reveal">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Dashboard Analytique</h3>
<p className="text-neutral-400 text-sm max-w-sm">Suivez le nombre de scans, le taux de conversion, et les statistiques d'utilisation de vos campagnes en temps réel. Exportez vos données.</p>
</div>
</div>

<div className="absolute right-0 bottom-0 opacity-20 translate-x-1/4 translate-y-1/4">
<span className="iconify text-orange-500 w-64 h-64" data-icon="lucide:pie-chart"></span>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden hover:border-white/20 transition-colors">
<div className="h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-1">Sécurité RGPD</h3>
<p className="text-neutral-400 text-xs">Conforme HTTPS, gestion des consentements cookies et suppression de données automatisée.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden hover:border-white/20 transition-colors">
<div className="h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400">
<span className="iconify" data-icon="lucide:users-2" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-1">Équipe &amp; Rôles</h3>
<p className="text-neutral-400 text-xs">Invitez vos employés avec des accès limités. Gardez le contrôle sur les paramètres sensibles (Propriétaire vs Employé).</p>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
<span className="iconify" data-icon="lucide:store" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Multi-établissements</h3>
<p className="text-neutral-400 text-sm max-w-sm">Gérez plusieurs restaurants, food-trucks ou franchises depuis un seul compte Rool'z. Centralisez la facturation et les statistiques.</p>
</div>
</div>
<div className="absolute right-8 top-8 opacity-10">
<span className="iconify text-purple-500 w-32 h-32" data-icon="lucide:building-2"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="tarifs">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Tarification Simple</h2>
<p className="text-neutral-400">Choisissez le plan adapté à votre croissance. Sans engagement, facturation Stripe sécurisée.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="reveal glass-panel rounded-2xl p-8 border border-white/5 flex flex-col hover:border-white/20 transition-all relative">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-white">0€</span>
<span className="ml-1 text-sm font-semibold text-neutral-500">/mois</span>
</div>
<p className="mt-4 text-sm text-neutral-400">Pour découvrir la plateforme.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> 100 Scans QR / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> 1 Roulette active
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> 5 Images IA / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Menu Digital (Limité)
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
                        Commencer Gratuitement
                    </button>
</div>

<div className="reveal glass-panel rounded-2xl p-8 border border-purple-500/30 flex flex-col relative bg-purple-500/[0.03]">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
<span className="inline-flex rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">Populaire</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-white">49€</span>
<span className="ml-1 text-sm font-semibold text-neutral-500">/mois</span>
</div>
<p className="mt-4 text-sm text-neutral-400">Pour les restaurants actifs.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="lucide:check"></span> Scans &amp; Jeux Illimités
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="lucide:check"></span> 50 Images IA / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="lucide:check"></span> Menu Digital Complet
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="lucide:check"></span> Export Data &amp; CRM
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-purple-400" data-icon="lucide:check"></span> Sans Watermark
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                        Essai 14 jours offert
                    </button>
</div>

<div className="reveal glass-panel rounded-2xl p-8 border border-white/5 flex flex-col hover:border-white/20 transition-all relative">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Premium</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-white">99€</span>
<span className="ml-1 text-sm font-semibold text-neutral-500">/mois</span>
</div>
<p className="mt-4 text-sm text-neutral-400">Pour les chaînes et franchises.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Multi-établissements
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Images IA Illimitées
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Accès API
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Support prioritaire
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-neutral-500" data-icon="lucide:check"></span> Comptes employés illimités
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
                        Contacter les ventes
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-16 px-6 bg-black relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="font-display font-bold text-lg text-white">rool'z</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        L'OS de fidélité et marketing nouvelle génération pour la restauration.
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-600 border border-neutral-800 rounded-full px-3 py-1 w-fit">
<span className="iconify" data-icon="lucide:globe"></span>
                        Français (FR)
                    </div>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm">Produit</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#features">Gamification</a></li>
<li><a className="hover:text-white transition-colors" href="#ia">Studio IA</a></li>
<li><a className="hover:text-white transition-colors" href="#menu">Menu Digital</a></li>
<li><a className="hover:text-white transition-colors" href="#tarifs">Tarifs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm">Ressources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Centre d'aide</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm">Légal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">CGV / CGU</a></li>
<li><a className="hover:text-white transition-colors" href="#">Données personnelles</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
<div className="text-xs text-neutral-600">
                    © 2024 Rool'z. Tous droits réservés. Paiements sécurisés par Stripe.
                </div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
