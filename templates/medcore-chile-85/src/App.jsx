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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-indigo-600">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-slate-900">MedCore<span className="text-slate-400 font-normal">.cl</span></span>
</div>
</div>

<div className="p-4">
<button className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-medium">CS</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 group-hover:text-indigo-700">Clínica Santiago</p>
<p className="text-xs text-slate-500">Sucursal Providencia</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<nav className="flex-1 px-4 space-y-1 overflow-y-auto py-2">
<p className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-2">Clínica</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-50 text-indigo-600 ring-1 ring-slate-200/50" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Agenda &amp; Citas
                <span className="ml-auto bg-indigo-50 text-indigo-600 py-0.5 px-2 rounded-full text-[10px] font-semibold">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Pacientes (RUT)
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Ficha Clínica
            </a>
<p className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-6">Administración</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Liquidaciones
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Reportes FONASA
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Auditoría (Ley 20.584)
            </a>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<img alt="Doctor" className="w-9 h-9 rounded-full object-cover border border-slate-200" src="https://i.pravatar.cc/150?u=dr"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Dr. Andrés Silva</p>
<p className="text-xs text-slate-500 truncate">Cardiología • Admin</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50">

<header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 bg-white z-10">

<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center relative w-96">
<iconify-icon className="absolute left-3 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Buscar paciente por RUT (ej. 12.345.678-K)..." type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="h-6 w-px bg-slate-200"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-all shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Nueva Consulta
                </button>
</div>
</header>

<div className="flex-1 overflow-auto p-6 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Pacientes Hoy</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">24</h3>
</div>
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
<span>+12% vs semana pasada</span>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Ingresos Estimados</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">$ 850.000</h3>
</div>
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400">18 Prestaciones realizadas</p>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Telemedicina</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">5 Citas</h3>
</div>
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=1" />
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=2"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+3</div>
</img></div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Auditoría</p>
<h3 className="text-base font-semibold text-slate-900 mt-1 tracking-tight">Estado: Conforme</h3>
</div>
<div className="p-2 bg-slate-50 text-slate-600 rounded-lg">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-400">Ley 20.584 • Último registro 2m</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                                Agenda del Día
                                <span className="text-slate-400 font-normal">| 24 Octubre 2023</span>
</h2>
<div className="flex items-center gap-2">
<button className="p-1 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-1 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
<button className="ml-2 text-xs font-medium text-indigo-600 hover:text-indigo-700">Ver Calendario Completo</button>
</div>
</div>
<div className="divide-y divide-slate-50">

<div className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 relative group cursor-pointer border-l-2 border-transparent hover:border-indigo-500">
<div className="w-14 flex flex-col items-center justify-center pt-1">
<span className="text-sm font-semibold text-slate-900">09:30</span>
<span className="text-[10px] text-slate-400 font-medium">AM</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">María González Tapia</h4>
<p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:card-id-linear" width="12"></iconify-icon>
                                                15.432.198-4 • Medicina General
                                            </p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                            Confirmado
                                        </span>
</div>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
<iconify-icon icon="solar:health-linear" width="10"></iconify-icon>
                                            FONASA - Nivel 3
                                        </span>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500">
<iconify-icon icon="solar:map-point-linear" width="10"></iconify-icon>
                                            Box 4
                                        </span>
</div>
</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 relative group cursor-pointer border-l-2 border-transparent hover:border-indigo-500">
<div className="w-14 flex flex-col items-center justify-center pt-1">
<span className="text-sm font-semibold text-slate-900">10:15</span>
<span className="text-[10px] text-slate-400 font-medium">AM</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900">Jorge Muñoz Castillo</h4>
<p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:card-id-linear" width="12"></iconify-icon>
                                                18.992.443-K • Control Crónico
                                            </p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-purple-50 text-purple-700 border border-purple-100">
<iconify-icon className="mr-1" icon="solar:videocamera-record-linear" width="10"></iconify-icon>
                                            Telemedicina
                                        </span>
</div>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
<iconify-icon icon="solar:shield-linear" width="10"></iconify-icon>
                                            ISAPRE Colmena
                                        </span>
</div>
</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="p-2 bg-indigo-600 text-white rounded-lg shadow-sm text-xs font-medium flex items-center gap-1">
                                        Iniciar
                                    </button>
</div>
</div>

<div className="p-4 bg-slate-50/50 flex items-start gap-4 opacity-75">
<div className="w-14 flex flex-col items-center justify-center pt-1">
<span className="text-sm font-medium text-slate-500 line-through">11:00</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-500 line-through">Valentina Rojas</h4>
<p className="text-xs text-slate-400 mt-0.5">Cancelado por paciente</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200">
                                            Cancelado
                                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Prestaciones Recientes</h2>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">Ver todas</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-5 py-3 tracking-wider">Código</th>
<th className="px-5 py-3 tracking-wider">Descripción</th>
<th className="px-5 py-3 tracking-wider text-right">Valor</th>
<th className="px-5 py-3 tracking-wider text-center">Estado</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-5 py-3 font-mono text-xs">0101001</td>
<td className="px-5 py-3">Consulta Médica Electiva</td>
<td className="px-5 py-3 text-right font-medium">$ 45.000</td>
<td className="px-5 py-3 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-mono text-xs">0301045</td>
<td className="px-5 py-3">Electrocardiograma</td>
<td className="px-5 py-3 text-right font-medium">$ 12.500</td>
<td className="px-5 py-3 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
</td>
</tr>
<tr>
<td className="px-5 py-3 font-mono text-xs">0101201</td>
<td className="px-5 py-3">Teleconsulta Especialidad</td>
<td className="px-5 py-3 text-right font-medium">$ 35.000</td>
<td className="px-5 py-3 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:user-plus-linear"></iconify-icon>
                            Ingreso Rápido
                        </h2>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">RUT Paciente</label>
<div className="relative">
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono" placeholder="Ej. 11.222.333-4" type="text"/>
<div className="absolute right-2 top-2 text-green-500 hidden">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Previsión</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer border border-indigo-500 bg-indigo-50 rounded-lg p-2 text-center transition-all">
<input checked="" className="hidden" name="prevision" type="radio"/>
<span className="text-xs font-medium text-indigo-700">FONASA</span>
</label>
<label className="cursor-pointer border border-slate-200 hover:bg-slate-50 rounded-lg p-2 text-center transition-all">
<input className="hidden" name="prevision" type="radio"/>
<span className="text-xs font-medium text-slate-600">ISAPRE</span>
</label>
</div>
</div>
<button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" type="button">
                                Crear Ficha
                            </button>
</form>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-3 border-b border-slate-100">
<h2 className="text-sm font-semibold text-slate-900">Disponibilidad Médica</h2>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">AS</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Dr. Andrés Silva</p>
<p className="text-[10px] text-slate-500">Cardiología</p>
</div>
<span className="text-[10px] text-slate-400">Hasta 18:00</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 text-xs font-bold">MJ</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-amber-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate">Dra. María José</p>
<p className="text-[10px] text-slate-500">Pediatría</p>
</div>
<span className="text-[10px] text-slate-400">En colación</span>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-slate-400" icon="solar:history-linear"></iconify-icon>
<h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Registro de Auditoría</h3>
</div>
<ul className="space-y-3 relative before:absolute before:left-1.5 before:top-1 before:h-full before:w-px before:bg-slate-200">
<li className="relative pl-5">
<span className="absolute left-0 top-1 w-3 h-3 bg-slate-200 rounded-full border-2 border-slate-50"></span>
<p className="text-[10px] text-slate-500 leading-tight">
<span className="font-medium text-slate-800">Dr. Silva</span> modificó ficha de <span className="text-slate-700">P. 15.432.198-4</span>.
                                </p>
<span className="text-[10px] text-slate-400">Hace 10 min</span>
</li>
<li className="relative pl-5">
<span className="absolute left-0 top-1 w-3 h-3 bg-slate-200 rounded-full border-2 border-slate-50"></span>
<p className="text-[10px] text-slate-500 leading-tight">
<span className="font-medium text-slate-800">Recepción</span> emitió bono FONASA.
                                </p>
<span className="text-[10px] text-slate-400">Hace 25 min</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 bg-white border border-slate-200 shadow-lg rounded-xl p-4 flex items-start gap-3 w-80 animate-bounce z-50">
<div className="text-emerald-500 bg-emerald-50 p-1.5 rounded-lg">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Recordatorio Enviado</h4>
<p className="text-xs text-slate-500 mt-1">SMS y WhatsApp enviados a María González (Cita 09:30).</p>
</div>
<button className="ml-auto text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:close-linear"></iconify-icon></button>
</div>

    </>
  );
}
