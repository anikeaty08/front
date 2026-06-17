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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
});



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          
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
      

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
</div>

<nav className="fixed z-50 flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex transition-all duration-300 w-full max-w-4xl border rounded-full pt-2 pr-2 pb-2 pl-4 shadow-2xl backdrop-blur-xl items-center justify-between bg-zinc-900/60 border-white/10">

<div className="flex items-center gap-3 pr-6 text-white/90">
<a className="text-lg font-normal tracking-tight font-poppins" href="#">paando</a>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors duration-300 hover:text-white" href="#features">Método</a>
<a className="transition-colors duration-300 hover:text-white" href="#cursos">Cursos</a>
<a className="transition-colors duration-300 hover:text-white" href="#pricing">Planes</a>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:block transition-colors text-sm font-medium pr-4 pl-4 hover:text-white text-zinc-400">
Inicia sesión</button>
<button className="transition-colors text-sm font-medium rounded-full py-2 px-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2 hover:bg-zinc-200 text-black bg-white">
<span className="">Únete ahora</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex flex-col min-h-screen overflow-hidden z-10 w-full border-b relative items-center justify-center border-white/5">

<div className="absolute top-0 left-0 w-full h-[900px] -z-10 bg-gradient-to-b brightness-50 saturate-50 from-purple-900/20 via-blue-900/30 to-black/40" data-alpha-mask="62" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 62%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" data-us-project="MSvSkmJb9Ax55PeV6eku"></div>

</div>
<div className="z-10 flex flex-col animate-on-scroll animate relative items-center px-4">
<div className="inline-flex gap-2 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center bg-white/5 border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-white/80">Nuevo reto: Escritura reflexiva para claridad mental</span>
</div>
<h1 className="text-[5rem] md:text-[9rem] lg:text-[11rem] leading-none lowercase select-none font-light tracking-tighter font-poppins text-center mix-blend-difference text-white">paando</h1>
<div className="md:mt-12 flex flex-col gap-6 mt-12 gap-x-6 gap-y-6 items-center">
<span className="md:text-2xl leading-relaxed text-xl font-light text-center max-w-lg text-zinc-400">Todo el bienestar que necesitas, <span className="font-normal text-white">en un solo lugar.</span> Acompañado por guías certificados.</span>
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" href="#pricing" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
</div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center text-white" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}>
</div>
<span className="whitespace-nowrap z-10 relative">Empieza hoy</span>
<style>
                      @keyframes borderBeamRotation {
                        0% { transform: translate(-50%, -50%) rotate(0deg); }
                        100% { transform: translate(-50%, -50%) rotate(360deg); }
                      }
                    </style>
</div>
</a>
</div>
</div>
</main>

<section className="bg-[#030304] border-b pt-24 pb-12 relative border-white/5" id="features">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-16 animate-on-scroll">
<span className="uppercase block text-xs font-medium text-emerald-500 tracking-[0.3em] mb-4">El Método</span>
<h2 className="text-4xl md:text-5xl font-light font-bricolage tracking-tight leading-[1.1] text-white">Diseñado para tu <br/><span className="text-zinc-500">ritmo de vida.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border bg-white/[0.02] rounded-3xl backdrop-blur-sm animate-on-scroll divide-white/10 border-white/10">
<div className="p-8 md:p-10 group hover:bg-white/[0.02] transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="" height="24" icon="solar:star-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium font-bricolage mb-3 text-white">Aprende día a día</h3>
<p className="leading-relaxed text-sm text-zinc-500">Aprende junto a expertos certificados y una comunidad que crece contigo. Sesiones en vivo y acompañamiento continuo. </p>
</div>
<div className="md:p-10 group hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="" height="24" icon="solar:meditation-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium font-bricolage mb-3 text-white">Práctica constante</h3>
<p className="leading-relaxed text-sm text-zinc-500">Micro-hábitos diarios diseñados para integrarse en tu rutina sin fricción. Solo 15 minutos al día.</p>
</div>
<div className="md:p-10 group hover:bg-white/[0.02] transition-colors duration-500 pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="" height="24" icon="solar:people-nearby-outline" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium font-bricolage mb-3 text-white">Comunidad</h3>
<p className="leading-relaxed text-sm text-zinc-500">Únete a una comunidad que comparte tus objetivos. Eventos exclusivos, foros de apoyo y la motivación de avanzar juntos.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#030304] border-b pt-24 pb-24 relative border-white/5" id="conocenos">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll">

<div className="">
<h2 className="leading-tight md:text-4xl text-4xl font-light tracking-tight font-poppins mix-blend-normal mb-6 text-white">paando es tu<br/> <span className="text-zinc-500">guía personal </span> hacia una vida más plena</h2>
<p className="leading-relaxed font-poppins max-w-md mb-8 text-zinc-400">paando nace de la necesidad de encontrar calma en el caos digital. Somos parte de un ecosistema de wellness enfocados en la transformación personal con cursos estructurados, guías expertos y una comunidad que te acompaña en cada paso del camino.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="">
<div className="text-3xl font-light font-bricolage mb-1 text-white">+50</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Mentores</div>
</div>
<div className="">
<div className="text-3xl font-light font-bricolage mb-1 text-white">12k</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Alumnos</div>
</div>
</div>
<a className="inline-flex items-center gap-2 border-b pb-1 hover:opacity-80 transition-opacity text-white border-white" href="#">
                        Nuestra filosofía <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 gap-4 relative gap-x-4 gap-y-4">

<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl z-0 bg-emerald-900/20"></div>

<div className="flex flex-col transform text-center border rounded-2xl pt-4 pr-4 pb-4 pl-4 translate-y-8 items-center bg-zinc-900/30 border-white/5">
<img alt="Member" className="w-20 h-20 rounded-full object-cover mb-4 border grayscale hover:grayscale-0 transition-all duration-300 border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<h4 className="text-sm font-medium text-white">creesiendo </h4>
<span className="text-xs text-zinc-500 mt-1">Podcast</span>
</div>

<div className="flex flex-col text-center border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center bg-zinc-900/30 border-white/5">
<img alt="Member" className="hover:grayscale-0 transition-all duration-300 w-20 h-20 object-cover border rounded-full mb-4 grayscale border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00a60a0a-9ce6-4229-abda-1bb67fc8040c_320w.jpg"/>
<h4 className="text-sm font-medium text-white">Eventos</h4>
<span className="text-xs text-zinc-500 mt-1">Eventos presenciales</span>
</div>

<div className="flex flex-col transform text-center border rounded-2xl pt-4 pr-4 pb-4 pl-4 translate-y-8 items-center bg-zinc-900/30 border-white/5">
<img alt="Member" className="w-20 h-20 rounded-full object-cover mb-4 border grayscale hover:grayscale-0 transition-all duration-300 border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<h4 className="text-sm font-medium text-white">Comunidad</h4>
<span className="text-xs text-zinc-500 mt-1">Enfocada en bienestar</span>
</div>

<div className="flex flex-col text-center border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center bg-zinc-900/30 border-white/5">
<img alt="Member" className="hover:grayscale-0 transition-all duration-300 w-20 h-20 object-cover border rounded-full mb-4 grayscale border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5dd3ab8-b6ef-4603-b0ec-3490dc3ed048_800w.webp"/>
<h4 className="text-sm font-medium text-white">German Ahumada</h4>
<span className="text-xs text-zinc-500 mt-1">Fundador</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#030304] border-b pt-24 pb-24 relative border-white/5" id="cursos">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-on-scroll">
<div className="">
<span className="uppercase block text-xs font-medium tracking-[0.3em] mb-4 text-indigo-400">Cursos</span>
<h2 className="text-4xl font-light font-bricolage tracking-tight text-white">Crecimiento continuo</h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm transition-colors text-zinc-400 hover:text-white" href="#">
                    Ver catálogo completo <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">

<div className="group flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-900/20 border-white/5 hover:border-white/20">
<div className="relative aspect-video w-full overflow-hidden">
<img alt="Mindfulness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="text-[10px] uppercase tracking-wide border rounded pt-1 pr-2 pb-1 pl-2 absolute top-3 left-3 backdrop-blur-md text-white bg-black/50 border-white/10">Mente</div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium mb-2 leading-tight text-white">Fundamentos de Meditación</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Una guía paso a paso para calmar la mente y encontrar foco.</p>
<div className="mt-auto pt-4 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2h 15m
                            </div>
<button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/5 hover:bg-white/20 text-white">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-900/20 border-white/5 hover:border-white/20">
<div className="relative aspect-video w-full overflow-hidden">
<img alt="Nutricion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="text-[10px] uppercase tracking-wide border rounded pt-1 pr-2 pb-1 pl-2 absolute top-3 left-3 backdrop-blur-md text-white bg-black/50 border-white/10">Cuerpo</div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium mb-2 leading-tight text-white">Nutrición Consciente</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Aprende a escuchar a tu cuerpo y alimentarte sin culpas.</p>
<div className="mt-auto pt-4 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 4h 30m
                            </div>
<button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/5 hover:bg-white/20 text-white">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-900/20 border-white/5 hover:border-white/20">
<div className="aspect-video overflow-hidden w-full relative">
<img alt="Sleep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="text-[10px] uppercase tracking-wide border rounded pt-1 pr-2 pb-1 pl-2 absolute top-3 left-3 backdrop-blur-md text-white bg-black/50 border-white/10">Espíritu</div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium mb-2 leading-tight text-white">La Ciencia del Sueño</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Optimiza tu descanso y recupera tu energía vital.</p>
<div className="mt-auto pt-4 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 3h 10m
                            </div>
<button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/5 hover:bg-white/20 text-white">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-900/20 border-white/5 hover:border-white/20">
<div className="relative aspect-video w-full overflow-hidden">
<img alt="Productivity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="text-[10px] uppercase tracking-wide border rounded pt-1 pr-2 pb-1 pl-2 absolute top-3 left-3 backdrop-blur-md text-white bg-black/50 border-white/10">Mente</div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-medium mb-2 leading-tight text-white">Gestión del Tiempo</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Sistemas simples para lograr más haciendo menos.</p>
<div className="mt-auto pt-4 border-t flex items-center justify-between border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 1h 45m
                            </div>
<button className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/5 hover:bg-white/20 text-white">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030304] border-b pt-24 pb-24 relative border-white/5" id="curation">
<div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end animate-on-scroll mb-16 gap-x-8 gap-y-8 items-start justify-between">
<div className="">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.3em] mb-4">Explorar</span>
<h2 className="md:text-6xl leading-[0.95] text-4xl font-light tracking-tighter font-bricolage text-white">Retos paando</h2>
</div>
<div className="flex gap-6 border-b pb-2 gap-x-6 gap-y-6 items-baseline border-white/10">
<button className="md:text-xl text-lg font-normal font-bricolage border-b pb-1 text-white border-white">Mente</button>
<button className="md:text-xl transition-colors text-lg font-light font-bricolage pb-1 hover:text-zinc-300 text-zinc-600">Cuerpo</button>
<button className="md:text-xl transition-colors text-lg font-light font-bricolage pb-1 hover:text-zinc-300 text-zinc-600">Espíritu</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative h-[480px] w-full border rounded-2xl overflow-hidden flex flex-col justify-between p-6 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll bg-zinc-900/40 border-white/5" style={{animationDelay: '0.1s'}}>
<div className="absolute top-0 right-0 p-4 opacity-0 z-20 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md border-white/20 bg-black/50 text-white">
<iconify-icon className="" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Mindfulness" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-overlay group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe422aac-23a8-473a-841f-9c667cde86eb_800w.webp"/>
<div className="bg-gradient-to-t from-[#030304] via-[#030304]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="mt-auto relative z-10">
<h3 className="leading-tight text-2xl font-medium tracking-tight font-bricolage mb-3 text-white">Escritura reflexiva para claridad mental</h3>
<div className="flex justify-between items-center border-t pt-4 text-white/80 border-white/10">
<span className="text-sm font-medium text-zinc-400">4 Semanas</span>
<span className="text-[10px] tracking-widest uppercase border px-2 py-1 rounded-full border-white/20">Guided</span>
</div>
</div>
</div>

<div className="group relative h-[480px] w-full border rounded-2xl overflow-hidden flex flex-col justify-between p-6 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll bg-zinc-900/40 border-white/5" style={{animationDelay: '0.2s'}}>
<div className="absolute top-0 right-0 p-4 opacity-0 z-20 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md border-white/20 bg-black/50 text-white">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Physical" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-overlay group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eca2e20-4873-4c77-bf35-4f4a1ea8ffb5_800w.webp"/>
<div className="bg-gradient-to-t from-[#030304] via-[#030304]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="mt-auto relative z-10">
<h3 className="leading-tight text-2xl font-medium tracking-tight font-bricolage mb-3 text-white">Finanzas personales conscientes</h3>
<div className="flex justify-between items-center border-t pt-4 text-white/80 border-white/10">
<span className="text-sm font-medium text-zinc-400">10 Días</span>
<span className="text-[10px] tracking-widest uppercase border px-2 py-1 rounded-full border-white/20">Intensivo</span>
</div>
</div>
</div>

<div className="group relative h-[480px] w-full border rounded-2xl overflow-hidden flex flex-col justify-between p-6 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll bg-zinc-900/40 border-white/5" style={{animationDelay: '0.3s'}}>
<div className="absolute top-0 right-0 p-4 opacity-0 z-20 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<div className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md border-white/20 bg-black/50 text-white">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 w-full h-full">
<img alt="Objects" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-overlay group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82f979e5-1190-42d9-a38c-d26e2a963939_800w.webp"/>
<div className="bg-gradient-to-t from-[#030304] via-[#030304]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="mt-auto relative z-10">
<h3 className="leading-tight text-2xl font-medium tracking-tight font-bricolage mb-3 text-white">Balance vida y trabajo remoto</h3>
<div className="flex justify-between items-center border-t pt-4 text-white/80 border-white/10">
<span className="text-sm font-medium text-zinc-400">2 Semanas</span>
<span className="text-[10px] tracking-widest uppercase border px-2 py-1 rounded-full border-white/20">Self-Paced</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b relative overflow-hidden bg-black border-white/5" id="testimonials">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] bg-emerald-900/30"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[100px] bg-indigo-900/30"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center animate-on-scroll">
<iconify-icon className="mb-8 mx-auto text-white/20" height="48" icon="solar:quote-up-linear" width="48"></iconify-icon>
<h3 className="md:text-5xl leading-tight text-3xl font-light font-bricolage mb-10 text-white">"Las lecciones cortas son perfectas para mi rutina. En 3 meses logré construir hábitos que llevaba años intentando."</h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border bg-zinc-800 border-white/10">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="font-medium text-white">Sofia Martinez</div>
<div className="text-sm text-zinc-500">Miembro desde 2023</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030304] relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 animate-on-scroll">
<span className="uppercase block text-xs font-medium text-emerald-500 tracking-[0.3em] mb-4">Membresía</span>
<h2 className="text-4xl md:text-5xl font-light font-bricolage tracking-tight text-white">Invierte en ti mismo</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-on-scroll">

<div className="p-8 rounded-3xl border bg-white/[0.02] flex flex-col border-white/10">
<div className="mb-6">
<h3 className="text-lg font-medium mb-2 text-white">Curso individual</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light font-bricolage text-white">$0</span>
<span className="text-zinc-500">/ mes</span>
</div>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Acceso a 3 cursos introductorios
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Journaling básico
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Newsletter semanal
                        </li>
</ul>
<button className="w-full py-3 rounded-full border font-medium transition-all duration-300 border-white/20 text-white hover:bg-white hover:text-black">
                        Comenzar Gratis
                    </button>
</div>

<div className="p-8 rounded-3xl border bg-gradient-to-b from-white/[0.08] to-white/[0.02] relative flex flex-col border-white/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full bg-white text-black">
                        Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium mb-2 text-white">Membresía anual</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light font-bricolage text-white">$33</span>
<span className="text-zinc-500">/ mes</span>
</div>
<p className="text-xs text-zinc-500 mt-2">Facturado anualmente ($132)</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Acceso ilimitado a +50 cursos
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Sesiones de coaching grupal
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Herramientas de IA personalizadas
                        </li>
</ul>
<button className="w-full py-3 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white text-black hover:bg-zinc-200">
                        Unirse a Pro
                    </button>
</div>
</div>
</div>
</section>

<footer className="z-10 border-t pt-20 pr-6 pb-12 pl-6 relative text-white bg-black border-white/10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mr-auto ml-auto">
<div className="col-span-1 md:col-span-2">
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<h2 className="text-2xl font-semibold font-space tracking-tight">paando</h2>
</div>
<p className="text-zinc-500 max-w-xs mb-8 text-sm leading-relaxed">Un espacio digital diseñado para desacelerar. Aprender a estar bien, en tu propio idioma y a tu propio ritmo.</p>
<div className="flex flex-col sm:flex-row gap-3">
<input className="border rounded-full px-5 py-2.5 w-full sm:w-60 focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 text-sm bg-white/5 border-white/10" placeholder="Correo electrónico" type="email"/>
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-white text-black hover:bg-zinc-200">Suscribirse</button>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-sm mb-2 font-bricolage uppercase tracking-wider text-white">Plataforma</h4>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Cursos</a>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Mentores</a>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Comunidad</a>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Regalar</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-sm mb-2 font-bricolage uppercase tracking-wider text-white">Legal</h4>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Privacidad</a>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Términos</a>
<a className="text-zinc-500 transition-colors text-sm hover:text-white" href="#">Cookies</a>
</div>
</div>
<div className="flex flex-col md:flex-row text-sm max-w-7xl border-t mt-16 mr-auto ml-auto pt-8 items-center justify-between text-zinc-600 border-white/10">
<p>© 2024 Paando Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-6 z-50">
<div className="flex items-center p-1 border rounded-full backdrop-blur-md bg-zinc-900/60 border-white/10">
<button className="text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm text-white bg-white/10">
                Dark
            </button>
<button className="transition-colors text-xs font-medium text-zinc-500 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 hover:text-zinc-300">
                Light
            </button>
</div>
</div>

    </>
  );
}
