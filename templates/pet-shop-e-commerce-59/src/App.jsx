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
      

<input className="peer hidden" id="cart-toggle" type="checkbox"/>

<label className="cart-overlay fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300" htmlFor="cart-toggle"></label>

<div className="cart-drawer fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out border-l border-zinc-100 flex flex-col">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white/80 backdrop-blur">
<h2 className="text-lg font-medium text-zinc-900 flex items-center gap-2">
<iconify-icon icon="solar:bag-smile-linear" width="20"></iconify-icon>
                Tu Pedido <span className="text-zinc-400 font-normal text-sm">(2 items)</span>
</h2>
<label className="p-2 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors text-zinc-400 hover:text-zinc-900" htmlFor="cart-toggle">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</label>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="flex gap-4">
<div className="h-20 w-20 shrink-0 bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden relative">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h4 className="text-sm font-medium text-zinc-900 line-clamp-1">Royal Canin Medium Adult</h4>
<p className="text-xs text-zinc-500 mt-0.5">25 lbs • Perros</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center border border-zinc-200 rounded-lg h-7">
<button className="px-2 text-zinc-400 hover:text-zinc-600">-</button>
<span className="text-xs font-medium text-zinc-900 px-1">1</span>
<button className="px-2 text-zinc-400 hover:text-zinc-600">+</button>
</div>
<span className="text-sm font-medium text-zinc-900">Q650.00</span>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="h-20 w-20 shrink-0 bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden relative">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<h4 className="text-sm font-medium text-zinc-900 line-clamp-1">VitaSnaccks Jerky</h4>
<p className="text-xs text-zinc-500 mt-0.5">Pack x3 • Premios</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center border border-zinc-200 rounded-lg h-7">
<button className="px-2 text-zinc-400 hover:text-zinc-600">-</button>
<span className="text-xs font-medium text-zinc-900 px-1">2</span>
<button className="px-2 text-zinc-400 hover:text-zinc-600">+</button>
</div>
<span className="text-sm font-medium text-zinc-900">Q90.00</span>
</div>
</div>
</div>

<div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100 mt-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-orange-600" icon="solar:delivery-linear"></iconify-icon>
<span className="text-xs font-medium text-orange-800">¡Estás a Q10 de envío gratis!</span>
</div>
<div className="h-1.5 w-full bg-orange-100 rounded-full overflow-hidden">
<div className="h-full w-[95%] bg-orange-500 rounded-full"></div>
</div>
</div>
</div>

<div className="border-t border-zinc-100 p-6 bg-zinc-50/50">
<div className="space-y-2 mb-4">
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Subtotal</span>
<span className="text-zinc-900 font-medium">Q740.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Envío</span>
<span className="text-zinc-500">Calculado al pagar</span>
</div>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-zinc-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                Ir a Pagar
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="bg-zinc-900 text-zinc-300 text-xs py-2.5 text-center border-b border-zinc-800 relative z-50">
<span className="font-medium text-white">Envío Gratis</span> en Zacapa Cabecera (Zona 1) en pedidos mayores a Q150
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 h-16 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
<div className="flex justify-between items-center h-full">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
<iconify-icon className="text-white" icon="solar:paw-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-zinc-900 leading-none">VitaSnaccks</span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-zinc-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-100 focus:bg-white transition-all outline-none" placeholder="Buscar alimento, juguetes..." type="text"/>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-2">
                        Cuenta
                    </button>

<label className="relative p-2 text-zinc-600 hover:text-orange-600 transition-colors cursor-pointer group" htmlFor="cart-toggle">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bag-linear" width="24"></iconify-icon>
<span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white bg-orange-500"></span>
</label>
<button className="md:hidden p-2 text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-zinc-100 overflow-x-auto no-scrollbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-6 py-3 min-w-max">
<a className="text-sm font-medium text-zinc-900 border-b-2 border-orange-500 pb-0.5" href="#">Todo</a>
<a className="text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors flex items-center gap-1.5" href="#perros">
<iconify-icon icon="solar:dog-linear" width="16"></iconify-icon> Perros
                </a>
<a className="text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors flex items-center gap-1.5" href="#gatos">
<iconify-icon icon="solar:cat-linear" width="16"></iconify-icon> Gatos
                </a>
<a className="text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors flex items-center gap-1.5" href="#farmacia">
<iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon> Farmacia
                </a>
<a className="text-sm font-medium text-zinc-500 hover:text-orange-600 transition-colors flex items-center gap-1.5" href="#accesorios">
<iconify-icon icon="solar:basketball-linear" width="16"></iconify-icon> Accesorios
                </a>
<a className="text-sm font-medium text-rose-500 hover:text-rose-700 transition-colors flex items-center gap-1.5" href="#ofertas">
<iconify-icon icon="solar:sale-linear" width="16"></iconify-icon> Ofertas
                </a>
</div>
</div>
</div>

<div className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
<div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Envíos Express activos en Zacapa
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Todo para tu mascota, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">sin salir de casa.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 mb-8 max-w-xl leading-relaxed">
                    Alimento premium, farmacia y accesorios entregados el mismo día. Pagos contra entrega y facturación FEL automática.
                </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex justify-center items-center px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                        Hacer Pedido
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-xl hover:bg-zinc-50 transition-all">
<iconify-icon className="mr-2 text-green-600" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                        WhatsApp
                    </button>
</div>
</div>
</div>
</div>

<section className="py-8 pb-16 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
<a className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300" href="#perros">
<div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dog-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Perros</h3>
<p className="text-xs text-zinc-400 mt-1">120 Productos</p>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300" href="#gatos">
<div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cat-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Gatos</h3>
<p className="text-xs text-zinc-400 mt-1">85 Productos</p>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300" href="#farmacia">
<div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">Farmacia</h3>
<p className="text-xs text-zinc-400 mt-1">Medicinas</p>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300" href="#accesorios">
<div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-900 group-hover:text-purple-600 transition-colors">Juguetes</h3>
<p className="text-xs text-zinc-400 mt-1">Accesorios</p>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 p-6 hover:shadow-lg hover:shadow-zinc-800/30 transition-all duration-300 md:col-span-2 lg:col-span-1" href="#ofertas">
<div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4 backdrop-blur-sm">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-white">Ofertas</h3>
<p className="text-xs text-zinc-400 mt-1">Hasta 30% OFF</p>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-t border-zinc-100" id="productos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Populares en Zacapa</h2>
<p className="text-zinc-500 mt-1 text-sm">Los favoritos de la comunidad local.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group relative flex flex-col">
<div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 relative mb-4">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide bg-white border border-zinc-200 text-zinc-800 shadow-sm">
                                Perros
                            </span>
</div>
<img alt="Dog Food" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 font-medium py-3 rounded-xl shadow-lg border border-white/50 hover:bg-white flex justify-center items-center gap-2 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Agregar
                             </button>
</div>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 leading-snug">
<a href="#"><span className="absolute inset-0"></span>Royal Canin Medium Adult</a>
</h3>
<p className="text-sm text-zinc-500 mb-3">Saco de 25lbs</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-zinc-900">Q650.00</span>
</div>
<div className="mt-2 flex items-center gap-1.5 text-[10px] text-orange-700 font-medium bg-orange-50 border border-orange-100 px-2 py-1 rounded-md w-fit">
<iconify-icon icon="solar:card-linear" width="12"></iconify-icon> 3 cuotas de Q216
                        </div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 relative mb-4">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide bg-white border border-zinc-200 text-zinc-800 shadow-sm">
                                Gatos
                            </span>
</div>
<img alt="Cat Food" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 font-medium py-3 rounded-xl shadow-lg border border-white/50 hover:bg-white flex justify-center items-center gap-2 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Agregar
                             </button>
</div>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 leading-snug">
<a href="#"><span className="absolute inset-0"></span>Purina Pro Plan Cat</a>
</h3>
<p className="text-sm text-zinc-500 mb-3">Salmón y Arroz</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-zinc-900">Q285.00</span>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 relative mb-4">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide bg-rose-50 border border-rose-100 text-rose-600 shadow-sm">
                                Oferta
                            </span>
</div>
<img alt="Dog Food 2" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 font-medium py-3 rounded-xl shadow-lg border border-white/50 hover:bg-white flex justify-center items-center gap-2 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Agregar
                             </button>
</div>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 leading-snug">
<a href="#"><span className="absolute inset-0"></span>Diamond Naturals</a>
</h3>
<p className="text-sm text-zinc-500 mb-3">Fórmula Cordero (40lbs)</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-zinc-900">Q595.00</span>
<span className="text-sm text-zinc-400 line-through decoration-zinc-300">Q650</span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 relative mb-4">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide bg-white border border-zinc-200 text-zinc-800 shadow-sm">
                                Snacks
                            </span>
</div>
<img alt="Treats" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 font-medium py-3 rounded-xl shadow-lg border border-white/50 hover:bg-white flex justify-center items-center gap-2 text-xs uppercase tracking-wide">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon> Agregar
                             </button>
</div>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 leading-snug">
<a href="#"><span className="absolute inset-0"></span>VitaSnaccks Premium Jerky</a>
</h3>
<p className="text-sm text-zinc-500 mb-3">100% Natural</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-zinc-900">Q45.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-16 text-white border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Compra rápida, pago flexible.</h2>
<p className="text-zinc-400 text-lg leading-relaxed">
                        Aceptamos todas las tarjetas con opción de visacuotas y mastercuotas. ¿Prefieres efectivo? Paga contra entrega al recibir tu pedido.
                    </p>
</div>

<div className="flex flex-wrap gap-3 lg:justify-end opacity-80">
<div className="h-10 px-4 bg-white/10 rounded flex items-center justify-center border border-white/10"><span className="font-bold text-sm tracking-tighter italic">VISA</span></div>
<div className="h-10 px-4 bg-white/10 rounded flex items-center justify-center border border-white/10"><span className="font-bold text-sm tracking-tighter">Mastercard</span></div>
<div className="h-10 px-4 bg-white/10 rounded flex items-center justify-center border border-white/10"><iconify-icon icon="solar:bill-check-linear" width="20"></iconify-icon></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
<div className="h-10 w-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100 mb-2">Cuotas sin Intereses</h3>
<p className="text-sm text-zinc-400">3, 6, 12 y 18 cuotas sin recargos ocultos.</p>
</div>

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
<div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4">
<iconify-icon icon="solar:stopwatch-play-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100 mb-2">Checkout Rápido</h3>
<p className="text-sm text-zinc-400">Checkout de una sola página (menos de 30 seg).</p>
</div>

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
<div className="h-10 w-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 mb-4">
<iconify-icon icon="solar:chat-round-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100 mb-2">Actualizaciones</h3>
<p className="text-sm text-zinc-400">Notificaciones de estado por WhatsApp.</p>
</div>

<div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
<div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 mb-4">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100 mb-2">Flexibilidad</h3>
<p className="text-sm text-zinc-400">Crear cuenta o comprar como invitado.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1 pr-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:paw-linear" width="20"></iconify-icon>
</div>
<span className="text-zinc-900 font-bold tracking-tight">VitaSnaccks</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                        La plataforma digital líder para mascotas en Oriente. Rapidez, confianza y amor en cada entrega.
                    </p>
</div>
<div>
<h4 className="text-zinc-900 font-semibold text-sm mb-4">Navegación</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Perros</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Gatos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Ofertas</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-semibold text-sm mb-4">Ayuda</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Mis Pedidos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Envíos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">WhatsApp</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-semibold text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacidad</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-400 text-xs">
                    © 2024 VitaSnaccks S.A. Zacapa, Guatemala.
                </p>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:card-linear" width="20"></iconify-icon>
<span className="text-xs text-zinc-500">Pagos Seguros</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
