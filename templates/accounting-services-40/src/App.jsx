import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tight text-neutral-900 uppercase" href="#">Oreka</a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Accueil</a>
<a className="text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Notre équipe</a>
<a className="text-base font-medium text-neutral-900 transition-colors" href="#">Nos missions</a>
<a className="text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Articles</a>
<a className="text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 transition-colors" href="#">
                    Prendre contact
                </a>
<button className="md:hidden p-2 text-neutral-900 flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-xl">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Nos missions
                    </h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-8">
                        OREKA accompagne les entrepreneurs et les entreprises dans leur développement avec une expertise comptable rigoureuse, un audit fiable et des conseils stratégiques personnalisés.
                    </p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#expertise">
                            Découvrir notre approche
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="relative w-full">
<div className="absolute inset-0 bg-gray-50 rounded-[2rem] translate-x-4 translate-y-4 -z-10 border border-gray-100"></div>
<img alt="Bureau Oreka" className="rounded-[2rem] border border-gray-200/60 shadow-xl shadow-gray-200/50 w-full object-cover aspect-[4/3] lg:aspect-[4/4]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100" id="expertise">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                        Notre expertise à votre service
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-900" height="24" icon="solar:lightbulb-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-4">Conseil stratégique</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                            Nous aidons les dirigeants à prendre des décisions stratégiques éclairées, à analyser la viabilité de leurs projets et à optimiser leurs performances financières sur le long terme.
                        </p>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-900" height="24" icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-4">Expertise comptable</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                            Prise en charge complète de vos obligations comptables, fiscales, sociales et juridiques. Nous garantissons la conformité et la fiabilité de vos informations financières.
                        </p>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-900" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-4">Audit</h3>
<p className="text-lg text-neutral-500 leading-relaxed">
                            Missions d'analyse professionnelle et d'audit légal (commissariat aux comptes). Nous certifions la régularité et la sincérité de vos comptes pour sécuriser vos partenaires.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end mb-16">
<div className="lg:col-span-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                        Toutes nos missions
                    </h2>
<p className="text-lg text-neutral-500 max-w-2xl">
                        Une gamme complète de services conçus pour répondre aux besoins spécifiques de votre entreprise à chaque étape de son cycle de vie.
                    </p>
</div>
<div className="hidden lg:block lg:col-span-1">
<img alt="Analyse de documents" className="rounded-2xl border border-gray-200/60 shadow-sm h-32 w-full object-cover object-center grayscale-[20%]" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Accompagnement à la création d'entreprise</h3>
<p className="text-base text-neutral-500">De l'idée à l'immatriculation, nous structurons et sécurisons le lancement de votre projet entrepreneurial.</p>
</div>
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Gestion comptable et fiscale</h3>
<p className="text-base text-neutral-500">Tenue rigoureuse, révision et établissement de vos comptes annuels et déclarations fiscales avec précision.</p>
</div>
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Pilotage financier et tableaux de bord</h3>
<p className="text-base text-neutral-500">Mise en place d'outils de gestion sur-mesure pour vous offrir une vision claire de votre rentabilité.</p>
</div>
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Audit et commissariat aux comptes</h3>
<p className="text-base text-neutral-500">Missions légales et contractuelles pour garantir la fiabilité et la transparence de vos données financières.</p>
</div>
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:compass-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Conseil stratégique</h3>
<p className="text-base text-neutral-500">Analyses et recommandations pour optimiser votre croissance, évaluer vos investissements ou préparer une transmission.</p>
</div>
<div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
<iconify-icon className="text-neutral-900 mb-4" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Accompagnement des dirigeants</h3>
<p className="text-base text-neutral-500">Conseils personnalisés sur l'optimisation de la rémunération, la protection sociale et la gestion de patrimoine.</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-white rounded-[2rem] -translate-x-4 -translate-y-4 -z-10 border border-gray-100"></div>
<img alt="Réunion d'équipe" className="rounded-[2rem] border border-gray-200/60 shadow-lg w-full object-cover aspect-[4/3] lg:aspect-[3/4]" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                            Notre méthode de travail
                        </h2>
<p className="text-lg text-neutral-500 mb-12">
                            Plus qu'un prestataire, nous nous positionnons comme un véritable partenaire de confiance au quotidien pour piloter votre entreprise.
                        </p>
<div className="space-y-10">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
<iconify-icon className="text-neutral-900" height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Approche humaine</h3>
<p className="text-base text-neutral-500">Nous privilégions l'écoute et la compréhension des enjeux qui vous sont propres pour bâtir une relation de confiance durable.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
<iconify-icon className="text-neutral-900" height="24" icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Accompagnement personnalisé</h3>
<p className="text-base text-neutral-500">Chaque entreprise est unique. Nous adaptons nos méthodes et nos conseils à votre secteur d'activité et à vos ambitions.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
<iconify-icon className="text-neutral-900" height="24" icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Outils modernes et digital</h3>
<p className="text-base text-neutral-500">Nous mettons à votre disposition des solutions digitales performantes pour fluidifier nos échanges et simplifier votre gestion.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 lg:px-8 text-center border-t border-gray-100 overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Discutons de vos besoins
                </h2>
<p className="text-lg md:text-xl text-neutral-600 mb-10 font-medium">
                    Notre équipe est prête à vous écouter et à vous proposer des solutions adaptées pour sécuriser et optimiser le développement de votre entreprise.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-neutral-900 text-white text-lg font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/20" href="#">
                        Prendre contact
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-neutral-900 text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm" href="#">
                        Voir notre équipe
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<a className="text-xl font-semibold tracking-tight text-neutral-900 uppercase block mb-6" href="#">Oreka</a>
<p className="text-base text-neutral-500 mb-6">
                        Cabinet d'expertise comptable et de commissariat aux comptes accompagnant les entrepreneurs avec rigueur et proximité.
                    </p>
<div className="flex items-center gap-2 text-base text-neutral-500">
<iconify-icon className="text-neutral-400" height="20" icon="solar:verified-check-linear" width="20"></iconify-icon>
                        Membre de l'ordre
                    </div>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-6">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Accueil</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Notre équipe</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Nos missions</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Articles</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-6">Expertises</h4>
<ul className="space-y-4">
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Conseil stratégique</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Expertise comptable</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Audit &amp; CAC</a></li>
<li><a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Accompagnement RH</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 shrink-0 mt-0.5" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-base text-neutral-500">63 Avenue des Vosges<br/>67000 Strasbourg</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 shrink-0" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<span className="text-base text-neutral-500">03 88 00 00 00</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 shrink-0" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="text-base text-neutral-500 hover:text-neutral-900 transition-colors" href="mailto:contact@oreka.expert">contact@oreka.expert</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-400">
                    © 2024 OREKA. Tous droits réservés.
                </p>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Mentions légales</a>
<a className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
