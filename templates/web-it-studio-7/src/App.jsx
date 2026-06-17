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
      

<div className="fixed inset-0 pointer-events-none grain z-50"></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 glass" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white" href="#" onclick="showPage('home')">
                    INKIMO<span className="text-cyan-400">.</span>STUDIO
                </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="nav-link text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#" onclick="showPage('portfolio')">Portfolio</a>
<a className="nav-link text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#" onclick="showPage('services-web')">Services Web</a>
<a className="nav-link text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#" onclick="showPage('services-it')">Services IT</a>
<a className="nav-link text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#" onclick="showPage('about')">À propos</a>
<a className="nav-link text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#" onclick="showPage('contact')">Contact</a>
</nav>
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 text-sm font-semibold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 glow-cyan" href="#" onclick="showPage('contact')">
                    Demander un devis
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>

<button aria-label="Menu" className="lg:hidden p-2 text-zinc-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden glass border-t border-white/5" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-medium text-zinc-300 hover:text-white" href="#" onclick="showPage('portfolio'); toggleMobileMenu();">Portfolio</a>
<a className="block text-base font-medium text-zinc-300 hover:text-white" href="#" onclick="showPage('services-web'); toggleMobileMenu();">Services Web</a>
<a className="block text-base font-medium text-zinc-300 hover:text-white" href="#" onclick="showPage('services-it'); toggleMobileMenu();">Services IT</a>
<a className="block text-base font-medium text-zinc-300 hover:text-white" href="#" onclick="showPage('about'); toggleMobileMenu();">À propos</a>
<a className="block text-base font-medium text-zinc-300 hover:text-white" href="#" onclick="showPage('contact'); toggleMobileMenu();">Contact</a>
<a className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 text-sm font-semibold rounded-xl mt-4" href="#" onclick="showPage('contact'); toggleMobileMenu();">
                    Demander un devis
                </a>
</div>
</div>
</header>

<div className="page active" id="page-home">

<section className="relative min-h-screen flex items-center justify-center pt-20 grid-bg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/3 left-0 right-0 line-glow animate-pulse-glow"></div>
<div className="absolute top-2/3 left-0 right-0 line-glow animate-pulse-glow" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
<span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-zinc-400">Disponible pour nouveaux projets</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-tight mb-6 glow-text">
                            Des sites qui claquent.<br/>
<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Une infra qui tient.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Je conçois des sites premium (vitrine, e-commerce, landing) et je fournis des services IT (réseau, systèmes, automatisation, monitoring) pour des équipes qui veulent du propre, du fiable, du documenté.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 font-semibold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 glow-cyan" href="#" onclick="showPage('portfolio')">
                                Voir le portfolio
                                <iconify-icon icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all duration-300" href="#" onclick="showPage('contact')">
                                Parler de ton besoin
                                <iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
<div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
<iconify-icon className="text-cyan-400" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Délai clair</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
<iconify-icon className="text-cyan-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Doc &amp; passation</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Sécurité &amp; perf</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
<iconify-icon className="text-cyan-400" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">SLA possible</span>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative animate-float">

<div className="glass rounded-2xl p-6 glow-cyan">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="space-y-4">
<div className="h-8 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg"></div>
<div className="grid grid-cols-3 gap-3">
<div className="h-20 glass rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-display font-semibold text-cyan-400 count-up" data-target="99.9">0</div>
<div className="text-xs text-zinc-500">Uptime %</div>
</div>
</div>
<div className="h-20 glass rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-display font-semibold text-violet-400 count-up" data-target="42">0</div>
<div className="text-xs text-zinc-500">Projets</div>
</div>
</div>
<div className="h-20 glass rounded-xl flex items-center justify-center">
<div className="text-center">
<div className="text-2xl font-display font-semibold text-emerald-400 count-up" data-target="100">0</div>
<div className="text-xs text-zinc-500">Score Perf</div>
</div>
</div>
</div>
<div className="h-32 glass rounded-xl p-4">
<div className="flex items-end justify-between h-full gap-2">
<div className="w-full bg-cyan-500/30 rounded-t" style={{height: '40%'}}></div>
<div className="w-full bg-cyan-500/40 rounded-t" style={{height: '65%'}}></div>
<div className="w-full bg-cyan-500/50 rounded-t" style={{height: '45%'}}></div>
<div className="w-full bg-cyan-500/60 rounded-t" style={{height: '80%'}}></div>
<div className="w-full bg-cyan-500/70 rounded-t" style={{height: '55%'}}></div>
<div className="w-full bg-cyan-400 rounded-t" style={{height: '95%'}}></div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-pulse-glow">
<iconify-icon className="text-cyan-400" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-pulse-glow" style={{animationDelay: '0.5s'}}>
<iconify-icon className="text-violet-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</section>

<section className="relative py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Ce que je fais
                    </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                        Deux expertises complémentaires pour des projets digitaux complets et solides.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="glass rounded-2xl p-8 lg:p-10 card-lift glass-hover">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h3 className="font-display text-xl font-semibold text-white">Web</h3>
<p className="text-sm text-zinc-500">Design + Dev</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                UI/UX design moderne et accessible
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                WordPress sur-mesure (pas de template)
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Next.js / React pour le sur-mesure
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                SEO technique &amp; performance Lighthouse
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Animations &amp; interactions soignées
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Copywriting orienté conversion
                            </li>
</ul>
</div>

<div className="glass rounded-2xl p-8 lg:p-10 card-lift glass-hover">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h3 className="font-display text-xl font-semibold text-white">IT</h3>
<p className="text-sm text-zinc-500">Systèmes + Réseau</p>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Active Directory &amp; Windows Server
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Linux (Debian, Ubuntu, Rocky)
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Virtualisation (Proxmox, VMware)
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Docker &amp; reverse proxy (Traefik)
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Monitoring (Zabbix, Grafana)
                            </li>
<li className="flex items-center gap-3 text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Sauvegardes &amp; durcissement sécurité
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
<div>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                            Projets récents
                        </h2>
<p className="text-zinc-400 max-w-xl">
                            Des cas concrets avec des résultats mesurables.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors" href="#" onclick="showPage('portfolio')">
                        Voir tout le portfolio
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">AC</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full">Vitrine Premium</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Atelier Couture Luxe</h3>
<p className="text-sm text-zinc-500 mb-3">Mode &amp; Luxe • WordPress sur-mesure</p>
<p className="text-sm text-zinc-400 mb-4">Refonte complète avec storytelling visuel et tunnel de contact optimisé.</p>
<div className="flex items-center justify-between">
<span className="text-cyan-400 font-semibold">+42% leads</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">BT</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-orange-500/20 text-orange-300 rounded-full">Landing Page</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Entreprise BTP Pro</h3>
<p className="text-sm text-zinc-500 mb-3">Construction • Next.js + SEO</p>
<p className="text-sm text-zinc-400 mb-4">Landing conversion pour une entreprise en zone rurale avec fort enjeu de visibilité locale.</p>
<div className="flex items-center justify-between">
<span className="text-orange-400 font-semibold">×2 appels entrants</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">ZB</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full">SEO Local</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Cabinet Zen &amp; Bien-être</h3>
<p className="text-sm text-zinc-500 mb-3">Santé • WordPress + Réservation</p>
<p className="text-sm text-zinc-400 mb-4">Site vitrine avec système de réservation et stratégie SEO local ciblée.</p>
<div className="flex items-center justify-between">
<span className="text-emerald-400 font-semibold">Top 3 Google</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">RS</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full">E-commerce</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Ressourcerie Solidaire</h3>
<p className="text-sm text-zinc-500 mb-3">ESS • WooCommerce + Dons</p>
<p className="text-sm text-zinc-400 mb-4">Boutique en ligne avec système de dons intégré et optimisation performance.</p>
<div className="flex items-center justify-between">
<span className="text-violet-400 font-semibold">+60% trafic</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">IT</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full">Infrastructure</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Startup SaaS Tech</h3>
<p className="text-sm text-zinc-500 mb-3">Tech • Docker + Monitoring</p>
<p className="text-sm text-zinc-400 mb-4">Mise en place infra complète : containerisation, CI/CD, monitoring, sauvegardes.</p>
<div className="flex items-center justify-between">
<span className="text-blue-400 font-semibold">99.9% uptime</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">AG</span>
</div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 text-xs font-medium bg-rose-500/20 text-rose-300 rounded-full">Refonte</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Agence Immobilière</h3>
<p className="text-sm text-zinc-500 mb-3">Immobilier • WordPress + API</p>
<p className="text-sm text-zinc-400 mb-4">Refonte avec intégration API annonces et optimisation vitesse de chargement.</p>
<div className="flex items-center justify-between">
<span className="text-rose-400 font-semibold">-70% temps chargement</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-2" href="#">
                                    Voir l'étude
                                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Offres claires
                    </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                        Des formules adaptées à chaque besoin. Prix indicatifs, sur devis selon périmètre.
                    </p>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold text-white">Services Web</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Starter Vitrine</h4>
<p className="text-sm text-zinc-500">1 à 3 pages • Délai 2-3 semaines</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">1 500€</span>
<span className="text-zinc-500 text-sm"> à partir de</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Design responsive personnalisé
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    SEO de base (balises, sitemap)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Performance optimisée
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Formulaire de contact
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Formation admin incluse
                                </li>
</ul>
<a className="block w-full text-center py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift relative overflow-hidden border-cyan-500/30">
<div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 text-xs font-semibold rounded-bl-xl">
                                Le plus vendu
                            </div>
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Premium Studio</h4>
<p className="text-sm text-zinc-500">5 à 8 pages • Délai 4-6 semaines</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">3 500€</span>
<span className="text-zinc-500 text-sm"> à partir de</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Tout le pack Starter +
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Animations premium &amp; interactions
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Copywriting conversion
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    SEO avancé (schema.org)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Intégrations tierces (CRM, etc.)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    1 mois support inclus
                                </li>
</ul>
<a className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 font-semibold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Conversion Landing</h4>
<p className="text-sm text-zinc-500">1 page • Délai 1-2 semaines</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">2 000€</span>
<span className="text-zinc-500 text-sm"> à partir de</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Design axé conversion
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Copywriting persuasif
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    A/B testing ready
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Tracking &amp; analytics
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-cyan-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Optimisé pour pub (Google, Meta)
                                </li>
</ul>
<a className="block w-full text-center py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold text-white">Services IT</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Audit Express</h4>
<p className="text-sm text-zinc-500">Réseau / Sécu / Perf • 3-5 jours</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">800€</span>
<span className="text-zinc-500 text-sm"> à partir de</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Analyse complète infrastructure
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Rapport PDF détaillé
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Plan d'actions priorisé
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Recommandations sécurité
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Call restitution 1h
                                </li>
</ul>
<a className="block w-full text-center py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Mise en Production</h4>
<p className="text-sm text-zinc-500">Infra complète • 1-3 semaines</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">2 500€</span>
<span className="text-zinc-500 text-sm"> à partir de</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Configuration DNS / Proxy
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Stratégie sauvegardes 3-2-1
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Monitoring &amp; alerting
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Runbook complet
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Documentation technique
                                </li>
</ul>
<a className="block w-full text-center py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="mb-6">
<h4 className="font-display text-lg font-semibold text-white mb-2">Infogérance Légère</h4>
<p className="text-sm text-zinc-500">SLA • Mensuel</p>
</div>
<div className="mb-6">
<span className="text-3xl font-display font-semibold text-white">300€</span>
<span className="text-zinc-500 text-sm"> /mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Supervision 24/7
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Mises à jour &amp; patchs sécurité
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Support réactif (SLA 4h)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Rapport mensuel
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-violet-400 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Vérification sauvegardes
                                </li>
</ul>
<a className="block w-full text-center py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all" href="#" onclick="showPage('contact')">
                                Demander un devis
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Méthode de travail
                    </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                        Un process clair et transparent pour des projets livrés proprement.
                    </p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">

<div className="relative">
<div className="glass rounded-2xl p-6 text-center card-lift glass-hover h-full">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold text-cyan-400 mb-2">01</div>
<h4 className="font-display text-base font-semibold text-white mb-2">Cadrage</h4>
<p className="text-sm text-zinc-500">Objectifs, contraintes, périmètre et planning.</p>
</div>
</div>

<div className="relative">
<div className="glass rounded-2xl p-6 text-center card-lift glass-hover h-full">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold text-cyan-400 mb-2">02</div>
<h4 className="font-display text-base font-semibold text-white mb-2">Design</h4>
<p className="text-sm text-zinc-500">Maquettes rapides, itérations, validation.</p>
</div>
</div>

<div className="relative">
<div className="glass rounded-2xl p-6 text-center card-lift glass-hover h-full">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold text-cyan-400 mb-2">03</div>
<h4 className="font-display text-base font-semibold text-white mb-2">Build</h4>
<p className="text-sm text-zinc-500">Développement, configuration, intégrations.</p>
</div>
</div>

<div className="relative">
<div className="glass rounded-2xl p-6 text-center card-lift glass-hover h-full">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold text-cyan-400 mb-2">04</div>
<h4 className="font-display text-base font-semibold text-white mb-2">Qualité</h4>
<p className="text-sm text-zinc-500">Performance, sécurité, SEO, tests complets.</p>
</div>
</div>

<div className="relative">
<div className="glass rounded-2xl p-6 text-center card-lift glass-hover h-full">
<div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:rocket-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold text-cyan-400 mb-2">05</div>
<h4 className="font-display text-base font-semibold text-white mb-2">Livraison</h4>
<p className="text-sm text-zinc-500">Documentation, passation, support.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Stack &amp; Standards
                    </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                        Je privilégie l'observable, le documenté, le reproductible.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass rounded-2xl p-6 lg:p-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-cyan-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<h3 className="font-display text-lg font-semibold text-white">Stack Web</h3>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">WordPress sur-mesure</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Next.js</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">React</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">SEO Technique</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Lighthouse 100</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Schema.org</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Figma</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">GSAP</span>
</div>
</div>

<div className="glass rounded-2xl p-6 lg:p-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-violet-400" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<h3 className="font-display text-lg font-semibold text-white">Stack IT</h3>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Proxmox</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Docker</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Traefik</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Zabbix</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Grafana</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Active Directory</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">DNS / DHCP</span>
<span className="px-3 py-2 glass rounded-lg text-sm font-medium text-zinc-300">Backup 3-2-1</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Ce qu'ils en disent
                    </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                        Des retours de clients satisfaits sur leur expérience de travail.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">
                            "Enfin quelqu'un qui comprend les enjeux business ET techniques. Le site est magnifique, rapide, et les leads ont doublé en 3 mois. La documentation livrée est un vrai plus."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center">
<span className="font-display font-semibold text-white text-sm">ML</span>
</div>
<div>
<p className="font-medium text-white text-sm">Marie L.</p>
<p className="text-xs text-zinc-500">Dirigeante • Mode &amp; Luxe</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">
                            "On avait besoin de fiabiliser notre infra sans recruter. Audit ultra clair, mise en place propre, et depuis 6 mois pas un seul incident. Le monitoring nous a évité plusieurs galères."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center">
<span className="font-display font-semibold text-white text-sm">TD</span>
</div>
<div>
<p className="font-medium text-white text-sm">Thomas D.</p>
<p className="text-xs text-zinc-500">CTO • Startup SaaS</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 leading-relaxed">
                            "Communication top, zéro bullshit, délais respectés. Notre landing convertit 2× mieux que l'ancienne. Je recommande sans hésiter pour tout projet web exigeant."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center">
<span className="font-display font-semibold text-white text-sm">SB</span>
</div>
<div>
<p className="font-medium text-white text-sm">Sophie B.</p>
<p className="text-xs text-zinc-500">Marketing Manager • E-commerce</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                        Questions fréquentes
                    </h2>
<p className="text-zinc-400">
                        Les réponses aux questions que vous vous posez sûrement.
                    </p>
</div>
<div className="space-y-4">

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">Quels sont les délais typiques ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Pour un site vitrine : 2 à 4 semaines. Pour un site premium avec animations : 4 à 6 semaines. Pour une mise en production IT : 1 à 3 semaines selon la complexité. Les délais précis sont définis au cadrage et respectés.</p>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">Comment se passe la maintenance ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Chaque projet inclut une formation admin et une documentation. Pour la maintenance récurrente, je propose des formules d'infogérance légère avec SLA. Sinon, vous êtes autonome avec une doc claire.</p>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">L'hébergement est-il inclus ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Non, mais je vous recommande les meilleures options selon votre projet (mutualisé, VPS, cloud). Je peux gérer la mise en place et la configuration. Vous gardez le contrôle de votre hébergement.</p>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">Quelle est votre approche sécurité ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Chaque livraison inclut : HTTPS, headers sécurité, mises à jour, sauvegardes. Pour l'IT : durcissement système, segmentation réseau, monitoring des accès, politique de moindre privilège.</p>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">Ai-je accès à l'admin et au code ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Oui, 100%. Vous êtes propriétaire de tout : code, accès admin, documentation technique. Je livre un projet que vous pouvez reprendre ou faire évoluer sans dépendance.</p>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium text-white">Travaillez-vous en urgence ?</span>
<iconify-icon className="text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="hidden px-5 pb-5">
<p className="text-sm text-zinc-400">Ponctuellement, oui, avec une majoration claire. Mais je préfère les projets bien cadrés. Pour les incidents IT urgents en infogérance, le SLA garantit une réponse en 4h max.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="glass rounded-3xl p-8 lg:p-12 glow-cyan">
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                        Prêt à démarrer ?
                    </h2>
<p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Tu veux un site propre ou une infra stable ? Discutons de ton projet et trouvons la meilleure approche ensemble.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 font-semibold rounded-xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300" href="#" onclick="showPage('contact')">
                            Demander un devis gratuit
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl font-medium text-white hover:bg-white/10 transition-all duration-300" href="#" onclick="showPage('portfolio')">
                            Voir les réalisations
                        </a>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-portfolio">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        Portfolio
                    </h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Une sélection de projets web et IT réalisés pour des clients exigeants.
                    </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium transition-colors">Tous</button>
<button className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">Vitrine</button>
<button className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">E-commerce</button>
<button className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">Landing</button>
<button className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">IT / Infra</button>
<button className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">SEO</button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass rounded-2xl overflow-hidden card-lift glass-hover group">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-4xl font-semibold text-white/20">AC</span>
</div>
</div>
<div className="p-6">
<h3 className="font-display text-lg font-semibold text-white mb-2">Atelier Couture Luxe</h3>
<p className="text-sm text-zinc-500 mb-3">Vitrine Premium • WordPress</p>
<p className="text-sm text-zinc-400 mb-4">Refonte complète avec storytelling visuel et tunnel de contact optimisé.</p>
<div className="flex items-center justify-between">
<span className="text-cyan-400 font-semibold">+42% leads</span>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Voir l'étude →</a>
</div>
</div>
</div>

</div>
</div>
</section>
</div>

<div className="page" id="page-services-web">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
<iconify-icon className="text-cyan-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Services Web</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        Design + Développement<br/>
<span className="text-cyan-400">sur-mesure</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Des sites qui marquent, performants et optimisés pour convertir.
                    </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Vitrine Premium</h3>
<p className="text-zinc-400 text-sm mb-4">Sites vitrines élégants et performants pour présenter votre activité avec impact.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Design sur-mesure
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Responsive optimisé
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                SEO technique inclus
                            </li>
</ul>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Landing Conversion</h3>
<p className="text-zinc-400 text-sm mb-4">Pages d'atterrissage optimisées pour vos campagnes publicitaires.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Copywriting persuasif
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                A/B testing ready
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Tracking complet
                            </li>
</ul>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Refonte</h3>
<p className="text-zinc-400 text-sm mb-4">Modernisation de votre site existant sans perdre votre référencement.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Audit préalable
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Migration SEO
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Redirections propres
                            </li>
</ul>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">SEO Technique</h3>
<p className="text-zinc-400 text-sm mb-4">Optimisation technique pour un meilleur référencement naturel.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Core Web Vitals
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Schema.org
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Audit &amp; corrections
                            </li>
</ul>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Maintenance</h3>
<p className="text-zinc-400 text-sm mb-4">Gardez votre site à jour, sécurisé et performant.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Mises à jour régulières
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Sauvegardes auto
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Support réactif
                            </li>
</ul>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">E-commerce</h3>
<p className="text-zinc-400 text-sm mb-4">Boutiques en ligne performantes et faciles à gérer.</p>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                WooCommerce / Shopify
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Tunnel optimisé
                            </li>
<li className="text-sm text-zinc-500 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Paiement sécurisé
                            </li>
</ul>
</div>
</div>

<div className="glass rounded-2xl p-8 lg:p-12">
<h2 className="font-display text-2xl font-semibold text-white mb-8 text-center">Ce que tu obtiens</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:figma-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h4 className="font-medium text-white mb-2">Maquettes Figma</h4>
<p className="text-xs text-zinc-500">Fichiers sources complets</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h4 className="font-medium text-white mb-2">Code source</h4>
<p className="text-xs text-zinc-500">Propre et documenté</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:key-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h4 className="font-medium text-white mb-2">Accès admin</h4>
<p className="text-xs text-zinc-500">100% propriétaire</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h4 className="font-medium text-white mb-2">Documentation</h4>
<p className="text-xs text-zinc-500">Guide utilisateur</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-services-it">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
<iconify-icon className="text-violet-400" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Services IT</span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        Systèmes + Réseau<br/>
<span className="text-violet-400">fiables &amp; documentés</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Infrastructure solide, observable et maintenable.
                    </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Réseau</h3>
<p className="text-zinc-400 text-sm">Configuration, segmentation, sécurisation de votre infrastructure réseau.</p>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Systèmes</h3>
<p className="text-zinc-400 text-sm">Windows Server, Active Directory, Linux (Debian, Ubuntu, Rocky).</p>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Virtualisation</h3>
<p className="text-zinc-400 text-sm">Proxmox, VMware, conteneurisation Docker.</p>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:programming-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Automatisation</h3>
<p className="text-zinc-400 text-sm">Scripts, CI/CD, déploiements automatisés.</p>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Monitoring</h3>
<p className="text-zinc-400 text-sm">Zabbix, Grafana, alerting intelligent.</p>
</div>
<div className="glass rounded-2xl p-6 lg:p-8 card-lift glass-hover">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3">Sécurité</h3>
<p className="text-zinc-400 text-sm">Durcissement, audit, sauvegardes 3-2-1.</p>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<div className="p-6 lg:p-8 border-b border-white/5">
<h2 className="font-display text-2xl font-semibold text-white">Problème → Solution</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-white/5">
<tr>
<th className="text-left p-4 text-sm font-medium text-zinc-400">Problème</th>
<th className="text-left p-4 text-sm font-medium text-zinc-400">Diagnostic</th>
<th className="text-left p-4 text-sm font-medium text-zinc-400">Solution</th>
<th className="text-left p-4 text-sm font-medium text-zinc-400">Livrable</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="p-4 text-sm text-zinc-300">Réseau lent / instable</td>
<td className="p-4 text-sm text-zinc-400">Audit complet</td>
<td className="p-4 text-sm text-zinc-400">Segmentation + QoS</td>
<td className="p-4 text-sm text-violet-400">Schéma réseau + config</td>
</tr>
<tr>
<td className="p-4 text-sm text-zinc-300">Pas de sauvegardes</td>
<td className="p-4 text-sm text-zinc-400">Inventaire données</td>
<td className="p-4 text-sm text-zinc-400">Stratégie 3-2-1</td>
<td className="p-4 text-sm text-violet-400">Runbook restauration</td>
</tr>
<tr>
<td className="p-4 text-sm text-zinc-300">Pas de visibilité</td>
<td className="p-4 text-sm text-zinc-400">Mapping infra</td>
<td className="p-4 text-sm text-zinc-400">Monitoring + alerting</td>
<td className="p-4 text-sm text-violet-400">Dashboard Grafana</td>
</tr>
<tr>
<td className="p-4 text-sm text-zinc-300">Sécurité douteuse</td>
<td className="p-4 text-sm text-zinc-400">Audit sécurité</td>
<td className="p-4 text-sm text-zinc-400">Durcissement</td>
<td className="p-4 text-sm text-violet-400">Plan de remédiation</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-about">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        À propos
                    </h1>
</div>
<div className="glass rounded-2xl p-8 lg:p-12 mb-12">
<div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 flex items-center justify-center flex-shrink-0">
<span className="font-display text-4xl font-semibold text-white">IS</span>
</div>
<div>
<h2 className="font-display text-2xl font-semibold text-white mb-2">Profil hybride Web + IT</h2>
<p className="text-zinc-400">
                                Après plus de 10 ans dans le digital, j'ai développé une double expertise rare : la création web (design, développement, SEO) et l'infrastructure IT (systèmes, réseau, sécurité).
                            </p>
</div>
</div>
<p className="text-zinc-400 leading-relaxed mb-6">
                        Cette combinaison me permet d'avoir une vision complète des projets digitaux : un beau site ne sert à rien s'il tourne sur une infra bancale. Une infra robuste ne convertit pas si le site est mal conçu.
                    </p>
<p className="text-zinc-400 leading-relaxed">
                        Mon obsession : le travail propre. Du code lisible, des configurations documentées, des process clairs. Je livre des projets que vous pouvez reprendre, maintenir, faire évoluer sans dépendance.
                    </p>
</div>

<div className="grid sm:grid-cols-2 gap-6">
<div className="glass rounded-2xl p-6 card-lift glass-hover">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-white mb-2">Fiabilité</h3>
<p className="text-sm text-zinc-400">Ce qui est annoncé est livré. Délais respectés, périmètre clair.</p>
</div>
<div className="glass rounded-2xl p-6 card-lift glass-hover">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-white mb-2">Transparence</h3>
<p className="text-sm text-zinc-400">Communication claire, pas de jargon inutile, visibilité sur l'avancement.</p>
</div>
<div className="glass rounded-2xl p-6 card-lift glass-hover">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:book-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-white mb-2">Pédagogie</h3>
<p className="text-sm text-zinc-400">Je prends le temps d'expliquer, de former, de transférer les compétences.</p>
</div>
<div className="glass rounded-2xl p-6 card-lift glass-hover">
<div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold text-white mb-2">Documentation</h3>
<p className="text-sm text-zinc-400">Tout est documenté. Vous n'êtes jamais dépendant de moi.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-contact">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        Parlons de votre projet
                    </h1>
<p className="text-lg text-zinc-400">
                        Réponse garantie sous 24-48h. Confidentialité assurée.
                    </p>
</div>
<div className="grid lg:grid-cols-5 gap-8">

<div className="lg:col-span-3">
<form className="glass rounded-2xl p-6 lg:p-8 space-y-6">

<div>
<label className="block text-sm font-medium text-zinc-300 mb-3">Type de projet</label>
<div className="grid grid-cols-3 gap-3">
<label className="relative">
<input checked="" className="peer sr-only" name="type" type="radio" value="web"/>
<div className="p-4 glass rounded-xl text-center cursor-pointer peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 transition-all">
<iconify-icon className="text-cyan-400 mb-2" icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm font-medium text-white">Web</p>
</div>
</label>
<label className="relative">
<input className="peer sr-only" name="type" type="radio" value="it"/>
<div className="p-4 glass rounded-xl text-center cursor-pointer peer-checked:border-violet-500 peer-checked:bg-violet-500/10 transition-all">
<iconify-icon className="text-violet-400 mb-2" icon="solar:server-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm font-medium text-white">IT</p>
</div>
</label>
<label className="relative">
<input className="peer sr-only" name="type" type="radio" value="both"/>
<div className="p-4 glass rounded-xl text-center cursor-pointer peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 transition-all">
<iconify-icon className="text-emerald-400 mb-2" icon="solar:question-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="text-sm font-medium text-white">Je sais pas</p>
</div>
</label>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Nom / Entreprise</label>
<input className="w-full px-4 py-3 glass rounded-xl bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
<input className="w-full px-4 py-3 glass rounded-xl bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="vous@example.com" type="email"/>
</div>
</div></form></div></div></div></section></div>
    </>
  );
}
