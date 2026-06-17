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



        document.addEventListener('DOMContentLoaded', () => {
            // Reveal Animation on Scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Spotlight Effect
            const cards = document.querySelectorAll('.spotlight-card');
            const container = document.getElementById('cards-container');

            if(container) {
                container.onmousemove = e => {
                    for(const card of cards) {
                        const rect = card.getBoundingClientRect(),
                            x = e.clientX - rect.left,
                            y = e.clientY - rect.top;

                        card.style.setProperty("--mouse-x", `${x}px`);
                        card.style.setProperty("--mouse-y", `${y}px`);
                    };
                }
            }

            // Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');

            if (btn && menu) {
                btn.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                    menu.classList.toggle('flex');
                });
            }

            // Header Scroll Effect
            window.addEventListener('scroll', () => {
                const header = document.getElementById('header');
                if (window.scrollY > 20) {
                    header.classList.add('shadow-lg', 'shadow-sky-900/5', 'bg-[#020408]/80');
                    header.classList.replace('border-transparent', 'border-white/[0.06]');
                } else {
                    header.classList.remove('shadow-lg', 'shadow-sky-900/5', 'bg-[#020408]/80');
                    header.classList.replace('border-white/[0.06]', 'border-transparent');
                }
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
      

<div className="bg-noise"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-indigo-900/10 rounded-full blur-[120px] animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-sky-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-transparent backdrop-blur-xl transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group cursor-pointer z-50" href="#">
<div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center overflow-hidden shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
<span className="font-mono text-white font-bold text-lg relative z-10">W</span>
<div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-10 group-hover:translate-x-10 transition-transform duration-700"></div>
</div>
<span className="font-semibold text-white tracking-tight text-sm">wordpressdev.tn</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all" href="#services">Services</a>
<a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all" href="#processus">Process</a>
<a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all" href="#projets">Projets</a>
<a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all" href="#about">À propos</a>
<a className="text-xs font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center relative px-5 py-2 group overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all z-50 cursor-pointer" href="https://wa.me/21622367325" target="_blank">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
<span className="relative text-xs font-medium text-white group-hover:text-sky-300 transition-colors flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        Disponible
                    </span>
</a>
<button className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors z-50" id="mobile-menu-btn">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="hidden absolute top-[65px] left-0 w-full bg-[#020408]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex-col gap-2 md:hidden transform transition-all duration-300 origin-top shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors" href="#processus">Process</a>
<a className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors" href="#projets">Projets</a>
<a className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-colors" href="#about">À propos</a>
<a className="mt-4 flex items-center justify-center w-full bg-sky-600 text-white font-medium text-sm py-3 rounded-lg" href="https://wa.me/21622367325">Démarrer un projet</a>
</div>
</header>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-40 relative">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="flex flex-col reveal active text-left z-30 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-[10px] font-mono font-medium text-sky-400 mb-8 hover:bg-sky-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                        V2.0 SYSTEM STATUS: ONLINE
                    </div>
<h1 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 font-semibold leading-[1.1]">
                        Architecte Web
                        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 animate-gradient-x">
                            Haute Performance
                        </span>
</h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-lg mb-10 font-light tracking-wide">
                        Je construis des écosystèmes WordPress sur-mesure pour les entreprises exigeantes.
                        <span className="text-slate-200 font-medium">Sécurité bancaire, vitesse instantanée et design millimétré.</span>
</p>
<div className="flex flex-wrap items-center gap-4 w-full z-40">
<a className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none group active:scale-95 transition-transform" href="https://wa.me/21622367325">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)]" style={{animation: 'spin-slow 2s linear infinite'}}></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
                                Discuter du projet
                                <svg className="ml-2 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="group inline-flex items-center justify-center font-medium text-slate-300 hover:text-white transition-colors h-12 px-6 rounded-full text-sm z-40 relative" href="#projets">
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">Explorer le portfolio</span>
</a>
</div>

<div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pointer-events-auto">
<svg className="h-6 w-6 fill-current text-white" viewbox="0 0 24 24">
<path d="M12.724 1.343c-.496.082-.98.243-1.446.478a6.002 6.002 0 0 0-2.336 2.06c-.168.257-.315.526-.441.805-.443.996-.549 2.112-.303 3.176.108.455.275.892.496 1.299l.21.378c.036.064.072.127.11.188l.142.226c.465.706 1.077 1.3 1.797 1.745l.173.102c.488.277 1.008.484 1.547.615l.18.04c.059.013.118.025.178.036.634.116 1.284.127 1.925.034a6.04 6.04 0 0 0 2.219-.77l.144-.087c.305-.195.594-.415.864-.658l.745-.715c.394-.42.733-.89 1.01-1.4l.056-.107c.07-.135.136-.271.198-.41.528-1.157.653-2.455.36-3.696-.134-.567-.361-1.109-.675-1.599l-.066-.102a5.98 5.98 0 0 0-1.841-1.688 6.04 6.04 0 0 0-2.673-.858c-.131-.013-.263-.021-.395-.025a6.02 6.02 0 0 0-1.922.257zM11.96 4.39c.273-.604.654-1.154 1.13-1.626l.16-.153c.12-.11.244-.216.372-.317l.167-.123c.318-.22.659-.406 1.017-.553.159-.062.319-.118.481-.167.315-.091.638-.152.964-.183l.254-.017c.306-.013.612-.001.917.036.697.086 1.373.308 1.995.656l.156.092c.15.09.297.185.44.286l.145.105c.42.316.797.684 1.121 1.096l.107.14c.23.31.428.643.592.993.284.62.433 1.298.437 1.986v.078c-.027.674-.202 1.332-.511 1.929l-.048.09c-.19.344-.415.666-.671.961l-.105.116c-.078.083-.158.164-.241.242l-.656.592c-.22.186-.452.357-.696.512l-.122.073c-.563.328-1.168.561-1.795.693l-.15.028c-.12.02-.24.037-.36.05-.624.062-1.254.02-1.865-.125-.494-.118-.971-.314-1.419-.58l-.16-.101c-.568-.372-1.076-.846-1.503-1.402l-.126-.172a5.16 5.16 0 0 1-.363-.563l-.042-.075c-.24-.452-.407-.936-.496-1.432-.152-.843-.11-1.713.123-2.536.143-.497.37-1.07.675-1.597z"></path>
</svg>
<span className="text-xs font-mono text-slate-500">WordPress</span>
<div className="h-1 w-1 bg-slate-700 rounded-full"></div>
<span className="text-xs font-mono text-slate-500">React</span>
<div className="h-1 w-1 bg-slate-700 rounded-full"></div>
<span className="text-xs font-mono text-slate-500">Tailwind</span>
<div className="h-1 w-1 bg-slate-700 rounded-full"></div>
<span className="text-xs font-mono text-slate-500">Node.js</span>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-[2000px] z-20">

<div className="w-[480px] bg-[#0F1117] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-float relative z-10">
<div className="bg-[#0F1117] px-4 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-slate-600 font-mono font-medium">deploy.config.js</div>
<div className="w-10"></div>
</div>
<div className="p-6 font-mono text-[12px] leading-7 bg-[#0F1117]">
<div className="text-slate-500 mb-4 font-normal italic">// Initialisation de l'architecture optimisée</div>
<div className="mb-1">
<span className="text-purple-400">const</span>
<span className="text-blue-400 font-medium">config</span>
<span className="text-purple-400">=</span>
<span className="text-slate-500">{</span>
</div>
<div className="pl-4 mb-1">
<span className="text-slate-300">mode:</span>
<span className="text-emerald-400">'production'</span>
<span className="text-slate-500">,</span>
</div>
<div className="pl-4 mb-1">
<span className="text-slate-300">cache_strategy:</span>
<span className="text-yellow-300">'stale-while-revalidate'</span>
<span className="text-slate-500">,</span>
</div>
<div className="pl-4 mb-1">
<span className="text-slate-300">cdn_regions:</span>
<span className="text-slate-500">[</span>
<span className="text-emerald-400">'eu-west'</span>
<span className="text-slate-500">,</span>
<span className="text-emerald-400">'us-east'</span>
<span className="text-slate-500">]</span>
<span className="text-slate-500">,</span>
</div>
<div className="pl-4 mb-1">
<span className="text-slate-300">security:</span>
<span className="text-slate-500">{</span>
</div>
<div className="pl-8 mb-1">
<span className="text-slate-300">waf:</span>
<span className="text-purple-400">true</span>
<span className="text-slate-500">,</span>
</div>
<div className="pl-8 mb-1">
<span className="text-slate-300">ddos_protection:</span>
<span className="text-purple-400">true</span>
</div>
<div className="pl-4 mb-1">
<span className="text-slate-500">}</span>
</div>
<div className="mb-4">
<span className="text-slate-500">};</span>
</div>
<div className="flex items-center gap-2 mt-6">
<span className="text-blue-500">➜</span>
<span className="text-emerald-400 typing-animation font-medium">Build completed in 42ms...</span>
</div>
</div>
</div>

<div className="absolute -right-2 bottom-12 bg-[#0B0E14] border border-white/10 p-3 pr-6 rounded-lg shadow-2xl animate-float z-20" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-500/10 p-1.5 rounded text-green-500">
<svg className="w-5 h-5" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.003 2c-5.522 0-10 4.477-10 10s4.478 10 10 10c4.687 0 8.618-3.272 9.68-7.653.078-.32.116-.65.116-.983 0-.17-.006-.34-.017-.508h-9.779v3.746h5.45c-.452 2.148-2.327 3.738-4.671 3.738-2.65 0-4.805-2.155-4.805-4.805s2.155-4.805 4.805-4.805c1.192 0 2.279.444 3.12 1.177l2.67-2.67c-1.637-1.528-3.791-2.407-6.595-2.407z"></path>
</svg>
</div>
<div className="flex flex-col">
<div className="text-[11px] font-bold text-white leading-tight">Score Google</div>
<div className="text-[9px] text-slate-400 leading-tight">Core Web Vitals</div>
</div>
<div className="text-2xl font-bold text-green-400 ml-2 tracking-tight">100</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal active">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Architecture &amp; Design</h2>
<p className="text-slate-400 text-sm max-w-md border-l border-slate-800 pl-4">Une approche modulaire pour des résultats évolutifs. Chaque brique est optimisée.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="cards-container">

<div className="md:col-span-2 spotlight-card rounded-xl p-8 group transition-all duration-300 reveal h-[300px] flex flex-col justify-between" style={{'--mouse-x': '0px', '--mouse-y': '0px'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-sky-500/20 group-hover:border-sky-500/20 group-hover:text-sky-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Développement Headless</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">Découplage du backend WordPress et du frontend (React/Next.js) pour une sécurité totale et une vitesse instantanée.</p>
</div>
<div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="200" viewbox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M0 200L200 0" stroke="white" strokeWidth="0.5"></path>
<path d="M20 200L200 20" stroke="white" strokeWidth="0.5"></path>
<path d="M40 200L200 40" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
</div>

<div className="spotlight-card rounded-xl p-8 group transition-all duration-300 reveal delay-100 flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-500/20 group-hover:border-purple-500/20 group-hover:text-purple-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">E-Commerce</h3>
<p className="text-slate-400 text-xs leading-relaxed">WooCommerce optimisé pour les forts volumes. Tunnels de conversion fluides.</p>
</div>
</div>

<div className="spotlight-card rounded-xl p-8 group transition-all duration-300 reveal delay-100 flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/20 group-hover:text-emerald-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">SEO Technique</h3>
<p className="leading-relaxed text-xs text-slate-400">Structure de données JSON-LD, Sitemap XML dynamique et performance vitale.</p>
</div>
</div>

<div className="md:col-span-2 spotlight-card rounded-xl p-8 group transition-all duration-300 reveal delay-200 h-[300px] flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/20 group-hover:text-orange-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
<path d="m13 12-3 5h4l-3 5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Infrastucture Cloud</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">Hébergement sur serveurs dédiés ou Cloud (AWS/DigitalOcean). Configuration de Redis, Varnish et CDN pour des temps de réponse &lt;100ms.</p>
</div>

<div className="absolute bottom-6 right-6 flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-2 bg-slate-700 h-4 rounded-sm"></div>
<div className="w-2 bg-slate-700 h-8 rounded-sm"></div>
<div className="w-2 bg-slate-700 h-6 rounded-sm"></div>
<div className="w-2 bg-orange-500 h-12 rounded-sm shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
<div className="w-2 bg-slate-700 h-10 rounded-sm"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40 reveal" id="processus">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Comment se déroule un projet ?</h2>
<p className="text-slate-400 text-sm">Une méthodologie simple et efficace pour garantir le succès.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative flex flex-col items-center text-center group z-10">
<div className="w-14 h-14 rounded-full bg-[#0B0E14] border border-white/10 flex items-center justify-center mb-6 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all duration-500 shadow-lg shadow-black/50">
<span className="font-mono text-lg font-medium text-slate-500 group-hover:text-sky-400 transition-colors">1</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Découverte</h3>
<p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">Appel WhatsApp ou échange pour définir vos objectifs, votre cible et rassembler le contenu.</p>
</div>

<div className="relative flex flex-col items-center text-center group z-10 delay-100">
<div className="w-14 h-14 rounded-full bg-[#0B0E14] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-500 shadow-lg shadow-black/50">
<span className="font-mono text-lg font-medium text-slate-500 group-hover:text-purple-400 transition-colors">2</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Design &amp; Maquette</h3>
<p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">Validation de la structure, choix du style visuel et création des maquettes.</p>
</div>

<div className="relative flex flex-col items-center text-center group z-10 delay-200">
<div className="w-14 h-14 rounded-full bg-[#0B0E14] border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500 shadow-lg shadow-black/50">
<span className="font-mono text-lg font-medium text-slate-500 group-hover:text-emerald-400 transition-colors">3</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Développement</h3>
<p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">Intégration WordPress, configuration, tests et optimisation technique (Vitesse &amp; SEO).</p>
</div>

<div className="relative flex flex-col items-center text-center group z-10 delay-300">
<div className="w-14 h-14 rounded-full bg-[#0B0E14] border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-500 shadow-lg shadow-black/50">
<span className="font-mono text-lg font-medium text-slate-500 group-hover:text-orange-400 transition-colors">4</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Livraison &amp; Suivi</h3>
<p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">Mise en ligne, formation à l'administration et support post-lancement.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40" id="projets">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Sélection de projets</h2>
<p className="text-slate-400 text-sm">Déploiements récents en production.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group border-b border-transparent hover:border-white pb-0.5" href="https://wa.me/21622367325">
                    Voir tout
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal">
<div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14] relative aspect-[4/3] mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<img alt="E-commerce Store" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-4 left-4 z-20">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-lg shadow-white/20 scale-0 group-hover:scale-100 transition-transform duration-300">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
</div>
<h3 className="group-hover:text-sky-400 transition-colors text-base font-semibold text-white mb-1">Boutique en ligne</h3>
<p className="text-xs text-slate-500">WooCommerce • Next.js • Stripe</p>
</div>

<div className="group cursor-pointer reveal delay-100">
<div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14] relative aspect-[4/3] mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<img alt="Law Firm Office" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute bottom-4 left-4 z-20">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-lg shadow-white/20 scale-0 group-hover:scale-100 transition-transform duration-300">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">Cabinet Avocat</h3>
<p className="text-xs text-slate-500">Site Vitrine • Animations WebGL</p>
</div>

<div className="group cursor-pointer reveal delay-200">
<div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14] relative aspect-[4/3] mb-4">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700 ease-out">
<img alt="SaaS Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute bottom-4 left-4 z-20">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-lg shadow-white/20 scale-0 group-hover:scale-100 transition-transform duration-300">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
</div>
<h3 className="text-base font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors">SaaS Landing</h3>
<p className="text-xs text-slate-500">Landing Page • Optimization Conversion</p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-16 mb-40" id="avis">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
<div className="text-center px-4 reveal">
<p className="text-3xl font-bold text-white tracking-tight mb-1 font-mono">40+</p>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Projets Livrés</p>
</div>
<div className="text-center px-4 reveal delay-100">
<p className="text-3xl font-bold text-white tracking-tight mb-1 font-mono">5 Ans</p>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Expérience</p>
</div>
<div className="text-center px-4 reveal delay-200">
<p className="text-3xl font-bold text-white tracking-tight mb-1 font-mono text-green-400">99.9%</p>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Uptime Moyen</p>
</div>
<div className="text-center px-4 reveal delay-300">
<p className="text-3xl font-bold text-white tracking-tight mb-1 font-mono">24h</p>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Support SLA</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40 reveal" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tighter mb-6">
                        Plus qu'un développeur,<br/>
<span className="text-slate-400">un partenaire technique.</span>
</h2>
<div className="space-y-6 text-sm text-slate-400 leading-relaxed font-light">
<p>À l'heure où le digital est saturé de solutions standardisées, je fais le choix de l'artisanat numérique de haute précision. Mon objectif n'est pas simplement de livrer un site, mais de construire une infrastructure pérenne qui soutient la croissance de votre entreprise.</p>
<p>Spécialisé dans l'architecture <strong>WordPress Headless</strong> et les technologies React, je comble le fossé entre la flexibilité de gestion de contenu et la performance brute d'une application moderne.</p>
<p>Je ne suis pas une agence avec des frais de structure gonflés. Je suis votre interlocuteur unique, garantissant une communication fluide, une réactivité immédiate et une responsabilité totale sur le code que je produis.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020408] flex items-center justify-center text-[10px] text-white font-medium">JS</div>
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020408] flex items-center justify-center text-[10px] text-white font-medium">WP</div>
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020408] flex items-center justify-center text-[10px] text-white font-medium">AWS</div>
</div>
<span className="text-xs text-slate-500 font-mono">STACK TECHNIQUE MAÎTRISÉE</span>
</div>
</div>
<div className="relative bg-[#0B0E14] rounded-xl border border-white/5 p-8 overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]"></div>
<h3 className="text-white font-medium mb-6 relative z-10">Pourquoi collaborer avec un expert ?</h3>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3 items-start">
<div className="mt-1 w-4 h-4 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium">Code Propriétaire &amp; Propre</h4>
<p className="text-xs text-slate-500 mt-1">Pas de constructeurs de pages lourds (Divi/Elementor) qui ralentissent votre site.</p>
</div>
</li>
<li className="flex gap-3 items-start">
<div className="mt-1 w-4 h-4 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium">Optimisation Core Web Vitals</h4>
<p className="text-xs text-slate-500 mt-1">Garantie de scores verts sur Google PageSpeed pour un meilleur référencement.</p>
</div>
</li>
<li className="flex gap-3 items-start">
<div className="mt-1 w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium">Sécurité Offensive</h4>
<p className="text-xs text-slate-500 mt-1">Configuration WAF, headers de sécurité et protection contre les attaques DDOS.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-40" id="faq">
<h2 className="text-3xl font-semibold text-white tracking-tighter mb-10 text-center reveal">Questions fréquentes</h2>
<div className="space-y-3">
<div className="group bg-[#0B0E14] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10 reveal">
<button className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-slate-200" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span>Combien de temps pour un déploiement ?</span>
<svg className="text-slate-500 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        Cela dépend de la complexité. Un site vitrine prend généralement entre 1 à 2 semaines. Une boutique e-commerce complète peut prendre 3 à 4 semaines.
                    </div>
</div>
<div className="group bg-[#0B0E14] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10 reveal delay-100">
<button className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-slate-200" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span>Maintenance et mises à jour ?</span>
<svg className="text-slate-500 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        Je configure l'environnement cloud avec des backups automatiques. Un contrat de maintenance est disponible pour assurer la sécurité à long terme.
                    </div>
</div>
<div className="group bg-[#0B0E14] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10 reveal delay-200">
<button className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-slate-200" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span>Structure des coûts ?</span>
<svg className="text-slate-500 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                        Chaque projet est unique. Je propose un devis détaillé après un premier appel de découverte gratuit.
                    </div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-20 reveal">
<div className="relative bg-gradient-to-b from-[#0F1117] to-black border border-white/10 rounded-2xl overflow-hidden p-1">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px bg-white/5">

<div className="bg-[#0B0E14] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-[50px] transition-opacity group-hover:opacity-100 opacity-50"></div>
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Démarrons le projet</h3>
<p className="text-slate-400 mb-8 text-sm leading-relaxed">Vous avez une vision, j'ai l'expertise technique. Créons quelque chose d'exceptionnel.</p>
<a className="w-full bg-[#1e293b] hover:bg-[#253045] text-white border border-white/10 font-medium h-14 rounded-lg flex items-center justify-center gap-3 transition-all mb-6 group/btn" href="https://wa.me/21622367325" target="_blank">
<svg className="text-green-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
<span className="text-sm">WhatsApp Direct</span>
<svg className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium font-mono">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                            RÉPONSE SOUS 2 HEURES
                        </div>
</div>

<div className="bg-[#0B0E14] p-8 md:p-12">
<form action="mailto:contact@wordpressdev.tn" className="space-y-4" enctype="text/plain" method="POST" onsubmit="">
<div className="group">
<label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 group-focus-within:text-sky-400 transition-colors">Nom</label>
<input className="w-full bg-[#151921] border border-white/5 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all" name="nom" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 group-focus-within:text-sky-400 transition-colors">Email</label>
<input className="w-full bg-[#151921] border border-white/5 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all" name="email" placeholder="john@company.com" type="email"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 group-focus-within:text-sky-400 transition-colors">Message</label>
<textarea className="w-full bg-[#151921] border border-white/5 focus:border-sky-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none resize-none transition-all" name="message" placeholder="Parlez-moi de votre projet..." rows="3"></textarea>
</div>
<button className="w-full bg-white hover:bg-slate-200 text-black font-bold h-12 rounded-lg mt-2 text-sm transition-all transform active:scale-[0.98]">Envoyer la demande</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#010204] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="flex flex-col gap-6 max-w-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">W</div>
<span className="text-sm font-bold text-white tracking-tight">WORDPRESSDEV.TN</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Expertise technique pour écosystèmes digitaux. Nous combinons l'art du code avec la science de la performance.</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 text-xs text-slate-400">
<div className="flex flex-col gap-4">
<span className="font-bold text-white">Sitemap</span>
<a className="hover:text-sky-400 transition-colors" href="#services">Services</a>
<a className="hover:text-sky-400 transition-colors" href="#projets">Portfolio</a>
<a className="hover:text-sky-400 transition-colors" href="#processus">Processus</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-white">Contact</span>
<a className="hover:text-sky-400 transition-colors" href="mailto:contact@wordpressdev.tn">contact@wordpressdev.tn</a>
<a className="hover:text-sky-400 transition-colors" href="https://wa.me/21622367325">+216 22 367 325</a>
<span className="text-slate-600">Tunis, Tunisie</span>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-slate-600 font-mono">
                    © 2024 WORDPRESSDEV.TN.
                    <span className="hidden md:inline">DESIGNED WITH PASSION.</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-slate-400 font-medium">Serveurs Opérationnels</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
