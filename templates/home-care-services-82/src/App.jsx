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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">
                ANICA
            </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-600" href="#contact">Contact</a>
</div>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" href="tel:0658040460">
                06 58 04 04 60
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-200/40 via-gray-50 to-gray-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Aide à domicile • Poissy &amp; 30km</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                        Votre bien-être à domicile, <span className="text-gray-500">notre priorité.</span>
</h1>
<p className="text-lg md:text-xl font-medium tracking-tight text-gray-600 mb-6 max-w-xl">
                        Un accompagnement sur-mesure pour vous ou vos proches, en toute sécurité et avec bienveillance.
                    </p>
<p className="text-base text-gray-500 mb-10 max-w-lg leading-relaxed">
                        Chez Anica, nous mettons notre expertise au service de votre autonomie. Ménage, aide aux seniors, garde d'enfants ou retour d'hospitalisation : nous sommes là pour vous faciliter le quotidien.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors shadow-md shadow-gray-900/10" href="#services">
                            Découvrir nos services
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-gray-900 border border-gray-200 text-base font-medium hover:bg-gray-50 transition-colors" href="#contact">
                            Demander un devis
                        </a>
</div>
</div>

<div className="relative mt-8 lg:mt-0 lg:ml-auto w-full max-w-md mx-auto lg:max-w-none">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-200/50 aspect-[4/5] lg:aspect-[3/4]">
<img alt="Accompagnement et aide à domicile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-fade-in-up">
<div className="flex -space-x-3">
<img alt="Client 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1445384763658-0400939829cd?w=320&amp;q=80"/>
<img alt="Client 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Client 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="text-xs font-medium text-gray-900 mt-1">Recommandé par nos clients</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-gray-200 bg-white relative z-10">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Devis</h3>
<p className="text-sm text-gray-500 mt-0.5">100% Gratuit</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Déplacement</h3>
<p className="text-sm text-gray-500 mt-0.5">Inclus à domicile</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Disponibilité</h3>
<p className="text-sm text-gray-500 mt-0.5">7 Jours sur 7</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="24" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Interventions</h3>
<p className="text-sm text-gray-500 mt-0.5">Week-ends &amp; jours fériés</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 col-span-2 md:col-span-1 lg:col-span-1">
<div className="h-12 w-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Suivi Qualité</h3>
<p className="text-sm text-gray-500 mt-0.5">Accompagnement quotidien</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Nos services d’aide à domicile
                </h2>
<p className="text-base text-gray-500">
                    Des professionnels de confiance pour vous accompagner dans toutes les étapes de la vie.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Entretien de la maison" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:home-smile-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Entretien de la maison</h3>
<p className="text-sm text-gray-500 mb-4">Ménage, repassage et entretien régulier de votre domicile à Poissy pour un intérieur toujours impeccable.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Jardinage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:leaf-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Jardinage</h3>
<p className="text-sm text-gray-500 mb-4">Tonte, taille de haies, et entretien de vos espaces verts pour profiter pleinement de votre extérieur.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Garde d'enfants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:users-group-rounded-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Garde d'enfants</h3>
<p className="text-sm text-gray-500 mb-4">Sortie d'école, aide aux devoirs et activités adaptées. Des professionnels de confiance pour vos petits.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Soins aux seniors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565096413625-af1d38174759?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:heart-pulse-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Aide aux seniors</h3>
<p className="text-sm text-gray-500 mb-4">Aide au lever/coucher, préparation des repas et accompagnement pour maintenir l'autonomie à domicile.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Accompagnement handicap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505876104692-2f34b9d54303?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:wheelchair-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Handicap enfant &amp; adulte</h3>
<p className="text-sm text-gray-500 mb-4">Assistance spécifique, aide à la mobilité et soins adaptés pour faciliter la vie quotidienne de tous.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg overflow-hidden flex flex-col">
<div className="h-52 w-full overflow-hidden relative">
<img alt="Retour hospitalisation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1633219664572-473fd988a44f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 relative flex-1 flex flex-col">
<div className="absolute -top-7 right-6 h-14 w-14 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon height="26" icon="solar:bed-linear" width="26"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 mt-2">Retour hospitalisation</h3>
<p className="text-sm text-gray-500 mb-4">Une présence rassurante et une aide technique pour faciliter votre convalescence dans votre environnement.</p>
<a className="mt-auto text-sm font-medium text-gray-900 inline-flex items-center gap-1.5 hover:text-gray-600 transition-colors" href="#contact">
                            Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors shadow-md" href="#contact">
                    Parlez-nous de vos besoins
                </a>
</div>
</div>
</section>

<section className="bg-white border-t border-gray-200 py-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-3">ANICA</h2>
<p className="text-lg text-gray-500 max-w-lg">Vos services professionnels d'aide à la personne à domicile, proches de vous.</p>
</div>
<div className="flex-shrink-0">
<a className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-900 transition-colors" href="tel:0658040460">
<div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Appel direct</p>
<p className="text-xl font-semibold text-gray-900">06 58 04 04 60</p>
</div>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="h-10 w-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6">
<iconify-icon height="22" icon="solar:letter-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Devis &amp; Contact</h3>
<p className="text-sm text-gray-500 mb-4">Besoin d'un renseignement ou d'un devis gratuit ? Nous vous répondons rapidement.</p>
<a className="text-sm font-medium text-gray-900 hover:underline" href="mailto:contact@anica.fr">Demander par email</a>
</div>

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="h-10 w-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6">
<iconify-icon height="22" icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Horaires d'ouverture</h3>
<p className="text-sm text-gray-500 mb-4">Notre accueil téléphonique et nos équipes sont disponibles 7 jours sur 7.</p>
<p className="text-sm font-medium text-gray-900">08:00 - 20:00, Lundi au Dimanche</p>
</div>

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="h-10 w-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6">
<iconify-icon height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Zone d'intervention</h3>
<p className="text-sm text-gray-500 mb-4">Nous nous déplaçons directement chez vous pour évaluer vos besoins et intervenir.</p>
<p className="text-sm font-medium text-gray-900">Poissy et jusqu'à 30 km aux alentours</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white py-10 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between md:flex-row gap-4">
<p className="text-xs text-gray-400">© 2024 Anica. Tous droits réservés.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Mentions légales</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</footer>

    </>
  );
}
