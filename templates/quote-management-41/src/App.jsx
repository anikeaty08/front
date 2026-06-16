import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="flex-shrink-0 flex flex-col hidden md:flex bg-[#181B21] w-[250px] border-[#334155] border-r justify-between">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-[#334155]">
<span className="text-xl font-semibold tracking-tight text-[#E2E8F0]">COTIZADOR<span className="text-[#3B82F6]">PRO</span></span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-[#3B82F6] text-white rounded-md text-sm font-medium transition-colors shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Cotizaciones
                </a>
<a className="flex items-center gap-3 hover:text-[#E2E8F0] hover:bg-[#334155]/40 transition-colors text-sm font-medium text-[#94A3B8] rounded-md pt-2 pr-3 pb-2 pl-3" href="/administracion-productos">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                    Administración
                </a>
</nav>
</div>

<div className="p-4 border-t border-[#334155]">
<div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#334155]/40 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center font-semibold text-xs border border-[#3B82F6]/30">
                    AD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-[#E2E8F0] truncate">Admin Usuario</p>
<p className="text-xs text-[#94A3B8] truncate">admin@empresa.com</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-16 bg-[#0F1115] border-b border-[#334155] flex items-center justify-between px-6 flex-shrink-0">
<div className="flex items-center gap-2 text-sm text-[#94A3B8]">
<span className="hover:text-[#E2E8F0] cursor-pointer transition-colors">Inicio</span>
<span className="text-[#334155]">/</span>
<span className="text-[#E2E8F0] font-medium">Cotizaciones</span>
</div>
<button className="relative p-2 text-[#94A3B8] hover:text-[#E2E8F0] transition-colors rounded-full hover:bg-[#334155]/40 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0F1115]">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-[#3B82F6] rounded-full ring-2 ring-[#0F1115]"></span>
</button>
</header>

<main className="flex-1 overflow-y-auto p-6 flex flex-col">
<div className="max-w-7xl w-full mx-auto flex flex-col h-full">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-[#E2E8F0]">Gestor de Cotizaciones</h1>
<button className="hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0F1115] flex gap-2 text-sm font-medium text-white bg-[#3B82F6] rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='/crear-cotizaci-n'" role="button">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Crear Cotización
                    </button>
</div>

<div className="bg-[#181B21] border border-[#334155] rounded-lg p-4 mb-6 shadow-sm flex flex-col lg:flex-row gap-4">

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative group">
<select className="appearance-none w-full sm:w-44 bg-[#0F1115] border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#E2E8F0] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors cursor-pointer">
<option disabled="" hidden="" selected="" value="">Por Vendedor</option>
<option value="todos">Todos los vendedores</option>
<option value="maria">María Gómez</option>
<option value="carlos">Carlos Ruiz</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative group">
<select className="appearance-none w-full sm:w-44 bg-[#0F1115] border border-[#334155] rounded-md py-2 pl-3 pr-10 text-sm text-[#E2E8F0] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors cursor-pointer">
<option disabled="" hidden="" selected="" value="">Por Estado</option>
<option value="todos">Todos los estados</option>
<option value="revision">Por Revisar</option>
<option value="enviada">Enviada</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="relative group">
<button className="w-full sm:w-48 bg-[#0F1115] border border-[#334155] rounded-md py-2 px-3 text-sm text-[#E2E8F0] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors flex items-center justify-between" type="button">
<span className="flex items-center gap-2">
<iconify-icon className="text-[#94A3B8] text-base" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                                    Rango de fechas
                                </span>
<iconify-icon className="text-[#94A3B8] group-hover:text-[#E2E8F0] text-lg transition-colors" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#94A3B8]">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-[#0F1115] border border-[#334155] rounded-md py-2 pl-10 pr-4 text-sm text-[#E2E8F0] placeholder-[#94A3B8]/60 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-colors" placeholder="Buscar por RUC o Nombre..." type="text"/>
</div>
</div>

<div className="bg-[#181B21] border border-[#334155] rounded-lg overflow-hidden flex flex-col shadow-sm mb-6 flex-1">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="border-b border-[#334155] bg-[#0F1115]">
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[100px]">ID</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[120px]">Fecha</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase">Cliente</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[160px]">Vendedor</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[120px] text-right">Total</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[140px]">Estado</th>
<th className="px-5 py-3 text-xs font-medium tracking-wider text-[#94A3B8] uppercase w-[200px] text-right">Acciones</th>
</tr>
</thead>
<tbody className="divide-y divide-[#334155] bg-[#181B21]">

<tr className="group hover:bg-[#334155]/10 transition-colors">
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium">COT-0015</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">24 Oct, 2023</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0]">TechSolutions SAC</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">María Gómez</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium text-right">S/ 11,564.00</td>
<td className="px-5 py-3.5 text-sm">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                                            Por Revisar
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="border border-[#334155] text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#334155]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-1 focus:ring-offset-[#181B21] whitespace-nowrap">
                                            Abrir / Editar Cotización
                                        </button>
</td>
</tr>

<tr className="group hover:bg-[#334155]/10 transition-colors">
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium">COT-0014</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">24 Oct, 2023</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0]">Inversiones ABC (RUC: 20123456789)</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">Carlos Ruiz</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium text-right">S/ 4,200.50</td>
<td className="px-5 py-3.5 text-sm">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                                            Enviada
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="border border-[#334155] text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#334155]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-1 focus:ring-offset-[#181B21] whitespace-nowrap">
                                            Abrir / Editar Cotización
                                        </button>
</td>
</tr>

<tr className="group hover:bg-[#334155]/10 transition-colors">
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium">COT-0013</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">23 Oct, 2023</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0]">Logística del Norte EIRL</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">María Gómez</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium text-right">S/ 8,950.00</td>
<td className="px-5 py-3.5 text-sm">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                                            Enviada
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="border border-[#334155] text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#334155]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-1 focus:ring-offset-[#181B21] whitespace-nowrap">
                                            Abrir / Editar Cotización
                                        </button>
</td>
</tr>

<tr className="group hover:bg-[#334155]/10 transition-colors">
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium">COT-0012</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">22 Oct, 2023</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0]">Constructora Horizonte SA</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">Carlos Ruiz</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium text-right">S/ 24,100.00</td>
<td className="px-5 py-3.5 text-sm">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                                            Por Revisar
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="border border-[#334155] text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#334155]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-1 focus:ring-offset-[#181B21] whitespace-nowrap">
                                            Abrir / Editar Cotización
                                        </button>
</td>
</tr>

<tr className="group hover:bg-[#334155]/10 transition-colors">
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium">COT-0011</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">21 Oct, 2023</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0]">Estudio Jurídico Silva &amp; Asociados</td>
<td className="px-5 py-3.5 text-sm text-[#94A3B8]">María Gómez</td>
<td className="px-5 py-3.5 text-sm text-[#E2E8F0] font-medium text-right">S/ 1,250.00</td>
<td className="px-5 py-3.5 text-sm">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                                            Enviada
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="border border-[#334155] text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-[#334155]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-1 focus:ring-offset-[#181B21] whitespace-nowrap">
                                            Abrir / Editar Cotización
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-[#334155] bg-[#0F1115]/30 flex items-center justify-between">
<span className="text-xs text-[#94A3B8]">Mostrando <span className="text-[#E2E8F0] font-medium">1 a 5</span> de <span className="text-[#E2E8F0] font-medium">24</span> resultados</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-[#94A3B8] bg-[#0F1115] border border-[#334155] rounded-md hover:text-[#E2E8F0] hover:bg-[#334155]/40 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" disabled="">
                                Anterior
                            </button>
<button className="px-3 py-1.5 text-xs font-medium text-[#94A3B8] bg-[#0F1115] border border-[#334155] rounded-md hover:text-[#E2E8F0] hover:bg-[#334155]/40 transition-colors focus:outline-none">
                                Siguiente
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
