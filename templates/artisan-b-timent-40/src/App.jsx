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
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
<span className="font-bold">B</span>
</div>
                BÂTI.PRO
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#projets">Réalisations</a>
<a className="hover:text-zinc-900 transition-colors" href="#avis">Avis</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</nav>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950" href="#contact">
                Demander un devis
            </a>

<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="pt-16">

<section className="relative py-20 md:py-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 mb-6">
<span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        Disponible pour nouveaux chantiers
                    </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        L'art de la construction et de la rénovation durable.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 max-w-xl font-light leading-relaxed">
                        Nous transformons vos espaces avec précision et savoir-faire. Une expertise artisanale au service de vos projets de vie, du gros œuvre aux finitions.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-900 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950" href="#contact">
                            Démarrer un projet
                        </a>
<a className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950" href="#projets">
                            Voir nos réalisations
                        </a>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm aspect-[16/9] md:aspect-[21/9]">
<img alt="Chantier de rénovation moderne" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 hover:bg-white">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Garantie Décennale</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Tous nos travaux sont couverts pendant 10 ans. Une tranquillité d'esprit absolue pour votre investissement.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 hover:bg-white">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900 shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Délais Respectés</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Nous nous engageons sur un calendrier précis. La ponctualité est la base de notre professionnalisme.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 hover:bg-white">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900 shadow-sm">
<iconify-icon icon="solar:medal-ribbon-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Finitions Premium</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Le souci du détail est notre signature. Nous utilisons des matériaux nobles et durables.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-zinc-100 rounded-2xl transform rotate-3 scale-95 opacity-50"></div>
<img alt="Artisan au travail" className="relative rounded-2xl shadow-sm border border-zinc-200 w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">Une histoire de passion et de rigueur depuis 2010.</h2>
<div className="space-y-6 text-zinc-500 text-lg font-light leading-relaxed">
<p>
                                Fondée par Thomas Dubois, BÂTI.PRO est née d'une volonté simple : redonner ses lettres de noblesse à l'artisanat du bâtiment local.
                            </p>
<p>
                                Nous ne sommes pas de simples exécutants. Nous sommes vos partenaires techniques. Que ce soit pour une rénovation complexe ou une extension moderne, nous apportons une vision globale et une expertise technique pointue pour valoriser votre patrimoine.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex gap-8">
<div>
<p className="text-3xl font-medium text-zinc-900 tracking-tight">150+</p>
<p className="text-sm text-zinc-500 mt-1">Projets livrés</p>
</div>
<div>
<p className="text-3xl font-medium text-zinc-900 tracking-tight">12</p>
<p className="text-sm text-zinc-500 mt-1">Experts dédiés</p>
</div>
<div>
<p className="text-3xl font-medium text-zinc-900 tracking-tight">100%</p>
<p className="text-sm text-zinc-500 mt-1">Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-200" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex mb-12 items-end justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Nos domaines d'expertise</h2>
<p className="text-zinc-500 max-w-md">Des solutions sur-mesure adaptées à chaque étape de votre projet.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#contact">
                        Tout voir <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-sm transition-shadow">
<div className="h-48 overflow-hidden">
<img alt="Rénovation Intérieure" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Rénovation Intérieure</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Transformation complète de vos espaces : plâtrerie, peinture, sols et agencement pour un intérieur moderne.</p>
<a className="inline-flex items-center text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5 hover:border-zinc-900 transition-colors" href="#">En savoir plus</a>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-sm transition-shadow">
<div className="h-48 overflow-hidden">
<img alt="Maçonnerie" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?w=800&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Maçonnerie Générale</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Gros œuvre, extensions, murets et terrasses. Des fondations solides pour tous vos projets structurels.</p>
<a className="inline-flex items-center text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5 hover:border-zinc-900 transition-colors" href="#">En savoir plus</a>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-sm transition-shadow">
<div className="h-48 overflow-hidden">
<img alt="Isolation" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Isolation &amp; Énergie</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Isolation thermique et phonique par l'intérieur ou l'extérieur pour optimiser votre confort énergétique.</p>
<a className="inline-flex items-center text-xs font-medium text-zinc-900 border-b border-zinc-200 pb-0.5 hover:border-zinc-900 transition-colors" href="#">En savoir plus</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="avis">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-center text-zinc-900 mb-16">Ils nous ont fait confiance</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div>
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed italic">"Une équipe remarquable. Le chantier a été tenu propre tous les jours, les délais respectés et le résultat dépasse nos attentes. Je recommande vivement pour de la rénovation haut de gamme."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">SL</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sophie Lemarchand</p>
<p className="text-xs text-zinc-400">Rénovation Appartement, Lyon</p>
</div>
</div>
</div>

<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div>
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed italic">"Professionnalisme du début à la fin. Le devis était clair, sans surprise. L'extension de notre maison s'intègre parfaitement à l'existant. Un grand merci à Thomas et son équipe."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">MD</div>
<div>
<p className="text-sm font-medium text-zinc-900">Marc Dubois</p>
<p className="text-xs text-zinc-400">Extension Maison, Écully</p>
</div>
</div>
</div>

<div className="flex flex-col h-full justify-between p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="">
<div className="flex gap-1 text-zinc-900 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 leading-relaxed italic">"Réactifs et compétents. J'ai fait appel à Bâti.Pro pour l'isolation extérieure. La différence thermique est immédiate. Travail soigné et finitions impeccables."</p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600">JB</div>
<div>
<p className="text-sm font-medium text-zinc-900">Jean Bernard</p>
<p className="text-xs text-zinc-400">Isolation, Villeurbanne</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 border-t border-zinc-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Questions Fréquentes</h2>
<p className="text-zinc-500">Tout ce que vous devez savoir avant de démarrer.</p>
</div>
<div className="space-y-4">

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden open:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Vos devis sont-ils payants ?</span>
<span className="transform transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                            Non, tous nos devis sont 100% gratuits et sans engagement. Nous nous déplaçons sur place pour évaluer les travaux avec précision avant de vous envoyer une proposition détaillée sous 48h.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden open:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Disposez-vous de la garantie décennale ?</span>
<span className="transform transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                            Absolument. En tant qu'artisans professionnels, nous disposons de la garantie décennale ainsi que de la responsabilité civile professionnelle. Vos travaux sont couverts pendant 10 ans.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden open:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Quelle est votre zone d'intervention ?</span>
<span className="transform transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                            Nous intervenons principalement dans un rayon de 50km autour de notre siège. Pour des projets d'envergure, nous pouvons étudier des déplacements plus lointains.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden open:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Coordonnez-vous les différents corps de métier ?</span>
<span className="transform transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                            Oui. Pour les projets "clé en main", nous assurons la maîtrise d'œuvre et la coordination de tous les intervenants (plombiers, électriciens partenaires) pour vous offrir un interlocuteur unique.
                        </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden open:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Quels sont les délais moyens de démarrage ?</span>
<span className="transform transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-zinc-500 leading-relaxed">
                            Cela dépend de notre carnet de commandes et de la saison. En moyenne, comptez 4 à 8 semaines entre la signature du devis et le démarrage du chantier. Nous fixons une date précise lors de la signature.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Conseils &amp; Actualités</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-56 overflow-hidden rounded-xl mb-4 border border-zinc-200">
<img alt="Peinture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
<span>12 Oct 2023</span>
<span>•</span>
<span>Conseils</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Comment choisir sa peinture écologique ?</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Les peintures biosourcées gagnent du terrain. Découvrez les critères essentiels pour un air intérieur sain sans sacrifier la qualité.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-56 overflow-hidden rounded-xl mb-4 border border-zinc-200">
<img alt="Chantier" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
<span>28 Sept 2023</span>
<span>•</span>
<span>Rénovation</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Rénover une maison ancienne : les pièges à éviter</h3>
<p className="text-sm text-zinc-500 line-clamp-2">L'ancien a du charme mais cache souvent des surprises. Humidité, isolation, structure : notre checklist avant d'acheter.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-56 overflow-hidden rounded-xl mb-4 border border-zinc-200">
<img alt="Cuisine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
<span>15 Sept 2023</span>
<span>•</span>
<span>Tendances</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Cuisine ouverte ou fermée en 2024 ?</h3>
<p className="text-sm text-zinc-500 line-clamp-2">La tendance s'inverse. La verrière reste populaire mais la cuisine semi-fermée revient en force pour plus de fonctionnalité.</p>
</article>
</div>
</div>
</section>

<section className="py-20 md:py-32" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-2">Parlons de votre projet</h2>
<p className="text-zinc-500 mb-8">Remplissez ce formulaire pour recevoir une estimation ou être rappelé.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700" htmlFor="nom">Nom</label>
<input className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" id="nom" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700" htmlFor="prenom">Prénom</label>
<input className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" id="prenom" placeholder="Votre prénom" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700" htmlFor="email">Email</label>
<input className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" id="email" placeholder="vous@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700" htmlFor="type">Type de projet</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" id="type">
<option>Rénovation complète</option>
<option>Extension / Maçonnerie</option>
<option>Isolation / Énergie</option>
<option>Autre</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700" htmlFor="message">Message</label>
<textarea className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all" id="message" placeholder="Décrivez brièvement votre projet..." rows="4"></textarea>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-zinc-100 accent-zinc-900" id="consent" type="checkbox"/>
</div>
<label className="ml-2 text-xs text-zinc-500" htmlFor="consent">
                                    J'accepte que mes données soient traitées pour être recontacté.
                                </label>
</div>
<button className="w-full inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950" type="submit">
                                Envoyer la demande
                            </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="flex-1 bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 min-h-[300px] mb-8 relative">
<iframe allowfullscreen="" className="w-full h-full absolute inset-0 map-grayscale" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.357597950986!2d4.833112315567543!3d45.76404307910595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1629897654321!5m2!1sfr!2sfr" style={{border: '0'}}></iframe>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Siège Social</h3>
<p className="text-sm text-zinc-500">12 Rue de la Construction69000 Lyon, France</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Contact Direct</h3>
<p className="text-sm text-zinc-500">contact@bati.pro+33 4 78 00 00 00</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 text-zinc-400 py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-white text-zinc-950 flex items-center justify-center rounded-md">
<span className="font-bold text-xs">B</span>
</div>
                        BÂTI.PRO
                    </a>
<p className="text-xs leading-relaxed">Artisans passionnés construisant l'avenir avec des matériaux durables et une expertise locale.</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Navigation</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#projets">Réalisations</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Plan du site</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Réseaux</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a> 
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 BÂTI.PRO. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span>Site sécurisé &amp; hébergé en France</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
