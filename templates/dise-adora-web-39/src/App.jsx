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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-white font-semibold tracking-tight text-lg">CECILIA VIVAS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#problema">El Problema</a>
<a className="hover:text-white transition-colors" href="#solucion">Solución</a>
<a className="hover:text-white transition-colors" href="#proceso">Proceso</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors" href="#contacto">
                Agendar contacto
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible para nuevos proyectos
            </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Páginas web que venden,<br/>
<span className="text-zinc-500">posicionan y escalan.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Diseño estratégico de alto nivel para marcas personales y empresas que buscan resultados reales. Convertimos visitantes en clientes con estética premium y psicología de ventas.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="h-12 px-8 rounded-full bg-white text-zinc-950 font-medium text-sm flex items-center gap-2 hover:bg-zinc-200 transition-all w-full sm:w-auto justify-center" href="#contacto">
                    Solicitar propuesta
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
<a className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center" href="#portfolio">
                    Ver modelos
                </a>
</div>

<div className="relative max-w-4xl mx-auto mt-12 perspective-[1000px]">
<div className="relative bg-zinc-900 border border-white/10 rounded-t-xl overflow-hidden shadow-2xl shadow-indigo-500/10 transform rotate-x-12">

<div className="h-8 border-b border-white/5 bg-zinc-900 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
<div className="ml-4 w-64 h-4 bg-zinc-800 rounded-full opacity-50"></div>
</div>

<div className="p-8 grid grid-cols-12 gap-6 bg-zinc-950 aspect-[16/9]">
<div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-4">
<div className="h-8 w-3/4 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg"></div>
<div className="h-8 w-1/2 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg"></div>
<div className="h-4 w-full bg-zinc-900 rounded mt-4"></div>
<div className="h-4 w-5/6 bg-zinc-900 rounded"></div>
<div className="flex gap-3 mt-6">
<div className="h-10 w-32 bg-indigo-600 rounded-lg"></div>
<div className="h-10 w-32 border border-zinc-800 rounded-lg"></div>
</div>
</div>
<div className="hidden lg:block lg:col-span-5 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-xl border border-white/5"></div>
<div className="absolute top-4 right-4 bg-zinc-900 p-3 rounded-lg border border-white/10 shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="space-y-1">
<div className="w-16 h-2 bg-zinc-700 rounded"></div>
<div className="w-10 h-2 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-950 border-b border-white/5" id="problema">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Tu web actual te está costando clientes</h2>
<p className="text-zinc-400">
                    La mayoría de las páginas web son invisibles para el mercado. Diseño amateur, mensajes confusos y tecnología obsoleta destruyen la confianza de tus prospectos en segundos.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-red-400" data-icon="lucide:ban" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Diseño Amateur</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Plantillas genéricas que gritan "principiante". Si tu web se ve barata, tus clientes asumirán que tu servicio también lo es.
                    </p>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-orange-400" data-icon="lucide:message-square-warning" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Mensaje Confuso</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Copy que no conecta. Visitantes que entran y salen sin entender qué haces ni cómo puedes ayudarlos a resolver sus problemas.
                    </p>
</div>

<div className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-zinc-400" data-icon="lucide:mouse-pointer-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">Cero Conversión</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Sin estrategia de ventas. Una "bonita tarjeta de presentación" digital que no captura leads, no agenda llamadas y no vende.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="solucion">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-medium text-indigo-400 mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                    La Solución Estratégica
                </div>
<h2 className="text-3xl lg:text-4xl font-medium text-white mb-6 tracking-tight">
                    Más que diseño, un sistema de autoridad digital.
                </h2>
<div className="space-y-6 text-zinc-400">
<p>
                        No vendo "páginas web". Construyo activos digitales diseñados para elevar tu percepción de valor en el mercado.
                    </p>
<p>
                        Mi enfoque combina <strong className="text-white font-medium">psicología de usuario (UX)</strong>, <strong className="text-white font-medium">copywriting persuasivo</strong> y <strong className="text-white font-medium">diseño de interfaz (UI) premium</strong>. El resultado es una plataforma que trabaja por ti las 24 horas, filtrando curiosos y atrayendo clientes calificados.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">Velocidad optimizada</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">UX de clase mundial</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">Diseño Mobile-First</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-zinc-300">Estructura SEO</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-50 rounded-full"></div>
<div className="relative glass rounded-xl border border-white/10 p-1">
<div className="bg-zinc-950 rounded-lg p-8 space-y-8">

<div className="flex justify-between items-end border-b border-zinc-800 pb-4">
<div>
<div className="text-xs text-zinc-500 mb-1">Visitantes</div>
<div className="text-2xl font-medium text-white">+124%</div>
</div>
<div className="h-8 w-24 bg-gradient-to-t from-emerald-500/20 to-transparent rounded"></div>
</div>
<div className="flex justify-between items-end border-b border-zinc-800 pb-4">
<div>
<div className="text-xs text-zinc-500 mb-1">Conversión</div>
<div className="text-2xl font-medium text-white">4.8%</div>
</div>
<div className="h-8 w-24 bg-gradient-to-t from-indigo-500/20 to-transparent rounded"></div>
</div>
<div className="pt-2">
<div className="flex items-center gap-4 p-4 rounded bg-zinc-900 border border-zinc-800">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
<span className="iconify text-black" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<div className="text-sm text-white font-medium">Nuevo Lead Calificado</div>
<div className="text-xs text-zinc-500">Hace 2 minutos desde Sitio Web</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-y border-white/5" id="portfolio">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Especialización por Industria</h2>
<p className="text-zinc-400 mt-4 max-w-xl mx-auto">Modelos diseñados específicamente para las necesidades de cada sector.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-indigo-500/50 transition-colors duration-500">
<div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/30 via-zinc-900 to-zinc-950"></div>
<div className="relative z-10 w-2/3 space-y-2 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="h-3 w-1/3 bg-white rounded-full mx-auto"></div>
<div className="h-2 w-2/3 bg-zinc-700 rounded-full mx-auto"></div>
<div className="h-8 w-24 bg-indigo-500 rounded mx-auto mt-4"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white">Landing Page de Servicios</h3>
<p className="text-sm text-zinc-500 mt-2">Optimizada para campañas de ads. Foco único: generar el lead.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-indigo-500/50 transition-colors duration-500">
<div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-900 to-zinc-950"></div>
<div className="relative z-10 w-3/4 grid grid-cols-3 gap-2 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="col-span-3 h-32 border border-white/10 rounded bg-zinc-800/50"></div>
<div className="h-20 border border-white/10 rounded bg-zinc-800/50"></div>
<div className="h-20 border border-white/10 rounded bg-zinc-800/50"></div>
<div className="h-20 border border-white/10 rounded bg-zinc-800/50"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white">Web Corporativa Premium</h3>
<p className="text-sm text-zinc-500 mt-2">Para empresas establecidas. Transmite solidez, historia y estructura.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-indigo-500/50 transition-colors duration-500">
<div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-900 to-zinc-950"></div>
<div className="relative z-10 flex gap-4 items-center w-2/3 opacity-80 group-hover:scale-105 transition-transform duration-500">
<div className="w-20 h-20 rounded-full border border-white/20 bg-zinc-800"></div>
<div className="space-y-2 flex-1">
<div className="h-3 w-full bg-zinc-700 rounded-full"></div>
<div className="h-3 w-3/4 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white">Marca Personal &amp; Consultores</h3>
<p className="text-sm text-zinc-500 mt-2">Eleva tu perfil de experto. Ideal para coaches, speakers y consultores.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-indigo-500/50 transition-colors duration-500">
<div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-zinc-900 to-zinc-950"></div>
<div className="relative z-10 w-2/3 p-4 border border-white/10 rounded-lg bg-zinc-950 shadow-2xl group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-1 mb-2">
<div className="w-1 h-1 rounded-full bg-zinc-600"></div>
<div className="w-1 h-1 rounded-full bg-zinc-600"></div>
</div>
<div className="h-2 w-full bg-zinc-800 rounded mb-1"></div>
<div className="h-2 w-1/2 bg-indigo-500/50 rounded"></div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white">Estilo SaaS / Tecnología / IA</h3>
<p className="text-sm text-zinc-500 mt-2">Estética moderna, modo oscuro, gradientes sutiles y futurismo limpio.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-b border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-10 text-center">Todo lo que incluye tu proyecto</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Diseño Web Profesional</h4>
<p className="text-xs text-zinc-500 mt-1">Estética única alineada a tu marca, sin plantillas repetidas.</p>
</div>
</div>

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Copywriting Estratégico</h4>
<p className="text-xs text-zinc-500 mt-1">Textos redactados para persuadir y vender, no solo para rellenar.</p>
</div>
</div>

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Diseño Responsive</h4>
<p className="text-xs text-zinc-500 mt-1">Experiencia perfecta en celular, tablet y escritorio.</p>
</div>
</div>

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Optimización SEO Básico</h4>
<p className="text-xs text-zinc-500 mt-1">Estructura correcta para que Google entienda tu sitio.</p>
</div>
</div>

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Integración WhatsApp &amp; Email</h4>
<p className="text-xs text-zinc-500 mt-1">Botones directos para capturar leads al instante.</p>
</div>
</div>

<div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-zinc-900/30">
<span className="iconify text-emerald-500 mt-0.5" data-icon="lucide:check" data-width="18"></span>
<div>
<h4 className="text-white text-sm font-medium">Configuración Hosting/Dominio</h4>
<p className="text-xs text-zinc-500 mt-1">Me encargo de la parte técnica para que no pierdas tiempo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-indigo-500/10 blur-3xl"></div>
<div className="relative border border-white/10 bg-zinc-900 p-8 rounded-2xl">
<span className="iconify text-white mb-4" data-icon="lucide:trending-up" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2">Visión de Negocio</h3>
<p className="text-sm text-zinc-400">
                        La mayoría de diseñadores solo saben hacer que las cosas se vean "bonitas". Yo entiendo de embudos, objeciones de venta y rentabilidad. Tu web no es un adorno, es una herramienta de facturación.
                    </p>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">¿Por qué este servicio no es genérico?</h2>
<div className="space-y-6">
<p className="text-zinc-400 leading-relaxed">
                        En un mar de plantillas idénticas y soluciones automáticas, la personalización estratégica es lo que separa a las marcas premium del resto.
                    </p>
<p className="text-zinc-400 leading-relaxed">
                        No subcontrato calidad. Trabajo 1 a 1 contigo para traducir la esencia de tu negocio en una interfaz digital que genere <span className="text-white font-medium">confianza inmediata</span>.
                    </p>
<div className="pt-4">
<a className="text-white font-medium border-b border-indigo-500 pb-0.5 hover:text-indigo-400 transition-colors" href="#contacto">Hablemos de tu visión →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-white/5" id="proceso">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-16 tracking-tight">Metodología de Trabajo</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">

<div className="relative p-6 border border-white/5 bg-zinc-950 rounded-xl hover:border-indigo-500/30 transition-colors">
<div className="text-xs font-mono text-indigo-500 mb-2">01</div>
<h3 className="text-white font-medium mb-2">Diagnóstico</h3>
<p className="text-xs text-zinc-500">Entendemos tu negocio, objetivos y cliente ideal.</p>
</div>

<div className="relative p-6 border border-white/5 bg-zinc-950 rounded-xl hover:border-indigo-500/30 transition-colors">
<div className="text-xs font-mono text-indigo-500 mb-2">02</div>
<h3 className="text-white font-medium mb-2">Estrategia</h3>
<p className="text-xs text-zinc-500">Definimos estructura, copy y flujo de navegación.</p>
</div>

<div className="relative p-6 border border-white/5 bg-zinc-950 rounded-xl hover:border-indigo-500/30 transition-colors">
<div className="text-xs font-mono text-indigo-500 mb-2">03</div>
<h3 className="text-white font-medium mb-2">Diseño UI</h3>
<p className="text-xs text-zinc-500">Creamos la propuesta visual de alto impacto.</p>
</div>

<div className="relative p-6 border border-white/5 bg-zinc-950 rounded-xl hover:border-indigo-500/30 transition-colors">
<div className="text-xs font-mono text-indigo-500 mb-2">04</div>
<h3 className="text-white font-medium mb-2">Desarrollo</h3>
<p className="text-xs text-zinc-500">Codificación limpia, responsive y veloz.</p>
</div>

<div className="relative p-6 border border-white/5 bg-zinc-950 rounded-xl hover:border-indigo-500/30 transition-colors">
<div className="text-xs font-mono text-indigo-500 mb-2">05</div>
<h3 className="text-white font-medium mb-2">Lanzamiento</h3>
<p className="text-xs text-zinc-500">Pruebas finales, puesta en marcha y optimización.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contacto">
<div className="absolute inset-0 bg-zinc-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">¿Listo para elevar tu estándar digital?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                No dejes que una web mediocre frene tu crecimiento. Agenda una conversación breve para evaluar si somos el fit correcto para tu proyecto.
            </p>
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-md mx-auto shadow-2xl">
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xl font-medium text-white mb-2">
                        CV
                    </div>
<h3 className="text-xl font-semibold text-white">Cecilia Vivas</h3>
<p className="text-sm text-zinc-400 mb-4">Especialista en Diseño &amp; Estrategia Web</p>
<a className="w-full h-12 rounded-lg bg-white text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all" href="https://wa.me/541169042561" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                        Hablemos por WhatsApp
                    </a>
<a className="w-full h-12 rounded-lg border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all" href="mailto:vivascecilia1973@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                        Enviar Email
                    </a>
<div className="mt-4 pt-4 border-t border-white/5 w-full flex flex-col gap-1">
<span className="text-xs text-zinc-500">+54 11 6904 2561</span>
<span className="text-xs text-zinc-500">vivascecilia1973@gmail.com</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:layers" data-width="20"></span>
<span className="text-zinc-300 font-medium tracking-tight text-sm">CECILIA VIVAS</span>
</div>
<div className="text-xs text-zinc-600">
                © 2024 Cecilia Vivas. Todos los derechos reservados.
            </div>
<div className="flex gap-6">

</div>
</div>
</footer>

    </>
  );
}
