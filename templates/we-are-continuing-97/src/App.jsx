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
      

<nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">OREKA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Accueil</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Notre équipe</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Nos missions</a>
<a className="text-base font-medium text-gray-900" href="#">Articles</a>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-base font-medium text-white hover:bg-gray-800 transition-colors" href="#">
                Prendre contact
            </a>

<button className="md:hidden p-2 text-gray-500 hover:text-gray-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<main className="flex-grow">

<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Articles</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                Retrouvez les actualités du cabinet, les projets de nos clients ainsi que nos partages autour de l’expertise comptable, de l’audit et de l’accompagnement des entreprises.
            </p>
</section>

<section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
<div className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-50/50 rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
<div className="overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[4/3] w-full relative">
<img alt="Artisan au travail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex flex-col justify-center lg:pr-8 py-4">
<div className="flex items-center gap-4 mb-5">
<span className="inline-flex items-center rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">Réussite Client</span>
<span className="text-base text-gray-500">12 Novembre 2023</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-5 group-hover:text-gray-700 transition-colors">Raphaël Bapst, Meilleur Ouvrier de France 2023</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Découvrez comment notre cabinet a accompagné Raphaël Bapst dans la structuration financière de son entreprise. Un partenariat de confiance qui lui a permis de se concentrer sur l'excellence de son art et d'atteindre la consécration ultime.
                    </p>
<div>
<span className="inline-flex items-center justify-center rounded-lg bg-white border border-gray-200 px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 transition-colors">
                            Lire l'article
                        </span>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300" href="#">
<div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
<img alt="Conférence" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 sm:p-8 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Actualité</span>
<span className="text-sm text-gray-500">24 Octobre 2023</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Retour sur la conférence ComptaTech</h3>
<p className="text-base text-gray-600 mb-8 flex-1">
                            Nos équipes étaient présentes pour échanger sur la digitalisation de la profession et l'intégration des nouveaux outils technologiques au service de nos clients.
                        </p>
<div className="flex items-center text-base font-medium text-gray-900">
                            Découvrir <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300" href="#">
<div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
<img alt="Équipe en réunion" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 sm:p-8 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Cabinet</span>
<span className="text-sm text-gray-500">05 Septembre 2023</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">L'évolution de notre pôle social</h3>
<p className="text-base text-gray-600 mb-8 flex-1">
                            Face aux mutations du droit social, le cabinet OREKA renforce ses équipes pour vous proposer un accompagnement RH toujours plus pointu et réactif.
                        </p>
<div className="flex items-center text-base font-medium text-gray-900">
                            Découvrir <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300" href="#">
<div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
<img alt="Commerce de proximité" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 sm:p-8 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-gray-50 border border-gray-100 px-3 py-1 text-xs font-medium text-gray-600">Client</span>
<span className="text-sm text-gray-500">18 Août 2023</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">Croissance fulgurante pour Maison T</h3>
<p className="text-base text-gray-600 mb-8 flex-1">
                            Analyse de la stratégie mise en place avec les dirigeants de cette jeune marque de décoration pour structurer leur développement national sereinement.
                        </p>
<div className="flex items-center text-base font-medium text-gray-900">
                            Découvrir <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
</div>
</section>

<section className="border-t border-gray-100 py-24 px-4 sm:px-6 lg:px-8 text-center bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    Un besoin en expertise comptable ou en audit ?
                </h2>
<p className="text-lg text-gray-500 mb-10">
                    Discutons de vos enjeux actuels et découvrez comment notre équipe peut vous apporter de la clarté et de la sérénité avec une approche humaine et structurée.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors" href="#">
                        Prendre contact
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white border border-gray-200 px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 transition-colors" href="#">
                        Voir nos missions
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">OREKA</h3>
<p className="text-base text-gray-500 mb-6 leading-relaxed">
                        Cabinet d'expertise comptable et de commissariat aux comptes accompagnant les entrepreneurs avec rigueur et proximité.
                    </p>
<div className="flex items-start gap-3 text-gray-500">
<i className="w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-sm">Membre de l'ordre des experts-comptables</span>
</div>
</div>

<div>
<h4 className="text-base font-semibold text-gray-900 mb-4">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Accueil</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Notre équipe</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Nos missions</a></li>
<li><a className="text-base text-gray-900 font-medium" href="#">Articles</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-gray-900 mb-4">Expertises</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Conseil stratégique</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Expertise comptable</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Audit &amp; CAC</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Accompagnement RH</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-gray-900 mb-4">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-gray-500">
<i className="w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>63 Avenue des Vosges<br/>67000 Strasbourg</span>
</li>
<li className="flex items-center gap-3 text-base text-gray-500">
<i className="w-5 h-5 flex-shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span>03 88 00 00 00</span>
</li>
<li className="flex items-center gap-3 text-base text-gray-500">
<i className="w-5 h-5 flex-shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-gray-900 transition-colors" href="mailto:contact@oreka.expert">contact@oreka.expert</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
<p>© 2024 OREKA. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-gray-900 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-gray-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
