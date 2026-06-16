import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
animation: {
'float-card': 'float-card 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 3s infinite',
},
keyframes: {
'float-card': {
'0%, 100%': { transform: 'rotateY(-15deg) rotateX(5deg) translateY(0px)' },
'50%': { transform: 'rotateY(-15deg) rotateX(5deg) translateY(-15px)' }
},
'pulse-glow': {
'0%, 100%': { boxShadow: '0 0 0 rgba(16, 185, 129, 0)' },
'50%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }
}
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-x-12': { transform: 'rotateX(12deg)' },
'.rotate-y--15': { transform: 'rotateY(-15deg)' },
'.rotate-x-5': { transform: 'rotateX(5deg)' },
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' },
'.backface-hidden': { backfaceVisibility: 'hidden' },
'.translate-z-10': { transform: 'translateZ(10px)' },
'.translate-z-20': { transform: 'translateZ(20px)' },
})
}
]
}



        lucide.createIcons();

        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/40 dark:bg-emerald-900/10 rounded-full blur-[120px] transition-colors duration-500"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 dark:bg-indigo-900/10 rounded-full blur-[100px] transition-colors duration-500"></div>
<div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-emerald-300/20 dark:bg-emerald-500/5 rounded-full blur-[80px] transition-colors duration-500"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.4] dark:opacity-[0.15]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/5 bg-white/70 dark:bg-black/50 backdrop-blur-xl transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<span className="text-white dark:text-black font-bold text-lg leading-none">V</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 dark:text-white font-semibold tracking-tight text-sm">VITTO</span>
<span className="text-[9px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-medium">Intelligence</span>
</div>
</div>
<div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/5">
<a className="px-4 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-white dark:bg-white/5 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all" href="#">Overview</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Fonctionnalités</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Sécurité</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 transition-colors focus:outline-none" id="theme-toggle">
<svg className="hidden dark:block" fill="none" height="20" id="sun-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="block dark:hidden" fill="none" height="20" id="moon-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<div className="h-4 w-px bg-slate-200 dark:bg-white/10 hidden sm:block"></div>
<a className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hidden sm:block" href="#">Connexion</a>
<a className="flex items-center justify-center h-8 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)] group" href="#">
<span className="relative z-10">Découvrir</span>
<svg className="lucide lucide-chevron-right w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6 cursor-default">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">System V3.4 Operational</span>
</div>
<h1 className="text-5xl md:text-6xl text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tighter font-semibold transition-colors duration-300">
                    Un assistant <br/>
<span className="neon-text tracking-tighter font-semibold">pour tout.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 max-w-md transition-colors duration-300">
                    Factures, paiements, cash-out, comptes — conversez au lieu de naviguer. L'intelligence financière qui simplifie votre vie pro.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="beam-button group px-6 py-3 rounded-lg text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20">
<span className="relative z-10 flex items-center gap-2">
                            Découvrir VITTO
                            <svg className="lucide lucide-zap w-4 h-4 fill-white text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</button>
<button className="px-6 py-3 rounded-lg text-slate-600 dark:text-slate-300 font-medium text-sm border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 group shadow-sm">
<svg className="lucide lucide-play-circle w-4 h-4 text-emerald-500" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Voir la démo
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 text-[10px] text-slate-500 font-medium uppercase tracking-wider">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-3 h-3 text-emerald-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Qonto Integré
                    </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-database w-3 h-3 text-emerald-500" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Drive Sync
                    </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-zap w-3 h-3 text-emerald-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Instant Payout
                    </div>
</div>
</div>

<div className="relative perspective-container h-[500px] flex items-center justify-center sm:justify-end">

<div className="card-3d relative w-full max-w-md h-[500px] animate-float-card">

<div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full -z-10 translate-z-10 dark:opacity-100 opacity-50"></div>

<div className="absolute inset-0 bg-white dark:bg-[#0F1115]/95 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col overflow-hidden transition-colors duration-300">

<div className="p-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-2 h-2 absolute -right-0.5 -top-0.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0F1115] animate-pulse"></div>
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-emerald-700/20 border border-emerald-100 dark:border-white/10 flex items-center justify-center">
<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">V</span>
</div>
</div>
<div>
<div className="text-xs font-medium text-slate-900 dark:text-white">VITTO AI</div>
<div className="text-[9px] text-emerald-600 dark:text-emerald-400">Online • v3.4</div>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400 dark:text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>

<div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scroll bg-slate-50/50 dark:bg-black/20">

<div className="flex justify-end">
<div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-100 text-xs py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    Affiche mes soldes actuels.
                                </div>
</div>

<div className="flex justify-start">
<div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] backdrop-blur-md shadow-sm">
<p className="mb-3">Voici vos soldes en temps réel via Qonto :</p>
<div className="bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-lg p-3 flex items-center justify-between group hover:border-emerald-500/30 transition-colors">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
<svg className="lucide lucide-wallet w-3 h-3" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Compte Pro</span>
</div>
<span className="text-xs font-semibold text-slate-900 dark:text-white tracking-wide font-mono">12,450.00 €</span>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-100 text-xs py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    Ok, génère la facture pour Client X.
                                </div>
</div>

<div className="flex justify-start">
<div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 py-3 px-4 rounded-2xl rounded-tl-sm shadow-sm">
<div className="flex gap-1">
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce"></span>
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-100"></span>
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce delay-200"></span>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#0F1115]">
<div className="relative group">
<input className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-slate-900 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 focus:bg-white dark:focus:bg-black transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-light" disabled="" placeholder="Demandez quelque chose..." type="text"/>
<div className="absolute right-2 top-2 p-1 bg-slate-200 dark:bg-white/10 rounded-lg text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-up w-3.5 h-3.5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 bg-white dark:bg-[#0F1115] border border-slate-200 dark:border-white/10 rounded-xl p-3 shadow-xl dark:shadow-2xl translate-z-20 w-40 flex flex-col gap-2 backdrop-blur-xl transition-colors duration-300">
<div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2 mb-1">
<span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Active Modules</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
<svg className="lucide lucide-file-check w-3 h-3 text-emerald-500 dark:text-emerald-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg> Invoicing
                        </div>
<div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
<svg className="lucide lucide-zap w-3 h-3 text-emerald-500 dark:text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Cashout
                        </div>
</div>

<div className="absolute -left-8 bottom-32 bg-emerald-950/90 dark:bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4 shadow-xl dark:shadow-2xl translate-z-20 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-1">
<div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-[9px] font-medium text-emerald-400 uppercase">Cashflow</span>
</div>
<div className="text-lg font-bold text-white font-mono">+24.5%</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.07] transition-all duration-500 shadow-sm dark:shadow-none">
<div className="mb-4 p-3 inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Compte Pro</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">"Montre moi mes soldes" — Intégration native Qonto sans quitter le chat.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.07] transition-all duration-500 shadow-sm dark:shadow-none">
<div className="mb-4 p-3 inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-file-check w-5 h-5" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Factures</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">"Génère ma facture de septembre" — Pré-remplie, envoyée, archivée.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.07] transition-all duration-500 shadow-sm dark:shadow-none">
<div className="mb-4 p-3 inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Cashout</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">"Je veux ma paye" — VITTO lance le processus et gère les frais.</p>
</div>

<div className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.07] transition-all duration-500 shadow-sm dark:shadow-none">
<div className="mb-4 p-3 inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Payout Tracking</h3>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">"Qui m'a payé ?" — Vue temps réel des transactions entrantes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/40 dark:bg-emerald-500/5 rounded-full blur-[100px] -z-10 transition-colors duration-500"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 mb-4">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Live Simulation</span>
</div>
<h2 className="text-3xl text-slate-900 dark:text-white mb-4 tracking-tighter font-semibold transition-colors duration-300">Suivez une journée standard</h2>
<p className="text-slate-600 dark:text-slate-400 font-light text-sm">Plus de clic, juste une conversation. L'IA gère l'exécution.</p>
</div>
<button className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2 shadow-sm dark:shadow-none">
                    Voir la documentation <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid lg:grid-cols-12 gap-8 h-[600px]">

<div className="lg:col-span-5 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/5 flex flex-col overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-300">
<div className="p-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Conversation en cours</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-400 dark:bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400 dark:bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-emerald-500/40"></div>
</div>
</div>
<div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scroll">

<div className="flex justify-end">
<div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-100 text-xs p-3 rounded-2xl rounded-tr-sm shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.05)] max-w-[90%]">
                                J'ai travaillé 5 jours en septembre, une astreinte le 31.
                            </div>
</div>

<div className="flex justify-start gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-emerald-800/20 border border-emerald-100 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex-shrink-0">V</div>
<div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
<p>Vérifié. TJM 500€. Ça fait 2750€.</p>
<p className="mt-2 text-slate-400 dark:text-slate-500 text-[10px]">Je vois l'astreinte sur votre calendrier. Je l'ajoute ?</p>
</div>
</div>

<div className="flex justify-end">
<div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-100 text-xs p-3 rounded-2xl rounded-tr-sm shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.05)] max-w-[90%]">
                                Oui, et envoie à mon client.
                            </div>
</div>

<div className="flex justify-start gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-emerald-800/20 border border-emerald-100 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex-shrink-0">V</div>
<div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs p-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-loader w-3 h-3 animate-spin text-emerald-500" data-lucide="loader" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
<span className="text-emerald-600 dark:text-emerald-500">Génération de la facture...</span>
</div>
<div className="bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded p-2 mb-2 flex items-center gap-3">
<div className="bg-red-50 dark:bg-red-500/10 p-2 rounded text-red-500 dark:text-red-400"><svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<div className="text-left">
<div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Facture_Sep_2023.pdf</div>
<div className="text-[9px] text-slate-500">Ready to send</div>
</div>
</div>
<p>Facture prête. Client: ACME Corp. Je l'envoie ?</p>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/40">
<div className="h-10 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 flex items-center px-3 text-xs text-slate-500 font-mono shadow-sm dark:shadow-none">
                            &gt; Go, envoie.<span className="animate-pulse">_</span>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-4">

<div className="flex-1 bg-white/60 dark:bg-gradient-to-br dark:from-white/[0.03] dark:to-white/[0.01] rounded-2xl border border-slate-200 dark:border-white/10 p-6 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 shadow-lg dark:shadow-none">
<div className="absolute top-0 right-0 p-px w-full h-full pointer-events-none bg-gradient-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-4 right-4 flex gap-2 z-10">
<span className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] px-2 py-1 rounded-full font-medium border border-emerald-100 dark:border-emerald-500/20 uppercase tracking-wide">Prêt à envoyer</span>
</div>

<div className="w-full h-full bg-white dark:bg-[#0F1115] border border-slate-100 dark:border-white/5 rounded-xl p-8 transform group-hover:scale-[1.02] transition-transform duration-500 relative shadow-xl">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.3]"></div>
<div className="relative z-10">
<div className="flex justify-between mb-8 opacity-60">
<div className="w-20 h-6 bg-slate-200 dark:bg-white/10 rounded"></div>
<div className="text-right space-y-1">
<div className="w-32 h-4 bg-slate-200 dark:bg-white/10 rounded ml-auto"></div>
<div className="w-24 h-3 bg-slate-100 dark:bg-white/5 rounded ml-auto"></div>
</div>
</div>
<div className="space-y-4 opacity-60">
<div className="w-full h-8 bg-slate-100 dark:bg-white/5 rounded mb-4 border border-slate-200 dark:border-white/5"></div>
<div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
<div className="w-1/3 h-4 bg-slate-200 dark:bg-white/10 rounded"></div>
<div className="w-16 h-4 bg-slate-200 dark:bg-white/10 rounded"></div>
</div>
<div className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2">
<div className="w-1/3 h-4 bg-slate-200 dark:bg-white/10 rounded"></div>
<div className="w-16 h-4 bg-slate-200 dark:bg-white/10 rounded"></div>
</div>
<div className="flex justify-end mt-8">
<div className="w-1/4 h-10 bg-emerald-100 dark:bg-emerald-500/10 rounded border border-emerald-200 dark:border-emerald-500/20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="h-32 grid grid-cols-2 gap-4">
<div className="bg-white dark:bg-white/[0.02] rounded-xl border border-slate-200 dark:border-white/10 p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none">
<div className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 border border-slate-200 dark:border-white/5 group-hover:border-emerald-500/30 transition-all">
<svg className="lucide lucide-hard-drive w-5 h-5" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Drive Linkage</div>
<div className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Sauvegarde active
                                </div>
</div>
</div>
<div className="bg-white dark:bg-white/[0.02] rounded-xl border border-slate-200 dark:border-white/10 p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none">
<div className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 border border-slate-200 dark:border-white/5 group-hover:border-emerald-500/30 transition-all">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Qonto Pro</div>
<div className="text-[10px] text-slate-500 mt-0.5 font-mono">API Connected • 12ms</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black transition-colors duration-300">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="opacity-50 hover:opacity-100 transition-opacity duration-500">
<h4 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-4">Avant</h4>
<div className="bg-white dark:bg-white/[0.02] p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex flex-wrap gap-4 items-center justify-center grayscale shadow-sm dark:shadow-none">
<div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5"><svg className="lucide lucide-sheet w-5 h-5 text-slate-500" data-lucide="sheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="9" y2="21"></line><line x1="15" x2="15" y1="9" y2="21"></line></svg></div>
<div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5"><svg className="lucide lucide-mail w-5 h-5 text-slate-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></div>
<div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5"><svg className="lucide lucide-folder w-5 h-5 text-slate-500" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg></div>
<div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5"><svg className="lucide lucide-calculator w-5 h-5 text-slate-500" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg></div>
<p className="w-full text-center text-xs text-slate-500 mt-2 font-mono">4 outils, 20 clics, erreurs</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<h4 className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4 relative z-10">Avec VITTO</h4>
<div className="bg-white dark:bg-[#0F1115] p-6 rounded-2xl border border-emerald-500/20 relative z-10 shadow-xl dark:shadow-none">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
<span className="text-white dark:text-black font-bold text-xs">V</span>
</div>
<div className="h-2 w-24 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-emerald-400"></div>
</div>
</div>
<div className="h-2 w-3/4 bg-slate-100 dark:bg-white/5 rounded mb-2 ml-11"></div>
<p className="w-full text-center text-xs text-slate-700 dark:text-slate-300 font-medium mt-4">1 conversation, tout connecté</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-8">CONNEXION NATIVE &amp; SÉCURISÉE</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-slate-300"><svg className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg> Qonto</div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-slate-300"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Drive</div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800 dark:text-slate-300"><svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Bank Grade</div>
</div>
<div className="mt-8 inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/20 rounded-full px-4 py-1.5">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Données chiffrées, zéro stockage perso</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/5 -z-10 transition-colors duration-300"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl text-slate-900 dark:text-white mb-6 tracking-tighter font-semibold transition-colors duration-300">Prêt à simplifier votre workflow ?</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-10 max-w-xl mx-auto">Rejoignez les freelances et gestionnaires qui ont arrêté de naviguer pour commencer à converser.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="group beam-button px-8 py-3.5 rounded-full text-white font-medium hover:scale-105 transition-transform">
                    Accéder à VITTO
                </button>
<button className="px-8 py-3.5 rounded-full font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-sm">
<svg className="lucide lucide-book w-4 h-4" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
                    Documentation
                </button>
</div>
<p className="mt-8 text-xs text-slate-500">Pas de carte requise pour tester • Setup en 2 minutes</p>
</div>
</section>

<footer className="pt-16 pb-8 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
<span className="text-white dark:text-black font-bold text-xs">V</span>
</div>
<span className="text-slate-900 dark:text-white font-bold tracking-tight text-lg">VITTO</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" href="#">Pricing</a>
<a className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" href="#">Manifesto</a>
<a className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors" href="#">Twitter</a>
</div>
</div>
<div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 dark:text-slate-600">
<p>© 2023 VITTO AI. Powered by Payout.</p>
<div className="flex gap-4">
<span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Mentions Légales</span>
<span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Privacy</span>
<span className="flex items-center gap-1.5 text-emerald-600/80 dark:text-emerald-500/80"><div className="w-1 h-1 rounded-full bg-emerald-500"></div> Systems Normal</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
