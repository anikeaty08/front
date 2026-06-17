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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-zinc-900 text-zinc-300 py-2 border-b border-zinc-800 hidden sm:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon>
                    01 800 123 4567
                </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon>
                    ventas@ferreterialeon.com.mx
                </a>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Portal B2B</a>
<a className="hover:text-white transition-colors" href="#">Facturación</a>
<a className="hover:text-white transition-colors" href="#">Rastrear Pedido</a>
</div>
</div>
</div>

<header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6 md:gap-12">

<a className="text-2xl font-semibold tracking-tighter text-zinc-900 flex-shrink-0" href="#">
                FL.
            </a>

<div className="flex-1 max-w-2xl hidden md:block relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 group-focus-within:text-zinc-900 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-2.5 bg-zinc-100 border-transparent rounded-lg text-sm placeholder-zinc-500 focus:border-zinc-300 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="Buscar por código, marca o producto..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-[10px] text-zinc-400 font-medium px-1.5 py-0.5 border border-zinc-200 rounded bg-zinc-50">⌘K</span>
</div>
</div>

<div className="flex items-center gap-5 flex-shrink-0">
<a className="flex flex-col items-center text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
<span className="text-[10px] mt-0.5 font-medium hidden sm:block">Cuenta</span>
</a>
<a className="flex flex-col items-center text-zinc-500 hover:text-zinc-900 transition-colors relative" href="#">
<div className="relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-zinc-900 text-white text-[9px] font-medium min-w-[16px] h-4 rounded-full flex items-center justify-center px-1 border-2 border-white">
                            12
                        </span>
</div>
<span className="text-[10px] mt-0.5 font-medium hidden sm:block">$4,520.00</span>
</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex items-center gap-6 py-3 overflow-x-auto hide-scrollbar">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
                    Catálogo
                </button>
<div className="h-4 w-px bg-zinc-200 shrink-0"></div>
<a className="text-sm text-zinc-600 hover:text-zinc-900 shrink-0 transition-colors" href="#">Herramientas</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 shrink-0 transition-colors" href="#">Material Eléctrico</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 shrink-0 transition-colors" href="#">Plomería</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 shrink-0 transition-colors" href="#">Construcción</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 shrink-0 transition-colors" href="#">Seguridad</a>
<div className="flex-1"></div>
<a className="text-sm font-medium text-zinc-900 shrink-0 flex items-center gap-1.5 border border-zinc-200 rounded-full px-3 py-1 bg-zinc-50 hover:bg-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon>
                    Promociones
                </a>
</nav>
</div>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
<div className="bg-zinc-900 rounded-2xl overflow-hidden relative flex flex-col justify-center min-h-[440px] border border-zinc-800">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700/40 via-zinc-900 to-zinc-900"></div>

<div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-20 pointer-events-none">
<div className="grid grid-cols-6 gap-4 transform rotate-12 scale-150">

<div className="w-16 h-16 border border-white rounded-full"></div>
<div className="w-16 h-16 border border-white rotate-45"></div>
<div className="w-16 h-2 bg-white rounded-full col-span-2 place-self-center"></div>
<div className="w-12 h-12 border border-white rounded-lg"></div>
<div className="w-16 h-16 border border-white rounded-full"></div>
</div>
</div>
<div className="relative z-10 p-8 md:p-16 max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50 mb-6 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Inventario actualizado 2024
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        Tu proveedor ferretero de confianza.
                    </h1>
<p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl font-normal">
                        Más de 50,000 códigos disponibles. Abastecemos ferreterías, constructoras e industria en general con precios de mayoreo competitivos.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors shadow-sm" href="#">
                            Iniciar pedido
                        </a>
<a className="bg-zinc-800/50 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 backdrop-blur-sm" href="#">
                            Descargar lista de precios
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
<div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-100 bg-white">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Catálogo Extenso</h3>
<p className="text-xs text-zinc-500 mt-1">Las mejores marcas del mercado en un solo lugar.</p>
</div>
</div>
<div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-100 bg-white">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Logística Eficiente</h3>
<p className="text-xs text-zinc-500 mt-1">Entregas en 24/48hrs en zonas de cobertura.</p>
</div>
</div>
<div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-100 bg-white">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Crédito a Negocios</h3>
<p className="text-xs text-zinc-500 mt-1">Planes de financiamiento para clientes frecuentes.</p>
</div>
</div>
<div className="flex flex-col gap-3 p-4 rounded-xl border border-zinc-100 bg-white">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
<iconify-icon className="text-lg" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Asesoría Técnica</h3>
<p className="text-xs text-zinc-500 mt-1">Soporte especializado para tus proyectos.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Líneas de Producto</h2>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                    Ver catálogo completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:hammer-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Herramientas Manuales</h3>
</a>
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:plug-defocus-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Material Eléctrico</h3>
</a>
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Plomería y Tubería</h3>
</a>
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:ruler-angular-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Construcción</h3>
</a>
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Seguridad Industrial</h3>
</a>
<a className="group flex flex-col items-center justify-center p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-sm transition-all" href="#">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-2xl text-zinc-600 group-hover:text-zinc-900" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 text-center">Pinturas e Imper.</h3>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Destacados de la semana</h2>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 text-zinc-500 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 text-zinc-500 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all relative">
<div className="absolute top-5 left-5 z-10">
<span className="bg-zinc-100 text-zinc-600 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-widest border border-zinc-200">Truper</span>
</div>

<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-5 p-4 flex items-center justify-center overflow-hidden">
<div className="w-16 h-16 border-4 border-zinc-300 rounded-sm transform -rotate-12"></div>
<div className="w-4 h-24 bg-zinc-300 rounded-sm absolute transform rotate-45 ml-6"></div>
</div>
<div className="mb-2 text-xs text-zinc-400 font-medium">SKU: TRU-10293</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug mb-4 flex-grow line-clamp-2">Taladro Inalámbrico 20V con 2 Baterías de Litio y Estuche Rígido</h3>
<div className="pt-4 border-t border-zinc-100 flex items-end justify-between mt-auto">
<div>
<p className="text-xs text-zinc-400 line-through mb-0.5">$2,450.00</p>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$1,899.00</p>
<p className="text-[10px] text-zinc-500 mt-1">Precio x Pieza</p>
</div>
<button className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all relative">
<div className="absolute top-5 left-5 z-10">
<span className="bg-zinc-100 text-zinc-600 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-widest border border-zinc-200">Makita</span>
</div>

<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-5 p-4 flex items-center justify-center overflow-hidden">
<div className="w-20 h-12 bg-zinc-300 rounded-md"></div>
<div className="w-8 h-8 rounded-full border-4 border-zinc-300 absolute -ml-12 mt-4"></div>
</div>
<div className="mb-2 text-xs text-zinc-400 font-medium">SKU: MAK-99210</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug mb-4 flex-grow line-clamp-2">Esmeriladora Angular 4-1/2" 840W Uso Industrial Real</h3>
<div className="pt-4 border-t border-zinc-100 flex items-end justify-between mt-auto">
<div>
<p className="text-xs text-zinc-400 line-through mb-0.5">$1,800.00</p>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$1,450.00</p>
<p className="text-[10px] text-zinc-500 mt-1">Precio x Pieza</p>
</div>
<button className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all relative">
<div className="absolute top-5 left-5 z-10">
<span className="bg-zinc-100 text-zinc-600 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-widest border border-zinc-200">Cemex</span>
</div>
<div className="absolute top-5 right-5 z-10">
<span className="bg-zinc-900 text-white text-[10px] font-medium px-2 py-1 rounded-md">Mayoreo</span>
</div>

<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-5 p-4 flex items-center justify-center overflow-hidden">
<div className="w-16 h-20 border-4 border-zinc-300 rounded-sm"></div>
<div className="w-12 h-16 border-4 border-zinc-300 rounded-sm absolute mt-4 ml-6 bg-zinc-50"></div>
</div>
<div className="mb-2 text-xs text-zinc-400 font-medium">SKU: CMX-001</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug mb-4 flex-grow line-clamp-2">Cemento Gris Monterrey Saco 50kg (Venta por Tonelada)</h3>
<div className="pt-4 border-t border-zinc-100 flex items-end justify-between mt-auto">
<div>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$3,850.00</p>
<p className="text-[10px] text-zinc-500 mt-1">Precio x Tonelada</p>
</div>
<button className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all relative">
<div className="absolute top-5 left-5 z-10">
<span className="bg-zinc-100 text-zinc-600 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-widest border border-zinc-200">IUSA</span>
</div>

<div className="aspect-[4/3] bg-zinc-50 rounded-xl mb-5 p-4 flex items-center justify-center overflow-hidden relative">
<div className="w-24 h-24 rounded-full border-[8px] border-zinc-300"></div>
</div>
<div className="mb-2 text-xs text-zinc-400 font-medium">SKU: IUS-4421</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug mb-4 flex-grow line-clamp-2">Cable THW-LS/THHW-LS Calibre 12 AWG Caja 100 Metros</h3>
<div className="pt-4 border-t border-zinc-100 flex items-end justify-between mt-auto">
<div>
<p className="text-lg font-semibold tracking-tight text-zinc-900">$1,120.00</p>
<p className="text-[10px] text-zinc-500 mt-1">Precio x Caja</p>
</div>
<button className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="bg-zinc-100 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 border border-zinc-200 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-zinc-200 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">
<iconify-icon icon="solar:buildings-linear"></iconify-icon>
                        Para Empresas
                    </div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Simplifica el abastecimiento de tu negocio ferretero.</h2>
<p className="text-zinc-600 text-sm md:text-base mb-8">
                        Únete a nuestra red de distribuidores. Accede a nuestra plataforma B2B para cotizar en tiempo real, gestionar líneas de crédito, descargar fichas técnicas y organizar tus pedidos por obra o sucursal.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors gap-2" href="#">
                            Solicitar acceso B2B <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors" href="#">
                            Hablar con un asesor
                        </a>
</div>
</div>
<div className="relative z-10 w-full lg:w-auto flex-shrink-0">

<div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 w-full max-w-sm ml-auto">
<div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-3">
<div className="w-20 h-3 bg-zinc-200 rounded-sm"></div>
<div className="w-8 h-8 rounded-full bg-zinc-100"></div>
</div>
<div className="space-y-3 mb-4">
<div className="h-2 w-full bg-zinc-100 rounded-sm"></div>
<div className="h-2 w-3/4 bg-zinc-100 rounded-sm"></div>
<div className="h-2 w-5/6 bg-zinc-100 rounded-sm"></div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-16 bg-zinc-50 rounded-lg border border-zinc-100"></div>
<div className="h-16 bg-zinc-50 rounded-lg border border-zinc-100"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-zinc-900 mb-6 block" href="#">FL.</a>
<p className="text-sm text-zinc-500 mb-6 max-w-sm">
                        Mayorista ferretero comprometido con el crecimiento de tu negocio mediante surtido, precio y servicio.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon> 
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Compañía</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Acerca de nosotros</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Nuestras sucursales</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Bolsa de trabajo</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Atención al Cliente</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Portal de facturación</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Políticas de devolución</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Garantías</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Preguntas frecuentes</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Acceso Rápido</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Catálogo en línea</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Marcas</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Promociones</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Ingresar al portal B2B</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500">© 2024 Ferretería León. Todos los derechos reservados.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Aviso de Privacidad</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Términos y Condiciones</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
