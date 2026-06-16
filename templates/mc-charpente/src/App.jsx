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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center gap-2 text-xl font-semibold text-slate-900 tracking-tighter" href="#">MC Charpente</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors" href="#accueil">Accueil</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#avis">Avis clients</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#a-propos">À propos</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="flex items-center gap-2 hover:text-amber-600 transition-colors text-sm font-medium text-slate-900" href="/tel:06 79 04 55 80">06 79 04 55 80</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-sm hover:shadow" href="#devis">
                        Devis gratuit
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="accueil">

<div className="absolute inset-0 z-0">
<img alt="Chantier charpente bois" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/85"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">
<div className="inline-flex gap-2 text-xs font-medium text-amber-400 bg-white/10 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">Charpentier à Fréjairolles et alentours</div>
<h1 className="leading-[1.1] md:text-5xl lg:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Charpentier à Fréjairolles <br className="hidden lg:block"/> <span className="text-amber-500">Construction et rénovation</span> de charpente</h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-2xl mb-8">MC Charpente vous accompagne pour tous vos travaux de charpente : création, rénovation, ossature bois et renforcement de structure. Expertise artisanale et matériaux de qualité.</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-full transition-all" href="#devis">
                            Obtenir un devis gratuit
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all" href="#realisations">
                            Voir nos réalisations
                        </a>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<div className="flex text-amber-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-300 mt-0.5">Note 5/5 par nos clients</span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto">
<div className="sm:p-8 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Demandez votre devis gratuit</h2>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="sr-only" htmlFor="nom">Nom</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-400" id="nom" placeholder="Nom complet" type="text"/>
</div>
<div className="">
<label className="sr-only" htmlFor="tel">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-400" id="tel" placeholder="Téléphone" type="tel"/>
</div>
</div>
<div className="">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-400" id="email" placeholder="Adresse email" type="email"/>
</div>
<div className="">
<label className="sr-only" htmlFor="ville">Ville du projet</label>
<input className="focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-400 text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="ville" placeholder="Ville du projet (ex: Fréjairolles)" type="text"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="type">Type de travaux</label>
<select className="appearance-none w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" id="type">
<option className="text-slate-400" disabled="" selected="" value="">Type de travaux</option>
<option value="construction">Construction de charpente</option>
<option value="renovation">Rénovation de charpente</option>
<option value="ossature">Ossature bois</option>
<option value="autre">Autre demande</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="">
<label className="sr-only" htmlFor="desc">Description</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors placeholder:text-slate-400 resize-none" id="desc" placeholder="Décrivez brièvement votre projet..." rows="3"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all mt-2" type="submit">
                                Demander mon devis
                                <iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                                Réponse rapide sous 24h
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 border-b border-slate-100 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200/50">
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-2xl text-amber-600" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-900">Artisan local</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-2xl text-amber-600" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-900">Travail soigné</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-2xl text-amber-600" icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-900">Devis gratuit</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-2xl text-amber-600" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-900">Intervention rapide</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Nos services de charpente</h2>
<p className="text-slate-500 max-w-2xl">Expertise complète pour vos structures en bois, de la conception à la rénovation, adaptés aux spécificités de l'Aude.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scrollbar-custom -mx-4 px-4 sm:mx-0 sm:px-0">

<div className="min-w-[300px] w-[85vw] sm:w-[380px] shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="h-56 overflow-hidden">
<img alt="Construction de charpente" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13368c47-64e4-42ce-8078-80d990fd4874_800w.jpg"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
<iconify-icon className="text-xl" height="20" icon="solar:home-angle-linear" style={{strokeWidth: '1.5', color: 'rgb(217, 119, 6)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Construction de charpente</h3>
<p className="text-sm text-slate-500 leading-relaxed">Réalisation complète de charpentes traditionnelles ou fermettes, solides et durables, sur-mesure pour votre projet neuf.</p>
</div>
</div>

<div className="min-w-[300px] w-[85vw] sm:w-[380px] shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="h-56 overflow-hidden">
<img alt="Rénovation de charpente" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04d69c10-b0f8-445d-8735-9f4c5e1cfc97_800w.jpg"/>
</div>
<div className="p-6">
<div className="flex text-amber-600 bg-amber-50 w-10 h-10 rounded-lg mb-4 items-center justify-center">
<iconify-icon className="text-xl" icon="solar:hammer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-xl" height="20" icon="solar:home-outline" style={{strokeWidth: '1.5', color: 'rgb(217, 119, 6)'}} width="20"></iconify-icon></div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Rénovation de charpente</h3>
<p className="text-sm text-slate-500 leading-relaxed">Remise à neuf des structures anciennes ou endommagées. Diagnostic précis et remplacement des pièces défectueuses.</p>
</div>
</div>

<div className="min-w-[300px] w-[85vw] sm:w-[380px] shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="h-56 overflow-hidden relative">
<img alt="Ossature bois" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be47877-a9a5-4ed0-a121-c5fe8a53b6a3_800w.jpg"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
<iconify-icon className="text-xl" icon="solar:ruler-angular-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Ossature bois</h3>
<p className="text-sm text-slate-500 leading-relaxed">Construction de structures bois légères et écologiques pour extensions, surélévations ou maisons individuelles.</p>
</div>
</div>

<div className="min-w-[300px] w-[85vw] sm:w-[380px] shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
<img alt="Traitement du bois" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d40cd3e-a929-42eb-bd8b-3205a8f6539e_800w.webp"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Traitement du bois</h3>
<p className="text-sm text-slate-500 leading-relaxed">Protection préventive et curative contre les insectes xylophages (capricornes, termites) et l'humidité.</p>
</div>
</div>

<div className="min-w-[300px] w-[85vw] sm:w-[380px] shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
<img alt="Renforcement structure" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="bg-center text-lg font-semibold text-slate-900 tracking-tight mb-2">Renforcement de structure</h3>
<p className="text-sm text-slate-500 leading-relaxed">Consolidation de charpentes fragilisées par le temps ou pour supporter de nouvelles charges (panneaux solaires, etc.).</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="devis">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Obtenir un devis gratuit</h2>
<p className="text-lg text-slate-500 mb-8">Vous avez un projet de charpente bois ou d'ossature à Fréjairolles ou dans le Tarn ? Contactez-nous pour une étude personnalisée et gratuite.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Zone d'intervention</h4>
<p className="text-sm text-slate-500 mt-0.5">Fréjairolles (81990) et ses alentours</p>
</div>
</div>
<div className="flex gap-4 bg-white border-slate-100 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-sm gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Ligne directe</h4>
<a className="hover:text-amber-700 block text-sm font-medium text-amber-600 mt-0.5" href="/tel:06 79 04 55 80">06 79 04 55 80</a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl -mr-16 -mt-16 z-0"></div>
<form action="#" className="space-y-4 relative z-10" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="nom2">Nom complet</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm" id="nom2" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="tel2">Téléphone</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm" id="tel2" type="tel"/>
</div>
</div>
<div className="">
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="email2">Email</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm" id="email2" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="ville2">Ville du projet</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm" id="ville2" type="text"/>
</div>
<div className="relative">
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="type2">Type de travaux</label>
<select className="appearance-none w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm" id="type2">
<option value="construction">Construction de charpente</option>
<option value="renovation">Rénovation de charpente</option>
<option value="ossature">Ossature bois</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-3 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-700 mb-1.5 block" htmlFor="desc2">Détails du projet</label>
<textarea className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors shadow-sm resize-none" id="desc2" rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all mt-4" type="submit">
                            Envoyer ma demande
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comment ça marche ?</h2>
<p className="text-slate-500 text-sm">Notre processus simplifié pour concrétiser vos projets de charpente en toute sérénité.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-lg font-semibold text-slate-900">1</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Demande de devis</h3>
<p className="text-xs text-slate-500 px-4">Contactez-nous via le formulaire ou par téléphone pour nous faire part de votre besoin.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-lg font-semibold text-slate-900">2</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Étude du projet</h3>
<p className="text-xs text-slate-500 px-4">Nous évaluons la structure, prenons les mesures et établissons un devis précis et gratuit.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-lg font-semibold text-white">3</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Intervention</h3>
<p className="text-xs text-slate-500 px-4">Nos artisans charpentiers réalisent les travaux dans le respect des normes et des délais.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-amber-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-amber-600" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Livraison</h3>
<p className="text-xs text-slate-500 px-4">Réception du chantier propre, conforme à vos attentes et fait pour durer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="realisations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nos réalisations récentes</h2>
<p className="text-sm text-slate-500 max-w-xl">Aperçu de nos chantiers de charpente bois et rénovations dans la région de Fréjairolles.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors group whitespace-nowrap" href="#devis">
                    Démarrer un projet similaire
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Création charpente bois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/894acb93-8c9d-4022-885a-6b2159002364_800w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/894acb93-8c9d-4022-885a-6b2159002364_800w.webp)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Création de charpente traditionnelle</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Chantier toiture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9b62688-4b33-4284-b8df-618435921c69_800w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9b62688-4b33-4284-b8df-618435921c69_800w.webp)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Rénovation complète structure</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
<img alt="Ossature bois Castelnaudary" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c29483-05bf-45cc-9cc0-805af92da8dc_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-center bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c29483-05bf-45cc-9cc0-805af92da8dc_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end cursor-pointer" onclick="window.location.href='/tel:06 79 04 55 80'" role="button">
<span className="text-sm font-medium text-white">Extension ossature bois</span>
</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-all shadow-sm">
                    Voir toutes nos réalisations
                </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="avis">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Ils nous font confiance</h2>
<p className="text-slate-500 text-sm">Découvrez les retours de nos clients suite à nos interventions en charpenterie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-sm text-slate-600 mb-6">"Artisan charpentier très professionnel. Intervention rapide pour la rénovation de notre toiture à Fréjairolles. Le travail est soigné et le chantier a été laissé très propre. Je recommande MC Charpente.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">JL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Jean L.</p>
<p className="text-xs text-slate-500">Rénovation charpente</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">"Nous avons fait appel à eux pour une extension en ossature bois. Devis respecté, délais tenus et communication excellente tout au long du projet. Résultat parfait."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">MC</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Marie C.</p>
<p className="text-xs text-slate-500">Ossature bois</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex text-amber-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">"Excellent travail de consolidation sur une vieille charpente de ferme. Équipe ponctuelle et de bon conseil. Tarifs très corrects. Merci pour votre sérieux."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">PD</div>
<div>
<p className="text-sm font-semibold text-slate-900">Pierre D.</p>
<p className="text-xs text-slate-500">Renforcement structure</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center gap-2 hover:border-amber-500 hover:text-amber-600 transition-all text-sm font-medium text-slate-900 bg-white border-slate-200 border rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="https://www.google.com/search?client=safari&amp;hs=8Jfp&amp;sca_esv=9e0af5be28576de2&amp;rls=en&amp;q=carriere+michel+charpentier&amp;si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa8yikg9QvCmoc11Sn3FLznnzS7oIhKtmMA3EFouFk-kpa8_9ANQAeR_lbvQlw_sO-LL_CQ%3D&amp;uds=ALYpb_l2fW9FmhMyhdOPbWGe4NHthraMroViY46MRPEPOCl_kiAEH-JIiZpr9zRV15V7jsfFnmzCYHMN30lgmB252NmRggw2u1ey7j-FvpYNABiibh4He97-RlpoN6j2WyCflkFwqvwj&amp;sa=X&amp;ved=2ahUKEwjal5jdltyTAxXxRaQEHfwZHtcQ3PALegQINRAF&amp;biw=1778&amp;bih=1017&amp;dpr=2" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="logos:google-icon"></iconify-icon>
                    Voir tous nos avis sur Google
                </a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="a-propos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-slate-100">
<img alt="Artisan charpentier au travail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd2d88c4-8943-4430-871b-9b4ed3830f40_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">Expertise</p>
<p className="text-xs text-slate-500">Charpente &amp; Bois</p>
</div>
</div>
</div>
</div>
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Votre charpentier à Castelnaudary</h2>
<div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
<p className="">
<strong>TS Rénovation</strong> est une entreprise spécialisée en charpente bois, solidement implantée dans la région de Castelnaudary (11400) et opérant dans tout le département de l'Aude.
                        </p>
<p className="">
                            Nous intervenons principalement auprès des particuliers pour tous types de travaux touchant à la structure de votre habitat. Que ce soit pour la construction d'une charpente traditionnelle neuve, la rénovation minutieuse d'une toiture ancienne, la conception d'une extension en ossature bois ou le traitement préventif de vos poutres, nous apportons notre savoir-faire artisanal.
                        </p>
<p className="">
                            Notre engagement : utiliser des matériaux de qualité et garantir des structures durables, sécurisées et esthétiques, tout en respectant les délais et votre budget.
                        </p>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="">
<p className="text-sm font-semibold text-slate-900 mb-1">Un projet en tête ?</p>
<p className="text-xs text-slate-500">Discutons-en directement de vive voix.</p>
</div>
<a className="inline-flex items-center gap-2 hover:bg-amber-700 transition-colors whitespace-nowrap hover:shadow text-sm font-medium text-white bg-amber-600 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="/tel:06 79 04 55 80">06 79 04 55 80</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white border-b border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="flex flex-col items-center text-center pt-8 md:pt-0">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">Téléphone</h3>
<a className="hover:text-white transition-colors text-sm text-slate-300" href="/tel:06 79 04 55 80">06 79 04 55 80</a>
<p className="text-xs text-slate-500 mt-2">Lun - Ven : 8h - 18h</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">Adresse</h3>
<p className="text-sm text-slate-300">253 Rte de Mouzieys Teulet, <br className=""/>81990 Fréjairolles</p>
<p className="text-xs text-slate-500 mt-2">Intervention dans le Tarn</p>
</div>
<div className="flex flex-col items-center text-center pt-8 md:pt-0">
<div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-amber-500 mb-4">
<iconify-icon className="text-2xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">Email</h3>
<a className="hover:text-white transition-colors text-sm text-slate-300" href="/mailto:contact@mccharpente.fr">contact@mccharpente.fr</a>
<p className="text-xs text-slate-500 mt-2">Réponse sous 24h</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-amber-600 pt-20 pb-20 relative">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Besoin d’un charpentier ?</h2>
<p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">Confiez vos travaux de toiture et d'ossature bois à un artisan local reconnu pour son sérieux. Demandez votre étude gratuite dès aujourd'hui.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-amber-600 bg-white hover:bg-slate-50 rounded-full transition-all shadow-lg hover:shadow-xl" href="#devis">
                    Demander un devis
                    <iconify-icon className="" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:shadow-xl text-sm font-medium text-white bg-slate-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/tel:06 79 04 55 80">
                    Appeler maintenant
                    <iconify-icon icon="solar:phone-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<span className="w-7 h-7 bg-amber-600 text-white rounded flex items-center justify-center text-xs font-semibold tracking-tighter">TS</span>
                        RÉNOVATION
                    </a>
<p className="leading-relaxed text-xs text-slate-500 mb-6">Artisan charpentier à Fréjairolles spécialisé dans la construction, la rénovation de charpente et l'ossature bois dans le Tarn.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Navigation</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-amber-600 transition-colors" href="#accueil">Accueil</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-amber-600 transition-colors" href="#services">Nos services</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-amber-600 transition-colors" href="#realisations">Réalisations</a></li>
<li><a className="text-sm text-slate-500 hover:text-amber-600 transition-colors" href="#avis">Avis clients</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3">
<li className=""><span className="text-sm text-slate-500">Charpente traditionnelle</span></li>
<li><span className="text-sm text-slate-500">Rénovation de toiture</span></li>
<li><span className="text-sm text-slate-500">Création ossature bois</span></li>
<li><span className="text-sm text-slate-500">Traitement préventif</span></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Coordonnées</h4>
<ul className="space-y-3">
<li className="flex gap-2 text-sm text-slate-500 gap-x-2 gap-y-2 items-start">253 Rte de Mouzieys Teulet, 81990 Fréjairolles</li>
<li className="flex text-sm text-slate-500 gap-x-2 gap-y-2 items-center">06 79 04 55 80</li>
<li className="flex gap-2 text-sm text-slate-500 gap-x-2 gap-y-2 items-center">contact@mccharpente.fr</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 MC Charpente. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
<a aria-label="Demander un devis" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform group relative" href="#devis">
<iconify-icon className="text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>

<span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Devis gratuit</span>
</a>
<a aria-label="Appeler l'artisan" className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform group relative" href="tel:0786080067">
<svg className="text-xl" data-icon-set="solar" data-solar="phone-bold" height="20" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" fill="currentColor"></path></svg>

<span className="inline-flex animate-ping -z-10 bg-amber-400 opacity-30 w-full h-full rounded-full absolute cursor-pointer" onclick="window.location.href='/tel:06 79 04 55 80'" role="button"></span>

<span className="absolute right-full mr-3 bg-amber-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Appeler</span>
</a>
</div>

    </>
  );
}
