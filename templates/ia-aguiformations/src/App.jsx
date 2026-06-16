import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 900: '#1e3a8a' }
}
}
}
}
// Simple Router Logic
function route(pageId) {
// Hide all pages
document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
// Show target page
const target = document.getElementById(pageId);
if(target) {
target.classList.remove('hidden');
window.scrollTo(0,0);
}
}
// Handle URL hash on load
window.addEventListener('load', () => {
const hash = window.location.hash.replace('#', '') || 'home';
route(hash);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer" onclick="route('home')">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:biken-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">IA AGUI</span>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="route('home')">Catalogue</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="route('method')">Méthode</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="route('specs')">Specs</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900" onclick="route('login')">Connexion</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md" onclick="route('signup')">
                        Commencer
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-16">

<div className="page-section" id="home">

<section className="pt-20 pb-16 border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                        Nouvelle formation : Automatisation CRM disponible
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                        L'Intelligence Artificielle au service de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">votre performance marketing</span>.
                    </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Devenez autonome. Réduisez vos tâches chronophages de 40%. 
                        Plateforme de formation pratique pour équipes marketing.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-slate-800 transition-all flex gap-2 shadow-slate-900/10 font-medium text-white bg-slate-900 w-full h-12 rounded-lg pr-8 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="document.getElementById('catalogue-grid').scrollIntoView()">
                            Explorer le catalogue
                        </button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 h-12 px-8 rounded-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="route('method')">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Voir la méthode
                        </button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50/50" id="catalogue-grid">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Catalogue de formations</h2>
<p className="text-slate-500 mt-2 text-sm">Des parcours progressifs, du gratuit au niveau expert.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col overflow-hidden" onclick="route('course-detail')">
<div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white opacity-50"></div>
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors duration-500" icon="solar:rocket-2-linear" width="64"></iconify-icon>
<span className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-1 rounded-md border border-emerald-100 uppercase tracking-wide">Gratuit</span>
</div>
<div className="flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2h 30min
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Débutant</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Fondations : L'IA générative pour le marketeur</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Comprendre les LLMs, maîtriser le prompting de base et configurer votre environnement.</p>
<div className="mt-auto pt-4 border-t border-slate-100">
<button className="hover:text-blue-600 flex group-hover:px-1 transition-all text-sm font-medium text-slate-900 w-full pr-1 pl-1 items-center justify-between">
                                        Voir le programme
                                        <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col overflow-hidden" onclick="route('course-detail')">
<div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 opacity-50"></div>
<iconify-icon className="text-blue-200 group-hover:text-blue-600 transition-colors duration-500" icon="solar:pen-new-square-linear" width="64"></iconify-icon>
<span className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded-md border border-slate-700 uppercase tracking-wide">Avancé</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5h 00min
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Intermédiaire</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Copywriting &amp; SEO augmenté par l'IA</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Créez des articles, newsletters et ads à haute conversion en un temps record.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-sm font-semibold text-emerald-600">Gratuit</span>
<span className="text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Détails -&gt;</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col overflow-hidden" onclick="route('course-detail')">
<div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-purple-50 opacity-50"></div>
<iconify-icon className="text-indigo-200 group-hover:text-indigo-600 transition-colors duration-500" icon="solar:chart-2-linear" width="64"></iconify-icon>
<span className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded-md border border-slate-700 uppercase tracking-wide">Expert</span>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 8h 00min
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Expert</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">Data Analysis &amp; Insights Marketing</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Analysez vos performances, nettoyez vos datas et prédisez les tendances avec Code Interpreter.</p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-sm font-semibold text-slate-900">7 500 F</span>
<span className="text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Détails -&gt;</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="course-detail">
<div className="bg-slate-900 pt-20 pb-24 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 text-sm text-slate-400 hover:text-white flex items-center gap-2" onclick="route('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour au catalogue
                    </button>
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Copywriting &amp; SEO augmenté par l'IA</h1>
<p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                                Une masterclass pour transformer votre production de contenu. Apprenez à collaborer avec l'IA pour écrire mieux, plus vite, et optimiser chaque mot pour les moteurs de recherche.
                            </p>
<div className="flex items-center gap-6 mt-8 text-sm font-medium">
<div className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:user-circle-linear"></iconify-icon> Par Sarah Miller</div>
<div className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:clock-circle-linear"></iconify-icon> 5h 30min de vidéo</div>
<div className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:diploma-verified-linear"></iconify-icon> Certificat inclus</div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Ce que vous allez apprendre</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Créer des personas profonds pour un ton de voix unique.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Générer 30 jours de posts LinkedIn en 20 minutes.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Optimiser le maillage interne SEO automatiquement.</span>
</div>
<div className="flex gap-3 items-start">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Correction et réécriture de style sans perte de sens.</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="p-6 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-lg font-semibold text-slate-900">Programme</h3>
<span className="text-xs font-medium text-slate-500">6 Modules • 24 Leçons</span>
</div>
<div className="divide-y divide-slate-100">
<div className="p-4 hover:bg-slate-50 flex justify-between items-center cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-medium">01</div>
<div>
<p className="text-sm font-medium text-slate-900">Configuration de l'assistant</p>
<p className="text-xs text-slate-500">Custom Instructions &amp; Context</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-4 hover:bg-slate-50 flex justify-between items-center cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-medium">02</div>
<div>
<p className="text-sm font-medium text-slate-900">Rédaction d'articles SEO Long-form</p>
<p className="text-xs text-slate-500">Structure Hn, Mots-clés, Meta</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-4 hover:bg-slate-50 flex justify-between items-center cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-medium">03</div>
<div>
<p className="text-sm font-medium text-slate-900">Copywriting pour Ads (Facebook &amp; Google)</p>
<p className="text-xs text-slate-500">Frameworks AIDA &amp; PAS</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sticky top-24">
<div className="mb-6 pb-6 border-b border-slate-100">
<span className="text-3xl font-bold text-slate-900">7 500 F</span>
<span className="text-slate-500 text-sm"> / accès à vie</span>
</div>
<div className="space-y-4 mb-6">
<button className="w-full bg-slate-900 text-white h-12 rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="route('signup')">
                                    Acheter la formation
                                </button>
<p className="text-xs text-center text-slate-500">Garantie satisfait ou remboursé 14 jours</p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:file-download-linear"></iconify-icon>
                                    15 Templates de prompts inclus
                                </div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                                    Accès à la communauté Discord
                                </div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:smartphone-linear"></iconify-icon>
                                    Accessible sur mobile
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden py-20 bg-slate-50" id="method">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 text-sm text-slate-500 hover:text-slate-900 flex items-center gap-2" onclick="route('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour à l'accueil
                </button>
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Notre méthode d'apprentissage</h2>
<p className="text-slate-500 mt-2 text-sm">Pensée pour l'action : vidéo à gauche, ressources et ateliers à droite.</p>
</div>

<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-6xl mx-auto">

<div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
<div className="flex items-center gap-4">
<div className="text-slate-400 hover:text-slate-900"><iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon></div>
<span className="text-sm font-medium text-slate-900">Module 2 : Création de Personas avec l'IA</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span>Progression</span>
<div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-1/3"></div>
</div>
<span>35%</span>
</div>
</div>

<div className="flex flex-col lg:flex-row h-[600px]">

<div className="flex-1 bg-slate-900 flex items-center justify-center relative group cursor-pointer">
<iconify-icon className="text-white opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:play-circle-linear" width="64"></iconify-icon>
<div className="absolute bottom-6 left-6 right-6">
<div className="h-1 bg-white/20 rounded-full mb-2 flex items-center">
<div className="h-1 bg-blue-500 w-1/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
</div>
<div className="flex justify-between text-white/70 text-xs">
<span>04:12</span>
<span>12:05</span>
</div>
</div>
</div>

<div className="w-full lg:w-[400px] border-l border-slate-200 flex flex-col bg-white">

<div className="flex border-b border-slate-200">
<button className="flex-1 py-4 text-xs font-semibold text-blue-600 border-b-2 border-blue-600">Leçon</button>
<button className="flex-1 py-4 text-xs font-medium text-slate-500 hover:text-slate-800">Ressources</button>
<button className="flex-1 py-4 text-xs font-medium text-slate-500 hover:text-slate-800">Atelier</button>
</div>

<div className="p-6 overflow-y-auto flex-1">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Points clés de la vidéo</h4>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<iconify-icon className="text-green-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                        Définir les contraintes démographiques dans le prompt initial.
                                    </li>
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<iconify-icon className="text-green-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                        Utiliser la méthode "Act as..." pour simuler une interview.
                                    </li>
</ul>
<div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-2">Prompt à copier</h5>
<p className="text-xs text-slate-500 font-mono bg-white p-3 rounded border border-slate-100 select-all">
                                        "Agis en tant qu'expert marketing. Analyse les données suivantes et crée 3 profils de personas détaillés..."
                                    </p>
</div>
</div>

<div className="p-4 border-t border-slate-200">
<button className="w-full bg-slate-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors">
                                    Valider et passer à l'atelier
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden py-24 bg-slate-900 text-slate-300" id="specs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 text-sm text-slate-400 hover:text-white flex items-center gap-2" onclick="route('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour
                </button>
<div className="mb-16 border-b border-slate-800 pb-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Architecture &amp; Spécifications</h2>
<p className="text-slate-400">Documentation technique détaillée pour le développement de la plateforme.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1 space-y-2 sticky top-24 h-fit">
<div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Menu</div>
<a className="block text-sm text-white hover:text-blue-400" href="#spec-stack">Stack Technique</a>
<a className="block text-sm text-slate-400 hover:text-blue-400" href="#spec-data">Modèle de Données</a>
<a className="block text-sm text-slate-400 hover:text-blue-400" href="#spec-mvp">Roadmap MVP</a>
</div>
<div className="lg:col-span-3 space-y-16">
<div id="spec-stack">
<h3 className="text-xl font-semibold text-white mb-6">Stack Technique</h3>
<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h4 className="text-xs font-semibold text-blue-400 mb-4 uppercase">Frontend</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>Next.js 14 (App Router)</li>
<li>Tailwind CSS</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-blue-400 mb-4 uppercase">Backend &amp; Services</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>Supabase (Auth/DB)</li>
<li>Stripe Connect</li>
</ul>
</div>
</div>
</div>
<div id="spec-mvp">
<h3 className="text-xl font-semibold text-white mb-6">MVP 14 Jours</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-slate-800 p-4 rounded-lg border-t-2 border-slate-600">
<div className="font-bold text-white mb-2">Jours 1-5</div>
<div className="text-xs text-slate-400">Setup Tech &amp; Contenu "Fondations". Enregistrement vidéo.</div>
</div>
<div className="bg-slate-800 p-4 rounded-lg border-t-2 border-blue-500">
<div className="font-bold text-white mb-2">Jours 6-10</div>
<div className="text-xs text-slate-400">Dév Frontend (Catalogue, Player). Intégration Auth.</div>
</div>
<div className="bg-slate-800 p-4 rounded-lg border-t-2 border-green-500">
<div className="font-bold text-white mb-2">Jours 11-14</div>
<div className="text-xs text-slate-400">QA, Tests paiements. Lancement Beta.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden py-24 flex items-center justify-center min-h-[80vh] bg-slate-50" id="login">
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl w-full max-w-md">
<div className="text-center mb-8">
<div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
<iconify-icon icon="solar:biken-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900">Bon retour</h2>
<p className="text-sm text-slate-500 mt-2">Entrez votre email pour accéder à vos cours</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email professionnel</label>
<input className="w-full h-10 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm" placeholder="nom@entreprise.com" type="email"/>
</div>
<button className="w-full bg-slate-900 text-white h-10 rounded-lg font-medium hover:bg-slate-800 transition-all text-sm" type="button">
                        Recevoir un lien de connexion (Magic Link)
                    </button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Ou</span></div>
</div>
<button className="w-full bg-white text-slate-700 border border-slate-200 h-10 rounded-lg font-medium hover:bg-slate-50 transition-all text-sm flex items-center justify-center gap-2" type="button">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon> Continuer avec Google
                    </button>
</form>
<div className="mt-6 text-center text-xs text-slate-500">
                    Pas encore de compte ? <button className="text-slate-900 font-medium underline" onclick="route('signup')">S'inscrire</button>
</div>
</div>
</div>

<div className="page-section hidden py-24 bg-white" id="signup">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="mb-8 text-sm text-slate-500 hover:text-slate-900 flex items-center gap-2" onclick="route('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour
                </button>
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Investissez dans votre productivité</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Choisissez la formule adaptée à votre stade de maturité sur l'IA.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900 mb-2">Découverte</h3>
<div className="text-3xl font-bold text-slate-900 mb-4">0 F</div>
<p className="text-xs text-slate-500 mb-6 h-10">Pour comprendre les bases et configurer vos outils.</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 mb-6">Commencer Gratuitement</button>
<ul className="space-y-3 text-xs text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Module "Fondations" (2h30)</li>
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Accès à la communauté (Lecture)</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-900 bg-slate-900 text-white relative shadow-2xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Populaire</div>
<h3 className="text-lg font-medium text-white mb-2">À la carte</h3>
<div className="text-3xl font-bold text-white mb-4">7 500 F <span className="text-sm font-normal text-slate-400">/ cours</span></div>
<p className="text-xs text-slate-300 mb-6 h-10">Maîtrisez une compétence spécifique (Copy, Data, Automation).</p>
<button className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 mb-6">Voir le catalogue</button>
<ul className="space-y-3 text-xs text-slate-300">
<li className="flex gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Accès à vie au module</li>
<li className="flex gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Certificat de réussite</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="text-lg font-medium text-slate-900 mb-2">Équipe</h3>
<div className="text-3xl font-bold text-slate-900 mb-4">Sur Devis</div>
<p className="text-xs text-slate-500 mb-6 h-10">Formez toute votre équipe marketing avec un suivi personnalisé.</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 mb-6">Contacter les ventes</button>
<ul className="space-y-3 text-xs text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Accès illimité tout catalogue</li>
<li className="flex gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Ateliers Live Q&amp;A mensuels</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:biken-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-tight text-slate-900">IA AGUI</span>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Conditions Générales</a>
<a className="hover:text-slate-900" href="#">Confidentialité</a>
<a className="hover:text-slate-900" href="#">Support Entreprise</a>
</div>
<div className="text-xs text-slate-400">© 2026 IA AGUI. Tous droits réservés.</div>
</div>
</footer>

    </>
  );
}
