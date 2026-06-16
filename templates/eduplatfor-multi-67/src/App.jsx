import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
extend: {
colors: {
slate: { 850: '#1e293b' }, // Custom dark
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-hidden bg-white">

<div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50/50 skew-y-3 -z-10 origin-top-left"></div>
<div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

<div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
<div className="mb-8">
<div className="flex items-center gap-2 mb-6 text-indigo-600">
<span className="tracking-tight font-semibold text-xl">LUMINA</span>
</div>
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Espace Parents &amp; Enseignants</h2>
<p className="text-sm text-slate-400 font-light">Gérez la progression et les classes.</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Adresse email</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 placeholder:font-light" placeholder="nom@ecole.com" type="email"/>
<iconify-icon className="absolute left-3.5 top-3 text-slate-400 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Mot de passe</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 placeholder:font-light" placeholder="••••••••" type="password"/>
<iconify-icon className="absolute left-3.5 top-3 text-slate-400 text-lg" icon="solar:lock-password-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium" type="button">Mot de passe oublié ?</button>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2" type="button">
<span>Se connecter</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="p-8 lg:p-12 bg-slate-50 flex flex-col justify-center relative">
<div className="absolute top-6 right-6">
<span className="bg-white border border-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-500 shadow-sm">Mode Enfant</span>
</div>
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">C'est qui ?</h2>
<p className="text-sm text-slate-400 font-light">Choisis ton avatar pour commencer à jouer !</p>
</div>
<div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">

<button className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 focus:outline-none">
<div className="w-24 h-24 rounded-full bg-teal-100 border-4 border-white shadow-sm group-hover:shadow-md group-hover:border-teal-200 transition-all overflow-hidden flex items-center justify-center text-3xl">
                             🦁
                        </div>
<span className="text-sm font-medium text-slate-700 group-hover:text-teal-600">Léo</span>
</button>

<button className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 focus:outline-none">
<div className="w-24 h-24 rounded-full bg-rose-100 border-4 border-white shadow-sm group-hover:shadow-md group-hover:border-rose-200 transition-all overflow-hidden flex items-center justify-center text-3xl">
                             🦊
                        </div>
<span className="text-sm font-medium text-slate-700 group-hover:text-rose-600">Alice</span>
</button>

<button className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 focus:outline-none">
<div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-white shadow-sm group-hover:shadow-md group-hover:border-amber-200 transition-all overflow-hidden flex items-center justify-center text-3xl">
                             🐼
                        </div>
<span className="text-sm font-medium text-slate-700 group-hover:text-amber-600">Tom</span>
</button>

<button className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 focus:outline-none">
<div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-sm group-hover:shadow-md group-hover:border-slate-200 transition-all overflow-hidden flex items-center justify-center text-slate-300">
<iconify-icon className="text-3xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-light text-slate-400">Nouveau</span>
</button>
</div>
</div>
</div>
</section>
<div className="w-full h-4 bg-slate-200/50 border-y border-slate-200 mb-8 flex items-center justify-center text-xs font-mono text-slate-400 uppercase tracking-widest">Vue Dashboard Parent/Admin</div>

<div className="flex h-screen overflow-hidden bg-slate-50">

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="text-lg font-semibold tracking-tight text-slate-800">LUMINA <span className="text-indigo-600 text-xs align-top font-medium">Parents</span></span>
</div>
<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                    Vue d'ensemble
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Profils Enfants
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-2-linear"></iconify-icon>
                    Statistiques
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cup-star-linear"></iconify-icon>
                    Récompenses
                </a>
</nav>
<div className="p-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-red-600 rounded-lg text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon>
                    Déconnexion
                </a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-base font-medium text-slate-900">Tableau de bord</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-100">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" src="https://ui-avatars.com/api/?name=Parent+User&amp;background=random"/>
<span className="hidden md:block text-sm font-medium text-slate-700">Sophie Dupont</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Temps d'apprentissage</span>
<iconify-icon className="text-indigo-500 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">4h 12m</h3>
<span className="text-xs font-medium text-emerald-600">+12% cette semaine</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Activités complétées</span>
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">28</h3>
<span className="text-xs font-medium text-slate-400">sur 35 assignées</span>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Moyenne Globale</span>
<iconify-icon className="text-amber-500 text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">85%</h3>
<span className="text-xs font-medium text-emerald-600">Excellent</span>
</div>
</div>
</div>

<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-4">Suivi des Enfants</h3>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-xl">🦁</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Léo Dupont</h4>
<p className="text-xs text-slate-500 font-light">Niveau CE1 • 7 ans</p>
</div>
</div>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-600">Mathématiques</span>
<span className="text-slate-500">75%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-600">Français (Lecture)</span>
<span className="text-slate-500">90%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[10px]" title="Champion">🏆</div>
<div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px]" title="Lecteur">📚</div>
</div>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                                Voir détails <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow opacity-90">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-xl">🦊</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Alice Dupont</h4>
<p className="text-xs text-slate-500 font-light">Niveau CP • 6 ans</p>
</div>
</div>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-600">Mathématiques</span>
<span className="text-slate-500">45%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-600">Découverte</span>
<span className="text-slate-500">60%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px]">🎨</div>
</div>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                                Voir détails <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-slate-200">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-slate-900 tracking-tight flex items-center gap-2">
<span className="bg-emerald-100 text-emerald-700 p-1 rounded text-xs uppercase font-bold">Prof</span>
                            Gestion de Classe : CM2 A
                        </h3>
<button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
                            Nouveau Sujet
                        </button>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium uppercase tracking-wider">
<th className="px-6 py-3">Élève</th>
<th className="px-6 py-3">Progression</th>
<th className="px-6 py-3">Dernière activité</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">MA</div>
                                        Marc Antoine
                                    </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500" style={{width: '88%'}}></div>
</div>
<span className="text-xs text-emerald-600 font-medium">88%</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500 font-light">Il y a 2h - Géométrie</td>
<td className="px-6 py-4 text-right">
<button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">Assigner</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">CL</div>
                                        Chloé Laurent
                                    </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500" style={{width: '42%'}}></div>
</div>
<span className="text-xs text-amber-600 font-medium">42%</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500 font-light">Hier - Conjugaison</td>
<td className="px-6 py-4 text-right">
<button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">Assigner</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
<div className="w-full h-4 bg-slate-200/50 border-y border-slate-200 flex items-center justify-center text-xs font-mono text-slate-400 uppercase tracking-widest">Vue Interface Enfant</div>

<section className="min-h-screen bg-orange-50 font-sans selection:bg-orange-200 selection:text-orange-900">

<nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100 px-4 py-3">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-white shadow-sm flex items-center justify-center text-2xl">
                        🦁
                    </div>
<div>
<h1 className="text-base font-bold text-slate-800 leading-tight">Bonjour Léo !</h1>
<div className="flex items-center gap-2">
<div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
<div className="h-full bg-orange-400 rounded-full" style={{width: '70%'}}></div>
</div>
<span className="text-xs font-bold text-orange-500">Niveau 5</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 rounded-full border border-yellow-200 text-yellow-700">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-bold">1,240</span>
</div>
<button className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:scale-105 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-105 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="max-w-6xl mx-auto p-4 lg:p-8 space-y-8">

<div className="flex justify-center gap-2 mb-8">
<button className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 hover:scale-105 transition-transform">Facile</button>
<button className="px-4 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-200 border border-indigo-600 scale-110">Normal</button>
<button className="px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 hover:scale-105 transition-transform">Difficile</button>
</div>

<div>
<h2 className="text-xl font-bold text-slate-800 tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:gamepad-linear"></iconify-icon>
                    Tes Jeux
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="p-6 flex flex-col items-center text-center h-full">
<div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-5xl" icon="solar:text-square-bold"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 text-lg mb-1">Mots Trous</h3>
<p className="text-xs text-slate-500 font-medium mb-4">Complète les phrases</p>
<button className="mt-auto w-full py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">Jouer</button>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="p-6 flex flex-col items-center text-center h-full">
<div className="w-20 h-20 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-5xl" icon="solar:question-circle-bold"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 text-lg mb-1">Quiz Rapide</h3>
<p className="text-xs text-slate-500 font-medium mb-4">Choisis la bonne réponse</p>
<button className="mt-auto w-full py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm group-hover:bg-purple-500 group-hover:text-white transition-colors">Jouer</button>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">New</div>
<div className="p-6 flex flex-col items-center text-center h-full">
<div className="w-20 h-20 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-5xl" icon="solar:widget-5-bold"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 text-lg mb-1">Puzzle</h3>
<p className="text-xs text-slate-500 font-medium mb-4">Assemble les pièces</p>
<button className="mt-auto w-full py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">Jouer</button>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="p-6 flex flex-col items-center text-center h-full">
<div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-5xl" icon="solar:gallery-wide-bold"></iconify-icon>
</div>
<h3 className="font-bold text-slate-800 text-lg mb-1">Mémoire</h3>
<p className="text-xs text-slate-500 font-medium mb-4">Retrouve les paires</p>
<button className="mt-auto w-full py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">Jouer</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mt-8">
<h2 className="text-lg font-bold text-slate-800 tracking-tight mb-6 flex items-center justify-between">
<span className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:cup-star-linear"></iconify-icon>
                        Mes Trophées
                    </span>
<a className="text-xs font-semibold text-indigo-500 hover:text-indigo-600" href="#">Voir tout</a>
</h2>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

<div className="flex-shrink-0 w-24 flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-full bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center text-3xl shadow-sm">
                            🏆
                        </div>
<span className="text-xs font-bold text-slate-600 text-center leading-tight">Champion Quiz</span>
</div>

<div className="flex-shrink-0 w-24 flex flex-col items-center gap-2">
<div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-3xl shadow-sm">
                            🚀
                        </div>
<span className="text-xs font-bold text-slate-600 text-center leading-tight">Explorateur</span>
</div>

<div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 opacity-50 grayscale">
<div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-3xl">
                            🔒
                        </div>
<span className="text-xs font-medium text-slate-400 text-center leading-tight">Mathématicien</span>
</div>

<div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 opacity-50 grayscale">
<div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-3xl">
                            🔒
                        </div>
<span className="text-xs font-medium text-slate-400 text-center leading-tight">Super Lecteur</span>
</div>
</div>
</div>
</main>
</section>

    </>
  );
}
