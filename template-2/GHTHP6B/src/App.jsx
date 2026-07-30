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



      // Iconos
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Año en footer
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Gráfico
      const ctx = document.getElementById('kpiChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, 'rgba(16, 24, 40, 0.15)');
        gradient.addColorStop(1, 'rgba(16, 24, 40, 0)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                label: 'Ventas atribuidas',
                data: [120, 180, 220, 260, 320, 380, 420],
                borderColor: '#0EA5E9',
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 0
              },
              {
                label: 'Inversión',
                data: [80, 110, 150, 190, 240, 260, 280],
                borderColor: '#334155',
                borderDash: [6, 6],
                pointRadius: 0,
                tension: 0.35,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#0f172a',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                ticks: { color: '#64748b', font: { size: 11 } },
                grid: { display: false }
              },
              y: {
                ticks: { color: '#64748b', font: { size: 11 } },
                grid: { color: 'rgba(100,116,139,0.15)' }
              }
            }
          }
        });
      }
    
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
      

<header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</span>
<span className="text-sm sm:text-base font-semibold tracking-tight">Sección</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-600 hover:text-slate-900" href="#producto">Producto</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#como-funciona">Cómo funciona</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#integraciones">Integraciones</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#precios">Precios</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#faq">FAQ</a>
</nav>
<div className="hidden sm:flex items-center gap-3">
<a className="text-sm text-slate-700 hover:text-slate-900" href="#">Ingresar</a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition" href="#">
              Probar gratis
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative" id="producto">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-slate-200 via-slate-100 to-white"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

<div className="flex flex-col justify-center">
<span className="inline-flex items-center w-fit rounded-full bg-slate-900 text-white/90 px-3 py-1 text-xs font-medium shadow-sm">
<i className="w-3.5 h-3.5 mr-1.5" data-lucide="sparkles"></i>
              Nuevo: atribución clara por creador
            </span>
<h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Las marcas invierten en creadores, pero no saben qué ventas generan
            </h2>
<p className="mt-5 text-slate-600 text-base sm:text-lg font-normal">
              Medí el impacto real de cada colaboración. Unificá clics, códigos y ventas en un sólo panel y obtené ROAS por creador en tiempo real.
            </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Atribución multi‑touch</p>
<p className="text-xs text-slate-500">UTM, códigos y links unificados</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="w-4 h-4" data-lucide="receipt"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Ventas por creador</p>
<p className="text-xs text-slate-500">Ticket, conversión y ROAS</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Datos confiables</p>
<p className="text-xs text-slate-500">Anti‑fraude y deduplicación</p>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition" href="#">
                Probar atribución
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition" href="#">
                Solicitar demo
                <i className="w-4 h-4 ml-2" data-lucide="calendar"></i>
</a>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>
<p className="text-xs text-slate-500">Implementación en menos de 1 hora</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="lock"></i>
<p className="text-xs text-slate-500">Sin cambios en tu checkout</p>
</div>
</div>
</div>

<div className="relative">
<div className="h-full rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40 overflow-hidden">
<div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-100">
<img alt="Vista de campañas con creadores en dispositivos" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute top-4 left-4">
<span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-900 shadow">
<i className="w-3.5 h-3.5 mr-1" data-lucide="badge-dollar-sign"></i>
                    Atribución activada
                  </span>
</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-xl border border-slate-200 p-4">
<p className="text-[11px] uppercase tracking-wide text-slate-500 font-medium">Inversión</p>
<p className="mt-1 text-xl font-semibold tracking-tight">$24.8k</p>
<p className="mt-0.5 text-[11px] text-emerald-600 font-medium inline-flex items-center">
<i className="w-3.5 h-3.5 mr-1" data-lucide="trending-up"></i> +12%
                    </p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<p className="text-[11px] uppercase tracking-wide text-slate-500 font-medium">Ventas atribuidas</p>
<p className="mt-1 text-xl font-semibold tracking-tight">1,462</p>
<p className="mt-0.5 text-[11px] text-emerald-600 font-medium inline-flex items-center">
<i className="w-3.5 h-3.5 mr-1" data-lucide="check-circle-2"></i> 78% verificado
                    </p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<p className="text-[11px] uppercase tracking-wide text-slate-500 font-medium">ROAS</p>
<p className="mt-1 text-xl font-semibold tracking-tight">3.2×</p>
<p className="mt-0.5 text-[11px] text-emerald-600 font-medium inline-flex items-center">
<i className="w-3.5 h-3.5 mr-1" data-lucide="sparkles"></i> Objetivo superado
                    </p>
</div>
</div>

<div className="mt-5">
<div className="h-36 sm:h-40">
<canvas aria-label="Tendencia de ventas atribuidas vs inversión" id="kpiChart"></canvas>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex -space-x-2 overflow-hidden">
<img alt="Creador 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&w=80&q=60" />
<img alt="Creador 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=80&q=60" />
<img alt="Creador 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:opacity-80" href="#">
                    Ver ranking de creadores
                    <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs uppercase tracking-wide text-slate-500 font-medium">Equipos que confían</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center">
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca A</div>
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca B</div>
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca C</div>
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca D</div>
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca E</div>
<div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 text-sm">Marca F</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="como-funciona">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Cómo funciona</h3>
<p className="mt-3 text-slate-600">Conectá tus canales, generá links para creadores y medí ventas sin tocar tu checkout.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="link-2"></i>
</span>
<span className="text-sm text-slate-600">Paso 1</span>
</div>
<h4 className="mt-4 text-lg font-semibold tracking-tight">Conectá tus fuentes</h4>
<p className="mt-2 text-sm text-slate-600">Integra tu tienda, anuncios y analíticas. Importamos UTM, códigos y eventos.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="percent"></i>
</span>
<span className="text-sm text-slate-600">Paso 2</span>
</div>
<h4 className="mt-4 text-lg font-semibold tracking-tight">Generá códigos y links</h4>
<p className="mt-2 text-sm text-slate-600">Crea enlaces únicos por creador y campaña. Todo queda trazado automáticamente.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="line-chart"></i>
</span>
<span className="text-sm text-slate-600">Paso 3</span>
</div>
<h4 className="mt-4 text-lg font-semibold tracking-tight">Medí y optimizá</h4>
<p className="mt-2 text-sm text-slate-600">Visualizá ROAS por creador, deduplicación de ventas y fraude detectado.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-slate-200" id="integraciones">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Integraciones listas</h3>
<p className="mt-3 text-slate-600 max-w-xl">Funciona con tu stack actual. Conecta en minutos, sin ingeniería pesada.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900" href="#">
            Ver todas las integraciones
            <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="shopping-bag"></i>
<span className="text-sm font-medium">Shopify</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">1‑click</span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="store"></i>
<span className="text-sm font-medium">WooCommerce</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">Plugin</span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">GA4</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">Nativo</span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="video"></i>
<span className="text-sm font-medium">TikTok</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">API</span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="badge-check"></i>
<span className="text-sm font-medium">Meta</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">CAPI</span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="mail"></i>
<span className="text-sm font-medium">Klaviyo</span>
</div>
<span className="text-[11px] text-emerald-600 font-medium">Webhook</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
<div className="md:col-span-1">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Resultados reales</h3>
<p className="mt-3 text-slate-600">Equipos de growth y partnerships miden impacto sin discusiones.</p>
<a className="mt-6 inline-flex items-center text-sm font-medium text-slate-900" href="#">
              Ver más historias
              <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Valeria - Directora de Marketing" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60" />
<div>
<p className="text-sm font-medium">Valeria</p>
<p className="text-xs text-slate-500">Directora de Marketing</p>
</div>
</div>
<p className="mt-4 text-slate-700 text-sm">“Por primera vez atribuímos el 32% de las ventas a creadores sin discutir cookies ni descuentos duplicados.”</p>
<div className="mt-4 inline-flex items-center text-[11px] font-medium text-emerald-600">
<i className="w-3.5 h-3.5 mr-1" data-lucide="trending-up"></i>
                +3.4× ROAS en 60 días
              </div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Sofía - Partnerships Lead" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=60" />
<div>
<p className="text-sm font-medium">Sofía</p>
<p className="text-xs text-slate-500">Partnerships Lead</p>
</div>
</div>
<p className="mt-4 text-slate-700 text-sm">“El dashboard nos mostró qué creadores impulsan AOV y retención. Redirigimos presupuesto con datos.”</p>
<div className="mt-4 inline-flex items-center text-[11px] font-medium text-emerald-600">
<i className="w-3.5 h-3.5 mr-1" data-lucide="sparkles"></i>
                18% más ticket promedio
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-slate-200" id="precios">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Planes simples</h3>
<p className="mt-3 text-slate-600">Empezá gratis. Escalá cuando tu programa de creadores lo necesite.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight">Starter</h4>
<span className="text-xs text-slate-500">Para empezar</span>
</div>
<p className="mt-2 text-3xl font-semibold tracking-tight">$0</p>
<p className="text-sm text-slate-600">Hasta 10 creadores y 5k clics/mes</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> Links y códigos por creador
              </li>
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> Atribución básica y deduplicación
              </li>
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> Integración Shopify/Woo
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition" href="#">
              Comenzar gratis
            </a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 ring-1 ring-slate-900/5">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight">Growth</h4>
<span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[11px] font-medium border border-emerald-100">Más popular</span>
</div>
<p className="mt-2 text-3xl font-semibold tracking-tight">$199<span className="text-sm text-slate-500">/mes</span></p>
<p className="text-sm text-slate-600">Crecé con reporting avanzado y API</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> ROAS por creador y cohortes
              </li>
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> Anti‑fraude avanzado
              </li>
<li className="flex items-center text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600 mr-2" data-lucide="check"></i> API + exportaciones
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition" href="#">
              Probar Growth
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Preguntas frecuentes</h3>
<p className="mt-3 text-slate-600">Todo lo que necesitás saber antes de empezar.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<p className="text-sm font-medium">¿Necesito cambiar mi checkout?</p>
<p className="mt-2 text-sm text-slate-600">No. Implementás etiquetas y webhooks sin tocar el flujo de pago.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<p className="text-sm font-medium">¿Cómo manejan la deduplicación?</p>
<p className="mt-2 text-sm text-slate-600">Unificamos señales (UTM, códigos, referers) y aplicamos modelos con ventanas configurables.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<p className="text-sm font-medium">¿Puedo importar ventas históricas?</p>
<p className="mt-2 text-sm text-slate-600">Sí. Importá CSV o conectá tu fuente y sincronizamos los últimos 12 meses.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<p className="text-sm font-medium">¿Qué pasa con el fraude?</p>
<p className="mt-2 text-sm text-slate-600">Detectamos patrones anómalos, auto‑bloqueamos códigos y reportamos intentos.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Empezá a medir hoy</h3>
<p className="mt-3 text-slate-600 max-w-2xl mx-auto">Activá la atribución por creador y descubrí qué colaboraciones realmente venden.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition" href="#">
              Crear cuenta gratis
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition" href="#">
              Hablar con ventas
              <i className="w-4 h-4 ml-2" data-lucide="message-square"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
<div>
<p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Producto</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#producto">Atribución</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#como-funciona">Cómo funciona</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#integraciones">Integraciones</a></li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Empresa</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Nosotros</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Carreras</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Contacto</a></li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Recursos</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Guías</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Blog</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Estado</a></li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-slate-500 font-medium">Legal</p>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Privacidad</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">Términos</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900" href="#">DPD</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 text-sm text-slate-600">
<span className="h-7 w-7 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</span>
<span>© <span id="year"></span> Sección. Todos los derechos reservados.</span>
</div>
<div className="inline-flex items-center gap-4">
<a className="text-slate-500 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-500 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="mail"></i></a>
</div>
</div>
</div>
</footer>





    </>
  );
}
