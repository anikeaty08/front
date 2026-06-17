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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">

<div className="text-slate-900 font-semibold tracking-tighter text-lg">
                    HM HOSPITALES <span className="text-slate-400 font-normal">| Oficina del Médico</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Ayuda</a>
<a className="hover:text-slate-900 transition-colors" href="#">Notificaciones</a>
</div>

<div className="flex items-center gap-3 pl-6 border-l border-slate-200">
<div className="text-right hidden md:block">
<p className="text-xs font-semibold text-slate-900">Dr. Alejandro V.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">Cardiología</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 overflow-hidden ring-2 ring-white shadow-sm">
<img alt="Profile" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
</div>
</div>
</div>
</nav>

<main className="pt-28 pb-20 px-6 max-w-7xl mx-auto space-y-16">

<section className="relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Sistema operativo</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        Tu espacio profesional <br/> en HM Hospitales.
                    </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        Gestiona tu actividad clínica, recursos y accede a ventajas exclusivas desde una plataforma unificada, segura y diseñada para tu práctica diaria.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center gap-2">
<span>Acceder a Quirófanos</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                            Ver agenda de hoy
                        </button>
</div>
</div>

<div className="relative h-80 lg:h-96 w-full bg-gradient-to-tr from-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-white shadow-sm flex items-center justify-center">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-64 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-10 transform rotate-[-3deg]">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs font-semibold text-slate-900">Cirugía Programada</span>
</div>
<span className="text-[10px] text-slate-400">10:30 AM</span>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
</div>
<div className="mt-4 flex gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-400 text-xs" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-400 text-xs" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute right-12 bottom-12 w-56 bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-white p-4 z-20 transform rotate-[2deg]">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500">Rendimiento</div>
<div className="text-sm font-semibold text-slate-900">+12% vs mes anterior</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover-lift group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon icon="solar:stethoscope-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6">
<iconify-icon icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Gestión Profesional</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                            Centraliza tus citas, solicitudes de quirófano y trámites con aseguradoras.
                        </p>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500 font-medium">Próxima intervención</span>
<span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">Hoy</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-blue-500 rounded-full"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Quirófano 3</p>
<p className="text-xs text-slate-400">15:00 - Artroscopia</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover-lift group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
<iconify-icon icon="solar:box-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Material y Pedidos</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                            Control de inventario, solicitudes de equipamiento y fungibles para tu consulta.
                        </p>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-slate-500">Stock Crítico</span>
<span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded">2 ítems</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-700">Suturas Prolene</span>
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[20%]"></div>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-700">Guantes Nitrilo</span>
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover-lift group cursor-pointer relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Portal de Ventajas</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
                            Marketplace exclusivo para partners HM. Finanzas, lifestyle y formación ejecutiva.
                        </p>
<div className="mt-auto">
<div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:crown-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">Nivel Gold</p>
<p className="text-[10px] text-slate-400">Acceso a Banca Privada</p>
</div>
<iconify-icon className="ml-auto text-slate-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-end justify-between px-2">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Destacados para ti</h2>
<p className="text-sm text-slate-500 mt-1">Beneficios seleccionados según tu perfil.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1" href="#">
                    Ver todo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex gap-6 overflow-x-auto hide-scroll pb-4 -mx-6 px-6">

<div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
<div className="h-32 bg-slate-100 relative">
<img alt="Finance" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-slate-800">Finanzas</div>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Gestión Patrimonial</h4>
<p className="text-xs text-slate-500 mb-4">Asesoramiento fiscal exclusivo para médicos colaboradores.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-900">
<img alt="Partner" className="w-5 h-5 rounded-full" src="https://ui-avatars.com/api/?name=S+B&amp;background=000&amp;color=fff&amp;size=24"/>
<span>Santander Private Banking</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
<div className="h-32 bg-slate-100 relative">
<img alt="Tech" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-slate-800">Tecnología</div>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Renovación Equipos</h4>
<p className="text-xs text-slate-500 mb-4">Renting tecnológico con condiciones especiales.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-900">
<span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px]">A</span>
<span>Apple Enterprise</span>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
<div className="h-32 bg-slate-100 relative">
<img alt="Wellness" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-slate-800">Bienestar</div>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Executive Health</h4>
<p className="text-xs text-slate-500 mb-4">Programas de wellness y salud mental para profesionales.</p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-900">
<span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px]">HM</span>
<span>HM Wellness</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 pt-16">
<div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Acceso Seguro</h5>
<p className="text-xs text-slate-500 mt-1 max-w-xs">Autenticación de doble factor y cifrado de datos clínicos.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Partner Tecnológico</h5>
<p className="text-xs text-slate-500 mt-1 max-w-xs">Facilitamos tu práctica médica sin interferir en tu independencia.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Soporte Médico</h5>
<p className="text-xs text-slate-500 mt-1 max-w-xs">Canal directo para incidencias técnicas y administrativas.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-xs font-medium text-slate-900">HM HOSPITALES</p>
<p className="text-[10px] text-slate-400 mt-1">© 2024 HM Hospitales. Todos los derechos reservados.</p>
</div>
<div className="flex gap-6 text-[11px] text-slate-500 font-medium">
<a className="hover:text-slate-900" href="#">Política de Privacidad</a>
<a className="hover:text-slate-900" href="#">Términos de Uso</a>
<a className="hover:text-slate-900" href="#">Código Ético</a>
</div>
</div>
</footer>

    </>
  );
}
