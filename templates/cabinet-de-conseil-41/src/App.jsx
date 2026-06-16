import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg group-hover:scale-105 transition-transform">
                    S
                </div>
<span className="text-slate-900 font-semibold tracking-tight text-lg">SBM Conseils</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#expertises">Expertises</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#apropos">À propos</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#blog">Actualités</a>
<a className="text-sm font-medium px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group" href="#contact">
                    Contactez-nous
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Partenaire de votre croissance
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Transformez votre vision en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">performance durable.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Cabinet de conseil et d'audit dédié aux TPE/PME. Nous structurons vos finances, optimisons vos ressources humaines et pilotons votre stratégie de développement.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20" href="#contact">
                    Discuter de votre projet
                </a>
<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-600 font-medium flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all" href="#expertises">
                    Découvrir nos solutions
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-400 font-medium mb-8">ILS NOUS FONT CONFIANCE POUR LEUR DÉVELOPPEMENT</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><iconify-icon icon="lucide:triangle" width="24"></iconify-icon> VERTEX</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><iconify-icon icon="lucide:circle" width="24"></iconify-icon> ORBITAL</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><iconify-icon icon="lucide:square" width="24"></iconify-icon> STRATA</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800"><iconify-icon icon="lucide:diamond" width="24"></iconify-icon> PRISMA</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="expertises">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Nos domaines d'expertise</h2>
<p className="text-slate-500 text-lg leading-relaxed">
                        Une approche 360° pour accompagner les dirigeants dans leurs défis quotidiens et stratégiques.
                    </p>
</div>
<a className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2" href="#">
                    Voir toutes les offres <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Gestion Financière</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Optimisation de la rentabilité, suivi de trésorerie, élaboration de budgets prévisionnels et contrôle de gestion pour sécuriser vos marges.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Tableaux de bord
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Analyse des coûts
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Ressources Humaines</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Structuration de la politique RH, aide au recrutement, gestion des compétences et conformité sociale pour fidéliser vos talents.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Recrutement &amp; Intégration
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Audit Social
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Stratégie &amp; Conseil</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Accompagnement du dirigeant, diagnostic opérationnel et définition des axes de croissance pour pérenniser l'activité.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Business Plan
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
                            Conduite du changement
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden" id="apropos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Une approche sur-mesure pour chaque entreprise</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Chez SBM Conseils, nous ne croyons pas aux solutions toutes faites. Nous analysons l'ADN de votre structure pour proposer des leviers d'action concrets et mesurables.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-blue-400" icon="lucide:target" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">Diagnostic Précis</h4>
<p className="text-slate-400 text-sm">Audit complet de vos processus internes pour identifier les points de friction.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-blue-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">Réactivité &amp; Proximité</h4>
<p className="text-slate-400 text-sm">Une équipe dédiée, disponible pour répondre à vos urgences managériales.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-blue-400" icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">Résultats Mesurables</h4>
<p className="text-slate-400 text-sm">Mise en place de KPI clairs pour suivre l'impact de nos actions.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full bg-slate-800 rounded-2xl border border-slate-700 p-8 overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>

<div className="relative z-10 flex flex-col gap-4">
<div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl w-3/4 self-end shadow-2xl transform group-hover:-translate-x-2 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><iconify-icon icon="lucide:activity" width="16"></iconify-icon></div>
<div className="h-2 w-24 bg-slate-700 rounded-full"></div>
</div>
<div className="h-16 w-full bg-slate-800/50 rounded-lg flex items-end gap-1 p-2">
<div className="w-full bg-blue-500/40 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-500/60 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-blue-500/80 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-blue-500 rounded-t-sm h-[90%]"></div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl w-3/4 shadow-2xl transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-300 font-medium">Performance RH</span>
<span className="text-xs text-green-400 font-medium">+12%</span>
</div>
<div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[85%] rounded-full"></div>
</div>
<div className="mt-4 flex gap-2">
<div className="h-2 w-8 bg-slate-600 rounded-full"></div>
<div className="h-2 w-16 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-slate-200 pb-16">
<div className="text-center">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">15+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Années d'expérience</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">250+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Clients accompagnés</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">4</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Pôles d'expertise</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">100%</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Indépendance</div>
</div>
</div>
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Besoin d'un audit flash ?</h3>
<p className="text-slate-500 mb-8">
                    Obtenez une première analyse de votre situation gratuitement. Nos experts reviennent vers vous sous 24h.
                </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="votre@email.com" type="email"/>
<button className="h-12 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm" type="button">
                        Demander mon audit
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
<span className="text-slate-900 font-semibold tracking-tight">SBM Conseils</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Expertise comptable, conseil stratégique et solutions RH pour les entreprises qui voient loin.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Gestion &amp; Finance</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Ressources Humaines</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Stratégie Commerciale</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Audit Organisationnel</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Entreprise</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Qui sommes-nous</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Carrières</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog Actualités</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Nous contacter</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-500">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:map-pin" width="16"></iconify-icon>
                            123 Avenue de la République, 75011 Paris
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="shrink-0" icon="lucide:phone" width="16"></iconify-icon>
                            +33 1 23 45 67 89
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="shrink-0" icon="lucide:mail" width="16"></iconify-icon>
                            contact@sbm-solutions.fr
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 SBM Conseils &amp; Solutions. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Mentions Légales</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
