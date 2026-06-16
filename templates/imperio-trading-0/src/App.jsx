import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // Year
        const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

        // Chart.js doughnut for 50/25/25 split
        const ctx = document.getElementById('profitChart');
        if (ctx) {
          const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Inversor 50%', 'Nivel 1 25%', 'Nivel 2 25%'],
              datasets: [{
                data: [50, 25, 25],
                backgroundColor: ['#f59e0b', '#fde68a', '#ca8a04'],
                borderColor: ['rgba(255,255,255,0.08)','rgba(255,255,255,0.08)','rgba(255,255,255,0.08)'],
                borderWidth: 1,
                hoverOffset: 8
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              cutout: '62%',
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(17,17,17,0.9)',
                  titleColor: '#fff',
                  bodyColor: '#e5e7eb',
                  borderColor: 'rgba(255,255,255,0.08)',
                  borderWidth: 1,
                }
              }
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(234,179,8,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(245,158,11,0.06),transparent_60%)]"></div>

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-24 left-16 w-1 h-1 bg-amber-300/70 rounded-full blur-[1px] animate-pulse"></div>
<div className="absolute top-48 left-1/3 w-1 h-1 bg-amber-200/70 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '.6s'}}></div>
<div className="absolute top-12 right-24 w-1 h-1 bg-amber-400/60 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-24 right-1/4 w-1 h-1 bg-amber-300/70 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '1.4s'}}></div>
<div className="absolute bottom-10 left-1/4 w-1 h-1 bg-amber-200/70 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '1.8s'}}></div>
</div>
</div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#inicio">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_4px_24px_rgba(245,158,11,0.35)] flex items-center justify-center text-neutral-900 font-semibold tracking-tight">
            I
          </div>
<span className="text-xl sm:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">IMPERIO</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#inicio">Inicio</a>
<a className="hover:text-white transition-colors" href="#seminarios">Seminarios</a>
<a className="hover:text-white transition-colors" href="#clases">Clases en Vivo</a>
<a className="hover:text-white transition-colors" href="#ia">Inteligencia Artificial</a>
<a className="hover:text-white transition-colors" href="#copytrading">Copy Trading</a>
<a className="hover:text-white transition-colors" href="#referidos">Referidos</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-neutral-900 bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 ring-offset-0 shadow-[0_8px_24px_rgba(245,158,11,0.25)] border border-amber-300/60" href="#cta-final">Únete ahora</a>
<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 hover:border-amber-300/60 hover:text-amber-300">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main className="pt-20" id="inicio">

<section className="relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-yellow-500/10 to-amber-500/0 blur-3xl"></div>
<div className="absolute -bottom-32 -right-24 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-amber-400/10 to-yellow-500/0 blur-3xl"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 md:py-24">
<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Conquista los mercados. Domina el trading con
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">IMPERIO</span>.
              </h1>
<p className="mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
                Aprende de expertos, opera con inteligencia artificial y gana comisiones con nuestro sistema de referidos.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-neutral-900 bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 ring-offset-0 border border-amber-300/60 shadow-[0_10px_30px_rgba(245,158,11,0.3)]" href="#cta-final">
                  Comenzar ahora
                </a>
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white border border-amber-300/60 hover:border-amber-200/80 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-amber-300/50" href="#seminarios">
                  Ver seminarios
                </a>
</div>
<div className="mt-10 flex items-center gap-5 text-neutral-400">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-300" data-lucide="shield-check"></i>
<span className="text-sm">Formación verificada</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-5 h-5 text-amber-300" data-lucide="line-chart"></i>
<span className="text-sm">Estrategias cuantitativas</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 md:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-neutral-900 font-semibold">I</div>
<div>
<p className="text-sm text-neutral-200">Panel de Operaciones</p>
<p className="text-xs text-neutral-400">IA · Riesgo Controlado</p>
</div>
</div>
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="cpu"></i>
<i className="w-5 h-5" data-lucide="activity"></i>
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="trending-up"></i>
<span className="text-sm">Retorno 30d</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">+12.4%</p>
<p className="text-xs text-neutral-500">Vol. controlado</p>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="gauge"></i>
<span className="text-sm">Riesgo</span>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">Bajo</p>
<p className="text-xs text-neutral-500">VaR &lt; 2.5%</p>
</div>
<div className="col-span-2 rounded-lg border border-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="bot"></i>
<span className="text-sm">Señales IA</span>
</div>
<div className="mt-3 h-24 grid grid-cols-12 gap-1">

<div className="bg-amber-400/70 rounded-sm" style={{height: '54%'}}></div>
<div className="bg-amber-300/70 rounded-sm" style={{height: '72%'}}></div>
<div className="bg-amber-200/70 rounded-sm" style={{height: '44%'}}></div>
<div className="bg-amber-400/70 rounded-sm" style={{height: '86%'}}></div>
<div className="bg-amber-300/70 rounded-sm" style={{height: '35%'}}></div>
<div className="bg-amber-200/70 rounded-sm" style={{height: '65%'}}></div>
<div className="bg-amber-400/70 rounded-sm" style={{height: '90%'}}></div>
<div className="bg-amber-300/70 rounded-sm" style={{height: '58%'}}></div>
<div className="bg-amber-200/70 rounded-sm" style={{height: '42%'}}></div>
<div className="bg-amber-400/70 rounded-sm" style={{height: '78%'}}></div>
<div className="bg-amber-300/70 rounded-sm" style={{height: '68%'}}></div>
<div className="bg-amber-200/70 rounded-sm" style={{height: '48%'}}></div>
</div>
</div>
</div>
</div>
<div className="absolute -inset-2 -z-10 rounded-2xl opacity-60 bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-600/10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="seminarios">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Seminarios exclusivos</h2>
<p className="mt-3 text-neutral-300 max-w-2xl">
                Accede a formación exclusiva con traders profesionales y estrategias avanzadas basadas en IA.
              </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white" href="#clases">
              Ver clases en vivo
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<article className="group rounded-xl overflow-hidden border border-white/10 bg-neutral-950 hover:bg-neutral-900/40 transition-colors">
<div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
<img alt="Seminarios de Trading" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="line-chart"></i>
<h3 className="text-lg font-medium">Seminarios de Trading</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Patrones de alta probabilidad, gestión de riesgo y timing institucional.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden border border-white/10 bg-neutral-950 hover:bg-neutral-900/40 transition-colors" id="clases">
<div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
<img alt="Clases en Vivo de Análisis" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="video"></i>
<h3 className="text-lg font-medium">Clases en Vivo de Análisis</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Sesiones de mercado en tiempo real con ejecución transparente.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden border border-white/10 bg-neutral-950 hover:bg-neutral-900/40 transition-colors" id="ia">
<div className="aspect-[16/10] bg-neutral-900 overflow-hidden">
<img alt="Seminarios de Inteligencia Artificial" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
<h3 className="text-lg font-medium">Seminarios de Inteligencia Artificial</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Sistemas algorítmicos, señales y optimización con machine learning.</p>
</div>
</article>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="copytrading">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900"></div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-amber-200 text-xs">
<i className="w-4 h-4" data-lucide="link"></i> Copy Trading
              </div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Invierte como los expertos sin experiencia previa.</h2>
<p className="mt-3 text-neutral-300">
                Accede al rendimiento de traders profesionales mientras mantienes control y transparencia en cada movimiento.
              </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/50">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="badge-dollar-sign"></i>
<span className="text-sm">Sin costo de entrada</span>
</div>
<p className="mt-1 text-xs text-neutral-400">Copy trading sin costo de entrada.</p>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/50">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-sm">Capital mínimo</span>
</div>
<p className="mt-1 text-xs text-neutral-400">Capital mínimo: 1,500 USD.</p>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-neutral-900/50">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="percent"></i>
<span className="text-sm">Split de beneficios</span>
</div>
<p className="mt-1 text-xs text-neutral-400">50% Inversor · 25% Nivel 1 · 25% Nivel 2.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-4 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="trending-up"></i>
<p className="text-sm">Distribución de beneficios: 50% para el inversor, 25% para cada nivel ascendente.</p>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-amber-300/30 bg-neutral-950/60 p-5 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]">
<p className="text-sm text-neutral-300">Visualización del split de ganancias</p>

<div className="mt-4 flex flex-col sm:flex-row gap-6 items-center">
<div className="w-48 h-48 sm:w-56 sm:h-56 rounded-lg bg-neutral-900/60 border border-white/10 flex items-center justify-center">
<div className="w-40 h-40 sm:w-48 sm:h-48">
<canvas height="192" id="profitChart" width="192"></canvas>
</div>
</div>
<div className="flex-1">
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-3 w-3 rounded-full bg-amber-400 ring-2 ring-amber-300/50"></span>
<p className="text-sm text-neutral-200">Inversor — 50%</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex h-3 w-3 rounded-full bg-amber-200 ring-2 ring-amber-200/60"></span>
<p className="text-sm text-neutral-200">Nivel 1 — 25%</p>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex h-3 w-3 rounded-full bg-yellow-600 ring-2 ring-yellow-500/60"></span>
<p className="text-sm text-neutral-200">Nivel 2 — 25%</p>
</div>
</div>
<div className="mt-6">
<div className="relative">
<div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 w-3/4"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-neutral-400">
<span>Equidad</span>
<span>Reparto</span>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-lg p-3 border border-white/10 bg-neutral-900/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="user"></i>
<p className="text-xs text-neutral-300">Inversor</p>
</div>
<div className="mt-2 h-10 w-full bg-gradient-to-tr from-amber-400/20 to-transparent rounded">
<div className="h-full w-2/3 bg-amber-400/70"></div>
</div>
</div>
<div className="rounded-lg p-3 border border-white/10 bg-neutral-900/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="users"></i>
<p className="text-xs text-neutral-300">Nivel 1</p>
</div>
<div className="mt-2 h-10 w-full bg-gradient-to-tr from-amber-300/20 to-transparent rounded">
<div className="h-full w-1/3 bg-amber-300/70"></div>
</div>
</div>
<div className="rounded-lg p-3 border border-white/10 bg-neutral-900/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="users"></i>
<p className="text-xs text-neutral-300">Nivel 2</p>
</div>
<div className="mt-2 h-10 w-full bg-gradient-to-tr from-yellow-600/20 to-transparent rounded">
<div className="h-full w-1/3 bg-yellow-600/80"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -inset-2 -z-10 rounded-2xl opacity-40 bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-600/10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="referidos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Gana comisiones mientras otros aprenden.</h2>
<p className="mt-3 text-neutral-300">
                Nuestro sistema de referidos reparte el 25% de las ganancias a dos niveles superiores. Invita, enseña y crece junto a tu equipo.
              </p>
<div className="mt-6 flex items-center gap-3 text-sm text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="network"></i>
<span>Estructura de dos niveles con líneas doradas ascendentes.</span>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-6">
<div className="relative">

<div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 text-neutral-900 font-semibold flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.35)]">
                    Tú
                  </div>

<div className="absolute left-1/2 -translate-x-1/2 top-28 h-14 w-px bg-gradient-to-b from-amber-400/70 to-amber-300/20"></div>

<div className="mt-10 grid grid-cols-2 gap-6">
<div className="relative flex flex-col items-center">
<div className="w-24 h-24 rounded-full border border-amber-300/50 bg-neutral-900/60 flex items-center justify-center text-sm text-neutral-200">
                        Nivel 1
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-amber-400/70 to-amber-300/20"></div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-24 h-24 rounded-full border border-amber-300/50 bg-neutral-900/60 flex items-center justify-center text-sm text-neutral-200">
                        Nivel 1
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-amber-400/70 to-amber-300/20"></div>
</div>
</div>

<div className="mt-6 grid grid-cols-4 gap-4">
<div className="relative flex flex-col items-center">
<div className="w-20 h-20 rounded-full border border-yellow-600/60 bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-300">
                        Nivel 2
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-yellow-500/70 to-yellow-600/20"></div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-20 h-20 rounded-full border border-yellow-600/60 bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-300">
                        Nivel 2
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-yellow-500/70 to-yellow-600/20"></div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-20 h-20 rounded-full border border-yellow-600/60 bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-300">
                        Nivel 2
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-yellow-500/70 to-yellow-600/20"></div>
</div>
<div className="relative flex flex-col items-center">
<div className="w-20 h-20 rounded-full border border-yellow-600/60 bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-300">
                        Nivel 2
                      </div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-yellow-500/70 to-yellow-600/20"></div>
</div>
</div>

<div className="mt-6 flex items-center justify-center gap-4 text-xs text-neutral-300">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-amber-400"></span> Nivel 1 — 25%
                    </div>
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-yellow-600"></span> Nivel 2 — 25%
                    </div>
</div>
</div>
</div>
<div className="absolute -inset-2 -z-10 rounded-2xl opacity-40 bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-600/10 blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Testimonios y Comunidad</h2>
<p className="mt-3 text-neutral-300">Historias reales de crecimiento, disciplina y resultados.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-neutral-300">
<i className="w-5 h-5 text-amber-300" data-lucide="stars"></i>
<span className="text-sm">Excelencia comprobada</span>
</div>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-neutral-950 p-6 hover:bg-neutral-900/40 transition-colors">
<div className="flex items-center gap-3">
<img alt="Testimonio 1" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-neutral-200">María F.</p>
<p className="text-xs text-neutral-400">Trader Swing</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-200">
                “IMPERIO me enseñó a respetar mi plan y dejar que las estadísticas trabajen. Mi curva de equidad es otra.”
              </p>
<div className="mt-4 flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="quote"></i><span className="text-xs">Disciplina primero</span>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-950 p-6 hover:bg-neutral-900/40 transition-colors">
<div className="flex items-center gap-3">
<img alt="Testimonio 2" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-neutral-200">Andrés V.</p>
<p className="text-xs text-neutral-400">Gestor de Portafolio</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-200">
                “El módulo de IA aporta señales consistentes. Sumé exposición con copy trading sin aumentar mi carga operativa.”
              </p>
<div className="mt-4 flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="brain"></i><span className="text-xs">IA aplicada</span>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-950 p-6 hover:bg-neutral-900/40 transition-colors">
<div className="flex items-center gap-3">
<img alt="Testimonio 3" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-neutral-200">Lucía R.</p>
<p className="text-xs text-neutral-400">Afiliada</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-200">
                “El sistema de referidos es justo y transparente. Crecer con mi equipo me ha dado ingresos constantes.”
              </p>
<div className="mt-4 flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="users"></i><span className="text-xs">Crecimiento en red</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="cta-final">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
<div className="relative overflow-hidden rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-500 p-8 md:p-12">
<div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/20 blur-3xl mix-blend-overlay"></div>
<div className="absolute -bottom-16 -right-10 w-72 h-72 rounded-full bg-yellow-200/30 blur-3xl mix-blend-overlay"></div>
<div className="relative">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                    Únete a IMPERIO y forma parte de la élite del trading.
                  </h3>
<p className="mt-2 text-neutral-800">
                    Exclusividad, disciplina y resultados. La oportunidad se construye.
                  </p>
</div>
<a className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.15)]" href="#inicio">
                  Entrar ahora
                </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-500 to-amber-300 text-neutral-900 font-semibold tracking-tight flex items-center justify-center">I</div>
<span className="text-lg font-semibold tracking-tight text-white">IMPERIO</span>
</div>
<nav className="grid grid-cols-2 sm:flex sm:flex-row gap-4 text-sm text-neutral-400">
<a className="hover:text-white" href="#">Términos</a>
<a className="hover:text-white" href="#">Política de privacidad</a>
<a className="hover:text-white" href="#">Soporte</a>
<a className="hover:text-white" href="#">Redes sociales</a>
</nav>
</div>
<div className="mt-6 text-xs text-neutral-500">
          © <span id="year"></span> IMPERIO. Todos los derechos reservados.
        </div>
</div>
</footer>


    </>
  );
}
