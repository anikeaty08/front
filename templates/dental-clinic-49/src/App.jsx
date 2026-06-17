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
      

<nav className="fixed top-0 z-50 w-full border-b backdrop-blur-md border-stone-100 bg-white/80">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform group-hover:scale-105 bg-stone-900 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-inline="false" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium tracking-tight text-stone-900">DRS. POVEDA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="transition-colors hover:text-stone-900" href="#filosofia">Filosofía</a>
<a className="transition-colors hover:text-stone-900" href="#ortodoncia">Ortodoncia</a>
<a className="transition-colors hover:text-stone-900" href="#implantes">Implantes</a>
<a className="transition-colors hover:text-stone-900" href="#equipo">El Equipo</a>
<a className="transition-colors hover:text-stone-900" href="#contacto">Clínicas</a>
</div>
<a className="hidden sm:flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all hover:shadow-lg bg-stone-900 text-white hover:bg-stone-800 hover:shadow-stone-200" href="#contacto">
<span>Pedir Cita</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<div className="mt-20 border-b border-stone-100 bg-stone-50">
<div className="mx-auto max-w-7xl px-6 py-3">
<div className="flex flex-col justify-center gap-4 text-xs font-medium text-stone-500 sm:flex-row sm:gap-12 md:text-sm">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="uppercase tracking-wide text-stone-900">Madrid</span>
<a className="hover:text-stone-900" href="tel:915492929">91 549 29 29</a>
</div>
<div className="hidden h-4 w-px sm:block bg-stone-200"></div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="uppercase tracking-wide text-stone-900">Ciudad Real</span>
<a className="hover:text-stone-900" href="tel:926217124">926 21 71 24</a>
</div>
<div className="hidden h-4 w-px sm:block bg-stone-200"></div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="uppercase tracking-wide text-stone-900">Valdepeñas</span>
<a className="hover:text-stone-900" href="tel:926033685">926 03 36 85</a>
</div>
</div>
</div>
</div>

<header className="overflow-hidden md:pt-32 md:pb-48 pt-20 pb-32 relative">
<div className="mx-auto max-w-5xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm mb-8 border-stone-200 bg-white text-stone-600">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
                Excelencia en Odontología
            </div>
<h1 className="text-5xl font-medium tracking-tight max-w-4xl mr-auto ml-auto sm:text-6xl md:text-5xl text-stone-900">Tecnología de vanguardia y <br className="hidden md:block"/> el equipo humano que mereces.</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-stone-500 leading-relaxed">
                Clínicas Dentales Drs. Poveda. Contamos con todas las especialidades de la odontología, tendiendo a la excelencia y resultados inmejorables en nuestros tratamientos en Madrid, Ciudad Real y Valdepeñas.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 bg-stone-900 text-white hover:bg-stone-800" href="#contacto">
                    Contactar ahora
                </a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border px-8 text-sm font-medium transition-colors border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:text-stone-900" href="#equipo">
                    Conoce al equipo
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-50 bg-stone-100"></div>
</header>

<section className="border-t py-24 border-stone-100 bg-stone-50" id="filosofia">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-stone-900">¿Por qué elegirnos?</h2>
<p className="mt-4 text-lg text-stone-500">Apostamos por la calidad y la excelencia, basándonos en la evidencia científica y el trato humano.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl p-8 shadow-sm ring-1 transition-shadow hover:shadow-md bg-white ring-stone-200">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg group-hover:bg-stone-900 group-hover:text-white transition-colors bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Filosofía de Vanguardia</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">
                        Estamos a la vanguardia en todos los tratamientos, de la mano de la evidencia científica y utilizando los medios más novedosos.
                    </p>
</div>

<div className="group rounded-2xl p-8 shadow-sm ring-1 transition-shadow hover:shadow-md bg-white ring-stone-200">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg group-hover:bg-stone-900 group-hover:text-white transition-colors bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Familia de Especialistas</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">
                        Somos una familia de doctores altamente especializados y actualizados en cada área, entendiendo la profesión como salud.
                    </p>
</div>

<div className="group rounded-2xl p-8 shadow-sm ring-1 transition-shadow hover:shadow-md bg-white ring-stone-200">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg group-hover:bg-stone-900 group-hover:text-white transition-colors bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Trato Humano</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">
                        El respeto, la amabilidad y la cercanía son clave. Nuestro equipo trabaja unido para dar una solución integral y personalizada.
                    </p>
</div>

<div className="group col-span-1 rounded-2xl p-8 shadow-sm ring-1 md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-8 bg-stone-900 ring-stone-900" id="tecnologia">
<div className="mb-6 lg:mb-0">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan-face" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white">Innovación Tecnológica</h3>
<p className="mt-2 text-sm leading-relaxed max-w-3xl text-stone-300">
                            Disponemos de materiales de máxima calidad y técnicas avanzadas: Radiología Digital 3D, Diseño Digital de Sonrisa, Estudio y planificación 3D, y Cirugía Guiada por ordenador para obtener excelentes resultados.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t py-24 border-stone-100 bg-white" id="ortodoncia">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2">

<div className="flex flex-col justify-center">
<div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-6 border-orange-100 bg-orange-50 text-orange-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                        Estética y Salud
                    </div>
<h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-stone-900">
                        Ortodoncia Invisible
                    </h2>
<p className="mt-4 text-lg font-medium text-stone-900">
                        ¿Qué es QuickSmile? ¿Qué es Invisalign?
                    </p>
<p className="mt-4 text-stone-500 leading-relaxed">
                        Son alineadores estéticos de plástico transparente confeccionados a la medida de cada paciente. El resultado es altamente predecible según lo planificado digitalmente.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 shrink-0 iconify--lucide text-blue-600" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-stone-600">Son <strong>removibles</strong>.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 shrink-0 iconify--lucide text-blue-600" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-stone-600">Se colocan durante <strong>todo el día</strong> salvo para comer.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-1 shrink-0 iconify--lucide text-blue-600" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-stone-600">Normalmente se cambian cada <strong>10-15 días</strong>.</span>
</li>
</ul>
<div className="mt-10 border-t pt-8 border-stone-100">
<p className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-400">Certificaciones Oficiales</p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 rounded-lg border px-4 py-2 border-stone-200 bg-stone-50">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-900" data-icon="lucide:award" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<span className="text-sm font-medium text-stone-900">Invisalign Provider</span>
</div>
<div className="flex items-center gap-2 rounded-lg border px-4 py-2 border-stone-200 bg-stone-50">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-900" data-icon="lucide:award" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<span className="text-sm font-medium text-stone-900">Certificación QuickSmile</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border p-8 lg:p-10 border-stone-100 bg-stone-50/50">
<h3 className="mb-8 text-xl font-medium tracking-tight text-stone-900">¿En qué es mejor la Ortodoncia transparente?</h3>
<div className="grid gap-8 sm:grid-cols-2">

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">Estética</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                El alineador es de plástico transparente, muy mimético y discreto.
                            </p>
</div>

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:unlock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">Removible</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                Retíralo para comer o en ocasiones puntuales (bodas, reuniones, deportes).
                            </p>
</div>

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smile" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">Comodidad</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                Fino espesor y textura pulida. Fuerzas suaves y progresivas.
                            </p>
</div>

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">Sensación de boca limpia</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                Mejor higiene y menos restos de comida que con brackets. Menos riesgo de descalcificaciones.
                            </p>
</div>

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">No modifica el habla</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                Gran seguridad al comunicarse llevándolo puesto.
                            </p>
</div>

<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm ring-1 bg-white text-stone-900 ring-stone-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-smartphone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-900">Planificación digital</h4>
<p className="mt-1 text-xs leading-relaxed text-stone-500">
                                Diagnóstico por ordenador para monitorizar el caso paso a paso y previsualizar el resultado final.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t py-24 border-stone-100 bg-stone-50" id="implantes">
<div className="mx-auto max-w-7xl px-6">

<div className="mb-16">
<div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-6 border-stone-200 bg-white text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Tratamientos
                </div>
<h2 className="max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl text-stone-900">
                    Implantes y Cirugía Oral
                </h2>
<p className="mt-6 max-w-2xl text-lg text-stone-500 leading-relaxed">
                    En Clínica Dental Drs. Poveda empleamos las técnicas quirúrgicas más novedosas, que abogan por una mayor precisión y un abordaje menos invasivo.
                </p>
</div>

<div className="grid gap-8 lg:grid-cols-3">

<div className="flex flex-col rounded-2xl border p-8 border-stone-200 bg-white">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Implantología Segura</h3>
<p className="mt-3 text-sm leading-relaxed text-stone-500">
                        Especialidad segura y predecible. Permite reponer la ausencia de piezas dentales mediante la colocación de implantes (tornillos de titanio) en el hueso y posteriormente la prótesis.
                    </p>
</div>

<div className="flex flex-col rounded-2xl border p-8 border-stone-200 bg-white">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crosshair" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Precisión Tridimensional</h3>
<p className="mt-3 text-sm leading-relaxed text-stone-500">
                        Aumentamos la precisión en el posicionamiento del implante para favorecer una correcta masticación y una estética perfecta del resultado final.
                    </p>
</div>

<div className="flex flex-col rounded-2xl border p-8 border-stone-200 bg-white">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-50 text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:feather" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900">Abordaje Menos Invasivo</h3>
<p className="mt-3 text-sm leading-relaxed text-stone-500">
                        Empleamos técnicas de aumento para desarrollar un mejor manejo de los tejidos durante la cirugía, reduciendo las molestias postoperatorias.
                    </p>
</div>
</div>

<div className="mt-12 grid gap-8 lg:grid-cols-2">
<div className="rounded-2xl border p-8 lg:p-10 border-stone-200 bg-white">
<h3 className="mb-8 text-xl font-medium tracking-tight text-stone-900">Preguntas Frecuentes</h3>
<div className="space-y-8">
<div>
<h4 className="flex items-center gap-2 text-sm font-medium text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:help-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
                                ¿Qué es un implante dental?
                            </h4>
<p className="mt-2 pl-6 text-sm leading-relaxed text-stone-500">
                                Es una raíz artificial de titanio puro que restituye de manera natural un diente perdido. Sobre dicho implante se diseña la prótesis para devolver la masticación y la estética.
                            </p>
</div>
<div>
<h4 className="flex items-center gap-2 text-sm font-medium text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                ¿Si hace años que perdí los dientes?
                            </h4>
<p className="mt-2 pl-6 text-sm leading-relaxed text-stone-500">
                                Al perder un diente se produce un cambio en el hueso y sobrecarga en los demás. Es fundamental realizar un estudio 3D para establecer un diagnóstico personalizado.
                            </p>
</div>
<div>
<h4 className="flex items-center gap-2 text-sm font-medium text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide text-slate-400" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                ¿Es dolorosa la colocación?
                            </h4>
<p className="mt-2 pl-6 text-sm leading-relaxed text-stone-500">
                                Se realiza con anestesia local. Normalmente es menos doloroso que una extracción dental simple y mucho menos que la extracción de una muela del juicio.
                            </p>
</div>
</div>
</div>
<div className="space-y-8">

<div className="rounded-2xl border p-8 lg:p-10 border-stone-200 bg-white">
<h3 className="mb-6 text-xl font-medium tracking-tight text-stone-900">Tipos de Prótesis</h3>
<p className="mb-6 text-sm text-stone-500">La elección depende del número de fijaciones y la cantidad de hueso perdido.</p>
<div className="space-y-6">
<div className="rounded-lg p-4 bg-stone-50">
<h4 className="text-sm font-medium text-stone-900">1. Prótesis Fijas</h4>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-2 text-xs text-stone-600">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></div>
<span> Indicadas cuando la reabsorción del hueso es leve.</span>
</li>
<li className="flex items-start gap-2 text-xs text-stone-600">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-400"></div>
<span> Indicadas con mucha reabsorción ósea. Reponen diente, encía, hueso y soporte labial.</span>
</li>
</ul>
</div>
<div className="rounded-lg p-4 bg-stone-50">
<h4 className="text-sm font-medium text-stone-900">2. Prótesis Removibles</h4>
<p className="mt-2 text-xs text-stone-600">
                                    Soluciones de quitar y poner, conocidas como .
                                </p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl p-8 shadow-lg bg-stone-900 text-white">
<div className="relative z-10 flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium">Planificación 3D y Cirugía Guiada</h3>
<p className="mt-2 text-sm leading-relaxed text-stone-300">
                                    Fundamental para el éxito. Disponemos de esta herramienta en nuestras clínicas para una cirugía guiada que asegura menor dolor postoperatorio.
                                </p>
</div>
</div>

<div className="absolute right-0 top-0 -mr-12 -mt-12 h-32 w-32 rounded-full bg-orange-500 blur-3xl opacity-20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t py-24 border-stone-100 bg-white" id="equipo">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
<div className="relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl object-cover shadow-2xl bg-stone-100 shadow-stone-200">
<img alt="Dr. Poveda Bellón" className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31052ace-a819-4a57-948b-c54f760e33f1_1600w.png" style={{}}/>
</div>
<div className="absolute -bottom-6 -right-6 rounded-xl border p-6 shadow-xl border-stone-100 bg-white">
<p className="text-sm font-medium text-stone-900">Manuel Poveda Bellón</p>
<p className="text-xs text-stone-500">Director Médico</p>
</div>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-stone-900">
                        Más de 30 años creando sonrisas.
                    </h2>
<div className="mt-6 space-y-6 text-base leading-relaxed text-stone-500">
<p>
                            El <strong className="font-medium text-stone-900">Dr. Poveda Bellón</strong> es el director de las dos clínicas dentales Drs. Poveda. Licenciado en Medicina y Cirugía y especialista en Estomatología por la UCM, cuenta con más de 30 años de experiencia, especializado en el campo de la Rehabilitación Oral, Estética dental e Implantología.
                        </p>
<p>
                            A lo largo de su carrera profesional, se ha ido formando en todas las especialidades de la odontología, inculcando esa perseverancia, dedicación y vocación a sus dos hijos, que han seguido su estela y que actualmente forman parte de su equipo médico.
                        </p>
<div className="border-l-2 pl-6 pt-2 pb-2 border-stone-900">
<p className="italic text-stone-700">
                                "Somos una familia de doctores que cuenta con la fusión de ambas generaciones: la amplia experiencia clínica y el impulso de las nuevas generaciones altamente cualificadas."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pb-12 pt-24 border-stone-100 bg-stone-50" id="contacto">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Nuestras Clínicas</h2>
<p className="mt-4 text-stone-500">Encuentra tu centro Drs. Poveda más cercano.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg border-stone-200 bg-white hover:border-stone-300">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Madrid</h3>
<span className="rounded-full px-2.5 py-1 text-xs font-medium bg-stone-50 text-stone-600">Capital</span>
</div>
<div className="flex-1 space-y-6">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-0.5 shrink-0 iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<p className="text-sm text-stone-600">c/Marqués de Urquijo 30<br/>28008 Madrid</p>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="text-sm font-medium hover:underline text-stone-900" href="tel:915492929">91 54 929 29</a>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="text-xs text-stone-500 break-all hover:text-stone-900" href="mailto:clinicadrpoveda@clinicadrpoveda.com">clinicadrpoveda@clinicadrpoveda.com</a>
</div>
</div>
<div className="mt-8">
<a className="flex w-full items-center justify-center rounded-lg border py-2.5 text-sm font-medium transition-colors border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-stone-900" href="tel:915492929">
                            Llamar ahora
                        </a>
</div>
</div>

<div className="flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg border-stone-200 bg-white hover:border-stone-300">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Ciudad Real</h3>
</div>
<div className="flex-1 space-y-6">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-0.5 shrink-0 iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<p className="text-sm text-stone-600">c/Alarcos 11, 1ºA<br/>13001 Ciudad Real</p>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="text-sm font-medium hover:underline text-stone-900" href="tel:926217124">926 21 71 24</a>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="text-xs text-stone-500 break-all hover:text-stone-900" href="mailto:info@clinicadrpoveda.com">info@clinicadrpoveda.com</a>
</div>
</div>
<div className="mt-8">
<a className="flex w-full items-center justify-center rounded-lg border py-2.5 text-sm font-medium transition-colors border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-stone-900" href="tel:926217124">
                            Llamar ahora
                        </a>
</div>
</div>

<div className="flex flex-col rounded-2xl border p-8 transition-all hover:shadow-lg border-stone-200 bg-white hover:border-stone-300">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Valdepeñas</h3>
</div>
<div className="flex-1 space-y-6">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-0.5 shrink-0 iconify--lucide text-slate-400" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<p className="text-sm text-stone-600">c/Seis de Junio 76<br/>13300 Ciudad Real</p>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="text-sm font-medium hover:underline text-stone-900" href="tel:926033685">926 03 36 85</a>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide text-slate-400" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="text-xs text-stone-500 break-all hover:text-stone-900" href="mailto:clinicadentaldrspoveda@gmail.com">clinicadentaldrspoveda@gmail.com</a>
</div>
</div>
<div className="mt-8">
<a className="flex w-full items-center justify-center rounded-lg border py-2.5 text-sm font-medium transition-colors border-stone-200 text-stone-700 hover:bg-stone-50 hover:text-stone-900" href="tel:926033685">
                            Llamar ahora
                        </a>
</div>
</div>
</div>
<div className="mt-24 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-stone-200">
<p className="text-xs text-stone-400">© 2024 Clínicas Dentales Drs. Poveda. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Aviso Legal</a>
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Política de Privacidad</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
