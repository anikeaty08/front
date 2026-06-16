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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60 mix-blend-screen">
<div data-us-project="NEjDeK1bdIQ29XlzFTLM" style={{width: '100%', height: '100vh'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl animate-item">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">Bilio</span>
</div>
<div className="hidden md:flex gap-8 text-[13px] font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#features">Funcionalidades</a>
<a className="hover:text-white transition-colors duration-300" href="#widgets">Widgets</a>
<a className="hover:text-white transition-colors duration-300" href="#avatar">Avatar</a>
</div>
<div className="flex gap-4 items-center">
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-[13px] font-medium bg-white text-black px-3 py-1 rounded-full hover:bg-zinc-200 transition-colors" href="#">Descargar</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 px-6 overflow-hidden z-10">
<div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
<div className="animate-item delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-indigo-300 mb-6 backdrop-blur-md shadow-lg shadow-indigo-500/10">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
<span className="tracking-wide uppercase">Inteligencia Artificial v2.0</span>
</div>
<h1 className="animate-item delay-200 text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                Tus finanzas, <br/>
<span className="gradient-text">ahora tienen voz.</span>
</h1>
<p className="animate-item delay-300 text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Registra gastos hablando, visualiza patrones complejos y mantén tu racha financiera. El control total, simplificado.
            </p>
<div className="animate-item delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all active:scale-95 text-sm flex items-center gap-2">
                    Empezar gratis
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium hover:bg-white/10 transition-all active:scale-95 text-sm">
                    Ver demo
                </button>
</div>
</div>

<div className="animate-item delay-500 max-w-sm mx-auto relative z-10 perspective-1000">
<div className="glass-panel rounded-[2.5rem] p-4 shadow-2xl shadow-indigo-500/10 transform transition hover:-translate-y-1 duration-500 bg-black/40 backdrop-blur-2xl">

<div className="flex justify-between items-center mb-6 px-3 pt-3">
<iconify-icon className="text-zinc-500" icon="lucide:menu"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-600 tracking-[0.2em]">BILIO AI</span>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400 text-xs" icon="lucide:user"></iconify-icon>
</div>
</div>

<div className="space-y-5 mb-6 text-sm h-64 overflow-y-auto no-scrollbar relative px-1">
<div className="flex justify-end">
<div className="bg-indigo-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-[13px] shadow-lg shadow-indigo-900/20">
                            Gasté 20 soles en almuerzo
                        </div>
</div>
<div className="flex justify-start">
<div className="glass-panel text-zinc-300 p-3.5 rounded-2xl rounded-tl-sm max-w-[95%] w-full bg-zinc-900/60">
<div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Transacción creada</span>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="12"></iconify-icon>
</div>
<div className="flex items-center gap-3 bg-zinc-900/50 p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:utensils" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-white font-medium text-sm">Almuerzo</div>
<div className="text-zinc-500 text-[10px]">Alimentos • 12:40 PM</div>
</div>
<div className="text-white font-medium text-sm">- S/ 20.00</div>
</div>
</div>
</div>
<div className="flex justify-end">
<div className="bg-indigo-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] flex items-center gap-2 shadow-lg">
<div className="flex gap-1 h-3 items-center">
<div className="w-0.5 h-3 bg-white animate-pulse"></div>
<div className="w-0.5 h-2 bg-white/70 animate-pulse delay-75"></div>
<div className="w-0.5 h-4 bg-white animate-pulse delay-150"></div>
<div className="w-0.5 h-2 bg-white/70 animate-pulse delay-75"></div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-3 flex items-center gap-2 text-zinc-500">
<iconify-icon className="cursor-pointer hover:text-white transition" icon="lucide:plus"></iconify-icon>
</div>
<input className="w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full py-3.5 pl-10 pr-12 text-zinc-300 text-[13px] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition placeholder-zinc-600" placeholder="Escribe o habla..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<button className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-zinc-200 transition shadow-lg shadow-white/10">
<iconify-icon icon="lucide:mic" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-900/40 backdrop-blur-sm animate-item delay-700 relative z-10">
<div className="max-w-7xl mx-auto marquee-container relative overflow-hidden">
<div className="marquee-content gap-16 px-4">

<div className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-indigo-400" icon="lucide:landmark"></iconify-icon> BCP</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-emerald-400" icon="lucide:credit-card"></iconify-icon> Interbank</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-blue-400" icon="lucide:wallet"></iconify-icon> BBVA</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-purple-400" icon="lucide:globe"></iconify-icon> Scotiabank</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-pink-400" icon="lucide:smartphone"></iconify-icon> Yape</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-yellow-400" icon="lucide:zap"></iconify-icon> Plin</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-orange-400" icon="lucide:piggy-bank"></iconify-icon> Agora</div>
</div>

<div className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-indigo-400" icon="lucide:landmark"></iconify-icon> BCP</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-emerald-400" icon="lucide:credit-card"></iconify-icon> Interbank</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-blue-400" icon="lucide:wallet"></iconify-icon> BBVA</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-purple-400" icon="lucide:globe"></iconify-icon> Scotiabank</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-pink-400" icon="lucide:smartphone"></iconify-icon> Yape</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-yellow-400" icon="lucide:zap"></iconify-icon> Plin</div>
<div className="flex items-center gap-2 text-lg font-semibold text-white"><iconify-icon className="text-orange-400" icon="lucide:piggy-bank"></iconify-icon> Agora</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 overflow-hidden relative group animate-item delay-100 bg-black/40 backdrop-blur-md">
<div className="relative z-10">
<div className="flex items-center gap-2 text-indigo-400 mb-3">
<iconify-icon icon="lucide:pie-chart" width="18"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80">Analytics</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Patrones de consumo</h3>
<p className="text-zinc-400 text-sm max-w-md font-light">Desglose visual de tus hábitos. Identifica fugas de dinero.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 flex items-end gap-2 h-36 relative overflow-hidden">

<div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10 pointer-events-none">
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
</div>
<div className="w-full bg-gradient-to-t from-indigo-500/20 to-indigo-500/40 border-t border-indigo-500/50 rounded-t-sm h-[40%] relative group-hover:h-[50%] transition-all duration-1000 ease-out"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/40 to-indigo-500/60 border-t border-indigo-500/80 rounded-t-sm h-[70%] relative group-hover:h-[80%] transition-all duration-1000 delay-75 ease-out"></div>
<div className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 border-t border-purple-400 rounded-t-sm h-[55%] relative group-hover:h-[90%] transition-all duration-1000 delay-100 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/30 to-indigo-500/50 border-t border-indigo-500/60 rounded-t-sm h-[30%] relative group-hover:h-[40%] transition-all duration-1000 delay-150 ease-out"></div>
</div>
<div className="space-y-2 flex flex-col justify-center">
<div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-zinc-900/30 border border-white/5 hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-center gap-2 text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div> Transporte
                            </div>
<span className="text-zinc-500 font-mono">15%</span>
</div>
<div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-zinc-900/30 border border-white/5 hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-center gap-2 text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> Ocio
                            </div>
<span className="text-zinc-500 font-mono">32%</span>
</div>
<div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-zinc-900/30 border border-white/5 hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-center gap-2 text-zinc-300">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div> Servicios
                            </div>
<span className="text-zinc-500 font-mono">40%</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between animate-item delay-200 bg-black/40 backdrop-blur-md" id="avatar">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
<div>
<div className="flex items-center gap-2 text-purple-400 mb-3">
<iconify-icon icon="lucide:smile" width="18"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-purple-400/80">Identidad</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Avatar Bilio</h3>
<p className="text-zinc-400 text-sm font-light">Tus logros financieros desbloquean accesorios exclusivos.</p>
</div>
<div className="mt-6 flex justify-center relative">

<div className="absolute inset-0 m-auto w-28 h-28 border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="w-24 h-24 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center relative shadow-2xl z-10">
<iconify-icon className="text-zinc-500" icon="lucide:user" width="40"></iconify-icon>
<div className="absolute -top-1 -right-1 bg-indigo-500 text-white p-1.5 rounded-full border-[3px] border-[#030304] shadow-lg animate-[bounce_2s_infinite]">
<iconify-icon icon="lucide:glasses" width="12"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1.5 rounded-full border-[3px] border-[#030304] shadow-lg">
<iconify-icon icon="lucide:briefcase" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-center animate-item delay-300 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-2 text-emerald-400 mb-3">
<iconify-icon icon="lucide:brain-circuit" width="18"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80">Inteligencia</span>
</div>
<h3 className="text-xl font-medium text-white mb-6">Input Multimodal</h3>
<ul className="space-y-5">
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="lucide:mic" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200 font-medium">Dictado de Voz</p>
<p className="text-xs text-zinc-500 leading-relaxed">Habla naturalmente, Bilio categoriza.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="lucide:scan-line" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200 font-medium">Scan &amp; Go</p>
<p className="text-xs text-zinc-500 leading-relaxed">Foto a la boleta y olvido.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
<iconify-icon className="text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="lucide:message-square" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200 font-medium">Asesor Financiero</p>
<p className="text-xs text-zinc-500 leading-relaxed">Pregunta sobre tu presupuesto.</p>
</div>
</li>
</ul>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-0 relative overflow-hidden flex flex-col md:flex-row animate-item delay-400 bg-black/40 backdrop-blur-md">

<div className="p-8 flex-1 relative z-10">
<div className="flex items-center gap-2 text-orange-400 mb-3">
<iconify-icon icon="lucide:flame" width="18"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-orange-400/80">Hábito</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Sistema de Racha</h3>
<p className="text-zinc-400 text-sm mb-8 font-light max-w-xs">La consistencia es clave. Visualiza tu flujo de datos alimentando tu progreso diario.</p>

<div className="flex items-center gap-1.5">
<div className="w-8 h-10 rounded bg-orange-500 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 transition-transform cursor-pointer">L</div>
<div className="w-8 h-10 rounded bg-orange-500 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 transition-transform cursor-pointer delay-75">M</div>
<div className="w-8 h-10 rounded bg-orange-500 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 transition-transform cursor-pointer delay-100">M</div>
<div className="w-8 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 text-xs">J</div>
<div className="w-8 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 text-xs">V</div>
</div>
</div>

<div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gradient-to-l from-black/20 to-transparent">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="beamGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(249, 115, 22, 0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(249, 115, 22, 1)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(249, 115, 22, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>


<path d="M-10,40 C100,40 100,150 250,150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path d="M-10,90 C80,90 120,150 250,150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path d="M-10,210 C80,210 120,150 250,150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path d="M-10,260 C100,260 100,150 250,150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path className="noodle-path" d="M-10,40 C100,40 100,150 250,150" fill="none" stroke="url(#beamGrad)" strokeWidth="2" style={{animationDuration: '3s', animationDelay: '0s'}}></path>
<path className="noodle-path" d="M-10,90 C80,90 120,150 250,150" fill="none" stroke="url(#beamGrad)" strokeWidth="2" style={{animationDuration: '4s', animationDelay: '1s'}}></path>
<path className="noodle-path" d="M-10,210 C80,210 120,150 250,150" fill="none" stroke="url(#beamGrad)" strokeWidth="2" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></path>
<path className="noodle-path" d="M-10,260 C100,260 100,150 250,150" fill="none" stroke="url(#beamGrad)" strokeWidth="2" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></path>
</svg>

<div className="absolute top-1/2 right-[15%] md:right-[20%] -translate-y-1/2 translate-x-1/2 w-32 h-32 flex items-center justify-center">

<div className="sonar-ring" style={{animation: 'sonar-wave 2s infinite cubic-bezier(0, 0, 0.2, 1)'}}></div>
<div className="sonar-ring" style={{animation: 'sonar-wave 2s infinite cubic-bezier(0, 0, 0.2, 1)', animationDelay: '0.6s'}}></div>

<div className="absolute w-40 h-40 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-600 rounded-full"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-600 rounded-full"></div>
</div>

<div className="relative w-20 h-20 flex items-center justify-center z-10 bg-[#030304] rounded-full border border-zinc-800 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
<svg className="w-full h-full transform -rotate-90 p-1">
<circle cx="36" cy="36" fill="transparent" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="6"></circle>
<circle cx="36" cy="36" fill="transparent" r="32" stroke="#f97316" stroke-dasharray="200" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<iconify-icon className="text-orange-500 text-lg mb-0.5" icon="lucide:flame"></iconify-icon>
<span className="text-lg font-bold text-white tracking-tighter leading-none">12</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/40 backdrop-blur-sm border-t border-white/5 relative z-10" id="widgets">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 animate-item">
<h2 className="text-2xl font-medium tracking-tight text-white mb-3">Widgets</h2>
<p className="text-zinc-400 text-sm font-light">Acceso inmediato desde tu pantalla de inicio.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="glass-panel p-4 rounded-3xl flex flex-col justify-between h-40 w-full animate-item delay-100 hover:scale-[1.02] transition-transform duration-300 bg-black/40">
<div className="flex justify-between items-start">
<div className="bg-orange-500/10 p-1.5 rounded-full">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-bold text-white tracking-tight">12</div>
<p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">Días racha</p>
</div>
<div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
<div className="bg-orange-500 h-full w-3/4 rounded-full"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-3xl flex flex-col justify-between h-40 w-full bg-gradient-to-br from-zinc-900 to-indigo-950/20 animate-item delay-200 hover:scale-[1.02] transition-transform duration-300 group cursor-pointer border-indigo-500/20">
<div className="flex justify-between items-start">
<span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Grabar</span>
</div>
<div className="self-center relative">
<div className="absolute inset-0 bg-red-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/20 relative z-10 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:mic" width="20"></iconify-icon>
</button>
</div>
<div className="text-center">
<p className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors">Toque para hablar</p>
</div>
</div>

<div className="glass-panel p-4 rounded-3xl flex flex-col justify-center gap-3 h-40 w-full animate-item delay-300 hover:scale-[1.02] transition-transform duration-300 bg-black/40">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-[10px] text-zinc-300 font-medium uppercase tracking-wide">Nuevo</span>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-2.5 text-xs text-zinc-500 flex items-center gap-2">
<iconify-icon icon="lucide:pen-line" width="12"></iconify-icon>
<span>Monto...</span>
</div>
<button className="w-full py-2 bg-white text-black text-[10px] font-bold uppercase tracking-wide rounded-lg hover:bg-zinc-200 transition-colors">
                         Añadir
                     </button>
</div>

<div className="glass-panel p-4 rounded-3xl flex flex-col justify-between h-40 w-full animate-item delay-400 hover:scale-[1.02] transition-transform duration-300 bg-black/40">
<div className="flex justify-between items-start">
<span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Saldo</span>
<iconify-icon className="text-emerald-500" icon="lucide:wallet" width="14"></iconify-icon>
</div>
<div>
<div className="text-xl font-bold text-white tracking-tight">S/ 450.20</div>
<div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-400 bg-emerald-500/10 w-fit px-1.5 py-0.5 rounded">
<iconify-icon icon="lucide:trending-up" width="10"></iconify-icon>
<span>+4.2%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-sm text-zinc-500 bg-black animate-item delay-500 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<div className="text-white font-semibold tracking-tighter text-lg mb-4 flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full"></div> Bilio
                </div>
<p className="mb-4 text-xs font-light max-w-[200px] leading-relaxed">Tecnología financiera adaptada a tu ritmo de vida.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">Producto</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Características</a></li>
<li><a className="hover:text-white transition-colors" href="#">Seguridad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bilio AI</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">Recursos</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Ayuda</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">Legal</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition-colors" href="#">Términos</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider">
<p>© 2023 Bilio Inc.</p>
<div className="flex gap-6">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:twitter" width="14"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:instagram" width="14"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:linkedin" width="14"></iconify-icon>
</div>
</div>
</footer>



    </>
  );
}
