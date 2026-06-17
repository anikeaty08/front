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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-neutral-200/50 transition-all">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<a className="font-semibold text-xl tracking-tight text-[#191919] uppercase flex items-center gap-1" href="#">
<span className="text-[#E5293F]">EASY</span>JUR
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#7F919A]">
<a className="hover:text-[#191919] transition-colors" href="#">Home</a>
<div className="group relative cursor-pointer py-2">
<span className="flex items-center gap-1 hover:text-[#191919] transition-colors">Soluções <i className="w-4 h-4" data-lucide="chevron-down"></i></span>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 w-[28rem]">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 p-4 grid grid-cols-1 gap-2">
<a className="flex flex-col p-3 rounded-xl hover:bg-neutral-50 transition-colors" href="#">
<span className="text-[#191919] font-medium text-base">Software de Gestão Jurídica | Escritórios</span>
<span className="text-sm text-[#7F919A] mt-0.5">Gestão completa para bancas de advocacia.</span>
</a>
<a className="flex flex-col p-3 rounded-xl hover:bg-neutral-50 transition-colors" href="#">
<span className="text-[#191919] font-medium text-base">Software de Gestão Jurídica | Empresas</span>
<span className="text-sm text-[#7F919A] mt-0.5">Controle total para departamentos jurídicos.</span>
</a>
</div>
</div>
</div>
<a className="hover:text-[#191919] transition-colors" href="#planos">Planos</a>
<div className="group relative cursor-pointer py-2">
<span className="flex items-center gap-1 hover:text-[#191919] transition-colors">Conteúdos <i className="w-4 h-4" data-lucide="chevron-down"></i></span>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 w-[36rem]">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 p-6 grid grid-cols-2 gap-x-8 gap-y-4">
<div>
<h4 className="text-sm font-semibold text-[#191919] uppercase tracking-tight mb-3">Aprenda</h4>
<ul className="space-y-3">
<li><a className="text-base hover:text-[#E5293F] transition-colors block" href="#">Artigos e Notícias</a></li>
<li><a className="text-base hover:text-[#E5293F] transition-colors block" href="#">Central de Aprendizagem</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#191919] uppercase tracking-tight mb-3">Materiais</h4>
<ul className="space-y-3">
<li><a className="text-base hover:text-[#E5293F] transition-colors block" href="#">E-Books e Planilhas</a></li>
<li><a className="text-base hover:text-[#E5293F] transition-colors block" href="#">Modelos de Petição</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-base font-medium text-[#191919] hover:text-[#7F919A] transition-colors">Entrar</button>
<button className="relative overflow-hidden bg-[#191919] text-white text-sm font-medium tracking-wide uppercase px-5 py-2.5 rounded-full animate-shimmer shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(25,25,25,0.23)] hover:-translate-y-0.5 transition-all duration-200">
                    Experimente Grátis
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(229,41,63,0.15) 0%, rgba(249,249,249,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start z-10 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#E5293F] text-sm font-medium uppercase tracking-tight mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#E5293F] animate-pulse"></span>
                    Nova IA Generativa
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#191919] leading-[1.05] mb-6">
                    Software Jurídico com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5293F] to-[#A82130]">Inteligência Artificial</span>: Produtividade de Verdade.
                </h1>
<p className="text-lg lg:text-xl text-[#7F919A] font-medium leading-relaxed max-w-xl mb-10">
                    Você foca no Direito, nós cuidamos do resto. Automatize tarefas, controle prazos e tenha uma gestão completa do seu escritório com a tecnologia de ponta EasyJur.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-[#E5293F] to-[#A82130] text-white text-base font-medium tracking-wide uppercase px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(229,41,63,0.3)] hover:shadow-[0_8px_40px_rgb(229,41,63,0.4)] hover:-translate-y-0.5 transition-all duration-200">
                        Experimente Grátis Agora
                    </button>
<span className="text-sm text-[#ACBAC2] font-medium flex items-center gap-2">
<i className="w-5 h-5 text-[#ACBAC2]" data-lucide="shield-check"></i> Sem cartão de crédito
                    </span>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-visible flex items-center justify-center animate-fade-up delay-1">

<div className="absolute inset-0 w-full h-full flex items-center justify-center">
<svg className="w-[115%] h-[115%] drop-shadow-2xl scale-110 md:scale-125 transform-gpu origin-center" viewbox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#f3f4f6" stop-opacity="0.4"></stop>
</lineargradient>
</defs>
<rect fill="#ffffff" height="500" rx="16" stroke="#e5e5e5" strokeWidth="1" width="800" x="0" y="0"></rect>
<rect fill="#fafafa" height="500" rx="16" stroke="#e5e5e5" strokeWidth="1" width="200" x="0" y="0"></rect>
<line stroke="#e5e5e5" strokeWidth="1" x1="200" x2="200" y1="0" y2="500"></line>
<circle cx="40" cy="40" fill="#191919" r="12"></circle>
<rect fill="#d4d4d4" height="8" rx="4" width="80" x="64" y="36"></rect>
<rect fill="#f3f4f6" height="32" rx="6" width="152" x="24" y="80"></rect>
<rect fill="#191919" height="8" rx="4" width="100" x="40" y="92"></rect>
<rect fill="#a3a3a3" height="8" rx="4" width="80" x="40" y="140"></rect>
<rect fill="#a3a3a3" height="8" rx="4" width="110" x="40" y="180"></rect>
<rect fill="#a3a3a3" height="8" rx="4" width="90" x="40" y="220"></rect>
<rect fill="#e5e5e5" height="16" rx="8" width="200" x="240" y="32"></rect>
<circle cx="740" cy="40" fill="#f3f4f6" r="16"></circle>
<rect fill="#ffffff" height="100" rx="12" stroke="#e5e5e5" strokeWidth="1" width="160" x="240" y="80"></rect>
<rect fill="#a3a3a3" height="8" rx="4" width="40" x="260" y="100"></rect>
<rect fill="#191919" height="24" rx="6" width="80" x="260" y="130"></rect>
<rect fill="#ffffff" height="100" rx="12" stroke="#e5e5e5" strokeWidth="1" width="160" x="420" y="80"></rect>
<rect fill="#a3a3a3" height="8" rx="4" width="40" x="440" y="100"></rect>
<rect fill="#191919" height="24" rx="6" width="60" x="440" y="130"></rect>
<rect fill="#191919" height="100" rx="12" width="160" x="600" y="80"></rect>
<rect fill="#525252" height="8" rx="4" width="40" x="620" y="100"></rect>
<rect fill="#ffffff" height="24" rx="6" width="90" x="620" y="130"></rect>
<rect fill="#ffffff" height="250" rx="12" stroke="#e5e5e5" strokeWidth="1" width="520" x="240" y="210"></rect>
<path d="M 240 400 C 300 380, 400 420, 450 350 C 500 280, 600 300, 650 240 L 760 220" fill="none" stroke="#e5293f" strokeLinecap="round" strokeWidth="3"></path>
<path d="M 240 400 C 300 380, 400 420, 450 350 C 500 280, 600 300, 650 240 L 760 220 L 760 460 L 240 460 Z" fill="url(#grad1)" opacity="0.5"></path>
<circle cx="650" cy="240" fill="#e5293f" r="5" stroke="#ffffff" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute bottom-12 left-0 lg:-left-12 bg-[#191919]/95 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-neutral-800 w-72 z-20 hidden md:block">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
</div>
<p className="font-mono text-sm text-[#ACBAC2] typewriter-text">&gt; Analisando jurisprudência...</p>
<p className="font-mono text-sm text-white mt-1 opacity-50">&gt; Padrão favorável detectado.</p>
</div>

<div className="absolute top-1/4 right-0 lg:-right-12 w-80 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-neutral-100 z-30 transform-gpu translate-x-4">
<h3 className="text-sm font-medium text-[#191919] mb-4 border-b border-neutral-100 pb-3 flex items-center justify-between">
                        Agendar Compromisso
                        <i className="w-4 h-4 text-neutral-400" data-lucide="calendar"></i>
</h3>

<div className="mb-5">
<div className="flex justify-between items-center mb-3 px-1">
<span className="text-xs font-semibold text-[#191919]">Outubro 2024</span>
<div className="flex gap-2">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="chevron-left"></i>
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-[10px] text-center text-neutral-400 mb-2 font-medium">
<span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-1 text-xs text-center text-neutral-600">
<span className="text-neutral-300 py-1.5">29</span><span className="text-neutral-300 py-1.5">30</span>
<span className="py-1.5 rounded bg-transparent">1</span>
<span className="py-1.5 rounded bg-transparent">2</span>
<span className="py-1.5 rounded bg-transparent">3</span>
<span className="py-1.5 rounded bg-transparent">4</span>
<span className="py-1.5 rounded bg-transparent">5</span>
<span className="py-1.5 rounded bg-transparent">6</span>
<span className="py-1.5 rounded bg-transparent">7</span>
<span className="py-1.5 rounded bg-transparent">8</span>
<span className="py-1.5 rounded bg-transparent">9</span>
<span className="py-1.5 rounded bg-transparent">10</span>
<span className="py-1.5 rounded bg-transparent">11</span>
<span className="py-1.5 rounded bg-transparent">12</span>
<span className="py-1.5 rounded bg-transparent">13</span>
<span className="py-1.5 rounded anim-schedule-day">14</span>
<span className="py-1.5 rounded bg-transparent">15</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-5">
<div className="border border-neutral-200 rounded-md py-1.5 text-center text-xs text-neutral-500 bg-white">13:00</div>
<div className="border border-neutral-200 rounded-md py-1.5 text-center text-xs text-neutral-500 bg-white anim-schedule-time">14:00</div>
<div className="border border-neutral-200 rounded-md py-1.5 text-center text-xs text-neutral-500 bg-white">15:00</div>
</div>

<div className="relative w-full h-10 rounded-lg overflow-hidden border border-[#191919] anim-schedule-btn flex items-center justify-center">
<span className="text-sm font-medium z-10 transition-colors">Cumprir Prazo</span>
<i className="absolute z-20 w-5 h-5 text-white anim-schedule-check" data-lucide="check"></i>
</div>

<div className="absolute top-0 left-0 z-50 pointer-events-none anim-schedule-cursor">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.76 21.36L11.44 17.15C11.66 16.95 11.95 16.85 12.24 16.85H18.5C19.19 16.85 19.56 16.03 19.1 15.5L6.75 2.5C6.35 2.08 5.5 2.37 5.5 2.94V3.21Z" fill="#191919" stroke="white" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#191919] mb-4">Otimize sua rotina, escale seu escritório e conquiste resultados.</h2>
<p className="text-lg text-[#7F919A] font-medium">A EasyJur integra todas as áreas do seu escritório em um só lugar, permitindo decisões baseadas em dados para você focar em seus clientes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-[#F9F9F9] rounded-3xl p-8 border border-neutral-100 hover:shadow-lg transition-all group bento-float bento-delay-1">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#191919]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-[#191919] mb-2">Produtividade</h3>
<p className="text-base text-[#7F919A] leading-relaxed">Automatize tarefas repetitivas, geração de documentos e ganhe horas úteis no seu dia.</p>
</div>
<div className="bg-[#F9F9F9] rounded-3xl p-8 border border-neutral-100 hover:shadow-lg transition-all group bento-float bento-delay-2">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#191919]" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-medium text-[#191919] mb-2">Segurança</h3>
<p className="text-base text-[#7F919A] leading-relaxed">Seus dados e de seus clientes protegidos com criptografia de ponta a ponta na nuvem.</p>
</div>
<div className="bg-[#F9F9F9] rounded-3xl p-8 border border-neutral-100 hover:shadow-lg transition-all group lg:col-span-2 relative overflow-hidden bento-float bento-delay-3">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#191919] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-[#191919] mb-2">Inteligência Estratégica</h3>
<p className="text-base text-[#7F919A] leading-relaxed max-w-sm">Dashboards completos e Business Intelligence nativo para decisões baseadas em dados reais.</p>
</div>
<div className="absolute bottom-0 right-0 w-48 h-32 opacity-10 flex items-end gap-2 p-4">
<div className="w-full bg-[#191919] rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-[#191919] rounded-t-sm" style={{height: '70%'}}></div>
<div className="w-full bg-[#191919] rounded-t-sm" style={{height: '100%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#141414] relative overflow-hidden border-y border-neutral-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">A plataforma de gestão jurídica mais completa do Brasil.</h2>
<p className="text-lg text-neutral-400 font-medium leading-relaxed mb-8">
                    Tudo o que você precisa em uma única solução tecnológica para advogados e departamentos jurídicos. Elimine múltiplos softwares e centralize sua operação.
                </p>
<button className="text-white border border-neutral-700 hover:bg-neutral-800 text-sm font-medium uppercase tracking-wide px-6 py-3 rounded-full transition-colors">
                    Explorar Ecossistema
                </button>
</div>
<div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center py-10">

<div className="absolute z-20 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<span className="font-semibold text-xl tracking-tight text-[#191919] uppercase">EASY<span className="text-[#E5293F]">JUR</span></span>
</div>

<div className="absolute w-[260px] h-[260px] rounded-full border border-neutral-800">
<div className="absolute inset-0 orbit-container">

<div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2">
<div className="w-14 h-14 bg-[#1A1A1A] border border-neutral-700 rounded-full flex items-center justify-center text-white orbit-item shadow-lg">
<i className="w-6 h-6 text-neutral-400" data-lucide="folder-open"></i>
</div>
</div>

<div className="absolute bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2">
<div className="w-14 h-14 bg-[#1A1A1A] border border-neutral-700 rounded-full flex items-center justify-center text-white orbit-item shadow-lg">
<i className="w-6 h-6 text-neutral-400" data-lucide="users"></i>
</div>
</div>
</div>
</div>

<div className="absolute w-[460px] h-[460px] rounded-full border border-neutral-800">
<div className="absolute inset-0 orbit-container-slow">

<div className="absolute top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2">
<div className="w-16 h-16 bg-[#1A1A1A] border border-neutral-700 rounded-full flex items-center justify-center text-white orbit-item-slow shadow-xl">
<i className="w-7 h-7 text-neutral-400" data-lucide="scale"></i>
</div>
</div>

<div className="absolute top-[20%] left-[5%] -translate-x-1/2 -translate-y-1/2">
<div className="w-16 h-16 bg-[#1A1A1A] border border-neutral-700 rounded-full flex items-center justify-center text-white orbit-item-slow shadow-xl">
<i className="w-7 h-7 text-neutral-400" data-lucide="gavel"></i>
</div>
</div>

<div className="absolute bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2">
<div className="w-16 h-16 bg-[#1A1A1A] border border-neutral-700 rounded-full flex items-center justify-center text-white orbit-item-slow shadow-xl">
<i className="w-7 h-7 text-neutral-400" data-lucide="file-signature"></i>
</div>
</div>

<div className="absolute bottom-[15%] right-[5%] translate-x-1/2 translate-y-1/2 z-30">
<div className="w-[72px] h-[72px] bg-[#E5293F] border-none rounded-full flex items-center justify-center text-white orbit-item-slow shadow-[0_0_35px_rgba(229,41,63,0.5)]">
<i className="w-8 h-8 text-white" data-lucide="calendar-check"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[480px] flex items-center justify-center w-full">

<div className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>

<div className="flex flex-col gap-4 animate-carousel-up px-2 pt-4">

<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Gestão de Processos e Prazos</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Controle total sobre os andamentos e tribunais, com alertas automáticos.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Publicações e Intimações</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Receba e trate suas notificações automaticamente em um painel kanban.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Gestão Financeira Completa</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Fluxo de caixa, honorários, DRE e emissão de notas fiscais.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">GED Avançado em Nuvem</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Armazenamento organizado e pesquisável com tecnologia OCR inteligente.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Relatórios Estratégicos</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Informações precisas para a tomada de decisão do escritório.</p>
</div>
</div>

<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Gestão de Processos e Prazos</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Controle total sobre os andamentos e tribunais, com alertas automáticos.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Publicações e Intimações</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Receba e trate suas notificações automaticamente em um painel kanban.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Gestão Financeira Completa</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Fluxo de caixa, honorários, DRE e emissão de notas fiscais.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">GED Avançado em Nuvem</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Armazenamento organizado e pesquisável com tecnologia OCR inteligente.</p>
</div>
</div>
<div className="bg-white border border-neutral-100 shadow-sm p-6 rounded-2xl flex gap-5 items-center w-full">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
<i className="text-green-500 w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#191919] mb-1">Relatórios Estratégicos</h4>
<p className="text-base text-[#7F919A] leading-relaxed">Informações precisas para a tomada de decisão do escritório.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 z-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#191919] mb-6 leading-tight">
                    Tudo o que seu escritório de advocacia precisa. A um clique de distância.
                </h2>
<p className="text-lg text-[#7F919A] font-medium mb-8">
                    Não importa o tamanho da sua banca, a EasyJur se adapta às suas necessidades oferecendo ferramentas robustas com a simplicidade que sua rotina exige.
                </p>
<div className="inline-flex items-center gap-3 bg-[#F9F9F9] p-1.5 rounded-full border border-neutral-200">
<button className="px-5 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-[#191919]">Escritórios</button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-[#7F919A] hover:text-[#191919] transition-colors">Departamentos</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#191919]"></div>
<div className="absolute right-0 top-0 h-full w-1/2 opacity-30 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-left mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#191919] via-[#191919]/95 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">Ainda tem dúvidas sobre qual software jurídico escolher?</h2>
<p className="text-lg text-neutral-400 font-medium mb-10 leading-relaxed">Converse com um de nossos especialistas e descubra na prática como a EasyJur pode transformar a operação e a gestão do seu negócio para o próximo nível.</p>
<button className="bg-white text-[#191919] text-sm font-medium tracking-wide uppercase px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors shadow-xl">
                    Falar com Especialista
                </button>
</div>

<div className="flex flex-col gap-6 w-full md:w-auto mt-8 md:mt-0 perspective-1000">
<div className="anim-float-badge bg-[#262626]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-5 w-full md:w-80">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
<i className="w-6 h-6 text-green-400" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm text-neutral-400 mb-0.5">Segurança de Dados</p>
<p className="text-base font-semibold text-white tracking-tight">ISO 27001 Certified</p>
</div>
</div>
<div className="anim-float-badge-delay bg-[#262626]/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-5 w-full md:w-80">
<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shrink-0">
<i className="w-6 h-6 text-yellow-400" data-lucide="medal"></i>
</div>
<div>
<p className="text-sm text-neutral-400 mb-0.5">Reconhecimento G2</p>
<p className="text-base font-semibold text-white tracking-tight">Líder em LegalTech 2024</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#191919] mb-4">Perguntas Frequentes</h2>
</div>
<div className="space-y-4">
<details className="group bg-[#F9F9F9] rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#191919] text-lg">
                        Como funciona o período de teste grátis?
                        <span className="transition group-open:rotate-180 bg-white p-1 rounded-full border border-neutral-200">
<i className="w-5 h-5 text-[#191919]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-[#7F919A] leading-relaxed">
                        Você tem 7 dias para testar todas as funcionalidades premium da plataforma sem necessidade de cadastrar cartão de crédito. Após o período, você escolhe o plano ideal.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#191919] text-lg">
                        O sistema possui integração com tribunais?
                        <span className="transition group-open:rotate-180 bg-white p-1 rounded-full border border-neutral-200">
<i className="w-5 h-5 text-[#191919]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-[#7F919A] leading-relaxed">
                        Sim. Integramos com mais de 250 tribunais em todo o Brasil (PJe, e-SAJ, Projudi, etc.), realizando a captura automática de andamentos e publicações em tempo real.
                    </div>
</details>
<details className="group bg-[#F9F9F9] rounded-2xl border border-neutral-100 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-[#191919] text-lg">
                        Meus dados estão seguros na nuvem?
                        <span className="transition group-open:rotate-180 bg-white p-1 rounded-full border border-neutral-200">
<i className="w-5 h-5 text-[#191919]" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-[#7F919A] leading-relaxed">
                        Absolutamente. Utilizamos servidores de alta performance com criptografia de ponta a ponta, backups diários automatizados e certificação ISO 27001, garantindo o mesmo padrão de segurança dos grandes bancos.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200/60 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="font-semibold text-2xl tracking-tight text-[#191919] uppercase flex items-center gap-1 mb-6" href="#">
<span className="text-[#E5293F]">EASY</span>JUR
                    </a>
<p className="text-base text-[#7F919A] mb-8 max-w-sm leading-relaxed">
                        Software jurídico completo com inteligência artificial nativa para modernizar a gestão do seu escritório de advocacia ou departamento jurídico.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-[#191919] hover:bg-[#E5293F] hover:text-white transition-colors border border-neutral-200" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-[#191919] hover:bg-[#E5293F] hover:text-white transition-colors border border-neutral-200" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-[#191919] hover:bg-[#E5293F] hover:text-white transition-colors border border-neutral-200" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#191919] uppercase tracking-tight mb-6">Produto</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Para Escritórios</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Para Empresas</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Planos e Preços</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors flex items-center gap-2" href="#">JurisAI <span className="bg-red-50 text-[#E5293F] text-[10px] uppercase px-2 py-0.5 rounded font-semibold tracking-wider">Novo</span></a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#191919] uppercase tracking-tight mb-6">Recursos</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Blog</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Central de Ajuda</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Materiais Ricos</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Calculadora ROI</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#191919] uppercase tracking-tight mb-6">Empresa</h4>
<ul className="space-y-4">
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Carreiras</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Termos de Uso</a></li>
<li><a className="text-base text-[#7F919A] hover:text-[#E5293F] transition-colors" href="#">Política de Privacidade</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-[#7F919A]">© 2024 EasyJur. Todos os direitos reservados.</p>
<div className="flex items-center gap-2 text-sm text-[#7F919A]">
                    Feito com <i className="w-4 h-4 text-[#E5293F] fill-[#E5293F]" data-lucide="heart"></i> no Brasil.
                </div>
</div>
</div>
</footer>


    </>
  );
}
