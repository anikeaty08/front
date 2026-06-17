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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple intersection observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-fade-in').forEach((el) => {
                el.style.animationPlayState = 'paused';
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
<div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[#00D4AA]/[0.03] blur-[100px] md:blur-[150px]"></div>
<div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-[#0095FF]/[0.03] blur-[100px] md:blur-[150px]"></div>
</div>

<nav className="relative z-50 border-b border-white/[0.05] bg-[#0A0E1A]/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-[#F0F4FF]">FAIRSQUARE</span>
</div>
<a className="text-sm font-medium text-[#F0F4FF] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] px-4 py-2 rounded-full transition-colors" href="https://fairsqure-app.vercel.app">
                Lancer l'app
            </a>
</div>
</nav>
<main className="relative z-10 flex-grow">

<section className="pt-32 pb-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00D4AA]/20 bg-[#00D4AA]/5 text-[#00D4AA] text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
                    AI Real Estate Intelligence
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#F0F4FF] leading-[1.1] mb-6">
                    Trouvez les <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00D4AA] to-[#0095FF]">Hidden Gems</span> de l'immobilier parisien
                </h1>
<p className="text-lg md:text-xl text-[#8899BB] max-w-2xl mx-auto mb-10 leading-relaxed">
                    FairSquare utilise le Machine Learning et la Vision AI pour analyser chaque annonce et détecter les biens sous-évalués avant tout le monde.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#0095FF] text-[#F0F4FF] text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,170,0.2)]" href="https://fairsqure-app.vercel.app">
                        Lancer l'analyse
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.1] text-[#C4D0E8] text-sm font-medium hover:bg-white/[0.08] transition-colors flex items-center justify-center" href="#how-it-works">
                        Voir la démo
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.02] bg-gradient-to-b from-transparent to-white/[0.01]" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-fade-in delay-100">
<h2 className="text-3xl font-semibold tracking-tight text-[#F0F4FF] mb-4">Comment ça marche</h2>
<p className="text-[#8899BB] max-w-xl mx-auto text-sm md:text-base">De l'URL de l'annonce à la décision d'investissement en quelques secondes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300 group animate-fade-in delay-100">
<div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center mb-6 text-[#00D4AA] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:link-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#F0F4FF] tracking-tight mb-3">1. Collez une URL</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">Collez le lien d'une annonce SeLoger, LeBonCoin, PAP ou BienIci. Notre système extrait instantanément toutes les données pertinentes.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300 group animate-fade-in delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#0095FF]/10 blur-3xl rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4AA]/10 to-[#0095FF]/10 border border-white/5 flex items-center justify-center mb-6 text-[#0095FF] group-hover:scale-110 transition-transform relative z-10">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#F0F4FF] tracking-tight mb-3 relative z-10">2. L'IA analyse tout</h3>
<p className="text-sm text-[#8899BB] leading-relaxed relative z-10">LightGBM prédit le juste prix. Gemini Vision évalue la rénovation, la luminosité et la qualité globale à partir des photos.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300 group animate-fade-in delay-300">
<div className="w-12 h-12 rounded-xl bg-[#0095FF]/10 flex items-center justify-center mb-6 text-[#0095FF] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diamonds-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#F0F4FF] tracking-tight mb-3">3. Découvrez les opportunités</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">Obtenez un Score Hidden Gem, une stratégie de négociation personnalisée, et le prix d'achat recommandé pour maximiser votre rendement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="mb-12 animate-fade-in">
<h2 className="text-3xl font-semibold tracking-tight text-[#F0F4FF] mb-2">La data au service de la précision</h2>
<p className="text-[#8899BB] text-sm">Modèles entraînés sur l'historique complet du marché parisien.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px] animate-fade-in delay-100">

<div className="md:col-span-2 rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-[#8899BB] absolute top-6 right-6 opacity-50" icon="solar:database-linear" width="24"></iconify-icon>
<h3 className="text-4xl md:text-5xl font-semibold text-[#F0F4FF] tracking-tighter mb-2">67,000+</h3>
<p className="text-sm text-[#8899BB]">Transactions DVF analysées pour entraîner nos modèles</p>
</div>

<div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0095FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-[#8899BB] absolute top-6 right-6 opacity-50" icon="solar:target-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0095FF] tracking-tighter mb-2">1,415 €/m²</h3>
<p className="text-sm text-[#8899BB]">De précision moyenne (MAE)</p>
</div>

<div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex flex-col justify-end relative overflow-hidden group">
<iconify-icon className="text-[#8899BB] absolute top-6 right-6 opacity-50" icon="solar:map-point-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-semibold text-[#F0F4FF] tracking-tighter mb-2">20</h3>
<p className="text-sm text-[#8899BB]">Arrondissements couverts</p>
</div>

<div className="md:col-span-2 rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#00D4AA]/10 blur-3xl rounded-full"></div>
<iconify-icon className="text-[#8899BB] absolute top-6 right-6 opacity-50" icon="solar:camera-linear" width="24"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-semibold text-[#F0F4FF] tracking-tight mb-2 relative z-10">Vision AI sur chaque photo</h3>
<p className="text-sm text-[#8899BB] relative z-10">Évaluation automatique de la qualité des finitions et du potentiel</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.02]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 animate-fade-in">
<h2 className="text-3xl font-semibold tracking-tight text-[#F0F4FF] mb-4">L'intelligence derrière le prix</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors animate-fade-in delay-100">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 text-[#F0F4FF]">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#F0F4FF] mb-2">Prédiction de prix par ML</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">Notre modèle LightGBM v4 est entraîné sur les données DVF réelles, prenant en compte l'historique et les spécificités micro-locales de Paris.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors animate-fade-in delay-200">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 text-[#00D4AA]">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#F0F4FF] mb-2">Analyse Vision par Gemini 2.5</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">L'IA parcourt la galerie photo pour attribuer un score de rénovation, évaluer la luminosité et déterminer la qualité des matériaux.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors animate-fade-in delay-100">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 text-[#0095FF]">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#F0F4FF] mb-2">Corrections intelligentes</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">Ajustement dynamique du prix selon l'étage, le DPE, l'exposition, la tendance du marché actuel et la marge de négociation estimée.</p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors animate-fade-in delay-200">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 text-[#F0F4FF]">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#F0F4FF] mb-2">Explicabilité SHAP</h3>
<p className="text-sm text-[#8899BB] leading-relaxed">Pas de boîte noire. Comprenez exactement pourquoi l'IA donne ce prix grâce à une décomposition claire des facteurs d'influence.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/[0.02] bg-black/20">
<div className="max-w-7xl mx-auto px-6 overflow-hidden">
<p className="text-center text-xs text-[#8899BB] uppercase tracking-widest mb-8">Propulsé par les meilleures technologies</p>
<div className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-70">
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">LightGBM</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">Google Gemini 2.5</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">FastAPI</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">React</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">Tailwind CSS</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-[#C4D0E8] bg-white/5 backdrop-blur-sm">DVF Open Data</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
<div className="w-[600px] h-[300px] bg-gradient-to-br from-[#00D4AA]/10 to-[#0095FF]/10 blur-[100px] rounded-full"></div>
</div>
<div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#F0F4FF] mb-6">Prêt à trouver votre <br/>Hidden Gem ?</h2>
<p className="text-[#8899BB] text-sm md:text-base mb-10">Ne laissez plus passer les bonnes affaires. Analysez votre première annonce dès maintenant.</p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#0095FF] text-[#F0F4FF] text-sm font-medium hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,149,255,0.2)]" href="https://fairsqure-app.vercel.app">
                    Lancer l'analyse
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] bg-[#0A0E1A] py-12 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-sm font-semibold tracking-tighter text-[#F0F4FF] mb-1">FAIRSQUARE</p>
<p className="text-xs text-[#8899BB]">Paris Real Estate Intelligence</p>
<p className="text-xs text-[#8899BB]/70 mt-2">Projet AI Capstone — ESILV 2026</p>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-[#8899BB] hover:text-[#F0F4FF] transition-colors" href="https://fairsqure-app.vercel.app">App</a>
<a className="text-xs text-[#8899BB] hover:text-[#F0F4FF] transition-colors" href="#">API Docs</a>
<a className="text-[#8899BB] hover:text-[#F0F4FF] transition-colors" href="#">
<span className="sr-only">GitHub</span>
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
