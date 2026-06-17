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
      

<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md transition-opacity duration-300" id="age-gate">
<div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-5 border border-slate-700 shadow-inner">
<span className="font-bold text-white text-sm">+18</span>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Acceso Restringido</h2>
<p className="text-xs text-slate-400 leading-relaxed mb-6 px-2">
                    Este sitio contiene información sobre juegos de azar dirigida exclusivamente a mayores de 18 años.
                </p>
<div className="grid grid-cols-2 gap-3">
<button className="w-full py-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 font-medium text-xs" onclick="window.location.href='https://www.google.com'">Salir</button>
<button className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg shadow-amber-900/20" onclick="document.getElementById('age-gate').style.display='none'">Soy mayor de 18</button>
</div>
</div>
</div>
</div>

<div className="relative z-50 bg-slate-900/80 border-b border-slate-800 text-[10px] py-2 text-center text-slate-500 font-medium backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-3">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-slate-400" data-lucide="shield-check"></i> Licencia DGOJ</span>
<span className="hidden sm:inline text-slate-700">|</span>
<span>Juega con responsabilidad. Sin diversión no hay juego. +18</span>
</div>
</div>

<nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center shadow-lg shadow-orange-500/10">
<span className="font-bold text-white text-sm">TB</span>
</div>
<span className="font-bold text-white tracking-tight text-lg">TopBonus<span className="text-slate-500 text-sm font-medium ml-0.5">Esp</span></span>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-400">
<span className="hidden md:block">Actualizado: Octubre 2023</span>
</div>
</div>
</nav>

<main className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 py-8 md:py-12">

<div className="text-center max-w-3xl mx-auto mb-10">
<h1 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                Encuentra el Casino Online perfecto
            </h1>
<p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                Análisis profesional de operadores con licencia en España. 
                <span className="text-amber-500/80 block mt-1 text-xs font-medium bg-amber-500/10 py-1 px-2 rounded-full inline-block border border-amber-500/20">
                    Nota Legal: Las promociones de bienvenida están prohibidas (RD 958/2020).
                </span>
</p>
</div>

<div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-900 border border-slate-800 rounded-t-xl text-xs font-semibold text-slate-400 uppercase tracking-wider">
<div className="col-span-2">Casino</div>
<div className="col-span-2 text-center">Opiniones</div>
<div className="col-span-4 text-center">Información Legal &amp; Promos (+30 días)</div>
<div className="col-span-2 text-center">Licencia</div>
<div className="col-span-2 text-center">Acceso</div>
</div>

<div className="space-y-1 md:space-y-0 bg-slate-900/20 md:bg-transparent md:border-x md:border-b md:border-slate-800 md:rounded-b-xl overflow-hidden">

<details className="group bg-slate-900/40 md:bg-slate-950 hover:bg-slate-900/80 border border-slate-800 md:border-0 md:border-b md:border-slate-800/50 transition-colors open:bg-slate-900">
<summary className="cursor-pointer md:grid md:grid-cols-12 md:gap-4 p-4 md:px-6 md:py-5 items-center relative">

<div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
<div className="w-32 h-12 bg-[#0d2644] rounded-md border border-slate-700/50 flex items-center justify-center p-2 relative group-hover:scale-105 transition-transform">

<span className="font-bold text-white text-sm tracking-tighter uppercase italic flex flex-col items-center leading-none">
                                MARATHON
                                <span className="text-[8px] font-normal not-italic mt-0.5 tracking-widest text-blue-300">BET</span>
</span>
</div>
<div className="md:hidden flex items-center gap-1 text-emerald-400">
<i className="w-4 h-4 fill-current" data-lucide="thumbs-up"></i> <span className="text-xs font-bold">9.8</span>
</div>
</div>

<div className="hidden md:flex flex-col items-center justify-center md:col-span-2 gap-1">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="thumbs-up"></i> 224</span>
<span className="flex items-center gap-1.5 text-slate-500"><i className="w-4 h-4 text-slate-700" data-lucide="thumbs-down"></i> 24</span>
</div>
</div>

<div className="md:col-span-4 text-center mb-4 md:mb-0">
<div className="flex flex-col items-center justify-center h-full">
<span className="text-amber-500 font-bold text-sm md:text-base tracking-tight">Catálogo de Fidelidad</span>
<div className="flex items-center gap-1 mt-1 justify-center">
<span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Verificado +30 días</span>
<i className="w-3 h-3 text-slate-600 cursor-help" data-lucide="info"></i>
</div>
</div>
</div>

<div className="flex md:flex-col items-center justify-between md:justify-center md:col-span-2 mb-4 md:mb-0 px-2 md:px-0">
<span className="md:hidden text-xs text-slate-500">Licencia:</span>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-4 h-3 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 rounded-sm shadow-sm"></div>
<span className="text-[10px] bg-red-950 text-red-200 px-1 rounded border border-red-900 font-bold">+18</span>
</div>
<span className="text-[10px] text-slate-500 mt-1">Licencia Singular</span>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-2">
<a className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg shadow-lg shadow-amber-900/20 text-center transition-all hover:scale-[1.02]" href="https://www.marathonbet.es" rel="nofollow" target="_blank">
                            Visitar el Sitio
                        </a>
<span className="text-center text-[10px] text-emerald-500/80 hover:text-emerald-400 underline decoration-dotted transition-colors">
                            Leer Reseña Completa
                        </span>
</div>
</summary>

<div className="border-t border-slate-800 bg-slate-900/30 p-4 md:p-8 cursor-default">
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 space-y-6">
<div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="file-text"></i> Análisis Editorial
                                </h3>
<p className="text-xs text-slate-400 leading-relaxed text-justify">
                                    Marathonbet se distingue en el mercado español principalmente por su política de <strong>0% de margen</strong> en apuestas deportivas, lo que se traduce en las cuotas más competitivas del sector. Su sección de Casino ha crecido exponencialmente, integrando proveedores top como Evolution Gaming para su ruleta en vivo. La interfaz es austera pero funcional, priorizando la velocidad de carga sobre los gráficos pesados.
                                </p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Lo Mejor</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Mejores cuotas (0% Margen)</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Retiros rápidos (Trustly)</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Club de fidelidad sólido</li>
</ul>
</div>
<div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">A Mejorar</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> Diseño web algo anticuado</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> Sin Streaming de video</li>
</ul>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
<h4 className="text-xs font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Ficha Técnica</h4>
<ul className="space-y-2 text-[11px]">
<li className="flex justify-between"><span className="text-slate-500">Licencia:</span> <span className="text-slate-300">DGOJ (General + Singular)</span></li>
<li className="flex justify-between"><span className="text-slate-500">Pagos:</span> <span className="text-slate-300">Bizum, PayPal, Visa</span></li>
<li className="flex justify-between"><span className="text-slate-500">Retiro Mín:</span> <span className="text-slate-300">5€</span></li>
<li className="flex justify-between"><span className="text-slate-500">Juegos:</span> <span className="text-slate-300">Slots, Ruleta, Blackjack</span></li>
<li className="flex justify-between"><span className="text-slate-500">Soporte:</span> <span className="text-slate-300">Chat, Email, Teléfono</span></li>
</ul>
</div>

<div className="text-center">
<a className="block w-full bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs py-2 rounded shadow-lg transition-colors mb-2" href="https://www.marathonbet.es" rel="nofollow" target="_blank">
                                    Ir a MarathonBet.es
                                </a>
<p className="text-[9px] text-slate-600">Publicidad | +18 | Juega con responsabilidad</p>
</div>
</div>
</div>
</div>
</details>

<details className="group bg-slate-900/40 md:bg-slate-950 hover:bg-slate-900/80 border border-slate-800 md:border-0 md:border-b md:border-slate-800/50 transition-colors">
<summary className="cursor-pointer md:grid md:grid-cols-12 md:gap-4 p-4 md:px-6 md:py-5 items-center relative">
<div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
<div className="w-32 h-12 bg-white rounded-md border border-slate-700/50 flex items-center justify-center p-2 relative">
<span className="font-serif text-slate-900 text-xs font-bold uppercase text-center leading-tight">
                                Gran Madrid
                                <span className="block text-[8px] text-pink-600 font-sans tracking-widest mt-0.5">Casino Online</span>
</span>
</div>
<div className="md:hidden flex items-center gap-1 text-emerald-400">
<i className="w-4 h-4 fill-current" data-lucide="thumbs-up"></i> <span className="text-xs font-bold">9.7</span>
</div>
</div>
<div className="hidden md:flex flex-col items-center justify-center md:col-span-2 gap-1">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="thumbs-up"></i> 235</span>
<span className="flex items-center gap-1.5 text-slate-500"><i className="w-4 h-4 text-slate-700" data-lucide="thumbs-down"></i> 56</span>
</div>
</div>
<div className="md:col-span-4 text-center mb-4 md:mb-0">
<div className="flex flex-col items-center justify-center h-full">
<span className="text-amber-500 font-bold text-sm md:text-base tracking-tight">Promociones Personalizadas</span>
<span className="text-[10px] text-slate-500 mt-1">Requiere verificación de identidad + 30 días</span>
</div>
</div>
<div className="flex md:flex-col items-center justify-between md:justify-center md:col-span-2 mb-4 md:mb-0 px-2 md:px-0">
<span className="md:hidden text-xs text-slate-500">Licencia:</span>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-4 h-3 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 rounded-sm shadow-sm"></div>
<span className="text-[10px] bg-red-950 text-red-200 px-1 rounded border border-red-900 font-bold">+18</span>
</div>
<span className="text-[10px] text-slate-500 mt-1">Casino Histórico</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<a className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg shadow-lg shadow-amber-900/20 text-center transition-all hover:scale-[1.02]" href="#">
                            Visitar el Sitio
                        </a>
<span className="text-center text-[10px] text-emerald-500/80 hover:text-emerald-400 underline decoration-dotted transition-colors">
                            Leer Reseña Completa
                        </span>
</div>
</summary>

<div className="border-t border-slate-800 bg-slate-900/30 p-4 md:p-8 cursor-default">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-6">
<div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="crown"></i> Prestigio y Seguridad
                                </h3>
<p className="text-xs text-slate-400 leading-relaxed text-justify">
                                    Gran Madrid Casino Online es la versión digital de uno de los casinos físicos más importantes de Europa (Torrelodones). Destaca por tener uno de los catálogos de slots más extensos (+1500) y mesas exclusivas de ruleta en vivo transmitidas desde su casino real. Su seguridad es de grado bancario.
                                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Lo Mejor</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Marca de máxima confianza</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Retiros en cajero físico</li>
</ul>
</div>
<div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">A Mejorar</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> Navegación web mejorable</li>
</ul>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
<h4 className="text-xs font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Ficha Técnica</h4>
<ul className="space-y-2 text-[11px]">
<li className="flex justify-between"><span className="text-slate-500">Licencia:</span> <span className="text-slate-300">ES (Nº 203)</span></li>
<li className="flex justify-between"><span className="text-slate-500">Pagos:</span> <span className="text-slate-300">Bizum, Skrill, Cajero</span></li>
<li className="flex justify-between"><span className="text-slate-500">Juegos:</span> <span className="text-slate-300">+1500 Slots</span></li>
</ul>
</div>
<div className="text-center">
<a className="block w-full bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs py-2 rounded shadow-lg transition-colors mb-2" href="#">
                                    Ir a Casino Gran Madrid
                                </a>
<p className="text-[9px] text-slate-600">Publicidad | +18</p>
</div>
</div>
</div>
</div>
</details>

<details className="group bg-slate-900/40 md:bg-slate-950 hover:bg-slate-900/80 border border-slate-800 md:border-0 md:border-b md:border-slate-800/50 transition-colors">
<summary className="cursor-pointer md:grid md:grid-cols-12 md:gap-4 p-4 md:px-6 md:py-5 items-center relative">
<div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
<div className="w-32 h-12 bg-pink-600 rounded-md border border-slate-700/50 flex items-center justify-center p-2 relative shadow-lg shadow-pink-900/20">
<span className="font-bold text-white text-sm tracking-tight">GoldenPark</span>
</div>
<div className="md:hidden flex items-center gap-1 text-emerald-400">
<i className="w-4 h-4 fill-current" data-lucide="thumbs-up"></i> <span className="text-xs font-bold">9.5</span>
</div>
</div>
<div className="hidden md:flex flex-col items-center justify-center md:col-span-2 gap-1">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="thumbs-up"></i> 198</span>
<span className="flex items-center gap-1.5 text-slate-500"><i className="w-4 h-4 text-slate-700" data-lucide="thumbs-down"></i> 12</span>
</div>
</div>
<div className="md:col-span-4 text-center mb-4 md:mb-0">
<div className="flex flex-col items-center justify-center h-full">
<span className="text-amber-500 font-bold text-sm md:text-base tracking-tight">Promociones Semanales</span>
<span className="text-[10px] text-slate-500 mt-1">Solo cuentas verificadas +30d</span>
</div>
</div>
<div className="flex md:flex-col items-center justify-between md:justify-center md:col-span-2 mb-4 md:mb-0 px-2 md:px-0">
<span className="md:hidden text-xs text-slate-500">Licencia:</span>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-4 h-3 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 rounded-sm shadow-sm"></div>
<span className="text-[10px] bg-red-950 text-red-200 px-1 rounded border border-red-900 font-bold">+18</span>
</div>
<span className="text-[10px] text-slate-500 mt-1">Grupo MGA</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<a className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg shadow-lg shadow-amber-900/20 text-center transition-all hover:scale-[1.02]" href="https://app.afiliago.com/go/19967/gk1pGsWh5T" rel="nofollow" target="_blank">
                            Visitar el Sitio
                        </a>
<span className="text-center text-[10px] text-emerald-500/80 hover:text-emerald-400 underline decoration-dotted transition-colors">
                            Leer Reseña Completa
                        </span>
</div>
</summary>

<div className="border-t border-slate-800 bg-slate-900/30 p-4 md:p-8 cursor-default">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-6">
<div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="smartphone"></i> Líder en Móvil
                                </h3>
<p className="text-xs text-slate-400 leading-relaxed text-justify">
                                    GoldenPark destaca por su excelente versión móvil y por ser parte del Grupo MGA, creadores de las famosas slots de bar españolas. Es la mejor opción si buscas jugar a clásicos como "La Mina de Oro" o "Citas" desde tu teléfono con total fiabilidad.
                                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Lo Mejor</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Especialistas en Slots Españolas</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Retiros inmediatos por Bizum</li>
</ul>
</div>
<div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">A Mejorar</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> Pocas mesas de casino en vivo</li>
</ul>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
<h4 className="text-xs font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Ficha Técnica</h4>
<ul className="space-y-2 text-[11px]">
<li className="flex justify-between"><span className="text-slate-500">Licencia:</span> <span className="text-slate-300">DGOJ España</span></li>
<li className="flex justify-between"><span className="text-slate-500">App:</span> <span className="text-slate-300">iOS / Android</span></li>
<li className="flex justify-between"><span className="text-slate-500">Bizum:</span> <span className="text-emerald-400">Sí, aceptado</span></li>
</ul>
</div>
<div className="text-center">
<a className="block w-full bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs py-2 rounded shadow-lg transition-colors mb-2" href="https://app.afiliago.com/go/19967/gk1pGsWh5T" rel="nofollow" target="_blank">
                                    Ir a GoldenPark
                                </a>
<p className="text-[9px] text-slate-600">Publicidad | +18</p>
</div>
</div>
</div>
</div>
</details>

<details className="group bg-slate-900/40 md:bg-slate-950 hover:bg-slate-900/80 border border-slate-800 md:border-0 md:border-b md:border-slate-800/50 transition-colors">
<summary className="cursor-pointer md:grid md:grid-cols-12 md:gap-4 p-4 md:px-6 md:py-5 items-center relative">
<div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
<div className="w-32 h-12 bg-green-700 rounded-md border border-slate-700/50 flex items-center justify-center p-2 relative">
<span className="font-bold italic text-white text-lg tracking-tighter">codere</span>
</div>
<div className="md:hidden flex items-center gap-1 text-emerald-400">
<i className="w-4 h-4 fill-current" data-lucide="thumbs-up"></i> <span className="text-xs font-bold">9.4</span>
</div>
</div>
<div className="hidden md:flex flex-col items-center justify-center md:col-span-2 gap-1">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="thumbs-up"></i> 412</span>
<span className="flex items-center gap-1.5 text-slate-500"><i className="w-4 h-4 text-slate-700" data-lucide="thumbs-down"></i> 30</span>
</div>
</div>
<div className="md:col-span-4 text-center mb-4 md:mb-0">
<div className="flex flex-col items-center justify-center h-full">
<span className="text-amber-500 font-bold text-sm md:text-base tracking-tight">Experiencia Omnicanal</span>
<span className="text-[10px] text-slate-500 mt-1">Deposita online / Retira en local (+30d)</span>
</div>
</div>
<div className="flex md:flex-col items-center justify-between md:justify-center md:col-span-2 mb-4 md:mb-0 px-2 md:px-0">
<span className="md:hidden text-xs text-slate-500">Licencia:</span>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-4 h-3 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 rounded-sm shadow-sm"></div>
<span className="text-[10px] bg-red-950 text-red-200 px-1 rounded border border-red-900 font-bold">+18</span>
</div>
<span className="text-[10px] text-slate-500 mt-1">Gigante Oficial</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<a className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg shadow-lg shadow-amber-900/20 text-center transition-all hover:scale-[1.02]" href="https://track.afiliapub.com/click?o=24&amp;a=1108091&amp;link_id=137&amp;creative_id=153" rel="nofollow" target="_blank">
                            Visitar el Sitio
                        </a>
<span className="text-center text-[10px] text-emerald-500/80 hover:text-emerald-400 underline decoration-dotted transition-colors">
                            Leer Reseña Completa
                        </span>
</div>
</summary>

<div className="border-t border-slate-800 bg-slate-900/30 p-4 md:p-8 cursor-default">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-6">
<div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="store"></i> Físico y Online Conectados
                                </h3>
<p className="text-xs text-slate-400 leading-relaxed text-justify">
                                    Codere es el único operador que ofrece una verdadera experiencia omnicanal. Puedes depositar dinero en efectivo en cualquiera de sus miles de locales en España y jugarlo online al instante, o retirar tus ganancias online en efectivo en la tienda. Su app es de las más descargadas.
                                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Lo Mejor</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Cobro presencial en efectivo</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Streaming deportivo de calidad</li>
</ul>
</div>
<div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">A Mejorar</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> Soporte a veces lento</li>
</ul>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
<h4 className="text-xs font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Ficha Técnica</h4>
<ul className="space-y-2 text-[11px]">
<li className="flex justify-between"><span className="text-slate-500">Locales:</span> <span className="text-slate-300">+2000 en España</span></li>
<li className="flex justify-between"><span className="text-slate-500">App:</span> <span className="text-emerald-400">Nativa (Muy buena)</span></li>
<li className="flex justify-between"><span className="text-slate-500">Min. Depósito:</span> <span className="text-slate-300">10€</span></li>
</ul>
</div>
<div className="text-center">
<a className="block w-full bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs py-2 rounded shadow-lg transition-colors mb-2" href="https://track.afiliapub.com/click?o=24&amp;a=1108091&amp;link_id=137&amp;creative_id=153" rel="nofollow" target="_blank">
                                    Ir a Codere
                                </a>
<p className="text-[9px] text-slate-600">Publicidad | +18</p>
</div>
</div>
</div>
</div>
</details>

<details className="group bg-slate-900/40 md:bg-slate-950 hover:bg-slate-900/80 border border-slate-800 md:border-0 transition-colors">
<summary className="cursor-pointer md:grid md:grid-cols-12 md:gap-4 p-4 md:px-6 md:py-5 items-center relative">
<div className="flex items-center justify-between md:col-span-2 mb-4 md:mb-0">
<div className="w-32 h-12 bg-purple-600 rounded-md border border-slate-700/50 flex items-center justify-center p-2 relative">
<span className="font-bold text-white text-lg tracking-tight">PlayUZU</span>
</div>
<div className="md:hidden flex items-center gap-1 text-emerald-400">
<i className="w-4 h-4 fill-current" data-lucide="thumbs-up"></i> <span className="text-xs font-bold">9.2</span>
</div>
</div>
<div className="hidden md:flex flex-col items-center justify-center md:col-span-2 gap-1">
<div className="flex items-center gap-4 text-xs font-medium">
<span className="flex items-center gap-1.5 text-slate-300"><i className="w-4 h-4 text-slate-500" data-lucide="thumbs-up"></i> 140</span>
<span className="flex items-center gap-1.5 text-slate-500"><i className="w-4 h-4 text-slate-700" data-lucide="thumbs-down"></i> 5</span>
</div>
</div>
<div className="md:col-span-4 text-center mb-4 md:mb-0">
<div className="flex flex-col items-center justify-center h-full">
<span className="text-amber-500 font-bold text-sm md:text-base tracking-tight">Casino Transparente</span>
<span className="text-[10px] text-slate-500 mt-1">Reembolsos en efectivo en cada tirada (+30d)</span>
</div>
</div>
<div className="flex md:flex-col items-center justify-between md:justify-center md:col-span-2 mb-4 md:mb-0 px-2 md:px-0">
<span className="md:hidden text-xs text-slate-500">Licencia:</span>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-4 h-3 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 rounded-sm shadow-sm"></div>
<span className="text-[10px] bg-red-950 text-red-200 px-1 rounded border border-red-900 font-bold">+18</span>
</div>
<span className="text-[10px] text-slate-500 mt-1">Innovador</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<a className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg shadow-lg shadow-amber-900/20 text-center transition-all hover:scale-[1.02]" href="https://site.playuzu.es/index.php?aname=casinoyslots1" rel="nofollow" target="_blank">
                            Visitar el Sitio
                        </a>
<span className="text-center text-[10px] text-emerald-500/80 hover:text-emerald-400 underline decoration-dotted transition-colors">
                            Leer Reseña Completa
                        </span>
</div>
</summary>

<div className="border-t border-slate-800 bg-slate-900/30 p-4 md:p-8 cursor-default">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-6">
<div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="zap"></i> Dinero real, sin requisitos
                                </h3>
<p className="text-xs text-slate-400 leading-relaxed text-justify">
                                    PlayUZU revolucionó el mercado con su política de "No Wagering". Todo lo que ganas es tuyo en dinero real, sin requisitos de apuesta ocultos. Además, su sistema UZUplus te devuelve un porcentaje de dinero en cada apuesta, ganes o pierdas.
                                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wide">Lo Mejor</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Sin letra pequeña (No Rollover)</li>
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-emerald-500 shrink-0" data-lucide="check"></i> Pagos muy rápidos</li>
</ul>
</div>
<div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
<h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">A Mejorar</h4>
<ul className="space-y-1.5">
<li className="flex items-start gap-2 text-[11px] text-slate-300"><i className="w-3.5 h-3.5 text-red-500 shrink-0" data-lucide="x"></i> No tiene apuestas deportivas</li>
</ul>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-950 border border-slate-800 rounded-lg p-4">
<h4 className="text-xs font-semibold text-slate-200 mb-3 border-b border-slate-800 pb-2">Ficha Técnica</h4>
<ul className="space-y-2 text-[11px]">
<li className="flex justify-between"><span className="text-slate-500">Transparencia:</span> <span className="text-emerald-400">10/10</span></li>
<li className="flex justify-between"><span className="text-slate-500">Juegos:</span> <span className="text-slate-300">Slots Exclusivas</span></li>
<li className="flex justify-between"><span className="text-slate-500">Pagos:</span> <span className="text-slate-300">PayPal, Trustly, Tarjeta</span></li>
</ul>
</div>
<div className="text-center">
<a className="block w-full bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs py-2 rounded shadow-lg transition-colors mb-2" href="https://site.playuzu.es/index.php?aname=casinoyslots1" rel="nofollow" target="_blank">
                                    Ir a PlayUZU
                                </a>
<p className="text-[9px] text-slate-600">Publicidad | +18</p>
</div>
</div>
</div>
</div>
</details>
</div>

<div className="mt-12 border-t border-slate-800 pt-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-6">
<i className="w-4 h-4 text-amber-500" data-lucide="alert-triangle"></i>
<span className="text-[10px] text-slate-400 font-medium">
                    Atención: En España, los bonos de captación están prohibidos (RD 958/2020). Regístrate y espera 30 días para acceder a ofertas.
                </span>
</div>
<p className="text-[10px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                TopBonusEsp opera como un medio independiente de comparación. No somos un operador de juego. Toda la información es revisada periódicamente, pero las condiciones de los operadores pueden cambiar sin previo aviso. Los enlaces publicados son enlaces de afiliación que pueden generar una comisión sin coste para el usuario. Juega siempre con responsabilidad y solo si eres mayor de edad.
            </p>
</div>
</main>
<footer className="bg-slate-950 border-t border-slate-900 py-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
<div className="flex flex-wrap justify-center gap-4 mb-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center justify-center border border-slate-700 w-24 h-8 rounded text-[9px] font-bold text-slate-400">JUGARBIEN.ES</span>
<span className="flex items-center justify-center border border-slate-700 w-24 h-8 rounded text-[9px] font-bold text-slate-400">AUTOPROHIBICIÓN</span>
<span className="flex items-center justify-center border border-red-900 bg-red-950 w-10 h-8 rounded text-[10px] font-bold text-red-500">+18</span>
</div>
<p className="text-xs text-slate-700">© 2023 TopBonus España. Todos los derechos reservados.</p>
</div>
</footer>


    </>
  );
}
