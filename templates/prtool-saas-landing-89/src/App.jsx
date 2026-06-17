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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-zinc-200/60 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center">
<span className="text-white text-xs font-semibold">P</span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">PRTool</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#solutions">Soluciones</a>
<a className="hover:text-zinc-900 transition-colors" href="#integrations">Integraciones</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Precios</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 hidden sm:block" href="#">Log in</a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm ring-1 ring-zinc-900/5" href="#">
                    Comenzar gratis
                </a>
</div>
</div>
</nav>

<header className="md:pt-40 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 inset-x-0 h-[600px] -z-10 bg-grid-pattern opacity-40 mask-gradient"></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-[11px] font-medium text-zinc-600 uppercase tracking-wide">Nuevo: Tracking de Ventas</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-semibold text-zinc-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto" style={{}}>El Ads Manager pensado para creadores.</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-zinc-500 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Press Kits, campañas y performance en un solo lugar. Integración con tu e-commerce para atribuir ventas exactas por creador.</p>
<div className="flex flex-col sm:flex-row gap-3 mb-16 gap-x-3 gap-y-3 items-center justify-center">
<a className="w-full sm:w-auto bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2" href="#">
                    Crear cuenta gratis
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto bg-white text-zinc-700 border border-zinc-200 text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#integrations">
                    Ver integraciones
                </a>
</div>

<div className="flex flex-col items-center justify-center gap-4 mb-20 opacity-80">
<p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Se integra nativamente con</p>
<div className="flex items-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center gap-2 text-[#2D3275]">
<svg className="fill-current w-[93px] h-[28px]" data-icon-replaced="true" strokeWidth="2" style={{width: '93px', height: '28px', color: 'rgb(45, 50, 117)'}} viewbox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M98.4,74.7c0-19.3-15.7-35-35-35s-35,15.7-35,35s15.7,35,35,35S98.4,94,98.4,74.7z M114.3,74.7c0,23.1-15.3,42.7-36.6,49.1c-4.1,1.2-8.4,1.9-12.8,1.9c-28.1,0-50.9-22.8-50.9-50.9S36.8,23.8,64.9,23.8c4.4,0,8.7,0.6,12.8,1.9c6.7,2,12.8,5.3,18.1,9.7c1.3-19.9,17.9-35.5,38.1-35.5c21.1,0,38.2,17.1,38.2,38.2c0,4.4-0.7,8.6-2.1,12.5c0.7-0.1,1.4-0.1,2.1-0.1c28.1,0,50.9,22.8,50.9,50.9s-22.8,50.9-50.9,50.9S121.2,102.8,121.2,74.7c0-3.6,0.4-7.2,1.1-10.6C117,67.7,114.3,71.1,114.3,74.7z M172.1,74.7c0-19.3-15.7-35-35-35c-19.3,0-35,15.7-35,35s15.7,35,35,35C156.4,109.7,172.1,94,172.1,74.7z M227.5,68.4v8.6h-14.6v47.3h-11.8V77h-8.8v-8.6h8.8V55.9l11.8-3.5v16H227.5z M233.2,39.8c0-4,3.2-7.3,7.3-7.3c4,0,7.3,3.3,7.3,7.3c0,4-3.3,7.3-7.3,7.3C236.4,47.1,233.2,43.8,233.2,39.8z M234.6,53.6h11.8v70.7h-11.8V53.6z M288.9,96.7c0.7,6.3,5.7,10.4,12.1,10.4c5.1,0,9.3-2.7,10.9-6.8l10.3,3.8c-3.6,9-12.3,14-21.5,14c-14.5,0-23.8-10.3-23.8-26c0-14.5,9.5-26.2,23.8-26.2c14.6,0,23.1,12.1,23.1,25.2c0,2.1-0.2,3.9-0.4,5.6H288.9z M311.8,87.2c-0.5-6.4-5-10.2-10.7-10.2c-5.8,0-10.2,3.8-11,10.2H311.8z M335.3,53.6h11.3v8.4c3.2-6.3,9-9.8,16.5-9.8c9.9,0,17.1,6.4,17.1,18.1v54h-11.8V72.1c0-6.3-3.5-9.7-9.1-9.7c-6.1,0-10.9,4.1-12.1,10.3v51.6h-11.8V53.6z M424.2,112.9V97.5c-3.3,6.1-9.3,9.4-16.3,9.4c-13.3,0-22.7-10.9-22.7-26.2c0-15.5,9.6-26.4,23.1-26.4c6.8,0,12.6,3,15.8,8.8V40h11.8v84.2H424.2z M424.2,80.8c0-9.1-6.3-15.8-13.8-15.8c-7.8,0-13.6,6.7-13.6,15.8c0,8.9,5.8,15.8,13.6,15.8C417.8,96.6,424.2,90,424.2,80.8z M475.9,112.9v-8.3c-3.1,6.2-9.1,9.6-16.8,9.6c-11.2,0-18.4-7.7-18.4-19.4c0-12.4,7.8-19.6,19.4-19.6c6.9,0,12.6,3.1,15.8,8.5v-8.2h11.3v53.6h-11.3V112.9z M475.9,90.9c0-6.2-4.2-10.1-10-10.1c-5.8,0-9.8,3.9-9.8,10.1c0,6.3,4,10.1,9.8,10.1C471.7,101,475.9,97.1,475.9,90.9z"></path>
</svg>
<span className="text-lg font-bold tracking-tight">tiendanube</span>
</div>
<div className="w-px h-6 bg-zinc-300"></div>

<div className="flex items-center gap-2 group relative">
<div className="h-8 flex items-center gap-1 text-[#ffe600]">

<svg className="w-8 h-8 fill-[#ffe600]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" fill="transparent" stroke="none"></path></svg>

<span className="font-bold text-zinc-400 text-lg italic group-hover:text-[#2d3277] transition-colors">Mercado Libre</span>
</div>
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-500 text-[9px] font-bold uppercase rounded-md border border-zinc-200 tracking-wider ml-2">Próximamente</span>
</div>
</div>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-zinc-200 overflow-hidden relative z-10">

<div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white">
<div className="flex items-center gap-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
<div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50"></div>
</div>
<div className="hidden sm:flex gap-6 text-xs font-medium text-zinc-400">
<span className="text-zinc-900">Dashboard</span>
<span>Campañas</span>
<span>Pagos</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="text-xs text-zinc-500 font-medium">Tienda Nube Store</div>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-zinc-50/30">

<div className="md:col-span-8 space-y-6">
<div className="flex justify-between items-end">
<div className="">
<div className="text-sm text-zinc-500 mb-1">Ventas Totales (Atribuidas)</div>
<div className="text-3xl font-semibold text-zinc-900">$2,450,890.00 <span className="text-sm text-green-600 font-medium ml-2">+12.5%</span></div>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 shadow-sm">30 días</span>
<span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-xs text-zinc-400">7 días</span>
</div>
</div>

<div className="h-64 w-full flex items-end gap-2 pb-4 border-b border-zinc-100 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="h-px w-full bg-zinc-100"></div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="h-px w-full bg-zinc-100"></div>
</div>

<div className="w-full bg-zinc-900 rounded-t-sm h-[40%] hover:bg-zinc-800 transition-colors relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$42k</div>
</div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[55%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[35%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[70%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[60%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[85%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[75%] hover:bg-zinc-800 transition-colors"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(249,115,22,0.3)] relative">
<div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-4">
<div className="text-sm font-medium text-zinc-900">Top Creadores</div>

<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-zinc-900 truncate">@sofi.lifestyle</div>
<div className="text-[10px] text-zinc-500">Tienda Nube Promo</div>
</div>
<div className="text-xs font-semibold text-green-600">$850k</div>
</div>

<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-zinc-900 truncate">@tech.review</div>
<div className="text-[10px] text-zinc-500">Unboxing</div>
</div>
<div className="text-xs font-semibold text-green-600">$420k</div>
</div>

<div className="mt-6 pt-6 border-t border-zinc-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Conexión activa</span>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center gap-2">
<svg className="lucide lucide-link w-3 h-3 text-blue-600" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="text-[10px] text-blue-700 font-medium">Sincronizado con Tienda Nube</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 via-white to-blue-50 rounded-[2rem] -z-10 blur-xl opacity-60"></div>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-zinc-100" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Control total del ciclo</h2>
<p className="text-zinc-500">Desde el descubrimiento hasta la venta final en tu sitio.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1" href="#">
                    Ver todas las features <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Para Creadores</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Tu Press Kit profesional en segundos. Unificá tu biografía, tarifas y métricas en vivo de Instagram, TikTok y YouTube en un solo link.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Autogenerado con IA
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Anti-spam form
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-lg shadow-zinc-100 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-900"></div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 shadow-sm text-white group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Marcas &amp; Agencias</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Dejá de adivinar. Medí exactamente cuántas ventas genera cada creador instalando nuestro pixel o conectando tu tienda.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check-circle-2 w-3 h-3 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Atribución de ventas exacta
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check-circle-2 w-3 h-3 text-green-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Cálculo de ROI automático
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Gestión de Campañas</h3>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Recibí postulaciones, aprobá contenido y gestioná pagos. Todo el flujo de trabajo ordenado en tableros tipo Kanban.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Filtros de audiencia
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gestión de contratos
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 relative overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-zinc-200 mb-6">
<svg className="lucide lucide-plug w-3 h-3 text-zinc-500" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
<span className="text-[10px] font-semibold text-zinc-600 uppercase tracking-wide">Integraciones E-commerce</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                        Tus métricas, <br/>donde ocurren las ventas.
                    </h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                        Conectá PRTool directamente a tu tienda online. Generamos códigos de descuento dinámicos y links trackeables para cada creador, permitiéndote ver el impacto real en tu facturación.
                    </p>
<div className="space-y-6">

<div className="flex items-start gap-4 group">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-200 transition-colors">
<svg className="w-6 h-6 fill-[#2D3275]" viewbox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
<path d="M352.5,148.6c-19.4,0-36.9,9-48.6,23.1c-12.2-14.6-30.5-23.1-49.9-23.1c-36.3,0-65.8,29.5-65.8,65.8s29.5,65.8,65.8,65.8c17.6,0,33.6-7,45.4-18.3c-0.6,25.7,20.2,46.8,46,46.8c25.9,0,46.9-21,46.9-46.9C392.3,218.7,374.5,148.6,352.5,148.6z M254,264.2c-27.6,0-50-22.4-50-50s22.4-50,50-50c20,0,37.3,11.8,45.3,28.8C293,238.5,275.6,264.2,254,264.2z"></path>
</svg>
</div>
<div className="">
<h4 className="text-base font-medium text-zinc-900 mb-1">Tienda Nube</h4>
<p className="text-sm text-zinc-500">Instalación en 1 click. Sincronización de catálogo y órdenes en tiempo real.</p>
</div>
</div>

<div className="flex items-start gap-4 group opacity-70">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<svg className="w-6 h-6 fill-[#ffe600]" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" fill="transparent" stroke="none"></path></svg>
<span className="font-bold text-xs text-zinc-400">MeLi</span>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<h4 className="text-base font-medium text-zinc-900">Mercado Libre</h4>
<span className="text-[10px] font-semibold bg-zinc-200 px-2 py-0.5 rounded text-zinc-500">PRÓXIMAMENTE</span>
</div>
<p className="text-sm text-zinc-500">Atribución de ventas a través de Mercadopago y links de afiliados.</p>
</div>
</div>
</div>
</div>

<div className="relative lg:h-[500px] w-full flex items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern opacity-50 rounded-3xl border border-zinc-200 bg-white"></div>

<div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm">

<div className="w-full bg-white p-4 rounded-xl border border-zinc-200 shadow-lg flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
<svg className="lucide lucide-instagram w-5 h-5 text-pink-600" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-500">Origen</div>
<div className="text-sm font-semibold text-zinc-900">Story de Instagram</div>
</div>
<div className="px-2 py-1 bg-zinc-100 rounded text-xs font-mono text-zinc-600">link.pr/29x</div>
</div>

<div className="h-8 w-px bg-zinc-300 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full flex items-center justify-center text-[8px]">▼</div>
</div>

<div className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl flex items-center gap-4 text-white">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<span className="font-bold text-sm">PR</span>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-400">Procesando</div>
<div className="text-sm font-semibold text-white">Tracking Pixel</div>
</div>
<svg className="lucide lucide-arrow-down-circle w-5 h-5 text-green-400" data-lucide="arrow-down-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="m8 12 4 4 4-4"></path></svg>
</div>

<div className="h-8 w-px bg-zinc-300 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full flex items-center justify-center text-[8px]">▼</div>
</div>

<div className="w-full bg-white p-4 rounded-xl border border-blue-100 shadow-lg ring-2 ring-blue-50 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-blue-600" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-500">Conversión</div>
<div className="text-sm font-semibold text-zinc-900">Venta #29204</div>
</div>
<div className="text-sm font-bold text-green-600">+$12,400</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-zinc-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Precios transparentes</h2>
<p className="text-zinc-500">Empezá gratis. Pagá solo cuando crezcas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-zinc-900">Creadores</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold text-zinc-900">$0</span>
</div>
<p className="text-sm text-zinc-500 mt-4">Todo lo que necesitás para profesionalizar tu carrera.</p>
</div>
<ul className="space-y-3 text-sm text-zinc-600 mb-8 flex-1">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Press Kit ilimitado</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Analytics de perfil</li>
</ul>
<a className="w-full py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors text-center" href="#">
                        Comenzar gratis
                    </a>
</div>

<div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-900 text-white flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-zinc-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Empresas</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Marcas &amp; Agencias</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold text-white">$29</span>
<span className="text-zinc-400 text-sm">/mes</span>
</div>
<p className="text-sm text-zinc-400 mt-4">Herramientas de medición y gestión avanzadas.</p>
</div>
<ul className="space-y-3 text-sm text-zinc-300 mb-8 flex-1">
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Integración Tienda Nube</li>
<li className="flex gap-3"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Tracking de ventas (ROI)</li>
</ul>
<a className="w-full py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors text-center" href="#">
                        Prueba gratuita de 14 días
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center">
<span className="text-white text-[10px] font-bold">P</span>
</div>
<span className="font-semibold text-zinc-900 text-sm">PRTool</span>
</div>
<p className="text-xs text-zinc-500 mb-6 max-w-xs leading-relaxed">
                        Infraestructura para la Creator Economy. Conectamos influencia con resultados de negocio reales.
                    </p>
</div>

<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Producto</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Tracking de Ventas</a></li>
<li><a className="hover:text-zinc-900" href="#">Press Kit</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Recursos</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Documentación API</a></li>
<li><a className="hover:text-zinc-900" href="#">Guías de Marketing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacidad</a></li>
<li><a className="hover:text-zinc-900" href="#">Términos</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2024 PRTool Inc.</p>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
