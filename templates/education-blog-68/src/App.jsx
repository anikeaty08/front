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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">EconoBlog</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-900 transition-colors hover:text-blue-600" href="#">Inicio</a>
<a className="text-slate-500 transition-colors hover:text-slate-900" href="#">Artículos</a>
<a className="text-slate-500 transition-colors hover:text-slate-900" href="#">Guía Programática</a>
<a className="text-slate-500 transition-colors hover:text-slate-900" href="#">Acerca de</a>
</div>
<button className="md:hidden text-slate-500 hover:text-slate-900">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="pt-32 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<article className="max-w-3xl mx-auto">

<header className="mb-14 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-wider border border-blue-100/50">
                        Lineamientos Oficiales
                    </span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Elaboración de Blog para la II Evaluación Parcial
                </h1>
<p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Fundamentos Teóricos de las Ciencias Económicas. Conoce los detalles para la nueva modalidad de evaluación colaborativa.
                </p>
<div className="flex items-center justify-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
<span>CUNZAC - USAC</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
<span>Entrega: 21 Mar 2026</span>
</div>
</div>
</header>

<hr className="border-slate-200 mb-14"/>

<div className="text-lg leading-relaxed space-y-10">
<p>
                    Tomando en consideración la planificación académica para este semestre, y en aras de fomentar un aprendizaje más dinámico y participativo, el tradicional examen parcial de nuestra asignatura cambiará de modalidad. A continuación, se detallan las instrucciones para la elaboración del proyecto grupal.
                </p>

<div className="grid md:grid-cols-2 gap-4 my-10">
<div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
<i className="text-indigo-600 w-5 h-5" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-2">Objetivo del Proyecto</h3>
<p className="text-base text-slate-500">
                            Investigar, analizar y difundir contenidos relacionados con las Unidades I y II, fomentando el trabajo colaborativo, el pensamiento crítico y el uso de herramientas digitales.
                        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
<i className="text-emerald-600 w-5 h-5" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-2">Ponderación</h3>
<p className="text-base text-slate-500">
                            El valor de la actividad es de <span className="font-medium text-slate-900">15 puntos netos</span>. La nota será grupal, evaluando calidad, creatividad y cumplimiento del contenido programático.
                        </p>
</div>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-14 mb-6">
                    Instrucciones y Requisitos
                </h2>
<ul className="space-y-5">
<li className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<strong className="font-medium text-slate-900 block mb-1">Trabajo Colaborativo</strong>
<span>La nota es grupal y requiere la participación activa de todos. Se debe informar el nombre de los estudiantes que <span className="font-medium text-rose-500">NO PARTICIPARON</span> en la realización del blog.</span>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<strong className="font-medium text-slate-900 block mb-1">Estructura del Contenido</strong>
<span>Debe incluir una carátula con los nombres ordenados alfabéticamente por apellidos y el enlace respectivo (link y código QR) para su revisión.</span>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="upload-cloud" strokeWidth="1.5"></i>
</div>
<div>
<strong className="font-medium text-slate-900 block mb-1">Método de Entrega</strong>
<span>El trabajo concluido se debe cargar al espacio habilitado en el Aula Virtual. Se hará una única carga por el coordinador del grupo.</span>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-slate-600" data-lucide="youtube" strokeWidth="1.5"></i>
</div>
<div>
<strong className="font-medium text-slate-900 block mb-1">Recursos de Apoyo</strong>
<span>Si es su primera vez elaborando un blog, se recomienda buscar tutoriales en YouTube sobre el uso de plataformas como Blogger, WordPress o similares.</span>
</div>
</li>
</ul>

<div className="my-14 py-8 px-10 bg-slate-50 border-l-2 border-blue-500 rounded-r-2xl">
<div className="flex items-center justify-center h-full">
<p className="text-2xl font-medium italic text-slate-700 font-serif tracking-tight text-center">
                            "Id y Enseñad a Todos"
                        </p>
</div>
</div>
</div>
</article>
</main>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-400">
<div className="flex justify-center items-center gap-4 mb-4">
<i className="w-5 h-5" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<p>Universidad de San Carlos de Guatemala</p>
<p className="mt-1">Centro Universitario de Zacapa CUNZAC</p>
</div>
</footer>


    </>
  );
}
