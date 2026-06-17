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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">F</div>
                FLUENT.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#method">Méthode</a>
<a className="hover:text-slate-900 transition-colors" href="#tutors">Mentors</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Tarifs</a>
<a className="hover:text-slate-900 transition-colors" href="#business">Entreprises</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Connexion</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50" href="#">
                    Essai gratuit
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Nouveau : Coaching IA disponible 24/7
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    L'anglais pour les <br/>
<span className="text-slate-400">ambitieux.</span>
</h1>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-lg">
                    Une méthode immersive conçue pour les professionnels. Abandonnez la grammaire scolaire, concentrez-vous sur la fluidité réelle et l'impact professionnel.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none px-4 py-3 shadow-sm placeholder:text-slate-400" placeholder="votre@email.com" type="email"/>
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-md" type="submit">
                        Commencer
                    </button>
</form>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"><iconify-icon icon="solar:user-linear" width="16"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center overflow-hidden"><iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center overflow-hidden"><iconify-icon icon="solar:user-speak-rounded-linear" width="16"></iconify-icon></div>
</div>
<p>Rejoint par +10,000 professionnels</p>
</div>
</div>

<div className="relative hidden lg:block select-none">

<div className="relative z-20 bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 p-6 max-w-md mx-auto rotate-1 hover:rotate-0 transition-transform duration-700">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Session Live</h3>
<p className="text-xs text-slate-500">Avec Sarah Jenkins</p>
</div>
</div>
<div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-semibold uppercase tracking-wider rounded border border-green-100">En cours</div>
</div>
<div className="space-y-3">
<div className="bg-slate-50 p-3 rounded-lg rounded-tl-none border border-slate-100">
<p className="text-xs text-slate-600 leading-relaxed">Could you elaborate on the quarterly projections?</p>
</div>
<div className="bg-indigo-600 p-3 rounded-lg rounded-tr-none text-white ml-auto max-w-[85%]">
<p className="text-xs leading-relaxed">Yes, based on the current data, we are expecting a 15% growth.</p>
</div>
</div>

<div className="mt-6 flex items-center gap-1 h-8 justify-center opacity-50">
<div className="w-1 h-3 bg-slate-900 rounded-full"></div>
<div className="w-1 h-5 bg-slate-900 rounded-full"></div>
<div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-4 bg-slate-900 rounded-full"></div>
<div className="w-1 h-2 bg-slate-900 rounded-full"></div>
</div>
</div>

<div className="absolute top-10 -right-4 z-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-48 -rotate-2">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-green-500" icon="solar:graph-up-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold">Progression</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] text-slate-400 text-right">Niveau B2 → C1</div>
</div>
<div className="absolute -bottom-6 -left-8 z-30 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold">12 jours</div>
<div className="text-[10px] text-slate-500">Série actuelle</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 py-10 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Adopté par les équipes de</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tight text-slate-800">ACME<span className="text-slate-400">CORP</span></span>
<span className="text-lg font-semibold tracking-tighter italic text-slate-800">focal<span className="text-indigo-600">point</span></span>
<span className="text-xl font-bold tracking-widest text-slate-800">STRATOS</span>
<span className="text-lg font-medium tracking-tight text-slate-800 flex items-center gap-1"><div className="w-3 h-3 bg-slate-800 rounded-full"></div>Nebula</span>
<span className="text-lg font-serif font-bold text-slate-800">Vangard.</span>
</div>
</div>
</section>

<section className="py-24" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Une approche scientifique.</h2>
<p className="text-slate-500 font-light text-lg max-w-2xl">Nous combinons l'intelligence artificielle pour la structure et des mentors humains pour la nuance et la culture.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Conversations Réelles</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Plus de listes de vocabulaire isolées. Apprenez en contexte grâce à des scénarios professionnels adaptés à votre secteur.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Feedback Instantané IA</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Notre IA analyse votre prononciation et votre grammaire en temps réel, vous offrant des corrections subtiles sans interrompre le flux.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Flexibilité Totale</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Des leçons de 15, 30 ou 60 minutes. Réservez à la dernière minute. Annulez sans frais. L'apprentissage qui s'adapte à votre agenda.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Tout pour votre réussite</h2>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 row-span-2 bg-white rounded-2xl border border-slate-200 p-8 relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Immersion Business</h3>
<p className="text-sm text-slate-500 max-w-sm">Modules spécialisés pour la Finance, la Tech, le Marketing et le Management.</p>
</div>

<div className="absolute right-0 bottom-0 w-3/4 h-3/4 opacity-10 pointer-events-none">
<iconify-icon className="absolute bottom-[-50px] right-[-50px]" icon="solar:graph-new-linear" width="400"></iconify-icon>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="mb-3 text-slate-700" icon="solar:case-round-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-slate-900">Négociation</div>
</div>
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="mb-3 text-slate-700" icon="solar:presentation-graph-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-slate-900">Présentation</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-white relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-20 transition-opacity"></div>
<iconify-icon className="mb-4 text-indigo-300" icon="solar:medal-ribbon-star-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold mb-1">Certificats</h3>
<p className="text-xs text-slate-400">Reconnu par LinkedIn &amp; HR.</p>
</div>

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-center">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Communauté</h3>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border border-white"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border border-white"></div>
</div>
</div>
<p className="text-xs text-slate-500">Rejoignez des clubs de discussion modérés par des experts.</p>
<button className="mt-4 w-full py-2 bg-slate-50 text-xs font-medium text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">Explorer</button>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Tarification transparente</h2>
<p className="text-slate-500 mt-4 font-light">Pas de frais cachés. Annulez à tout moment.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 flex flex-col sm:flex-row">

<div className="flex-1 p-6 sm:p-8">
<div className="flex items-center gap-2 mb-4">
<h3 className="text-lg font-medium text-slate-900">Mensuel</h3>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">29€</span>
<span className="text-slate-500">/mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Accès illimité à l'IA
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> 4 sessions live / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Certificats de niveau
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">Choisir ce plan</button>
</div>

<div className="hidden sm:block w-px bg-slate-100 my-4"></div>
<div className="sm:hidden h-px bg-slate-100 mx-4"></div>

<div className="flex-1 p-6 sm:p-8 bg-slate-50/50 sm:bg-transparent relative">
<div className="absolute top-0 right-0 p-3">
<span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Populaire</span>
</div>
<div className="flex items-center gap-2 mb-4">
<h3 className="text-lg font-medium text-slate-900">Annuel</h3>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">19€</span>
<span className="text-slate-500">/mois</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Tout du plan Mensuel
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> <strong>2 mois offerts</strong>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Accès prioritaire mentors
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">Commencer l'essai</button>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-6">Satisfait ou remboursé sous 14 jours.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-base font-semibold tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center text-white text-[10px] font-bold">F</div>
                        FLUENT.
                    </a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        La plateforme d'apprentissage de l'anglais conçue pour les professionnels exigeants. Basé à Paris.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Produit</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Méthodologie</a></li>
<li><a className="hover:text-slate-900" href="#">Tarifs</a></li>
<li><a className="hover:text-slate-900" href="#">Pour Entreprises</a></li>
<li><a className="hover:text-slate-900" href="#">Témoignages</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Ressources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Blog</a></li>
<li><a className="hover:text-slate-900" href="#">Test de niveau gratuit</a></li>
<li><a className="hover:text-slate-900" href="#">Guide de grammaire</a></li>
<li><a className="hover:text-slate-900" href="#">Webinaires</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Confidentialité</a></li>
<li><a className="hover:text-slate-900" href="#">CGV</a></li>
<li><a className="hover:text-slate-900" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-50">
<p className="text-[10px] text-slate-400">© 2024 Fluent Inc. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
