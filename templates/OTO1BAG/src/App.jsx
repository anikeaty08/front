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



      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons();
        }

        // Chart.js: Ventas por hora
        const ctx = document.getElementById('chart-ventas');
        if (ctx) {
          const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, 'rgba(34,211,238,0.5)');    // cyan-400
          gradient.addColorStop(1, 'rgba(34,211,238,0.05)');

          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['20h', '21h', '22h', '23h', '00h', '01h'],
              datasets: [{
                label: 'Ventas',
                data: [420, 680, 940, 1280, 1100, 760],
                backgroundColor: gradient,
                borderColor: 'rgba(34,211,238,0.8)',
                borderWidth: 1.5,
                borderRadius: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(10,15,23,0.9)',
                  titleColor: '#fff',
                  bodyColor: '#cbd5e1',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 1,
                  displayColors: false
                }
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } },
                  suggestedMax: 1400,
                  beginAtZero: true
                }
              }
            }
          });
        }
      });
    
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
      

<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,148,255,0.18) 0%, rgba(0,255,199,0.12) 45%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,255,199,0.14) 0%, rgba(0,148,255,0.12) 45%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0a0f17]/70 bg-[#0a0f17]/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-lg font-semibold tracking-tight text-white">P</span>
</div>
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">Payper</span>
<span className="ml-3 hidden sm:inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300/90">Online &amp; Offline</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#como-funciona">Cómo funciona</a>
<a className="hover:text-white transition-colors" href="#modulos">Módulos</a>
<a className="hover:text-white transition-colors" href="#beneficios">Beneficios</a>
<a className="hover:text-white transition-colors" href="#caso">Caso de uso</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all" href="#cta">Contacto</a>
<a className="inline-flex items-center gap-2 rounded-md bg-cyan-500/90 px-3.5 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-cyan-400/50 hover:ring-cyan-300 hover:bg-cyan-400 transition-all hover:-translate-y-0.5" href="#demo">Solicitar demo <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</header>

<section className="relative" id="hero">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-16 sm:py-20">
<div className="lg:col-span-6 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-xs text-white/70 mb-4">
<i className="w-4 h-4 text-emerald-300/90" data-lucide="signal" strokeWidth="1.5"></i>
              Funciona en modo online y offline
            </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              La plataforma todo-en-uno para gestionar bares, clubs y eventos
            </h1>
<p className="mt-4 text-base sm:text-lg text-white/70">
              Pedidos, stock, pagos offline y analytics en una sola app.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-cyan-300 hover:bg-cyan-400 hover:ring-cyan-200 transition-all hover:-translate-y-0.5" href="#cta" id="demo">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                Solicitar demo
              </a>
<a className="inline-flex justify-center items-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all" href="#modulos">
                Ver módulos
                <i className="w-4 h-4" data-lucide="layout-grid" strokeWidth="1.5"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.05] transition-colors">
<div className="h-8 w-8 rounded-md bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-300" data-lucide="nfc" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-white/80">Pagos NFC</p>
<p className="text-xs text-white/50">Tap &amp; go, incluso offline</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:bg-white/[0.05] transition-colors">
<div className="h-8 w-8 rounded-md bg-cyan-400/10 ring-1 ring-cyan-300/20 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-300" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-white/80">Analytics en vivo</p>
<p className="text-xs text-white/50">Ventas, consumo y cashflow</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-6 rounded-2xl opacity-60 blur-2xl" style={{background: 'radial-gradient(80% 80% at 50% 20%, rgba(0,255,199,0.10) 0%, rgba(0,148,255,0.12) 40%, rgba(0,0,0,0) 70%)'}}></div>
<div className="relative grid grid-cols-12 gap-4">

<div className="col-span-7">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 ring-1 ring-white/10 hover:ring-cyan-400/30 transition-all hover:-translate-y-1">
<div className="rounded-xl overflow-hidden aspect-[9/18] bg-black/60 flex items-center justify-center">
<img alt="App móvil en uso" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-white/70">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-cyan-300" data-lucide="smartphone" strokeWidth="1.5"></i> App Móvil</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-300" data-lucide="wifi-off" strokeWidth="1.5"></i> Offline Ready</span>
</div>
</div>
</div>

<div className="col-span-5">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-all hover:-translate-y-1">
<div className="rounded-xl overflow-hidden aspect-[9/12] bg-black/60 flex items-center justify-center">
<img alt="POS en barra" className="h-full w-full object-cover opacity-85" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-white/70">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-300" data-lucide="credit-card" strokeWidth="1.5"></i> POS</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-cyan-300" data-lucide="badge-dollar-sign" strokeWidth="1.5"></i> Pagos</span>
</div>
</div>
</div>

<div className="col-span-12">
<div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.02] p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="contactless-payment" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<p className="text-sm text-white/85">Tap para pagar</p>
<p className="text-xs text-white/55">Tarjetas y pulseras NFC con recargas instantáneas</p>
</div>
<img alt="Tarjeta NFC" className="h-16 w-28 object-cover rounded-md ring-1 ring-white/10" src="https://images.unsplash.com/photo-1601972602225-6f53ce2202a0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-white/60">
                Mockup ilustrativo: móvil + POS + NFC integrados en una sola plataforma.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Cómo funciona</h2>
<p className="mt-2 text-white/70">Flujo simple de compra en un evento: del QR al insight.</p>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300/90">
<i className="w-4 h-4" data-lucide="cloud-off" strokeWidth="1.5"></i> Operación continua: online y offline
          </div>
</div>
<div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

<div className="flex-1">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-cyan-300" data-lucide="qr-code" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-white/80">QR</span>
<i className="w-4 h-4 text-white/40" data-lucide="arrow-right" strokeWidth="1.5"></i>
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-cyan-300" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-white/80">Pedido</span>
<i className="w-4 h-4 text-white/40" data-lucide="arrow-right" strokeWidth="1.5"></i>
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-white/80">Confirmación Staff</span>
<i className="w-4 h-4 text-white/40" data-lucide="arrow-right" strokeWidth="1.5"></i>
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-cyan-300" data-lucide="glass-water" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-white/80">Consumo</span>
<i className="w-4 h-4 text-white/40" data-lucide="arrow-right" strokeWidth="1.5"></i>
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="chart-line" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-white/80">Analytics</span>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="w-4 h-4 text-cyan-300" data-lucide="badge-percent" strokeWidth="1.5"></i>
                    Campañas PR medibles por QR
                  </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="w-4 h-4 text-emerald-300" data-lucide="timer" strokeWidth="1.5"></i>
                    Confirmaciones en segundos
                  </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-xs text-white/70">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Sincronización segura cuando vuelve la red
                  </div>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Hoy</p>
<p className="text-sm font-medium text-white/90">Ventas por hora</p>
</div>
<div className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="activity" strokeWidth="1.5"></i> Live
                  </div>
</div>
<div className="mt-3 text-xs text-white/60">pico actual: 23:00</div>
<div className="mt-3">
<div className="relative rounded-lg bg-black/30 ring-1 ring-white/10 p-2">
<div className="h-40 w-full">
<div className="h-full w-full relative">
<div className="h-full w-full">
<div>
<div>
<div>
<div>
<div>

<div>
<canvas id="chart-ventas"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-white/60">
<span className="inline-flex items-center gap-1"><i className="w-3.5 h-3.5 text-cyan-300" data-lucide="wallet" strokeWidth="1.5"></i> AR$ 4.8M</span>
<span className="inline-flex items-center gap-1 text-emerald-300"><i className="w-3.5 h-3.5" data-lucide="trending-up" strokeWidth="1.5"></i> +14%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="modulos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Módulos principales</h2>
<p className="mt-2 text-white/70">Operá cada frente de tu venue desde una sola app, con visibilidad total.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-cyan-400/10 ring-1 ring-cyan-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">Clientes</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="ticket" strokeWidth="1.5"></i> Pedidos, pagos y transferencias en segundos</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="vip" strokeWidth="1.5"></i> Mesas VIP y cuentas compartidas</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="qrcode" strokeWidth="1.5"></i> Menús por QR por zona o mesa</li>
</ul>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">PRs</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="target" strokeWidth="1.5"></i> Campañas con tracking por QR</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="gift" strokeWidth="1.5"></i> Regalos, tokens y beneficios por conversión</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="chart-no-axes-combined" strokeWidth="1.5"></i> Medición de ROI por PR</li>
</ul>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-cyan-400/10 ring-1 ring-cyan-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="martini" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">Staff / Barman</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="scan-line" strokeWidth="1.5"></i> Confirmación rápida por escaneo</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="boxes" strokeWidth="1.5"></i> Stock en tiempo real por barra</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="hourglass" strokeWidth="1.5"></i> Pantallas de cola y tiempos</li>
</ul>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">Administrador</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="beaker" strokeWidth="1.5"></i> Recetas y costos</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="warehouse" strokeWidth="1.5"></i> Inventario y compras</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="line-chart" strokeWidth="1.5"></i> Analíticas y cashflow</li>
</ul>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-cyan-400/10 ring-1 ring-cyan-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="nfc" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">NFC &amp; Offline Mode</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="wifi-off" strokeWidth="1.5"></i> Pagos sin conexión y sincronización</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="zap" strokeWidth="1.5"></i> Recargas instantáneas</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="shield" strokeWidth="1.5"></i> Seguridad y antifraude</li>
</ul>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-all hover:ring-1 hover:ring-cyan-400/30">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight">Zonas y Mesas</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="rows-2" strokeWidth="1.5"></i> Menús por mesa o sector</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="scan" strokeWidth="1.5"></i> QR por ubicación</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="route" strokeWidth="1.5"></i> Reportes por área</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="beneficios">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Beneficios</h2>
<p className="mt-2 text-white/70">Diseñado para alta demanda, visibilidad total y reducción de tiempos muertos.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-300 mt-0.5" data-lucide="list-checks" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Menús dinámicos por mesa o sector</p>
<p className="text-sm text-white/60 mt-1">Personalizá precios, combos y disponibilidad por zona.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-300 mt-0.5" data-lucide="cube" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Control de stock y recetas en tiempo real</p>
<p className="text-sm text-white/60 mt-1">Alertas por quiebre, costos y merma en vivo.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-300 mt-0.5" data-lucide="contactless-payment" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Pagos NFC offline y recargas instantáneas</p>
<p className="text-sm text-white/60 mt-1">Operá sin conexión y sincronizá al recuperar red.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-300 mt-0.5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Métricas financieras y de consumo centralizadas</p>
<p className="text-sm text-white/60 mt-1">Visión de ventas, margen, mix y cashflow.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-300 mt-0.5" data-lucide="scan-search" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Optimización de campañas PR con QR tracking</p>
<p className="text-sm text-white/60 mt-1">Atribución precisa por PR y canal.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-300 mt-0.5" data-lucide="clock" strokeWidth="1.5"></i>
<div>
<p className="text-white/90">Menos espera, más ventas</p>
<p className="text-sm text-white/60 mt-1">Flujos optimizados para picos de demanda.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="caso">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Caso de uso</h2>
<div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-start gap-4">
<img alt="Testimonio" className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-lg text-white/90">“En nuestro evento de 5.000 personas, Payper permitió reducir tiempos de espera en 40% y mejorar el control de stock en cada barra.”</p>
<div className="mt-3 text-sm text-white/60">Director Operativo, XYZ Events</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-xl font-semibold tracking-tight text-white/90">-40%</div>
<div className="text-xs text-white/60">Espera</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-xl font-semibold tracking-tight text-white/90">+18%</div>
<div className="text-xs text-white/60">Ticket promedio</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-xl font-semibold tracking-tight text-white/90">99.9%</div>
<div className="text-xs text-white/60">Uptime</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-xl font-semibold tracking-tight text-white/90">-25%</div>
<div className="text-xs text-white/60">Merma</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1">
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 h-full">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-white/90">Compliance &amp; Seguridad</p>
<p className="text-xs text-white/60">Logs, roles y auditoría</p>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="key-round" strokeWidth="1.5"></i> RBAC por rol y barra</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="file-lock-2" strokeWidth="1.5"></i> Cifrado en tránsito</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-white/50" data-lucide="refresh-ccw" strokeWidth="1.5"></i> Sincronización resiliente</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="absolute inset-0 opacity-70" style={{background: 'radial-gradient(120% 80% at 10% 10%, rgba(0,148,255,0.12) 0%, rgba(0,255,199,0.10) 30%, rgba(0,0,0,0) 60%)'}}></div>
<div className="relative p-8 sm:p-12 lg:p-16">
<div className="max-w-3xl">
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Descubrí cómo transformar la operación de tu venue</h3>
<p className="mt-3 text-white/70">Te mostramos el flujo completo: pedidos, stock, pagos offline y analíticas en tiempo real adaptadas a tu operación.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-cyan-300 hover:bg-cyan-400 hover:ring-cyan-200 transition-all hover:-translate-y-0.5" href="mailto:hola@payper.app?subject=Solicitud%20de%20demo%20Payper">
<i className="w-4 h-4" data-lucide="calendar-plus" strokeWidth="1.5"></i>
                  Solicitá una demo personalizada
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white/85 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all" href="#modulos">
                  Ver funcionalidades
                  <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="relative border-t border-white/10 px-8 py-4 sm:px-12 flex items-center gap-4 text-xs text-white/60">
<i className="w-4 h-4 text-cyan-300" data-lucide="info" strokeWidth="1.5"></i>
            Implementación guiada, capacitación al staff y soporte durante eventos.
          </div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-white/70">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-white">P</span>
</div>
<span className="text-sm">Payper – Venue App System</span>
</div>
<div className="text-xs text-white/50">© 2025 Payper. Todos los derechos reservados.</div>
<div className="flex items-center gap-3 text-white/70">
<a className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-sm" href="mailto:hola@payper.app">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i> hola@payper.app
            </a>
<span className="h-4 w-px bg-white/10"></span>
<a className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-sm" href="#">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i> Términos
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
