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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white text-xl font-semibold tracking-tight uppercase">
                TMS
            </div>
<div>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200" href="#oferta">
                    Motor de Distribución
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-24">

<section className="relative px-6 py-20 md:py-32 max-w-5xl mx-auto text-center">
<div className="absolute inset-0 top-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                Un equipo de editores dedicados para multiplicar tus visualizaciones sin que toques la edición.
            </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-normal">
                Nosotros montamos tu Motor de Distribución. Tú solo nos pasas los directos y ves los vídeos cortos publicados en cuentas dedicadas a tu marca.
            </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-medium text-sm md:text-base px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto ring-1 ring-red-600/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]" href="#cta">
                    Agendar llamada para montar mi equipo
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-xs text-neutral-500 font-normal">Cupos limitados por mes operativo.</span>
</div>
</section>

<section className="px-6 py-20 bg-neutral-950 border-y border-neutral-900">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<iconify-icon className="text-red-600 text-4xl mb-6" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                        Horas de contenido que nadie ve.
                    </h2>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
                        Haces directos de horas cada semana. Tienes contenido de sobra. Pero ahí se queda. Tratar con editores autónomos es un dolor de cabeza. Te fallan, suben a deshoras o no entienden tu tono. Al final, pierdes miles de visualizaciones porque no tienes tiempo para recortar y distribuir tú mismo.
                    </p>
</div>
<div className="relative h-64 bg-black border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full"></div>
<div className="space-y-4 relative z-10 opacity-50">
<div className="h-4 w-3/4 bg-neutral-800 rounded"></div>
<div className="h-4 w-1/2 bg-neutral-800 rounded"></div>
<div className="h-4 w-full bg-neutral-800 rounded"></div>
<div className="h-4 w-2/3 bg-neutral-800 rounded"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
<span className="text-white font-medium text-sm border border-neutral-800 bg-black px-4 py-2 rounded-full">
                            El modelo de editores independientes está roto
                        </span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                El problema no es de edición. <br className="hidden sm:block"/>
<span className="text-neutral-500">Es de no tener un equipo dedicado.</span>
</h2>
<p className="text-base md:text-lg text-neutral-400 font-normal mb-8">
                Presentamos el Motor de Distribución. Un sistema estructurado donde editores reales operan cuentas de tu marca, publicando volumen constante bajo nuestra supervisión. Nada de gestionar editores sueltos.
            </p>
<a className="text-red-500 hover:text-red-400 font-medium text-sm md:text-base inline-flex items-center gap-1 transition-colors" href="#cta">
                Ver cómo arrancamos tu motor
                <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</section>

<section className="px-6 py-24 bg-black border-t border-neutral-900">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-950/50 flex items-center justify-center text-red-500 font-medium text-sm mb-6 border border-red-900/30">1</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Pasas el material en bruto.</h3>
<p className="text-sm text-neutral-400 font-normal">
                            Danos acceso a tus directos o vídeos largos. Nosotros nos encargamos de descargar y revisar el material.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-950/50 flex items-center justify-center text-red-500 font-medium text-sm mb-6 border border-red-900/30">2</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Montamos el motor.</h3>
<p className="text-sm text-neutral-400 font-normal">
                            Creamos y gestionamos cuentas exclusivas con tu marca para YouTube Shorts, Instagram Reels y TikTok.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors relative overflow-hidden">
<div className="absolute right-0 bottom-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-red-950/50 flex items-center justify-center text-red-500 font-medium text-sm mb-6 border border-red-900/30">3</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Empieza la distribución.</h3>
<p className="text-sm text-neutral-400 font-normal">
                                Nuestro equipo corta, edita y publica a volumen constante. Cobran por visualizaciones reales, alineando sus incentivos con tu crecimiento.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-950 border-neutral-900 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6">
                            Resultados medibles, no promesas al aire.
                        </h2>
<p className="text-sm md:text-base text-neutral-400 font-normal mb-6">
                            Sergio Eleven pidió su primera campaña. El resultado fue inmediato. Ya solicitó la segunda y nos refirió a tres creadores más. Creadores del nicho de los casinos y artistas musicales ya están corriendo sus motores con nosotros ahora mismo.
                        </p>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-red-500 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Proporción comprobada en campaña.
                        </div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-black border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center">
<span className="text-neutral-500 text-xs font-medium uppercase tracking-widest mb-2">Inversión inicial</span>
<span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">$600</span>
</div>
<div className="bg-black border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-0 bottom-0 w-24 h-24 bg-red-600/20 blur-2xl rounded-full"></div>
<span className="text-neutral-500 text-xs font-medium uppercase tracking-widest mb-2 relative z-10">Visualizaciones generadas</span>
<span className="text-3xl md:text-4xl font-semibold text-white tracking-tight relative z-10">2.5M</span>
</div>
<div className="col-span-2 bg-black border border-neutral-800 rounded-2xl p-6 flex items-center justify-between">
<div className="">
<span className="block text-neutral-500 text-xs font-medium uppercase tracking-widest mb-1">Referencia del mercado</span>
<span className="text-lg md:text-xl font-medium text-neutral-200 tracking-tight">$260 por cada millón de visualizaciones</span>
</div>
<iconify-icon className="text-red-500 text-3xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pr-6 pb-24 pl-6 relative" id="oferta">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black pointer-events-none"></div>
<div className="max-w-md mx-auto relative z-10">

<div className="mb-8 bg-neutral-950 border border-neutral-900 rounded-xl p-5 flex items-start gap-4">
<iconify-icon className="text-red-500 text-2xl shrink-0 mt-1" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h4 className="text-sm font-semibold text-white mb-1">Garantía de proceso TMS</h4>
<p className="text-xs text-neutral-400 font-normal leading-relaxed">
                            Respuestas de nuestro equipo en menos de 24 horas durante toda tu campaña. Operamos el material entregado con máxima prioridad y supervisión manual.
                        </p>
</div>
</div>

<div className="bg-black border border-red-900/50 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(220,38,38,0.05)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
                        Motor de Distribución TMS
                    </h3>
<p className="text-sm text-neutral-400 font-normal mb-8">
                        Todo tu contenido en bruto distribuido bajo demanda.
                    </p>
<div className="mb-8">
<span className="text-sm text-neutral-500 font-medium">Campañas desde</span>
<div className="text-4xl font-semibold text-white tracking-tight mt-1">$2.000</div>
</div>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Cuentas dedicadas exclusivamente a tu marca.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Equipo de editores operando bajo supervisión TMS.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Distribución multiplataforma simultánea.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 font-normal">Informes claros y transparentes de campaña.</span>
</li>
</ul>

<a className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-medium text-sm px-6 py-4 rounded-xl transition-all w-full" href="#" id="cta">
                        Agendar llamada de descubrimiento
                    </a>
<p className="text-center text-xs text-neutral-500 mt-4 font-normal">
                        Cupos de operativa limitados cada mes.
                    </p>
</div>
</div>
</section>

<section className="px-6 py-24 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center">
                    Preguntas Frecuentes
                </h2>
<div className="space-y-4">

<details className="group bg-black border border-neutral-900 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-200 p-6 select-none">
                            ¿Cómo aseguráis que los editores no usen cuentas falsas automatizadas?
                            <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal">
                            Filtramos todo el tráfico con una auditoría manual exhaustiva en cada campaña. Detectamos patrones irregulares y mantenemos el motor limpio.
                        </div>
</details>

<details className="group bg-black border border-neutral-900 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-200 p-6 select-none">
                            ¿Tengo que entregar mi material en algún formato específico?
                            <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal">
                            No. Solo danos el enlace a tus directos públicos o compártenos una carpeta con el bruto. Nosotros hacemos el resto.
                        </div>
</details>

<details className="group bg-black border border-neutral-900 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-200 p-6 select-none">
                            ¿Las cuentas de distribución son mías o de TMS?
                            <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal">
                            Operan bajo tu marca exclusiva y en beneficio de tu alcance, pero la gestión logística y operativa pertenece a nuestro equipo.
                        </div>
</details>

<details className="group bg-black border border-neutral-900 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-200 p-6 select-none">
                            ¿Cuánto tarda en estar viva una campaña desde que pago?
                            <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal">
                            En pocos días el equipo está montado, las cuentas configuradas y los primeros vídeos cortos empiezan a salir a producción.
                        </div>
</details>

<details className="group bg-black border border-neutral-900 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-neutral-200 p-6 select-none">
                            ¿Qué pasa si quiero cortar antes de gastar la bolsa?
                            <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-normal">
                            Hablamos, revisamos el trabajo realizado por el equipo hasta ese momento y ajustamos o pausamos lo que sea necesario.
                        </div>
</details>
</div>
</div>
</section>

<section className="bg-black border-neutral-800 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-4xl mx-auto">
</div>
</section>
</main>
<footer className="py-8 bg-black border-t border-neutral-900 text-center">
<div className="text-white text-lg font-semibold tracking-tight uppercase mb-2">TMS</div>
<p className="text-xs text-neutral-600 font-normal">Motor de Distribución para creadores de contenido.</p>
</footer>

    </>
  );
}
