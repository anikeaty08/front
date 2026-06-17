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



        // Initialize Icons
        lucide.createIcons();

        // Simple paralax effect for blobs
        document.addEventListener('mousemove', (e) => {
            const blobs = document.querySelectorAll('.animate-pulse-glow');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 20;
                blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    
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
      

<div className="noise-bg"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-lime-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-lime-400 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-white text-lg">PADEL<span className="text-lime-400">UY</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Canchas</a>
<a className="hover:text-white transition-colors" href="#">Torneos</a>
<a className="hover:text-white transition-colors" href="#">Comunidad</a>
<a className="hover:text-white transition-colors" href="#">Ranking</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors">Iniciar Sesión</button>
<button className="bg-white text-black px-4 py-2 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors tracking-tight">
                    Descargar App
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/20 bg-lime-500/5 text-lime-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    Disponible en Montevideo y Punta del Este
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                    El padel uruguayo,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400 text-glow">conectado.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                    Reservá canchas en segundos, encontrá rivales de tu nivel y subí en el ranking nacional. La comunidad más grande de Uruguay te espera.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative flex items-center gap-3 bg-lime-400 text-black px-6 py-3.5 rounded-lg overflow-hidden transition-all hover:pr-8 hover:bg-lime-300">
<span className="relative z-10 text-sm font-semibold tracking-tight">Empezar ahora</span>
<i className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center gap-3 px-6 py-3.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-neutral-400" data-lucide="play-circle"></i>
<span className="text-sm font-medium">Ver demo</span>
</button>
</div>
<div className="flex items-center gap-4 pt-4 text-neutral-500 text-xs">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">JP</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-[10px] text-white">MC</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-600 flex items-center justify-center text-[10px] text-white">LS</div>
</div>
<p>+2.000 jugadores activos esta semana</p>
</div>
</div>

<div className="relative z-10 lg:h-[600px] flex items-center justify-center perspective-[2000px]">

<div className="absolute top-10 right-10 p-4 glass-panel rounded-xl animate-float-delayed z-20 shadow-2xl shadow-lime-900/20">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-neutral-300 font-medium">Partido Confirmado</span>
</div>
<div className="flex items-center gap-4">
<div className="text-sm font-semibold text-white">Club Carrasco</div>
<div className="text-xs text-neutral-400">19:00 hs</div>
</div>
</div>
<div className="absolute bottom-20 left-0 p-4 glass-panel rounded-xl animate-float z-20 shadow-2xl">
<div className="flex items-center gap-3 mb-3">
<i className="w-4 h-4 text-yellow-400" data-lucide="trophy"></i>
<span className="text-xs text-neutral-300 font-medium">Ranking Mensual</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between w-48 bg-white/5 p-2 rounded">
<span className="text-xs text-white">1. Sanyo Gutiérrez</span>
<span className="text-xs text-lime-400 font-mono">2450 pts</span>
</div>
<div className="flex items-center justify-between w-48 p-2 rounded">
<span className="text-xs text-neutral-400">2. Agustín Tapia</span>
<span className="text-xs text-neutral-500 font-mono">2300 pts</span>
</div>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-black border-[8px] border-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out">

<div className="w-full h-full bg-neutral-900 flex flex-col relative">

<div className="p-6 pt-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10">
<div>
<h3 className="text-white text-lg font-semibold tracking-tight">Hola, Santi</h3>
<p className="text-neutral-400 text-xs">Listo para jugar?</p>
</div>
<div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-xs">S</div>
</div>

<div className="flex-1 bg-neutral-800 relative overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/4 left-1/3 w-8 h-8 -ml-4 -mt-4 bg-lime-500 rounded-full flex items-center justify-center shadow-lg shadow-lime-500/30 animate-pulse">
<i className="w-4 h-4 text-black fill-current" data-lucide="map-pin"></i>
</div>
<div className="absolute top-1/2 left-2/3 w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center border border-neutral-600">
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
</div>

<div className="absolute bottom-0 w-full bg-neutral-950 rounded-t-3xl p-6 pb-12 glass-panel border-t border-white/10">
<div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-6"></div>
<h4 className="text-white font-medium mb-4">Canchas cercanas</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-lime-400" data-lucide="zap"></i>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Padel Cristal</div>
<div className="text-[10px] text-neutral-400">Pocitos • A 1.2km</div>
</div>
<div className="text-xs font-semibold text-white bg-lime-500/20 text-lime-400 px-2 py-1 rounded">$1200</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-500" data-lucide="activity"></i>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">La Tahona</div>
<div className="text-[10px] text-neutral-400">Canelones • A 8km</div>
</div>
<button className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center">
<i className="w-3 h-3 text-neutral-400" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="w-full bg-lime-400 text-black py-3 overflow-hidden border-y border-lime-500 relative z-20">
<div className="flex w-[200%] animate-drift whitespace-nowrap">
<div className="flex items-center gap-8 mx-4">
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Torneos Abiertos</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Clases Particulares</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Mercado de Palas</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Ranking Nacional</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Matchmaking IA</span>
</div>
<div className="flex items-center gap-8 mx-4">
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Torneos Abiertos</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Clases Particulares</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Mercado de Palas</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Ranking Nacional</span>
<span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2"><i className="w-4 h-4 fill-black" data-lucide="star"></i> Matchmaking IA</span>
</div>
</div>
</div>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Todo lo que necesitás para jugar.</h2>
<p className="text-neutral-400 max-w-xl">Diseñado para la comunidad uruguaya, desde amateurs hasta profesionales.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-lime-400" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Matchmaking Inteligente</h3>
<p className="text-sm text-neutral-400 max-w-md">No tenés pareja? Nuestro algoritmo te encuentra un compañero de tu mismo nivel basado en tus estadísticas previas.</p>
</div>

<div className="w-full bg-neutral-900/50 rounded-xl border border-white/5 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-lime-500 animate-pulse"></div>
<span className="text-xs text-white">Buscando jugador...</span>
</div>
<div className="flex gap-1">
<span className="block w-1 h-3 bg-lime-500/40 rounded-sm"></span>
<span className="block w-1 h-3 bg-lime-500/60 rounded-sm"></span>
<span className="block w-1 h-3 bg-lime-500 rounded-sm"></span>
<span className="block w-1 h-3 bg-lime-500/60 rounded-sm"></span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="relative z-20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="credit-card"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pagos Divididos</h3>
<p className="text-sm text-neutral-400">Olvidate de juntar efectivo. Pagá tu parte desde la app.</p>
</div>

<div className="absolute bottom-6 right-6 z-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="transform rotate-12 bg-lime-400 text-black font-bold text-xs px-2 py-1 rounded shadow-lg">PAGADO</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-20">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-400" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Ranking Nacional</h3>
<p className="text-sm text-neutral-400">Competí en ligas locales y mirá tu progreso en tiempo real.</p>
</div>
<div className="mt-6 space-y-2 relative z-20">
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[70%]"></div>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 w-[85%]"></div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group flex items-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
<div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">Más de 50 clubes adheridos</h3>
<p className="text-sm text-neutral-400 max-w-sm">Desde el Carrasco Lawn Tennis hasta clubes en el interior. Si hay cancha, está en PadelUY.</p>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-neutral-300">Montevideo</div>
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-neutral-300">Maldonado</div>
<div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-neutral-300">+ Interior</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative bg-black/40">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
<div className="text-center md:text-left">
<div className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-1">15K+</div>
<div className="text-sm text-neutral-500 font-medium">Partidos organizados</div>
</div>
<div className="h-12 w-px bg-white/10 hidden md:block"></div>
<div className="text-center md:text-left">
<div className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-1">98%</div>
<div className="text-sm text-neutral-500 font-medium">Usuarios satisfechos</div>
</div>
<div className="h-12 w-px bg-white/10 hidden md:block"></div>
<div className="text-center md:text-left">
<div className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-1">24/7</div>
<div className="text-sm text-neutral-500 font-medium">Soporte local</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-lime-900/10"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-block p-3 rounded-2xl bg-lime-500/10 mb-6 rotate-12">
<i className="w-8 h-8 text-lime-400" data-lucide="smartphone"></i>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                Tu próximo partido empieza acá.
            </h2>
<p className="text-neutral-400 text-lg mb-10">
                Unite a la comunidad de padel que está cambiando la forma de jugar en Uruguay. 
                Gratis para jugadores.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-neutral-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
<i className="w-5 h-5 fill-black" data-lucide="apple"></i> App Store
                </button>
<button className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5 fill-white" data-lucide="play"></i> Play Store
                </button>
</div>
<div className="mt-8 text-xs text-neutral-600">
                Requiere iOS 14+ o Android 10+. <br/> Hecho con <span className="text-red-500">♥</span> en Uruguay.
            </div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-lime-400 rounded-sm"></div>
<span className="font-semibold tracking-tight text-white text-sm">PADELUY</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Clubes</a>
<a className="hover:text-white transition-colors" href="#">Nosotros</a>
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Contacto</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>


    </>
  );
}
