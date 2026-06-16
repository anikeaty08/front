import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
black: '#02060C',
white: '#A1C6FF',
zinc: {
50: '#A1C6FF',
100: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F',
700: '#1B3B6F',
800: '#061226',
900: '#061226',
950: '#061226'
},
orange: {
50: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F'
},
emerald: {
50: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F'
},
blue: {
50: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F'
},
purple: {
50: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F'
},
amber: {
50: '#A1C6FF',
200: '#A1C6FF',
300: '#A1C6FF',
400: '#3A7BD5',
500: '#3A7BD5',
600: '#1B3B6F'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  function toggleCRM(opcion) {
    const si = document.getElementById('crm-si');
    const no = document.getElementById('crm-no');
    const btnSi = document.getElementById('btn-crm-si');
    const btnNo = document.getElementById('btn-crm-no');

    const base = 'rounded-xl border px-5 py-2 text-sm font-medium transition-all duration-200';
    btnSi.className = base + ' border-white/10 bg-zinc-950/40 text-zinc-400 hover:border-blue-500/50 hover:text-zinc-100';
    btnNo.className = base + ' border-white/10 bg-zinc-950/40 text-zinc-400 hover:border-blue-500/50 hover:text-zinc-100';

    if (opcion === 'si') {
      si.classList.remove('hidden');
      no.classList.add('hidden');
      btnSi.classList.add('border-blue-500/50', 'text-zinc-100');
      btnSi.classList.remove('text-zinc-400');
    } else {
      no.classList.remove('hidden');
      si.classList.add('hidden');
      btnNo.classList.add('border-blue-500/50', 'text-zinc-100');
      btnNo.classList.remove('text-zinc-400');
    }
  }

  function togglePill(btn, group) {
    // Permitir selección múltiple: toggle del propio botón
    const isActive = btn.classList.contains('border-blue-500/50');
    if (isActive) {
      btn.classList.remove('border-blue-500/50', 'text-zinc-100');
      btn.classList.add('border-white/10', 'text-zinc-400');
    } else {
      btn.classList.add('border-blue-500/50', 'text-zinc-100');
      btn.classList.remove('border-white/10', 'text-zinc-400');
    }
  }

  function toggleOtro(id) {
    const input = document.getElementById(id);
    const isActive = event.currentTarget.classList.contains('border-blue-500/50');
    // Si se acaba de activar, mostrar; si se desactivó, ocultar
    if (!isActive) {
      input.classList.add('hidden');
      input.value = '';
    } else {
      input.classList.remove('hidden');
      input.focus();
    }
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-0">
<div className="absolute inset-0 bg-black"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(58,123,213,0.25),transparent_80%)]"></div>
<div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(161,198,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,198,255,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
</div>
<div className="sm:px-6 lg:px-8 w-full max-w-6xl mr-auto ml-auto pr-4 pl-4 relative">

<header className="sm:pt-24 flex flex-col z-10 text-center pt-16 relative items-center">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 mb-6 shadow-[0_0_30px_rgba(58,123,213,0.3)]">
<i className="h-6 w-6 text-orange-400" data-lucide="scan-search"></i>
</div>
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/80 mb-3">
          Auditoría
        </p>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
          Diagnóstico Inicial de Procesos
        </h1>
<p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Guía estructurada para entrevistar al cliente, detectar cuellos de
          botella y preparar automatizaciones con una base sólida.
        </p>
<div className="flex items-center gap-3 mt-8">
<button className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-6 py-2.5 text-sm font-medium text-orange-50 hover:bg-orange-500/20 hover:border-orange-500/70 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/50 shadow-[0_0_20px_rgba(58,123,213,0.15)]">
<i className="h-4 w-4" data-lucide="printer"></i>
            Imprimir
          </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-100 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500/50">
<i className="h-4 w-4" data-lucide="copy"></i>
            Duplicar
          </button>
</div>

<div className="mt-16 w-full text-left rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
<div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300 ring-1 ring-orange-400/30 shadow-[0_0_15px_rgba(58,123,213,0.2)]">
<i className="h-6 w-6" data-lucide="route"></i>
</div>
<div className="min-w-0">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Callout — Objetivo de la sesión
              </h2>
<p className="sm:text-base text-sm text-zinc-300 mt-3 leading-relaxed">
                El objetivo es mapear los procesos actuales (de extremo a
                extremo) para convertirlos en un diagrama BPMN y detectar puntos
                de fricción, dependencias humanas, silos de información y
                oportunidades de automatización.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-200">
<i className="h-4 w-4 text-orange-300" data-lucide="workflow"></i>
                  Resultado: mapa BPMN + backlog de automatizaciones
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-200">
<i className="h-4 w-4 text-orange-300" data-lucide="shield-alert"></i>
                  Señales: pérdida de leads, retrasos, tareas manuales, errores
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-200">
<i className="h-4 w-4 text-orange-300" data-lucide="database"></i>
                  Enfoque: trazabilidad del dato y control operativo
                </span>
</div>
</div>
</div>
</div>
</header>

<main className="sm:pt-10 pt-8 pb-16">

<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
<div className="min-w-0">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-50">
                Datos Generales
              </h2>
<p className="mt-1 text-sm sm:text-base text-zinc-300">
                Completa esta tabla al inicio para contextualizar la auditoría.
              </p>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200">
<i className="h-4 w-4" data-lucide="file-text"></i>
              Sesión de diagnóstico
            </div>
</div>
<div className="p-5 sm:p-6">
<div className="overflow-hidden rounded-xl border border-white/10">
<table className="w-full border-separate border-spacing-0">
<thead className="bg-white/5">
<tr>
<th className="w-40 sm:w-56 px-4 py-3 text-left text-xs font-medium uppercase tracking-widest text-zinc-400">
                      Campo
                    </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-widest text-zinc-400">
                      Valor
                    </th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="bg-white/0">
<td className="px-4 py-4 text-sm sm:text-base font-medium text-zinc-200">
                      Nombre de la empresa
                    </td>
<td className="px-4 py-4">
<input className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Ej: Acme Studio S.L."/>
</td>
</tr>
<tr>
<td className="px-4 py-4 text-sm sm:text-base font-medium text-zinc-200">
                      Tu rol en la empresa
                    </td>
<td className="px-4 py-4">
<input className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Ej: CEO, Operaciones, Ventas, Marketing..."/>
</td>
</tr>
<tr>
<td className="px-4 py-4 text-sm sm:text-base font-medium text-zinc-200">
                      Tamaño del equipo (número aproximado de personas)
                    </td>
<td className="px-4 py-4">
<input className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" inputmode="numeric" min="1" placeholder="Ej: 12" type="number"/>
</td>
</tr>
<tr>
<td className="px-4 py-4 text-sm sm:text-base font-medium text-zinc-200">
                      Fecha de envío del formulario
                    </td>
<td className="px-4 py-4">
<input className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" type="date"/>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<section className="mt-6 rounded-2xl border border-white/10 bg-white/5">
<div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
<div className="min-w-0">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-50">
                📹 Video-Resumen: El viaje de un pedido en tu empresa
              </h2>
<p className="mt-2 text-sm sm:text-base text-zinc-300">
                Para diseñar la mejor solución y encontrar tus cuellos de
                botella, necesito ver tu realidad operativa. Por favor, graba un
                video breve de tu pantalla (usando Loom o similar) narrando el
                ciclo de vida completo de un cliente o pedido.
              </p>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200">
<i className="h-4 w-4" data-lucide="video"></i>
              Enlace de video
            </div>
</div>
<div className="p-5 sm:p-6 space-y-6">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                Qué debes enseñarnos
              </h3>
<ul className="mt-3 space-y-2 text-sm sm:text-base text-zinc-200 list-disc pl-5">
<li>
<span className="font-medium text-zinc-100">El Inicio:</span>
                  ¿Dónde entra el lead o pedido? (Muestra el email, formulario
                  web, WhatsApp, etc.).
                </li>
<li>
<span className="font-medium text-zinc-100">El Proceso:</span>
                  Abre las herramientas que usas (CRM, Excel, Trello) y simula
                  los pasos que dais manualmente para gestionar ese pedido.
                </li>
<li>
<span className="font-medium text-zinc-100">El Desenlace:</span>
                  Muestra qué recibe el cliente final y cómo se cierra el
                  proceso.
                </li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                Enlace del video (Loom o similar)
              </p>
<input className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Pega aquí la URL del video..." type="url"/>
<p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Si prefieres, también puedes subirlo a Drive y compartir el
                enlace.
              </p>
</div>
<div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 ring-1 ring-amber-400/20">
<i className="h-5 w-5 text-amber-200" data-lucide="alert-triangle"></i>
</div>
<div className="min-w-0">
<p className="text-sm sm:text-base font-semibold text-zinc-50">
                    ⚠️ Reglas importantes:
                  </p>
<div className="mt-2 space-y-3 text-sm sm:text-base text-zinc-200">
<p>
<span className="font-medium text-zinc-100">
                        No edites los fallos:
                      </span>
                      Si el sistema va lento, te equivocas o es un proceso
                      tedioso, no cortes el video. Necesitamos ver esos
                      problemas para poder solucionarlos.
                    </p>
<p>
<span className="font-medium text-zinc-100">Seguridad:</span>
                      Antes de grabar, cierra pestañas con bancos, contraseñas o
                      datos financieros sensibles. Usa un cliente ficticio si es
                      necesario.
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="mt-10 grid grid-cols-1 gap-6 lg:gap-8">

<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="border-b border-white/10 p-5 sm:p-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
<div className="min-w-0">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-50">
                    Marketing (Captación y Flujo)
                  </h2>
<p className="mt-1 text-sm sm:text-base text-zinc-300">
                    Trazabilidad del dato: de desconocido a lead.
                  </p>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200">
<i className="h-4 w-4" data-lucide="megaphone"></i>
                  Área 1/4
                </div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/20">
<i className="h-5 w-5 text-emerald-200" data-lucide="git-fork"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                      Objetivo
                    </h3>
<p className="mt-1 text-sm sm:text-base text-zinc-200">
                      Entender la trazabilidad del dato desde que alguien es un
                      desconocido hasta que se convierte en lead: fuentes,
                      captación, campos, almacenamiento inicial y criterios de
                      cualificación.
                    </p>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 space-y-8">

<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Infraestructura y Stack Tecnológico
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Qué fuentes de tráfico activas tenéis (Meta Ads, Google
                      Ads, SEO, Referidos, Email Frío)? Desglosa el % aproximado
                      de leads por fuente.
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Notas / bullets:
- Fuente:
- % aprox:
- Observaciones:" rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Qué herramientas de captación utilizáis (ej.
                      ClickFunnels, WordPress, Typeform, Calendly)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Herramientas, para qué se usan, propietario interno, costes si aplica..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Existe alguna integración automática actual entre la
                      fuente de tráfico y el almacenamiento de leads (ej.
                      Zapier, Make, conexión nativa)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Describe integraciones, qué eventos disparan, qué campos viajan, errores frecuentes..." rows="3"></textarea>
</div>
</div>
</div>

<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Flujo del Proceso (Para BPMN)
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Trigger: ¿Qué acción específica del usuario dispara la
                      entrada al sistema (rellenar formulario, enviar DM,
                      reservar llamada)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Evento exacto, canal, URL, herramienta, responsable..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Input: ¿Qué datos obligatorios se solicitan en la
                      captación (Nombre, Email, Teléfono, Presupuesto, Cargo)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Lista de campos:
- Obligatorios:
- Opcionales:
- Validaciones / consentimientos (RGPD):" rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Almacenamiento: Una vez entra el lead, ¿dónde "aterriza"
                      físicamente el dato primero (Google Sheets, CRM, Email del
                      comercial)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Primer destino del dato, formato, quién lo ve, duplicidades..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Cualificación: ¿Existe un paso intermedio de cualificación
                      (Lead Scoring) automático o manual antes de pasarlo a
                      Ventas? ¿Qué criterios determinan si un lead es "bueno" o
                      "malo"?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Criterios, quién decide, tiempos, herramientas, qué pasa si es 'malo'..." rows="4"></textarea>
</div>
</div>
</div>

<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Cuellos de Botella y Métricas
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Cuántos leads se pierden o quedan sin asignar por falta
                      de trazabilidad?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Estimación mensual, causas, en qué punto se pierden..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Cuál es el Coste por Lead (CPL) promedio actual?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="CPL por canal, periodo, fuente del dato..." rows="2"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Quién es el responsable técnico de subir creatividades y
                      verificar que los formularios funcionan?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" placeholder="Nombre/rol, proceso de QA, frecuencia de revisiones..." rows="2"></textarea>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="sm:p-6 border-white/10 border-b pt-5 pr-5 pb-5 pl-5">
<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
<div className="min-w-0">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-50">
                    Ventas (Conversión y Control)
                  </h2>
<p className="mt-1 text-sm sm:text-base text-zinc-300">
                    Pipeline, fricción humana y disciplina de seguimiento.
                  </p>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-200">
<i className="h-4 w-4" data-lucide="handshake"></i>
                  Área 2/4
                </div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-400/20">
<i className="h-5 w-5 text-blue-200" data-lucide="funnel"></i>
</div>
<div className="">
<h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                      Objetivo
                    </h3>
<p className="mt-1 text-sm sm:text-base text-zinc-200">
                      Mapear la tubería de ventas y detectar fricción: tiempos
                      de respuesta, triggers de etapa, seguimiento,
                      automatizaciones y reparto de leads.
                    </p>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 space-y-8">

<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
    ¿Utilizáis un CRM?
  </p>

<div className="mt-3 flex gap-3">
<button className="rounded-xl border border-white/10 bg-zinc-950/40 px-5 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" id="btn-crm-si" onclick="toggleCRM('si')" type="button">
      Sí
    </button>
<button className="rounded-xl border border-white/10 bg-zinc-950/40 px-5 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" id="btn-crm-no" onclick="toggleCRM('no')" type="button">
      No
    </button>
</div>

<div className="hidden mt-4" id="crm-si">
<p className="text-sm font-medium text-zinc-300 mb-2">¿Cuál usáis?</p>
<div className="flex flex-wrap gap-2">
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool')" type="button">HubSpot</button>
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool')" type="button">Pipedrive</button>
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool')" type="button">Salesforce</button>
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool')" type="button">Zoho</button>
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool')" type="button">Monday</button>
<button className="crm-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'crm-tool'); toggleOtro('crm-otro')" type="button">Otro</button>
</div>

<input className="hidden mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" id="crm-otro" placeholder="¿Cuál? Escribe el nombre del CRM..." type="text" />
<p className="text-sm font-medium text-zinc-300 mt-4 mb-2">¿Qué versión/plan tenéis?</p>
<textarea className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Plan, nº de usuarios, quién lo administra, limitaciones que tengáis..." rows="2"></textarea>
</input></div>

<div className="hidden mt-4" id="crm-no">
<p className="text-sm font-medium text-zinc-300 mb-2">¿Dónde apuntáis los leads?</p>
<div className="flex flex-wrap gap-2">
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool')" type="button">Excel / Sheets</button>
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool')" type="button">Papel / Agenda</button>
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool')" type="button">WhatsApp</button>
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool')" type="button">Email</button>
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool')" type="button">Notas / Notion</button>
<button className="lead-pill rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-zinc-100" onclick="togglePill(this, 'lead-tool'); toggleOtro('lead-otro')" type="button">Otro</button>
</div>

<input className="hidden mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" id="lead-otro" placeholder="¿Dónde exactamente? Descríbelo..." type="text" />
</input></div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Describe, paso a paso, las etapas exactas de vuestro
                      embudo de ventas (ej. Lead Nuevo -&gt; Contactado -&gt;
                      Reunión Agendada -&gt; Presupuesto Enviado -&gt;
                      Ganado/Perdido).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Etapas en orden + definición de cada una + criterios de entrada/salida..." rows="5"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Qué "Trigger" mueve un lead de una etapa a la siguiente?
                      ¿Es manual o automático?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Por etapa: trigger, actor, herramienta, validación, excepciones..." rows="4"></textarea>
</div>
</p></div></h3></div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Interacción y Seguimiento
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Tiempo de Respuesta: Desde que entra el lead, ¿cuánto
                      tiempo pasa hasta el primer contacto humano? (Minutos,
                      horas, días).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Promedio, variabilidad por canal, SLA interno, horarios..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Protocolo de Follow-up: ¿Cuántos puntos de contacto
                      (llamadas/emails/WhatsApp) se realizan antes de descartar
                      un lead? ¿Existe una cadencia definida?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Cadencia, mensajes tipo, tiempos, canal principal, objeciones..." rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Automatización: ¿Se envían correos o mensajes automáticos
                      de confirmación de cita o recordatorios? ¿Con qué
                      herramienta?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Qué se automatiza, en qué punto, herramienta, plantillas, fallos típicos..." rows="3"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Asignación y Equipo
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Cómo se reparte el "pastel"? (Round Robin automático,
                      asignación manual por un manager, "el primero que llega se
                      lo queda").
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Reglas, excepciones, prioridad, impacto en tiempos de respuesta..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Qué tareas administrativas realiza el comercial que odia
                      hacer (ej. rellenar datos a mano, buscar en LinkedIn,
                      crear contratos)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Lista de tareas, frecuencia, tiempo invertido, herramientas, errores..." rows="4"></textarea>
</div>
</div>
</div>
</section></div>

<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="border-b border-white/10 p-5 sm:p-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
<div className="min-w-0">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-50">
                    Delivery (Entrega y Fulfillment)
                  </h2>
<p className="mt-1 text-sm sm:text-base text-zinc-300">
                    La “fábrica”: onboarding, ejecución, producción y cierres.
                  </p>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-200">
<i className="h-4 w-4" data-lucide="package-check"></i>
                  Área 3/4
                </div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 ring-1 ring-purple-400/20">
<i className="h-5 w-5 text-purple-200" data-lucide="factory"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                      Objetivo
                    </h3>
<p className="mt-1 text-sm sm:text-base text-zinc-200">
                      Entender cómo se produce y entrega el servicio, dónde hay
                      esperas y retrabajos, y cuánto depende del trabajo
                      artesanal frente a lo estandarizable.
                    </p>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 space-y-8">

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Inicio del Proyecto (Onboarding)
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Trigger: ¿Qué evento marca oficialmente el inicio del
                      servicio (pago de factura, firma de contrato, reunión de
                      kickoff)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Evento, herramienta, verificación, responsable, tiempos..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Recopilación de Info: ¿Cómo capturáis la información
                      inicial del cliente? (Formulario largo, email con
                      adjuntos, carpeta de Drive compartida). ¿Es un proceso
                      estandarizado o "cada cliente es un mundo"?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Canales, plantillas, checklist, qué suele faltar, retrabajos típicos..." rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Alta en Sistemas: ¿Qué herramientas se configuran
                      manualmente al entrar un cliente nuevo (Crear carpeta
                      Drive, crear proyecto en ClickUp/Asana, alta en Slack)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Lista de altas, dueño, tiempo por cliente, puntos de fallo, accesos..." rows="4"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Ejecución y Producción
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Desglose de tareas: Enumera las 5 fases principales de la
                      entrega del servicio.
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="1) ...
2) ...
3) ...
4) ...
5) ..." rows="5"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Intervención Humana vs. Máquina: En una escala del 0 al
                      100%, ¿cuánto del entregable final es artesanal y cuánto
                      es plantilla/estándar?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Estimación % + ejemplos concretos de partes estandarizables vs. artesanales..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Cuellos de Botella: ¿En qué fase del delivery se suele
                      atascar el proyecto o dónde se producen más retrasos? (ej.
                      "Esperando feedback del cliente", "Revisión de calidad
                      interna").
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Fase, causa raíz, frecuencia, impacto, señal temprana, mitigación actual..." rows="4"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Cierre y Fidelización
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Existe un proceso formal de "Offboarding" o cierre de
                      proyecto?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Checklist, entregables finales, permisos, archivado, handover..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Cómo se mide la satisfacción (NPS, formulario de
                      feedback)? ¿Es automático?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30" placeholder="Cuándo se envía, herramienta, tasa de respuesta, acciones posteriores..." rows="3"></textarea>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="border-b border-white/10 p-5 sm:p-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
<div className="min-w-0">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-50">
                    Administración y Operaciones (Datos y Control)
                  </h2>
<p className="mt-1 text-sm sm:text-base text-zinc-300">
                    Silos, riesgos, accesos, reporting y “verdad” del negocio.
                  </p>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-200">
<i className="h-4 w-4" data-lucide="settings"></i>
                  Área 4/4
                </div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 ring-1 ring-amber-400/20">
<i className="h-5 w-5 text-amber-200" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                      Objetivo
                    </h3>
<p className="mt-1 text-sm sm:text-base text-zinc-200">
                      Detectar silos de información, dependencias críticas,
                      control de accesos, flujo financiero/legal y la fiabilidad
                      de los reportes.
                    </p>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 space-y-8">

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Flujo Financiero y Legal
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Facturación: ¿Cómo se genera y envía una factura? (Manual
                      en Word/Excel, Holded, Stripe automático). ¿Quién valida
                      que se ha pagado?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Paso a paso, herramientas, responsable, conciliación, excepciones (impagos)..." rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Contratos: ¿Cuál es el proceso de firma de contratos?
                      (Papel y escáner, DocuSign, aceptación de términos en
                      web).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Flujo de firma, plantillas, versiones, archivo, alertas de renovación..." rows="3"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Gestión de la Información (La “Verdad” de la empresa)
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Dónde vive la "Base de Conocimiento" de la empresa?
                      (Notion, Google Drive, "En la cabeza del CEO", Wikis).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Ubicación, estructura, propietario, mantenimiento, búsquedas, duplicidades..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Tenéis una nomenclatura estandarizada para nombrar
                      archivos y carpetas? (Sí/No).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Si existe: describe regla + ejemplos. Si no: problemas que causa + urgencia percibida..." rows="3"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      Control de Accesos: ¿Tenéis un mapa de quién tiene acceso
                      a qué? ¿Compartís contraseñas por WhatsApp o usáis un
                      gestor (LastPass, 1Password)?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Herramientas, proceso de alta/baja, riesgos, incidentes previos, mejores prácticas actuales..." rows="4"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  Reportes y BI (Business Intelligence)
                </h3>
<div className="mt-4 space-y-4">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Cómo se genera el reporte de resultados mensual/semanal?
                      ¿Alguien copia y pega datos de 3 sitios distintos a un
                      Excel? (Indica tiempo invertido en esto).
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Fuentes, pasos, persona responsable, tiempo, errores típicos, frecuencia..." rows="4"></textarea>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium text-zinc-100">
                      ¿Qué métrica (KPI) es crítica para el negocio pero hoy no
                      podéis medir con fiabilidad?
                    </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="KPI, por qué no se mide bien, qué datos faltan, dónde se pierden..." rows="3"></textarea>
</div>
</div>
</div>

<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
                  ⭐ Bonus — La “Pregunta del Dolor”
                </h3>
<div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 ring-1 ring-amber-400/20">
<i className="h-5 w-5 text-amber-200" data-lucide="wand"></i>
</div>
<div className="min-w-0 w-full">
<p className="text-sm sm:text-base font-medium text-zinc-50">
                        “Si tuvieras una varita mágica para eliminar una sola
                        tarea repetitiva que te roba al menos 5 horas a la
                        semana a ti o a tu equipo, ¿cuál sería exactamente?”
                      </p>
<textarea className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Describe la tarea, frecuencia, quién la hace, impacto, por qué ocurre..." rows="4"></textarea>
<div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                            Tiempo
                          </p>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Ej: 6 h/semana"/>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                            Dueño
                          </p>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Rol / persona"/>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                            Sistema
                          </p>
<input className="mt-2 w-full rounded-lg border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" placeholder="Dónde sucede (tool)"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main></div>

<div className="mt-10 w-full max-w-3xl mx-auto space-y-8 text-center pb-12 relative z-10">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 text-left">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">
              ¿Debería saber algo más sobre tu empresa?
            </h2>
<textarea className="w-full rounded-2xl border border-white/10 bg-zinc-950/50 px-5 py-4 text-sm sm:text-base text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 min-h-[120px]" placeholder="Comentarios adicionales, notas o detalles importantes..."></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 text-base font-semibold text-white hover:from-orange-500 hover:to-orange-400 transition-all shadow-[0_0_40px_rgba(58,123,213,0.4)] hover:shadow-[0_0_60px_rgba(58,123,213,0.6)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
            Enviar Auditoría
            <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>


    </>
  );
}
