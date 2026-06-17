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
      

<div className="fixed inset-0 -z-20 overflow-hidden">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="" src="https://video-previews.elements.envatousercontent.com/eb24c8a7-8dcd-4b1e-901a-77f5887b5b0b/watermarked_preview/watermarked_preview.mp4"></video>
</div>

<div className="fixed inset-0 bg-slate-950/85 -z-10 backdrop-blur-[2px]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="h-10 w-10 shrink-0 relative flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<circle cx="50" cy="50" r="46" stroke="#001560" stroke-dasharray="80 20" strokeLinecap="round" strokeWidth="5" transform="rotate(45 50 50)"></circle>

<circle cx="50" cy="50" r="41" stroke="transparent" strokeWidth="4"></circle>

<circle cx="50" cy="50" fill="#001560" r="39"></circle>

<text fill="white" fontFamily="Arial, sans-serif" fontSize="26" font-weight="900" letter-spacing="1" text-anchor="middle" x="50" y="60">D.K.L</text>
</svg>
</div>
<span className="text-white font-medium tracking-tight text-sm">Developpement K.L.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#security">Sécurité &amp; Architecture</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="tel:4389790495">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                (438) 979-0495
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-white/10 text-slate-300 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                Disponible 24/7 pour urgences
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Solutions de toiture et <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">déneigement spécialisé.</span>
</h1>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Experts en toiture résidentielle, commerciale et industrielle. Spécialistes du déneigement de semi-remorques et structures architecturales sur le Grand Montréal.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Demander une soumission
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm" href="#services">
                    Nos Services
                </a>
</div>
<div className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-xs font-medium uppercase tracking-widest">
<span>Montréal</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span>Rive-Sud</span>
<span className="w-1 h-1 bg-slate-700 rounded-full"></span>
<span>Rive-Nord</span>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Nos Domaines d'Expertise</h2>
<p className="text-lg text-slate-400 max-w-xl">Une gamme complète de services pour vos bâtiments et équipements, du résidentiel à l'industriel lourd.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-slate-900 transition-all duration-300">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Installation de Toiture</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Service complet pour toitures résidentielles, commerciales et industrielles. Installation neuve et réfection.
                    </p>
</div>

<div className="group p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-slate-900 transition-all duration-300">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:snowflake" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Déneigement Spécialisé</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Déneigement de toitures commerciales et service unique de déneigement pour <span className="text-white font-medium">semi-remorques</span>.
                    </p>
</div>

<div className="group p-8 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-slate-900 transition-all duration-300">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-inner">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Revêtement Extérieur</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Installation professionnelle de revêtement pour améliorer l'esthétique et la protection de votre bâtiment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950" id="security">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
                        Division Spécialisée
                    </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
                        Sécurité &amp; Architecturale
                    </h2>
<p className="text-slate-400 text-xl mb-8 leading-relaxed font-light">
                        Déneigement K.L possède une division dédiée à l'installation de systèmes de sécurité en aluminium naturel, durables et robustes. Nos solutions autoportantes protègent vos infrastructures et votre personnel sans percer la membrane de toiture.
                    </p>
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4">
<span className="iconify text-indigo-400 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h4 className="text-base font-semibold text-white">Garde-corps Autoportants</h4>
<p className="text-sm text-slate-500 mt-1">Installation sans perforation pour une sécurité maximale.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-indigo-400 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h4 className="text-base font-semibold text-white">Murs-Écrans Architecturaux &amp; Acoustiques</h4>
<p className="text-sm text-slate-500 mt-1">Solutions visuelles et sonores autoportantes.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="iconify text-indigo-400 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h4 className="text-base font-semibold text-white">Accès Toiture Sécurisé</h4>
<p className="text-sm text-slate-500 mt-1">Escaliers, passerelles, échelles fixes (Type 1 et 2) et lignes d'avertissement.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-slate-900 rounded-3xl overflow-hidden border border-white/5">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center p-8">
<div className="w-24 h-24 bg-slate-800 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 flex items-center justify-center mx-auto mb-6">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="40"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Durable &amp; Robuste</h3>
<p className="text-base text-slate-500">Aluminium Naturel</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">Nos Services en Détail</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-5xl mx-auto">
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:hammer" data-width="20"></span>
<span className="text-base text-slate-300">Service d’installation de Toiture</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:layout-template" data-width="20"></span>
<span className="text-base text-slate-300">Service d’installation de Revêtement</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:truck" data-width="20"></span>
<span className="text-base text-slate-300 font-medium">Déneigement pour remorques</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:snowflake" data-width="20"></span>
<span className="text-base text-slate-300">Déneigement de toiture</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:shield" data-width="20"></span>
<span className="text-base text-slate-300">Garde-corps Autoportants</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all">
<span className="iconify text-slate-500" data-icon="lucide:move-vertical" data-width="20"></span>
<span className="text-base text-slate-300">Échelles Fixes &amp; Passerelles</span>
</div>
</div>
</div>
</section>

<section className="bg-black/20 text-white py-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Prêt à démarrer votre projet ?</h2>
<p className="text-slate-400 mb-8 max-w-md text-xl font-light">
                        Que ce soit pour une toiture industrielle, le déneigement de votre flotte de camions ou la sécurisation de vos accès, notre équipe est prête.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="iconify text-slate-300" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Téléphone</p>
<a className="text-lg font-medium hover:text-white transition-colors" href="tel:4389790495">(438)-979-0495</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="iconify text-slate-300" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
<a className="text-lg font-medium hover:text-white transition-colors" href="mailto:Kloiseau@outlook.com">Kloiseau@outlook.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<span className="iconify text-slate-300" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Zones desservies</p>
<span className="text-base text-slate-300">Montréal, Rive-Sud, Rive-Nord</span>
</div>
</div>
</div>
</div>
<div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Prénom</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-slate-600" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Nom</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-slate-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Email</label>
<input className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-slate-600" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1">Service requis</label>
<div className="relative">
<select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white appearance-none cursor-pointer">
<option className="bg-slate-900">Toiture</option>
<option className="bg-slate-900">Déneigement Remorque</option>
<option className="bg-slate-900">Déneigement Toiture</option>
<option className="bg-slate-900">Sécurité &amp; Garde-corps</option>
</select>
<span className="iconify absolute right-4 top-3.5 text-slate-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<button className="w-full bg-white text-slate-950 font-semibold py-3 rounded-lg hover:bg-slate-200 transition-colors mt-2 text-sm shadow-lg shadow-white/5">
                            Envoyer la demande
                        </button>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Developpement K.L. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Termes</a>
</div>
</div>
</div>
</section>

    </>
  );
}
