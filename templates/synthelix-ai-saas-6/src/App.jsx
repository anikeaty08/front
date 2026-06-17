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



    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const open = !mobileMenu.classList.contains('hidden');
      menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      const icon = menuBtn.querySelector('iconify-icon');
      if (icon) icon.setAttribute('icon', open ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        mobileMenu?.classList.add('hidden');
        const icon = menuBtn?.querySelector('iconify-icon');
        if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // CTA validation + toast
    const email = document.getElementById('email');
    const ctaBtn = document.getElementById('ctaBtn');
    const hint = document.getElementById('emailHint');
    const toast = document.getElementById('toast');

    function isValidEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
    }

    ctaBtn?.addEventListener('click', () => {
      const value = email?.value || '';
      const ok = isValidEmail(value);

      if (!ok) {
        hint?.classList.remove('hidden');
        toast?.classList.add('hidden');
        email?.focus();
        return;
      }

      hint?.classList.add('hidden');
      toast?.classList.remove('hidden');
      ctaBtn.textContent = 'Revisa tu bandeja';
      ctaBtn.setAttribute('disabled', 'true');
      ctaBtn.className = ctaBtn.className.replace('hover:bg-slate-100', '');
      ctaBtn.classList.add('opacity-90', 'cursor-not-allowed');
    });

    email?.addEventListener('input', () => {
      hint?.classList.add('hidden');
      toast?.classList.add('hidden');
      if (ctaBtn?.hasAttribute('disabled')) {
        ctaBtn.removeAttribute('disabled');
        ctaBtn.textContent = 'Crear cuenta';
        ctaBtn.classList.remove('opacity-90', 'cursor-not-allowed');
      }
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-64 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]"></div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight text-sm" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>SA</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Synthelix AI</span>
<span className="text-xs text-slate-300/80">Flujos, síntesis y control</span>
</div>
</a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#features">Funciones</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#testimonials">Testimonios</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#pricing">Precios</a>
<a className="text-sm text-slate-200/80 hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-200/80 hover:text-white transition" href="#pricing">Iniciar sesión</a>
<a className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold tracking-tight hover:bg-slate-100 transition" href="#cta">
            Empezar gratis
          </a>
<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="menuBtn">
<iconify-icon className="text-slate-100" height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/10 transition" href="#features">Funciones</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/10 transition" href="#testimonials">Testimonios</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/10 transition" href="#pricing">Precios</a>
<a className="rounded-xl px-3 py-2 text-sm text-slate-200/90 hover:bg-white/10 transition" href="#faq">FAQ</a>
<div className="flex gap-2 pt-2">
<a className="flex-1 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 transition" href="#pricing">Iniciar sesión</a>
<a className="flex-1 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100 transition" href="#cta">Empezar gratis</a>
</div>
</div>
</div>
</div>
</header>

<main id="top">
<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200/90">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/20 text-indigo-200">
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</span>
<span>Nuevo: handoffs automáticos + líneas de tiempo más inteligentes</span>
</div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
              Mantén el trabajo avanzando. <span className="text-white/80">Sin el ruido.</span>
</h1>
<p className="mt-4 text-base text-slate-200/75 sm:text-lg" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
              Synthelix AI centraliza tareas, aprobaciones y estado en un flujo limpio—para que tu equipo entregue más rápido con menos reuniones y mayor claridad de ownership.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100 transition" href="#cta">
                Iniciar prueba gratis
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#features">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                Ver resumen
              </a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-200/70">Tiempo de configuración</div>
<div className="mt-1 text-lg font-semibold tracking-tight">10 minutos</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-200/70">Equipos onboarded</div>
<div className="mt-1 text-lg font-semibold tracking-tight">2,400+</div>
</div>
<div className="hidden sm:block rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-200/70">Tiempo de ciclo promedio</div>
<div className="mt-1 text-lg font-semibold tracking-tight">-28%</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 sm:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-emerald-300/80"></div>
</div>
<div className="text-xs text-slate-200/60">synthelix.ai</div>
</div>
<div className="mt-5 grid gap-4">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight">Lanzamiento semanal</div>
<div className="mt-1 text-xs text-slate-200/70">Aprobaciones y notas de versión</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-100/90">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                      En tiempo
                    </span>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-400/15 text-indigo-200">
<iconify-icon height="18" icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-xs text-slate-200/70">Tareas completadas</div>
<div className="text-sm font-semibold tracking-tight">18 / 24</div>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[75%] rounded-full bg-gradient-to-r from-indigo-300 to-cyan-200"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-200">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-xs text-slate-200/70">Responsables</div>
<div className="text-sm font-semibold tracking-tight">6 personas</div>
</div>
</div>
<div className="mt-3 flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/10"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/10"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/10"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/10"></div>
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/10"></div>
</div>
</div>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
<iconify-icon height="18" icon="solar:route-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Enrutamiento de flujo</div>
<div className="text-xs text-slate-200/70">Auto-asignación por reglas</div>
</div>
</div>
<div className="mt-3 text-xs text-slate-200/70">
                      Si el tipo de solicitud = “Seguridad”, asignar a <span className="text-slate-100">AppSec</span> y fijar SLA en <span className="text-slate-100">48h</span>.
                    </div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-400/15 text-fuchsia-200">
<iconify-icon height="18" icon="solar:graph-new-up-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Insights en vivo</div>
<div className="text-xs text-slate-200/70">Cuellos de botella al instante</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="h-16 rounded-xl bg-white/5 border border-white/10"></div>
<div className="h-16 rounded-xl bg-white/5 border border-white/10"></div>
<div className="h-16 rounded-xl bg-white/5 border border-white/10"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-slate-100">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Seguridad lista para empresa</div>
<div className="text-xs text-slate-200/70">SSO, auditoría y acceso por alcance</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition" href="#pricing">
                      Ver planes
                    </a>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            Todo para operar flujos limpios con REACT
          </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/75" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            Synthelix AI sustituye documentos dispersos y pings de estado por una única fuente confiable—con análisis, síntesis y control asistido por REACT.
          </p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-200">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight">Automatizaciones</div>
</div>
<p className="mt-3 text-sm text-slate-200/75">
              Dispara aprobaciones, notificaciones y asignaciones automáticamente con reglas que tu equipo define.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
<iconify-icon height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight">Visibilidad en tiempo real</div>
</div>
<p className="mt-3 text-sm text-slate-200/75">
              Observa qué está bloqueado, quién es responsable y qué sigue—sin perseguir actualizaciones.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
<iconify-icon height="20" icon="solar:link-minimalistic-linear" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight">Integraciones</div>
</div>
<p className="mt-3 text-sm text-slate-200/75">
              Conecta tus herramientas actuales y mantén el contexto sincronizado en todo tu stack.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-400/15 text-fuchsia-200">
<iconify-icon height="20" icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight">Controles y auditoría</div>
</div>
<p className="mt-3 text-sm text-slate-200/75">
              Acceso por roles, trazabilidad detallada y exportación de registros listos para compliance.
            </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
              Los equipos notan el cambio en la primera semana
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/75">
              Menos fricción en handoffs. Ownership más claro. Mayor throughput.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100/90 hover:text-white transition" href="#cta">
            Ver casos
            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<blockquote className="text-sm text-slate-100/90">
              “Synthelix AI sustituyó nuestras reuniones de estado por un solo flujo. Pasamos de reactivos a predecibles en dos sprints.”
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10"></div>
<div>
<div className="text-sm font-semibold tracking-tight">Avery Chen</div>
<div className="text-xs text-slate-200/70">Head of Delivery, Northwind</div>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<blockquote className="text-sm text-slate-100/90">
              “Las reglas de enrutamiento son sorprendentemente potentes. Las aprobaciones llegan al owner correcto al instante y con SLA claro.”
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10"></div>
<div>
<div className="text-sm font-semibold tracking-tight">Maya Patel</div>
<div className="text-xs text-slate-200/70">Ops Lead, Kepler Labs</div>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<blockquote className="text-sm text-slate-100/90">
              “Por fin tenemos un rastro de auditoría que tiene sentido. Seguridad está feliz—y el equipo no tuvo que frenar.”
            </blockquote>
<figcaption className="mt-5 flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10"></div>
<div>
<div className="text-sm font-semibold tracking-tight">Jordan Rivera</div>
<div className="text-xs text-slate-200/70">Security PM, BrightWorks</div>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            Precios que crecen con tu equipo
          </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/75">
            Empieza simple y activa controles avanzados cuando los necesites.
          </p>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Starter</div>
<div className="mt-1 text-xs text-slate-200/70">Para individuos y equipos pequeños</div>
</div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-2 py-1 text-xs text-slate-200/80">Gratis</span>
</div>
<div className="mt-6">
<div className="text-4xl font-semibold tracking-tight">$0</div>
<div className="mt-1 text-xs text-slate-200/70">Proyectos personales ilimitados</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200/80">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Hasta 3 flujos</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Automatizaciones básicas</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Soporte por correo</span>
</li>
</ul>
<a className="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition" href="#cta">
              Obtener Starter
            </a>
</div>

<div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-400/15 to-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
<div className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-white text-slate-950 px-3 py-1 text-xs font-semibold tracking-tight">
              Más elegido
            </div>
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Pro</div>
<div className="mt-1 text-xs text-slate-200/70">Para equipos que van rápido</div>
</div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-2 py-1 text-xs text-slate-200/80">Prueba 14 días</span>
</div>
<div className="mt-6">
<div className="flex items-end gap-2">
<div className="text-4xl font-semibold tracking-tight">$19</div>
<div className="pb-1 text-xs text-slate-200/70">/ usuario / mes</div>
</div>
<div className="mt-1 text-xs text-slate-200/70">Ideal para 5–100 asientos</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200/80">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Flujos ilimitados</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Reglas avanzadas de enrutamiento</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Integraciones + webhooks</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Paneles de analítica</span>
</li>
</ul>
<a className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100 transition" href="#cta">
              Iniciar prueba Pro
            </a>
<div className="mt-3 text-center text-xs text-slate-200/70">Cancela cuando quieras. Sin tarjeta.</div>
</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight">Enterprise</div>
<div className="mt-1 text-xs text-slate-200/70">Para escala y regulaciones</div>
</div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-2 py-1 text-xs text-slate-200/80">A medida</span>
</div>
<div className="mt-6">
<div className="text-4xl font-semibold tracking-tight">Hablemos</div>
<div className="mt-1 text-xs text-slate-200/70">Precios por volumen y soporte dedicado</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-200/80">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>SSO (SAML/OIDC) + SCIM</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Logs de auditoría + retención</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Workspaces privados</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-200" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>SLA prioritario + onboarding</span>
</li>
</ul>
<a className="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition" href="#cta">
              Contactar ventas
            </a>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 sm:p-10">
<div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-7">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
                Empieza a generar momentum hoy
              </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/75">
                Prueba Synthelix AI gratis durante 14 días. Invita a tu equipo, conecta tus herramientas y automatiza handoffs de principio a fin.
              </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<div className="flex-1">
<label className="sr-only" htmlFor="email">Email de trabajo</label>
<div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
<iconify-icon className="text-slate-200/70" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-200/50 outline-none" id="email" placeholder="Email de trabajo" type="email"/>
</div>
<div className="mt-2 hidden text-xs text-rose-200/90" id="emailHint">Por favor, introduce un email válido.</div>
</div>
<button className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold tracking-tight text-slate-950 hover:bg-slate-100 transition" id="ctaBtn">
                  Crear cuenta
                </button>
</div>
<div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-200/70">
<div className="inline-flex items-center gap-2">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
                  No requiere tarjeta
                </div>
<div className="inline-flex items-center gap-2">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                  14 días de prueba
                </div>
<div className="inline-flex items-center gap-2">
<iconify-icon height="16" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
                  Invita a tu equipo cuando quieras
                </div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight">Lo que obtendrás</div>
<span className="text-xs text-slate-200/70">En la primera hora</span>
</div>
<div className="mt-5 space-y-4">
<div className="flex gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-200">
<iconify-icon height="18" icon="solar:settings-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Un flujo funcionando</div>
<div className="text-xs text-slate-200/70">Plantillas para producto, ops y seguridad.</div>
</div>
</div>
<div className="flex gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
<iconify-icon height="18" icon="solar:bolt-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Una automatización</div>
<div className="text-xs text-slate-200/70">Auto-asigna y notifica al owner correcto.</div>
</div>
</div>
<div className="flex gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
<iconify-icon height="18" icon="solar:graph-new-up-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Visibilidad clara</div>
<div className="text-xs text-slate-200/70">Bloqueos, aging work y throughput.</div>
</div>
</div>
</div>
<div className="mt-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4" id="toast">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-200">
<iconify-icon height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight">Listo</div>
<div className="mt-1 text-xs text-slate-200/70">Te enviaremos un enlace de acceso a tu email.</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"></div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
            Preguntas comunes
          </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/75">
            Respuestas rápidas para evaluar Synthelix AI.
          </p>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-semibold tracking-tight">¿Synthelix AI reemplaza nuestra herramienta de proyectos?</div>
<p className="mt-2 text-sm text-slate-200/75">
              Puede hacerlo, pero no es obligatorio. Muchos equipos mantienen su tracker y usan Synthelix AI para aprobaciones, handoffs y flujos operativos.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-semibold tracking-tight">¿Hay prueba gratis?</div>
<p className="mt-2 text-sm text-slate-200/75">
              Sí—Pro incluye 14 días con acceso completo. Puedes cancelar cuando quieras.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-semibold tracking-tight">¿Soportan SSO?</div>
<p className="mt-2 text-sm text-slate-200/75">
              SSO y SCIM están disponibles en Enterprise junto con controles avanzados de auditoría.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-semibold tracking-tight">¿Podemos exportar datos?</div>
<p className="mt-2 text-sm text-slate-200/75">
              Sí. Puedes exportar flujos, logs y analítica en formatos estándar en cualquier momento.
            </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight text-sm" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>SA</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>Synthelix AI</div>
<div className="text-xs text-slate-200/70">Claridad operativa para equipos modernos</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-200/70 max-w-sm">
            Automatiza handoffs, define ownership y entrega con confianza—sin el ping constante.
          </p>
<div className="mt-6 flex items-center gap-2">
<a aria-label="Social" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<iconify-icon height="20" icon="solar:chat-round-linear" width="20"></iconify-icon>
</a>
<a aria-label="Código" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<iconify-icon height="20" icon="solar:code-linear" width="20"></iconify-icon>
</a>
<a aria-label="Compartir" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<iconify-icon height="20" icon="solar:share-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-8 grid gap-8 sm:grid-cols-3">
<div>
<div className="text-sm font-semibold tracking-tight">Producto</div>
<ul className="mt-3 space-y-2 text-sm text-slate-200/75">
<li><a className="hover:text-white transition" href="#features">Funciones</a></li>
<li><a className="hover:text-white transition" href="#pricing">Precios</a></li>
<li><a className="hover:text-white transition" href="#testimonials">Clientes</a></li>
<li><a className="hover:text-white transition" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Compañía</div>
<ul className="mt-3 space-y-2 text-sm text-slate-200/75">
<li><a className="hover:text-white transition" href="#">Acerca</a></li>
<li><a className="hover:text-white transition" href="#">Carreras</a></li>
<li><a className="hover:text-white transition" href="#">Seguridad</a></li>
<li><a className="hover:text-white transition" href="#">Contacto</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Legal</div>
<ul className="mt-3 space-y-2 text-sm text-slate-200/75">
<li><a className="hover:text-white transition" href="#">Privacidad</a></li>
<li><a className="hover:text-white transition" href="#">Términos</a></li>
<li><a className="hover:text-white transition" href="#">DPA</a></li>
<li><a className="hover:text-white transition" href="#">Estado</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-200/60">© <span id="year"></span> Synthelix AI. Todos los derechos reservados.</div>
<div className="text-xs text-slate-200/60">Pensado para claridad. Diseñado para velocidad.</div>
</div>
</div>
</footer>


    </>
  );
}
