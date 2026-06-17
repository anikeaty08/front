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
        // Lucide icons are handled by script tag, iconify by component
        
        // 1. Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // 2. Parallax Effects
        const parallaxBg = document.querySelector('.parallax-bg');
        const parallaxElements = document.querySelectorAll('.parallax-element');
        const footerText = document.getElementById('footer-text');
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if(scrollY > 50) {
                navbar.classList.add('shadow-sm', 'bg-[#Fdfdfc]/90');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-[#Fdfdfc]/90');
            }

            if (parallaxBg) {
                const speed = parseFloat(parallaxBg.dataset.speed) || 0.1;
                parallaxBg.style.transform = `translateY(${scrollY * speed}px)`;
            }

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || -0.05;
                el.style.transform = `translateY(${scrollY * speed}px)`;
            });

            if (footerText) {
                const footerPosition = footerText.getBoundingClientRect().top;
                if (footerPosition < windowHeight) {
                    const move = (windowHeight - footerPosition) * 0.1;
                    footerText.style.transform = `translateX(-${move}px)`;
                }
            }
        });

        window.addEventListener('load', () => {
             document.querySelectorAll('.reveal').forEach((el, index) => {
                 if(el.getBoundingClientRect().top < window.innerHeight) {
                     setTimeout(() => {
                         el.classList.add('active');
                     }, index * 100);
                 }
             });
        });

        // 3. Search & Filter Functionality
        // Adapted for Service Categories
        const skillsList = document.getElementById('skills-list');
        const listItems = skillsList.querySelectorAll('li');
        const noResults = document.getElementById('no-results');

        function filterResources(category) {
            let visibleCount = 0;

            listItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                const matchesCategory = category === 'all' || itemCategory === category;

                if (matchesCategory) {
                    item.style.display = 'block';
                    // Re-trigger reveal animation for smoothness
                    item.classList.remove('active'); 
                    setTimeout(() => item.classList.add('active'), 50);
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 w-full max-w-[1800px] mx-auto bg-[#Fdfdfc]/80 backdrop-blur-md transition-all duration-300 border-b border-transparent" id="navbar">
<div className="text-xl font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2">
            Smartape.
        </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#soluciones">Soluciones</a>
<a className="hover:text-black transition-colors" href="#consultoria">Consultoría</a>
<a className="hover:text-black transition-colors" href="#talento">Talento</a>
</div>
<button className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-neutral-200/50">
            Conversación Estratégica
        </button>
</nav>
<main className="md:px-8 w-full max-w-[1800px] mt-24 mr-auto ml-auto pr-4 pb-20 pl-4">

<section className="pt-10 md:pt-20 pb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
<div className="lg:col-span-7 reveal active">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tighter">
                        Inteligencia<br/>
                        Artificial<br/>
                        Aplicada
                    </h1>
</div>
<div className="lg:col-span-5 flex flex-col items-start lg:items-end lg:pl-10 reveal delay-100 active">
<p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-sm lg:text-right font-medium">
                        Integramos IA, software y personas para optimizar procesos y lograr resultados de negocio medibles.
                    </p>
<button className="group flex items-center gap-3 pl-4 pr-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20 hover:-translate-y-1">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-neutral-900">
<iconify-icon height="18" icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold">Iniciar Diagnóstico</span>
</button>
</div>
</div>

<div className="reveal delay-200 w-full h-[400px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-neutral-200 shadow-sm group active">
<div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]" data-speed="0.05" style={{transform: 'translateY(102.55px)'}}>
<img alt="Smartape Collaboration" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-sm w-full hidden md:block parallax-element border border-white/50" data-speed="-0.03" style={{transform: 'translateY(-61.53px)'}}>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">Adopción Tecnológica</p>
<h4 className="text-sm font-bold text-neutral-900">Eficiencia Operativa</h4>
</div>
<div className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-emerald-600 animate-pulse"></span>
                            Optimizando
                        </div>
</div>
<div className="flex items-center justify-between mb-5">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-600">IA</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">IT</div>
<div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-600">+</div>
</div>
<div className="text-xs text-neutral-500 font-medium">Implementación activa</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-[11px] font-medium text-neutral-600">
<span>Automatización</span>
<span>84%</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[84%] rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-16 opacity-50"></div>

<section className="rounded-[2rem] md:rounded-[3rem] bg-[#111111] text-white p-8 md:p-16 lg:p-24 overflow-hidden relative reveal">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center">
<div className="mb-8 flex items-center gap-2 text-neutral-400 text-sm font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Visión Smartape
                    </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight mb-8">
                        La tecnología solo genera valor cuando las
                        <span className="text-neutral-500"> personas saben usarla.</span>
</h2>
<p className="text-xl text-neutral-400 max-w-md leading-relaxed">
                        Convertimos la Inteligencia Artificial en una herramienta práctica y accionable. No vendemos tecnología aislada: transformamos tu organización.
                    </p>
</div>
<div className="relative mt-8 lg:mt-0 group perspective-1000">
<div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl relative transition-transform duration-500 ease-out group-hover:rotate-y-2 group-hover:scale-[1.02]">
<div className="flex justify-between text-xs text-neutral-500 mb-8 font-medium tracking-wide">
<div className="flex gap-6">
<span className="text-white border-b border-white pb-1">Impacto</span>
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Datos</span>
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Adopción</span>
</div>
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 bg-[#222] rounded-xl border border-neutral-700 text-center">
<iconify-icon className="text-indigo-400 mb-2" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<div className="text-xs text-neutral-500">Eficiencia</div>
<div className="text-lg font-bold text-white">+45%</div>
</div>
<div className="p-4 bg-[#222] rounded-xl border border-neutral-700 text-center">
<iconify-icon className="text-emerald-400 mb-2" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<div className="text-xs text-neutral-500">Adopción</div>
<div className="text-lg font-bold text-white">92%</div>
</div>
<div className="p-4 bg-[#222] rounded-xl border border-neutral-700 text-center">
<iconify-icon className="text-orange-400 mb-2" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div className="text-xs text-neutral-500">Seguridad</div>
<div className="text-lg font-bold text-white">100%</div>
</div>
</div>
<div className="bg-[#222] rounded-xl p-8 border border-neutral-700 relative overflow-hidden shadow-inner">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">
<iconify-icon height="24" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Escalabilidad Empresarial</h3>
<p className="text-xs text-neutral-500 mb-6">Sistemas diseñados para el crecimiento real.</p>
<button className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    Ver Metodología
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="mt-20 scroll-mt-24" id="consultoria">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">


<div className="md:pr-24 md:border-r border-neutral-200 md:sticky md:top-32 md:self-start reveal">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-6">Consultoría Estratégica</div>
<h3 className="md:text-5xl lg:text-6xl leading-tight text-balance text-4xl font-semibold tracking-tighter mb-12">
                        Analizamos, definimos y acompañamos tu transformación.
                    </h3>
<p className="text-lg text-neutral-600 mb-8 max-w-md">
                        Desde la idea hasta la implementación. Alineamos tecnología, procesos y cultura para asegurar el retorno de inversión.
                    </p>
<div className="mt-12 flex flex-wrap gap-3">
<button className="px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-medium hover:bg-neutral-700 transition-colors" onclick="filterResources('all')">Todos</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('ia')">IA Aplicada</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('software')">Software</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('talento')">Talento</button>
</div>
</div>

<div className="md:pl-24 flex flex-col min-h-[500px] h-full justify-between pt-8 md:pt-0">
<ul className="space-y-4 text-right md:text-right w-full" id="skills-list">

<li className="group reveal delay-100" data-category="ia" data-name="chatbots asistentes ia">
<a className="block hover:border-neutral-900 transition-all duration-300 border-neutral-100 border-b pb-4 md:pb-8" href="#">
<div className="flex justify-between md:justify-end items-center gap-4 md:gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors shrink-0">01</span>
<span className="text-xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300 text-right">Asistentes Empresariales IA</span>
</div>
</a>
</li>

<li className="group reveal delay-200" data-category="software" data-name="software a medida erp crm">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors">02</span>
<span className="text-2xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300">Desarrollo Software a Medida</span>
</div>
</a>
</li>

<li className="group reveal delay-300" data-category="talento" data-name="capacitacion formacion talento">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-500 group-hover:text-black transition-colors">03</span>
<span className="text-2xl md:text-3xl font-medium text-black group-hover:translate-x-[-10px] transition-all duration-300">Formación y Adopción</span>
</div>
</a>
</li>

<li className="group reveal" data-category="ia" data-name="modelos predictivos analitica">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors">04</span>
<span className="text-2xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300">Analítica Predictiva</span>
</div>
</a>
</li>
</ul>
<p className="hidden text-center text-neutral-400 py-12" id="no-results">Selecciona otra categoría.</p>

<div className="self-end reveal hover:-translate-y-2 transition-transform duration-500 md:mt-8 bg-white w-full max-w-sm border-neutral-200 border rounded-2xl mt-16 pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-white" height="20" icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-2 leading-tight">Smartape Academy</h4>
<p className="text-neutral-500 text-sm mb-8">Programas de capacitación para C-Suite y equipos operativos.</p>
<button className="w-full flex items-center justify-between bg-neutral-900 text-white pl-6 pr-4 py-3.5 text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all hover:pr-3 group">
                            Ver Programas
                            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="py-12 md:py-24 relative reveal" id="soluciones">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">Por qué Smartape</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-neutral-900 tracking-tighter">
                        Una visión integral para un futuro digital.
                    </h2>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="relative bg-[#a5b4fc] rounded-3xl p-8 flex flex-col min-h-[400px] hover:scale-[1.01] transition-transform duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:smart-home-angle-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-neutral-800 uppercase tracking-wide">IA Aplicada</span>
</div>
<h3 className="text-3xl font-semibold text-black tracking-tighter mb-4">
                        Inteligencia que trabaja.
                    </h3>
<p className="text-neutral-800/80 font-medium mb-8 leading-relaxed">
                        Desarrollamos asistentes virtuales y modelos de automatización entrenados específicamente con los datos de tu negocio.
                    </p>
<ul className="space-y-3 mt-auto mb-8">
<li className="flex items-center gap-2 text-sm font-medium"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Chatbots Corporativos</li>
<li className="flex items-center gap-2 text-sm font-medium"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Automatización de Procesos</li>
<li className="flex items-center gap-2 text-sm font-medium"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Modelos Predictivos</li>
</ul>
<div>
<button className="w-full py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-50 transition-colors uppercase tracking-wide">
                            Explorar IA
                        </button>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[400px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600">
<iconify-icon height="18" icon="solar:code-square-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-neutral-600 uppercase tracking-wide">Software a Medida</span>
</div>
<h3 className="text-3xl font-semibold text-black tracking-tighter mb-4">
                        Sistemas Reales.
                    </h3>
<p className="text-neutral-600 font-medium mb-8 leading-relaxed">
                        Creamos plataformas internas, CRMs y ERPs diseñados milimétricamente según tus procesos operativos únicos.
                    </p>
<ul className="space-y-3 mt-auto mb-8 text-neutral-600">
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Plataformas Centralizadas</li>
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Integración de APIs</li>
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Seguridad Empresarial</li>
</ul>
<div className="">
<button className="w-full py-4 bg-white border border-neutral-200 text-black text-sm font-bold rounded-full hover:border-black transition-colors uppercase tracking-wide shadow-sm">
                            Ver Desarrollo
                        </button>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[400px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600">
<iconify-icon height="18" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-neutral-600 uppercase tracking-wide">Desarrollo de Talento</span>
</div>
<h3 className="text-3xl font-semibold text-black tracking-tighter mb-4">
                        Adopción Humana.
                    </h3>
<p className="text-neutral-600 font-medium mb-8 leading-relaxed">
                        Acompañamos el cambio cultural. Formamos a tus equipos para asegurar que la tecnología sea adoptada y aprovechada.
                    </p>
<ul className="space-y-3 mt-auto mb-8 text-neutral-600">
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Capacitación Corporativa</li>
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Gestión del Cambio</li>
<li className="flex items-center gap-2 text-sm"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Medición de Uso</li>
</ul>
<div>
<button className="w-full py-4 bg-white border border-neutral-200 text-black text-sm font-bold rounded-full hover:border-black transition-colors uppercase tracking-wide shadow-sm">
                            Plan de Capacitación
                        </button>
</div>
</div>
</div>
</section>

<section className="mb-20">
<div className="relative w-full rounded-[2.5rem] bg-[#111111] overflow-hidden px-8 py-20 md:py-32 text-center reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-none mb-8">
                        Lidera el<br/>Futuro.
                    </h2>
<p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                        La Inteligencia Artificial está transformando los negocios. Sé parte de las empresas que lideran el cambio con Smartape.
                    </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
<button className="px-10 py-4 bg-white text-black rounded-full text-base font-bold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] min-w-[200px]">
                            Agendar Sesión
                        </button>
<button className="px-10 py-4 bg-transparent border border-neutral-700 text-white rounded-full text-base font-semibold hover:border-white transition-all duration-300 min-w-[200px]">
                            Evaluar Oportunidades
                        </button>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden border-t border-black pt-12 relative">
<div className="w-full overflow-hidden py-10">
<h1 className="text-[15vw] leading-[0.8] uppercase whitespace-nowrap select-none transition-transform duration-75 will-change-transform font-bold text-black tracking-tighter translate-x-0" id="footer-text" style={{transform: 'translateX(-42.1px)'}}>Smartape Inc</h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6 pb-12 reveal">
<div className="flex gap-4">
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<iconify-icon height="20" icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Privacidad</a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Términos</a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Alianzas</a>
</div>
<div className="text-sm font-medium text-neutral-400">
                    © 2024 Smartape. Todos los derechos reservados.
                </div>
</div>
</section>
</main>


    </>
  );
}
