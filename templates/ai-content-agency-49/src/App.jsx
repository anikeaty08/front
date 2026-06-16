import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Cursor Logic
        const cursorGlow = document.getElementById('cursorGlow');
        const cursorDot = document.getElementById('cursorDot');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;
            
            // Lag effect for glow
            cursorGlow.animate({
                left: `${x}px`,
                top: `${y}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .glass-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.width = '500px';
                cursorGlow.style.height = '500px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.width = '400px';
                cursorGlow.style.height = '400px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)';
            });
        });

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Apply to fade-up elements that weren't triggered by keyframes immediately
        document.querySelectorAll('.animate-fade-up').forEach(el => {
            // Re-trigger animation if needed or handle scroll logic
            // CSS keyframes handle load animation, this adds scroll support for lower sections
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-glow" id="cursorGlow"></div>
<div className="cursor-dot" id="cursorDot"></div>

<div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-lg tracking-tighter group-hover:scale-95 transition-transform">R</div>
<span className="text-sm font-medium tracking-tight text-white">Rotbart</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#methodologie">Notre Méthode</a>
<a className="hover:text-white transition-colors" href="#eeat">Standard EEAT</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#audit">
                Audit Gratuit
            </a>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<iconify-icon className="absolute top-1/4 left-10 text-white/5 text-6xl animate-pulse" icon="solar:document-add-linear" style={{animationDuration: '4s'}}></iconify-icon>
<iconify-icon className="absolute bottom-1/3 right-10 text-white/5 text-7xl animate-pulse" icon="solar:graph-up-linear" style={{animationDuration: '6s'}}></iconify-icon>
<iconify-icon className="absolute top-1/3 right-1/4 text-white/5 text-4xl animate-pulse" icon="solar:cpu-bolt-linear" style={{animationDuration: '5s'}}></iconify-icon>
</div>
<div className="max-w-5xl mx-auto text-center relative z-20">

<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-400 mb-8 font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Agence Conseil en Performance Numérique
            </div>

<h1 className="animate-fade-up delay-100 text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white mb-8">
                Contenu <span className="text-gradient">Intelligent</span>.<br/>
                Échelle <span className="italic font-serif text-gray-400">Industrielle</span>.
            </h1>

<p className="animate-fade-up delay-200 text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                Transformez votre stratégie d'acquisition avec du contenu E-commerce et Branding sur-mesure.
                Haute scalabilité, qualité <span className="text-white font-normal">EEAT</span>, et optimisation IA.
            </p>

<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3 bg-white text-black rounded-full text-sm font-medium overflow-hidden transition-all hover:scale-105">
<span className="relative z-10">Lancer l'optimisation</span>
<div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</button>
<button className="px-8 py-3 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
                    Découvrir la méthode
                </button>
</div>
</div>

<div className="animate-fade-up delay-400 mt-20 w-full max-w-5xl perspective-[2000px]">
<div className="relative transform rotate-x-[15deg] transition-transform duration-700 hover:rotate-x-0 group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 h-[500px]">

<div className="h-10 border-b border-white/5 bg-[#0f0f0f] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 text-[10px] font-mono text-gray-500 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
                            rotbart-ai-engine.sys
                        </div>
</div>

<div className="flex h-full">

<div className="w-16 border-r border-white/5 bg-[#0c0c0c] flex flex-col items-center py-4 gap-6">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition"><iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition"><iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition"><iconify-icon icon="solar:database-linear" width="20"></iconify-icon></div>
</div>

<div className="flex-1 p-8 grid grid-cols-2 gap-8">

<div className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Données Brutes</h3>
<span className="text-[10px] text-emerald-500 font-mono">Connecté: PIM/ERP</span>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-white/10 rounded animate-pulse"></div>
<div className="h-2 w-full bg-white/10 rounded animate-pulse delay-75"></div>
<div className="h-2 w-5/6 bg-white/10 rounded animate-pulse delay-150"></div>
<div className="h-2 w-2/3 bg-white/10 rounded animate-pulse"></div>
</div>
<div className="p-4 rounded border border-white/5 bg-white/[0.02] mt-8">
<p className="font-mono text-[10px] text-gray-500">
                                        &gt; Initializing Semantic Audit...<br/>
                                        &gt; Analyzing Vertical: "Home Services"<br/>
                                        &gt; Generating EEAT Prompt Matrix...
                                    </p>
</div>
</div>

<div className="space-y-4 border-l border-white/5 pl-8">
<div className="flex justify-between items-center">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Génération Optimisée</h3>
<span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20">Score EEAT: 98/100</span>
</div>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-1"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="text-sm text-gray-300">Intention de recherche validée</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="text-sm text-gray-300">Maillage interne contextuel</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="text-sm text-gray-300">Tonalité de marque respectée</div>
</div>
</div>
<div className="mt-8 relative h-32 w-full bg-gradient-to-b from-white/5 to-transparent rounded border border-white/5 p-4 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="text-xs text-gray-400 font-serif leading-relaxed blur-[0.5px]">
                                        L'importance de l'intelligence artificielle dans les services à la personne ne cesse de croître. Notre approche garantit une...
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#050505]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Expertise &amp; Services</h2>
<p className="text-gray-400 max-w-md font-light">
                        De l'audit technique à la production industrielle. Nous couvrons l'ensemble de la chaîne de valeur du contenu numérique.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">
                    Voir toutes les expertises
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden h-80 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors"></div>
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">E-commerce</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Génération massive de fiches produits optimisées. Enrichissement sémantique pour les marketplaces.
                        </p>
</div>
<div className="w-full bg-white/5 h-1 rounded overflow-hidden">
<div className="bg-blue-500 h-full w-3/4"></div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden h-80 flex flex-col justify-between">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors"></div>
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:bookmark-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Branding</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                            Livres blancs, articles de blog et storytelling de marque. L'IA au service de votre identité.
                        </p>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gray-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-gray-600 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-gray-500 border border-black"></div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden h-80 flex flex-col justify-between lg:col-span-2">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 right-0 p-40 bg-emerald-500/5 rounded-full blur-[100px] group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">SEO &amp; GEO (Generative Engine Opt.)</h3>
<p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                                    Anticipez l'avenir de la recherche (Google SGE, ChatGPT Search). Stratégies de visibilité hybrides pour moteurs et LLMs.
                                </p>
</div>

<div className="hidden sm:flex gap-1 items-end h-16">
<div className="w-2 bg-emerald-500/20 h-8 rounded-sm"></div>
<div className="w-2 bg-emerald-500/40 h-12 rounded-sm"></div>
<div className="w-2 bg-emerald-500/60 h-10 rounded-sm"></div>
<div className="w-2 bg-emerald-500/80 h-16 rounded-sm"></div>
<div className="w-2 bg-emerald-500 h-14 rounded-sm"></div>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 w-fit px-3 py-1 rounded-md">
<iconify-icon icon="solar:graph-new-linear"></iconify-icon>
                            +240% Trafic Organique
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 bg-black border-t border-white/5 overflow-hidden" id="methodologie">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">La Méthode Rotbart</h2>
<p className="text-gray-400 max-w-xl mx-auto font-light">
                    Un processus rigoureux alliant puissance de calcul et expertise humaine pour garantir la qualité EEAT.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

<div className="group relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white mb-6 z-10 group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-mono text-sm text-gray-500 group-hover:text-white">01</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Audit</h3>
<p className="text-xs text-gray-500 leading-relaxed px-4">Analyse sémantique, étude de concurrence et définition des KPIs.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white mb-6 z-10 group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-mono text-sm text-gray-500 group-hover:text-white">02</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Formalisation</h3>
<p className="text-xs text-gray-500 leading-relaxed px-4">Création des prompts, tone of voice et architecture de contenu.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white mb-6 z-10 group-hover:border-emerald-500 transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
<iconify-icon className="text-2xl text-emerald-500 animate-pulse" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Industrialisation</h3>
<p className="text-xs text-gray-500 leading-relaxed px-4">Génération par batch via API, injection de données structurées.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white mb-6 z-10 group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-mono text-sm text-gray-500 group-hover:text-white">04</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Relecture Expert</h3>
<p className="text-xs text-gray-500 leading-relaxed px-4">Validation humaine (HITL), fact-checking et correction de biais.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white mb-6 z-10 group-hover:border-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-mono text-sm text-gray-500 group-hover:text-white">05</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Livraison</h3>
<p className="text-xs text-gray-500 leading-relaxed px-4">Intégration CMS, indexation et suivi des performances.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#080808]" id="eeat">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] text-purple-300 mb-6 font-medium tracking-wide">
                    Qualité Maximale
                </div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">
                    L'Alliance de l'IA et de l'Humain pour le Standard EEAT.
                </h2>
<p className="text-gray-400 font-light leading-relaxed mb-8">
                    Google valorise l'Expérience, l'Expertise, l'Autorité et la Fiabilité. L'IA brute ne suffit pas. Nous intégrons des boucles de validation humaine pour garantir que chaque contenu serve votre marque et vos utilisateurs.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-purple-400 text-lg" icon="solar:check-square-linear"></iconify-icon>
                        Vérification des sources et des faits
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-purple-400 text-lg" icon="solar:check-square-linear"></iconify-icon>
                        Enrichissement sémantique propriétaire
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-purple-400 text-lg" icon="solar:check-square-linear"></iconify-icon>
                        Adaptation fine aux verticales métier
                    </li>
</ul>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative rounded-xl bg-[#0f0f0f] border border-white/10 p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
<h3 className="text-sm font-medium text-white">Validation Workflow</h3>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20"></span>
<span className="w-3 h-3 rounded-full bg-green-500"></span>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">AI</div>
<div>
<div className="text-xs text-white">Draft Generation</div>
<div className="text-[10px] text-gray-500">2,400 mots • Tonalité: Expert</div>
</div>
</div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
</div>

<div className="flex justify-center -my-2"><div className="h-4 w-px bg-white/10"></div></div>

<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs">H</div>
<div>
<div className="text-xs text-white">EEAT Review</div>
<div className="text-[10px] text-gray-500">Expert Humain #04</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="h-1 w-16 bg-white/10 rounded overflow-hidden">
<div className="h-full bg-purple-500 w-2/3 animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>

<div className="flex justify-center -my-2"><div className="h-4 w-px bg-white/10"></div></div>

<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-500/10 text-gray-400 flex items-center justify-center text-xs">CMS</div>
<div>
<div className="text-xs text-white">Déploiement</div>
<div className="text-[10px] text-gray-500">En attente</div>
</div>
</div>
<iconify-icon className="text-gray-500" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
                Prêt à scaler ?
            </h2>
<p className="text-gray-400 text-lg mb-12 font-light">
                Discutez avec nos consultants experts en performance numérique.<br/>
                Définissons ensemble votre stratégie de contenu IA.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">

<div className="relative group cursor-pointer">
<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
<a className="relative block px-12 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-gray-100 transition-colors" href="#contact">
                        Planifier un appel découverte
                    </a>
</div>
<a className="text-sm text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5" href="mailto:contact@rotbart.agency">
                    contact@rotbart.agency
                </a>
</div>
</div>
</section>

<footer className="relative z-10 py-16 px-6 border-t border-white/10 bg-black text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<div className="text-white font-bold text-lg mb-4">Rotbart.</div>
<p className="text-gray-500 leading-relaxed">
                    Agence conseil en performance numérique.
                    Spécialiste SEO, GEO, SEA et Optimisation de contenus IA.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Content IA Scaling</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO &amp; GEO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Formation IA</a></li>
<li><a className="hover:text-white transition-colors" href="#">Audit Technique</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Agence</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cas Clients</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carrières</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
            © 2024 Agence Rotbart. Paris. All Rights Reserved.
        </div>
</footer>



    </>
  );
}
