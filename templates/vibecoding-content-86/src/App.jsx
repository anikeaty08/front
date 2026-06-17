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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
<span className="font-bold text-lg tracking-tighter text-gray-800">V</span>
</div>
<span className="font-semibold text-lg tracking-tight text-[#111]">VibeCoding</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#111] hover:text-[#007AFF] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#111] transition-colors" href="#">Workspace</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#111] transition-colors" href="#">Ajuda</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#111] transition-colors" href="#">Conta</a>
</nav>

<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all group">
<i className="w-4 h-4 text-[#007AFF] group-hover:rotate-12 transition-transform" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-gray-600 group-hover:text-[#111]">Pergunte ao Vibe</span>
</button>
</div>
</header>
<main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">

<section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 animate-enter" style={{animationDelay: '0.1s'}}>

<div className="flex-1 text-center lg:text-left space-y-8">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#111] leading-[1.05]">
                    Organize todo o seu conteúdo. <br/>
<span className="text-gray-400">Em um só lugar.</span>
</h1>
<p className="text-xl text-[#3A3A3C] font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    O VibeCoding centraliza suas ideias, copies, demandas e calendário, com um agente de IA pronto para cuidar do trabalho pesado.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
<button className="px-8 py-4 bg-[#111] text-white rounded-full text-base font-medium hover:bg-black hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto">
                        Começar a criar
                    </button>
<button className="px-8 py-4 bg-white border border-gray-200 text-[#111] rounded-full text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 w-full sm:w-auto">
                        Ver tudo que o VibeCoding faz
                    </button>
</div>
</div>

<div className="relative w-full max-w-md lg:w-1/3 h-80 flex items-center justify-center perspective-1000">

<div className="absolute top-0 right-4 w-64 glass-card p-4 z-10 animate-float" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-blue-50 rounded-lg text-[#007AFF]"><i className="w-4 h-4" data-lucide="youtube"></i></div>
<div className="text-xs font-medium text-gray-500">Próxima Publicação</div>
</div>
<div className="text-sm font-semibold text-[#111] mb-1">Vídeo: Review Tech 2024</div>
<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-[#007AFF] w-3/4 rounded-full"></div>
</div>
</div>

<div className="absolute top-24 left-0 w-64 glass-card p-4 z-20 animate-float" style={{animation: 'float 7s ease-in-out infinite reverse'}}>
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-purple-50 rounded-lg text-purple-500"><i className="w-4 h-4" data-lucide="brain-circuit"></i></div>
<div className="text-xs font-medium text-gray-500">Sugestão da IA</div>
</div>
<div className="text-sm font-medium text-[#3A3A3C]">"Transformar a nota 'Ideias Q3' em 5 posts para LinkedIn."</div>
</div>

<div className="absolute bottom-0 right-8 w-56 glass-card p-4 z-30 animate-float" style={{animation: 'float 8s ease-in-out infinite 1s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="text-xs font-semibold">Demanda #402</div>
<div className="text-[10px] text-green-600 font-medium">Aprovado</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 animate-enter" style={{animationDelay: '0.3s'}}>
<div className="flex items-center justify-between mb-8 px-2">
<h2 className="text-2xl font-semibold tracking-tight text-[#111]">Módulos</h2>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Visão Geral</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="pen-tool"></i></div>
<span className="px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-semibold rounded-full uppercase tracking-wide">IA + Perplexity</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1 group-hover:text-[#007AFF] transition-colors">Gerador de Copy</h3>
<p className="text-sm text-gray-500 leading-snug">Crie roteiros para YouTube, Instagram e TikTok em segundos.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="layers"></i></div>
<span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">Histórico</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Biblioteca</h3>
<p className="text-sm text-gray-500 leading-snug">Busca semântica de tudo o que você já criou.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="kanban"></i></div>
<span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-semibold rounded-full uppercase tracking-wide">Pipeline</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Demandas</h3>
<p className="text-sm text-gray-500 leading-snug">Organize tarefas por BU, datas e prioridade.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="calendar-clock"></i></div>
<span className="px-2 py-1 bg-blue-50 text-[#007AFF] text-[10px] font-semibold rounded-full uppercase tracking-wide">Agenda IA</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Calendário</h3>
<p className="text-sm text-gray-500 leading-snug">Visão unificada de prazos e sugestões.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="sticky-note"></i></div>
<span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">Manual</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Bloco de Notas</h3>
<p className="text-sm text-gray-500 leading-snug">Anote ideias rápidas sem interferência da IA.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start card-content z-10">
<div className="p-3 bg-[#111] rounded-xl text-white"><i className="w-5 h-5" data-lucide="bot"></i></div>
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-semibold rounded-full uppercase tracking-wide">Agente</span>
</div>
<div className="card-content z-10">
<h3 className="text-lg font-semibold text-[#111] mb-1">Agente de IA</h3>
<p className="text-sm text-gray-500 leading-snug">Peça em linguagem natural, o Vibe executa.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="bell"></i></div>
<span className="px-2 py-1 bg-red-50 text-red-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">Alertas</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Notificações</h3>
<p className="text-sm text-gray-500 leading-snug">Priorização inteligente do que importa.</p>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between h-48 cursor-pointer group">
<div className="flex justify-between items-start card-content">
<div className="p-3 bg-gray-50 rounded-xl text-[#111]"><i className="w-5 h-5" data-lucide="settings-2"></i></div>
<span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">Admin</span>
</div>
<div className="card-content">
<h3 className="text-lg font-semibold text-[#111] mb-1">Configurações</h3>
<p className="text-sm text-gray-500 leading-snug">Templates, tags, equipes e integrações.</p>
</div>
</div>
</div>
</section>

<section className="mb-24 animate-enter" style={{animationDelay: '0.5s'}}>
<div className="glass-card p-10 md:p-12">
<div className="mb-8 text-center">
<h3 className="text-xl font-semibold text-[#111]">Fluxo de Criação</h3>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative z-10">

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Ideia</span>

<div className="absolute bottom-full mb-4 w-32 p-3 glass-card text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<span className="text-xs text-gray-600">Input inicial</span>
</div>
</div>

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Demanda</span>
</div>

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Copy (IA)</span>
<div className="absolute bottom-full mb-4 w-40 p-3 glass-card text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<span className="text-xs text-gray-600">Geração e refino</span>
</div>
</div>

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Calendário</span>
</div>

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Publicação</span>
</div>

<div className="timeline-step group flex flex-col items-center cursor-default relative">
<div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 timeline-dot mb-4"></div>
<span className="text-sm font-medium text-gray-400 group-hover:text-[#111] transition-colors">Aprendizado</span>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-enter" style={{animationDelay: '0.6s'}}>

<div className="lg:col-span-2 glass-card p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#007AFF]" data-lucide="sparkles"></i>
<h3 className="text-lg font-semibold text-[#111]">Agente em Ação</h3>
</div>
<span className="text-xs text-gray-400">Ao vivo</span>
</div>
<div className="space-y-4">

<div className="flex justify-end">
<div className="bg-[#007AFF] text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[80%] text-sm font-medium">
                            Crie uma copy para um Reels sobre produtividade com Notion.
                        </div>
</div>

<div className="flex justify-start items-end gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-200 to-white flex items-center justify-center border border-gray-100">
<i className="w-3 h-3 text-gray-500" data-lucide="bot"></i>
</div>
<div className="bg-white/60 backdrop-blur-md border border-gray-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm text-[#3A3A3C]">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
<i className="w-3 h-3 animate-spin" data-lucide="loader-2"></i>
                                    Processando...
                                </div>
<p><strong>Etapa 1:</strong> Analisando tendências de produtividade...</p>
<p><strong>Etapa 2:</strong> Gerando 3 opções de Hooks virais...</p>
<p className="text-[#007AFF] cursor-pointer hover:underline mt-1">Ver rascunho completo →</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="glass-card p-6 flex-1 flex flex-col justify-center">
<span className="text-xs font-semibold text-gray-400 uppercase mb-2">Hoje</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-[#111] tracking-tight">12</span>
<span className="text-sm text-gray-500">itens</span>
</div>
<p className="text-xs text-gray-500 mt-1">4 Demandas, 8 Notas</p>
</div>
<div className="glass-card p-6 flex-1 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-12 h-12 text-yellow-400 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase mb-2">Sugestão</span>
<p className="text-sm font-medium text-[#111] pr-8">Revisar as copies para a campanha de Black Friday até as 14h.</p>
<button className="mt-3 text-xs font-semibold text-[#007AFF] flex items-center gap-1 hover:gap-2 transition-all">
                        Fazer agora <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-200 bg-white/50 backdrop-blur-lg py-8 mt-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 VibeCoding OS. Designed for Creators.</p>
<div className="flex items-center gap-6">
<i className="w-4 h-4 text-gray-300" data-lucide="command"></i>
<span className="text-xs text-gray-400">Pressione Cmd+K para buscar</span>
</div>
</div>
</footer>


    </>
  );
}
