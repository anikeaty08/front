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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleSlider(e) {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width)); 
            const percent = (x / rect.width) * 100;
            container.style.setProperty('--position', `${percent}%`);
        }

        function handleSliderTouch(e) {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            let x = e.touches[0].clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width)); 
            const percent = (x / rect.width) * 100;
            container.style.setProperty('--position', `${percent}%`);
        }
    
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
      

<div className="fixed bottom-0 inset-x-0 p-3 bg-white/90 backdrop-blur-lg border-t border-slate-200/80 z-[60] md:hidden flex gap-3 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl text-center shadow-lg shadow-slate-900/20 flex flex-col items-center justify-center gap-1 transition-all active:scale-95" href="tel:+13055600507">
<iconify-icon className="text-xl text-emerald-400 animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
            Llama: (305) 560-0507
        </a>
<a className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs py-3 rounded-xl text-center shadow-lg shadow-orange-600/20 flex flex-col items-center justify-center gap-1 transition-all active:scale-95" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
            Reserva Gratis
        </a>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex flex-col uppercase hover:opacity-80 transition-opacity" href="#">
<span className="tracking-tighter font-semibold text-lg text-slate-900 leading-none">Dental Pearl</span>
<span className="tracking-widest font-medium text-xs text-slate-500 leading-none mt-1">Miami</span>
</a>
<div className="flex items-center gap-6">

<div className="hidden xl:flex items-center gap-1.5 text-xs text-orange-700 font-semibold bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    La Oferta Termina En: <span className="tabular-nums animate-pulse text-orange-600">04:12:59</span>
</div>
<div className="flex items-center gap-3">
<a className="hidden lg:flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="tel:+13055600507">
<iconify-icon className="text-base text-emerald-400 animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
                        Llama Ahora: (305) 560-0507
                    </a>
<a className="hidden md:flex text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-orange-600/20 items-center gap-1.5" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
                        Reserva Gratis
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative pt-24 pb-24 md:pt-36 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-slate-200/50 to-slate-100/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-40 right-0 w-[500px] h-[500px] bg-orange-100/30 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full bg-white border border-slate-200 shadow-sm mb-8 hover:shadow-md transition-shadow">
<div className="flex items-center justify-center bg-orange-50 rounded-full p-1.5">
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-orange-500 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-700 tracking-wide">Calificación 5.0 • Más de 500 Reseñas en Miami</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-6">
<span className="block text-2xl md:text-4xl font-medium tracking-tight text-slate-500 mb-3">Carillas Premium Sin Tallado</span>
                    La sonrisa <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">perfecta en Miami.</span> <br/>
<span className="text-slate-400 font-medium">Seguro. Confiable. Sin desgaste.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-slate-500 max-w-2xl mb-8">Confía en el equipo cosmético de élite del sur de Florida para transformar tu confianza. Nuestras carillas ultrafinas y personalizadas preservan el 100% de tus dientes naturales. Sin dolor, sin agujas, completamente libre de riesgos.</p>
<div className="flex flex-col items-center gap-5 w-full sm:w-auto">
<div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold tracking-wide shadow-sm">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon>
                        Demanda Extremadamente Alta: Solo quedan 2 espacios de consulta esta semana
                    </div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="w-full sm:w-auto hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5 text-sm font-semibold text-white bg-slate-900 rounded-full px-8 py-4" href="tel:+13055600507">
<iconify-icon className="text-lg text-emerald-400 animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
                            Llama Ahora: (305) 560-0507
                        </a>
<a className="w-full sm:w-auto hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5 text-sm font-semibold text-white bg-orange-600 rounded-full px-8 py-4" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                            Reserva tu Consulta Gratis
                        </a>
</div>
<a className="mt-2 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors flex items-center gap-1.5" href="#process">
<iconify-icon className="text-sm" icon="solar:play-circle-linear"></iconify-icon>
                        Mira Nuestro Proceso
                    </a>
</div>

<div className="mt-16 relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl slider-container group select-none" onmousemove="handleSlider(event)" ontouchmove="handleSliderTouch(event)">

<img alt="Dientes Blancos y Sonrisa Saludable" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e07a0da-6a93-480f-84d8-e9cb64ccda6c_1600w.png"/>

<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase shadow-sm pointer-events-none z-10">Después</div>

<div className="absolute inset-0 w-full h-full slider-clip border-r-2 border-white/90 shadow-[2px_0_10px_rgba(0,0,0,0.1)] pointer-events-none z-20">
<img alt="Dientes Amarillentos y Encías" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1272e19-5be7-4c12-beb6-0d6c19b4a5f4_1600w.png"/>

<div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase shadow-sm pointer-events-none">Antes</div>
</div>

<div className="absolute left-[var(--position)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.15)] text-orange-500 pointer-events-none transition-transform group-hover:scale-105 z-30">
<iconify-icon className="rotate-90 text-lg" icon="solar:slider-vertical-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white py-8">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">Con la confianza de las principales organizaciones dentales</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400 grayscale opacity-60">
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:shield-plus-linear"></iconify-icon> Reconocido por la ADA</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon> Mejor Dentista 2023</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:health-linear"></iconify-icon> Miembro de la AACD</div>
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg"><iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon> Cumple con HIPAA</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pr-6 pb-20 pl-6" id="results">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold uppercase tracking-wide border border-orange-200 w-fit">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Laboratorio Local en Miami
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Calidad de clase mundial, fabricada en Miami.</h2>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                    No subcontratamos. Nuestros maestros ceramistas fabrican a mano cada carilla aquí mismo en el sur de Florida para que coincida perfectamente con tu estructura facial, garantizando una sonrisa blanca, brillante y duradera.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 border-t border-slate-200/60 pt-10 text-left w-full">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">100% Reversible y Seguro</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Tu esmalte natural permanece completamente intacto. Nos adherimos de forma segura sobre tus dientes existentes sin desgastarlos.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex shrink-0 bg-orange-50 w-10 h-10 border-orange-100 border rounded-full items-center justify-center">
<iconify-icon className="text-orange-500 text-xl" icon="ph:tooth-light"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Carillas Premium Sin Tallado</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Materiales de grado médico que resisten el café, el vino y el desgaste diario, garantizando una sonrisa blanca, brillante y duradera.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 border-t border-slate-200/60" id="process">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide border border-slate-200 w-fit mb-6">
<iconify-icon icon="solar:route-linear"></iconify-icon>
                        Nuestro Proceso
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Tres pasos para tu nueva sonrisa.</h2>
<p className="text-sm text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">Un proceso optimizado y completamente sin dolor, diseñado en torno a tu comodidad y nuestra obsesiva atención al detalle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">

<div className="hidden md:block absolute top-[3.25rem] left-20 right-20 h-px bg-slate-200 z-0"></div>

<div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-sm transition-shadow z-10 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-700 relative group-hover:text-orange-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">1</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Consulta Gratuita</h3>
<p className="text-xs text-slate-500 leading-relaxed">Ven a tu consulta de sonrisa gratuita. Tomamos escaneos digitales de tus dientes: sin impresiones molestas, sin molestias. Juntos diseñamos tu sonrisa perfecta y ves exactamente cómo lucirán tus resultados antes de comenzar.</p>
</div>

<div className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow z-10 md:-translate-y-4 group">
<div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 shadow-sm text-orange-600 relative">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">2</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Fabricado a Medida en Nuestro Laboratorio</h3>
<p className="text-xs text-slate-500 leading-relaxed">Tus carillas se hacen a medida aquí mismo en nuestro laboratorio interno. Sin laboratorios externos, sin esperar semanas. Tu sonrisa perfecta está lista en tan solo 3 días hábiles con un control de calidad total de principio a fin.</p>
</div>

<div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:shadow-sm transition-shadow z-10 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-700 relative group-hover:text-emerald-500 transition-colors">
<iconify-icon className="text-2xl" icon="solar:star-circle-linear"></iconify-icon>
<span className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">3</span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Pruébatelas y Sal Sonriendo</h3>
<p className="text-xs text-slate-500 leading-relaxed">Regresa para tu segunda cita, pruébate tus nuevas carillas y sal con la sonrisa que siempre has querido. Sin tallado. Sin inyecciones. Sin dolor. Solo resultados.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden" id="booking">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wide border border-orange-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Urgente: Solo Quedan 2 Espacios Esta Semana
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        Asegura tu consulta <br/>privada hoy.
                    </h2>
<p className="text-slate-500 text-sm md:text-base mb-10 max-w-md leading-relaxed">
                        Programa ahora para asegurar tu <strong className="text-slate-900 font-semibold">consulta gratuita</strong> antes de que se llenen nuestros espacios restantes.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="hover:-translate-y-0.5 transition-transform shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full px-8 py-4 w-full sm:w-fit" href="tel:+13055600507">
<iconify-icon className="text-lg text-emerald-400 animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
                            Llama Ahora
                        </a>
<a className="hover:-translate-y-0.5 transition-transform shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-4 w-full sm:w-fit" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                            Reserva Gratis
                        </a>
</div>
</div>

<div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-orange-600 shrink-0 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-1">Financiamiento Flexible</h3>
<p className="text-slate-500 text-sm leading-relaxed">Planes con 0% de interés disponibles. Obtén tu sonrisa perfecta hoy y paga a plazos con nuestros socios de confianza.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-orange-600 shrink-0 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-1">Entrega Rápida</h3>
<p className="text-slate-500 text-sm leading-relaxed">Desde la consulta hasta la colocación final en tan solo dos semanas, manejado exclusivamente en nuestro laboratorio local privado.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/60 py-10 px-6 pb-28 md:pb-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex flex-col uppercase">
<span className="tracking-tighter font-semibold text-lg text-slate-900 leading-none">Dental Pearl</span>
<span className="tracking-widest font-medium text-xs text-slate-500 leading-none mt-1">Miami</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-600">
<a className="flex items-center gap-2 hover:text-orange-600 transition-colors" href="https://maps.google.com/?q=14771+Biscayne+Blvd" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    14771 Biscayne Blvd
                </a>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors text-slate-900 bg-slate-100 px-4 py-2 rounded-full" href="tel:+13055600507">
<iconify-icon className="text-lg text-emerald-500" icon="solar:phone-calling-linear"></iconify-icon>
                    (305) 560-0507
                </a>
</div>
</div>
</footer>



    </>
  );
}
