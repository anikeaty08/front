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
slate: {
850: '#151e2e',
950: '#020617',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'progress': 'progress 1.5s ease-out forwards',
'blob': 'blob 7s infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
progress: {
'0%': { width: '0%' },
'100%': { width: '75%' },
},
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<main className="w-full max-w-[420px] bg-slate-950 relative shadow-2xl overflow-hidden min-h-screen border-x border-slate-800/50">

<div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-600/20 blur-[100px] rounded-full animate-blob mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[20%] right-[-50%] w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full animate-blob animation-delay-2000 pointer-events-none"></div>

<nav className="fixed flex transition-all bg-slate-950/70 w-full max-w-[420px] z-40 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-xl items-center justify-between">
<div className="text-xl font-bold tracking-tighter text-white">Clair</div>
<a className="px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-slate-200 transition-colors" href="#pricing">
                Commencer
            </a>
</nav>

<header className="relative px-6 pt-32 pb-16 flex flex-col gap-6 z-10">

<div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-medium tracking-wide animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                IA DE CARRIÈRE
            </div>

<h1 className="text-[32px] leading-[1.1] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                En 10 minutes, comprends où tu vas professionnellement.
            </h1>

<p className="text-slate-400 text-sm leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Pas un test de personnalité. Un coach IA qui clarifie ta direction et te donne un plan d’action immédiat.
            </p>

<div className="flex flex-col gap-3 w-full animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="group relative w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl text-white font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]" href="#pricing">
<span className="relative z-10">Faire le diagnostic gratuit</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="w-full h-12 flex items-center justify-center gap-2 rounded-xl border border-slate-700 text-slate-300 font-medium text-sm hover:bg-white/5 transition-colors" href="#exemple">
                    Voir un exemple de résultat
                </a>
</div>

<div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-medium uppercase tracking-wider animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 10 min</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Anonyme</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Actionnable</span>
</div>

<div className="glass-card animate-fade-in-up border-white/20 rounded-2xl border-t mt-8 pt-5 pr-5 pb-5 pl-5" style={{animationDelay: '0.5s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold">C</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Analyse en cours...</span>
<span className="text-[10px] text-slate-400">Traitement des données</span>
</div>
</div>
<svg aria-hidden="true" className="iconify text-indigo-400 animate-spin iconify--lucide" data-icon="lucide:loader-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-full bg-slate-800 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full animate-progress relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 font-medium font-mono">
<span>Alignement</span>
<span>75%</span>
</div>
</div>
</header>

<section className="px-6 py-8 border-y border-slate-800/50 bg-slate-900/30">
<div className="flex flex-col items-center gap-4 text-center">
<div className="flex -space-x-2 overflow-hidden">
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-950 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-950 bg-slate-600 flex items-center justify-center text-[10px] text-white font-bold">AM</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-950 bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">LC</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-950 bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-bold">+2k</div>
</div>
<p className="text-sm text-slate-300 font-medium">
                    Rejoint chaque semaine par des <br/>personnes en transition.
                </p>
</div>
</section>

<section className="px-6 py-16">
<h2 className="text-xl font-semibold tracking-tight text-white mb-8">Tu te reconnais ?</h2>
<div className="flex flex-col gap-4">

<div className="glass-card p-5 rounded-2xl group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:frown" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2s-4 2-4 2m1-7h.01M15 9h.01"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-slate-200 mb-1">Le pro frustré</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Tu as un bon job sur le papier, mais tu t'ennuies ou tu ne vois plus le sens. Tu veux changer mais tu as peur de te tromper.
                    </p>
</div>

<div className="glass-card p-5 rounded-2xl group hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:compass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-sm font-semibold text-slate-200 mb-1">L'explorateur perdu</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Tu finis tes études ou tu es jeune actif. Tu as trop d'options, ou aucune qui ne t'excite vraiment. Tu cherches ta voie.
                    </p>
</div>
</div>
</section>

<section className="px-6 py-12 bg-gradient-to-b from-transparent to-indigo-900/10">
<h2 className="text-xl font-semibold tracking-tight text-white mb-8 text-center">Avant / Après</h2>
<div className="space-y-4">
<div className="bg-red-500/5 border border-red-500/10 rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500/40"></div>
<h3 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Avant Clair
                    </h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-400">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-red-900 iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Boucle mentale sans fin
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-400">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-red-900 iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Conseils génériques de proches
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-400">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-red-900 iconify--lucide" data-icon="lucide:minus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Inaction par peur du risque
                        </li>
</ul>
</div>
<div className="flex justify-center -my-2 z-10 relative">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="glass-card bg-emerald-500/5 border-emerald-500/20 rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50"></div>
<h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Avec Clair
                    </h3>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Diagnostic objectif et clair
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            3 pistes concrètes à explorer
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify mt-1 min-w-[14px] text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Plan d'action "Lundi matin"
                        </li>
</ul>
</div>
</div>
</section>

<section className="px-6 py-16">
<h2 className="text-xl font-semibold tracking-tight text-white mb-8">Comment ça marche</h2>
<div className="relative pl-4 border-l border-slate-800 space-y-10">

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-950 border-2 border-indigo-500"></div>
<h3 className="text-sm font-semibold text-white mb-1">1. L'échange</h3>
<p className="text-xs text-slate-400">Tu discutes avec l'IA par chat. Elle creuse tes motivations profondes, tes compétences oubliées et tes valeurs.</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-950 border-2 border-indigo-500"></div>
<h3 className="text-sm font-semibold text-white mb-1">2. L'analyse</h3>
<p className="text-xs text-slate-400">On croise tes données avec le marché actuel pour identifier des zones de génie réalistes.</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-950 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<h3 className="text-sm font-semibold text-white mb-1">3. La roadmap</h3>
<p className="text-xs text-slate-400">Tu reçois un document PDF synthétique avec tes options et les premières étapes.</p>
</div>
</div>
</section>

<section className="px-6 py-12 bg-slate-900/50" id="exemple">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-white">Résultat typique</h2>
<span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2 py-1 rounded">Aperçu</span>
</div>
<div className="glass-card rounded-xl overflow-hidden border border-white/10">

<div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:file-text" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<div className="text-xs font-semibold text-white">Rapport de Clarté</div>
<div className="text-[10px] text-slate-400">Généré pour "Thomas"</div>
</div>
</div>
<div className="p-5 space-y-5">

<div>
<h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Ton fil conducteur</h4>
<p className="text-xs text-slate-200 leading-relaxed">
                            Tu as besoin d'autonomie créative mais dans un cadre structuré. Ton moteur est la "résolution de problèmes complexes" plus que la gestion humaine.
                        </p>
</div>

<div>
<h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">3 Voies possibles</h4>
<div className="space-y-2">
<div className="bg-white/5 p-2 rounded border border-white/5 flex items-center justify-between">
<span className="text-xs text-indigo-200">Product Operations</span>
<span className="text-[10px] text-slate-500">Fit: 92%</span>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 flex items-center justify-between">
<span className="text-xs text-indigo-200">Consultant Stratégie</span>
<span className="text-[10px] text-slate-500">Fit: 85%</span>
</div>
</div>
</div>

<div>
<h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Action cette semaine</h4>
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-square" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                            Contacter 2 profils sur LinkedIn (templates fournis)
                        </div>
</div>
</div>
</div>
</section>

<section className="px-6 py-16 relative" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent pointer-events-none"></div>
<h2 className="text-2xl font-semibold tracking-tight text-center text-white mb-2">Investis en toi</h2>
<p className="text-center text-slate-400 text-xs mb-8">Moins cher qu'une heure de coaching classique.</p>
<div className="space-y-4">

<div className="glass-card p-0 rounded-2xl border-2 border-indigo-500/50 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)]">
<div className="bg-indigo-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Le plus choisi</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-bold text-white">Mensuel</h3>
<p className="text-xs text-indigo-200">Pour un suivi complet</p>
</div>
<div className="text-right">
<span className="text-2xl font-bold text-white">24,99€</span>
<span className="text-xs text-slate-400 block">/mois</span>
</div>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Diagnostic illimité
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Plan d'action détaillé
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Accès aux ressources carrière
                            </li>
</ul>
<button className="w-full h-12 bg-white text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-100 transition-colors">
                            Commencer maintenant
                        </button>
<p className="text-[10px] text-center text-slate-500 mt-3">Sans engagement. Annule en 1 clic.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-semibold text-white">Starter</h3>
<p className="text-xs text-slate-400">Pour tester l'eau</p>
</div>
<div className="text-right">
<span className="text-xl font-bold text-white">6,99€</span>
<span className="text-xs text-slate-400 block">/semaine</span>
</div>
</div>
<button className="w-full h-10 border border-slate-600 text-white font-medium text-xs rounded-xl hover:bg-white/5 transition-colors">
                        Choisir l'hebdomadaire
                    </button>
</div>
</div>
</section>

<section className="px-6 py-6 border-b border-slate-800/50">
<div className="flex items-center justify-center gap-2 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<p className="text-[10px]">Tes données restent privées. On ne revend rien.</p>
</div>
</section>

<section className="px-6 py-16">
<h2 className="text-xl font-semibold tracking-tight text-white mb-8">Questions fréquentes</h2>
<div className="space-y-4">

<details className="group bg-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-200">C’est un test de personnalité ?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transform group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed">
                        Non. Les tests classiques te mettent dans une case. Clair agit comme un coach : il analyse ta situation unique et construit une stratégie sur-mesure.
                    </div>
</details>

<details className="group bg-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-200">En combien de temps j’ai un résultat ?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transform group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed">
                        La conversation initiale dure environ 10 minutes. L'analyse et le plan d'action sont générés instantanément après.
                    </div>
</details>

<details className="group bg-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-200">Et si je suis déjà en poste ?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transform group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed">
                        C'est idéal. Clair t'aide à voir si tu dois pivoter en interne, changer d'entreprise, ou changer radicalement de métier.
                    </div>
</details>

<details className="group bg-white/5 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-200">Je peux annuler ?</span>
<svg aria-hidden="true" className="iconify text-slate-400 transform group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed">
                        Oui, à tout moment depuis ton espace personnel. Pas de questions, pas de pièges.
                    </div>
</details>
</div>
</section>

<footer className="px-6 py-12 border-t border-slate-800 bg-slate-900/50 pb-24 text-center">
<h3 className="text-lg font-semibold text-white mb-2">Arrête de tourner en rond.</h3>
<p className="text-slate-400 text-xs mb-6 max-w-[250px] mx-auto">Rejoins les milliers de personnes qui ont trouvé leur voie avec Clair.</p>
<a className="inline-flex items-center justify-center h-12 px-8 bg-white text-slate-900 font-semibold text-sm rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform" href="#pricing">
                Lancer mon diagnostic
            </a>
<div className="mt-12 flex justify-center gap-6 text-slate-600">
<svg aria-hidden="true" className="iconify hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<svg aria-hidden="true" className="iconify hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</div>
<div className="mt-8 text-[10px] text-slate-700">
                © 2024 Clair App. Tous droits réservés.<br/>
<a className="hover:text-slate-500" href="#">Mentions légales</a>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-30"></div>
</main>

    </>
  );
}
