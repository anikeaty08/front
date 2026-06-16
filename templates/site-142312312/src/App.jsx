import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Init icons with stroke-width 1.5
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 focus-visible:rounded-md" href="#">
<div aria-hidden="true" className="w-8 h-8 rounded-md bg-[#5D6C86] text-white flex items-center justify-center text-sm font-semibold tracking-tight">AG</div>
<span className="sr-only">Inicio</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#como-funciona">Cómo funciona</a>
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#funciones">Funciones</a>
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#integraciones">Integraciones</a>
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#casos">Casos de uso</a>
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#seguridad">Seguridad</a>
<a className="text-[#0B0F13]/80 hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2 rounded" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#5D6C86] text-white text-sm font-semibold hover:bg-[#505E78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2" href="#demo">
          Solicitar demo
        </a>
<a className="md:hidden inline-flex items-center justify-center px-3 py-2 rounded-md border border-gray-200 hover:border-[#5D6C86] text-[#0B0F13] hover:text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86]" href="#nav">
<i aria-hidden="true" className="w-5 h-5" data-lucide="menu"></i><span className="sr-only">Abrir navegación</span>
</a>
</div>
</div>
</header>

<section className="relative" id="hero">
<div className="absolute inset-x-0 top-0 h-64 bg-[#5D6C86]/10 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B0F13]">
            Agente de IA que mejora la eficiencia de tu negocio
          </h1>
<p className="mt-4 text-lg text-[#0B0F13]/80">
            Cualquier persona puede configurar su agente que le ayude a ser más eficiente y dedicar tiempo a lo que realmente importa
          </p>
<div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#5D6C86] text-white text-sm font-semibold hover:bg-[#505E78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2" href="#demo">
              Solicitar demo
            </a>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-[#5D6C86] text-[#5D6C86] text-sm font-semibold hover:bg-[#5D6C86]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2" href="#como-funciona">
              Ver cómo funciona
            </a>
</div>
<p className="mt-3 text-sm text-[#0B0F13]/60">Sin instalación compleja. OAuth con tus herramientas.</p>
<div className="mt-6 flex items-center gap-4 text-sm text-[#0B0F13]/70">
<div className="inline-flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="shield-check"></i>
              RGPD y mínimos privilegios
            </div>
<div className="hidden sm:inline-flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="plug"></i>
              Integraciones reales
            </div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl bg-[#5D6C86] text-white p-6 sm:p-8 shadow-md ring-1 ring-black/5 overflow-hidden">
<div aria-hidden="true" className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
<div className="absolute bottom-4 right-4">
<span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">Memoria primero</span>
</div>

<div className="relative h-64">

<div aria-hidden="true" className="absolute left-16 top-16 w-28 h-px bg-white/30 rotate-12"></div>
<div aria-hidden="true" className="absolute left-24 top-28 w-36 h-px bg-white/30 -rotate-6"></div>
<div aria-hidden="true" className="absolute left-40 top-10 h-40 w-px bg-white/25"></div>

<div className="absolute left-8 top-8 w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur flex items-center justify-center">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="inbox"></i>
<span className="sr-only">Correo</span>
</div>
<div className="absolute left-40 top-6 w-10 h-10 rounded-full border border-white/30 bg-white/5 backdrop-blur flex items-center justify-center">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="calendar"></i>
<span className="sr-only">Calendario</span>
</div>
<div className="absolute left-24 top-36 w-14 h-14 rounded-full border border-white/30 bg-white/5 backdrop-blur flex items-center justify-center">
<i aria-hidden="true" className="w-6 h-6 text-white" data-lucide="message-square"></i>
<span className="sr-only">Mensajería</span>
</div>
<div className="absolute left-56 top-28 w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur flex items-center justify-center">
<i aria-hidden="true" className="w-5 h-5 text-white" data-lucide="contact"></i>
<span className="sr-only">CRM</span>
</div>
<div aria-hidden="true" className="absolute left-20 top-4 w-2 h-2 rounded-full bg-white/70"></div>
<div aria-hidden="true" className="absolute left-56 top-48 w-2 h-2 rounded-full bg-white/70"></div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%]">
<div className="rounded-2xl bg-white text-[#0B0F13] shadow-lg ring-1 ring-black/5 overflow-hidden">
<div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-2 h-2 rounded-full bg-[#5D6C86]"></div>
<p className="text-sm font-medium">Propuesta de respuesta</p>
</div>
<span className="text-xs text-[#0B0F13]/60">Revisión humana</span>
</div>
<div className="p-4 grid sm:grid-cols-3 gap-4">
<div className="sm:col-span-2">
<p className="text-sm text-[#0B0F13]/80">Asunto: Seguimiento pedido #4832</p>
<p className="mt-2 text-sm text-[#0B0F13]/70">Borrador listo según tu estilo. Incluye las condiciones acordadas y recuerda el último contacto.</p>
</div>
<div className="flex sm:justify-end items-end gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-gray-200 hover:border-[#5D6C86] text-sm text-[#0B0F13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86]">
<i aria-hidden="true" className="w-4 h-4" data-lucide="x"></i> Rechazar
                      </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#5D6C86] text-white text-sm hover:bg-[#505E78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86]">
<i aria-hidden="true" className="w-4 h-4" data-lucide="check"></i> Aprobar
                      </button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="social-proof" className="py-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-sm text-[#0B0F13]/60" id="social-proof">Confiado por equipos en…</h2>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo A</div>
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo B</div>
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo C</div>
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo D</div>
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo E</div>
<div className="h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[#0B0F13]/70 text-sm">Logo F</div>
</div>
</div>
</section>

<section aria-labelledby="como-title" className="py-16 sm:py-20" id="como-funciona">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="como-title">Cómo funciona</h2>
<p className="mt-2 text-[#0B0F13]/70">En 3 pasos, con control humano desde el inicio.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white bg-[#5D6C86] px-2 py-0.5 rounded">Paso 1</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="plug"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Conecta tus herramientas</h3>
<p className="mt-2 text-[#0B0F13]/70">Accede con OAuth y elige qué datos puede usar el agente (Gmail/Outlook, WhatsApp Business, CRM, ERP, Drive…).</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white bg-[#5D6C86] px-2 py-0.5 rounded">Paso 2</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="sliders-horizontal"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Configura objetivos y reglas</h3>
<p className="mt-2 text-[#0B0F13]/70">Define qué tareas quieres automatizar y cómo debe actuar (aprobaciones, límites, estilo de respuesta).</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-white bg-[#5D6C86] px-2 py-0.5 rounded">Paso 3</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="graduation-cap"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Revisa, aprueba y aprende</h3>
<p className="mt-2 text-[#0B0F13]/70">Recibe propuestas, apruébalas y el agente mejora con el tiempo gracias a su memoria.</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="funciones-title" className="py-16 sm:py-20 border-t border-gray-200" id="funciones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="funciones-title">Funciones clave</h2>
<p className="mt-2 text-[#0B0F13]/70">Automatización práctica con memoria y control.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="brain"></i>
<h3 className="text-base font-semibold tracking-tight">Memoria primero (ACE/graph)</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">El agente recuerda contexto útil (hechos, preferencias, relaciones) y lo usa para actuar mejor.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="mails"></i>
<h3 className="text-base font-semibold tracking-tight">Automatización de correo y mensajería</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Sugerencia de respuestas, borradores, seguimiento y clasificación con aprobación humana.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="boxes"></i>
<h3 className="text-base font-semibold tracking-tight">Integraciones reales</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Email, WhatsApp Business, CRM/ERP, Drive/Docs, calendario… con permisos granulares.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="book-open-check"></i>
<h3 className="text-base font-semibold tracking-tight">Cookbooks dinámicos</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Guías de acción y herramientas que el agente descubre/activa según la tarea.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="workflow"></i>
<h3 className="text-base font-semibold tracking-tight">Planificación profunda</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">El agente planifica pasos, verifica resultados y reintenta cuando es necesario.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="shield"></i>
<h3 className="text-base font-semibold tracking-tight">Seguridad y RGPD</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Datos en la UE, OAuth, mínimos privilegios, auditoría de acciones y logs.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="alarm-clock"></i>
<h3 className="text-base font-semibold tracking-tight">Tareas programadas</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Ejecuta rutinas por horario o evento (cuando llegue un correo, cambie un deal, etc.).</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="users"></i>
<h3 className="text-base font-semibold tracking-tight">Equipo y escalabilidad</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Trabaja con varios miembros, asigna responsables y mantén control humano.</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="integraciones-title" className="py-16 sm:py-20" id="integraciones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="integraciones-title">Integraciones</h2>
<p className="mt-2 text-[#0B0F13]/70">Añadimos integraciones continuamente. Pide la tuya.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-[#5D6C86] hover:text-[#505E78] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] rounded px-2 py-1" href="#demo">
<i aria-hidden="true" className="w-4 h-4" data-lucide="plus"></i> Solicitar demo
        </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="mail"></i><span className="text-sm">Gmail</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="mail"></i><span className="text-sm">Outlook</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="message-circle"></i><span className="text-sm">WhatsApp Business</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="slack"></i><span className="text-sm">Slack</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="contact"></i><span className="text-sm">HubSpot</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="contact"></i><span className="text-sm">Pipedrive</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="building-2"></i><span className="text-sm">Salesforce</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="file-text"></i><span className="text-sm">Notion</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="file"></i><span className="text-sm">Google Drive</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="calendar"></i><span className="text-sm">Calendario</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="server"></i><span className="text-sm">ERP</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 bg-white hover:border-[#5D6C86] transition-colors">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86]" data-lucide="folder"></i><span className="text-sm">Docs</span>
</div>
</div>
</div>
</section>

<section aria-labelledby="casos-title" className="py-16 sm:py-20 border-t border-gray-200" id="casos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="casos-title">Casos de uso en pymes</h2>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="handshake"></i>
<h3 className="text-base font-semibold tracking-tight">Ventas (pre-oportunidad)</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Clasifica leads, prepara respuestas y recuerda el contexto del cliente.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="headset"></i>
<h3 className="text-base font-semibold tracking-tight">Atención al cliente</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Respuestas consistentes, triage y escalado con tono adecuado.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="truck"></i>
<h3 className="text-base font-semibold tracking-tight">Compras/Proveedores</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Seguimiento de pedidos, recordatorios y conciliación de información.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="clipboard-list"></i>
<h3 className="text-base font-semibold tracking-tight">Operaciones internas</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Onboarding, documentación viva y tareas repetitivas automatizadas.</p>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="presentation"></i>
<h3 className="text-base font-semibold tracking-tight">Dirección/gerencia</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/80">Resúmenes ejecutivos, alertas relevantes y foco en lo importante.</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="demo-title" className="py-16 sm:py-20" id="demo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="demo-title">Mira cómo trabaja el agente</h2>
<div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
<div className="aspect-video relative">
<img alt="Vista previa del panel del agente con propuestas y aprobaciones" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button aria-label="Reproducir video de demostración" className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-[#0B0F13] flex items-center justify-center shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86]">
<i aria-hidden="true" className="w-6 h-6" data-lucide="play"></i>
</button>
</div>
<div className="p-4">
<p className="text-sm text-[#0B0F13]/80 font-medium">En 2 minutos verás:</p>
<ul className="mt-2 space-y-2 text-sm text-[#0B0F13]/80">
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="check-circle-2"></i>
                  Conectar herramientas
                </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="check-circle-2"></i>
                  Configurar reglas
                </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="check-circle-2"></i>
                  Aprobar una respuesta
                </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="check-circle-2"></i>
                  Registrar el aprendizaje
                </li>
</ul>
<div className="mt-4">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#5D6C86] text-white text-sm font-semibold hover:bg-[#505E78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] focus-visible:ring-offset-2" href="#demo-form">
                  Solicitar demo
                </a>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6" id="demo-form">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="sparkles"></i>
<h3 className="text-lg font-semibold tracking-tight">Solicitar demo</h3>
</div>
<p className="mt-2 text-sm text-[#0B0F13]/70">Cuéntanos quién eres y te contactamos en menos de 24h laborables.</p>
<form action="#" aria-describedby="spam-note" className="mt-6 space-y-4" method="post">

<div style={{position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
<label htmlFor="website">No rellenar si eres humano</label>
<input autocomplete="off" id="website" name="website" tabindex="-1" type="text"/>
</div>
<div>
<label className="block text-sm font-medium" htmlFor="nombre">Nombre</label>
<input className="mt-1 w-full rounded-md border border-gray-300 focus:border-[#5D6C86] focus:ring-2 focus:ring-[#5D6C86] px-3 py-2 text-sm" id="nombre" name="nombre" placeholder="Tu nombre y apellidos" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium" htmlFor="email">Email profesional</label>
<input className="mt-1 w-full rounded-md border border-gray-300 focus:border-[#5D6C86] focus:ring-2 focus:ring-[#5D6C86] px-3 py-2 text-sm" id="email" inputmode="email" name="email" placeholder="nombre@empresa.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium" htmlFor="empresa">Empresa</label>
<input className="mt-1 w-full rounded-md border border-gray-300 focus:border-[#5D6C86] focus:ring-2 focus:ring-[#5D6C86] px-3 py-2 text-sm" id="empresa" name="empresa" placeholder="Nombre de la empresa" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium" htmlFor="comentario">Comentario (opcional)</label>
<textarea className="mt-1 w-full rounded-md border border-gray-300 focus:border-[#5D6C86] focus:ring-2 focus:ring-[#5D6C86] px-3 py-2 text-sm" id="comentario" name="comentario" placeholder="Contexto de tu caso o herramientas actuales" rows="4"></textarea>
</div>
<p className="text-xs text-[#0B0F13]/60" id="spam-note">Protección anti‑spam sin captcha visible.</p>
<div className="pt-2 flex items-center gap-3">
<button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#5D6C86] text-white text-sm font-semibold hover:bg-[#505E78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86]" type="submit">
                Enviar solicitud
              </button>
<a className="text-sm text-[#5D6C86] hover:text-[#505E78] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D6C86] rounded px-2 py-1" href="#seguridad">Ver seguridad</a>
</div>
</form>
</div>
</div>
</div>
</section>

<section aria-labelledby="seguridad-title" className="py-16 sm:py-20 border-t border-gray-200" id="seguridad">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="seguridad-title">Seguridad &amp; Cumplimiento</h2>
<p className="mt-3 text-[#0B0F13]/80">RGPD desde el diseño. OAuth y mínimos privilegios. Revisión humana obligatoria donde tú decidas.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white border border-gray-200 p-4">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="lock"></i>
<p className="text-sm font-medium">Cifrado en tránsito/descanso</p>
</div>
<p className="mt-1 text-sm text-[#0B0F13]/70">TLS 1.2+ y cifrado de datos almacenados.</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200 p-4">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="key-round"></i>
<p className="text-sm font-medium">Roles y permisos</p>
</div>
<p className="mt-1 text-sm text-[#0B0F13]/70">Acceso por principio de mínimo privilegio.</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200 p-4">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="list-ordered"></i>
<p className="text-sm font-medium">Trazabilidad de acciones</p>
</div>
<p className="mt-1 text-sm text-[#0B0F13]/70">Logs y auditoría de actividades del agente.</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200 p-4">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="globe"></i>
<p className="text-sm font-medium">Residencia de datos en la UE</p>
</div>
<p className="mt-1 text-sm text-[#0B0F13]/70">Procesamiento y almacenamiento en la UE (si aplica).</p>
</div>
</div>
<p className="mt-4 text-xs text-[#0B0F13]/60">Nunca diremos “100% seguro”. Explicamos controles y límites con transparencia.</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200 p-6">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86]" data-lucide="shield-check"></i>
<h3 className="text-lg font-semibold tracking-tight">Controles que verás en producto</h3>
</div>
<ul className="mt-4 space-y-3 text-sm text-[#0B0F13]/80">
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="toggle-right"></i>
              Aprobaciones humanas por tipo de tarea.
            </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="eye"></i>
              Vista previa y explicación de la acción propuesta.
            </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="database-backup"></i>
              Exportación y borrado de datos bajo demanda.
            </li>
<li className="flex items-start gap-2">
<i aria-hidden="true" className="w-4 h-4 text-[#5D6C86] mt-0.5" data-lucide="badge-check"></i>
              Historial de aprobaciones y cambios.
            </li>
</ul>
</div>
</div>
</div>
</section>

<section aria-labelledby="testimonios-title" className="py-16 sm:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="testimonios-title">Lo que dicen nuestros clientes</h2>
<div className="mt-8 grid sm:grid-cols-2 gap-6">
<figure className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<blockquote className="text-[#0B0F13]/80">“Reducimos el tiempo de respuesta inicial de 12h a 1h y eliminamos tareas manuales repetitivas.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Retrato de cliente satisfecho" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Nombre Apellido</p>
<p className="text-xs text-[#0B0F13]/60">COO, Empresa mediana (placeholder)</p>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
<blockquote className="text-[#0B0F13]/80">“Ahorro de 8 horas/semana en seguimiento de pedidos y menos reprocesos entre equipos.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Retrato de cliente satisfecho" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Nombre Apellido</p>
<p className="text-xs text-[#0B0F13]/60">Directora de Operaciones (placeholder)</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section aria-labelledby="faq-title" className="py-16 sm:py-20 border-t border-gray-200" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" id="faq-title">FAQ</h2>
<div className="mt-8 space-y-3">
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Necesito saber de IA para configurarlo?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">No. Está pensado para equipos no técnicos. Plantillas y asistentes guiados te ayudan a definir objetivos y aprobaciones.</div>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Qué datos guarda la memoria y cómo se controla?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">Guarda hechos y preferencias útiles definidos por ti. Puedes ver, editar y borrar entradas de memoria. Todo queda auditado.</div>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Puedo definir aprobaciones humanas por tipo de tarea?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">Sí. Puedes exigir revisión en determinadas acciones (por ejemplo, envíos a clientes o cambios en CRM).</div>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Con qué herramientas es compatible?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">Email, WhatsApp Business, Slack, HubSpot, Pipedrive, Salesforce, Notion, Google Drive, Calendario y más.</div>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Qué ocurre si quiero desactivar o borrar datos?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">Puedes revocar OAuth, pausar el agente y solicitar borrado. Ofrecemos exportación antes de eliminar.</div>
</details>
<details className="group rounded-2xl border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">¿Cómo se gestiona el acceso del equipo?</span>
<i aria-hidden="true" className="w-5 h-5 text-[#5D6C86] group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 text-sm text-[#0B0F13]/80">Invitaciones por rol (admin, colaborador, lector) y permisos por herramienta o proceso.</div>
</details>
</div>
</div>
</section>

<section aria-labelledby="cta-final" className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-[#5D6C86] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" id="cta-final">Listo para liberar tiempo y reducir trabajo repetitivo?</h3>
<p className="mt-1 text-sm text-white/80">Te ayudamos a configurarlo en minutos.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-[#5D6C86] text-sm font-semibold hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href="#demo">
            Solicitar demo
          </a>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white" href="#demo">
            Hablar con el equipo
          </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
<div>
<div className="flex items-center gap-2">
<div aria-hidden="true" className="w-8 h-8 rounded-md bg-[#5D6C86] text-white flex items-center justify-center text-sm font-semibold tracking-tight">AG</div>
<p className="font-medium">Agente</p>
</div>
<p className="mt-3 text-[#0B0F13]/70">Automatización con memoria y control humano para pymes.</p>
</div>
<div>
<p className="font-medium">Producto</p>
<ul className="mt-3 space-y-2">
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#integraciones">Integraciones</a></li>
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#seguridad">Seguridad</a></li>
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#seguridad">RGPD</a></li>
</ul>
</div>
<div>
<p className="font-medium">Compañía</p>
<ul className="mt-3 space-y-2">
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#demo">Contacto</a></li>
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#demo">Soporte</a></li>
</ul>
</div>
<div>
<p className="font-medium">Legal</p>
<ul className="mt-3 space-y-2">
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#">Términos</a></li>
<li><a className="text-[#0B0F13]/70 hover:text-[#0B0F13]" href="#">Privacidad</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#0B0F13]/60">
<p>© <span id="year">2025</span> Agente. Todos los derechos reservados.</p>
<div className="flex items-center gap-3">
<i aria-hidden="true" className="w-3 h-3 text-[#5D6C86]" data-lucide="circle"></i>
<span>Estado: operativo</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
