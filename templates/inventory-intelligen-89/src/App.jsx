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



      // Icons with uniform stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5, class: 'h-4 w-4' }});
      });

      // Tabs
      const tabButtons = document.querySelectorAll('[data-tab]');
      const panels = document.querySelectorAll('[data-tab-panel]');
      function setActiveTab(name) {
        tabButtons.forEach(btn => {
          const isActive = btn.getAttribute('data-tab') === name;
          btn.className = 'px-3 py-1.5 rounded-md text-sm ' + (isActive ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'hover:bg-gray-50');
        });
        panels.forEach(panel => {
          panel.classList.toggle('hidden', panel.getAttribute('data-tab-panel') !== name);
        });
      }
      tabButtons.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.getAttribute('data-tab'))));
      setActiveTab('overview');

      // View filter (All vs Attention)
      const viewButtons = document.querySelectorAll('[data-view]');
      const attentionNodes = document.querySelectorAll('[data-attention]');
      function setView(name) {
        viewButtons.forEach(btn => {
          const active = btn.getAttribute('data-view') === name;
          btn.className = 'px-2.5 py-1.5 rounded-md text-xs ' + (active ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'hover:bg-gray-50');
        });
        attentionNodes.forEach(node => {
          const level = node.getAttribute('data-attention');
          const show = name === 'all' ? true : level !== 'ok';
          node.classList.toggle('hidden', !show);
        });
      }
      viewButtons.forEach(btn => btn.addEventListener('click', () => setView(btn.getAttribute('data-view'))));
      setView('all');

      // Location tabs (parent-level)
      const locationButtons = document.querySelectorAll('[data-location]');
      const locationPanels = document.querySelectorAll('[data-location-panel]');
      function setActiveLocation(name) {
        locationButtons.forEach(btn => {
          const isActive = btn.getAttribute('data-location') === name;
          btn.className = 'px-3 py-1.5 rounded-md text-sm ' + (isActive ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'hover:bg-gray-50');
        });
        locationPanels.forEach(panel => {
          panel.classList.toggle('hidden', panel.getAttribute('data-location-panel') !== name);
        });
      }
      locationButtons.forEach(btn => btn.addEventListener('click', () => setActiveLocation(btn.getAttribute('data-location'))));
      setActiveLocation('guatemala');

      // Chart colors
      const blue = '#3B82F6';
      const gray = '#E5E7EB';

      // Sales Momentum Line
      const salesCtx = document.getElementById('salesLine');
      if (salesCtx) {
        new Chart(salesCtx, {
          type: 'line',
          data: {
            labels: ['S-8','S-7','S-6','S-5','S-4','S-3','S-2','S-1'],
            datasets: [{
              data: [112, 118, 109, 123, 129, 131, 136, 138],
              borderColor: blue,
              backgroundColor: 'rgba(59,130,246,0.08)',
              fill: true,
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 0
            }]
          },
          options: {
            plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
            scales: {
              x: { grid: { display: false }, ticks: { display: false } },
              y: { grid: { color: gray }, ticks: { display: false } }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // Coverage Doughnut
      const coverCtx = document.getElementById('coverageDoughnut');
      if (coverCtx) {
        new Chart(coverCtx, {
          type: 'doughnut',
          data: {
            labels: ['Buena','Ajustada','Crítica'],
            datasets: [{
              data: [64,24,12],
              backgroundColor: ['#22C55E','#F59E0B','#EF4444'],
              borderWidth: 0
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            cutout: '68%',
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // IQI Bar
      const iqiCtx = document.getElementById('iqiBar');
      if (iqiCtx) {
        new Chart(iqiCtx, {
          type: 'bar',
          data: {
            labels: ['Antigüedad','Agotamientos','Exceso','Pronóstico'],
            datasets: [{
              data: [18, 22, 16, 15],
              backgroundColor: blue,
              borderRadius: 6,
              maxBarThickness: 18
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6B7280', font: { size: 10 } }},
              y: { grid: { color: gray }, ticks: { display: false }, suggestedMax: 28 }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // SLA Bar (Operations)
      const slaCtx = document.getElementById('slaBar');
      if (slaCtx) {
        new Chart(slaCtx, {
          type: 'bar',
          data: {
            labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
            datasets: [{
              data: [93, 95, 92, 94, 96, 91, 95],
              backgroundColor: blue,
              borderRadius: 6,
              maxBarThickness: 18
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6B7280', font: { size: 10 } }},
              y: { grid: { color: gray }, ticks: { display: false }, suggestedMax: 100 }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // Forecast Line (Planning)
      const forecastCtx = document.getElementById('forecastLine');
      if (forecastCtx) {
        new Chart(forecastCtx, {
          type: 'line',
          data: {
            labels: ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12'],
            datasets: [
              {
                label: 'Pronóstico',
                data: [120,122,125,130,128,132,135,138,140,142,145,147],
                borderColor: blue,
                backgroundColor: 'rgba(59,130,246,0.08)',
                fill: true,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 0
              },
              {
                label: 'Real',
                data: [118,121,123,129,127,130,134,0,0,0,0,0],
                borderColor: '#64748B',
                tension: 0.35,
                borderWidth: 1.5,
                pointRadius: 0
              }
            ]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }},
              y: { grid: { color: gray }, ticks: { display: false } }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // Capacity Bar (Planning)
      const capCtx = document.getElementById('capacityBar');
      if (capCtx) {
        new Chart(capCtx, {
          type: 'bar',
          data: {
            labels: ['CD', 'Picking', 'Packing', 'Clasif.', 'Carga'],
            datasets: [{
              data: [78, 84, 72, 69, 74],
              backgroundColor: blue,
              borderRadius: 6,
              maxBarThickness: 18
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6B7280', font: { size: 10 } }},
              y: { grid: { color: gray }, ticks: { display: false }, suggestedMax: 100 }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }

      // Cost Doughnut (Sourcing)
      const costCtx = document.getElementById('costDoughnut');
      if (costCtx) {
        new Chart(costCtx, {
          type: 'doughnut',
          data: {
            labels: ['Unidad','Flete','Aranceles','Otros'],
            datasets: [{
              data: [68,22,8,2],
              backgroundColor: ['#3B82F6','#60A5FA','#93C5FD','#BFDBFE'],
              borderWidth: 0
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            cutout: '68%',
            responsive: true,
            maintainAspectRatio: false
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
      

<div className="flex min-h-screen">

<aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col border-r border-gray-200">
<div className="flex items-center gap-3 px-5 h-16">
<div className="h-8 w-8 rounded-md bg-blue-500 text-white grid place-content-center shadow-sm">
<i data-lucide="boxes"></i>
</div>
<div className="leading-tight">
<p className="text-sm" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>InventAgent</p>
<p className="text-xs text-gray-500">Inventario</p>
</div>
</div>
<nav className="px-3 py-4 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 shadow-sm bg-gray-50" href="#">
<i className="text-blue-500" data-lucide="layout-dashboard"></i>
<span className="text-sm">Panel</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#">
<i data-lucide="activity"></i>
<span className="text-sm">Operaciones</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#">
<i data-lucide="line-chart"></i>
<span className="text-sm">Planificación</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#">
<i data-lucide="truck"></i>
<span className="text-sm">Adquisiciones</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#">
<i data-lucide="bot"></i>
<span className="text-sm">Agente</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50" href="#">
<i data-lucide="settings"></i>
<span className="text-sm">Configuración</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="p-3 rounded-lg border border-gray-200 shadow-sm">
<p className="text-xs text-gray-700">Estado del sistema</p>
<div className="mt-2 flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-gray-600">Todos los servicios operativos</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="h-16 border-b border-gray-200">
<div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<div className="hidden sm:flex items-center gap-3 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#">Panel</a>
<span className="text-gray-300">/</span>
<span className="text-gray-900">Centro de Inteligencia de Inventario</span>
</div>
<div className="flex-1 sm:max-w-xl mx-4">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm bg-white" placeholder="Buscar productos, OPs, proveedores…" type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 text-sm">
<i className="text-blue-500" data-lucide="plus"></i>
                Nuevo
              </button>
<button className="p-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50">
<i data-lucide="bell"></i>
</button>
<img alt="Usuario" className="h-8 w-8 rounded-full border border-gray-200 shadow-sm object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 relative z-0">
<div className="pointer-events-none absolute inset-x-0 -top-4 h-20 bg-gradient-to-r from-blue-100/60 via-blue-50/20 to-transparent blur-2xl rounded-2xl -z-10"></div>
<div>
<h1 className="tracking-tight text-4xl" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>
                Centro de Inteligencia de Inventario
              </h1>
<p className="mt-1 text-sm text-gray-600 max-w-2xl">
                Vista clara, en tiempo real, entre oferta y demanda. Alertas y acciones sencillas para dueños y equipos.
              </p>

<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-red-50 text-red-700 border border-red-100">
                  3 alertas críticas
                </span>
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
                  6 tareas pendientes
                </span>
<span className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                  4 pedidos en camino
                </span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="p-1 rounded-lg border border-gray-200 shadow-sm bg-white">
<button className="px-2.5 py-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 text-xs" data-view="all">
                  Todo
                </button>
<button className="px-2.5 py-1.5 rounded-md hover:bg-gray-50 text-xs" data-view="attention">
                  Necesita atención
                </button>
</div>
<button className="px-3 py-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 text-sm" title="Descargar CSV/PDF">
<i className="mr-1 inline-block" data-lucide="download"></i>
                Exportar
              </button>
<button className="px-3 py-2 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600 text-sm ring-1 ring-blue-300" title="Recalcular señales">
<i className="mr-1 inline-block" data-lucide="flashlight"></i>
                Ejecutar Escaneo
              </button>
</div>
</div>

<div className="mt-4 overflow-x-auto" data-location-tabs="">
<div className="inline-flex items-center gap-2 p-1 rounded-lg border border-gray-200 shadow-sm bg-white">
<button className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 text-sm" data-location="guatemala">
                Zona 5 — Guatemala City
              </button>
<button className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-sm" data-location="houston">
                Houston — Texas
              </button>
</div>
</div>

<div className="mt-6 overflow-x-auto">
<div className="inline-flex items-center gap-2 p-1 rounded-lg border border-gray-200 shadow-sm bg-white">
<button className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 text-sm" data-tab="overview">
                Resumen
              </button>
<button className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-sm" data-tab="operations">
                Operaciones
              </button>
<button className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-sm" data-tab="planning">
                Planificación
              </button>
<button className="px-3 py-1.5 rounded-md hover:bg-gray-50 text-sm" data-tab="sourcing">
                Abastecimiento
              </button>
</div>
</div>

<div className="mt-6 space-y-6" data-tab-panel="overview">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white" data-attention="ok">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-600 uppercase">Nivel de Servicio
                    <i className="inline h-3.5 w-3.5 text-gray-400 ml-1" data-lucide="help-circle" title="Pedidos entregados a tiempo"></i>
</p>
<i className="text-blue-500" data-lucide="gauge"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-2xl tracking-tight" style={{fontFamily: '\'Geist Mono\', \'Geist Sans\', system-ui'}}>97.4%</p>
<span className="text-xs text-green-600">+0.8%</span>
</div>
<p className="text-xs text-gray-500 mt-1">Últimos 14 días</p>
</div>
<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white" data-attention="risk">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-600 uppercase">Riesgo de agotamiento
                    <i className="inline h-3.5 w-3.5 text-gray-400 ml-1" data-lucide="help-circle" title="SKUs que pueden quedarse sin stock en 7 días"></i>
</p>
<i className="text-blue-500" data-lucide="alert-triangle"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-2xl tracking-tight" style={{fontFamily: '\'Geist Mono\', \'Geist Sans\', system-ui'}}>42 SKUs</p>
<span className="text-xs text-amber-600">-15%</span>
</div>
<p className="text-xs text-gray-500 mt-1">Próximos 7 días</p>
</div>
<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white" data-attention="risk">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-600 uppercase">Inventario excedido
                    <i className="inline h-3.5 w-3.5 text-gray-400 ml-1" data-lucide="help-circle" title="Capital inmovilizado por sobrestock"></i>
</p>
<i className="text-blue-500" data-lucide="layers"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-2xl tracking-tight" style={{fontFamily: '\'Geist Mono\', \'Geist Sans\', system-ui'}}>$1.8M</p>
<span className="text-xs text-red-600">+3%</span>
</div>
<p className="text-xs text-gray-500 mt-1">Costo de mantenimiento ajustado</p>
</div>
<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white" data-attention="risk">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-600 uppercase">Riesgo ETA en OP abierta</p>
<i className="text-blue-500" data-lucide="clock"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-2xl tracking-tight" style={{fontFamily: '\'Geist Mono\', \'Geist Sans\', system-ui'}}>28</p>
<span className="text-xs text-amber-600">+4</span>
</div>
<p className="text-xs text-gray-500 mt-1">En 6 proveedores</p>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Pulso de Operaciones</h2>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver todo</button>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 p-3 rounded-md border border-gray-200" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="package-search"></i>
</div>
<div className="flex-1">
<p className="text-sm">Pico de demanda en SKU-1142</p>
<p className="text-xs text-gray-600 mt-0.5">+36% Vs. semana pasada. Punto de reorden se romperá en 5 días.</p>
</div>
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Simular</button>
</li>
<li className="flex items-start gap-3 p-3 rounded-md border border-gray-200" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="truck"></i>
</div>
<div className="flex-1">
<p className="text-sm">Desviación ETA en OP-00988</p>
<p className="text-xs text-gray-600 mt-0.5">Retraso del transportista: +3 días. Recomendado envío parcial.</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Abrir OP</button>
</li>
<li className="flex items-start gap-3 p-3 rounded-md border border-gray-200" data-attention="ok">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="scissors"></i>
</div>
<div className="flex-1">
<p className="text-sm">Canibalización de paquetes observada</p>
<p className="text-xs text-gray-600 mt-0.5">3 SKUs. Ajustar precio -4% para estabilizar.</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Detalles</button>
</li>
</ul>
<div className="mt-3 text-[11px] text-gray-500">
                      Consejo: use “Necesita atención” para ver sólo lo urgente.
                    </div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Impulso de Ventas</h3>
<p className="text-xs text-gray-500">Últimas 8 semanas</p>
<div className="mt-3">
<div className="rounded-md border border-gray-200 p-2">
<div className="relative h-36">
<canvas className="w-full h-full" id="salesLine"></canvas>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-gray-600">Prom. +7.2%</span>
<span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100">Estable</span>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Mesa de Adquisiciones</h2>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver todo</button>
</div>
<div className="mt-4 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-600">
<tr className="border-b border-gray-200">
<th className="text-left py-2 pr-4">Producto</th>
<th className="text-left py-2 pr-4">Proveedor</th>
<th className="text-left py-2 pr-4">Estado</th>
<th className="text-left py-2 pr-4">ETA</th>
<th className="text-left py-2">Acción</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-200" data-attention="risk">
<td className="py-3 pr-4">SKU-1142</td>
<td className="py-3 pr-4">Nova Supply</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">En riesgo</span>
</td>
<td className="py-3 pr-4">24 Mar</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Dividir OP</button>
</td>
</tr>
<tr className="border-b border-gray-200" data-attention="ok">
<td className="py-3 pr-4">SKU-2230</td>
<td className="py-3 pr-4">Altura</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-100">En curso</span>
</td>
<td className="py-3 pr-4">19 Mar</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver</button>
</td>
</tr>
<tr data-attention="risk">
<td className="py-3 pr-4">SKU-9911</td>
<td className="py-3 pr-4">Axis Intl.</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-100">Retrasado</span>
</td>
<td className="py-3 pr-4">28 Mar</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Acelerar</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<i data-lucide="bot"></i>
</div>
<div>
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Asistente de Agente</h2>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-[11px] text-gray-500">En línea • <span className="text-gray-600">Inventario</span></span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Historial</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Configuración</button>
</div>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-xs">Borrador de OP para SKU-1142</button>
<button className="px-2.5 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-xs">Simular envío dividido</button>
<button className="px-2.5 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-xs">Ver causas de agotamiento</button>
<button className="px-2.5 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-xs">Recomendar cambios de precio</button>
</div>

<div className="mt-4 rounded-md border border-gray-200 bg-gray-50">
<div className="h-64 overflow-y-auto p-3 space-y-4">
<div className="space-y-3" data-location-panel="guatemala">
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="trending-up"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Vendiendo rápido:</span> Antigua Tostado Medio 340g</p>
<p className="text-xs text-gray-600 mt-0.5">+26% Vs. semana • Zona 5 • Días de inventario: 5</p>
</div>
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Reordenar +220</button>
</div>
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="ok">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="trending-down"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Movimiento lento:</span> Descafeinado 1kg</p>
<p className="text-xs text-gray-600 mt-0.5">-18% Mensual • Sugerir 10% promo o bundle</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Crear Promo</button>
</div>
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="ok">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="handshake"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Proveedor potencial:</span> Finca El Injerto</p>
<p className="text-xs text-gray-600 mt-0.5">Lavado • SCA 84 • Lead 7d • MOQ 15kg</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver Proveedor</button>
</div>
</div>
<div className="space-y-3" data-location-panel="houston">
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="trending-up"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Vendiendo rápido:</span> Concentrado Cold Brew 1L</p>
<p className="text-xs text-gray-600 mt-0.5">+31% Vs. semana • Houston • Días de inventario: 4</p>
</div>
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Reordenar +180</button>
</div>
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="ok">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="trending-down"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Movimiento lento:</span> Tostado Oscuro 5lb</p>
<p className="text-xs text-gray-600 mt-0.5">-12% • Sugerir -$1 o bundle con molino</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Crear Bundle</button>
</div>
<div className="flex items-start gap-3 p-3 rounded-md border border-gray-200 bg-white" data-attention="ok">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="handshake"></i>
</div>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Proveedor potencial:</span> Greenway Coffee (TX)</p>
<p className="text-xs text-gray-600 mt-0.5">Local • Lead 2d • MOQ 10kg • Flete $0 (pickup)</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver Proveedor</button>
</div>
</div>
</div>

<div className="border-t border-gray-200 bg-white p-2">
<div className="flex items-end gap-2">
<button className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
<i data-lucide="paperclip"></i>
</button>
<div className="flex-1">
<textarea className="w-full resize-none px-3 py-2 rounded-md border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm" placeholder="Escribe un mensaje, usa @ para referenciar SKUs, OPs o proveedores…" rows="1"></textarea>
</div>
<button className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
<i data-lucide="mic"></i>
</button>
<button className="px-3 py-2 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">
<i data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Cobertura de Reabastecimiento</h3>
<p className="text-xs text-gray-500">Pronóstico de días en mano</p>
<div className="mt-3">
<div className="rounded-md border border-gray-200 p-2">
<div className="relative h-44">
<canvas className="w-full h-full" id="coverageDoughnut"></canvas>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-gray-600">Buena: 64%</span>
<span className="text-amber-700">Ajustada: 24%</span>
<span className="text-red-700">Crítica: 12%</span>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Últimas Perspectivas</h3>
<ul className="mt-3 space-y-3">
<li className="flex gap-3">
<img alt="Analista" className="h-8 w-8 rounded-full border border-gray-200 shadow-sm object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm">Actualizada la elasticidad de precios para Categoría A</p>
<p className="text-xs text-gray-600">Nuevo rango óptimo mejora conversión +3–5%.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<i data-lucide="sparkle"></i>
</div>
<div className="flex-1">
<p className="text-sm">Modelo de pronóstico reentrenado</p>
<p className="text-xs text-gray-600">MAPE bajó de 18.3% a 15.9%.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<i data-lucide="shield-check"></i>
</div>
<div className="flex-1">
<p className="text-sm">Liberada retención de cumplimiento en 2 OPs</p>
<p className="text-xs text-gray-600">OP-00970, OP-00974 liberadas.</p>
</div>
</li>
</ul>
<p className="text-[11px] text-gray-500 mt-3">Actualizado hace 12m</p>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Índice de Calidad de Inventario</h3>
<div className="mt-3">
<div className="rounded-md border border-gray-200 p-2">
<div className="relative h-28">
<canvas className="w-full h-full" id="iqiBar"></canvas>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-gray-600">Objetivo ≥ 74</span>
<span className="text-blue-600">Actual 71</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-6 hidden" data-tab-panel="operations">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Pulso de Operaciones</h2>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Hoy</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">7d</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">30d</button>
</div>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 p-3 rounded-md border border-gray-200" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="triangle-alert"></i>
</div>
<div className="flex-1">
<p className="text-sm">Riesgo de SLA en CD3</p>
<p className="text-xs text-gray-600 mt-0.5">Backlog +14%. Recomendar turno extra 2 turnos.</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Mitigar</button>
</li>
<li className="flex items-start gap-3 p-3 rounded-md border border-gray-200" data-attention="risk">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-600 grid place-content-center">
<i data-lucide="truck"></i>
</div>
<div className="flex-1">
<p className="text-sm">Congestión de inbound en Muelle 2</p>
<p className="text-xs text-gray-600 mt-0.5">Dwell +27 min. Escalonar 4 llegadas +1 hr.</p>
</div>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Reprogramar</button>
</li>
</ul>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h3 className="text-sm text-gray-700">Cola de Incidentes</h3>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Exportar</button>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-600">
<tr className="border-b border-gray-200">
<th className="text-left py-2 pr-4">Incidente</th>
<th className="text-left py-2 pr-4">Severidad</th>
<th className="text-left py-2 pr-4">Owner</th>
<th className="text-left py-2 pr-4">ETA</th>
<th className="text-left py-2">Acción</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-200" data-attention="risk">
<td className="py-3 pr-4">OP-00988 Desvío</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Alta</span>
</td>
<td className="py-3 pr-4">Ops-NA</td>
<td className="py-3 pr-4">+3d</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Abrir</button>
</td>
</tr>
<tr data-attention="risk">
<td className="py-3 pr-4">CD3 Riesgo SLA</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-100">Crítica</span>
</td>
<td className="py-3 pr-4">Ops-EU</td>
<td className="py-3 pr-4">Ahora</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Asignar</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">
<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<i data-lucide="globe"></i>
</div>
<h3 className="text-sm text-gray-700">Mapa de Calor</h3>
</div>
<span className="text-xs text-gray-500">Incidentes por zona</span>
</div>
<div className="mt-3 rounded-md border border-gray-200 p-2 bg-white">
<div className="relative h-56">
<img alt="Mapa" className="absolute inset-0 w-full h-full object-contain opacity-90 select-none pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"/>
<div className="absolute left-[26%] top-[42%] -translate-x-1/2 -translate-y-1/2">
<span className="block h-16 w-16 rounded-full bg-red-500/30 blur-lg"></span>
<span className="absolute inset-2 rounded-full bg-red-500/30 blur"></span>
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>
</div>
<div className="absolute left-[24%] top-[34%] -translate-x-1/2 -translate-y-1/2">
<span className="block h-12 w-12 rounded-full bg-amber-500/30 blur-md"></span>
<span className="absolute inset-2 rounded-full bg-amber-500/30 blur-sm"></span>
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-white"></span>
</div>
<div className="absolute left-[54%] top-[28%] -translate-x-1/2 -translate-y-1/2">
<span className="block h-10 w-10 rounded-full bg-blue-500/30 blur"></span>
<span className="absolute inset-2 rounded-full bg-blue-500/30 blur-sm"></span>
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white"></span>
</div>
<div className="absolute left-[71%] top-[38%] -translate-x-1/2 -translate-y-1/2">
<span className="block h-10 w-10 rounded-full bg-amber-500/30 blur"></span>
<span className="absolute inset-2 rounded-full bg-amber-500/30 blur-sm"></span>
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-white"></span>
</div>
</div>
<div className="mt-3 flex items-center gap-4">
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-xs text-gray-600">Alta</span>
</div>
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<span className="text-xs text-gray-600">Media</span>
</div>
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-gray-600">Baja</span>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h3 className="text-sm text-gray-700">SLA de Cumplimiento</h3>
<span className="text-xs text-gray-500">Últimos 7 días</span>
</div>
<div className="mt-3 rounded-md border border-gray-200 p-2">
<div className="relative h-36">
<canvas className="w-full h-full" id="slaBar"></canvas>
</div>
</div>
<div className="mt-2 text-xs text-gray-600">A tiempo: 94.1% • Objetivo: 95%</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Acciones Rápidas</h3>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="split"></i>
                      Dividir Envío
                    </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="file-pen-line"></i>
                      Crear Ticket
                    </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="badge-check"></i>
                      Aprobar OP
                    </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="archive-restore"></i>
                      Reponer
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-6 hidden" data-tab-panel="planning">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Pronóstico de Demanda</h2>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Semanal</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Mensual</button>
</div>
</div>
<div className="mt-3 rounded-md border border-gray-200 p-2">
<div className="relative h-64">
<canvas className="w-full h-full" id="forecastLine"></canvas>
</div>
</div>
<div className="mt-2 text-xs text-gray-600">MAPE: 15.9% • Tendencia: +3.2%</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h3 className="text-sm text-gray-700">Recomendaciones de Reorden</h3>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Exportar</button>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-600">
<tr className="border-b border-gray-200">
<th className="text-left py-2 pr-4">SKU</th>
<th className="text-left py-2 pr-4">Región</th>
<th className="text-left py-2 pr-4">Cant.</th>
<th className="text-left py-2 pr-4">Motivo</th>
<th className="text-left py-2">Acción</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-200" data-attention="risk">
<td className="py-3 pr-4">SKU-1142</td>
<td className="py-3 pr-4">US-Este</td>
<td className="py-3 pr-4">+450</td>
<td className="py-3 pr-4">Pico de demanda</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Crear Borrador</button>
</td>
</tr>
<tr data-attention="ok">
<td className="py-3 pr-4">SKU-3320</td>
<td className="py-3 pr-4">EU-Oeste</td>
<td className="py-3 pr-4">+120</td>
<td className="py-3 pr-4Estacionalidad&lt;/td&gt; &lt;td class=" py-3"="">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Simular</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Utilización del Plan de Capacidad</h3>
<div className="mt-3 rounded-md border border-gray-200 p-2">
<div className="relative h-36">
<canvas className="w-full h-full" id="capacityBar"></canvas>
</div>
</div>
<div className="mt-2 text-xs text-gray-600">CD: 78% • Picking: 84% • Packing: 72%</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Acciones de Planificación</h3>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="wand-2"></i>
                      Optimizar Stock de Seguridad
                    </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="git-branch"></i>
                      Escenario: Promoción
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-6 hidden" data-tab-panel="sourcing">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight" style={{fontFamily: '\'Geist\', \'Geist Sans\', system-ui'}}>Mesa de Adquisiciones</h2>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Todas</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">En riesgo</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Retrasadas</button>
</div>
</div>
<div className="mt-4 overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-600">
<tr className="border-b border-gray-200">
<th className="text-left py-2 pr-4">OP</th>
<th className="text-left py-2 pr-4">Proveedor</th>
<th className="text-left py-2 pr-4">Estado</th>
<th className="text-left py-2 pr-4">ETA</th>
<th className="text-left py-2">Acción</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-200" data-attention="risk">
<td className="py-3 pr-4">OP-01011</td>
<td className="py-3 pr-4">Nova Supply</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">En riesgo</span>
</td>
<td className="py-3 pr-4">29 Mar</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md bg-blue-500 text-white shadow-sm hover:bg-blue-600">Negociar</button>
</td>
</tr>
<tr data-attention="risk">
<td className="py-3 pr-4">OP-00999</td>
<td className="py-3 pr-4">Axis Intl.</td>
<td className="py-3 pr-4">
<span className="text-xs px-2 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-100">Retrasada</span>
</td>
<td className="py-3 pr-4">02 Abr</td>
<td className="py-3">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Ver</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<div className="flex items-center justify-between">
<h3 className="text-sm text-gray-700">Scorecards de Proveedores</h3>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Exportar</button>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-3 rounded-md border border-gray-200" data-attention="ok">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<span className="text-[10px] font-medium" style={{letterSpacing: '-0.02em'}}>NS</span>
</div>
<p className="text-sm">Nova Supply</p>
</div>
<span className="text-xs px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-100">A-</span>
</div>
<div className="mt-2 grid grid-cols-3 text-xs text-gray-600">
<div>OTIF: <span className="text-gray-900">95%</span></div>
<div>Var. Lead: <span className="text-gray-900">+0.6d</span></div>
<div>Defecto: <span className="text-gray-900">0.7%</span></div>
</div>
</div>
<div className="p-3 rounded-md border border-gray-200" data-attention="risk">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-blue-50 text-blue-600 grid place-content-center border border-blue-100">
<span className="text-[10px] font-medium" style={{letterSpacing: '-0.02em'}}>AX</span>
</div>
<p className="text-sm">Axis Intl.</p>
</div>
<span className="text-xs px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">B</span>
</div>
<div className="mt-2 grid grid-cols-3 text-xs text-gray-600">
<div>OTIF: <span className="text-gray-900">88%</span></div>
<div>Var. Lead: <span className="text-gray-900">+1.9d</span></div>
<div>Defecto: <span className="text-gray-900">1.4%</span></div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Desglose de Costo Puesto en Planta</h3>
<div className="mt-3 rounded-md border border-gray-200 p-2">
<div className="relative h-36">
<canvas className="w-full h-full" id="costDoughnut"></canvas>
</div>
</div>
<div className="mt-2 text-xs text-gray-600">Unidad: $12.40 • Flete: 22% • Aranceles: 8%</div>
</div>

<div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
<h3 className="text-sm text-gray-700">Acciones de Abastecimiento</h3>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="handshake"></i>
                      Negociar Términos
                    </button>
<button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
<i data-lucide="globe"></i>
                      Buscar Proveedor Alt.
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
<p>© 2025 Inteligencia de Inventario. Todos los derechos reservados.</p>
</div>
</section>
</main>
</div>


    </>
  );
}
