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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0">

<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-violet-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-amber-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

<div className="absolute inset-0 noise-bg z-10"></div>
<div className="absolute inset-0 hex-grid z-0"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
</div>

<div className="relative z-20 flex flex-col min-h-screen bg-[#050505]/80 border-x border-white/5 max-w-7xl mx-auto shadow-2xl shadow-black backdrop-blur-sm">

<nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
<div className="flex items-center justify-between px-6 h-16 md:h-20">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-10 h-10 flex items-center justify-center border border-white/20 bg-white/5 overflow-hidden group-hover:border-amber-500/50 transition-colors duration-300 clip-corner-rev">
<span className="iconify text-amber-500" data-icon="lucide:swords" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold font-display tracking-tight text-white leading-none">LJK</span>
<span className="text-[9px] font-mono tracking-[0.2em] text-white/40">CAPITAL</span>
</div>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors font-display hover:shadow-[0_4px_0_0_#f59e0b] pb-1" href="#">Manifesto</a>
<a className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors font-display hover:shadow-[0_4px_0_0_#f59e0b] pb-1" href="#">Squad</a>
<a className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors font-display hover:shadow-[0_4px_0_0_#f59e0b] pb-1" href="#">Thesis</a>
</div>

<button className="relative px-6 py-2 overflow-hidden border border-white/20 bg-white/5 hover:bg-amber-500 hover:border-amber-500 text-white text-xs font-bold tracking-wide transition-all group clip-corner">
<span className="relative z-10 flex items-center gap-2 uppercase">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        Login
                    </span>
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
</button>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 lg:p-16 relative overflow-hidden group">

<div className="absolute top-4 left-4 text-[10px] font-mono text-white/20">
                    SYS.LJK.V1 // READY
                </div>
<div className="space-y-8 relative z-10 mt-12 lg:mt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 border-l-2 border-amber-500 bg-amber-500/5 backdrop-blur-md">
<span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase font-display">Investir au stade Prototype</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white tracking-tighter leading-[0.9]">
                        LEEROY <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">JENKINS.</span>
</h1>
<div className="flex flex-col gap-4 border-l border-white/10 pl-6">
<p className="text-base md:text-lg text-white/70 max-w-lg font-light leading-relaxed">
                            Fonds de Venture Capital dédié à l'écosystème Européen. Nous finançons le prochain raid boss du jeu vidéo.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase text-white/60 tracking-wider">RPG</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase text-white/60 tracking-wider">Survival</span>
<span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase text-white/60 tracking-wider">Sports</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold font-display text-sm tracking-tight hover:bg-amber-400 hover:scale-[1.02] transition-all clip-corner">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="18"></span>
                            PRESS START
                        </button>
<button className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-medium font-display text-sm tracking-tight hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="18"></span>
                            PITCH DECK
                        </button>
</div>
</div>

<div className="grid grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-auto">
<div>
<div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 flex items-center gap-1"><span className="iconify" data-icon="lucide:coins"></span> AUM</div>
<div className="text-xl font-mono text-amber-500 font-bold">$100M+</div>
</div>
<div>
<div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 flex items-center gap-1"><span className="iconify" data-icon="lucide:trophy"></span> XP FONDATEURS</div>
<div className="text-xl font-mono text-white font-bold">50 Ans</div>
</div>
<div>
<div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin"></span> SERVEUR</div>
<div className="text-xl font-mono text-white font-bold">Paris/EU</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex items-center justify-center bg-black/40 overflow-hidden min-h-[500px]">

<div className="absolute inset-0 bg-[linear-gradient(45deg,#171717_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>

<div className="perspective-container relative w-full h-full flex items-center justify-center">
<div className="relative w-64 h-64 md:w-80 md:h-80 transform-3d animate-float">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-amber-600 to-violet-600 rounded-full blur-[60px] opacity-50 animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#0a0a0a] border border-amber-500/30 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(245,158,11,0.2)]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<span className="iconify text-white" data-icon="lucide:crown" data-width="40"></span>
</div>

<div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow border-dashed"></div>
<div className="absolute inset-8 border border-amber-500/20 rounded-full animate-spin-slow duration-[30s] flex items-center justify-center">
<div className="absolute top-0 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
</div>

<div className="absolute -right-4 top-20 px-3 py-2 bg-[#1a1a1a] border-l-2 border-violet-500 text-[10px] font-mono text-white/80 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                            &gt; TYPE: RPG
                        </div>
<div className="absolute -left-4 bottom-20 px-3 py-2 bg-[#1a1a1a] border-l-2 border-green-500 text-[10px] font-mono text-white/80 shadow-lg animate-float" style={{animationDelay: '2s'}}>
                            &gt; STATUS: ALPHA
                        </div>
<div className="absolute right-10 bottom-0 px-3 py-2 bg-[#1a1a1a] border-l-2 border-amber-500 text-[10px] font-mono text-white/80 shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                            &gt; YIELD: HIGH
                        </div>
</div>
</div>
</div>
</main>

<div className="border-y border-white/10 bg-amber-500/5 py-3 overflow-hidden">
<div className="flex whitespace-nowrap gap-16 animate-marquee opacity-80">
<div className="flex items-center gap-4 text-xs font-bold font-mono text-amber-500/80">
<span className="iconify" data-icon="lucide:sword"></span> RIOT GAMES ALUMNI
                </div>
<div className="flex items-center gap-4 text-xs font-bold font-mono text-white/40">
<span className="iconify" data-icon="lucide:layers"></span> ADOBE EXEC
                </div>
<div className="flex items-center gap-4 text-xs font-bold font-mono text-white/40">
<span className="iconify" data-icon="lucide:trending-up"></span> TIER 1 VC
                </div>
<div className="flex items-center gap-4 text-xs font-bold font-mono text-white/40">
<span className="iconify" data-icon="lucide:joystick"></span> PROTOTYPE FUNDING
                </div>
<div className="flex items-center gap-4 text-xs font-bold font-mono text-amber-500/80">
<span className="iconify" data-icon="lucide:sword"></span> RIOT GAMES ALUMNI
                </div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-[#080808]">

<div className="md:col-span-12 p-8 border-b border-white/10 flex justify-between items-end">
<div>
<h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 font-display">Select Your Player</h2>
<h3 className="text-3xl font-bold text-white font-display">LA SQUAD</h3>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] text-white/40 font-mono">TOTAL LEVEL</div>
<div className="text-xl font-mono text-white">LVL. 99</div>
</div>
</div>

<div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.02] transition-colors relative">
<div className="absolute top-4 right-4 text-white/10 group-hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:crown" data-width="32"></span>
</div>

<div className="w-full aspect-square mb-6 bg-gradient-to-b from-gray-800 to-black border border-white/10 relative overflow-hidden clip-corner">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:swords.svg?color=%23333')] bg-center bg-no-repeat bg-[length:50%] opacity-20"></div>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-amber-500 text-black text-[10px] font-bold uppercase">Ex-CEO Riot</div>
</div>
<h4 className="text-xl font-bold font-display text-white mb-1">THE LEADER</h4>
<p className="text-xs font-mono text-amber-500 mb-4">TANK / STRATEGY</p>
<p className="text-xs text-white/50 leading-relaxed mb-6 h-10">
                    Ancien CEO Riot Games. A scalé League of Legends vers le phénomène mondial. Visionnaire de l'Esport.
                </p>

<div className="space-y-2 font-mono text-[10px]">
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">LEAD</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[95%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">OPS</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/60 w-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/[0.02] transition-colors relative">
<div className="absolute top-4 right-4 text-white/10 group-hover:text-violet-500 transition-colors">
<span className="iconify" data-icon="lucide:wand-2" data-width="32"></span>
</div>

<div className="w-full aspect-square mb-6 bg-gradient-to-b from-gray-800 to-black border border-white/10 relative overflow-hidden clip-corner">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:code-2.svg?color=%23333')] bg-center bg-no-repeat bg-[length:50%] opacity-20"></div>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-violet-500 text-white text-[10px] font-bold uppercase">Ex-VP Adobe</div>
</div>
<h4 className="text-xl font-bold font-display text-white mb-1">THE ARCHITECT</h4>
<p className="text-xs font-mono text-violet-500 mb-4">MAGE / TECH</p>
<p className="text-xs text-white/50 leading-relaxed mb-6 h-10">
                    Ex-VP Adobe. Expert en outils créatifs et infrastructure. Comprend le pipeline de production comme personne.
                </p>

<div className="space-y-2 font-mono text-[10px]">
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">TECH</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-[98%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">UX</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/60 w-[90%]"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 p-8 group hover:bg-white/[0.02] transition-colors relative">
<div className="absolute top-4 right-4 text-white/10 group-hover:text-green-500 transition-colors">
<span className="iconify" data-icon="lucide:gem" data-width="32"></span>
</div>

<div className="w-full aspect-square mb-6 bg-gradient-to-b from-gray-800 to-black border border-white/10 relative overflow-hidden clip-corner">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:candlestick-chart.svg?color=%23333')] bg-center bg-no-repeat bg-[length:50%] opacity-20"></div>
<div className="absolute bottom-2 left-2 px-2 py-0.5 bg-green-500 text-black text-[10px] font-bold uppercase">VC Partner</div>
</div>
<h4 className="text-xl font-bold font-display text-white mb-1">THE FINANCIER</h4>
<p className="text-xs font-mono text-green-500 mb-4">SUPPORT / ECON</p>
<p className="text-xs text-white/50 leading-relaxed mb-6 h-10">
                    Managing Partner VC chevronné. Structure les deals, assure la pérennité financière et le scaling.
                </p>

<div className="space-y-2 font-mono text-[10px]">
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">DEAL</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[92%]"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-12 text-white/40">NETWORK</span>
<div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/60 w-[95%]"></div>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#050505]">
<div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 mb-4 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:sword" data-width="24"></span>
</div>
<h5 className="font-bold text-white mb-2 font-display">RPG &amp; ACTION</h5>
<p className="text-xs text-white/50">Mondes immersifs, narration profonde. Nous cherchons le prochain Elden Ring.</p>
</div>
<div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 mb-4 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:tent" data-width="24"></span>
</div>
<h5 className="font-bold text-white mb-2 font-display">SURVIVAL</h5>
<p className="text-xs text-white/50">Systèmes émergents et crafting complexe. Le genre le plus sticky du marché.</p>
</div>
<div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 mb-4 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:trophy" data-width="24"></span>
</div>
<h5 className="font-bold text-white mb-2 font-display">SPORTS / COMPETITIVE</h5>
<p className="text-xs text-white/50">Physique réaliste ou arcade fun. L'adrénaline de la compétition.</p>
</div>
</div>

<footer className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-black border-t border-white/10 relative overflow-hidden">

<div className="absolute inset-0 bg-amber-500/5 z-0"></div>
<div className="relative z-10 text-center md:text-left">
<div className="text-xs text-amber-500 font-mono mb-2 uppercase tracking-widest blinking-cursor">Game Over?</div>
<div className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">Continue to Level 2.</div>
</div>
<div className="relative z-10 flex gap-6 items-center">
<button className="group relative px-8 py-4 bg-white text-black text-sm font-bold font-display uppercase tracking-widest overflow-hidden clip-corner hover:scale-105 transition-transform">
<span className="relative z-10 group-hover:text-amber-500 transition-colors duration-300 flex items-center gap-2">
                        Get Funded <span className="iconify" data-icon="lucide:arrow-right"></span>
</span>
<div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
</div>
</footer>
</div>

<div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none"></div>

    </>
  );
}
