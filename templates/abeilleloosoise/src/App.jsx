import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fffbeb',
100: '#fef3c7',
400: '#fbbf24',
500: '#f59e0b', // Amber 500
600: '#d97706',
900: '#78350f',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        function switchView(viewName) {
            // Hide all views
            document.getElementById('view-landing').classList.add('hidden');
            document.getElementById('view-user').classList.add('hidden');
            document.getElementById('view-admin').classList.add('hidden');
            
            // Show selected view
            document.getElementById('view-' + viewName).classList.remove('hidden');
            
            // Reset scroll
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="switchView('landing')">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter shadow-sm">
                        AL
                    </div>
<span className="font-semibold text-sm tracking-tight text-zinc-900">Les Abeilles Loossoises</span>
</div>

<div className="hidden md:flex space-x-8">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="switchView('landing')">Accueil</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Le Club</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Compétitions</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Contact</button>
</div>

<div className="flex items-center gap-3">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold hidden sm:block">Vue Démo</span>
<button className="group px-3 py-1.5 rounded-md bg-white border border-zinc-200 text-xs font-medium hover:border-zinc-300 transition-all shadow-sm flex items-center gap-2" onclick="switchView('user')">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
<span className="hidden sm:inline">Espace Parent</span>
</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2" onclick="switchView('admin')">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
<span className="hidden sm:inline">Admin</span>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-16 relative">

<section className="animate-fade-in block" id="view-landing">

<div className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-brand-100/50 to-transparent rounded-[100%] blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
<span className="text-[10px] font-medium uppercase tracking-wide text-zinc-600">Inscriptions ouvertes 2024-2025</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6">
                        L'excellence gymnique <br className="hidden md:block"/> pour tous les âges.
                    </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Rejoignez les Abeilles Loossoises. De l'éveil gymnique à la compétition de haut niveau, nous formons les talents de demain dans un environnement bienveillant et structuré.
                    </p>
<div className="flex justify-center gap-4">
<button className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-lg shadow-sm shadow-brand-500/20 transition-all flex items-center gap-2" onclick="switchView('user')">
                            M'inscrire maintenant
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-6 py-2.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-all">
                            Découvrir le planning
                        </button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
<span className="iconify" data-icon="lucide:medal" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Compétitions FFG</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Accès aux compétitions départementales, régionales et nationales avec un suivi personnalisé.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 mb-4">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Baby Gym &amp; Loisirs</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Des cours adaptés dès 2 ans pour développer la motricité et le plaisir du sport en groupe.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 mb-4">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Paiement Simplifié</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Gérez vos cotisations, licences et équipements directement depuis votre espace personnel.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden min-h-[calc(100vh-64px)] bg-zinc-50" id="view-user">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="sticky top-24">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<h2 className="text-sm font-semibold text-zinc-900">Sophie Martin</h2>
<p className="text-xs text-zinc-500">Adhérent #2891</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-brand-600 bg-brand-50 rounded-md" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
                                    Vue d'ensemble
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:users-round" data-width="18"></span>
                                    Mes Enfants
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:calendar" data-width="18"></span>
                                    Compétitions
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:credit-card" data-width="18"></span>
                                    Paiements
                                </a>
</nav>
</div>
</aside>

<div className="flex-1 space-y-6">

<div className="p-4 rounded-xl bg-white border border-brand-200 shadow-sm flex items-start gap-3">
<span className="iconify text-brand-500 mt-0.5" data-icon="lucide:alert-circle" data-width="18"></span>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Cotisation annuelle en attente</h3>
<p className="text-xs text-zinc-500 mt-1">La licence pour Léa Martin n'a pas encore été réglée. Veuillez régulariser avant le 15 Septembre.</p>
</div>
<button className="ml-auto text-xs font-medium text-brand-600 hover:text-brand-700 whitespace-nowrap">Payer maintenant</button>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="p-6 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-zinc-900">Mes enfants inscrits</h3>
<button className="text-xs flex items-center gap-1.5 bg-zinc-900 text-white px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Ajouter
                                </button>
</div>
<div className="divide-y divide-zinc-100">

<div className="p-6 flex items-center justify-between group hover:bg-zinc-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-semibold">LM</div>
<div>
<p className="text-sm font-medium text-zinc-900">Léa Martin</p>
<p className="text-xs text-zinc-500">Groupe: Compétition Fédérale A • 12 ans</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-green-100 text-green-700">Licence Validée</span>
<button className="text-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</div>
</div>

<div className="p-6 flex items-center justify-between group hover:bg-zinc-50/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">TM</div>
<div>
<p className="text-sm font-medium text-zinc-900">Thomas Martin</p>
<p className="text-xs text-zinc-500">Groupe: Baby Gym • 4 ans</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-amber-100 text-amber-700">Paiement Requis</span>
<button className="text-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:chevron-right" data-width="20"></span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Championnat Départemental</h3>
<p className="text-xs text-zinc-500 mt-1">Lille • 24 Octobre 2024</p>
</div>
<div className="p-2 bg-zinc-50 rounded-md border border-zinc-100">
<span className="iconify text-zinc-400" data-icon="lucide:map-pin" data-width="16"></span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-600">Léa Martin</span>
<button className="text-xs text-brand-600 font-medium hover:text-brand-700">Gérer l'inscription</button>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6 opacity-60">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Coupe Régionale</h3>
<p className="text-xs text-zinc-500 mt-1">Arras • 12 Décembre 2024</p>
</div>
<div className="p-2 bg-zinc-50 rounded-md border border-zinc-100">
<span className="iconify text-zinc-400" data-icon="lucide:lock" data-width="16"></span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400 italic">Inscriptions bientôt ouvertes</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden min-h-[calc(100vh-64px)] bg-zinc-50" id="view-admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight">Tableau de bord</h1>
<p className="text-sm text-zinc-500 mt-1">Gestion de l'association et suivi des adhésions.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-white border border-zinc-200 text-zinc-700 text-xs font-medium rounded-md hover:bg-zinc-50 shadow-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                            Export
                        </button>
<button className="px-3 py-2 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 shadow-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                            Créer Compétition
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Adhérents Totaux</p>
<p className="text-2xl font-semibold text-zinc-900 mt-2 tracking-tight">342</p>
<div className="flex items-center gap-1 mt-1 text-green-600">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
<span className="text-[10px] font-medium">+12% vs N-1</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Revenus (Annuel)</p>
<p className="text-2xl font-semibold text-zinc-900 mt-2 tracking-tight">42,500€</p>
<div className="mt-2 w-full bg-zinc-100 rounded-full h-1">
<div className="bg-zinc-900 h-1 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Inscrits Compétition</p>
<p className="text-2xl font-semibold text-zinc-900 mt-2 tracking-tight">86</p>
<p className="text-[10px] text-zinc-400 mt-1">Prochaine: 24 Oct.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Dossiers Incomplets</p>
<p className="text-2xl font-semibold text-amber-500 mt-2 tracking-tight">14</p>
<p className="text-[10px] text-zinc-400 mt-1">Action requise</p>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/30">
<div className="flex gap-4">
<button className="text-xs font-semibold text-zinc-900 border-b-2 border-zinc-900 pb-4 -mb-4.5">Membres récents</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-700 pb-4 -mb-4.5">Paiements en attente</button>
</div>
<div className="relative">
<input className="pl-8 pr-3 py-1.5 text-xs border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300 w-48 bg-white" placeholder="Rechercher..." type="text"/>
<span className="iconify absolute left-2.5 top-2 text-zinc-400" data-icon="lucide:search" data-width="14"></span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-100 text-xs text-zinc-500 uppercase tracking-wider bg-zinc-50/50">
<th className="px-6 py-3 font-medium">Adhérent</th>
<th className="px-6 py-3 font-medium">Groupe</th>
<th className="px-6 py-3 font-medium">Statut Paiement</th>
<th className="px-6 py-3 font-medium">Date d'inscription</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-50 text-sm">
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-100 to-brand-200 flex items-center justify-center text-[10px] font-bold text-brand-700">JB</div>
<div>
<div className="font-medium text-zinc-900">Jules Bernard</div>
<div className="text-[10px] text-zinc-500">Parent: Marc Bernard</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-600">Poussins (6-8 ans)</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1 h-1 rounded-full bg-green-600"></span> Payé (Stripe)
                                        </span>
</td>
<td className="px-6 py-3.5 text-zinc-500 text-xs">03 Oct 2024</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600">CL</div>
<div>
<div className="font-medium text-zinc-900">Chloé Leroy</div>
<div className="text-[10px] text-zinc-500">Parent: Sarah Leroy</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-600">Gym Rythmique B</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span> En attente
                                        </span>
</td>
<td className="px-6 py-3.5 text-zinc-500 text-xs">02 Oct 2024</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-600">MD</div>
<div>
<div className="font-medium text-zinc-900">Maxime Dubois</div>
<div className="text-[10px] text-zinc-500">Parent: Paul Dubois</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 text-zinc-600">TeamGym Découverte</td>
<td className="px-6 py-3.5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1 h-1 rounded-full bg-green-600"></span> Payé (Virement)
                                        </span>
</td>
<td className="px-6 py-3.5 text-zinc-500 text-xs">01 Oct 2024</td>
<td className="px-6 py-3.5 text-right">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 mt-auto">
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs font-bold">AL</div>
<span className="text-xs text-zinc-500">© 2024 Les Abeilles Loossoises.</span>
</div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><span className="iconify" data-icon="lucide:mail" data-width="16"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
