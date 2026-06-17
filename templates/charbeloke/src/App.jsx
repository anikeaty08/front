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
      
<div className="min-h-screen w-full">

<div className="flex">

<aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col border-r border-slate-200 bg-white/90 backdrop-blur">
<div className="h-16 flex items-center px-5 gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow-sm">
<svg className="w-5 h-5" data-lucide="feather"></svg>
</div>
<div className="leading-tight">
<p className="text-slate-900 text-[15px] font-medium tracking-tight">LangAI</p>
<p className="text-slate-500 text-xs">Learning Dashboard</p>
</div>
</div>
<nav className="mt-4 flex-1">
<ul className="px-3 space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="layout-dashboard"></svg>
<span className="text-[15px]">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="message-square"></svg>
<span className="text-[15px]">Conversations</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="calendar"></svg>
<span className="text-[15px]">Calendrier</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="bar-chart-2"></svg>
<span className="text-[15px]">Statistiques</span>
</a>
</li>

<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-[#E9F2FF] to-transparent text-[#0A66FF] border border-[#D9E8FF]" href="#">
<div className="h-6 w-1 rounded-full bg-[#007AFF]"></div>
<svg className="w-5 h-5 text-[#007AFF]" data-lucide="clipboard-check"></svg>
<span className="text-[15px] font-medium">Évaluation</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="zap"></svg>
<span className="text-[15px]">Achats de crédit</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="settings"></svg>
<span className="text-[15px]">Paramètres</span>
</a>
</li>
</ul>
</nav>
<div className="mt-auto px-3 pb-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="help-circle"></svg>
<span className="text-[15px]">Help</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<svg className="w-5 h-5 text-slate-500" data-lucide="log-out"></svg>
<span className="text-[15px]">Log out</span>
</a>
</div>
</aside>

<div className="flex-1 min-w-0">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 rounded-lg border border-slate-200 hover:bg-slate-50">
<svg className="w-5 h-5 text-slate-600" data-lucide="menu"></svg>
</button>
<h1 className="text-[22px] sm:text-2xl tracking-tight font-semibold text-slate-900">Évaluation</h1>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-[14px] text-slate-700 hover:bg-slate-50">
<img alt="flag" className="h-4 w-4 rounded object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=50&amp;auto=format&amp;fit=crop"/>
<span>English</span>
<svg className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></svg>
</button>
<button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50">
<svg className="w-5 h-5 text-slate-600" data-lucide="moon"></svg>
</button>
<button className="relative p-2 rounded-lg border border-slate-200 hover:bg-slate-50">
<svg className="w-5 h-5 text-slate-600" data-lucide="bell"></svg>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#007AFF] ring-2 ring-white"></span>
</button>
</div>
</header>

<main className="px-4 sm:px-6 py-6">
<div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-6">

<section className="col-span-12 xl:col-span-8 space-y-6">

<div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-slate-900">Résumé de progression</h2>
<p className="text-slate-500 text-sm mt-1">Derniers résultats &amp; niveau estimé</p>
</div>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66FF]">
<svg className="w-4 h-4" data-lucide="file-bar-chart"></svg>
                    Voir mes résultats détaillés
                  </button>
</div>
<div className="mt-5 grid sm:grid-cols-3 gap-4">

<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between">
<span className="text-[13px] text-slate-500">Dernière évaluation</span>
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="clock"></svg> 27 Oct
                      </span>
</div>
<p className="mt-1 text-[15px] font-medium text-slate-900">Compréhension orale</p>
<div className="mt-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#00C6AE] to-[#007AFF] text-white grid place-content-center text-[13px] font-medium shadow">
                        82%
                      </div>
<div className="text-[13px] text-slate-600">
<p className="font-medium text-slate-800">Solide</p>
<p>Temps: 18 min</p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
<span className="text-[13px] text-slate-500">Niveau estimé</span>
<p className="mt-1 text-[22px] tracking-tight font-semibold text-slate-900">B1 <span className="text-slate-400 text-base">– Intermédiaire</span></p>
<div className="mt-3">
<div className="h-2 rounded-full bg-slate-200">
<div className="h-2 rounded-full bg-gradient-to-r from-[#00C6AE] to-[#007AFF]" style={{width: '60%'}}></div>
</div>
<div className="mt-2 flex justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
<div className="flex items-center justify-between">
<span className="text-[13px] text-slate-500">À suivre</span>
<span className="inline-flex items-center gap-1 text-[12px] text-emerald-600">
<svg className="w-3.5 h-3.5" data-lucide="flame"></svg> Série 4
                      </span>
</div>
<p className="mt-1 text-[15px] font-medium text-slate-900">2 évaluations en attente</p>
<button className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-sm hover:bg-white">
<svg className="w-4 h-4 text-[#007AFF]" data-lucide="play-circle"></svg>
                      Reprendre
                    </button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold text-slate-900">Évaluations disponibles</h2>
<p className="text-sm text-slate-500">Choisissez un type de test</p>
</div>
<div className="mt-5 grid md:grid-cols-2 xl:grid-cols-2 gap-4">

<div className="group relative rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:-translate-y-0.5 transition transform hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#E9F2FF] via-transparent to-transparent opacity-70 pointer-events-none"></div>
<div className="relative p-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow">
<svg className="w-5 h-5" data-lucide="book-open"></svg>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Compréhension écrite</p>
<p className="text-[13px] text-slate-500">Lire et analyser des textes authentiques.</p>
</div>
</div>
<span className="text-[12px] text-slate-600">Difficulté</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
<div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-[#00C6AE] to-[#007AFF] rounded-full level-bar" data-level="B1" style={{width: '45%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="timer"></svg> 15–20 min
                        </span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow" data-diff="B1" data-open-modal="" data-test="Compréhension écrite">
<svg className="w-4 h-4" data-lucide="play"></svg>
                          Commencer l’évaluation
                        </button>
</div>
</div>
</div>
<div className="group relative rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:-translate-y-0.5 transition transform hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#E9F2FF] via-transparent to-transparent opacity-70 pointer-events-none"></div>
<div className="relative p-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow">
<svg className="w-5 h-5" data-lucide="headphones"></svg>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Compréhension orale</p>
<p className="text-[13px] text-slate-500">Écouter des dialogues et répondre.</p>
</div>
</div>
<span className="text-[12px] text-slate-600">Difficulté</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
<div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-[#00C6AE] to-[#007AFF] rounded-full level-bar" data-level="B2" style={{width: '65%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="timer"></svg> 12–18 min
                        </span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow" data-diff="B2" data-open-modal="" data-test="Compréhension orale">
<svg className="w-4 h-4" data-lucide="play"></svg>
                          Commencer l’évaluation
                        </button>
</div>
</div>
</div>
<div className="group relative rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:-translate-y-0.5 transition transform hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#E9F2FF] via-transparent to-transparent opacity-70 pointer-events-none"></div>
<div className="relative p-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow">
<svg className="w-5 h-5" data-lucide="mic"></svg>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Expression orale</p>
<p className="text-[13px] text-slate-500">Parler à l’IA, feedback instantané.</p>
</div>
</div>
<span className="text-[12px] text-slate-600">Difficulté</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
<div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-[#00C6AE] to-[#007AFF] rounded-full level-bar" data-level="B1" style={{width: '45%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="timer"></svg> 10–15 min
                        </span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow" data-diff="B1" data-open-modal="" data-test="Expression orale">
<svg className="w-4 h-4" data-lucide="play"></svg>
                          Commencer l’évaluation
                        </button>
</div>
</div>
</div>
<div className="group relative rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:-translate-y-0.5 transition transform hover:shadow-lg overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#E9F2FF] via-transparent to-transparent opacity-70 pointer-events-none"></div>
<div className="relative p-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow">
<svg className="w-5 h-5" data-lucide="pen-line"></svg>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Expression écrite</p>
<p className="text-[13px] text-slate-500">Rédaction guidée et analyse.</p>
</div>
</div>
<span className="text-[12px] text-slate-600">Difficulté</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
<div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-[#00C6AE] to-[#007AFF] rounded-full level-bar" data-level="B2" style={{width: '65%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="timer"></svg> 20–30 min
                        </span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow" data-diff="B2" data-open-modal="" data-test="Expression écrite">
<svg className="w-4 h-4" data-lucide="play"></svg>
                          Commencer l’évaluation
                        </button>
</div>
</div>
</div>
<div className="group relative rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:-translate-y-0.5 transition transform hover:shadow-lg overflow-hidden md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-[#E9F2FF] via-transparent to-transparent opacity-70 pointer-events-none"></div>
<div className="relative p-5">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00C6AE] grid place-content-center text-white shadow">
<svg className="w-5 h-5" data-lucide="puzzle"></svg>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Vocabulaire &amp; grammaire</p>
<p className="text-[13px] text-slate-500">Quiz rapides, règles et exceptions.</p>
</div>
</div>
<span className="text-[12px] text-slate-600">Difficulté</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-slate-500">
<span>A1</span><span>C2</span>
</div>
<div className="mt-1 h-2 rounded-full bg-slate-200 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-[#00C6AE] to-[#007AFF] rounded-full level-bar" data-level="C1" style={{width: '85%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-[12px] text-slate-500">
<svg className="w-3.5 h-3.5" data-lucide="timer"></svg> 10–15 min
                        </span>
<div className="flex items-center gap-2">
<span className="hidden sm:inline text-[12px] text-emerald-600">
<svg className="w-4 h-4 inline-block mr-1" data-lucide="badge-check"></svg> Personnalisé par l’IA
                          </span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66FF] text-white text-sm font-medium shadow-sm hover:shadow" data-diff="C1" data-open-modal="" data-test="Vocabulaire &amp; grammaire">
<svg className="w-4 h-4" data-lucide="play"></svg>
                            Commencer l’évaluation
                          </button>
</div>
</div>
</div>
</div>
</div>
</div>

</section></div></main></div></div></div>
    </>
  );
}
