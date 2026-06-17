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



    (function () {
      let total = 2 * 60 * 60 + 15 * 60 + 45;
      const h = document.getElementById('hours');
      const m = document.getElementById('minutes');
      const s = document.getElementById('seconds');

      function render() {
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds = total % 60;

        h.textContent = String(hours).padStart(2, '0');
        m.textContent = String(minutes).padStart(2, '0');
        s.textContent = String(seconds).padStart(2, '0');
      }

      render();

      setInterval(function () {
        if (total > 0) {
          total--;
          render();
        }
      }, 1000);
    })();
  
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
      
<div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50">
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-rose-500/5 to-cyan-400/10"></div>
<div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-orange-300/20 blur-3xl"></div>
<div className="absolute top-32 -left-10 h-40 w-40 rounded-full bg-rose-300/20 blur-3xl"></div>
<div className="relative mx-auto max-w-md px-4 pt-4 pb-24">
<div className="flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-orange-200 bg-white/90 px-3 py-1 shadow-sm backdrop-blur">
<span className="text-xs font-medium uppercase tracking-[0.18em] text-orange-600">VIAJAHOY</span>
</div>
<div className="rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
            Oferta por tiempo limitado
          </div>
</div>
<div className="mt-5 rounded-3xl bg-white/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 backdrop-blur">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 ring-1 ring-red-200">
<iconify-icon height="18" icon="solar:alarm-linear" width="18"></iconify-icon>
              Últimos lugares saliendo este mes
            </div>
<div className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 ring-1 ring-emerald-200 sm:inline-flex">
              Disponible ahora
            </div>
</div>
<div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200">
<img alt="Playa en Cancún con mar turquesa y camastros" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950">
            Viaja a Cancún con
            <span className="block text-orange-600">precio especial hoy</span>
</h1>
<p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Paquetes con vuelo y hotel a una tarifa promocional por tiempo limitado. Llama ahora y recibe atención inmediata para apartar antes de que suba.
          </p>
<div className="mt-5 flex flex-wrap gap-2">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
<iconify-icon height="16" icon="solar:airplane-takeoff-linear" width="16"></iconify-icon>
              Vuelo redondo
            </div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
<iconify-icon height="16" icon="solar:bed-linear" width="16"></iconify-icon>
              Hotel incluido
            </div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
<iconify-icon height="16" icon="solar:phone-calling-rounded-linear" width="16"></iconify-icon>
              Reserva por llamada
            </div>
</div>
<div className="mt-5 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 p-[0.0625rem]">
<div className="rounded-2xl bg-white p-4">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Desde</p>
<div className="mt-1 flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-950">$7,990</span>
<span className="pb-1 text-sm text-slate-500">por persona</span>
</div>
<p className="mt-1 text-xs text-slate-500">Impuestos y disponibilidad sujetos a cambio</p>
</div>
<div className="rounded-xl bg-red-50 px-3 py-2 text-right ring-1 ring-red-200">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-red-500">Hoy</p>
<p className="text-sm font-medium text-red-600">precio promocional</p>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200">
<img alt="Vista tropical del mar en Cancún" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Incluye</p>
<p className="mt-1 text-sm font-medium text-slate-800">Vuelo redondo</p>
</div>
<div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Hospedaje</p>
<p className="mt-1 text-sm font-medium text-slate-800">Hotel seleccionado</p>
</div>
<div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Duración</p>
<p className="mt-1 text-sm font-medium text-slate-800">4 días / 3 noches</p>
</div>
<div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
<p className="text-xs text-slate-500">Asesoría</p>
<p className="mt-1 text-sm font-medium text-slate-800">Reserva inmediata</p>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-amber-100 p-2 text-amber-600">
<iconify-icon height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-amber-900">Quedan pocos espacios con esta tarifa</p>
<p className="mt-1 text-xs leading-5 text-amber-800">
                  Nuestros asesores están cotizando en tiempo real. Si esperas, el precio o la disponibilidad pueden subir.
                </p>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="rounded-2xl bg-slate-950 p-3 text-center text-white shadow-sm">
<p className="text-xs uppercase tracking-[0.16em] text-white/60">Termina en</p>
<p className="mt-1 text-xl font-semibold tracking-tight" id="hours">02</p>
<p className="text-xs text-white/70">horas</p>
</div>
<div className="rounded-2xl bg-slate-950 p-3 text-center text-white shadow-sm">
<p className="text-xs uppercase tracking-[0.16em] text-white/60">Min</p>
<p className="mt-1 text-xl font-semibold tracking-tight" id="minutes">15</p>
<p className="text-xs text-white/70">minutos</p>
</div>
<div className="rounded-2xl bg-slate-950 p-3 text-center text-white shadow-sm">
<p className="text-xs uppercase tracking-[0.16em] text-white/60">Seg</p>
<p className="mt-1 text-xl font-semibold tracking-tight" id="seconds">45</p>
<p className="text-xs text-white/70">segundos</p>
</div>
</div>
<div className="mt-5 space-y-3">
<a className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-4 text-base font-medium text-white shadow-[0_18px_40px_rgba(249,115,22,0.35)] transition active:scale-[0.99]" href="tel:+525500000000">
<iconify-icon height="22" icon="solar:phone-calling-rounded-linear" width="22"></iconify-icon>
              Llamar ahora y apartar
            </a>
<a className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-800 shadow-sm transition active:scale-[0.99]" href="tel:+525500000000">
<iconify-icon height="22" icon="solar:headphones-round-sound-linear" width="22"></iconify-icon>
              Hablar con un asesor disponible
            </a>
</div>
<p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Atención inmediata · Sin formularios · Reserva por teléfono
          </p>
</div>
</div>
</section>
<section className="mx-auto max-w-md px-4 pb-28">
<div className="space-y-4">
<div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<h2 className="text-xl font-semibold tracking-tight text-slate-950">
            ¿Qué obtienes al llamar hoy?
          </h2>
<div className="mt-4 space-y-3">
<div className="flex gap-3">
<div className="mt-0.5 rounded-full bg-cyan-50 p-2 text-cyan-600">
<iconify-icon height="18" icon="solar:airbuds-case-open-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Cotización al momento</p>
<p className="text-xs leading-5 text-slate-600">Te confirmamos disponibilidad real y la mejor salida disponible.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-full bg-orange-50 p-2 text-orange-600">
<iconify-icon height="18" icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Precio promocional vigente</p>
<p className="mt-1 text-xs leading-5 text-slate-600">Al llamar ahora puedes asegurar la tarifa antes de que cambie.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 rounded-full bg-emerald-50 p-2 text-emerald-600">
<iconify-icon height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Atención personalizada</p>
<p className="text-xs leading-5 text-slate-600">Te recomendamos la opción ideal según tu presupuesto y fechas.</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-slate-950 p-5 text-white shadow-sm">
<div className="flex items-center justify-between gap-3">
<h2 className="text-xl font-semibold tracking-tight">Oferta express a Cancún</h2>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-orange-300">Solo hoy</span>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
<span className="text-sm text-white/80">Vuelo redondo</span>
<span className="text-sm font-medium">Incluido</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
<span className="text-sm text-white/80">Hotel</span>
<span className="text-sm font-medium">3 noches</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
<span className="text-sm text-white/80">Ideal para</span>
<span className="text-sm font-medium">Parejas y familias</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
<span className="text-sm text-white/80">Reservación</span>
<span className="text-sm font-medium text-orange-300">Solo por llamada</span>
</div>
</div>
<a className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-4 py-4 text-base font-medium text-slate-950 shadow-sm transition active:scale-[0.99]" href="tel:+525500000000">
<iconify-icon height="22" icon="solar:phone-bold-duotone" width="22"></iconify-icon>
            Quiero mi precio de hoy
          </a>
</div>
<div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<h2 className="text-xl font-semibold tracking-tight text-slate-950">Llama en menos de 1 minuto</h2>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">1</div>
<p className="text-sm text-slate-700">Un asesor te responde de inmediato.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">2</div>
<p className="text-sm text-slate-700">Te cotizamos salidas y hoteles disponibles.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-medium text-white">3</div>
<p className="text-sm text-slate-700">Si te conviene, apartas en ese momento.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-red-200 bg-red-50 p-5">
<div className="flex gap-3">
<div className="mt-0.5 rounded-full bg-red-100 p-2 text-red-600">
<iconify-icon height="18" icon="solar:bell-bing-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-red-900">Importante</h3>
<p className="mt-1 text-xs leading-5 text-red-800">
                Esta promoción está sujeta a cambios de tarifa y disponibilidad sin previo aviso. 
                Si ya estás considerando viajar a Cancún, llama ahora para no perder el precio.
              </p>
</div>
</div>
</div>
</div>
</section>
<div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-md items-center gap-3 px-4 py-3">
<div className="min-w-0 flex-1">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-red-500">Última oportunidad hoy</p>
<p className="truncate text-sm font-medium text-slate-900">Paquetes a Cancún desde $7,990</p>
</div>
<a className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition active:scale-[0.98]" href="tel:+525500000000">
<iconify-icon height="20" icon="solar:phone-calling-rounded-linear" width="20"></iconify-icon>
          Llamar
        </a>
</div>
</div>
</div>


    </>
  );
}
