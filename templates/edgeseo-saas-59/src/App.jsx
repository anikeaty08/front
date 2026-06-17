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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold tracking-tighter">F</div>
<span className="text-white font-semibold tracking-tight text-lg">Fasterize</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Solution</a>
<a className="hover:text-white transition-colors" href="#">EdgeSEO</a>
<a className="hover:text-white transition-colors" href="#">Clients</a>
<a className="hover:text-white transition-colors" href="#">Ressources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Connexion</a>
<a className="group relative px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full overflow-hidden hover:bg-white/15 transition-all border border-white/5" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Demander une démo
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 grid-bg pointer-events-none opacity-20 mask-image-gradient"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nouvelle génération de SEO technique
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Reprenez le contrôle <br/>
                avec <span className="text-gradient">EdgeSEO</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Déployez vos optimisations SEO et Core Web Vitals directement sur le CDN. Contournez les contraintes IT et accélérez votre time-to-market.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Audit gratuit
                </button>
<button className="h-12 px-8 rounded-full bg-black border border-slate-800 text-slate-300 font-medium hover:text-white hover:border-slate-600 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Voir le fonctionnement
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20">
<div className="glass-panel rounded-xl p-1 border border-white/10 shadow-2xl overflow-hidden relative group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="bg-[#0A0A0A] rounded-lg border border-white/5 p-6 md:p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<span className="text-xs font-mono text-slate-500">edge-config.json</span>
</div>
<div className="text-xs text-emerald-400 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="check-circle"></i>
                            Deployed to Edge (32ms)
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">

<div className="space-y-2">
<div className="flex items-center text-xs text-slate-500 mb-2">
<span className="mr-4">1</span> <span className="text-purple-400">const</span> <span className="text-blue-400">edgeSEO</span> = <span className="text-purple-400">new</span> Fasterize.Edge();
                            </div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-4">
<span className="mr-4">2</span>
</div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-4">
<span className="mr-4">3</span> <span className="text-slate-400">// Injection automatique de données structurées</span>
</div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-4">
<span className="mr-4">4</span> edgeSEO.<span className="text-yellow-300">injectJSONLD</span>({
                            </div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-8">
<span className="mr-4">5</span> <span className="text-green-400">"@context"</span>: <span className="text-green-400">"https://schema.org"</span>,
                            </div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-8">
<span className="mr-4">6</span> <span className="text-green-400">"@type"</span>: <span className="text-green-400">"Product"</span>,
                            </div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-8">
<span className="mr-4">7</span> <span className="text-green-400">"name"</span>: request.meta.title
                            </div>
<div className="flex items-center text-xs text-slate-500 mb-2 pl-4">
<span className="mr-4">8</span> });
                            </div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-lg"></div>
<div className="relative p-4 space-y-4">
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/20 text-indigo-400">
<i className="w-4 h-4" data-lucide="globe"></i>
</div>
<div>
<div className="text-xs text-slate-300">Redirections 301</div>
<div className="text-[10px] text-slate-500">Gérées à la volée</div>
</div>
</div>
<div className="h-2 w-12 rounded-full bg-emerald-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500 w-2/3"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-purple-500/20 text-purple-400">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<div className="text-xs text-slate-300">Core Web Vitals</div>
<div className="text-[10px] text-slate-500">CLS &amp; LCP optimisés</div>
</div>
</div>
<span className="text-xs text-emerald-400 font-mono">+24%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Ils accélèrent leur SEO avec Fasterize</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">

<span className="text-xl font-bold tracking-tight text-white">L'ORÉAL</span>
<span className="text-xl font-bold tracking-tight text-white">Kiabi</span>
<span className="text-xl font-bold tracking-tight text-white">But</span>
<span className="text-xl font-bold tracking-tight text-white">Interflora</span>
<span className="text-xl font-bold tracking-tight text-white">Club Med</span>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">L'autonomie SEO sans risque</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Intervenez sur le code HTML avant qu'il n'atteigne le navigateur de l'utilisateur et Googlebot. Zéro latence, exécution distribuée.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Indépendance IT</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Plus besoin d'attendre les sprints de développement. Modifiez balises titles, méta-descriptions et canonicals instantanément.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="gauge"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Performance Maximale</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Transformez le HTML à la volée pour optimiser le LCP et le CLS. Compressez les images et les scripts sans toucher au serveur d'origine.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Sécurité &amp; Rollback</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Testez vos modifications en A/B test. Revenez en arrière en un clic si nécessaire. Une infrastructure robuste et sécurisée.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 text-indigo-400 font-medium text-xs uppercase tracking-wider mb-4">
<i className="w-4 h-4" data-lucide="workflow"></i>
                    Architecture Edge
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Agissez entre le serveur et l'utilisateur
                </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                    Fasterize se place comme un proxy intelligent. Nous interceptons le trafic pour appliquer vos règles SEO en quelques millisecondes, garantissant que Googlebot voit toujours la version parfaite de votre site.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-300">Gestion des redirections massives sans ralentir le serveur</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-300">Obfuscation de liens pour optimiser le budget de crawl</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-300">Prerendering pour les sites JS complexes (SPA)</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">

<div className="relative z-10 p-8 rounded-2xl glass-panel border border-white/10">
<div className="flex flex-col gap-6 relative">

<div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center opacity-50">
<div className="text-xs text-slate-500 uppercase mb-1">Serveur Origine</div>
<div className="text-sm text-slate-300 font-mono">HTML Brut</div>
</div>

<div className="h-8 w-px bg-slate-700 mx-auto"></div>

<div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 text-center shadow-[0_0_30px_rgba(99,102,241,0.15)]">
<div className="w-10 h-10 mx-auto bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-3">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div className="text-sm font-semibold text-white mb-1">Fasterize Edge</div>
<div className="text-xs text-indigo-300">Optimisation &amp; Injection</div>
</div>

<div className="h-8 w-px bg-slate-700 mx-auto"></div>

<div className="flex gap-4 justify-center">
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center w-32">
<div className="mx-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 mb-2">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div className="text-xs text-slate-400">Utilisateur</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-center w-32">
<div className="mx-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 mb-2">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div className="text-xs text-slate-400">Googlebot</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-snug">
                "Fasterize nous a permis de gagner 15 points sur nos Core Web Vitals et de déployer nos correctifs SEO en quelques minutes au lieu de plusieurs semaines."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800"></div>
<div className="text-left">
<div className="text-sm font-semibold text-white">Directeur E-commerce</div>
<div className="text-xs text-slate-500">Retailer Top 10 France</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10 radial-gradient"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Prêt à accélérer ?
            </h2>
<p className="text-slate-400 mb-10 text-lg">
                Rejoignez les leaders du e-commerce qui utilisent l'EdgeSEO pour dominer les SERPs.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors" href="#">
                    Réserver une démo
                </a>
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 transition-colors" href="#">
                    Contacter l'équipe
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs">F</div>
<span className="text-white font-semibold text-sm">Fasterize</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                        Plateforme d'EdgeSEO et de Web Performance pour les sites e-commerce ambitieux.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Produit</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">EdgeSEO</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Web Performance</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Sécurité</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Infrastructure</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Ressources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cas clients</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Webinaires</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Entreprise</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-slate-600">
<p>© 2024 Fasterize. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
