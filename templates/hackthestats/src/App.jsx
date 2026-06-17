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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
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
      

<div className="aura-background-component -z-10 w-full top-0 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="sajpUiTp7MIKdX6daDCu"></div>

</div>
</div>

<div className="gradient-blur">
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
<div className=""></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-none pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-lg gap-x-10 gap-y-8 items-center justify-between" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '0'}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-medium text-white tracking-tight font-poppins" onclick="window.location.href='/home'" role="button">
            HACK THE STATS
          </span>
</div>
<div className="hidden md:flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 font-sans" href="/testimonios">
            Testimonios
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 font-sans" href="/equipo">
            Equipo
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 font-sans" href="/auditorias">
            Auditorías
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-gray-400 font-sans" href="/contacto">
            Contacto
          </a>
</div>
<div className="flex gap-4 shrink-0 gap-x-4 gap-y-4 items-center">
<a className="hidden md:block hover:text-white transition-colors text-xs font-medium text-gray-300 font-sans" href="#"></a>
<button className="group inline-flex overflow-hidden transition-transform active:scale-95 cursor-pointer outline-none rounded-none pt-2.5 pr-6 pb-2.5 pl-6 relative gap-x-4 gap-y-4 items-center justify-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>

<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

<span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="bg-black z-10 rounded-none absolute top-[1px] right-[1px] bottom-[1px] left-[1px]"></span>


<div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" style={{background: 'radial-gradient(50% 50% at 50% 100%, rgba(239, 35, 60, 0.2) 0%, transparent 100%)'}}></div>

<span className="relative z-20 flex items-center justify-center gap-2 text-xs font-medium text-white tracking-wide uppercase">
<span className="" onclick="window.location.href='https://app.hackthestats.com/widget/booking/awWw3e1yNFyQch8RRSni'" role="button">
                Auditoría gratuita
              </span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-20 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 95%, transparent)'}}>



<div className="text-center max-w-5xl mt-24 mr-auto mb-24 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-gradient-to-br from-white/10 to-white/0 rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<span className="flex h-1.5 w-1.5 rounded-full group-hover:animate-pulse bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
<span className="group-hover:text-white transition-colors text-xs font-medium text-red-100/80 tracking-wide font-sans">
            Disponible para nuevos proyectos
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8">
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            De
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            Clínica
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            Local
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-60">
            a
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-100">
            Destino
          </span>
<span className="inline-flex bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-100">
            Médico
          </span>
</h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl animate text-xl font-medium text-gray-400 tracking-normal font-manrope max-w-3xl mr-auto mb-12 ml-auto">
          Atrae pacientes internacionales con sistemas operativos clínicos y
          análisis predictivo
        </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row gap-6 animate mb-6 gap-x-6 gap-y-6 items-center justify-center">
<button className="group flex min-w-[180px] decoration-0 transition-transform active:scale-95 cursor-pointer outline-none w-auto h-[50px] pr-6 pl-6 relative items-center justify-center" data-framer-name="desktop" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: 'none'}} type="button">

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Glow" style={{background: 'radial-gradient(15% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(15px)'}}></div>

<div className="pointer-events-none transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Glow Hover" style={{background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px', filter: 'blur(18px)'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-0 opacity-100 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Stroke" style={{background: 'radial-gradient(10.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="pointer-events-none will-change-auto transition-opacity ease-in-out duration-[1200ms] group-hover:opacity-100 opacity-0 absolute top-0 right-0 bottom-0 left-0" data-framer-name="Stroke Hover" style={{background: 'radial-gradient(60.1% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: '8px'}}></div>

<div className="rounded-[7px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" data-framer-name="Fill" style={{backgroundColor: 'rgb(0, 0, 0)'}}></div>

<div className="relative z-20 flex items-center justify-center gap-2 opacity-100" data-framer-name="text content">
<span className="text-[15px] cursor-pointer font-medium text-white tracking-wide font-sans mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0" onclick="window.location.href='https://app.hackthestats.com/widget/booking/awWw3e1yNFyQch8RRSni'" role="button" style={{WebkitFontSmoothing: 'antialiased', textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                Solicitar Auditoría Gratuita
              </span>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
<button className="group min-w-[180px] overflow-hidden z-10 cursor-pointer outline-none transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] bg-black w-auto h-[50px] rounded-xl relative" type="button">

<div className="-translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 blur-[12px] group-hover:animate-[spin_3s_linear_infinite] transition-all duration-700 bg-gradient-to-tr from-[#ef233c] via-[#ff7f51] to-[#ef233c] opacity-60 w-[250%] h-[500%] absolute top-1/2 left-1/2"></div>

<div className="z-[1] bg-black rounded-[10px] absolute top-[1.5px] right-[1.5px] bottom-[1.5px] left-[1.5px]"></div>

<div className="absolute z-10 top-0 left-0 h-full w-24 -translate-x-32 group-hover:translate-x-[20rem] ease-in transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>

<span className="flex items-center justify-center gap-2 text-[15px] group-hover:text-white transition-colors z-20 font-medium text-zinc-300 tracking-wide font-sans relative" onclick="window.location.href='https://youtu.be/GVLhkYytw8A'" role="button">
              Ver Casos De Éxito
            </span>
</button>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.5s_both] animate-on-scroll animate text-center">
<p className="text-xs font-medium text-gray-500 tracking-wide font-sans"></p>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.6s_both] animate-on-scroll flex flex-col animate mt-32 mb-20 gap-x-4 gap-y-4 items-center">
<p className="uppercase text-xs font-medium text-gray-500 tracking-widest font-sans">
            Elegido por Cirujanos y especialistas líderes
          </p>
<a className="inline-flex items-center gap-1 hover:text-white hover:border-white transition-all group text-sm text-gray-400 font-sans border-transparent border-b pb-0.5" href="https://research.trycook.ai/public/report/lcPRsOpKTgnR">
            Leer la historia
          </a>
</div>
</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll md:pb-20 animate w-full max-w-6xl z-20 mr-auto ml-auto pr-6 pb-12 pl-6 relative">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] grayscale hover:grayscale-0 transition-all duration-700 group opacity-75">
<style className="">
            @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
            }
            /* Pause animation on hover */
            .group:hover .animate-infinite-scroll {
                animation-play-state: paused;
            }
          </style>
<div className="flex md:justify-start [&amp;_div]:mx-8 animate-infinite-scroll w-max mr-8 ml-8 items-center justify-center">

<div className="mx-8 flex items-center gap-3">
<iconify-icon height="28" icon="solar:medal-ribbon-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                ISAPS
              </span>
</div>

<div className="mx-8 flex items-center gap-3">
<svg className="" data-icon-set="solar" data-solar="shield-warning-linear" height="28" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path className="" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 8v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><circle cx="12" cy="15" fill="currentColor" r="1"></circle></g></svg>
<span className="text-xl font-bold font-manrope tracking-tight">
                JCI
              </span>
</div>

<div className="mx-8 flex items-center gap-3">
<iconify-icon height="28" icon="solar:globe-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                MTA
              </span>
</div>

<div className="mx-8 flex items-center gap-3">
<iconify-icon className="" height="28" icon="solar:verified-check-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                GHA
              </span>
</div>

<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:visa" width="48"></iconify-icon>
</div>

<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:mastercard" width="48"></iconify-icon>
</div>

<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:americanexpress" width="40"></iconify-icon>
</div>

<div className="mx-8 flex items-center gap-3">
<iconify-icon className="" height="28" icon="solar:medal-ribbon-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                ISAPS
              </span>
</div>
<div className="mx-8 flex items-center gap-3">
<iconify-icon height="28" icon="solar:shield-warning-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                JCI
              </span>
</div>
<div className="mx-8 flex items-center gap-3">
<iconify-icon height="28" icon="solar:globe-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                MTA
              </span>
</div>
<div className="mx-8 flex items-center gap-3">
<iconify-icon height="28" icon="solar:verified-check-linear" width="28"></iconify-icon>
<span className="text-xl font-bold font-manrope tracking-tight">
                GHA
              </span>
</div>
<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:visa" width="48"></iconify-icon>
</div>
<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:mastercard" width="48"></iconify-icon>
</div>
<div className="mx-8 flex items-center gap-2">
<iconify-icon className="text-white opacity-90" icon="simple-icons:americanexpress" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 w-full max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-2 pb-32 pl-2 relative">

<div className="mb-16 text-center [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight font-manrope mb-4">
          El Sistema
        </h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mr-auto ml-auto">
          Todo lo necesario para operar, coordinar y convertir. Diseñado para
          equipos de alto rendimiento.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white tracking-tight font-manrope mb-2">
                IA Predictiva
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Algoritmo que analiza patrones de comportamiento de pacientes.
                Predice quién se presentará, quién comprará, quién se convertirá
                en cliente recurrente.
              </p>
</div>
<div className="overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="flex opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-6xl font-bold text-white/10 tracking-tighter">
                  AI
                </span>
</div>
<button className="-translate-x-1/2 shadow-red-600/25 flex hover:scale-105 transition-transform group/btn text-sm font-medium text-white bg-[#ef233c] border-red-600/20 border rounded-none pt-2.5 pr-5 pb-2.5 pl-5 absolute bottom-6 left-1/2 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="animate-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
                Start Project
              </button>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll animate bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="z-10 flex flex-col h-full relative">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Turismo Médico
              </h3>
<p className="leading-relaxed text-sm text-gray-400 font-sans">Posicionamiento de clínica como destino médico internacional. Atrae pacientes de USA, Europa, Canadá que viajan específicamente para procedimientos.</p>
</div>
<div className="flex flex-col overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-4 pr-4 pb-4 pl-4 relative justify-end">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="transform transition-transform group-hover:-translate-y-1 duration-500 bg-zinc-900 w-full border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 relative shadow-xl">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] uppercase font-bold text-[#ef233c] tracking-wider">
                    PACIENTE
                  </span>
</div>
<h4 className="text-sm font-medium text-white mb-1">
                  Alcance Global
                </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
                  Estrategia de posicionamiento internacional.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll animate bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="z-10 flex flex-col h-full relative">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Automatización 24/7
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Sistema que responde pacientes, califica leads, agenda citas,
                envía recordatorios. Funciona mientras duermes, sin intervención
                manual.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="w-full max-w-[200px] space-y-4">
<div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-4">
                  SYSTEM STATUS
                </div>
<div className="relative pl-4">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-800 rounded-full"></div>
<div className="w-0.5 bg-[#ef233c] h-6 rounded-full absolute top-0 left-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="text-lg font-medium text-white">Active</span>
</div>
<div className="flex items-center gap-3 opacity-40">
<span className="text-base font-medium text-zinc-400">
                        Standby
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden hover:border-white/20 transition-all duration-300 border-dashed bg-black border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll animate lg:col-span-2">
<div className="z-10 flex flex-col h-full relative">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Análisis en Tiempo Real
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Dashboard que muestra CPL, show rates, conversión, ROI. Datos
                actualizados constantemente para tomar decisiones basadas en
                información real.
              </p>
</div>
<div className="mt-auto relative w-full h-[280px] rounded-xl border border-white/5 bg-black/20 p-8 overflow-hidden">
<div className="space-y-4 opacity-40 select-none blur-[1px] group-hover:blur-0 transition-all duration-500">
<p className="leading-relaxed text-lg text-zinc-300 font-serif">
                  Monitorea el ROI, el CPL y
                  <span className="bg-red-600/20 text-red-200 px-1 rounded">
                    conversion
                  </span>
                  en tiempo real.
                </p>
</div>
<div className="-translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-[60%] bg-zinc-900 w-72 border-white/10 border rounded-none pt-4 pr-4 pb-4 pl-4 absolute top-1/2 left-1/2 shadow-2xl">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10 flex items-center justify-center">
<span className="text-xs font-bold text-zinc-300">ST</span>
</div>
<div className="flex-1">
<div className="flex mb-1 items-center justify-between">
<span className="text-sm font-semibold text-white">
                        Métricas en tiempo real
                      </span>
</div>
<p className="leading-relaxed text-xs text-zinc-300">
                      Análisis de datos completo.
                    </p>
</div>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 hover:bg-red-700 transition-colors shadow-red-600/20 flex text-xs font-medium text-white bg-[#ef233c] rounded-none pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg gap-x-1.5 gap-y-1.5 items-center justify-center">
                    Aprobar
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll animate lg:col-span-2">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8 max-w-sm">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Implementación Estructurada
              </h3>
<p className="leading-relaxed text-sm text-gray-400 font-sans">
                Proceso de 12 semanas: auditoría, configuración, optimización,
                transferencia. Cada fase tiene objetivos claros y entregables
                específicos.
              </p>
</div>
<div className="flex overflow-hidden bg-black/20 w-full h-[280px] border-white/5 border rounded-none mt-auto pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-red-600/5 to-transparent opacity-50 w-full h-full absolute top-1/2 left-1/2"></div>
<div className="relative w-full max-w-md">
<h4 className="text-2xl md:text-3xl font-medium text-zinc-500 text-center leading-tight font-manrope">
                  Sprint de
                  <span className="inline-block transition-colors duration-300 text-white bg-[#ef233c]/10 rounded-lg pr-1 pl-1 relative">
                    12 Semanas
                    <span className="-right-0.5 w-0.5 animate-pulse bg-[#ef233c] absolute top-0 bottom-0"></span>
</span>
</h4>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 group overflow-hidden hover:border-white/20 transition-all duration-300 bg-zinc-900/40 border-white/10 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm animate-on-scroll">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-semibold text-white font-manrope mb-2 tracking-tight">
                Transferencia de Propiedad
              </h3>
<p className="text-sm text-gray-400 font-sans leading-relaxed">
                Todo el sistema, procesos, documentación, y datos son tuyos.
                Puedes continuar independientemente o con soporte continuo.
              </p>
</div>
<div className="flex flex-col overflow-hidden bg-black/20 w-full h-48 border-white/5 border rounded-none mt-auto pt-4 pr-4 pb-4 pl-4 relative justify-center items-center">
<div className="p-4 border border-white/10 bg-zinc-900 rounded-lg flex items-center gap-3 shadow-xl">
<svg className="lucide lucide-check-circle" fill="none" height="24" stroke="#ef233c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="font-medium text-white">100% Propiedad</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-full max-w-7xl z-20 mt-0 mr-auto mb-32 ml-auto pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[15vw] leading-none font-semibold text-white/[0.02] text-center whitespace-nowrap font-manrope tracking-tighter">
          CASOS
        </h2>
</div>

<div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen bg-red-600/10"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none select-none -z-10 mix-blend-screen"></div>
<div className="z-10 pr-6 pl-6 relative">

<div className="text-center mb-20 max-w-3xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll animate">
<h3 className="leading-[1.1] md:text-6xl text-4xl font-normal text-white tracking-tight font-manrope mb-6">
            Casos de
            <span className="text-zinc-500">Estudio</span>
</h3>
<p className="text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Clínicas que transformaron sus negocios
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

<div className="group hover:border-white/20 transition-all duration-300 border-dashed flex flex-col bg-black/50 h-full border-zinc-800 border rounded-none pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="mb-4">
<span className="text-[10px] font-bold text-[#ef233c] tracking-widest uppercase bg-red-900/10 px-2 py-1 rounded">
                Caso de Estudio
              </span>
</div>
<h4 className="text-xl font-semibold text-white font-manrope mb-2">
              De $20K a $100K/mes
            </h4>
<p className="text-sm text-gray-400 font-sans mb-6">
              Clínica estética en México. 5 años en el mercado. Pacientes solo
              locales.
            </p>
<div className="grid grid-cols-2 gap-4 mb-6 border-y border-zinc-800/50 py-4">
<div className="space-y-2 border-r border-zinc-800/50 pr-2">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Antes
                </p>
<ul className="text-xs text-zinc-400 space-y-1 font-mono">
<li className="">5 pac./mes</li>
<li className="">CPL: $8.50</li>
<li className="">Show: 35%</li>
<li className="">$20K/mes</li>
</ul>
</div>
<div className="space-y-2 pl-2">
<p className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Después
                </p>
<ul className="text-xs text-white font-medium space-y-1 font-mono">
<li className="text-green-400">45 pac./mes (9x)</li>
<li className="text-green-400">CPL: $2.28</li>
<li className="text-green-400">Show: 68%</li>
<li className="text-green-400">$100K/mes (5x)</li>
</ul>
</div>
</div>
<div className="mt-auto">
<p className="italic text-zinc-300 text-sm mb-4 leading-relaxed">
                "Hack the Stats cambió completamente nuestro negocio. Pasamos de
                una clínica local a recibir pacientes de USA, Canadá y Europa."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-zinc-700">
                  CM
                </div>
<p className="text-xs text-zinc-500 font-medium">Dr. Carlos M.</p>
</div>
</div>
</div>

<div className="group hover:border-white/20 transition-all duration-300 border-dashed bg-black/50 border-zinc-800 border rounded-none p-8 relative backdrop-blur-sm h-full flex flex-col">
<div className="mb-4">
<span className="text-[10px] font-bold text-[#ef233c] tracking-widest uppercase bg-red-900/10 px-2 py-1 rounded">
                Caso de Estudio
              </span>
</div>
<h4 className="text-xl font-semibold text-white font-manrope mb-2">
              De $35K a $210K/mes
            </h4>
<p className="text-sm text-gray-400 font-sans mb-6">
              Hospital privado en España. Departamento estético sin crecimiento.
            </p>
<div className="grid grid-cols-2 gap-4 mb-6 border-y border-zinc-800/50 py-4">
<div className="space-y-2 border-r border-zinc-800/50 pr-2">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Antes
                </p>
<ul className="text-xs text-zinc-400 space-y-1 font-mono">
<li className="">12 pac./mes</li>
<li className="">CPL: $7.50</li>
<li className="">Show: 45%</li>
<li className="">$35K/mes</li>
</ul>
</div>
<div className="space-y-2 pl-2">
<p className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Después
                </p>
<ul className="text-xs text-white font-medium space-y-1 font-mono">
<li className="text-green-400">85 pac./mes (7x)</li>
<li className="text-green-400">CPL: $2.45</li>
<li className="text-green-400">Show: 69%</li>
<li className="text-green-400">$210K/mes (6x)</li>
</ul>
</div>
</div>
<div className="mt-auto">
<p className="italic text-zinc-300 text-sm mb-4 leading-relaxed">
                "Hack the Stats nos permitió posicionarnos como destino médico
                europeo. Ahora recibimos pacientes de toda Europa."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-zinc-700">
                  JP
                </div>
<p className="text-xs text-zinc-500 font-medium">
                  Dr. Juan P., Jefe de Cirugía
                </p>
</div>
</div>
</div>

<div className="group hover:border-white/20 transition-all duration-300 border-dashed bg-black/50 border-zinc-800 border rounded-none p-8 relative backdrop-blur-sm h-full flex flex-col">
<div className="mb-4">
<span className="text-[10px] font-bold text-[#ef233c] tracking-widest uppercase bg-red-900/10 px-2 py-1 rounded">
                Caso de Estudio
              </span>
</div>
<h4 className="text-xl font-semibold text-white font-manrope mb-2">
              De $20K a $130K/mes
            </h4>
<p className="text-sm text-gray-400 font-sans mb-6">
              Centro de wellness en Colombia. 8 años en el mercado.
            </p>
<div className="grid grid-cols-2 gap-4 mb-6 border-y border-zinc-800/50 py-4">
<div className="space-y-2 border-r border-zinc-800/50 pr-2">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Antes
                </p>
<ul className="text-xs text-zinc-400 space-y-1 font-mono">
<li>8 pac./mes</li>
<li>CPL: $9.20</li>
<li>Show: 42%</li>
<li>$20K/mes</li>
</ul>
</div>
<div className="space-y-2 pl-2">
<p className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Después
                </p>
<ul className="text-xs text-white font-medium space-y-1 font-mono">
<li className="text-green-400">65 pac./mes (8x)</li>
<li className="text-green-400">CPL: $2.89</li>
<li className="text-green-400">Show: 70%</li>
<li className="text-green-400">$130K/mes (6.5x)</li>
</ul>
</div>
</div>
<div className="mt-auto">
<p className="italic text-zinc-300 text-sm mb-4 leading-relaxed">
                "No solo aumentamos pacientes, sino que la calidad mejoró.
                Pacientes internacionales con mejor poder de compra y menos
                cancelaciones."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white border border-zinc-700">
                  ML
                </div>
<p className="text-xs text-zinc-500 font-medium">
                  Dra. María L., Directora Médica
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
