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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cursorDot = document.createElement('div');
        const cursorOutline = document.createElement('div');
        cursorDot.className = 'cursor-dot hidden md:block';
        cursorOutline.className = 'cursor-outline hidden md:block';
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        window.addEventListener("mousemove", function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay to outline for fluid feel
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-neutral-800">
<a className="text-xl font-medium tracking-tight uppercase z-50 mix-blend-difference text-white" href="#">centrly.</a>
<div className="hidden md:flex gap-12 text-xs font-normal tracking-wide uppercase mix-blend-difference text-white">
<a className="hover:opacity-50 transition-opacity" href="#problema">El Problema</a>
<a className="hover:opacity-50 transition-opacity" href="#sistema">Sistema</a>
<a className="hover:opacity-50 transition-opacity" href="#servicios">Servicios</a>
<a className="hover:opacity-50 transition-opacity" href="#faqs">FAQs</a>
</div>
<button className="group flex items-center gap-2 mix-blend-difference text-white">
<span className="text-xs uppercase font-normal tracking-wide hidden md:block group-hover:tracking-widest transition-all duration-300">Menú</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 w-full h-full flex justify-center items-center z-0 opacity-80 pointer-events-none">
<div className="liquid-container w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] relative">
<div className="blob absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-300 to-gray-100 opacity-90 mix-blend-normal"></div>
<div className="blob absolute top-10 -right-10 w-3/4 h-3/4 bg-[#3D3BFF] opacity-80 mix-blend-multiply animation-delay-2000"></div>
<div className="blob absolute -bottom-10 left-10 w-2/3 h-2/3 bg-gray-400 opacity-70 mix-blend-overlay animation-delay-4000"></div>
</div>
</div>

<div className="relative z-10 text-center mix-blend-difference flex flex-col items-center justify-center px-6 mt-12 w-full max-w-7xl mx-auto">
<h1 className="text-5xl md:text-7xl lg:text-[7vw] leading-[0.9] font-medium tracking-tighter text-white mb-8">
                Tu clínica es excelente.<br/>
<span className="text-ultramarine italic">Pero eligen a la competencia.</span>
</h1>
<p className="text-base md:text-lg lg:text-xl text-neutral-300 max-w-3xl font-normal tracking-tight mb-12 leading-relaxed">
                Centrly llena tu agenda con pacientes nuevos cada mes — con presencia digital, automatización con IA, y contenido que convierte.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="px-8 py-4 rounded-full bg-white text-[#111] text-xs font-medium uppercase tracking-widest hover:bg-ultramarine hover:text-white transition-all duration-300" href="#auditoria">
                    Solicita tu auditoría gratuita
                </a>
<span className="text-xs text-neutral-400 font-normal tracking-wide">Sin compromiso. Descubre exactamente dónde pierdes pacientes.</span>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full px-6 flex justify-between items-end text-xs font-normal tracking-tight text-[#111] z-20 mix-blend-darken">
<div className="flex flex-col gap-1">
<span className="opacity-50">Sede Central</span>
<span>Madrid, España</span>
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="opacity-50">Desliza para explorar</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</header>

<div className="w-full border-y border-neutral-300 py-3 overflow-hidden bg-white/50 backdrop-blur-sm z-20 relative">
<div className="marquee-content whitespace-nowrap flex gap-12 items-center">
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">SEO Local</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Automatización IA</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Captación de Pacientes</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Contenido Médico</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">SEO Local</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Automatización IA</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Captación de Pacientes</span>
<span className="w-2 h-2 rounded-full bg-[#3D3BFF]"></span>
<span className="text-sm font-normal uppercase tracking-widest text-[#111]">Contenido Médico</span>
</div>
</div>

<section className="w-full py-32 px-6" id="problema">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-3 flex flex-col justify-between h-full">
<div className="text-xs font-normal uppercase tracking-wide text-neutral-400">
                    (01) — El Problema
                </div>
<div className="mt-8 lg:mt-0">
<iconify-icon className="text-ultramarine animate-spin-slow" icon="solar:asterisk-circle-linear" strokeWidth="1.5" style={{animationDuration: '10s'}} width="32"></iconify-icon>
</div>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#111] mb-16">
                    ¿Cuántos pacientes pierdes cada semana <span className="text-ultramarine italic">sin saberlo?</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-sm leading-relaxed text-neutral-600">
<div className="flex flex-col gap-3 border-t border-neutral-200 pt-4">
<h4 className="text-base font-medium text-[#111] tracking-tight">Invisibles en Google</h4>
<p>Tu competencia aparece por encima de ti en Google Maps. Los pacientes buscan, los encuentran primero y nunca llegan a saber que existes. No es porque sean mejores clínicos, es porque invirtieron en ser encontrados.</p>
</div>
<div className="flex flex-col gap-3 border-t border-neutral-200 pt-4">
<h4 className="text-base font-medium text-[#111] tracking-tight">Llamadas = Pacientes perdidos</h4>
<p>Cada llamada no contestada es un paciente que elige a otro. Sin rellamada automática, sin seguimiento, sin una segunda oportunidad. Y lo peor: ni siquiera sabes que está ocurriendo.</p>
</div>
<div className="flex flex-col gap-3 border-t border-neutral-200 pt-4">
<h4 className="text-base font-medium text-[#111] tracking-tight">Sin contenido no hay confianza</h4>
<p>Los pacientes revisan tu Instagram antes de reservar. Si está vacío, desactualizado o no existe, pasan al siguiente. El contenido ya no es opcional, es tu primera impresión real.</p>
</div>
<div className="flex flex-col gap-3 border-t border-neutral-200 pt-4">
<h4 className="text-base font-medium text-[#111] tracking-tight">Dinero tirado en agencias</h4>
<p>Probablemente ya has pagado a una agencia. Recibiste informes bonitos y algunos likes, pero ningún paciente real cruzó tu puerta. Eso no es crecimiento, es un coste vacío.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 bg-white px-6" id="sistema">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-neutral-300 pb-4">
<div className="lg:col-span-3">
<h3 className="text-xs font-normal uppercase tracking-wide text-neutral-400">(02) — El Sistema</h3>
</div>
<div className="lg:col-span-9">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[#111]">
                    No somos una lista de servicios. Somos un sistema de crecimiento diseñado exclusivamente para clínicas.
                </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:map-point-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight mt-2">Presencia Digital &amp; SEO</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Web orientada a conversión y perfil de Google Maps optimizado para el Top 3.
                </p>
<p className="text-xs font-medium text-[#111] mt-2 uppercase tracking-wide">Apareces primero. Tu agenda se llena.</p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:cpu-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight mt-2">Automatización con IA</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Agentes de voz, chatbots 24/7 y recuperación instantánea de llamadas perdidas.
                </p>
<p className="text-xs font-medium text-[#111] mt-2 uppercase tracking-wide">Nunca más pierdes un paciente.</p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<iconify-icon className="text-neutral-400 group-hover:text-ultramarine transition-colors" icon="solar:camera-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-xl font-medium tracking-tight mt-2">Contenido y Ads</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Vídeo vertical profesional grabado en tu clínica y publicidad segmentada que convierte.
                </p>
<p className="text-xs font-medium text-[#111] mt-2 uppercase tracking-wide">Confianza que atrae visitas.</p>
</div>
</div>
</section>

<section className="w-full py-32 px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-neutral-300 pb-4">
<div className="lg:col-span-3">
<h3 className="text-xs font-normal uppercase tracking-wide text-neutral-400">(03) — El Proceso</h3>
</div>
<div className="lg:col-span-9">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[#111]">
                    Cero fricción. Tu única responsabilidad es dedicar 2 días al mes para grabar. Nosotros hacemos el resto.
                </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 group">
<div className="text-xs font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">Paso 01</div>
<h4 className="text-lg font-medium tracking-tight">Auditoría gratuita</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Analizamos tu web, Google Maps y tasa de llamadas. Te mostramos exactamente dónde pierdes pacientes, sin compromiso.
                </p>
</div>

<div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 group">
<div className="text-xs font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">Paso 02</div>
<h4 className="text-lg font-medium tracking-tight">Plan personalizado</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Creamos una hoja de ruta adaptada a tu clínica. Sabrás qué haremos, cuándo y qué resultados esperar.
                </p>
</div>

<div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 group">
<div className="text-xs font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">Paso 03</div>
<h4 className="text-lg font-medium tracking-tight">Ejecución completa</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Implementamos la web, IA, contenido y anuncios. Tú solo inviertes 2 días al mes para las grabaciones.
                </p>
</div>

<div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 group">
<div className="text-xs font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">Paso 04</div>
<h4 className="text-lg font-medium tracking-tight">Resultados medibles</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Más llamadas. Más citas. Más ingresos. Cero métricas vanidosas, solo crecimiento real en tu clínica.
                </p>
</div>
</div>
</section>

<section className="w-full pb-32 px-6" id="servicios">
<div className="flex justify-between items-end mb-16 border-b border-neutral-300 pb-4">
<h3 className="text-xs font-normal uppercase tracking-wide text-neutral-400">(04) — Servicios en Detalle</h3>
</div>
<div className="flex flex-col">

<div className="project-item group relative border-t border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">01</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Web &amp; SEO Local
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Diseño orientado a conversión, SEO on-page y optimización total de Google Business Profile. Aparece cuando los pacientes buscan tus tratamientos en Madrid.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">02</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Recuperación IA
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Rellamada automática en segundos ante llamadas perdidas, SMS con link de reserva, chatbot web 24/7 y agente de voz para desbordes. Tu clínica nunca duerme.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">03</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Reactivación
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Campañas a tu base de datos inactiva con ofertas a cambio de reseñas en Google. Generamos ingresos de pacientes antiguos e inundamos tu perfil de 5 estrellas.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">04</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Contenido
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Grabamos 8 vídeos profesionales en tu clínica al mes. Gestionamos Instagram, TikTok y LinkedIn. Nosotros ideamos, grabamos, editamos y publicamos todo.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-t border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">05</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Publicidad Ads
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Campañas en Meta y Google Ads basadas en contenido que ya funciona orgánicamente. Adquisición predecible y escalable sobre una base digital sólida.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="project-item group relative border-y border-neutral-300 py-10 cursor-pointer transition-all hover:bg-white">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 text-xs font-normal text-neutral-400 group-hover:text-ultramarine">06</div>
<div className="md:col-span-4 text-2xl md:text-4xl font-normal tracking-tight text-[#111] group-hover:translate-x-4 transition-transform duration-500">
                        Optimización Interna
                    </div>
<div className="md:col-span-6 text-sm text-neutral-500 leading-relaxed px-4 md:px-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        Auditamos tus procesos y creamos herramientas IA personalizadas para reducir horas administrativas. Tu equipo se libera de tareas manuales repetitivas.
                    </div>
<div className="md:col-span-1 flex justify-end hidden md:flex">
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 bg-white px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-3 flex flex-col justify-between h-full">
<div className="text-xs font-normal uppercase tracking-wide text-neutral-400">
                    (05) — Diferenciadores
                </div>
<div className="mt-8 lg:mt-0 hidden lg:block">
<span className="text-xs font-medium text-[#111] uppercase tracking-wide max-w-[200px] block">Especialistas en clínicas de Madrid.</span>
</div>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-[#111] mb-16">
                    Por qué Centrly y no otra agencia generalista.
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex flex-col gap-3">
<iconify-icon className="text-ultramarine mb-2" icon="solar:medical-kit-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight text-[#111]">Solo clínicas</h4>
<p className="text-sm text-neutral-600 leading-relaxed">No trabajamos con restaurantes ni e-commerce. Solo clínicas dentales y estéticas. Cada estrategia está diseñada para tu modelo de negocio exacto.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-ultramarine mb-2" icon="solar:link-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight text-[#111]">Todo conectado</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Web, SEO, IA, contenido y ads. Todo es un solo sistema operando en sincronía. No tienes que coordinar a 5 freelancers que no hablan entre sí.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-ultramarine mb-2" icon="solar:magic-stick-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight text-[#111]">IA que trabaja por ti</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Nuestros sistemas recuperan llamadas a las 3 AM y automatizan tu clínica. Tecnología real que ahorra horas y aumenta la facturación.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-ultramarine mb-2" icon="solar:graph-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-lg font-medium tracking-tight text-[#111]">Resultados, no informes</h4>
<p className="text-sm text-neutral-600 leading-relaxed">No te enviamos un PDF con clics e impresiones. Te traemos pacientes. Esa es la única métrica que importa y por la que nos medimos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full pb-32 px-6" id="faqs">
<div className="flex justify-between items-end mb-16 border-b border-neutral-300 pb-4">
<h3 className="text-xs font-normal uppercase tracking-wide text-neutral-400">(06) — Preguntas Frecuentes</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">

<div className="border-t border-neutral-300 py-6">
<h4 className="text-base font-medium tracking-tight mb-3">¿Cuánto tiempo tarda en verse resultados?</h4>
<p className="text-sm text-neutral-600 leading-relaxed">La infraestructura base (web, Maps, IA) está lista en 20 días. El SEO muestra mejoras en 30-90 días. El contenido y los ads aceleran la captación desde el mes 2.</p>
</div>

<div className="border-t border-neutral-300 py-6">
<h4 className="text-base font-medium tracking-tight mb-3">¿Qué pasa si ya tengo una web?</h4>
<p className="text-sm text-neutral-600 leading-relaxed">La auditamos. Si está optimizada, la mejoramos. Si no está diseñada para convertir pacientes (la mayoría no lo está), construimos una nueva incluida en el plan.</p>
</div>

<div className="border-t border-neutral-300 py-6">
<h4 className="text-base font-medium tracking-tight mb-3">¿Cuánto tiempo necesito dedicarle?</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Mínimo. Solo 2 días al mes para las grabaciones de contenido en tu clínica. Toda la estrategia, edición técnica y gestión de pacientes la hacemos nosotros.</p>
</div>

<div className="border-t border-neutral-300 py-6">
<h4 className="text-base font-medium tracking-tight mb-3">¿Puedo cancelar cuando quiera?</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Existe un compromiso inicial de 6 meses. No para atarte, sino porque los resultados reales toman ese tiempo. Después de 6 meses, trabajamos mes a mes.</p>
</div>

<div className="border-t border-neutral-300 py-6">
<h4 className="text-base font-medium tracking-tight mb-3">¿Cómo sé que esto funciona?</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Antes de pagar un euro, te mostramos cuántas llamadas pierdes, los pacientes que gana tu competencia y dónde estás en Google. La auditoría es gratuita.</p>
</div>

<div className="border-t border-neutral-300 py-6 border-b lg:border-b-0">
<h4 className="text-base font-medium tracking-tight mb-3">Ya probé agencias y no funcionó.</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Las agencias venden likes. Nosotros vendemos pacientes. Construimos un sistema completo, desde la búsqueda en Google hasta que el paciente se sienta en tu sillón.</p>
</div>
</div>
</section>

<footer className="w-full bg-[#0A0A0A] text-[#F4F4F4] pt-32 pb-8 px-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-b from-ultramarine to-transparent blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 relative z-10">
<div className="lg:col-span-7">
<h2 className="text-5xl md:text-7xl lg:text-[6vw] font-medium tracking-tighter leading-none mb-8">
                    ¿Listo para llenar<br/>tu <span className="text-ultramarine italic">agenda?</span>
</h2>
<p className="text-neutral-400 text-lg md:text-xl max-w-xl font-normal tracking-tight">
                    Solicita tu auditoría gratuita. Te mostramos exactamente cuántos pacientes estás perdiendo — y cómo recuperarlos.
                </p>
</div>
<div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between mt-8 lg:mt-0">
<div className="flex flex-col gap-6">
<a className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium tracking-tight text-white hover:text-ultramarine transition-colors group" href="#auditoria">
                        Agenda tu auditoría gratuita
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<p className="text-neutral-500 text-xs uppercase tracking-wide">Sin compromiso. 15 minutos. Solo Madrid.</p>
</div>
<div className="mt-16 grid grid-cols-2 gap-8">
<div className="flex flex-col gap-2">
<span className="text-xs text-neutral-600 uppercase tracking-wider">Contacto</span>
<a className="text-sm text-neutral-300 hover:text-ultramarine transition-colors" href="mailto:hola@centrly.es">hola@centrly.es</a>
<a className="text-sm text-neutral-300 hover:text-ultramarine transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-neutral-600 uppercase tracking-wider">Operaciones</span>
<span className="text-sm text-neutral-300">Madrid, España</span>
<span className="text-sm text-neutral-500">Exclusivo Clínicas</span>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-normal tracking-wide uppercase">
<span>© 2024 Centrly. Partner de crecimiento.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Aviso Legal</a>
</div>
</div>
</footer>

<style>
        body:hover {
            cursor: none; 
        }
        .cursor-dot,
        .cursor-outline {
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
        }
        .cursor-dot {
            width: 8px;
            height: 8px;
            background-color: #3D3BFF;
        }
        .cursor-outline {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(61, 59, 255, 0.5);
            transition: width 0.2s, height 0.2s, background-color 0.2s;
        }
        
        /* Interactive states */
        a:hover ~ .cursor-outline,
        button:hover ~ .cursor-outline,
        .project-item:hover ~ .cursor-outline {
            width: 60px;
            height: 60px;
            background-color: rgba(61, 59, 255, 0.1);
            border-color: transparent;
        }
    </style>



    </>
  );
}
