import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
dark: '#050505',
light: '#fafafa',
}
}
}
}



        // --- Dark/Light Mode Logic ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // --- Scroll Reveal Animation ---
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

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="glow-orb bg-indigo-200/40 dark:bg-indigo-900/20 w-96 h-96 top-0 left-1/4 -translate-y-1/2 opacity-60 dark:opacity-40"></div>
<div className="glow-orb bg-blue-200/40 dark:bg-blue-900/10 w-[500px] h-[500px] bottom-0 right-0 translate-y-1/3 opacity-60 dark:opacity-40"></div>
</div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 group" href="#">
<div className="p-1 rounded bg-zinc-100 dark:bg-white/10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                PROXIMITY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 dark:text-zinc-400 font-normal">
<a className="hover:text-black dark:hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-black dark:hover:text-white transition-colors" href="#ia">Assistant IA</a>
<a className="hover:text-black dark:hover:text-white transition-colors" href="#offres">Tarifs</a>
<a className="hover:text-black dark:hover:text-white transition-colors" href="#avis">Avis</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 dark:text-zinc-400 transition-all focus:outline-none active:scale-95" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" width="20"></iconify-icon>
<iconify-icon className="dark:hidden" icon="solar:sun-2-linear" width="20"></iconify-icon>
</button>
<a className="hidden md:inline-flex text-sm font-medium bg-zinc-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition-all hover:scale-105 active:scale-95" href="#contact">
                    Me contacter
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs text-zinc-600 dark:text-zinc-300 mb-8 backdrop-blur-md shadow-sm dark:shadow-none hover:border-indigo-500/30 transition-colors cursor-default">
<iconify-icon className="text-indigo-500 dark:text-yellow-200" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>Offre sans abonnement mensuel</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
<span className="text-gradient transition-all">Ne soyez plus un fantôme.</span><br/>
<span className="text-zinc-400 dark:text-zinc-500">Devenez la référence.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-100">
                Transformez votre commerce local avec un site moderne, une fiche Google Maps dominante et une intelligence artificielle qui gère vos clients 24h/24.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 reveal delay-200">
<a className="group w-full md:w-auto px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10" href="#offres">
                    Voir les offres
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 border border-zinc-200 dark:border-white/20 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:border-zinc-300 dark:hover:border-white/40" href="#ia">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Démo IA
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="solutions">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900 dark:text-white">L'arsenal digital complet.</h2>
<p className="text-zinc-500 dark:text-zinc-400 text-lg font-light">Tout ce dont vous avez besoin pour capturer le trafic local.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 md:col-span-2 relative overflow-hidden group reveal delay-100 hover:border-indigo-500/30 transition-all duration-500">
<div className="absolute top-0 right-0 p-10 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110 transform">
<iconify-icon className="text-indigo-600 dark:text-indigo-400" icon="solar:monitor-smartphone-linear" width="180"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-900 dark:text-white" icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">Site Vitrine Ultra-Moderne</h3>
<p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                Oubliez les sites lents et datés. Je conçois une vitrine digitale épurée, rapide et optimisée pour mobile, qui reflète la qualité de vos services.
                            </p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group reveal delay-200 hover:border-emerald-500/30 transition-all duration-500">
<div className="absolute -right-4 -bottom-4 opacity-10 dark:opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<iconify-icon className="text-emerald-500 dark:text-emerald-400" icon="solar:map-point-linear" width="150"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-900 dark:text-white" icon="solar:map-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">Google Maps Optimisé</h3>
<p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        Apparaissez en premier quand on cherche votre activité dans le quartier. Optimisation mots-clés et photos.
                    </p>
</div>

<div className="glass-card rounded-3xl p-8 md:col-span-3 border-indigo-200 dark:border-indigo-500/30 relative overflow-hidden reveal delay-300" id="ia">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                                Technologie Exclusive
                            </div>
<h3 className="text-2xl md:text-3xl font-medium text-zinc-900 dark:text-white mb-4">Un employé modèle,<br/>disponible 24h/24.</h3>
<p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
                                Mon offre phare inclut un assistant IA entraîné sur vos données. Il répond instantanément aux questions de vos clients (horaires, prix, services) directement sur votre site.
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 group">
<iconify-icon className="text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                                    Zéro appel manqué, zéro client perdu.
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 group">
<iconify-icon className="text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                                    Gain de temps considérable pour vous.
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 group">
<iconify-icon className="text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
                                    Installation clé en main, aucune maintenance.
                                </li>
</ul>
</div>

<div className="order-1 md:order-2 flex justify-center animate-float">
<div className="w-full max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-2xl">
<div className="flex items-center gap-3 border-b border-zinc-100 dark:border-white/5 pb-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:robot-2-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Assistant Virtuel</div>
<div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> En ligne
                                        </div>
</div>
</div>
<div className="space-y-4 text-sm">
<div className="flex gap-2 justify-end">
<div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                                            Êtes-vous ouverts le dimanche ?
                                        </div>
</div>
<div className="flex gap-2">
<div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[90%] border border-zinc-200 dark:border-white/5">
                                            Bonjour ! Oui, nous sommes ouverts le dimanche de 9h à 13h. Souhaitez-vous réserver ?
                                        </div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/5 relative">
<div className="h-8 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
<div className="absolute right-2 top-4 w-6 h-6 rounded-full bg-indigo-500/20 dark:bg-indigo-500/50 flex items-center justify-center text-indigo-600 dark:text-white">
<iconify-icon icon="solar:arrow-up-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5 transition-colors" id="offres">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900 dark:text-white">Investissement unique.</h2>
<p className="text-zinc-500 dark:text-zinc-400 text-lg font-light">Pas de frais cachés. Pas d'abonnement. Rentable dès les premiers clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors reveal delay-100">
<div className="mb-4 text-zinc-500 dark:text-zinc-400 font-medium">Pack Essentiel</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-zinc-900 dark:text-white">450 €</span>
<span className="text-zinc-500 text-sm">une fois</span>
</div>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light mb-8 h-10">Idéal pour démarrer avec une présence propre.</p>
<a className="block w-full py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-center text-sm font-medium transition-colors mb-8" href="#contact">Choisir Essentiel</a>
<ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Création ou refonte site vitrine
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Design responsive (Mobile/PC)
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Formulaire de contact
                        </li>
</ul>
</div>

<div className="relative bg-zinc-900 dark:bg-black border border-indigo-500/50 p-8 rounded-3xl shadow-2xl shadow-indigo-500/10 md:-mt-8 md:mb-8 z-10 reveal delay-200 transform hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                        Le plus populaire
                    </div>
<div className="mb-4 text-indigo-400 font-medium flex items-center gap-2">
                        Pack Premium
                        <iconify-icon icon="solar:crown-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-semibold text-white">950 €</span>
<span className="text-zinc-500 text-sm">une fois</span>
</div>
<p className="text-zinc-300 text-sm font-light mb-8 h-10">La solution complète pour dominer votre marché local.</p>
<a className="block w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black text-center text-sm font-semibold transition-colors mb-8 shadow-lg shadow-white/5" href="#contact">Commander Premium</a>
<div className="space-y-4 text-sm text-zinc-200 font-light">
<div className="flex gap-3">
<iconify-icon className="text-indigo-500 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Tout le pack Visibilité</strong></span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-indigo-500 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Assistant IA (Chatbot) 24/7</strong></span>
</div>
<li className="flex gap-3 pt-4 border-t border-white/10">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Gain de temps maximal
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Réponses instantanées clients
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Formation prise en main
                        </li>
</div>
</div>

<div className="glass-card p-8 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors reveal delay-300">
<div className="mb-4 text-zinc-500 dark:text-zinc-400 font-medium">Pack Visibilité</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-zinc-900 dark:text-white">750 €</span>
<span className="text-zinc-500 text-sm">une fois</span>
</div>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light mb-8 h-10">Pour être trouvé facilement sur Google.</p>
<a className="block w-full py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-center text-sm font-medium transition-colors mb-8" href="#contact">Choisir Visibilité</a>
<ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Site vitrine complet
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<strong>Optimisation Google Maps (GMB)</strong>
</li>
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Référencement local
                        </li>
<li className="flex gap-3">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Intégration avis clients
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="avis">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center text-zinc-900 dark:text-white reveal">Ils ont transformé leur activité.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl reveal delay-100 hover:-translate-y-1 transition-transform">
<div className="flex gap-1 text-amber-500 dark:text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 dark:text-zinc-300 font-light mb-6 text-sm leading-relaxed">"Depuis l'installation du chatbot, je ne perds plus de temps au téléphone pour donner mes horaires. Le site est magnifique, mes clients adorent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-white">JP</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Jean P.</div>
<div className="text-xs text-zinc-500">Boulangerie Artisanale</div>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl reveal delay-200 hover:-translate-y-1 transition-transform">
<div className="flex gap-1 text-amber-500 dark:text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 dark:text-zinc-300 font-light mb-6 text-sm leading-relaxed">"J'étais invisible sur Google Maps. En 3 semaines, je suis passé dans le top 3 du quartier. L'investissement est déjà rentabilisé."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-white">SL</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Sophie L.</div>
<div className="text-xs text-zinc-500">Institut de Beauté</div>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl md:hidden lg:block reveal delay-300 hover:-translate-y-1 transition-transform">
<div className="flex gap-1 text-amber-500 dark:text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 dark:text-zinc-300 font-light mb-6 text-sm leading-relaxed">"Service ultra professionnel. Pas d'abonnement mensuel qui traîne, c'est clair et net. Le design Apple colle parfaitement à mon image."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-white">MR</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Marc R.</div>
<div className="text-xs text-zinc-500">Cabinet d'Architecture</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-black pt-20 pb-10 px-6 transition-colors" id="contact">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl font-medium tracking-tight mb-6 text-zinc-900 dark:text-white">Prêt à passer au niveau supérieur ?</h2>
<p className="text-zinc-500 dark:text-zinc-400 font-light mb-10">Discutons de votre projet. Réponse sous 24h.</p>
<div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
<a className="glass-card px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group" href="mailto:contact@proximity.fr">
<iconify-icon className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:letter-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-900 dark:text-white">contact@proximity.fr</span>
</a>
<a className="glass-card px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group" href="tel:+33600000000">
<iconify-icon className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-900 dark:text-white">06 00 00 00 00</span>
</a>
</div>
<div className="flex items-center justify-between pt-10 border-t border-zinc-200 dark:border-white/5 text-xs text-zinc-500 dark:text-zinc-600">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
<span>© 2023 Proximity Digital.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-zinc-800 dark:hover:text-zinc-400 transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
