import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-slate-900 flex items-center gap-2" href="#">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
                TICKET IMMOBILIER
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#biens">Nos biens</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#agence">L'Agence</a>
<a className="hover:text-slate-900 transition-colors" href="#avis">Avis</a>
<a className="hover:text-slate-900 transition-colors" href="#blog">Actualités</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-3">
<a className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-900" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-900" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
<a className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors items-center gap-2" href="#contact">
                    Contactez-nous
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Real Estate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase">Vente et acquisition à Cornebarrieu</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                Nous dénichons le bien <br className="hidden md:block"/> de vos rêves pour vous.
            </h1>
<p className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Découvrez Ticket Immobilier, votre conseil expert. Nous vous accompagnons de A à Z pour une expérience immobilière sereine et premium.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2" href="#biens">
                    Voir les propriétés
                    <iconify-icon icon="solar:home-angle-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-colors" href="#contact">
                    Estimation offerte
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Suivi des démarches</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Nous vous accompagnons de la signature du mandat, à la vente de votre bien immobilier, et vous épaulons dans toutes vos démarches : qu’elles soient internes ou externes à l’agence.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Visites qualifiées</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Notre mot d’ordre est la qualité. Chaque visite est qualifiée, et les dossiers des potentiels acheteurs sont étudiés en amont. Un compte rendu précis vous sera partagé.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Estimation réelle</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Une étude poussée du marché : analyse du secteur, des biens similaires, des facteurs externes et internes pour définir la valeur juste de votre propriété.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="biens">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Nos biens du moment</h2>
<p className="text-slate-500 max-w-lg">Découvrez une sélection exclusive de propriétés disponibles à Cornebarrieu et dans l'Ouest Toulousain.</p>
</div>
<a className="text-slate-900 font-medium hover:opacity-70 flex items-center gap-1 border-b border-slate-300 pb-0.5 transition-all hover:border-slate-900" href="#">
                    Tout voir
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img alt="Villa Moderne" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full text-slate-900 uppercase tracking-wide">Exclusivité</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">Villa Contemporaine</h3>
<span className="text-lg font-semibold text-slate-900">485 000 €</span>
</div>
<p className="text-slate-500 text-sm mb-4">Cornebarrieu, Centre</p>
<div className="flex gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 4 Ch.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 2 Sdb.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear"></iconify-icon> 145 m²</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img alt="Appartement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full text-slate-900 uppercase tracking-wide">Nouveauté</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">Appartement T4 Terrasse</h3>
<span className="text-lg font-semibold text-slate-900">295 000 €</span>
</div>
<p className="text-slate-500 text-sm mb-4">Colomiers, Perget</p>
<div className="flex gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 Ch.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 1 Sdb.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear"></iconify-icon> 89 m²</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img alt="Maison de ville" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">Maison de Ville</h3>
<span className="text-lg font-semibold text-slate-900">340 000 €</span>
</div>
<p className="text-slate-500 text-sm mb-4">Blagnac, Vieux-Centre</p>
<div className="flex gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3 Ch.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 1 Sdb.</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear"></iconify-icon> 110 m²</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="agence">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden">
<img alt="Agence Ticket Immobilier" className="w-full h-full object-cover image-mask" src="https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] max-w-xs border border-slate-100 hidden md:block">
<p className="text-3xl font-semibold text-slate-900 mb-1">2005</p>
<p className="text-slate-500 text-sm">Année de fondation de l'agence, une expertise ancrée dans le temps.</p>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 mb-6">
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Notre Histoire</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-8 leading-tight">
                        Une agence immo pas comme les autres.
                    </h2>
<div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
<p>
                            Fondée en 2005 et reprise en 2023 par  et , l’agence Ticket Immobilier continue de se renforcer grâce à notre équipe dynamique, jeune et endurante.
                        </p>
<p>
                            Vente, Location et Gestion Locative, nous poursuivons notre développement dans le secteur Ouest-Toulousain et alentours.
                        </p>
<p>
                            Que vous cherchiez à acheter, vendre ou louer, nous sommes là pour vous guider. Notre connaissance approfondie du marché local nous permet de vous fournir des conseils précis et des solutions sur mesure pour vos objectifs.
                        </p>
</div>
<div className="mt-10 pt-8 border-t border-slate-100 flex gap-8">
<div>
<span className="block text-3xl font-semibold text-slate-900">18+</span>
<span className="text-sm text-slate-500">Années d'expérience</span>
</div>
<div>
<span className="block text-3xl font-semibold text-slate-900">100%</span>
<span className="text-sm text-slate-500">Clients satisfaits</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Nos expertises</h2>
<p className="text-slate-500 max-w-xl mx-auto">Une approche globale pour valoriser votre patrimoine immobilier.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Vente" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<iconify-icon className="text-slate-900 mb-4" icon="solar:key-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-slate-900 mb-3">Vente Immobilière</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        De l'estimation précise à la signature notaire, nous valorisons votre bien pour une vente rapide et au meilleur prix.
                    </p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Gestion" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1668911494481-1643ee3e1235?w=800&amp;q=80"/>
</div>
<div className="p-8">
<iconify-icon className="text-slate-900 mb-4" icon="solar:document-text-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-slate-900 mb-3">Gestion Locative</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Tranquillité d'esprit garantie. Nous gérons vos locataires, les loyers, et l'entretien de votre patrimoine.
                    </p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className="h-48 overflow-hidden">
<img alt="Acquisition" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&amp;w=1992&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<iconify-icon className="text-slate-900 mb-4" icon="solar:city-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-slate-900 mb-3">Acquisition</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Chasseurs de biens, nous dénichons la perle rare qui correspond à vos critères de vie et votre budget.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-16 text-center">L'équipe Ticket Immo</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="text-center group">
<div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border border-slate-100">
<img alt="Damien Olmos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-slate-900">Damien Olmos</h3>
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4 font-medium">Co-gérant</p>
<p className="text-slate-500 text-sm leading-relaxed px-4">
                        "Une vision claire en tête : aider les gens à réaliser leurs rêves de propriété. Une compréhension approfondie du marché local."
                    </p>
</div>

<div className="text-center group">
<div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border border-slate-100">
<img alt="Théo Forfait" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-slate-900">Théo Forfait</h3>
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4 font-medium">Conseiller Immobilier</p>
<p className="text-slate-500 text-sm leading-relaxed px-4">
                        Passionné et réactif, Théo met son énergie au service de vos projets de vente et d'achat avec une rigueur exemplaire.
                    </p>
</div>

<div className="text-center group">
<div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border border-slate-100">
<img alt="Sarah Dubois" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-slate-900">Sarah Dubois</h3>
<p className="text-sm text-slate-500 uppercase tracking-wider mb-4 font-medium">Assistante Commerciale</p>
<p className="text-slate-500 text-sm leading-relaxed px-4">
                        Le sourire et l'organisation de l'agence. Sarah s'assure que chaque dossier administratif est traité avec la plus grande fluidité.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="avis">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-12">Ce que disent nos clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Une équipe à l'écoute et très professionnelle. Damien a su estimer notre bien à sa juste valeur et la vente s'est faite en moins de 3 semaines."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold">P</div>
<div>
<p className="text-sm font-medium text-slate-900">Pierre M.</p>
<p className="text-xs text-slate-400">Vente à Cornebarrieu</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Merci à Théo pour son accompagnement. Premier achat pour nous, nous avions beaucoup de questions et il a été parfait."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold">J</div>
<div>
<p className="text-sm font-medium text-slate-900">Julie &amp; Thomas</p>
<p className="text-xs text-slate-400">Achat à Blagnac</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Gestion locative au top. Je ne m'occupe de rien, les rapports sont clairs. La confiance est totale."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold">M</div>
<div>
<p className="text-sm font-medium text-slate-900">Marc D.</p>
<p className="text-xs text-slate-400">Investisseur</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-12 text-center">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 list-none">
<span>Comment se déroule l'estimation de mon bien ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Nous réalisons une visite sur place pour analyser les caractéristiques techniques. Ensuite, nous comparons votre bien avec le marché local (biens vendus et en vente) pour vous fournir un avis de valeur précis et documenté sous 48h.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 list-none">
<span>Quels sont vos honoraires ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Nos honoraires sont transparents et conformes aux barèmes affichés en agence. Ils incluent la commercialisation, les visites, la négociation et l'accompagnement jusqu'à l'acte authentique.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 list-none">
<span>Faites-vous de la gestion locative ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Oui, nous proposons un service complet de gestion locative : recherche de locataire, états des lieux, encaissement des loyers, gestion des travaux et assurances loyers impayés.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 list-none">
<span>Sur quels secteurs intervenez-vous ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Nous sommes spécialisés sur l'Ouest Toulousain, principalement Cornebarrieu, Blagnac, Colomiers, Beauzelle, Pibrac et les communes environnantes.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-6 font-medium text-slate-900 list-none">
<span>Comment diffusez-vous mon annonce ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Nous utilisons les principaux portails immobiliers (SeLoger, Leboncoin, BienIci), notre site internet, nos réseaux sociaux ainsi que notre fichier client qualifié.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="blog">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-12">Actualités &amp; Conseils</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="h-56 bg-white rounded-2xl overflow-hidden mb-4 border border-slate-100">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<span>12 Oct 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Conseils</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Comment bien préparer son dossier de location ?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Tous les documents nécessaires pour mettre toutes les chances de votre côté.</p>
</article>

<article className="group cursor-pointer">
<div className="h-56 bg-white rounded-2xl overflow-hidden mb-4 border border-slate-100">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<span>28 Sep 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Marché</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Les prix de l'immobilier à Cornebarrieu en 2023</h3>
<p className="text-sm text-slate-500 line-clamp-2">Analyse des tendances du marché sur le secteur Ouest-Toulousain.</p>
</article>

<article className="group cursor-pointer">
<div className="h-56 bg-white rounded-2xl overflow-hidden mb-4 border border-slate-100">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
<span>15 Sep 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>Agence</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Ticket Immobilier fait peau neuve !</h3>
<p className="text-sm text-slate-500 line-clamp-2">Découvrez la nouvelle identité de votre agence et nos nouveaux services.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-slate-500 mb-8">Remplissez le formulaire ci-dessous, nous vous recontacterons dans les plus brefs délais.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Type de projet</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-slate-900" name="type" type="radio"/>
<span className="text-sm text-slate-600">Vente</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-slate-900" name="type" type="radio"/>
<span className="text-sm text-slate-600">Achat</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-slate-900" name="type" type="radio"/>
<span className="text-sm text-slate-600">Location</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" type="submit">
                            Envoyer le message
                            <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div className="space-y-8">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<h3 className="text-lg font-medium text-slate-900 mb-6">Nos coordonnées</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Téléphone</p>
<p className="text-sm font-medium text-slate-900">05 61 30 38 69</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Email</p>
<p className="text-sm font-medium text-slate-900">Contact@ticket-immo.fr</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Horaires</p>
<p className="text-sm font-medium text-slate-900">Lun - Sam : 9h00 - 19h00</p>
</div>
</div>
</div>
</div>

<div className="h-64 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.687786411784!2d1.343056!3d43.663056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6f7b7b7b7b%3A0x123456789abcdef!2sCornebarrieu!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-semibold text-white flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        TICKET IMMOBILIER
                    </a>
<p className="text-sm leading-relaxed mb-6">
                        Votre partenaire de confiance pour tous vos projets immobiliers sur Cornebarrieu et l'Ouest Toulousain.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-white hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-white hover:text-slate-300 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#biens">Nos biens</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#agence">L'Agence</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Achat</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vente</a></li>
<li><a className="hover:text-white transition-colors" href="#">Location</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gestion Locative</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Légal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Barème honoraires</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Ticket Immobilier. Tous droits réservés.</p>
<p className="flex items-center gap-1">Conçu avec soin à Toulouse</p>
</div>
</div>
</footer>

    </>
  );
}
