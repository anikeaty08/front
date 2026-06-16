import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
<div className="flex items-center gap-2">
<div className="text-emerald-600 flex items-center">
<i className="w-6 h-6" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">France Déménageur</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-900">
<a className="hover:text-slate-600 transition-colors" href="#">Services</a>
<a className="hover:text-slate-600 transition-colors" href="#">Processus</a>
<a className="hover:text-slate-600 transition-colors" href="#">Avis</a>
<a className="hover:text-slate-600 transition-colors" href="#">Contact</a>
</nav>
<button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-lg text-base font-medium transition-colors">
            Obtenir un devis
        </button>
</header>
<main className="pb-24">

<section className="pt-16 pb-12 px-6">
<div className="max-w-3xl mx-auto text-center mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos formules de service</h1>
<p className="text-lg text-slate-600 font-medium">Choisissez le niveau de confort qui vous convient</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">Économique</h3>
<p className="text-base text-slate-500 font-medium mt-1">L'essentiel au meilleur prix</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">Transport</span>
<span className="text-base text-slate-500 font-medium">uniquement</span>
</div>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-red-700 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-700 font-medium">Chargement &amp; déchargement</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-red-700 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-700 font-medium">Transport direct</span>
</div>
<div className="flex items-start gap-3 opacity-50">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-base text-slate-500 font-medium">Emballage complet</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl border border-slate-300 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        Choisir <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-[#0f172a] rounded-2xl p-8 shadow-xl relative flex flex-col h-full transform lg:scale-105 border-4 border-[#0f172a] z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i> SÉLECTIONNÉ
                    </div>
<div className="mb-6 mt-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Premium</h3>
<p className="text-base text-blue-300 font-medium mt-1">Sérénité totale garantie</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2 text-white">
<span className="text-2xl font-semibold tracking-tight">Prise en charge</span>
<span className="text-base text-slate-300 font-medium">complète</span>
</div>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-start gap-3 text-white">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Emballage total</span>
</div>
<div className="flex items-start gap-3 text-white">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Démontage / Remontage</span>
</div>
<div className="flex items-start gap-3 text-white">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Assurance tout risque</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-base transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="check" strokeWidth="1.5"></i> Sélectionné
                    </button>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">Standard</h3>
<p className="text-base text-slate-500 font-medium mt-1">Le meilleur rapport qualité/prix</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">+ Emballage</span>
<span className="text-base text-slate-500 font-medium">partiel</span>
</div>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-red-700 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-700 font-medium">Fragiles uniquement</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-red-700 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base text-slate-700 font-medium">Chargement &amp; Déchargement</span>
</div>
<div className="flex items-start gap-3 opacity-50">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-base text-slate-500 font-medium">Montage mobilier complexe</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl border border-slate-300 text-slate-900 font-medium text-base hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        Choisir <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<div className="flex flex-col items-center justify-center py-8">
<div className="w-px h-16 bg-slate-300"></div>
<div className="w-8 h-8 rounded-full bg-[#0f172a] text-white flex items-center justify-center -mt-1 z-10 shadow-sm">
<i className="w-4 h-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>

<section className="max-w-6xl mx-auto px-6">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Complétez votre demande</h2>
<p className="text-lg text-slate-600 font-medium">Quelques informations pour finaliser votre devis personnalisé.</p>
</div>

<div className="bg-[#0f172a] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 shadow-md">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Formule Premium</h3>
<p className="text-base text-blue-300 font-medium mt-1">Prise en charge complète — Assurance incluse</p>
</div>
</div>
<a className="text-base text-blue-300 font-medium underline hover:text-white transition-colors" href="#">Changer de formule</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">

<div className="lg:col-span-8 space-y-6">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-semibold shrink-0">1</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 uppercase">DATE DE DÉMÉNAGEMENT</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900">Date souhaitée</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none text-base font-medium text-slate-900 bg-white transition-shadow" placeholder="jj/mm/aaaa" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900">Flexibilité</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<select className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none text-base font-medium text-slate-900 bg-white appearance-none cursor-pointer transition-shadow">
<option>Date fixe</option>
<option>Flexible (+/- 1 jour)</option>
<option>Flexible (+/- 3 jours)</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-semibold shrink-0">2</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 uppercase">ADRESSES</h3>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900">Adresse de départ</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none text-base font-medium text-slate-900 bg-white transition-shadow" type="text" value="12 rue de la Paix, Paris 75001"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900">Adresse de destination</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-red-700" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none text-base font-medium text-slate-900 bg-white transition-shadow" type="text" value="45 avenue Victor Hugo, Lyon 69002"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 flex items-center gap-2">
                                    Étage départ <span className="text-sm text-slate-500 font-normal">(optionnel)</span>
</label>
<div className="relative">
<select className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none text-base font-medium text-slate-900 bg-white appearance-none cursor-pointer transition-shadow">
<option>Rez-de-chaussée</option>
<option>1er étage</option>
<option>2ème étage</option>
<option>3ème étage ou plus</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-semibold shrink-0">3</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 uppercase">TAILLE DU LOGEMENT</h3>
</div>
<div className="flex flex-wrap gap-3 mb-4">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="housing_size" type="radio" value="studio"/>
<div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl hover:border-slate-300 peer-checked:border-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all bg-white">
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:border-slate-900">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base font-medium text-slate-900">Studio</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="housing_size" type="radio" value="t2"/>
<div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl hover:border-slate-300 peer-checked:border-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all bg-white">
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:border-slate-900">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base font-medium text-slate-900">T2</span>
</div>
</label>

<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="housing_size" type="radio" value="t3"/>
<div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl hover:border-slate-300 peer-checked:border-blue-600 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all bg-white">
<div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
</div>
<span className="text-base font-medium text-slate-900">T3</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="housing_size" type="radio" value="t4"/>
<div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl hover:border-slate-300 peer-checked:border-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all bg-white">
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:border-slate-900">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base font-medium text-slate-900">T4</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="housing_size" type="radio" value="maison"/>
<div className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl hover:border-slate-300 peer-checked:border-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all bg-white">
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center peer-checked:border-slate-900">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-base font-medium text-slate-900">Maison</span>
</div>
</label>
</div>
<p className="text-sm text-slate-500 font-medium mt-4">Le volume estimé sera confirmé lors de la visite technique gratuite.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-semibold shrink-0">4</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 uppercase">OPTIONS SUPPLÉMENTAIRES</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<label className="cursor-pointer relative block">
<input className="peer sr-only" type="checkbox"/>
<div className="h-full p-6 border border-slate-200 rounded-2xl hover:border-slate-300 peer-checked:border-blue-600 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all bg-white relative">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4 text-amber-700">
<i className="w-5 h-5" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Emballage complet</h4>
<p className="text-sm text-slate-500 font-medium mb-4">Cartons, bulles et papier fournis</p>
<p className="text-base font-semibold text-red-700">+ 150 €</p>
</div>
</label>

<label className="cursor-pointer relative block">
<input className="peer sr-only" type="checkbox"/>
<div className="h-full p-6 border border-slate-200 rounded-2xl hover:border-slate-300 peer-checked:border-blue-600 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all bg-white relative">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 text-slate-700">
<i className="w-5 h-5" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Montage mobilier</h4>
<p className="text-sm text-slate-500 font-medium mb-4">Démontage et remontage inclus</p>
<p className="text-base font-semibold text-red-700">+ 100 €</p>
</div>
</label>

<label className="cursor-pointer relative block">
<input className="peer sr-only" type="checkbox"/>
<div className="h-full p-6 border border-slate-200 rounded-2xl hover:border-slate-300 peer-checked:border-blue-600 peer-checked:ring-1 peer-checked:ring-blue-600 transition-all bg-white relative">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-slate-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
<i className="w-5 h-5" data-lucide="building" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Garde-meuble</h4>
<p className="text-sm text-slate-500 font-medium mb-4">Stockage sécurisé, 1 mois offert</p>
<p className="text-base font-semibold text-red-700">+ 200 €</p>
</div>
</label>

<label className="cursor-pointer relative block">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-full p-6 border-2 border-[#0f172a] rounded-2xl bg-slate-50 relative transition-all">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#0f172a] border border-[#0f172a] flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4 text-red-700">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Assurance renforcée</h4>
<p className="text-sm text-slate-500 font-medium mb-4">Couverture jusqu'à 50 000 €</p>
<p className="text-base font-semibold text-red-700">+ 80 €</p>
</div>
</label>
</div>
</div>

<div className="bg-[#0f172a] rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<button className="w-full max-w-md py-4 px-6 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-lg transition-colors flex items-center justify-center gap-2 mb-6">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i> Continuer la réservation
                        </button>
<div className="flex flex-col gap-2 text-sm text-slate-300 font-medium">
<div className="flex items-center gap-2 justify-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i> Devis gratuit et sans engagement
                            </div>
<div className="flex items-center gap-2 justify-center">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i> Réponse garantie sous 24h
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

<div className="bg-[#0f172a] p-6 text-white">
<h3 className="text-xl font-semibold tracking-tight mb-1">Votre estimation</h3>
<p className="text-sm text-blue-300 font-medium flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                Mis à jour en temps réel
                            </p>
</div>

<div className="p-6 flex-grow flex flex-col">
<div className="space-y-4 mb-6">
<div className="flex justify-between items-center">
<span className="text-base text-slate-900 font-medium">Formule Premium</span>
<span className="text-base text-slate-900 font-semibold">1600 €</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500 font-medium">+ Assurance renforcée</span>
<span className="text-sm text-slate-700 font-medium">+ 80 €</span>
</div>
</div>
<hr className="border-slate-100 mb-6"/>
<div className="bg-slate-50 rounded-xl p-6 text-center mb-6 border border-slate-100">
<p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">ESTIMATION TOTALE</p>
<p className="text-4xl font-semibold tracking-tight text-[#0f172a] mb-1">1680 €</p>
<p className="text-xs text-slate-400 font-medium">hors TVA - estimation indicative</p>
</div>
<p className="text-xs text-slate-500 font-medium text-center mb-6 leading-relaxed">
                                Le tarif définitif est établi après visite technique gratuite à votre domicile.
                            </p>
<button className="w-full py-4 px-6 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-base transition-colors flex items-center justify-center gap-2 mb-6">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i> Continuer la réservation
                            </button>
<div className="space-y-3 mt-auto">
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<i className="w-4 h-4 text-emerald-600 fill-emerald-600 shrink-0" data-lucide="star" strokeWidth="1.5"></i>
<span>Devis gratuit et sans engagement</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<i className="w-4 h-4 text-emerald-600 shrink-0" data-lucide="clock" strokeWidth="1.5"></i>
<span>Réponse garantie sous 24h</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<i className="w-4 h-4 text-emerald-600 shrink-0" data-lucide="award" strokeWidth="1.5"></i>
<span>15+ ans d'expertise reconnue</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
