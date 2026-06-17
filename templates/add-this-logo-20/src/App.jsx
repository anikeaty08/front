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
      

<nav className="fixed w-full z-50 border-b border-slate-200 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-blue-600 text-white p-1 rounded-lg">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">
                    HAYCOURS<span className="text-slate-400 font-normal">DAHUA</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-blue-600 transition-colors" href="#produits">Caméras</a>
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#apropos">À propos</a>
<a className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all hover:shadow-lg shadow-slate-900/20" href="#contact">
                    Demander un devis
                </a>
</div>

<button className="md:hidden text-slate-900 p-2">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-pattern" id="accueil">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Distributeur Officiel Dahua à Salé
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                La sécurité intelligente pour votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">entreprise et domicile</span>.
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Expert en installation de systèmes de vidéosurveillance Dahua Technology. Protégez ce qui compte le plus avec une clarté haute définition et une fiabilité sans faille.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2" href="#contact">
                    Nous Contacter
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#produits">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
                    Voir le catalogue
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-80">
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">500+</span>
<span className="text-sm text-slate-500 mt-1">Installations</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-sm text-slate-500 mt-1">Support Technique</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">100%</span>
<span className="text-sm text-slate-500 mt-1">Garantie Dahua</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Salé</span>
<span className="text-sm text-slate-500 mt-1">Basé au Maroc</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="produits">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Nos meilleures solutions</h2>
<p className="text-slate-500 text-base max-w-xl">
                        Des caméras IP aux enregistreurs NVR, découvrez la gamme Dahua Technology adaptée à vos besoins de sécurité.
                    </p>
</div>
<a className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1" href="#">
                    Voir tout le catalogue <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 p-2 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="bg-slate-100 rounded-lg h-48 w-full flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:camera" width="48"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-slate-900">Caméra IP Dôme 4MP</h3>
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">Populaire</span>
</div>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Vision nocturne IR 30m, détection de mouvement intelligente et boîtier étanche IP67.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-semibold text-slate-900">Sur devis</span>
<button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-2 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="bg-slate-100 rounded-lg h-48 w-full flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:cctv" width="48"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-slate-900">Caméra Bullet Extérieure</h3>
</div>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Technologie Full-Color pour une vision couleur 24/7, zoom optique motorisé.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-semibold text-slate-900">Sur devis</span>
<button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-2 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="bg-slate-100 rounded-lg h-48 w-full flex items-center justify-center mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-slate-400 group-hover:text-blue-600 transition-colors" icon="lucide:hard-drive" width="48"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-slate-900">Enregistreur NVR 8 Voies</h3>
</div>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Support 4K, compression H.265+, accès distant via smartphone simple et sécurisé.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-semibold text-slate-900">Sur devis</span>
<button className="p-2 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Pourquoi choisir HAYCOURS ?</h2>
<p className="text-slate-500">
                    Nous ne nous contentons pas de vendre du matériel. Nous offrons une expertise complète pour sécuriser vos locaux à Salé et ses environs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Installation Professionnelle</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Nos techniciens certifiés assurent une pose propre, discrète et optimisée de vos caméras et câblages.
                    </p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-2">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Maintenance &amp; SAV</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Un problème technique ? Notre équipe intervient rapidement pour garantir la continuité de votre surveillance.
                    </p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900">Configuration à Distance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Visualisez vos caméras depuis votre smartphone ou tablette, où que vous soyez dans le monde.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Partenaires technologiques</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<iconify-icon icon="simple-icons:dahua" width="24"></iconify-icon> DAHUA
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<iconify-icon icon="simple-icons:hikvision" width="24"></iconify-icon> HIKVISION
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<iconify-icon icon="lucide:hard-drive" width="24"></iconify-icon> SEAGATE
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800">
<iconify-icon icon="lucide:network" width="24"></iconify-icon> TP-LINK
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 relative z-10">Prêt à sécuriser vos locaux ?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10 text-lg">
                    Contactez-nous pour une étude gratuite de vos besoins. Intervention rapide sur Salé et Rabat.
                </p>
<form className="max-w-md mx-auto space-y-4 relative z-10 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="email" placeholder="votre@email.com" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Téléphone</label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="phone" placeholder="Numéro de téléphone" type="tel"/>
</div>
<button className="w-full py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-colors" type="button">
                        Être rappelé gratuitement
                    </button>
</form>
<div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm relative z-10">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
                        Haycours, Salé, Maroc
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
                        +212 6 XX XX XX XX
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                        contact@haycours-dahua.ma
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-slate-100 text-slate-600 p-1 rounded-md">
<iconify-icon icon="lucide:shield" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">
                    HAYCOURS DAHUA
                </span>
</div>
<p className="text-sm text-slate-500">
                © 2023 Haycours Dahua Salé. Tous droits réservés.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
