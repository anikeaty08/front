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
      

<nav className="fixed z-50 bg-white/80 w-full border-slate-200 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex uppercase items-center text-4xl font-semibold text-blue-800 tracking-tight" href="#">NEXO<span className="text-slate-400 scale-100">uno</span></a>

<div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#servicios">Servicios</a><a className="hover:text-slate-900 transition-colors" href="#servicios">Contacto</a>
</div>
</div>
<a className="hidden sm:inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 h-9 rounded-md pt-2 pr-4 pb-2 pl-4" href="http://calendly.com/">Valoración Gratuita</a>
</div>
</nav>

<section className="overflow-hidden sm:pt-40 sm:pb-24 text-slate-400 bg-slate-400 pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex text-xs font-medium text-slate-600 bg-white border-slate-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm items-center">Especializado en el Sector Industrial, Construcción y Logístico</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight font-inter mb-6">Buscamos clientes reales para tu negocio</h1>
<p className="sm:text-xl leading-relaxed text-lg text-slate-700 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Contactamos directamente con responsables de EMPRESAS, filtramos interés real y te entregamos oportunidades DE NEGOCIO listas para cerrar.</p>
<div className="flex flex-col gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center transition-all hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 text-base font-medium text-white bg-slate-900 h-12 rounded-lg pr-8 pl-8 shadow" href="http://calendly.com/">Valoración Gratuita</a>
<span className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                    Llamada de 15 minutos · Sin compromiso
                </span>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">El problema no es tu servicio, es el acceso a los que deciden</h2>
<p className="leading-relaxed text-slate-600 mb-6">La mayoría de empresas dependen de contactos antiguos, referencias o llamadas puntuales sin método. Cuando hay capacidad para asumir más trabajo, no hay un flujo constante de nuevas oportunidades.</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 text-red-500 bg-red-50 p-1 rounded">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-slate-900 font-medium text-sm">Falta de tiempo para llamar</span>
<span className="text-slate-500 text-sm">El día a día operativo consume los recursos comerciales.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-red-500 bg-red-50 p-1 rounded">
<iconify-icon className="" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-slate-900 font-medium text-sm">Dificultad para hablar con decisores</span>
<span className="text-slate-500 text-sm">Filtros, centralitas y responsables difíciles de localizar.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-red-500 bg-red-50 p-1 rounded">
<iconify-icon className="" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-slate-900" style={{}}>Contactos poco cualificados</span>
<span className="text-slate-500 text-sm">Contactos que no tienen presupuesto ni necesidad real.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-red-500 bg-red-50 p-1 rounded">
<iconify-icon className="" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-slate-900 font-medium text-sm">Comercial caro o inexistente</span>
<span className="text-slate-500 text-sm">Costes fijos altos sin garantía de rendimiento.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pr-6 pb-24 pl-6" id="servicios">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4 border border-blue-100">
                    Nuestras Soluciones
                </div>
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">Sistema de generación de oportunidades B2B</h2>
<p className="text-lg text-slate-500">Diseñado para empresas industriales, técnicas, logísticas y de construcción que necesitan un flujo constante de nuevos contratos.</p>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="http://calendly.com/">
                    Ver comparativa detallada de servicios
                    <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-6">
<iconify-icon className="" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Un equipo comercial externo, automatizado y potenciado con Inteligencia Artificial</h2>
<p className="leading-relaxed text-lg text-slate-600 mb-8">
                Actuamos como una extensión de tu equipo comercial. Un agente de IA llama en nombre de tu empresa, mantiene conversaciones reales y filtra únicamente contactos con interés.
            </p>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-200 inline-block text-left">
<p className="text-slate-800 font-medium text-sm flex gap-2 items-center">
<iconify-icon className="text-slate-500" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
<span className="">No hacemos publicidad. No cerramos ventas. <span className="font-semibold text-slate-900">Generamos oportunidades reales.</span></span>
</p>
</div>
</div>
</section>

<section className="text-gray-400 bg-gray-900 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-6xl font-semibold text-slate-50 tracking-tight mb-4">Cómo funciona</h2>
<p className="text-slate-400 max-w-2xl mr-auto ml-auto">
                    La mayoría de nuestros clientes mantienen campañas activas de forma continuada para asegurar un flujo constante de oportunidades.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="relative group">
<div className="-top-10 -left-4 select-none text-8xl font-bold text-slate-50 opacity-20 absolute translate-x-4">1</div>
<div className="relative z-10">
<div className="flex bg-slate-800 w-10 h-10 border-slate-700 border rounded mb-4 translate-x-16 items-center justify-center">
<iconify-icon className="" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-50 mb-2">Definición</h3>
<p className="text-slate-400 text-sm leading-relaxed">Definimos el perfil exacto de empresa objetivo y el cargo del decisor (mantenimiento, planta, compras).</p>
</div>
</div>

<div className="relative group">
<div className="-top-10 -left-4 select-none text-8xl font-bold text-slate-50 opacity-20 absolute translate-x-2">2</div>
<div className="z-10 relative">
<div className="flex bg-slate-800 w-10 h-10 border-slate-700 border rounded mb-4 translate-x-16 scale-100 items-center justify-center" style={{maskImage: 'linear-gradient(210deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 0%, black 100%, transparent)'}}>
<iconify-icon className="" height="20" icon="solar:phone-calling-linear" style={{color: 'rgb(156, 163, 175)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-50 mb-2">Contacto</h3>
<p className="leading-relaxed text-sm text-slate-400">El agente de IA contacta por teléfono de forma ética y profesional en nombre de tu empresa.</p>
</div>
</div>

<div className="relative group">
<div className="-top-10 -left-4 select-none text-8xl font-bold text-slate-50 opacity-20 absolute translate-x-2">3</div>
<div className="relative z-10">
<div className="flex bg-slate-800 w-10 h-10 border-slate-700 border rounded mb-4 translate-x-16 items-center justify-center">
<iconify-icon className="" icon="solar:filter-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-50 mb-2">Filtrado</h3>
<p className="leading-relaxed text-sm text-slate-400">Se filtra el interés real a través de una conversación natural, descartando curiosos.</p>
</div>
</div>

<div className="relative group">
<div className="-top-10 -left-4 select-none text-8xl font-bold text-slate-50 opacity-20 absolute translate-x-2">4</div>
<div className="z-10 relative">
<div className="flex bg-slate-800 w-10 h-10 border-slate-700 border rounded mb-4 translate-x-16 items-center justify-center">
<iconify-icon className="" height="20" icon="solar:inbox-in-linear" style={{color: 'rgb(156, 163, 175)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-50 mb-2">Entrega</h3>
<p className="leading-relaxed text-sm text-slate-400">Recibes los leads cualificados con la grabación, transcripción y contexto listos para cerrar.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
<div className="grid md:grid-cols-2 gap-12">
<div className="">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Qué consideramos un contacto comercial cualificado</h2>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Para evitar malentendidos, definimos claramente qué es una oportunidad válida antes de empezar a trabajar. La transparencia es clave en el B2B.
                        </p>
<div className="text-xs text-slate-500 bg-slate-50 border-slate-100 border rounded pt-4 pr-4 pb-4 pl-4">
                            Nota: Un lead cualificado no implica venta cerrada. Implica una puerta abierta con interés real.
                        </div>
</div>
<div className="">
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-slate-800 font-medium">Empresa B2B real y operativa</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-slate-800 font-medium">Encaja con el perfil acordado</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-slate-900" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="text-slate-800 font-medium">Contacto con responsable/decisor</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-slate-900 shrink-0" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="font-medium text-slate-800">Interés expreso en recibir información o continuar la conversación</span>
</li>
</ul>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-slate-900 shrink-0" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
<span className="font-medium text-slate-800" style={{}}>Tu solo te ocupas de cerrar el acuerdo</span>
</li></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100 px-6">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:star-linear"></iconify-icon>
                        Este servicio es ideal para:
                    </h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon>
                            Empresas de mantenimiento industrial
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon>
                            Servicios industriales especializados
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon>
                            Subcontratas técnicas B2B
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon>
                            Empresas que buscan contratos recurrentes
                        </li>
</ul>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 opacity-80">
<h3 className="text-lg font-medium text-slate-500 mb-6 flex items-center gap-2">
<iconify-icon className="" icon="solar:forbidden-circle-linear"></iconify-icon>
                        No trabajamos con:
                    </h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-slate-300" icon="solar:close-square-linear"></iconify-icon>
                            Negocios B2C (venta a particular)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-slate-300" icon="solar:close-square-linear"></iconify-icon>
                            Productos de ticket bajo
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-500">
<iconify-icon className="text-slate-300" icon="solar:close-square-linear"></iconify-icon>
                            Marketing masivo indiscriminado
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Cómo trabajamos</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 rounded-lg bg-white border border-slate-100 text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-900 mb-4" icon="solar:calendar-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm mb-1">Por campañas</h4>
<p className="text-xs text-slate-500">Objetivos claros y definidos en el tiempo.</p>
</div>
<div className="p-6 rounded-lg bg-white border border-slate-100 text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-900 mb-4" icon="solar:lock-unlocked-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm mb-1">Sin permanencia</h4>
<p className="text-xs text-slate-500">Libertad total. No forzamos contratos largos.</p>
</div>
<div className="p-6 rounded-lg bg-white border border-slate-100 text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-900 mb-4" icon="solar:card-transfer-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm mb-1">Pago adelantado</h4>
<p className="text-xs text-slate-500">Compromiso mutuo para configurar la IA.</p>
</div>
<div className="p-6 rounded-lg bg-white border border-slate-100 text-center hover:border-slate-200 transition-colors">
<iconify-icon className="text-slate-900 mb-4" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm mb-1">Garantía de actividad</h4>
<p className="text-xs text-slate-500">Si no se alcanza el volumen, ampliamos campaña.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white text-center" id="contacto">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Valoremos si tiene sentido colaborar</h2>
<p className="text-lg text-slate-400 mb-10">En una llamada breve analizamos tu caso y te explicamos si este sistema encaja para tu empresa.</p>
<a className="inline-flex items-center justify-center transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white text-base font-medium text-slate-900 bg-white h-12 rounded-lg pr-8 pl-8 shadow" href="http://calendly.com/">
                Solicitar llamada
            </a>
<p className="mt-6 text-xs text-slate-500">Agenda tu reunión en Calendly · 15 minutos</p>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-between">
<div className="md:text-left text-center">
<span className="block uppercase font-semibold text-blue-800 tracking-tight mb-1">nexo<span className="text-slate-400">uno</span></span>
<p className="text-xs text-slate-400">Prospección comercial B2B automatizada</p>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Aviso legal</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacidad</a>
<span className="">info@nexouno.com</span>
</div>
</div>
</footer>

    </>
  );
}
