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



        lucide.createIcons();

        // Reveal on scroll
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    
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
      

<header className="fixed top-0 inset-x-0 z-[100] h-[70px] transition-all duration-300">
<div className="absolute inset-0 bg-[#FDFCF8]/90 backdrop-blur-xl border-b border-[#1C1917]/[0.06]"></div>
<div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between relative z-10">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 bg-[#1C1917] rounded flex items-center justify-center text-[#FDFCF8] shadow-sm">
<span className="font-serif-heading italic font-medium text-lg pt-0.5">l</span>
</div>
<div className="flex flex-col">
<span className="font-serif-heading font-medium text-lg tracking-tight leading-none">livv.</span>
<span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-40 leading-none mt-0.5">Ecosystem</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-1 bg-[#1C1917]/[0.03] p-1 rounded-full border border-[#1C1917]/[0.04]">
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-white transition-all uppercase tracking-widest" href="#narrativa">Narrativa</a>
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-white transition-all uppercase tracking-widest" href="#modelo">Modelo</a>
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-white transition-all uppercase tracking-widest" href="#software">Software</a>
<a className="px-4 py-1.5 rounded-full text-[11px] font-medium text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-white transition-all uppercase tracking-widest" href="#ventures">Ventures</a>
</nav>
<button className="bg-[#1C1917] text-white pl-4 pr-3 py-2 rounded text-[11px] font-semibold tracking-widest uppercase hover:bg-[#2C2927] transition-all flex items-center gap-2 shadow-lg shadow-black/5">
                Partner Login <i className="w-3.5 h-3.5 opacity-60" data-lucide="arrow-right"></i>
</button>
</div>
</header>
<main className="flex-grow pt-[70px]">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#D96C45]/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col items-start max-w-4xl reveal-on-scroll">
<div className="inline-flex items-center gap-2 mb-8 pl-1.5 pr-3 py-1 bg-white border border-[#1C1917]/10 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#D96C45] animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-[#1C1917]/60 font-medium">Fee + Performance + Equity</span>
</div>
<h1 className="font-serif-heading text-6xl md:text-[5.5rem] font-medium leading-[0.95] tracking-tight mb-8">
                        No crecimos vendiendo <span className="italic text-[#1C1917]/30 font-normal">horas.</span><br/>
                        Crecimos participando del <span className="text-[#D96C45]">Upside.</span>
</h1>
<p className="text-[17px] text-[#1C1917]/60 font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-[#D96C45]/30 pl-6">
                        Diseñamos, escalamos y co-fundamos marcas. El verdadero leverage no es solo el equipo: son los sistemas, el software y los activos que construimos.
                    </p>
<div className="flex gap-4">
<button className="px-8 py-3.5 bg-[#1C1917] text-white text-[11px] uppercase tracking-widest font-semibold rounded hover:bg-[#333] transition-all shadow-xl shadow-black/10">
                            Ver Modelo de Negocio
                        </button>
<button className="px-8 py-3.5 bg-white border border-[#1C1917]/10 text-[#1C1917] text-[11px] uppercase tracking-widest font-semibold rounded hover:bg-gray-50 transition-all">
                            Demo Software
                        </button>
</div>
</div>
</div>

<div className="mt-24 border-y border-[#1C1917]/[0.06] bg-[#FAFAFA]/50 py-4 overflow-hidden">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> 5 Fuentes de Revenue</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> White Label Software</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> Co-Creación de Ventures</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> Ads Performance</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> Gestión de Influencers</span>

<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> 5 Fuentes de Revenue</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C1917]/30 flex items-center gap-2"><i className="w-3 h-3 text-[#D96C45]" data-lucide="check"></i> White Label Software</span>
</div>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6 border-b border-[#1C1917]/[0.06]" id="narrativa">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#D96C45] mb-2 block">El Origen</span>
<h2 className="font-serif-heading text-4xl mb-6">Del servicio a la propiedad</h2>
<div className="space-y-6 text-[#1C1917]/70 font-light text-[15px] leading-relaxed">
<p>
                            Todo comenzó en una habitación pequeña, gestionando campañas por 3K/mes. Pero nos dimos cuenta de una verdad incómoda: <strong className="text-[#1C1917] font-medium">los clientes escalaban millones gracias a nuestro trabajo, y nosotros seguíamos vendiendo horas.</strong>
</p>
<p>
                            El punto de inflexión llegó con el "primer millón". No fue por trabajar más, sino por cambiar el modelo. Dejamos de ser proveedores para ser socios. Implementamos tecnología propia y exigimos "Skin in the game".
                        </p>
<blockquote className="border-l-2 border-[#1C1917] pl-4 italic text-[#1C1917] text-lg font-serif-heading my-6">
                            "Si generamos millones para los clientes, los millones se reparten."
                        </blockquote>
<p>
                            Hoy, no aceptamos proyectos donde no podamos influir directamente en el revenue. Nuestra visión a 9 años es un holding de 25M anuales donde el software y las marcas propias son el verdadero motor.
                        </p>
</div>
</div>
<div className="relative h-[500px] w-full bg-[#1C1917] rounded-xl overflow-hidden p-8 flex flex-col justify-between reveal-on-scroll delay-100 shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white uppercase tracking-widest border border-white/10">Desde 2015</div>
<i className="text-[#D96C45] w-6 h-6" data-lucide="trending-up"></i>
</div>
<div className="relative z-10 space-y-4">
<div className="flex items-end gap-3">
<span className="text-6xl font-serif-heading text-white tracking-tighter">25M+</span>
<span className="text-white/50 text-sm mb-2">Revenue Generado</span>
</div>
<div className="h-px bg-white/20 w-full"></div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="block text-2xl font-serif-heading text-white">12</span>
<span className="text-[10px] uppercase text-white/50 tracking-widest">Ventures</span>
</div>
<div>
<span className="block text-2xl font-serif-heading text-white">450%</span>
<span className="text-[10px] uppercase text-white/50 tracking-widest">Avg. Growth</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] border-b border-[#1C1917]/[0.06]" id="modelo">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto reveal-on-scroll">
<h2 className="font-serif-heading text-4xl mb-4">El Modelo de Ecosistema</h2>
<p className="text-[#1C1917]/50">5 líneas de revenue diseñadas para maximizar LTV y capturar equity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="feature-card bg-white p-8 rounded-xl border border-[#1C1917]/[0.06] reveal-on-scroll">
<div className="w-10 h-10 bg-[#FAFAFA] rounded-lg border border-[#1C1917]/[0.06] flex items-center justify-center mb-6">
<i className="w-4 h-4 text-[#1C1917]" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-medium mb-2">Retainers &amp; Fees</h3>
<p className="text-[13px] text-[#1C1917]/60 mb-6 min-h-[40px]">Servicios end-to-end de operación y growth para clientes selectos.</p>
<div className="pt-4 border-t border-[#1C1917]/[0.04]">
<span className="text-[10px] font-mono text-[#D96C45]">Ticket: $3k - $10k / mes</span>
</div>
</div>

<div className="feature-card bg-white p-8 rounded-xl border border-[#1C1917]/[0.06] reveal-on-scroll delay-75">
<div className="w-10 h-10 bg-[#FAFAFA] rounded-lg border border-[#1C1917]/[0.06] flex items-center justify-center mb-6">
<i className="w-4 h-4 text-[#1C1917]" data-lucide="percent"></i>
</div>
<h3 className="text-lg font-medium mb-2">Revenue Share</h3>
<p className="text-[13px] text-[#1C1917]/60 mb-6 min-h-[40px]">Variable sobre el performance y facturación generada (ROAS).</p>
<div className="pt-4 border-t border-[#1C1917]/[0.04]">
<span className="text-[10px] font-mono text-[#D96C45]">Upside: 10% - 25% Net Rev</span>
</div>
</div>

<div className="feature-card bg-white p-8 rounded-xl border border-[#1C1917]/[0.06] reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-[#FAFAFA] rounded-lg border border-[#1C1917]/[0.06] flex items-center justify-center mb-6">
<i className="w-4 h-4 text-[#1C1917]" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium mb-2">Partnerships</h3>
<p className="text-[13px] text-[#1C1917]/60 mb-6 min-h-[40px]">Gestión de brand deals y colaboraciones estratégicas.</p>
<div className="pt-4 border-t border-[#1C1917]/[0.04]">
<span className="text-[10px] font-mono text-[#D96C45]">Fee: 20% deal flow</span>
</div>
</div>

<div className="feature-card bg-[#1C1917] text-white p-8 rounded-xl border border-transparent col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col reveal-on-scroll delay-150 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#D96C45]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 relative z-10">
<i className="w-4 h-4 text-white" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-medium mb-2 relative z-10">Ventures &amp; Co-Fundación</h3>
<p className="text-[13px] text-white/60 mb-6 relative z-10">
                            No solo operamos, co-creamos marcas desde cero con clientes top. Aportamos equipo, sistemas y tech a cambio de equity.
                        </p>
<ul className="space-y-3 mt-auto relative z-10 text-[11px] font-medium tracking-wide">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D96C45]"></div> Productos Físicos (DTC)</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D96C45]"></div> Academias Digitales</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D96C45]"></div> Software SaaS</li>
</ul>
</div>

<div className="feature-card bg-white p-8 rounded-xl border border-[#1C1917]/[0.06] col-span-1 md:col-span-2 reveal-on-scroll delay-200">
<div className="flex items-start justify-between">
<div>
<div className="w-10 h-10 bg-[#FAFAFA] rounded-lg border border-[#1C1917]/[0.06] flex items-center justify-center mb-6">
<i className="w-4 h-4 text-[#1C1917]" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-lg font-medium mb-2">Operación DTC Propia</h3>
<p className="text-[13px] text-[#1C1917]/60 max-w-md">
                                    Control total de la cadena: producto, funnel, logística y campañas. Validamos hipótesis con nuestro propio dinero antes de escalarlo a clientes.
                                </p>
</div>
<div className="hidden sm:block">
<span className="bg-[#D96C45]/10 text-[#D96C45] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-[#D96C45]/20">High Margin</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden relative" id="software">

<div className="absolute inset-0 bg-[#FDFCF8]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[600px] bg-gradient-to-r from-transparent via-[#E7E5E4]/30 to-transparent blur-3xl pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl reveal-on-scroll">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#D96C45] mb-2 block">El Corazón Operativo</span>
<h2 className="font-serif-heading text-4xl mb-6">Suite Tecnológica Marca Blanca</h2>
<p className="text-[#1C1917]/60 text-lg font-light">
                            "Primero construimos el software para nosotros, luego lo convertimos en producto." Una plataforma unificada para gobernar todo el ecosistema.
                        </p>
</div>
<div className="flex flex-col gap-2 reveal-on-scroll text-right">
<div className="text-[10px] uppercase tracking-widest text-[#1C1917]/40 font-bold">Estado actual</div>
<div className="flex items-center gap-2 justify-end">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm font-medium">v2.0 Deploying</span>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1C1917]/10 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden reveal-on-scroll">

<div className="h-10 border-b border-[#1C1917]/[0.06] bg-[#FAFAFA] flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-black/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-black/5"></div>
</div>
<div className="text-[9px] font-mono text-[#1C1917]/40 uppercase tracking-widest">livv_os_admin</div>
<div className="w-4"></div>
</div>
<div className="flex flex-col lg:flex-row h-[600px]">

<div className="w-full lg:w-64 border-r border-[#1C1917]/[0.06] bg-[#FAFAFA]/50 p-4 flex flex-col gap-1">
<div className="p-3 bg-white border border-[#1C1917]/[0.06] rounded mb-6 flex items-center gap-3 shadow-sm">
<div className="w-6 h-6 bg-[#1C1917] rounded-sm text-white flex items-center justify-center text-[10px] font-bold">C</div>
<span className="text-[11px] font-medium">Cliente Panel</span>
</div>
<div className="space-y-0.5">
<button className="w-full text-left px-3 py-2 rounded bg-[#1C1917]/5 text-[#1C1917] text-[11px] font-medium flex items-center gap-3">
<i className="w-3.5 h-3.5" data-lucide="layout-dashboard"></i> Métricas &amp; KPIs
                                </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-[#1C1917]/[0.02] text-[#1C1917]/60 text-[11px] font-medium flex items-center gap-3 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="users"></i> Gestión Influencers
                                </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-[#1C1917]/[0.02] text-[#1C1917]/60 text-[11px] font-medium flex items-center gap-3 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> Ads Performance
                                </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-[#1C1917]/[0.02] text-[#1C1917]/60 text-[11px] font-medium flex items-center gap-3 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="folder-kanban"></i> Pipeline Interno
                                </button>
</div>
<div className="mt-auto p-4 rounded bg-[#D96C45]/5 border border-[#D96C45]/10">
<span className="text-[9px] font-bold text-[#D96C45] uppercase tracking-widest mb-1 block">White Label</span>
<p className="text-[10px] text-[#1C1917]/60 leading-tight">Marca personalizable por cliente (logo, colores, dominio).</p>
</div>
</div>

<div className="flex-1 bg-[#FAFAFA]/20 p-8 overflow-y-auto">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 bg-white rounded-lg border border-[#1C1917]/[0.06] shadow-sm">
<span className="text-[9px] text-[#1C1917]/40 uppercase tracking-widest font-bold">CAC Efficiency</span>
<div className="text-2xl font-serif-heading mt-1">$12.40</div>
<span className="text-[9px] text-green-600 font-mono">-14% vs last week</span>
</div>
<div className="p-4 bg-white rounded-lg border border-[#1C1917]/[0.06] shadow-sm">
<span className="text-[9px] text-[#1C1917]/40 uppercase tracking-widest font-bold">ROAS Global</span>
<div className="text-2xl font-serif-heading mt-1">4.2x</div>
<span className="text-[9px] text-green-600 font-mono">Stable</span>
</div>
<div className="p-4 bg-white rounded-lg border border-[#1C1917]/[0.06] shadow-sm">
<span className="text-[9px] text-[#1C1917]/40 uppercase tracking-widest font-bold">LTV (60d)</span>
<div className="text-2xl font-serif-heading mt-1">$89.00</div>
<span className="text-[9px] text-green-600 font-mono">+5% Lift</span>
</div>
<div className="p-4 bg-white rounded-lg border border-[#1C1917]/[0.06] shadow-sm">
<span className="text-[9px] text-[#1C1917]/40 uppercase tracking-widest font-bold">Influencers</span>
<div className="text-2xl font-serif-heading mt-1">142</div>
<span className="text-[9px] text-[#1C1917]/40 font-mono">Active Camp</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-lg border border-[#1C1917]/[0.06] p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#1C1917]">Base de Datos Influencers</h4>
<i className="w-3 h-3 opacity-40" data-lucide="database"></i>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 p-2 rounded bg-[#FAFAFA] border border-[#1C1917]/[0.04]">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="flex-1 h-2 bg-gray-100 rounded"></div>
<div className="w-12 h-4 bg-green-100 rounded text-[8px] text-green-700 flex items-center justify-center font-mono">HIGH ROI</div>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-[#FAFAFA] border border-[#1C1917]/[0.04]">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="flex-1 h-2 bg-gray-100 rounded"></div>
<div className="w-12 h-4 bg-yellow-100 rounded text-[8px] text-yellow-700 flex items-center justify-center font-mono">NEGOTIATION</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-[#1C1917]/[0.06] p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#1C1917]">Testing Creativo</h4>
<i className="w-3 h-3 opacity-40" data-lucide="image"></i>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-[9/16] bg-gray-100 rounded border border-gray-200 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-center text-[8px] text-white">Win (CTR 2.1%)</div>
</div>
<div className="aspect-[9/16] bg-gray-100 rounded border border-gray-200 flex items-center justify-center relative">
<div className="absolute inset-x-0 bottom-0 bg-red-500/60 p-1 text-center text-[8px] text-white">Kill</div>
</div>
<div className="aspect-[9/16] bg-gray-100 rounded border border-gray-200 flex items-center justify-center relative">
<div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-center text-[8px] text-white">Scale</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-[#FDFCF8] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#D96C45] mb-4 block">Estructura &amp; Cultura</span>
<h2 className="font-serif-heading text-4xl mb-6">Pods de Alto Rendimiento</h2>
<p className="text-white/60 text-[15px] font-light leading-relaxed mb-8">
                            No somos un ejército de juniors. Trabajamos en Pods autónomos (3-6 personas) gestionando carteras limitadas con incentivos alineados.
                        </p>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded border border-white/10 bg-white/5">
<i className="w-5 h-5 text-[#D96C45] mt-1" data-lucide="users"></i>
<div>
<h4 className="text-sm font-bold mb-1">Estructura del Pod</h4>
<p className="text-xs text-white/50">Estratega, Media Buyer, Creative Lead, Data Specialist &amp; Tech Lead.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded border border-white/10 bg-white/5">
<i className="w-5 h-5 text-[#D96C45] mt-1" data-lucide="trophy"></i>
<div>
<h4 className="text-sm font-bold mb-1">Incentivos Reales</h4>
<p className="text-xs text-white/50">Bonus por ROAS, Profit Share en cuentas estratégicas y Phantom Shares para líderes.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center space-y-6 reveal-on-scroll delay-100">
<blockquote className="text-2xl font-serif-heading italic text-white/90">
                            "Aprender nuevas skills es requisito, no un plus."
                        </blockquote>
<blockquote className="text-2xl font-serif-heading italic text-white/90">
                            "No trabajamos para campañas, trabajamos para construir activos."
                        </blockquote>
<blockquote className="text-2xl font-serif-heading italic text-white/90">
                            "Phantom Shares: todos construimos el activo, no solo el fundador."
                        </blockquote>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6" id="ventures">
<div className="mb-20 text-center reveal-on-scroll">
<h2 className="font-serif-heading text-4xl mb-4 text-[#1C1917]">Ventures &amp; Roadmap</h2>
<p className="text-[#1C1917]/50">De la validación a la escala global en 24 meses.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="group relative aspect-[4/5] rounded-xl overflow-hidden reveal-on-scroll">
<img alt="Skincare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<span className="text-[10px] uppercase text-[#D96C45] font-bold tracking-widest mb-1">DTC Brand</span>
<h3 className="text-xl text-white font-serif-heading italic">Skincare Line</h3>
<p className="text-xs text-white/60 mt-2">Co-fundada con influencer dermatológica. Roadmap internacional.</p>
</div>
</div>
<div className="group relative aspect-[4/5] rounded-xl overflow-hidden reveal-on-scroll delay-75">
<img alt="Academy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<span className="text-[10px] uppercase text-[#D96C45] font-bold tracking-widest mb-1">EdTech</span>
<h3 className="text-xl text-white font-serif-heading italic">Digital Academy</h3>
<p className="text-xs text-white/60 mt-2">Membresía escalable de alto margen. Hosting en plataforma propia.</p>
</div>
</div>
<div className="group relative aspect-[4/5] rounded-xl overflow-hidden reveal-on-scroll delay-150">
<img alt="SaaS" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
<span className="text-[10px] uppercase text-[#D96C45] font-bold tracking-widest mb-1">Tech</span>
<h3 className="text-xl text-white font-serif-heading italic">Community SaaS</h3>
<p className="text-xs text-white/60 mt-2">White label community platform construida sobre nuestra infraestructura.</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto border-l border-[#1C1917]/10 pl-8 space-y-12 reveal-on-scroll">
<div className="relative">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-[#1C1917] border-4 border-[#FDFCF8]"></div>
<h4 className="text-sm font-bold uppercase tracking-widest text-[#1C1917] mb-2">Trimestre 1</h4>
<p className="text-[#1C1917]/60 text-sm">Definición de oferta y pricing. Primeros clientes en modelo híbrido (Fee + %). Versión 1.0 de la Suite Interna (No-Code/Semi-manual).</p>
</div>
<div className="relative">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-[#1C1917]"></div>
<h4 className="text-sm font-bold uppercase tracking-widest text-[#1C1917] mb-2">Trimestre 2-4</h4>
<p className="text-[#1C1917]/60 text-sm">Lanzamiento del primer Venture con cliente Top. Productos digitales propios para captación de leads. Consolidación del Software como herramienta core.</p>
</div>
<div className="relative">
<div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-[#FDFCF8] border border-[#1C1917]/20"></div>
<h4 className="text-sm font-bold uppercase tracking-widest text-[#1C1917]/40 mb-2">Año 2</h4>
<p className="text-[#1C1917]/40 text-sm">Apertura de Suite Marca Blanca a terceros. Programas de licencias. Refuerzo del Equity Pool para el equipo clave.</p>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] pt-20 pb-10 border-t border-[#1C1917]/[0.06]">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<h2 className="font-serif-heading text-3xl mb-8">¿Listo para dejar de cobrar por horas?</h2>
<div className="flex justify-center gap-4 mb-16">
<button className="px-6 py-3 bg-[#1C1917] text-white text-[10px] uppercase tracking-widest font-semibold rounded hover:bg-[#333] transition-all">
                        Agendar Pitch Comercial
                    </button>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-[#1C1917]/40 uppercase tracking-widest border-t border-[#1C1917]/[0.06] pt-8">
<span>© 2024 Livv Ecosystem Inc.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#1C1917]" href="#">Privacy</a>
<a className="hover:text-[#1C1917]" href="#">Terms</a>
<a className="hover:text-[#1C1917]" href="#">Manifesto</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
