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



        lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-full group-hover:border-[#ffa62e] transition-colors">
<i className="w-4 h-4 text-[#ffa62e]" data-lucide="zap"></i>
</div>
<span className="text-xl font-medium tracking-tight uppercase">
                    Stimul'<span className="text-[#ffa62e]">body</span>
</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#ffa62e] transition-colors" href="#concept">Concept</a>
<a className="text-sm font-medium hover:text-[#ffa62e] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-[#ffa62e] transition-colors" href="#avis">Avis</a>
<a className="text-sm font-medium hover:text-[#ffa62e] transition-colors" href="#blog">Blog</a>
</nav>

<a className="hidden md:flex items-center gap-2 bg-[#ffa62e] hover:bg-[#e6901a] text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105" href="#contact">
<span>Séance découverte gratuite</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-zinc-900 dark:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Salle de sport sombre electrostimulation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 dark:via-zinc-950/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left md:flex md:items-center md:justify-between w-full mt-20">
<div className="md:w-3/5 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ffa62e]/30 bg-[#ffa62e]/10 text-[#ffa62e] text-xs font-medium uppercase tracking-wider mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa62e] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa62e]"></span>
</span>
                    Studio Premium
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Activez votre corps, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa62e] to-orange-200">réveillez votre potentiel.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                    20 minutes d'effort pour 4 heures de résultats. Que vous souhaitiez maigrir, vous muscler ou améliorer vos performances, l’électrostimulation chez Stimul'body est la solution.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-[#ffa62e] hover:bg-[#e6901a] text-black px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_0_20px_rgba(255,166,46,0.3)]" href="#contact">
                        Réserver ma séance offerte
                    </a>
<a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium transition-all" href="#services">
                        Nos programmes
                    </a>
</div>
</div>

<div className="hidden md:block md:w-2/5 pl-10">
<div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl relative">
<div className="absolute -top-6 -right-6 bg-[#ffa62e] rounded-full p-4 text-black">
<i className="w-8 h-8" data-lucide="trending-up"></i>
</div>
<h3 className="text-white text-xl font-medium mb-4 tracking-tight">Objectif Été</h3>
<div className="space-y-4">
<div className="flex items-center justify-between text-zinc-400 text-sm">
<span>Tonification</span>
<span className="text-[#ffa62e]">98%</span>
</div>
<div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#ffa62e] h-full w-[98%]"></div>
</div>
<div className="flex items-center justify-between text-zinc-400 text-sm">
<span>Perte de poids</span>
<span className="text-[#ffa62e]">85%</span>
</div>
<div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#ffa62e] h-full w-[85%]"></div>
</div>
</div>
<p className="mt-6 text-sm text-zinc-300 border-t border-zinc-700 pt-4">
                        Rejoignez-nous à l'approche des beaux jours.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-zinc-950" id="concept">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#ffa62e]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#ffa62e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#ffa62e]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight dark:text-white">Technologie de pointe</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        L'électrostimulation intégrale sollicite 100% de vos fibres musculaires en profondeur pour des résultats rapides.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#ffa62e]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#ffa62e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#ffa62e]" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight dark:text-white">Gain de temps</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        Une séance de 20 minutes équivaut à 4 heures de renforcement musculaire en salle traditionnelle.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#ffa62e]/50 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#ffa62e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#ffa62e]" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight dark:text-white">Santé &amp; Bien-être</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        Préservez vos articulations, soulagez vos douleurs dorsales et retrouvez une tonicité globale.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ffa62e] rounded-full blur-[100px] opacity-20"></div>
<div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-[4/5] md:aspect-square">
<img alt="Coach Stimulbody" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
<p className="text-white font-medium">Expertise &amp; Accompagnement</p>
</div>
</div>
</div>
<div className="md:w-1/2 space-y-8">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white">
                        Stimul’body, votre partenaire <span className="text-[#ffa62e]">performance</span>.
                    </h2>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        Installé au cœur de la ville, Stimul’body n'est pas une simple salle de sport. C'est un studio privé dédié à l'optimisation de votre capital santé.
                    </p>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        Nos coachs certifiés vous accompagnent individuellement à chaque séance pour garantir des mouvements parfaits et une intensité adaptée à vos objectifs. Que vous soyez un athlète confirmé ou que vous repreniez le sport, nous adaptons la technologie à votre corps.
                    </p>
<ul className="space-y-4 mt-4">
<li className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-300">
<i className="w-5 h-5 text-[#ffa62e]" data-lucide="check-circle-2"></i>
                            Suivi 100% personnalisé
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-300">
<i className="w-5 h-5 text-[#ffa62e]" data-lucide="check-circle-2"></i>
                            Matériel dernière génération
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-300">
<i className="w-5 h-5 text-[#ffa62e]" data-lucide="check-circle-2"></i>
                            Hygiène et confort premium
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<span className="text-[#ffa62e] font-medium tracking-wide uppercase text-sm">Nos Programmes</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Des objectifs ciblés pour des résultats concrets</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img alt="Amincissement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-2xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">Amincissement &amp; Cellulite</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light flex-1 mb-6">
                            Ciblez les zones rebelles, drainez votre corps et affinez votre silhouette. L'électrostimulation accélère le métabolisme basal pour brûler des calories même au repos.
                        </p>
<a className="inline-flex items-center text-[#ffa62e] font-medium hover:underline" href="#contact">En savoir plus <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img alt="Tonification" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-2xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">Tonifier &amp; Se Muscler</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light flex-1 mb-6">
                            Redessinez vos muscles sans porter de charges lourdes. Obtenez un corps ferme et tonique rapidement, idéal pour préparer l'été.
                        </p>
<a className="inline-flex items-center text-[#ffa62e] font-medium hover:underline" href="#contact">En savoir plus <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img alt="Mal de dos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-2xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">Muscler son dos</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light flex-1 mb-6">
                            Renforcez vos muscles posturaux profonds. Une solution efficace et reconnue pour lutter contre les maux de dos chroniques et améliorer sa posture.
                        </p>
<a className="inline-flex items-center text-[#ffa62e] font-medium hover:underline" href="#contact">En savoir plus <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden" id="avis">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#ffa62e] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">Ils ont transformé leur corps</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
<div className="flex text-[#ffa62e] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 font-light italic mb-6">"Je n'avais jamais le temps pour le sport. Avec Stimul'body, en 20 minutes je suis KO comme après 2h de salle. J'ai perdu 4kg en 1 mois."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">S</div>
<div>
<p className="text-white font-medium text-sm">Sophie Martin</p>
<p className="text-zinc-500 text-xs">Membre depuis 3 mois</p>
</div>
</div>
</div>

<div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
<div className="flex text-[#ffa62e] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 font-light italic mb-6">"Incroyable pour le mal de dos. Après 5 séances, je ne sentais plus mes douleurs lombaires. L'équipe est super pro et à l'écoute."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">T</div>
<div>
<p className="text-white font-medium text-sm">Thomas Dubois</p>
<p className="text-zinc-500 text-xs">Membre depuis 6 mois</p>
</div>
</div>
</div>

<div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
<div className="flex text-[#ffa62e] mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half"></i>
</div>
<p className="text-lg text-zinc-300 font-light italic mb-6">"L'ambiance est top, c'est premium et on s'y sent bien. La séance découverte m'a convaincu direct. Je recommande à 100%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-medium">L</div>
<div>
<p className="text-white font-medium text-sm">Léa Bernard</p>
<p className="text-zinc-500 text-xs">Membre depuis 1 mois</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-zinc-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-zinc-900 dark:text-white mb-12">Questions fréquentes</h2>
<div className="space-y-4">

<details className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-900 dark:text-zinc-100">Est-ce que ça fait mal ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-600 dark:text-zinc-400 font-light">
                        Non, l'électrostimulation n'est pas douloureuse. Vous ressentirez des picotements et des contractions musculaires intenses mais supportables. Le coach règle l'intensité selon votre confort.
                    </div>
</details>

<details className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-900 dark:text-zinc-100">Combien de séances par semaine ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-600 dark:text-zinc-400 font-light">
                        Une seule séance de 20 minutes par semaine suffit pour obtenir des résultats visibles, grâce à l'intensité du travail. Pour les athlètes, on peut aller jusqu'à 2 séances espacées de 48h.
                    </div>
</details>

<details className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-900 dark:text-zinc-100">Que dois-je apporter ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-600 dark:text-zinc-400 font-light">
                        Rien du tout ! Chez Stimul'body, nous fournissons la tenue spécifique, la serviette, l'eau et les produits de douche. Venez comme vous êtes.
                    </div>
</details>

<details className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-900 dark:text-zinc-100">Est-ce adapté aux débutants ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-600 dark:text-zinc-400 font-light">
                        Absolument. C'est même idéal pour reprendre le sport en douceur car il n'y a pas d'impacts sur les articulations (ni sauts, ni poids lourds). Le coach adapte les exercices à votre niveau.
                    </div>
</details>

<details className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-900 dark:text-zinc-100">Au bout de combien de temps voit-on les résultats ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-600 dark:text-zinc-400 font-light">
                        Généralement, vous sentez une tonification dès la 4ème séance. Les résultats visuels (perte de cm, dessin musculaire) apparaissent souvent entre la 6ème et la 10ème séance.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 dark:bg-zinc-900/50" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Derniers articles</h2>
<a className="text-[#ffa62e] font-medium hidden md:block hover:underline" href="#">Voir tout le blog</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Summer Body" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1467453678174-768ec283a940?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">Conseils</div>
</div>
<h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white group-hover:text-[#ffa62e] transition-colors tracking-tight">Préparez votre corps pour les beaux jours</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light line-clamp-2">L'été approche à grands pas. Découvrez comment l'électrostimulation peut accélérer votre sèche et dessiner vos abdos...</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Mal de dos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">Santé</div>
</div>
<h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white group-hover:text-[#ffa62e] transition-colors tracking-tight">En finir avec le mal de dos au bureau</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light line-clamp-2">La sédentarité est l'ennemi de votre dos. Voici pourquoi muscler vos paravertébraux est essentiel pour votre santé...</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">Nutrition</div>
</div>
<h3 className="text-xl font-medium mb-3 text-zinc-900 dark:text-white group-hover:text-[#ffa62e] transition-colors tracking-tight">L'alimentation post-séance d'électrostimulation</h3>
<p className="text-lg text-zinc-600 dark:text-zinc-400 font-light line-clamp-2">Que manger après 20 minutes intenses ? Protéines, hydratation, voici nos meilleures recommandations...</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-zinc-950" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col lg:flex-row">

<div className="lg:w-1/2 p-8 md:p-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-white mb-2">Réservez votre séance</h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400 font-light mb-8">Première séance découverte <span className="text-[#ffa62e] font-normal">100% Gratuite</span>. Sans engagement.</p>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Prénom</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffa62e] focus:border-transparent transition-all" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Nom</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffa62e] focus:border-transparent transition-all" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffa62e] focus:border-transparent transition-all" placeholder="jean.dupont@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Téléphone</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffa62e] focus:border-transparent transition-all" placeholder="06 12 34 56 78" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Objectif principal</label>
<div className="relative">
<select className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ffa62e] focus:border-transparent transition-all appearance-none cursor-pointer">
<option>Séance découverte</option>
<option>Perte de poids</option>
<option>Prise de muscle</option>
<option>Mal de dos</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="w-full bg-[#ffa62e] hover:bg-[#e6901a] text-black font-medium py-4 rounded-lg transition-colors mt-4" type="button">
                            Valider ma demande
                        </button>
</form>
</div>

<div className="lg:w-1/2 bg-zinc-800 relative h-[400px] lg:h-auto">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1621234567890!5m2!1sfr!2sfr" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-zinc-950 p-4 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 max-w-sm">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#ffa62e] mt-1" data-lucide="map-pin"></i>
<div>
<h4 className="font-medium text-zinc-900 dark:text-white">Stimul'body Studio</h4>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">123 Avenue de la Forme75000 Paris</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
<i className="w-4 h-4 text-[#ffa62e]" data-lucide="zap"></i>
</div>
<span className="text-lg font-medium tracking-tight uppercase dark:text-white">
                        Stimul'<span className="text-[#ffa62e]">body</span>
</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-[#ffa62e] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-[#ffa62e] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-zinc-500 hover:text-[#ffa62e] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between text-sm text-zinc-500 font-light border-t border-zinc-200 dark:border-zinc-800 pt-8">
<p>© 2024 Stimul’body. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">Politique de confidentialité</a>
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">CGV</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
