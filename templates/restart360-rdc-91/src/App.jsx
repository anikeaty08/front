import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-lg tracking-tight">R360</div>
<span className="font-semibold text-lg tracking-tight">ReStart360 RDC</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#candidats">Candidats</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#entreprises">Entreprises</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#secteurs">Secteurs</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#tarifs">Tarifs</a>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors">Connexion</button>
<button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Inscription</button>
</div>
</div>
</div>
</nav>

<section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
<span>🇨🇩</span>
<span>Favoriser l'emploi en République Démocratique du Congo</span>
</div>
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                    Trouvez un emploi.<br/>Recrutez facilement.
                </h1>
<p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    La première plateforme congolaise qui connecte les chercheurs d'emploi avec les entreprises locales. Simple, rapide et accessible.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-base flex items-center justify-center gap-2">
<span>Je cherche un emploi</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border border-gray-300 text-gray-900 font-medium px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-base flex items-center justify-center gap-2">
<span>Je recrute</span>
<i className="w-5 h-5" data-lucide="briefcase"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
<div className="text-center">
<div className="text-3xl font-semibold text-gray-900 mb-1">300+</div>
<div className="text-sm text-gray-600">Candidats actifs</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-gray-900 mb-1">10+</div>
<div className="text-sm text-gray-600">Entreprises</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-gray-900 mb-1">20+</div>
<div className="text-sm text-gray-600">Offres d'emploi</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-gray-900 mb-1">7</div>
<div className="text-sm text-gray-600">Secteurs clés</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="secteurs">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Secteurs à forte demande</h2>
<p className="text-lg text-gray-600">Nous nous concentrons sur les secteurs qui recrutent le plus en RDC</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-red-600" data-lucide="heart-pulse"></i>
</div>
<div className="text-sm font-medium text-gray-900">Santé</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-orange-600" data-lucide="utensils"></i>
</div>
<div className="text-sm font-medium text-gray-900">Restauration</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-purple-600" data-lucide="package"></i>
</div>
<div className="text-sm font-medium text-gray-900">Logistique</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-blue-600" data-lucide="truck"></i>
</div>
<div className="text-sm font-medium text-gray-900">Transport</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-green-600" data-lucide="sparkles"></i>
</div>
<div className="text-sm font-medium text-gray-900">Ménage</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-yellow-600" data-lucide="hotel"></i>
</div>
<div className="text-sm font-medium text-gray-900">Hôtellerie</div>
</div>
<div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-sm transition-all text-center">
<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-6 h-6 text-indigo-600" data-lucide="landmark"></i>
</div>
<div className="text-sm font-medium text-gray-900">Banque</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="candidats">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Pour les candidats</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Trouvez un emploi qui vous correspond</h2>
<p className="text-lg text-gray-600 mb-8">Créez votre profil en quelques minutes et postulez aux offres directement via WhatsApp. Totalement gratuit.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Inscription simple</h3>
<p className="text-sm text-gray-600">Créez votre compte avec votre numéro de téléphone ou WhatsApp</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="search"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Offres ciblées</h3>
<p className="text-sm text-gray-600">Filtrez par ville et secteur pour trouver les opportunités près de chez vous</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="bell"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Notifications instantanées</h3>
<p className="text-sm text-gray-600">Recevez les nouvelles offres directement par WhatsApp ou SMS</p>
</div>
</div>
</div>
<button className="mt-10 bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-base inline-flex items-center gap-2">
<span>Créer mon profil gratuit</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
<div className="space-y-6">
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Nom complet</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="Jean Mukendi" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Numéro WhatsApp</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="+243 XXX XXX XXX" type="tel"/>
</div>
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Ville</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white">
<option>Kinshasa</option>
<option>Lubumbashi</option>
<option>Goma</option>
<option>Bukavu</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Secteur recherché</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white">
<option>Restauration</option>
<option>Hôtellerie</option>
<option>Transport</option>
<option>Logistique</option>
</select>
</div>
<button className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Créer mon profil
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="entreprises">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
<div className="border-b border-gray-200 pb-6 mb-6">
<h3 className="font-semibold text-gray-900 mb-4">Publier une offre d'emploi</h3>
<div className="space-y-4">
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Titre du poste</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white" placeholder="Serveur / Serveuse" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
<textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white resize-none" placeholder="Décrivez le poste et les compétences requises..." rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Salaire</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white" placeholder="200 USD" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-gray-700 mb-2 block">Lieu</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white" placeholder="Kinshasa" type="text"/>
</div>
</div>
</div>
</div>
<button className="w-full bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                            Publier l'offre
                        </button>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="briefcase"></i>
<span>Pour les entreprises</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Recrutez rapidement et efficacement</h2>
<p className="text-lg text-gray-600 mb-8">Publiez vos offres d'emploi et connectez-vous avec des candidats qualifiés en quelques clics.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Publication instantanée</h3>
<p className="text-sm text-gray-600">Créez et publiez une offre en moins de 5 minutes</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-600" data-lucide="target"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Candidats ciblés</h3>
<p className="text-sm text-gray-600">Recevez des candidatures de profils correspondant à vos besoins</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="wallet"></i>
</div>
<div>
<h3 className="font-medium text-gray-900 mb-1">Paiement flexible</h3>
<p className="text-sm text-gray-600">Mobile Money, virement bancaire et facturation simplifiée</p>
</div>
</div>
</div>
<button className="mt-10 bg-gray-900 text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-base inline-flex items-center gap-2">
<span>Commencer à recruter</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="tarifs">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Tarifs transparents</h2>
<p className="text-lg text-gray-600">Gratuit pour les candidats. Flexible pour les entreprises.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl border border-gray-200 p-8">
<div className="text-sm font-medium text-blue-600 mb-2">Candidats</div>
<div className="text-3xl font-semibold text-gray-900 mb-1">Gratuit</div>
<div className="text-sm text-gray-600 mb-8">Pour toujours</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Profil complet</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Candidatures illimitées</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Notifications WhatsApp</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Support inclus</span>
</li>
</ul>
<button className="w-full bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                        Créer mon compte
                    </button>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8">
<div className="text-sm font-medium text-gray-600 mb-2">Entreprise - Gratuit</div>
<div className="text-3xl font-semibold text-gray-900 mb-1">0 USD</div>
<div className="text-sm text-gray-600 mb-8">Idéal pour démarrer</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">1 offre active / mois</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Accès aux candidatures</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-600 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-600">Tableau de bord basique</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-gray-300 flex-shrink-0" data-lucide="x"></i>
<span className="text-gray-400">Offres sponsorisées</span>
</li>
</ul>
<button className="w-full border border-gray-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Commencer gratuitement
                    </button>
</div>

<div className="bg-blue-600 rounded-2xl border-2 border-blue-600 p-8 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Populaire
                    </div>
<div className="text-sm font-medium text-blue-100 mb-2">Entreprise - Pro</div>
<div className="text-3xl font-semibold text-white mb-1">15–30 USD</div>
<div className="text-sm text-blue-100 mb-8">Par mois</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check"></i>
<span className="text-white">Offres illimitées</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check"></i>
<span className="text-white">Visibilité accrue</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check"></i>
<span className="text-white">Offres sponsorisées</span>
</li>
<li className="flex gap-3 text-sm">
<i className="w-5 h-5 text-green-400 flex-shrink-0" data-lucide="check"></i>
<span className="text-white">Support prioritaire</span>
</li>
</ul>
<button className="w-full bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                        Passer Pro
                    </button>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-gray-600">Commission success fee : 5–10% du premier salaire en cas d'embauche réussie</p>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Comment ça marche ?</h2>
<p className="text-lg text-gray-600">Un processus simple en 3 étapes</p>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-semibold">1</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Inscrivez-vous</h3>
<p className="text-gray-600">Créez votre compte candidat ou entreprise en quelques secondes avec votre numéro de téléphone</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-semibold">2</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Trouvez ou Publiez</h3>
<p className="text-gray-600">Consultez les offres d'emploi ou publiez votre annonce pour recruter des talents locaux</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-semibold">3</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Connectez-vous</h3>
<p className="text-gray-600">Postulez via WhatsApp ou recevez des candidatures directement sur votre tableau de bord</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">Prêt à démarrer ?</h2>
<p className="text-xl text-blue-100 mb-10">Rejoignez ReStart360 RDC et participez à la transformation de l'emploi au Congo</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-blue-600 font-medium px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base">
                    Créer mon compte candidat
                </button>
<button className="bg-blue-800 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-base border border-blue-700">
                    Inscription entreprise
                </button>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="bg-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-base tracking-tight">R360</div>
</div>
<p className="text-sm">La plateforme congolaise pour l'emploi et la réinsertion professionnelle.</p>
</div>
<div>
<h3 className="text-white font-medium mb-4 text-sm">Candidats</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Créer un profil</a></li>
<li><a className="hover:text-white transition-colors" href="#">Voir les offres</a></li>
<li><a className="hover:text-white transition-colors" href="#">Aide</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4 text-sm">Entreprises</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Publier une offre</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4 text-sm">Contact</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>contact@restart360.cd</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>+243 XXX XXX XXX</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Kinshasa, RDC</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm">© 2024 ReStart360 RDC. Tous droits réservés.</p>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Conditions d'utilisation</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
