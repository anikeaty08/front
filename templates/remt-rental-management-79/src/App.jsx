import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchView(role) {
            const adminView = document.getElementById('view-admin');
            const clientView = document.getElementById('view-client');
            const btnAdmin = document.getElementById('btn-admin');
            const btnClient = document.getElementById('btn-client');
            const userName = document.getElementById('active-user-name');
            const userEmail = document.getElementById('active-user-email');

            const activeClass = 'px-3 py-1 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm border border-slate-200 transition-all';
            const inactiveClass = 'px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-all border border-transparent';

            if (role === 'admin') {
                adminView.classList.remove('hidden');
                clientView.classList.add('hidden');
                
                btnAdmin.className = activeClass;
                btnClient.className = inactiveClass;
                
                userName.textContent = 'Admin. del Sistema';
                userEmail.textContent = 'admin@remt.com';
            } else {
                adminView.classList.add('hidden');
                clientView.classList.remove('hidden');
                
                btnClient.className = activeClass;
                btnAdmin.className = inactiveClass;
                
                userName.textContent = 'Sarah Jenkins';
                userEmail.textContent = 'sarah.j@ejemplo.com';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">REMT</span>
</div>

<div className="hidden sm:flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm border border-slate-200 transition-all" id="btn-admin" onclick="switchView('admin')">Vista Administrador</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-all border border-transparent" id="btn-client" onclick="switchView('client')">Vista Cliente</button>
</div>
</div>

<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<div className="text-xs font-medium text-slate-900" id="active-user-name">Admin. del Sistema</div>
<div className="text-xs text-slate-500" id="active-user-email">admin@remt.com</div>
</div>
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</header>
<main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">



<div className="space-y-8 block animate-[fadeIn_0.3s_ease-out]" id="view-admin">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Panel de Administración</h1>
<p className="text-sm text-slate-500 mt-1">Resumen completo de todas las propiedades y cuentas de inquilinos.</p>
</div>
<button className="h-9 px-4 rounded-md bg-blue-600 text-white text-xs font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
<iconify-icon className="text-sm" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Añadir Registro
                </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between text-slate-500">
<span className="text-xs font-medium">Total Inquilinos</span>
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">124</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between text-slate-500">
<span className="text-xs font-medium">Recaudado (Nov)</span>
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$142,500</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between text-slate-500">
<span className="text-xs font-medium">Pagos Pendientes</span>
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$18,200</div>
</div>
<div className="p-5 rounded-xl border border-rose-200 bg-rose-50 shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50"></div>
<div className="flex items-center justify-between text-rose-600">
<span className="text-xs font-medium">Clientes Atrasados</span>
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-rose-900">7</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Resumen de Todos los Pagos</h2>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Inquilino y Correo</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Propiedad</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Monto</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Vencimiento</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Estado</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 text-right">Acción</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4">
<div className="text-slate-900 font-medium">Michael Chen</div>
<div className="text-xs text-slate-500">m.chen@ejemplo.com</div>
</td>
<td className="px-5 py-4 text-slate-600">Apt 4B, The Vista</td>
<td className="px-5 py-4 text-slate-900">$2,400</td>
<td className="px-5 py-4 text-slate-500">1 Nov, 2024</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> Pagado
                                        </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4">
<div className="text-slate-900 font-medium">Sarah Jenkins</div>
<div className="text-xs text-slate-500">sarah.j@ejemplo.com</div>
</td>
<td className="px-5 py-4 text-slate-600">Unidad 112, Oakwood</td>
<td className="px-5 py-4 text-slate-900">$1,850</td>
<td className="px-5 py-4 text-slate-500">5 Nov, 2024</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
<div className="w-1 h-1 rounded-full bg-amber-500"></div> Pendiente
                                        </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4">
<div className="text-slate-900 font-medium">David Rodriguez</div>
<div className="text-xs text-slate-500">d.rodriguez@correo.com</div>
</td>
<td className="px-5 py-4 text-slate-600">Casa 7, Calle Pino</td>
<td className="px-5 py-4 text-slate-900">$3,200</td>
<td className="px-5 py-4 text-rose-600">28 Oct, 2024</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200">
<div className="w-1 h-1 rounded-full bg-rose-500"></div> Atrasado
                                        </span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>



<div className="space-y-8 hidden animate-[fadeIn_0.3s_ease-out]" id="view-client">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Mi Portal</h1>
<p className="text-sm text-slate-500 mt-1">Bienvenida de nuevo, Sarah. Gestiona tu propiedad y pagos.</p>
</div>
<button className="h-9 px-4 rounded-md bg-blue-600 text-white text-xs font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
<iconify-icon className="text-sm" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
                    Realizar un Pago
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="text-xs font-medium text-slate-500 mb-4 uppercase tracking-wider">Mi Propiedad</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg border border-blue-100 bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-lg font-semibold text-slate-900 tracking-tight">Unidad 112, Residencias Oakwood</div>
<div className="text-sm text-slate-500 mt-1">1234 Avenida Arce, Portland, OR 97204</div>
</div>
</div>
</div>
<div className="col-span-1 p-6 rounded-xl border border-amber-200 bg-amber-50 shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 left-0 w-full h-1 bg-amber-400"></div>
<div>
<div className="text-xs font-medium text-amber-700 mb-1">Estado Actual</div>
<div className="text-xl font-semibold text-amber-900 tracking-tight">Pago Pendiente</div>
</div>
<div className="mt-4 flex items-end justify-between">
<div>
<div className="text-xs text-amber-700/70">Monto Adeudado</div>
<div className="text-lg font-medium text-amber-900">$1,850</div>
</div>
<div className="text-right">
<div className="text-xs text-amber-700/70">Vencimiento</div>
<div className="text-sm font-medium text-amber-900">5 Nov, 2024</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="space-y-4">
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Mi Historial de Pagos</h2>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Mes</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Monto</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Estado</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4 text-slate-900">Noviembre 2024</td>
<td className="px-5 py-4 text-slate-900">$1,850</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
<div className="w-1 h-1 rounded-full bg-amber-500"></div> Pendiente
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4 text-slate-900">Octubre 2024</td>
<td className="px-5 py-4 text-slate-900">$1,850</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> Pagado
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4 text-slate-900">Septiembre 2024</td>
<td className="px-5 py-4 text-slate-900">$1,850</td>
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> Pagado
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-4">
<h2 className="text-base font-semibold text-slate-900 tracking-tight">Mis Recibos</h2>
<div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Fecha de Emisión</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Monto</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 text-right">Descargar</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4 text-slate-900">5 Oct, 2024</td>
<td className="px-5 py-4 text-slate-500">$1,850.00</td>
<td className="px-5 py-4 text-right">
<a className="inline-flex p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-4 text-slate-900">5 Sep, 2024</td>
<td className="px-5 py-4 text-slate-500">$1,850.00</td>
<td className="px-5 py-4 text-right">
<a className="inline-flex p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
