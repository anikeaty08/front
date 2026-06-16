import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Smooth Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed transition-all duration-300 bg-white/80 w-full z-50 border-slate-200/50 border-b top-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex shadow-slate-900/20 text-white bg-slate-900 w-9 h-9 rounded-lg shadow-lg items-center justify-center">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge-dollar-sign" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<span className="font-heading font-bold text-slate-900 tracking-tight text-lg">Fin-Admin</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-slate-900 transition-colors" href="#proceso">Metodología</a>
<a className="hover:text-slate-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#equipo">Equipo</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#contacto">
                Contactar
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden subtle-grid pt-32 pb-20 relative">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-10"></div>
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="reveal active z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Gestión de Proyectos &amp; Auditoría
                </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-bold text-slate-900 tracking-tight font-heading mb-8">
                    Rigor Financiero en <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Contextos Complejos.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                    Optimizamos la ejecución presupuestaria y el cumplimiento normativo para agencias de cooperación y ONGs. Especialistas en Amazonía y territorios de alta sensibilidad.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 flex items-center gap-2" href="#contacto">
                        Solicitar Diagnóstico
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="px-8 py-4 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all" href="#servicios">
                        Explorar Servicios
                    </a>
</div>
<div className="mt-10 pt-8 border-t border-slate-200 flex items-center gap-6">
<p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Cumplimiento Estándares:</p>
<div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="text-slate-800 font-bold text-sm">UE (Unión Europea)</span>
<span className="text-slate-300">|</span>
<span className="text-slate-800 font-bold text-sm">GIZ</span>
<span className="text-slate-300">|</span>
<span className="text-slate-800 font-bold text-sm">USAID</span>
</div>
</div>
</div>

<div className="relative w-full h-auto lg:h-[600px] reveal active transition-delay-200 mt-12 lg:mt-0 block">
<div className="grid grid-cols-2 gap-3 lg:gap-4 h-full">

<div className="flex flex-col gap-3 lg:gap-4 lg:mt-12 mt-6">
<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-white h-40 md:h-64">

<img alt="Reunión" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4413bdd4-21d8-4184-b2f2-62ac91d4b23b_800w.png"/>
</div>
<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-white h-32 md:h-48 bg-slate-100">

<img alt="Finanzas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bce3c2da-b410-4fa7-b6ad-15c63d1b073d_320w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-3 lg:gap-4">
<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-white h-36 md:h-52 bg-slate-100">

<div className="absolute inset-0 bg-indigo-50 flex items-center justify-center">
<svg className="text-indigo-200 w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<img alt="Auditoría" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc5a567d-3482-4e62-95bd-161a22775b52_800w.png"/>
<div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">Auditado</div>
</div>
<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-white h-48 md:h-72">

<img alt="Territorio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3b60f02-694c-4f71-b7f4-8961d20f3398_800w.png"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
<p className="text-white text-xs font-medium">Gestión en Territorio</p>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px] z-20 animate-[bounce_5s_infinite]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold text-slate-500">Cumplido </span>
<span className="text-green-500 text-xs font-bold">100%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
<div className="bg-green-500 h-1.5 rounded-full w-full"></div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-slate-900 py-16 text-white border-y border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
<div className="px-6 text-center reveal">
<p className="text-3xl font-heading font-bold text-white mb-1 tracking-tight">+15 Años</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Experiencia Combinada</p>
</div>
<div className="px-6 text-center reveal transition-delay-100">
<p className="text-3xl font-heading font-bold text-white mb-1 tracking-tight">0 Glosas</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Historial Limpio</p>
</div>
<div className="px-6 text-center reveal transition-delay-200">
<p className="text-3xl font-heading font-bold text-white mb-1 tracking-tight">$5M+</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Fondos Gestionados</p>
</div>
<div className="px-6 text-center reveal transition-delay-300">
<p className="text-3xl font-heading font-bold text-emerald-400 mb-1 tracking-tight">100%</p>
<p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Trazabilidad</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl reveal">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 tracking-tight">Soluciones Integrales</h2>
<p className="text-lg text-slate-500">
                    Cubrimos el ciclo completo de vida del proyecto, desde el diseño presupuestario inicial hasta el cierre y auditoría final.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 18a3 3 0 1 0-6 0"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Gestión Financiera</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Planificación presupuestaria
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Control de flujo de caja (Cashflow)
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Reportes financieros a donantes
                        </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal transition-delay-100">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Auditoría &amp; Compliance</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Preparación para auditorías externas
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Revisión de elegibilidad de gastos
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Debida diligencia de proveedores
                        </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal transition-delay-200">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Fortalecimiento Local</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Capacitación a equipos locales
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Diseño de manuales operativos
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Implementación de sistemas contables
                        </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Compras y Adquisiciones</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Gestión de procesos de licitación complejos bajo normativa internacional. Aseguramiento de competencia y transparencia.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal transition-delay-100">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Análisis de Datos</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Dashboards de control en tiempo real. Análisis de desviación presupuestaria y correcciones tempranas.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 reveal transition-delay-200">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cierre de Proyectos</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Liquidación ordenada de activos, archivo documental final y elaboración de informes de cierre administrativo.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="proceso">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Metodología de Trabajo</h2>
<p className="text-lg text-slate-500">Un enfoque preventivo que anticipa los riesgos antes de que ocurran.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm reveal">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 z-0">01</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Diagnóstico</h3>
<p className="text-sm text-slate-500">Evaluación de capacidades instaladas y brechas normativas.</p>
</div>
</div>

<div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm reveal transition-delay-100">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 z-0">02</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Diseño</h3>
<p className="text-sm text-slate-500">Creación de manuales, formatos y flujos de aprobación a medida.</p>
</div>
</div>

<div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm reveal transition-delay-200">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 z-0">03</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Ejecución</h3>
<p className="text-sm text-slate-500">Acompañamiento diario, control previo y registro contable.</p>
</div>
</div>

<div className="relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm reveal transition-delay-300">
<div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 z-0">04</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mb-4">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Verificación</h3>
<p className="text-sm text-slate-500">Auditoría interna continua y preparación de cierre.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 tracking-tight">Áreas de Especialización</h2>
<p className="text-lg text-slate-500">
                    Nuestra experiencia se centra en los puntos críticos donde suelen fallar los proyectos de cooperación.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:h-[600px] h-auto">

<div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between reveal">
<div className="absolute inset-0 opacity-20">
<svg className="h-full w-full text-slate-700" height="100" viewbox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0"><circle cx="2" cy="2" fill="currentColor" r="1"></circle></pattern></defs><rect fill="url(#dots)" height="100%" width="100%"></rect></svg>
</div>

<div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 grid grid-cols-2 gap-2 p-2 opacity-20 md:opacity-40 group-hover:opacity-30 md:group-hover:opacity-60 transition-opacity pointer-events-none">
<div className="col-span-2 h-1/2 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
<img alt="Docs" className="w-full h-full object-cover mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/2 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 mt-auto">
<img alt="Tech" className="w-full h-full object-cover mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/2 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 transform translate-y-8">
<img alt="Typing" className="w-full h-full object-cover mix-blend-overlay grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-6 border border-white/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Justificación Financiera Robusta</h3>
<p className="text-slate-300 leading-relaxed mb-6">
                            Implementación de sistemas de trazabilidad que vinculan cada dólar gastado con su actividad programática y soporte documental. Reducimos el riesgo de gastos no elegibles a cero.
                        </p>
<ul className="space-y-2 text-slate-400 text-sm">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Digitalización de archivos
                            </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Preparación para Pillar Assessment
                            </li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-indigo-50 border border-indigo-100 p-8 transition-all hover:bg-indigo-100/80 reveal transition-delay-100">
<div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center text-indigo-700 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Gobernanza</h3>
<p className="text-sm text-slate-600">
                        Fortalecimiento de estructuras organizacionales locales para soportar la carga administrativa de nuevos fondos internacionales.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 transition-all hover:shadow-lg reveal transition-delay-200">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Logística Amazónica</h3>
<p className="text-sm text-slate-600">
                        Experiencia operativa en Sucumbíos, Orellana y Pastaza. Gestión compleja de transporte fluvial y aéreo.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="equipo">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Liderazgo Senior</h2>
<p className="text-lg text-slate-500">Un equipo compacto con capacidad de despliegue inmediato.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 reveal">
<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="shrink-0 relative">
<div className="absolute inset-0 bg-indigo-600 rounded-xl rotate-6 opacity-10 group-hover:rotate-12 transition-transform"></div>
<img alt="Santiago Santillán" className="w-28 h-28 rounded-xl object-cover shadow-lg relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/214d09de-6860-4935-8912-257aa197e709_320w.jpg"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-bold text-slate-900">Santiago Santillán</h3>
<p className="text-indigo-600 font-medium text-sm">Consultor Principal &amp; Financiero</p>
</div>
<a className="text-slate-400 hover:text-indigo-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-indigo-50" href="https://www.linkedin.com/in/santiago-santillan-caicedo-04865558/" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Especialista en control financiero riguroso, tesorería y cumplimiento normativo (Compliance). Amplia experiencia manejando fondos de la Unión Europea y GIZ con cero observaciones críticas en auditorías finales.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] uppercase font-bold rounded-full border border-slate-200">Finanzas</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] uppercase font-bold rounded-full border border-slate-200">Auditoría</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 reveal transition-delay-100">
<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="shrink-0 relative">
<div className="absolute inset-0 bg-emerald-600 rounded-xl rotate-6 opacity-10 group-hover:rotate-12 transition-transform"></div>
<img alt="Juan Diego Villacís" className="w-28 h-28 rounded-xl object-cover shadow-lg relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22ed6655-206f-45e8-836d-7185db6fe0d5_320w.png"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-bold text-slate-900">Juan Diego Villacís</h3>
<p className="text-emerald-600 font-medium text-sm">Especialista Senior &amp; Gobernanza</p>
</div>
<a className="text-slate-400 hover:text-emerald-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-emerald-50" href="https://www.linkedin.com/in/jdv42/" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Experto en el territorio Amazónico en fortalecimiento institucional y relacionamiento comunitario. Puente entre la estrategia técnica y la realidad operativa en territorio. Gestión de conflictos, salvaguardas ambientales y logística compleja.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] uppercase font-bold rounded-full border border-slate-200">Amazonía</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] uppercase font-bold rounded-full border border-slate-200">Gobernanza</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-950 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<svg className="w-12 h-12 text-indigo-400 mx-auto mb-6 opacity-50" fill="currentColor" viewbox="0 0 32 32"><path d="M10 8v8h6c0 3.314-2.686 6-6 6v4c5.523 0 10-4.477 10-10V8h-10zm12 0v8h6c0 3.314-2.686 6-6 6v4c5.523 0 10-4.477 10-10V8h-10z"></path></svg>
<h2 className="text-3xl md:text-5xl font-heading font-medium text-white leading-tight mb-8">
                "La gestión financiera no debe ser un obstáculo para el impacto social, sino la base sólida que lo hace sostenible en el tiempo."
            </h2>
<div className="text-indigo-200 text-sm font-semibold tracking-widest uppercase">
                — Filosofía Fin-Admin
            </div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="contacto">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight relative z-20">¿Listo para blindar sus operaciones?</h2>
<p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto relative z-20">
                    Agende una consulta inicial para discutir cómo optimizar la gestión administrativa de sus próximos proyectos.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-30">
<a className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer" href="mailto:delftjd@gmail.com" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.99 5.72c-.53.33-1.49.33-2.02 0L2 7"></path></svg>
                        Contactar a Juan Diego
                    </a>
<a className="px-8 py-4 bg-white/10 text-white backdrop-blur border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer" href="mailto:santi.santillan@hotmail.com" target="_blank">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.99 5.72c-.53.33-1.49.33-2.02 0L2 7"></path></svg>
                        Contactar a Santiago
                    </a>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 relative z-20">
<div className="flex items-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        Disponibilidad Inmediata
                    </div>
<div className="">
                        Ubicación: Ecuador (Cobertura Nacional)
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge-dollar-sign" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<span className="text-sm font-semibold text-slate-900">Fin-Admin</span>
</div>
<p className="text-xs text-slate-500">© 2024. Todos los derechos reservados.</p>
</div>
</footer>


    </>
  );
}
