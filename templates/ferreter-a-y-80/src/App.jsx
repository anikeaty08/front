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
      

<div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 py-2">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<span className="hidden md:inline-block font-medium">Atención a clientes y ventas</span>
<div className="flex flex-wrap justify-center gap-4 md:gap-6">
<a className="hover:text-blue-600 transition-colors flex items-center gap-1.5" href="tel:9842673493">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="12"></iconify-icon>
                    Playa del Carmen: (984) 267-34-93
                </a>
<a className="hover:text-blue-600 transition-colors flex items-center gap-1.5" href="tel:9988989178">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="12"></iconify-icon>
                    Av. la Luna: (998) 898-91-78
                </a>
<a className="hover:text-blue-600 transition-colors flex items-center gap-1.5" href="tel:9988935511">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="12"></iconify-icon>
                    Región 102: (998) 893-55-11
                </a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex flex-col lg:flex-row items-center justify-between gap-4">

<div className="flex items-center justify-between w-full lg:w-auto">
<a className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2 text-slate-900" href="#">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-bold">D</span>
</div>
                        EL DELFÍN
                    </a>
<button className="lg:hidden p-2 text-slate-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="w-full max-w-md relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Buscar en toda la tienda (ej. Rotoplas, Cable...)" type="text"/>
</div>

<nav className="flex items-center gap-6 text-sm font-medium text-slate-600 overflow-x-auto w-full lg:w-auto hide-scroll pb-2 lg:pb-0">
<a className="hover:text-blue-600 whitespace-nowrap transition-colors" href="#">Inicio</a>
<a className="hover:text-blue-600 whitespace-nowrap transition-colors" href="#">Productos</a>
<a className="hover:text-blue-600 whitespace-nowrap transition-colors" href="#sucursales">Sucursales</a>
<a className="hover:text-blue-600 whitespace-nowrap transition-colors" href="#">Blog</a>
<div className="h-4 w-px bg-slate-200 hidden lg:block"></div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 hover:text-blue-600 whitespace-nowrap transition-colors group">
<iconify-icon className="group-hover:text-blue-600" icon="lucide:map-pin" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden xl:inline">Sucursal Luna</span>
</button>
<button className="flex items-center gap-2 hover:text-blue-600 whitespace-nowrap transition-colors relative group">
<iconify-icon className="group-hover:text-blue-600" icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden xl:inline">Mi Carrito</span>
<span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full absolute -top-2 -right-2">0</span>
</button>
</div>
</nav>
</div>
</div>
</header>

<section className="relative bg-slate-900 text-white overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
<span className="text-blue-400 font-medium text-xs tracking-wider uppercase mb-4 border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">Novedades 2024</span>
<h1 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 text-white">
                Todo para tu construcción <br className="hidden md:block"/>y mantenimiento.
            </h1>
<p className="text-slate-400 text-lg max-w-2xl mb-8 font-light">
                Soluciones integrales en plomería, electricidad y herramientas. Distribuidor oficial de las mejores marcas del mercado.
            </p>
<div className="flex gap-4">
<button className="bg-white text-slate-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors">
                    Ver Catálogo
                </button>
<button className="bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
                    Contactar Ventas
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Contamos con las mejores marcas</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800">ROTOPLAS</span>
<span className="text-xl font-bold tracking-tight text-slate-800">COFLEX</span>
<span className="text-xl font-bold tracking-tight text-slate-800">IUSA</span>
<span className="text-xl font-bold tracking-tight text-slate-800">TRUPER</span>
<span className="text-xl font-bold tracking-tight text-slate-800">SURTEK</span>
<span className="text-xl font-bold tracking-tight text-slate-800">WELD-ON</span>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 py-16">
<div className="flex items-baseline justify-between mb-10 border-b border-slate-200 pb-4">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Categorías Populares</h2>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                Ver todo el inventario
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Plomería y Agua</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Bombas y Boilers</li>
<li>Tubería PVC y Cobre</li>
<li>Tinacos y Cisternas</li>
<li>Grifería y Fregaderos</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Electricidad</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Cable y Poliducto</li>
<li>Interruptores y Apagadores</li>
<li>Lámparas y Reflectores</li>
<li>Centros de Carga</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Herramientas</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Taladros y Rotomartillos</li>
<li>Herramienta Manual (Llaves, Pinzas)</li>
<li>Compresores y Soldadoras</li>
<li>Equipo de Seguridad</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:door-open" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Herrajes</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Bisagras y Correderas</li>
<li>Chapas y Perillas</li>
<li>Rodajas y Soportes</li>
<li>Accesorios para Muebles</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:flask-conical" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Cementos y Químicos</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Cementos Solventes PVC/CPVC</li>
<li>Lubricantes y Limpiadores</li>
<li>Impermeabilizantes</li>
<li>Pegamentos Industriales</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:nut" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Tornillería</h3>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li>Pijas, Tornillos y Tuercas</li>
<li>Abrazaderas y Soportes</li>
<li>Taquetes y Anclajes</li>
<li>Varilla Roscada</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    Ver productos
                    <iconify-icon className="ml-1" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</main>

<section className="bg-slate-50 py-16 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Hogar y Jardín</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li><a className="hover:text-blue-600" href="#">Limpieza y Fumigadores</a></li>
<li><a className="hover:text-blue-600" href="#">Jardinería y Riego</a></li>
<li><a className="hover:text-blue-600" href="#">Mallas y Mosquiteros</a></li>
<li><a className="hover:text-blue-600" href="#">Lonas y Cordones</a></li>
<li><a className="hover:text-blue-600" href="#">Iluminación Doméstica</a></li>
<li><a className="hover:text-blue-600" href="#">Bolsas y Costales</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Sistemas de Agua</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li><a className="hover:text-blue-600" href="#">PVC Cédula 40 y 80</a></li>
<li><a className="hover:text-blue-600" href="#">CPVC Cédula 80</a></li>
<li><a className="hover:text-blue-600" href="#">Tubería Galvanizada</a></li>
<li><a className="hover:text-blue-600" href="#">Alcantarillado</a></li>
<li><a className="hover:text-blue-600" href="#">Válvulas Industriales</a></li>
<li><a className="hover:text-blue-600" href="#">Tratamiento de Aguas</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Contra Incendios</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li><a className="hover:text-blue-600" href="#">Tubería Especializada</a></li>
<li><a className="hover:text-blue-600" href="#">Rociadores y Válvulas</a></li>
<li><a className="hover:text-blue-600" href="#">Coples y Conexiones Ranuradas</a></li>
<li><a className="hover:text-blue-600" href="#">Gabinetes</a></li>
<li><a className="hover:text-blue-600" href="#">Señalización</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Atención</h4>
<div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
<p className="text-xs text-slate-600 mb-2">¿No encuentras lo que buscas?</p>
<p className="text-xs font-medium text-slate-900 mb-3">Chatea con un experto ahora.</p>
<a className="flex items-center justify-center gap-2 w-full bg-green-50 text-green-700 border border-green-200 py-2 rounded text-xs font-semibold hover:bg-green-100 transition-colors" href="https://wa.me/9981428356">
<iconify-icon icon="lucide:message-circle" width="14"></iconify-icon>
                            WhatsApp Ventas
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="sucursales">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Nuestras Sucursales</h2>
<p className="text-slate-500">Visítanos en cualquiera de nuestras 3 ubicaciones en el estado.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
<div className="h-32 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300" icon="lucide:map" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Sucursal Cancún</h3>
<p className="text-xs text-blue-600 font-medium mb-4 uppercase tracking-wide">Región 102</p>
<div className="space-y-3 text-sm text-slate-600 flex-1">
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Región 102 MZA 103 LT 17</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:mail" width="16"></iconify-icon>
<a className="hover:text-blue-600 break-all" href="mailto:correoweb102@eldelfin.com.mx">correoweb102@eldelfin.com.mx</a>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:phone" width="16"></iconify-icon>
<span>(998) 893-55-11 / 893-72-56</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-green-500" icon="lucide:message-circle" width="16"></iconify-icon>
<span className="text-green-700 font-medium">WhatsApp: (998) 142-83-56</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
<div className="flex justify-between mb-1">
<span>Lun - Vie:</span>
<span className="font-medium text-slate-700">08:00 - 17:30</span>
</div>
<div className="flex justify-between">
<span>Sábados:</span>
<span className="font-medium text-slate-700">08:00 - 13:30</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
<div className="h-32 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300" icon="lucide:map" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Sucursal Av. La Luna</h3>
<p className="text-xs text-blue-600 font-medium mb-4 uppercase tracking-wide">Cancún</p>
<div className="space-y-3 text-sm text-slate-600 flex-1">
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Región 505 MZA 27 Av La Luna LT 14</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:mail" width="16"></iconify-icon>
<a className="hover:text-blue-600 break-all" href="mailto:correowebluna@eldelfin.com.mx">correowebluna@eldelfin.com.mx</a>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:phone" width="16"></iconify-icon>
<span>(998) 898-91-78 / 898-91-79</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
<div className="flex justify-between mb-1">
<span>Lun - Vie:</span>
<span className="font-medium text-slate-700">08:00 - 17:30</span>
</div>
<div className="flex justify-between">
<span>Sábados:</span>
<span className="font-medium text-slate-700">08:00 - 13:30</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
<div className="h-32 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300" icon="lucide:map" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Sucursal Playa del Carmen</h3>
<p className="text-xs text-blue-600 font-medium mb-4 uppercase tracking-wide">Solidaridad</p>
<div className="space-y-3 text-sm text-slate-600 flex-1">
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Av 40 Norte MZA 402 LT 13 (e/ 76 y 78)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:mail" width="16"></iconify-icon>
<a className="hover:text-blue-600 break-all" href="mailto:correowebplaya@eldelfin.com.mx">correowebplaya@eldelfin.com.mx</a>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-slate-400" icon="lucide:phone" width="16"></iconify-icon>
<span>(984) 267-34-93 / 267-34-94</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
<div className="flex justify-between mb-1">
<span>Lun - Vie:</span>
<span className="font-medium text-slate-700">08:00 - 17:30</span>
</div>
<div className="flex justify-between">
<span>Sábados:</span>
<span className="font-medium text-slate-700">08:00 - 13:30</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 text-sm border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div>
<a className="text-lg font-bold tracking-tighter uppercase flex items-center gap-2 text-white mb-6" href="#">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
<span className="text-xs font-bold">D</span>
</div>
                        EL DELFÍN
                    </a>
<p className="mb-6 leading-relaxed">
                        Suministramos materiales de construcción, plomería y electricidad de alta calidad para proyectos residenciales e industriales.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Soporte</h3>
<ul className="space-y-3">
<li><a className="hover:text-blue-400 transition-colors" href="#">Preguntas frecuentes</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Facturación</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Envíos y Devoluciones</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Empresa</h3>
<ul className="space-y-3">
<li><a className="hover:text-blue-400 transition-colors" href="#">Acerca de nosotros</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Sucursales</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Bolsa de trabajo</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Aviso de Privacidad</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Métodos de Pago</h3>
<div className="flex flex-wrap gap-2 mb-4">
<div className="bg-slate-800 px-3 py-1.5 rounded text-xs font-medium text-white border border-slate-700">Visa</div>
<div className="bg-slate-800 px-3 py-1.5 rounded text-xs font-medium text-white border border-slate-700">Mastercard</div>
<div className="bg-slate-800 px-3 py-1.5 rounded text-xs font-medium text-white border border-slate-700">Transferencia</div>
<div className="bg-slate-800 px-3 py-1.5 rounded text-xs font-medium text-white border border-slate-700">Efectivo</div>
</div>
<p className="text-xs text-slate-500">
                        Pagos seguros en todas nuestras sucursales y tienda en línea.
                    </p>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2019 - 2024 Ferreterías El Delfín. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Términos y Condiciones</a>
<a className="hover:text-white" href="#">Mapa del Sitio</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
