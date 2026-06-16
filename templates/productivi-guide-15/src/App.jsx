import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">
            Rembrr
        </div>
</nav>
<main className="max-w-3xl mx-auto px-6 pb-24">

<header className="py-16 md:py-24 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
<iconify-icon className="text-sm" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">GUÍA DE PRODUCTIVIDAD</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Las 5 tareas que debes automatizar <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">para recuperar hasta</span> <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">5 horas a la semana</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
                La guía práctica para quienes quieren hacer más en menos tiempo.
            </p>
<div className="text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
<p className="text-base text-slate-900 font-medium mb-4">¿Y si tu mayor problema no es el tiempo sino cómo lo gastas?</p>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Seamos honestos: no es que tengas poco tiempo. Es que una parte enorme de tu día se va en tareas repetitivas, pequeños pasos que por separado parecen insignificantes pero juntos te roban horas sin que te des cuenta.
                </p>
<p className="text-sm text-slate-600 leading-relaxed italic mb-4">
                    Abrir el correo. Buscar el contacto. Redactar el mensaje. Crear el evento. Copiar el link. Buscar el archivo. Adjuntarlo. Enviarlo.
                </p>
<p className="text-sm text-slate-900 font-medium mb-6">
                    Eso no es trabajar. Eso es administrar el trabajo.
                </p>
<p className="text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-6">
                    En esta guía te mostramos las 5 tareas que más tiempo consumen en tu día a día — y cómo automatizarlas para recuperar hasta 5 horas a la semana.
                </p>
</div>
</header>

<section className="space-y-8 md:space-y-12">

<article className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
<iconify-icon className="text-2xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-400 mb-2 tracking-wide uppercase">📧 Tarea #1</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Gestión de correo</h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    El problema:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Revisar, responder y redactar emails puede consumir hasta 2 horas diarias. Entre buscar el hilo correcto, recordar qué decir y escribir desde cero, el correo se convierte en uno de los mayores ladrones de tiempo.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Cómo automatizarla:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Configura un asistente que revise, filtre y redacte por ti. Solo indícale qué necesitas y él se encarga — sin que abras el correo, sin buscar hilos, sin escribir desde cero.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-purple-700 font-medium">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm tracking-tight">⏱️ Tiempo recuperado: hasta 1.5 horas por semana</span>
</div>
</div>
</div>
</article>

<article className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-400 mb-2 tracking-wide uppercase">📅 Tarea #2</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Agenda y calendario</h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    El problema:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Coordinar reuniones, crear recordatorios y generar enlaces de videollamada implica abrir múltiples apps, crear el evento, copiar el link, enviarlo... Son varios pasos para algo que debería tomar 10 segundos.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Cómo automatizarla:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Delega la creación de eventos, recordatorios, tareas y enlaces de reunión a un asistente que los centralice todos en un solo lugar. Sin abrir apps adicionales, sin copiar y pegar links, sin perder el hilo de tu día.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-purple-700 font-medium">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm tracking-tight">⏱️ Tiempo recuperado: hasta 45 minutos por semana</span>
</div>
</div>
</div>
</article>

<article className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
<iconify-icon className="text-2xl" icon="solar:minimalistic-magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-400 mb-2 tracking-wide uppercase">🔍 Tarea #3</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Búsqueda y resumen de información</h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    El problema:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Buscar información, filtrar fuentes, sintetizar lo relevante y compartirlo puede tomarte una tarde entera. Y en el mundo de hoy, quien tarda en informarse pierde oportunidades.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Cómo automatizarla:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Delega la búsqueda a un asistente que investigue, filtre y te entregue un resumen claro y listo para compartir con quien necesites — en segundos, no en horas.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-purple-700 font-medium">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm tracking-tight">⏱️ Tiempo recuperado: hasta 1 hora por semana</span>
</div>
</div>
</div>
</article>

<article className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-400 mb-2 tracking-wide uppercase">📎 Tarea #4</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Análisis de archivos</h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    El problema:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Leer contratos, revisar facturas y extraer datos de documentos es lento, tedioso y propenso a errores. Nadie quiere hacerlo pero todos tienen que hacerlo.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Cómo automatizarla:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Carga el archivo y pídele a un asistente que lo analice por ti — que resuma, extraiga datos clave o identifique puntos importantes. Sin leer página por página, sin perder detalles críticos.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-purple-700 font-medium">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm tracking-tight">⏱️ Tiempo recuperado: hasta 45 minutos por semana</span>
</div>
</div>
</div>
</article>

<article className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
<div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-400 mb-2 tracking-wide uppercase">🗂️ Tarea #5</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Creación de documentos automáticos</h2>
<div className="grid md:grid-cols-2 gap-6 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    El problema:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Investigar un tema, crear un documento, guardarlo y enviarlo son 4 tareas en 4 apps distintas. Un flujo que debería tomar minutos termina consumiendo media mañana.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Cómo automatizarla:
                                </h3>
<p className="text-sm text-slate-600 leading-relaxed">Ejecuta todo el flujo con una sola instrucción: investiga, crea el documento, guárdalo donde necesitas y envíalo. Un solo paso para lo que antes eran cuatro.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-purple-700 font-medium">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm tracking-tight">⏱️ Tiempo recuperado: hasta 1 hora por semana</span>
</div>
</div>
</div>
</article>
</section>

<section className="mt-16 md:mt-24">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
<iconify-icon className="text-blue-600" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                ⏱️ En resumen: hasta 5 horas de tu semana de vuelta en tus manos
            </h2>
<div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="p-6 md:p-8">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Tarea</div>
<ul className="space-y-4">
<li className="text-sm text-slate-700 font-medium">Gestión de correo</li>
<li className="text-sm text-slate-700 font-medium">Agenda y calendario</li>
<li className="text-sm text-slate-700 font-medium">Búsqueda y resumen de información</li>
<li className="text-sm text-slate-700 font-medium">Análisis de archivos</li>
<li className="text-sm text-slate-700 font-medium">Creación de documentos automáticos</li>
</ul>
</div>
<div className="p-6 md:p-8 bg-white">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Tiempo recuperado</div>
<ul className="space-y-4">
<li className="text-sm text-slate-600">1.5 hrs/semana</li>
<li className="text-sm text-slate-600">45 min/semana</li>
<li className="text-sm text-slate-600">1 hr/semana</li>
<li className="text-sm text-slate-600">45 min/semana</li>
<li className="text-sm text-slate-600">1 hr/semana</li>
</ul>
</div>
</div>
<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:px-8 md:py-6 border-t border-slate-200 flex items-center justify-between">
<span className="text-base font-semibold text-slate-900 tracking-tight">TOTAL</span>
<span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">~5 horas/semana</span>
</div>
</div>
<p className="text-center text-base font-medium text-slate-600 mt-8 max-w-lg mx-auto leading-relaxed">
                Esas 5 horas son tuyas. Para crecer, para descansar, para lo que realmente importa.
            </p>
</section>

<section className="mt-16 md:mt-24 bg-slate-900 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-xl">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-blue-500/10 blur-3xl rounded-full transform rotate-12"></div>
<div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-purple-500/10 blur-3xl rounded-full transform -rotate-12"></div>
</div>
<div className="relative z-10 max-w-xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    ¿Listo para ejecutar todo esto con una sola instrucción?
                </h2>
<p className="text-base text-slate-300 leading-relaxed mb-4">
                    Todo lo que leíste en esta guía lo puedes hacer hoy mismo con Rembrr — el asistente virtual con IA que ejecuta por ti con una sola instrucción.
                </p>
<p className="text-base font-medium text-white mb-8">
                    Tú solo hablas. Rembrr hace el resto.
                </p>
<div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-10 text-left">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-300">
<iconify-icon className="text-xl" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">🎁 Tu primer mes es completamente gratis.</div>
<div className="text-xs text-slate-300">Sin tarjeta. Sin compromisos. Solo entra, habla y recupera tu tiempo.</div>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold text-sm rounded-full py-4 px-8 hover:bg-slate-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]" href="https://rembrr.com">
                        Activa tu mes gratis
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="text-sm text-slate-400 mt-2">
                        👉 en rembrr.com con el código 
                        <span className="inline-block bg-slate-800 border border-slate-700 text-white font-medium px-2 py-1 rounded text-xs ml-1 tracking-widest">XXXXXXX</span>
</p>
</div>
</div>
</section>
</main>

    </>
  );
}
