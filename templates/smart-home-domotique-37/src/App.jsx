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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-md flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:smart-home-angle-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">Smart Galé</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#projets">Innovation</a>
<a className="hover:text-white transition-colors" href="#technologie">Design</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-medium text-white group">
<span>Espace Client</span>
<iconify-icon className="group-hover:text-amber-400 transition-colors" icon="solar:user-circle-linear"></iconify-icon>
</button>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-medium mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Innovation &amp; Design Sophistiqué
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 animate-fade-in delay-100 leading-[1.1]">
                    Découvrez l'élégance <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500">de la domotique.</span>
</h1>
<p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in delay-200 font-light">
                    Bienvenue chez Smart Galé, où l'art de vivre intelligent prend vie. Nous élevons votre espace avec un mélange parfait de technologie et de design.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
<button className="w-full md:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                        Explorer nos solutions
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Visionner le concept
                    </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto animate-fade-in delay-300">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl opacity-20 blur"></div>
<div className="relative bg-slate-950/80 border border-white/10 rounded-xl p-2 backdrop-blur-xl">
<div className="aspect-[2/1] w-full rounded-lg overflow-hidden bg-slate-900/50 flex items-center justify-center relative">

<div className="absolute inset-0 grid grid-cols-3 gap-px bg-white/5 opacity-20">
<div></div><div></div><div></div>
<div></div><div></div><div></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-8 z-10">

<div className="bg-slate-950/80 border border-white/5 p-6 rounded-lg backdrop-blur-md">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-purple-500/10 rounded-md text-purple-400">
<iconify-icon icon="solar:lamp-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Ambiance</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xl font-medium text-white">Mode "Soirée"</span>
<span className="text-xs text-slate-500">Lumières tamisées &amp; Musique</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-purple-400">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
<span>Actif maintenant</span>
</div>
</div>

<div className="bg-slate-950/80 border border-white/5 p-6 rounded-lg backdrop-blur-md scale-110 shadow-2xl shadow-amber-900/20 border-amber-500/20 relative">
<div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-amber-500/10 rounded-md text-amber-400">
<iconify-icon icon="solar:smart-home-angle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Maison</span>
</div>
<div className="flex items-end gap-1 h-8 mb-2 justify-between px-1">
<div className="w-1.5 h-[30%] bg-slate-800 rounded-sm"></div>
<div className="w-1.5 h-[50%] bg-slate-800 rounded-sm"></div>
<div className="w-1.5 h-[40%] bg-slate-800 rounded-sm"></div>
<div className="w-1.5 h-[80%] bg-slate-800 rounded-sm"></div>
<div className="w-1.5 h-[60%] bg-amber-500 rounded-sm"></div>
<div className="w-1.5 h-[30%] bg-slate-800 rounded-sm"></div>
</div>
<div className="text-xs text-slate-400 text-center">Optimisation énergétique</div>
</div>

<div className="bg-slate-950/80 border border-white/5 p-6 rounded-lg backdrop-blur-md">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-indigo-500/10 rounded-md text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Sécurité</span>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-slate-400">Périmètre sécurisé</span>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="mt-3 text-xs text-slate-500">
                                    Tout est calme
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Harmonie &amp; Technologie</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">Explorez un monde où le confort, la sécurité et l'efficacité se rencontrent harmonieusement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-900/40 border border-white/10 rounded-2xl p-8 hover:bg-slate-900/60 transition-all hover:border-white/20 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 bg-amber-500/10 blur-[60px] rounded-full group-hover:bg-amber-500/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Confort &amp; Éclairage</h3>
<p className="text-slate-400 font-light leading-relaxed max-w-md">
                                Créez des scénarios lumineux qui s'adaptent à votre rythme de vie. Une atmosphère sur-mesure pour chaque moment de la journée, alliant esthétique et bien-être.
                            </p>
<div className="mt-8 flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Scénarios</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Variateurs</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Ambiances</span>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 hover:bg-slate-900/60 transition-all hover:border-white/20 group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:snowflake-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Climatisation Intelligente</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                            Une température idéale pièce par pièce, pilotée automatiquement pour un confort absolu.
                        </p>
</div>

<div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 hover:bg-slate-900/60 transition-all hover:border-white/20 group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:lock-password-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sécurité Avancée</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                            Vidéophonie, contrôle d'accès et surveillance périmétrique pour une sérénité totale.
                        </p>
</div>

<div className="md:col-span-2 bg-slate-900/40 border border-white/10 rounded-2xl p-8 hover:bg-slate-900/60 transition-all hover:border-white/20 group relative overflow-hidden">
<div className="absolute bottom-0 left-0 p-12 bg-green-500/10 blur-[60px] rounded-full group-hover:bg-green-500/20 transition-all"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Efficacité Énergétique</h3>
<p className="text-slate-400 font-light leading-relaxed">
                                    Optimisez votre consommation sans sacrifier votre confort. Notre technologie pilote intelligemment vos équipements pour réduire l'empreinte carbone.
                                </p>
</div>
<div className="w-full md:w-1/3 bg-slate-950/50 rounded-lg p-4 border border-white/5">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-slate-400">Optimisation</span>
<iconify-icon className="text-green-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex items-end justify-between h-20 gap-1">
<div className="w-full bg-slate-800/50 rounded-t-sm h-[80%] relative group-hover:h-[80%] transition-all"><div className="absolute bottom-0 w-full bg-slate-700 h-full opacity-50"></div></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[60%]"><div className="absolute bottom-0 w-full bg-slate-700 h-[60%] opacity-50"></div></div>
<div className="w-full bg-green-500/20 rounded-t-sm h-[40%] border-t-2 border-green-500 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400 font-bold">Auto</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-slate-900/20 border-y border-white/5" id="technologie">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        L'Excellence <br/>
<span className="text-slate-500">au service de votre habitat.</span>
</h2>
<p className="text-slate-400 font-light text-lg mb-8 leading-relaxed">
                        Chez Smart Galé, chaque installation est une œuvre de précision. Nous intégrons les technologies les plus avancées avec un souci du détail inégalé.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Design &amp; Ergonomie</h4>
<p className="text-sm text-slate-500">Des interfaces intuitives et des équipements qui subliment votre intérieur.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:programming-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Intégration Sur-Mesure</h4>
<p className="text-sm text-slate-500">Une solution domotique unique, programmée selon vos habitudes de vie.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Service Premium</h4>
<p className="text-sm text-slate-500">Accompagnement exclusif et maintenance proactive de vos systèmes.</p>
</div>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-full blur-[100px] opacity-10"></div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-950 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 mb-4">
<iconify-icon icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl font-bold text-white mb-1">Confort</div>
<div className="text-xs text-slate-500">Absolu</div>
</div>
<div className="bg-slate-950 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 translate-y-8">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 mb-4">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<div className="text-2xl font-bold text-white mb-1">100%</div>
<div className="text-xs text-slate-500">Connecté</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="contact">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/10 blur-[100px] rounded-full -z-10"></div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
                    Prêt à élever<br/>
                    votre espace ?
                </h2>
<p className="text-slate-400 text-lg font-light mb-10 max-w-xl mx-auto">
                    Contactez-nous pour une étude personnalisée de votre projet domotique. L'élégance commence ici.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-medium hover:bg-amber-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] duration-300">
                        Discuter de mon projet
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                        Découvrir le showroom
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<iconify-icon className="text-amber-500" icon="solar:smart-home-angle-bold"></iconify-icon>
<span className="text-lg font-medium tracking-tight uppercase">Smart Galé</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        L'art de vivre intelligent. Nous transformons les habitations en espaces connectés, sécurisés et élégants.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Expertise</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Gestion d'éclairage</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Climatisation</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Sécurité</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Audiovisuel</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Société</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Showroom</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Légal</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600 gap-4">
<p>© 2024 Smart Galé. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
