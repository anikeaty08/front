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
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-blue-600">EURIDIS</span>
</div>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors shadow-sm" href="#inscription">
                S'inscrire
            </a>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-grid-pattern relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span>Prochain événement : 16 Avril</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 leading-tight mb-6">
                Booste ton avenir dès aujourd'hui.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                Participe à la Journée Portes Ouvertes d'Euridis Montpellier. Découvre nos formations, rencontre nos étudiants et trouve la voie qui fera décoller ta carrière.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg" href="#inscription">
                    Je réserve ma place
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<p className="text-xs text-neutral-400 sm:hidden mt-2">Places limitées</p>
</div>
</div>

<div className="max-w-5xl mx-auto mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:calendar-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Date</p>
<p className="text-sm text-neutral-500">Mardi 16 avril</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Horaires</p>
<p className="text-sm text-neutral-500">De 10h00 à 17h00</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Lieu</p>
<p className="text-sm text-neutral-500">16 bd du Jeu de Paume, Montpellier</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 px-6 border-y border-neutral-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Pourquoi participer ?</h2>
<p className="text-base text-neutral-500 max-w-xl mx-auto">Une journée pensée pour t'accompagner dans tes choix d'orientation et te projeter dans ton futur métier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-3xl bg-white border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Découvrir des métiers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Plonge dans le concret des métiers du commerce et de la négociation BtoB.</p>
</div>

<div className="p-6 rounded-3xl bg-white border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Trouver ta voie</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Échange avec nos conseillers pour définir le parcours qui te correspond vraiment.</p>
</div>

<div className="p-6 rounded-3xl bg-white border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Booster ton avenir</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Profite de notre réseau d'entreprises partenaires pour décrocher une alternance.</p>
</div>

<div className="p-6 rounded-3xl bg-white border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">École professionnalisante</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Intègre un cursus reconnu axé sur la pratique et l'employabilité immédiate.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Au programme</h2>
<p className="text-base text-neutral-500">Gère ton temps comme tu le souhaites entre 10h et 17h, ou suis nos temps forts.</p>
</div>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-medium text-neutral-900">Accueil &amp; Petit-déjeuner</h3>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">En continu</span>
</div>
<p className="text-sm text-neutral-500">Commence la journée dans une ambiance conviviale avec l'équipe du campus.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-medium text-neutral-900">Présentation des formations</h3>
<span className="text-xs font-medium text-neutral-500 bg-white border border-neutral-200 px-2 py-1 rounded-md">11h00 &amp; 14h30</span>
</div>
<p className="text-sm text-neutral-500">Découvre nos cursus de post-bac à Bac+5 et nos méthodes pédagogiques.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-medium text-neutral-900">Rencontre Étudiants &amp; Intervenants</h3>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">En continu</span>
</div>
<p className="text-sm text-neutral-500">Pose toutes tes questions à ceux qui vivent l'expérience Euridis au quotidien.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-medium text-neutral-900">Visite du campus</h3>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">En continu</span>
</div>
<p className="text-sm text-neutral-500">Explore tes futurs espaces de travail, de vie et de détente.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white border-y border-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Ils seront là pour toi</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto">Une équipe dédiée pour t'orienter et te conseiller tout au long de la journée.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm">
<div className="w-14 h-14 rounded-full bg-neutral-700 flex items-center justify-center text-lg font-medium text-neutral-300 shrink-0">
                        ML
                    </div>
<div>
<h4 className="text-base font-medium">Marc Lemaire</h4>
<p className="text-sm text-neutral-400">Directeur du Campus</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm">
<div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center text-lg font-medium text-blue-300 shrink-0">
                        SD
                    </div>
<div>
<h4 className="text-base font-medium">Sophie Dubois</h4>
<p className="text-sm text-neutral-400">Responsable Admissions</p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm">
<div className="w-14 h-14 rounded-full bg-neutral-700 flex items-center justify-center text-lg font-medium text-neutral-300 shrink-0">
                        JB
                    </div>
<div>
<h4 className="text-base font-medium">Julien Bernard</h4>
<p className="text-sm text-neutral-400">Étudiant Ambassadeur</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 text-center mb-16">Ils ont trouvé leur voie</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-neutral-100" icon="solar:quote-right-bold" width="40"></iconify-icon>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed relative z-10">
                        "Je ne savais pas vraiment quoi faire après mon bac. Venir à la JPO m'a permis de discuter avec des étudiants qui avaient les mêmes doutes que moi. Aujourd'hui, je suis en alternance dans une super boîte."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-500">LC</div>
<div>
<p className="text-sm font-medium text-neutral-900">Léa C.</p>
<p className="text-xs text-neutral-500">Étudiante Bachelor 1</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-neutral-100" icon="solar:quote-right-bold" width="40"></iconify-icon>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed relative z-10">
                        "Ce qui m'a marqué, c'est l'accompagnement. Dès la JPO, on nous explique comment l'école nous aide à trouver une entreprise. C'est hyper rassurant quand on cherche une alternance."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-500">TM</div>
<div>
<p className="text-sm font-medium text-neutral-900">Thomas M.</p>
<p className="text-xs text-neutral-500">Étudiant Mastère</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="inscription">
<div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2.5rem] bg-neutral-900 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                    Prêt à lancer ta carrière ?
                </h2>
<p className="text-base text-neutral-400 mb-10 max-w-xl mx-auto">
                    Réserve ta place dès maintenant. <span className="text-white font-medium">Attention, les places sont limitées</span> pour garantir des échanges de qualité le jour J.
                </p>
<form className="max-w-md mx-auto flex flex-col gap-3">
<input className="w-full px-5 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="Ton adresse email" required="" type="email"/>
<button className="w-full px-5 py-3.5 bg-white text-neutral-900 font-medium rounded-xl hover:bg-neutral-100 transition-colors text-sm flex items-center justify-center gap-2" type="submit">
                        Je m'inscris gratuitement
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-xs text-neutral-500 mt-2">En t'inscrivant, tu recevras le programme détaillé par email.</p>
</form>
</div>
</div>
</section>

<footer className="py-10 border-t border-neutral-100 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-neutral-300">EURIDIS</span>
</div>
<p className="text-xs text-neutral-400">© 2024 Euridis Business School. Campus de Montpellier.</p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
