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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#FF5500',
black: '#0A0A0B',
panel: '#0F0F10'
}
}
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
      

<div className="page-loader"></div>

<div className="tech-bg-wrapper">
<div className="tech-orb orb-1"></div>
<div className="tech-orb orb-2"></div>
<div className="tech-orb orb-3"></div>
<div className="tech-grid"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md reveal-blur is-visible">
<div className="flex max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 items-center justify-between transition-all duration-300">
<a className="flex items-center gap-3 select-none group" href="#">
<img alt="DashCore" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://i.imgur.com/kUdOjC6.png"/>
</a>
<div className="hidden items-center gap-6 lg:gap-8 md:flex">
<a className="text-sm font-medium text-gray-400 transition hover:text-white hover:scale-105 transform" href="#funcionalidades">
            Funcionalidades
          </a>
<a className="text-sm font-medium text-gray-400 transition hover:text-white hover:scale-105 transform" href="#como-funciona">
            Como funciona
          </a>
<a className="text-sm font-medium text-gray-400 transition hover:text-white hover:scale-105 transform" href="#precos">
            Preços
          </a>
</div>
<div className="flex items-center gap-3 md:gap-4">
<a className="hidden text-sm font-medium text-gray-300 transition hover:text-white md:block hover:scale-105 transform" href="#">
            Login
          </a>
<a className="btn-animated scale-90 md:scale-100 origin-right" href="#oferta">
<div className="points-wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
<span className="hidden sm:inline">Começar Agora</span>
<span className="sm:hidden">Começar</span>
<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<button aria-label="Menu Mobile" className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</nav>

<section className="relative overflow-visible pt-32 pb-16 lg:pt-40 lg:pb-24">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#431407] blur-[120px] rounded-full opacity-60 pointer-events-none"></div>
<div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-[#0f172a] blur-[120px] rounded-full opacity-60 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center">

<div className="text-center max-w-4xl mx-auto mb-16">
<div className="reveal-blur inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-orange-400 mb-8 backdrop-blur-md is-visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            Novo Dashboard 3.0 Disponível
          </div>
<h1 className="reveal-blur delay-100 font-space text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] is-visible">
            O Controle Total da
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
              Sua Operação.
            </span>
</h1>
<p className="reveal-blur delay-200 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 is-visible">
            Gestão financeira, projetos e clientes em um único ecossistema. Pare
            de perder dinheiro com ferramentas desconectadas.
          </p>
<div className="reveal-blur delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 is-visible">
<a className="btn-animated min-w-[200px]" href="#oferta">
<div className="points-wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Liberar Acesso Total
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10" href="#precos">
              Teste por 7 dias
            </a>
</div>
</div>

<div className="w-full relative hero-dashboard-container reveal-blur delay-500 max-w-[1200px] mx-auto is-visible">
<div className="dashboard-mockup hero-glow-lime rounded-2xl border border-white/10 bg-[#000] shadow-2xl relative overflow-hidden ring-1 ring-white/5" id="dashboard-mockup" style={{transition: 'none'}}>
<div className="flex h-[600px] md:h-[700px] overflow-hidden font-sans text-gray-400">

<aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#050505]">
<div className="p-6">
<div className="text-xl font-bold tracking-tight text-white font-heading">
                    DASH
                    <span className="text-brand-orange">CORE</span>
<span className="text-brand-orange text-xs align-top animate-pulse">
                      ●
                    </span>
</div>
</div>
<div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 dashboard-scroll">

<div>
<h4 className="px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3 font-heading">
                      Principal
                    </h4>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-brand-orange/10 text-brand-orange border border-brand-orange/20 transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<span className="text-sm font-medium">Visão Geral</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
<span className="text-sm font-medium">Pipeline</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-sm font-medium">Clientes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
<span className="text-sm font-medium">Projetos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M7 12v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"></path>
<path d="M12 7V2"></path>
<path d="M12 22v-3"></path>
</svg>
<span className="text-sm font-medium">Financeiro</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
<span className="text-sm font-medium">Kiwify</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-5.5 4.5-10 10-10Z"></path>
<path d="M2 12h10"></path>
<path d="M12 2v10"></path>
</svg>
<span className="text-sm font-medium">Meta Ads</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
<span className="text-sm font-medium">Calculadora</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="text-sm font-medium">Configurações</span>
</a>
</nav>
</div>

<div>
<h4 className="px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3 font-heading">
                      Ferramentas
                    </h4>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors" href="#">
<svg className="text-brand-orange" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-medium">Painel Admin</span>
</a>
</nav>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-black relative">

<header className="h-16 flex items-center justify-end px-6 border-b border-white/5">
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-white transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand-orange"></span>
</button>
<div className="h-8 w-8 rounded-full bg-white/10 overflow-hidden ring-2 ring-brand-orange/50">
<img alt="Profile" className="h-full w-full object-cover" src="https://ui-avatars.com/api/?name=Gabriel&amp;background=111&amp;color=fff"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 dashboard-scroll">

<div className="flex justify-end mb-6">
<div className="bg-brand-panel p-1 rounded-lg border border-white/5 flex text-xs font-medium">
<button className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition">
                        Hoje
                      </button>
<button className="px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition">
                        Mensal
                      </button>
<button className="px-3 py-1.5 rounded-md bg-brand-orange text-white shadow-lg shadow-orange-900/40">
                        Anual
                      </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="col-span-1 md:col-span-8 bg-brand-panel border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
<div className="flex items-start justify-between mb-8">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                              Faturamento Anual (Atual)
                            </span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white font-space tracking-tight">
                            R$ 115.344,61
                          </h2>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-brand-orange transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
</div>
</div>

<div className="relative h-64 w-full mt-auto">

<div className="absolute left-0 inset-y-0 flex flex-col justify-between text-[10px] text-gray-600 font-mono pointer-events-none z-10">
<span>R$24k</span>
<span>R$18k</span>
<span>R$12k</span>
<span>R$6k</span>
<span>R$0</span>
</div>

<div className="absolute inset-0 pl-10 flex flex-col justify-between pointer-events-none">
<div className="border-t border-dashed border-white/5 w-full h-px"></div>
<div className="border-t border-dashed border-white/5 w-full h-px"></div>
<div className="border-t border-dashed border-white/5 w-full h-px"></div>
<div className="border-t border-dashed border-white/5 w-full h-px"></div>
<div className="border-t border-white/10 w-full h-px"></div>
</div>

<div className="absolute inset-0 pl-10 pt-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="orangeGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF5500" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#FF5500" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="" d="M0,150 C50,130 100,100 150,110 C200,120 220,90 250,50 C280,10 320,60 380,60 C420,60 450,120 500,140 C550,160 600,180 650,180 C700,180 750,120 800,90 L800,200 L0,200 Z" fill="url(#orangeGradient)"></path>

<path className="animate-dash-loop drop-shadow-[0_0_15px_rgba(255,85,0,0.4)]" d="M0,150 C50,130 100,100 150,110 C200,120 220,90 250,50 C280,10 320,60 380,60 C420,60 450,120 500,140 C550,160 600,180 650,180 C700,180 750,120 800,90" fill="none" stroke="#FF5500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>

<div className="absolute bottom-[-20px] left-0 right-0 pl-10 flex justify-between text-[10px] text-gray-600 font-mono uppercase">
<span>jan</span>
<span>fev</span>
<span>mar</span>
<span>abr</span>
<span>mai</span>
<span>jun</span>
<span>jul</span>
<span>ago</span>
<span>set</span>
<span>out</span>
<span>nov</span>
<span>dez</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 flex flex-col gap-6">

<div className="flex-1 bg-[#0f0f10] border border-purple-900/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_-5px_rgba(168,85,247,0.05)]">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex items-center gap-2 mb-4">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path>
</svg>
<span className="text-xs font-bold text-purple-400">
                            Smart Projection AI
                          </span>
</div>
<div className="mb-4">
<h3 className="text-3xl font-bold text-white font-space">
                            R$ 129.844,99
                          </h3>
<p className="text-[10px] text-gray-500 mt-1">
                            Projeção Anual (2025) baseado no ritmo atual
                          </p>
</div>
<div className="mt-auto">
<div className="flex justify-between text-[9px] font-bold uppercase tracking-wider mb-2">
<span className="text-gray-500">Realizado: 83%</span>
<span className="text-gray-600">Meta IA</span>
</div>
<div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 w-[83%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] animate-auto-fill"></div>
</div>
</div>
</div>

<div className="flex-1 bg-brand-panel border border-white/5 rounded-2xl p-6 flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">
                            Lucro Líquido
                          </span>
<h3 className="text-3xl font-bold text-white font-space mb-2">
                            R$ 65.344,61
                          </h3>
<span className="inline-block px-2 py-0.5 rounded bg-green-900/20 text-green-500 text-[10px] font-bold border border-green-500/10">
                            Margem: 57%
                          </span>
</div>
<div className="relative flex items-center justify-center">
<svg className="circle-chart" viewbox="0 0 36 36">
<path className="circle-chart__bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#27272a" strokeWidth="2"></path>
<path className="circle-chart__circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="57, 100"></path>
</svg>
<span className="absolute text-[10px] font-bold text-green-500">
                            57%
                          </span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-brand-panel border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-4 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
<span className="text-[10px] font-bold uppercase tracking-widest">
                          Vendas
                        </span>
</div>
<h3 className="text-3xl font-bold text-white font-space mb-1">
                        26
                      </h3>
<p className="text-[10px] text-gray-500">
                        Total de vendas neste ano
                      </p>
</div>
<div className="col-span-1 md:col-span-4 bg-brand-panel border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-4 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="5"></circle>
<path d="M20 21a8 8 0 1 0-16 0"></path>
</svg>
<span className="text-[10px] font-bold uppercase tracking-widest">
                          Ticket Médio
                        </span>
</div>
<h3 className="text-3xl font-bold text-white font-space mb-1">
                        R$ 4.436,33
                      </h3>
</div>
<div className="col-span-1 md:col-span-4 bg-brand-panel border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-4 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                          A Receber (Projetos)
                        </span>
</div>
<h3 className="text-3xl font-bold text-white font-space mb-1">
                        R$ 89.937,00
                      </h3>
<p className="text-[10px] text-gray-500">
                        Valor pendente de projetos ativos
                      </p>
</div>

<div className="col-span-1 md:col-span-4 bg-brand-panel border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-4 text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
<polyline points="16 17 22 17 22 11"></polyline>
</svg>
<span className="text-[10px] font-bold uppercase tracking-widest">
                          Despesas
                        </span>
</div>
<h3 className="text-3xl font-bold text-white font-space mb-1">
                        R$ 50.000,00
                      </h3>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
</section>


<section className="py-24 bg-[#0a0a0a]/50 backdrop-blur-sm" id="funcionalidades">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto reveal-blur">
<h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Transforme dados dispersos em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              lucro previsível.
            </span>
</h2>
</div>
<div className="grid gap-4 md:grid-cols-4 auto-rows-fr">

<div className="reveal-blur delay-100 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-2 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 z-10">
<svg className="lucide lucide-wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                Controle de Caixa Blindado
              </h3>
<p className="text-base text-gray-400 leading-relaxed max-w-md">
                Pare de perder dinheiro por desorganização. Categorize entradas
                e saídas automaticamente e saiba exatamente para onde cada
                centavo está indo.
              </p>
</div>
<div className="absolute top-8 right-8 w-40 opacity-40">
<div className="space-y-2">
<div className="h-8 rounded bg-gray-700 w-full animate-slide-up-1 flex items-center px-2 justify-between">
<div className="h-2 w-12 bg-gray-500 rounded"></div>
<div className="h-2 w-8 bg-green-500 rounded"></div>
</div>
<div className="h-8 rounded bg-gray-700 w-full animate-slide-up-2 flex items-center px-2 justify-between">
<div className="h-2 w-10 bg-gray-500 rounded"></div>
<div className="h-2 w-6 bg-red-500 rounded"></div>
</div>
<div className="h-8 rounded bg-gray-700 w-full animate-slide-up-3 flex items-center px-2 justify-between">
<div className="h-2 w-14 bg-gray-500 rounded"></div>
<div className="h-2 w-8 bg-green-500 rounded"></div>
</div>
</div>
</div>
</div>

<div className="reveal-blur delay-200 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-1 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 z-10">
<svg className="lucide lucide-arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 16-4 4-4-4"></path>
<path d="M17 20V4"></path>
<path d="m3 8 4-4 4 4"></path>
<path d="M7 4v16"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                CRM de Vendas Visual
              </h3>
<p className="text-base text-gray-400 leading-relaxed">
                O fim dos leads perdidos no WhatsApp. Arraste negociações e
                tenha clareza total.
              </p>
</div>
<div className="absolute top-8 right-6 flex gap-2 opacity-40 scale-75">
<div className="w-8 h-20 bg-gray-800 rounded border border-white/5 flex flex-col gap-1 p-1">
<div className="w-full h-6 bg-gray-700 rounded"></div>
</div>
<div className="w-8 h-20 bg-gray-800 rounded border border-white/5 flex flex-col gap-1 p-1">
<div className="w-full h-6 bg-blue-500 rounded animate-float"></div>
<div className="w-full h-6 bg-gray-700 rounded"></div>
</div>
</div>
</div>

<div className="reveal-blur delay-300 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-1 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-500 z-10">
<svg className="lucide lucide-folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                Lucratividade Real
              </h3>
<p className="text-base text-gray-400 leading-relaxed">
                Faturamento é vaidade, lucro é sanidade. Descubra quais clientes
                realmente pagam a conta.
              </p>
</div>
<div className="absolute top-8 right-8 w-16 opacity-40">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full border border-green-500 bg-green-500 animate-check"></div>
<div className="h-1.5 w-10 bg-gray-600 rounded"></div>
</div>
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full border border-gray-600"></div>
<div className="h-1.5 w-8 bg-gray-700 rounded"></div>
</div>
</div>
</div>
</div>

<div className="reveal-blur delay-100 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-1 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 z-10">
<svg className="lucide lucide-pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                Inteligência em Tempo Real
              </h3>
<p className="text-base text-gray-400 leading-relaxed">
                Adeus aos relatórios atrasados. Tenha DRE e Runway atualizados
                instantaneamente.
              </p>
</div>
<div className="absolute top-10 right-8 flex items-end gap-1.5 h-16 opacity-40">
<div className="w-3 bg-gray-700 rounded-t animate-bar-1"></div>
<div className="w-3 bg-purple-500 rounded-t animate-bar-2"></div>
<div className="w-3 bg-gray-600 rounded-t animate-bar-3"></div>
</div>
</div>

<div className="reveal-blur delay-200 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-1 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 z-10">
<svg className="lucide lucide-calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                Visão Macro Estratégica
              </h3>
<p className="text-base text-gray-400 leading-relaxed">
                Saia do operacional. Compare a evolução mês a mês e identifique
                sazonalidades.
              </p>
</div>
<div className="absolute top-8 right-8 grid grid-cols-4 gap-1 opacity-40">
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
<div className="h-2 w-2 rounded-sm bg-red-500 animate-grid-dot"></div>
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
<div className="h-2 w-2 rounded-sm bg-red-500 animate-grid-dot" style={{animationDelay: '1s'}}></div>
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
<div className="h-2 w-2 rounded-sm bg-gray-700"></div>
</div>
</div>

<div className="reveal-blur delay-300 relative flex flex-col h-full rounded-2xl bg-[#111] p-8 border border-white/5 md:col-span-2 overflow-hidden hover:border-white/10 transition-colors">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 z-10">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="z-10 relative">
<h3 className="mb-3 text-xl font-bold text-white">
                Fluxo de Trabalho Ultra Rápido
              </h3>
<p className="text-base text-gray-400 leading-relaxed max-w-lg">
                Uma interface desenhada para não te atrapalhar. Tão fluida e
                responsiva que organizar as finanças deixa de ser um fardo e
                vira um hábito.
              </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
<div className="h-full w-1/3 bg-gradient-to-r from-transparent to-indigo-500 blur-sm animate-laser absolute"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050505]/50 backdrop-blur-sm relative overflow-hidden" id="como-funciona">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10">
<h2 className="reveal-blur text-center text-3xl font-bold text-white mb-16 font-heading">
          Do caos à clareza em 3 passos
        </h2>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-800 -z-10">
<div className="h-full w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shimmer opacity-50"></div>
</div>
<div className="reveal-blur delay-100 flex flex-col items-center text-center group">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300 animate-step-pulse">
<svg className="text-orange-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm border-4 border-[#050505]">
                1
              </div>
</div>
<h3 className="text-xl font-bold text-white mb-2">Conecte</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Importe seus extratos ou conecte suas contas com um clique. A IA
              identifica os padrões.
            </p>
</div>
<div className="reveal-blur delay-200 flex flex-col items-center text-center group">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300 animate-step-pulse" style={{animationDelay: '0.5s'}}>
<svg className="text-blue-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-4 border-[#050505]">
                2
              </div>
</div>
<h3 className="text-xl font-bold text-white mb-2">Organize</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Arraste seus leads no Pipeline e veja a mágica da categorização
              automática acontecer.
            </p>
</div>
<div className="reveal-blur delay-300 flex flex-col items-center text-center group">
<div className="relative mb-6">
<div className="h-24 w-24 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300 animate-step-pulse" style={{animationDelay: '1s'}}>
<svg className="text-green-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
</div>
<div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm border-4 border-[#050505]">
                3
              </div>
</div>
<h3 className="text-xl font-bold text-white mb-2">Escale</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Tome decisões baseadas em dados reais de lucro, não em métricas de
              vaidade.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]/50 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10">

<div className="mb-32 flex flex-col items-center gap-16 lg:flex-row">
<div className="flex-1 lg:pr-12 reveal-blur">
<div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#111] border border-white/10 px-3 py-1 text-sm font-medium text-orange-400">
              Analytics Pro
            </div>
<h3 className="mb-4 text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Saúde financeira em alta definição.
            </h3>
<p className="text-lg leading-relaxed text-gray-400">
              Chega de gráficos feios. Nosso design "Dark Mode First" garante
              que você entenda seus números.
            </p>
</div>
<div className="flex-1 w-full relative perspective-1000 reveal-blur delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-50 animate-glow"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0c] p-8 shadow-2xl overflow-hidden transform rotate-y-6 rotate-x-6">
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/40"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
<div className="w-3 h-3 rounded-full bg-green-500/40"></div>
</div>
</div>
<div className="space-y-4 relative z-10">
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 animate-auto-slide-right">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center text-green-500">
<svg className="lucide lucide-trending-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="space-y-2">
<div className="h-2 w-24 bg-gray-700/50 rounded"></div>
<div className="h-2 w-16 bg-gray-800/50 rounded"></div>
</div>
</div>
<div className="h-2 w-14 bg-green-500/50 rounded"></div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 animate-auto-slide-right" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center text-red-500">
<svg className="lucide lucide-trending-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
<polyline points="16 17 22 17 22 11"></polyline>
</svg>
</div>
<div className="space-y-2">
<div className="h-2 w-28 bg-gray-700/50 rounded"></div>
<div className="h-2 w-12 bg-gray-800/50 rounded"></div>
</div>
</div>
<div className="h-2 w-14 bg-red-500/50 rounded"></div>
</div>
</div>
<div className="absolute inset-0 z-0 h-[50%] w-full -translate-y-full animate-scan pointer-events-none border-b border-orange-500/20"></div>
</div>
</div>
</div>

<div className="mb-32 flex flex-col items-center gap-16 lg:flex-row-reverse">
<div className="flex-1 lg:pl-12 reveal-blur">
<div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#111] border border-white/10 px-3 py-1 text-sm font-medium text-orange-400">
              Mobilidade
            </div>
<h3 className="mb-4 text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Controle total na palma da mão.
            </h3>
<p className="text-lg leading-relaxed text-gray-400">
              Interface responsiva de verdade.
            </p>
</div>
<div className="flex-1 w-full flex justify-center perspective-1000 reveal-blur delay-200">
<div className="relative mx-auto w-[280px] animate-float-phone">
<div className="absolute inset-0 bg-orange-600/30 blur-[60px] rounded-full opacity-60 animate-bg-glow"></div>
<div className="relative rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#050505] shadow-2xl overflow-hidden transform-style-3d">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-30 pointer-events-none rounded-[2.5rem]"></div>
<div className="absolute top-0 inset-x-0 h-7 bg-[#1a1a1a] rounded-b-xl z-20 w-32 mx-auto flex items-center justify-center">
<div className="w-16 h-1 bg-[#111] rounded-full"></div>
</div>
<div className="pt-10 px-4 pb-8 h-[480px] bg-[#0c0c0e] relative flex flex-col">
<div className="relative h-44 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-5 shadow-lg shadow-orange-900/40 overflow-hidden mb-6 border border-white/10">
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="h-8 w-12 bg-white/20 rounded backdrop-blur-sm"></div>
<svg className="lucide lucide-wifi text-white/50" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
<path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
<line x1="12" x2="12.01" y1="20" y2="20"></line>
</svg>
</div>
<div className="space-y-2 relative z-10 mt-auto">
<div className="h-2 w-20 bg-white/40 rounded"></div>
<div className="h-6 w-32 bg-white rounded shadow-sm"></div>
</div>
<div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
</div>
<div className="grid grid-cols-2 gap-3 flex-1">
<div className="rounded-xl bg-[#161618] border border-white/5 p-3 flex flex-col justify-between">
<div className="h-8 w-8 rounded bg-gray-800 flex items-center justify-center text-gray-400">
<svg className="lucide lucide-arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="h-2 w-16 bg-gray-700 rounded"></div>
</div>
<div className="rounded-xl bg-[#161618] border border-white/5 p-3 flex flex-col justify-between">
<div className="h-8 w-8 rounded bg-gray-800 flex items-center justify-center text-gray-400">
<svg className="lucide lucide-arrow-down-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7 7 17"></path>
<path d="M17 17H7V7"></path>
</svg>
</div>
<div className="h-2 w-16 bg-gray-700 rounded"></div>
</div>
</div>
<div className="mt-6 flex justify-center">
<div className="h-1 w-20 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-32 flex flex-col items-center gap-16 lg:flex-row">
<div className="flex-1 lg:pr-12 reveal-blur">
<div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#111] border border-white/10 px-3 py-2 text-sm font-medium text-orange-400">
              Fluxo de Caixa
            </div>
<h3 className="mb-4 text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Fluxo de Caixa em Tempo Real
            </h3>
<p className="text-lg leading-relaxed text-gray-400">
              Abandone as planilhas estáticas. Nosso fluxo de caixa categoriza
              cada centavo automaticamente. Visualize entradas e saídas com
              ícones intuitivos e saiba exatamente o "Runway" (tempo de vida) da
              sua empresa.
            </p>
<ul className="space-y-5 mt-8">
<li className="flex gap-3">
<svg className="lucide lucide-check text-orange-500 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<div>
<span className="text-gray-400 text-sm leading-relaxed">
                    Inputs inteligentes que aprendem seus padrões de gastos.
                  </span>
</div>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check text-orange-500 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<div>
<span className="text-gray-400 text-sm leading-relaxed">
                    Alterne entre visão diária, semanal ou anual em um clique.
                  </span>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full relative reveal-blur delay-200">
<div className="rounded-2xl border border-white/10 bg-[#0c0c0e] p-2 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
<div className="rounded-xl bg-[#080808] border border-white/5 p-6 relative z-10">
<div className="flex gap-4 mb-6">
<div className="flex-1 rounded-lg bg-[#111] border border-white/5 p-3 flex flex-col gap-1">
<span className="text-[10px] text-gray-500 uppercase font-bold">
                      Entradas
                    </span>
<span className="text-green-500 font-bold text-lg">
                      + R$ 12.450
                    </span>
</div>
<div className="flex-1 rounded-lg bg-[#111] border border-white/5 p-3 flex flex-col gap-1">
<span className="text-[10px] text-gray-500 uppercase font-bold">
                      Saídas
                    </span>
<span className="text-red-500 font-bold text-lg">
                      - R$ 4.200
                    </span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-[#111] border border-white/5 animate-auto-slide-down">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-green-900/20 text-green-500 flex items-center justify-center border border-green-500/20">
<svg className="lucide lucide-arrow-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</div>
<div>
<p className="text-xs font-bold text-white">
                          Venda Eduzz #002
                        </p>
</div>
</div>
<span className="text-green-500 text-xs font-bold">
                      + R$ 297,00
                    </span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-[#111] border border-white/5 animate-auto-slide-down" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-red-900/20 text-red-500 flex items-center justify-center border border-red-500/20">
<svg className="lucide lucide-arrow-down" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
<div>
<p className="text-xs font-bold text-white">Facebook Ads</p>
</div>
</div>
<span className="text-red-500 text-xs font-bold">
                      - R$ 1.500,00
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-32 flex flex-col items-center gap-16 lg:flex-row-reverse">
<div className="flex-1 lg:pl-12 reveal-blur">
<div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#111] border border-white/10 px-3 py-2 text-sm font-medium text-blue-500">
              Pipeline CRM
            </div>
<h3 className="mb-4 text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Pipeline CRM Integrado
            </h3>
<p className="text-lg leading-relaxed text-gray-400">
              Não perca mais leads no WhatsApp. Organize seus clientes em um
              quadro Kanban visual. Arraste cards de "Negociação" para "Fechado"
              e veja o valor do pipeline atualizar instantaneamente.
            </p>
<ul className="space-y-5 mt-8">
<li className="flex gap-3">
<svg className="lucide lucide-check text-blue-500 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<div>
<span className="text-gray-400 text-sm leading-relaxed">
                    Interface tátil responsiva, funciona perfeitamente no
                    celular.
                  </span>
</div>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check text-blue-500 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<div className="">
<span className="text-gray-400 text-sm leading-relaxed">
                    Clique em um card para ver anotações, valores e datas.
                  </span>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full relative reveal-blur delay-200">
<div className="rounded-2xl border border-white/10 bg-[#0c0c0e] p-6 shadow-2xl relative overflow-hidden h-[320px] flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Pipeline Vendas
                </span>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full bg-gray-700"></div>
<div className="h-2 w-2 rounded-full bg-gray-600"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 h-full">
<div className="bg-[#111] rounded-lg p-2 border border-white/5 flex flex-col gap-2 relative">
<div className="flex items-center gap-1.5 mb-2">
<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
<span className="text-[10px] font-bold text-gray-400">
                      LEADS
                    </span>
</div>
<div className="bg-[#1a1a1a] p-3 rounded border border-blue-500/50 absolute top-10 left-4 w-40 shadow-xl shadow-black z-20 animate-kanban-drag">
<div className="flex justify-between items-start mb-2">
<div className="h-1.5 w-16 bg-white/20 rounded"></div>
<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
</div>
<p className="text-xs font-bold text-white mb-1">
                      Projeto Website
                    </p>
<p className="text-[10px] text-orange-500 font-mono">
                      R$ 4.500,00
                    </p>
</div>
</div>
<div className="bg-[#111] rounded-lg p-2 border border-white/5 flex flex-col gap-2">
<div className="flex items-center gap-1.5 mb-2">
<div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
<span className="text-[10px] font-bold text-gray-400">
                      NEGOCIAÇÃO
                    </span>
</div>
</div>
<div className="bg-[#111] rounded-lg p-2 border border-white/5 flex flex-col gap-2">
<div className="flex items-center gap-1.5 mb-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] font-bold text-gray-400">
                      FECHADO
                    </span>
</div>
<div className="bg-[#1a1a1a] p-3 rounded border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-bold text-white">
                        Loja Virtual
                      </span>
<svg className="lucide lucide-check text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<p className="text-[9px] text-gray-500">R$ 8.200,00</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-32 flex flex-col items-center gap-16 lg:flex-row">
<div className="flex-1 lg:pr-12 reveal-blur">
<div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#111] border border-white/10 px-3 py-2 text-sm font-medium text-purple-400">
</div></div></div></div></section>
    </>
  );
}
