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
      

<section className="py-20 lg:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 flex flex-col items-start">
<h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-gray-900 mb-6 leading-tight">
                        Nos services de toiture
                    </h1>
<p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                        Supreme Toiture propose des solutions complètes pour la réparation, la rénovation et l’entretien de votre toiture. Notre équipe intervient rapidement pour garantir la sécurité et la durabilité de votre habitation.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" href="#">
                        Demander un devis
                    </a>
</div>
<div className="w-full lg:w-1/2 relative">

<div className="absolute -inset-4 bg-orange-100/50 rounded-[3rem] blur-2xl transform -rotate-3 z-0"></div>
<img alt="Ouvrier sur un toit" className="relative z-10 w-full h-auto object-cover rounded-[2rem] shadow-xl aspect-[4/3] border border-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-2.5 h-2.5 bg-orange-400 rounded-sm"></div>
<span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Nos Expertises</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
                        Des solutions complètes pour votre toiture
                    </h2>
</div>
<div className="max-w-md lg:text-right">
<p className="text-lg text-gray-600 leading-relaxed">
                        Découvrez nos principaux services pour l’entretien, la réparation et la rénovation de toiture.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Urgence toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Intervention rapide pour sécuriser votre toiture en cas de fuite ou de dommage.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Réparation de toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Réparation des tuiles, ardoises et éléments endommagés avec les bons outils.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Rénovation de toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Rénovation complète ou partielle pour améliorer la durabilité de votre maison.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:drop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Étanchéité de toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Solutions professionnelles pour éviter les infiltrations d’eau et protéger l'habitat.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Isolation de toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Amélioration de l’isolation thermique de votre toiture pour plus d'économies.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Travaux de zinguerie</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Installation et réparation experte des éléments en zinc et gouttières.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:sparkles-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Nettoyage de toiture</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Nettoyage et entretien pour prolonger considérablement la durée de vie de votre toiture.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
<div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-[28px]" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Recherche de fuite</h3>
<p className="text-base text-gray-600 mb-8 flex-grow leading-relaxed">Détection précise de l’origine des infiltrations avant intervention ciblée.</p>
<a className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors" href="#">
                        Voir le service 
                        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 text-center mb-20">
                Comment se déroule une intervention
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">

<div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gray-200"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full flex items-center justify-center font-medium text-lg mb-8">
                        1
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Diagnostic</h3>
<p className="text-base text-gray-600 leading-relaxed max-w-xs">Inspection complète de la toiture pour identifier les problèmes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full flex items-center justify-center font-medium text-lg mb-8">
                        2
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Devis gratuit</h3>
<p className="text-base text-gray-600 leading-relaxed max-w-xs">Nous proposons une solution adaptée et transparente.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full flex items-center justify-center font-medium text-lg mb-8">
                        3
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Intervention</h3>
<p className="text-base text-gray-600 leading-relaxed max-w-xs">Nos couvreurs réalisent les travaux avec professionnalisme.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-gray-200 shadow-sm text-gray-900 rounded-full flex items-center justify-center font-medium text-lg mb-8">
                        4
                    </div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Vérification</h3>
<p className="text-base text-gray-600 leading-relaxed max-w-xs">Contrôle final pour garantir la qualité des travaux.</p>
</div>
</div>
</div>
</section>

<section className="py-12 pb-24">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-10 lg:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                        Besoin d’un couvreur professionnel ?
                    </h2>
<p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Contactez Supreme Toiture pour un devis gratuit ou une intervention rapide pour vos travaux de toiture.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors w-full sm:w-auto shadow-sm" href="#">
                            Demander un devis
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm" href="#">
                            Nous contacter
                        </a>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
