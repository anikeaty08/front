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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-xl" href="#">fit<span className="text-orange-500">.</span>webdesign</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#trabalhos">Projetos</a>
<a className="hover:text-white transition-colors duration-300" href="#servicos">Serviços</a>
<a className="hover:text-white transition-colors duration-300" href="#metodo">Método</a>
<a className="hover:text-white transition-colors duration-300" href="#planos">Planos</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300" href="#contato">
<span>Iniciar Projeto</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white p-1">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Agenda aberta para Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]">
                Conectando empresas <br/>
<span className="text-gradient">e seus objetivos.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                O fit perfeito entre seu produto e seu cliente através do webdesign. Criamos experiências digitais que convertem.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Ver Cases de Sucesso
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-neutral-600 hover:text-white transition-colors bg-neutral-900/30 backdrop-blur-sm">
                    Nosso Processo
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6 transform perspective-1000">
<div className="relative rounded-xl bg-[#0a0a0a] border border-white/10 p-2 shadow-2xl shadow-orange-500/5 rotate-x-12 scale-95 opacity-90">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-white/5"></div>
</div>
<div className="mx-auto bg-neutral-900/50 px-3 py-1 rounded text-[10px] text-neutral-600 font-mono border border-white/5">
                        fit.webdesign/preview
                    </div>
</div>

<div className="grid grid-cols-12 gap-4 px-4 pb-8 h-64 md:h-96 overflow-hidden grid-mask">
<div className="col-span-12 md:col-span-8 space-y-4">
<div className="h-32 w-full rounded-lg bg-neutral-900 border border-white/5 animate-pulse"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-32 w-full rounded-lg bg-neutral-900 border border-white/5"></div>
<div className="h-32 w-full rounded-lg bg-neutral-900 border border-white/5"></div>
</div>
</div>
<div className="col-span-12 md:col-span-4 space-y-4">
<div className="h-full w-full rounded-lg bg-neutral-900 border border-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-600 uppercase tracking-widest mb-8">Confiado por inovadores</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">
<iconify-icon className="text-white" icon="lucide:hexagon" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:triangle" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:circle" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:square" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:diamond" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:star" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 relative" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Design &amp; Engenharia.</h2>
<p className="text-neutral-500 max-w-md">Unimos direção criativa com excelência técnica para criar softwares que parecem mágica.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-white hover:text-orange-400 transition-colors mt-4 md:mt-0" href="#">
                    Ver todas as capacidades <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-8 relative overflow-hidden glow-hover transition-all duration-500 md:col-span-2">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-white" icon="lucide:layers" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Design de Interface</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                            UI Design pixel-perfect que prioriza a usabilidade sem sacrificar o impacto visual. Criamos sistemas de design que escalam.
                        </p>
</div>
</div>

<div className="group glass-panel rounded-2xl p-8 relative overflow-hidden glow-hover transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Desenvolvimento</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Engenharia Full-stack usando frameworks modernos como React e Tailwind para construir aplicações ultra-rápidas.
                        </p>
</div>
</div>

<div className="group glass-panel rounded-2xl p-8 relative overflow-hidden glow-hover transition-all duration-500">
<div className="relative z-10">
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Performance</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Otimização para Core Web Vitals. Garantimos que seu site carregue instantaneamente em qualquer lugar do mundo.
                        </p>
</div>
</div>

<div className="group glass-panel rounded-2xl p-8 relative overflow-hidden glow-hover transition-all duration-500 md:col-span-2">
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/50 to-transparent mask-image-l"></div>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full relative z-10">
<div className="flex-1">
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Mobile Responsivo</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Layouts fluidos que se adaptam perfeitamente a qualquer dispositivo. Interações touch-optimized para experiências mobile-first.
                            </p>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-xl p-6 w-full md:w-64">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-neutral-400">Notificações</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-600 cursor-pointer">
<span className="translate-x-4 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-400">Modo Escuro</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-neutral-700 cursor-pointer">
<span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-neutral-950/20" id="metodo">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="lg:sticky lg:top-32 h-fit">
<div className="inline-flex items-center gap-2 text-[10px] uppercase font-semibold tracking-widest text-orange-500 mb-6">
<span className="h-px w-8 bg-orange-500/50"></span>
                        Nosso Processo
                    </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        Movimento encontra <br/>
<span className="text-gradient">metodologia.</span>
</h2>
<p className="text-neutral-500 text-lg font-light leading-relaxed mb-8 max-w-md">
                        Não construímos apenas páginas; coreografamos experiências. Nosso fluxo de trabalho integra motion design e engenharia de performance desde o primeiro esboço.
                    </p>
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 border border-white/10 bg-neutral-900/50 rounded-lg px-3 py-2">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
<span>Entrega típica: 4-8 Semanas</span>
</div>
</div>

<div className="relative pl-8 timeline-line">

<div className="relative group pb-16">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-neutral-800 bg-[#030303] flex items-center justify-center group-hover:border-orange-500 transition-colors z-10 shadow-[0_0_0_4px_#030303]">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500 transition-colors"></span>
</span>
<div className="mb-3 flex items-center gap-3">
<span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">01</span>
<h3 className="text-xl font-medium text-white">Descoberta &amp; Estratégia</h3>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-lg mb-4">
                            Mapeamos a jornada do usuário antes de tocar em um pixel. Definimos a física da sua marca — como ela se move, como soa e como interage.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] border border-white/5 bg-white/5 px-2 py-1 rounded text-neutral-400">User Flow</span>
<span className="text-[10px] border border-white/5 bg-white/5 px-2 py-1 rounded text-neutral-400">Specs Técnicas</span>
</div>
</div>

<div className="relative group pb-16">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-neutral-800 bg-[#030303] flex items-center justify-center group-hover:border-orange-500 transition-colors z-10 shadow-[0_0_0_4px_#030303]">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500 transition-colors"></span>
</span>
<div className="mb-3 flex items-center gap-3">
<span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">02</span>
<h3 className="text-xl font-medium text-white">Design &amp; Motion Labs</h3>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-lg mb-4">
                            Mockups estáticos estão mortos. Prototipamos em alta fidelidade, criando prévias interativas que demonstram velocidade de scroll e transições.
                        </p>
<div className="p-3 bg-neutral-900/50 border border-white/5 rounded-lg max-w-sm">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="lucide:framer" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Protótipo Interativo</div>
<div className="text-[10px] text-neutral-500">60fps animações prontas</div>
</div>
</div>
</div>
</div>

<div className="relative group pb-16">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-neutral-800 bg-[#030303] flex items-center justify-center group-hover:border-orange-500 transition-colors z-10 shadow-[0_0_0_4px_#030303]">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500 transition-colors"></span>
</span>
<div className="mb-3 flex items-center gap-3">
<span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">03</span>
<h3 className="text-xl font-medium text-white">Desenvolvimento &amp; Polimento</h3>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-lg mb-4">
                            Traduzimos o design para código semântico limpo. Implementamos animações baseadas em física que reagem ao usuário sem travar o navegador.
                        </p>
<div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> HTML Semântico</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> 100% Lighthouse</span>
</div>
</div>

<div className="relative group">
<span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-neutral-800 bg-[#030303] flex items-center justify-center group-hover:border-orange-500 transition-colors z-10 shadow-[0_0_0_4px_#030303]">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500 transition-colors"></span>
</span>
<div className="mb-3 flex items-center gap-3">
<span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">04</span>
<h3 className="text-xl font-medium text-white">Lançamento &amp; Escala</h3>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                            Deploy em edge networks. Entregamos as chaves junto com um design system que permite ao seu time construir novas páginas mantendo a consistência visual.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="trabalhos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-2 block">Case em Destaque</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Vangaurd Fintech</h2>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">

<div className="aspect-video bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/30 via-neutral-900 to-black"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-2/3 h-2/3 border border-orange-500/30 rounded-lg"></div>
<div className="absolute w-1/2 h-1/2 border border-orange-500/20 rounded-lg"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
<div className="flex items-end justify-between">
<div>
<div className="flex gap-2 mb-3">
<span className="px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white">Fintech</span>
<span className="px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white">Web App</span>
</div>
<p className="text-neutral-300 text-sm max-w-lg">Redesign completo de uma plataforma de trading focando em visualização de dados e redução de latência.</p>
</div>
<div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="planos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Planos simples.</h2>
<p className="text-neutral-500">Sem taxas ocultas. Sem contratos complexos. Apenas puro design e engenharia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/20 hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Sprint de Design</h3>
<p className="text-3xl font-medium text-white mb-6">R$ 4.900 <span className="text-sm font-normal text-neutral-500">/ semana</span></p>
<p className="text-sm text-neutral-400 mb-8 h-10">Perfeito para prototipagem rápida, refresh de UI ou landing pages.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Um Designer Sênior
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Entrega em 48h
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Arquivos Editáveis Figma
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-neutral-700 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
                        Reservar Sprint
                    </button>
</div>

<div className="p-8 rounded-2xl border border-orange-500/30 bg-neutral-900/40 relative">
<div className="absolute -top-px left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-[10px] uppercase font-bold tracking-wider rounded-b-lg">
                        Mais Popular
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Agência Completa</h3>
<p className="text-3xl font-medium text-white mb-6">R$ 8.500 <span className="text-sm font-normal text-neutral-500">/ mês</span></p>
<p className="text-sm text-neutral-400 mb-8 h-10">Equipe dedicada de design e dev para produtos complexos.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Design + Desenvolvimento
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Demandas Ilimitadas
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-orange-500" icon="lucide:check" width="16"></iconify-icon> Integração no Slack
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-500 transition-colors shadow-[0_0_20px_-5px_rgba(234,88,12,0.3)]">
                        Começar Agora
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-white mb-4">Entre na lista de espera</h2>
<p className="text-neutral-500 text-sm mb-8">Aceitamos um número limitado de clientes por trimestre para garantir qualidade.</p>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="lucide:mail" width="16"></iconify-icon>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/50 transition-all placeholder:text-neutral-600" placeholder="email@empresa.com" type="email"/>
</div>
<button className="px-6 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" type="button">
                    Inscrever-se
                </button>
</form>
<div className="flex items-center justify-center gap-2 mt-6 text-xs text-neutral-600">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon> Sem spam, cancele a qualquer momento.
            </div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tight text-xl block mb-6" href="#">fit<span className="text-orange-500">.</span>webdesign</a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Projetando o futuro da web, um pixel de cada vez. O fit perfeito para o seu negócio.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Sobre</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Serviços</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Web Design</a></li>
<li><a className="hover:text-white transition-colors" href="#">Desenvolvimento</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Auditorias</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-4 lg:col-span-2">
<h4 className="text-white text-sm font-medium mb-4">Conecte-se</h4>
<div className="flex gap-4">
<a className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="h-8 w-8 rounded bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2024 fit.webdesign. Todos os direitos reservados.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Política de Privacidade</a>
<a className="hover:text-neutral-400" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
