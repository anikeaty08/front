import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                    const steps = [
                        { icon: 'megaphone', title: 'Tráfico', desc: 'Meta Ads', num: '01' },
                        { icon: 'layout', title: 'Landing', desc: 'Alta Conversión', num: '02' },
                        { icon: 'filter', title: 'Filtro', desc: 'Cualificación', num: '03' },
                        { icon: 'database', title: 'CRM', desc: 'Centralización', num: '04' },
                        { icon: 'bot', title: 'Nurture', desc: 'Seguimiento', num: '05' },
                        { icon: 'calendar-check', title: 'Cierre', desc: 'Ventas', num: '06', special: true }
                    ];
                    
                    steps.forEach((step, index) => {
                        document.write(`
                            <div class="reveal delay-${index * 100} group relative bg-black/40 border ${step.special ? 'border-orange-500/50 bg-orange-900/5' : 'border-white/5'} hover:border-white/20 p-6 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                <div class="absolute top-3 left-4 text-[10px] font-mono ${step.special ? 'text-orange-400' : 'text-neutral-600'}">${step.num}</div>
                                <div class="${step.special ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-neutral-900 text-neutral-300 group-hover:text-white group-hover:bg-neutral-800'} p-3 rounded-xl transition-colors">
                                    <iconify-icon icon="lucide:${step.icon}" width="20"></iconify-icon>
                                </div>
                                <div>
                                    <span class="block text-sm font-semibold ${step.special ? 'text-white' : 'text-neutral-200'}">${step.title}</span>
                                    <span class="block text-xs text-neutral-500 mt-1">${step.desc}</span>
                                </div>
                                ${index !== 5 ? '<div class="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-neutral-800"><iconify-icon icon="lucide:chevron-right"></iconify-icon></div>' : ''}
                            </div>
                        `);
                    });
                


        // Simple Intersection Observer for Reveal Effects
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md"></div>
<div className="text-white font-semibold tracking-tight text-lg">EMPIRIKA</div>
</div>
<a className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-4 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#diagnostico">
                Agendar diagnóstico
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden z-10">
<div className="max-w-4xl mx-auto px-6 text-center reveal active">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-400 text-xs font-medium mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:bg-orange-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Growth Stack 60D
            </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
                En 60 días instalamos un sistema que genera <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">citas calificadas</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Marketing + ventas + seguimiento, todo conectado. Deja de depender de la suerte y empieza a predecir tus ingresos.
            </p>

<div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-300 mb-12">
<div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all cursor-default">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform" icon="lucide:layout-template"></iconify-icon> Embudo web
                </div>
<div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all cursor-default">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform" icon="lucide:target"></iconify-icon> Ads Activos
                </div>
<div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all cursor-default">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform" icon="lucide:settings-2"></iconify-icon> CRM Auto
                </div>
<div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all cursor-default">
<iconify-icon className="text-orange-500 group-hover:scale-110 transition-transform" icon="lucide:bar-chart-3"></iconify-icon> Métricas
                </div>
</div>

<div className="flex flex-col items-center gap-6">
<a className="relative group bg-white text-black text-base font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden" href="#diagnostico">
<div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-white to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
<span className="relative flex items-center gap-2">
                        Agendar diagnóstico
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
<span className="text-xs text-neutral-500 flex items-center gap-1.5">
<iconify-icon className="text-neutral-400" icon="lucide:shield-check"></iconify-icon>
                    Sin compromiso de compra.
                </span>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto px-6 reveal delay-200">
<div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-2xl blur-lg opacity-30"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-80">
<div className="space-y-4">
<div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
<div className="h-24 w-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-lg"></div>
<div className="h-24 w-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-lg"></div>
</div>
<div className="md:col-span-2 space-y-4">
<div className="flex justify-between">
<div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
<div className="h-4 w-16 bg-orange-500/20 rounded animate-pulse"></div>
</div>
<div className="h-52 w-full bg-gradient-to-t from-orange-500/10 via-transparent to-transparent border border-white/5 rounded-lg relative overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-24 text-orange-500" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 50 L10 40 L20 45 L30 30 L40 35 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0 V50 H0 Z" fill="url(#gradient)" opacity="0.2"></path>
<path d="M0 50 L10 40 L20 45 L30 30 L40 35 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
                        Si hoy las ventas dependen de ti… <span className="text-neutral-600">tienes un trabajo, no un negocio.</span>
</h2>
<p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                        El caos comercial es el techo de crecimiento #1 de las agencias y consultoras. Growth Stack 60D elimina la improvisación.
                    </p>
<div className="space-y-6">
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="mt-1 bg-neutral-900 p-2 rounded-lg text-red-400 group-hover:text-red-300 transition-colors shadow-inner"><iconify-icon icon="lucide:trending-down"></iconify-icon></div>
<div>
<h4 className="text-white font-medium mb-1">Ingresos "Montaña Rusa"</h4>
<p className="text-sm text-neutral-500">Un mes facturas récord, al siguiente sufres para cubrir costos.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="mt-1 bg-neutral-900 p-2 rounded-lg text-red-400 group-hover:text-red-300 transition-colors shadow-inner"><iconify-icon icon="lucide:message-circle-off"></iconify-icon></div>
<div>
<h4 className="text-white font-medium mb-1">Seguimiento Oxidado</h4>
<p className="text-sm text-neutral-500">Los leads llegan, preguntan precio y mueren en el chat por falta de proceso.</p>
</div>
</div>
</div>
</div>
<div className="reveal delay-100">
<div className="relative bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-2xl p-1 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
<div className="relative bg-[#050505] rounded-xl p-8 h-full">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<h3 className="text-xl font-medium text-white mb-8">El Ciclo del Caos vs Sistema</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>Sin sistema</span>
<span className="text-red-400">Impredecible</span>
</div>
<div className="flex gap-1 h-8">
<div className="w-1/6 bg-neutral-800 rounded-sm"></div>
<div className="w-2/6 bg-neutral-800 rounded-sm"></div>
<div className="w-1/12 bg-neutral-800 rounded-sm"></div>
<div className="w-1/4 bg-neutral-800 rounded-sm"></div>
<div className="w-1/6 bg-neutral-800 rounded-sm"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span className="text-orange-400 font-medium">Con Growth Stack</span>
<span className="text-orange-400">Escalable</span>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-1/6 bg-orange-900/40 rounded-sm h-[40%]"></div>
<div className="w-1/6 bg-orange-800/60 rounded-sm h-[55%]"></div>
<div className="w-1/6 bg-orange-700/80 rounded-sm h-[70%]"></div>
<div className="w-1/6 bg-orange-600 rounded-sm h-[85%]"></div>
<div className="w-1/3 bg-orange-500 rounded-sm h-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<p className="text-sm text-neutral-400 italic">"Lo que no se mide, no se puede mejorar."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">El Sistema <span className="text-orange-500">End-to-End</span></h2>
<p className="text-neutral-500 mt-4">Cada pieza cumple una función específica. Nada sobra.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">


</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl font-bold text-white tracking-tight mb-2">Qué instalamos en 60 días</h2>
<p className="text-neutral-500">Un ecosistema digital completo, entregado llave en mano.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 auto-rows-[180px]">

<div className="reveal row-span-2 md:col-span-2 group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden transition-all hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="lucide:monitor" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Embudo de Alta Conversión</h3>
<p className="text-neutral-400 max-w-md">Diseño UX/UI premium, copywriting persuasivo y velocidad optimizada. No es solo una web, es una máquina de ventas 24/7.</p>
</div>
<div className="w-full h-1/2 bg-neutral-900/80 rounded-lg border border-white/5 mt-4 overflow-hidden relative">

<div className="absolute top-4 left-4 right-4 flex gap-2">
<div className="h-2 w-1/3 bg-white/10 rounded"></div>
<div className="h-2 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="absolute bottom-4 right-4 bg-orange-500 text-white text-xs px-3 py-1.5 rounded">CTA Button</div>
</div>
</div>
</div>

<div className="reveal delay-100 group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-orange-500/30 transition-all">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 blur-[40px] rounded-full group-hover:bg-orange-500/20 transition-all"></div>
<div className="relative z-10">
<iconify-icon className="text-orange-500 mb-3 text-2xl" icon="lucide:target"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-1">Ads &amp; Tráfico</h3>
<p className="text-xs text-neutral-400">Meta &amp; Google Ads configurados para captar demanda.</p>
</div>
</div>

<div className="reveal delay-200 group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-orange-500/30 transition-all">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
<div className="relative z-10">
<iconify-icon className="text-blue-400 mb-3 text-2xl" icon="lucide:settings"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-1">CRM Automático</h3>
<p className="text-xs text-neutral-400">Pipeline visual. Nada se pierde en excels.</p>
</div>
</div>

<div className="reveal delay-300 md:col-span-3 group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-green-500/10 rounded-lg text-green-400"><iconify-icon icon="lucide:line-chart"></iconify-icon></div>
<h3 className="text-xl font-semibold text-white">Reportes &amp; Optimización</h3>
</div>
<p className="text-neutral-400 text-sm">No te entregamos el sistema y nos vamos. Te acompañamos con lectura de métricas y ajustes semanales para escalar resultados.</p>
</div>
<div className="flex gap-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
<div className="bg-black border border-white/10 px-4 py-2 rounded text-xs text-green-400 font-mono">+24% ROAS</div>
<div className="bg-black border border-white/10 px-4 py-2 rounded text-xs text-green-400 font-mono">-12% CPL</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all group" href="#diagnostico">
                    Ver todos los entregables <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-white tracking-tight mb-16 text-center reveal">Roadmap de Ejecución</h2>
<div className="relative space-y-0 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 shadow text-orange-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-orange-500 transition-colors">
<iconify-icon icon="lucide:search" width="16"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors hover:border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-white">Auditoría &amp; Oferta</span>
<span className="text-xs font-mono text-orange-500">SEM 1</span>
</div>
<p className="text-sm text-neutral-400">Análisis profundo y creación de oferta irresistible.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 shadow text-neutral-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-white transition-colors">
<iconify-icon icon="lucide:code-2" width="16"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors hover:border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-white">Construcción</span>
<span className="text-xs font-mono text-neutral-500">SEM 2-3</span>
</div>
<p className="text-sm text-neutral-400">Desarrollo de landing page, creativos y configuración técnica.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-neutral-900 shadow text-neutral-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-white transition-colors">
<iconify-icon icon="lucide:rocket" width="16"></iconify-icon>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors hover:border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-white">Lanzamiento</span>
<span className="text-xs font-mono text-neutral-500">SEM 4</span>
</div>
<p className="text-sm text-neutral-400">Activación de campañas, testing A/B y flujo de leads.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-950 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
<div className="text-center mb-10">
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Confían en Empirika</p>
</div>
<div className="flex overflow-hidden">
<div className="animate-marquee flex gap-12 items-center min-w-full">

<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">ACME CORP</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">NEXUS</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">VERTEX</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">HORIZON</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">ELEVATE</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">ACME CORP</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">NEXUS</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">VERTEX</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">HORIZON</span>
<span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer">ELEVATE</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-bold text-white tracking-tight mb-10 text-center reveal">Preguntas Frecuentes</h2>
<div className="space-y-3 reveal">

<details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/10 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-white select-none">
                    ¿Necesito tener página web?
                    <div className="bg-white/10 rounded-full p-1 group-open:rotate-180 transition-transform">
<iconify-icon className="text-neutral-400" icon="lucide:chevron-down"></iconify-icon>
</div>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    No. De hecho, preferimos construir nuestras propias landing pages optimizadas para conversión, ya que las webs corporativas tradicionales suelen tener demasiadas fugas.
                </div>
</details>

<details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/10 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-white select-none">
                    ¿Cuánto presupuesto necesito para anuncios?
                    <div className="bg-white/10 rounded-full p-1 group-open:rotate-180 transition-transform">
<iconify-icon className="text-neutral-400" icon="lucide:chevron-down"></iconify-icon>
</div>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    Recomendamos iniciar con al menos $500-$1000 USD mensuales para tener datos estadísticamente relevantes y poder optimizar el sistema rápidamente.
                </div>
</details>

<details className="group bg-white/5 border border-white/5 rounded-xl open:bg-white/10 open:border-orange-500/30 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-white select-none">
                    ¿Sirve para productos físicos?
                    <div className="bg-white/10 rounded-full p-1 group-open:rotate-180 transition-transform">
<iconify-icon className="text-neutral-400" icon="lucide:chevron-down"></iconify-icon>
</div>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    Nuestro sistema Growth Stack está especializado en venta de servicios High-Ticket (Consultoría, Agencias, B2B, Salud, Inmobiliaria).
                </div>
</details>
</div>
</section>

<section className="py-24 px-6" id="diagnostico">
<div className="max-w-4xl mx-auto reveal">
<div className="relative rounded-3xl p-10 md:p-20 text-center overflow-hidden border border-white/10 group">

<div className="absolute inset-0 bg-neutral-900"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/40 via-neutral-900 to-neutral-900"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-orange-500/10 blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-colors duration-1000"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        ¿Listo para escalar?
                    </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                        Agenda una sesión de diagnóstico gratuita de 30 minutos. Analizaremos tu situación actual y te diremos si podemos ayudarte.
                    </p>
<div className="flex flex-col items-center gap-6">
<button className="bg-white hover:bg-neutral-200 text-black text-lg font-semibold px-10 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                            Agendar diagnóstico
                        </button>
<div className="flex items-center gap-2 text-xs text-neutral-500 bg-black/50 px-3 py-1 rounded-full border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                            2 cupos disponibles para este mes
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-12 px-6 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-neutral-500">
                © 2024 Empirika Growth Stack.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>



    </>
  );
}
