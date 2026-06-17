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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-banknote text-emerald-500 w-6 h-6" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="text-lg font-medium tracking-tight text-white">PrestamistaPro</span>
</div>
<a className="hidden sm:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors" href="#oferta">
                Obtener Guía
            </a>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Método Real y Comprobado
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Presta dinero sin garantía, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">reduce riesgos y escala.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Descubre cómo pasé del caos a la calma en 4 años. Construye un negocio sostenible, cobra por celular y evita pérdidas grandes con un sistema diseñado para prestamistas modernos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-emerald-500 transition-all text-base font-medium text-white bg-emerald-600 w-full h-12 rounded-lg pr-8 pl-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]" href="#oferta">
                    Descargar Ebook Ahora
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center text-base font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors" href="#beneficios">
                    Ver lo que aprenderás
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 text-zinc-500 text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Cobranza Digital
                </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Sin Conflictos
                </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    Escalable
                </div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Tu transformación financiera</h2>
<p className="text-zinc-400 mt-4 text-lg">¿En qué lado quieres estar?</p>
</div>
<div className="grid md:grid-cols-2 gap-8 relative">

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-950 border border-white/10 rounded-full items-center justify-center z-10 text-zinc-500 font-bold text-sm shadow-xl">
                    VS
                </div>

<div className="group relative p-8 rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/40 to-orange-500/40"></div>

<div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">Antes</h3>
<p className="text-amber-500 font-medium text-lg tracking-tight">CAOS FINANCIERO</p>
</div>
<ul className="space-y-5 mb-8 flex-grow">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-x w-3.5 h-3.5 text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-zinc-400 text-lg">Clientes Problemáticos</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-x w-3.5 h-3.5 text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-zinc-400 text-lg">Cobros Fallidos</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-x w-3.5 h-3.5 text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-zinc-400 text-lg">Estrés Constante</span>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="flex items-center justify-center gap-3 text-zinc-500">
<svg className="lucide lucide-frown w-5 h-5" data-lucide="frown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<span className="text-sm">Método Tradicional</span>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-950 border border-emerald-500/30 overflow-hidden shadow-[0_0_50px_-15px_rgba(16,185,129,0.1)]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400"></div>

<div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider">Después</h3>
<p className="text-emerald-400 font-medium text-lg tracking-tight">CALMA Y PROSPERIDAD</p>
</div>
<ul className="space-y-5 mb-8 flex-grow">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-lg font-medium">Clientes Confiables</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-lg font-medium">Cobros Automáticos</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-lg font-medium">Libertad Financiera</span>
</li>
</ul>
<div className="mt-auto pt-6 border-t border-emerald-500/20">
<div className="flex items-center justify-center gap-3 text-emerald-400">
<svg className="lucide lucide-smile w-5 h-5" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<span className="text-sm font-medium">Método del Libro</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="relative group order-2 md:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-zinc-950 aspect-[3/4] md:aspect-[4/3] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">

<div className="text-center p-8">
<svg className="lucide lucide-book-open w-16 h-16 text-emerald-500 mx-auto mb-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Del Caos a la Calma</h3>
<p className="text-zinc-500 text-lg">Guía Definitiva de Préstamos</p>
<div className="mt-8 flex justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Tu guía para el éxito financiero
                </h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                    A lo largo de 4 años de experiencia como prestamista, he desarrollado un sistema que elimina el estrés del cobro manual y la incertidumbre. Este no es solo un libro, es el mapa exacto que usé para salir de las pérdidas y construir un negocio rentable.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="text-zinc-500">Aprende a contratar empleados y crear rutas de crédito.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
<svg className="lucide lucide-smartphone w-5 h-5 text-emerald-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div>
<p className="text-zinc-500">Olvídate de tocar puertas. Digitaliza tu cobranza al 100%.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
<svg className="lucide lucide-shield-check w-5 h-5 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-zinc-500">Método de filtro para prestar solo a quien paga a tiempo.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5" id="beneficios">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Beneficios del Método Definitivo
                </h2>
<p className="text-lg text-zinc-400">Lo que lograrás al implementar este sistema en tu negocio.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-biceps-flexed w-6 h-6 text-emerald-400" data-lucide="biceps-flexed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"></path><path d="M15 14a5 5 0 0 0-7.584 2"></path><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Método Real</h3>
<p className="text-zinc-400 leading-relaxed">Estrategias probadas en la calle para prestar y cobrar sin perder tu capital inicial.</p>
</div>

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cobranza Digital</h3>
<p className="text-zinc-400 leading-relaxed">Sistema de cobros sin conflictos, eliminando el estrés de las confrontaciones personales.</p>
</div>

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-6 h-6 text-emerald-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Clientes Confiables</h3>
<p className="text-zinc-400 leading-relaxed">Aprende a filtrar y construir una cartera de clientes que valoran tu servicio.</p>
</div>

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-droplets w-6 h-6 text-emerald-400" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Paso a Paso</h3>
<p className="text-zinc-400 leading-relaxed">Guía clara para empezar como prestamista desde cero, incluso con poco capital.</p>
</div>

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-snowflake w-6 h-6 text-emerald-400" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Escala con Éxito</h3>
<p className="text-zinc-400 leading-relaxed">De autoempleado a dueño de negocio: crea rutas y delega el trabajo operativo.</p>
</div>

<div className="group p-6 bg-zinc-950/50 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-6 h-6 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Vivir Bien</h3>
<p className="text-zinc-400 leading-relaxed">El objetivo final: estabilidad financiera sin caos, ni estrés, ni llamadas interminables.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/50">
<div className="max-w-5xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
<svg className="lucide lucide-gift w-4 h-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                Oferta por tiempo limitado
            </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-12">
                4 Bonos Exclusivos <span className="text-zinc-500">Incluidos Gratis</span>
</h2>
<div className="space-y-4">

<div className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-950 rounded-xl border border-white/5 items-start">
<div className="shrink-0 w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/20">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Checklist del Prestamista Principiante (PDF)</h4>
<p className="text-zinc-400 text-lg">Qué revisar antes de prestar dinero para reducir riesgos desde el primer día. Una hoja de ruta esencial para no cometer errores de novato.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-950 rounded-xl border border-white/5 items-start">
<div className="shrink-0 w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/20">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Guía práctica: Configuración del Sistema de Cobros</h4>
<p className="text-zinc-400 text-lg">Aprende a usar el sistema de administración y control de préstamos que utilizo para registrar clientes, créditos y pagos sin estrés tecnológico.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-950 rounded-xl border border-white/5 items-start">
<div className="shrink-0 w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/20">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Plantilla de control de clientes y créditos</h4>
<p className="text-zinc-400 text-lg">Una plantilla simple y efectiva (Excel/Sheets) lista para usar. Lleva el control de préstamos, cuotas y saldos al centavo.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 p-6 bg-zinc-950 rounded-xl border border-white/5 items-start">
<div className="shrink-0 w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/20">4</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Acceso a tutoriales oficiales</h4>
<p className="text-zinc-400 text-lg">Videotutoriales directos para administradores y cobradores, para que no pierdas tiempo adivinando cómo funciona el sistema.</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-zinc-500 text-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Todos los bonos se entregan dentro de la plataforma Hotmart junto con el ebook.
                </p>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-950 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    10 Preguntas Clave sobre tu Éxito
                </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Transformando tu negocio, cobrando sin conflictos y construyendo tu libertad financiera.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">1</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Es legal prestar dinero de esta forma?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sí, el método te guía para operar dentro del marco legal y con contratos sólidos.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">2</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Realmente se puede vivir de esto?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Absolutamente, el método te muestra cómo construir un flujo de ingresos constante y significativo.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">3</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Necesito mucho capital para empezar?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">No, aprende a iniciar con recursos mínimos y a reinvertir tus ganancias para crecer de forma escalable.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">4</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Qué pasa si un cliente no paga?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Aprende protocolos de recuperación de cartera y manejo de morosidad sin perder la calma.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">5</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Cómo evito conflictos al cobrar?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">El libro enseña estrategias de comunicación y herramientas digitales para cobros efectivos y pacíficos.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">6</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿El método es complicado de aplicar?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">No, está diseñado paso a paso con un lenguaje claro, ideal para principiantes y expertos.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">7</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Es seguro usar el celular para cobros?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sí, descubre plataformas y métodos seguros para gestionar transacciones móviles sin riesgos.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">8</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Requiere mucho tiempo diario?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Una vez establecido, el sistema optimiza tu tiempo, permitiéndote gestionar tu negocio eficientemente.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">9</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Cómo encuentro clientes confiables?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Implementa un sistema de filtrado y evaluación para minimizar riesgos y asegurar el retorno.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start group hover:bg-zinc-900 transition-colors">
<div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-semibold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">10</div>
<div>
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            ¿Vale la pena la inversión en el libro?
                            <svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Con las estrategias y conocimientos para evitar pérdidas y maximizar ganancias, se paga solo rápidamente.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5" id="oferta">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Empieza hoy tu negocio de préstamos
            </h2>
<p className="text-xl text-zinc-400 mb-10">
                Obtén el método completo, la experiencia de 4 años y todos los bonos por un pago único. Acceso inmediato.
            </p>
<div className="p-8 rounded-3xl bg-zinc-900 border border-emerald-500/30 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)]">
<div className="flex items-end justify-center gap-2 mb-2">
<span className="text-sm text-zinc-400 line-through mb-2">Precio Regular</span>
</div>
<div className="flex items-center justify-center gap-1 mb-8">
<span className="text-6xl font-semibold text-white tracking-tighter">Oferta</span>
<span className="text-xl text-emerald-400 font-medium">Especial</span>
</div>
<button className="hover:bg-emerald-500 transition-all transform hover:scale-[1.01] flex text-lg font-semibold text-white bg-emerald-600 w-full rounded-xl mb-6 pt-4 pr-6 pb-4 pl-6 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://pay.hotmart.com/X103835906V';window.location.href='https://pay.hotmart.com/';window.location.href='https://pay.hotmart.com/X103835906V'" role="button">
                    Comprar Ahora en Hotmart
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Pago 100% Seguro
                    </span>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-zap w-4 h-4 text-emerald-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Acceso Inmediato
                    </span>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-award w-4 h-4 text-emerald-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        Garantía de Satisfacción
                    </span>
</div>
</div>
<p className="mt-12 text-zinc-600 text-sm">
                Realizado por Jesus Villanueva. Todos los derechos reservados.<br/>
                Este producto no garantiza la obtención de resultados. Cualquier referencia al desempeño de una estrategia no debe ser interpretada como una garantía de resultados.
            </p>
</div>
</section>


    </>
  );
}
