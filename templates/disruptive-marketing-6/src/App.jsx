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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex flex-col leading-none tracking-tighter">
<span className="text-2xl font-semibold text-[#FFFDD0] group-hover:text-[#DFFF00] transition-colors">SOCIAL</span>
<span className="text-2xl font-semibold text-[#FFFDD0]">CHAOS</span>
</div>
<div className="h-8 w-1 bg-[#DFFF00] rotate-12 ml-1"></div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-lg font-medium text-white/80 hover:text-[#DFFF00] transition-colors" href="#services">Servicios</a>
<a className="text-lg font-medium text-white/80 hover:text-[#DFFF00] transition-colors" href="#vibe">The Vibe</a>
<a className="text-lg font-medium text-white/80 hover:text-[#DFFF00] transition-colors" href="#work">Portafolio</a>
</div>

<button className="hidden md:flex items-center gap-2 bg-[#DFFF00] text-[#FF4D80] px-6 py-2.5 rounded-full font-medium hover:bg-[#fff] transition-all hover:scale-105 active:scale-95">
<span>Let's Talk</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden text-[#FFFDD0]">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-20 -left-20 w-96 h-96 bg-[#DFFF00] rounded-full mix-blend-overlay filter blur-[128px] opacity-50"></div>
<div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#85004B] rounded-full mix-blend-multiply filter blur-[128px] opacity-60"></div>

<div className="absolute inset-0 opacity-5 font-semibold text-9xl tracking-tighter text-[#FFFDD0] whitespace-nowrap select-none rotate-12 scale-150 transform translate-y-1/2">
                CHAOS CHAOS CHAOS CHAOS CHAOS
            </div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DFFF00]/30 bg-[#DFFF00]/10 backdrop-blur-sm mb-8">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFFF00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#DFFF00]"></span>
</span>
<span className="text-sm font-medium text-[#DFFF00] tracking-wide uppercase">Nueva Imagen 2024</span>
</div>
<h1 className="text-6xl md:text-8xl tracking-tight font-medium text-[#FFFDD0] leading-[0.9] mb-6">
                    MARKETING <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFFF00] to-[#ffffff]">DISRUPTIVO</span>
</h1>
<p className="text-xl md:text-2xl text-white/90 max-w-lg mb-10 font-medium leading-relaxed">
                    Pink &amp; Yellow are the new Black. Transformamos el caos social en estrategias digitales que rompen moldes.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-[#FFFDD0] text-[#FF4D80] rounded-2xl font-medium text-lg hover:bg-[#DFFF00] transition-all hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2">
                        Iniciar Proyecto
                        <i className="w-5 h-5" data-lucide="sparkles"></i>
</button>
<button className="px-8 py-4 border border-white/30 text-white rounded-2xl font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        Ver Showreel
                        <i className="w-5 h-5" data-lucide="play-circle"></i>
</button>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">
<div className="relative w-full aspect-square rounded-[3rem] border border-white/20 glass-panel p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700 neon-shadow group">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem]"></div>

<div className="h-full w-full bg-[#FF4D80] rounded-3xl overflow-hidden relative flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496449903678-6806db67af67?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-50 mix-blend-multiply"></div>
<div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
<h2 className="text-[#DFFF00] text-7xl font-semibold tracking-tighter drop-shadow-lg font-sans">GIRLY<br/>POP</h2>
<div className="mt-4 bg-[#FFFDD0] text-[#FF4D80] px-4 py-1 text-sm font-semibold inline-block transform -rotate-6">EST. 2024</div>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-[#DFFF00] text-[#FF4D80] p-6 rounded-full font-semibold text-xl shadow-lg transform rotate-12 animate-bounce">
                        NEW!
                    </div>
</div>
</div>
</div>
</main>

<div className="w-full bg-[#DFFF00] py-4 overflow-hidden border-y-4 border-[#FFFDD0] rotate-1 scale-105 z-20 relative">
<div className="flex animate-scroll whitespace-nowrap">
<div className="flex gap-8 items-center text-[#FF4D80] text-3xl font-semibold tracking-tight uppercase px-4">
<span>Social Chaos</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="zap"></i>
<span>Marketing Disruptivo</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="heart"></i>
<span>Pink &amp; Yellow</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="star"></i>
<span>Viral Content</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="zap"></i>
</div>

<div className="flex gap-8 items-center text-[#FF4D80] text-3xl font-semibold tracking-tight uppercase px-4">
<span>Social Chaos</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="zap"></i>
<span>Marketing Disruptivo</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="heart"></i>
<span>Pink &amp; Yellow</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="star"></i>
<span>Viral Content</span>
<i className="w-8 h-8 fill-[#FF4D80]" data-lucide="zap"></i>
</div>
</div>
</div>

<div className="relative w-full bg-red-600 py-6 z-30 shadow-[0_0_40px_rgba(220,38,38,0.5)] border-b border-red-800">

<div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 20px, transparent 20px, transparent 40px)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
<div className="text-[#DFFF00] text-2xl md:text-3xl font-semibold tracking-tight animate-pulse flex items-center gap-3">
<span className="text-3xl md:text-4xl">⚠️</span>
<span className="italic">*PRECAUCIÓN*</span>
<span className="text-3xl md:text-4xl">⚠️</span>
</div>
<div className="text-white text-xl md:text-2xl font-medium tracking-tight uppercase drop-shadow-md">
                    Creadores Altamente Recomendados
                </div>
</div>
</div>
</div>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h3 className="text-[#DFFF00] font-medium text-lg tracking-wide uppercase mb-4">Nuestros Servicios</h3>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#FFFDD0]">Creamos caos del bueno.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#DFFF00]/50 transition-all duration-300 hover:-translate-y-2">
<div className="w-14 h-14 bg-[#DFFF00] rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform">
<i className="w-8 h-8 text-[#FF4D80]" data-lucide="instagram"></i>
</div>
<h3 className="text-2xl font-medium mb-4 text-[#FFFDD0] tracking-tight">Social Media</h3>
<p className="text-lg text-white/70 leading-relaxed">
                        Gestión de comunidades que aman tu marca. Contenido que se comparte, se guarda y se comenta.
                    </p>
</div>

<div className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#DFFF00]/50 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-white/5 to-transparent">
<div className="w-14 h-14 bg-[#FFFDD0] rounded-2xl flex items-center justify-center mb-8 -rotate-2 group-hover:-rotate-12 transition-transform">
<i className="w-8 h-8 text-[#FF4D80]" data-lucide="video"></i>
</div>
<h3 className="text-2xl font-medium mb-4 text-[#FFFDD0] tracking-tight">Content Production</h3>
<p className="text-lg text-white/70 leading-relaxed">
                        Reels, TikToks y fotografía con estética "High Girly". Producción audiovisual de alto impacto.
                    </p>
</div>

<div className="group p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#DFFF00]/50 transition-all duration-300 hover:-translate-y-2">
<div className="w-14 h-14 bg-[#FF85B3] rounded-2xl flex items-center justify-center mb-8 rotate-1 group-hover:rotate-6 transition-transform">
<i className="w-8 h-8 text-[#FFFDD0]" data-lucide="megaphone"></i>
</div>
<h3 className="text-2xl font-medium mb-4 text-[#FFFDD0] tracking-tight">Paid Media</h3>
<p className="text-lg text-white/70 leading-relaxed">
                        Campañas de anuncios que convierten. Optimizamos tu presupuesto para el máximo retorno.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/10 bg-black/10 backdrop-blur-sm" id="vibe">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="relative">
<div className="absolute -inset-4 bg-[#DFFF00] rounded-[2rem] rotate-3 opacity-80"></div>
<img alt="Vibe" className="relative rounded-[1.8rem] w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 transform -rotate-3 border-4 border-[#FFFDD0]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex-1 space-y-8">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#DFFF00]">
                    NOT YOUR AVERAGE <br/>
<span className="text-[#FFFDD0]">AGENCY.</span>
</h2>
<p className="text-xl text-white/80 leading-relaxed">
                    Creemos en el poder de lo visualmente impactante. En un mundo gris, elegimos ser <strong className="text-[#FFFDD0] font-medium">Neon Yellow</strong>. Nuestra metodología combina datos duros con creatividad explosiva.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-lg font-medium">
<i className="text-[#DFFF00] w-6 h-6" data-lucide="check-circle-2"></i>
                        Estrategias 100% Personalizadas
                    </li>
<li className="flex items-center gap-4 text-lg font-medium">
<i className="text-[#DFFF00] w-6 h-6" data-lucide="check-circle-2"></i>
                        Trend Hunters 24/7
                    </li>
<li className="flex items-center gap-4 text-lg font-medium">
<i className="text-[#DFFF00] w-6 h-6" data-lucide="check-circle-2"></i>
                        Resultados medibles, estilo inigualable
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-20 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-4">
<div className="text-5xl font-semibold text-[#FFFDD0] mb-2 tracking-tight">50+</div>
<div className="text-[#ffb3ce] font-medium text-lg">Marcas Felices</div>
</div>
<div className="p-4">
<div className="text-5xl font-semibold text-[#FFFDD0] mb-2 tracking-tight">10M</div>
<div className="text-[#ffb3ce] font-medium text-lg">Impressiones</div>
</div>
<div className="p-4">
<div className="text-5xl font-semibold text-[#FFFDD0] mb-2 tracking-tight">24/7</div>
<div className="text-[#ffb3ce] font-medium text-lg">Caos Creativo</div>
</div>
<div className="p-4">
<div className="text-5xl font-semibold text-[#FFFDD0] mb-2 tracking-tight">100%</div>
<div className="text-[#ffb3ce] font-medium text-lg">Girly Power</div>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-md">
<div className="flex flex-col leading-none tracking-tighter mb-6">
<span className="text-4xl font-semibold text-[#FFFDD0]">SOCIAL</span>
<span className="text-4xl font-semibold text-[#DFFF00]">CHAOS</span>
</div>
<p className="text-xl text-white/70">
                        ¿Lista para romper el internet? <br/>
                        Hagamos algo icónico juntas.
                    </p>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-[#DFFF00] font-medium mb-6">Social</h4>
<ul className="space-y-4 text-lg text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">TikTok</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="text-[#DFFF00] font-medium mb-6">Agencia</h4>
<ul className="space-y-4 text-lg text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Servicios</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carreras</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacto</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/50 text-base">© 2024 Social Chaos Agency. All rights reserved.</p>
<div className="flex items-center gap-2 text-white/50 text-base">
<span>Designed with</span>
<i className="w-4 h-4 text-[#DFFF00] fill-[#DFFF00]" data-lucide="heart"></i>
<span>in CDMX</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-10">
<h1 className="text-[15vw] leading-none font-semibold text-center text-[#FFFDD0] tracking-tighter translate-y-1/3">
                DISRUPTIVO
            </h1>
</div>
</footer>


    </>
  );
}
