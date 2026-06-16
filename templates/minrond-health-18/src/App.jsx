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
serif: ['Newsreader', 'serif'],
},
colors: {
brand: {
900: '#0B0C10', // Deepest background
800: '#15171E', // Secondary background
700: '#1F222E', // Borders/Cards
100: '#E2E8F0', // Text primary
300: '#94A3B8', // Text secondary
accent: '#6366F1', // Subtle Indigo
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-height="20" data-icon="lucide:circle-dot-dashed" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69"></path><circle cx="12" cy="12" r="1"></circle></g></svg>
<span className="text-sm font-medium tracking-[0.2em] uppercase text-brand-100">Minrond</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-brand-300">
<a className="hover:text-brand-100 transition-colors" href="#concept">Le Concept</a>
<a className="hover:text-brand-100 transition-colors" href="#vision">Vision</a>
<a className="hover:text-brand-100 transition-colors" href="#security">Souveraineté</a>
</div>
<div>
<a className="text-xs font-medium border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-brand-900 transition-all duration-300" href="#">
                    Accès Bêta
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] tracking-widest uppercase text-brand-300">Nouvelle approche systémique</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light tracking-tight text-brand-100 mb-6 leading-[1.1] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Comprendre sa santé. <br/>
<span className="not-italic font-normal font-sans text-brand-300">Pas seulement la mesurer.</span>
</h1>
<p className="text-lg md:text-xl text-brand-300 font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Vos données racontent une histoire, mais elles sont dispersées. Minrond centralise, analyse et révèle le récit de votre biologie et de votre esprit.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="group relative px-8 py-3 bg-brand-100 text-brand-900 rounded-lg text-sm font-medium tracking-wide overflow-hidden transition-all hover:pr-10">
<span className="relative z-10">Explorer la plateforme</span>
<span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<button className="px-8 py-3 text-brand-300 hover:text-brand-100 text-sm font-medium tracking-wide transition-colors">
                    Lire le manifeste
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute bottom-0 left-1/2 h-16 w-px bg-gradient-to-t from-white/10 to-transparent"></div>
</section>

<section className="py-24 md:py-32 bg-brand-900 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-start mb-20">
<h2 className="text-3xl md:text-4xl font-light tracking-tight">Le bruit avant le signal.</h2>
<p className="text-brand-300 font-light leading-relaxed text-lg">
                    Aujourd'hui, votre santé est fragmentée. Des PDFs sanguins d'un côté, des heures de sommeil de l'autre, et votre ressenti émotionnel nulle part. Ces chiffres isolés manquent de contexte, de mémoire et de sens.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-brand-800/50 border border-white/5 hover:border-white/10 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center mb-6 text-brand-300">
<svg aria-hidden="true" data-icon="lucide:files" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706zM5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-3">Fragmentation</h3>
<p className="text-sm text-brand-300 font-light leading-relaxed">
                        Des données éparpillées entre laboratoires, montres connectées et notes personnelles. Impossible d'avoir une vue d'ensemble.
                    </p>
</div>

<div className="p-8 rounded-xl bg-brand-800/50 border border-white/5 hover:border-white/10 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center mb-6 text-brand-300">
<svg aria-hidden="true" data-icon="lucide:hourglass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Amnésie</h3>
<p className="text-sm text-brand-300 font-light leading-relaxed">
                        La santé est une trajectoire, pas un instantané. Les outils actuels échouent à montrer l'évolution sur le temps long.
                    </p>
</div>

<div className="p-8 rounded-xl bg-brand-800/50 border border-white/5 hover:border-white/10 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center mb-6 text-brand-300">
<svg aria-hidden="true" data-icon="lucide:microscope" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Opacité</h3>
<p className="text-sm text-brand-300 font-light leading-relaxed">
                        Des chiffres bruts sans explication. Manque de corrélation entre ce que vous faites et ce que vous ressentez.
                    </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden pt-24 pb-24 relative" id="concept">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-xs font-medium tracking-widest uppercase text-brand-300 mb-4 block">L'Architecture Minrond</span>
<h2 className="text-3xl md:text-5xl font-serif italic text-brand-100">Le Double Jumeau</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative p-8 rounded-2xl bg-brand-800 border border-white/10 h-[420px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-xl font-medium tracking-tight">Le Jumeau Somatique</h3>
<p className="text-xs text-brand-300 uppercase tracking-wider">Données Objectives</p>
</div>
<svg aria-hidden="true" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="space-y-4 my-8">
<div className="h-24 w-full flex items-end gap-1">
<div className="w-1/12 bg-white/5 h-[40%] rounded-sm"></div>
<div className="w-1/12 bg-white/5 h-[60%] rounded-sm"></div>
<div className="w-1/12 bg-white/10 h-[50%] rounded-sm"></div>
<div className="w-1/12 bg-white/10 h-[70%] rounded-sm"></div>
<div className="w-1/12 bg-white/20 h-[55%] rounded-sm"></div>
<div className="w-1/12 bg-white/20 h-[80%] rounded-sm"></div>
<div className="w-1/12 bg-teal-500/40 h-[75%] rounded-sm"></div>
<div className="w-1/12 bg-teal-500/60 h-[90%] rounded-sm"></div>
<div className="w-1/12 bg-white/20 h-[85%] rounded-sm"></div>
<div className="w-1/12 bg-white/10 h-[65%] rounded-sm"></div>
<div className="w-1/12 bg-white/5 h-[50%] rounded-sm"></div>
<div className="w-1/12 bg-white/5 h-[45%] rounded-sm"></div>
</div>
<div className="flex justify-between text-[10px] text-brand-300 font-mono">
<span>Biomarqueurs</span>
<span className="">Métabolisme</span>
<span>Sommeil</span>
</div>
</div>
<p className="text-sm font-light text-brand-300 border-t border-white/5 pt-6">
                            Agrégation silencieuse de vos wearables et analyses biologiques. Une cartographie précise de votre physiologie.
                        </p>
</div>
</div>

<div className="relative group mt-8 lg:mt-0">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative p-8 rounded-2xl bg-brand-800 border border-white/10 h-[420px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="text-xl font-medium tracking-tight">Le Jumeau Intérieur</h3>
<p className="text-xs text-brand-300 uppercase tracking-wider">Données Subjectives</p>
</div>
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>

<div className="relative h-32 my-8 flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 border border-purple-500/20 rounded-full animate-pulse-slow"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-40 h-40 border border-white/5 rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-8 text-[10px] text-brand-300 font-mono text-center relative z-10">
<div className="bg-brand-900 border border-white/10 px-2 py-1 rounded">Énergie</div>
<div className="bg-brand-900 border border-white/10 px-2 py-1 rounded">Focus</div>
<div className="bg-brand-900 border border-white/10 px-2 py-1 rounded">Stress</div>
<div className="bg-brand-900 border border-white/10 px-2 py-1 rounded">Humeur</div>
</div>
</div>
<p className="text-sm font-light text-brand-300 border-t border-white/5 pt-6">
                            L'espace du ressenti. Cognition, charge émotionnelle et perception. Minrond tisse le lien entre ce que le corps mesure et ce que l'esprit vit.
                        </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-brand-300 font-light max-w-2xl mx-auto italic">
                    "Le dialogue entre ces deux jumeaux crée une intelligence contextuelle, transformant des données brutes en connaissance de soi."
                </p>
</div>
</div>
</section>

<section className="py-24 bg-brand-800 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-light tracking-tight mb-4">Une interface polymorphe</h2>
<p className="text-brand-300 font-light">
                    L'outil s'adapte à la complexité de votre recherche, pas l'inverse.
                </p>
</div>

<div className="space-y-1">

<div className="group relative overflow-hidden rounded-lg bg-brand-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-default">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<svg aria-hidden="true" data-icon="lucide:heart-pulse" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
<span className="font-medium text-brand-100">Perspective Longévité</span>
</div>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="pt-4 text-sm text-brand-300 font-light pl-9">
                            Suivi des biomarqueurs de vieillissement, analyse prédictive et optimisation métabolique à long terme.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg bg-brand-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-default">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-brand-100">Perspective Performance</span>
</div>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="pt-4 text-sm text-brand-300 font-light pl-9">
                            Corrélation charge/récupération, variabilité cardiaque (VFC) et préparation mentale pour les athlètes et biohackers.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg bg-brand-900 border border-white/5 p-6 hover:border-white/20 transition-all cursor-default">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<svg aria-hidden="true" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="font-medium text-brand-100">Perspective Quotidienne</span>
</div>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="pt-4 text-sm text-brand-300 font-light pl-9">
                            Un tableau de bord simplifié pour comprendre son énergie, son sommeil et ses habitudes de vie sans surcharge cognitive.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="security">
<div className="bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-white/5 p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-[10px] tracking-widest uppercase text-blue-200">Souveraineté des données</span>
</div>
<h2 className="text-3xl font-light text-white">Vos données. Votre propriété.<br/>Exclusivement.</h2>
<p className="text-brand-300 font-light leading-relaxed">
                        Contrairement aux modèles basés sur la publicité ou la revente, Minrond est un coffre-fort dont vous seul possédez la clé.
                    </p>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-sm text-brand-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Hébergement souverain en Europe
                        </li>
<li className="flex items-center gap-3 text-sm text-brand-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Chiffrement de bout en bout
                        </li>
<li className="flex items-center gap-3 text-sm text-brand-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Conformité RGPD stricte et auditée
                        </li>
</ul>
</div>
<div className="flex justify-center md:justify-end">

<div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="w-32 h-32 bg-brand-800 rounded-full flex items-center justify-center shadow-2xl border border-white/10">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 bg-brand-900 border-t border-white/5 text-center" id="vision">
<div className="max-w-3xl mx-auto px-6 mb-20">
<svg aria-hidden="true" data-icon="lucide:orbit" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></g></svg>
<h2 className="text-4xl md:text-5xl font-serif italic text-brand-100 mb-6">L'autonomie éclairée.</h2>
<p className="text-lg font-light text-brand-300 leading-relaxed mb-10">
                La santé n'est pas une absence de maladie, c'est une compétence qui se cultive. Minrond vous donne les outils pour devenir l'expert de votre propre biologie.
            </p>
<form className="max-w-sm mx-auto flex flex-col gap-3">
<input className="w-full bg-brand-800 border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-100 focus:outline-none focus:border-brand-300 transition-colors placeholder:text-brand-700" placeholder="votre@email.com" type="email"/>
<button className="w-full bg-brand-100 text-brand-900 font-medium px-4 py-3 rounded-lg hover:bg-white transition-colors text-sm" type="button">
                    Rejoindre la liste d'attente
                </button>
<p className="text-[10px] text-brand-700 mt-2">Nous ne spammons jamais. Désinscription en un clic.</p>
</form>
</div>
<footer className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-60">
<svg aria-hidden="true" data-icon="lucide:circle-dot-dashed" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69"></path><circle cx="12" cy="12" r="1"></circle></g></svg>
<span className="text-xs font-medium tracking-widest uppercase">Minrond</span>
</div>
<div className="flex gap-6 text-[11px] text-brand-300 tracking-wide">
<a className="hover:text-brand-100 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-brand-100 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-brand-100 transition-colors" href="#">Twitter</a>
<a className="hover:text-brand-100 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-[11px] text-brand-700">
                © 2024 Minrond Health Technologies. Paris.
            </div>
</footer>
</section>

    </>
  );
}
