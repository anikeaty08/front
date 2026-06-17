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



document.addEventListener('DOMContentLoaded', () => {
// Intersection Observer for Reveals
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
// Custom Cursor Logic
const cursorDot = document.getElementById('custom-cursor-dot');
const cursorRing = document.getElementById('custom-cursor-ring');
let mouseX = -100;
let mouseY = -100;
let ringX = -100;
let ringY = -100;
let dotX = -100;
let dotY = -100;
let isMoving = false;
document.addEventListener('mousemove', (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
isMoving = true;
// Direct movement for the dot
dotX = mouseX;
dotY = mouseY;
cursorDot.style.left = `${dotX}px`;
cursorDot.style.top = `${dotY}px`;
});
// Smooth animation loop for the ring
function animateCursor() {
if (isMoving) {
// Linear interpolation (Lerp) for smooth delay
ringX += (mouseX - ringX) * 0.15;
ringY += (mouseY - ringY) * 0.15;
cursorRing.style.left = `${ringX}px`;
cursorRing.style.top = `${ringY}px`;
}
requestAnimationFrame(animateCursor);
}
animateCursor();
// Hover effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, details, .group');
interactiveElements.forEach(el => {
el.addEventListener('mouseenter', () => document.body.classList.add('hover-interactive'));
el.addEventListener('mouseleave', () => document.body.classList.remove('hover-interactive'));
});
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
      

<div className="" id="custom-cursor-dot" style={{left: '644px', top: '13px'}}></div>
<div className="" id="custom-cursor-ring"></div>

<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/50 bg-white/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-lg flex items-center justify-center text-white text-[10px] shadow-lg shadow-indigo-900/20">C</div>
                CABINET.SOCIAL
            </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-indigo-600 transition-colors" href="#probleme">Problématique</a>
<a className="hover:text-indigo-600 transition-colors" href="#approche">Approche</a>
<a className="hover:text-indigo-600 transition-colors" href="#pricing">Offres</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-full transition-all shadow-lg shadow-slate-900/20 hover:shadow-indigo-600/30" href="#contact">
                Prendre RDV
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-50 via-blue-50 to-transparent opacity-70 rounded-full blur-3xl"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
<div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-100/40 to-indigo-100/40 rounded-full blur-3xl opacity-50"></div>
<div className="absolute inset-0 bg-grid opacity-[0.4]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
</span>
<span className="text-xs font-semibold text-indigo-900 tracking-wide uppercase">Spécialisé Experts-Comptables</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-slate-900 mb-6">
                    Votre cabinet est <span className="italic font-serif text-indigo-600">sérieux</span>.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-900">Votre Instagram</span> devrait l’être aussi.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10 font-normal">
                    L'image digitale est le nouveau bouche-à-oreille. Inspirez confiance instantanément aux dirigeants qui vous recherchent.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                        Structurer mon image
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm cursor-pointer">
                        Voir le process
                    </button>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs text-slate-600 font-bold overflow-hidden shadow-sm">
<img alt="Expert" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs text-slate-600 font-bold overflow-hidden shadow-sm">
<img alt="Expert" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs text-slate-600 font-bold overflow-hidden shadow-sm">
<img alt="Expert" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=59"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center text-[10px] text-indigo-600 font-bold shadow-sm">
                            12+
                        </div>
</div>
<div>
<div className="flex items-center gap-1 mb-0.5">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700"><span className="font-bold text-slate-900">+ de 15 cabinets</span> nous font confiance.</p>
</div>
</div>
</div>

<div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center reveal delay-100 perspective-1000">

<div className="absolute w-72 h-96 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] border border-white z-20 animate-float flex flex-col p-6 ring-1 ring-black/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">C</div>
<div className="h-2.5 w-24 bg-slate-200 rounded-full"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-indigo-50 to-white rounded-2xl mb-4 relative overflow-hidden group border border-indigo-50">
<div className="absolute inset-0 flex items-center justify-center text-indigo-200 transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="" icon="solar:graph-new-linear" width="64"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 right-4 h-2 bg-indigo-100/50 rounded-full"></div>
<div className="absolute bottom-8 left-4 w-1/2 h-2 bg-indigo-200/50 rounded-full"></div>
</div>
<div className="flex gap-2 mb-3">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
</div>
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>

<div className="absolute -right-6 top-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-50 animate-bounce">
<iconify-icon className="text-rose-500 text-xl" icon="solar:heart-bold"></iconify-icon>
</div>
</div>

<div className="absolute top-20 right-0 w-60 h-72 glass-panel rounded-2xl z-10 animate-float-delayed transform rotate-6 flex flex-col p-5 shadow-lg">
<div className="flex justify-between items-center mb-6">
<div className="h-2 w-16 bg-slate-300 rounded-full"></div>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-500"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="flex-1 space-y-1.5">
<div className="h-2 w-full bg-slate-200 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors">
<div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-500"><iconify-icon icon="solar:chart-linear"></iconify-icon></div>
<div className="flex-1 space-y-1.5">
<div className="h-2 w-full bg-slate-200 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden text-slate-300 bg-[#0B1120] pt-24 pb-24 relative" id="probleme">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none">
</div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
                Le problème n’est pas vos compétences.<br/>
<span className="text-indigo-400">C'est votre vitrine.</span>
</h2>
<div className="space-y-6 text-lg font-light leading-relaxed text-slate-400">
<p className="">Votre expertise est réelle. Vos conseils sauvent des entreprises. Mais votre image digitale
                    ne reflète pas cette excellence.</p>
<p className="border-l-2 border-indigo-500 pl-4">Les prospects ne doutent pas de votre expertise comptable.
                    Ils doutent de votre modernité et de votre dynamisme lorsqu'ils tombent sur un compte inactif.</p>
</div>
</div>
<div className="grid gap-4 reveal delay-100">
<div className="glass-card-dark p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-white font-semibold text-base">Compte fantôme</h3>
<p className="text-sm text-slate-500 mt-1">Dernière publication il y a 8 mois. Inspire l'abandon.</p>
</div>
</div>
<div className="glass-card-dark p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-remove-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-white font-semibold text-base">Design amateur</h3>
<p className="text-sm text-slate-500 mt-1">Visuels Canva génériques, pixels visibles, charte non
                        respectée.</p>
</div>
</div>
<div className="glass-card-dark p-6 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-white font-semibold text-base">Image perçue faible</h3>
<p className="text-sm text-slate-500 mt-1">Ne rassure pas un chef d'entreprise de la "Gen Z" ou
                        Millennial.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="approche">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-50 rounded-full">Notre Méthode</div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                    Une présence crédible. <br/>
<span className="text-slate-400">Pas du marketing agressif.</span>
</h2>
<p className="text-slate-500">Nous comprenons les codes de déontologie et l'exigence de votre profession.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300 reveal hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:palette-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Identité visuelle sobre</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Des tons rassurants, une typographie élégante. Nous créons une charte qui respire le sérieux et la compétence.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300 reveal delay-75 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:book-bookmark-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Contenu pédagogique</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Vulgarisation fiscale, rappels d'échéances, conseils de gestion. Des posts qui apportent de la valeur réelle.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300 reveal delay-150 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="solar:user-speak-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Ton professionnel</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Ni emoji clown, ni promesse farfelue. Nous adoptons une posture d'expert partenaire du dirigeant.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Transformation immédiate</h2>
<p className="text-slate-500 mt-2">Le jour et la nuit pour votre image de marque.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center reveal">

<div className="relative group">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase z-10">Avant</div>
<div className="w-full max-w-sm mx-auto aspect-[9/16] bg-white rounded-[2.5rem] border-8 border-slate-200 shadow-inner overflow-hidden p-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 scale-95">

<div className="flex items-center gap-2 mb-6 opacity-50">
<div className="w-12 h-12 rounded-full bg-slate-300"></div>
<div className="space-y-1">
<div className="w-20 h-2.5 bg-slate-300 rounded"></div>
<div className="w-12 h-2 bg-slate-300 rounded"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-1">
<div className="aspect-square bg-red-200"></div>
<div className="aspect-square bg-blue-200"></div>
<div className="aspect-square bg-yellow-200"></div>
<div className="aspect-square bg-green-200 text-[8px] p-1 overflow-hidden leading-none text-slate-500">Texte illisible...</div>
<div className="aspect-square bg-slate-300"></div>
<div className="aspect-square bg-purple-200"></div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900 to-indigo-900 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase z-10 shadow-lg shadow-indigo-900/20 ring-4 ring-white">Après</div>

<div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10 rounded-full scale-90"></div>
<div className="w-full max-w-sm mx-auto aspect-[9/16] bg-white rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden p-5 relative transform group-hover:scale-[1.02] transition-transform duration-500">

<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-xs font-bold bg-slate-50 text-indigo-900">C.</div>
<div className="space-y-1.5">
<div className="w-24 h-2.5 bg-slate-800 rounded-full"></div>
<div className="w-16 h-2 bg-slate-400 rounded-full"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-0.5 bg-slate-100 border border-slate-100 rounded-lg overflow-hidden">

<div className="aspect-square bg-slate-50 flex items-center justify-center border border-slate-50 relative group/item overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent"></div>
<div className="w-1/2 h-1 bg-slate-200 rounded-full relative z-10"></div>
</div>
<div className="aspect-square bg-slate-900 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10"></div>
<div className="w-6 h-6 border-2 border-white/20 rounded-full"></div>
</div>
<div className="aspect-square bg-slate-50 flex flex-col items-center justify-center gap-1">
<div className="w-3/4 h-1 bg-slate-200 rounded-full"></div>
<div className="w-1/2 h-1 bg-slate-200 rounded-full"></div>
</div>
<div className="aspect-square bg-slate-50 flex items-center justify-center group/icon hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-slate-300 text-2xl group-hover/icon:text-indigo-500 transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="aspect-square bg-slate-50 flex items-center justify-center">
<div className="text-[10px] font-serif italic text-slate-800">Expertise</div>
</div>
<div className="aspect-square bg-slate-50 relative">
<div className="absolute inset-2 bg-slate-100 rounded-sm"></div>
</div>
<div className="aspect-square bg-slate-900 flex items-center justify-center text-white/50 text-[8px] italic">
                                "Quote"
                            </div>
<div className="aspect-square bg-slate-50 flex items-center justify-center">
<div className="w-4 h-4 rounded bg-slate-200"></div>
</div>
<div className="aspect-square bg-slate-50 flex items-center justify-center">
<div className="w-1/2 h-0.5 bg-slate-300"></div>
</div>
</div>

<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur border border-slate-100 shadow-xl px-4 py-2.5 rounded-xl flex items-center gap-2 animate-float">
<div className="bg-indigo-100 p-1 rounded-full flex items-center justify-center">
<iconify-icon className="text-indigo-600" icon="solar:verified-check-bold"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-800">Crédibilité +100%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center mb-16 reveal">Un processus simple et structuré</h2>
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-indigo-500 before:via-slate-200 before:to-transparent">

<div className="relative flex items-center justify-between gap-6 group reveal">
<div className="absolute left-0 ml-5 -translate-x-1/2 bg-white border-2 border-slate-100 w-10 h-10 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
<span className="text-sm font-bold">1</span>
</div>
<div className="ml-16 bg-white p-6 rounded-2xl border border-slate-100 w-full hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-100 transition-all duration-300 group-hover:-translate-x-1 cursor-pointer">
<h3 className="font-bold text-slate-900 flex items-center gap-2">
                            Audit &amp; Compréhension
                            <iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:magnifer-linear"></iconify-icon>
</h3>
<p className="text-sm text-slate-500 mt-2">Nous analysons votre cabinet, vos valeurs et votre cible pour définir le ton juste.</p>
</div>
</div>

<div className="relative flex items-center justify-between gap-6 group reveal delay-75">
<div className="absolute left-0 ml-5 -translate-x-1/2 bg-white border-2 border-slate-100 w-10 h-10 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
<span className="text-sm font-bold">2</span>
</div>
<div className="ml-16 bg-white p-6 rounded-2xl border border-slate-100 w-full hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-100 transition-all duration-300 group-hover:-translate-x-1 cursor-pointer">
<h3 className="font-bold text-slate-900 flex items-center gap-2">
                            Charte Éditoriale &amp; Graphique
                            <iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-new-square-linear"></iconify-icon>
</h3>
<p className="text-sm text-slate-500 mt-2">Création de vos templates propriétaires et définition des piliers de contenu.</p>
</div>
</div>

<div className="relative flex items-center justify-between gap-6 group reveal delay-150">
<div className="absolute left-0 ml-5 -translate-x-1/2 bg-white border-2 border-slate-100 w-10 h-10 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
<span className="text-sm font-bold">3</span>
</div>
<div className="ml-16 bg-white p-6 rounded-2xl border border-slate-100 w-full hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-100 transition-all duration-300 group-hover:-translate-x-1 cursor-pointer">
<h3 className="font-bold text-slate-900 flex items-center gap-2">
                            Production &amp; Validation
                            <iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</h3>
<p className="text-sm text-slate-500 mt-2">Vous recevez les posts du mois. Vous validez en 5 minutes. Nous publions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex items-center justify-center mb-12 gap-2 reveal">
<span className="text-indigo-400 font-bold text-lg">+15 Cabinets</span>
<span className="text-slate-400">ont déjà sauté le pas</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full grayscale overflow-hidden ring-2 ring-white/10">

<img alt="Jean-Marc" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div>
<div className="text-white text-sm font-bold">Jean-Marc D.</div>
<div className="text-indigo-400 text-xs font-medium">Cabinet Audit &amp; Conseil</div>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"Enfin une agence qui comprend qu'on ne vend pas de la comptabilité comme on vend des baskets. Le ton est parfait, sobre et efficace."</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal delay-75 hover:bg-white/10 transition-colors relative">

<iconify-icon className="absolute top-4 right-4 text-white/5 text-4xl" icon="solar:quote-up-square-bold"></iconify-icon>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full grayscale overflow-hidden ring-2 ring-white/10">
<img alt="Sophie" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=5"/>
</div>
<div>
<div className="text-white text-sm font-bold">Sophie L.</div>
<div className="text-indigo-400 text-xs font-medium">Expert-Comptable Associée</div>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"Depuis que nous avons restructuré notre Instagram avec vous, nous avons signé 3 clients qui nous ont explicitement parlé de notre image moderne."</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal delay-150 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full grayscale overflow-hidden ring-2 ring-white/10">
<img alt="Cabinet Moreau" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=68"/>
</div>
<div>
<div className="text-white text-sm font-bold">Cabinet Moreau</div>
<div className="text-indigo-400 text-xs font-medium">Paris 8ème</div>
</div>
</div>
<p className="text-slate-300 text-sm leading-relaxed">"Zéro charge mentale. Je valide les visuels en début de mois et c'est tout. Le rendu est ultra professionnel."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Tarifs simples &amp; transparents</h2>
<p className="text-slate-500 mt-4">Sans engagement de durée. Annulable à tout moment.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-slate-200 bg-white reveal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<h3 className="font-bold text-slate-900">Pack Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900 tracking-tight">99€</span>
<span className="text-sm text-slate-500">/mois</span>
</div>
<p className="text-sm text-slate-500 mt-2">Pour maintenir une présence.</p>
<hr className="my-6 border-slate-100"/>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 6 publications / mois</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Templates simples</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Rédaction des légendes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 1 Révision</li>
</ul>
<a className="mt-8 block w-full py-3.5 rounded-xl border border-slate-200 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors" href="#contact">Choisir Starter</a>
</div>

<div className="p-8 rounded-3xl border border-indigo-900 bg-slate-900 text-white shadow-2xl shadow-indigo-900/20 relative lg:-mt-6 lg:mb-6 reveal delay-75 transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
<div className="absolute top-0 right-0 -mt-3 mr-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">Recommandé</div>
<h3 className="font-bold text-white">Pack Premium</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-5xl font-bold text-white tracking-tight">199€</span>
<span className="text-sm text-slate-400">/mois</span>
</div>
<p className="text-sm text-slate-400 mt-2">Pour développer votre image.</p>
<hr className="my-6 border-white/10"/>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-white">12 publications / mois</span></li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Formats éducatifs avancés</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Charte graphique sur-mesure</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Calendrier éditorial</li>
</ul>
<a className="mt-8 block w-full py-3.5 rounded-xl bg-white text-center text-sm font-bold text-slate-900 hover:bg-indigo-50 transition-colors shadow-lg" href="#contact">Choisir Premium</a>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-white reveal delay-150 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<h3 className="font-bold text-slate-900">Pack Pro</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900 tracking-tight">399€</span>
<span className="text-sm text-slate-500">/mois</span>
</div>
<p className="text-sm text-slate-500 mt-2">Délégation totale.</p>
<hr className="my-6 border-slate-100"/>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 16 publications / mois</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Stratégie d'acquisition</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Community Management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 2 Révisions</li>
</ul>
<a className="mt-8 block w-full py-3.5 rounded-xl border border-slate-200 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors" href="#contact">Choisir Pro</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="absolute inset-0 bg-grid opacity-[0.2]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-500/10 open:border-indigo-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-slate-900">
<span>Faut-il vous fournir du contenu ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform text-slate-400 group-open:text-indigo-600" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Non, nous sommes autonomes. Nous faisons une veille juridique et fiscale pour proposer des sujets pertinents. Vous validez simplement la justesse technique si nécessaire.
                    </p>
</details>
<details className="group bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-500/10 open:border-indigo-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-slate-900">
<span>Y a-t-il un engagement de durée ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform text-slate-400 group-open:text-indigo-600" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Aucun. Nos offres sont mensuelles et sans engagement. Vous pouvez arrêter quand vous voulez si vous n'êtes pas satisfait.
                    </p>
</details>
<details className="group bg-white rounded-xl border border-slate-200 open:ring-2 open:ring-indigo-500/10 open:border-indigo-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-slate-900">
<span>Gérez-vous les messages privés ?</span>
<iconify-icon className="group-open:rotate-180 transition-transform text-slate-400 group-open:text-indigo-600" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Uniquement dans l'offre PRO. Pour les offres Starter et Premium, nous nous occupons de la visibilité, mais nous vous laissons la main sur la relation client directe.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,46,129,1),rgba(15,23,42,1))]"></div>

<div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-float"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Votre expertise mérite<br/>une <span className="text-indigo-400">image d'excellence</span>.
            </h2>
<p className="text-slate-400 text-lg mb-10 font-light">
                Rejoignez les cabinets modernes qui transforment leur image digitale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-slate-900 px-10 py-4 rounded-xl text-base font-bold hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/50 w-full sm:w-auto hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                    Planifier un échange de 15 min
                </button>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                Aucun engagement requis. Audit gratuit.
            </div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-white/5 relative">
<div className="bg-noise opacity-[0.05]"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="font-bold text-white tracking-tight flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center text-slate-900 text-[9px]">C</div>
                CABINET.SOCIAL
            </div>
<div className="text-slate-600 text-sm">
                © 2023 Cabinet.Social. Tous droits réservés.
            </div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</footer>

    </>
  );
}
