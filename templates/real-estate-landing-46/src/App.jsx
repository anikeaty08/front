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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<a className="flex items-center gap-2 text-lg font-medium tracking-tighter text-slate-900" href="#">
<iconify-icon className="text-blue-600" icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
                INMOBILIARIA
            </a>
<div className="hidden gap-8 text-sm font-medium text-slate-500 md:flex">
<a className="transition-colors hover:text-slate-900" href="#propiedades">Propiedades</a>
<a className="transition-colors hover:text-slate-900" href="#nosotros">Nosotros</a>
<a className="transition-colors hover:text-slate-900" href="#proceso">Proceso</a>
</div>
<a className="group flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-slate-800 hover:ring-2 hover:ring-slate-200" href="https://wa.me/">
<span>WhatsApp</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Oportunidades de inversión disponibles
                </div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                    Encuentra la propiedad <br/>
<span className="text-slate-400">ideal para ti.</span>
</h1>
<p className="mb-10 max-w-xl text-lg text-slate-500 leading-relaxed font-light">
                    Especialistas en venta y alquiler de casas y departamentos exclusivos. Seguridad, confianza y el respaldo que necesitas para tu próxima inversión.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95" href="https://wa.me/">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Hablar por WhatsApp
                    </a>
<a className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95" href="#propiedades">
                        Ver catálogo
                    </a>
</div>
</div>
</div>

<div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-10 lg:opacity-100 pointer-events-none -z-10">
<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent lg:via-slate-50"></div>
<img alt="Interior moderno" className="h-full w-full object-cover object-left grayscale-[20%]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
</section>

<section className="py-20 bg-white" id="propiedades">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">Propiedades Destacadas</h2>
<p className="mt-2 text-slate-500">Selección exclusiva de inmuebles verificados.</p>
</div>
<div className="flex gap-2">
<button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50">Venta</button>
<button className="rounded-lg px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900">Alquiler</button>
<button className="rounded-lg px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-900">Proyectos</button>
</div>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-200/50">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<span className="absolute top-3 left-3 z-10 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-900 shadow-sm">Venta</span>
<img alt="Casa Moderna" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Residencia Los Olivos</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                                San Isidro, Lima
                            </p>
</div>
<div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 4</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 3</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 280m²</div>
</div>
<div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-lg font-medium tracking-tight text-slate-900">$450,000</span>
<button className="rounded-full bg-slate-50 p-2 text-slate-900 transition-colors hover:bg-slate-100">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-200/50">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<span className="absolute top-3 left-3 z-10 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-900 shadow-sm">Alquiler</span>
<img alt="Departamento Loft" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Loft Miraflores</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                                Miraflores, Centro
                            </p>
</div>
<div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 1</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 1</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 85m²</div>
</div>
<div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-lg font-medium tracking-tight text-slate-900">$1,200 <span className="text-xs font-normal text-slate-400">/mes</span></span>
<button className="rounded-full bg-slate-50 p-2 text-slate-900 transition-colors hover:bg-slate-100">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-200/50">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<span className="absolute top-3 left-3 z-10 rounded-md bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-900 shadow-sm">Terreno</span>
<img alt="Terreno Campo" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Lote Campestre Sur</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                                Cañete, Lima Sur
                            </p>
</div>
<div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1"><iconify-icon icon="solar:ruler-angular-linear" width="16"></iconify-icon> 1,500m²</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon> Zona Verde</div>
</div>
<div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-lg font-medium tracking-tight text-slate-900">$95,000</span>
<button className="rounded-full bg-slate-50 p-2 text-slate-900 transition-colors hover:bg-slate-100">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-200/50">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<span className="absolute top-3 left-3 z-10 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">Proyecto</span>
<img alt="Edificio Moderno" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-5">
<div className="mb-4">
<h3 className="font-medium text-slate-900">Edificio Vanguardia</h3>
<p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                                Barranco, Lima
                            </p>
</div>
<div className="mb-4 flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1"><iconify-icon icon="solar:key-linear" width="16"></iconify-icon> Entrega 2024</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:home-2-linear" width="16"></iconify-icon> Dptos &amp; Lofts</div>
</div>
<div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
<span className="text-lg font-medium tracking-tight text-slate-900">Desde $110,000</span>
<button className="rounded-full bg-slate-50 p-2 text-slate-900 transition-colors hover:bg-slate-100">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="nosotros">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">Por qué elegirnos</h2>
<p className="mt-4 text-slate-500 max-w-2xl mx-auto">Más que una inmobiliaria, somos tus socios estratégicos en cada paso del proceso.</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 font-medium text-slate-900">Asesoría Personalizada</h3>
<p className="text-sm text-slate-500 leading-relaxed">Entendemos tus necesidades y te ofrecemos opciones que se ajustan a tu perfil.</p>
</div>

<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 font-medium text-slate-900">Propiedades Verificadas</h3>
<p className="text-sm text-slate-500 leading-relaxed">Cada inmueble pasa por un estricto control de calidad y situación legal.</p>
</div>

<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 font-medium text-slate-900">Respaldo Legal</h3>
<p className="text-sm text-slate-500 leading-relaxed">Te acompañamos en todo el trámite documental para una transacción segura.</p>
</div>

<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 font-medium text-slate-900">Atención Rápida</h3>
<p className="text-sm text-slate-500 leading-relaxed">Respuestas ágiles y visitas programadas a tu conveniencia.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200" id="proceso">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Proceso simple y transparente</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-medium text-slate-900">1</div>
<div>
<h3 className="font-medium text-slate-900">Buscas</h3>
<p className="mt-1 text-sm text-slate-500">Explora nuestro catálogo online o cuéntanos qué necesitas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-medium text-slate-900">2</div>
<div>
<h3 className="font-medium text-slate-900">Visitas</h3>
<p className="mt-1 text-sm text-slate-500">Coordinamos una visita guiada para que conozcas tu futuro hogar.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 font-medium text-blue-600">3</div>
<div>
<h3 className="font-medium text-slate-900">Compras o Alquilas</h3>
<p className="mt-1 text-sm text-slate-500">Cerramos el trato con total seguridad y asesoría profesional.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="https://wa.me/">
                            Comenzar ahora
                            <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-96 overflow-hidden rounded-2xl bg-slate-100">
<img alt="Llaves de casa" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur-sm shadow-sm border border-slate-100">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Trato Cerrado</p>
<p className="text-xs text-slate-500">Más de 500 familias felices</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 py-20 text-center">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">¿Listo para dar el siguiente paso?</h2>
<p className="mb-10 text-slate-400 font-light">
                Agenda una visita sin compromiso. Nuestro equipo está listo para asesorarte en la búsqueda de tu propiedad ideal.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/20 active:scale-95" href="https://wa.me/">
<iconify-icon icon="solar:brand-whatsapp-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Hablar por WhatsApp
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 active:scale-95" href="mailto:contacto@inmobiliaria.com">
                    Enviar Correo
                </a>
</div>
<div className="mt-20 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
<p>© 2024 Inmobiliaria Premium. Todos los derechos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Términos</a>
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
