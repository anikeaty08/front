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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
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
      

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"></div>

<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(124, 58, 237, 0.25), transparent 70%)'}}></div>
<div className="absolute top-1/3 -left-24 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(56, 189, 248, 0.18), transparent 70%)'}}></div>
<div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(99, 102, 241, 0.20), transparent 70%)'}}></div>

<div className="absolute inset-0 opacity-[0.07]" style="
        background-image:
          linear-gradient(to right, rgba(148,163,184,.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148,163,184,.2) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(ellipse at 50% 0%, rgba(0,0,0,.9), transparent 70%);
      "></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#top">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-900 flex items-center justify-center font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>FF</div>
<span className="text-slate-200 text-sm sm:text-base font-semibold tracking-tight group-hover:text-white transition-colors">FocusFlow</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-white transition-colors" href="#pour-qui">Pour qui</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#fonctionnement">Fonctionnement</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#fonctionnalites">Fonctionnalités</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#tour">Visite guidée</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#prix">Tarifs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4" data-lucide="log-in" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">Connexion</span>
</a>
<a className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-slate-950 bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-400 hover:to-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_30px_-10px_rgba(56,189,248,0.7)] transition-all" href="#cta-start">
<i className="w-4 h-4" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold">Commencer</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24">
<div className="text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 mb-6">
<i className="w-3.5 h-3.5 text-cyan-300" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
            Concentrez-vous sur l’essentiel, le reste suit
          </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Trouvez et gardez votre <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">flow</span>
</h1>
<p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Planifier. Se concentrer. Mesurer. FocusFlow structure vos sessions de travail (méthode Pomodoro) pour transformer vos objectifs en résultats mesurables.
          </p>
<div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
<a className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-slate-950 bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-400 hover:to-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-10px_rgba(124,58,237,0.7)] transition-all" href="#tour">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm sm:text-base font-semibold">Voir la démo</span>
</a>
<a className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white hover:bg-white/5 transition-all" href="#fonctionnement">
<i className="w-4 h-4" data-lucide="mouse-pointer-click" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm sm:text-base font-medium">Comment ça marche</span>
</a>
</div>

<div className="mt-8 sm:mt-10 flex items-center justify-center gap-6 text-sm">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1549351236-caca0f174515?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-slate-400">4.9/5 — 20k+ sessions lancées</div>
</div>
</div>

<div className="mt-12 sm:mt-16">
<div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
<div className="flex items-center gap-2 text-slate-300">
<i className="w-4 h-4 text-cyan-300" data-lucide="timer" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs sm:text-sm">Session de concentration</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">Pomodoro</span>
<span className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
<i className="w-3.5 h-3.5 text-violet-300" data-lucide="zap" style={{strokeWidth: '1.5'}}></i> Focus Mode
                </span>
</div>
</div>
<div className="grid md:grid-cols-2">

<div className="p-5 sm:p-6 lg:p-8 border-r border-white/10">
<div className="flex items-center justify-between">
<div className="text-slate-400 text-sm">Cycle 1/4</div>
<div className="text-slate-400 text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="bell" style={{strokeWidth: '1.5'}}></i> Alertes
                  </div>
</div>
<div className="mt-4 sm:mt-5">
<div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full relative grid place-items-center" style={{background: 'conic-gradient(from 0deg, rgba(56,189,248,.9) 0 70%, rgba(100,116,139,.3) 70% 100%)'}}>
<div className="absolute inset-[10%] rounded-full bg-slate-950/80 border border-white/10 backdrop-blur"></div>
<div className="relative text-center">
<div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">17:32</div>
<div className="text-xs text-slate-400 mt-1">Temps restant</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-950 bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-400 hover:to-cyan-300 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-10px_rgba(56,189,248,0.7)]">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i> Démarrer
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white hover:bg-white/5 transition-all">
<i className="w-4 h-4" data-lucide="skip-forward" style={{strokeWidth: '1.5'}}></i> Sauter
                    </button>
</div>
</div>
</div>

<div className="p-5 sm:p-6 lg:p-8">
<div>
<div className="text-sm font-medium text-slate-200 mb-3">Objectifs d’aujourd’hui</div>
<div className="space-y-2">

<label className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 hover:bg-white/5 transition-colors cursor-pointer">
<span className="relative inline-flex items-center justify-center h-5 w-5 rounded-md border border-slate-500/40 group-hover:border-slate-300/60 bg-slate-900/60">
<input className="peer sr-only" type="checkbox"/>
<i className="w-3.5 h-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm text-slate-300">Finaliser le brief client</span>
<span className="ml-auto text-[11px] text-slate-400">25 min</span>
</label>
<label className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 hover:bg-white/5 transition-colors cursor-pointer">
<span className="relative inline-flex items-center justify-center h-5 w-5 rounded-md border border-slate-500/40 group-hover:border-slate-300/60 bg-slate-900/60">
<input checked="" className="peer sr-only" type="checkbox"/>
<i className="w-3.5 h-3.5 text-violet-300 opacity-100" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm text-slate-300">Rédiger 2 articles</span>
<span className="ml-auto text-[11px] text-slate-400">50 min</span>
</label>
<label className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 hover:bg-white/5 transition-colors cursor-pointer">
<span className="relative inline-flex items-center justify-center h-5 w-5 rounded-md border border-slate-500/40 group-hover:border-slate-300/60 bg-slate-900/60">
<input className="peer sr-only" type="checkbox"/>
<i className="w-3.5 h-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm text-slate-300">Réviser le pitch</span>
<span className="ml-auto text-[11px] text-slate-400">25 min</span>
</label>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">Statistiques rapides</div>
<div className="text-xs text-slate-400">Cette semaine</div>
</div>
<div className="mt-3">
<div className="h-24 w-full rounded-xl border border-white/10 bg-slate-900/60 flex items-end gap-1.5 p-2">
<div className="flex-1 h-[30%] bg-gradient-to-t from-violet-600/40 to-violet-400/70 rounded"></div>
<div className="flex-1 h-[55%] bg-gradient-to-t from-cyan-600/40 to-cyan-300/70 rounded"></div>
<div className="flex-1 h-[45%] bg-gradient-to-t from-violet-600/40 to-violet-400/70 rounded"></div>
<div className="flex-1 h-[70%] bg-gradient-to-t from-cyan-600/40 to-cyan-300/70 rounded"></div>
<div className="flex-1 h-[60%] bg-gradient-to-t from-violet-600/40 to-violet-400/70 rounded"></div>
<div className="flex-1 h-[80%] bg-gradient-to-t from-cyan-600/40 to-cyan-300/70 rounded"></div>
<div className="flex-1 h-[50%] bg-gradient-to-t from-violet-600/40 to-violet-400/70 rounded"></div>
</div>
<div className="mt-2 text-xs text-slate-400">5h 20min de focus • +18% vs. semaine dernière</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-28" id="pour-qui">
<div className="flex items-end justify-between gap-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">À qui s’adresse FocusFlow ?</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors" href="#tour">
<i className="w-4 h-4 text-violet-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i> Visite guidée
        </a>
</div>
<p className="mt-2 text-slate-400 max-w-2xl">Pensé pour s’adapter à vos rythmes et à vos objectifs, seul ou en équipe.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center group-hover:border-slate-300/20">
<i className="w-5 h-5 text-cyan-300" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Freelances</div>
</div>
<p className="mt-3 text-sm text-slate-400">Gérez vos clients et vos livrables avec des sessions ciblées, sans vous disperser.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="target" style={{strokeWidth: '1.5'}}></i> Priorisation claire</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="calendar-clock" style={{strokeWidth: '1.5'}}></i> Planning flexible</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center group-hover:border-slate-300/20">
<i className="w-5 h-5 text-violet-300" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Équipes</div>
</div>
<p className="mt-3 text-sm text-slate-400">Synchronisez les sprints, partagez la progression et gardez le cap ensemble.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="share-2" style={{strokeWidth: '1.5'}}></i> Sessions partagées</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i> Rétrospectives</li>
</ul>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center group-hover:border-slate-300/20">
<i className="w-5 h-5 text-cyan-300" data-lucide="graduation-cap" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Étudiants</div>
</div>
<p className="mt-3 text-sm text-slate-400">Révisez efficacement, préparez vos examens et mesurez vos progrès.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="book-open" style={{strokeWidth: '1.5'}}></i> Révisions guidées</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="medal" style={{strokeWidth: '1.5'}}></i> Objectifs motivants</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-28" id="fonctionnement">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Le cycle FocusFlow</h2>
<p className="mt-2 text-slate-400 max-w-2xl">Une boucle simple et efficace pour enclencher et conserver votre état de flow.</p>
<div className="mt-8 grid lg:grid-cols-3 gap-5">

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="calendar-clock" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">1. Planifier</div>
</div>
<p className="mt-3 text-sm text-slate-400">Créez vos objectifs, estimez vos pomodoros, alignez vos priorités.</p>
<div className="mt-4 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="list-checks" style={{strokeWidth: '1.5'}}></i> Checklists intelligentes
          </div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="timer" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">2. Se concentrer</div>
</div>
<p className="mt-3 text-sm text-slate-400">Démarrez le minuteur, activez le mode focus, avancez sans distraction.</p>
<div className="mt-4 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4 text-violet-300" data-lucide="moon" style={{strokeWidth: '1.5'}}></i> Sessions Deep Work
          </div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">3. Mesurer</div>
</div>
<p className="mt-3 text-sm text-slate-400">Statistiques, tendances et récap hebdo pour s’améliorer en continu.</p>
<div className="mt-4 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i> Feedback actionnable
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-28" id="tour">
<div className="flex items-end justify-between gap-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Visite guidée</h2>
<span className="text-sm text-slate-400">Aperçu interactif</span>
</div>
<div className="mt-6 grid lg:grid-cols-12 gap-5">

<div className="lg:col-span-4">
<div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3 sm:p-4">
<div className="space-y-2">

<label className="group block">
<input checked="" className="peer hidden" name="tour" type="radio"/>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/0 peer-checked:bg-white/5 hover:bg-white/5 peer-checked:border-slate-300/20 transition-all cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="list-todo" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Planifier ses tâches</div>
<div className="text-xs text-slate-400">Créez, priorisez, estimez</div>
</div>
</div>
</label>

<label className="group block">
<input className="peer hidden" name="tour" type="radio"/>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/0 peer-checked:bg-white/5 hover:bg-white/5 peer-checked:border-slate-300/20 transition-all cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="focus" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Se mettre en flow</div>
<div className="text-xs text-slate-400">Timer + mode focus</div>
</div>
</div>
</label>

<label className="group block">
<input className="peer hidden" name="tour" type="radio"/>
<div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/0 peer-checked:bg-white/5 hover:bg-white/5 peer-checked:border-slate-300/20 transition-all cursor-pointer">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="chart-bar" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white">Mesurer et progresser</div>
<div className="text-xs text-slate-400">Stats et insights</div>
</div>
</div>
</label>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden">

<div className="grid">

<div className="[&amp;_label:nth-of-type(1)_&gt;_input:checked~&amp;]:opacity-100 opacity-100 transition-opacity duration-300">
<div className="p-5 sm:p-8">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-400">Planification — vue tâches</div>
<div className="text-xs text-slate-400">Glisser-déposer</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-white font-medium flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="inbox" style={{strokeWidth: '1.5'}}></i> Inbox
                      </div>
<div className="mt-3 space-y-2">
<div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 hover:border-slate-300/20 transition">
                          Rédiger l’intro du rapport
                        </div>
<div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 hover:border-slate-300/20 transition">
                          Créer la maquette du dashboard
                        </div>
<div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 hover:border-slate-300/20 transition">
                          Préparer slides de soutenance
                        </div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-white font-medium flex items-center gap-2">
<i className="w-4 h-4 text-violet-300" data-lucide="alarm-clock" style={{strokeWidth: '1.5'}}></i> Aujourd’hui (3 pomodoros)
                      </div>
<div className="mt-3 space-y-2">
<div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 flex items-center justify-between">
                          Finaliser le brief client <span className="text-[11px] text-slate-400">1x25</span>
</div>
<div className="p-3 rounded-lg border border-white/10 bg-slate-900/60 flex items-center justify-between">
                          Maquette dashboard <span className="text-[11px] text-slate-400">2x25</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="[&amp;_label:nth-of-type(2)_&gt;_input:checked~&amp;]:opacity-100 opacity-0 absolute inset-0 transition-opacity duration-300 pointer-events-none">
<div className="p-5 sm:p-8">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-400">Mode Focus — Pomodoro</div>
<div className="text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i> Son ambiant
                    </div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-5">
<div className="md:col-span-2 rounded-xl border border-white/10 bg-slate-950/50 p-6 flex flex-col items-center justify-center">
<div className="mx-auto w-48 h-48 rounded-full relative grid place-items-center" style={{background: 'conic-gradient(from 0deg, rgba(124,58,237,.9) 0 40%, rgba(100,116,139,.3) 40% 100%)'}}>
<div className="absolute inset-[10%] rounded-full bg-slate-900/80 border border-white/10"></div>
<div className="relative text-center">
<div className="text-4xl font-semibold text-white tracking-tight">12:03</div>
<div className="text-xs text-slate-400 mt-1">Pomodoro en cours</div>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-slate-950 bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-400 hover:to-cyan-300 transition-all">
<i className="w-4 h-4" data-lucide="pause" style={{strokeWidth: '1.5'}}></i> Pause
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white hover:bg-white/5 transition-all">
<i className="w-4 h-4" data-lucide="stop-circle" style={{strokeWidth: '1.5'}}></i> Arrêter
                        </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
<div className="text-sm font-medium text-white">Règles anti-distraction</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="shield" style={{strokeWidth: '1.5'}}></i> Bloquer les notifications</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="smartphone-nfc" style={{strokeWidth: '1.5'}}></i> Mode avion conseillé</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="speaker" style={{strokeWidth: '1.5'}}></i> Sons neutres</li>
</ul>
</div>
</div>
</div>
</div>

<div className="[&amp;_label:nth-of-type(3)_&gt;_input:checked~&amp;]:opacity-100 opacity-0 absolute inset-0 transition-opacity duration-300 pointer-events-none">
<div className="p-5 sm:p-8">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-400">Rapport &amp; Statistiques</div>
<div className="text-xs text-slate-400">Hebdomadaire</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-white font-medium flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="chart-line" style={{strokeWidth: '1.5'}}></i> Temps de focus
                      </div>
<div className="mt-3 h-32 w-full rounded-lg bg-slate-950/40 border border-white/10 p-2 flex items-end gap-1.5">
<div className="flex-1 h-[30%] bg-cyan-400/70 rounded"></div>
<div className="flex-1 h-[40%] bg-violet-400/70 rounded"></div>
<div className="flex-1 h-[65%] bg-cyan-400/70 rounded"></div>
<div className="flex-1 h-[55%] bg-violet-400/70 rounded"></div>
<div className="flex-1 h-[80%] bg-cyan-400/70 rounded"></div>
</div>
<div className="mt-2 text-xs text-slate-400">+24% de temps concentré</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-sm text-white font-medium flex items-center gap-2">
<i className="w-4 h-4 text-violet-300" data-lucide="trophy" style={{strokeWidth: '1.5'}}></i> Objectifs atteints
                      </div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i> 8/10 tâches complétées</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i> 3 jours consécutifs de flow</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-300" data-lucide="flame" style={{strokeWidth: '1.5'}}></i> Série: 5 pomodoros/j</li>
</ul>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-28" id="fonctionnalites">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Fonctionnalités phares</h2>
<p className="mt-2 text-slate-400 max-w-2xl">Tout ce qu’il faut pour planifier vos journées, rester concentré et suivre votre progression.</p>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="timer" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Minuteur Pomodoro</div>
</div>
<p className="mt-3 text-sm text-slate-400">Réglez la durée des sessions et des pauses, lancez, concentrez-vous.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-violet-300" data-lucide="sliders" style={{strokeWidth: '1.5'}}></i> Paramètres flexibles
          </div>
</div>

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="list-checks" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Checklists d’objectifs</div>
</div>
<p className="mt-3 text-sm text-slate-400">Organisez vos tâches par objectifs et priorités, visualisez l’effort.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-cyan-300" data-lucide="hash" style={{strokeWidth: '1.5'}}></i> Étiquettes &amp; estimations
          </div>
</div>

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Statistiques visuelles</div>
</div>
<p className="mt-3 text-sm text-slate-400">Suivez vos tendances, vos séries et vos meilleurs créneaux de focus.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-violet-300" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i> Rapports hebdo
          </div>
</div>

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="eye-off" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Mode focus</div>
</div>
<p className="mt-3 text-sm text-slate-400">Masquez le superflu, bloquez les distractions et entrez en immersion.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-cyan-300" data-lucide="bell-off" style={{strokeWidth: '1.5'}}></i> Silencieux intelligent
          </div>
</div>

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="handshake" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Sessions partagées</div>
</div>
<p className="mt-3 text-sm text-slate-400">Planifiez des sessions d’équipe, synchronisez les pauses et comparez vos points forts.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-violet-300" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i> Rituels de sprint
          </div>
</div>

<div className="group rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/60 p-6 transition-all">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center">
<i className="w-5 h-5 text-violet-300" data-lucide="puzzle" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-white font-medium">Intégrations</div>
</div>
<p className="mt-3 text-sm text-slate-400">Connectez vos outils favoris pour un flux de travail sans friction.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4 text-cyan-300" data-lucide="link-2" style={{strokeWidth: '1.5'}}></i> Agenda, notes, tâches
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 sm:mt-28" id="cta-start">
<div className="relative rounded-3xl border border-white/10 bg-slate-900/60 overflow-hidden">
<div className="absolute -inset-1 opacity-25 blur-2xl" style="background: radial-gradient(600px 300px at 20% 20%, rgba(124,58,237,.6), transparent),
                     radial-gradient(600px 300px at 80% 60%, rgba(56,189,248,.6), transparent);"></div>
<div className="relative p-8 sm:p-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Prêt à entrer dans votre flow ?</h3>
<p className="mt-3 text-slate-300">Lancez votre première session en moins de 60 secondes. C’est gratuit pour commencer.</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-slate-950 bg-gradient-to-r from-violet-500 to-cyan-400 hover:from-violet-400 hover:to-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-10px_rgba(56,189,248,0.7)] transition-all" href="#">
<i className="w-4 h-4" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm sm:text-base font-semibold">Créer un compte</span>
</a>
<a className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white hover:bg-white/5 transition-all" href="#prix">
<i className="w-4 h-4" data-lucide="wallet" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm sm:text-base font-medium">Voir les tarifs</span>
</a>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 sm:p-6">
<div className="flex items-center gap-3 text-slate-300 text-sm">
<i className="w-5 h-5 text-cyan-300" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></i>
                Sans carte • Annulation en 1 clic • Cloud sécurisé
              </div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Utilisateurs</div>
<div className="text-lg font-semibold text-white tracking-tight">12 000+</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Sessions/mois</div>
<div className="text-lg font-semibold text-white tracking-tight">150k</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Note</div>
<div className="text-lg font-semibold text-white tracking-tight">4.9/5</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-24 mb-24" id="prix">
<div className="border-t border-white/10 pt-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-900 flex items-center justify-center font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>FF</div>
<span className="text-white font-semibold tracking-tight">FocusFlow</span>
</div>
<p className="text-slate-400">Trouvez et gardez votre flow, jour après jour.</p>
</div>
<div>
<div className="text-slate-300 font-medium mb-3">Produit</div>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#fonctionnement">Comment ça marche</a></li>
<li><a className="hover:text-white transition-colors" href="#fonctionnalites">Fonctionnalités</a></li>
<li><a className="hover:text-white transition-colors" href="#tour">Visite guidée</a></li>
</ul>
</div>
<div>
<div className="text-slate-300 font-medium mb-3">Ressources</div>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Aide &amp; FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Communauté</a></li>
</ul>
</div>
<div>
<div className="text-slate-300 font-medium mb-3">Légal</div>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Conditions</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-slate-500">
<div>© <span className="text-slate-400">2025</span> FocusFlow. Tous droits réservés.</div>
<div className="flex items-center gap-3">
<a aria-label="Remonter" className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-white/10 hover:border-slate-300/20 hover:bg-white/5 text-slate-300 hover:text-white transition-colors" href="#top">
<i className="w-4 h-4" data-lucide="arrow-up" style={{strokeWidth: '1.5'}}></i> Haut de page
            </a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-xl hover:bg-white/10 hover:border-slate-300/20 text-slate-200 hover:text-white p-3 shadow-lg transition-all" href="#top">
<i className="w-5 h-5" data-lucide="arrow-up" style={{strokeWidth: '1.5'}}></i>
</a>


    </>
  );
}
