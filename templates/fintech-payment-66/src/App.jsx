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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        // Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
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

            const revealElements = document.querySelectorAll('.reveal, .reveal-card');
            revealElements.forEach(el => observer.observe(el));
        });

        // Mouse Spotlight Logic
        const spotlight = document.getElementById('spotlight');
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', `${e.pageX}px`);
            spotlight.style.setProperty('--y', `${e.pageY}px`);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tPmIIl0vKqHO9yqmtge2"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50 animate-grid"></div>

<div className="absolute inset-0 z-0" id="spotlight"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[100px] animate-float opacity-40 mix-blend-screen"></div>
<div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[60%] rounded-full bg-teal-900/10 blur-[120px] animate-float opacity-30 mix-blend-screen" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-green-900/10 blur-[90px] animate-pulse-glow opacity-30 mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 reveal active">
<div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.01] hover:border-white/10">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent group-hover:border-emerald-500/30 transition-all duration-300">
<iconify-icon className="text-sm transition-transform group-hover:scale-110 text-white group-hover:text-emerald-400" icon="lucide:wallet-cards"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-tight group-hover:text-white transition-colors text-white">
                    Maax Soluções
                </span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#features">Soluções</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#analytics">Gestão</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#testimonials">Clientes</a>
<a className="text-[11px] font-medium transition-colors hover:text-white hover:scale-105 transform" href="#pricing">Taxas</a>
</div>

<div className="flex items-center gap-3 pl-2 border-l border-white/10">
<a className="hidden md:block text-[10px] font-semibold border border-white/10 px-4 py-1.5 rounded-full transition-all active:scale-95 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] text-white bg-white/5 hover:bg-white/10 hover:border-emerald-500/30" href="#cta">
                    Área do Cliente
                </a>
<button className="md:hidden text-white/70 hover:text-white">
<iconify-icon icon="lucide:menu" width="18"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="min-h-screen flex flex-col md:flex-row overflow-hidden w-full max-w-7xl mx-auto pt-32 px-6 pb-20 relative gap-16 items-center justify-center">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[20%] left-[15%] w-[2px] h-[2px] bg-emerald-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
<div className="absolute bottom-[30%] right-[25%] w-[3px] h-[3px] bg-teal-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(45,212,191,0.8)]" style={{animationDelay: '2s'}}></div>
</div>

<div className="flex-1 w-full space-y-8 relative z-10 text-left">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm cursor-default hover:border-emerald-500/40 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[10px] font-medium uppercase tracking-wider text-emerald-300">Suporte 24/7 Humanizado</span>
</div>
<div className="space-y-6 reveal delay-100">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-white">
                        Tecnologia que <br/>
<span className="text-gradient-accent">Acelera Vendas.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
                        Taxas competitivas, recebimento instantâneo e as melhores maquininhas Smart do mercado. A solução completa para o seu negócio crescer.
                    </p>
</div>
<div className="pt-4 flex flex-wrap items-center gap-4 reveal delay-200">
<a className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 rounded-full text-sm font-medium transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] overflow-hidden bg-white text-black hover:bg-emerald-50 border border-transparent" href="#cta">
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20"></div>
<span className="relative z-10 flex items-center gap-2">
                            Pedir Maquininha
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1 text-black" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
<a className="group inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 rounded-full text-sm font-medium transition-all active:scale-95 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-md" href="#cta">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="lucide:calculator"></iconify-icon>
                        Simular Taxas
                    </a>
</div>

<div className="pt-8 flex items-center gap-8 border-t border-white/5 mt-8 reveal delay-300">
<div className="group cursor-default">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">+250 Mil</div>
<div className="text-xs text-neutral-500">Lojas Atendidas</div>
</div>
<div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="group cursor-default">
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">Smart</div>
<div className="text-xs text-neutral-500">Tecnologia Android</div>
</div>
</div>
</div>

<div className="flex-1 w-full flex justify-center md:justify-end relative z-10 reveal delay-200 perspective-[2000px]">

<div className="animate-float relative w-full md:max-w-10xl h-auto transition-all duration-500 hover:scale-[1.02]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-emerald-500/20 blur-[80px] rounded-full z-0"></div>

<img alt="Maax POS Terminal" className="relative z-10 w-full max-h-[10000px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] filter brightness-[1.1] contrast-[1.1] scale-125" src="https://i.postimg.cc/SxHsJG5W/maquininha.png"/>

<div className="absolute bottom-[-20px] left-0 right-0 h-20 bg-gradient-to-b from-emerald-500/10 to-transparent blur-xl opacity-40 z-0"></div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-sm py-12 overflow-hidden reveal relative z-20">
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-20 pointer-events-none"></div>
<div className="relative w-full max-w-6xl mx-auto z-10">
<div className="flex overflow-hidden group">
<div className="flex animate-marquee gap-16 md:gap-24 opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-500 min-w-max">

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:visa" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-red-500" icon="simple-icons:mastercard" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer grayscale" icon="logos:elo" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:americanexpress" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-emerald-400" icon="fa6-brands:pix" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:googlepay" width="32"></iconify-icon>

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:visa" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-red-500" icon="simple-icons:mastercard" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer grayscale" icon="logos:elo" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:americanexpress" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-emerald-400" icon="fa6-brands:pix" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:googlepay" width="32"></iconify-icon>

<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:visa" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-red-500" icon="simple-icons:mastercard" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer grayscale" icon="logos:elo" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-blue-400" icon="simple-icons:americanexpress" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-emerald-400" icon="fa6-brands:pix" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:scale-110 transition-all cursor-pointer hover:text-white" icon="simple-icons:googlepay" width="32"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="w-full max-w-6xl mx-auto px-6 py-28 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]" id="features">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-scan blur-sm"></div>
<div className="absolute top-0 w-[150px] h-full bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-scan"></div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-8 reveal relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-white">
                        O sistema <span className="text-gradient">Maax Soluções</span>
</h2>
<p className="text-neutral-500 text-sm max-w-md font-light">
                        Soluções integradas para otimizar suas vendas e maximizar seus lucros.
                    </p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs border border-white/10 px-3 py-1 rounded-full transition-colors cursor-default text-neutral-400 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30">
<iconify-icon className="animate-pulse text-emerald-400" icon="lucide:cpu" width="12"></iconify-icon>
                    Powered by Android Smart
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/40 hover:to-teal-500/40 transition-all duration-500 reveal-card delay-100 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-emerald-500/50 transition-colors">01</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Máquinas Inteligentes</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Terminais Smart Android de alta velocidade, com conexão 4G e Wi-Fi estável para você nunca perder uma venda.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center bg-neutral-900/50 group-hover:border-emerald-500/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent"></div>
<div className="w-full flex justify-center gap-1 items-end h-10 px-8">
<div className="w-2 h-4 rounded-t-sm group-hover:h-8 transition-all duration-300 ease-out bg-neutral-700 group-hover:bg-emerald-500/50"></div>
<div className="w-2 h-6 rounded-t-sm group-hover:h-4 transition-all duration-300 ease-out delay-75 bg-neutral-700 group-hover:bg-emerald-500/50"></div>
<div className="w-2 h-8 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.7)] transition-all duration-300 ease-out delay-100 bg-white group-hover:bg-emerald-400"></div>
<div className="w-2 h-5 rounded-t-sm group-hover:h-3 transition-all duration-300 ease-out delay-150 bg-neutral-700 group-hover:bg-emerald-500/50"></div>
<div className="w-2 h-3 rounded-t-sm group-hover:h-6 transition-all duration-300 ease-out delay-200 bg-neutral-700 group-hover:bg-emerald-500/50"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-teal-500/40 hover:to-green-500/40 transition-all duration-500 reveal-card delay-200 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-teal-400 group-hover:border-teal-500/30 transition-colors">
<iconify-icon icon="lucide:percent" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-teal-500/50 transition-colors">02</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Taxas Competitivas</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Planos personalizados para o seu volume de vendas. Economize em cada transação e aumente sua margem de lucro.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center bg-neutral-900/50 group-hover:border-teal-500/20 transition-colors">
<iconify-icon className="text-4xl group-hover:text-teal-300 group-hover:scale-125 transition-all duration-500 text-neutral-700" icon="lucide:coins"></iconify-icon>
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 animate-pulse-glow pointer-events-none bg-teal-400/20"></div>
</div>
</div>
</div>
</div>

<div className="group relative p-0.5 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-green-500/40 hover:to-lime-500/40 transition-all duration-500 reveal-card delay-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)]">
<div className="relative h-full bg-[#080808] rounded-[15px] p-8 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-green-400 group-hover:border-green-500/30 transition-colors">
<iconify-icon icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs text-neutral-600 group-hover:text-green-500/50 transition-colors">03</span>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Gestão Completa</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light group-hover:text-neutral-400 transition-colors">
                                Portal do cliente intuitivo para acompanhar suas vendas, antecipar recebíveis e gerenciar seu fluxo de caixa em tempo real.
                            </p>
<div className="h-24 w-full rounded-lg border border-white/5 relative overflow-hidden flex flex-col justify-center px-4 gap-2 bg-neutral-900/50 group-hover:border-green-500/20 transition-colors">
<div className="w-3/4 h-1.5 rounded-full group-hover:w-full group-hover:bg-green-500/50 transition-all duration-700 ease-out bg-neutral-800"></div>
<div className="w-1/2 h-1.5 rounded-full group-hover:w-3/4 group-hover:bg-green-500/50 transition-all duration-700 delay-100 ease-out bg-neutral-800"></div>
<div className="w-full h-1.5 rounded-full group-hover:bg-green-300 transition-all duration-500 delay-200 bg-neutral-800 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 flex flex-col items-center" id="analytics">
<div className="text-center mb-16 space-y-3 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Controle <span className="text-gradient-accent">Financeiro</span></h2>
<p className="text-lg text-neutral-500 font-light tracking-tight">Tudo o que você precisa para gerenciar seu negócio.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-16">

<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-100 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Relatórios Detalhados</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:file-text"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Acompanhe suas vendas por período e bandeira.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-100 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Antecipação de Recebíveis</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:banknote"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Receba suas vendas parceladas no dia seguinte.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-200 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Conexão Estável</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:wifi"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Chip 4G multi-operadora e Wi-Fi de longo alcance.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-200 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Receba por Pix</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:qr-code"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">QR Code na tela da maquininha com taxa reduzida.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-300 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Sem Aluguel</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:thumbs-up"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">A máquina é sua. Livre-se das mensalidades fixas.</p>
</div>
<div className="group p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent transition-all duration-300 reveal-card delay-300 hover:scale-[1.01] cursor-default hover:border-emerald-500/20">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white group-hover:text-emerald-100">Multi-Bandeiras</h3>
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:layers"></iconify-icon>
</div>
<p className="text-sm text-neutral-500 font-light group-hover:text-neutral-400">Aceite os principais cartões e vouchers do mercado.</p>
</div>
</div>
</section>

<section className="w-full relative py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden" id="testimonials">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
<div className="mb-12 text-center">
<span className="text-sm font-medium text-emerald-400 tracking-wider uppercase">Depoimentos</span>
<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                        Confiado por <span className="text-gradient">Empreendedores.</span>
</h2>
<div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors">
<span className="inline-flex items-center -space-x-3">
<img alt="User 1" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 2" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 3" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User 4" className="h-8 w-8 rounded-full ring-2 object-cover ring-[#0a0a0a]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</span>
<div className="h-4 w-px bg-white/20 mx-1"></div>
<span className="inline-flex items-center gap-1 text-sm text-neutral-300">
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="lucide:star-half"></iconify-icon>
<span className="ml-1 font-medium">4.9/5 • 25.000+ Vendas</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-4 gap-6 h-[600px] relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}>

<div className="overflow-hidden relative">
<div className="space-y-6" data-scroll-column="1">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "A maquininha Smart mudou meu delivery. Imprimo o pedido direto na máquina e o sistema Android não trava nunca."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-sm font-medium text-white">Carlos Mendes</div>
<div className="text-xs text-neutral-500">Dono de Pizzaria</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "As taxas são realmente as melhores que encontrei. Sobra muito mais dinheiro no final do mês para reinvestir."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Fernanda Lima</div>
<div className="text-xs text-neutral-500">Lojista de Moda</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "A maquininha Smart mudou meu delivery. Imprimo o pedido direto na máquina e o sistema Android não trava nunca."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-sm font-medium text-white">Carlos Mendes</div>
<div className="text-xs text-neutral-500">Dono de Pizzaria</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden relative">
<div className="space-y-6" data-scroll-column="2">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "O suporte é sensacional. Tive uma dúvida no sábado à noite e me atenderam na hora. Não troco por nada."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Roberto Silva</div>
<div className="text-xs text-neutral-500">Restaurante</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Receber no dia seguinte faz toda a diferença para o meu fluxo de caixa. Recomendo para todos os meus parceiros."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">Empresária</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "O suporte é sensacional. Tive uma dúvida no sábado à noite e me atenderam na hora. Não troco por nada."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Roberto Silva</div>
<div className="text-xs text-neutral-500">Restaurante</div>
</div>
</div>
</article>
</div>
</div>

<div className="hidden md:block overflow-hidden relative">
<div className="space-y-6" data-scroll-column="3">

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Migrei da concorrência e não me arrependo. A bateria da máquina dura o dia todo, o que é essencial para minhas entregas."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">David Souza</div>
<div className="text-xs text-neutral-500">Autônomo</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Painel de gestão limpo e transparente. Sei exatamente quanto vou receber e quando. Sem surpresas nas taxas."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Lisa Wang</div>
<div className="text-xs text-neutral-500">Varejista</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-emerald-500/30 transition-colors">
<blockquote className="text-[15px] leading-relaxed text-neutral-300 font-light">
                                    "Migrei da concorrência e não me arrependo. A bateria da máquina dura o dia todo, o que é essencial para minhas entregas."
                                </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">David Souza</div>
<div className="text-xs text-neutral-500">Autônomo</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5 overflow-hidden" id="pricing">

<div className="absolute inset-0 z-0 pointer-events-none opacity-30">
<div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] animate-rotate-slow origin-center bg-teal-900/10 mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] rounded-full blur-[120px] animate-rotate-slow origin-center bg-emerald-900/10 mix-blend-screen" style={{animationDirection: 'reverse'}}></div>
</div>
<div className="text-center mb-16 space-y-4 reveal relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Nossas <span className="text-gradient">Maquininhas</span></h2>
<p className="text-neutral-500 text-sm font-light">Escolha a solução ideal para o seu volume de vendas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full transition-all duration-300 reveal-card delay-100 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/20">
<h3 className="text-lg font-medium mb-2 text-white">Empreendedor</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">Mini</span>
</div>
<p className="text-neutral-500 text-xs mb-8">Para quem está começando agora</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Conexão via Bluetooth</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Comprovante por SMS</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Cabe no bolso</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-medium active:scale-95 focus:ring-1 focus:ring-white/20">
                        Pedir Agora
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-white/20 bg-[#0A0A0A] flex flex-col h-full shadow-[0_0_50px_rgba(16,185,129,0.1)] transform md:-translate-y-4 reveal-card delay-200 hover:-translate-y-6 transition-all duration-300 hover:shadow-[0_0_80px_rgba(16,185,129,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1 shadow-lg bg-emerald-500 text-white shadow-emerald-500/30">
                        Mais Vendida
                    </div>
<h3 className="text-lg font-medium mb-2 text-white">Lojista</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">Smart</span>
</div>
<p className="text-neutral-500 text-xs mb-8">Alta performance e velocidade</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Sistema Android Touch</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Chip 4G e Wi-Fi Grátis</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-white">Imprime Comprovante</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg transition-all text-sm font-medium flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-emerald-50">
                        Pedir Smart
                    </button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full transition-all duration-300 reveal-card delay-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/20">
<h3 className="text-lg font-medium mb-2 text-white">Grandes Contas</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-white">Personalizado</span>
</div>
<p className="text-neutral-500 text-xs mb-8">Para alto volume de vendas</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Taxas Negociáveis</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Gestor de Conta Dedicado</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="mt-0.5 group-hover:scale-125 transition-transform text-emerald-400" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Integração via API</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-medium active:scale-95 focus:ring-1 focus:ring-white/20">
                        Falar com Consultor
                    </button>
</div>
</div>
</section>

<section className="w-full bg-[#080808] border-t border-white/5 py-32 px-6 relative z-10 reveal overflow-hidden" id="cta">

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-[100%] blur-[100px] animate-pulse-glow"></div>
</div>

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-white">
                    Pronto para escalar suas <span className="text-gradient-accent">vendas?</span>
</h2>
<p className="text-neutral-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                    Junte-se a milhares de lojistas satisfeitos com a Maax Soluções.
                </p>
<form className="max-w-sm mx-auto space-y-4 text-left relative group">
<div>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3.5 text-sm placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/5 transition-all text-white backdrop-blur-sm" placeholder="Digite seu e-mail" type="email"/>
</div>
<button className="w-full py-3.5 font-medium text-sm rounded-lg transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-emerald-50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]" type="submit">
                        Começar Agora
                    </button>
</form>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-lg py-12 px-6 reveal">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-white group-hover:scale-110 transition-transform">
<div className="w-2 h-2 rounded-full bg-black"></div>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">Maax Soluções</span>
</div>
<div className="text-[11px] text-neutral-500">
                    © 2024 Maax Soluções. Todos os direitos reservados.
                </div>
<div className="flex gap-6">
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon></a>
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon></a>
<a className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-white" href="#"><iconify-icon icon="simple-icons:whatsapp" width="16"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
