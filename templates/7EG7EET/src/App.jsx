import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Dynamic year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js demo
      const ctx = document.getElementById('chart-performance');
      if (ctx) {
        const gradientBlue = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
        gradientBlue.addColorStop(0, 'rgba(59,130,246,0.25)');
        gradientBlue.addColorStop(1, 'rgba(59,130,246,0.02)');

        const gradientGreen = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
        gradientGreen.addColorStop(0, 'rgba(16,185,129,0.25)');
        gradientGreen.addColorStop(1, 'rgba(16,185,129,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [
              {
                label: 'Clicks',
                data: [420, 520, 610, 680, 760, 720, 810],
                borderColor: 'rgba(59,130,246,1)',
                backgroundColor: gradientBlue,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 2,
                fill: true
              },
              {
                label: 'Ventas',
                data: [18, 22, 25, 31, 34, 29, 38],
                borderColor: 'rgba(16,185,129,1)',
                backgroundColor: gradientGreen,
                tension: 0.35,
                borderWidth: 2,
                pointRadius: 2,
                yAxisID: 'y1',
                fill: true
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#0f172a',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                displayColors: false
              }
            },
            scales: {
              y: {
                grid: { color: 'rgba(15,23,42,0.08)', drawBorder: false },
                ticks: { color: '#475569' }
              },
              y1: {
                position: 'right',
                grid: { drawOnChartArea: false, drawTicks: false },
                ticks: { color: '#475569' }
              },
              x: {
                grid: { display: false },
                ticks: { color: '#64748b' }
              }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm font-medium select-none">LN</div>
<span className="text-slate-800 font-medium tracking-tight">Link Nube</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#problema">Problema</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#solucion">Solución</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#como-funciona">Cómo funciona</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#beneficios">Beneficios</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#testimonios">Testimonios</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-4 py-2 rounded-md border border-slate-300 text-slate-800 hover:bg-white hover:border-slate-400 transition-colors text-sm" href="#signup">Probá gratis ahora</a>
<a className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm shadow-sm" href="#signup">Sé una agencia fundadora</a>
</div>
<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300 hover:bg-white">

<svg className="h-5 w-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
<div className="absolute top-24 -left-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<p className="inline-flex items-center gap-2 text-xs text-slate-600 px-3 py-1.5 rounded-full border border-slate-300 bg-white w-fit">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Acceso temprano para marcas y agencias
            </p>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-slate-900">
              Transformá a tus creadores en vendedores directos
            </h1>
<p className="text-base sm:text-lg text-slate-600">
              Conectá tu Tienda Nube, generá links únicos por creador y medí clicks, ventas y comisiones en un panel simple. Del awareness al revenue, sin suposiciones.
            </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm" href="#signup">

<svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path>
</svg>
                Probá gratis ahora
              </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-300 bg-white text-slate-900 hover:border-slate-400 transition-colors" href="#signup">

<svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
                Sé una agencia fundadora
              </a>
</div>
<div className="flex items-center gap-4 pt-2">
<div className="flex -space-x-2">
<img alt="Founder 1" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Founder 2" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Founder 3" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-slate-600">Más de 20 equipos ya están midiendo ventas atribuidas.</p>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
<div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50/50">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<h3 className="text-sm font-medium tracking-tight text-slate-800">Ventas atribuidas por creador</h3>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600 px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Tiempo real</span>
</div>
</div>
<div className="p-5 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<p className="text-xs text-slate-500">Ingresos atribuidos</p>
<p className="mt-1 text-2xl tracking-tight font-semibold text-slate-900">$1.248.200</p>
<p className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                    +18% vs. mes anterior
                  </p>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<p className="text-xs text-slate-500">Tasa de conversión</p>
<p className="mt-1 text-2xl tracking-tight font-semibold text-slate-900">3,4%</p>
<p className="mt-2 text-xs text-slate-600">Clicks → compras</p>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<p className="text-xs text-slate-500">Comisión pagada</p>
<p className="mt-1 text-2xl tracking-tight font-semibold text-slate-900">$128.900</p>
<p className="mt-2 inline-flex items-center gap-1 text-xs text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V7a2 2 0 0 0-2-2H7"></path>
<path d="M3 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<path d="M16 12h4"></path>
</svg>
                    Pago automático
                  </p>
</div>
</div>
<div className="px-5 pb-5">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Performance semanal</p>
<p className="text-sm font-medium text-slate-800 tracking-tight">Clicks, ventas y AOV</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-slate-600 px-2 py-1 rounded border border-slate-200">
<span className="h-2 w-2 rounded-full bg-blue-500"></span> Clicks
                      </span>
<span className="inline-flex items-center gap-1 text-xs text-slate-600 px-2 py-1 rounded border border-slate-200">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span> Ventas
                      </span>
</div>
</div>
<div className="mt-3">
<div className="h-56 w-full relative">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="chart-performance"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
<div className="text-xs text-slate-600">Creador top: @mariafit</div>
<div className="text-xs text-slate-600">AOV atribuido: $6.150</div>
<div className="text-xs text-slate-600">CTR promedio: 4,8%</div>
<div className="text-xs text-slate-600">Devoluciones: 1,2%</div>
</div>
</div>
</div>
</div>
</div>
<span className="absolute -top-3 -right-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-600 text-white shadow-sm">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 1 0-7.07-7.07l-1.41 1.41"></path>
<path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07l1.41-1.41"></path>
</svg>
              Links únicos activos
            </span>
</div>
</div>
</div>
</section>

<section className="relative" id="problema">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-4">
<span className="text-xs text-slate-600 px-2 py-1 border border-slate-300 rounded bg-white">El problema</span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Las marcas invierten en creadores pero no saben qué ventas generan</h2>
<p className="text-slate-600">
              Sin una atribución clara, las decisiones se basan en impresiones y likes. El impacto real en ventas queda invisible y el presupuesto se reparte a ciegas.
            </p>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
<img alt="Creador con redes sociales" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1611162618071-b39a2ec2bc98?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/50 text-center">
<p className="text-xs text-slate-500">Likes</p>
<p className="text-lg font-medium tracking-tight text-slate-800">—</p>
</div>
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/50 text-center">
<p className="text-xs text-slate-500">Clicks</p>
<p className="text-lg font-medium tracking-tight text-slate-800">¿?</p>
</div>
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/50 text-center">
<p className="text-xs text-slate-500">Ventas</p>
<p className="text-lg font-medium tracking-tight text-slate-800">N/A</p>
</div>
</div>
<p className="mt-3 text-xs text-slate-600">Difícil conectar actividad social con compras reales.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="solucion">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
<div className="text-center max-w-3xl mx-auto">
<span className="text-xs text-slate-600 px-2 py-1 border border-slate-300 rounded bg-white">La solución</span>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Conectá tu Tienda Nube, asigná productos y generá links de afiliados únicos</h2>
<p className="mt-3 text-slate-600">Trackeo automático de clicks, ventas y comisiones. Un link por creador, atribución clara por venta.</p>
</div>
<div className="mt-10 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17L4.5 12.5a5 5 0 0 1 7.07-7.07L13 6"></path>
<path d="M15 7l4.5 4.5a5 5 0 0 1-7.07 7.07L11 18"></path>
</svg>
<p className="text-sm font-medium text-slate-800 tracking-tight">tu.marca/juan</p>
</div>
<p className="mt-2 text-xs text-slate-600">Link corto por creador</p>
</div>
<div className="hidden md:flex items-center justify-center">

<svg className="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
<p className="text-sm font-medium text-slate-800 tracking-tight">Carrito y compra</p>
</div>
<p className="mt-2 text-xs text-slate-600">Atribución por sesión</p>
</div>
<div className="hidden md:flex items-center justify-center">

<svg className="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<rect height="7" rx="1" width="2" x="7" y="10"></rect>
<rect height="11" rx="1" width="2" x="12" y="6"></rect>
<rect height="4" rx="1" width="2" x="17" y="13"></rect>
</svg>
<p className="text-sm font-medium text-slate-800 tracking-tight">Dashboard con ventas</p>
</div>
<p className="mt-2 text-xs text-slate-600">Clicks, ventas y comisiones</p>
</div>
</div>
</div>
</section>

<section className="relative" id="como-funciona">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Cómo funciona</h2>
<p className="mt-3 text-slate-600">Tres pasos simples para pasar del contenido a la venta.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-0.5 transition-transform">
<div className="h-10 w-10 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center">

<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 7V3"></path><path d="M15 7V3"></path><path d="M12 16v5"></path><rect height="9" rx="2" width="10" x="7" y="7"></rect></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-slate-900">Paso 1</h3>
<p className="mt-1 text-sm text-slate-600">La marca conecta su Tienda Nube en segundos.</p>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-0.5 transition-transform">
<div className="h-10 w-10 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center">

<svg className="h-5 w-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 1 0-7.07-7.07l-1.41 1.41"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07l1.41-1.41"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-slate-900">Paso 2</h3>
<p className="mt-1 text-sm text-slate-600">Los creadores reciben links de afiliados únicos.</p>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-0.5 transition-transform">
<div className="h-10 w-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V7l-3 1-3-1-3 1-3-1-3 1v14l3-1 3 1 3-1 3 1 3-1z"></path><path d="M8 10h8"></path><path d="M8 14h8"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-slate-900">Paso 3</h3>
<p className="mt-1 text-sm text-slate-600">Las ventas se registran y se calculan comisiones automáticamente.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="beneficios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
<div className="grid lg:grid-cols-2 gap-10">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M3 9h18"></path></svg>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Beneficios para marcas</h3>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">

<svg className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Medir ventas reales por creador.</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Aumentar facturación con marketing de performance.</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Panel simple, sin fricción.</span>
</li>
</ul>
<div className="mt-6 rounded-lg border border-slate-200 p-4 bg-slate-50/50">
<p className="text-xs text-slate-600">Ejemplo de link:</p>
<code className="text-sm text-slate-800">tu-marca.com/?ref=creador_maria</code>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Beneficios para creadores</h3>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-5 w-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Ganar comisión directa por cada venta.</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-5 w-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Dashboard personal con métricas.</span>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 h-5 w-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg>
<span className="text-slate-700">Fácil de compartir links.</span>
</li>
</ul>
<div className="mt-6 rounded-lg border border-slate-200 p-4 bg-slate-50/50">
<p className="text-xs text-slate-600">Vista rápida creador:</p>
<div className="mt-2 grid grid-cols-3 gap-3 text-center">
<div className="rounded border border-slate-200 p-2 bg-white">
<p className="text-[11px] text-slate-500">Clicks</p>
<p className="text-lg font-medium tracking-tight">2.341</p>
</div>
<div className="rounded border border-slate-200 p-2 bg-white">
<p className="text-[11px] text-slate-500">Ventas</p>
<p className="text-lg font-medium tracking-tight">124</p>
</div>
<div className="rounded border border-slate-200 p-2 bg-white">
<p className="text-[11px] text-slate-500">Comisión</p>
<p className="text-lg font-medium tracking-tight">$18.420</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="testimonios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Testimonios</h2>
<p className="mt-3 text-slate-600">Lo que dicen los primeros equipos en el programa de acceso temprano.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Agencia 1" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-slate-800">Lucía Romero</p>
<p className="text-xs text-slate-600">Directora, Agencia Loop</p>
</div>
</div>
<p className="mt-4 text-slate-700 text-sm">“Gracias a esta plataforma, pudimos medir qué creador realmente nos generaba ventas.”</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Marca 1" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-8ee9f1c4f1c2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-slate-800">Martín Pérez</p>
<p className="text-xs text-slate-600">E-commerce Lead, Nativa</p>
</div>
</div>
<p className="mt-4 text-slate-700 text-sm">“Pasamos de pagar por impresiones a pagar por ventas. El panel es clarísimo.”</p>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Creador 1" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-slate-800">@mariafit</p>
<p className="text-xs text-slate-600">Creadora de fitness</p>
</div>
</div>
<p className="mt-4 text-slate-700 text-sm">“Ahora veo mis ventas y comisiones en tiempo real. Compartir links es fácil.”</p>
</div>
</div>
</div>
</section>

<section className="relative" id="signup">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900">Sumate como agencia fundadora</h2>
<p className="mt-3 text-slate-600">Asegurá tu lugar y accedé a beneficios exclusivos durante el MVP: onboarding prioritario, feedback directo al roadmap y descuentos de por vida.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"></path><path d="M16 5l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path><path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"></path></svg>
                Cupos limitados para early adopters
              </li>
<li className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M15 9h.01"></path><path d="M9 15h.01"></path><path d="M8 16l8-8"></path></svg>
                Descuento fundador de por vida
              </li>
<li className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-6a9 9 0 1 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                Onboarding y soporte prioritario
              </li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<form className="space-y-4">
<div>
<label className="block text-xs text-slate-600 mb-1">Nombre de la marca o agencia</label>
<input className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="Ej: Estudio Nova / Tienda Alma" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-600 mb-1">Email de contacto</label>
<input className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="tu@empresa.com" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Rol</label>
<select className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 bg-white text-slate-900 text-sm">
<option>Agencia</option>
<option>Marca</option>
<option>Creador</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Mensaje (opcional)</label>
<textarea className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 bg-white text-slate-900 placeholder-slate-400 text-sm" placeholder="Contanos qué buscás lograr con afiliados..." rows="3"></textarea>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto" type="submit">

<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15l-3-3 8-8 3 3-8 8z"></path><path d="M15 6l3 3"></path><path d="M9 12H6l-3 3 3 3 3-3z"></path><path d="M5 18l-1 1"></path></svg>
                  Asegurar mi lugar
                </button>
<p className="text-xs text-slate-600">No se requiere tarjeta.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-xs font-medium">LN</div>
<span className="text-slate-700 text-sm">Link Nube — Afiliados para Tienda Nube</span>
</div>
<div className="text-xs text-slate-500">
          © <span id="year"></span> Link Nube. Compatible con Tienda Nube. Marcas y logos pertenecen a sus propietarios.
        </div>
</div>
</footer>


    </>
  );
}
