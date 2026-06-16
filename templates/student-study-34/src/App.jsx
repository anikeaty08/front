import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
sage: {
50: '#F4F7F5',
100: '#E3EBE6',
200: '#C5D6CC',
300: '#A3C2B0',
500: '#6B9078',
600: '#4F705D',
800: '#2D4438',
900: '#1F3027',
}
},
animation: {
'blob': 'blob 7s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Initialize Lucide icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': 'lucide'
            }
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Navbar blur effect optimization
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.add('bg-sage-50/90');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.remove('bg-sage-50/90');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 bg-sage-50/80 backdrop-blur-md border-b border-sage-100 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.4),transparent_60%)]"></div>

<i className="w-5 h-5 text-cyan-100 relative z-10 -rotate-12 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] stroke-[1.5]" data-lucide="feather"></i>
</div>
<span className="font-semibold text-sage-900 tracking-tight text-lg">Allège</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-sage-800 transition-colors" href="#problem">Pourquoi Allège</a>
<a className="text-sm font-medium text-stone-500 hover:text-sage-800 transition-colors" href="#features">Fonctionnalités</a>
<a className="text-sm font-medium text-stone-500 hover:text-sage-800 transition-colors" href="#values">Nos Valeurs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-sage-800 hover:text-sage-600 transition-colors" href="#">Connexion</a>
<a className="px-5 py-2 rounded-full bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 transition-all hover:shadow-lg hover:shadow-sage-200 active:scale-95" href="#">
                    Télécharger
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-8 hover:border-sage-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
</span>
<span className="text-xs font-medium text-sage-800 tracking-wide uppercase">Maintenant disponible au Québec</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-sage-900 tracking-tight leading-[1.1] mb-6">
                Étudiez mieux.<br/>
<span className="text-stone-400">Respirez plus.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light reveal delay-100">
                L'application québécoise qui organise vos études, réduit la charge mentale et vous aide à travailler intelligemment. Enfin un outil qui respecte votre rythme.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 reveal delay-200">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1" href="#">
<i className="w-5 h-5" data-lucide="download"></i>
                    Télécharger l'app
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1" href="#how-it-works">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Voir comment ça marche
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto relative reveal delay-300 animate-float">
<div className="absolute inset-0 bg-gradient-to-t from-sage-50 via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>

<div className="absolute -inset-4 bg-gradient-to-r from-sage-200 to-stone-200 rounded-[2.5rem] blur-xl opacity-30"></div>
<div className="bg-white rounded-[2rem] border border-sage-100 shadow-2xl shadow-sage-200/50 p-6 md:p-12 relative z-0">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-sage-50 rounded-2xl p-6 flex flex-col justify-between h-64 md:h-80 relative overflow-hidden group hover:shadow-lg transition-all duration-500 cursor-default border border-transparent hover:border-sage-200">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-semibold text-sage-900">Charge Mentale</h3>
<p className="text-xs text-sage-600 mt-1">État : Équilibré</p>
</div>
<div className="p-2 bg-white rounded-full text-sage-600 shadow-sm">
<i className="w-5 h-5" data-lucide="brain"></i>
</div>
</div>
<div className="relative w-full h-32 flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-700">

<svg className="w-24 h-24 stroke-sage-500 fill-none stroke-[3] drop-shadow-md" viewbox="0 0 36 36">
<path className="stroke-sage-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<path className="stroke-sage-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="30, 100" strokeLinecap="round"></path>
</svg>
<span className="absolute text-2xl font-semibold text-sage-800 tracking-tight">30%</span>
</div>
<div className="w-full bg-white rounded-full h-10 flex items-center justify-center text-xs font-medium text-sage-600 shadow-sm border border-sage-100 group-hover:bg-sage-800 group-hover:text-white transition-colors duration-300">
                            Prendre une pause de 5 min
                        </div>
</div>

<div className="md:col-span-2 bg-white border border-sage-100 rounded-2xl p-6 h-auto md:h-80 flex flex-col hover:shadow-lg transition-all duration-500 group">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-sage-900">Focus du Jour</h3>
<span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md">24 Oct</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 border border-transparent hover:border-sage-200 hover:shadow-sm transition-all cursor-pointer group/item transform hover:scale-[1.02] duration-300">
<div className="w-5 h-5 rounded border-2 border-sage-300 flex items-center justify-center bg-white group-hover/item:border-sage-500 transition-colors"></div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-700">Plan de dissertation Philo</p>
<p className="text-xs text-stone-400">Cégep du Vieux Montréal • Pour Demain</p>
</div>
<span className="px-2 py-1 bg-red-50 text-red-700 text-[10px] font-medium rounded-md uppercase tracking-wide border border-red-100">Priorité Haute</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-stone-100 hover:border-sage-200 transition-all cursor-pointer opacity-60 hover:opacity-100">
<div className="w-5 h-5 rounded border-2 border-sage-200 flex items-center justify-center text-white bg-sage-500 border-none shadow-sm">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-stone-400 line-through">Révision Calcul Diff</p>
<p className="text-xs text-stone-300">Terminé il y a 2h</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white relative z-20" id="problem">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-sage-900 tracking-tight">Ce n'est pas vous.<br/>C'est la surcharge.</h2>
<p className="text-stone-500 leading-relaxed text-lg font-light">
                        Entre les travaux d'équipe, les examens et la vie sociale, le cerveau de l'étudiant moderne est constamment saturé. Vous ne manquez pas de discipline; vous manquez d'un système qui comprend vos limites humaines.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="alert-circle"></i>
</div>
<div>
<span className="block text-sm font-semibold text-sage-900">Sentiment de retard constant</span>
<span className="text-xs text-stone-400">La "dette" de productivité qui s'accumule.</span>
</div>
</div>
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<div>
<span className="block text-sm font-semibold text-sage-900">Paralysie décisionnelle</span>
<span className="text-xs text-stone-400">Ne pas savoir par où commencer.</span>
</div>
</div>
<div className="flex items-center gap-5 text-stone-600 group">
<div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="battery-warning"></i>
</div>
<div>
<span className="block text-sm font-semibold text-sage-900">Épuisement avant la mi-session</span>
<span className="text-xs text-stone-400">Le fameux burnout de novembre.</span>
</div>
</div>
</div>
</div>
<div className="relative bg-sage-50 rounded-[2.5rem] p-8 md:p-14 reveal delay-200 hover:shadow-xl transition-shadow duration-500 border border-transparent hover:border-sage-100">
<div className="absolute top-0 right-0 p-8 opacity-10 animate-pulse">
<i className="w-48 h-48 text-sage-400" data-lucide="cloud-rain"></i>
</div>
<blockquote className="relative z-10 text-xl md:text-2xl font-medium text-sage-800 leading-normal italic">
                        "Je regardais mon agenda et je figeais. Je ne savais tellement pas par où commencer que je finissais par scroller sur TikTok pendant 3 heures par évitement."
                    </blockquote>
<div className="mt-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-200 to-sage-300 shadow-inner"></div>
<div>
<p className="text-sm font-semibold text-sage-900">Sarah B.</p>
<p className="text-xs text-sage-600">Étudiante au Collège de Maisonneuve</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-sage-50 relative overflow-hidden" id="features">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[100px] animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-sage-200 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-sage-900 tracking-tight mb-4">Reprenez le contrôle avec Allège</h2>
<p className="text-stone-500 text-lg">Des outils conçus pour réduire votre anxiété, pas juste lister vos tâches.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-100">
<div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-600 flex items-center justify-center mb-6 shadow-inner">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-semibold text-sage-900 mb-2">Indice de Charge Mentale</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Visualisez votre capacité réelle. Allège vous avertit quand vous surchargez votre semaine avant que vous ne craquiez.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-200">
<div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center mb-6 shadow-inner">
<i className="w-6 h-6" data-lucide="calendar-check"></i>
</div>
<h3 className="text-lg font-semibold text-sage-900 mb-2">Organisation Intelligente</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        N'ajoutez pas juste des tâches. Allège les planifie intelligemment selon leur difficulté et votre énergie du moment.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-300">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-400 flex items-center justify-center mb-6 shadow-inner">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-sage-900 mb-2">Mode Focus (TDAH)</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Interface simplifiée qui n'affiche qu'une seule tâche à la fois pour éliminer le sentiment d'être submergé.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-100">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6 shadow-inner">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-sage-900 mb-2">Groupes d'étude</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Connectez-vous avec vos camarades de classe pour des sessions collaboratives qui restent réellement productives.
                    </p>
</div>

<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 reveal delay-200">
<div className="w-12 h-12 rounded-2xl bg-red-50 text-red-400 flex items-center justify-center mb-6 shadow-inner">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-lg font-semibold text-sage-900 mb-2">Conçu pour le Québec</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Pré-chargé avec les structures de sessions Cégep et Université, les jours fériés et les systèmes de notation locaux.
                    </p>
</div>

<div className="bg-sage-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-sage-800 group cursor-pointer flex flex-col justify-center text-center reveal delay-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sage-900 to-transparent opacity-50"></div>
<div className="relative z-10">
<h3 className="text-lg font-semibold text-white mb-2">Commencez votre voyage</h3>
<p className="text-sm text-sage-200 leading-relaxed mb-6">
                            Rejoignez des milliers d'étudiants plus calmes.
                        </p>
<div className="inline-flex mx-auto items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-sage-900 transition-all duration-300">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-center text-sage-900 tracking-tight mb-24 reveal">La clarté en 3 étapes</h2>
<div className="relative">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-sage-100 hidden md:block overflow-hidden">
<div className="w-full bg-sage-400 absolute top-0 left-0 h-full -translate-y-full transition-transform duration-[2000ms] ease-in-out reveal active:translate-y-0"></div>
</div>
<div className="space-y-32">

<div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-end">
<div className="bg-sage-50 p-6 rounded-2xl border border-sage-100 max-w-md w-full shadow-sm rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default">
<div className="flex items-center gap-3 mb-4 border-b border-sage-200 pb-3">
<i className="w-5 h-5 text-sage-600" data-lucide="plus-circle"></i>
<span className="text-sm font-semibold text-stone-700">Ajouter un cours</span>
</div>
<div className="space-y-3">
<div className="h-2 w-2/3 bg-sage-200 rounded-full animate-pulse"></div>
<div className="h-2 w-1/2 bg-sage-200 rounded-full animate-pulse delay-100"></div>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-sage-50 items-center justify-center z-10 shadow-lg">
<span className="text-xl font-bold text-sage-800">1</span>
</div>
<div className="md:w-1/2">
<h3 className="text-xl font-semibold text-sage-900 mb-3">Déchargez les détails</h3>
<p className="text-stone-500">Importez simplement vos plans de cours. Allège extrait les dates, les lectures et les pondérations automatiquement.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-start">
<div className="bg-sage-50 p-6 rounded-2xl border border-sage-100 max-w-md w-full shadow-sm -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-sage-800 bg-sage-200 px-2 py-1 rounded">Plan IA</span>
</div>
<div className="flex gap-2 mb-2">
<div className="h-8 w-8 rounded-full bg-white border border-sage-200"></div>
<div className="h-8 flex-1 bg-white rounded-lg border border-sage-200"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white border border-sage-200"></div>
<div className="h-8 flex-1 bg-white rounded-lg border border-sage-200"></div>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-sage-50 items-center justify-center z-10 shadow-lg">
<span className="text-xl font-bold text-sage-800">2</span>
</div>
<div className="md:w-1/2 text-left md:text-right">
<h3 className="text-xl font-semibold text-sage-900 mb-3">Laissez l'IA organiser</h3>
<p className="text-stone-500">Notre algorithme équilibre votre semaine. Fini le "cramming" la veille de l'examen.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 reveal">
<div className="md:w-1/2 flex justify-end">
<div className="bg-sage-50 p-6 rounded-2xl border border-sage-100 max-w-md w-full shadow-sm flex items-center justify-center h-32 hover:scale-105 transition-all duration-500">
<div className="text-center">
<div className="inline-flex p-3 bg-green-100 text-green-600 rounded-full mb-3 shadow-sm">
<i className="w-6 h-6" data-lucide="smile"></i>
</div>
<p className="text-sm font-medium text-sage-900">Vous êtes en contrôle.</p>
</div>
</div>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-sage-50 items-center justify-center z-10 shadow-lg">
<span className="text-xl font-bold text-sage-800">3</span>
</div>
<div className="md:w-1/2">
<h3 className="text-xl font-semibold text-sage-900 mb-3">Le flow, sans forcer</h3>
<p className="text-stone-500">Suivez le plan, suivez votre humeur et regardez vos notes s'améliorer alors que votre stress diminue.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-sage-900 text-sage-50 reveal">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Conçu pour chaque apprenant</h2>
<div className="h-px bg-sage-800 flex-1 mx-8 hidden md:block"></div>
<p className="text-sage-300">Choisissez votre voie</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 rounded-2xl bg-sage-800/50 border border-sage-700 hover:bg-sage-800 transition-all hover:-translate-y-1 text-center group cursor-default">
<span className="block text-2xl mb-3 group-hover:scale-110 transition-transform">🏫</span>
<span className="text-sm font-medium">Secondaire</span>
</div>
<div className="p-6 rounded-2xl bg-sage-800/50 border border-sage-700 hover:bg-sage-800 transition-all hover:-translate-y-1 text-center group cursor-default">
<span className="block text-2xl mb-3 group-hover:scale-110 transition-transform">🎓</span>
<span className="text-sm font-medium">Cégep &amp; Uni</span>
</div>
<div className="p-6 rounded-2xl bg-sage-800/50 border border-sage-700 hover:bg-sage-800 transition-all hover:-translate-y-1 text-center group cursor-default">
<span className="block text-2xl mb-3 group-hover:scale-110 transition-transform">🧠</span>
<span className="text-sm font-medium">TDAH / Focus</span>
</div>
<div className="p-6 rounded-2xl bg-sage-800/50 border border-sage-700 hover:bg-sage-800 transition-all hover:-translate-y-1 text-center group cursor-default">
<span className="block text-2xl mb-3 group-hover:scale-110 transition-transform">🏡</span>
<span className="text-sm font-medium">Parents</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-50 text-center relative z-10" id="values">
<div className="max-w-3xl mx-auto space-y-8 reveal">
<div className="inline-flex p-4 rounded-full bg-white shadow-sm mb-4">
<i className="w-8 h-8 text-sage-600" data-lucide="heart-handshake"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-sage-900 tracking-tight leading-tight">
                Moins de pression.<br/>Plus de clarté.
            </h2>
<p className="text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">
                Nous croyons que l'éducation ne devrait pas coûter votre santé mentale. Allège est bâti sur le principe qu'un esprit calme est un esprit intelligent. Nous ne vous optimisons pas comme une machine; nous vous soutenons comme un humain.
            </p>
</div>
</section>

<section className="py-24 px-6 mb-12">
<div className="max-w-5xl mx-auto bg-sage-100 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden reveal shadow-2xl shadow-sage-100">

<div className="absolute top-0 left-0 w-96 h-96 bg-white/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-sage-900 tracking-tight mb-8">Prêt à alléger votre charge ?</h2>
<p className="text-stone-600 mb-12 max-w-xl mx-auto text-lg">Rejoignez la communauté étudiante qui redéfinit la réussite au Québec. Essai gratuit pour votre première session.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 duration-300">
                        Télécharger Allège
                    </button>
<button className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-sage-900 text-base font-medium hover:bg-stone-50 transition-all border border-transparent hover:border-sage-200 hover:-translate-y-1 shadow-sm hover:shadow-lg">
                        Liste d'attente
                    </button>
</div>
<p className="mt-8 text-xs text-stone-400 font-medium">Disponible sur iOS et Android. Aucune carte de crédit requise.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-20 pb-10 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="reveal">
<a className="flex items-center gap-2 mb-6" href="#">

<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-50"></div>
<i className="w-3.5 h-3.5 text-cyan-200 relative z-10 -rotate-12" data-lucide="feather"></i>
</div>
<span className="font-bold text-xl text-sage-900 tracking-tight">Allège</span>
</a>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                        Le compagnon d'étude qui prend soin de votre esprit.
                    </p>
<div className="mt-8 flex items-center gap-2 text-xs font-medium text-sage-800 bg-sage-50 px-4 py-2 rounded-full w-fit hover:bg-sage-100 transition-colors cursor-pointer border border-sage-100">
<span>🇨🇦</span> Imaginé au Québec
                    </div>
</div>
<div className="flex gap-20 reveal delay-100">
<div>
<h4 className="font-semibold text-stone-900 mb-6 text-sm">Produit</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="hover:text-sage-700 transition-colors" href="#">Fonctionnalités</a></li>
<li><a className="hover:text-sage-700 transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-sage-700 transition-colors" href="#">Pour Écoles</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-6 text-sm">Compagnie</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="hover:text-sage-700 transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-sage-700 transition-colors" href="#">Manifeste</a></li>
<li><a className="hover:text-sage-700 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 reveal delay-200">
<p>© 2023 Allège Inc. Tous droits réservés.</p>
<div className="flex gap-8">
<a className="hover:text-stone-600 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-stone-600 transition-colors" href="#">Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
