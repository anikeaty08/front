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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Initialize Lucide Icons
    lucide.createIcons();

    // Language Toggle
    const htmlEl = document.documentElement;
    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        const currentLang = htmlEl.getAttribute('lang');
        htmlEl.setAttribute('lang', currentLang === 'es' ? 'en' : 'es');
    });

    // Parallax Background
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxBg = document.getElementById('parallax-bg');
        if(parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // Flashlight Card Mouse Tracking
    document.querySelectorAll('.flashlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Mobile Menu Toggle
    (function () {
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        if (!toggleBtn || !menu) return;
        const icon = toggleBtn.querySelector('iconify-icon');

        function openMenu() {
            menu.classList.remove('opacity-0', 'pointer-events-none');
            menu.setAttribute('aria-hidden', 'false');
            if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
            document.body.style.overflow = 'hidden';
        }
        function closeMenu() {
            menu.classList.add('opacity-0', 'pointer-events-none');
            menu.setAttribute('aria-hidden', 'true');
            if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            document.body.style.overflow = '';
        }
        function isOpen() { return !menu.classList.contains('opacity-0'); }

        toggleBtn.addEventListener('click', () => { isOpen() ? closeMenu() : openMenu(); });
        document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', closeMenu));
    })();

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.obs-element').forEach(el => {
        observer.observe(el);
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" id="parallax-bg">
<div className="absolute left-[15%] w-[1px] h-full bg-white/[0.03]">
<div className="w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-beam-fall" style={{animationDelay: '0s'}}></div>
</div>
<div className="absolute left-[50%] w-[1px] h-full bg-white/[0.03]">
<div className="w-full h-32 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-beam-fall" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
</div>
<div className="absolute left-[85%] w-[1px] h-full bg-white/[0.03]">
<div className="w-full h-32 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-beam-fall" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
</div>
<svg className="absolute inset-0 w-full h-full opacity-[0.15]" preserveaspectratio="none">
<path className="noodle-path" d="M0,200 C400,300 600,0 1000,100 C1400,200 1800,500 2000,400" fill="none" stroke="url(#noodle-grad)" strokeWidth="2"></path>
<path className="noodle-path" d="M0,600 C500,400 800,800 1200,600 C1600,400 1900,900 2000,800" fill="none" stroke="url(#noodle-grad-2)" strokeWidth="1.5" style={{animationDirection: 'reverse', animationDuration: '25s'}}></path>
<defs>
<lineargradient id="noodle-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="rgba(150,150,150,0.8)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
<lineargradient id="noodle-grad-2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="rgba(59,130,246,0.6)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
</div>

<nav className="md:px-12 obs-element in-view w-full pt-6 pr-6 pb-6 pl-6 relative z-[500] border-b border-white/5 bg-black/50">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">
<i className="text-white w-7 h-7" data-lucide="square-terminal" strokeWidth="1.5"></i>
<span className="font-medium text-xl tracking-tight text-white whitespace-nowrap">Chicken AI.</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-white/60 hover:text-white transition-colors whitespace-nowrap" href="#como-funciona">
<span className="lang-es">El Método</span><span className="lang-en">The Method</span>
</a>
<a className="text-base font-normal text-white/60 hover:text-white transition-colors whitespace-nowrap" href="#planes">
<span className="lang-es">Planes</span><span className="lang-en">Pricing</span>
</a>
<a className="text-base font-normal text-white/60 hover:text-white transition-colors whitespace-nowrap" href="#promesa">
<span className="lang-es">Garantía</span><span className="lang-en">Guarantee</span>
</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">

<div className="flex items-center gap-1.5 mr-2">
<button aria-label="Toggle Language" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 shadow-sm" id="lang-toggle">
<span className="lang-es flex items-center justify-center"><iconify-icon icon="circle-flags:uk" width="18"></iconify-icon></span>
<span className="lang-en flex items-center justify-center"><iconify-icon icon="circle-flags:es" width="18"></iconify-icon></span>
</button>
</div>
<a className="border-beam-btn h-10 w-44 group hidden md:block overflow-hidden" href="#contacto">
<div className="inner-btn text-white text-base font-normal flex items-center justify-center gap-2 group-hover:pr-2 transition-all whitespace-nowrap">
<span className="lang-es">Diagnóstico</span><span className="lang-en">Diagnostic</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors text-white" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#050505]/95 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-white hover:text-white/60 transition-colors whitespace-nowrap" href="#como-funciona"><span className="lang-es">El Método</span><span className="lang-en">The Method</span></a>
<a className="text-3xl font-medium tracking-tight text-white hover:text-white/60 transition-colors whitespace-nowrap" href="#planes"><span className="lang-es">Planes</span><span className="lang-en">Pricing</span></a>
<a className="text-3xl font-medium tracking-tight text-white hover:text-white/60 transition-colors whitespace-nowrap" href="#promesa"><span className="lang-es">Garantía</span><span className="lang-en">Guarantee</span></a>
</div>

<main className="md:px-12 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch gap-x-12 gap-y-12 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10 h-full justify-center py-4">
<div className="obs-element in-view">
<span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider backdrop-blur-sm shadow-sm whitespace-nowrap">
<div className="relative flex items-center justify-center w-2 h-2">
<div className="absolute w-full h-full rounded-full bg-green-500"></div>
<div className="absolute w-full h-full rounded-full border border-green-500 animate-sonar"></div>
</div>
<span className="lang-es">Solo 3 empresas nuevas al mes</span>
<span className="lang-en">Only 3 new companies per month</span>
</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white obs-element in-view">
<span className="lang-es">Tu equipo sabe que existe la IA.<br/><span className="font-serif italic text-white/50 tracking-normal">Aún no sabe qué hacer con ella.</span></span>
<span className="lang-en">Your team knows AI exists.<br/><span className="font-serif italic text-white/50 tracking-normal">They just don't know what to do with it.</span></span>
</h1>
<p className="obs-element text-2xl text-white/60 leading-relaxed max-w-lg in-view" style={{transitionDelay: '200ms'}}>
<span className="lang-es">Formación 100% a la medida. Sin teoría inútil. Solo lo que necesitas para pasar del "no sé" al "ya lo estamos usando".</span>
<span className="lang-en">100% custom training. No useless theory. Only what you need to go from "I don't know" to "we're already using it".</span>
</p>
<div className="obs-element flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 in-view" style={{transitionDelay: '300ms'}}>
<a className="border-beam-btn h-14 w-full sm:w-64 group overflow-hidden" href="#contacto">
<div className="inner-btn text-white text-base font-normal flex items-center justify-center gap-3 whitespace-nowrap">
<span className="lang-es">Agendar diagnóstico</span><span className="lang-en">Book diagnostic</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</a>
<a className="w-full sm:w-auto px-6 h-14 bg-white/5 border border-white/10 rounded-full text-white/80 font-normal hover:bg-white/10 hover:text-white flex items-center justify-center gap-2 transition-colors text-base whitespace-nowrap" href="#como-funciona">
<iconify-icon icon="solar:play-circle-bold-duotone" width="22"></iconify-icon>
<span className="lang-es">Ver cómo funciona</span><span className="lang-en">See how it works</span>
</a>
</div>

<div className="obs-element mt-12 pt-8 border-t border-white/10 in-view" style={{transitionDelay: '400ms'}}>
<p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-6 whitespace-nowrap">
<span className="lang-es">Equipos que ya construyen</span><span className="lang-en">Teams already building</span>
</p>
<div className="flex items-center gap-8 opacity-40 mask-edges w-full max-w-md overflow-hidden hover:opacity-80 transition-opacity duration-500">
<iconify-icon className="flex-shrink-0 text-white" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="flex-shrink-0 text-white" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="flex-shrink-0 text-white" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="flex-shrink-0 text-white" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="flex-shrink-0 text-white" icon="simple-icons:bose" width="48"></iconify-icon>
</div>
</div>
</div>

<div className="flex lg:justify-end obs-element relative justify-center w-full h-full lg:min-h-[650px] in-view" style={{transitionDelay: '200ms'}}>
<div className="flashlight-card hero-card-right relative w-full lg:max-w-[460px] lg:h-full lg:aspect-auto aspect-[4/5] p-[1px] ml-auto overflow-hidden" style={{-MouseX: '424px', -MouseY: '98px'}}>
<div className="flashlight-inner bg-gradient-to-br from-[#1b1064] to-[#050505] hero-gradient-bg overflow-hidden relative flex flex-col justify-start w-full h-full rounded-[inherit] z-10">

<div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center hero-orbs">
<div className="w-[80%] h-[80%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#4f46e5]/40 via-transparent to-transparent blur-[60px]"></div>
<div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#8ba1ff]/20 via-transparent to-transparent blur-[50px]"></div>
</div>

<div className="absolute inset-0 w-full h-full z-10" style={{WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'}}>

<div className="scrolling-wrapper relative z-10 w-full pt-[20%] pb-[20%]">

<div className="flex flex-col gap-8 w-full flex-shrink-0 px-4 md:px-6">

<div className="flex justify-end gap-3 w-full pr-2">
<span className="bg-[#e2e8ff] text-[#1e293b] px-4 py-2 rounded-full text-xs font-medium shadow-md whitespace-nowrap">
<span className="lang-es">Automatización</span><span className="lang-en">Automation</span>
</span>
<span className="bg-[#e2e8ff] text-[#1e293b] px-4 py-2 rounded-full text-xs font-medium shadow-md whitespace-nowrap">Workflows</span>
</div>

<div className="flex justify-start pl-2">
<div className="bg-[#f8faff] text-[#0f172a] p-4 rounded-3xl shadow-xl flex items-start gap-3 w-[85%] max-w-[280px]">
<img alt="User" className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<p className="text-sm font-normal leading-tight">
<span className="lang-es">"En 3 semanas redujimos el tiempo de propuestas en un 40%."</span>
<span className="lang-en">"In 3 weeks we reduced proposal prep time by 40%."</span>
</p>
</div>
</div>

<div className="flex justify-end pr-2">
<div className="bg-[#0f172a]/95 backdrop-blur-md border border-white/10 text-white p-5 rounded-3xl shadow-2xl w-[90%] max-w-[320px]">
<h4 className="text-base font-medium mb-1.5 tracking-tight whitespace-nowrap keep-white">
<span className="lang-es">Implementación Real</span><span className="lang-en">Real Implementation</span>
</h4>
<p className="text-base text-white/60 mb-5 leading-relaxed keep-white/60">
<span className="lang-es">Casos de uso directamente integrados en tus procesos diarios.</span>
<span className="lang-en">Use cases directly integrated into your daily processes.</span>
</p>
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center keep-white">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-1.5 text-sm font-normal text-white/80 whitespace-nowrap keep-white/80">
<i className="w-4 h-4 text-white/50 keep-white/50" data-lucide="users" strokeWidth="1.5"></i>
<span>+10 hrs/sem</span>
</div>
</div>
</div>
</div>

<div className="flex justify-start pl-4">
<span className="bg-[#111] text-white keep-white px-4 py-2 rounded-full text-xs font-medium shadow-xl whitespace-nowrap">
<span className="lang-es">Operación escalada con IA</span><span className="lang-en">Operation scaled with AI</span>
</span>
</div>
</div>

<div aria-hidden="true" className="flex flex-col gap-8 w-full flex-shrink-0 px-4 md:px-6">

<div className="flex justify-end gap-3 w-full pr-2">
<span className="bg-[#e2e8ff] text-[#1e293b] px-4 py-2 rounded-full text-xs font-medium shadow-md whitespace-nowrap">
<span className="lang-es">Automatización</span><span className="lang-en">Automation</span>
</span>
<span className="bg-[#e2e8ff] text-[#1e293b] px-4 py-2 rounded-full text-xs font-medium shadow-md whitespace-nowrap">Workflows</span>
</div>

<div className="flex justify-start pl-2">
<div className="bg-[#f8faff] text-[#0f172a] p-4 rounded-3xl shadow-xl flex items-start gap-3 w-[85%] max-w-[280px]">
<img alt="User" className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<p className="text-sm font-normal leading-tight">
<span className="lang-es">"En 3 semanas redujimos el tiempo de propuestas en un 40%."</span>
<span className="lang-en">"In 3 weeks we reduced proposal prep time by 40%."</span>
</p>
</div>
</div>

<div className="flex justify-end pr-2">
<div className="bg-[#0f172a]/95 backdrop-blur-md border border-white/10 text-white p-5 rounded-3xl shadow-2xl w-[90%] max-w-[320px]">
<h4 className="text-base font-medium mb-1.5 tracking-tight whitespace-nowrap keep-white">
<span className="lang-es">Implementación Real</span><span className="lang-en">Real Implementation</span>
</h4>
<p className="text-base text-white/60 mb-5 leading-relaxed keep-white/60">
<span className="lang-es">Casos de uso directamente integrados en tus procesos diarios.</span>
<span className="lang-en">Use cases directly integrated into your daily processes.</span>
</p>
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center keep-white">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-1.5 text-sm font-normal text-white/80 whitespace-nowrap keep-white/80">
<i className="w-4 h-4 text-white/50 keep-white/50" data-lucide="users" strokeWidth="1.5"></i>
<span>+10 hrs/sem</span>
</div>
</div>
</div>
</div>

<div className="flex justify-start pl-4">
<span className="bg-[#111] text-white keep-white px-4 py-2 rounded-full text-xs font-medium shadow-xl whitespace-nowrap">
<span className="lang-es">Operación escalada con IA</span><span className="lang-en">Operation scaled with AI</span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10" id="como-funciona">
<div className="flex flex-col items-center text-center mb-20 obs-element">
<span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-sm whitespace-nowrap">
<span className="lang-es">El Método</span><span className="lang-en">The Method</span>
</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.05] max-w-2xl mb-6">
<span className="lang-es">Cómo trabajamos<br/><span className="font-serif italic text-white/50 tracking-normal">Nos sentamos contigo. Aprendemos tu negocio. Construimos desde ahí.</span></span>
<span className="lang-en">How we work<br/><span className="font-serif italic text-white/50 tracking-normal">We sit with you. We learn your business. We build from there.</span></span>
</h2>
<p className="text-white/60 text-2xl leading-relaxed max-w-3xl mb-8">
<span className="lang-es">No traemos un curso prefabricado. Auditamos tus procesos, tus retos, tus herramientas. Y diseñamos un plan que parte de donde tú estás. Sin relleno. Lo que entra el lunes se usa el martes.</span>
<span className="lang-en">We don't bring a pre-made course. We audit your processes, your challenges, your tools. And design a plan that starts where you are. No filler. What goes in Monday is used Tuesday.</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 perspective-1000">

<div className="flashlight-card p-[1px] obs-element" style={{transitionDelay: '100ms'}}>
<div className="flashlight-inner p-8 flex flex-col justify-between h-full group">
<div>
<div className="text-xs font-medium text-white/30 tracking-widest uppercase mb-4">01</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:text-blue-500 transition-colors">
<iconify-icon icon="solar:magnifer-zoom-in-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
<span className="lang-es">Diagnóstico</span><span className="lang-en">Diagnostic</span>
</h3>
<p className="text-white/50 text-lg leading-relaxed">
<span className="lang-es">60 min. Entendemos dónde la IA puede mover la aguja de verdad.</span>
<span className="lang-en">60 min. We understand where AI can really move the needle for your business.</span>
</p>
</div>
</div>
</div>

<div className="flashlight-card p-[1px] obs-element shadow-xl" style={{transitionDelay: '200ms'}}>
<div className="flashlight-inner p-8 flex flex-col justify-between h-full group">
<div className="">
<div className="text-xs font-medium text-white/30 tracking-widest uppercase mb-4">02</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:text-purple-500 transition-colors relative">
<div className="absolute inset-0 rounded-xl border border-purple-500/50 animate-sonar hidden group-hover:block"></div>
<iconify-icon icon="solar:programming-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
<span className="lang-es">Plan a medida</span><span className="lang-en">Custom plan</span>
</h3>
<p className="text-white/50 text-lg leading-relaxed">
<span className="lang-es">Cero contenido genérico. Cero tiempo desperdiciado.</span>
<span className="lang-en">Zero generic content. Zero wasted time. Completely tailored.</span>
</p>
</div>
</div>
</div>

<div className="flashlight-card p-[1px] obs-element" style={{transitionDelay: '300ms'}}>
<div className="flashlight-inner p-8 flex flex-col justify-between h-full group">
<div>
<div className="text-xs font-medium text-white/30 tracking-widest uppercase mb-4">03</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:text-green-500 transition-colors">
<iconify-icon icon="solar:rocket-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">
<span className="lang-es">Implementación</span><span className="lang-en">Implementation</span>
</h3>
<p className="text-white/50 text-lg leading-relaxed">
<span className="lang-es">Tu equipo sale con flujos y herramientas ya funcionando. No con apuntes.</span>
<span className="lang-en">Your team leaves with working workflows and tools. Not notes.</span>
</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 obs-element" style={{transitionDelay: '400ms'}}>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-2">100%</span>
<span className="text-sm text-white/50 font-normal uppercase tracking-wider whitespace-nowrap"><span className="lang-es">A medida</span><span className="lang-en">Custom built</span></span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-2">3</span>
<span className="text-sm text-white/50 font-normal uppercase tracking-wider whitespace-nowrap"><span className="lang-es">Empresas/mes</span><span className="lang-en">Companies/mo</span></span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-2">$50</span>
<span className="text-sm text-white/50 font-normal uppercase tracking-wider whitespace-nowrap"><span className="lang-es">Diagnóstico</span><span className="lang-en">Diagnostic</span></span>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-2">0</span>
<span className="text-sm text-white/50 font-normal uppercase tracking-wider whitespace-nowrap"><span className="lang-es">Teoría inútil</span><span className="lang-en">Useless theory</span></span>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative" id="planes">
<div className="mb-16 text-center md:text-left obs-element">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
<span className="lang-es">Elige tu punto de entrada.</span>
<span className="lang-en">Choose your entry point.</span>
</h2>
<p className="text-white/50 text-2xl leading-relaxed max-w-2xl">
<span className="lang-es">Cada empresa está en un momento distinto. Estos planes están diseñados para encontrarte donde estás.</span>
<span className="lang-en">Every company is at a different stage. These plans are designed to meet you where you are.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="flashlight-card p-[1px] obs-element" style={{transitionDelay: '100ms', -MouseX: '258px', -MouseY: '106.75px'}}>
<div className="flashlight-inner p-8 flex flex-col h-full bg-[#0a0a0a]/80 backdrop-blur-md">
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">AI Foundations</h3>
<div className="text-4xl font-normal tracking-tight text-white mb-4">$500</div>
<p className="text-lg text-white/50 mb-8 min-h-[40px]">
<span className="lang-es">Primer contacto real con la IA aplicada a tu negocio.</span>
<span className="lang-en">First real contact with AI applied to your business.</span>
</p>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Diagnóstico inicial incluido</span><span className="lang-en">Initial diagnostic included</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Sesiones personalizadas</span><span className="lang-en">Custom sessions</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Herramientas listas para usar</span><span className="lang-en">Ready-to-use tools</span>
</li>
</ul>
<a className="block w-full text-center bg-white/10 border border-white/20 text-white py-3 rounded-full text-base font-normal hover:bg-white/20 transition-colors whitespace-nowrap" href="#contacto">
<span className="lang-es">Quiero este plan</span><span className="lang-en">I want this plan</span>
</a>
</div>
</div>

<div className="border-beam-btn p-[1px] obs-element transform md:-translate-y-4 shadow-2xl shadow-blue-900/20 !rounded-[1.5rem]" style={{transitionDelay: '200ms'}}>
<div className="inner-btn p-8 flex flex-col h-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative !rounded-[1.5rem] overflow-hidden items-start justify-start w-full">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full mb-2 z-10 relative">
<h3 className="text-2xl font-normal tracking-tight text-white">AI Builder</h3>
<span className="w-max bg-blue-600 text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/50">
<span className="lang-es">Más elegido</span><span className="lang-en">Most popular</span>
</span>
</div>
<div className="text-5xl font-normal tracking-tight text-white mb-4 z-10 relative">$1,500</div>
<p className="text-lg text-white/50 mb-8 min-h-[40px] z-10 relative">
<span className="lang-es">Automatiza los procesos que más tiempo te roban.</span>
<span className="lang-en">Automate the processes that steal the most time.</span>
</p>
<ul className="space-y-4 mb-10 flex-grow w-full z-10 relative">
<li className="flex items-start gap-3 text-lg text-white/90">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Todo lo de Foundations</span><span className="lang-en">Everything in Foundations</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/90">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Flujos de trabajo con IA</span><span className="lang-en">AI Workflows setup</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/90">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Formación del equipo completo</span><span className="lang-en">Full team training</span>
</li>
</ul>
<a className="block w-full text-center bg-white text-black py-4 rounded-full text-base font-normal hover:bg-gray-200 transition-colors shadow-lg z-10 relative whitespace-nowrap" href="#contacto">
<span className="lang-es">Quiero este plan</span><span className="lang-en">I want this plan</span>
</a>
</div>
</div>

<div className="flashlight-card p-[1px] obs-element" style={{transitionDelay: '300ms', -MouseX: '14.3359375px', -MouseY: '255.75px'}}>
<div className="flashlight-inner p-8 flex flex-col h-full bg-[#0a0a0a]/80 backdrop-blur-md">
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">AI Transformation</h3>
<div className="text-4xl font-normal tracking-tight text-white mb-4">$5,000</div>
<p className="text-lg text-white/50 mb-8 min-h-[40px]">
<span className="lang-es">La IA como parte estructural de cómo opera tu empresa.</span>
<span className="lang-en">AI as a structural part of how your company operates.</span>
</p>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Todo lo de Builder</span><span className="lang-en">Everything in Builder</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Múltiples áreas y equipos</span><span className="lang-en">Multiple areas and teams</span>
</li>
<li className="flex items-start gap-3 text-lg text-white/70">
<iconify-icon className="text-white/30 mt-0.5 shrink-0" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
<span className="lang-es">Plan de implementación a 90 días</span><span className="lang-en">90-day implementation plan</span>
</li>
</ul>
<a className="block w-full text-center bg-white/10 border border-white/20 text-white py-3 rounded-full text-base font-normal hover:bg-white/20 transition-colors whitespace-nowrap" href="#contacto">
<span className="lang-es">Quiero este plan</span><span className="lang-en">I want this plan</span>
</a>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 py-24 bg-white/[0.02] relative z-10" id="promesa">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="obs-element">
<span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-sm whitespace-nowrap">
<span className="lang-es">La Promesa</span><span className="lang-en">The Promise</span>
</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.05] mb-6">
<span className="lang-es">Solo pagas cuando<br/><span className="font-serif italic text-white/50 tracking-normal">tu empresa crece.</span></span>
<span className="lang-en">You only pay when<br/><span className="font-serif italic text-white/50 tracking-normal">your company grows.</span></span>
</h2>
<p className="text-white/60 text-2xl leading-relaxed max-w-lg">
<span className="lang-es">Si tu empresa no crece, Chicken AI. no cobra. Sin riesgo. Sin letra pequeña. Sin excusas.</span>
<span className="lang-en">If your company doesn't grow, Chicken AI. doesn't charge. No risk. No fine print. No excuses.</span>
</p>
</div>
<div className="flashlight-card p-[1px] obs-element shadow-2xl">
<div className="flashlight-inner p-10 md:p-16 flex items-center justify-center text-center bg-gradient-to-br from-[#111] to-[#0a0a0a]">
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white leading-tight">
<span className="lang-es">"No somos un proveedor de cursos.<br/><span className="text-white/50 font-serif italic font-normal tracking-normal mt-2 block">Somos tu primer equipo de IA interno.</span>"</span>
<span className="lang-en">"We are not a course provider.<br/><span className="text-white/50 font-serif italic font-normal tracking-normal mt-2 block">We are your first internal AI team.</span>"</span>
</h3>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative" id="contacto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 obs-element">

<div className="flashlight-card p-[1px] h-max">
<div className="flashlight-inner p-10 md:p-12">
<div className="mb-8 relative z-10">
<span className="text-xs font-medium text-white/40 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
<iconify-icon icon="solar:target-bold-duotone"></iconify-icon>
<span className="lang-es">Diagnóstico</span><span className="lang-en">Diagnostic</span>
</span>
<h3 className="text-3xl font-normal tracking-tight text-white mt-2">
<span className="lang-es">¿Listo para construir?</span><span className="lang-en">Ready to build?</span>
</h3>
</div>
<form className="flex flex-col gap-6 relative z-10">
<div className="flex flex-col gap-1">
<label className="text-sm font-normal text-white/50 ml-1"><span className="lang-es">Nombre</span><span className="lang-en">Name</span></label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-lg text-white focus:border-white/30 focus:bg-white/10 outline-none transition-colors" placeholder="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm font-normal text-white/50 ml-1"><span className="lang-es">Empresa</span><span className="lang-en">Company</span></label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-lg text-white focus:border-white/30 focus:bg-white/10 outline-none transition-colors" placeholder="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-sm font-normal text-white/50 ml-1">
<span className="lang-es">¿Cuál es tu mayor reto con la IA hoy?</span>
<span className="lang-en">What is your biggest AI challenge today?</span>
</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-lg text-white focus:border-white/30 focus:bg-white/10 outline-none transition-colors resize-none" rows="3"></textarea>
</div>
<button className="mt-4 border-beam-btn h-14 w-full group overflow-hidden" type="button">
<div className="inner-btn text-white font-normal flex justify-center items-center gap-2 text-base whitespace-nowrap">
<span className="lang-es">Agendar mi diagnóstico</span><span className="lang-en">Book my diagnostic</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</div>
</button>
<p className="text-xs text-white/30 text-center mt-2">
<span className="lang-es">Al enviar, aceptas nuestra política de privacidad.</span>
<span className="lang-en">By submitting, you agree to our privacy policy.</span>
</p>
</form>
</div>
</div>

<div className="flex flex-col justify-start">
<span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 rounded-lg text-sm font-medium uppercase tracking-wider mb-6 w-max backdrop-blur-sm shadow-sm whitespace-nowrap">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></div>
<span className="lang-es">Este mes quedan 2 cupos disponibles</span>
<span className="lang-en">2 spots left this month</span>
</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white leading-[1.05] mb-6">
<span className="lang-es">Deja de picotear.<br/><span className="font-serif italic text-white/50 tracking-normal">Empieza a construir.</span></span>
<span className="lang-en">Stop pecking.<br/><span className="font-serif italic text-white/50 tracking-normal">Start building.</span></span>
</h2>
<p className="text-white/60 text-2xl leading-relaxed mb-8 max-w-lg">
<span className="lang-es">Máximo 3 empresas nuevas por mes. No porque no podamos con más, sino porque así garantizamos el resultado.</span>
<span className="lang-en">Maximum 3 new companies per month. Not because we can't take more, but to guarantee the result.</span>
</p>
<a className="border-beam-btn h-14 w-full sm:w-80 group mb-4 overflow-hidden shadow-lg" href="#contacto">
<div className="inner-btn text-white text-base font-normal flex items-center justify-center gap-3 whitespace-nowrap">
<span className="lang-es">Agendar mi diagnóstico · $50 USD</span>
<span className="lang-en">Book my diagnostic · $50 USD</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</a>
<div className="flex items-center gap-4 text-sm font-normal text-white/40 mb-12 flex-wrap">
<span className="flex items-center gap-1 whitespace-nowrap"><iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="lang-es">Descontable si contratas</span><span className="lang-en">Deductible if hired</span></span>
<span className="flex items-center gap-1 whitespace-nowrap"><iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="lang-es">Sin compromiso</span><span className="lang-en">No commitment</span></span>
<span className="flex items-center gap-1 whitespace-nowrap"><iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="lang-es">Respuesta en -24h</span><span className="lang-en">Reply under 24h</span></span>
</div>

<div className="pt-8 border-t border-white/10">
<h4 className="text-xs font-medium text-white/40 uppercase tracking-widest mb-6">
<span className="lang-es">Resultados reales. Empresas que dejaron de picotear.</span>
<span className="lang-en">Real results. Companies that stopped pecking.</span>
</h4>
<div className="flex flex-col gap-4">
<div className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-sm backdrop-blur-sm">
<div className="flex text-yellow-500 mb-3 gap-0.5"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
<p className="text-lg text-white/80 leading-relaxed mb-4">
<span className="lang-es">"En tres semanas, el equipo de ventas redujo en 40% el tiempo de preparación de propuestas. No lo hubiera creído si no lo veo."</span>
<span className="lang-en">"In three weeks, the sales team reduced proposal prep time by 40%. I wouldn't have believed it if I hadn't seen it."</span>
</p>
<p className="text-base font-normal text-white/50">
<span className="lang-es">Directora Comercial · Empresa B2B</span><span className="lang-en">Sales Director · B2B Company</span>
</p>
</div>
<div className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-sm backdrop-blur-sm">
<div className="flex text-yellow-500 mb-3 gap-0.5"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></div>
<p className="text-lg text-white/80 leading-relaxed mb-4">
<span className="lang-es">"Otros proveedores nos vendieron herramientas. Chicken AI. nos enseñó a pensar diferente. Esa diferencia lo cambia todo."</span>
<span className="lang-en">"Other providers sold us tools. Chicken AI. taught us to think differently. That difference changes everything."</span>
</p>
<p className="text-base font-normal text-white/50">
<span className="lang-es">CEO · Agencia Digital</span><span className="lang-en">CEO · Digital Agency</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-12 border-t border-white/5 obs-element">
<div className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
<div className="flex items-center gap-2 mb-2">
<i className="text-white/50 w-5 h-5" data-lucide="square-terminal" strokeWidth="1.5"></i>
<span className="font-normal text-base tracking-tight text-white/50 whitespace-nowrap">Chicken AI.</span>
</div>
<p className="text-white/30 text-base">
<span className="lang-es">Formación en inteligencia artificial que sí sirve.</span>
<span className="lang-en">Artificial intelligence training that actually works.</span>
</p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-normal">
<span className="whitespace-nowrap">© 2025 Chicken AI.</span>
<span>Human-First. <span className="lang-es">Siempre.</span><span className="lang-en">Always.</span></span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors whitespace-nowrap" href="#">Instagram</a>
<a className="hover:text-white transition-colors whitespace-nowrap" href="#">LinkedIn</a>
</div>
</div>
</footer>




    </>
  );
}
