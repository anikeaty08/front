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
      

<div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-orange-500/10"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] bg-zinc-800/30"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5" style={{background: 'rgba(2, 6, 23, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

<a className="text-lg font-normal tracking-tighter text-zinc-50" href="#">
                famsub.
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors font-light text-zinc-400 hover:text-zinc-50" href="#">Comment ça marche</a>
<a className="text-sm transition-colors font-light text-zinc-400 hover:text-zinc-50" href="#">Abonnements</a>
<a className="text-sm transition-colors font-light text-zinc-400 hover:text-zinc-50" href="#">Tarifs</a>
</nav>

<div className="flex items-center gap-5">
<a className="text-sm transition-colors font-light hidden sm:block text-zinc-400 hover:text-zinc-50" href="#">Connexion</a>
<a className="px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-sm bg-white text-zinc-950 hover:bg-zinc-200" href="#">
                    S'inscrire
                </a>
</div>
</div>
</header>
<main className="pt-24 md:pt-32">

<section className="md:pb-32 text-center max-w-5xl mr-auto ml-auto pr-6 pb-20 pl-6 relative" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-8 backdrop-blur-sm border-white/5 bg-zinc-900/50">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-normal text-zinc-300">Nouveau : Partagez Canva Pro dès aujourd'hui</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-6 max-w-4xl mx-auto" style={{backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(180deg, #f8fafc 0%, #94a3b8 100%)'}}>
                Divisez le prix, pas l'expérience.
            </h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-tight text-zinc-400">
                Rejoignez des milliers d'utilisateurs qui économisent en partageant Netflix, Spotify, Canva et bien plus. Plateforme sécurisée, paiements automatisés.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-lg bg-white shadow-white/5 text-zinc-950 hover:bg-zinc-200" href="#">
                    Commencer gratuitement
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-light transition-all flex items-center justify-center gap-2 border shadow-sm backdrop-blur-sm border-white/5 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800" href="#">
                    Explorer les offres
                </a>
</div>

<div className="flex flex-col items-center justify-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-900" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Abeline&amp;backgroundColor=0f172a"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-900" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Barbe&amp;backgroundColor=1e293b"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-900" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Blaise&amp;backgroundColor=334155"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-900" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Bouchard&amp;backgroundColor=020617"/>
</div>
<div className="flex items-center gap-2 text-xs font-light text-zinc-400">
<div className="flex text-orange-500">
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span>Rejoint par +1,000 utilisateurs</span>
</div>
</div>
</section>

<section className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5">
<div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
<div className="flex flex-col items-center md:items-start gap-3">
<div className="w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center border-white/5 bg-zinc-900 text-zinc-300">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-zinc-100">Connexion sécurisée</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">Partagez vos accès sans compromettre votre sécurité. Validation stricte.</p>
</div>
<div className="flex flex-col items-center md:items-start gap-3">
<div className="w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center border-white/5 bg-zinc-900 text-zinc-300">
<iconify-icon height="20" icon="solar:lock-password-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-zinc-100">Confidentialité absolue</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">Vos informations personnelles et bancaires restent cryptées et invisibles.</p>
</div>
<div className="flex flex-col items-center md:items-start gap-3">
<div className="w-10 h-10 rounded-xl border shadow-sm flex items-center justify-center border-white/5 bg-zinc-900 text-zinc-300">
<iconify-icon height="20" icon="solar:card-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-zinc-100">Prélèvements automatiques</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">Finis les retards. La gestion financière est assurée automatiquement.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-zinc-50">Pourquoi passer par famsub.</h2>
<p className="text-base font-light max-w-2xl text-zinc-400">La gestion manuelle de groupe est source de conflits et de pertes de temps. Nous automatisons tout le processus.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-3xl p-8 border shadow-sm border-white/5 bg-zinc-900/30">
<div className="text-xs font-normal tracking-widest uppercase mb-8 text-zinc-500">Sans Famsub</div>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div className="">
<h3 className="text-sm font-normal mb-1 text-zinc-300">Abonnements onéreux</h3>
<p className="text-sm font-light text-zinc-500">Les coûts s'additionnent vite à la fin du mois.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div className="">
<h3 className="text-sm font-normal mb-1 text-zinc-300">Paiements laborieux</h3>
<p className="text-sm font-light text-zinc-500">Courir après l'argent de ses proches tous les mois.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div className="">
<h3 className="text-sm font-normal mb-1 text-zinc-300">Zéro garantie</h3>
<p className="text-sm font-light text-zinc-500">Risque de fraude lors du partage avec des inconnus.</p>
</div>
</li>
</ul>
</div>

<div className="rounded-3xl p-8 border shadow-xl relative overflow-hidden border-white/10 shadow-black/50 bg-zinc-900/80">

<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] bg-orange-500/10"></div>
<div className="text-xs font-normal tracking-widest uppercase mb-8 relative z-10 text-orange-400">La Solution</div>
<ul className="space-y-6 relative z-10">
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-orange-400" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div>
<h3 className="text-sm font-normal mb-1 text-zinc-50">Automatisation totale</h3>
<p className="text-sm font-light text-zinc-400">Gestion fluide, tout se fait en arrière-plan.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-orange-400" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div>
<h3 className="text-sm font-normal mb-1 text-zinc-50">Transactions sécurisées</h3>
<p className="text-sm font-light text-zinc-400">L'argent est collecté et reversé avec précision.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="mt-0.5 text-orange-400" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<div>
<h3 className="text-sm font-normal mb-1 text-zinc-50">Membres vérifiés</h3>
<p className="text-sm font-light text-zinc-400">Une communauté saine et contrôlée par nos équipes.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="border-y pt-24 pr-6 pb-24 pl-6 bg-zinc-950/50 border-white/5">
<div className="max-w-6xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-zinc-50">L'infrastructure du partage</h2>
<p className="text-base font-light text-zinc-400">Tout ce qu'il vous faut pour opérer des groupes de co-abonnement.</p>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border transition-all group backdrop-blur-sm border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60">
<iconify-icon className="mb-6 transition-colors text-zinc-500 group-hover:text-zinc-300" height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Création d'offres simple</h3>
<p className="text-sm font-light text-zinc-500">Configurez votre service, son prix et les places disponibles en quelques clics.</p>
</div>

<div className="p-8 rounded-3xl border transition-all group backdrop-blur-sm border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60">
<iconify-icon className="mb-6 transition-colors text-zinc-500 group-hover:text-zinc-300" height="24" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Protection intégrale</h3>
<p className="text-sm font-light text-zinc-500">Filtre anti-arnaque et vérification systématique des nouveaux membres.</p>
</div>

<div className="p-8 rounded-3xl border transition-all group backdrop-blur-sm border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60">
<iconify-icon className="mb-6 transition-colors text-zinc-500 group-hover:text-zinc-300" height="24" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Trésorerie automatique</h3>
<p className="text-sm font-light text-zinc-500">Les montants sont prélevés puis redistribués le même jour chaque mois.</p>
</div>

<div className="p-8 rounded-3xl border transition-all group backdrop-blur-sm border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60">
<iconify-icon className="mb-6 transition-colors text-zinc-500 group-hover:text-zinc-300" height="24" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Canaux de communication</h3>
<p className="text-sm font-light text-zinc-500">Coordonnez-vous via notre messagerie interne sécurisée.</p>
</div>

<div className="p-8 rounded-3xl border transition-all group md:col-span-2 flex flex-col md:flex-row gap-8 items-center justify-between backdrop-blur-sm border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60">
<div>
<iconify-icon className="mb-6 transition-colors text-zinc-500 group-hover:text-zinc-300" height="24" icon="solar:bell-bing-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Système de notification intelligent</h3>
<p className="text-sm font-light max-w-sm text-zinc-500">Recevez instantanément vos rappels de paiements, invitations et alertes d'accès par email.</p>
</div>

<div className="w-full md:w-64 h-32 rounded-xl border flex flex-col gap-3 p-4 shadow-sm border-white/5 bg-zinc-950/50">
<div className="h-2 w-1/3 rounded-full bg-zinc-800"></div>
<div className="h-10 w-full rounded-lg border flex items-center px-3 gap-3 border-white/5 bg-zinc-900">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<div className="h-2 w-1/2 rounded-full bg-zinc-700"></div>
</div>
<div className="h-10 w-full rounded-lg border flex items-center px-3 gap-3 border-white/5 bg-zinc-900">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="h-2 w-2/3 rounded-full bg-zinc-800"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-zinc-50">Le workflow</h2>
<p className="text-base font-light text-zinc-400">Une approche minimaliste pour les propriétaires et les invités.</p>

<div className="inline-flex p-1 rounded-full items-center mt-8 border border-white/5 bg-zinc-900/50">
<button className="rounded-full px-5 py-1.5 text-sm font-normal shadow-sm border border-white/5 bg-zinc-800 text-zinc-100">Propriétaires</button>
<button className="rounded-full px-5 py-1.5 text-sm font-light transition-all text-zinc-500 hover:text-zinc-300">Co-abonnés</button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] z-0 bg-zinc-800/60"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center text-lg font-normal mb-6 group-hover:-translate-y-1 transition-transform border-white/5 bg-zinc-900 text-zinc-300">
                        1
                    </div>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Créez l'offre</h3>
<p className="text-sm font-light text-zinc-500">Définissez l'abonnement et le nombre de slots disponibles.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center text-lg font-normal mb-6 group-hover:-translate-y-1 transition-transform border-white/5 bg-zinc-900 text-zinc-300">
                        2
                    </div>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Validez les accès</h3>
<p className="text-sm font-light text-zinc-500">Acceptez les utilisateurs vérifiés en un seul clic.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center text-lg font-normal mb-6 group-hover:-translate-y-1 transition-transform bg-white border-white text-zinc-950">
                        3
                    </div>
<h3 className="text-base font-normal tracking-tight mb-2 text-zinc-100">Recevez les fonds</h3>
<p className="text-sm font-light text-zinc-500">Le système se charge de vous reverser votre part chaque mois.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3 text-zinc-50">Catalogue des offres</h2>
<p className="text-base font-light max-w-xl text-zinc-400">Plus de 50 services digitaux pris en charge par notre écosystème.</p>
</div>
<a className="text-sm font-light transition-colors flex items-center gap-1 hover:text-white text-zinc-300" href="#">
                        Tout explorer <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group border rounded-2xl p-6 transition-colors flex flex-col border-white/5 hover:border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60">
<div className="flex justify-between items-start mb-10">
<h3 className="text-lg font-normal tracking-tight text-zinc-100">Netflix</h3>
<span className="px-2 py-1 rounded-md border text-xs font-normal shadow-sm border-white/5 bg-zinc-800/50 text-zinc-400">4 places</span>
</div>
<div className="mt-auto">
<div className="text-2xl font-normal tracking-tight mb-1 text-zinc-50">2 000 <span className="text-xs font-light text-zinc-500">FCFA /mo</span></div>
<button className="w-full mt-4 border border-transparent py-2 rounded-lg text-sm font-light transition-colors shadow-sm bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
                                Rejoindre
                            </button>
</div>
</div>

<div className="group border rounded-2xl p-6 transition-colors flex flex-col border-white/5 hover:border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60">
<div className="flex justify-between items-start mb-10">
<h3 className="text-lg font-normal tracking-tight text-zinc-100">Spotify</h3>
<span className="px-2 py-1 rounded-md border text-xs font-normal shadow-sm border-white/5 bg-zinc-800/50 text-zinc-400">2 places</span>
</div>
<div className="mt-auto">
<div className="text-2xl font-normal tracking-tight mb-1 text-zinc-50">900 <span className="text-xs font-light text-zinc-500">FCFA /mo</span></div>
<button className="w-full mt-4 border border-transparent py-2 rounded-lg text-sm font-medium transition-colors shadow-sm bg-white text-zinc-950 hover:bg-zinc-200">
                                Rejoindre
                            </button>
</div>
</div>

<div className="group border rounded-2xl p-6 transition-colors flex flex-col border-white/5 hover:border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60">
<div className="flex justify-between items-start mb-10">
<h3 className="text-lg font-normal tracking-tight text-zinc-100">Canva Pro</h3>
<span className="px-2 py-1 rounded-md border text-xs font-normal shadow-sm border-white/5 bg-zinc-800/50 text-zinc-400">3 places</span>
</div>
<div className="mt-auto">
<div className="text-2xl font-normal tracking-tight mb-1 text-zinc-50">5 000 <span className="text-xs font-light text-zinc-500">FCFA /mo</span></div>
<button className="w-full mt-4 border border-transparent py-2 rounded-lg text-sm font-light transition-colors shadow-sm bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
                                Rejoindre
                            </button>
</div>
</div>

<div className="group border rounded-2xl p-6 opacity-50 flex flex-col border-white/5 bg-zinc-950/50">
<div className="flex justify-between items-start mb-10">
<h3 className="text-lg font-normal tracking-tight text-zinc-300">Apple Music</h3>
<span className="px-2 py-1 rounded-md border text-xs font-normal text-zinc-500 border-white/5 bg-zinc-900">Complet</span>
</div>
<div className="mt-auto">
<div className="text-2xl font-normal tracking-tight mb-1 text-zinc-500">1 000 <span className="text-xs font-light">FCFA /mo</span></div>
<button className="w-full mt-4 bg-transparent border py-2 rounded-lg text-sm font-light cursor-not-allowed text-zinc-500 border-white/5" disabled="">
                                Indisponible
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-zinc-50">Tarification claire</h2>
<p className="text-base font-light text-zinc-400">Commencez sans frais, ou débloquez la puissance totale.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="rounded-3xl p-8 md:p-10 border flex flex-col relative backdrop-blur-sm border-white/5 bg-zinc-900/30">
<h3 className="text-lg font-normal mb-1 text-zinc-100">Standard</h3>
<p className="text-sm font-light mb-6 text-zinc-500">Idéal pour rejoindre des groupes.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-50">0</span>
<span className="text-sm text-zinc-500">FCFA</span>
</div>
<div className="w-full h-px mb-8 bg-white/5"></div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-300">Accès au catalogue d'offres</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-300">Messagerie de groupe</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-300">Sécurisation des transactions</span>
</li>
</ul>
<button className="w-full border border-transparent py-2.5 rounded-lg text-sm font-light transition-colors shadow-sm bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
                        Sélectionner Standard
                    </button>
</div>

<div className="rounded-3xl p-8 md:p-10 border flex flex-col relative shadow-2xl overflow-hidden border-orange-500/20 shadow-orange-500/5 bg-zinc-900/80">

<div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full blur-[60px] pointer-events-none bg-orange-500/20"></div>
<div className="absolute top-6 right-8 z-10">
<span className="px-2.5 py-1 rounded-full border text-xs font-normal bg-orange-500/10 border-orange-500/20 text-orange-300">Populaire</span>
</div>
<h3 className="text-lg font-normal mb-1 relative z-10 text-white">Plus</h3>
<p className="text-sm font-light mb-6 relative z-10 text-zinc-400">Pour les hôtes et super-utilisateurs.</p>
<div className="mb-8 flex items-baseline gap-1 relative z-10">
<span className="text-4xl md:text-5xl font-medium tracking-tighter text-white">2 500</span>
<span className="text-sm text-zinc-400">FCFA /mo</span>
</div>
<div className="w-full h-px mb-8 relative z-10 bg-white/5"></div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-400" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-200">Toutes les fonctionnalités Standard</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-400" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-200">Cashback de 5% mensuel</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-400" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-light text-zinc-200">Offres mises en avant (Boost)</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm relative z-10 bg-orange-500 text-white hover:bg-orange-600">
                        Passer à Plus
                    </button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950/30">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4 text-zinc-50">Recommandé par la communauté</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40">
<div className="flex mb-4 text-zinc-700">
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 font-light text-zinc-300">"Je partage mon abonnement Deezer depuis plusieurs mois avec Famsub. Aucun souci, interface hyper clean et tout fonctionne parfaitement."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-normal border border-white/5 bg-zinc-800 text-zinc-300">CN</div>
<div>
<div className="text-xs font-normal text-zinc-100">Camille N.</div>
<div className="text-xs font-light text-zinc-500">Yaoundé</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40">
<div className="flex mb-4 text-zinc-700">
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 font-light text-zinc-300">"J'ai économisé plus de 15,000 XAF en 3 mois sur mes abonnements Canva et Adobe. Le processus d'onboarding est brillant."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-normal border border-white/5 bg-zinc-800 text-zinc-300">AK</div>
<div>
<div className="text-xs font-normal text-zinc-100">Armelle K.</div>
<div className="text-xs font-light text-zinc-500">Douala</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40">
<div className="flex mb-4 text-zinc-700">
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-300" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-zinc-800" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 font-light text-zinc-300">"Avant je galérais à trouver des gens fiables pour partager Netflix. Maintenant c'est automatique et sécurisé."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-normal border border-white/5 bg-zinc-800 text-zinc-300">RZ</div>
<div>
<div className="text-xs font-normal text-zinc-100">Richard Z.</div>
<div className="text-xs font-light text-zinc-500">Yaoundé</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto border-t border-white/5">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-10 text-center text-zinc-50">Questions fréquentes</h2>
<div className="space-y-1">

<div className="border-b cursor-pointer group py-4 flex justify-between items-center border-white/5">
<span className="text-sm font-light group-hover:text-white transition-colors text-zinc-300">Comment fonctionne la sécurité des paiements ?</span>
<iconify-icon className="group-hover:text-white transition-colors text-zinc-600" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>

<div className="border-b cursor-pointer group py-4 flex justify-between items-center border-white/5">
<span className="text-sm font-light group-hover:text-white transition-colors text-zinc-300">Comment se passent les prélèvements mensuels ?</span>
<iconify-icon className="group-hover:text-white transition-colors text-zinc-600" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>

<div className="border-b cursor-pointer group py-4 flex justify-between items-center border-white/5">
<span className="text-sm font-light group-hover:text-white transition-colors text-zinc-300">Famsub est-il légal et conforme ?</span>
<iconify-icon className="group-hover:text-white transition-colors text-zinc-600" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>

<div className="border-b cursor-pointer group py-4 flex justify-between items-center border-white/5">
<span className="text-sm font-light group-hover:text-white transition-colors text-zinc-300">Puis-je annuler le partage à tout moment ?</span>
<iconify-icon className="group-hover:text-white transition-colors text-zinc-600" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5 bg-zinc-950">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-zinc-50">Prêt à rationaliser vos abonnements ?</h2>
<p className="text-lg font-light mb-10 max-w-xl mx-auto tracking-tight text-zinc-400">Rejoignez la plateforme et réduisez vos charges mensuelles jusqu'à 70% dès aujourd'hui.</p>
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg bg-white shadow-white/10 text-zinc-950 hover:bg-zinc-200" href="#">
                    Créer un compte <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>

<div className="absolute bottom-[-50%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] rounded-t-full blur-[80px] pointer-events-none z-0 bg-orange-500/10"></div>
</section>
</main>

<footer className="border-t pt-24 px-6 relative overflow-hidden flex flex-col justify-between border-white/5 bg-zinc-950">
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">

<div className="md:col-span-2">
<a className="text-lg font-normal tracking-tighter block mb-4 text-zinc-50" href="#">
                    famsub.
                </a>
<p className="text-sm font-light mb-6 max-w-xs text-zinc-500">
                    Opérez vos abonnements partagés en toute sérénité. Conçu pour l'efficacité et la sécurité.
                </p>
<div className="flex gap-4 text-zinc-600">
<a className="transition-colors hover:text-zinc-300" href="#"><iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon></a>
<a className="transition-colors hover:text-zinc-300" href="#"><iconify-icon height="20" icon="solar:figma-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon></a>
<a className="transition-colors hover:text-zinc-300" href="#"><iconify-icon height="20" icon="solar:global-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-normal mb-4 text-zinc-100">Produit</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Plateforme</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Tarification</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal mb-4 text-zinc-100">Ressources</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Documentation</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-normal mb-4 text-zinc-100">Légal</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Confidentialité</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Conditions</a></li>
<li><a className="text-sm font-light transition-colors text-zinc-500 hover:text-zinc-300" href="#">Sécurité</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between pt-12 pb-8 text-xs font-light relative z-10 text-zinc-600">
<p>© 2026 Famsub Inc. Tous droits réservés.</p>
<p className="mt-2 md:mt-0">Design au Cameroun</p>
</div>

<div className="relative w-full overflow-hidden flex justify-center items-end mt-8 pointer-events-none select-none">
<div className="font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b to-transparent from-white/5" style={{fontSize: '21vw', lineHeight: '0.76'}}>
                FAMSUB
            </div>
</div>
</footer>

    </>
  );
}
