import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Flashlight Effect
        const cards = document.querySelectorAll(".flashlight-card");
        document.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // Scroll Reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/60 reveal-on-scroll">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm group-hover:border-amber-400/50 transition-colors">
<iconify-icon className="text-amber-500" icon="solar:crown-line-duotone" width="20"></iconify-icon>
</div>
<span className="font-outfit font-semibold text-slate-800 tracking-tighter text-lg">JORGE RIVEROS V</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#methodology">Metodología</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#services">Servicios</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#testimonials">Casos</a>
</div>

<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-900/10" href="#schedule">
<span>Agendar</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>
<main className="pt-24 pb-20 overflow-hidden">

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-px sonar-emitter z-0">
<div className="sonar-wave"></div>
</div>
<div className="clip-intro flex flex-col items-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 mb-8 shadow-sm shadow-amber-500/10">
<iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide uppercase">Estrategia de alto nivel</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6 max-w-4xl">
                    Consultoría Ejecutiva para <br className="hidden md:block"/>

<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900">Líderes en Tiempos de Cambio.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-10">
                    Optimizamos tu toma de decisiones y aceleramos tu transformación digital sin perder la esencia humana. Resultados directos, sin ruido corporativo.
                </p>
<div className="flex flex-col md:flex-row items-center gap-4">
<a className="group border-beam-btn relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-slate-900/20" href="#schedule">
<span className="font-medium">Agendar Diagnóstico</span>

<span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">$100 USD</span>
<iconify-icon className="text-white/80 group-hover:text-white" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<button className="px-6 py-4 rounded-full text-slate-600 font-medium text-sm hover:text-indigo-600 transition-colors flex items-center gap-2">
<span>Ver Metodología</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Empresas que han confiado</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
<iconify-icon className="text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer" icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon className="text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer" icon="simple-icons:nasa" width="48"></iconify-icon>
<iconify-icon className="text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer" icon="simple-icons:stripe" width="48"></iconify-icon>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll" id="services">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Enfoque Integral</h2>
<p className="text-slate-500 font-light">Ejes estratégicos para el crecimiento sostenible.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flashlight-card bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between group h-full hover:shadow-lg hover:shadow-indigo-900/5 transition-all duration-300">
<div>
<div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300 border border-indigo-100">
<iconify-icon icon="solar:chart-square-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors">Estrategia &amp; Visión</h3>
<p className="text-sm text-slate-500 leading-relaxed">Redefinición de modelos de negocio para mercados volátiles. Alineamos la visión corporativa con la ejecución táctica diaria.</p>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
<span>Ver detalles</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flashlight-card bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between group h-full hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300">
<div>
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform duration-300 border border-amber-100">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors">Liderazgo Humano</h3>
<p className="text-sm text-slate-500 leading-relaxed">Mentoria para ejecutivos C-Level. Desarrollamos capacidades de liderazgo adaptativo y gestión de equipos remotos.</p>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
<span>Ver detalles</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flashlight-card bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between group h-full hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300">
<div>
<div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300 border border-teal-100">
<iconify-icon icon="solar:bolt-circle-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-teal-600 transition-colors">Aceleración Digital</h3>
<p className="text-sm text-slate-500 leading-relaxed">Implementación de tecnologías sin fricción. Transformamos procesos análogos en ecosistemas digitales eficientes.</p>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
<span>Ver detalles</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 mb-24 reveal-on-scroll" id="schedule">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Agenda tu sesión</h2>
<p className="text-slate-500">Selecciona un horario para nuestro diagnóstico inicial.</p>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">

<div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 p-8 bg-slate-50/50">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm overflow-hidden ring-2 ring-white">
                            JR
                        </div>
<div>
<p className="text-sm font-medium text-slate-400">Jorge Riveros V</p>
<h3 className="text-base font-semibold text-slate-900">Diagnóstico Estratégico</h3>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-indigo-400" icon="solar:clock-circle-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-medium">30 Minutos</span>
</div>
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-indigo-400" icon="solar:videocamera-record-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-medium">Google Meet</span>
</div>
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon className="text-amber-500" icon="solar:wallet-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-medium text-amber-600">$100.00 USD</span>
</div>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Sesión intensiva para identificar cuellos de botella y oportunidades inmediatas de crecimiento.
                    </p>
</div>

<div className="flex-1 p-6 md:p-8">
<div className="flex items-center justify-between mb-6">
<h4 className="text-lg font-semibold text-slate-900">Octubre 2023</h4>
<div className="flex gap-1">
<button className="w-8 h-8 rounded hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors hover:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors hover:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 h-full">

<div className="flex-1">
<div className="grid grid-cols-7 text-center text-xs font-medium text-slate-400 mb-2">
<div>DOM</div><div>LUN</div><div>MAR</div><div>MIE</div><div>JUE</div><div>VIE</div><div>SAB</div>
</div>
<div className="grid grid-cols-7 text-center gap-y-2 gap-x-1">

<span></span><span></span><span></span>

<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-300 pointer-events-none">1</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-300 pointer-events-none">2</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-300 pointer-events-none">3</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-300 pointer-events-none">4</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">5</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">6</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">7</button>

<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium bg-indigo-600 text-white shadow-md shadow-indigo-600/20">8</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">9</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">10</button>
<button className="h-10 w-10 mx-auto rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors">11</button>
</div>
</div>

<div className="w-full md:w-32 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6">
<h5 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">Jueves 08</h5>
<div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto custom-scrollbar pr-2">

<button className="w-full py-2 px-3 bg-white border border-indigo-200 text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-50 hover:border-indigo-300 transition-all text-center shadow-sm shadow-indigo-100">
                                    09:00 AM
                                </button>
<button className="w-full py-2 px-3 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-medium hover:border-slate-400 hover:text-indigo-600 transition-all text-center">
                                    10:00 AM
                                </button>
<button className="w-full py-2 px-3 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-medium hover:border-slate-400 hover:text-indigo-600 transition-all text-center">
                                    11:30 AM
                                </button>
<button className="w-full py-2 px-3 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-medium hover:border-slate-400 hover:text-indigo-600 transition-all text-center">
                                    02:00 PM
                                </button>
<button className="w-full py-2 px-3 bg-white border border-slate-200 text-slate-600 rounded-md text-sm font-medium hover:border-slate-400 hover:text-indigo-600 transition-all text-center">
                                    04:00 PM
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:crown-line-duotone" width="18"></iconify-icon>
<span className="font-outfit font-medium text-slate-500 text-sm">© 2023 Jorge Riveros V.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
