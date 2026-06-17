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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">TLE<span className="text-slate-400">.cl</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-slate-900 transition-colors" href="#sectores">Sectores</a>
<a className="hover:text-slate-900 transition-colors" href="#nosotros">Nosotros</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">Preguntas</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#contacto">
                    Área Clientes
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 border border-transparent rounded-full shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#cotizar">
                    Cotizar Ahora
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Cobertura Nacional de Arica a Punta Arenas
                    </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Logística sin límites para <span className="text-slate-400">todo Chile.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Conectamos tu negocio con sus clientes. Transporte de carga, última milla y logística dedicada con la precisión que tu operación exige.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-all group" href="#cotizar">
                            Cotizar Envío
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all" href="https://wa.me/56900000000">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Hablar con Ventas
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Carga Asegurada
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Seguimiento 24/7
                        </div>
</div>
</div>

<div className="relative lg:h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 w-64 bg-white p-4 rounded-xl shadow-lg border border-slate-100 absolute top-1/4 left-10 animate-[bounce_3s_infinite]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:truck-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-900">En Tránsito</span>
</div>
<span className="text-xs text-slate-400">Ahora</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-3/4 rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium">
<span>Santiago</span>
<span>Antofagasta</span>
</div>
</div>
<div className="relative z-10 w-56 bg-white p-4 rounded-xl shadow-lg border border-slate-100 absolute bottom-1/4 right-10">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-green-600" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<div className="text-xs font-medium text-slate-900">Entrega Exitosa</div>
<div className="text-[10px] text-slate-400">Orden #EXP-8834</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">+15k</div>
<div className="text-sm text-slate-500 mt-1">Envíos mensuales</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">98%</div>
<div className="text-sm text-slate-500 mt-1">Entregas a tiempo</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">16</div>
<div className="text-sm text-slate-500 mt-1">Regiones cubiertas</div>
</div>
<div className="border-none">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-sm text-slate-500 mt-1">Soporte operativo</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Nuestros Servicios</h2>
<p className="text-slate-500">Diseñamos soluciones logísticas adaptadas a la escala de tu operación, desde envíos puntuales hasta cadenas de suministro complejas.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:delivery-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Carga por Carretera</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Transporte consolidado (LTL) y camiones completos (FTL) a todo Chile. Flota moderna con monitoreo GPS en tiempo real.
                    </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Cobertura nacional
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Ramplas, planos y furgones
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:scooter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Última Milla</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Distribución capilar urbana optimizada para e-commerce y retail. Entregas Same-Day y Next-Day con prueba de entrega digital.
                    </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Integración API
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Logística inversa
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Mudanzas y Especiales</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Traslados corporativos y particulares. Servicio de embalaje profesional y manejo de carga delicada o sobredimensionada.
                    </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Servicio puerta a puerta
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Seguros incluidos
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sectores">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">Impulsando industrias clave</h2>
<p className="text-slate-500 mb-8 text-lg">Entendemos los dolores de cada sector. Desde la urgencia del retail hasta la delicadeza de los particulares.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 h-fit">
<iconify-icon icon="solar:bag-heart-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">E-commerce y Retail</h4>
<p className="text-sm text-slate-500 mt-1">Integraciones fluidas, gestión de devoluciones y experiencia de marca en la entrega.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 h-fit">
<iconify-icon icon="solar:factory-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Industria y Manufactura</h4>
<p className="text-sm text-slate-500 mt-1">Cumplimiento estricto de ventanas horarias y manejo de carga pesada.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 h-fit">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">PYMEs y Particulares</h4>
<p className="text-sm text-slate-500 mt-1">Tarifas transparentes sin contratos forzosos y atención personalizada.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-slate-500 mb-6" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-xl lg:text-2xl font-light leading-relaxed mb-8">
                            "Necesitábamos un socio logístico que entendiera la velocidad del mercado actual. TLE no solo mueve nuestras cajas, optimiza nuestros costos y mejora la satisfacción de nuestros clientes finales."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-medium text-sm">RC</div>
<div>
<div className="font-medium text-white">Roberto Castillo</div>
<div className="text-sm text-slate-400">Gerente de Operaciones, RetailCL</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-64 h-64 bg-blue-600 blur-[100px] opacity-20 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="nosotros">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-medium text-sm tracking-wide uppercase">Sobre Nosotros</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mt-2">Logística moderna, valores tradicionales</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<span className="font-semibold">1</span>
</div>
<h3 className="font-medium text-slate-900">Cotización Inmediata</h3>
<p className="text-sm text-slate-500 mt-2">Tecnología para darte precios justos y rápidos según volumen y distancia.</p>
</div>
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<span className="font-semibold">2</span>
</div>
<h3 className="font-medium text-slate-900">Recolección Ágil</h3>
<p className="text-sm text-slate-500 mt-2">Coordinación exacta. Llegamos cuando decimos que vamos a llegar.</p>
</div>
<div className="text-center px-4">
<div className="w-12 h-12 mx-auto bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-900 mb-4 shadow-sm">
<span className="font-semibold">3</span>
</div>
<h3 className="font-medium text-slate-900">Entrega Certificada</h3>
<p className="text-sm text-slate-500 mt-2">Notificaciones en tiempo real y confirmación digital de recepción.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 p-4 rounded-xl cursor-pointer open:bg-white open:shadow-sm open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        ¿Qué cobertura geográfica tienen?
                        <span className="transform group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        Cubrimos todo el territorio nacional chileno, desde Arica hasta Punta Arenas. Contamos con centros de distribución estratégicos en las principales capitales regionales.
                    </p>
</details>
<details className="group bg-slate-50 p-4 rounded-xl cursor-pointer open:bg-white open:shadow-sm open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        ¿La carga cuenta con seguro?
                        <span className="transform group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        Sí, todos nuestros servicios incluyen un seguro de carga base (UF). Además, ofrecemos pólizas adicionales para carga de alto valor según los requerimientos del cliente.
                    </p>
</details>
<details className="group bg-slate-50 p-4 rounded-xl cursor-pointer open:bg-white open:shadow-sm open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex justify-between items-center font-medium text-slate-900">
                        ¿Cómo puedo hacer seguimiento a mi envío?
                        <span className="transform group-open:rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        Al contratar el servicio, recibirás un código de seguimiento único. Podrás ver el estado en tiempo real a través de nuestra plataforma web o mediante notificaciones a tu correo/WhatsApp.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="cotizar">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
<div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 blur-[128px] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Empecemos a trabajar juntos</h2>
<p className="text-slate-400 mb-10 text-lg">
                        Completa el formulario y un especialista logístico te contactará en menos de 2 horas con una propuesta a medida.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Llámanos</div>
<div className="font-medium">+56 2 2999 9999</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Escríbenos</div>
<div className="font-medium">contacto@tle.cl</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Oficina Central</div>
<div className="font-medium">Pudahuel, Región Metropolitana</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<form className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl" id="contacto">
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-2">Nombre Completo</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="Juan Pérez" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-2">Empresa / RUT</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="76.xxx.xxx-k" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-2">Correo Electrónico</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="juan@empresa.cl" type="email"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-slate-700 mb-2">Teléfono</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="+56 9 ..." type="tel"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-700 mb-2">Tipo de Servicio</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 text-center text-sm text-slate-600 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
                                        Carga General
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 text-center text-sm text-slate-600 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
                                        Última Milla
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 text-center text-sm text-slate-600 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
                                        Mudanza
                                    </div>
</label>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-slate-700 mb-2">Detalles del requerimiento</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" placeholder="Origen, destino, tipo de carga, fecha estimada..." rows="3"></textarea>
</div>
<button className="w-full py-3 px-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2" type="submit">
                            Solicitar Cotización
                            <iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">TLE<span className="text-slate-400">.cl</span></span>
</a>
<p className="text-slate-500 text-sm max-w-sm">
                        Transporte y Logística Express SpA. Soluciones integrales de transporte para empresas y particulares en todo Chile.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Servicios</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Carga Carretera</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Última Milla</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Mudanzas</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Almacenaje</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Términos y Condiciones</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Seguros de Carga</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Transporte y Logística Express SpA. Todos los derechos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
