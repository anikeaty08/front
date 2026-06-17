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



        function filterProjects(category) {
            // Update buttons
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                if(btn.dataset.filter === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Filter Grid Items
            const items = document.querySelectorAll('.project-card');
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('hidden-card');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.classList.add('hidden-card');
                    }, 300); // Wait for transition
                }
            });
        }
    
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xs tracking-tighter shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">M.</div>
<span className="text-white font-semibold tracking-tight text-sm">Mario<span className="text-neutral-600">.tech</span></span>
</div>
<nav className="hidden md:flex gap-8 text-xs font-medium">
<a className="text-white hover:text-orange-400 transition-colors" href="#home">Accueil</a>
<a className="hover:text-white transition-colors" href="#projects">Projets</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
</nav>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors border border-transparent hover:border-neutral-300" href="#contact">
                Me contacter
            </a>
</div>
</header>
<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto space-y-24">

<section className="relative flex flex-col items-center text-center" id="home">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 animate-mascot z-10">
<div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-pulse"></div>
<div className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-125 spin-slow"></div>
<img alt="3D Mascot Mario" className="w-full h-full object-cover rounded-full shadow-2xl ring-1 ring-white/10 mask-gradient hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute -right-2 top-12 bg-[#0A0A0A] border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 rotate-6 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Learning...</span>
</div>
<div className="absolute -left-2 bottom-12 bg-[#0A0A0A] border border-white/10 text-orange-400 text-xs px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 -rotate-6 backdrop-blur-md">
<iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon>
                        Rédacteur Web
                    </div>
</div>
<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    Salut, moi c'est <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Mario</span>.
                </h1>
<p className="text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed mb-8">
                    DevOps en devenir et rédacteur web pour <span className="text-white font-medium">DotValue</span>. Je suis un curieux insatiable qui navigue entre innovation, jeux vidéo et intelligence artificielle.
                </p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-white/10">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Mes Articles
                    </button>
<button className="flex items-center gap-2 bg-[#0A0A0A] border border-neutral-800 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:github-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Github
                    </button>
</div>
</section>

<section id="projects">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<h2 className="text-xl font-semibold text-white tracking-tight">Projets &amp; Réalisations</h2>

<div className="flex p-1 bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-white/5 overflow-x-auto max-w-full">
<button className="filter-btn active text-xs font-medium px-3 py-1.5 rounded-md text-neutral-400 transition-all hover:text-white whitespace-nowrap" data-filter="all" onclick="filterProjects('all')">Tous</button>
<button className="filter-btn text-xs font-medium px-3 py-1.5 rounded-md text-neutral-400 transition-all hover:text-white whitespace-nowrap" data-filter="dev" onclick="filterProjects('dev')">Dev &amp; IA</button>
<button className="filter-btn text-xs font-medium px-3 py-1.5 rounded-md text-neutral-400 transition-all hover:text-white whitespace-nowrap" data-filter="game" onclick="filterProjects('game')">Jeux Vidéo</button>
<button className="filter-btn text-xs font-medium px-3 py-1.5 rounded-md text-neutral-400 transition-all hover:text-white whitespace-nowrap" data-filter="writing" onclick="filterProjects('writing')">Rédaction</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="projects-grid">

<div className="project-card glass-panel p-6 rounded-2xl group relative overflow-hidden flex flex-col justify-between h-full" data-category="game">
<div className="absolute top-0 right-0 p-20 bg-indigo-500/5 blur-3xl rounded-full transition-all group-hover:bg-indigo-500/10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:ghost-linear" width="20"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">UNITY</span>
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">C#</span>
</div>
</div>
<h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors">Salimail</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                                Metroidvania narratif dans un village hanté. Exploration mystique et progression par acquisition de pouvoirs spirituels.
                            </p>
</div>
<div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-400">En développement</span>
<iconify-icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-card glass-panel p-6 rounded-2xl group relative overflow-hidden flex flex-col justify-between h-full" data-category="dev">
<div className="absolute top-0 right-0 p-20 bg-pink-500/5 blur-3xl rounded-full transition-all group-hover:bg-pink-500/10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:monitor-play-linear" width="20"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">PYTHON</span>
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">TKINTER</span>
</div>
</div>
<h3 className="text-base font-semibold text-white group-hover:text-pink-400 transition-colors">PAPPAANIM</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                                Application desktop de scraping avec interface graphique. Affiche en temps réel les dernières sorties d'animés.
                            </p>
</div>
<div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-400">Voir le repo</span>
<iconify-icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-card glass-panel p-6 rounded-2xl group relative overflow-hidden flex flex-col justify-between h-full" data-category="dev">
<div className="absolute top-0 right-0 p-20 bg-green-500/5 blur-3xl rounded-full transition-all group-hover:bg-green-500/10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">ML</span>
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">PYTHON</span>
</div>
</div>
<h3 className="text-base font-semibold text-white group-hover:text-green-400 transition-colors">EcoGuard IA</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                                Intelligence artificielle orientée finance durable. Analyse de données pour mesurer l'impact écologique des investissements.
                            </p>
</div>
<div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-400">Concept</span>
<iconify-icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-card glass-panel p-6 rounded-2xl group relative overflow-hidden flex flex-col justify-between h-full" data-category="game">
<div className="absolute top-0 right-0 p-20 bg-orange-500/5 blur-3xl rounded-full transition-all group-hover:bg-orange-500/10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:gamepad-charge-linear" width="20"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-1 text-neutral-400">GODOT</span>
</div>
</div>
<h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors">Double Step</h3>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                                Jeu de plateforme 2D avec un twist stratégique : chaque action effectuée est répétée automatiquement une seconde fois.
                            </p>
</div>
<div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-400">Prototype</span>
<iconify-icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-card glass-panel p-6 rounded-2xl md:col-span-2 relative overflow-hidden group flex flex-col md:flex-row items-center gap-6" data-category="writing">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-full md:w-auto flex-shrink-0 flex md:block justify-start">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex-grow text-left w-full relative z-10">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Rédacteur DotValue</h3>
<span className="text-[10px] font-mono border border-white/10 bg-black/20 rounded px-2 py-0.5 text-neutral-400">BLOG</span>
</div>
<p className="text-xs text-neutral-400 max-w-xl">
                                Création d'articles pédagogiques sur la technologie, l'IA et le DevOps. Vulgarisation technique et veille technologique pour une audience de passionnés.
                            </p>
</div>
<div className="flex-shrink-0 w-full md:w-auto relative z-10">
<a className="inline-flex items-center justify-center w-full md:w-auto gap-2 text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95" href="#">
                                Lire mes articles
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-4" id="stack">

<div className="glass-panel p-6 rounded-2xl md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-24 bg-orange-500/10 blur-[60px] rounded-full transition-all group-hover:bg-orange-500/20"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex items-start justify-between">
<div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-orange-400 bg-orange-500/5 border border-orange-500/10 px-2 py-1 rounded">DEVOPS</span>
</div>
<div className="mt-8">
<h3 className="text-xl font-semibold text-white tracking-tight">DevOps en devenir</h3>
<p className="text-sm text-neutral-500 mt-2">J'apprends l'art du CI/CD, l'automatisation et l'orchestration pour construire l'infrastructure de demain.</p>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
<div className="flex flex-col h-full justify-between relative z-10">
<div className="p-3 w-fit bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-8">
<h3 className="text-lg font-semibold text-white tracking-tight">Gaming &amp; Dev</h3>
<p className="text-sm text-neutral-500 mt-2">Création de jeux vidéo narratifs et mécaniques innovantes.</p>
</div>
</div>
</div>

<div className="glass-panel px-8 py-6 rounded-2xl md:col-span-3 flex items-center justify-between gap-4 overflow-hidden">
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:python" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:docker-icon" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:git-icon" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:linux-tux" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:unity" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all" icon="logos:openai-icon" width="24"></iconify-icon>
</div>
</section>

<section className="pb-10" id="contact">
<div className="glass-panel rounded-3xl p-10 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 opacity-50"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<div className="w-16 h-16 rounded-full border-2 border-[#0A0A0A] overflow-hidden shadow-lg ring-2 ring-white/5">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">Envie de discuter Tech ?</h2>
<p className="text-sm text-neutral-400 max-w-md mx-auto">Que ce soit pour parler DevOps, IA ou de votre dernier projet gaming, ma porte est ouverte.</p>
</div>
<div className="flex flex-wrap justify-center gap-4 pt-4">
<a className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5" href="mailto:mario@dev.com">
                                Me contacter
                            </a>
<div className="flex gap-2">
<a className="p-2.5 bg-[#0A0A0A] border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<footer className="border-t border-white/5 py-8 text-center bg-[#050505]">
<p className="text-xs text-neutral-600 font-mono">Designed by Mario. © 2024</p>
</footer>


    </>
  );
}
