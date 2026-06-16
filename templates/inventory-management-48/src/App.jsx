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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 text-white rounded-md flex items-center justify-center font-semibold tracking-tighter text-sm">
                    GDS
                </div>
<span className="font-medium text-sm text-gray-900">Projet v1.0</span>
</div>
<nav className="hidden sm:flex gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#objectifs">Objectifs</a>
<a className="hover:text-gray-900 transition-colors" href="#fonctionnalites">Fonctionnalités</a>
<a className="hover:text-gray-900 transition-colors" href="#technique">Technique</a>
<a className="hover:text-gray-900 transition-colors" href="#planning">Planning</a>
</nav>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

<section className="max-w-3xl pt-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                Document de Spécifications
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                Digitalisation &amp; Optimisation de la Gestion des Stocks
            </h1>
<p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dans un environnement économique marqué par la digitalisation, la gestion efficace des stocks constitue un enjeu stratégique. Ce projet vise à remplacer les méthodes traditionnelles limitées par un système digital intégré offrant fiabilité, traçabilité et rapidité.
            </p>
<div className="flex items-center gap-4">
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm" href="#fonctionnalites">
                    Explorer les modules
                </a>
<a className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm" href="#planning">
                    Voir le planning
                </a>
</div>
</section>

<section className="scroll-mt-24" id="objectifs">
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 mb-6">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Objectif Principal</h2>
<p className="text-gray-500 text-sm leading-relaxed flex-grow">
                        Mettre en place une application de gestion de stock permettant une gestion automatisée, fiable et en temps réel pour l'ensemble de l'organisation.
                    </p>
</div>

<div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                        Objectifs Spécifiques &amp; Périmètre
                    </h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Gérer les entrées et sorties de stock
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Améliorer la traçabilité des mouvements
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Fournir des indicateurs d’aide à la décision
                            </li>
</ul>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Réduire les erreurs de gestion
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Optimiser les niveaux de stock
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                Générer des rapports dynamiques
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 space-y-8" id="fonctionnalites">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Exigences Fonctionnelles</h2>
<p className="text-gray-500 text-sm">Les modules centraux qui composent l'application.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-800 mb-4">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Gestion des produits</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Ajouter, modifier, supprimer</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Définir un seuil minimum</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Catégorisation avancée</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-800 mb-4">
<iconify-icon icon="solar:round-transfer-horizontal-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Mouvements de stock</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Enregistrement entrées/sorties</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Horodatage automatique</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Association utilisateur/action</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-800 mb-4">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">État du stock</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Calcul automatisé</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Consultation en temps réel</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Historique immuable</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Système d'alertes</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-300"></span> Notification de stock faible</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-300"></span> Signalement des ruptures</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-800 mb-4">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Tableau de bord</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Visualisation graphique</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Top produits utilisés</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Évolution temporelle</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-gray-200 transition-colors">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-800 mb-4">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Gestion des accès</h3>
<ul className="space-y-2 text-sm text-gray-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Authentification sécurisée</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-300"></span> Rôles et permissions (RBAC)</li>
</ul>
</div>
</div>
</section>

<section className="scroll-mt-24 grid md:grid-cols-2 gap-12" id="technique">

<div className="space-y-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Profils Utilisateurs</h2>
<p className="text-gray-500 text-sm">Niveaux d'accès au système.</p>
</div>
<div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 font-medium">
<tr>
<th className="py-3 px-4">Profil</th>
<th className="py-3 px-4">Rôle &amp; Droits</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-bold-linear"></iconify-icon> Administrateur
                                </td>
<td className="py-3 px-4 text-gray-600">Gestion complète du système</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-linear"></iconify-icon> Gestionnaire
                                </td>
<td className="py-3 px-4 text-gray-600">Gestion quotidienne des stocks</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:eye-linear"></iconify-icon> Observateur
                                </td>
<td className="py-3 px-4 text-gray-600">Consultation et lecture uniquement</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Exigences Techniques</h2>
<p className="text-gray-500 text-sm">Performances, sécurité et stack technologique.</p>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Python
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> Flask
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
<iconify-icon icon="solar:database-linear"></iconify-icon> MySQL / SQLite
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
<iconify-icon icon="solar:devices-linear"></iconify-icon> Web Responsive
                    </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-2 text-gray-900 font-medium text-sm mb-1">
<iconify-icon className="text-gray-400" icon="solar:bolt-linear"></iconify-icon> Performance
                        </div>
<p className="text-xs text-gray-500">Réponse &lt; 3s, multi-utilisateurs.</p>
</div>
<div className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-2 text-gray-900 font-medium text-sm mb-1">
<iconify-icon className="text-gray-400" icon="solar:shield-check-linear"></iconify-icon> Sécurité
                        </div>
<p className="text-xs text-gray-500">Protection et auth sécurisée.</p>
</div>
<div className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-2 text-gray-900 font-medium text-sm mb-1">
<iconify-icon className="text-gray-400" icon="solar:monitor-smartphone-linear"></iconify-icon> Ergonomie
                        </div>
<p className="text-xs text-gray-500">Intuitive, moderne, navigation simple.</p>
</div>
<div className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-2 text-gray-900 font-medium text-sm mb-1">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Disponibilité
                        </div>
<p className="text-xs text-gray-500">Accessible 24/7, sauvegardes régulières.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="planning">
<div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Planning Prévisionnel</h2>
<div className="relative border-l border-gray-100 ml-3 space-y-8">
<div className="relative pl-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-50 rounded-full -left-3 ring-4 ring-white border border-gray-200">
<span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
</span>
<h3 className="font-medium text-sm text-gray-900">Analyse des besoins</h3>
<time className="block text-xs text-gray-500 mt-1">Durée : 1 semaine</time>
</div>
<div className="relative pl-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-50 rounded-full -left-3 ring-4 ring-white border border-gray-200">
<span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
</span>
<h3 className="font-medium text-sm text-gray-900">Conception</h3>
<time className="block text-xs text-gray-500 mt-1">Durée : 1 semaine</time>
</div>
<div className="relative pl-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-50 rounded-full -left-3 ring-4 ring-white border border-blue-100">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
</span>
<h3 className="font-medium text-sm text-blue-900">Développement</h3>
<time className="block text-xs text-blue-600 mt-1">Durée : 2 semaines</time>
</div>
<div className="relative pl-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-50 rounded-full -left-3 ring-4 ring-white border border-gray-200">
<span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
</span>
<h3 className="font-medium text-sm text-gray-900">Tests</h3>
<time className="block text-xs text-gray-500 mt-1">Durée : 1 semaine</time>
</div>
<div className="relative pl-6">
<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full -left-3 ring-4 ring-white">
<iconify-icon className="text-white text-xs" icon="solar:rocket-linear"></iconify-icon>
</span>
<h3 className="font-medium text-sm text-gray-900">Déploiement</h3>
<time className="block text-xs text-gray-500 mt-1">Durée : 1 semaine</time>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Gestion des Risques</h2>
<ul className="space-y-4">
<li className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-linear"></iconify-icon>
                                        Mauvaise utilisation
                                    </span>
</div>
<p className="text-xs text-gray-500 pl-6">Solution : Formation approfondie des utilisateurs.</p>
</li>
<li className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-linear"></iconify-icon>
                                        Panne système
                                    </span>
</div>
<p className="text-xs text-gray-500 pl-6">Solution : Mise en place de sauvegardes régulières.</p>
</li>
<li className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-gray-900 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-linear"></iconify-icon>
                                        Résistance au changement
                                    </span>
</div>
<p className="text-xs text-gray-500 pl-6">Solution : Sensibilisation et accompagnement des équipes.</p>
</li>
</ul>
<div className="mt-8 p-6 bg-gray-900 rounded-xl text-white">
<h4 className="text-sm font-medium mb-2 flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Livrables
                            </h4>
<p className="text-xs text-gray-300 leading-relaxed">
                                Application fonctionnelle, Base de données opérationnelle, Documentation technique, Manuel utilisateur et Rapport de projet.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto text-center border-t border-gray-200/60 pt-16 pb-8">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Conclusion du Projet</h2>
<p className="text-sm text-gray-500 leading-relaxed">
                Le développement de cette application permettra d’améliorer significativement la gestion des stocks à travers la digitalisation, la traçabilité et l’aide à la décision. Il s’inscrit dans une démarche de modernisation des systèmes d’information et d’optimisation des performances organisationnelles.
            </p>
</section>
</main>

    </>
  );
}
