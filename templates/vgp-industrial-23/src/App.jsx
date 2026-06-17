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
      
{
"@context": "https://schema.org",
"@graph": [
{
"@type": "LocalBusiness",
"@id": "https://emavgp.fr/#organization",
"name": "EMA VGP",
"description": "Entreprise indépendante spécialisée dans le contrôle réglementaire des équipements, engins et accessoires de levage.",
"telephone": "06 21 95 25 17",
"address": {
"@type": "PostalAddress",
"streetAddress": "7 Rte de Bouillancourt",
"addressLocality": "Gratibus",
"postalCode": "80500",
"addressRegion": "Hauts-de-France",
"addressCountry": "FR"
}
}
]
}



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
      

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 z-50 flex gap-2 justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
<a className="flex-1 flex justify-center items-center gap-2 bg-stone-100 text-stone-900 py-3 rounded-xl font-normal text-base" href="tel:0621952517">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i> Appeler
        </a>
<a className="flex-1 flex justify-center items-center gap-2 bg-stone-900 text-white py-3 rounded-xl font-normal text-base" href="#contact">
            Devis 24h
        </a>
</div>

<div className="sm:p-4 lg:p-6 max-w-[1600px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2">

<header className="min-h-[700px] overflow-hidden bg-stone-900 w-full h-[95vh] rounded-[2rem] relative shadow-2xl">

<video autoplay="" className="opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 pointer-events-none" loop="" muted="" playsinline="">
<source src="https://cdn.higgsfield.ai/user_3AvFCf0aoS6DTSHhwoX3QgsDzIR/hf_20260331_191029_757b3a01-f81e-4c78-9bd7-b00d22ff154d_rhhq.mp4" type="video/mp4"/>
</video>

<div className="bg-gradient-to-b from-black/40 via-black/20 to-black/80 absolute top-0 right-0 bottom-0 left-0"></div>

<nav className="z-20 flex sm:px-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="flex gap-2 items-center">
<span className="text-2xl font-medium text-white tracking-tight">EMA VGP</span>
</div>

<div className="hidden md:flex gap-1 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-2 pb-1.5 pl-2 backdrop-blur-md items-center">
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-base text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#pourquoi">Enjeux</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-base text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#prestations">Prestations</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-base text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#avis">Avis</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-base text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">Contact</a>
</div>

<button className="md:hidden p-2 bg-white/10 backdrop-blur-md rounded-full text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>

<div className="hidden md:flex items-center gap-3">
<div className="flex items-center gap-2 text-white/90 text-base pr-4">
<i className="w-4 h-4 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="font-normal">4,85/5 Google</span>
</div>
<a className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white pl-5 pr-5 py-2.5 rounded-full transition-colors hover:bg-white/20" href="tel:0621952517">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-base font-normal">06 21 95 25 17</span>
</a>
<a className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105" href="#contact">
<span className="text-base font-normal text-stone-900">Devis gratuit 24h</span>
<span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</nav>

<div className="sm:p-10 z-10 flex flex-col md:flex-row gap-8 w-full pt-6 pr-6 pb-12 pl-6 absolute bottom-0 left-0 gap-x-8 gap-y-8 items-end justify-between">

<div className="max-w-3xl">
<span className="inline-block uppercase text-sm font-normal text-white tracking-wider bg-white/20 border-white/10 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">Partenaire de votre sécurité</span>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-normal text-white tracking-tight mb-6">VGP &amp; Contrôle Périodique à Amiens — Experts Agréés</h1>
<p className="leading-relaxed text-xl font-extralight text-white/90 max-w-xl mb-8">Spécialiste du contrôle réglementaire des équipements, engins et accessoires de levage. Intervention sous 24h en Hauts-de-France et Île-de-France.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-6 pr-2 py-2 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300 w-fit" href="#contact">
<span className="text-lg font-normal">Demander un devis gratuit</span>
<span className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>

<div className="flex flex-col gap-4 w-full md:w-auto">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white text-base font-normal">+10 ans d'expertise</p>
<p className="text-white/60 text-sm font-extralight">M. Mazy, contrôleur agréé</p>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white text-base font-normal">Intervention sous 24h</p>
<p className="text-white/60 text-sm font-extralight">Réactivité garantie</p>
</div>
</div>
</div>
</div>
</header>

<section className="mt-12 mb-8 w-full">
<div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 opacity-50 grayscale px-6">
<img alt="Figma" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300" src="https://www.shadcnblocks.com/images/block/logos/figma.svg"/>
<img alt="Next.js" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300" src="https://www.shadcnblocks.com/images/block/logos/nextjs.svg"/>
<img alt="Supabase" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300" src="https://www.shadcnblocks.com/images/block/logos/supabase.svg"/>
<img alt="Vercel" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Figma" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300 hidden md:block" src="https://www.shadcnblocks.com/images/block/logos/figma.svg"/>
<img alt="Next.js" className="h-7 w-auto hover:opacity-100 transition-opacity duration-300 hidden md:block" src="https://www.shadcnblocks.com/images/block/logos/nextjs.svg"/>
</div>
</section>

<section className="mt-20 px-4 sm:px-6" id="pourquoi">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-6 flex flex-col justify-center">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-2">Enjeux &amp; Réglementation</span>
<h2 className="sm:text-5xl text-4xl font-normal text-stone-900 tracking-tight mb-6">Pourquoi réaliser vos VGP périodiques ?</h2>
<p className="leading-relaxed text-xl font-extralight text-stone-600 mb-8">La vérification de vos équipements n'est pas qu'une formalité, c'est le pilier de la sécurité de vos équipes et de la pérennité de votre activité. Les enjeux se divisent en trois axes majeurs.</p>

<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-900">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-stone-900 mb-1 tracking-tight">Conformité réglementaire</h3>
<p className="text-stone-500 text-base font-extralight leading-relaxed">Conformément à l'Arrêté du 1er mars 2004 et l'Article L.4321-1 du Code du Travail, l'employeur est tenu de maintenir en état de conformité ses équipements de travail.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
<i className="w-6 h-6" data-lucide="triangle-alert" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-stone-900 mb-1 tracking-tight">Risques financiers &amp; pénaux</h3>
<p className="text-stone-500 text-base font-extralight leading-relaxed">L'absence de VGP vous expose à une amende de 3 750 € par salarié. En cas d'accident corporel, vous risquez jusqu'à 5 ans de prison et 75 000 € d'amende.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
<i className="w-6 h-6" data-lucide="shield-plus" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-normal text-stone-900 mb-1 tracking-tight">Sécurité &amp; Continuité</h3>
<p className="text-stone-500 text-base font-extralight leading-relaxed">Anticipez les pannes et protégez vos opérateurs. Un matériel bien entretenu assure la continuité de votre production sans arrêt imprévu.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative h-full min-h-[500px]">
<div className="relative w-full h-full rounded-[2rem] overflow-hidden group shadow-xl border border-stone-200">
<img alt="Des fondations solides pour un succès durable - EMA VGP" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95d2509d-6b11-428e-b1ab-1434da00c9d6_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="sm:px-6 mt-32 pr-4 pl-4" id="prestations">
<div className="flex flex-col md:flex-row mb-12 items-end justify-between">
<div className="max-w-2xl">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-2">Nos Services</span>
<h2 className="sm:text-5xl text-4xl font-normal text-stone-900 tracking-tight mb-4">Contrôles réglementaires de levage</h2>
<p className="font-extralight text-stone-600 text-xl">Des interventions rapides et rigoureuses pour garantir la conformité totale de votre parc matériel.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-3xl p-8 relative shadow-sm border border-stone-100 flex flex-col h-full">
<div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="clipboard-check" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<h3 className="text-2xl font-normal text-stone-900 mb-4 tracking-tight">Vérification Générale Périodique (VGP)</h3>
<p className="text-base font-extralight text-stone-500 mb-8 leading-relaxed">Examen obligatoire tous les 6 ou 12 mois pour évaluer l'état de conservation de vos équipements et repérer toute défectuosité susceptible d'entraîner un danger.</p>
</div>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex gap-2 text-base font-normal text-stone-900 w-full border-stone-200 border rounded-xl pt-4 pb-4 items-center justify-center mt-auto" href="#contact">
                        Devis VGP <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-3xl p-8 relative shadow-sm border border-stone-100 flex flex-col h-full">
<div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<h3 className="text-2xl font-normal text-stone-900 mb-4 tracking-tight">Contrôle de Mise en Service</h3>
<p className="text-base font-extralight text-stone-500 mb-8 leading-relaxed">Vérification obligatoire avant la première utilisation d'un équipement de travail neuf ou d'occasion dans votre établissement, garantissant son installation sécurisée.</p>
</div>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex gap-2 text-base font-normal text-stone-900 w-full border-stone-200 border rounded-xl pt-4 pb-4 items-center justify-center mt-auto" href="#contact">
                        Demander un contrôle <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-3xl p-8 relative shadow-sm border border-stone-100 flex flex-col h-full">
<div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="rotate-cw" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<h3 className="text-2xl font-normal text-stone-900 mb-4 tracking-tight">Contrôle de Remise en Service</h3>
<p className="text-base font-extralight text-stone-500 mb-8 leading-relaxed">Examen requis après toute opération de démontage/remontage, modification technique importante, ou après un accident lié à la défaillance de l'équipement.</p>
</div>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex gap-2 text-base font-normal text-stone-900 w-full border-stone-200 border rounded-xl pt-4 pb-4 items-center justify-center mt-auto" href="#contact">
                        Planifier une visite <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6">
<div className="bg-white rounded-[2rem] p-8 sm:p-16 border border-stone-100 shadow-sm text-center">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-3">Notre Expertise</span>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-stone-900 mb-12">Équipements et engins pris en charge</h2>
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="box" strokeWidth="1.5"></i> Chariots élévateurs
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i> Nacelles élévatrices
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="wrench" strokeWidth="1.5"></i> Matériel de garage
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="building" strokeWidth="1.5"></i> Portiques
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i> Engins TP
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="server" strokeWidth="1.5"></i> Engins BT &amp; industriels
                    </div>
<div className="px-6 py-3.5 bg-stone-50 border border-stone-100 rounded-full text-stone-700 text-base font-normal flex items-center gap-2">
<i className="w-4 h-4" data-lucide="link" strokeWidth="1.5"></i> Accessoires de levage
                    </div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-stone-900 rounded-[2rem] mt-32 relative">
<div className="absolute inset-0 opacity-20">
<img alt="Détail technique VGP" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/60"></div>
<div className="sm:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 z-10 pt-12 pr-8 pb-12 pl-8 relative gap-x-12 gap-y-12 items-center">
<div>
<span className="uppercase block text-sm font-normal text-stone-400 tracking-wide mb-3">Livrables &amp; Traçabilité</span>
<h2 className="text-5xl font-normal tracking-tight mb-6">Que comporte le contrôle ?</h2>
<p className="leading-relaxed text-xl font-extralight text-stone-300 mb-10">À l'issue de chaque intervention de VGP, de mise ou de remise en service, M. Mazy vous remet les documents légaux essentiels pour prouver votre conformité en cas de contrôle de l'Inspection du Travail.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0 text-blue-400">
<i className="w-6 h-6" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">Le registre des contrôles techniques</h3>
<p className="text-base font-extralight text-stone-400 leading-relaxed">Document centralisant l'ensemble des interventions effectuées. Il garantit une traçabilité parfaite de la gestion de votre parc d'équipements.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0 text-orange-400">
<i className="w-6 h-6" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-normal text-white mb-2 tracking-tight">Le rapport de vérifications</h3>
<p className="text-base font-extralight text-stone-400 leading-relaxed">Véritable carnet d'entretien détaillé de chaque machine, reprenant les points de contrôle, les anomalies détectées et les actions correctives recommandées.</p>
</div>
</div>
</div>
</div>
<div className="hidden lg:block">
<div className="bg-white/10 backdrop-blur-md p-10 rounded-[2rem] border border-white/10">
<i className="w-8 h-8 text-emerald-400 mb-6" data-lucide="shield-alert" strokeWidth="1.5"></i>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight">Soyez serein face aux inspections</h3>
<p className="text-base font-extralight text-stone-300 leading-relaxed">Avec EMA VGP, vos registres sont toujours à jour. Nous vous alertons également sur les prochaines échéances pour que vous n'ayez jamais de retard sur vos obligations légales.</p>
</div>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-3">Engagements</span>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-stone-900 mb-6">L'exigence au service de votre sérénité</h2>
<p className="font-extralight text-stone-600 text-xl">En tant que structure indépendante, EMA VGP s'engage personnellement sur la qualité de chaque intervention.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-stone-100/50 p-8 rounded-3xl border border-stone-200">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-900 shadow-sm">
<i className="w-5 h-5" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-stone-900 mb-3">Professionnalisme</h3>
<p className="text-base font-extralight text-stone-500">Un interlocuteur unique, ponctuel et transparent de la prise de RDV à la remise du rapport.</p>
</div>
<div className="bg-stone-100/50 p-8 rounded-3xl border border-stone-200">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-900 shadow-sm">
<i className="w-5 h-5" data-lucide="contact" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-stone-900 mb-3">Compétence</h3>
<p className="text-base font-extralight text-stone-500">Plus de 10 ans d'expertise terrain garantissant une analyse fine et juste de vos équipements.</p>
</div>
<div className="bg-stone-100/50 p-8 rounded-3xl border border-stone-200">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-900 shadow-sm">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-stone-900 mb-3">Rigueur</h3>
<p className="text-base font-extralight text-stone-500">Application stricte des textes de loi, sans compromis sur la sécurité de vos opérateurs.</p>
</div>
<div className="bg-stone-100/50 p-8 rounded-3xl border border-stone-200">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-900 shadow-sm">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-stone-900 mb-3">Proximité</h3>
<p className="text-base font-extralight text-stone-500">Implantés dans la Somme, nous garantissons des interventions sous 24h en HDF et IDF.</p>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-3">Galerie</span>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-stone-900 mb-6">Nos interventions sur le terrain</h2>
<p className="font-extralight text-stone-600 text-xl">Un aperçu de nos contrôles VGP sur tous types d'équipements de levage et de manutention.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 border border-stone-200">
<img alt="Contrôle chariot élévateur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 border border-stone-200">
<img alt="Inspection engin TP" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 border border-stone-200">
<img alt="Vérification mécanique" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 border border-stone-200">
<img alt="Contrôle nacelle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 sm:col-span-2 lg:col-span-1 border border-stone-200">
<img alt="Équipement de levage entrepôt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="rounded-[2rem] overflow-hidden aspect-[4/3] group relative bg-stone-100 sm:col-span-2 lg:col-span-1 border border-stone-200">
<img alt="VGP sur site industriel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6" id="avis">
<div className="flex flex-col md:flex-row items-end justify-between mb-16">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="flex text-amber-400">
<i className="w-5 h-5 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-stone-600">4,85/5 sur Google</span>
</div>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-stone-900">Ils nous font confiance</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-base font-normal text-stone-900 hover:underline" href="#" rel="noopener noreferrer" target="_blank">
                    Voir tous les avis Google <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-6">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-extralight text-stone-600 italic mb-8 flex-1">« Top Service ! M. Mazy est venu très rapidement avec le devis et prise de RDV. Visite au TOP ! Il nous a donné des conseils et l'information nécessaire pour mettre notre chariot en conformité. Nous le recommandons. »</p>
<div className="mt-auto">
<p className="text-base font-normal text-stone-900">Dumeige Rosie</p>
<p className="text-sm text-stone-500">Access-Ability</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-6">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-extralight text-stone-600 italic mb-8 flex-1">« M. Mazy est très professionnel et ponctuel, une personne avec de grandes valeurs, je recommande cette entreprise. »</p>
<div className="mt-auto">
<p className="text-base font-normal text-stone-900">Gavel</p>
<p className="text-sm text-stone-500">Client vérifié</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-6">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-extralight text-stone-600 italic mb-8 flex-1">« Entreprise très réactive et sérieuse. Je n'hésiterai pas à travailler de nouveau avec M. Mazy. »</p>
<div className="mt-auto">
<p className="text-base font-normal text-stone-900">Charlotte Masson</p>
<p className="text-sm text-stone-500">Cliente vérifiée</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
<div className="flex text-amber-400 mb-6">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-extralight text-stone-600 italic mb-8 flex-1">« Première mise en service chez un nouveau client, la qualité et le sérieux sont au rendez-vous. Mon client a apprécié toute notre intervention et la rapidité d'exécution. »</p>
<div className="mt-auto">
<p className="text-base font-normal text-stone-900">Alain</p>
<p className="text-sm text-stone-500">SIE LEVAGE</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-base font-normal text-stone-900 hover:underline border border-stone-200 px-6 py-4 rounded-xl bg-white" href="#" rel="noopener noreferrer" target="_blank">
                    Voir tous les avis Google <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="mt-32 px-4 sm:px-6">
<div className="bg-stone-900 text-white rounded-[2rem] p-8 sm:p-16 lg:p-20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between">
<div className="max-w-xl">
<span className="uppercase block text-sm font-normal text-stone-400 tracking-wide mb-3">Intervention Express</span>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-8">Partout en Hauts-de-France et Île-de-France sous 24h</h2>
<p className="font-extralight text-stone-300 text-xl mb-10">Nous sommes basés près d'Amiens (80), ce qui nous permet d'intervenir extrêmement rapidement sur l'ensemble du nord parisien et la région HDF.</p>
<a className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full hover:bg-stone-100 transition-colors font-normal text-lg" href="tel:0621952517">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i>
                            Vérifier ma zone
                        </a>
</div>
<div className="flex-1 grid grid-cols-2 gap-10">
<div>
<h3 className="font-normal text-white mb-6 border-b border-white/10 pb-3 text-lg tracking-tight">Hauts-de-France</h3>
<ul className="space-y-3 text-base font-extralight text-stone-400">
<li>Somme (80) — <strong className="text-white font-normal">Amiens</strong></li>
<li>Oise (60) — <strong className="text-white font-normal">Compiègne, Beauvais</strong></li>
<li>Nord (59) — <strong className="text-white font-normal">Lille</strong></li>
<li>Aisne (02) — <strong className="text-white font-normal">Saint-Quentin</strong></li>
<li>Pas-de-Calais (62)</li>
</ul>
</div>
<div>
<h3 className="font-normal text-white mb-6 border-b border-white/10 pb-3 text-lg tracking-tight">Île-de-France</h3>
<ul className="space-y-3 text-base font-extralight text-stone-400">
<li>Seine-et-Marne (77) — <strong className="text-white font-normal">Meaux, Marne-la-Vallée</strong></li>
<li>Essonne (91) — <strong className="text-white font-normal">Corbeil-Essonnes</strong></li>
<li>Val-d'Oise (95) — <strong className="text-white font-normal">Cergy-Pontoise</strong></li>
<li>Hauts-de-Seine (92) — <strong className="text-white font-normal">Gennevilliers</strong></li>
<li>Seine-Saint-Denis (93)</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-normal tracking-tight text-stone-900 mb-6">Questions Fréquentes (FAQ)</h2>
<p className="font-extralight text-stone-600 text-xl">Tout ce que vous devez savoir sur vos obligations de contrôle de levage.</p>
</div>
<div className="space-y-4">
<details className="group bg-white border border-stone-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-normal text-lg text-stone-900 tracking-tight">
                        Qu'est-ce qu'une VGP (Vérification Générale Périodique) ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base font-extralight text-stone-600 leading-relaxed border-t border-stone-100 pt-5">
                        La VGP est un contrôle réglementaire obligatoire défini par le Code du Travail. Elle vise à déceler toute détérioration ou anomalie sur les équipements de levage et engins de chantier afin de prévenir les accidents du travail. Ce n'est pas une simple maintenance, mais un véritable audit de sécurité.
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-normal text-lg text-stone-900 tracking-tight">
                        Quelle est la fréquence obligatoire d'une VGP ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base font-extralight text-stone-600 leading-relaxed border-t border-stone-100 pt-5">
                        La périodicité dépend du type d'équipement :<br/>
                        - <strong>Tous les 6 mois</strong> pour les équipements de levage de charge ou de personnes (chariots élévateurs, nacelles, grues...).<br/>
                        - <strong>Tous les 12 mois</strong> pour les engins de terrassement (pelleteuses, chargeuses) et les accessoires de levage (élingues, palonniers).
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-normal text-lg text-stone-900 tracking-tight">
                        Que risque une entreprise qui ne réalise pas ses VGP ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base font-extralight text-stone-600 leading-relaxed border-t border-stone-100 pt-5">
                        En cas d'inspection du travail, le défaut de VGP entraîne une amende forfaitaire de 3 750 € multipliée par le nombre de salariés concernés. Pire, en cas d'accident du travail dû à une défaillance de la machine, la responsabilité pénale du dirigeant est engagée (jusqu'à 5 ans d'emprisonnement et 75 000 € d'amende pour homicide ou blessures involontaires).
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-normal text-lg text-stone-900 tracking-tight">
                        Combien coûte une VGP ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base font-extralight text-stone-600 leading-relaxed border-t border-stone-100 pt-5">
                        Le coût d'une VGP dépend du type de matériel (chariot, nacelle, grue) et du nombre d'engins à contrôler sur un même site. Chez EMA VGP, nous établissons des devis personnalisés, gratuits et sans engagement sous 24h, avec une tarification transparente et optimisée selon votre flotte.
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-normal text-lg text-stone-900 tracking-tight">
                        Quelle est la différence entre VGP, mise en service et remise en service ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base font-extralight text-stone-600 leading-relaxed border-t border-stone-100 pt-5">
                        - <strong>Mise en service :</strong> Obligatoire avant la toute première utilisation d'un matériel (neuf ou occasion) dans votre entreprise.<br/>
                        - <strong>VGP (Vérification Générale Périodique) :</strong> Contrôle de routine (tous les 6 ou 12 mois).<br/>
                        - <strong>Remise en service :</strong> Exigée après un événement majeur (démontage, modification technique, accident ou réparation importante).
                    </div>
</details>
</div>
</section>

<section className="mt-32 mb-16" id="contact">
<div className="bg-white rounded-[2rem] p-8 sm:p-16 lg:p-20 shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="lg:w-1/2">
<span className="uppercase block text-sm font-normal text-stone-500 tracking-wide mb-4">Intervention rapide</span>
<h2 className="text-5xl sm:text-6xl font-normal tracking-tight text-stone-900 mb-8">Besoin d'un devis VGP ? Obtenez une réponse sous 24h</h2>
<p className="text-stone-500 text-xl font-extralight mb-12 max-w-md">Contactez M. Mazy directement. Devis gratuit, sans engagement. Nous planifions l'intervention selon vos disponibilités pour minimiser l'impact sur votre production.</p>
<div className="space-y-8">
<div className="flex items-center gap-6 group">
<div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-base text-stone-400 mb-1">Téléphone (Direct)</span>
<a className="text-2xl font-normal text-stone-900 hover:underline tracking-tight" href="tel:0621952517">06 21 95 25 17</a>
</div>
</div>
<div className="flex items-center gap-6 group">
<div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-base text-stone-400 mb-1">Email</span>
<a className="hover:underline text-2xl font-normal text-stone-900 tracking-tight" href="mailto:contact@emavgp.fr">contact@emavgp.fr</a>
</div>
</div>
<div className="flex items-center gap-6 group">
<div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-base text-stone-400 mb-1">Siège (Intervention HDF &amp; IDF)</span>
<address className="not-italic text-xl font-normal text-stone-900 tracking-tight">7 Rte de Bouillancourt<br/>80500 Gratibus</address>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-stone-50 rounded-[2rem] p-10">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 uppercase tracking-wide" htmlFor="nom">Nom de l'entreprise</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-shadow outline-none" id="nom" placeholder="Votre société" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 uppercase tracking-wide" htmlFor="tel">Téléphone</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-shadow outline-none" id="tel" placeholder="06 XX XX XX XX" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-shadow outline-none" id="email" placeholder="contact@entreprise.fr" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 uppercase tracking-wide" htmlFor="equipement">Type d'équipement concerné</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 text-base text-stone-900 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-shadow outline-none appearance-none pr-12" id="equipement">
<option disabled="" selected="" value="">Sélectionnez (Chariots, Nacelles...)</option>
<option value="chariots">Chariots élévateurs</option>
<option value="nacelles">Nacelles élévatrices</option>
<option value="engins_tp">Engins TP</option>
<option value="accessoires">Accessoires de levage</option>
<option value="autre">Autre / Flotte mixte</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-stone-400">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 uppercase tracking-wide" htmlFor="message">Détails (Ville d'intervention, urgence...)</label>
<textarea className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 text-base text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 transition-shadow outline-none resize-none" id="message" placeholder="Bonjour, je souhaite un devis pour la VGP de 2 chariots sur Amiens..." rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white font-normal text-lg py-5 rounded-xl mt-6 hover:bg-stone-800 transition-colors flex items-center justify-center gap-3 group" type="submit">
                            Envoyer ma demande de devis
                            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-center text-sm text-stone-500 mt-5"><i className="w-4 h-4 inline align-middle mr-1.5" data-lucide="lock" strokeWidth="1.5"></i> Vos données sont sécurisées. Aucune démarche commerciale abusive.</p>
</form>
</div>
</div>
</section>

<footer className="flex flex-col md:flex-row gap-8 border-stone-200 border-t pt-10 pr-6 pb-10 pl-6 gap-x-8 gap-y-8 items-center justify-between">
<div className="flex flex-col items-center md:items-start gap-1.5">
<span className="font-medium text-stone-900 tracking-tight text-xl">EMA VGP</span>
<span className="text-sm text-stone-500">Partenaire de votre sécurité</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-base font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#pourquoi">Enjeux</a>
<a className="hover:text-stone-900 transition-colors" href="#prestations">Prestations</a>
<a className="hover:text-stone-900 transition-colors" href="#avis">Avis Clients</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
<a className="hover:text-stone-900 transition-colors" href="#">Mentions légales</a>
</div>
<div className="text-sm text-stone-400 text-center md:text-right">
                © 2024 EMA VGP.<br className="md:hidden"/> Tous droits réservés.
            </div>
</footer>
</div>



    </>
  );
}
