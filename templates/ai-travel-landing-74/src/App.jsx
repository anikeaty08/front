import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
// Particles init
particlesJS('particles-js', {
particles: {
number: { value: 40, density: { enable: true, value_area: 800 } },
color: { value: "#ffffff" },
shape: { type: "circle" },
opacity: { value: 0.2, random: true },
size: { value: 2, random: true },
line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
move: { enable: true, speed: 0.5, direction: "top", random: true, straight: false, out_mode: "out", bounce: false }
},
interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
retina_detect: true
});
// Scroll observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});



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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-100">
<div className="absolute inset-0 w-full h-full" id="particles-js"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-y-0 left-[20%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[40%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[60%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[80%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[33%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[66%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-base font-medium tracking-tighter text-white" href="#">TERRA NOVA</a>
<nav className="hidden md:flex items-center gap-1 p-1 bg-white/5 ring-1 ring-white/10 rounded-full">
<a className="px-4 py-1.5 text-xs font-normal text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors tracking-tight" href="#destinos">Destinos</a>
<a className="px-4 py-1.5 text-xs font-normal text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors tracking-tight" href="#categorias">Categorias</a>
<a className="px-4 py-1.5 text-xs font-normal text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors tracking-tight" href="#ai">Itinerários AI</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-normal text-white/70 bg-white/5 ring-1 ring-white/10 rounded-full hover:bg-white/10 transition-colors">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
          PT
        </button>
<a className="px-4 py-1.5 text-xs font-medium text-slate-950 bg-white ring-1 ring-white/20 rounded-full hover:bg-slate-200 transition-colors tracking-tight flex items-center gap-2" href="#planejar">
          Planejar Viagem
          <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</header>

<main className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">

<div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
<img alt="Terra" className="w-full h-full object-cover opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=3872&amp;auto=format&amp;fit=crop" style={{animation: 'focusReveal 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, parallaxSlow linear both', animationTimeline: 'view()'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur-sm text-xs font-normal text-white/80 mb-6" style={{animation: 'fadeSlideUp 1s ease-out 0.2s backwards'}}>
<iconify-icon className="text-white/60" height="14" icon="solar:routing-2-linear" width="14"></iconify-icon>
<span>Sistemas de Turismo de Nova Geração</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white max-w-4xl leading-[0.9]" style={{animation: 'fadeSlideUp 1s ease-out 0.4s backwards'}}>
        O Futuro das
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 mt-2">Suas Viagens.</span>
</h1>
<p className="mt-8 text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed" style={{animation: 'fadeSlideUp 1s ease-out 0.6s backwards'}}>
        Itinerários gerados por inteligência artificial, roteiros hiper-personalizados e experiências globais conectadas em uma única plataforma de turismo premium.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4" style={{animation: 'fadeSlideUp 1s ease-out 0.8s backwards'}}>
<a className="px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-medium tracking-tight hover:scale-105 transition-transform duration-300 flex items-center gap-2" href="#ai">
          Gerar Roteiro AI
          <iconify-icon height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</a>
<a className="px-6 py-3 rounded-full bg-white/5 text-white ring-1 ring-white/10 text-sm font-medium tracking-tight hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm" href="#destinos">
          Explorar Destinos
          <iconify-icon height="18" icon="solar:map-arrow-square-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</main>

<section className="relative z-20 py-32 px-6" id="categorias">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]">
            Dimensões da Jornada
          </h2>
<p className="mt-4 text-sm md:text-base text-white/50 font-light max-w-md animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.1s'}}>
            Nossas experiências são categorizadas por algoritmos que analisam seu perfil de viajante para entregar o momento perfeito.
          </p>
</div>
<a className="group inline-flex items-center text-xs font-medium tracking-tight text-white/70 hover:text-white transition-colors animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" href="#" style={{animationDelay: '0.2s'}}>
          Ver todas as categorias
          <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">

<div className="group relative h-[22rem] rounded-3xl bg-slate-900/40 backdrop-blur-sm overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-slate-900/60 hover:border-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]">
<div className="absolute inset-0 flex items-center justify-center opacity-80 preserve-3d">
<div className="relative w-32 h-32 transform transition-transform duration-700 ease-out group-hover:scale-110">

<div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[dashRotate_20s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-white/5 animate-[dashRotate_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-45">
<iconify-icon className="text-white/20 group-hover:text-blue-400 transition-colors duration-500" height="48" icon="solar:compass-linear" width="48"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col z-10 bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-blue-300 transition-colors">Expedições</h3>
<p className="mt-1 text-xs text-white/50 font-light line-clamp-2">Rotas inexploradas, trilhas remotas e contato profundo com a natureza.</p>
</div>
</div>

<div className="group relative h-[22rem] rounded-3xl bg-slate-900/40 backdrop-blur-sm overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-slate-900/60 hover:border-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 overflow-hidden flex items-center justify-center">
<div className="relative w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M-10,110 Q50,-20 110,110" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<path className="animate-[dashRotate_3s_linear_infinite]" d="M-10,110 Q50,-20 110,110" fill="none" stroke="rgba(255,255,255,0.4)" stroke-dasharray="10 100" strokeWidth="1"></path>
</svg>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-y-6 group-hover:translate-x-6">
<iconify-icon className="text-white/20 group-hover:text-emerald-400 transition-colors transform rotate-45" height="40" icon="solar:plain-2-linear" width="40"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col z-10 bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-emerald-300 transition-colors">Conexões Globais</h3>
<p className="mt-1 text-xs text-white/50 font-light line-clamp-2">Logística aérea inteligente otimizada para conforto e eficiência de tempo.</p>
</div>
</div>

<div className="group relative h-[22rem] rounded-3xl bg-slate-900/40 backdrop-blur-sm overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-slate-900/60 hover:border-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 flex items-center justify-center preserve-3d overflow-hidden">
<div className="relative transform rotate-x-[55deg] rotate-z-[45deg] scale-75 group-hover:scale-90 transition-transform duration-700 ease-out">

<div className="w-40 h-40 border border-white/10 grid grid-cols-3 grid-rows-3 bg-white/5 shadow-2xl relative">
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div>
<div className="border-r border-b border-white/5 bg-amber-500/10 group-hover:bg-amber-500/30 transition-colors duration-500 relative" style={{transform: 'translateZ(20px)'}}>
<div className="absolute inset-0 border border-amber-500/30"></div>
</div>
<div className="border-b border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div></div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
<iconify-icon className="text-white/20 group-hover:text-amber-400 transition-colors" height="32" icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col z-10 bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-amber-300 transition-colors">Estadias Premium</h3>
<p className="mt-1 text-xs text-white/50 font-light line-clamp-2">Curadoria de hotéis boutique, resorts ecológicos e vilas exclusivas.</p>
</div>
</div>

<div className="group relative h-[22rem] rounded-3xl bg-slate-900/40 backdrop-blur-sm overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-slate-900/60 hover:border-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 flex items-center justify-center opacity-80 preserve-3d">
<div className="relative w-32 h-32 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2">

<div className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl transform -translate-x-2 translate-y-2 -rotate-6 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-x-6 group-hover:rotate-[-12deg]"></div>
<div className="absolute inset-0 bg-white/10 border border-white/15 rounded-2xl transform translate-x-2 -translate-y-2 rotate-6 backdrop-blur-md transition-transform duration-500 group-hover:translate-x-6 group-hover:rotate-[12deg] flex items-center justify-center shadow-2xl">
<iconify-icon className="text-white/20 group-hover:text-purple-400 transition-colors" height="40" icon="solar:ticket-linear" width="40"></iconify-icon>
</div>
<div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/20 transition-colors"></div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 flex flex-col z-10 bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-purple-300 transition-colors">Cultura &amp; Eventos</h3>
<p className="mt-1 text-xs text-white/50 font-light line-clamp-2">Acesso privilegiado a eventos globais, museus e experiências locais imersivas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-24 px-6 overflow-hidden" id="destinos">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-[10px] font-medium text-white/70 uppercase tracking-widest animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]">
          Ecossistema
        </div>
<h2 className="mt-4 text-3xl md:text-5xl font-light tracking-tighter text-white animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.1s'}}>
          Destinos &amp; Inteligência
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="group relative h-80 rounded-3xl overflow-hidden ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]">
<img alt="Tóquio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-end">
<span className="px-2.5 py-1 text-[10px] font-medium bg-white/10 backdrop-blur-md text-white rounded-full ring-1 ring-white/20">Ásia</span>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-white mb-1">Tóquio, Japão</h3>
<p className="text-xs text-white/60 font-light flex items-center gap-2">
<iconify-icon height="14" icon="solar:sun-fog-linear" width="14"></iconify-icon>
                  Tecnologia e Tradição
                </p>
</div>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" style={{animationDelay: '0.1s'}}>
<img alt="Paris" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-end">
<span className="px-2.5 py-1 text-[10px] font-medium bg-white/10 backdrop-blur-md text-white rounded-full ring-1 ring-white/20">Europa</span>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight text-white mb-1">Paris, França</h3>
<p className="text-xs text-white/60 font-light flex items-center gap-2">
<iconify-icon height="14" icon="solar:cup-hot-linear" width="14"></iconify-icon>
                  Cultura e Gastronomia
                </p>
</div>
</div>
</div>
</div>

<div className="relative h-80 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 flex flex-col animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]" id="ai" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<span className="px-2 py-1 text-[9px] font-medium uppercase tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">Ativo</span>
</div>
<h3 className="text-xl font-light tracking-tight text-white mb-2">Motor de Itinerário AI</h3>
<p className="text-xs text-white/50 font-light mb-6 flex-1">
            Gere roteiros diários perfeitamente sincronizados com distâncias, horários e preferências pessoais em milissegundos.
          </p>

<div className="relative h-20 w-full bg-slate-950/50 rounded-lg border border-white/5 overflow-hidden mb-4">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

<div className="absolute top-3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" style={{animation: 'dataFlowX 2.5s linear infinite'}}></div>
<div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" style={{animation: 'dataFlowX 3s linear infinite 1s'}}></div>
<div className="absolute top-13 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" style={{animation: 'dataFlowX 2s linear infinite 0.5s'}}></div>

<div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
<div className="absolute top-1/2 left-2/4 w-1.5 h-1.5 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
<div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
<button className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors ring-1 ring-white/10 flex items-center justify-center gap-2">
            Iniciar Geração
            <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-24 px-6 border-t border-white/5 mt-12 bg-gradient-to-b from-transparent to-slate-900/50">
<div className="max-w-3xl mx-auto text-center animate-on-scroll [animation:fadeSlideUp_1s_ease-out_both]">
<iconify-icon className="text-white/20 mb-6 mx-auto" height="48" icon="solar:passport-minimalistic-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-6">Pronto para redefinir sua jornada?</h2>
<p className="text-sm md:text-base text-white/50 font-light mb-10">
        Junte-se à próxima geração de viajantes. Acesso antecipado à nossa plataforma de arquitetura de viagens.
      </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
<input className="flex-1 bg-slate-950 border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 placeholder-white/30 transition-all" placeholder="Seu endereço de e-mail" type="email"/>
<button className="bg-white text-slate-950 px-6 py-3 rounded-full text-sm font-medium tracking-tight hover:bg-slate-200 transition-colors whitespace-nowrap" type="button">
          Solicitar Acesso
        </button>
</form>
</div>
</section>

<footer className="relative z-20 border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-sm font-medium tracking-tighter text-white" href="#">TERRA NOVA</a>
<p className="mt-4 text-xs text-white/40 font-light max-w-xs leading-relaxed">
          Infraestrutura digital premium para design de viagens, roteirização AI e gestão de experiências globais.
        </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Plataforma</h4>
<ul className="space-y-2">
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Motor AI</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Destinos</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Hospedagens</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Empresa</h4>
<ul className="space-y-2">
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Sustentabilidade</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Privacidade</a></li>
<li><a className="text-xs text-white/50 hover:text-white transition-colors" href="#">Termos de Uso</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-white/30 font-light">© 2024 Terra Nova Systems. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 text-white/40">
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="16" icon="solar:map-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
