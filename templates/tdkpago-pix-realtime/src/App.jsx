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
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
<div className="mx-auto max-w-6xl px- sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center space-x-2">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
<span className="text-emerald-400 text-sm font-semibold tracking-tight">T</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-slate-50">Tdkpago</span>
</div>

<nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#features">Características</a>
<a className="hover:text-slate-50 transition-colors" href="#developers">Para devs</a>
<a className="hover:text-slate-50 transition-colors" href="#seguridad">Seguridad</a>
<a className="hover:text-slate-50 transition-colors" href="#precios">Precios</a>
</nav>

<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center text-xs font-medium text-slate-300 hover:text-slate-50 px-3 py-1.5 rounded-md border border-slate-700/80 hover:border-slate-500/80 bg-slate-900/60 hover:bg-slate-900 transition-colors">
              Iniciar sesión
            </button>
<button className="inline-flex items-center text-xs font-medium px-4 py-2 rounded-md bg-emerald-500 text-slate-950 hover:bg-emerald-400 border border-emerald-400/80 shadow-sm shadow-emerald-500/20 transition-colors">
              Crear cuenta gratis
            </button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="pt-12 pb-16 sm:pt-16 sm:pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<p className="text-[11px] font-medium text-emerald-300 tracking-tight">
                API de cobros con QR de PIX lista para producción
              </p>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
              Integra cobros con QR de PIX<br className="hidden sm:block"/>
              en minutos, no en semanas.
            </h1>
<p className="text-sm sm:text-base text-slate-300/90 max-w-xl mb-6">
              Tdkpago es una API diseñada para que tus productos puedan generar, gestionar y conciliar pagos con QR de PIX de forma segura, rápida y escalable. Ideal para SaaS, marketplaces, apps móviles y POS.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="flex flex-col space-y-1 border border-slate-800 rounded-lg px-3 py-2.5 bg-slate-950/60">
<span className="text-xs text-slate-400">Tiempo de integración</span>
<span className="text-sm font-medium text-slate-50">≤ 1 día</span>
</div>
<div className="flex flex-col space-y-1 border border-slate-800 rounded-lg px-3 py-2.5 bg-slate-950/60">
<span className="text-xs text-slate-400">Uptime</span>
<span className="text-sm font-medium text-slate-50">99.9%</span>
</div>
<div className="flex flex-col space-y-1 border border-slate-800 rounded-lg px-3 py-2.5 bg-slate-950/60">
<span className="text-xs text-slate-400">Latencia promedio</span>
<span className="text-sm font-medium text-slate-50">
                  &lt; 200 ms
                </span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
<button className="inline-flex justify-center items-center text-sm font-medium px-4 py-2.5 rounded-md bg-emerald-500 text-slate-950 hover:bg-emerald-400 border border-emerald-400/80 shadow-sm shadow-emerald-500/20 transition-colors">
                Empezar con la API
              </button>
<button className="inline-flex justify-center items-center text-sm font-medium px-4 py-2.5 rounded-md bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-colors">
                Ver documentación
              </button>
</div>
<p className="text-[11px] text-slate-400">
              Sin costo fijo. Pagás solo por transacción. Onboarding guiado para tu equipo técnico.
            </p>

<div className="mt-8">
<p className="text-[11px] font-medium text-slate-500 uppercase tracking-[0.16em] mb-3">
                Integrado en productos financieros y SaaS latinoamericanos
              </p>
<div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
<div className="flex items-center space-x-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] tracking-tight text-slate-200">PX</span>
<span>PayXpress</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] tracking-tight text-slate-200">MB</span>
<span>MercadoBiz</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] tracking-tight text-slate-200">FL</span>
<span>Finlayer</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.08),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(59,130,246,0.06),_transparent_60%)] pointer-events-none"></div>

<div className="border border-slate-800/90 rounded-xl bg-slate-950/80 shadow-xl shadow-black/40 overflow-hidden mb-5">
<div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-950/90">
<div className="flex items-center space-x-2">
<span className="h-2 w-2 rounded-full bg-rose-500/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
<span className="text-[11px] text-slate-400 ml-1">curl</span>
</div>
<span className="text-[11px] text-slate-500">Crear QR de cobro</span>
</div>
<div className="px-4 py-3 text-[11px] font-mono leading-relaxed bg-slate-950">
<pre className="whitespace-pre-wrap text-slate-100"><code>
curl -X POST https://api.tdkpago.com/v1/pix/charges \
  -H "Authorization: Bearer <tu_api_key>" \
  -H "Content-Type: application/json" \
  -d '{
    "monto": 150.00,
    "moneda": "BRL",
    "referencia": "ORD-87341",
    "descripcion": "Suscripción Pro",
    "callback_url": "https://tuapp.com/webhook/pix"
  }'
                </tu_api_key></code></pre>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="border border-slate-800 rounded-lg bg-slate-950/80 px-3 py-2.5">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] font-medium text-slate-300">Pago recibido</p>

<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9 12l2 2 4-4"></path>
</svg>
</div>
<p className="text-[11px] text-slate-400 mb-1">Referencia</p>
<p className="text-[11px] font-medium text-slate-100">ORD-87341</p>
<div className="flex justify-between items-end mt-2 pt-2 border-t border-slate-800">
<div>
<p className="text-[10px] text-slate-500">Monto</p>
<p className="text-sm font-medium text-emerald-400">R$ 150,00</p>
</div>
<p className="text-[10px] text-slate-500">PIX • QR</p>
</div>
</div>
<div className="border border-slate-800 rounded-lg bg-slate-950/80 px-3 py-2.5">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] font-medium text-slate-300">QR generado</p>

<svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h8v8H3z"></path>
<path d="M13 3h8v8h-8z"></path>
<path d="M3 13h8v8H3z"></path>
<path d="M17 13h4v4h-4z"></path>
<path d="M17 17h-4"></path>
<path d="M21 21h-4v-4"></path>
</svg>
</div>
<p className="text-[11px] text-slate-400 mb-1">Tiempo promedio</p>
<p className="text-[11px] font-medium text-slate-100">&lt; 200 ms</p>
<div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
<p className="text-[10px] text-slate-500">Expira en 15 min</p>
<span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/40 text-[10px] text-sky-300">
                    API v1.2
                  </span>
</div>
</div>
</div>

<div className="absolute -bottom-4 -right-2 sm:-right-6 lg:-right-8 border border-emerald-500/40 bg-slate-950/95 rounded-xl px-3 py-2 shadow-lg shadow-emerald-500/10 flex items-center space-x-2">

<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M9 11l2 2 4-4"></path>
</svg>
<div>
<p className="text-[11px] font-medium text-slate-100">Cumple estándar bancario</p>
<p className="text-[10px] text-slate-400">Tokenización, encriptación y auditoría completa.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/95 py-14 sm:py-16" id="features">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                Pensado para tus partners, optimizado para tu equipo técnico.
              </h2>
<p className="text-sm text-slate-300 max-w-xl">
                Un solo endpoint para crear cobros con QR de PIX, notificaciones en tiempo real y herramientas de conciliación listas para integrarse con tu stack actual.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border border-slate-800 rounded-xl bg-slate-950/80 p-4 hover:border-slate-700 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center mb-3 space-x-2">

<svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
<path d="M7 8h10v8H7z"></path>
</svg>
<h3 className="text-sm font-medium text-slate-50">QR de PIX dinámico y estático</h3>
</div>
<p className="text-sm text-slate-300 mb-3">
                Generá códigos QR únicos por transacción o reutilizables, con montos fijos u opcionales. Ideal para checkout online, apps y terminales físicas.
              </p>
<ul className="space-y-1.5 text-[11px] text-slate-400">
<li>• Soporte para montos variables</li>
<li>• Vencimientos configurables</li>
<li>• Estado del pago en tiempo real</li>
</ul>
</div>

<div className="border border-slate-800 rounded-xl bg-slate-950/80 p-4 hover:border-slate-700 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center mb-3 space-x-2">

<svg className="h-5 w-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1 8a5 5 0 1 0-4.2-7.5"></path>
<path d="M5.5 8.1a5 5 0 1 0 1 9.8"></path>
<path d="M15 13a5 5 0 1 1-8.9 3"></path>
<path d="M18 11l-3 3"></path>
</svg>
<h3 className="text-sm font-medium text-slate-50">Webhooks confiables</h3>
</div>
<p className="text-sm text-slate-300 mb-3">
                Confirmaciones de pago firmadas, con reintentos automáticos, para que tu sistema esté siempre sincronizado sin pooling.
              </p>
<ul className="space-y-1.5 text-[11px] text-slate-400">
<li>• Firmas HMAC verificables</li>
<li>• Reintentos exponenciales</li>
<li>• Replay protection y logs</li>
</ul>
</div>

<div className="border border-slate-800 rounded-xl bg-slate-950/80 p-4 hover:border-slate-700 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center mb-3 space-x-2">

<svg className="h-5 w-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
<h3 className="text-sm font-medium text-slate-50">Monitoreo y conciliación</h3>
</div>
<p className="text-sm text-slate-300 mb-3">
                Panel para tu equipo de operaciones y endpoints para conciliar saldos y pagos a nivel de comercio, partner o subcuenta.
              </p>
<ul className="space-y-1.5 text-[11px] text-slate-400">
<li>• Dashboard en tiempo real</li>
<li>• Exportación a CSV y BI</li>
<li>• Liquidaciones configurables</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950 py-14 sm:py-16" id="developers">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
<div>
<div className="inline-flex items-center px-2 py-1 mb-4 rounded-full border border-sky-500/30 bg-sky-500/5">

<svg className="h-3.5 w-3.5 text-sky-400 mr-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
<span className="text-[11px] text-sky-200 font-medium tracking-tight">Diseñado para developers</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-3">
              API clara, SDKs modernos y sandbox ilimitado.
            </h2>
<p className="text-sm text-slate-300 mb-4">
              Documentación legible, ejemplos listos para copiar/pegar y herramientas que simplifican la integración para tu equipo.
            </p>
<ul className="space-y-2.5 text-sm text-slate-300">
<li className="flex items-start space-x-2">

<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>SDKs en <span className="text-slate-50">Node.js, Python, PHP y Java</span>, con tipado y ejemplos de uso.</span>
</li>
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Ambiente sandbox gratuito con datos de prueba y simulación de pagos PIX.</span>
</li>
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>CLI para gestionar API keys, ver logs y testear webhooks localmente.</span>
</li>
</ul>

<div className="mt-6 border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-1.5">

<svg className="h-4 w-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="15.5" r="2.5"></circle>
<path d="m21 2-9.6 9.6"></path>
<path d="m15.5 7.5 3 3L18 11l-2-2-1.5 1.5"></path>
</svg>
<p className="text-[11px] font-medium text-slate-200">API keys en segundos</p>
</div>
<button className="text-[11px] text-sky-300 hover:text-sky-200 border border-sky-500/30 hover:border-sky-400/60 rounded-full px-2 py-0.5 bg-sky-500/5 transition-colors">
                  Ver guía rápida
                </button>
</div>
<div className="text-[11px] font-mono text-slate-300 bg-slate-950/90 border border-slate-800 rounded-lg px-3 py-2">
                tdkp_test_2Lx9pF7A...q8
              </div>
<p className="text-[11px] text-slate-500 mt-2">
                Rotación de claves, permisos por entorno y uso por equipo.
              </p>
</div>
</div>

<div className="border border-slate-800 rounded-xl bg-slate-950/80 overflow-hidden">
<div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
<div className="flex items-center space-x-2 text-[11px] text-slate-300">

<svg className="h-3.5 w-3.5 text-slate-400 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12.75 8.75 14 7.5 12.75"></path>
<path d="M13.25 10 14.5 11.25 13.25 12.5"></path>
<path d="M12 7v10"></path>
<path d="M14.5 2.5 21 9v11a2 2 0 0 1-2 2H9.5a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2z"></path>
</svg>
<span>Ejemplo de creación y confirmación de cobro</span>
</div>
<div className="flex items-center space-x-1 text-[10px]">
<button className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-100 border border-slate-700">Node.js</button>
<button className="px-2 py-0.5 rounded-full bg-transparent text-slate-500 border border-transparent hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100 transition-colors">Python</button>
<button className="px-2 py-0.5 rounded-full bg-transparent text-slate-500 border border-transparent hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100 transition-colors">PHP</button>
</div>
</div>
<div className="px-4 py-3 text-[11px] font-mono text-slate-100 bg-slate-950">
<pre className="whitespace-pre overflow-x-auto"><code>
// 1. Instalá el SDK
// npm install @tdkpago/sdk

import { Tdkpago } from "@tdkpago/sdk";

const client = new Tdkpago({
  apiKey: process.env.TDKPAGO_API_KEY,
  environment: "sandbox",
});

// 2. Creá un cobro con QR de PIX
const charge = await client.pix.createCharge({
  amount: 15000,            // centavos
  currency: "BRL",
  reference: "ORD-87341",
  description: "Suscripción Pro",
  customer: {
    email: "cliente@ejemplo.com",
  },
});

// Mostrá el QR en tu frontend
console.log(charge.qrCodeImageUrl);
console.log(charge.pixCopyPaste);

// 3. Recibí la confirmación vía webhook
// POST /webhooks/tdkpago
if (event.type === "pix.charge.paid") {
  const { reference, paid_at } = event.data;
  // Marcá la orden como pagada en tu sistema
}
</code></pre>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/95 py-14 sm:py-16" id="seguridad">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-3">
                Seguridad bancaria de extremo a extremo.
              </h2>
<p className="text-sm text-slate-300 mb-5">
                Tdkpago fue diseñada siguiendo las mejores prácticas de la industria financiera: cifrado fuerte, aislamiento de datos sensibles y monitoreo constante.
              </p>
<div className="grid sm:grid-cols-2 gap-4 mb-4">
<div className="border border-slate-800 rounded-lg bg-slate-950/80 p-3">
<p className="text-[11px] font-medium text-slate-100 mb-1">Cifrado y tokenización</p>
<p className="text-[11px] text-slate-400">
                    Datos de pago encriptados en tránsito y en reposo, con tokenización de identificadores sensibles.
                  </p>
</div>
<div className="border border-slate-800 rounded-lg bg-slate-950/80 p-3">
<p className="text-[11px] font-medium text-slate-100 mb-1">Controles de acceso</p>
<p className="text-[11px] text-slate-400">
                    API keys por entorno, permisos por equipo y logs de auditoría exportables.
                  </p>
</div>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Infraestructura en la nube con redundancia geográfica y monitoreo 24/7.</span>
</li>
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Controles anti-fraude y límites configurables por partner.</span>
</li>
</ul>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5">
<p className="text-[11px] font-medium text-emerald-300 tracking-[0.18em] uppercase mb-3">
                Caso de uso
              </p>
<p className="text-sm text-slate-100 mb-4">
                “Integramos Tdkpago en nuestro gateway y en menos de una semana todos nuestros comercios pudieron aceptar PIX con QR. Nos ahorró meses de desarrollo interno y redujo nuestros costos operativos.”
              </p>
<div className="flex items-center mt-4">
<img alt="Persona" className="h-9 w-9 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="ml-3">
<p className="text-[11px] font-medium text-slate-100">Camila Duarte</p>
<p className="text-[10px] text-slate-400">CTO en PayXpress</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950 py-14 sm:py-16" id="precios">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-3">
              Empezá gratis, pagá solo por transacción.
            </h2>
<p className="text-sm text-slate-300">
              Sin costos de setup ni mensualidades obligatorias. Descuentos progresivos según volumen de pagos procesados.
            </p>
</div>
<div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-6 items-start">

<div className="border border-emerald-500/40 bg-slate-950/90 rounded-2xl p-5 shadow-lg shadow-emerald-500/10">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-sm font-medium text-slate-50">Plan Partners</p>
<p className="text-[11px] text-slate-400">Ideal para fintechs, SaaS y plataformas de pago.</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/60 text-emerald-300 bg-emerald-500/10">
                  Recomendado
                </span>
</div>
<div className="flex items-baseline space-x-1 mt-4 mb-4">
<span className="text-3xl font-semibold tracking-tight text-slate-50">1,49%</span>
<span className="text-xs text-slate-400">+ R$ 0,30 por transacción aprobada</span>
</div>
<ul className="space-y-2.5 text-sm text-slate-300 mb-4">
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Sin cargo fijo mensual ni costo de alta.</span>
</li>
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Reportes de liquidación y conciliación incluidos.</span>
</li>
<li className="flex items-start space-x-2">
<svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
<span>Soporte prioritario por Slack/Email para equipos técnicos.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
<button className="flex-1 inline-flex justify-center items-center text-sm font-medium px-4 py-2.5 rounded-md bg-emerald-500 text-slate-950 hover:bg-emerald-400 border border-emerald-400/80 transition-colors">
                  Crear cuenta y probar sandbox
                </button>
<button className="inline-flex justify-center items-center text-sm font-medium px-4 py-2.5 rounded-md bg-slate-950 text-slate-100 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors">
                  Hablar con ventas
                </button>
</div>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col justify-between">
<div>
<p className="text-sm font-medium text-slate-50 mb-1">¿Alto volumen de transacciones?</p>
<p className="text-sm text-slate-300 mb-3">
                  Si procesás más de 50.000 pagos mensuales, diseñamos una tarifa a medida con descuentos por volumen y soporte dedicado.
                </p>
<ul className="space-y-2 text-[11px] text-slate-400">
<li>• Onboarding técnico dedicado</li>
<li>• Revisión de arquitectura y seguridad</li>
<li>• SLA personalizado</li>
</ul>
</div>
<button className="mt-4 inline-flex items-center justify-center text-xs font-medium px-3 py-2 rounded-md bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-colors">
                Agendar llamada estratégica
              </button>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900/80 bg-slate-950/95 py-12 sm:py-14">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="border border-slate-800 rounded-2xl bg-gradient-to-r from-slate-950/90 via-slate-950 to-slate-950/90 px-5 py-6 sm:px-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-2">
                Lleva los cobros con QR de PIX a tu producto en cuestión de días.
              </h3>
<p className="text-sm text-slate-300">
                Creá tu cuenta de Tdkpago, probá en sandbox gratis y habilitá producción cuando estés listo. Nuestro equipo te acompaña en la integración.
              </p>
</div>
<div className="flex flex-col space-y-2 w-full sm:w-auto">
<button className="inline-flex justify-center items-center text-sm font-medium px-4 py-2.5 rounded-md bg-emerald-500 text-slate-950 hover:bg-emerald-400 border border-emerald-400/80 transition-colors w-full sm:w-auto">
                Comenzar ahora
              </button>
<button className="inline-flex justify-center items-center text-xs font-medium px-3 py-2 rounded-md bg-slate-950 text-slate-200 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors w-full sm:w-auto">
                Hablar con equipo técnico
              </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500">
<div className="flex items-center space-x-2">
<div className="h-6 w-6 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
<span className="text-emerald-400 text-[11px] font-semibold tracking-tight">T</span>
</div>
<div>
<p className="text-[11px] text-slate-300">Tdkpago</p>
<p className="text-[10px] text-slate-500">Infraestructura de cobros con QR de PIX para partners.</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-1">
<a className="hover:text-slate-300 transition-colors" href="#">Documentación</a>
<a className="hover:text-slate-300 transition-colors" href="#">Estado</a>
<a className="hover:text-slate-300 transition-colors" href="#">Legal</a>
<span className="text-slate-700">•</span>
<span>© <span id="year">2025</span> Tdkpago</span>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
