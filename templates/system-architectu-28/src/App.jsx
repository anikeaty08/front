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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      
<div className="bg-grain"></div>

<div className="fixed flex animate-slide-up [animation-delay:0.5s] z-50 opacity-0 pr-4 pl-4 top-6 right-0 left-0 justify-center">
<nav className="flex transition-all duration-300 bg-neutral-900/60 w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-3 pl-4">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:server-square-bold-duotone" width="18"></iconify-icon>
</div>
<span className="font-bricolage text-lg tracking-tight font-medium">
            Архитектор ИС
          </span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-white/60">
<a className="text-white hover:text-white transition-colors" href="#">
            Обзор
          </a>
<a className="hover:text-white transition-colors" href="#projects">
            Проекты
          </a>
<a className="hover:text-white transition-colors" href="#process">Стек</a>
<a className="hover:text-white transition-colors" href="#careers">Опыт</a>
<a className="hover:text-white transition-colors" href="#methodology">
            Методология
          </a>
</div>

<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group">
<iconify-icon icon="solar:menu-dots-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
</button>
</div>
</nav>
</div>

<header className="relative w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 min-h-screen md:h-screen">

<div className="absolute inset-0 z-0 bg-black">
<img alt="Abstract Data Architecture" className="w-full h-full object-cover animate-cinematic opacity-0 grayscale contrast-125 brightness-50" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90"></div>
<div className="bg-black/20 mix-blend-overlay absolute inset-0"></div>
</div>

<div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2 animate-slide-up [animation-delay:2.5s] opacity-0">
<div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono tracking-wider uppercase text-white/90">
            System Status: Optimal
          </span>
</div>
</div>
<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

<div className="md:col-span-7 relative">

<div className="flex items-center gap-3 mb-6 animate-slide-up [animation-delay:1.2s] opacity-0">
<span className="h-[1px] w-8 bg-white/60"></span>
<span className="text-xs font-mono uppercase tracking-widest text-white/80">
              Est. 2018
            </span>
</div>
<h1 className="font-bricolage text-white leading-[0.85] tracking-tight font-medium">
<span className="block text-[13vw] md:text-[8rem] lg:text-[10rem] animate-slide-up [animation-delay:1.4s] opacity-0 mix-blend-normal text-white drop-shadow-2xl">
              SYSTEM
            </span>
<div className="flex items-baseline gap-4 md:gap-8 -mt-2 md:-mt-6 animate-slide-up [animation-delay:1.6s] opacity-0">
<span className="text-[13vw] md:text-[8rem] lg:text-[10rem] font-serif italic font-thin text-white/60 opacity-50 blur-[1px]">
                &amp;
              </span>
<span className="text-[13vw] md:text-[8rem] lg:text-[10rem] text-white drop-shadow-2xl">
                DESIGN
              </span>
</div>
</h1>
</div>

<div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">

<div className="overflow-hidden animate-slide-up [animation-delay:1.8s] md:p-8 bg-neutral-950/60 opacity-0 border-white/10 border rounded-2xl ring-white/5 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-2xl">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect"></div>
<div className="relative z-10">
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 antialiased drop-shadow-md">
                Проектирование цифровых экосистем масштаба Enterprise. Отказоустойчивые архитектуры, микросервисы и облачные вычисления.
              </p>
<div className="flex flex-col gap-6">
<div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Services
                    </span>
<span className="text-2xl font-bricolage text-white">140+</span>
</div>
<div className="">
<span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">
                      Uptime
                    </span>
<span className="text-2xl font-bricolage text-white">99.9%</span>
</div>
</div>
<a className="group flex items-center justify-between w-full p-1 border-b border-white/30 hover:border-white transition-colors pb-2" href="#projects">
<span className="text-sm font-medium tracking-wide text-white">
                    Смотреть проекты
                  </span>
<iconify-icon className="text-white group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up [animation-delay:2.2s] opacity-0">
<span className="text-[10px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
<div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 animate-slide-up [animation-delay:2.4s] opacity-0 z-20">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-mono">
<span>Sys.Monitor</span>
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
<span>V. 2.4.0</span>
</div>
<div className="bg-neutral-900/80 w-64 border-white/10 border rounded-xl px-4 py-4 backdrop-blur">
<div className="flex justify-between mb-2">
<span className="text-xs text-white/60">Cluster Health</span>
<span className="text-xs text-emerald-400">Stable</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 w-[98%] h-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Latency
              </span>
<span className="text-sm text-white font-mono">12ms</span>
</div>
<div>
<span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Throughput
              </span>
<span className="text-sm text-white font-mono">40k rps</span>
</div>
</div>
</div>
</div>
</header>
<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"></div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"></div>
<div className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse"></div>
</div>
</div>

<section className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden selection:bg-emerald-500/30" id="projects">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse"></div>
<div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl relative animate-on-scroll">
<div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-4 text-emerald-400">
<iconify-icon className="animate-spin-slow" icon="solar:programming-linear" width="16"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/80">
                Project Log 2024
              </span>
</div>
<h2 className="text-5xl md:text-8xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Digital
              <span className="text-white/20 font-light">Ecosystems.</span>
</h2>
</div>

<div className="relative group animate-on-scroll delay-100">
<div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
<button className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-white text-neutral-950 shadow-lg shadow-white/5">
<iconify-icon icon="solar:widget-2-linear" width="14"></iconify-icon>
                Все проекты
              </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5">
<iconify-icon icon="solar:cloud-linear" width="14"></iconify-icon>
                Cloud
              </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                Security
              </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

<div className="group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-700 hover:border-white/20 animate-on-scroll delay-200">
<div className="absolute inset-0 z-0">
<img alt="Server Cluster" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>

<div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/80">
                  FinTech Core
                </span>
<span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Active
                </span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
<div className="max-w-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[8rem] md:text-[12rem] font-bricolage font-bold text-white/5 absolute -top-32 md:-top-40 -left-6 pointer-events-none select-none tracking-tighter">
                  01
                </div>
<h3 className="text-4xl md:text-6xl font-bricolage font-medium text-white mb-4 relative tracking-tight">
                  Banking ERP
                </h3>
<p className="text-white/70 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                  Отказоустойчивая микросервисная архитектура для банковского сектора. Обработка 50k+ транзакций в секунду с нулевым временем простоя.
                </p>
<div className="flex items-center gap-8 pt-6 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
<div>
<span className="block text-white mb-1">Stack</span>
                    Go / Kafka
                  </div>
<div>
<span className="block text-white mb-1">Load</span>
                    High RPS
                  </div>
<div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 md:row-span-2 flex flex-col gap-6">

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 hover:border-white/20 animate-on-scroll delay-300">
<div className="absolute inset-0 z-0">
<img alt="Cloud Network" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<span className="font-bricolage text-sm font-medium">02</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgb(59,130,246)]"></span>
<span className="text-[10px] uppercase text-blue-400 tracking-widest font-mono">
                      Infrastructure
                    </span>
</div>
<h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                    Cloud Mesh
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Оркестрация Kubernetes кластеров в гибридном облаке для бесшовного масштабирования.
                  </p>
</div>
</div>
</div>

<div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 hover:border-white/20 animate-on-scroll delay-400">
<div className="absolute inset-0 z-0">
<img alt="Cybersecurity" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="absolute top-6 right-6 z-20">
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
<span className="font-bricolage text-sm font-medium">03</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]"></span>
<span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                      Cybersec
                    </span>
</div>
<h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                    Zero Trust
                  </h3>
<p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Внедрение протоколов безопасности нового поколения и шифрования данных в покое.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5"></div>
<div className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4">
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-white/20"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
          Sync
        </span>
<div className="flex gap-1">
<div className="w-0.5 h-3 bg-white/20"></div>
<div className="w-0.5 h-3 bg-emerald-500"></div>
</div>
</div>
</div>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="infrastructure">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-emerald-500"></span>
<span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                Global Network
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-bricolage font-medium mb-6 leading-tight animate-on-scroll">
              Distributed
              <br/>
<span className="text-white/40">Architecture</span>
</h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed font-light animate-on-scroll delay-100">
              Построение систем, связывающих центры обработки данных в единую сеть. От периферийных вычислений до централизованных озер данных — полный контроль над потоками информации.
            </p>
<div className="space-y-6">
<div className="flex gap-4 group cursor-default animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-medium mb-1 font-bricolage">
                    Data Processing
                  </h4>
<p className="text-sm text-white/50">
                    Обработка петабайт данных в реальном времени с использованием Apache Kafka.
                  </p>
</div>
</div>
<div className="flex gap-4 group cursor-default animate-on-scroll delay-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl font-medium mb-1 font-bricolage">
                    Global CDN
                  </h4>
<p className="text-sm text-white/50">
                    Оптимизация доставки контента с задержкой менее 50мс по всему миру.
                  </p>
</div>
</div>
</div>
<button className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 group animate-on-scroll delay-300">
              Схема Инфраструктуры
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group animate-on-scroll h-[300px] md:h-[500px]">
<img alt="Server Infrastructure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 grayscale" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20"></div>
<div className="absolute top-1/4 left-1/3 group/spot">
<div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
<div className="w-4 h-4 bg-emerald-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
<div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
<span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider">
                  Node: Europe-West
                </span>
<span className="text-[11px] text-white/70 block">
                  Load: 42%
                </span>
<span className="text-[10px] text-white/40 block mt-1">
                  Status: Operational
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="process">
<div className="absolute top-12 right-6 md:right-12 z-0 opacity-10 font-bricolage font-bold text-[8rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
        TECH
      </div>
<div className="z-10 w-full max-w-5xl mr-auto ml-auto relative">
<style>
          @keyframes barEqualizer {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.3); }
          }
          .bar-anim {
            transform-origin: bottom;
            animation-name: barEqualizer;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-iteration-count: infinite;
          }
        </style>
<div className="text-center mb-16 animate-on-scroll">
<h3 className="text-3xl md:text-5xl font-bricolage font-light text-white mb-4 tracking-tight">
            Technology Stack
          </h3>
<p className="text-white/50">
            Инструменты для создания надежных решений.
          </p>
</div>
<div className="flex flex-col gap-4">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll">
<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center p-4">
<iconify-icon className="text-black w-full h-full" icon="solar:code-square-linear" width="48"></iconify-icon>
</div>
<div>
<iconify-icon className="text-white/60 mb-1" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">
                  Microservices
                </h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Go / Rust
                </p>
</div>
</div>
<div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">Protocol</span>
<span className="text-white text-sm">gRPC</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">Broker</span>
<span className="text-white text-sm">Kafka</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">Scale</span>
<span className="text-white text-sm">Auto</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span>Throughput</span>
<span>Latency</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">

<div className="w-1 bg-white h-[40%] rounded-t-sm bar-anim" style={{animationDuration: '2.1s'}}></div>
<div className="w-1 bg-white h-[60%] rounded-t-sm bar-anim" style={{animationDuration: '1.8s'}}></div>
<div className="w-1 bg-white h-[80%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s'}}></div>
<div className="w-1 bg-white h-[90%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s'}}></div>
<div className="w-1 bg-white h-[50%] rounded-t-sm bar-anim" style={{animationDuration: '1.5s'}}></div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier S</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300 animate-on-scroll">
<div className="col-span-1 md:col-span-4 flex items-center gap-6">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center p-4">
<iconify-icon className="text-black w-full h-full" icon="solar:server-path-linear" width="48"></iconify-icon>
</div>
<div>
<iconify-icon className="text-white/60 mb-1" icon="solar:cloud-linear" width="32"></iconify-icon>
<h4 className="text-xl text-white font-bricolage font-light">
                  Orchestration
                </h4>
<p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  Kubernetes
                </p>
</div>
</div>
<div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">Mesh</span>
<span className="text-white text-sm">Istio</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">CI/CD</span>
<span className="text-white text-sm">ArgoCD</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-white/50 text-xs uppercase tracking-wide">Monitor</span>
<span className="text-white text-sm">Grafana</span>
</div>
<div className="col-span-3 mt-2">
<div className="flex items-center justify-between text-xs text-white/30 mb-1">
<span>Resource Usage</span>
<span>Pod Health</span>
</div>
<div className="w-full h-8 flex items-end gap-0.5 opacity-50">
<div className="w-1 bg-white h-[90%] rounded-t-sm bar-anim" style={{animationDuration: '2.0s'}}></div>
<div className="w-1 bg-white h-[95%] rounded-t-sm bar-anim" style={{animationDuration: '2.3s'}}></div>
<div className="w-1 bg-white h-[92%] rounded-t-sm bar-anim" style={{animationDuration: '1.8s'}}></div>
<div className="w-1 bg-white h-[98%] rounded-t-sm bar-anim" style={{animationDuration: '2.5s'}}></div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
<span className="text-xl font-serif italic text-white">Tier A</span>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden border-t border-white/5" id="systems">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-[1px] bg-white/20"></div>
<span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Methodology
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-bricolage text-white mb-6 tracking-tighter leading-none">
              Design Patterns
            </h2>
<p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
              Проверенные временем архитектурные паттерны, обеспечивающие гибкость и масштабируемость.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-emerald-400 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-40 h-40 rounded-full border border-dashed border-emerald-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight">Event Driven</h3>
<p className="text-sm text-white/40 leading-relaxed">
                Асинхронная коммуникация между сервисами для слабой связности.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-emerald-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-blue-400 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none perspective-midrange">
<div className="relative w-[260px] h-[260px] group-hover:rotate-x-15 group-hover:rotate-y-15 transform-style-preserve-3d transition-transform duration-1000">
<svg className="absolute inset-0 w-full h-full text-blue-500 animate-[spin_30s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<path className="opacity-50" d="M50 15 L80.3 32.5 V67.5 L50 85 L19.7 67.5 V32.5 Z" stroke="currentColor" strokeWidth="0.3"></path>
</svg>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight">DDD</h3>
<p className="text-sm text-white/40 leading-relaxed">
                Domain-Driven Design для моделирования сложной бизнес-логики.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-blue-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm animate-on-scroll delay-300">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-purple-400 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
<div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-purple-500/10 blur-xl animate-pulse"></div>
<div className="absolute w-40 h-40 border border-dashed border-purple-500/20 rounded-full animate-[spin_4s_linear_infinite]"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-32">
<h3 className="text-3xl text-white font-bricolage mb-3 tracking-tight">CQRS</h3>
<p className="text-sm text-white/40 leading-relaxed">
                Разделение ответственности команд чтения и записи для оптимизации.
              </p>
<div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
<div className="absolute inset-0 bg-purple-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="careers">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="max-w-3xl animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-emerald-500"></span>
<span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                Professional Experience
              </span>
</div>
<h2 className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Let's Build
              <span className="text-white/30">Together.</span>
</h2>
</div>
<p className="text-neutral-400 text-lg max-w-md font-light leading-relaxed mb-2">
            Готов к сложным вызовам и проектированию архитектуры нового поколения. Свяжитесь для обсуждения проектов.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-8 flex flex-col gap-4">

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-100" href="mailto:contact@architect.is">
<div className="relative h-full bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:letter-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-white transition-colors">
                    Email Contact
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
<span className="flex items-center gap-1.5">
                      contact@architect.is
                    </span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500 animate-on-scroll delay-200" href="#">
<div className="relative h-full bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-500 z-10">
<iconify-icon icon="solar:link-linear" width="28"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left z-10">
<h3 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-white transition-colors">
                    Social Profile
                  </h3>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
<span className="flex items-center gap-1.5">
                      LinkedIn / GitHub
                    </span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
