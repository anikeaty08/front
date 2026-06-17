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



        lucide.createIcons();

        // Intersection Observer Logic for Scroll Animations
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale');
            revealElements.forEach(el => observer.observe(el));
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
      

<header className="w-full pt-8 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto flex justify-between items-start reveal">
<div className="text-2xl tracking-tighter font-serif-italic">Rubio Oñate</div>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Derio, Bizkaia
        </div>
</header>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-24">
<h1 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-medium max-w-5xl text-balance reveal">
            Hola! Soy Paula Rubio Oñate, Técnica Superior de Marketing y Publicidad. Me apasiona la gestión de ventas y la creación de experiencias en espacios comerciales.
        </h1>
</section>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#e6e4df] p-6 rounded-lg min-h-[420px] flex flex-col justify-between group hover:brightness-95 transition-all text-black reveal">
<div className="flex justify-between items-start">
<span className="text-xs font-medium uppercase tracking-wide">Ago 2025—Actualidad</span>
</div>
<div>
<div className="w-16 h-16 bg-[#0046ad] rounded-xl flex items-center justify-center font-medium mb-6 text-xs p-1 text-center leading-none text-white shadow-lg shadow-blue-900/20">FORUM SPORT</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Dpto. Marketing</h3>
<p className="text-sm opacity-80 leading-relaxed">Asistente de Dirección Punto de Venta. Comunicación con proveedores, supervisión de materiales promocionales, control de calendarios y apoyo en visual merchandising internacional.</p>
</div>
<div className="pt-6 border-t text-xs font-medium mt-auto border-black/10">Marketing &amp; Publicidad</div>
</div>

<div className="bg-[#e6e4df] p-6 rounded-lg min-h-[420px] flex flex-col justify-between group hover:brightness-95 transition-all text-black reveal delay-100">
<div className="flex justify-between items-start">
<span className="text-xs font-medium uppercase tracking-wide">2022—2025</span>
</div>
<div className="">
<div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center font-medium mb-6 text-xs text-center p-1 text-white shadow-lg shadow-black/20">DOOERS</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Assistant Manager</h3>
<p className="text-sm opacity-80 leading-relaxed">Gestión integral: apertura/cierre, arqueo de efectivo, KPIs de venta, coordinación de equipo, identificación de necesidades y fidelización de clientes en Bilbao.</p>
</div>
<div className="pt-6 border-t text-xs font-medium mt-auto border-black/10">Gestión Retail</div>
</div>

<div className="bg-[#e6e4df] p-6 rounded-lg min-h-[420px] flex flex-col justify-between group hover:brightness-95 transition-all text-black reveal delay-200">
<div className="flex justify-between items-start">
<span className="text-xs font-medium uppercase tracking-wide">2021</span>
</div>
<div className="">
<div className="w-16 h-16 bg-[#d62e2e] rounded-xl flex flex-col items-center justify-center font-bold leading-none mb-6 text-[10px] p-1 text-center text-white shadow-lg shadow-red-900/20">
                        GOIENA
                    </div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Comunicación</h3>
<p className="text-sm opacity-80 leading-relaxed">Encargada de gestión de información comercial y diseño para la Guía Comercial de la temporada 2021 en medio multimedia de la comarca del Alto Deba.</p>
</div>
<div className="pt-6 border-t text-xs font-medium mt-auto border-black/10">Multimedia</div>
</div>

<div className="bg-[#1a1a1a] text-[#f2f0ea] p-6 rounded-lg min-h-[420px] flex flex-col border border-white/5 reveal delay-300">
<div className="flex justify-between items-start mb-8">
<h3 className="text-3xl font-medium tracking-tight leading-none">Formación&amp; Historial</h3>
<svg className="lucide lucide-graduation-cap w-6 h-6 stroke-[1.5]" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="space-y-4 text-xs font-medium mt-auto opacity-80">
<div className="flex justify-between border-b pb-2 border-white/10">
<span>G.S. Gestión de Ventas</span><span>2021—2022</span>
</div>
<div className="flex justify-between border-b pb-2 border-white/10">
<span className="">G.S. Marketing y Publicidad</span><span className="">2019—2021</span>
</div>
<div className="flex justify-between border-b pb-2 border-white/10">
<span className="">G.M. Actividades Comerciales</span><span className="">2017—2019</span>
</div>
<div className="flex justify-between border-b pb-2 border-white/10">
<span className="">Dependienta ZARA</span><span>2019—2020</span>
</div>
<div className="flex justify-between border-b pb-2 border-white/10">
<span>Idiomas: Euskera</span><span className="">Nativo</span>
</div>
<div className="flex justify-between">
<span>Idiomas: Inglés</span><span>Avanzado</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
<h2 className="text-4xl md:text-6xl tracking-tight font-medium mb-12 reveal">
            Mi <span className="font-serif-italic">Perfil</span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
<div className="">
<p className="text-xl md:text-2xl leading-snug font-light text-neutral-200 reveal">
                    Soy una persona activa y asertiva. Disfruto trabajando en equipo y siempre intento dar lo mejor de mí. Estoy preparada para afrontar cambios, buscando la mejora continua.
                </p>

<div className="mt-20 flex items-end h-48 space-x-1 overflow-hidden relative opacity-80">
<div className="w-8 h-32 bg-[#e6e4df] border transform -rotate-3 translate-y-2 flex items-center justify-center border-black reveal delay-100"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap text-black">Gestión de Ventas</span></div>
<div className="w-10 h-40 bg-[#d4d2cd] border flex items-center justify-center border-black reveal delay-200"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap font-bold text-black">Marketing</span></div>
<div className="w-6 h-36 bg-[#f2f0ea] border transform rotate-1 flex items-center justify-center border-black reveal delay-300"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap text-black">Publicidad</span></div>
<div className="w-7 h-44 bg-[#e6e4df] border flex items-center justify-center border-black reveal delay-500"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap text-black">AutoCAD</span></div>
<div className="w-5 h-38 border transform -rotate-1 flex items-center justify-center bg-white border-black reveal delay-700"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap text-black">SketchUp 3D</span></div>
<div className="w-12 h-24 bg-transparent"></div> 
<div className="w-12 h-36 bg-[#e6e4df] border transform rotate-12 flex items-center justify-center ml-4 border-black reveal delay-700"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap leading-tight text-black">VisualMerchandising</span></div>
<div className="w-8 h-40 bg-[#e6e4df] border transform rotate-[25deg] origin-bottom-left flex items-center justify-center border-black reveal delay-1000"><span className="block -rotate-90 text-[8px] w-32 text-center whitespace-nowrap text-black">Liderazgo</span></div>
</div>
</div>

<div className="">
<h2 className="text-6xl md:text-9xl tracking-tighter font-medium mb-4 text-right md:text-left reveal">
                    3 áreas
                </h2>
<p className="text-sm mb-8 max-w-md text-neutral-400 reveal delay-100">
                    Mi experiencia se divide principalmente entre la gestión comercial directa, el marketing estratégico y la coordinación de equipos en espacios retail.
                </p>
<div className="flex items-end h-64 w-full">

<div className="w-[50%] bg-[#e6e4df] h-full p-4 flex flex-col justify-between rounded-tl-sm rounded-tr-sm mr-1 text-black reveal-scale delay-200 origin-bottom">
<span className="text-xl font-semibold">50%</span>
<span className="text-xs font-medium">Gestión de Ventas &amp; Retail</span>
</div>

<div className="w-[30%] bg-[#2a2a2a] h-[70%] p-4 flex flex-col justify-between text-[#e6e4df] rounded-tl-sm rounded-tr-sm mr-1 reveal-scale delay-300 origin-bottom">
<span className="text-xl font-semibold">30%</span>
<span className="text-xs font-medium">Marketing &amp; Publicidad</span>
</div>

<div className="w-[20%] bg-[#111] border h-[40%] p-4 flex flex-col justify-between text-[#e6e4df] rounded-tl-sm rounded-tr-sm border-white/10 reveal-scale delay-500 origin-bottom">
<span className="text-xl font-semibold">20%</span>
<span className="text-xs font-medium truncate">Diseño &amp; Planos</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
<h2 className="text-4xl md:text-6xl tracking-tight font-medium mb-12 reveal">
            Mis <span className="font-serif-italic">Aptitudes</span>
</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="flex flex-col justify-between">
<p className="text-2xl md:text-4xl tracking-tight font-medium leading-tight mb-8 reveal">
                    Tengo disposición y habilidades para trabajar bajo presión. Me caracterizo por el aprendizaje rápido, la responsabilidad y la iniciativa para generar soluciones efectivas.
                </p>
<div className="mt-8 reveal delay-200">
<p className="leading-relaxed text-sm max-w-xs text-neutral-400">
    Disponible para trabajar.
    Contacta en <a className="underline text-white" href="mailto:rubio.paula2001@gmail.com">rubio.paula2001@gmail.com</a>
</p>
</div>
</div>

<div className="overflow-hidden flex flex-col bg-[#0a0a0a] w-full h-[500px] border rounded-lg relative items-center justify-center border-white/5 reveal delay-200">

<div className="absolute top-6 left-6 w-48 h-48 z-10 flex items-center justify-center reveal-fade delay-300">
<svg className="w-full h-full text-[#e6e4df] fill-current drop-shadow-md" viewbox="0 0 200 200">

<path className="" d="M100 10 L112 45 L140 30 L135 65 L170 60 L155 90 L190 100 L155 115 L180 145 L145 145 L150 180 L115 160 L100 190 L85 160 L50 180 L55 145 L20 145 L45 115 L10 100 L45 90 L30 60 L65 65 L60 30 L88 45 Z"></path>
</svg>
<span className="absolute font-bold text-xs text-center -rotate-12 select-none uppercase tracking-tight text-black">Visual Merch</span>
</div>

<div className="absolute top-4 right-6 w-48 h-40 z-10 flex items-center justify-center reveal-fade delay-500">
<svg className="fill-current drop-shadow-md w-[192px] h-[160px]" data-icon-replaced="true" strokeWidth="2" style={{width: '192px', height: '160px', color: 'rgb(230, 228, 223)'}} viewbox="0 0 200 180">

<path className="" d="M50 80 C30 60 40 30 70 20 C90 10 110 10 130 30 C160 20 180 40 170 70 C190 100 170 130 140 140 C130 150 140 165 130 175 C120 185 110 160 100 150 C70 160 40 140 30 110 C20 100 30 90 50 80 Z"></path>
</svg>
<span className="-translate-y-4 select-none text-sm font-bold absolute translate-x-1 -rotate-6 uppercase text-black">Estrategia</span>
</div>

<div className="absolute top-[180px] left-8 w-44 h-44 z-20 flex items-center justify-center reveal-fade delay-700">
<svg className="w-full h-full text-[#e6e4df] fill-current drop-shadow-md" viewbox="0 0 200 200">

<path className="" d="M20 90 L5 70 L35 60 L20 30 L55 45 L70 10 L100 40 L130 15 L140 50 L180 40 L160 80 L190 100 L160 120 L175 160 L135 145 L120 185 L90 150 L60 180 L50 145 L15 155 L35 115 L5 105 Z"></path>
</svg>
<span className="absolute font-bold text-xs text-center leading-tight select-none uppercase text-black">Resolutiva</span>
</div>

<div className="absolute top-[140px] right-12 w-36 h-48 z-10 flex items-center justify-center reveal-fade delay-1000">
<svg className="w-full h-full text-[#e6e4df] fill-current drop-shadow-md" viewbox="0 0 100 130">

<path className="" d="M25 50 L25 30 L35 30 L35 10 L45 10 L45 30 L55 30 L55 5 L65 5 L65 30 L75 30 L75 15 L85 15 L85 30 L95 30 L95 80 L85 80 L85 90 L75 90 L75 125 L25 125 L25 90 L15 90 L15 80 L5 80 L5 50 Z"></path>
</svg>
<span className="absolute font-bold text-xs text-center mt-12 ml-1 leading-tight select-none uppercase text-black">Liderazgo</span>
</div>

<div className="absolute bottom-[-1px] left-0 w-full z-30 reveal delay-200">

<div className="w-full h-8 relative z-40">
<svg className="w-full h-full text-[#e6e4df] fill-current transform translate-y-px" preserveaspectratio="none" viewbox="0 0 100 20">
<polygon className="" points="0,20 100,20 100,10 95,0 90,12 85,0 80,15 75,0 70,12 65,0 60,15 55,0 50,12 45,0 40,15 35,0 30,12 25,0 20,15 15,0 10,12 5,0 0,10"></polygon>
</svg>
</div>

<div className="flex flex-col bg-[#e6e4df] w-full pt-2 pb-10 items-center justify-center">
<div className="text-center leading-[0.85] select-none text-black">
<h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-1">Marketing,</h3>
<div className="flex items-baseline justify-center gap-2 mb-1">
<h3 className="md:text-6xl text-4xl font-bold tracking-tighter">Retail</h3>
<span className="text-sm md:text-base font-bold translate-y-[-4px]">y</span>
</div>
<h3 className="md:text-6xl text-4xl font-bold tracking-tighter">Diseño</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
<h2 className="text-4xl md:text-6xl tracking-tight font-medium mb-12 reveal">
            Habilidades <span className="font-serif-italic">Técnicas</span>
</h2>
<div className="flex flex-col md:flex-row gap-12 mb-12">
<div className="w-full md:w-1/2"></div> 
<div className="w-full md:w-1/2">
<p className="text-xl md:text-2xl font-light leading-snug reveal delay-100">
                    Domino herramientas digitales clave para el diseño y la gestión comercial, además de contar con competencias lingüísticas sólidas.
                </p>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 border-[#222] border gap-x-px gap-y-px">

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal">
<span className="text-sm font-medium">Gestión</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-users w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">Gestión de CRMMicrosoft Excel</p>
</div>

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal delay-100">
<span className="text-sm font-medium">Diseño &amp; Planos</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-ruler w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">AutoCADSketchUp 3D</p>
</div>

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal delay-200">
<span className="text-sm font-medium">Web</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-globe w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">WordPressGestión online</p>
</div>

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal delay-300">
<span className="text-sm font-medium">Idiomas</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-languages w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">Castellano (Nativo)Euskera (Nativo)Inglés (Avanzado)</p>
</div>

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal delay-500">
<span className="text-sm font-medium">Retail</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-store w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">Visual MerchandisingGestión de StockCartelería (PLV)</p>
</div>

<div className="bg-[#0f0f0f] p-8 min-h-[280px] flex flex-col justify-between hover:bg-[#141414] transition-colors reveal delay-700">
<span className="text-sm font-medium">Soft Skills</span>
<div className="flex-grow flex items-center justify-center">
<svg className="lucide lucide-sun w-16 h-16 stroke-[1] text-[#e6e4df]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<p className="text-sm leading-tight text-neutral-400">Trabajo bajo presiónAprendizaje rápidoTrabajo en equipo</p>
</div>
</div>
</section>

<section className="md:px-12 text-center max-w-[1600px] mr-auto mb-32 ml-auto pr-6 pl-6">
<div className="mb-8 reveal">
<h3 className="text-4xl md:text-5xl font-serif-italic mb-[-20px] relative z-10">Contacto</h3>
<h2 className="md:text-[10rem] uppercase leading-none select-none text-6xl font-black tracking-tighter text-neutral-800" style={{fontStretch: 'expanded'}}>
                Work
            </h2>
</div>
<p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-tight mb-12 reveal delay-200">
            Estoy lista para aportar valor a tu equipo. Si buscas a alguien con iniciativa, capacidad de liderazgo y experiencia en retail y marketing, hablemos.
        </p>
<a className="inline-block uppercase transition-colors hover:bg-white text-sm font-bold text-black tracking-wide bg-[#e6e4df] rounded-full mb-24 pt-4 pr-10 pb-4 pl-10 reveal delay-300" href="mailto:rubio.paula2001@gmail.com">
            Contactar
        </a>
</section>

<footer className="border-t pt-16 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto border-white/10 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="">
<div className="text-2xl tracking-tighter font-serif-italic mb-8">Paula Rubio Oñate</div>
</div>

<div className="flex flex-col gap-3 text-sm font-medium text-neutral-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>688 620 368</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="transition-colors hover:text-white" href="mailto:rubio.paula2001@gmail.com">rubio.paula2001@gmail.com</a>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Derio, Bizkaia</span>
</div>
</div>

<div className="">
<h4 className="text-lg font-medium mb-2">Hablemos</h4>
<div className="mt-8 flex items-center gap-1 text-xs font-medium cursor-pointer group hover:text-white">
                    Descargar CV PDF <svg className="lucide lucide-arrow-down w-3 h-3 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>

<div className="md:text-right">
<div className="text-xs text-neutral-500 mb-1">Ubicación</div>
<div className="text-5xl font-medium tracking-tight mb-1">ES</div>
<div className="text-xs text-neutral-400">Bizkaia, España</div>
</div>
</div>
<div className="mt-20 flex justify-center text-[10px] gap-1 text-neutral-600">
             © 2024 Paula Rubio Oñate
        </div>
</footer>


    </>
  );
}
