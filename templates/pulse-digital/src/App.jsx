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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-semibold text-zinc-950 tracking-tight">Pulse Digital</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#accueil">Accueil</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#resultats">Résultats</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#avis">Avis</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#apropos">À propos</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors" href="tel:0780811434">
<iconify-icon className="text-lg" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    07 80 81 14 34
                </a>
<a className="bg-zinc-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#audit">
                    Audit gratuit
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden" id="accueil">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[25%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px]"></div>
<div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Agence web à Toulouse
                    </div>
<h1 className="leading-tight sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">Gagnez en visibilité
  sur Google et transformez <span className="text-blue-500"> votre présence en ligne en clients</span></h1>
<p className="leading-relaxed text-lg text-zinc-400 max-w-xl">Pulse Digital accompagne les entreprises à Toulouse pour attirer des clients grâce au SEO, Google Ads et des sites internet qui convertissent.</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
<a className="w-full sm:w-auto text-center bg-blue-600 text-white text-sm font-medium px-6 py-3.5 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" href="#audit">
                            Obtenir un audit gratuit
                        </a>
<a className="w-full sm:w-auto text-center bg-white/5 text-white border border-white/10 text-sm font-medium px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors" href="#resultats">
                            Voir nos résultats
                        </a>
</div>
<div className="pt-8 flex items-center gap-4">
<div className="flex items-center text-blue-500">
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">+100 entreprises accompagnées</p>
</div>
</div>

<div className="lg:col-span-5" id="audit">
<div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/50 border border-zinc-100 relative">
<div className="mb-6 space-y-2">
<h2 className="text-xl tracking-tight font-medium text-zinc-900">Demander un audit gratuit</h2>
<p className="text-sm text-zinc-500">Découvrez comment nous pouvons vous aider à générer plus de clients.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Nom</label>
<input className="w-full rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Téléphone</label>
<input className="w-full rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="06 00 00 00 00" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Email</label>
<input className="w-full rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="email@exemple.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Ville</label>
<input className="w-full rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Ex: Toulouse" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Type de projet</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-zinc-200 py-2.5 pl-3 pr-10 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-white">
<option>Création de site internet</option>
<option>Refonte de site</option>
<option>Référencement SEO</option>
<option>Publicité Google Ads</option>
<option>Autre</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Message</label>
<textarea className="w-full rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Parlez-nous de vos objectifs..." rows="3"></textarea>
</div>
<button className="w-full bg-zinc-950 text-white text-sm font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm mt-2" type="button">
                                Recevoir mon audit
                            </button>
<p className="text-xs text-center text-zinc-500 flex items-center justify-center gap-1.5 pt-2">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                                Réponse rapide sous 24h
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Stratégie orientée résultats</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Experts en acquisition</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Accompagnement complet</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">Résultats mesurables</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="space-y-2 mb-12">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight">Nos services Pulse Digital</h2>
<p className="text-zinc-500">Des solutions concrètes pour attirer et convertir vos clients</p>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{scrollbarWidth: 'none'}}>

<div className="min-w-[320px] max-w-[320px] sm:min-w-[350px] sm:max-w-[350px] bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900 text-2xl" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Création de site internet à Toulouse</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Sites conçus pour convertir vos visiteurs en clients. Design premium, parcours utilisateur optimisé et vitesse de chargement maximale.</p>
</div>

<div className="min-w-[320px] max-w-[320px] sm:min-w-[350px] sm:max-w-[350px] bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900 text-2xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Référencement naturel SEO à Toulouse</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Positionnez-vous sur Google quand vos clients recherchent vos services. Optimisation technique, contenu et popularité.</p>
</div>

<div className="min-w-[320px] max-w-[320px] sm:min-w-[350px] sm:max-w-[350px] bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900 text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Google My Business à Toulouse</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Apparaissez en tête des résultats locaux et Google Maps. Attirez les clients de votre zone de chalandise directement en boutique ou par téléphone.</p>
</div>

<div className="min-w-[320px] max-w-[320px] sm:min-w-[350px] sm:max-w-[350px] bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900 text-2xl" icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Publicité Google Ads (SEA) à Toulouse</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Générez des clients immédiatement avec des campagnes rentables. Nous ciblons les intentions d'achat pour un ROI optimal.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 text-white relative overflow-hidden" id="resultats">
<div className="bg-center bg-red-600 opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb0704e8-241c-485a-a645-e6cf9ef4a3c0_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
<h2 className="text-4xl tracking-tight font-semibold text-white">Des résultats concrets pour votre activité</h2>
<p className="leading-relaxed text-xl font-medium text-blue-100 max-w-2xl mr-auto ml-auto">
                Plus de visibilité, plus de trafic, plus de demandes entrantes.
            </p>
<p className="text-base text-zinc-50 max-w-2xl mr-auto ml-auto">
                Nos stratégies sont conçues pour transformer votre site internet en véritable machine à clients. Nous ne créons pas de simples vitrines, nous développons des outils de croissance pour votre entreprise.
            </p>
</div>
</section>

<section className="bg-white border-zinc-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="space-y-2 mb-16 text-center">
<h2 className="text-3xl tracking-tight font-medium text-zinc-900">Comment ça fonctionne ?</h2>
<p className="text-zinc-500">Une méthodologie éprouvée pour garantir le succès de votre projet.</p>
</div>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-zinc-200"></div>
<div className="relative space-y-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-zinc-200 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg relative z-10 shadow-sm">1</div>
<h3 className="text-base font-medium text-zinc-900">Analyse de votre activité</h3>
<p className="text-sm text-zinc-500">Compréhension de votre marché, de vos concurrents et de votre cible.</p>
</div>
<div className="relative space-y-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-zinc-200 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg relative z-10 shadow-sm">2</div>
<h3 className="text-base font-medium text-zinc-900">Mise en place d'une stratégie</h3>
<p className="text-sm text-zinc-500">Définition des leviers d'acquisition les plus pertinents pour vous.</p>
</div>
<div className="relative space-y-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-zinc-200 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg relative z-10 shadow-sm">3</div>
<h3 className="text-base font-medium text-zinc-900">Création et optimisation</h3>
<p className="text-sm text-zinc-500">Développement de votre site et mise en place des campagnes marketing.</p>
</div>
<div className="relative space-y-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-zinc-200 rounded-full flex items-center justify-center text-blue-600 font-medium text-lg relative z-10 shadow-sm">4</div>
<h3 className="text-base font-medium text-zinc-900">Génération de résultats</h3>
<p className="text-sm text-zinc-500">Suivi des performances et ajustements pour maximiser les retours.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
<div className="space-y-2">
<h2 className="text-3xl tracking-tight font-medium text-zinc-900">Nos réalisations</h2>
<p className="text-zinc-500">Un aperçu de nos derniers projets digitaux.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors">
                    Voir nos réalisations
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden flex items-center justify-center p-6">
<div className="w-full h-full bg-white rounded-t-lg shadow-sm border border-zinc-200 flex flex-col overflow-hidden transition-transform group-hover:scale-[1.02]">
<div className="h-6 bg-zinc-50 border-b border-zinc-100 flex items-center px-2 gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="flex-1 bg-zinc-100/50 p-4">
<div className="w-full h-24 bg-zinc-200 rounded-md mb-3"></div>
<div className="w-2/3 h-4 bg-zinc-200 rounded-md mb-2"></div>
<div className="w-1/2 h-4 bg-zinc-200 rounded-md"></div>
</div>
</div>
</div>
<div className="p-5 border-t border-zinc-100">
<h3 className="text-sm font-medium text-zinc-900">Site vitrine &amp; SEO Local</h3>
<p className="text-xs text-zinc-500 mt-1">Artisan à Toulouse</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden flex items-center justify-center p-6">
<div className="w-full h-full bg-white rounded-t-lg shadow-sm border border-zinc-200 flex flex-col overflow-hidden transition-transform group-hover:scale-[1.02]">
<div className="h-6 bg-zinc-50 border-b border-zinc-100 flex items-center px-2 gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="flex-1 bg-zinc-100/50 p-4 flex gap-4">
<div className="w-1/3 h-full bg-zinc-200 rounded-md"></div>
<div className="w-2/3 h-full flex flex-col gap-2">
<div className="w-full h-8 bg-zinc-200 rounded-md"></div>
<div className="w-full h-full bg-zinc-200 rounded-md"></div>
</div>
</div>
</div>
</div>
<div className="p-5 border-t border-zinc-100">
<h3 className="text-sm font-medium text-zinc-900">Dashboard Marketing B2B</h3>
<p className="text-xs text-zinc-500 mt-1">Cabinet de conseil</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden flex items-center justify-center p-6">
<div className="w-[45%] h-full bg-white rounded-t-xl shadow-md border border-zinc-200 flex flex-col overflow-hidden transition-transform group-hover:scale-[1.02]">
<div className="h-8 bg-zinc-100 mb-2"></div>
<div className="px-3 space-y-2">
<div className="w-full h-24 bg-zinc-200 rounded-md"></div>
<div className="w-full h-12 bg-zinc-200 rounded-md"></div>
</div>
</div>
</div>
<div className="p-5 border-t border-zinc-100">
<h3 className="text-sm font-medium text-zinc-900">E-commerce &amp; Ads</h3>
<p className="text-xs text-zinc-500 mt-1">Boutique en ligne</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-zinc-50 border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
<div className="grid md:grid-cols-2">
<div className="p-10 md:p-12 flex flex-col justify-center bg-zinc-950 text-white relative overflow-hidden">

<div className="absolute -top-[50%] -left-[50%] w-full h-full bg-blue-600/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 space-y-6">
<h2 className="text-3xl tracking-tight font-medium">Obtenir un audit gratuit</h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                                Un expert analyse votre présence en ligne et vous propose un plan d'action concret pour générer plus de clients. Sans engagement.
                            </p>
<div className="pt-6 space-y-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium">Toulouse et alentours</p>
<p className="text-xs text-zinc-400">Intervention locale</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-blue-400" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium">07 80 81 14 34</p>
<p className="text-xs text-zinc-400">Lun - Ven, 9h à 18h</p>
</div>
</div>
</div>
</div>
</div>
<div className="p-10 md:p-12 bg-white">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Nom complet</label>
<input className="w-full bg-zinc-50 rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Téléphone</label>
<input className="w-full bg-zinc-50 rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Email professionnel</label>
<input className="w-full bg-zinc-50 rounded-lg border border-zinc-200 py-2.5 px-3 text-sm text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700">Besoin principal</label>
<div className="relative">
<select className="w-full bg-zinc-50 appearance-none rounded-lg border border-zinc-200 py-2.5 pl-3 pr-10 text-sm text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
<option>Je veux un nouveau site internet</option>
<option>Je veux plus de trafic (SEO/Ads)</option>
<option>Je veux optimiser mon site actuel</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors shadow-sm mt-4" type="button">
                                Demander l'audit
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="avis">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
<div className="space-y-2">
<h2 className="text-3xl tracking-tight font-medium text-zinc-900">Ils nous font confiance</h2>
<p className="text-zinc-500">Découvrez les retours des entreprises que nous accompagnons.</p>
</div>
<button className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-sm font-medium text-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Voir nos avis sur Google
                </button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center text-blue-500 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" height="16" icon="solar:star-linear" style={{strokeWidth: '2', color: 'rgb(59, 130, 246)'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"Une équipe réactive et très professionnelle. Depuis la refonte de notre site internet, nous avons doublé nos demandes de devis sur Toulouse. Le suivi SEO est excellent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm">M</div>
<div>
<p className="text-sm font-medium text-zinc-900">Marc D.</p>
<p className="text-xs text-zinc-500">Dirigeant d'entreprise de rénovation</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center text-blue-500 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"Nous avons confié nos campagnes Google Ads et la création de notre landing page à Pulse Digital. Les résultats ont été au rendez-vous dès le premier mois. Je recommande."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm">S</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sophie L.</p>
<p className="text-xs text-zinc-500">Gérante de cabinet d'avocats</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="flex items-center text-blue-500 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"Le travail sur notre fiche Google My Business nous a permis d'apparaître enfin dans les premiers résultats sur Blagnac et Colomiers. Très satisfaite du service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm">C</div>
<div>
<p className="text-sm font-medium text-zinc-900">Claire M.</p>
<p className="text-xs text-zinc-500">Commerçante indépendante</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-2">
<iconify-icon className="text-2xl" icon="solar:city-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-zinc-600 leading-relaxed">
                Pulse Digital accompagne les entreprises à <strong className="text-zinc-900 font-medium">Toulouse</strong> ainsi que dans les villes alentours : 
                <span className="text-zinc-900 font-medium">Blagnac, Colomiers, Balma, Tournefeuille, Labège</span>.
            </p>
<p className="text-sm text-zinc-500">
                Nous comprenons les enjeux locaux et adaptons chaque stratégie pour maximiser votre visibilité sur votre zone de chalandise.
            </p>
</div>
</section>

<section className="text-white bg-zinc-950 pt-24 pb-24" id="apropos">
<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
<h2 className="text-3xl tracking-tight font-medium">Votre agence web à Toulouse</h2>
<p className="text-zinc-400 text-base leading-relaxed max-w-2xl mx-auto">
                Pulse Digital est une agence spécialisée dans la création de site internet et le référencement. Nous aidons les entreprises à développer leur visibilité et à générer des clients grâce à des stratégies digitales performantes, modernes et orientées retour sur investissement.
            </p>
<div className="pt-4">
<a className="inline-flex items-center gap-3 text-lg font-medium text-white hover:text-blue-400 transition-colors bg-white/5 border border-white/10 px-6 py-3 rounded-xl" href="tel:0780811434">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    07 80 81 14 34
                </a>
</div>
</div>
</section><section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-6">
<div className="space-y-2 mb-12 text-center">
<h2 className="text-3xl tracking-tight font-medium text-zinc-900">Questions fréquentes</h2>
<p className="text-zinc-500">Tout ce que vous devez savoir avant de commencer.</p>
</div>
<div className="space-y-0.5">

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Combien de temps pour créer un site ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        La création d'un site vitrine standard prend généralement entre 3 et 5 semaines. Ce délai inclut la phase de design, l'intégration, l'optimisation SEO de base et les allers-retours pour validation.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Est-ce que vous faites le SEO ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        Oui, absolument. Le SEO (référencement naturel) est au cœur de notre expertise. Tous nos sites sont optimisés techniquement dès leur conception, et nous proposons des accompagnements mensuels pour améliorer vos positions sur Google.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Est-ce que ça génère vraiment des clients ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        C'est notre objectif principal. Contrairement aux sites "vitrines" classiques, nous concevons des interfaces pensées pour la conversion (boutons d'appels, formulaires optimisés, réassurance) couplées à des stratégies d'acquisition de trafic ciblé.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Travaillez-vous avec les entreprises à Toulouse ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        Oui, bien que nous puissions travailler à distance, nous avons une forte attache locale. Nous accompagnons principalement les TPE/PME de Toulouse et de l'agglomération (Blagnac, Colomiers, Labège, etc.) pour des stratégies de proximité pertinentes.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Puis-je modifier mon site ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        Oui, nous vous fournissons un accès sécurisé à une interface d'administration intuitive. Vous pourrez ainsi modifier vos textes, ajouter des photos ou publier des articles de blog en toute autonomie.
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900">
<span className="text-sm">Est-ce adapté à mon activité ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="p-6 pt-0 text-sm text-zinc-500 border-t border-zinc-100 bg-zinc-50/50 mt-1">
                        Nos stratégies s'adaptent à la majorité des secteurs (artisans, professions libérales, e-commerces, B2B). L'audit gratuit nous permet justement de vérifier si nous sommes les mieux placés pour vous accompagner selon votre domaine.
                    </div>
</details>
</div>
</div>
</section>


<section className="py-32 bg-blue-600 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
<h2 className="text-4xl sm:text-5xl tracking-tight font-semibold">Prêt à générer plus de clients à Toulouse ?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-zinc-950 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-zinc-800 transition-colors shadow-xl" href="#audit">
                    Demander mon audit gratuit
                </a>
<a className="w-full sm:w-auto bg-white text-blue-600 text-base font-medium px-8 py-4 rounded-xl hover:bg-zinc-50 transition-colors shadow-xl" href="tel:0780811434">
                    Appeler maintenant
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl tracking-tight font-semibold text-zinc-950">Pulse Digital</span>
</a>
<p className="text-sm text-zinc-500">
                        Agence web &amp; marketing digital orientée acquisition client à Toulouse.
                    </p>
</div>

<div>
<h4 className="font-medium text-zinc-900 mb-4">Menu</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#accueil">Accueil</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#resultats">Résultats</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#avis">Avis clients</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-zinc-900 mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Création site internet</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Référencement SEO</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Google My Business</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Google Ads</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-zinc-500">
<iconify-icon className="text-zinc-400" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            07 80 81 14 34
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-500">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Toulouse &amp; environs
                        </li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2024 Pulse Digital. Tous droits réservés.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Mentions légales</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>

<div className="hidden">
<p>création site internet Toulouse, agence web Toulouse, référencement Toulouse, SEO Toulouse, Google My Business Toulouse</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
<a className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform" href="#audit" title="Demander un audit gratuit">
<iconify-icon className="text-xl" icon="solar:clipboard-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform shadow-blue-600/30" href="tel:0780811434" title="Appeler maintenant">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

    </>
  );
}
